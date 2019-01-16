(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,n){"use strict";n.r(t);var a=n(26),r=n(8),i=(n(0),n(153)),o=n(151),c=(n(165),n(4),{container:{marginBottom:10},link:{display:"flex",alignItems:"center",borderRadius:7,textDecoration:"none",color:"#444",backgroundColor:"#f8f9fa",transition:"all 70ms","&:hover":{backgroundColor:"white",boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 16px"}},left:{display:"flex",alignItems:"center",justifyContent:"center",marginRight:"0.5em",width:70,padding:"2.5em 0",textAlign:"center",borderRadius:7},right:{},number:{margin:0,padding:0,fontWeight:"bold"},note:{margin:"0 0 0.5em 0",fontWeight:"bold",fontSize:"17px"},date:{margin:0,fontSize:"13px",color:"#adb5bd"}}),d=function(e){var t=e.number,n=e.date,i=e.note,o=e.url;return Object(r.a)("li",{css:Object(a.a)([c.container],"")},Object(r.a)("a",{href:o,css:Object(a.a)([c.link],"")},Object(r.a)("div",{css:Object(a.a)([c.left],"")},Object(r.a)("p",{css:Object(a.a)([c.number],"")},t,".")),Object(r.a)("div",{css:Object(a.a)([c.right],"")},Object(r.a)("p",{css:Object(a.a)([c.note],"")},i),Object(r.a)("p",{css:Object(a.a)([c.date],"")},n))))},s={list:{padding:0,listStyleType:"none"},footer:{marginTop:"5em"}};t.default=function(){return Object(r.a)(i.a,null,Object(r.a)(o.a,{title:"home",keywords:["frontend","developer","development","article"]}),Object(r.a)("ul",{css:Object(a.a)([s.list],"")},Object(r.a)(d,{number:11,date:"2019. 01. 16",note:"Why I've stopped exporting defaults from my JavaScript modules",url:"https://medium.com/frontend-daily/why-ive-stopped-exporting-defaults-from-my-javascript-modules-24391eef247c"}),Object(r.a)(d,{number:10,date:"2019. 01. 15",note:"Why I no longer use D3.js",url:"https://medium.com/frontend-daily/10-why-i-no-longer-use-d3-js-544d19128ca9"}),Object(r.a)(d,{number:9,date:"2019. 01. 14",note:"The elements of UI engineering",url:"https://medium.com/frontend-daily/9-the-elements-of-ui-engineering-d3302fd8173b"}),Object(r.a)(d,{number:8,date:"2019. 01. 13",note:"Transducers: Efficient data processing pipelines in JavaScript",url:"https://medium.com/frontend-daily/8-transducers-efficient-data-processing-pipelines-in-javascript-96afb0bfd4b5"}),Object(r.a)(d,{number:7,date:"2019. 01. 12",note:"Defensive JavaScript",url:"https://medium.com/frontend-daily/7-defensive-javascript-46bf4172e273"}),Object(r.a)(d,{number:6,date:"2019. 01. 11",note:"Linked lists in the wild: React Hooks",url:"https://medium.com/frontend-daily/6-linked-lists-in-the-wild-react-hooks-68082d59d3bc"}),Object(r.a)(d,{number:5,date:"2019. 01. 10",note:"A comprehensive look back at front-end in 2018",url:"https://medium.com/frontend-daily/5-a-comprehensive-look-back-at-front-end-in-2018-f08b852b4e97"}),Object(r.a)(d,{number:4,date:"2019. 01. 09",note:"Introducing React Hooks",url:"https://medium.com/frontend-daily/4-introducing-hooks-db43f3be428f"}),Object(r.a)(d,{number:3,date:"2019. 01. 08",note:"Better reusable React components with the overrides pattern",url:"https://medium.com/frontend-daily/3-better-reusable-react-components-with-the-overrides-pattern-bee73a42428e"}),Object(r.a)(d,{number:2,date:"2019. 01. 07",note:"A unified styling language",url:"https://medium.com/frontend-daily/2-a-unified-styling-language-b957e4daa8ea"}),Object(r.a)(d,{number:1,date:"2019. 01. 06",note:"Things I don't know",url:"https://medium.com/frontend-daily/1-things-i-dont-know-3dcc616811ef"})),Object(r.a)("footer",{css:Object(a.a)([s.footer],"")},"Curated by"," ",Object(r.a)("a",{href:"https://dhk.party"},"Kimdhoe")))}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return b});var a=n(8),r=n(0),i=n.n(r),o=n(4),c=n.n(o),d=n(145),s=n.n(d);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return d.withPrefix}),n.d(t,"navigate",function(){return d.navigate}),n.d(t,"push",function(){return d.push}),n.d(t,"replace",function(){return d.replace}),n.d(t,"navigateTo",function(){return d.navigateTo});var u=n(147),l=n.n(u);n.d(t,"PageRenderer",function(){return l.a});var p=n(35);n.d(t,"parsePath",function(){return p.a});var m=i.a.createContext({}),b=function(e){return Object(a.a)(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Frontend Daily"}}}}},149:function(e,t,n){"use strict";n.r(t);n(53);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(54),d=n(2),s=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYm9vay1vcGVuIj48cGF0aCBkPSJNMiAzaDZhNCA0IDAgMCAxIDQgNHYxNGEzIDMgMCAwIDAtMy0zSDJ6Ij48L3BhdGg+PHBhdGggZD0iTTIyIDNoLTZhNCA0IDAgMCAwLTQgNHYxNGEzIDMgMCAwIDEgMy0zaDd6Ij48L3BhdGg+PC9zdmc+"},151:function(e,t,n){"use strict";var a=n(8),r=n(152),i=(n(0),n(4)),o=n.n(i),c=n(155),d=n.n(c),s=n(146);function u(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,c=e.title;return Object(a.a)(s.StaticQuery,{query:l,render:function(e){var r=t||e.site.siteMetadata.description;return Object(a.a)(d.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var l="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Frontend Daily",description:"A hand-curated daily digest of articles about frontend development.",author:"Kimdhoe"}}}}},153:function(e,t,n){"use strict";var a=n(26),r=n(8),i=n(148),o=(n(0),n(4)),c=n.n(o),d=n(146),s=(n(150),function(e){var t=e.siteTitle;return Object(r.a)("div",{css:Object(a.a)([u.container],"")},Object(r.a)("div",{css:Object(a.a)([u.wrapper],"")},Object(r.a)("h1",{css:Object(a.a)([u.heading],"")},t),Object(r.a)("h2",{css:Object(a.a)([u.subtitle],"")},"읽은 글을 기록/공유하기 위한 미니 큐레이션 프로젝트.",Object(r.a)("br",null),"그날그날 읽고 선별한 Front-end 개발 관련 글을 업데이트합니다.")))});s.propTypes={siteTitle:c.a.string};var u={container:{},wrapper:{margin:"0 auto",padding:"1.5em 0",maxWidth:768},heading:{letterSpacing:1},subtitle:{fontSize:17,lineHeight:1.7,fontWeight:400}},l=s,p=(n(154),function(e){var t=e.children;return Object(r.a)(d.StaticQuery,{query:"755544856",render:function(e){return Object(r.a)("div",{css:Object(a.a)([m.container],"")},Object(r.a)(l,{siteTitle:e.site.siteMetadata.title}),Object(r.a)("div",{css:Object(a.a)([m.contentContainer],"")},Object(r.a)("main",null,t),Object(r.a)("footer",{css:Object(a.a)([m.footer],"")})))},data:i})});p.propTypes={children:c.a.node.isRequired};var m={container:{},contentContainer:{margin:"0 auto",maxWidth:768},footer:{marginTop:"5em"}};t.a=p},165:function(e,t,n){"use strict";n(166)("link",function(e){return function(t){return e(this,"a","href",t)}})},166:function(e,t,n){var a=n(12),r=n(27),i=n(18),o=/"/g,c=function(e,t,n,a){var r=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-pages-index-js-27ad531ea6e05acdcc65.js.map