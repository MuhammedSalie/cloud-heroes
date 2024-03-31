(this["webpackJsonpcloud-heroes"]=this["webpackJsonpcloud-heroes"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"domain":"{AUTH0_DOMAIN}","clientId":"{AUTH0_CLIENTID}","scope":"openid profile email"}')},26:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(19),c=a.n(s),i=(a(26),a(4)),r=a(1);var o=()=>Object(r.jsx)("div",{className:"hello",children:Object(r.jsx)("h2",{className:"my-5 text-center",children:"Welcome Cloud Heroes"})});var l=()=>Object(r.jsxs)("footer",{className:"bg-light p-3 text-center",children:[Object(r.jsx)("img",{src:"images\\Insights.gif",height:"80px",align:"center",alt:"Logo"}),"Cloud Insights Copyright 2024",Object(r.jsx)("header",{align:"center",children:"v1.0.0"})]});var d=a(12),j=a(10);var b=()=>{const{loginWithRedirect:e}=Object(j.b)();return Object(r.jsx)("button",{className:"btn btn-primary btn-block",onClick:()=>e(),children:"Log In"})};var h=()=>{const{logout:e}=Object(j.b)();return Object(r.jsx)("button",{className:"btn btn-danger btn-block",onClick:()=>e({returnTo:window.location.origin}),children:"Log Out"})},u=a(41);var m=()=>{const{isAuthenticated:e}=Object(j.b)();return Object(r.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(r.jsx)(d.b,{to:"/",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Home"}),Object(r.jsx)(d.b,{to:"/quiz",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Quiz"}),e&&Object(r.jsx)(d.b,{to:"/profile",exact:!0,className:"nav-link",activeClassName:"router-link-exact-active",children:"Profile"}),!e&&Object(r.jsx)(u.a,{children:Object(r.jsx)(b,{})}),e&&Object(r.jsx)(u.a,{children:Object(r.jsx)(h,{})})]})};var p=()=>Object(r.jsx)("div",{className:"nav-container mb-3",children:Object(r.jsx)("nav",{className:"navbar navbar-expand-md navbar-light bg-light",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{}),Object(r.jsx)(m,{})]})})});var x=[{question:"What was the first video game ever made?",options:["Pong","Spacewar!","Tetris","Computer Space"],answer:"Spacewar!"},{question:"Which company developed the first commercial antivirus software?",options:["Symantec","McAfee","Norton","Kaspersky Lab"],answer:"McAfee"},{question:"Which animal is featured in the official PHP logo?",options:["Elephant","Hippo","Giraffe","Lion"],answer:"Elephant"},{question:"What does 'HTTP' stand for?",options:["HyperText Transfer Protocol","Hyperlink Transfer Technology Protocol","Hyperlink Text Transfer Protocol","HyperText Technology Protocol"],answer:"HyperText Transfer Protocol"},{question:"Which programming language is known as the backbone of the World Wide Web?",options:["Java","C#","Python","HTML"],answer:"HTML"},{question:"What is the name of the world's first computer programmer?",options:["Charles Babbage","Ada Lovelace","Alan Turing","Grace Hopper"],answer:"Ada Lovelace"},{question:"In what year was the iPhone first introduced?",options:["2005","2007","2009","2011"],answer:"2007"},{question:"What was Google's original name?",options:["BackRub","Googol","SearchMaster","WebSearch"],answer:"BackRub"},{question:"Which of these companies was not founded in a garage?",options:["Amazon","Google","Apple","Microsoft"],answer:"Amazon"},{question:"What does 'GPU' stand for?",options:["Graphical Processing Unit","Graphics Performance Unit","Graphics Processing Unit","Graphical Performance Unit"],answer:"Graphics Processing Unit"},{question:"What is the capital of France?",options:["New York","London","Paris","Dublin"],answer:"Paris"},{question:"Who painted the Mona Lisa?",options:["Vincent Van Gogh","Leonardo da Vinci","Pablo Picasso","Claude Monet"],answer:"Leonardo da Vinci"},{question:"What is the largest planet in our solar system?",options:["Earth","Jupiter","Saturn","Mars"],answer:"Jupiter"}];var O=function(){const[e,t]=Object(n.useState)(0),[a,s]=Object(n.useState)(0),[c,i]=Object(n.useState)(!1),[o,l]=Object(n.useState)(""),[d,j]=Object(n.useState)(null);return Object(r.jsx)("div",{className:"Quiz",children:c?Object(r.jsxs)("div",{className:"score-section",children:["You scored ",a," out of ",x.length]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"question-section",children:[Object(r.jsxs)("div",{className:"question-count",children:[Object(r.jsxs)("span",{children:["Question ",e+1]}),"/",x.length]}),Object(r.jsx)("div",{className:"question-text",children:x[e].question})]}),Object(r.jsx)("div",{className:"answer-section",children:x[e].options.map((n=>Object(r.jsx)("button",{onClick:()=>(n=>{const c=x[e].answer;l(n),n===c?(s(a+1),j(!0)):j(!1),setTimeout((()=>{const a=e+1;a<x.length?(t(a),j(null),l("")):i(!0)}),1e3)})(n),style:{backgroundColor:o===n?d?"lightgreen":"pink":""},children:n},n)))}),o&&Object(r.jsx)("div",{style:{marginTop:"10px"},children:d?"Correct! \ud83c\udf89":"Sorry, that\u2019s not right. \ud83d\ude22"})]})})};var g=()=>Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"External API"}),Object(r.jsxs)("p",{children:["You use will use a button to call an external API using an access token, and the API will validate it using the API's audience value.",Object(r.jsx)("br",{}),Object(r.jsx)("strong",{children:"This route should be protected"}),"."]}),Object(r.jsxs)("div",{className:"btn-group mt-5",role:"group","aria-label":"External API Requests Examples",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-primary",children:"Get Public Message"}),Object(r.jsx)("button",{type:"button",className:"btn btn-primary",children:"Get Protected Message"})]}),"test"(Object(r.jsxs)("div",{className:"mt-5",children:[Object(r.jsx)("h6",{className:"muted",children:"Result"}),Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("code",{className:"col-12 text-light bg-dark p-4",children:JSON.stringify("test",null,2)})})})]}))]});var v=()=>Object(r.jsx)(n.Fragment,{children:Object(r.jsx)(o,{})}),f=a(42),N=a(43),w=a(44);var P=()=>{const{user:e}=Object(j.b)();return Object(r.jsx)(f.a,{className:"mb-5",children:Object(r.jsxs)(N.a,{className:"align-items-center profile-header mb-5 text-center text-md-left",children:[Object(r.jsx)(w.a,{md:2,children:Object(r.jsx)("img",{src:e.picture,alt:"Profile",className:"rounded-circle img-fluid profile-picture mb-3 mb-md-0"})}),Object(r.jsxs)(w.a,{md:!0,children:[Object(r.jsx)("h2",{children:e.name}),Object(r.jsx)("p",{className:"lead text-muted",children:e.email})]})]})})};var k=()=>Object(r.jsx)(n.Fragment,{children:Object(r.jsx)(O,{})});a(39);var y=()=>Object(r.jsxs)("div",{id:"app",className:"d-flex flex-column h-100",children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{className:"container flex-grow-1",children:Object(r.jsx)("div",{className:"mt-5",children:Object(r.jsxs)(i.c,{children:[Object(r.jsx)(i.a,{path:"/",exact:!0,component:v}),Object(r.jsx)(i.a,{path:"/quiz",component:k}),Object(r.jsx)(i.a,{path:"/profile",component:P}),Object(r.jsx)(i.a,{path:"/external-api",component:g})]})})}),Object(r.jsx)(l,{})]}),T=a(15);var q=a(5),I=Object(q.a)();const W={domain:T.domain,clientId:T.clientId},A={domain:W.domain,clientId:W.clientId,redirectUri:window.location.origin,onRedirectCallback:e=>{I.push(e&&e.returnTo?e.returnTo:window.location.pathname)}};c.a.render(Object(r.jsx)(j.a,{...A,children:Object(r.jsx)(d.a,{children:Object(r.jsx)(y,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.b9370b46.chunk.js.map