(window.webpackJsonp=window.webpackJsonp||[]).push([[87,6,9,11,44],{404:function(t,e,n){var o=n(18),l="["+n(405)+"]",r=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},405:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},406:function(t,e,n){"use strict";n.r(e);var o={props:{classes:String}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(406).default})},407:function(t,e,n){"use strict";var o=n(10),l=n(4),r=n(82),c=n(14),d=n(12),v=n(36),h=n(163),_=n(60),f=n(5),m=n(62),y=n(61).f,C=n(26).f,w=n(13).f,S=n(404).trim,x="Number",T=l.Number,j=T.prototype,k=v(m(j))==x,E=function(t){var e,n,o,l,r,c,d,code,v=_(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=S(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:o=2,l=49;break;case 79:case 111:o=8,l=55;break;default:return+v}for(c=(r=v.slice(2)).length,d=0;d<c;d++)if((code=r.charCodeAt(d))<48||code>l)return NaN;return parseInt(r,o)}return+v};if(r(x,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var I,D=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof D&&(k?f((function(){j.valueOf.call(n)})):v(n)!=x)?h(new T(E(e)),n,D):E(e)},A=o?y(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),N=0;A.length>N;N++)d(T,I=A[N])&&!d(D,I)&&w(D,I,C(T,I));D.prototype=j,j.constructor=D,c(l,x,D)}},408:function(t,e,n){"use strict";n.r(e);n(40),n(407),n(22),n(39),n(63),n(114),n(37),n(38),n(164),n(47),n(162),n(83),n(48);var o={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){n(410)},410:function(t,e,n){"use strict";var o=n(2),l=n(18),r=n(84),c=n(85),d=n(165),v=n(3),h=n(23),_=v("replace"),f=RegExp.prototype,m=Math.max,y=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};o({target:"String",proto:!0},{replaceAll:function(t,e){var n,o,v,C,w,S,x,T,j=l(this),k=0,E=0,I="";if(null!=t){if((n=r(t))&&!~String(l("flags"in f?t.flags:c.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(o=t[_]))return o.call(t,j,e);if(h&&n)return String(j).replace(t,e)}for(v=String(j),C=String(t),(w="function"==typeof e)||(e=String(e)),S=C.length,x=m(1,S),k=y(v,C,0);-1!==k;)T=w?String(e(C,k,v)):d(C,v,k,[],void 0,e),I+=v.slice(E,k)+T,E=k+S,k=y(v,C,k+x);return E<v.length&&(I+=v.slice(E)),I}})},411:function(t,e,n){"use strict";var o=n(2),l=n(404).trim;o({target:"String",proto:!0,forced:n(412)("trim")},{trim:function(){return l(this)}})},412:function(t,e,n){var o=n(5),l=n(405);t.exports=function(t){return o((function(){return!!l[t]()||"​᠎"!="​᠎"[t]()||l[t].name!==t}))}},413:function(t,e,n){"use strict";n.r(e);n(409),n(411),n(114);var o={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var o,l=new Array(1+n++).join("  "),r=new Array(n-1).join("  "),i=0;i<e.children.length;i++)o=document.createTextNode("\n"+l),e.insertBefore(o,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(o=document.createTextNode("\n"+r),e.appendChild(o));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(408).default})},414:function(t,e,n){"use strict";n.r(e);var o={props:["data"]},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"mt-6 overflow-x-auto"},[n("table",{staticClass:"table w-full table-compact"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-success"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,o){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-info"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"mt-6 text-xl font-bold"},[t._v("Examples")]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hidden mt-2 mb-10 text-center xl:block"},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"728px",height:"90px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"1141251424"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2 mb-10 text-center xl:hidden"},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"300px",height:"100px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"6427020085"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])}],!1,null,null,null);e.default=component.exports},491:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{tableData:[{id:1,name:"Cy Ganderton",location:"Canada",job:"Quality Control Specialist",company:"Littel, Schaden and Vandervort",date:"12/16/2020",color:"Blue"},{id:2,name:"Hart Hagerty",location:"United States",job:"Desktop Support Technician",company:"Zemlak, Daniel and Leannon",date:"12/5/2020",color:"Purple"},{id:3,name:"Brice Swyre",location:"China",job:"Tax Accountant",company:"Carroll Group",date:"8/15/2020",color:"Red"},{id:4,name:"Marjy Ferencz",location:"Russia",job:"Office Assistant I",company:"Rowe-Schoen",date:"3/25/2021",color:"Crimson"},{id:5,name:"Yancy Tear",location:"Brazil",job:"Community Outreach Specialist",company:"Wyman-Ledner",date:"5/22/2020",color:"Indigo"},{id:6,name:"Irma Vasilik",location:"Venezuela",job:"Editor",company:"Wiza, Bins and Emard",date:"12/8/2020",color:"Purple"},{id:7,name:"Meghann Durtnal",location:"Philippines",job:"Staff Accountant IV",company:"Schuster-Schimmel",date:"2/17/2021",color:"Yellow"},{id:8,name:"Sammy Seston",location:"Indonesia",job:"Accountant I",company:"O'Hara, Welch and Keebler",date:"5/23/2020",color:"Crimson"},{id:9,name:"Lesya Tinham",location:"Philippines",job:"Safety Technician IV",company:"Turner-Kuhlman",date:"2/21/2021",color:"Maroon"},{id:10,name:"Zaneta Tewkesbury",location:"Chad",job:"VP Marketing",company:"Sauer LLC",date:"6/23/2020",color:"Green"},{id:11,name:"Andy Tipple",location:"Poland",job:"Librarian",company:"Hilpert Group",date:"7/9/2020",color:"Indigo"},{id:12,name:"Sophi Biles",location:"Indonesia",job:"Recruiting Manager",company:"Gutmann Inc",date:"2/12/2021",color:"Maroon"},{id:13,name:"Florida Garces",location:"Poland",job:"Web Developer IV",company:"Gaylord, Pacocha and Baumbach",date:"5/31/2020",color:"Purple"},{id:14,name:"Maribeth Popping",location:"Portugal",job:"Analyst Programmer",company:"Deckow-Pouros",date:"4/27/2021",color:"Aquamarine"},{id:15,name:"Moritz Dryburgh",location:"Sri Lanka",job:"Dental Hygienist",company:"Schiller, Cole and Hackett",date:"8/8/2020",color:"Crimson"},{id:16,name:"Reid Semiras",location:"Poland",job:"Teacher",company:"Sporer, Sipes and Rogahn",date:"7/30/2020",color:"Green"},{id:17,name:"Alec Lethby",location:"China",job:"Teacher",company:"Reichel, Glover and Hamill",date:"2/28/2021",color:"Khaki"},{id:18,name:"Aland Wilber",location:"Czech Republic",job:"Quality Control Specialist",company:"Kshlerin, Rogahn and Swaniawski",date:"9/29/2020",color:"Purple"},{id:19,name:"Teddie Duerden",location:"France",job:"Staff Accountant III",company:"Pouros, Ullrich and Windler",date:"10/27/2020",color:"Aquamarine"},{id:20,name:"Lorelei Blackstone",location:"Kazakhstan",job:"Data Coordiator",company:"Witting, Kutch and Greenfelder",date:"6/3/2020",color:"Red"}]}},head:function(){return{title:"daisyUI — Tailwind CSS table component",meta:[{hid:"description",name:"description",content:"Tailwind CSS table component - Tailwind CSS table examples"}]}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"table",desc:"For <table> element"}],utilities:[{class:"table-zebra",desc:"For the active tab"},{class:"table-compact",desc:"Make table more compact"},{class:"active",desc:"For <tr> to highlight current row"},{class:"hover",desc:"For <tr> to highlight current row on hover"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"table"}},[n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table w-full"},[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("Favorite Color")])])]),t._v(" "),n("tbody",t._l(t.tableData.slice(0,4),(function(e,o){return n("tr",{key:"item-"+o},[n("th",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.job))]),t._v(" "),n("td",[t._v(t._s(e.color))])])})),0)])])]),t._v(" "),n("Wrapper",{attrs:{title:"table with active row"}},[n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table w-full"},[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("Favorite Color")])])]),t._v(" "),n("tbody",t._l(t.tableData.slice(4,8),(function(e,o){return n("tr",{key:"item-"+o,class:{active:2==o}},[n("th",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.job))]),t._v(" "),n("td",[t._v(t._s(e.color))])])})),0)])])]),t._v(" "),n("Wrapper",{attrs:{title:"table with hover row"}},[n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table w-full"},[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("Favorite Color")])])]),t._v(" "),n("tbody",t._l(t.tableData.slice(4,8),(function(e,o){return n("tr",{key:"item-"+o,class:{hover:2==o}},[n("th",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.job))]),t._v(" "),n("td",[t._v(t._s(e.color))])])})),0)])])]),t._v(" "),n("Wrapper",{attrs:{title:"table-zebra"}},[n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table w-full table-zebra"},[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("Favorite Color")])])]),t._v(" "),n("tbody",t._l(t.tableData.slice(8,12),(function(e,o){return n("tr",{key:"item-"+o},[n("th",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.job))]),t._v(" "),n("td",[t._v(t._s(e.color))])])})),0)])])]),t._v(" "),n("Wrapper",{attrs:{title:"table with visual elements"}},[n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table w-full"},[n("thead",[n("tr",[n("th",[n("label",[n("input",{staticClass:"checkbox",attrs:{type:"checkbox"}})])]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("Favorite Color")]),t._v(" "),n("th")])]),t._v(" "),n("tbody",t._l(t.tableData.slice(1,5),(function(e,o){return n("tr",{key:"item-"+o},[n("th",[n("label",[n("input",{staticClass:"checkbox",attrs:{type:"checkbox"}})])]),t._v(" "),n("td",[n("div",{staticClass:"flex items-center space-x-3"},[n("div",{staticClass:"avatar"},[n("div",{staticClass:"w-12 h-12 mask mask-squircle"},[n("img",{attrs:{src:"/tailwind-css-component-profile-"+e.id+"@56w.png",alt:"Avatar Tailwind CSS Component"}})])]),t._v(" "),n("div",[n("div",{staticClass:"font-bold"},[t._v("\n                    "+t._s(e.name)+"\n                  ")]),t._v(" "),n("div",{staticClass:"text-sm opacity-50"},[t._v("\n                    "+t._s(e.location)+"\n                  ")])])])]),t._v(" "),n("td",[t._v("\n            "+t._s(e.company)+"\n            "),n("br"),t._v(" "),n("span",{staticClass:"badge badge-outline badge-sm"},[t._v(t._s(e.job))])]),t._v(" "),n("td",[t._v(t._s(e.color))]),t._v(" "),n("th",[n("button",{staticClass:"btn btn-ghost btn-xs"},[t._v("details")])])])})),0),t._v(" "),n("tfoot",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("Favorite Color")]),t._v(" "),n("th")])])])])]),t._v(" "),n("Wrapper",{attrs:{title:"table-compact"}},[n("div",{staticClass:"overflow-x-auto"},[n("table",{staticClass:"table w-full table-compact"},[n("thead",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("company")]),t._v(" "),n("th",[t._v("location")]),t._v(" "),n("th",[t._v("Last Login")]),t._v(" "),n("th",[t._v("Favorite Color")])])]),t._v(" "),n("tbody",t._l(t.tableData.slice(0,20),(function(e,o){return n("tr",{key:"item-"+o},[n("th",[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.job))]),t._v(" "),n("td",[t._v(t._s(e.company))]),t._v(" "),n("td",[t._v(t._s(e.location))]),t._v(" "),n("td",[t._v(t._s(e.date))]),t._v(" "),n("td",[t._v(t._s(e.color))])])})),0),t._v(" "),n("tfoot",[n("tr",[n("th"),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Job")]),t._v(" "),n("th",[t._v("company")]),t._v(" "),n("th",[t._v("location")]),t._v(" "),n("th",[t._v("Last Login")]),t._v(" "),n("th",[t._v("Favorite Color")])])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(414).default,Wrapper:n(413).default,Input:n(86).default,Button:n(406).default})}}]);