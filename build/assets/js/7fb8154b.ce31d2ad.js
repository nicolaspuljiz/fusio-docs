"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6786],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=i,y=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6036:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={},l="File Directory Detail",u={unversionedId:"backend/api/action/file-directory-detail",id:"backend/api/action/file-directory-detail",title:"File Directory Detail",description:"Returns details of a single file. You should bind this action to a route i.e. GET /files/:id where the id uri",source:"@site/docs/backend/api/action/file-directory-detail.md",sourceDirName:"backend/api/action",slug:"/backend/api/action/file-directory-detail",permalink:"/docs/backend/api/action/file-directory-detail",editUrl:"https://github.com/apioo/fusio-docs/edit/main/docs/backend/api/action/file-directory-detail.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FCGI Processor",permalink:"/docs/backend/api/action/fastcgi-processor"},next:{title:"File Directory Index",permalink:"/docs/backend/api/action/file-directory-index"}},s={},p=[{value:"Response",id:"response",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"file-directory-detail"},"File Directory Detail"),(0,o.kt)("p",null,"Returns details of a single file. You should bind this action to a route i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /files/:id")," where the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," uri\nfragment is available. The action returns a file by this id."),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fileName": "test_semicolon.csv",\n  "content": [\n    [\n      "id",\n      "name"\n    ],\n    [\n      "1",\n      "foo"\n    ],\n    [\n      "2",\n      "bar"\n    ]\n  ]\n}\n')))}f.isMDXComponent=!0}}]);