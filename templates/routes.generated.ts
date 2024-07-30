// @ts-nocheck
import Handlebars from "npm:handlebars";
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
export default (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "import { registerCRUDRoutes } from \"@/routes/base\"\n";
},"3":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  "
    + container.escapeExpression((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":11,"column":2},"end":{"line":11,"column":25}}}))
    + ",\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"needsAuth") : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":21,"column":4},"end":{"line":26,"column":11}}})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    const "
    + alias3((lookupProperty(helpers,"paramCase")||(depth0 && lookupProperty(depth0,"paramCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"paramCase","hash":{},"data":data,"loc":{"start":{"line":22,"column":10},"end":{"line":22,"column":33}}}))
    + " = '"
    + alias3((lookupProperty(helpers,"paramCase")||(depth0 && lookupProperty(depth0,"paramCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"paramCase","hash":{},"data":data,"loc":{"start":{"line":22,"column":37},"end":{"line":22,"column":60}}}))
    + "';\n    fastifyDeepInstance."
    + alias3(container.lambda((depth0 != null ? lookupProperty(depth0,"method") : depth0), depth0))
    + "(\"/"
    + alias3((lookupProperty(helpers,"paramCase")||(depth0 && lookupProperty(depth0,"paramCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"paramCase","hash":{},"data":data,"loc":{"start":{"line":23,"column":42},"end":{"line":23,"column":65}}}))
    + "\", { schema: "
    + alias3((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":23,"column":78},"end":{"line":23,"column":101}}}))
    + " }, async (request, reply) =>\n      "
    + alias3(((helper = (helper = lookupProperty(helpers,"controllerVar") || (depth0 != null ? lookupProperty(depth0,"controllerVar") : depth0)) != null ? helper : alias2),(typeof helper === "function" ? helper.call(alias1,{"name":"controllerVar","hash":{},"data":data,"loc":{"start":{"line":24,"column":6},"end":{"line":24,"column":23}}}) : helper)))
    + "."
    + alias3((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":24,"column":24},"end":{"line":24,"column":47}}}))
    + "(request, reply)\n    )\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    fastifyDeepInstance.register(registerCRUDRoutes, { schemaId: \""
    + alias4(((helper = (helper = lookupProperty(helpers,"schemaId") || (depth0 != null ? lookupProperty(depth0,"schemaId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaId","hash":{},"data":data,"loc":{"start":{"line":29,"column":66},"end":{"line":29,"column":78}}}) : helper)))
    + "\", controller: "
    + alias4(((helper = (helper = lookupProperty(helpers,"controllerVar") || (depth0 != null ? lookupProperty(depth0,"controllerVar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"controllerVar","hash":{},"data":data,"loc":{"start":{"line":29,"column":93},"end":{"line":29,"column":110}}}) : helper)))
    + " })\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"unless").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"needsAuth") : depth0),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":33,"column":2},"end":{"line":37,"column":13}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  fastify."
    + alias1(container.lambda((depth0 != null ? lookupProperty(depth0,"method") : depth0), depth0))
    + "(\"/"
    + alias1((lookupProperty(helpers,"paramCase")||(depth0 && lookupProperty(depth0,"paramCase"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"paramCase","hash":{},"data":data,"loc":{"start":{"line":34,"column":28},"end":{"line":34,"column":51}}}))
    + "\", { schema: "
    + alias1((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":34,"column":64},"end":{"line":34,"column":87}}}))
    + " }, async (request, reply) =>\n    "
    + alias1(((helper = (helper = lookupProperty(helpers,"controllerVar") || (depth0 != null ? lookupProperty(depth0,"controllerVar") : depth0)) != null ? helper : alias3),(typeof helper === "function" ? helper.call(alias2,{"name":"controllerVar","hash":{},"data":data,"loc":{"start":{"line":35,"column":4},"end":{"line":35,"column":21}}}) : helper)))
    + "."
    + alias1((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||alias3).call(alias2,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":35,"column":22},"end":{"line":35,"column":45}}}))
    + "(request, reply)\n  )\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "import { FastifyInstance } from \"fastify\"\n\nimport { "
    + alias4(((helper = (helper = lookupProperty(helpers,"controllerName") || (depth0 != null ? lookupProperty(depth0,"controllerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"controllerName","hash":{},"data":data,"loc":{"start":{"line":3,"column":9},"end":{"line":3,"column":27}}}) : helper)))
    + " } from \"@/controllers/"
    + alias4(((helper = (helper = lookupProperty(helpers,"controllerName") || (depth0 != null ? lookupProperty(depth0,"controllerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"controllerName","hash":{},"data":data,"loc":{"start":{"line":3,"column":50},"end":{"line":3,"column":68}}}) : helper)))
    + "\"\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"crud") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":6,"column":7}}})) != null ? stack1 : "")
    + "import { server } from \"@/server/config/fastify\"\n\nimport {\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":2},"end":{"line":12,"column":11}}})) != null ? stack1 : "")
    + "  "
    + alias4(((helper = (helper = lookupProperty(helpers,"schemaName") || (depth0 != null ? lookupProperty(depth0,"schemaName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaName","hash":{},"data":data,"loc":{"start":{"line":13,"column":2},"end":{"line":13,"column":16}}}) : helper)))
    + "\n} from \"./validation/"
    + alias4(((helper = (helper = lookupProperty(helpers,"validationMod") || (depth0 != null ? lookupProperty(depth0,"validationMod") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"validationMod","hash":{},"data":data,"loc":{"start":{"line":14,"column":21},"end":{"line":14,"column":38}}}) : helper)))
    + "\"\n\nfunction "
    + alias4(((helper = (helper = lookupProperty(helpers,"rootFunc") || (depth0 != null ? lookupProperty(depth0,"rootFunc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rootFunc","hash":{},"data":data,"loc":{"start":{"line":16,"column":9},"end":{"line":16,"column":21}}}) : helper)))
    + "(fastify: FastifyInstance, _options: any, next: Function) {\n  const "
    + alias4(((helper = (helper = lookupProperty(helpers,"controllerVar") || (depth0 != null ? lookupProperty(depth0,"controllerVar") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"controllerVar","hash":{},"data":data,"loc":{"start":{"line":17,"column":8},"end":{"line":17,"column":25}}}) : helper)))
    + " = new "
    + alias4(((helper = (helper = lookupProperty(helpers,"controllerName") || (depth0 != null ? lookupProperty(depth0,"controllerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"controllerName","hash":{},"data":data,"loc":{"start":{"line":17,"column":32},"end":{"line":17,"column":50}}}) : helper)))
    + "()\n  server.addSchema("
    + alias4(((helper = (helper = lookupProperty(helpers,"schemaName") || (depth0 != null ? lookupProperty(depth0,"schemaName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaName","hash":{},"data":data,"loc":{"start":{"line":18,"column":19},"end":{"line":18,"column":33}}}) : helper)))
    + ")\n  fastify.generateJwtAuthRoutes(fastify, (fastifyDeepInstance: FastifyInstance) => {\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":20,"column":4},"end":{"line":27,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"crud") : stack1),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":4},"end":{"line":30,"column":11}}})) != null ? stack1 : "")
    + "  })\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":32,"column":2},"end":{"line":38,"column":11}}})) != null ? stack1 : "")
    + "\n  next()\n}\n\nexport default "
    + alias4(((helper = (helper = lookupProperty(helpers,"rootFunc") || (depth0 != null ? lookupProperty(depth0,"rootFunc") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rootFunc","hash":{},"data":data,"loc":{"start":{"line":43,"column":15},"end":{"line":43,"column":27}}}) : helper)))
    + "\n";
},"useData":true});