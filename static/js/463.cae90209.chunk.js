"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[463],{7463:function(t,n,r){r.r(n),r.d(n,{default:function(){return d}});var e,a=r(9439),c=r(168),u=r(5706).Z.ul(e||(e=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),o=r(184),s=function(t){var n=t.cast;return(0,o.jsx)(u,{children:n.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):"https://via.placeholder.com/100x150",alt:"".concat(t.name)}),(0,o.jsx)("p",{children:t.name}),(0,o.jsxs)("p",{children:["Character:",t.character]})]},t.id)}))})},i=r(5305),p=r(2791),f=r(7689),l=r(273),d=function(){var t=(0,p.useState)(null),n=(0,a.Z)(t,2),r=n[0],e=n[1],c=(0,p.useState)(!1),u=(0,a.Z)(c,2),d=u[0],h=u[1],v=(0,f.UO)().movieId;return(0,p.useEffect)((function(){h(!0),(0,l.gI)(v).then(e).finally(h(!1))}),[v]),(0,o.jsxs)("div",{children:[d&&(0,o.jsx)(i.Z,{}),0===(null===r||void 0===r?void 0:r.length)&&(0,o.jsx)("p",{children:"Sorry, we don't have information."}),r&&(0,o.jsx)(s,{cast:r})]})}},273:function(t,n,r){r.d(n,{FL:function(){return p},Nr:function(){return i},Xj:function(){return l},gI:function(){return f},re:function(){return s}});var e=r(5861),a=r(4687),c=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=new URLSearchParams({method:"GET",api_key:"2bd24135f91a853c6b382cb0cbb4f46b",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),s=function(){var t=(0,e.Z)(c().mark((function t(){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/all/day",t.next=3,u.Z.get("".concat("/trending/all/day","?").concat(o));case 3:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/search/movie",t.next=3,u.Z.get("".concat("/search/movie","?").concat(o,"&query=").concat(n));case 3:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(n),t.next=3,u.Z.get("".concat(r,"?").concat(o));case 3:return e=t.sent,a=e.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(n,"/credits"),t.next=3,u.Z.get("".concat(r,"?").concat(o));case 3:return e=t.sent,a=e.data,t.abrupt("return",a.cast);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,e.Z)(c().mark((function t(n){var r,e,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(n,"/reviews"),t.next=3,u.Z.get("".concat(r,"?").concat(o));case 3:return e=t.sent,a=e.data,t.abrupt("return",a.results);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=463.cae90209.chunk.js.map