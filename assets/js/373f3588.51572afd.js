"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[7396],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,k=u["".concat(l,".").concat(b)]||u[b]||s[b]||o;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5589:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:2},l="A/B \ud14c\uc2a4\ud2b8\ub780 \ubb34\uc5c7\uc77c\uae4c",c={unversionedId:"handbook/ab-test",id:"handbook/ab-test",isDocsHomePage:!1,title:"A/B \ud14c\uc2a4\ud2b8\ub780 \ubb34\uc5c7\uc77c\uae4c",description:"A/B \ud14c\uc2a4\ud2b8\ub780 \ub3d9\uc77c\ud55c \uc6f9 \ud398\uc774\uc9c0\uc5d0 \ub300\ud574 \ub458 \uc774\uc0c1\uc758 \ub300\uc548(A\uc640 B) \uc911 \uc5b4\ub5a4 \uac83\uc774 \ub354 \ud6a8\uacfc\uc801\uc778\uc9c0 \uce21\uc815\ud558\ub294 \ubb34\uc791\uc704 \uc2e4\ud5d8\uc785\ub2c8\ub2e4. \uc6f9\uc0ac\uc774\ud2b8 \ub610\ub294 \uc571 \ubc29\ubb38\uc790\ub4e4\uc744 \ub79c\ub364\ud55c \uadf8\ub8f9\uc73c\ub85c \ub098\ub204\uc5b4 \ub3d9\uc2dc\uc5d0 \ud55c \uadf8\ub8f9\uc5d0\uac8c\ub294 A, \ub2e4\ub978 \uadf8\ub8f9\uc5d0\uac8c\ub294 B\ub97c \ubcf4\uc5ec\uc8fc\uace0 \uc5b4\ub5a4 \uac83\uc774 \ub354 \ud6a8\uacfc\uc801\uc774\uc5c8\ub294\uc9c0 \uce21\uc815\ud569\ub2c8\ub2e4. \uce21\uc815\ud56d\ubaa9\uc740 \uc6f9\uc0ac\uc774\ud2b8\ub9c8\ub2e4 \ub2e4\ub985\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc774\ucee4\uba38\uc2a4 \uc0ac\uc774\ud2b8\uc758 \uacbd\uc6b0 \uc0c1\ud488\uc758 \ud310\ub9e4\ub97c \uce21\uc815\ud560 \uc218 \uc788\uace0 \ucf58\ud150\uce20 \ud37c\ube14\ub9ac\uc2f1 \uc0ac\uc774\ud2b8\uc758 \uacbd\uc6b0 \ubc29\ubb38\uc790\uac00 \ucf58\ud150\uce20\ub97c \uc5bc\ub9c8\ub098 \uc77d\uc5c8\ub294\uc9c0 \uce21\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucc38\uace0\ub85c \uc5ec\uae30\uc11c A\ub294 \uc6d0\ub798 \ubc84\uc804 \uc758\ubbf8\ud558\uace0 B\ub294 \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.",source:"@site/docs/handbook/ab-test.md",sourceDirName:"handbook",slug:"/handbook/ab-test",permalink:"/web-analytics-handbook/docs/handbook/ab-test",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/ab-test.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"handbookSidebar",previous:{title:"\ud578\ub4dc\ubd81 \uc77d\ub294\ubc95",permalink:"/web-analytics-handbook/docs/handbook/intro"},next:{title:"Create a Page",permalink:"/web-analytics-handbook/docs/handbook/tutorial-basics/create-a-page"}},m=[{value:"A/B \ud14c\uc2a4\ud2b8\uac00 \uc65c \ud544\uc694\ud560\uae4c",id:"ab-\ud14c\uc2a4\ud2b8\uac00-\uc65c-\ud544\uc694\ud560\uae4c",children:[]},{value:"A/B \ud14c\uc2a4\ud2b8 \ud504\ub85c\uc138\uc2a4",id:"ab-\ud14c\uc2a4\ud2b8-\ud504\ub85c\uc138\uc2a4",children:[]},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",children:[]}],s={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ab-\ud14c\uc2a4\ud2b8\ub780-\ubb34\uc5c7\uc77c\uae4c"},"A/B \ud14c\uc2a4\ud2b8\ub780 \ubb34\uc5c7\uc77c\uae4c"),(0,o.kt)("p",null,"A/B \ud14c\uc2a4\ud2b8\ub780 \ub3d9\uc77c\ud55c \uc6f9 \ud398\uc774\uc9c0\uc5d0 \ub300\ud574 \ub458 \uc774\uc0c1\uc758 \ub300\uc548(A\uc640 B) \uc911 \uc5b4\ub5a4 \uac83\uc774 \ub354 \ud6a8\uacfc\uc801\uc778\uc9c0 \uce21\uc815\ud558\ub294 \ubb34\uc791\uc704 \uc2e4\ud5d8\uc785\ub2c8\ub2e4. \uc6f9\uc0ac\uc774\ud2b8 \ub610\ub294 \uc571 \ubc29\ubb38\uc790\ub4e4\uc744 \ub79c\ub364\ud55c \uadf8\ub8f9\uc73c\ub85c \ub098\ub204\uc5b4 \ub3d9\uc2dc\uc5d0 \ud55c \uadf8\ub8f9\uc5d0\uac8c\ub294 A, \ub2e4\ub978 \uadf8\ub8f9\uc5d0\uac8c\ub294 B\ub97c \ubcf4\uc5ec\uc8fc\uace0 \uc5b4\ub5a4 \uac83\uc774 \ub354 \ud6a8\uacfc\uc801\uc774\uc5c8\ub294\uc9c0 \uce21\uc815\ud569\ub2c8\ub2e4. \uce21\uc815\ud56d\ubaa9\uc740 \uc6f9\uc0ac\uc774\ud2b8\ub9c8\ub2e4 \ub2e4\ub985\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc774\ucee4\uba38\uc2a4 \uc0ac\uc774\ud2b8\uc758 \uacbd\uc6b0 \uc0c1\ud488\uc758 \ud310\ub9e4\ub97c \uce21\uc815\ud560 \uc218 \uc788\uace0 \ucf58\ud150\uce20 \ud37c\ube14\ub9ac\uc2f1 \uc0ac\uc774\ud2b8\uc758 \uacbd\uc6b0 \ubc29\ubb38\uc790\uac00 \ucf58\ud150\uce20\ub97c \uc5bc\ub9c8\ub098 \uc77d\uc5c8\ub294\uc9c0 \uce21\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucc38\uace0\ub85c \uc5ec\uae30\uc11c A\ub294 \uc6d0\ub798 \ubc84\uc804 \uc758\ubbf8\ud558\uace0 B\ub294 \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,o.kt)("h2",{id:"ab-\ud14c\uc2a4\ud2b8\uac00-\uc65c-\ud544\uc694\ud560\uae4c"},"A/B \ud14c\uc2a4\ud2b8\uac00 \uc65c \ud544\uc694\ud560\uae4c"),(0,o.kt)("p",null,"A/B \ud14c\uc2a4\ud2b8\ub294 \uc65c \ud544\uc694\ud560\uae4c\uc694? \uc774\ucee4\uba38\uc2a4 \uc6f9\uc0ac\uc774\ud2b8\ub97c \uc608\uc2dc\ub85c \ub4e4\uaca0\uc2b5\ub2c8\ub2e4. \uc774 \uacbd\uc6b0 \uc6b0\ub9ac\ub294 \ubc29\ubb38\uc790\ub4e4\uc774 \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \uc0c1\ud488\uc744 \ub2f4\uace0 \uacb0\uc81c\uae4c\uc9c0 \ub9c8\uce58\uae30\ub97c \uc6d0\ud569\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ub9ce\uc740 \uc0ac\ub78c\ub4e4\uc774 \ubc29\ubb38\ud558\uc9c0\ub9cc \uad6c\ub9e4 \uc804\ud658\uc728\uc740 \uc544\uc8fc \ub0ae\ub2e4\uba74 \uc65c \uadf8\ub7f0\uac78\uae4c\uc694? \uc7a5\ubc14\uad6c\ub2c8\uc5d0 \uc0c1\ud488\uc744 \ub2f4\uae30\uae4c\uc9c0 \ud588\ub294\ub370 \uacb0\uc81c\uae4c\uc9c0 \uc774\uc5b4\uc9c0\uc9c0 \uc54a\ub294\ub2e4\uba74 \ubb34\uc5c7\uc774 \ubb38\uc81c\uc77c\uae4c\uc694? A/B \ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud574\uc11c \uc774\ub7f0 \ubb38\uc81c\ub97c \uac1c\uc120\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\ubc29\ubb38\uc790\uc758 \uc5b4\ub824\uc6c0 \ud574\uacb0 \ubc0f \uadf8\uc5d0 \ub530\ub978 \uc774\ud0c8\ub960 \uac10\uc18c"),(0,o.kt)("p",{parentName:"li"},"\ubc29\ubb38\uc790\ub4e4\uc740 \ud2b9\uc815\ud55c \ubaa9\uc801\uc744 \uac00\uc9c0\uace0 \uc6f9\uc0ac\uc774\ud2b8 \ub610\ub294 \uc571\uc5d0 \ubc29\ubb38\ud569\ub2c8\ub2e4. \ud2b9\uc815 \uc81c\ud488\uc744 \uad6c\ub9e4\ud558\uae30 \uc704\ud574\uc11c\uc77c \uc218\ub3c4 \uc788\uace0 \uc5b4\ub5a4 \uc8fc\uc81c\uc5d0 \ub300\ud574 \uc77d\uae30 \uc704\ud574\uc11c\uc77c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub7f0 \ubaa9\uc801\uc744 \ub2ec\uc131\ud558\ub294 \ub370\uc5d0 \ubc29\ud574\uc694\uc18c\uac00 \uc788\ub2e4\uba74 \ubc29\ubb38\uc790\ub4e4\uc740 \uc0ac\uc774\ud2b8 \ub610\ub294 \uc571\uc744 \uc911\uac04\uc5d0 \uc885\ub8cc\ud560 \uac83\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc774\ucee4\uba38\uc2a4 \uc0ac\uc774\ud2b8\uc758 \uacbd\uc6b0 \uc81c\ud488 \uac80\uc0c9 \uacb0\uacfc \ubcf4\uc5ec\uc9c0\ub294 UI\uac00 \ub108\ubb34 \ubcf5\uc7a1\ud558\uc5ec \uc6d0\ud558\ub294 \uc81c\ud488\uc744 \ucc3e\uae30\uac00 \uc5b4\ub824\uc6b8 \uc218\ub3c4 \uc788\uace0, \uacb0\uc81c \ud398\uc774\uc9c0\uae4c\uc9c0 \uac00\ub294 \ub2e8\uacc4\uac00 \ub108\ubb34 \ub9ce\uc544\uc11c \ub3c4\uc911\uc5d0 \ubb3c\uac74\uc744 \uad6c\ub9e4\ud560 \ub9c8\uc74c\uc774 \uc0ac\ub77c\uc838\uc11c \uc77c \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"li"},"\uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\uc640 \uac19\uc740 \ubc29\ubb38\uc790 \ud589\ub3d9 \ubd84\uc11d \ub3c4\uad6c\ub97c \ud1b5\ud574 \uc5b4\ub514\uc5d0\uc11c \ub9ce\uc740 \ubc29\ubb38\uc790 \uc774\ud0c8\uc774 \uc77c\uc5b4\ub098\ub294\uc9c0\ub97c \ubd84\uc11d\ud55c \ub2e4\uc74c, \ud574\ub2f9 \ud398\uc774\uc9c0\uc5d0\uc11c A/B \ud14c\uc2a4\ud2b8\ub97c \ud574\ubcf4\uba70 \uc774\ud0c8\uc728\uc744 \uc904\uc5ec \ub098\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ubc29\ubb38\uc790\ub4e4\uc758 \uc804\ubc18\uc801\uc778 UX\ub97c \uac1c\uc120\ud558\uc5ec \uc0ac\uc774\ud2b8\uc5d0\uc11c \ub354 \ub9ce\uc740 \uc2dc\uac04\uc744 \ubcf4\ub0b4\uac8c \ud558\uace0, \uad6c\ub9e4 \uc804\ud658\uacfc \uac19\uc740 \ud589\ub3d9\uc73c\ub85c \uc774\uc5b4\uc9c8 \ud655\ub960\ub3c4 \ub192\uc544\uc9d1\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\ucd94\uce21\uc774 \uc544\ub2cc \ub370\uc774\ud130 \uae30\ubc18 \uc758\uc0ac\uacb0\uc815"),(0,o.kt)("p",{parentName:"li"},"A/B \ud14c\uc2a4\ud2b8\ub294 \ucd94\uce21\uc774 \uc544\ub2cc \ub370\uc774\ud130\uc5d0 \uc758\ud55c \uc758\uc0ac\uacb0\uc815\uc744 \ub0b4\ub9ac\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4. \ud398\uc774\uc9c0\uc5d0\uc11c \ubcf4\ub0b8 \uc2dc\uac04, \ud074\ub9ad\ub960, \uc7ac\ubc29\ubb38\uc728, \uad6c\ub9e4 \uc804\ud658\uc728 \ub4f1 \ud1b5\uacc4\uc801\uc73c\ub85c \uc720\uc758\ubbf8\ud55c \ub370\uc774\ud130\ub97c \uac00\uc9c0\uace0 \uc5b4\ub5a4 \uac83\uc774 \ub354 \ub098\uc740 \ubc84\uc804\uc778\uc9c0\ub97c \uacb0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uc548\uc804\ud558\uac8c \ub354 \ub098\uc740 ROI(","*",") \uc5bb\uae30"),(0,o.kt)("p",{parentName:"li"},"\uc6f9\uc0ac\uc774\ud2b8\ub97c \ud1b5\uc9f8\ub85c \uac1c\ud3b8\ud558\ub294 \uac83\uc740 \uadf8\ub9cc\ud07c \uc704\ud5d8\uc774 \ub530\ub985\ub2c8\ub2e4. \uac1c\ud3b8\ud558\ub294 \ub370\uc5d0\ub3c4 \ub9ce\uc740 \ub9ac\uc18c\uc2a4\uac00 \ub4dc\ub294\ub370 \uac1c\ud3b8 \ud6c4\uc5d0 \ubc29\ubb38\uc790\ub4e4\uc774 \uac1c\ud3b8\ub41c \uc0ac\uc774\ud2b8\ub97c \ub354 \uc88b\uc544\ud560\uc9c0 \ud655\uc2e4\ud558\uac8c \uc54c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",{parentName:"li"},"A/B \ud14c\uc2a4\ud2b8\ub294 \uc774\ub7f0 \uc704\ud5d8\uc744 \uac10\uc218\ud558\uc9c0 \uc54a\uace0 \ub354 \ub098\uc740 ROI\ub97c \uc5bb\uac8c \ud574\uc90d\ub2c8\ub2e4. A/B \ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud574 \uc870\uae08\uc529 \uc870\uae08\uc529 \ud398\uc774\uc9c0\ub97c \ubcc0\uacbd\ud574\ub098\uac00\ub294 \ubc29\ubc95\uc740 \ucd5c\uc18c\ud55c\uc758 \uc218\uc815\uc73c\ub85c \ucd5c\ub300\ud55c\uc758 \ud6a8\uacfc\ub97c \uc0b0\ucd9c\ud558\uac8c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,o.kt)("h2",{id:"ab-\ud14c\uc2a4\ud2b8-\ud504\ub85c\uc138\uc2a4"},"A/B \ud14c\uc2a4\ud2b8 \ud504\ub85c\uc138\uc2a4"),(0,o.kt)("p",null,"\uc2e4\uc81c A/B \ud14c\uc2a4\ud2b8\uc758 \uc124\uacc4\uc640 \uad6c\ud604\uc740 \ud6e8\uc52c \ubcf5\uc7a1\ud560 \uc218 \uc788\uc9c0\ub9cc \uc5ec\uae30\uc11c\ub294 \uac04\ub2e8\ud55c \ud750\ub984\ub9cc \uc18c\uac1c\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uac01\uc885 \ub274\uc2a4\ub4e4\uc744 \ubaa8\uc544\uc11c \ubcf4\uc5ec\uc8fc\ub294 \ub274\uc2a4 \uc5b4\ud50c\uc774 \uc788\ub2e4\uace0 \uac00\uc815\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc774 \uc5b4\ud50c\uc5d0 \ub4e4\uc5b4\uac00\uba74 \ub274\uc2a4\ub4e4\uc774 \ub9ac\uc2a4\ud2b8 \ud615\ud0dc\ub85c \ub098\uc5f4\ub418\uace0, \ud604\uc7ac\ub294 \ud398\uc774\uc9c0\ub124\uc774\uc158\uc744 \ud1b5\ud574 \ub354 \ub9ce\uc740 \ub274\uc2a4\ub97c \ubcfc \uc218 \uc788\ub294 \uc0c1\ud0dc\ub77c\uace0 \uac00\uc815\ud574\ubd05\uc2dc\ub2e4. \uadf8\ub7f0\ub370 \ud639\uc2dc \ud398\uc774\uc9c0\ub124\uc774\uc158 \ubc29\ubc95\uc774 \uc544\ub2c8\ub77c \uc2a4\ud06c\ub864\uc774 \uc5b4\ub290 \ubd80\ubd84\uc5d0 \uc624\uba74 \ub2e4\uc74c \ub274\uc2a4\ub97c \uc790\ub3d9\uc73c\ub85c \ubd88\ub7ec\uc624\uac8c \ud558\ub294 \ubb34\ud55c \uc2a4\ud06c\ub864\uc744 \uad6c\ud604\ud558\uba74 \uc720\uc800\ub4e4\uc774 \ub354 \ub9ce\uc740 \ub274\uc2a4\ub97c \uc77d\uc744\uae4c\uc694? \uc774\ub97c \uac80\uc99d\ud558\uae30 \uc704\ud574 A/B \ud14c\uc2a4\ud2b8\ub97c \ud574\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("img",{parentName:"th",src:"https://www.knowband.com/blog/wp-content/uploads/2019/05/infinite-scroll-and-pagination.jpg",alt:"infinite-scroll-vs-pagination"})))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("em",{parentName:"td"},"\uc774\ubbf8\uc9c0 \ucd9c\ucc98 - ",(0,o.kt)("a",{parentName:"em",href:"https://www.knowband.com/blog/ecommerce-blog/pagination-vs-infinite-scrolling/"},"https://www.knowband.com/blog/ecommerce-blog/pagination-vs-infinite-scrolling/")))))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uac00\uc124 \uc124\uc815"),(0,o.kt)("p",{parentName:"li"},"\uc6b0\uc120 \uac80\uc99d\ud558\uace0\uc790 \ud558\ub294 \uac00\uc124\uc744 \uc138\uc6cc\uc57c \ud569\ub2c8\ub2e4. \uc81c\uac00 \uc138\uc6b4 \uac00\uc124\uc740 ",(0,o.kt)("strong",{parentName:"p"},"\ud398\uc774\uc9c0\ub124\uc774\uc158\ubcf4\ub2e4 \ubb34\ud55c \uc2a4\ud06c\ub864\uc744 \uc0ac\uc6a9\ud588\uc744 \ub54c \ubc29\ubb38\uc790\ub4e4\uc774 \uc774 \uc5b4\ud50c\uc5d0\uc11c \ub354 \ub9ce\uc740 \uc2dc\uac04\uc744 \ubcf4\ub0bc \uac83\uc774\ub2e4"),"\ub77c\ub294 \uac00\uc124\uc785\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uba54\ud2b8\ub9ad \uc124\uc815"),(0,o.kt)("p",{parentName:"li"},"\uba54\ud2b8\ub9ad\uc740 \uc704\uc5d0\uc11c \uc138\uc6b4 \uac00\uc124\uc774 \ucc38\uc778\uc9c0 \uac70\uc9d3\uc778\uc9c0\ub97c \ud310\ub2e8\ud558\uae30 \uc704\ud574 \uce21\uc815\ud574\uc57c \ud558\ub294 \ud56d\ubaa9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc774 \uac00\uc124\uc774 \ub9de\ub294\uc9c0 \uac80\uc99d\ud558\ub824\uba74 ",(0,o.kt)("strong",{parentName:"p"},"\ubc29\ubb38\uc790\ub4e4\uc774 \ud574\ub2f9 \uc5b4\ud50c\uc5d0\uc11c \uba38\ubb38 \uc2dc\uac04"),"\uc744 \uce21\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uc2e4\ud5d8 \uc124\uacc4"),(0,o.kt)("p",{parentName:"li"},"\uac00\uc124\uc774 \ub9de\ub294\uc9c0\ub97c \uc62c\ubc14\ub974\uac8c \uac80\uc99d\ud558\ub824\uba74 \uac80\uc99d\ud558\ub824\ub294 \uac00\uc124 \uc678\uc758 \ub2e4\ub978 \ud658\uacbd\uc740 \ubaa8\ub450 \ub3d9\uc77c\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \ub274\uc2a4\uc758 \ub178\ucd9c \uc21c\uc11c\uac00 \ub2ec\ub77c\uc9c4\ub2e4\ub4e0\uc9c0, \ub274\uc2a4 \ud5e4\ub4dc\ub77c\uc778\uc758 \ud3f0\ud2b8 \ud06c\uae30\uac00 \ubc14\ub010\ub2e4\ub4e0\uc9c0 \ub4f1\uc758 \ucd94\uac00 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc5c6\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \ubc84\uc804\uc5d0\uc11c\uc758 \ub2ec\ub77c\uc9c4 \uc810\uc740 \ud398\uc774\uc9c0\ub124\uc774\uc158 \ub300\uc2e0 \ubb34\ud55c \uc2a4\ud06c\ub864\uc774 \uc801\uc6a9\ub410\ub2e4\ub294 \uc810 \ubfd0\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\uacb0\uacfc \ub3c4\ucd9c"),(0,o.kt)("p",{parentName:"li"},"\uc2e4\ud5d8 \uacb0\uacfc\ub97c \ud1b5\ud574 \uce21\uc815\ub41c \uba54\ud2b8\ub9ad \uac04 \ucc28\uc774\uac00 \ud1b5\uacc4\uc801\uc73c\ub85c \uc720\uc758\ubbf8\ud55c\uc9c0 \ud655\uc778\ud558\uc5ec \ub354 \ub098\uc740 \ubc84\uc804\uc774 \ubb34\uc5c7\uc778\uc9c0 \uacb0\uc815\ud569\ub2c8\ub2e4."))),(0,o.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,o.kt)("p",null,"A/B \ud14c\uc2a4\ud2b8\uc758 \uac1c\ub150, \uc774\uc810, \ud504\ub85c\uc138\uc2a4\uc5d0 \ub300\ud574 \uac04\ub2e8\ud558\uac8c \uc124\uba85\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4. A/B \ud14c\uc2a4\ud2b8\uc5d0\ub294 \uc5ec\ub7ec\uac00\uc9c0 \uc194\ub8e8\uc158\uc774 \uc788\uc9c0\ub9cc \ub9cc\uc57d \uad6c\uae00 \uc560\ub110\ub9ac\ud2f1\uc2a4\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\ub2e4\uba74 ",(0,o.kt)("a",{parentName:"p",href:"https://optimize.google.com/"},"\uad6c\uae00 \uc635\ud2f0\ub9c8\uc774\uc988"),"\ub97c \uc0ac\uc6a9\ud574\uc11c \uac04\ub2e8\ud55c ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/optimize/answer/6211930#zippy=%2C%EC%9D%B4-%EB%8F%84%EC%9B%80%EB%A7%90%EC%97%90-%EB%82%98%EC%99%80-%EC%9E%88%EB%8A%94-%EB%82%B4%EC%9A%A9%EC%9D%80-%EB%8B%A4%EC%9D%8C%EA%B3%BC-%EA%B0%99%EC%8A%B5%EB%8B%88%EB%8B%A4"},"A/B \ud14c\uc2a4\ud2b8"),"\ub97c \uc218\ud589\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub9cc \ud604\uc7ac\ub294 UA\ub9cc \uc9c0\uc6d0\ud558\uace0 GA4\ub294 \uc9c0\uc6d0\ud558\uace0 \uc788\uc9c0 \uc54a\uc73c\ub2c8 \ucc38\uace0\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. A/B \ud14c\uc2a4\ud2b8\uc758 \uac1c\ub150\uc744 \uc774\ud574\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\uc5c8\uae30\ub97c \ubc14\ub77c\uba70 \uae00\uc744 \ub9c8\uce58\uaca0\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"(","*",") ROI: \ube44\uc6a9 \ub300\ube44 \uc218\uc775 \ube44\uc728. ROI\uac00 \ub192\ub2e4\ub294 \uac83\uc740 \ud22c\uc790\ube44\uc6a9 \ub300\ube44 \uc88b\uc740 \uc131\uacfc\ub97c \ub0c8\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4."))}u.isMDXComponent=!0}}]);