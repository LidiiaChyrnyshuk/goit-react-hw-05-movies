"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[583],{4672:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,c=e(7689),o=e(168),u=e(5706),i=e(1087),s=u.Z.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),p=(0,u.Z)(i.rU)(a||(a=(0,o.Z)(["\n  display: block;\n  padding: 8px;\n  font-size: 20px;\n  text-decoration: none;\n\n  \u0441olor: black;\n\n  transition: 250ms color cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    color: aqua;\n  }\n"]))),l=e(7398),f=e(184),d=function(n){var t=n.movies,e=(0,c.TH)();return(0,f.jsx)(l.R,{children:(0,f.jsx)(s,{children:t.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(p,{to:"/movies/".concat(n.id),state:{from:e},children:n.title?n.title:"N/A"})},n.id)}))})})}},7398:function(n,t,e){e.d(t,{R:function(){return c}});var r,a=e(168),c=e(5706).Z.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n\n  & > h1 {\n    text-align: center;\n  }\n"])))},1583:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,c,o=e(9439),u=e(5305),i=e(4672),s=e(2791),p=e(168),l=e(5706),f=l.Z.form(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  justify-content: center;\n  width: 350px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n"]))),d=l.Z.input(a||(a=(0,p.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 100%;\n  font-size: 20px;\n  border-radius: 4px;\n  border-color: aqua;\n  padding: 8px;\n  background-color: transparent;\n  color: inherit;\n  outline: none;\n\n  &::placeholder {\n    font-size: 16px;\n  }\n"]))),h=l.Z.button(c||(c=(0,p.Z)(["\n  display: inline-block;\n  width: 80px;\n  height: 45px;\n  font-size: 16px;\n  border: 0;\n  padding: 5px;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: aqua;\n"]))),x=e(184),v=function(n){var t=n.onSubmit,e=(0,s.useState)(""),r=(0,o.Z)(e,2),a=r[0],c=r[1];return(0,x.jsxs)(f,{onSubmit:function(n){n.preventDefault(),a?(t(a),c("")):alert("Enter new name")},children:[(0,x.jsx)("label",{children:(0,x.jsx)(d,{onChange:function(n){c(n.target.value)},value:a,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})}),(0,x.jsx)(h,{type:"submit",children:"Seach"})]})},m=e(1087),b=e(273),g=function(){var n=(0,s.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,m.lr)(),c=(0,o.Z)(a,2),p=c[0],l=c[1],f=(0,s.useState)(!1),d=(0,o.Z)(f,2),h=d[0],g=d[1];(0,s.useEffect)((function(){var n=p.get("query");n&&(0,b.Nr)(n).then(r).finally((function(){g(!1)}))}),[p]);return(0,x.jsx)("section",{children:(0,x.jsxs)("div",{children:[(0,x.jsx)(v,{onSubmit:function(n){l({query:n})}}),e&&(0,x.jsx)(i.Z,{movies:e}),h&&(0,x.jsx)(u.Z,{})]})})}},273:function(n,t,e){e.d(t,{FL:function(){return p},Nr:function(){return s},Xj:function(){return f},gI:function(){return l},re:function(){return i}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=new URLSearchParams({method:"GET",api_key:"2bd24135f91a853c6b382cb0cbb4f46b",language:"en-US",include_adult:!1,headers:{accept:"application/json"}}),i=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/all/day",n.next=3,o.Z.get("".concat("/trending/all/day","?").concat(u));case 3:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",n.next=3,o.Z.get("".concat("/search/movie","?").concat(u,"&query=").concat(t));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t),n.next=3,o.Z.get("".concat(e,"?").concat(u));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits"),n.next=3,o.Z.get("".concat(e,"?").concat(u));case 3:return r=n.sent,a=r.data,n.abrupt("return",a.cast);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews"),n.next=3,o.Z.get("".concat(e,"?").concat(u));case 3:return r=n.sent,a=r.data,n.abrupt("return",a.results);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=583.c23d5d06.chunk.js.map