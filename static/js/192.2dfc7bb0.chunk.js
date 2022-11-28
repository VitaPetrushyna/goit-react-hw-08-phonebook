"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[192],{8192:function(n,e,r){r.r(e),r.d(e,{default:function(){return R}});var t,a,o,i=r(2791),c=r(9434),s=r(4270),x=function(n){return n.contacts.items},u=function(n){return n.filter},p=function(n){return n.contacts.isLoading},d=function(n){var e=x(n),r=u(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r)}))},l=r(5162),h=r(168),m=r(6444),f=m.ZP.ul(t||(t=(0,h.Z)(["\n  width: 400px;\n\n  margin: 0 auto;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n"]))),b=m.ZP.li(a||(a=(0,h.Z)(["\n  margin: 10px;\n"]))),g=m.ZP.button(o||(o=(0,h.Z)(["\n  margin-left: 10px;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n  background-color: #719ae2;\n  cursor: pointer;\n  color: #0d0d0d;\n  border: gray;\n"]))),Z=r(184);function v(){var n=(0,c.v9)(d),e=(0,c.I0)();return(0,Z.jsx)(f,{children:n.map((function(n){var r=n.name,t=n.number,a=n.id;return(0,Z.jsxs)(b,{children:[r+" : "+t,(0,Z.jsx)(g,{type:"button",name:"delete",onClick:function(){return function(n){var r=(0,l.GK)(n);e(r)}(a)},children:"Delete"})]},a)}))})}var j,w,y,P,C,k,A,_,z,L=r(7574),q=m.ZP.label(j||(j=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px auto;\n  width: 300px;\n  padding: 8px;\n  font-weight: 500;\n  font-size: 42;\n  color: #5389e6;\n"]))),F=m.ZP.input(w||(w=(0,h.Z)(["\n  padding: 5px;\n  margin: 5px 0;\n  border-radius: 5px;\n"]))),I=function(){var n=(0,c.v9)(u),e=(0,c.I0)();return(0,Z.jsxs)(q,{children:["Find contacts by name",(0,Z.jsx)(F,{type:"text",value:n,name:"filter",onChange:function(n){var r=n.target.value,t=(0,L.T)(r);e(t)}})]})},N=r(885),S=r(8174),D=m.ZP.form(y||(y=(0,h.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  margin: 10px auto;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n"]))),E=m.ZP.label(P||(P=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n"]))),K=m.ZP.input(C||(C=(0,h.Z)(["\n  margin: 5px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),T=m.ZP.button(k||(k=(0,h.Z)(["\n  width: 200px;\n  height: 30px;\n  margin: 10px auto;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n  background-color: #719ae2;\n  cursor: pointer;\n  color: #0d0d0d;\n"])));function B(){var n=(0,i.useState)(""),e=(0,N.Z)(n,2),r=e[0],t=e[1],a=(0,i.useState)(""),o=(0,N.Z)(a,2),s=o[0],u=o[1],p=(0,c.I0)(),d=(0,c.v9)(x);(0,i.useEffect)((function(){p((0,l.yF)())}),[p]);var h=function(n){var e=n.currentTarget,r=e.name,a=e.value;switch(r){case"name":t(a);break;case"number":u(a);break;default:return}},m=function(){t(""),u("")};return(0,Z.jsxs)(D,{onSubmit:function(n){n.preventDefault();try{var e={name:r,number:s};if(d.some((function(n){return n.name.toLowerCase()===e.name.toLowerCase()})))return S.Am.info("".concat(e.name," is already in contacts.\n      Please choose other name."));p((0,l.uK)({name:r,number:s})),S.Am.success("Contact added"),m()}catch(t){S.Am.error("".concat(t.message))}m()},children:[(0,Z.jsxs)(E,{children:["Name",(0,Z.jsx)(K,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:h})]}),(0,Z.jsxs)(E,{children:["Number",(0,Z.jsx)(K,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:s,onChange:h})]}),(0,Z.jsx)(T,{type:"submit",children:"Add contact"})]})}var G=m.ZP.div(A||(A=(0,h.Z)(["\n  min-height: 590px;\n  /* height: calc(100vh - 50px); */\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),J=m.ZP.h2(_||(_=(0,h.Z)(["\n  font-weight: 500;\n  font-size: 48;\n  text-align: center;\n  color: #5389e6;\n"]))),M=m.ZP.h3(z||(z=(0,h.Z)(["\n  font-weight: 500;\n  font-size: 42;\n  text-align: center;\n  color: #5389e6;\n"])));function R(){var n=(0,c.I0)(),e=(0,c.v9)(p);return(0,i.useEffect)((function(){n((0,l.yF)())}),[n]),(0,Z.jsxs)(G,{children:[(0,Z.jsx)(s.q,{children:(0,Z.jsx)("title",{children:"Your contacts"})}),(0,Z.jsx)(J,{children:"Phonebook"}),(0,Z.jsx)(B,{}),(0,Z.jsx)("div",{children:e&&"Request in progress..."}),(0,Z.jsx)(I,{}),(0,Z.jsx)(M,{children:"Contacts"}),(0,Z.jsx)(v,{})]})}}}]);
//# sourceMappingURL=192.2dfc7bb0.chunk.js.map