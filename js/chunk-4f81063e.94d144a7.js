(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f81063e","chunk-2d21e91e"],{"949a":function(e,n,t){"use strict";var a=t("951e"),c=t.n(a);c.a},"951e":function(e,n,t){},d5b9:function(e,n,t){"use strict";t.r(n),n["default"]={props:{schema:Object,data:Object},inject:["asyncLoadComponent"],methods:{change:function(e,n){this.$emit("change",e,n)}}}},de24:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"border-panel"},[t("ul",{staticClass:"f f-fw-w"},e._l(e.schema.properties,function(n,a){return t("li",{key:a,class:{"w-percent-50":"cssunit"===n.format}},[t(e.asyncLoadComponent(n.format),{tag:"component",attrs:{title:e.$i18n("designer.properties."+a),schema:n,value:e.data[a]},on:{change:function(n){return e.change(a,n)}}})],1)}),0)])},c=[],s=t("d5b9"),o={name:"BorderPanel",mixins:[s["default"]]},r=o,i=(t("949a"),t("2877")),u=Object(i["a"])(r,a,c,!1,null,null,null);n["default"]=u.exports}}]);