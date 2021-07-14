(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={ItemList:"ContactItem_ItemList__2Bp6x",Text:"ContactItem_Text__1FVAn",DeleteBtn:"ContactItem_DeleteBtn__1-YSf",IconDelete:"ContactItem_IconDelete__GmWhh"}},19:function(t,e,n){t.exports={LabelFind:"Filter_LabelFind__1T-Gz",InputFind:"Filter_InputFind__1zde4",SpanFind:"Filter_SpanFind__b6yDt"}},23:function(t,e,n){t.exports={Thumb:"ContactList_Thumb__290B-",List:"ContactList_List__3ywul",TitleLoading:"ContactList_TitleLoading__3FhAr"}},24:function(t,e,n){t.exports={Title:"App_Title__R9fAi",TitleContacts:"App_TitleContacts__2L7NF"}},33:function(t,e,n){t.exports={Container:"Container_Container__UPtD9"}},7:function(t,e,n){t.exports={Form:"ContactForm_Form__1eyik",Input:"ContactForm_Input__2d-qi",Label:"ContactForm_Label__2ZugU",Span:"ContactForm_Span__O4kal",BtnContact:"ContactForm_BtnContact__3cKNa",IconAdd:"ContactForm_IconAdd__3V08l"}},80:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(16),o=n.n(r),l=n(8),i=n(18),u=n(3),s=n(9),b=n(14),d=n.n(b),j=Object(u.b)("contacts/fetchContactsRequest"),f=Object(u.b)("contacts/fetchContactsSuccess"),m=Object(u.b)("contacts/fetchContactsError"),h=Object(u.b)("contacts/addContactRequest"),p=Object(u.b)("contacts/addContactSuccess"),O=Object(u.b)("contacts/addContactError"),g=Object(u.b)("contacts/deleteContactRequest"),v=Object(u.b)("contacts/deleteContactSuccess"),x=Object(u.b)("contacts/deleteContactError"),C=Object(u.b)("contacts/changeFilter");d.a.defaults.baseURL="http://localhost:4040";var _,y,w,F=function(){return function(t){t(j()),d.a.get("/contacts").then((function(e){var n=e.data;return t(f(n))})).catch((function(e){return t(m(e))}))}},I=function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(h()),d.a.post("/contacts",c).then((function(e){var n=e.data;return t(p(n))})).catch((function(e){return t(O(e))}))}},E=function(t){return function(e){e(g()),d.a.delete("/contacts/".concat(t)).then((function(){return e(v(t))})).catch((function(t){return e(x(t))}))}},N=n(4),L=n(5),S=Object(u.c)([],(_={},Object(N.a)(_,f,(function(t,e){return e.payload})),Object(N.a)(_,p,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(N.a)(_,v,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),_)),k=Object(u.c)("",Object(N.a)({},C,(function(t,e){return e.payload}))),T=Object(u.c)(!1,(y={},Object(N.a)(y,j,(function(){return!0})),Object(N.a)(y,f,(function(){return!1})),Object(N.a)(y,m,(function(){return!1})),Object(N.a)(y,h,(function(){return!0})),Object(N.a)(y,p,(function(){return!1})),Object(N.a)(y,O,(function(){return!1})),Object(N.a)(y,g,(function(){return!0})),Object(N.a)(y,v,(function(){return!1})),Object(N.a)(y,x,(function(){return!1})),y)),A=Object(L.b)({items:S,filter:k,loading:T}),D=Object(i.a)(Object(u.d)({serializableCheck:{ignoredActions:[s.a,s.f,s.b,s.c,s.d,s.e]}})),B=Object(u.a)({reducer:{contacts:A},middleware:D,devTools:!1}),z=n(10),P=n(11),R=n(13),q=n(12),M=n(33),Z=n.n(M),J=n(1),U=function(t){var e=t.children;return Object(J.jsx)("div",{className:Z.a.Container,children:e})},G=n(34),V=n(17),H=function(t){return t.contacts.loading},K=function(t){return t.contacts.items},W=function(t){return t.contacts.filter},X=Object(V.a)([K,W],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),Y=["title","titleId"];function $(){return($=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function Q(t,e){if(null==t)return{};var n,c,a=function(t,e){if(null==t)return{};var n,c,a={},r=Object.keys(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function tt(t,e){var n=t.title,a=t.titleId,r=Q(t,Y);return c.createElement("svg",$({height:"448pt",viewBox:"0 0 448 448",width:"448pt",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,w||(w=c.createElement("path",{d:"m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"})))}var et,nt,ct,at,rt,ot,lt,it,ut,st,bt,dt,jt,ft,mt,ht,pt=c.forwardRef(tt),Ot=(n.p,n(7)),gt=n.n(Ot),vt=function(t){Object(R.a)(n,t);var e=Object(q.a)(n);function n(){var t;Object(z.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,c=n.name,a=n.value;t.setState(Object(N.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name,c=t.props,a=c.contacts,r=c.onSubmit;a.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):r(Object(G.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(P.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(J.jsxs)("form",{onSubmit:this.handleSubmit,className:gt.a.Form,children:[Object(J.jsxs)("label",{className:gt.a.Label,children:[Object(J.jsx)("span",{className:gt.a.Span,children:"Name"}),Object(J.jsx)("input",{className:gt.a.Input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:e,onChange:this.handleChange})]}),Object(J.jsxs)("label",{className:gt.a.Label,children:[Object(J.jsx)("span",{className:gt.a.Span,children:"Number"}),Object(J.jsx)("input",{className:gt.a.Input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:n,onChange:this.handleChange})]}),Object(J.jsxs)("button",{type:"submit",className:gt.a.BtnContact,children:[Object(J.jsx)(pt,{width:"20",height:"20",fill:"white",className:gt.a.IconAdd}),"Add contact"]})]})}}]),n}(c.Component),xt=Object(l.b)((function(t){return{contacts:K(t)}}),(function(t){return{onSubmit:function(e,n){return t(I(e,n))}}}))(vt),Ct=["title","titleId"];function _t(){return(_t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t}).apply(this,arguments)}function yt(t,e){if(null==t)return{};var n,c,a=function(t,e){if(null==t)return{};var n,c,a={},r=Object.keys(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(c=0;c<r.length;c++)n=r[c],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function wt(t,e){var n=t.title,a=t.titleId,r=yt(t,Ct);return c.createElement("svg",_t({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"124px",height:"124px",viewBox:"0 0 124 124",style:{enableBackground:"new 0 0 124 124"},xmlSpace:"preserve",ref:e,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,et||(et=c.createElement("g",null,c.createElement("path",{d:"M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"}))),nt||(nt=c.createElement("g",null)),ct||(ct=c.createElement("g",null)),at||(at=c.createElement("g",null)),rt||(rt=c.createElement("g",null)),ot||(ot=c.createElement("g",null)),lt||(lt=c.createElement("g",null)),it||(it=c.createElement("g",null)),ut||(ut=c.createElement("g",null)),st||(st=c.createElement("g",null)),bt||(bt=c.createElement("g",null)),dt||(dt=c.createElement("g",null)),jt||(jt=c.createElement("g",null)),ft||(ft=c.createElement("g",null)),mt||(mt=c.createElement("g",null)),ht||(ht=c.createElement("g",null)))}var Ft=c.forwardRef(wt),It=(n.p,n(15)),Et=n.n(It),Nt=function(t){var e=t.id,n=t.name,c=t.number,a=t.onDeleteClick;return Object(J.jsxs)("li",{className:Et.a.ItemList,children:[Object(J.jsxs)("p",{className:Et.a.Text,children:[n,": ",c]}),Object(J.jsxs)("button",{className:Et.a.DeleteBtn,type:"button",onClick:function(){return a(e)},children:[Object(J.jsx)(Ft,{width:"20",height:"20",fill:"white",className:Et.a.IconDelete}),"Delete"]})]},e)},Lt=n(35),St=n.n(Lt),kt=function(){return Object(J.jsx)("div",{children:Object(J.jsx)(St.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80})})},Tt=n(23),At=n.n(Tt),Dt=function(t){Object(R.a)(n,t);var e=Object(q.a)(n);function n(){return Object(z.a)(this,n),e.apply(this,arguments)}return Object(P.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props,e=t.contacts,n=t.onDeleteClick,c=t.isLoadingContacts;return Object(J.jsxs)("div",{className:At.a.Thumb,children:[c&&Object(J.jsx)(kt,{}),Object(J.jsx)("ul",{className:At.a.List,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(J.jsx)(Nt,{name:c,number:a,onDeleteClick:n,id:e},e)}))})]})}}]),n}(c.Component),Bt=Object(l.b)((function(t){return{contacts:X(t),isLoadingContacts:H(t)}}),(function(t){return{onDeleteClick:function(e){return t(E(e))},fetchContacts:function(){return t(F())}}}))(Dt),zt=n(19),Pt=n.n(zt),Rt=Object(l.b)((function(t){return{value:W(t)}}),(function(t){return{changeFilterInput:function(e){return t(C(e.target.value))}}}))((function(t){var e=t.value,n=t.changeFilterInput;return Object(J.jsxs)("label",{className:Pt.a.LabelFind,children:[Object(J.jsx)("span",{className:Pt.a.SpanFind,children:"Find contacts by name"}),Object(J.jsx)("input",{className:Pt.a.InputFind,type:"text",name:"filter",value:e,onChange:n})]})})),qt=n(24),Mt=n.n(qt),Zt=function(t){Object(R.a)(n,t);var e=Object(q.a)(n);function n(){return Object(z.a)(this,n),e.apply(this,arguments)}return Object(P.a)(n,[{key:"render",value:function(){return Object(J.jsxs)(U,{children:[Object(J.jsx)("h1",{className:Mt.a.Title,children:"Phonebook"}),Object(J.jsx)(xt,{}),Object(J.jsx)("h2",{className:Mt.a.TitleContacts,children:"Contacts"}),Object(J.jsx)(Rt,{}),Object(J.jsx)(Bt,{})]})}}]),n}(c.Component);n(80),n(81);o.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(l.a,{store:B,children:Object(J.jsx)(Zt,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.29f49066.chunk.js.map