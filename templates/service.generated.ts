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

  return "import { "
    + alias4(((helper = (helper = lookupProperty(helpers,"repoName") || (depth0 != null ? lookupProperty(depth0,"repoName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"repoName","hash":{},"data":data,"loc":{"start":{"line":1,"column":9},"end":{"line":1,"column":21}}}) : helper)))
    + " } from \"@/domain/repositories/"
    + alias4(((helper = (helper = lookupProperty(helpers,"repoName") || (depth0 != null ? lookupProperty(depth0,"repoName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"repoName","hash":{},"data":data,"loc":{"start":{"line":1,"column":52},"end":{"line":1,"column":64}}}) : helper)))
    + "\"\nimport { BaseService } from \"@/domain/services/base/BaseService\"\nimport { ApiError } from \"@/errors/ApiError\"\n\nexport class "
    + alias4(((helper = (helper = lookupProperty(helpers,"serviceName") || (depth0 != null ? lookupProperty(depth0,"serviceName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":28}}}) : helper)))
    + " extends BaseService<\""
    + alias4(((helper = (helper = lookupProperty(helpers,"schemaId") || (depth0 != null ? lookupProperty(depth0,"schemaId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaId","hash":{},"data":data,"loc":{"start":{"line":5,"column":50},"end":{"line":5,"column":62}}}) : helper)))
    + "\", "
    + alias4(((helper = (helper = lookupProperty(helpers,"repoName") || (depth0 != null ? lookupProperty(depth0,"repoName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"repoName","hash":{},"data":data,"loc":{"start":{"line":5,"column":65},"end":{"line":5,"column":77}}}) : helper)))
    + "> {\n  constructor() {\n    super(new "
    + alias4(((helper = (helper = lookupProperty(helpers,"repoName") || (depth0 != null ? lookupProperty(depth0,"repoName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"repoName","hash":{},"data":data,"loc":{"start":{"line":7,"column":14},"end":{"line":7,"column":26}}}) : helper)))
    + "())\n  }\n}\n";
},"useData":true});