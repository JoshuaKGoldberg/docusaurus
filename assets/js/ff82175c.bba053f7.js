"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55688],{24239:(e,t,s)=>{s.d(t,{Z:()=>j});var i=s(24246),n=(s(27378),s(40624)),r=s(41876),l=s(41428),o=s(7812),c=s(64149),a=s(36712),d=s(52615);const u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h({href:e,children:t}){return(0,i.jsx)(l.Z,{href:e,className:(0,n.Z)("card padding--lg",u.cardContainer),children:t})}function m({href:e,icon:t,title:s,description:r}){return(0,i.jsxs)(h,{href:e,children:[(0,i.jsxs)(d.Z,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:s,children:[t," ",s]}),r&&(0,i.jsx)("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:r,children:r})]})}function f({item:e}){const t=(0,r.LM)(e),s=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,a.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return t?(0,i.jsx)(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:s(e.items.length)}):null;var n}function p({item:e}){const t=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var s;const n=(0,r.xz)(null!==(s=e.docId)&&void 0!==s?s:void 0);var l;return(0,i.jsx)(m,{href:e.href,icon:t,title:e.label,description:null!==(l=e.description)&&void 0!==l?l:null==n?void 0:n.description})}function y({item:e}){switch(e.type){case"link":return(0,i.jsx)(p,{item:e});case"category":return(0,i.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function b(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function x({className:e}){const t=(0,r.jA)();return(0,i.jsx)(j,{items:t.items,className:e})}function j(e){const{items:t,className:s}=e;if(!t)return(0,i.jsx)(x,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},i=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter((function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable})))),i.forEach((function(t){b(e,t,s[t])}))}return e}({},e));const l=(0,r.MN)(t);return(0,i.jsx)("section",{className:(0,n.Z)("row",s),children:l.map(((e,t)=>(0,i.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,i.jsx)(y,{item:e})},t)))})}},7812:(e,t,s)=>{s.d(t,{c:()=>a});var i=s(27378),n=s(4423);const r=["zero","one","two","few","many","other"];function l(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function a(){const e=c();return{selectMessage:(t,s)=>function(e,t,s){const i=e.split("|");if(1===i.length)return i[0];i.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const n=s.select(t),r=s.pluralForms.indexOf(n);return i[Math.min(r,i.length-1)]}(s,t,e)}}},74867:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=s(24246),n=s(71670),r=s(24239);const l={tags:["visibility"]},o="Visibility",c={id:"tests/visibility/index",title:"Visibility",description:"A category to play with draft/unlisted front matter.",source:"@site/_dogfooding/_docs tests/tests/visibility/index.mdx",sourceDirName:"tests/visibility",slug:"/tests/visibility/",permalink:"/tests/docs/tests/visibility/",draft:!1,unlisted:!1,tags:[{inline:!1,label:"Visibility",permalink:"/tests/docs/tags/visibility"}],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1719912775e3,frontMatter:{tags:["visibility"]},sidebar:"sidebar",previous:{title:"TOC partial test",permalink:"/tests/docs/tests/toc-partials/"},next:{title:"Some Drafts - Listed 1",permalink:"/tests/docs/tests/visibility/some-drafts/draft-subcategory/listed1"}},a={},d=[];function u(e){const t={a:"a",h1:"h1",hr:"hr",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"visibility",children:"Visibility"}),"\n",(0,i.jsx)(t.p,{children:"A category to play with draft/unlisted front matter."}),"\n",(0,i.jsx)(t.p,{children:"In dev, both draft/unlisted items are displayed."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"In production, draft items shouldn't be accessible:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"pathname:///tests/docs/tests/visibility/only-drafts/draft1",children:"/tests/docs/tests/visibility/only-drafts/draft1"})}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"In production, unlisted items should remain accessible, but be hidden in the sidebar (unless currently browsed):"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted1",children:"./only-unlisteds/unlisted1.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted2",children:"./only-unlisteds/unlisted2.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/only-unlisteds/unlisted-subcategory/unlisted3",children:"./only-unlisteds/unlisted-subcategory/unlisted3.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted1",children:"./some-unlisteds/unlisted1.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted2",children:"./some-unlisteds/unlisted2.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/some-unlisteds/unlisted-subcategory/unlisted3",children:"./some-unlisteds/unlisted-subcategory/unlisted3.md"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tests/docs/tests/visibility/force-unlisted",children:"./force-unlisted.mdx"})}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n","\n",(0,i.jsx)(r.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}h.displayName="MDXContent(_dogfooding/_docs tests/tests/visibility/index.mdx)"},71670:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>l});var i=s(27378);const n={},r=i.createContext(n);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);