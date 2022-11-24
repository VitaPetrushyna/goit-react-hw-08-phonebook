"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[454],{7454:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,a,o,i=r(2791),s=r(9434),p=r(4270),x=function(n){return n.contacts.items},c=function(n){return n.contacts.filter},d=function(n){return n.contacts.isLoading},u=r(5162),l=r(168),g=r(6444),h=g.ZP.ul(t||(t=(0,l.Z)(["\n  width: 400px;\n\n  margin: 0 auto;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n"]))),b=g.ZP.li(a||(a=(0,l.Z)(["\n  margin: 10px;\n"]))),f=g.ZP.button(o||(o=(0,l.Z)(["\n  margin-left: 10px;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n  background-color: #719ae2;\n  cursor: pointer;\n  color: #0d0d0d;\n  border: gray;\n"]))),m=r(184);function Z(){var n=(0,s.v9)(x),e=(0,s.v9)(c),r=(0,s.I0)();console.log(e);return(0,m.jsx)(h,{children:n.map((function(n){var e=n.name,t=n.number,a=n.id;return(0,m.jsxs)(b,{children:[e+" : "+t,(0,m.jsx)(f,{type:"button",name:"delete",onClick:function(){return function(n){var e=(0,u.GK)(n);r(e)}(a)},children:"Delete"})]},a)}))})}var v,j,w,y,P,k,C,_,z=(0,r(2070).oM)({name:"filters",initialState:"",reducers:{setFilter:function(n,e){return e.payload}}}),A=z.actions.setFilter,F=(z.reducer,g.ZP.label(v||(v=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px auto;\n  width: 300px;\n  padding: 8px;\n  font-weight: 500;\n  font-size: 42;\n  color: #5389e6;\n"])))),S=g.ZP.input(j||(j=(0,l.Z)(["\n  padding: 5px;\n  margin: 5px 0;\n  border-radius: 5px;\n"]))),q=function(){var n=(0,s.v9)(c),e=(0,s.I0)();return(0,m.jsxs)(F,{children:["Find contacts by name",(0,m.jsx)(S,{type:"text",value:n,name:"filter",onChange:function(n){var r=n.target.value,t=A(r);e(t)}})]})},I=r(885),N=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",r=crypto.getRandomValues(new Uint8Array(n));n--;){var t=63&r[n];e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return e},D=g.ZP.form(w||(w=(0,l.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  margin: 10px auto;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n"]))),E=g.ZP.label(y||(y=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n"]))),K=g.ZP.input(P||(P=(0,l.Z)(["\n  margin: 5px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),M=g.ZP.button(k||(k=(0,l.Z)(["\n  width: 200px;\n  height: 30px;\n  margin: 10px auto;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n  background-color: #719ae2;\n  cursor: pointer;\n  color: #0d0d0d;\n"])));function R(){var n=(0,i.useState)(""),e=(0,I.Z)(n,2),r=e[0],t=e[1],a=(0,i.useState)(""),o=(0,I.Z)(a,2),p=o[0],x=o[1],c=(0,s.I0)();(0,i.useEffect)((function(){c((0,u.yF)())}),[c]);var d=function(n){var e=n.currentTarget,r=e.name,a=e.value;switch(r){case"name":t(a);break;case"number":x(a);break;default:return}},l=function(){t(""),x("")};return(0,m.jsxs)(D,{onSubmit:function(n){n.preventDefault(),c((0,u.uK)({id:N(),name:r,number:p})),l()},children:[(0,m.jsxs)(E,{children:["Name",(0,m.jsx)(K,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:d})]}),(0,m.jsxs)(E,{children:["Number",(0,m.jsx)(K,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:p,onChange:d})]}),(0,m.jsx)(M,{type:"submit",children:"Add contact"})]})}var U=g.ZP.h2(C||(C=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 48;\n  text-align: center;\n  color: #5389e6;\n"]))),B=g.ZP.h3(_||(_=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 42;\n  text-align: center;\n  color: #5389e6;\n"])));function G(){var n=(0,s.I0)(),e=(0,s.v9)(d);return(0,i.useEffect)((function(){n((0,u.yF)())}),[n]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(p.q,{children:(0,m.jsx)("title",{children:"Your contacts"})}),(0,m.jsx)(U,{children:"Phonebook"}),(0,m.jsx)(R,{}),(0,m.jsx)("div",{children:e&&"Request in progress..."}),(0,m.jsx)(q,{}),(0,m.jsx)(B,{children:"Contacts"}),(0,m.jsx)(Z,{})]})}}}]);
//# sourceMappingURL=454.9f0cb8a7.chunk.js.map