(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{378:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(1)),l=o(n(424)),u=o(n(387)),a=o(n(385));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return r.default.createElement("div",null,r.default.createElement(u.default,{children:l.default}),r.default.createElement(a.default,{previous:{href:"/extending",name:"Extending"},next:{href:"/components",name:"Components"}}))}},384:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(8)),l=a(n(1)),u=n(12);function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return l.default.createElement(u.Heading,(0,r.default)({},e,{is:"h1",fontSize:[5,6,7,8],my:4}))}},385:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,l=n(1),u=(r=l)&&r.__esModule?r:{default:r},a=n(17),o=n(389),d=n(12);t.default=function(e){return u.default.createElement(d.Flex,{my:[3,5]},e.previous&&u.default.createElement(d.NavLink,{is:a.Link,to:e.previous.href},u.default.createElement(o.Chevron,{left:!0,size:16}),u.default.createElement(d.Text,{fontWeight:"bold",ml:2},e.previous.name)),e.next&&u.default.createElement(d.NavLink,{is:a.Link,ml:"auto",to:e.next.href},u.default.createElement(d.Text,{bold:!0,mr:2},e.next.name),u.default.createElement(o.Chevron,{right:!0,size:16})))}},387:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=p(n(8)),l=p(n(18)),u=p(n(24)),a=p(n(23)),o=p(n(22)),d=p(n(21)),f=p(n(1)),i=(p(n(7)),p(n(107))),c=p(n(391)),s=n(12),m=(function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);t.default=e}(s),p(n(384)));function p(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(){return(0,u.default)(this,t),(0,o.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,a.default)(t,[{key:"render",value:function(){return f.default.createElement(c.default,{source:this.props.children,renderers:v})}}]),t}(f.default.Component),v={code:function(e){var t=e.language,n=e.value;if(!/\./.test(t))return f.default.createElement(s.Pre,{fontSize:13,px:3,py:3,my:3,color:"blue",bg:"#fcfcff"},n);var r=!!/\.\./.test(t);return f.default.createElement(s.Box,{mb:3},f.default.createElement(i.default,{code:n,noInline:r}))},heading:function(e){return 1===e.level?f.default.createElement(m.default,e):f.default.createElement(s.BlockLink,{href:"#"+e.children},f.default.createElement(s.Heading,(0,r.default)({},e,{id:e.children,mt:5,mb:2})))},inlineCode:function(e){return f.default.createElement(s.Code,{color:"blue",children:e.value})},link:s.Link,paragraph:function(e){return f.default.createElement(s.Measure,(0,r.default)({},e,{maxWidth:"40em",mb:3}))}};t.default=h},424:function(e,t){e.exports="\n# Server Side Rendering\n\nRebass uses styled-components for styling, which works with server-side rendering.\nSee the styled-components\n[documentation](https://www.styled-components.com/docs/advanced#server-side-rendering)\nfor more on how to use Rebass for server-side rendering.\n\n```jsx\nimport { renderToString } from 'react-dom/server'\nimport { ServerStyleSheet } from 'styled-components'\nimport App from './App'\n\nconst sheet = new ServerStyleSheet()\nconst html = renderToString(sheet.collectStyles(<App />))\nconst css = sheet.getStyleTags()\n```\n\n"}}]);