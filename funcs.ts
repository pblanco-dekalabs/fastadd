import { BootInfo, RouteInfo } from "./types.ts";
import { $, c, enq } from "./util.ts";
import * as path from "https://deno.land/std@0.224.0/path/mod.ts"
import { camelCase, pascalCase, paramCase, snakeCase } from "https://deno.land/x/case@2.2.0/mod.ts";

export async function collectRouteInfo(): Promise<RouteInfo> {
  const { root, crud, shouldAdd } = await enq.prompt([
    {
      name: 'root',
      type: 'input',
      message: 'Enter the root resource name'
    },
    {
      name: 'crud',
      type: 'confirm',
      message: 'Generate CRUD endpoints?'
    },
    {
      name: 'shouldAdd',
      type: 'confirm',
      initial: true,
      message: 'Do you need additional custom routes?'
    }
  ]) as { root: string, crud: boolean, shouldAdd: boolean }
  const info: RouteInfo = {
    type: 'route',
    root,
    crud,
    children: []
  }
  while (shouldAdd) {
    const { resource, auth, next, method } = await enq.prompt([
      {
        name: 'resource',
        type: 'input',
        message: 'Enter the new resource name'
      },
      {
        name: 'auth',
        type: 'confirm',
        initial: true,
        message: 'Needs auth?'
      },
      {
        name: 'method',
        type: 'select',
        message: 'Select the resource\'s access method',
        choices: [ 'get', 'post', 'put', 'delete', 'patch', 'options', 'head' ]
      },
      {
        name: 'next',
        type: 'confirm',
        message: 'Want to add more?'
      }
    ]) as { resource: string, auth: boolean, next: boolean, method: string }
    info.children.push({
      name: resource,
      needsAuth: auth,
      method
    })
    if (!next) break
  }
  return info
}

const ROOT_DIR = path.join('apps', 'api', 'src')
const SERVICES_DIR = path.join(ROOT_DIR, 'domain', 'services')
const REPOSITORIES_DIR = path.join(ROOT_DIR, 'domain', 'repositories')
const CONTROLLERS_DIR = path.join(ROOT_DIR, 'controllers')
const ROUTES_DIR = path.join(ROOT_DIR, 'routes')

async function exists(path: string) {
  try {
    await Deno.open(path, { read: true })
    return true
  } catch (_) {
    return false
  }
}

