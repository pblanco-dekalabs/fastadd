import { camelCase, paramCase } from "../deps.ts";
import { RouteInfo } from "../types.ts";

type Options = {
  controllerName: string;
  info: RouteInfo;
  schemaName: string;
  validationMod: string;
  rootFunc: string;
  controllerVar: string;
  schemaId: string;
};

export const routesTemplate = (
  {
    controllerName,
    info,
    schemaName,
    validationMod,
    rootFunc,
    controllerVar,
    schemaId,
  }: Options,
) =>
  `import { FastifyInstance } from "fastify"

import { ${controllerName} } from "@/controllers/${controllerName}"${
    info.crud ? '\nimport { registerCRUDRoutes } from "@/routes/base"' : ""
  }
import { server } from "@/server/config/fastify"

import {${
    info.children.map((r) => `
  ${camelCase(r.name)},`).join("")
  }
  ${schemaName}
} from "./validation/${validationMod}"

function ${rootFunc}(fastify: FastifyInstance, _options: any, next: Function) {
  const ${controllerVar} = new ${controllerName}()
  server.addSchema(${schemaName})
  fastify.generateJwtAuthRoutes(fastify, (fastifyDeepInstance: FastifyInstance) => {${
    info.children.filter((c) => c.needsAuth).map((r) => {
      const name = paramCase(r.name);
      const methodName = camelCase(r.name);
      return `
    fastifyDeepInstance.${r.method}("/${name}", { schema: ${methodName} }, async (request, reply) =>
      ${controllerVar}.${methodName}(request, reply)
    )`;
    }).join("")
  }${
    info.crud
      ? `
    fastifyDeepInstance.register(registerCRUDRoutes, { schemaId: "${schemaId}", controller: ${controllerVar} })`
      : ""
  }
  })${
    info.children.filter((c) => !c.needsAuth).map((r) => {
      const name = paramCase(r.name);
      const methodName = camelCase(r.name);
      return `
  fastify.${r.method}("/${name}", { schema: ${methodName} }, async (request, reply) =>
    ${controllerVar}.${methodName}(request, reply)
  )`;
    }).join("")
  }

  next()
}

export default ${rootFunc}
`;
