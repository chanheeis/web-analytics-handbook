"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[5992],{917:function(e,t,n){n.d(t,{az:function(){return i}});var a=n(7294),r=(n(4042),n(4759)),i=(n(8679),n(4199),function(e,t){var n=arguments;if(null==t||!r.h.call(t,"css"))return a.createElement.apply(void 0,n);var i=n.length,o=new Array(i);o[0]=r.E,o[1]=(0,r.c)(e,t);for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)})},1875:function(e,t){t.Z=function(){return null}},8617:function(e,t,n){n.d(t,{Z:function(){return i}});n(7294);var a="iconExternalLink_3J9K",r=n(5944),i=function(e){var t=e.width,n=void 0===t?13.5:t,i=e.height,o=void 0===i?13.5:i;return(0,r.tZ)("svg",{width:n,height:o,"aria-hidden":"true",viewBox:"0 0 24 24",className:a,children:(0,r.tZ)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})}},5992:function(e,t,n){n.d(t,{Z:function(){return me}});var a=n(7294),r=n(6010),i=n(5977),o=n(4973),c=n(3018),l="skipToContent_1oUP",s=n(5944);function u(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var d=function(){var e=(0,a.useRef)(null),t=(0,i.k6)().action;return(0,c.SL)((function(n){var a=n.location;e.current&&!a.hash&&"PUSH"===t&&u(e.current)})),(0,s.tZ)("div",{ref:e,children:(0,s.tZ)("a",{href:"#",className:l,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&u(t)},children:(0,s.tZ)(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation",children:"Skip to main content"})})})},m="announcementBar_3WsW",f="announcementBarClose_38nx",h="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var b=function(){var e,t=(0,c.nT)(),n=t.isClosed,a=t.close,i=(0,c.LU)().announcementBar;if(!i)return null;var l=i.content,u=i.backgroundColor,d=i.textColor,b=i.isCloseable;return!l||b&&n?null:(0,s.BX)("div",{className:m,style:{backgroundColor:u,color:d},role:"banner",children:[(0,s.tZ)("div",{className:(0,r.Z)(h,(e={},e[v]=b,e)),dangerouslySetInnerHTML:{__html:l}}),b?(0,s.tZ)("button",{type:"button",className:(0,r.Z)(f,"clean-btn"),onClick:a,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"}),children:(0,s.tZ)("span",{"aria-hidden":"true",children:"\xd7"})}):null]})},g=n(1875),Z=n(2263),p={toggle:"toggle_71bT"},k=function(e){var t=e.icon,n=e.style;return(0,s.tZ)("span",{className:(0,r.Z)(p.toggle,p.dark),style:n,children:t})},w=function(e){var t=e.icon,n=e.style;return(0,s.tZ)("span",{className:(0,r.Z)(p.toggle,p.light),style:n,children:t})},_=(0,a.memo)((function(e){var t=e.className,n=e.icons,i=e.checked,o=e.disabled,c=e.onChange,l=(0,a.useState)(i),u=l[0],d=l[1],m=(0,a.useState)(!1),f=m[0],h=m[1],v=(0,a.useRef)(null);return(0,s.BX)("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":u,"react-toggle--focus":f,"react-toggle--disabled":o}),children:[(0,s.BX)("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()},children:[(0,s.tZ)("div",{className:"react-toggle-track-check",children:n.checked}),(0,s.tZ)("div",{className:"react-toggle-track-x",children:n.unchecked}),(0,s.tZ)("div",{className:"react-toggle-thumb"})]}),(0,s.tZ)("input",{ref:v,checked:u,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return d(!u)},onFocus:function(){return h(!0)},onBlur:function(){return h(!1)}})]})}));function C(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,r=t.lightIcon,i=t.lightIconStyle,o=(0,Z.Z)().isClient;return(0,s.tZ)(_,Object.assign({disabled:!o,icons:{checked:(0,s.tZ)(k,{icon:n,style:a}),unchecked:(0,s.tZ)(w,{icon:r,style:i})}},e))}var N=n(5350),y=n(7898),B=function(e){var t=(0,i.TH)(),n=(0,a.useState)(e),r=n[0],o=n[1],l=(0,a.useRef)(!1),s=(0,a.useState)(0),u=s[0],d=s[1],m=(0,a.useCallback)((function(e){null!==e&&d(e.getBoundingClientRect().height)}),[]);return(0,y.Z)((function(t,n){var a=t.scrollY,r=null==n?void 0:n.scrollY;if(e)if(a<u)o(!0);else{if(l.current)return l.current=!1,void o(!1);r&&0===a&&o(!0);var i=document.documentElement.scrollHeight-u,c=window.innerHeight;r&&a>=r?o(!1):a+c<i&&o(!0)}}),[u,l]),(0,c.SL)((function(t){e&&!t.location.hash&&o(!0)})),(0,a.useEffect)((function(){e&&t.hash&&(l.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:r}};var I=function(e){void 0===e&&(e=!0),(0,a.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},L=n(3783),D=n(4201),E=n(5537),S=n(3366),O=["width","height","className"],T=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,r=void 0===a?30:a,i=e.className,o=(0,S.Z)(e,O);return(0,s.tZ)("svg",Object.assign({className:i,width:n,height:r,viewBox:"0 0 30 30","aria-hidden":"true"},o,{children:(0,s.tZ)("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"})}))},j="toggle_3Zt9",x="navbarHideable_2qcr",A="navbarHidden_3yey",X=n(917),R="right";function M(){return(0,c.LU)().navbar.items}function U(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,N.Z)(),n=t.isDarkTheme,r=t.setLightTheme,i=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,a.useCallback)((function(e){return e.target.checked?i():r()}),[r,i]),disabled:e}}function z(e){var t=e.sidebarShown,n=e.toggleSidebar;I(t);var i=M(),l=U(),u=function(e){var t,n=e.sidebarShown,r=e.toggleSidebar,i=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:r}),o=(0,c.D9)(i),l=(0,a.useState)((function(){return!1})),s=l[0],u=l[1];(0,a.useEffect)((function(){i&&!o&&u(!0)}),[i,o]);var d=!!i;return(0,a.useEffect)((function(){d?n||u(!0):u(!1)}),[n,d]),{shown:s,hide:(0,a.useCallback)((function(){u(!1)}),[]),content:i}}({sidebarShown:t,toggleSidebar:n});return(0,s.BX)("div",{className:"navbar-sidebar",children:[(0,s.BX)("div",{className:"navbar-sidebar__brand",children:[(0,s.tZ)(E.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!l.disabled&&t&&(0,s.tZ)(C,{checked:l.isDarkTheme,onChange:l.toggle})]}),(0,s.BX)("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":u.shown}),children:[(0,s.tZ)("div",{className:"navbar-sidebar__item menu",children:(0,s.tZ)("ul",{className:"menu__list",children:i.map((function(e,t){return(0,X.az)(D.Z,Object.assign({mobile:!0},e,{onClick:n,key:t}))}))})}),(0,s.BX)("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu",children:[(0,s.tZ)("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:u.hide,children:(0,s.tZ)(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)",children:"\u2190 Back to main menu"})}),u.content]})]})]})}var P=function(){var e,t,n,i,o,l,u,d=(0,c.LU)().navbar,m=d.hideOnScroll,f=d.style,h=(t=(0,L.Z)(),n="mobile"===t,i=(0,a.useState)(!1),o=i[0],l=i[1],u=(0,a.useCallback)((function(){l((function(e){return!e}))}),[]),(0,a.useEffect)((function(){"desktop"===t&&l(!1)}),[t]),{shouldRender:n,toggle:u,shown:o}),v=U(),b=B(m),Z=b.navbarRef,p=b.isNavbarVisible,k=M(),w=k.some((function(e){return"search"===e.type})),_=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:R)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:R)}))}}(k),N=_.leftItems,y=_.rightItems;return(0,s.BX)("nav",{ref:Z,className:(0,r.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===f,"navbar--primary":"primary"===f,"navbar-sidebar--show":h.shown},e[x]=m,e[A]=m&&!p,e)),children:[(0,s.BX)("div",{className:"navbar__inner",children:[(0,s.BX)("div",{className:"navbar__items",children:[(null==k?void 0:k.length)>0&&(0,s.tZ)("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:h.toggle,onKeyDown:h.toggle,children:(0,s.tZ)(T,{})}),(0,s.tZ)(E.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),N.map((function(e,t){return(0,X.az)(D.Z,Object.assign({},e,{key:t}))}))]}),(0,s.BX)("div",{className:"navbar__items navbar__items--right",children:[y.map((function(e,t){return(0,X.az)(D.Z,Object.assign({},e,{key:t}))})),!v.disabled&&(0,s.tZ)(C,{className:j,checked:v.isDarkTheme,onChange:v.toggle}),!w&&(0,s.tZ)(g.Z,{})]})]}),(0,s.tZ)("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:h.toggle}),h.shouldRender&&(0,s.tZ)(z,{sidebarShown:h.shown,toggleSidebar:h.toggle})]})},H=n(6197),V=n(412),W=(0,c.WA)("theme"),G="light",Y="dark",q=function(e){return e===Y?Y:G},J=function(e){(0,c.WA)("theme").set(q(e))},K=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,r=e.respectPrefersColorScheme,i=(0,a.useState)(function(e){return V.Z.canUseDOM?q(document.documentElement.getAttribute("data-theme")):q(e)}(t)),o=i[0],l=i[1],s=(0,a.useCallback)((function(){l(G),J(G)}),[]),u=(0,a.useCallback)((function(){l(Y),J(Y)}),[]);return(0,a.useEffect)((function(){document.documentElement.setAttribute("data-theme",q(o))}),[o]),(0,a.useEffect)((function(){if(!n)try{var e=W.get();null!==e&&l(q(e))}catch(t){console.error(t)}}),[l]),(0,a.useEffect)((function(){n&&!r||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?Y:G)}))}),[]),{isDarkTheme:o===Y,setLightTheme:s,setDarkTheme:u}},Q=n(2924);var F=function(e){var t=K(),n=t.isDarkTheme,a=t.setLightTheme,r=t.setDarkTheme;return(0,s.tZ)(Q.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:r},children:e.children})},$="docusaurus.tab.",ee=function(){var e=(0,a.useState)({}),t=e[0],n=e[1],r=(0,a.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,a.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith($)){var n=t.substring($.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var a;return Object.assign({},n,((a={})[e]=t,a))})),r(e,t)}}},te=(0,a.createContext)(void 0);var ne=function(e){var t=ee(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return(0,s.tZ)(te.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a},children:e.children})};function ae(e){var t=e.children;return(0,s.tZ)(F,{children:(0,s.tZ)(c.pl,{children:(0,s.tZ)(ne,{children:(0,s.tZ)(c.L5,{children:(0,s.tZ)(c.Cn,{children:t})})})})})}var re=n(9105),ie=n(4996);function oe(e){var t=e.locale,n=e.version,a=e.tag;return(0,s.BX)(re.Z,{children:[t&&(0,s.tZ)("meta",{name:"docusaurus_locale",content:t}),n&&(0,s.tZ)("meta",{name:"docusaurus_version",content:n}),a&&(0,s.tZ)("meta",{name:"docusaurus_tag",content:a})]})}var ce=n(1217);function le(){var e=(0,Z.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,c.l5)();return(0,s.BX)(re.Z,{children:[n.map((function(e){return(0,s.tZ)("link",{rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e},e)})),(0,s.tZ)("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"})]})}function se(e){var t=e.permalink,n=(0,Z.Z)().siteConfig.url,a=function(){var e=(0,Z.Z)().siteConfig.url,t=(0,i.TH)().pathname;return e+(0,ie.Z)(t)}(),r=t?""+n+t:a;return(0,s.BX)(re.Z,{children:[(0,s.tZ)("meta",{property:"og:url",content:r}),(0,s.tZ)("link",{rel:"canonical",href:r})]})}function ue(e){var t=(0,Z.Z)(),n=t.siteConfig,a=n.favicon,r=n.themeConfig,i=r.metadatas,o=r.image,l=t.i18n,u=l.currentLocale,d=l.localeConfigs,m=e.title,f=e.description,h=e.image,v=e.keywords,b=e.searchMetadatas,g=(0,ie.Z)(a),p=(0,c.pe)(m),k=u,w=d[u].direction;return(0,s.BX)(s.HY,{children:[(0,s.BX)(re.Z,{children:[(0,s.tZ)("html",{lang:k,dir:w}),a&&(0,s.tZ)("link",{rel:"shortcut icon",href:g}),(0,s.tZ)("title",{children:p}),(0,s.tZ)("meta",{property:"og:title",content:p}),h||o&&(0,s.tZ)("meta",{name:"twitter:card",content:"summary_large_image"})]}),(0,s.tZ)(ce.Z,{description:f,keywords:v,image:h}),(0,s.tZ)(se,{}),(0,s.tZ)(le,{}),(0,s.tZ)(oe,Object.assign({tag:c.HX,locale:u},b)),(0,s.tZ)(re.Z,{children:i.map((function(e,t){return(0,s.tZ)("meta",Object.assign({},e),"metadata_"+t)}))})]})}var de=function(){(0,a.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var me=function(e){var t=e.children,n=e.noFooter,a=e.wrapperClassName,i=e.pageClassName;return de(),(0,s.BX)(ae,{children:[(0,s.tZ)(ue,Object.assign({},e)),(0,s.tZ)(d,{}),(0,s.tZ)(b,{}),(0,s.tZ)(P,{}),(0,s.tZ)("div",{className:(0,r.Z)(c.kM.wrapper.main,a,i),children:t}),!n&&(0,s.tZ)(H.Z,{})]})}},5537:function(e,t,n){var a=n(3366),r=(n(7294),n(6742)),i=n(8465),o=n(4996),c=n(2263),l=n(5944),s=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,c.Z)(),n=t.siteConfig,u=n.title,d=n.themeConfig.navbar,m=d.title,f=d.logo,h=void 0===f?{src:""}:f,v=t.isClient,b=e.imageClassName,g=e.titleClassName,Z=(0,a.Z)(e,s),p=(0,o.Z)(h.href||"/"),k={light:(0,o.Z)(h.src),dark:(0,o.Z)(h.srcDark||h.src)};return(0,l.BX)(r.Z,Object.assign({to:p},Z,h.target&&{target:h.target},{children:[h.src&&(0,l.tZ)(i.Z,{className:b,sources:k,alt:h.alt||m||u},v),null!=m&&(0,l.tZ)("b",{className:g,children:m})]}))}},5525:function(e,t,n){n.d(t,{O:function(){return h}});var a=n(3366),r=(n(7294),n(6010)),i=n(6742),o=n(4996),c=n(8617),l=n(3919),s=n(5944),u=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],m=["className","isDropdownItem"],f=["mobile","position"];function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,r=e.to,d=e.href,m=e.label,f=e.activeClassName,h=void 0===f?"navbar__link--active":f,v=e.prependBaseUrlToHref,b=(0,a.Z)(e,u),g=(0,o.Z)(r),Z=(0,o.Z)(t),p=(0,o.Z)(d,{forcePrependBaseUrl:!0}),k=m&&d&&!(0,l.Z)(d),w="dropdown__link--active"===h;return(0,s.tZ)(i.Z,Object.assign({},d?{href:v?p:d}:Object.assign({isNavLink:!0,activeClassName:h,to:g},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(Z)}}:null),b,{children:k?(0,s.BX)("span",{children:[m,(0,s.tZ)(c.Z,Object.assign({},w&&{width:12,height:12}))]}):m}))}function v(e){var t=e.className,n=e.isDropdownItem,i=void 0!==n&&n,o=(0,a.Z)(e,d),c=(0,s.tZ)(h,Object.assign({className:(0,r.Z)(i?"dropdown__link":"navbar__item navbar__link",t)},o));return i?(0,s.tZ)("li",{children:c}):c}function b(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,m));return(0,s.tZ)("li",{className:"menu__list-item",children:(0,s.tZ)(h,Object.assign({className:(0,r.Z)("menu__link",t)},n))})}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(e.position,(0,a.Z)(e,f)),i=n?b:v;return(0,s.tZ)(i,Object.assign({},r))}},6400:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3366),r=(n(7294),n(5525)),i=n(907),o=n(6010),c=n(3018),l=n(8780),s=n(5944),u=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,m=e.label,f=e.docsPluginId,h=(0,a.Z)(e,u),v=(0,i.Iw)(f),b=v.activeVersion,g=v.activeDoc,Z=(0,c.J)(f).preferredVersion,p=(0,i.yW)(f),k=function(e,t){var n=e.flatMap((function(e){return e.docs})),a=n.find((function(e){return e.id===t}));if(!a){var r=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+r)}return a}((0,l.uniq)([b,Z,p].filter(Boolean)),n);return(0,s.tZ)(r.Z,Object.assign({exact:!0},h,{className:(0,o.Z)(h.className,(t={},t[d]=g&&g.sidebar===k.sidebar,t)),label:null!=m?m:k.id,to:k.path}))}},9308:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3366),r=(n(7294),n(5525)),i=n(3154),o=n(907),c=n(3018),l=n(5944),s=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],u=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,m=e.docsPluginId,f=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,v=e.dropdownItemsAfter,b=(0,a.Z)(e,s),g=(0,o.Iw)(m),Z=(0,o.gB)(m),p=(0,o.yW)(m),k=(0,c.J)(m),w=k.preferredVersion,_=k.savePreferredVersionName;var C,N=(C=Z.map((function(e){var t=(null==g?void 0:g.alternateDocVersions[e.name])||u(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==g?void 0:g.activeVersion)},onClick:function(){_(e.name)}}})),[].concat(h,C,v)),y=null!=(t=null!=(n=g.activeVersion)?n:w)?t:p,B=d&&N?"Versions":y.label,I=d&&N?void 0:u(y).path;return N.length<=1?(0,l.tZ)(r.Z,Object.assign({},b,{mobile:d,label:B,to:I,isActive:f?function(){return!1}:void 0})):(0,l.tZ)(i.Z,Object.assign({},b,{mobile:d,label:B,to:I,items:N,isActive:f?function(){return!1}:void 0}))}},7250:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(3366),r=(n(7294),n(5525)),i=n(907),o=n(3018),c=n(5944),l=["label","to","docsPluginId"];function s(e){var t,n=e.label,s=e.to,u=e.docsPluginId,d=(0,a.Z)(e,l),m=(0,i.zu)(u),f=(0,o.J)(u).preferredVersion,h=(0,i.yW)(u),v=null!=(t=null!=m?m:f)?t:h,b=null!=n?n:v.label,g=null!=s?s:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(v).path;return(0,c.tZ)(r.Z,Object.assign({},d,{label:b,to:g}))}},3154:function(e,t,n){var a=n(3366),r=n(7294),i=n(6010),o=n(3018),c=n(5525),l=n(4201),s=n(5944),u=n(917),d=["items","position","className"],m=["items","className","position"],f=["mobile"];function h(e,t){return e.some((function(e){return function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,o=e.position,m=e.className,f=(0,a.Z)(e,d),h=(0,r.useRef)(null),v=(0,r.useRef)(null),b=(0,r.useState)(!1),g=b[0],Z=b[1];return(0,r.useEffect)((function(){var e=function(e){h.current&&!h.current.contains(e.target)&&Z(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[h]),(0,s.BX)("div",{ref:h,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===o,"dropdown--show":g}),children:[(0,s.tZ)(c.O,Object.assign({className:(0,i.Z)("navbar__item navbar__link",m)},f,{onClick:f.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),Z(!g))},children:null!=(t=f.children)?t:f.label})),(0,s.tZ)("ul",{ref:v,className:"dropdown__menu",children:n.map((function(e,t){return(0,u.az)(l.Z,Object.assign({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),Z(!1);var a=h.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))})]})}function b(e){var t,n=e.items,d=e.className,f=(e.position,(0,a.Z)(e,m)),v=(0,o.be)(),b=h(n,v),g=(0,o.uR)({initialState:function(){return!b}}),Z=g.collapsed,p=g.toggleCollapsed,k=g.setCollapsed;return(0,r.useEffect)((function(){b&&k(!b)}),[v,b]),(0,s.BX)("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":Z}),children:[(0,s.tZ)(c.O,Object.assign({role:"button",className:(0,i.Z)("menu__link menu__link--sublist",d)},f,{onClick:function(e){e.preventDefault(),p()},children:null!=(t=f.children)?t:f.label})),(0,s.tZ)(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:Z,children:n.map((function(e,t){return(0,u.az)(l.Z,Object.assign({mobile:!0,isDropdownItem:!0,onClick:f.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))})]})}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,f),i=n?b:v;return(0,s.tZ)(i,Object.assign({},r))}},4201:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(3366),r=(n(7294),n(5525)),i=n(3154),o=n(5944),c=["width","height"],l=function(e){var t=e.width,n=void 0===t?20:t,r=e.height,i=void 0===r?20:r,l=(0,a.Z)(e,c);return(0,o.tZ)("svg",Object.assign({viewBox:"0 0 20 20",width:n,height:i,"aria-hidden":"true"},l,{children:(0,o.tZ)("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"})}))},s=n(2263),u=n(3018),d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function m(e){var t=e.mobile,n=e.dropdownItemsBefore,r=e.dropdownItemsAfter,c=(0,a.Z)(e,d),m=(0,s.Z)().i18n,f=m.currentLocale,h=m.locales,v=m.localeConfigs,b=(0,u.l5)();function g(e){return v[e].label}var Z=h.map((function(e){var t="pathname://"+b.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:g(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===f?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),p=[].concat(n,Z,r),k=t?"Languages":g(f);return(0,o.tZ)(i.Z,Object.assign({},c,{href:"#",mobile:t,label:(0,o.BX)("span",{children:[(0,o.tZ)(l,{style:{verticalAlign:"text-bottom",marginRight:5}}),(0,o.tZ)("span",{children:k})]}),items:p}))}var f=n(1875);function h(e){return e.mobile?null:(0,o.tZ)(f.Z,{})}var v=["type"],b={default:function(){return r.Z},localeDropdown:function(){return m},search:function(){return h},dropdown:function(){return i.Z},docsVersion:function(){return n(7250).Z},docsVersionDropdown:function(){return n(9308).Z},doc:function(){return n(6400).Z}};function g(e){var t=e.type,n=(0,a.Z)(e,v),r=function(e){var t=b[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return(0,o.tZ)(r,Object.assign({},n))}},2924:function(e,t,n){var a=n(7294).createContext(void 0);t.Z=a},8465:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(3366),r=(n(7294),n(6010)),i=n(2263),o=n(5350),c={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},l=n(5944),s=["sources","className","alt"],u=function(e){var t=(0,i.Z)().isClient,n=(0,o.Z)().isDarkTheme,u=e.sources,d=e.className,m=e.alt,f=void 0===m?"":m,h=(0,a.Z)(e,s),v=t?n?["dark"]:["light"]:["light","dark"];return(0,l.tZ)(l.HY,{children:v.map((function(e){return(0,l.tZ)("img",Object.assign({src:u[e],alt:f,className:(0,r.Z)(c.themedImage,c["themedImage--"+e],d)},h),e)}))})}},7898:function(e,t,n){var a=n(7294),r=n(412),i=function(){return r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,a.useRef)(i()),r=function(){var t=i();e&&e(t,n.current),n.current=t};(0,a.useEffect)((function(){var e={passive:!0};return r(),window.addEventListener("scroll",r,e),function(){return window.removeEventListener("scroll",r,e)}}),t)}},5350:function(e,t,n){var a=n(7294),r=n(2924);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}}}]);