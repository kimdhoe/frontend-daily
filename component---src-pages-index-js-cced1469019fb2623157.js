(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(t,e,n){"use strict";n.r(e);var a=n(26),i=n(8),r=(n(0),n(153)),o=n(151),c=(n(165),n(4),{container:{marginBottom:10},link:{display:"flex",alignItems:"center",borderRadius:7,textDecoration:"none",color:"#444",backgroundColor:"#f8f9fa",transition:"all 70ms","&:hover":{backgroundColor:"white",boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 16px"}},left:{display:"flex",alignItems:"center",justifyContent:"center",marginRight:"0.5em",width:70,padding:"2.5em 0",textAlign:"center",borderRadius:7},right:{},number:{margin:0,padding:0,fontWeight:"bold"},note:{margin:"0 0 0.5em 0",fontWeight:"bold",fontSize:"17px"},date:{margin:0,fontSize:"13px",color:"#adb5bd"}}),s=function(t){var e=t.number,n=t.date,r=t.note,o=t.url;return Object(i.a)("li",{css:Object(a.a)([c.container],"")},Object(i.a)("a",{href:o,css:Object(a.a)([c.link],"")},Object(i.a)("div",{css:Object(a.a)([c.left],"")},Object(i.a)("p",{css:Object(a.a)([c.number],"")},e,".")),Object(i.a)("div",{css:Object(a.a)([c.right],"")},Object(i.a)("p",{css:Object(a.a)([c.note],"")},r),Object(i.a)("p",{css:Object(a.a)([c.date],"")},n))))},d={list:{padding:0,listStyleType:"none"},footer:{marginTop:"5em"}};e.default=function(){return Object(i.a)(r.a,null,Object(i.a)(o.a,{title:"home",keywords:["frontend","developer","development","article"]}),Object(i.a)("ul",{css:Object(a.a)([d.list],"")},Object(i.a)(s,{number:8,date:"2019. 01. 13",note:"Transducers: Efficient data processing pipelines in JavaScript",url:"https://medium.com/@kimdhoe1/8-transducers-efficient-data-processing-pipelines-in-javascript-96afb0bfd4b5"}),Object(i.a)(s,{number:7,date:"2019. 01. 12",note:"Defensive JavaScript",url:"https://medium.com/@kimdhoe1/7-defensive-javascript-46bf4172e273"}),Object(i.a)(s,{number:6,date:"2019. 01. 11",note:"Linked lists in the wild: React Hooks",url:"https://medium.com/@kimdhoe1/6-linked-lists-in-the-wild-react-hooks-68082d59d3bc"}),Object(i.a)(s,{number:5,date:"2019. 01. 10",note:"A comprehensive look back at front-end in 2018",url:"https://medium.com/@kimdhoe1/5-a-comprehensive-look-back-at-front-end-in-2018-f08b852b4e97"}),Object(i.a)(s,{number:4,date:"2019. 01. 09",note:"Introducing React Hooks",url:"https://medium.com/@kimdhoe1/4-introducing-hooks-db43f3be428f"}),Object(i.a)(s,{number:3,date:"2019. 01. 08",note:"Better reusable React components with the overrides pattern",url:"https://medium.com/@kimdhoe1/3-better-reusable-react-components-with-the-overrides-pattern-bee73a42428e"}),Object(i.a)(s,{number:2,date:"2019. 01. 07",note:"A unified styling language",url:"https://medium.com/@kimdhoe1/2-a-unified-styling-language-b957e4daa8ea"}),Object(i.a)(s,{number:1,date:"2019. 01. 06",note:"Things I don't know",url:"https://medium.com/@kimdhoe1/1-things-i-dont-know-3dcc616811ef"})),Object(i.a)("footer",{css:Object(a.a)([d.footer],"")},"Curated by"," ",Object(i.a)("a",{href:"https://dhk.party"},"Kimdhoe")))}},146:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return b}),n.d(e,"StaticQuery",function(){return m});var a=n(8),i=n(0),r=n.n(i),o=n(4),c=n.n(o),s=n(145),d=n.n(s);n.d(e,"Link",function(){return d.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var u=n(147),l=n.n(u);n.d(e,"PageRenderer",function(){return l.a});var p=n(35);n.d(e,"parsePath",function(){return p.a});var b=r.a.createContext({}),m=function(t){return Object(a.a)(b.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.a)("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(t,e,n){var a;t.exports=(a=n(149))&&a.default||a},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Frontend Daily"}}}}},149:function(t,e,n){"use strict";n.r(e);n(53);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(54),s=n(2),d=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},150:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYm9vay1vcGVuIj48cGF0aCBkPSJNMiAzaDZhNCA0IDAgMCAxIDQgNHYxNGEzIDMgMCAwIDAtMy0zSDJ6Ij48L3BhdGg+PHBhdGggZD0iTTIyIDNoLTZhNCA0IDAgMCAwLTQgNHYxNGEzIDMgMCAwIDEgMy0zaDd6Ij48L3BhdGg+PC9zdmc+"},151:function(t,e,n){"use strict";var a=n(8),i=n(152),r=(n(0),n(4)),o=n.n(r),c=n(155),s=n.n(c),d=n(146);function u(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return Object(a.a)(d.StaticQuery,{query:l,render:function(t){var i=e||t.site.siteMetadata.description;return Object(a.a)(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:c},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:i}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},e.a=u;var l="1025518380"},152:function(t){t.exports={data:{site:{siteMetadata:{title:"Frontend Daily",description:"A hand-curated daily digest of articles about frontend development.",author:"Kimdhoe"}}}}},153:function(t,e,n){"use strict";var a=n(26),i=n(8),r=n(148),o=(n(0),n(4)),c=n.n(o),s=n(146),d=(n(150),function(t){var e=t.siteTitle;return Object(i.a)("div",{css:Object(a.a)([u.container],"")},Object(i.a)("div",{css:Object(a.a)([u.wrapper],"")},Object(i.a)("h1",{css:Object(a.a)([u.heading],"")},e),Object(i.a)("h2",{css:Object(a.a)([u.subtitle],"")},"읽은 글을 기록/공유하기 위한 미니 큐레이션 프로젝트.",Object(i.a)("br",null),"그날그날 읽고 선별한 Front-end 개발 관련 글을 업데이트합니다.")))});d.propTypes={siteTitle:c.a.string};var u={container:{},wrapper:{margin:"0 auto",padding:"1.5em 0",maxWidth:768},heading:{letterSpacing:1},subtitle:{fontSize:17,lineHeight:1.7,fontWeight:400}},l=d,p=(n(154),function(t){var e=t.children;return Object(i.a)(s.StaticQuery,{query:"755544856",render:function(t){return Object(i.a)("div",{css:Object(a.a)([b.container],"")},Object(i.a)(l,{siteTitle:t.site.siteMetadata.title}),Object(i.a)("div",{css:Object(a.a)([b.contentContainer],"")},Object(i.a)("main",null,e),Object(i.a)("footer",{css:Object(a.a)([b.footer],"")})))},data:r})});p.propTypes={children:c.a.node.isRequired};var b={container:{},contentContainer:{margin:"0 auto",maxWidth:768},footer:{marginTop:"5em"}};e.a=p},165:function(t,e,n){"use strict";n(166)("link",function(t){return function(e){return t(this,"a","href",e)}})},166:function(t,e,n){var a=n(12),i=n(27),r=n(18),o=/"/g,c=function(t,e,n,a){var i=String(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),a(a.P+a.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-pages-index-js-cced1469019fb2623157.js.map