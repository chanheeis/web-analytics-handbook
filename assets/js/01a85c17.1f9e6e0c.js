"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[4013],{6165:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(3366),a=(r(7294),r(6010)),i=r(5992),l=r(6742),s="sidebar_2ahu",o="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",d="sidebarItem_2UVv",u="sidebarItemLink_1RT6",m="sidebarItemLinkActive_12pM",f=r(4973),h=r(5944);function v(e){var t=e.sidebar;return 0===t.items.length?null:(0,h.BX)("nav",{className:(0,a.Z)(s,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.tZ)("div",{className:(0,a.Z)(o,"margin-bottom--md"),children:t.title}),(0,h.tZ)("ul",{className:c,children:t.items.map((function(e){return(0,h.tZ)("li",{className:d,children:(0,h.tZ)(l.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:m,children:e.title})},e.permalink)}))})]})}var Z=r(571),g=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,r=e.toc,l=e.children,s=(0,n.Z)(e,g),o=t&&t.items.length>0;return(0,h.tZ)(i.Z,Object.assign({},s,{children:(0,h.tZ)("div",{className:"container margin-vert--lg",children:(0,h.BX)("div",{className:"row",children:[o&&(0,h.tZ)("aside",{className:"col col--3",children:(0,h.tZ)(v,{sidebar:t})}),(0,h.tZ)("main",{className:(0,a.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),children:l}),r&&(0,h.tZ)("div",{className:"col col--2",children:(0,h.tZ)(Z.Z,{toc:r})})]})})}))}},94:function(e,t,r){r.r(t);r(7294);var n=r(6742),a=r(6165),i=r(4973),l=r(3018),s=r(5944);t.default=function(e){var t=e.tags,r=e.sidebar,o=(0,i.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"}),c={};Object.keys(t).forEach((function(e){var t=function(e){return e[0].toUpperCase()}(e);c[t]=c[t]||[],c[t].push(e)}));var d=Object.entries(c).sort((function(e,t){var r=e[0],n=t[0];return r.localeCompare(n)})).map((function(e){var r=e[0],a=e[1];return(0,s.BX)("article",{children:[(0,s.tZ)("h2",{children:r}),a.map((function(e){return(0,s.BX)(n.Z,{className:"padding-right--md",href:t[e].permalink,children:[t[e].name," (",t[e].count,")"]},e)})),(0,s.tZ)("hr",{})]},r)})).filter((function(e){return null!=e}));return(0,s.BX)(a.Z,{title:o,wrapperClassName:l.kM.wrapper.blogPages,pageClassName:l.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:r,children:[(0,s.tZ)("h1",{children:o}),(0,s.tZ)("section",{className:"margin-vert--lg",children:d})]})}},571:function(e,t,r){r.d(t,{r:function(){return c},Z:function(){return d}});var n=r(7294),a=r(6010);var i=function(e,t,r){var a=(0,n.useState)(void 0),i=a[0],l=a[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=r}));if(t){if(t.getBoundingClientRect().top>=r){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var a=0,s=!1,o=document.getElementsByClassName(e);a<o.length&&!s;){var c=o[a],d=c.href,u=decodeURIComponent(d.substring(d.indexOf("#")+1));n.id===u&&(i&&i.classList.remove(t),c.classList.add(t),l(c),s=!0),a+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},l="tableOfContents_35-E",s=r(5944),o="table-of-contents__link";function c(e){var t=e.toc,r=e.isChild;return t.length?(0,s.tZ)("ul",{className:r?"":"table-of-contents table-of-contents__left-border",children:t.map((function(e){return(0,s.BX)("li",{children:[(0,s.tZ)("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),(0,s.tZ)(c,{isChild:!0,toc:e.children})]},e.id)}))}):null}var d=function(e){var t=e.toc;return i(o,"table-of-contents__link--active",100),(0,s.tZ)("div",{className:(0,a.Z)(l,"thin-scrollbar"),children:(0,s.tZ)(c,{toc:t})})}},6197:function(e,t,r){r.d(t,{Z:function(){return Z}});var n=r(3366),a=(r(7294),r(6010)),i=r(6742),l=r(3018),s=r(4996),o=r(3919),c="footerLogoLink_qW4Z",d=r(8465),u=r(8617),m=r(5944),f=["to","href","label","prependBaseUrlToHref"];function h(e){var t=e.to,r=e.href,a=e.label,l=e.prependBaseUrlToHref,c=(0,n.Z)(e,f),d=(0,s.Z)(t),h=(0,s.Z)(r,{forcePrependBaseUrl:!0});return(0,m.tZ)(i.Z,Object.assign({className:"footer__link-item"},r?{href:l?h:r}:{to:d},c,{children:r&&!(0,o.Z)(r)?(0,m.BX)("span",{children:[a,(0,m.tZ)(u.Z,{})]}):a}))}var v=function(e){var t=e.sources,r=e.alt;return(0,m.tZ)(d.Z,{className:"footer__logo",alt:r,sources:t})};var Z=function(){var e=(0,l.LU)().footer,t=e||{},r=t.copyright,n=t.links,o=void 0===n?[]:n,d=t.logo,u=void 0===d?{}:d,f={light:(0,s.Z)(u.src),dark:(0,s.Z)(u.srcDark||u.src)};return e?(0,m.tZ)("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style}),children:(0,m.BX)("div",{className:"container",children:[o&&o.length>0&&(0,m.tZ)("div",{className:"row footer__links",children:o.map((function(e,t){return(0,m.BX)("div",{className:"col footer__col",children:[null!=e.title?(0,m.tZ)("div",{className:"footer__title",children:e.title}):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?(0,m.tZ)("ul",{className:"footer__items",children:e.items.map((function(e,t){return e.html?(0,m.tZ)("li",{className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}},t):(0,m.tZ)("li",{className:"footer__item",children:(0,m.tZ)(h,Object.assign({},e))},e.href||e.to)}))}):null]},t)}))}),(u||r)&&(0,m.BX)("div",{className:"footer__bottom text--center",children:[u&&(u.src||u.srcDark)&&(0,m.tZ)("div",{className:"margin-bottom--sm",children:u.href?(0,m.tZ)(i.Z,{href:u.href,className:c,children:(0,m.tZ)(v,{alt:u.alt,sources:f})}):(0,m.tZ)(v,{alt:u.alt,sources:f})}),r?(0,m.tZ)("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null]})]})}):null}}}]);