(window.webpackJsonp=window.webpackJsonp||[]).push([[71,6,9,11,44],{404:function(t,e,n){var c=n(18),r="["+n(405)+"]",o=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),l=function(t){return function(e){var n=String(c(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},405:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},406:function(t,e,n){"use strict";n.r(e);var c={props:{classes:String}},r=n(6),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(406).default})},407:function(t,e,n){"use strict";var c=n(10),r=n(4),o=n(82),d=n(14),l=n(12),v=n(36),f=n(163),m=n(60),h=n(5),_=n(62),C=n(61).f,y=n(26).f,x=n(13).f,w=n(404).trim,S="Number",T=r.Number,E=T.prototype,N=v(_(E))==S,A=function(t){var e,n,c,r,o,d,l,code,v=m(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=w(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:c=2,r=49;break;case 79:case 111:c=8,r=55;break;default:return+v}for(d=(o=v.slice(2)).length,l=0;l<d;l++)if((code=o.charCodeAt(l))<48||code>r)return NaN;return parseInt(o,c)}return+v};if(o(S,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var O,I=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof I&&(N?h((function(){E.valueOf.call(n)})):v(n)!=S)?f(new T(A(e)),n,I):A(e)},W=c?C(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;W.length>D;D++)l(T,O=W[D])&&!l(I,O)&&x(I,O,y(T,O));I.prototype=E,E.constructor=I,d(r,S,I)}},408:function(t,e,n){"use strict";n.r(e);n(40),n(407),n(22),n(39),n(63),n(114),n(37),n(38),n(164),n(47),n(162),n(83),n(48);var c={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},r=n(6),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){n(410)},410:function(t,e,n){"use strict";var c=n(2),r=n(18),o=n(84),d=n(85),l=n(165),v=n(3),f=n(23),m=v("replace"),h=RegExp.prototype,_=Math.max,C=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};c({target:"String",proto:!0},{replaceAll:function(t,e){var n,c,v,y,x,w,S,T,E=r(this),N=0,A=0,O="";if(null!=t){if((n=o(t))&&!~String(r("flags"in h?t.flags:d.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(c=t[m]))return c.call(t,E,e);if(f&&n)return String(E).replace(t,e)}for(v=String(E),y=String(t),(x="function"==typeof e)||(e=String(e)),w=y.length,S=_(1,w),N=C(v,y,0);-1!==N;)T=x?String(e(y,N,v)):l(y,v,N,[],void 0,e),O+=v.slice(A,N)+T,A=N+w,N=C(v,y,N+S);return A<v.length&&(O+=v.slice(A)),O}})},411:function(t,e,n){"use strict";var c=n(2),r=n(404).trim;c({target:"String",proto:!0,forced:n(412)("trim")},{trim:function(){return r(this)}})},412:function(t,e,n){var c=n(5),r=n(405);t.exports=function(t){return c((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},413:function(t,e,n){"use strict";n.r(e);n(409),n(411),n(114);var c={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var c,r=new Array(1+n++).join("  "),o=new Array(n-1).join("  "),i=0;i<e.children.length;i++)c=document.createTextNode("\n"+r),e.insertBefore(c,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(c=document.createTextNode("\n"+o),e.appendChild(c));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},r=n(6),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(408).default})},414:function(t,e,n){"use strict";n.r(e);var c={props:["data"]},r=n(6),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"mt-6 overflow-x-auto"},[n("table",{staticClass:"table w-full table-compact"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,c){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-success"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,c){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-info"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"mt-6 text-xl font-bold"},[t._v("Examples")]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hidden mt-2 mb-10 text-center xl:block"},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"728px",height:"90px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"1141251424"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2 mb-10 text-center xl:hidden"},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"300px",height:"100px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"6427020085"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])}],!1,null,null,null);e.default=component.exports},478:function(t,e,n){"use strict";n.r(e);var c={head:function(){return{title:"daisyUI — Tailwind CSS indicator component",meta:[{hid:"description",name:"description",content:"Tailwind CSS notification indicator component - Tailwind CSS notification indicator examples"}]}}},r=n(6),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"indicator",desc:"Container element"},{class:"indicator-item",desc:"will be placed on the corner of sibiling"}],utilities:[{class:"indicator-start",desc:"align horizontally to the left"},{class:"indicator-center",desc:"align horizontally to the center"},{class:"indicator-end",desc:"align horizontally to the right (default)"},{class:"indicator-top",desc:"align vertically to top (default)"},{class:"indicator-middle",desc:"align vertically to middle"},{class:"indicator-bottom",desc:"align vertically to bottom"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"an empty badge as indicator",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item badge badge-secondary"}),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"a badge as indicator",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item badge badge-primary"},[t._v("new")]),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"a badge as indicator for tab",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"my-6 tabs"},[n("a",{staticClass:"tab tab-lifted"},[t._v("Messages")]),t._v(" "),n("a",{staticClass:"indicator tab tab-lifted tab-active"},[t._v("\n        Notifications "),n("div",{staticClass:"indicator-item badge"},[t._v("8")])]),t._v(" "),n("a",{staticClass:"tab tab-lifted"},[t._v("Requests")])])]),t._v(" "),n("Wrapper",{attrs:{title:"a badge as indicator for button",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"my-6 indicator"},[n("div",{staticClass:"indicator-item badge"},[t._v("99+")]),t._v(" "),n("button",{staticClass:"btn btn-primary"},[t._v("inbox")])])]),t._v(" "),n("Wrapper",{attrs:{title:"a badge as indicator for image (canter and middle)",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"indicator"},[n("div",{staticClass:"indicator-item indicator-center indicator-middle badge"},[t._v("Text Here")]),t._v(" "),n("img",{attrs:{src:"https://picsum.photos/id/1005/400/200"}})])]),t._v(" "),n("Wrapper",{attrs:{title:"a badge as indicator for avatar",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"my-6 avatar indicator"},[n("div",{staticClass:"indicator-item badge"},[t._v("typing…")]),t._v(" "),n("div",{staticClass:"w-24 h-24 rounded-btn"},[n("img",{attrs:{src:"http://daisyui.com/tailwind-css-component-profile-1@94w.png"}})])])]),t._v(" "),n("Wrapper",{attrs:{title:"a button as indicator for card",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"my-6 indicator"},[n("div",{staticClass:"indicator-item indicator-bottom"},[n("button",{staticClass:"btn btn-primary"},[t._v("Apply")])]),t._v(" "),n("div",{staticClass:"border card"},[n("div",{staticClass:"card-body"},[n("h2",{staticClass:"card-title"},[t._v("Job Title")]),t._v(" "),n("p",[t._v("Rerum reiciendis beatae tenetur excepturi")])])])])]),t._v(" "),n("Wrapper",{attrs:{title:"a badge as indicator for input",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"my-6 indicator"},[n("div",{staticClass:"indicator-item badge"},[t._v("Available")]),t._v(" "),n("input",{staticClass:"input input-bordered",attrs:{type:"text",placeholder:"Pick username"}})])]),t._v(" "),n("Wrapper",{attrs:{title:"indicator indicator-start",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item indicator-start badge badge-secondary"}),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"indicator indicator-center",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item indicator-center badge badge-secondary"}),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"indicator [indicator-end is default]",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item badge badge-secondary"}),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"indicator indicator-middle indicator-start",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item indicator-middle indicator-start badge badge-secondary"}),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"indicator indicator-middle indicator-center",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item indicator-middle indicator-center badge badge-secondary"}),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"indicator indicator-middle [indicator-end is default]",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item indicator-middle badge badge-secondary"}),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"indicator indicator-bottom indicator-start",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item indicator-bottom indicator-start badge badge-secondary"}),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"indicator indicator-bottom indicator-center",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item indicator-bottom indicator-center badge badge-secondary"}),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"indicator indicator-bottom [indicator-end is default]",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item indicator-bottom badge badge-secondary"}),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])]),t._v(" "),n("Wrapper",{attrs:{title:"multiple indicators",classes:"flex flex-col space-y-2"}},[n("div",{staticClass:"m-6 indicator"},[n("div",{staticClass:"indicator-item indicator-top indicator-start badge badge-secondary"},[t._v("1")]),t._v(" "),n("div",{staticClass:"indicator-item indicator-top indicator-center badge badge-secondary"},[t._v("2")]),t._v(" "),n("div",{staticClass:"indicator-item indicator-top indicator-end badge badge-secondary"},[t._v("3")]),t._v(" "),n("div",{staticClass:"indicator-item indicator-middle indicator-start badge badge-secondary"},[t._v("4")]),t._v(" "),n("div",{staticClass:"indicator-item indicator-middle indicator-center badge badge-secondary"},[t._v("5")]),t._v(" "),n("div",{staticClass:"indicator-item indicator-middle indicator-end badge badge-secondary"},[t._v("6")]),t._v(" "),n("div",{staticClass:"indicator-item indicator-bottom indicator-start badge badge-secondary"},[t._v("7")]),t._v(" "),n("div",{staticClass:"indicator-item indicator-bottom indicator-center badge badge-secondary"},[t._v("8")]),t._v(" "),n("div",{staticClass:"indicator-item indicator-bottom indicator-end badge badge-secondary"},[t._v("9")]),t._v(" "),n("div",{staticClass:"grid w-32 h-32 bg-base-300 place-items-center"},[t._v("content")])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(414).default,Wrapper:n(413).default,Button:n(406).default,Input:n(86).default})}}]);