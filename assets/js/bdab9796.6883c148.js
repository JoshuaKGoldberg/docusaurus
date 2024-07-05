"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40747],{16652:(e,n,t)=>{t.d(n,{Z:()=>f});var l=t(24246),r=(t(27378),t(40624)),o=t(14929),i=t(4646),c=t(36712);const s={tocCollapsibleButton:"tocCollapsibleButton_IbtT",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_Nor3"};function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function d(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function u(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function v(e){var{collapsed:n}=e,t=u(e,["collapsed"]);return(0,l.jsx)("button",d(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),l.forEach((function(n){a(e,n,t[n])}))}return e}({type:"button"},t),{className:(0,r.Z)("clean-btn",s.tocCollapsibleButton,!n&&s.tocCollapsibleButtonExpanded,t.className),children:(0,l.jsx)(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const b={tocCollapsible:"tocCollapsible_BEWm",tocCollapsibleContent:"tocCollapsibleContent_FG8F",tocCollapsibleExpanded:"tocCollapsibleExpanded_FzA_"};function f({toc:e,className:n,minHeadingLevel:t,maxHeadingLevel:c}){const{collapsed:s,toggleCollapsed:a}=(0,o.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,r.Z)(b.tocCollapsible,!s&&b.tocCollapsibleExpanded,n),children:[(0,l.jsx)(v,{collapsed:s,onClick:a}),(0,l.jsx)(o.z,{lazy:!0,className:b.tocCollapsibleContent,collapsed:s,children:(0,l.jsx)(i.Z,{toc:e,minHeadingLevel:t,maxHeadingLevel:c})})]})}},41124:(e,n,t)=>{t.d(n,{Z:()=>i});var l=t(24246),r=(t(27378),t(4646));const o={tableOfContentsInline:"tableOfContentsInline_2sru"};function i({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,l.jsx)("div",{className:o.tableOfContentsInline,children:(0,l.jsx)(r.Z,{toc:e,minHeadingLevel:n,maxHeadingLevel:t,className:"table-of-contents",linkClassName:null})})}},4646:(e,n,t)=>{t.d(n,{Z:()=>y});var l=t(24246),r=t(27378),o=t(73919);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),l.forEach((function(n){i(e,n,t[n])}))}return e}function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function d(e){const n=e.map((e=>s(c({},e),{parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const l=t.slice(2,e.level);e.parentIndex=Math.max(...l),t[e.level]=n}));const l=[];return n.forEach((e=>{const{parentIndex:t}=e,r=a(e,["parentIndex"]);t>=0?n[t].children.push(r):l.push(r)})),l}function u({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return e.flatMap((e=>{const l=u({toc:e.children,minHeadingLevel:n,maxHeadingLevel:t});return function(e){return e.level>=n&&e.level<=t}(e)?[s(c({},e),{children:l})]:l}))}function v(e){const n=e.getBoundingClientRect();return n.top===n.bottom?v(e.parentNode):n}function b(e,{anchorTopOffset:n}){const t=e.find((e=>v(e).top>=n));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(v(t))?t:null!==(l=e[e.indexOf(t)-1])&&void 0!==l?l:null;var l}var r;return null!==(r=e[e.length-1])&&void 0!==r?r:null}function f(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function p(e){const n=(0,r.useRef)(void 0),t=f();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:l,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:i}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(l),c=function({minHeadingLevel:e,maxHeadingLevel:n}){const t=[];for(let l=e;l<=n;l+=1)t.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),s=b(c,{anchorTopOffset:t.current}),a=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===a)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}var m=t(41428);function h({toc:e,className:n,linkClassName:t,isChild:r}){return e.length?(0,l.jsx)("ul",{className:r?void 0:n,children:e.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(m.Z,{to:`#${e.id}`,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:t})]},e.id)))}):null}const g=r.memo(h);function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function O(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function y(e){var{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:s,maxHeadingLevel:a}=e,v=O(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);const b=(0,o.L)(),f=null!=s?s:b.tableOfContents.minHeadingLevel,m=null!=a?a:b.tableOfContents.maxHeadingLevel,h=function({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,r.useMemo)((()=>u({toc:d(e),minHeadingLevel:n,maxHeadingLevel:t})),[e,n,t])}({toc:n,minHeadingLevel:f,maxHeadingLevel:m});return p((0,r.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:m}}),[i,c,f,m])),(0,l.jsx)(g,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),l.forEach((function(n){j(e,n,t[n])}))}return e}({toc:h,className:t,linkClassName:i},v))}},6698:(e,n,t)=>{t.d(n,{Z:()=>a});var l=t(24246),r=(t(27378),t(40624));const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),l.forEach((function(n){i(e,n,t[n])}))}return e}function s(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function a({children:e,minHeight:n,url:t="http://localhost:3000",style:i,bodyStyle:a}){return(0,l.jsxs)("div",{className:o.browserWindow,style:s(c({},i),{minHeight:n}),children:[(0,l.jsxs)("div",{className:o.browserWindowHeader,children:[(0,l.jsxs)("div",{className:o.buttons,children:[(0,l.jsx)("span",{className:o.dot,style:{background:"#f25f58"}}),(0,l.jsx)("span",{className:o.dot,style:{background:"#fbbe3c"}}),(0,l.jsx)("span",{className:o.dot,style:{background:"#58cb42"}})]}),(0,l.jsx)("div",{className:(0,r.Z)(o.browserWindowAddressBar,"text--truncate"),children:t}),(0,l.jsx)("div",{className:o.browserWindowMenuIcon,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:o.bar}),(0,l.jsx)("span",{className:o.bar}),(0,l.jsx)("span",{className:o.bar})]})})]}),(0,l.jsx)("div",{className:o.browserWindowBody,style:a,children:e})]})}},31780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>v});var l=t(24246),r=t(71670),o=t(6698),i=t(41124),c=t(16652);const s={toc_min_heading_level:2,toc_max_heading_level:6},a=void 0,d={id:"toc/toc-test-bad",title:"toc-test-bad",description:"Test the TOC behavior of a real-world MD doc with invalid headings",source:"@site/_dogfooding/_docs tests/toc/toc-test-bad.mdx",sourceDirName:"toc",slug:"/toc/toc-test-bad",permalink:"/tests/docs/toc/toc-test-bad",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1719912775e3,frontMatter:{toc_min_heading_level:2,toc_max_heading_level:6},sidebar:"sidebar",previous:{title:"toc-_-_",permalink:"/tests/docs/toc/toc-_-_"},next:{title:"toc-test-good",permalink:"/tests/docs/toc/toc-test-good"}},u={},v=[{value:"lvl 6",id:"lvl-6",level:6},{value:"lvl 5",id:"lvl-5",level:5},{value:"lvl 4",id:"lvl-4",level:4},{value:"lvl 5",id:"lvl-5-1",level:5},{value:"lvl 4",id:"lvl-4-1",level:4},{value:"lvl 3",id:"lvl-3",level:3},{value:"lvl 2",id:"lvl-2",level:2},{value:"lvl 2",id:"lvl-2-1",level:2},{value:"lvl 3",id:"lvl-3-1",level:3},{value:"lvl 4",id:"lvl-4-2",level:4},{value:"lvl 5",id:"lvl-5-2",level:5},{value:"lvl 6",id:"lvl-6-1",level:6},{value:"lvl 2",id:"lvl-2-2",level:2},{value:"lvl 3",id:"lvl-3-2",level:3},{value:"lvl 4",id:"lvl-4-3",level:4},{value:"lvl 5",id:"lvl-5-3",level:5},{value:"lvl 6",id:"lvl-6-2",level:6}];function b(e){const n={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",p:"p",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Test the TOC behavior of a real-world MD doc with invalid headings"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"BAD HEADINGS:"}),"\n",(0,l.jsx)(n.h6,{id:"lvl-6",children:"lvl 6"}),"\n",(0,l.jsx)(n.h5,{id:"lvl-5",children:"lvl 5"}),"\n",(0,l.jsx)(n.h4,{id:"lvl-4",children:"lvl 4"}),"\n",(0,l.jsx)(n.h5,{id:"lvl-5-1",children:"lvl 5"}),"\n",(0,l.jsx)(n.h4,{id:"lvl-4-1",children:"lvl 4"}),"\n",(0,l.jsx)(n.h3,{id:"lvl-3",children:"lvl 3"}),"\n",(0,l.jsx)(n.h2,{id:"lvl-2",children:"lvl 2"}),"\n",(0,l.jsx)(n.h1,{id:"lvl-1",children:"lvl 1"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"GOOD HEADINGS:"}),"\n",(0,l.jsx)(n.h2,{id:"lvl-2-1",children:"lvl 2"}),"\n",(0,l.jsx)(n.h3,{id:"lvl-3-1",children:"lvl 3"}),"\n",(0,l.jsx)(n.h4,{id:"lvl-4-2",children:"lvl 4"}),"\n",(0,l.jsx)(n.h5,{id:"lvl-5-2",children:"lvl 5"}),"\n",(0,l.jsx)(n.h6,{id:"lvl-6-1",children:"lvl 6"}),"\n",(0,l.jsx)(n.h2,{id:"lvl-2-2",children:"lvl 2"}),"\n",(0,l.jsx)(n.h3,{id:"lvl-3-2",children:"lvl 3"}),"\n",(0,l.jsx)(n.h4,{id:"lvl-4-3",children:"lvl 4"}),"\n",(0,l.jsx)(n.h5,{id:"lvl-5-3",children:"lvl 5"}),"\n",(0,l.jsx)(n.h6,{id:"lvl-6-2",children:"lvl 6"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"INLINE:"}),"\n","\n","\n",(0,l.jsx)(o.Z,{children:(0,l.jsx)(i.Z,{toc:v,minHeadingLevel:2,maxHeadingLevel:6})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"COLLAPSIBLE:"}),"\n","\n",(0,l.jsx)(o.Z,{children:(0,l.jsx)(c.Z,{toc:v,minHeadingLevel:2,maxHeadingLevel:6})})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(b,{...e})}):b(e)}f.displayName="MDXContent(_dogfooding/_docs tests/toc/toc-test-bad.mdx)"},71670:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var l=t(27378);const r={},o=l.createContext(r);function i(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);