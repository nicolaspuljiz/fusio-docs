"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3021],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),u=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(a,".").concat(d)]||f[d]||l[d]||c;return n?t.createElement(m,i(i({ref:r},p),{},{components:n})):t.createElement(m,i({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<c;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7867:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var t=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},a="User",u={unversionedId:"backend/consumer/user",id:"backend/consumer/user",title:"User",description:"A user is either a Consumer of your API or an internal user which can",source:"@site/docs/backend/consumer/user.md",sourceDirName:"backend/consumer",slug:"/backend/consumer/user",permalink:"/docs/backend/consumer/user",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/backend/consumer/user.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Scope",permalink:"/docs/backend/consumer/scope"},next:{title:"Rate",permalink:"/docs/backend/consumer/rate"}},p=[],l={toc:p};function f(e){var r=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"user"},"User"),(0,c.kt)("p",null,"A user is either a ",(0,c.kt)("inlineCode",{parentName:"p"},"Consumer")," of your API or an internal user which can\nconfigure and develop your API. You can assign every user to a specific role,\nwhich assigns specific scopes to the user. Those scopes give the user the rights\nto access specific endpoints of your API. At the settings you can set the\ndefault role which every user gets assigned if he registers i.e. at the\ndeveloper app."))}f.isMDXComponent=!0}}]);