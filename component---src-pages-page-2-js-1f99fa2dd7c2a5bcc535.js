(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(t,e,a){"use strict";a.r(e);var n=a(8),r=(a(0),a(146)),i=a(153),o=a(151);e.default=function(){return Object(n.a)(i.a,null,Object(n.a)(o.a,{title:"Page two"}),Object(n.a)("h1",null,"Hi from the second page"),Object(n.a)("p",null,"Welcome to page 2"),Object(n.a)(r.Link,{to:"/"},"Go back to the homepage"))}},146:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return m}),a.d(e,"StaticQueryContext",function(){return g}),a.d(e,"StaticQuery",function(){return b});var n=a(8),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(145),u=a.n(s);a.d(e,"Link",function(){return u.a}),a.d(e,"withPrefix",function(){return s.withPrefix}),a.d(e,"navigate",function(){return s.navigate}),a.d(e,"push",function(){return s.push}),a.d(e,"replace",function(){return s.replace}),a.d(e,"navigateTo",function(){return s.navigateTo});var d=a(147),l=a.n(d);a.d(e,"PageRenderer",function(){return l.a});var p=a(35);a.d(e,"parsePath",function(){return p.a});var g=i.a.createContext({}),b=function(t){return Object(n.a)(g.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(n.a)("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(t,e,a){var n;t.exports=(n=a(149))&&n.default||n},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Frontend Daily"}}}}},149:function(t,e,a){"use strict";a.r(e);a(53);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(54),s=a(2),u=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},150:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYm9vay1vcGVuIj48cGF0aCBkPSJNMiAzaDZhNCA0IDAgMCAxIDQgNHYxNGEzIDMgMCAwIDAtMy0zSDJ6Ij48L3BhdGg+PHBhdGggZD0iTTIyIDNoLTZhNCA0IDAgMCAwLTQgNHYxNGEzIDMgMCAwIDEgMy0zaDd6Ij48L3BhdGg+PC9zdmc+"},151:function(t,e,a){"use strict";var n=a(8),r=a(152),i=(a(0),a(4)),o=a.n(i),c=a(155),s=a.n(c),u=a(146);function d(t){var e=t.description,a=t.lang,i=t.meta,o=t.keywords,c=t.title;return Object(n.a)(u.StaticQuery,{query:l,render:function(t){var r=e||t.site.siteMetadata.description;return Object(n.a)(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:r})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=d;var l="1025518380"},152:function(t){t.exports={data:{site:{siteMetadata:{title:"Frontend Daily",description:"A hand-curated daily digest of articles about frontend development.",author:"Kimdhoe"}}}}},153:function(t,e,a){"use strict";var n=a(26),r=a(8),i=a(148),o=(a(0),a(4)),c=a.n(o),s=a(146),u=(a(150),function(t){var e=t.siteTitle;return Object(r.a)("div",{css:Object(n.a)([d.container],"")},Object(r.a)("div",{css:Object(n.a)([d.wrapper],"")},Object(r.a)("h1",{css:Object(n.a)([d.heading],"")},e),Object(r.a)("h2",{css:Object(n.a)([d.subtitle],"")},"읽은 글을 기록/공유하기 위한 미니 큐레이션 프로젝트.",Object(r.a)("br",null),"그날그날 읽고 선별한 Front-end 개발 관련 글을 업데이트합니다.")))});u.propTypes={siteTitle:c.a.string};var d={container:{},wrapper:{margin:"0 auto",padding:"1.5em 0",maxWidth:768},heading:{letterSpacing:1},subtitle:{fontSize:17,lineHeight:1.7,fontWeight:400}},l=u,p=(a(154),function(t){var e=t.children;return Object(r.a)(s.StaticQuery,{query:"755544856",render:function(t){return Object(r.a)("div",{css:Object(n.a)([g.container],"")},Object(r.a)(l,{siteTitle:t.site.siteMetadata.title}),Object(r.a)("div",{css:Object(n.a)([g.contentContainer],"")},Object(r.a)("main",null,e),Object(r.a)("footer",{css:Object(n.a)([g.footer],"")})))},data:i})});p.propTypes={children:c.a.node.isRequired};var g={container:{},contentContainer:{margin:"0 auto",maxWidth:768},footer:{marginTop:"5em"}};e.a=p}}]);
//# sourceMappingURL=component---src-pages-page-2-js-1f99fa2dd7c2a5bcc535.js.map