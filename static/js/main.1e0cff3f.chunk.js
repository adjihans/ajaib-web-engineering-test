(this["webpackJsonpajaib-web-engineering-test"]=this["webpackJsonpajaib-web-engineering-test"]||[]).push([[0],{37:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var r,i,c,a,s,o,d,l,u,j,f,b,h,O,p=t(0),v=t.n(p),x=t(9),g=t.n(x),m=(t(37),t(2)),y=t(4),E=t.n(y),w=t(6),C=t(7),k=t(3),S=t(15),T=t.p+"static/media/search.b25b4e95.svg",R=t(32),A=t(1),M=function(e){var n=e.genderOptions,t=e.gender,r=e.keyword,i=e.handleOnSelectGender,c=e.handleOnClickResetButton,a=e.handleOnClickSearchButton,s=e.handleOnChangeInputForm;return Object(A.jsxs)(N,{children:[Object(A.jsxs)(B,{children:[Object(A.jsx)("div",{children:"Search"}),Object(A.jsxs)(F,{children:[Object(A.jsx)(I,{placeholder:"Search...",value:r,onChange:function(e){return s(e)}}),Object(A.jsx)(L,{onClick:a,children:Object(A.jsx)(G,{src:T,alt:"search-logo"})})]})]}),Object(A.jsxs)(B,{children:[Object(A.jsx)("div",{children:"Gender"}),Object(A.jsxs)(D,{children:[Object(A.jsx)(R.a,{styles:P,options:n,value:t,onChange:function(e){return i(e)}}),Object(A.jsx)(H,{onClick:c,children:"Reset Filter"})]})]})]})},N=k.a.div(r||(r=Object(m.a)(["\n  margin: 1rem 0 3rem 0;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n"]))),B=k.a.div(i||(i=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  margin-right: 1rem;\n"]))),D=k.a.div(c||(c=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]))),F=k.a.form(a||(a=Object(m.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid gray;\n"]))),I=k.a.input(s||(s=Object(m.a)(["\n  height: 2rem;\n  width: 15rem;\n\n  cursor: text;\n  border: none;\n"]))),L=k.a.div(o||(o=Object(m.a)(["\n  background-color: blue;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  height: 2.2rem;\n  width: 2.2rem;\n\n  cursor: pointer;\n"]))),G=k.a.img(d||(d=Object(m.a)(["\n  max-height: 1rem;\n"]))),H=k.a.div(l||(l=Object(m.a)(["\n  border: 1px solid gray;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 2.3rem;\n  width: 8rem;\n  margin-left: 1rem;\n\n  border-radius: 5px;\n\n  cursor: pointer;\n"]))),P={control:function(e){return Object(S.a)(Object(S.a)({},e),{},{width:"10rem",height:"2rem",cursor:"pointer"})},indicatorSeparator:function(){return{}}};!function(e){e.INCREMENT="INCREMENT",e.DECREMENT="DECREMENT",e.NUMBER="NUMBER"}(u||(u={})),function(e){e.ALL="",e.MALE="male",e.FEMALE="female"}(j||(j={})),(b=f||(f={})).ASC="ascend",b.DESC="descend",(O=h||(h={})).NAME="name",O.EMAIL="email",O.GENDER="gender",O.REGISTERED="registered";var U,z,J,W,X,q,K,Q,V,Y,Z,$=t.p+"static/media/sort-desc.f4e20a6c.svg",_=t.p+"static/media/sort-asc.178668ac.svg",ee=t.p+"static/media/sort-inactive.7cbf9c4f.svg",ne=function(e){var n=e.sortType,t=void 0===n?f.DESC:n,r=e.sortStatus;return void 0===r||r?t===f.DESC?Object(A.jsx)(te,{src:$}):Object(A.jsx)(te,{src:_}):Object(A.jsx)(te,{src:ee})},te=k.a.img(U||(U=Object(m.a)(["\n  cursor: pointer;\n"]))),re=function(e){var n=e.randomUsers,t=e.activePage,r=e.options,i=e.handleOnChangePage,c=e.sort,a=e.handleOnClickSortButton;return Object(A.jsxs)(ie,{children:[Object(A.jsxs)(ce,{children:[Object(A.jsx)(le,{isHeader:!0,children:"Username"}),Object(A.jsxs)(le,{isHeader:!0,children:["Name"," ",Object(A.jsx)("div",{onClick:function(){return a(h.NAME)},children:Object(A.jsx)(ne,{sortType:null===c||void 0===c?void 0:c.sortType,sortStatus:(null===c||void 0===c?void 0:c.sortOrder)===h.NAME})})]}),Object(A.jsxs)(le,{isHeader:!0,children:["Email",Object(A.jsx)("div",{onClick:function(){return a(h.EMAIL)},children:Object(A.jsx)(ne,{sortType:null===c||void 0===c?void 0:c.sortType,sortStatus:(null===c||void 0===c?void 0:c.sortOrder)===h.EMAIL})})]}),Object(A.jsxs)(le,{isHeader:!0,children:["Gender"," ",Object(A.jsx)("div",{onClick:function(){return a(h.GENDER)},children:Object(A.jsx)(ne,{sortType:null===c||void 0===c?void 0:c.sortType,sortStatus:(null===c||void 0===c?void 0:c.sortOrder)===h.GENDER})})]}),Object(A.jsxs)(le,{isHeader:!0,children:["Registered Date"," ",Object(A.jsx)("div",{onClick:function(){return a(h.REGISTERED)},children:Object(A.jsx)(ne,{sortType:null===c||void 0===c?void 0:c.sortType,sortStatus:(null===c||void 0===c?void 0:c.sortOrder)===h.REGISTERED})})]})]}),Object(A.jsx)(ae,{children:function(){if(n)return Object(A.jsx)(A.Fragment,{children:null===n||void 0===n?void 0:n.map((function(e){var n="".concat(e.name.title,". ").concat(e.name.first," ").concat(e.name.last);return Object(A.jsxs)(se,{children:[Object(A.jsx)(le,{children:e.login.username}),Object(A.jsxs)(le,{children:[n," "]}),Object(A.jsxs)(le,{children:[e.email," "]}),Object(A.jsxs)(le,{children:[e.gender," "]}),Object(A.jsxs)(le,{children:[e.registered.date," "]})]})}))})}()}),Object(A.jsx)(oe,{children:Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(de,{onClick:function(){return i(u.DECREMENT)},children:"<"}),r.map((function(e){return Object(A.jsx)(de,{isActive:t===e,onClick:function(){return i(u.NUMBER,e)},children:e})})),Object(A.jsx)(de,{onClick:function(){return i(u.INCREMENT)},children:">"})]})})]})},ie=k.a.div(z||(z=Object(m.a)(["\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  margin: 2rem 0;\n"]))),ce=k.a.div(J||(J=Object(m.a)(["\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n"]))),ae=k.a.div(W||(W=Object(m.a)(["\n  width: 100%;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),se=k.a.div(X||(X=Object(m.a)(["\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  border-bottom: 1px solid black;\n"]))),oe=k.a.div(q||(q=Object(m.a)(["\n  width: 100%;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n"]))),de=k.a.div(K||(K=Object(m.a)(["\n  width: 2rem;\n  height: 2rem;\n  margin: 0.5rem 0.5rem;\n\n  cursor: pointer;\n\n  border: 1px solid #fafafa;\n  border-radius: 3px;\n\n  color: ",";\n  border-color: ",";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(e){return e.isActive?"#574FCF":"#000000"}),(function(e){return e.isActive?"#574FCF":"#000000"})),le=k.a.div(Q||(Q=Object(m.a)(["\n  width: 20%;\n  height: 100%;\n  background-color: ",";\n\n  padding: 1rem;\n\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n"])),(function(e){return e.isHeader?"#fafafa":"#ffffff"}),(function(e){return e.isHeader?"space-between":"flex-start"})),ue=t(30),je=t.n(ue),fe=t(31),be=t.n(fe),he=function(){var e=Object(w.a)(E.a.mark((function e(n){var t,r,i,c,a,s,o,d,l,u,j;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.page,r=n.gender,i=n.keyword,c=n.sortBy,a=n.sortOrder,s={page:t},r&&(s.gender=r),i&&(s.keyword=i),c&&(s.sortBy=c),a&&(s.sortOrder=a),o=be.a.stringify(s),e.prev=7,d="".concat("https://randomuser.me/api","?").concat(o,"&pageSize=10&results=10"),l={method:"get",url:d,headers:{"Content-Type":"application/json"}},e.next=12,je()(l);case 12:return u=e.sent,j=u.data,console.log(j),e.abrupt("return",j.results);case 18:e.prev=18,e.t0=e.catch(7),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[7,18]])})));return function(n){return e.apply(this,arguments)}}();var Oe=function(){var e=Object(p.useState)(),n=Object(C.a)(e,2),t=n[0],r=n[1],i=Object(p.useState)(!0),c=Object(C.a)(i,2),a=c[0],s=c[1],o=Object(p.useState)(1),d=Object(C.a)(o,2),l=d[0],b=d[1],h=[1,2,3],O=[{label:"All",value:j.ALL},{label:"female",value:j.FEMALE},{label:"male",value:j.MALE}],v=Object(p.useState)(O[0]),x=Object(C.a)(v,2),g=x[0],m=x[1],y=Object(p.useState)(""),k=Object(C.a)(y,2),S=k[0],T=k[1],R=Object(p.useState)(null),N=Object(C.a)(R,2),B=N[0],D=N[1],F=function(){var e=Object(w.a)(E.a.mark((function e(n){var t,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),m(n),t={page:1,keyword:S,gender:n.value,sortBy:null===B||void 0===B?void 0:B.sortType,sortOrder:null===B||void 0===B?void 0:B.sortOrder},e.next=5,he(t);case 5:i=e.sent,r(i),s(!1);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=function(){var e=Object(w.a)(E.a.mark((function e(){var n,t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),n={page:1,keyword:S,gender:g.value,sortBy:null===B||void 0===B?void 0:B.sortType,sortOrder:null===B||void 0===B?void 0:B.sortOrder},e.next=4,he(n);case 4:t=e.sent,r(t),s(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(w.a)(E.a.mark((function e(n){var t,i,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.ASC,n===(null===B||void 0===B?void 0:B.sortOrder)&&(t=B.sortType===f.ASC?f.DESC:f.ASC),D({sortType:t,sortOrder:n}),s(!0),i={page:1,keyword:S,gender:g.value,sortBy:t,sortOrder:n},e.next=7,he(i);case 7:c=e.sent,r(c),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),G=function(){var e=Object(w.a)(E.a.mark((function e(n,t){var i,c,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),i=0,e.t0=n,e.next=e.t0===u.INCREMENT?5:e.t0===u.DECREMENT?10:15;break;case 5:if(l!==h[0]){e.next=7;break}return e.abrupt("return");case 7:return i=l+1,b(l+1),e.abrupt("break",17);case 10:if(l!==h[h.length-1]){e.next=12;break}return e.abrupt("return");case 12:return i=l-1,b(l-1),e.abrupt("break",17);case 15:i=t,b(t);case 17:return c={page:i,keyword:S,gender:g.value,sortBy:null===B||void 0===B?void 0:B.sortType,sortOrder:null===B||void 0===B?void 0:B.sortOrder},e.next=20,he(c);case 20:a=e.sent,r(a),s(!1);case 23:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),H=function(){var e=Object(w.a)(E.a.mark((function e(){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,he({page:1});case 3:n=e.sent,r(n),s(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.useEffect)((function(){H()}),[]),Object(A.jsxs)(pe,{children:[Object(A.jsx)(ve,{children:"EXAMPLE WITH SEARCH AND FILTER"}),Object(A.jsx)(M,{genderOptions:O,gender:g,keyword:S,handleOnSelectGender:F,handleOnClickResetButton:function(){m(O[0]),T(""),D(null)},handleOnClickSearchButton:I,handleOnChangeInputForm:function(e){var n=e.target.value;T(n)}}),Object(A.jsx)(xe,{}),a||!(null===t||void 0===t?void 0:t.length)?Object(A.jsx)(A.Fragment,{children:"Loading..."}):Object(A.jsx)(re,{randomUsers:t,activePage:l,options:h,sort:B,handleOnChangePage:G,handleOnClickSortButton:L})]})},pe=k.a.div(V||(V=Object(m.a)(["\n  min-height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n\n  padding: 2rem;\n"]))),ve=k.a.div(Y||(Y=Object(m.a)(["\n  font-size: 1.5rem;\n  line-height: 2rem;\n  font-weight: 600;\n  font-style: normal;\n"]))),xe=k.a.div(Z||(Z=Object(m.a)(["\n  height: 0;\n  border: 1px solid gray;\n  width: 100%;\n"]))),ge=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,75)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),c(e),a(e)}))};g.a.render(Object(A.jsx)(v.a.StrictMode,{children:Object(A.jsx)(Oe,{})}),document.getElementById("root")),ge()}},[[74,1,2]]]);
//# sourceMappingURL=main.1e0cff3f.chunk.js.map