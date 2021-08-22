"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[897],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),g=a,d=s["".concat(u,".").concat(g)]||s[g]||m[g]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6828:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={slug:"url-fragmentation",title:"GA URL fragmentation Issue",author:"YoungChang Lee",author_url:"https://github.com/p-iknow",author_image_url:"https://avatars.githubusercontent.com/u/35516239?v=4",tags:["google-analytics","url-fragmentation"]},u=void 0,p={permalink:"/web-analytics-handbook/blog/url-fragmentation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-08-22-ga-url-fragmentation-issue.md",source:"@site/blog/2021-08-22-ga-url-fragmentation-issue.md",title:"GA URL fragmentation Issue",description:"URL fragmentation \uc774\uc288\ub780?",date:"2021-08-22T00:00:00.000Z",formattedDate:"August 22, 2021",tags:[{label:"google-analytics",permalink:"/web-analytics-handbook/blog/tags/google-analytics"},{label:"url-fragmentation",permalink:"/web-analytics-handbook/blog/tags/url-fragmentation"}],readingTime:1.43,truncated:!1,nextItem:{title:"Why Google Analytics?",permalink:"/web-analytics-handbook/blog/why-ga"}},c=[{value:"URL fragmentation \uc774\uc288\ub780?",id:"url-fragmentation-\uc774\uc288\ub780",children:[]},{value:"\uc694\uccad URI \ub97c \ud1b5\ud569\ud558\ub294 \ubc29\ubc95",id:"\uc694\uccad-uri-\ub97c-\ud1b5\ud569\ud558\ub294-\ubc29\ubc95",children:[{value:"1) Query String\uc744 \uc81c\uac70\ud558\ub294 \ud544\ud130 \uc124\uc815\ud558\uae30",id:"1-query-string\uc744-\uc81c\uac70\ud558\ub294-\ud544\ud130-\uc124\uc815\ud558\uae30",children:[]},{value:"2) Trailing Slash \ud544\ud130 \uc124\uc815",id:"2-trailing-slash-\ud544\ud130-\uc124\uc815",children:[]}]},{value:"\ub9c8\uce58\uba70",id:"\ub9c8\uce58\uba70",children:[]}],m={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"url-fragmentation-\uc774\uc288\ub780"},"URL fragmentation \uc774\uc288\ub780?"),(0,i.kt)("p",null,"\uc6b4\uc601\uc911\uc778 \uc0ac\uc774\ud2b8\uc758 \ud2b9\uc815 \ud398\uc774\uc9c0\uc5d0\uc11c Query String\ub97c \uc4f0\uace0 \uc788\ub2e4\uba74, \uc0ac\uc6a9\uc790\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com")," \uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com?WEB_BNNR_ID=123")," URI\ub85c  \ubaa8\ub450 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4.  \uc544\ub9c8\ub3c4 GA \ubd84\uc11d\uc2dc 2 URI \ubaa8\ub450 \ud558\ub098\uc758 \ud398\uc774\uc9c0 \uac12\uc73c\ub85c \uae30\ub85d\ub420 \uac83\uc744 \uae30\ub300 \ud558\uaca0\uc9c0\ub9cc GA \uc5d0\uc11c\ub294 \uc544\ub798\uc640 \uac19\uc774 \uae30\ub85d\ub41c\ub2e4.  \uc774\uac83\uc774 \ubc14\ub85c URL fragmentation \uc774\uc288\uc774\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35516239/130347429-d05e9139-866d-4acf-8c08-41142cf16ae4.png",alt:"url-fragmentation-issue"})),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com")," \uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com?WEB_BNNR_ID=123")," \ub450 URL \ubaa8\ub450 \uac19\uc740 \ud398\uc774\uc9c0\ub97c \uc758\ubbf8\ud558\uae30  \ub54c\ubb38\uc5d0 \uc6b4\uc601 \uc911\uc778 \ubcf4\uae30(View)\uc5d0\uc11c\ub294 \ub450 \ud398\uc774\uc9c0\uc758 \uce21\uc815\uae30\uc900(Dimension)\uc744 \ud1b5\ud569 \ud558\ub294 \uac83\uc774 \uc720\uc6a9\ud558\ub2e4. \uc5ec\ub7ec \uc694\uccad URI \uac00 \ub3d9\uc77c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \ub098\ud0c0\ub0b8\ub2e4\uba74 GA \uc5d0\uc11c \uc774\ub4e4\uc744 \ub2e8\uc77c \ud398\uc774\uc9c0\ub85c \ud1b5\ud569\ud574\uc57c \ud55c\ub2e4."),(0,i.kt)("p",null,"Query String \uc774\uc678\uc5d0 trailing slash \ub85c \uc778\ud55c fragmentation \uc774\uc288\ub3c4 \uc788\ub2e4. ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com/page-name/")," \uacfc  ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com/page-name")," \ub85c \uac19\uc740 \ud398\uc774\uc9c0 \uc811\uc18d\uc774 \uac00\ub2a5\ud560 \ub54c \ub450 URL \uc774 \uac01\uac01 \ub2e4\ub978 \ud398\uc774\uc9c0 \uac12\uc73c\ub85c \uae30\ub85d\ub41c\ub2e4.   \ucc38\uace0\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com/page-name/")," \uc5d0\uc11c \ub9e8 \ub9c8\uc9c0\ub9c9\uc5d0 \ubd99\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," \ubb38\uc790\uac00 trailing slash \uc774\ub2e4."),(0,i.kt)("h2",{id:"\uc694\uccad-uri-\ub97c-\ud1b5\ud569\ud558\ub294-\ubc29\ubc95"},"\uc694\uccad URI \ub97c \ud1b5\ud569\ud558\ub294 \ubc29\ubc95"),(0,i.kt)("h3",{id:"1-query-string\uc744-\uc81c\uac70\ud558\ub294-\ud544\ud130-\uc124\uc815\ud558\uae30"},"1) Query String\uc744 \uc81c\uac70\ud558\ub294 \ud544\ud130 \uc124\uc815\ud558\uae30"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35516239/130347651-5bc8bc66-f4ab-41ab-ab89-c40f8d6ed764.png",alt:"image"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud544\ub4dc A \u2192 \ucd94\ucd9c A : ",(0,i.kt)("inlineCode",{parentName:"li"},"(.*?)\\?")),(0,i.kt)("li",{parentName:"ul"},"\ucd9c\ub825 \ub300\uc0c1  \u2192 \uc0dd\uc131\uc790:  ",(0,i.kt)("inlineCode",{parentName:"li"},"$A1"),"  (\uc5ec\uae30\uc11c ",(0,i.kt)("inlineCode",{parentName:"li"},"$A1")," \uc704 \ud544\ud130\uc5d0\uc11c \ucd94\ucd9c\ub41c \uac12\uc744 \ubcc0\uc218\ub85c \ud45c\ud604\ud55c \ubb38\uc790)")),(0,i.kt)("p",null,"\uc704\uc640 \uac19\uc774 \ud544\ud130\ub97c \uc124\uc815 \ud558\uba74 Query String\uc774 \ub2e4\ub978 \ub450 \ud398\uc774\uc9c0\uac00 ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com")," \uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com?WEB_BNNR_ID=123")," \uac00 \ub3d9\uc77c\ud558\uac8c  ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," \ub85c \uae30\ub85d\ub41c\ub2e4."),(0,i.kt)("p",null,"\uc6b4\uc601\uc911\uc778 \uc0ac\uc774\ud2b8\uc5d0 \ub2e4\uc591\ud55c \ucffc\ub9ac\uc2a4\ud2b8\ub9c1\uc774 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uace0 \uc788\ub2e4\uba74 \uc544\ub798\uc640 \uac19\uc774 \uac80\uc0c9\uc5b4 \ub9e4\uac8c \ubcc0\uc218 \uc81c\uc678 \uc0ac\ud56d\uc5d0 \uc0ac\uc774\ud2b8\uc5d0 \uc0ac\uc6a9\ub418\ub294 Query String\uc744 \uc785\ub825\ud558\ub294 \uac83\ub9cc\uc73c\ub85c \ucda9\ubd84\ud558\ub2e4.\n",(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35516239/130347850-ef76d816-8b71-43ec-a4ae-9e2b3520a3d0.png",alt:"image"})),(0,i.kt)("h3",{id:"2-trailing-slash-\ud544\ud130-\uc124\uc815"},"2) Trailing Slash \ud544\ud130 \uc124\uc815"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/35516239/130347721-a11ef326-4434-493d-888d-4f5a1c47cc45.png",alt:"image"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ud544\ub4dc A \u2192 \ucd94\ucd9c A : ",(0,i.kt)("inlineCode",{parentName:"p"},"^/(.*?)/+$"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\ucd9c\ub825 \ub300\uc0c1  \u2192 \uc0dd\uc131\uc790:  ",(0,i.kt)("inlineCode",{parentName:"p"},"/$A1"),"  (\uc5ec\uae30\uc11c ",(0,i.kt)("inlineCode",{parentName:"p"},"$A1")," \uc704 \ud544\ud130\uc5d0\uc11c \ucd94\ucd9c\ub41c \uac12\uc744 \ubcc0\uc218\ub85c \ud45c\ud604\ud55c \ubb38\uc790)"),(0,i.kt)("p",{parentName:"li"},"\uc704\uc640 \uac19\uc774 \ud544\ud130\ub97c \uc124\uc815\ud558\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com/page-name/")," \uacfc  ",(0,i.kt)("inlineCode",{parentName:"p"},"www.yoursite.com/page-name")," \ub450 \ud398\uc774\uc9c0 \ubaa8\ub450 ",(0,i.kt)("inlineCode",{parentName:"p"},"/page-name")," \ub85c \uae30\ub85d\ub41c\ub2e4."))),(0,i.kt)("h2",{id:"\ub9c8\uce58\uba70"},"\ub9c8\uce58\uba70"),(0,i.kt)("p",null,"\uc804\ubc18\uc801\uc73c\ub85c URL fragmentation \uc774\uc288\uac00 \uc5b8\uc81c\ub098 \ubb38\uc81c \ub418\ub294 \uac83\uc740 \uc544\ub2c8\uc9c0\ub9cc, \ubb38\uc81c\uac00 \ub418\ub294 \uacbd\uc6b0\uc5d0\ub294 \ud070 \ubb38\uc81c\uac00 \ub41c\ub2e4. \ub2e4\ub978 \ubaa8\ub4e0 \uac83\uc774 \uc81c\ub300\ub85c \uad6c\ud604\ub41c \ub9ce\uc740 GA \uacc4\uc815\uc5d0\uc11c\ub3c4 URL Fragmentation \ub294 \uc218\ub9cc \uac1c\ub098 \ub54c\ub85c\ub294 \uc218\uc2ed\ub9cc \uac1c\ub85c \ubd84\ud65c\ub41c \uc694\uccad URI\ub97c \ub9cc\ub4e4\uc5b4 \ub0b8\ub2e4. \uc774 \uae00\uc5d0\uc11c \uc81c\uc2dc\ub41c \ud574\uacb0\ucc45\uc73c\ub85c \ud574\ub2f9 \ubb38\uc81c\ub97c \ubbf8\uc5f0\uc5d0 \ubc29\uc9c0\ud560 \uc218 \uc788\ub2e4."))}s.isMDXComponent=!0}}]);