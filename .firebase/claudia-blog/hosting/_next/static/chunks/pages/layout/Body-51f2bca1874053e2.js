(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return h}});var n=r(3636),o=r(5697),a=r.n(o),s=r(7294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){f(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function p(e){var t;return(t=e-0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)}var d=["style"],m=!1;try{m=!0}catch(y){}function _(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}var h=s.forwardRef(function(e,t){var r,o,a,s,i,c,b,p,d,y,g,O,j,w,k,N,P,A,I,C=e.icon,S=e.mask,E=e.symbol,z=e.className,H=e.title,L=e.titleId,D=e.maskId,F=_(C),T=v("classes",[].concat(u((o=e.beat,a=e.fade,s=e.beatFade,i=e.bounce,c=e.shake,b=e.flash,p=e.spin,d=e.spinPulse,y=e.spinReverse,g=e.pulse,O=e.fixedWidth,j=e.inverse,w=e.border,k=e.listItem,N=e.flip,P=e.size,A=e.rotation,I=e.pull,Object.keys((f(r={"fa-beat":o,"fa-fade":a,"fa-beat-fade":s,"fa-bounce":i,"fa-shake":c,"fa-flash":b,"fa-spin":p,"fa-spin-reverse":y,"fa-spin-pulse":d,"fa-pulse":g,"fa-fw":O,"fa-inverse":j,"fa-border":w,"fa-li":k,"fa-flip":!0===N,"fa-flip-horizontal":"horizontal"===N||"both"===N,"fa-flip-vertical":"vertical"===N||"both"===N},"fa-".concat(P),null!=P),f(r,"fa-rotate-".concat(A),null!=A&&0!==A),f(r,"fa-pull-".concat(I),null!=I),f(r,"fa-swap-opacity",e.swapOpacity),r)).map(function(e){return r[e]?e:null}).filter(function(e){return e}))),u(z.split(" ")))),G=v("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),R=v("mask",_(S)),Q=(0,n.qv)(F,l(l(l(l({},T),G),R),{},{symbol:E,title:H,titleId:L,maskId:D}));if(!Q)return!function(){if(!m&&console&&"function"==typeof console.error){var e;(e=console).error.apply(e,arguments)}}("Could not find icon",F),null;var W=Q.abstract,X={ref:t};return Object.keys(e).forEach(function(t){h.defaultProps.hasOwnProperty(t)||(X[t]=e[t])}),x(W[0],X)});h.displayName="FontAwesomeIcon",h.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},h.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var x=(function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map(function(r){return e(t,r)}),a=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),o=p(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o).charAt(0).toUpperCase()+r.slice(1)]=a:e[o]=a,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[p(t)]=n}return e},{attrs:{}}),s=n.style,i=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,d);return a.attrs.style=l(l({},a.attrs.style),void 0===s?{}:s),t.apply(void 0,[r.tag,l(l({},a.attrs),i)].concat(u(o)))}).bind(null,s.createElement)},8327:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layout/Body",function(){return r(2883)}])},9809:function(e,t,r){"use strict";r.r(t);var n=r(5893);let o=()=>(0,n.jsx)("div",{});t.default=o},3559:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(1163);let a=e=>{let{children:t,href:r,className:a}=e,s=(0,o.useRouter)(),i=e=>{e.preventDefault(),s.push(r)};return(0,n.jsx)("a",{className:a,href:r,onClick:i,children:t})};t.default=a},9597:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(7294),a=r(7814),s=r(9417),i=r(3559),l=r(2068),c=r.n(l),f=r(4591);let u=e=>{let{visible:t,onClose:r}=e,{languageState:l}=(0,f.Z)(),u=(0,o.useMemo)(()=>l.texts.Navbar,[l]),b=(0,o.useCallback)(()=>{window.innerWidth>800&&r()},[r]);return(0,o.useEffect)(()=>(window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}),[b]),(0,n.jsx)("div",{className:"".concat(c().container," ").concat(t?"":c().off),children:(0,n.jsxs)("div",{className:"".concat(c().drawer," ").concat(t?"":c().close),children:[(0,n.jsx)("button",{onClick:r,className:c().button,children:(0,n.jsx)(a.G,{icon:s.NBC})}),u.Links.map(e=>(0,n.jsx)(i.default,{className:c().link,href:e.href,children:e.label},e.label))]})})};t.default=u},9543:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(7294),a=r(1163),s=r(3559),i=r(7814),l=r(9417),c=r(8394),f=r.n(c),u=r(4591),b=r(9597);let p=()=>{let e=(0,a.useRouter)(),{languageState:t}=(0,u.Z)();console.log(e);let r=(0,o.useMemo)(()=>t.texts.Navbar,[t]),[c,p]=(0,o.useState)(!1),[d,m]=(0,o.useState)(!1);return(0,n.jsxs)("nav",{className:f().navbar,children:[(0,n.jsx)(b.default,{visible:d,onClose:()=>m(!1)}),(0,n.jsxs)("div",{className:f().left,children:[(0,n.jsx)("button",{onClick:()=>m(!0),className:f().toggle,children:(0,n.jsx)(i.G,{icon:l.xiG})}),(0,n.jsx)("div",{className:f().links,children:r.Links.map(t=>(0,n.jsx)(s.default,{className:"".concat(f().link," ").concat(e.asPath==="/".concat(t.href)?f().active:""),href:t.href,children:t.label},t.label))})]}),(0,n.jsxs)("div",{className:f().right,children:[(0,n.jsx)("button",{onClick:()=>p(!0),className:f().search,children:(0,n.jsx)(i.G,{icon:l.wn1})}),(0,n.jsx)(s.default,{className:f().contact,href:"#contact",children:(0,n.jsx)("button",{className:f().catch,children:r.CatchToAction})})]})]})};t.default=p},2883:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(9543),a=r(9809),s=r(1502),i=r.n(s);let l=()=>(0,n.jsxs)("main",{className:i().main,children:[(0,n.jsx)(o.default,{}),(0,n.jsx)(a.default,{})]});t.default=l},2068:function(e){e.exports={container:"Drawer_container__GP132",drawer:"Drawer_drawer__nJFHe",off:"Drawer_off__vBdOY",close:"Drawer_close__nqzEv",button:"Drawer_button__muPZ5"}},1502:function(e){e.exports={main:"Home_main__nLjiQ",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",center:"Home_center__4BFgC",logo:"Home_logo__27_tb",thirteen:"Home_thirteen__cMI_k",rotate:"Home_rotate____XsI",content:"Home_content__Zy02X",vercelLogo:"Home_vercelLogo__dtSk9"}},8394:function(e){e.exports={navbar:"Navbar_navbar__66x_3",left:"Navbar_left__8F9zy",toggle:"Navbar_toggle__QFzO1",right:"Navbar_right__NApFy",link:"Navbar_link__b0OQz",links:"Navbar_links__JmvAX",catch:"Navbar_catch__sfawy",active:"Navbar_active__8GnRs"}},1163:function(e,t,r){e.exports=r(880)}},function(e){e.O(0,[976,774,888,179],function(){return e(e.s=8327)}),_N_E=e.O()}]);