(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39896cec"],{"02de":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"side-container",class:{collapse:e.collapse}},[t("ul",{staticClass:"side-menu"},[t("li",{staticClass:"side-handle",on:{click:e.collapseEvent}},[t("i",{staticClass:"el-icon-arrow-left"})]),e._l(e.menu,function(e){return t("li",{key:e.fields},[t("router-link",{attrs:{to:{name:e.name}}},[t("i",{class:e.icon})])],1)}),e._m(0)],2),t("div",{staticClass:"side-content"},[t("keep-alive",{attrs:{include:"PropertiesContainer"}},[t("router-view",{attrs:{componentId:e.currentComponentId,project:e.project},on:{"update:componentId":function(n){e.currentComponentId=n},"update:component-id":function(n){e.currentComponentId=n}}})],1)],1)])},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("li",[t("a",{attrs:{href:"https://github.com/wuyaoxing/tenon",target:"blank"}},[t("i",{staticClass:"icon-github"})])])}],c=t("12eb"),r={name:"SideContainer",props:{componentId:String,project:Object},data:function(){return{menu:c["b"],collapse:!1}},computed:{currentComponentId:{get:function(){return this.componentId},set:function(e){this.$emit("update:componentId",e)}}},watch:{$route:function(){this.expandHandler()}},methods:{collapseEvent:function(){this.collapse=!this.collapse},expandHandler:function(){this.collapse=!1}}},s=r,a=(t("24a0"),t("2877")),p=Object(a["a"])(s,o,i,!1,null,null,null);n["default"]=p.exports},"12eb":function(e,n,t){"use strict";t.d(n,"b",function(){return r});var o=t("2b0e"),i=t("8c4f");o["default"].use(i["a"]);var c=function(e){return function(){return t("9dac")("./".concat(e))}},r=[{name:"tree",path:"tree",component:c("designer/layout/tree/TreeContainer"),fields:"tree",icon:"icon-tree"},{name:"components",path:"components",component:c("designer/layout/components/ComponentsContainer"),fields:"components",icon:"icon-components"},{name:"properties",path:"properties",component:c("designer/layout/properties/PropertiesContainer"),fields:"properties",icon:"icon-edit"}],s=[{name:"designer",path:"/projects/:id",redirect:{name:"components"},component:c("designer/Designer"),fields:"designer",children:r},{name:"404",path:"/404",component:c("404"),fields:404},{path:"*",redirect:"404"}];n["a"]=new i["a"]({routes:s,linkActiveClass:"active",linkExactActiveClass:"active"})},1773:function(e,n,t){},"24a0":function(e,n,t){"use strict";var o=t("1773"),i=t.n(o);i.a}}]);