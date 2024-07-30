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

  return "  "
    + alias3((lookupProperty(helpers,"pascalCase")||(depth0 && lookupProperty(depth0,"pascalCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"pascalCase","hash":{},"data":data,"loc":{"start":{"line":5,"column":2},"end":{"line":5,"column":26}}}))
    + "Request,\n  "
    + alias3((lookupProperty(helpers,"pascalCase")||(depth0 && lookupProperty(depth0,"pascalCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"pascalCase","hash":{},"data":data,"loc":{"start":{"line":6,"column":2},"end":{"line":6,"column":26}}}))
    + "Reply,"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":6,"column":32},"end":{"line":7,"column":7}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"4":function(container,depth0,helpers,partials,data) {
    return "\n";
},"6":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  async "
    + alias3((lookupProperty(helpers,"camelCase")||(depth0 && lookupProperty(depth0,"camelCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"camelCase","hash":{},"data":data,"loc":{"start":{"line":16,"column":8},"end":{"line":16,"column":31}}}))
    + "(request: "
    + alias3((lookupProperty(helpers,"pascalCase")||(depth0 && lookupProperty(depth0,"pascalCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"pascalCase","hash":{},"data":data,"loc":{"start":{"line":16,"column":41},"end":{"line":16,"column":65}}}))
    + "Request, reply: "
    + alias3((lookupProperty(helpers,"pascalCase")||(depth0 && lookupProperty(depth0,"pascalCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"name") : depth0),{"name":"pascalCase","hash":{},"data":data,"loc":{"start":{"line":16,"column":81},"end":{"line":16,"column":105}}}))
    + "Reply) {\n    throw new Error('TODO: Not implemented')\n  }\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "import { BaseController } from \"@/controllers/base/BaseController\"\nimport { "
    + alias4(((helper = (helper = lookupProperty(helpers,"serviceName") || (depth0 != null ? lookupProperty(depth0,"serviceName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data,"loc":{"start":{"line":2,"column":9},"end":{"line":2,"column":24}}}) : helper)))
    + " } from \"@/domain/services/"
    + alias4(((helper = (helper = lookupProperty(helpers,"serviceName") || (depth0 != null ? lookupProperty(depth0,"serviceName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data,"loc":{"start":{"line":2,"column":51},"end":{"line":2,"column":66}}}) : helper)))
    + "\"\nimport {\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":0},"end":{"line":8,"column":9}}})) != null ? stack1 : "")
    + "} from \"@/routes/"
    + alias4(((helper = (helper = lookupProperty(helpers,"rootMod") || (depth0 != null ? lookupProperty(depth0,"rootMod") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rootMod","hash":{},"data":data,"loc":{"start":{"line":9,"column":17},"end":{"line":9,"column":28}}}) : helper)))
    + "/validation/"
    + alias4(((helper = (helper = lookupProperty(helpers,"validationMod") || (depth0 != null ? lookupProperty(depth0,"validationMod") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"validationMod","hash":{},"data":data,"loc":{"start":{"line":9,"column":40},"end":{"line":9,"column":57}}}) : helper)))
    + "\"\n\nexport class "
    + alias4(((helper = (helper = lookupProperty(helpers,"controllerName") || (depth0 != null ? lookupProperty(depth0,"controllerName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"controllerName","hash":{},"data":data,"loc":{"start":{"line":11,"column":13},"end":{"line":11,"column":31}}}) : helper)))
    + " extends BaseController<\""
    + alias4(((helper = (helper = lookupProperty(helpers,"schemaId") || (depth0 != null ? lookupProperty(depth0,"schemaId") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"schemaId","hash":{},"data":data,"loc":{"start":{"line":11,"column":56},"end":{"line":11,"column":68}}}) : helper)))
    + "\", "
    + alias4(((helper = (helper = lookupProperty(helpers,"serviceName") || (depth0 != null ? lookupProperty(depth0,"serviceName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data,"loc":{"start":{"line":11,"column":71},"end":{"line":11,"column":86}}}) : helper)))
    + "> {\n  constructor() {\n    super(new "
    + alias4(((helper = (helper = lookupProperty(helpers,"serviceName") || (depth0 != null ? lookupProperty(depth0,"serviceName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"serviceName","hash":{},"data":data,"loc":{"start":{"line":13,"column":14},"end":{"line":13,"column":29}}}) : helper)))
    + "())\n  }\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"info") : depth0)) != null ? lookupProperty(stack1,"children") : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":15,"column":2},"end":{"line":19,"column":11}}})) != null ? stack1 : "")
    + "}\n";
},"useData":true});