export async function bootRoute(info: RouteInfo) {
  const rootRes = paramCase(info.root)
  $(c.gray(`Booting ${c.blue(`/api/v1/${rootRes}`)} routes...`))
  const rootMod = snakeCase(info.root)
  const rootDir = path.join(ROUTES_DIR, rootMod)
  const validationDir = path.join(rootDir, 'validation')
  const rootIndex = path.join(rootDir, 'index.ts')
  const validationMod = snakeCase(info.root)
  const validationModPath = path.join(validationDir, validationMod + '.ts')
  await Deno.mkdir(validationDir, { recursive: true })
  const controllerVar = camelCase(info.root + "Controller")
  const controllerName = pascalCase(controllerVar)
  const serviceName = pascalCase(info.root + "Service")
  const repoName = pascalCase(info.root + "Repository")
  const schemaVar = camelCase(info.root + 'Schema')
  const schemaName = pascalCase(schemaVar)
  const schemaId = pascalCase(info.root)
  const rootFunc = camelCase(info.root + 'Routes')
  const indexContent = `import { FastifyInstance } from "fastify"

import { ${controllerName} } from "@/controllers/${controllerName}"${
  info.crud ? '\nimport { registerCRUDRoutes } from "@/routes/base"' : ''
}
import { server } from "@/server/config/fastify"

import {${
  info.children.map(r => `
  ${camelCase(r.name)},`).join('')
}
  ${schemaName}
} from "./validation/${validationMod}"

function ${rootFunc}(fastify: FastifyInstance, _options: any, next: Function) {
  const ${controllerVar} = new ${controllerName}()
  server.addSchema(${schemaName})
  fastify.generateJwtAuthRoutes(fastify, (fastifyDeepInstance: FastifyInstance) => {${
    info.children.filter(c => c.needsAuth).map(r => {
      const name = paramCase(r.name)
      const methodName = camelCase(r.name)
      return `
    fastifyDeepInstance.${r.method}("/${name}", { schema: ${methodName} }, async (request, reply) =>
      ${controllerVar}.${methodName}(request, reply)
    )`
    }).join('')
  }${info.crud ? `
    fastifyDeepInstance.register(registerCRUDRoutes, { schemaId: "${schemaId}", controller: ${controllerVar} })` : ''}
  })${
    info.children.filter(c => !c.needsAuth).map(r => {
      const name = paramCase(r.name)
      const methodName = camelCase(r.name)
      return `
  fastify.${r.method}("/${name}", { schema: ${methodName} }, async (request, reply) =>
    ${controllerVar}.${methodName}(request, reply)
  )`
    }).join('')
  }

  next()
}

export default ${rootFunc}
`
  await Deno.writeTextFile(rootIndex, indexContent)
  $(c.gray(`Generating ${c.blue(`/api/v1/${rootRes}`)} base schemas...`))
  const validationContent = `import { TypedRouteReply, TypedRouteRequest } from "@/routes/types"
import { baseResponseSchema } from "@/server/config/response"

export const ${schemaName} = {
  $id: "${schemaId}",
  type: "object",
  properties: { // TODO: Populate the schema
    id: { type: "string" },
  },
  additionalProperties: false,
  required: ["id"],
} as const
${info.children.map(r => {
  const name = camelCase(r.name)
  const typeName = pascalCase(r.name)
  return `

export const ${name} = {
  operationId: "${name}",
  description: "TODO",
  tags: [],
  response: {
    200: baseResponseSchema({
      // TODO: Add the true schema
    })
  },
  security: [${r.needsAuth ? '{ bearerAuth: [] }' : ''}]
} as const

export type ${typeName}Request = TypedRouteRequest<typeof ${name}>
export type ${typeName}Reply = TypedRouteReply<typeof ${name}>`
}).join('')}
`
  await Deno.writeTextFile(validationModPath, validationContent)
  $(c.gray(`Generating ${c.blue(`/api/v1/${rootRes}`)} controller...`))
  await Deno.mkdir(CONTROLLERS_DIR, { recursive: true })
  const controllerModPath = path.join(CONTROLLERS_DIR, controllerName + '.ts')
  const controllerContent = `import { BaseController } from "@/controllers/base/BaseController"
import { ${serviceName} } from "@/domain/services/${serviceName}"
import {${
  info.children.map(r => {
    const typeName = pascalCase(r.name)
    return `
  ${typeName}Request,
  ${typeName}Reply,`
  }).join('')
}
} from "@/routes/${rootMod}/validation/${validationMod}"

export class ${controllerName} extends BaseController<"${schemaId}", ${serviceName}> {
  constructor() {
    super(new ${serviceName}())
  }
  ${info.children.map(r => {
    const name = camelCase(r.name)
    const typeName = pascalCase(r.name)
    return `
  async ${name}(request: ${typeName}Request, reply: ${typeName}Reply) {
    throw new Error('TODO: Not implemented')
  }`
  }).join('')}
}
`
  await Deno.writeTextFile(controllerModPath, controllerContent)
  $(c.gray(`Generating ${c.blue(`/api/v1/${rootRes}`)} service...`))
  await Deno.mkdir(SERVICES_DIR, { recursive: true })
  const servicePath = path.join(SERVICES_DIR, serviceName + '.ts')
  const serviceContent = `import { ${repoName} } from "@/domain/repositories/${repoName}"
import { BaseService } from "@/domain/services/base/BaseService"
import { ApiError } from "@/errors/ApiError"

export class ${serviceName} extends BaseService<"${schemaId}", ${repoName}> {
  constructor() {
    super(new ${repoName}())
  }
}  
`
  await Deno.writeTextFile(servicePath, serviceContent)
  $(c.gray(`Generating ${c.blue(`/api/v1/${rootRes}`)} repository...`))
  await Deno.mkdir(REPOSITORIES_DIR, { recursive: true })
  const repoPath = path.join(REPOSITORIES_DIR, repoName + '.ts')
  const repoContent = `import { BaseRepository } from "@/domain/repositories/base/BaseRepository"
import { server } from "@/server/config/fastify"

export class ${repoName} extends BaseRepository<"${schemaId}"> {
  constructor() {
    super("${camelCase(schemaId)}", server.database)
  }
}  
`
  await Deno.writeTextFile(repoPath, repoContent)
  $(c.gray(c.italic(`Cleaning up metadata...`)))
  await Deno.remove(`.boot.json`)
  $(c.green(`Done!`))
  await new Promise(r => setTimeout(r, 1))
  Deno.exit(0)
}

export async function bootAny(info: BootInfo) {
  switch (info.type) {
    case 'route':
      return await bootRoute(info)
    default:
      throw new Error(`Bad boot type: ${info?.type}`)
  }
}
