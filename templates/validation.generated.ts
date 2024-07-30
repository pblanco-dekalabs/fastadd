// @ts-nocheck
import Handlebars from "npm:handlebars";
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
export default (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":14,"column":10},"end":{"line":14,"column":31}}}),{"name":"with","hash":{},"fn":container.program(2, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":14,"column":2},"end":{"line":33,"column":11}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(alias1,(lookupProperty(helpers,"pascalCase")||(depth0 && lookupProperty(depth0,"pascalCase"))||container.hooks.helperMissing).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"pascalCase","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":15,"column":10},"end":{"line":15,"column":32}}}),{"name":"with","hash":{},"fn":container.program(3, data, 1, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":15,"column":2},"end":{"line":32,"column":11}}})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\nexport const "
    + alias2(alias1(blockParams[1][0], depth0))
    + " = {\n  operationId: \""
    + alias2(alias1(blockParams[1][0], depth0))
    + "\",\n  description: \"TODO\",\n  tags: [],\n  response: {\n    200: baseResponseSchema({\n      // TODO: Add the true schema\n    })\n  },\n  security: ["
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"needsAuth") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":26,"column":13},"end":{"line":26,"column":60}}})) != null ? stack1 : "")
    + "]\n} as const\n\nexport type "
    + alias2(alias1(blockParams[0][0], depth0))
    + "Request = TypedRouteRequest<typeof "
    + alias2(alias1(blockParams[1][0], depth0))
    + ">\nexport type "
    + alias2(alias1(blockParams[0][0], depth0))
    + "Reply = TypedRouteReply<typeof "
    + alias2(alias1(blockParams[1][0], depth0))
    + ">\n\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "{ bearerAuth: [] }";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "import { TypedRouteReply, TypedRouteRequest } from \"@/routes/types\"\nimport { baseResponseSchema } from \"@/server/config/response\"\n\nexport const "
    + alias4(((helper = (helper = lookupProperty(helpers,"schemaName") || (depth0 != null ? lookupProperty(depth0,"schemaName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaName","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":4,"column":13},"end":{"line":4,"column":27}}}) : helper)))
    + " = {\n  $id: \""
    + alias4(((helper = (helper = lookupProperty(helpers,"schemaId") || (depth0 != null ? lookupProperty(depth0,"schemaId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaId","hash":{},"data":data,"blockParams":blockParams,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":20}}}) : helper)))
    + "\",\n  type: \"object\",\n  properties: { // TODO: Populate the schema\n    id: { type: \"string\" },\n  },\n  additionalProperties: false,\n  required: [\"id\"],\n} as const\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams,"loc":{"start":{"line":13,"column":0},"end":{"line":34,"column":9}}})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});