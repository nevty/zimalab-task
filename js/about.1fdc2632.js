(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{5713:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{staticClass:"pl-1",attrs:{text:"",ripple:!1,color:"primary",to:"/"}},[a("v-icon",{staticClass:"mr-3"},[t._v(t._s(t.svgArrowBack))]),t._v(" All jobs ")],1),t.isFetching?a("v-card",{staticClass:"pa-5",attrs:{tile:""}},[a("v-skeleton-loader",{attrs:{type:"article"}})],1):a("v-card",{staticClass:"pa-5",attrs:{tile:""}},[a("span",{staticClass:"text-overline"},[t._v(t._s(t.singleJob.type)+" / "+t._s(t.singleJob.location))]),a("v-card-title",{staticClass:"headline font-weight-medium pa-0 pt-2 pb-3"},[t._v(" "+t._s(t.singleJob.title)+" ")]),a("v-divider",{staticClass:"mb-2"}),a("v-container",{staticClass:"pa-0"},[a("v-row",{attrs:{justify:"end"}},[a("v-col",{attrs:{"order-md":"2",cols:"12",md:"3"}},[a("a",{attrs:{target:"_blank",href:t.singleJob.company_url}},[t._v(" "+t._s(t.singleJob.company_url)+" "),a("v-img",{staticClass:"elevation-1 mb-6",attrs:{"max-height":"320",src:t.singleJob.company_logo}})],1),a("div",{staticClass:"elevation-1"},[a("div",{staticClass:"text-subtitle-1 pt-1 pl-3 pr-3"},[t._v("How to apply")]),a("v-divider",{staticClass:"mb-2"}),a("div",{staticClass:"pl-3 pr-3 pb-1",domProps:{innerHTML:t._s(t.singleJob.how_to_apply)}})],1)]),a("v-col",{attrs:{"order-md":"1",cols:"12",md:"9"}},[a("div",{domProps:{innerHTML:t._s(t.singleJob.description)}})])],1)],1)],1)],1)},i=[],r=(a("96cf"),a("1da1")),n=a("5530"),o=a("2f62"),c=a("94ed"),l={name:"JobPage",data:function(){return{svgArrowBack:c["a"]}},props:["id"],computed:Object(o["c"])(["singleJob","isFetching"]),methods:Object(n["a"])({},Object(o["b"])(["fetchJob"])),mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.fetchJob(t.id);case 1:case"end":return e.stop()}}),e)})))()}},d=l,v=a("2877"),p=a("6544"),b=a.n(p),u=a("8336"),m=a("b0af"),_=a("99d9"),h=a("62ad"),f=a("a523"),g=(a("8ce9"),a("7560")),C=g["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(n["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(n["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}}),w=a("132d"),J=a("adda"),j=a("0fd9"),O=a("3129"),V=Object(v["a"])(d,s,i,!1,null,null,null);e["default"]=V.exports;b()(V,{VBtn:u["a"],VCard:m["a"],VCardTitle:_["a"],VCol:h["a"],VContainer:f["a"],VDivider:C,VIcon:w["a"],VImg:J["a"],VRow:j["a"],VSkeletonLoader:O["a"]})},"8ce9":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var s=a("b0af"),i=a("80d2"),r=Object(i["e"])("v-card__actions"),n=Object(i["e"])("v-card__subtitle"),o=Object(i["e"])("v-card__text"),c=Object(i["e"])("v-card__title");s["a"]}}]);
//# sourceMappingURL=about.1fdc2632.js.map