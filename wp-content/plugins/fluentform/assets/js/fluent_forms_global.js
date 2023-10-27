(()=>{"use strict";var t,e={18591:()=>{function t(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n="".concat(window.fluent_forms_global_var.rest.url,"/").concat(e),o={"X-WP-Nonce":window.fluent_forms_global_var.rest.nonce};return-1!==["PUT","PATCH","DELETE"].indexOf(t.toUpperCase())&&(o["X-HTTP-Method-Override"]=t,t="POST"),i.query_timestamp=Date.now(),new Promise((function(s,r){window.jQuery.ajax({url:n,type:t,data:i,headers:o}).then((function(t){return s(t)})).fail((function(n){n.responseJSON&&"rest_cookie_invalid_nonce"==n.responseJSON.code?window.FluentFormsGlobal.$get({action:"fluentform_renew_rest_nonce"}).then((function(n){n.nonce&&(window.fluent_forms_global_var.rest.nonce=n.nonce,t=t.toLowerCase(),window.FluentFormsGlobal.$rest[t](e,i).then((function(t){s(t)})).fail((function(t){return r(t.responseJSON)})))})):r(n.responseJSON)}))}))}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function n(t,e,i){return(e=o(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t){var i=function(t,i){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,i||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"===e(i)?i:String(i)}const s=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"getForms","forms"),n(this,"storeForms",this.getForms),n(this,"getTemplates",this.getForms+"/templates"),n(this,"findForm",this.getForms+"/{param}"),n(this,"updateForm",this.findForm),n(this,"deleteForm",this.findForm),n(this,"duplicateForm",this.findForm+"/duplicate"),n(this,"convertForm",this.findForm+"/convert"),n(this,"getFormResources",this.findForm+"/resources"),n(this,"getFormPages",this.findForm+"/pages"),n(this,"getFormFields",this.findForm+"/fields"),n(this,"getFormShortcodes",this.findForm+"/shortcodes"),n(this,"findFormShortCodePage",this.findForm+"/findShortCodePage"),n(this,"getFormSettings","settings/{param}"),n(this,"storeFormSettings",this.getFormSettings),n(this,"deleteFormSettings",this.getFormSettings),n(this,"getGeneralFormSettings",this.getFormSettings+"/general"),n(this,"storeGeneralFormSettings",this.getGeneralFormSettings),n(this,"getFormSettingsCustomizer",this.getFormSettings+"/customizer"),n(this,"storeFormSettingsCustomizer",this.getFormSettingsCustomizer),n(this,"storeEntryColumns",this.getFormSettings+"/entry-columns"),n(this,"getFormSettingsConversationalDesign",this.getFormSettings+"/conversational-design"),n(this,"storeFormSettingsConversationalDesign",this.getFormSettings+"/store-conversational-design"),n(this,"getSubmissions","submissions"),n(this,"getSubmissionsResources",this.getSubmissions+"/resources"),n(this,"handleSubmissionsBulkActions",this.getSubmissions+"/bulk-actions"),n(this,"getAllSubmissions",this.getSubmissions+"/all"),n(this,"findSubmission",this.getSubmissions+"/{param}"),n(this,"deleteSubmission",this.findSubmission),n(this,"updateSubmissionStatus",this.findSubmission+"/status"),n(this,"toggleSubmissionIsFavorite",this.findSubmission+"/is-favorite"),n(this,"getSubmissionLogs",this.findSubmission+"/logs"),n(this,"deleteSubmissionLogs",this.findSubmission+"/logs"),n(this,"getSubmissionNotes",this.findSubmission+"/notes"),n(this,"storeSubmissionNote",this.findSubmission+"/notes"),n(this,"getSubmissionUsers",this.findSubmission+"/submission-users"),n(this,"updateSubmissionUser",this.findSubmission+"/update-submission-user"),n(this,"getLogs","logs"),n(this,"getLogFilters",this.getLogs+"/filters"),n(this,"deleteLogs",this.getLogs),n(this,"integrations","integrations"),n(this,"getGlobalIntegration",this.integrations),n(this,"updateGlobalIntegration",this.integrations),n(this,"updateGlobalIntegrationStatus",this.integrations+"/update-status"),n(this,"findIntegration",this.integrations+"/{param}"),n(this,"getFormIntegrationSettings",this.findIntegration),n(this,"updateFormIntegrationSettings",this.findIntegration),n(this,"deleteFormIntegration",this.findIntegration),n(this,"getIntegrations",this.findIntegration+"/form-integrations"),n(this,"getFormIntegrationList",this.findIntegration+"/integration-list-id"),n(this,"getGlobalSettings","global-settings"),n(this,"storeGlobalSettings",this.getGlobalSettings),n(this,"getRoles","roles"),n(this,"storeRoles",this.getRoles),n(this,"getManagers","managers"),n(this,"storeManager",this.getManagers),n(this,"deleteManager",this.storeManager),n(this,"analytics","analytics"),n(this,"getFormAnalytics",this.analytics+"/{param}"),n(this,"resetFormAnalytics",this.analytics+"/{param}/reset/"),n(this,"report","report"),n(this,"formsReport",this.report+"/forms"),n(this,"formReport",this.formsReport+"/{param}"),n(this,"submissionsReport",this.report+"/submissions"),n(this,"noticeAction","notice")}var e,o,s;return e=t,o=[{key:"get",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o=this[t];if(!o)throw"".concat(t,":Route Not Found");var s=0;return o.replace(/{param}/g,(function(){var t=i[s];return s++,t}))}}],o&&i(e.prototype,o),s&&i(e,s),Object.defineProperty(e,"prototype",{writable:!1}),t}()),r={get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return window.FluentFormsGlobal.request("GET",t,e)},post:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return window.FluentFormsGlobal.request("POST",t,e)},delete:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return window.FluentFormsGlobal.request("DELETE",t,e)},put:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return window.FluentFormsGlobal.request("PUT",t,e)},patch:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return window.FluentFormsGlobal.request("PATCH",t,e)},route:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];return s.get.apply(s,[t].concat(i))}};function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,g(n.key),n)}}function l(t,e,i){return(e=g(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function g(t){var e=function(t,e){if("object"!==a(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===a(e)?e:String(e)}jQuery((function(t){t.ajaxSetup({success:function(t,e,i){var n=i.getResponseHeader("X-WP-Nonce");n&&(window.fluent_forms_global_var.rest.nonce=n)}})})),setInterval((function(){FluentFormsGlobal.$rest.get("forms/ping")}),6e4),function(e){var i=function(){function i(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),l(this,"request",t),l(this,"$rest",r),this.fluent_forms_global_var=window.fluent_forms_global_var,this.url=fluent_forms_global_var.ajaxurl,e.ajaxSetup({data:{fluent_forms_admin_nonce:this.fluent_forms_global_var.fluent_forms_admin_nonce}})}var n,o,s;return n=i,o=[{key:"$get",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i=i||this.url,e.get(i,t)}},{key:"$post",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return i=i||this.url,e.post(i,t)}}],o&&u(n.prototype,o),s&&u(n,s),Object.defineProperty(n,"prototype",{writable:!1}),i}();window.FluentFormsGlobal=new i}(jQuery)},17198:()=>{},59001:()=>{},65296:()=>{},21251:()=>{},41906:()=>{},76947:()=>{},49280:()=>{},96319:()=>{},54982:()=>{},46389:()=>{},74893:()=>{},34781:()=>{},18772:()=>{},91899:()=>{},42489:()=>{}},i={};function n(t){var o=i[t];if(void 0!==o)return o.exports;var s=i[t]={exports:{}};return e[t](s,s.exports,n),s.exports}n.m=e,t=[],n.O=(e,i,o,s)=>{if(!i){var r=1/0;for(g=0;g<t.length;g++){for(var[i,o,s]=t[g],a=!0,u=0;u<i.length;u++)(!1&s||r>=s)&&Object.keys(n.O).every((t=>n.O[t](i[u])))?i.splice(u--,1):(a=!1,s<r&&(r=s));if(a){t.splice(g--,1);var l=o();void 0!==l&&(e=l)}}return e}s=s||0;for(var g=t.length;g>0&&t[g-1][2]>s;g--)t[g]=t[g-1];t[g]=[i,o,s]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={305:0,371:0,829:0,323:0,221:0,562:0,985:0,438:0,610:0,982:0,812:0,330:0,710:0,379:0,329:0,439:0};n.O.j=e=>0===t[e];var e=(e,i)=>{var o,s,[r,a,u]=i,l=0;if(r.some((e=>0!==t[e]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var g=u(n)}for(e&&e(i);l<r.length;l++)s=r[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(g)},i=self.webpackChunk=self.webpackChunk||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})(),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(18591))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(34781))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(18772))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(91899))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(42489))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(17198))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(59001))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(65296))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(21251))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(41906))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(76947))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(49280))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(96319))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(54982))),n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(46389)));var o=n.O(void 0,[371,829,323,221,562,985,438,610,982,812,330,710,379,329,439],(()=>n(74893)));o=n.O(o)})();