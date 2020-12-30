(this["webpackJsonpimpact-frontend-challenge"]=this["webpackJsonpimpact-frontend-challenge"]||[]).push([[0],{46:function(t,e,n){},71:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),i=n(17),s=n.n(i),o=(n(46),n(21)),d=n(3),j=n(26),u=n(10),l=function(t){var e=t.shortList,n=void 0===e?"":e,a=t.reject,r=void 0===a?"":a,i=t.handleShortlist,s=t.handleReject;return Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{type:"button",onClick:i,children:n}),Object(c.jsx)("button",{type:"button",onClick:s,children:r})]})},b=function(t){var e=t.img,n=void 0===e?"":e,a=t.name,r=void 0===a?"":a,i=t.id,s=void 0===i?"":i,o=t.onClick;return Object(c.jsxs)("div",{className:"card",id:s,onClick:function(){return"function"===typeof o&&o(s)},children:[Object(c.jsx)("div",{className:"image",children:Object(c.jsx)("img",{src:n,alt:r})}),Object(c.jsx)("div",{className:"name",children:r})]})},h=n(23),O=n.n(h),f=n(37),p=n(38),m=n.n(p),v=function(){return function(){var t=Object(f.a)(O.a.mark((function t(e){var n,c,a,r,i;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");case 2:n=t.sent,c=n.status,a=void 0===c?"":c,r=n.data,i=void 0===r?[]:r,200===a&&e({type:"CANDIDATE_LIST",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=Object(u.b)((function(t){return{candidateList:t.data.data}}),(function(t){return{getCandidateList:function(){return t(v())}}}))((function(t){var e=t.candidateList,n=void 0===e?[]:e,r=t.getCandidateList,i=t.history,s=Object(a.useState)(""),o=Object(j.a)(s,2),d=o[0],u=o[1],h=Object(a.useState)(n),O=Object(j.a)(h,2),f=O[0],p=O[1];Object(a.useEffect)((function(){p(n)}),[n]),Object(a.useEffect)((function(){r()}),[]);var m=function(t){return i.push("/candidate/".concat(t))};return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)(l,{shortList:"ShortList",reject:"Reject",handleShortlist:function(){return i.push("/shortlisted")},handleReject:function(){return i.push("/rejected")}}),Object(c.jsx)("div",{className:"input",children:Object(c.jsx)("input",{type:"text",value:d,onChange:function(t){return function(t){u(t.target.value),t.target.value?p(n.filter((function(e){return e.name.toLowerCase().includes(t.target.value.toLowerCase())}))):p(n)}(t)}})}),Object(c.jsx)("div",{className:"displayCard",children:Array.isArray(n)&&f.map((function(t){return Object(c.jsx)(b,{img:t.Image,name:t.name,id:t.id,onClick:m})}))})]})})),g=n(39),y=Object(u.b)((function(t){return{candidateList:t.data}}),null)((function(t){var e=t.candidateList,n=void 0===e?[]:e,a=t.dispatch,r=t.history,i=Object(d.f)().id,s={};if(Array.isArray(n.data)){var o,j=Object(g.a)(n.data);try{for(j.s();!(o=j.n()).done;){var u=o.value;i===u.id&&(s=u)}}catch(h){j.e(h)}finally{j.f()}}return Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)(b,{img:s.Image,name:s.name,id:s.id}),Object(c.jsx)(l,{shortList:"ShortListed",reject:"Rejected",handleShortlist:function(){a({type:"SHORTLIST",payload:s}),r.push("/")},handleReject:function(){a({type:"REJECT",payload:s}),r.push("/")}})]})})),L=n(12),C=Object(u.b)((function(t){return{shortList:t.data.shortList,reject:t.data.reject}}),null)((function(t){var e=t.shortList,n=void 0===e?[]:e,a=t.reject,r=void 0===a?[]:a,i=t.history,s=[];s="/shortlisted"===window.location.pathname?Object(L.a)(n):Object(L.a)(r);var o=function(){return i.push("/")};return Object(c.jsx)("div",{className:"home",children:Object(c.jsx)("div",{className:"displayCardStatus",children:s.length?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"cardStatus",children:s.map((function(t){return Object(c.jsx)(b,{img:t.Image,name:t.name,id:t.id})}))}),Object(c.jsx)("button",{type:"button",onClick:o,children:"Go To Home Page"})]}):Object(c.jsxs)("div",{className:"noUser",children:["No Candidate selected.",Object(c.jsx)("button",{type:"button",onClick:o,children:"Go To Home Page"})]})})})})),N=function(t){var e=t.history;return Object(c.jsxs)("div",{className:"ErrorPage",children:["404...No such url exist",Object(c.jsx)("button",{type:"button",onClick:function(){return e.push("/")},children:"Go To Home Page"})]})},S=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:x}),Object(c.jsx)(d.a,{exact:!0,path:"/candidate/:id",component:y}),Object(c.jsx)(d.a,{exact:!0,path:"/shortlisted",component:C}),Object(c.jsx)(d.a,{exact:!0,path:"/rejected",component:C}),Object(c.jsx)(d.a,{component:N})]})})},T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))},E=n(11),w=n(9);var _=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=e.type,c=void 0===n?"":n,a=e.payload;switch(c){case"CANDIDATE_LIST":return Object(w.a)(Object(w.a)({},t),{},{data:Object(L.a)(a)});case"SHORTLIST":return t.shortList?Object(w.a)(Object(w.a)({},t),{},{shortList:[].concat(Object(L.a)(t.shortList),[a])}):Object(w.a)(Object(w.a)({},t),{},{shortList:[a]});case"REJECT":return t.reject?Object(w.a)(Object(w.a)({},t),{},{reject:[].concat(Object(L.a)(t.reject),[a])}):Object(w.a)(Object(w.a)({},t),{},{reject:[a]});default:return Object(w.a)({},t)}},I=n(40);var k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object(E.c)({data:_}),n=Object(E.e)(e,t,Object(E.d)(Object(E.a)(I.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(t){return t}));return n}(window.store);s.a.render(Object(c.jsx)(u.a,{store:k,children:Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(S,{})})}),document.getElementById("root")),T()}},[[71,1,2]]]);
//# sourceMappingURL=main.6e15dc5d.chunk.js.map