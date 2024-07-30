// @ts-nocheck
import Handlebars from "npm:handlebars";
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
export default (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\nexport const "
    + alias3((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":15,"column":13},"end":{"line":15,"column":36}}}))
    + " = {\n  operationId: \""
    + alias3((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":39}}}))
    + "\",\n  description: \"TODO\",\n  tags: [],\n  response: {\n    200: baseResponseSchema({\n      // TODO: Add the true schema\n    })\n  },\n  security: ["
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"needsAuth") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":24,"column":13},"end":{"line":24,"column":60}}})) != null ? stack1 : "")
    + "]\n} as const\n\nexport type "
    + alias3((lookupProperty(helpers,"pascalCase")||(depth0 && lookupProperty(depth0,"pascalCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"pascalCase","hash":{},"data":data,"loc":{"start":{"line":27,"column":12},"end":{"line":27,"column":36}}}))
    + "Request = TypedRouteRequest<typeof "
    + alias3((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":27,"column":71},"end":{"line":27,"column":94}}}))
    + ">\nexport type "
    + alias3((lookupProperty(helpers,"pascalCase")||(depth0 && lookupProperty(depth0,"pascalCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"pascalCase","hash":{},"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":36}}}))
    + "Reply = TypedRouteReply<typeof "
    + alias3((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":28,"column":67},"end":{"line":28,"column":90}}}))
    + ">\n\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "{ bearerAuth: [] }";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "import { TypedRouteReply, TypedRouteRequest } from \"@/routes/types\"\nimport { baseResponseSchema } from \"@/server/config/response\"\n\nexport const "
    + alias4(((helper = (helper = lookupProperty(helpers,"schemaName") || (depth0 != null ? lookupProperty(depth0,"schemaName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaName","hash":{},"data":data,"loc":{"start":{"line":4,"column":13},"end":{"line":4,"column":27}}}) : helper)))
    + " = {\n  $id: \""
    + alias4(((helper = (helper = lookupProperty(helpers,"schemaId") || (depth0 != null ? lookupProperty(depth0,"schemaId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaId","hash":{},"data":data,"loc":{"start":{"line":5,"column":8},"end":{"line":5,"column":20}}}) : helper)))
    + "\",\n  type: \"object\",\n  properties: { // TODO: Populate the schema\n    id: { type: \"string\" },\n  },\n  additionalProperties: false,\n  required: [\"id\"],\n} as const\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":0},"end":{"line":30,"column":9}}})) != null ? stack1 : "");
},"useData":true});