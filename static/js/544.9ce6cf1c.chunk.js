"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{4672:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,c=e(7689),u=e(168),o=e(5706),i=e(1087),s=o.Z.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),f=(0,o.Z)(i.rU)(a||(a=(0,u.Z)(["\n  display: block;\n  padding: 8px;\n  font-size: 16px;\n  text-decoration: none;\n  border-radius: 4px;\n  box-shadow: 0 0 8px rgba(100, 234, 234, 0.451);\n  transition: 0.2s color cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: #afe5e5;\n  }\n"]))),p=e(184),d=function(n){var t=n.movies,e=(0,c.TH)();return(0,p.jsx)(s,{children:t.map((function(n){return(0,p.jsx)("li",{children:(0,p.jsx)(f,{to:"/movies/".concat(n.id),state:{from:e},children:n.title?n.title:"N/A"})},n.id)}))})}},9544:function(n,t,e){e.r(t);var r=e(9439),a=e(2791),c=e(273),u=e(5305),o=e(4672),i=e(7398),s=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],f=t[1],p=(0,a.useState)(!1),d=(0,r.Z)(p,2),l=d[0],v=d[1];return(0,a.useEffect)((function(){v(!0),(0,c.re)().then(f).finally((function(){v(!1)}))}),[]),(0,s.jsx)("main",{children:(0,s.jsxs)(i.R,{children:[(0,s.jsx)(o.Z,{movies:e}),l&&(0,s.jsx)(u.Z,{})]})})}},7398:function(n,t,e){e.d(t,{R:function(){return c}});var r,a=e(168),c=e(5706).Z.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n"])))},273:function(n,t,e){e.d(t,{FL:function(){return f},Nr:function(){return s},Xj:function(){return d},gI:function(){return p},re:function(){return i}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=new URLSearchParams({method:"GET",api_key:"2bd24135f91a853c6b382cb0cbb4f46b",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),i=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/all/day",n.next=3,u.Z.get("".concat("/trending/all/day","?").concat(o));case 3:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",n.next=3,u.Z.get("".concat("/search/movie","?").concat(o,"&query=").concat(t));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t),n.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits"),n.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews"),n.next=3,u.Z.get("".concat(e,"?").concat(o));case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.9ce6cf1c.chunk.js.map