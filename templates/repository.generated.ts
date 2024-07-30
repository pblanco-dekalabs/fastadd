// @ts-nocheck
import Handlebars from "npm:handlebars";
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
export default (Handlebars["default"] || Handlebars).template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "import { BaseRepository } from \"@/domain/repositories/base/BaseRepository\";\nimport { server } from \"@/server/config/fastify\";\n\nexport class "
    + alias4(((helper = (helper = lookupProperty(helpers,"repoName") || (depth0 != null ? lookupProperty(depth0,"repoName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"repoName","hash":{},"data":data,"loc":{"start":{"line":4,"column":13},"end":{"line":4,"column":25}}}) : helper)))
    + " extends BaseRepository<\""
    + alias4(((helper = (helper = lookupProperty(helpers,"schemaId") || (depth0 != null ? lookupProperty(depth0,"schemaId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaId","hash":{},"data":data,"loc":{"start":{"line":4,"column":50},"end":{"line":4,"column":62}}}) : helper)))
    + "\"> {\n  constructor() {\n    super(\""
    + alias4((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"schemaId") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":6,"column":11},"end":{"line":6,"column":33}}}))
    + "\", server.database);\n  }\n}\n";
},"useData":true});