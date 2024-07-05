"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53704],{61132:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(24246),o=(r(27378),r(40624));const a={tabItem:"tabItem_pnkT"};function l({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(24246),o=r(27378),a=r(40624),l=r(75527),s=r(3620),i=r(44479),c=r(62821),u=r(52196),d=r(53589);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function v(e){var t,r;return null!==(r=null===(t=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function g(e){const{values:t,children:r}=e;return(0,o.useMemo)((()=>{const e=null!=t?t:function(e){return v(e).map((({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n})))}(r);return function(e){const t=(0,u.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p({value:e,tabValues:t}){return t.some((t=>t.value===e))}function f({queryString:e=!1,groupId:t}){const r=(0,s.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t}),a=(0,c._X)(n),l=(0,o.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(r.location.search);t.set(n,e),r.replace(y(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}({},r.location),{search:t.toString()}))}),[n,r]);return[a,l]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=g(e),[l,s]=(0,o.useState)((()=>function({defaultValue:e,tabValues:t}){if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const n=null!==(r=t.find((e=>e.default)))&&void 0!==r?r:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:r,groupId:n}),[b,y]=function({groupId:e}){const t=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,n]=(0,d.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&n.set(e)}),[t,n])]}({groupId:n}),v=(()=>{const e=null!=c?c:b;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),y(e)}),[u,y,a]),tabValues:a}}var x=r(29088);const m={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){w(e,t,r[t])}))}return e}function O(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function P({className:e,block:t,selectedValue:r,selectValue:o,tabValues:s}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=s[n].value;a!==r&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;var r;t=null!==(r=i[n])&&void 0!==r?r:i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;var n;t=null!==(n=i[r])&&void 0!==n?n:i[i.length-1];break}}null==t||t.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e),children:s.map((({value:e,label:t,attributes:o})=>(0,n.jsx)("li",O(j({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>i.push(e),onKeyDown:d,onClick:u},o),{className:(0,a.Z)("tabs__item",m.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e)))})}function k({lazy:e,children:t,selectedValue:r}){const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const e=l.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=h(e);return(0,n.jsxs)("div",{className:(0,a.Z)("tabs-container",m.tabList),children:[(0,n.jsx)(P,j({},t,e)),(0,n.jsx)(k,j({},t,e))]})}function T(e){const t=(0,x.Z)();return(0,n.jsx)(S,O(j({},e),{children:v(e.children)}),String(t))}},6698:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(24246),o=(r(27378),r(40624));const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function c({children:e,minHeight:t,url:r="http://localhost:3000",style:l,bodyStyle:c}){return(0,n.jsxs)("div",{className:a.browserWindow,style:i(s({},l),{minHeight:t}),children:[(0,n.jsxs)("div",{className:a.browserWindowHeader,children:[(0,n.jsxs)("div",{className:a.buttons,children:[(0,n.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,n.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,n.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,n.jsx)("div",{className:(0,o.Z)(a.browserWindowAddressBar,"text--truncate"),children:r}),(0,n.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,n.jsxs)("div",{children:[(0,n.jsx)("span",{className:a.bar}),(0,n.jsx)("span",{className:a.bar}),(0,n.jsx)("span",{className:a.bar})]})})]}),(0,n.jsx)("div",{className:a.browserWindowBody,style:c,children:e})]})}},16021:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,isMacOS:()=>b,metadata:()=>u,toc:()=>y});var n=r(24246),o=r(71670),a=r(6698),l=r(97555),s=r(61132);const i={},c="Tabs tests",u={type:"mdx",permalink:"/tests/pages/tabs-tests",source:"@site/_dogfooding/_pages tests/tabs-tests.mdx",title:"Tabs tests",description:"Tabs with dynamic default value",frontMatter:{},lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1719912775e3,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/_dogfooding/_pages tests/tabs-tests.mdx",unlisted:!1},d={},b="undefined"!=typeof window&&navigator.platform.startsWith("Mac"),y=[{value:"Tabs with dynamic default value",id:"tabs-with-dynamic-default-value",level:2},{value:"Tabs sync with different heights",id:"tabs-sync-with-different-heights",level:2},{value:"Tabs with className and lazy loading",id:"tabs-with-classname-and-lazy-loading",level:2}];function v(e){const t={a:"a",h1:"h1",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"tabs-tests",children:"Tabs tests"}),"\n","\n",(0,n.jsx)(t.h2,{id:"tabs-with-dynamic-default-value",children:"Tabs with dynamic default value"}),"\n",(0,n.jsxs)(t.p,{children:["This can cause ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native-website/issues/2771",children:"bugs"})," when default value is different between SSR and client:"]}),"\n","\n",(0,n.jsx)(a.Z,{children:(0,n.jsxs)(l.Z,{defaultValue:b?"ios":"android",children:[(0,n.jsx)(s.Z,{value:"android",label:"Android",children:"Android content"}),(0,n.jsx)(s.Z,{value:"ios",label:"iOS",children:"iOS content"})]})}),"\n",(0,n.jsx)(t.h2,{id:"tabs-sync-with-different-heights",children:"Tabs sync with different heights"}),"\n",(0,n.jsxs)(l.Z,{groupId:"operating-systems",children:[(0,n.jsx)(s.Z,{value:"win",label:"Windows",children:(0,n.jsx)(t.p,{children:"Use Ctrl + C to copy."})}),(0,n.jsx)(s.Z,{value:"mac",label:"macOS",children:(0,n.jsx)(t.p,{children:"very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text very long text"})})]}),"\n",(0,n.jsxs)(l.Z,{groupId:"operating-systems",children:[(0,n.jsx)(s.Z,{value:"win",label:"Windows",children:(0,n.jsx)(t.p,{children:"Use Ctrl + V to paste."})}),(0,n.jsx)(s.Z,{value:"mac",label:"macOS",children:(0,n.jsx)(t.p,{children:"Use Command + V to paste."})})]}),"\n",(0,n.jsx)(t.p,{children:"When clicking tabs above, they should stay under cursor and we should adjust the scroll position."}),"\n",(0,n.jsx)(t.h2,{id:"tabs-with-classname-and-lazy-loading",children:"Tabs with className and lazy loading"}),"\n",(0,n.jsxs)(l.Z,{lazy:!0,children:[(0,n.jsx)(s.Z,{value:"apple",label:"Apple",className:"alert alert--primary",default:!0,children:(0,n.jsx)(t.p,{children:"This is an apple \ud83c\udf4e"})}),(0,n.jsx)(s.Z,{value:"orange",label:"Orange",className:"alert alert--secondary",children:(0,n.jsx)(t.p,{children:"This is an orange \ud83c\udf4a"})}),(0,n.jsx)(s.Z,{value:"banana",label:"Banana",className:"alert alert--success",children:(0,n.jsx)(t.p,{children:"This is a banana \ud83c\udf4c"})})]})]})}function g(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(v,{...e})}):v(e)}},71670:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>l});var n=r(27378);const o={},a=n.createContext(o);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);