(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(11),r=n.n(a),l=(n(34),n(13)),j=n(14),o=n(4),s=n(24),b=(n(35),n(45)),u=n(0),d=function(e){var t=e.handleChange;return Object(u.jsxs)(b.a,{children:[Object(u.jsx)("h3",{children:"Personal Info"}),Object(u.jsx)("label",{htmlFor:"fName",children:"Your First Name"}),Object(u.jsx)("input",{type:"text",name:"fName",onChange:t}),Object(u.jsx)("label",{htmlFor:"sName",children:"Your Last Name"}),Object(u.jsx)("input",{type:"text",name:"sName",onChange:t}),Object(u.jsx)("label",{htmlFor:"phoneNo",children:"Phone No: "}),Object(u.jsx)("input",{type:"number",name:"phoneNo",onChange:t}),Object(u.jsx)("label",{htmlFor:"email",children:"Your email"}),Object(u.jsx)("input",{type:"email",name:"email",onChange:t}),Object(u.jsx)("label",{htmlFor:"linkedIn",children:"LinkedIn"}),Object(u.jsx)("input",{type:"url",name:"linkedIn",onChange:t,placeholder:"https://example.com",pattern:"https://.*"}),Object(u.jsx)("label",{htmlFor:"github",children:"Github"}),Object(u.jsx)("input",{type:"url",name:"github",onChange:t,placeholder:"https://example.com",pattern:"https://.*"})]})},h=n(49),O={personalInfo:{fName:"Sarim",sName:"Ahmed",phoneNo:"8582883122",email:"sarimbleedblue@gmail.com",linkedIn:"https://www.linkedin.com/in/sarim2000/",github:"https://www.github.com/sarim2000"},education:[{id:Object(h.a)(),universityName:"Sri Sairam College of Engineering",city:"Bangalore",degree:"BE CSE",from:"Aug. 2019",to:"May. 2023"},{id:Object(h.a)(),universityName:"Ling Liang High School",city:"Kolkata",degree:"ISC",from:"2006",to:"2018"}],experience:[{id:Object(h.a)(),companyName:"",jobDescript:"",jobFrom:"",jobTo:""}],achievements:[{id:Object(h.a)(),what:""}],skills:[{id:Object(h.a)(),skill:""}]},m=n(50),x=n(46),p=n(51),f=n(47),g=function(e){var t=e.fName,n=e.sName,c=e.phoneNo,i=e.email,a=e.linkedIn,r=e.github;return Object(u.jsx)(b.a,{className:"justify-content-md-between",children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(x.a,{className:"justify-content-md-center",children:Object(u.jsx)(f.a,{md:"auto",style:{textAlign:"center"},children:Object(u.jsxs)("h2",{children:[t," ",n]})})}),Object(u.jsxs)(x.a,{className:"justify-content-md-around",children:[Object(u.jsx)(f.a,{style:{textAlign:"center"},children:c}),Object(u.jsx)(f.a,{style:{textAlign:"center"},children:i}),Object(u.jsx)(f.a,{style:{textAlign:"center"},children:Object(u.jsx)("a",{href:a,children:"LinkedIn"})}),Object(u.jsx)(f.a,{style:{textAlign:"center"},children:Object(u.jsx)("a",{href:r,children:"Github"})})]})]})})},v=function(e){var t=e.edu,n=e.onChange,c=e.onDelete;return Object(u.jsxs)(b.a,{children:[Object(u.jsx)("label",{htmlFor:"universityName",children:"Enter University:"}),Object(u.jsx)("input",{type:"text",name:"universityName",value:t.universityName,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("label",{htmlFor:"city",children:"Enter City:"}),Object(u.jsx)("input",{type:"text",name:"city",value:t.city,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("label",{htmlFor:"degree",children:"Enter Degree:"}),Object(u.jsx)("input",{type:"text",name:"degree",value:t.degree,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("label",{htmlFor:"from",children:"Started From:"}),Object(u.jsx)("input",{type:"text",name:"from",value:t.from,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("label",{htmlFor:"to",children:"Ending date:"}),Object(u.jsx)("input",{type:"text",name:"to",value:t.to,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("button",{onClick:function(){return c(t.id)},children:"Delete"})]})},y=function(e){var t=e.universityName,n=e.city,c=e.degree,i=e.from,a=e.to;return Object(u.jsxs)("div",{className:"mb-2",children:[Object(u.jsxs)(x.a,{children:[Object(u.jsx)(f.a,{xs:6,md:8,children:Object(u.jsx)("h4",{children:t})}),Object(u.jsxs)(f.a,{xs:6,md:4,style:{textAlign:"end"},children:[n,", India"]})]}),Object(u.jsxs)(x.a,{children:[Object(u.jsx)(f.a,{xs:6,md:8,children:c}),Object(u.jsxs)(f.a,{xs:6,md:4,style:{textAlign:"end"},children:[i," - ",a]})]})]})},k=function(e){var t=e.companyName,n=e.jobDescript,c=e.jobFrom,i=e.jobTo;return Object(u.jsxs)("div",{className:"mb-2",children:[Object(u.jsxs)(x.a,{children:[Object(u.jsx)(f.a,{xs:6,md:8,children:Object(u.jsx)("h4",{children:t})}),Object(u.jsxs)(f.a,{xs:6,md:4,style:{textAlign:"end"},children:[c," - ",i]})]}),Object(u.jsx)(x.a,{children:Object(u.jsx)(f.a,{xs:6,md:4,children:n})})]})},N=function(e){var t=e.exp,n=e.onChange,c=e.onDelete;return Object(u.jsxs)(b.a,{children:[Object(u.jsx)("label",{htmlFor:"companyName",children:"Enter Company Name:"}),Object(u.jsx)("input",{type:"text",name:"companyName",value:t.companyName,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("label",{htmlFor:"jobDescript",children:"Enter Description:"}),Object(u.jsx)("input",{type:"text",name:"jobDescript",value:t.jobDescript,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("label",{htmlFor:"jobFrom",children:"Started From:"}),Object(u.jsx)("input",{type:"text",name:"jobFrom",value:t.jobFrom,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("label",{htmlFor:"jobTo",children:"Ending date:"}),Object(u.jsx)("input",{type:"text",name:"jobTo",value:t.jobTo,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("button",{onClick:function(){return c(t.id)},children:"Delete"})]})},C=function(e){var t=e.ach,n=e.onChange,c=e.onDelete;return Object(u.jsxs)(b.a,{children:[Object(u.jsx)("label",{htmlFor:"what",children:"Enter your achievements:"}),Object(u.jsx)("input",{type:"text",name:"what",value:t.what,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("button",{onClick:function(){return c(t.id)},children:"Delete"})]})},F=function(e){var t=e.x;return Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsx)(x.a,{children:Object(u.jsx)(f.a,{xs:6,md:8,children:Object(u.jsx)("li",{style:{marginLeft:"100px"},children:t.what})})})})},D=function(e){var t=e.ski,n=e.onChange,c=e.onDelete;return Object(u.jsxs)(b.a,{children:[Object(u.jsx)("label",{htmlFor:"skill",children:"Enter your skills:"}),Object(u.jsx)("input",{type:"text",name:"skill",value:t.skill,onChange:function(e){return n(e,t.id)}}),Object(u.jsx)("button",{onClick:function(){return c(t.id)},children:"Delete"})]})},A=n(23),I=function(e){var t=e.x;return Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsx)(x.a,{children:Object(u.jsx)(f.a,{xs:6,md:8,children:Object(u.jsx)("li",{style:{marginLeft:"100px"},children:t.skill})})})})};n(40);var E=function(){var e=Object(c.useState)(O),t=Object(s.a)(e,2),n=t[0],i=t[1],a=c.useRef(null),r=function(e,t){var n=e.target,c=n.name,a=n.value;i((function(e){var n=e.education.map((function(e){return e.id===t?(console.log("hello"),Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},c,a))):e}));return Object(o.a)(Object(o.a)({},e),{},{education:Object(l.a)(n)})}))},f=function(e){console.log(e),i((function(t){var n=t.education.map((function(t){if(t.id===e)return t})),c=t.education.indexOf(n);return console.log(t.education),Object(o.a)(Object(o.a)({},t),{},{education:t.education.splice(c,1)})}))},E=function(e,t){var n=e.target,c=n.name,a=n.value;i((function(e){var n=e.experience.map((function(e){return e.id===t?(console.log("hello"),Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},c,a))):e}));return Object(o.a)(Object(o.a)({},e),{},{experience:Object(l.a)(n)})}))},w=function(e){console.log(e),i((function(t){var n=t.experience.map((function(t){if(t.id===e)return t})),c=t.experience.indexOf(n);return console.log(t.experience),Object(o.a)(Object(o.a)({},t),{},{experience:t.experience.splice(c,1)})}))},S=function(e,t){var n=e.target,c=n.name,a=n.value;i((function(e){var n=e.skills.map((function(e){return e.id===t?(console.log("hello"),Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},c,a))):e}));return Object(o.a)(Object(o.a)({},e),{},{skills:Object(l.a)(n)})}))},T=function(e){console.log(e),i((function(t){var n=t.skills.map((function(t){if(t.id===e)return t})),c=t.skills.indexOf(n);return console.log(t.skills),Object(o.a)(Object(o.a)({},t),{},{skills:t.skills.splice(c,1)})}))},L=function(e,t){var n=e.target,c=n.name,a=n.value;i((function(e){var n=e.achievements.map((function(e){return e.id===t?(console.log("hello"),Object(o.a)(Object(o.a)({},e),{},Object(j.a)({},c,a))):e}));return Object(o.a)(Object(o.a)({},e),{},{achievements:Object(l.a)(n)})}))},B=function(e){console.log(e),i((function(t){var n=t.achievements.map((function(t){if(t.id===e)return t})),c=t.achievements.indexOf(n);return console.log(t.experience),Object(o.a)(Object(o.a)({},t),{},{achievements:t.achievements.splice(c,1)})}))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(m.a,{children:[Object(u.jsx)(x.a,{children:Object(u.jsx)(d,{handleChange:function(e){var t=e.target,n=t.name,c=t.value;console.log(n,c),i((function(e){return Object(o.a)(Object(o.a)({},e),{},{personalInfo:Object(o.a)(Object(o.a)({},e.personalInfo),{},Object(j.a)({},n,c))})}))}})}),Object(u.jsxs)(x.a,{children:[Object(u.jsxs)(b.a,{children:[Object(u.jsx)("h3",{children:"Education Info"}),Object(u.jsx)("button",{onClick:function(){var e={id:Object(h.a)(),universityName:"",city:"",degree:"",from:"",to:""};i((function(t){var n=t.education.concat(e);return Object(o.a)(Object(o.a)({},t),{},{education:Object(l.a)(n)})}))},children:"Add"})]}),n.education.map((function(e){return Object(u.jsx)(v,{edu:e,onChange:r,onDelete:f},e.id)}))]}),Object(u.jsxs)(x.a,{children:[Object(u.jsxs)(b.a,{children:[Object(u.jsx)("h3",{children:"Experience Info"}),Object(u.jsx)("button",{onClick:function(){var e={id:Object(h.a)(),companyName:"",jobDescript:"",jobFrom:"",jobTo:""};i((function(t){var n=t.experience.concat(e);return Object(o.a)(Object(o.a)({},t),{},{experience:Object(l.a)(n)})}))},children:"Add"})]}),n.experience.map((function(e){return Object(u.jsx)(N,{exp:e,onChange:E,onDelete:w},e.id)}))]}),Object(u.jsxs)(x.a,{children:[Object(u.jsxs)(b.a,{children:[Object(u.jsx)("h3",{children:"Achievements Info"}),Object(u.jsx)("button",{onClick:function(){var e={id:Object(h.a)(),what:""};i((function(t){var n=t.achievements.concat(e);return Object(o.a)(Object(o.a)({},t),{},{achievements:Object(l.a)(n)})}))},children:"Add"})]}),n.achievements.map((function(e){return Object(u.jsx)(C,{ach:e,onChange:L,onDelete:B},e.id)}))]}),Object(u.jsxs)(x.a,{children:[Object(u.jsxs)(b.a,{children:[Object(u.jsx)("h3",{children:"Skills Info"}),Object(u.jsx)("button",{onClick:function(){var e={id:Object(h.a)(),skill:""};i((function(t){var n=t.skills.concat(e);return Object(o.a)(Object(o.a)({},t),{},{skills:Object(l.a)(n)})}))},children:"Add"})]}),n.skills.map((function(e){return Object(u.jsx)(D,{ski:e,onChange:S,onDelete:T},e.id)}))]}),Object(u.jsx)(b.a,{children:Object(u.jsx)(p.a,{variant:"primary",size:"lg",block:!0,onClick:function(){a.current&&a.current.save()},children:"Generate PDF"})})]}),Object(u.jsx)(A.a,{ref:a,paperSize:"A4",children:Object(u.jsx)(b.a,{className:"result justify-content-md-between",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(g,Object(o.a)({},n.personalInfo)),Object(u.jsxs)(b.a,{className:"mt-2",children:[0!==n.education.length?Object(u.jsx)("h3",{children:"Education"}):null,n.education.map((function(e){return Object(u.jsx)(y,{universityName:e.universityName,degree:e.degree,city:e.city,from:e.from,to:e.to},e.id)}))]}),Object(u.jsxs)(b.a,{className:"mt-2",children:[0!==n.experience.length?Object(u.jsx)("h3",{children:"Experience"}):null,n.experience.map((function(e){return Object(u.jsx)(k,{companyName:e.companyName,jobDescript:e.jobDescript,jobFrom:e.jobFrom,jobTo:e.jobTo},e.id)}))]}),Object(u.jsxs)(b.a,{className:"mt-2",children:[0!==n.achievements.length?Object(u.jsx)("h3",{children:"Achievements"}):null,n.achievements.map((function(e){return Object(u.jsx)(F,{x:e},e.id)}))]}),Object(u.jsxs)(b.a,{className:"mt-2",children:[0!==n.skills.length?Object(u.jsx)("h3",{children:"Skills"}):null,n.skills.map((function(e){return Object(u.jsx)(I,{x:e},e.id)}))]})]})})})]})},w=(n(41),n(48)),S=function(){return Object(u.jsx)(w.a,{variant:"dark",bg:"dark",expand:"xl",children:Object(u.jsx)(b.a,{fluid:!0,children:Object(u.jsx)(w.a.Brand,{href:"#home",children:"CV-Resume"})})})};r.a.render(Object(u.jsxs)(i.a.StrictMode,{children:[Object(u.jsx)(S,{}),Object(u.jsx)(E,{})]}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.3ba81d4a.chunk.js.map