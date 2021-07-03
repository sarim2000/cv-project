(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),l=n(12),i=n.n(l),r=(n(27),n(8)),s=n(7),o=n(2),j=n(20),u=n(37),b=n(43),h=n(0),d=function(e){var t,n=e.pro,c=e.onChange,a=e.onDelete,l=e.onPointDelete,i=e.onPointAdd;return Object(h.jsxs)(u.a,{children:[Object(h.jsx)("input",{type:"text",name:"title",value:n.title,className:0!==n.title.length?"a":null,onChange:function(e){return c(e,n.id)}}),Object(h.jsx)("label",{htmlFor:"title",children:"Enter title Name:"}),Object(h.jsx)("input",{type:"text",name:"tech",value:n.tech,className:0!==n.tech.length?"a":null,onChange:function(e){return c(e,n.id)}}),Object(h.jsx)("label",{htmlFor:"tech",children:"Enter tech:"}),Object(h.jsx)("p",{children:"Enter Points:"}),Object(h.jsx)(b.a,(t={className:"mt-2",variant:"success"},Object(s.a)(t,"className","ml-2 mt-1"),Object(s.a)(t,"style",{display:"flex",marginBottom:"10px"}),Object(s.a)(t,"onClick",(function(){return i(n.id)})),Object(s.a)(t,"children","Add"),t)),Object(h.jsx)(u.a,{children:n.points.map((function(e){return Object(h.jsxs)("li",{style:{marginBottom:"5px"},children:[Object(h.jsx)("input",{name:"poi",value:e.poi,className:0!==e.poi.length?"a":null,onChange:function(t){return c(t,e.id)}}),Object(h.jsx)(b.a,{className:"mt-2",variant:"danger",style:{display:"flex",marginBottom:"10px"},onClick:function(){return l(e.id)},children:"Del"})]},e.id)}))}),Object(h.jsx)("input",{type:"url",name:"link",value:n.link,className:0!==n.link.length?"a":null,pattern:"https://.*",onChange:function(e){return c(e,n.id)}}),Object(h.jsx)("label",{htmlFor:"link",children:"Enter project link:"}),Object(h.jsx)(b.a,{className:"mt-2",variant:"danger",style:{display:"flex",marginBottom:"10px"},onClick:function(){return a(n.id)},children:"Delete"})]})},m=(n(29),function(e){var t=e.val,n=e.handleChange;return Object(h.jsxs)(u.a,{children:[Object(h.jsx)("h3",{children:"Personal Info"}),Object(h.jsx)("input",{type:"text",className:0!==t.fName.length?"a":null,id:"fname",name:"fName",value:t.fName.value,onChange:n}),Object(h.jsx)("label",{htmlFor:"fName",children:"First Name"}),Object(h.jsx)("input",{type:"text",className:0!==t.sName.length?"a":null,name:"sName",onChange:n}),Object(h.jsx)("label",{htmlFor:"sName",children:"Your Last Name"}),Object(h.jsx)("input",{type:"tel",className:0!==t.phoneNo.length?"a":null,name:"phoneNo",onChange:n}),Object(h.jsx)("label",{htmlFor:"phoneNo",children:"Phone No: "}),Object(h.jsx)("input",{type:"email",className:0!==t.email.length?"a":null,name:"email",onChange:n}),Object(h.jsx)("label",{htmlFor:"email",children:"Your email"}),Object(h.jsx)("input",{type:"url",name:"linkedIn",onChange:n,className:0!==t.linkedIn.length?"a":null,pattern:"https://.*"}),Object(h.jsx)("label",{htmlFor:"linkedIn",children:"LinkedIn"}),Object(h.jsx)("input",{type:"url",name:"github",onChange:n,className:0!==t.github.length?"a":null,pattern:"https://.*"}),Object(h.jsx)("label",{htmlFor:"github",children:"Github"})]})}),O={personalInfo:{fName:"",sName:"",phoneNo:"",email:"",linkedIn:"",github:""},education:[],experience:[],achievements:[],skills:[],profiles:{},projects:[]},x=n(42),p=n(38),f=n(39),g=function(e){var t=e.fName,n=e.sName,c=e.phoneNo,a=e.email,l=e.linkedIn,i=e.github;return Object(h.jsx)(u.a,{className:"justify-content-md-between",children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(p.a,{className:"justify-content-md-center",children:Object(h.jsx)(f.a,{md:"auto",style:{textAlign:"center"},children:Object(h.jsxs)("h2",{children:[t," ",n]})})}),Object(h.jsxs)(p.a,{className:"justify-content-md-around",children:[Object(h.jsx)(f.a,{style:{textAlign:"center"},children:c}),Object(h.jsx)(f.a,{style:{textAlign:"center"},children:Object(h.jsx)("a",{href:"mailto:".concat(a),children:a})}),Object(h.jsx)(f.a,{style:{textAlign:"center"},children:Object(h.jsx)("a",{href:l,children:0!==l.length?"Linkedin":null})}),Object(h.jsx)(f.a,{style:{textAlign:"center"},children:Object(h.jsx)("a",{href:i,children:0!==i.length?"Github":null})})]})]})})},v=function(e){var t=e.edu,n=e.onChange,c=e.onDelete;return Object(h.jsxs)(u.a,{children:[Object(h.jsx)("input",{type:"text",name:"universityName",value:t.universityName,className:0!==t.universityName.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"universityName",children:"Enter University:"}),Object(h.jsx)("input",{type:"text",name:"city",value:t.city,className:0!==t.city.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"city",children:"Enter City:"}),Object(h.jsx)("input",{type:"text",name:"degree",value:t.degree,className:0!==t.degree.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"degree",children:"Enter Degree:"}),Object(h.jsx)("input",{type:"text",name:"from",value:t.from,className:0!==t.from.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"from",children:"Started From:"}),Object(h.jsx)("input",{type:"text",name:"to",value:t.to,className:0!==t.to.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"to",children:"Ending date:"}),Object(h.jsx)(b.a,{className:"mt-2 ",variant:"danger",style:{display:"flex",marginBottom:"10px"},onClick:function(){return c(t.id)},children:"Delete"})]})},N=n(41),y=function(e){var t=e.universityName,n=e.city,c=e.degree,a=e.from,l=e.to;return Object(h.jsxs)("div",{className:"mb-2",children:[Object(h.jsxs)(p.a,{children:[Object(h.jsx)(f.a,{xs:6,md:8,children:Object(h.jsx)("h4",{children:t})}),Object(h.jsx)(f.a,{xs:6,md:4,style:{textAlign:"end"},children:0!==n.length?n+", India":null})]}),Object(h.jsxs)(p.a,{children:[Object(h.jsx)(f.a,{xs:6,md:8,children:c}),Object(h.jsxs)(f.a,{xs:6,md:4,style:{textAlign:"end"},children:[0!==a.length?a+" - ":null," ",l]})]})]})},k=function(e){var t=e.companyName,n=e.jobDescript,c=e.jobFrom,a=e.jobTo;return Object(h.jsxs)("div",{className:"mb-2",children:[Object(h.jsxs)(p.a,{children:[Object(h.jsx)(f.a,{xs:6,md:8,children:Object(h.jsx)("h4",{children:t})}),Object(h.jsxs)(f.a,{xs:6,md:4,style:{textAlign:"end"},children:[c," - ",a]})]}),Object(h.jsx)(p.a,{children:Object(h.jsx)(f.a,{xs:6,md:4,children:n})})]})},C=function(e){var t=e.exp,n=e.onChange,c=e.onDelete;return Object(h.jsxs)(u.a,{children:[Object(h.jsx)("input",{type:"text",name:"companyName",value:t.companyName,className:0!==t.companyName.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"companyName",children:"Enter Company Name:"}),Object(h.jsx)("input",{type:"text",name:"jobDescript",value:t.jobDescript,className:0!==t.jobDescript.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"jobDescript",children:"Enter Description:"}),Object(h.jsx)("input",{type:"text",name:"jobFrom",value:t.jobFrom,className:0!==t.jobFrom.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"jobFrom",children:"Started From:"}),Object(h.jsx)("input",{type:"text",name:"jobTo",value:t.jobTo,className:0!==t.jobTo.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"jobTo",children:"Ending date:"}),Object(h.jsx)(b.a,{className:"mt-2",variant:"danger",style:{display:"flex",marginBottom:"10px"},onClick:function(){return c(t.id)},children:"Delete"})]})},F=function(e){var t=e.ach,n=e.onChange,c=e.onDelete;return Object(h.jsxs)(u.a,{children:[Object(h.jsx)("input",{type:"text",name:"what",value:t.what,className:0!==t.what.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"what",children:"Enter your achievements:"}),Object(h.jsx)(b.a,{className:"mt-2",variant:"danger",style:{display:"flex",marginBottom:"10px"},onClick:function(){return c(t.id)},children:"Delete"})]})},D=function(e){var t=e.x;return Object(h.jsx)("li",{children:Object(h.jsx)("div",{className:"mb-2",children:Object(h.jsx)(p.a,{children:Object(h.jsx)(f.a,{xs:6,md:8,children:t.what})})})})},I=function(e){var t=e.ski,n=e.onChange,c=e.onDelete;return Object(h.jsxs)(u.a,{children:[Object(h.jsx)("input",{type:"text",name:"skill",value:t.skill,className:0!==t.skill.length?"a":null,onChange:function(e){return n(e,t.id)}}),Object(h.jsx)("label",{htmlFor:"skill",children:"Enter your skills:"}),Object(h.jsx)(b.a,{className:"mt-2 mb-1",variant:"danger",style:{display:"flex",marginBottom:"10px"},onClick:function(){return c(t.id)},children:"Delete"})]})},A=function(e){var t=e.title,n=e.link,c=e.tech,a=e.points;return Object(h.jsxs)(u.a,{className:"mb-2",children:[Object(h.jsx)(p.a,{children:Object(h.jsxs)(f.a,{children:[console.log(t.length),Object(h.jsxs)("h4",{children:[Object(h.jsx)("a",{href:n,style:{color:"black"},children:t}),0!==t.length&&0!==c.length?" | ":null,Object(h.jsx)("span",{style:{fontSize:"19px"},children:c})]})]})}),Object(h.jsx)(p.a,{children:Object(h.jsx)("ul",{children:a.map((function(e){return Object(h.jsx)("li",{children:e.poi},e.id)}))})})]})},E=function(e){var t=e.x;return Object(h.jsx)("li",{children:Object(h.jsx)("div",{className:"mb-2",children:Object(h.jsx)(p.a,{children:Object(h.jsx)(f.a,{xs:6,md:8,children:t.skill})})})})},P=n(17),S=n.n(P);n(30);var w=function(){var e=Object(c.useState)(O),t=Object(j.a)(e,2),n=t[0],a=t[1];c.useEffect((function(){var e=JSON.parse(localStorage.getItem("info"));e&&a(e)}),[]),c.useEffect((function(){localStorage.setItem("info",JSON.stringify(n))}),[n]);var l=Object(c.useRef)(),i=function(e,t){var n=e.target,c=n.name,l=n.value;a((function(e){var n=e.education.map((function(e){return e.id===t?(console.log("hello"),Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},c,l))):e}));return Object(o.a)(Object(o.a)({},e),{},{education:Object(r.a)(n)})}))},f=function(e){console.log(e),a((function(t){var n=t.education.filter((function(t){if(t.id!==e)return t}));return Object(o.a)(Object(o.a)({},t),{},{education:n})}))},P=function(e,t){var n=e.target,c=n.name,l=n.value;a((function(e){var n=e.experience.map((function(e){return e.id===t?(console.log("hello"),Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},c,l))):e}));return Object(o.a)(Object(o.a)({},e),{},{experience:Object(r.a)(n)})}))},w=function(e){console.log(e),a((function(t){var n=t.experience.filter((function(t){if(t.id!==e)return t}));return Object(o.a)(Object(o.a)({},t),{},{experience:n})}))},B=function(e,t){var n=e.target,c=n.name,l=n.value;a((function(e){var n=e.skills.map((function(e){return e.id===t?(console.log("hello"),Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},c,l))):e}));return Object(o.a)(Object(o.a)({},e),{},{skills:Object(r.a)(n)})}))},T=function(e){console.log(e),a((function(t){var n=t.skills.filter((function(t){if(t.id!==e)return t}));return console.log(n),Object(o.a)(Object(o.a)({},t),{},{skills:n})}))},J=function(e,t){var n=e.target,c=n.name,l=n.value;a((function(e){var n=e.achievements.map((function(e){return e.id===t?(console.log("hello"),Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},c,l))):e}));return Object(o.a)(Object(o.a)({},e),{},{achievements:Object(r.a)(n)})}))},L=function(e){console.log(e),a((function(t){var n=t.achievements.filter((function(t){if(t.id!==e)return t}));return Object(o.a)(Object(o.a)({},t),{},{achievements:n})}))},z=function(e,t){var n=e.target,c=n.name,l=n.value;console.log(t),console.log(c,l),a((function(e){if("poi"===c){var n=e.projects.map((function(e){var n=e.points.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},c,l)):e}));return console.log(e.points),Object(o.a)(Object(o.a)({},e),{},{points:Object(r.a)(n)})}));return console.log(n),Object(o.a)(Object(o.a)({},e),{},{projects:Object(r.a)(n)})}console.log("hesllo");var a=e.projects.map((function(e){return e.id===t?(console.log(l),Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},c,l))):e}));return Object(o.a)(Object(o.a)({},e),{},{projects:Object(r.a)(a)})}))},G=function(e){console.log(e),a((function(t){var n=t.projects.filter((function(t){if(t.id!==e)return t}));return Object(o.a)(Object(o.a)({},t),{},{projects:n})}))},R=function(e){console.log(e),a((function(t){var n=t.projects.map((function(t){var n=t.points.filter((function(t){return t.id!==e}));return console.log(t),console.log(n),Object(o.a)(Object(o.a)({},t),{},{points:n})}));return console.log(n),Object(o.a)(Object(o.a)({},t),{},{projects:n})}))},Y=function(e){var t={id:Object(N.a)(),poi:""};a((function(n){var c=[],a=n.projects.map((function(n){if(n.id===e){c=n.points,console.log(c);var a=c.concat(t);return console.log(a),Object(o.a)(Object(o.a)({},n),{},{points:a})}return Object(o.a)({},n)}));return console.log(a),Object(o.a)(Object(o.a)({},n),{},{projects:Object(r.a)(a)})}))};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)(x.a,{className:"int",children:[Object(h.jsx)(p.a,{children:Object(h.jsx)(m,{val:n.personalInfo,handleChange:function(e){var t=e.target,n=t.name,c=t.value;a((function(e){return Object(o.a)(Object(o.a)({},e),{},{personalInfo:Object(o.a)(Object(o.a)({},e.personalInfo),{},Object(s.a)({},n,c))})}))}})}),Object(h.jsxs)(p.a,{children:[Object(h.jsxs)(u.a,{children:[Object(h.jsx)("h3",{children:"Education Info"}),Object(h.jsx)(b.a,{className:"mb-2",variant:"success",onClick:function(){var e={id:Object(N.a)(),universityName:"",city:"",degree:"",from:"",to:""};a((function(t){var n=t.education.concat(e);return Object(o.a)(Object(o.a)({},t),{},{education:Object(r.a)(n)})}))},children:"Add"})]}),n.education.map((function(e){return Object(h.jsx)(v,{edu:e,val:n.education,onChange:i,onDelete:f},e.id)}))]}),Object(h.jsxs)(p.a,{children:[Object(h.jsxs)(u.a,{children:[Object(h.jsx)("h3",{children:"Projects Info"}),Object(h.jsx)(b.a,{className:"mb-2",variant:"success",onClick:function(){var e={id:Object(N.a)(),title:"",tech:"",points:[],link:""};a((function(t){var n=t.projects.concat(e);return Object(o.a)(Object(o.a)({},t),{},{projects:Object(r.a)(n)})}))},children:"Add"})]}),n.projects.map((function(e){return Object(h.jsx)(d,{pro:e,onDelete:G,onChange:z,onPointDelete:R,onPointAdd:Y},e.id)}))]}),Object(h.jsxs)(p.a,{children:[Object(h.jsxs)(u.a,{children:[Object(h.jsx)("h3",{children:"Experience Info"}),Object(h.jsx)(b.a,{className:"mb-2",variant:"success",onClick:function(){var e={id:Object(N.a)(),companyName:"",jobDescript:"",jobFrom:"",jobTo:""};a((function(t){var n=t.experience.concat(e);return Object(o.a)(Object(o.a)({},t),{},{experience:Object(r.a)(n)})}))},children:"Add"})]}),n.experience.map((function(e){return Object(h.jsx)(C,{exp:e,onChange:P,onDelete:w},e.id)}))]}),Object(h.jsxs)(p.a,{children:[Object(h.jsxs)(u.a,{children:[Object(h.jsx)("h3",{children:"Achievements Info"}),Object(h.jsx)(b.a,{className:"mb-2",variant:"success",onClick:function(){var e={id:Object(N.a)(),what:""};a((function(t){var n=t.achievements.concat(e);return Object(o.a)(Object(o.a)({},t),{},{achievements:Object(r.a)(n)})}))},children:"Add"})]}),n.achievements.map((function(e){return Object(h.jsx)(F,{ach:e,onChange:J,onDelete:L},e.id)}))]}),Object(h.jsxs)(p.a,{children:[Object(h.jsxs)(u.a,{children:[Object(h.jsx)("h3",{children:"Skills Info"}),Object(h.jsx)(b.a,{className:"mb-2",variant:"success",onClick:function(){var e={id:Object(N.a)(),skill:""};a((function(t){var n=t.skills.concat(e);return Object(o.a)(Object(o.a)({},t),{},{skills:Object(r.a)(n)})}))},children:"Add"})]}),n.skills.map((function(e){return Object(h.jsx)(I,{ski:e,onChange:B,onDelete:T},e.id)}))]}),Object(h.jsx)(u.a,{children:Object(h.jsx)(S.a,{trigger:function(){return Object(h.jsx)(b.a,{style:{backgroundColor:"#343A40"},size:"lg",block:!0,children:"Print PDF"})},content:function(){return l.current}})})]}),Object(h.jsx)(u.a,{className:"result justify-content-md-between mt-3",ref:l,children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(g,Object(o.a)({},n.personalInfo)),Object(h.jsxs)(u.a,{className:"mt-2",children:[0!==n.education.length?Object(h.jsx)("h3",{className:"sep",children:"Education"}):null,n.education.map((function(e){return Object(h.jsx)(y,{universityName:e.universityName,degree:e.degree,city:e.city,from:e.from,to:e.to},e.id)}))]}),Object(h.jsxs)(u.a,{className:"mt-2",children:[0!==n.projects.length?Object(h.jsx)("h3",{className:"sep",children:"Projects"}):null,n.projects.map((function(e){return Object(h.jsx)(A,{link:e.link,title:e.title,tech:e.tech,points:e.points},e.id)}))]}),Object(h.jsxs)(u.a,{className:"mt-2",children:[0!==n.experience.length?Object(h.jsx)("h3",{className:"sep",children:"Experience"}):null,n.experience.map((function(e){return Object(h.jsx)(k,{companyName:e.companyName,jobDescript:e.jobDescript,jobFrom:e.jobFrom,jobTo:e.jobTo},e.id)}))]}),Object(h.jsxs)(u.a,{className:"mt-2",children:[0!==n.achievements.length?Object(h.jsx)("h3",{className:"sep",children:"Achievements"}):null,Object(h.jsx)("ul",{children:n.achievements.map((function(e){return Object(h.jsx)(D,{x:e},e.id)}))})]}),Object(h.jsxs)(u.a,{className:"mt-2",children:[0!==n.skills.length?Object(h.jsx)("h3",{className:"sep",children:"Skills"}):null,Object(h.jsx)("ul",{children:n.skills.map((function(e){return Object(h.jsx)(E,{x:e},e.id)}))})]})]})})]})},B=(n(31),n(40)),T=function(){return Object(h.jsx)(B.a,{variant:"dark",bg:"dark",expand:"xl",children:Object(h.jsx)(u.a,{fluid:!0,children:Object(h.jsx)(B.a.Brand,{href:"#result",children:"CV-Resume"})})})};i.a.render(Object(h.jsxs)(a.a.StrictMode,{children:[Object(h.jsx)(T,{}),Object(h.jsx)(w,{})]}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9dece146.chunk.js.map