"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[905],{4905:function(n,e,r){r.r(e),r.d(e,{default:function(){return U}});var t,a,o,i=r(2791),p=r(9434),x=r(4270),s=function(n){return n.filter},u=function(n){return n.contacts.isLoading},d=function(n){var e=function(n){return n.contacts.items}(n),r=s(n).toLowerCase();return e.filter((function(n){return n.name.toLowerCase().includes(r)}))},c=r(5162),l=r(168),g=r(6444),h=g.ZP.ul(t||(t=(0,l.Z)(["\n  width: 400px;\n\n  margin: 0 auto;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n"]))),b=g.ZP.li(a||(a=(0,l.Z)(["\n  margin: 10px;\n"]))),f=g.ZP.button(o||(o=(0,l.Z)(["\n  margin-left: 10px;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n  background-color: #719ae2;\n  cursor: pointer;\n  color: #0d0d0d;\n  border: gray;\n"]))),m=r(184);function Z(){var n=(0,p.v9)(d),e=(0,p.I0)();return(0,m.jsx)(h,{children:n.map((function(n){var r=n.name,t=n.number,a=n.id;return(0,m.jsxs)(b,{children:[r+" : "+t,(0,m.jsx)(f,{type:"button",name:"delete",onClick:function(){return function(n){var r=(0,c.GK)(n);e(r)}(a)},children:"Delete"})]},a)}))})}var v,j,w,y,P,k,C,_,z=r(7574),A=g.ZP.label(v||(v=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px auto;\n  width: 300px;\n  padding: 8px;\n  font-weight: 500;\n  font-size: 42;\n  color: #5389e6;\n"]))),F=g.ZP.input(j||(j=(0,l.Z)(["\n  padding: 5px;\n  margin: 5px 0;\n  border-radius: 5px;\n"]))),S=function(){var n=(0,p.v9)(s),e=(0,p.I0)();return(0,m.jsxs)(A,{children:["Find contacts by name",(0,m.jsx)(F,{type:"text",value:n,name:"filter",onChange:function(n){var r=n.target.value,t=(0,z.T)(r);e(t)}})]})},q=r(885),I=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",r=crypto.getRandomValues(new Uint8Array(n));n--;){var t=63&r[n];e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return e},L=g.ZP.form(w||(w=(0,l.Z)(["\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  margin: 10px auto;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n"]))),N=g.ZP.label(y||(y=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 5px;\n"]))),D=g.ZP.input(P||(P=(0,l.Z)(["\n  margin: 5px;\n  padding: 5px;\n  border-radius: 5px;\n"]))),E=g.ZP.button(k||(k=(0,l.Z)(["\n  width: 200px;\n  height: 30px;\n  margin: 10px auto;\n  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),\n    1px 4px 6px rgb(0 0 0 / 16%);\n  border-radius: 5px;\n  background-color: #719ae2;\n  cursor: pointer;\n  color: #0d0d0d;\n"])));function K(){var n=(0,i.useState)(""),e=(0,q.Z)(n,2),r=e[0],t=e[1],a=(0,i.useState)(""),o=(0,q.Z)(a,2),x=o[0],s=o[1],u=(0,p.I0)();(0,i.useEffect)((function(){u((0,c.yF)())}),[u]);var d=function(n){var e=n.currentTarget,r=e.name,a=e.value;switch(r){case"name":t(a);break;case"number":s(a);break;default:return}},l=function(){t(""),s("")};return(0,m.jsxs)(L,{onSubmit:function(n){n.preventDefault(),u((0,c.uK)({id:I(),name:r,number:x})),l()},children:[(0,m.jsxs)(N,{children:["Name",(0,m.jsx)(D,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:d})]}),(0,m.jsxs)(N,{children:["Number",(0,m.jsx)(D,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:x,onChange:d})]}),(0,m.jsx)(E,{type:"submit",children:"Add contact"})]})}var R=g.ZP.h2(C||(C=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 48;\n  text-align: center;\n  color: #5389e6;\n"]))),T=g.ZP.h3(_||(_=(0,l.Z)(["\n  font-weight: 500;\n  font-size: 42;\n  text-align: center;\n  color: #5389e6;\n"])));function U(){var n=(0,p.I0)(),e=(0,p.v9)(u);return(0,i.useEffect)((function(){n((0,c.yF)())}),[n]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x.q,{children:(0,m.jsx)("title",{children:"Your contacts"})}),(0,m.jsx)(R,{children:"Phonebook"}),(0,m.jsx)(K,{}),(0,m.jsx)("div",{children:e&&"Request in progress..."}),(0,m.jsx)(S,{}),(0,m.jsx)(T,{children:"Contacts"}),(0,m.jsx)(Z,{})]})}}}]);
//# sourceMappingURL=905.8396cf09.chunk.js.map