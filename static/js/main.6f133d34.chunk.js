(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(12),i=n.n(r),l=(n(27),n(8)),s=n(7),j=n(2),o=n(20),b=n(37),u=n(43),d=n(0),h=function(e){var t,n=e.pro,c=e.onChange,a=e.onDelete,r=e.onPointDelete,i=e.onPointAdd;return Object(d.jsxs)(b.a,{children:[Object(d.jsx)("label",{htmlFor:"title",children:"Enter title Name:"}),Object(d.jsx)("input",{type:"text",name:"title",value:n.title,onChange:function(e){return c(e,n.id)}}),Object(d.jsx)("label",{htmlFor:"tech",children:"Enter tech:"}),Object(d.jsx)("input",{type:"text",name:"tech",value:n.tech,onChange:function(e){return c(e,n.id)}}),Object(d.jsx)("label",{htmlFor:"points",children:"Enter Points:"}),Object(d.jsx)(u.a,(t={className:"mt-2",variant:"success"},Object(s.a)(t,"className","ml-2 mt-1"),Object(s.a)(t,"onClick",(function(){return i(n.id)})),Object(s.a)(t,"children","Add"),t)),Object(d.jsx)(b.a,{children:n.points.map((function(e){return Object(d.jsxs)("li",{style:{marginBottom:"5px"},children:[Object(d.jsx)("input",{name:"poi",value:e.poi,onChange:function(t){return c(t,e.id)}}),Object(d.jsx)(u.a,{className:"mt-2",variant:"danger",onClick:function(){return r(e.id)},children:"Del"})]},e.id)}))}),Object(d.jsx)("label",{htmlFor:"link",children:"Enter project link:"}),Object(d.jsx)("input",{type:"url",name:"link",value:n.link,placeholder:"https://example.com",pattern:"https://.*",onChange:function(e){return c(e,n.id)}}),Object(d.jsx)(u.a,{className:"mt-2",variant:"danger",onClick:function(){return a(n.id)},children:"Delete"})]})},O=(n(29),function(e){var t=e.handleChange;return Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h3",{children:"Personal Info"}),Object(d.jsx)("label",{htmlFor:"fName",children:"Your First Name"}),Object(d.jsx)("input",{type:"text",name:"fName",onChange:t}),Object(d.jsx)("label",{htmlFor:"sName",children:"Your Last Name"}),Object(d.jsx)("input",{type:"text",name:"sName",onChange:t}),Object(d.jsx)("label",{htmlFor:"phoneNo",children:"Phone No: "}),Object(d.jsx)("input",{type:"number",name:"phoneNo",onChange:t}),Object(d.jsx)("label",{htmlFor:"email",children:"Your email"}),Object(d.jsx)("input",{type:"email",name:"email",onChange:t}),Object(d.jsx)("label",{htmlFor:"linkedIn",children:"LinkedIn"}),Object(d.jsx)("input",{type:"url",name:"linkedIn",onChange:t,placeholder:"https://example.com",pattern:"https://.*"}),Object(d.jsx)("label",{htmlFor:"github",children:"Github"}),Object(d.jsx)("input",{type:"url",name:"github",onChange:t,placeholder:"https://example.com",pattern:"https://.*"})]})}),m={personalInfo:{fName:"",sName:"",phoneNo:"",email:"",linkedIn:"",github:""},education:[],experience:[],achievements:[],skills:[],profiles:{},projects:[]},x=n(42),p=n(38),f=n(39),g=function(e){var t=e.fName,n=e.sName,c=e.phoneNo,a=e.email,r=e.linkedIn,i=e.github;return Object(d.jsx)(b.a,{className:"justify-content-md-between",children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(p.a,{className:"justify-content-md-center",children:Object(d.jsx)(f.a,{md:"auto",style:{textAlign:"center"},children:Object(d.jsxs)("h2",{children:[t," ",n]})})}),Object(d.jsxs)(p.a,{className:"justify-content-md-around",children:[Object(d.jsx)(f.a,{style:{textAlign:"center"},children:c}),Object(d.jsx)(f.a,{style:{textAlign:"center"},children:Object(d.jsx)("a",{href:"mailto:".concat(a),children:a})}),Object(d.jsx)(f.a,{style:{textAlign:"center"},children:Object(d.jsx)("a",{href:r,children:0!==r.length?"Linkedin":null})}),Object(d.jsx)(f.a,{style:{textAlign:"center"},children:Object(d.jsx)("a",{href:i,children:0!==i.length?"Github":null})})]})]})})},v=function(e){var t=e.edu,n=e.onChange,c=e.onDelete;return Object(d.jsxs)(b.a,{children:[Object(d.jsx)("label",{htmlFor:"universityName",children:"Enter University:"}),Object(d.jsx)("input",{type:"text",name:"universityName",value:t.universityName,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)("label",{htmlFor:"city",children:"Enter City:"}),Object(d.jsx)("input",{type:"text",name:"city",value:t.city,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)("label",{htmlFor:"degree",children:"Enter Degree:"}),Object(d.jsx)("input",{type:"text",name:"degree",value:t.degree,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)("label",{htmlFor:"from",children:"Started From:"}),Object(d.jsx)("input",{type:"text",name:"from",value:t.from,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)("label",{htmlFor:"to",children:"Ending date:"}),Object(d.jsx)("input",{type:"text",name:"to",value:t.to,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)(u.a,{className:"mt-2",variant:"danger",onClick:function(){return c(t.id)},children:"Delete"})]})},N=n(41),y=function(e){var t=e.universityName,n=e.city,c=e.degree,a=e.from,r=e.to;return Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsxs)(p.a,{children:[Object(d.jsx)(f.a,{xs:6,md:8,children:Object(d.jsx)("h4",{children:t})}),Object(d.jsx)(f.a,{xs:6,md:4,style:{textAlign:"end"},children:0!==n.length?n+", India":null})]}),Object(d.jsxs)(p.a,{children:[Object(d.jsx)(f.a,{xs:6,md:8,children:c}),Object(d.jsxs)(f.a,{xs:6,md:4,style:{textAlign:"end"},children:[0!==a.length?a+" - ":null," ",r]})]})]})},k=function(e){var t=e.companyName,n=e.jobDescript,c=e.jobFrom,a=e.jobTo;return Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsxs)(p.a,{children:[Object(d.jsx)(f.a,{xs:6,md:8,children:Object(d.jsx)("h4",{children:t})}),Object(d.jsxs)(f.a,{xs:6,md:4,style:{textAlign:"end"},children:[c," - ",a]})]}),Object(d.jsx)(p.a,{children:Object(d.jsx)(f.a,{xs:6,md:4,children:n})})]})},C=function(e){var t=e.exp,n=e.onChange,c=e.onDelete;return Object(d.jsxs)(b.a,{children:[Object(d.jsx)("label",{htmlFor:"companyName",children:"Enter Company Name:"}),Object(d.jsx)("input",{type:"text",name:"companyName",value:t.companyName,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)("label",{htmlFor:"jobDescript",children:"Enter Description:"}),Object(d.jsx)("input",{type:"text",name:"jobDescript",value:t.jobDescript,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)("label",{htmlFor:"jobFrom",children:"Started From:"}),Object(d.jsx)("input",{type:"text",name:"jobFrom",value:t.jobFrom,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)("label",{htmlFor:"jobTo",children:"Ending date:"}),Object(d.jsx)("input",{type:"text",name:"jobTo",value:t.jobTo,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)(u.a,{className:"mt-2",variant:"danger",onClick:function(){return c(t.id)},children:"Delete"})]})},F=function(e){var t=e.ach,n=e.onChange,c=e.onDelete;return Object(d.jsxs)(b.a,{children:[Object(d.jsx)("label",{htmlFor:"what",children:"Enter your achievements:"}),Object(d.jsx)("input",{type:"text",name:"what",value:t.what,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)(u.a,{className:"mt-2",variant:"danger",onClick:function(){return c(t.id)},children:"Delete"})]})},D=function(e){var t=e.x;return Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:"mb-2",children:Object(d.jsx)(p.a,{children:Object(d.jsx)(f.a,{xs:6,md:8,children:t.what})})})})},A=function(e){var t=e.ski,n=e.onChange,c=e.onDelete;return Object(d.jsxs)(b.a,{children:[Object(d.jsx)("label",{htmlFor:"skill",children:"Enter your skills:"}),Object(d.jsx)("input",{type:"text",name:"skill",value:t.skill,onChange:function(e){return n(e,t.id)}}),Object(d.jsx)(u.a,{className:"mt-2 mb-1",variant:"danger",onClick:function(){return c(t.id)},children:"Delete"})]})},E=function(e){var t=e.title,n=e.link,c=e.tech,a=e.points;return Object(d.jsxs)(b.a,{className:"mb-2",children:[Object(d.jsx)(p.a,{children:Object(d.jsxs)(f.a,{children:[console.log(t.length),Object(d.jsxs)("h4",{children:[Object(d.jsx)("a",{href:n,style:{color:"black"},children:t}),0!==t.length&&0!==c.length?" | ":null,Object(d.jsx)("span",{style:{fontSize:"19px"},children:c})]})]})}),Object(d.jsx)(p.a,{children:Object(d.jsx)("ul",{children:a.map((function(e){return Object(d.jsx)("li",{children:e.poi},e.id)}))})})]})},I=function(e){var t=e.x;return Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:"mb-2",children:Object(d.jsx)(p.a,{children:Object(d.jsx)(f.a,{xs:6,md:8,children:t.skill})})})})},P=n(17),w=n.n(P);n(30);var S=function(){var e=Object(c.useState)(m),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useRef)(),i=function(e,t){var n=e.target,c=n.name,r=n.value;a((function(e){var n=e.education.map((function(e){return e.id===t?(console.log("hello"),Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},c,r))):e}));return Object(j.a)(Object(j.a)({},e),{},{education:Object(l.a)(n)})}))},f=function(e){console.log(e),a((function(t){var n=t.education.filter((function(t){if(t.id!==e)return t}));return Object(j.a)(Object(j.a)({},t),{},{education:n})}))},P=function(e,t){var n=e.target,c=n.name,r=n.value;a((function(e){var n=e.experience.map((function(e){return e.id===t?(console.log("hello"),Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},c,r))):e}));return Object(j.a)(Object(j.a)({},e),{},{experience:Object(l.a)(n)})}))},S=function(e){console.log(e),a((function(t){var n=t.experience.filter((function(t){if(t.id!==e)return t}));return Object(j.a)(Object(j.a)({},t),{},{experience:n})}))},T=function(e,t){var n=e.target,c=n.name,r=n.value;a((function(e){var n=e.skills.map((function(e){return e.id===t?(console.log("hello"),Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},c,r))):e}));return Object(j.a)(Object(j.a)({},e),{},{skills:Object(l.a)(n)})}))},B=function(e){console.log(e),a((function(t){var n=t.skills.filter((function(t){if(t.id!==e)return t}));return console.log(n),Object(j.a)(Object(j.a)({},t),{},{skills:n})}))},L=function(e,t){var n=e.target,c=n.name,r=n.value;a((function(e){var n=e.achievements.map((function(e){return e.id===t?(console.log("hello"),Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},c,r))):e}));return Object(j.a)(Object(j.a)({},e),{},{achievements:Object(l.a)(n)})}))},Y=function(e){console.log(e),a((function(t){var n=t.achievements.filter((function(t){if(t.id!==e)return t}));return Object(j.a)(Object(j.a)({},t),{},{achievements:n})}))},z=function(e,t){var n=e.target,c=n.name,r=n.value;console.log(t),console.log(c,r),a((function(e){if("poi"===c){var n=e.projects.map((function(e){var n=e.points.map((function(e){return e.id===t?Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},c,r)):e}));return console.log(e.points),Object(j.a)(Object(j.a)({},e),{},{points:Object(l.a)(n)})}));return console.log(n),Object(j.a)(Object(j.a)({},e),{},{projects:Object(l.a)(n)})}console.log("hesllo");var a=e.projects.map((function(e){return e.id===t?(console.log(r),Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},c,r))):e}));return Object(j.a)(Object(j.a)({},e),{},{projects:Object(l.a)(a)})}))},G=function(e){console.log(e),a((function(t){var n=t.projects.filter((function(t){if(t.id!==e)return t}));return Object(j.a)(Object(j.a)({},t),{},{projects:n})}))},J=function(e){console.log(e),a((function(t){var n=t.projects.map((function(t){var n=t.points.filter((function(t){return t.id!==e}));return console.log(t),console.log(n),Object(j.a)(Object(j.a)({},t),{},{points:n})}));return console.log(n),Object(j.a)(Object(j.a)({},t),{},{projects:n})}))},R=function(e){var t={id:Object(N.a)(),poi:""};a((function(n){var c=[],a=n.projects.map((function(n){if(n.id===e){c=n.points,console.log(c);var a=c.concat(t);return console.log(a),Object(j.a)(Object(j.a)({},n),{},{points:a})}return Object(j.a)({},n)}));return console.log(a),Object(j.a)(Object(j.a)({},n),{},{projects:Object(l.a)(a)})}))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(x.a,{children:[Object(d.jsx)(p.a,{children:Object(d.jsx)(O,{handleChange:function(e){var t=e.target,n=t.name,c=t.value;console.log(n,c),a((function(e){return Object(j.a)(Object(j.a)({},e),{},{personalInfo:Object(j.a)(Object(j.a)({},e.personalInfo),{},Object(s.a)({},n,c))})}))}})}),Object(d.jsxs)(p.a,{children:[Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h3",{children:"Education Info"}),Object(d.jsx)(u.a,{className:"mb-2",variant:"success",onClick:function(){var e={id:Object(N.a)(),universityName:"",city:"",degree:"",from:"",to:""};a((function(t){var n=t.education.concat(e);return Object(j.a)(Object(j.a)({},t),{},{education:Object(l.a)(n)})}))},children:"Add"})]}),n.education.map((function(e){return Object(d.jsx)(v,{edu:e,onChange:i,onDelete:f},e.id)}))]}),Object(d.jsxs)(p.a,{children:[Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h3",{children:"Projects Info"}),Object(d.jsx)(u.a,{className:"mb-2",variant:"success",onClick:function(){var e={id:Object(N.a)(),title:"",tech:"",points:[],link:""};a((function(t){var n=t.projects.concat(e);return Object(j.a)(Object(j.a)({},t),{},{projects:Object(l.a)(n)})}))},children:"Add"})]}),n.projects.map((function(e){return Object(d.jsx)(h,{pro:e,onDelete:G,onChange:z,onPointDelete:J,onPointAdd:R},e.id)}))]}),Object(d.jsxs)(p.a,{children:[Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h3",{children:"Experience Info"}),Object(d.jsx)(u.a,{className:"mb-2",variant:"success",onClick:function(){var e={id:Object(N.a)(),companyName:"",jobDescript:"",jobFrom:"",jobTo:""};a((function(t){var n=t.experience.concat(e);return Object(j.a)(Object(j.a)({},t),{},{experience:Object(l.a)(n)})}))},children:"Add"})]}),n.experience.map((function(e){return Object(d.jsx)(C,{exp:e,onChange:P,onDelete:S},e.id)}))]}),Object(d.jsxs)(p.a,{children:[Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h3",{children:"Achievements Info"}),Object(d.jsx)(u.a,{className:"mb-2",variant:"success",onClick:function(){var e={id:Object(N.a)(),what:""};a((function(t){var n=t.achievements.concat(e);return Object(j.a)(Object(j.a)({},t),{},{achievements:Object(l.a)(n)})}))},children:"Add"})]}),n.achievements.map((function(e){return Object(d.jsx)(F,{ach:e,onChange:L,onDelete:Y},e.id)}))]}),Object(d.jsxs)(p.a,{children:[Object(d.jsxs)(b.a,{children:[Object(d.jsx)("h3",{children:"Skills Info"}),Object(d.jsx)(u.a,{className:"mb-2",variant:"success",onClick:function(){var e={id:Object(N.a)(),skill:""};a((function(t){var n=t.skills.concat(e);return Object(j.a)(Object(j.a)({},t),{},{skills:Object(l.a)(n)})}))},children:"Add"})]}),n.skills.map((function(e){return Object(d.jsx)(A,{ski:e,onChange:T,onDelete:B},e.id)}))]}),Object(d.jsx)(b.a,{children:Object(d.jsx)(w.a,{trigger:function(){return Object(d.jsx)(u.a,{style:{backgroundColor:"#343A40"},size:"lg",block:!0,children:"Print PDF"})},content:function(){return r.current}})})]}),Object(d.jsx)(b.a,{className:"result justify-content-md-between mt-3",ref:r,children:Object(d.jsxs)(p.a,{children:[Object(d.jsx)(g,Object(j.a)({},n.personalInfo)),Object(d.jsxs)(b.a,{className:"mt-2",children:[0!==n.education.length?Object(d.jsx)("h3",{className:"sep",children:"Education"}):null,n.education.map((function(e){return Object(d.jsx)(y,{universityName:e.universityName,degree:e.degree,city:e.city,from:e.from,to:e.to},e.id)}))]}),Object(d.jsxs)(b.a,{className:"mt-2",children:[0!==n.projects.length?Object(d.jsx)("h3",{className:"sep",children:"Projects"}):null,n.projects.map((function(e){return Object(d.jsx)(E,{link:e.link,title:e.title,tech:e.tech,points:e.points},e.id)}))]}),Object(d.jsxs)(b.a,{className:"mt-2",children:[0!==n.experience.length?Object(d.jsx)("h3",{className:"sep",children:"Experience"}):null,n.experience.map((function(e){return Object(d.jsx)(k,{companyName:e.companyName,jobDescript:e.jobDescript,jobFrom:e.jobFrom,jobTo:e.jobTo},e.id)}))]}),Object(d.jsxs)(b.a,{className:"mt-2",children:[0!==n.achievements.length?Object(d.jsx)("h3",{className:"sep",children:"Achievements"}):null,Object(d.jsx)("ul",{children:n.achievements.map((function(e){return Object(d.jsx)(D,{x:e},e.id)}))})]}),Object(d.jsxs)(b.a,{className:"mt-2",children:[0!==n.skills.length?Object(d.jsx)("h3",{className:"sep",children:"Skills"}):null,Object(d.jsx)("ul",{children:n.skills.map((function(e){return Object(d.jsx)(I,{x:e},e.id)}))})]})]})})]})},T=(n(31),n(40)),B=function(){return Object(d.jsx)(T.a,{variant:"dark",bg:"dark",expand:"xl",children:Object(d.jsx)(b.a,{fluid:!0,children:Object(d.jsx)(T.a.Brand,{href:"#home",children:"CV-Resume"})})})};i.a.render(Object(d.jsxs)(a.a.StrictMode,{children:[Object(d.jsx)(B,{}),Object(d.jsx)(S,{})]}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.6f133d34.chunk.js.map