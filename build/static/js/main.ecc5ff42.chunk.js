(this.webpackJsonptwttr=this.webpackJsonptwttr||[]).push([[0],{18:function(e,t,a){e.exports=a(49)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),o=a.n(c),s=a(1),u=a.n(s),l=a(3),i=a(5),p=a(6),m=a.n(p),f=function(){var e=Object(l.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,m.a.get("http://localhost:3001/api/posts").catch((function(e){return t="Error: , ".concat(e.response.data)}));case 3:return a=e.sent,e.abrupt("return",""!==t?t:a.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",e.next=3,m.a.post("http://localhost:3001/api/login",t).catch((function(e){return a="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==a?a:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",e.next=3,m.a.post("/api/users",t).catch((function(e){return a="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==a?a:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",e.next=3,m.a.post("/api/posts",t).catch((function(e){return a="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==a?a:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",e.next=3,m.a.post("/api/delete",t).catch((function(e){return a="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==a?a:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",e.next=3,m.a.post("/api/like",t).catch((function(e){return a="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==a?a:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=a(2),w=(a(41),function(e){var t=Object(r.useState)(),a=Object(i.a)(t,2),c=a[0],o=a[1],s=function(){var t=Object(l.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(!c||!c.name||!c.password)){t.next=6;break}e.addErrorMessage("Error: You have to fill out both fields"),t.next=10;break;case 6:return t.next=8,d(c);case 8:"string"==typeof(r=t.sent)?(console.log(r),e.addErrorMessage(r)):(console.log("Log in was successful"),e.addProfile(r),e.changeCurrentPage("posts"),e.addErrorMessage(""));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return n.a.createElement("form",{onSubmit:s,className:"loginForm",onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),s(e))}},n.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your name",onChange:function(e){return o(Object(v.a)(Object(v.a)({},c),{},{name:e.target.value.toLowerCase().trim()}))}}),n.a.createElement("input",{type:"password",name:"password",placeholder:"Enter your password",onChange:function(e){return o(Object(v.a)(Object(v.a)({},c),{},{password:e.target.value.trim()}))}}),n.a.createElement("div",{className:"btns"},n.a.createElement("button",{className:"btns",onClick:function(){e.addErrorMessage(""),e.changeCurrentPage("register")}}," Register "),n.a.createElement("button",{className:"btns",type:"submit"},"Submit")))}),k=(a(42),function(e){return e.profile||"posts"!==e.currentPage?e.profile||"log in"!==e.currentPage&&"register"!==e.currentPage?e.profile&&"compose"===e.currentPage?n.a.createElement("button",{onClick:function(){e.changeCurrentPage("posts"),e.addErrorMessage("")}}," Cancel "):n.a.createElement("div",{className:"profile"},n.a.createElement("div",{className:"profile-name",style:{background:e.profile?e.profile.color:"red"}},e.profile?e.profile.name:""),n.a.createElement("button",{onClick:function(){return e.changeCurrentPage("compose")}}," Compose "),n.a.createElement("button",{onClick:function(){e.addProfile(null),e.changeCurrentPage("posts")}},"Log Out")):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"page-label"},e.currentPage),n.a.createElement("button",{onClick:function(){e.changeCurrentPage("posts"),e.addErrorMessage("")}}," Cancel ")):n.a.createElement("button",{className:"login-btn",onClick:function(){return e.changeCurrentPage("log in")}},"Log In / Register")}),C=(a(43),function(e){var t=Object(r.useState)(),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(r.useState)(),p=Object(i.a)(s,2),m=p[0],f=p[1],d=Object(r.useRef)(),h=function(){var t=Object(l.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),console.log(c),!(!c||!c.name||!c.password||!c.rePassword||!c.color)){t.next=7;break}e.addErrorMessage("Error: You have to fill out all fields"),t.next=18;break;case 7:if(!(c.password!==c.rePassword)){t.next=13;break}d.current.style.backgroundColor="#FFE1E1",e.addErrorMessage("Error: Passwords do not match"),t.next=18;break;case 13:return d.current.style.backgroundColor="white",t.next=16,g(c);case 16:"string"==typeof(r=t.sent)?(console.log("there is an error"),console.log(r)):(console.log("log in was successful"),e.addProfile(r),e.changeCurrentPage("posts"));case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return n.a.createElement("form",{onSubmit:h,className:"registerForm",onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),h(e))}},n.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your name",onChange:function(e){return o(Object(v.a)(Object(v.a)({},c),{},{name:e.target.value.toLowerCase().trim()}))}}),n.a.createElement("input",{type:"password",name:"password",placeholder:"Enter your password",onChange:function(e){return o(Object(v.a)(Object(v.a)({},c),{},{password:e.target.value.trim()}))}}),n.a.createElement("input",{type:"password",name:"rePassword",ref:d,placeholder:"Re-enter your password",onChange:function(e){return o(Object(v.a)(Object(v.a)({},c),{},{rePassword:e.target.value.trim()}))}}),n.a.createElement("div",{className:"color-btns"},n.a.createElement("div",{className:"color-btns-label"},n.a.createElement("p",null," Choose a color: ")),n.a.createElement("div",{className:"color-btns-choices"},n.a.createElement("button",{onClick:function(e){e.preventDefault(),f(1),o(Object(v.a)(Object(v.a)({},c),{},{color:"#FFDAC5"}))},className:1===m?"selected":null}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),f(2),o(Object(v.a)(Object(v.a)({},c),{},{color:"#C5FFD1"}))},className:2===m?"selected":null}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),f(3),o(Object(v.a)(Object(v.a)({},c),{},{color:"#C5DCFF"}))},className:3===m?"selected":null}),n.a.createElement("button",{onClick:function(e){e.preventDefault(),f(4),o(Object(v.a)(Object(v.a)({},c),{},{color:"#F0C5FF"}))},className:4===m?"selected":null}))),n.a.createElement("div",{className:"btns"},n.a.createElement("button",{onClick:function(){e.changeCurrentPage("log in"),e.addErrorMessage("")}}," Log In "),n.a.createElement("button",{className:"btns",type:"submit"},"Submit")))}),y=(a(44),a(45),a(17)),O=function(e){var t=e.profile,a=e.post,r=e.likeRequest,c=function(){var n=Object(l.a)(u.a.mark((function n(c){var o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.next=3,r({token:t.token,_id:a._id});case 3:o=n.sent,console.log(o),e.fetchData();case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),o={};return a&&t&&a.authorId!==t._id&&!a.likes.includes(t._id)&&(o={color:"red",cursor:"pointer",opacity:1}),n.a.createElement("button",{className:"like",onClick:function(e){t&&t._id!==a.authorId&&!a.likes.includes(t._id)&&c(e)},style:o},n.a.createElement("label",null,a.likes.length),n.a.createElement(y.a,{className:"heart"}))},j=function(e){var t=e.post,a=e.profile;if(!t)return n.a.createElement("div",null);var r,c=function(){var r=Object(l.a)(u.a.mark((function r(n){var c;return u.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.next=3,b({token:a.token,_id:t._id});case 3:c=r.sent,console.log(c),e.fetchData();case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();a&&a._id===t.authorId&&(r=n.a.createElement("button",{className:"delete",onClick:c}," Delete "));var o=new Date(t.date),s=o.getHours()>=12?"pm":"am",i="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][o.getMonth()]," ").concat(o.getDate()," , ").concat(o.getFullYear()," | ").concat(o.getHours(),":").concat(o.getMinutes()," ").concat(s);return n.a.createElement("li",{className:"post"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"icon"},n.a.createElement("div",{className:"icon-color",style:{background:t.color}})),n.a.createElement("div",{className:"info"},n.a.createElement("h3",null,t.name),n.a.createElement("p",{className:"text"},t.payload),n.a.createElement("p",{className:"date"},i))),n.a.createElement("div",{className:"postButtons"},n.a.createElement(O,{profile:a,post:t,likeRequest:E,changeCurrentPage:e.changeCurrentPage,fetchData:e.fetchData}),r))},x=(a(46),function(e){var t=e.profile;return e.posts&&0===e.posts.length?n.a.createElement("div",{className:"emptyPosts"},n.a.createElement("img",{src:"https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif",alt:"none found"}),n.a.createElement("p",null,"Unfortunately there are no posts")):n.a.createElement("ul",null,e.posts.slice(0).reverse().map((function(a){return n.a.createElement(j,{key:a._id,profile:t,post:a,changeCurrentPage:e.changeCurrentPage,fetchData:e.fetchData})})))}),P=(a(47),function(e){var t=Object(r.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(r.useRef)(),p=function(){var t=Object(l.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(c.trim("").length>2&&c.trim("").length<280&&e.profile)){t.next=9;break}return t.next=4,h({token:e.profile.token,payload:c});case 4:r=t.sent,console.log(r),e.changeCurrentPage("posts"),t.next=10;break;case 9:console.log("either the text is too short or theres no profile");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return n.a.createElement("form",{className:"composeForm",onSubmit:p},n.a.createElement("textarea",{type:"text",name:"text",placeholder:"Enter your message",ref:s,onChange:function(e){o(e.target.value.trim()),c.trim("").length>280?s.current.style.backgroundColor="red":s.current.style.backgroundColor="white"}}),n.a.createElement("input",{type:"submit",name:"submit"}))}),N=(a(48),function(e){return n.a.createElement("div",{className:"errors",onClick:function(){return e.addErrorMessage("")}},e.errorMessage)});var D=function(){var e,t=Object(r.useState)("posts"),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(r.useState)(),p=Object(i.a)(s,2),m=p[0],d=p[1],g=Object(r.useState)([]),h=Object(i.a)(g,2),b=h[0],E=h[1],v=Object(r.useState)(),y=Object(i.a)(v,2),O=y[0],j=y[1],D=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:(t=e.sent)?E(t):(console.log("There was an issue getting the posts"),j("There was a connection error with the DB."));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();switch(Object(r.useEffect)((function(){D()}),[c]),c){case"log in":e=n.a.createElement(w,{changeCurrentPage:o,addProfile:d,addErrorMessage:j});break;case"register":e=n.a.createElement(C,{addProfile:d,changeCurrentPage:o,addErrorMessage:j});break;case"compose":e=n.a.createElement(P,{profile:m,changeCurrentPage:o});break;default:e=n.a.createElement(x,{profile:m,posts:b,changeCurrentPage:o,fetchData:D})}return n.a.createElement("div",{className:"global-app"},O?n.a.createElement(N,{errorMessage:O,addErrorMessage:j}):"",n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"sidebar"},n.a.createElement(k,{profile:m,currentPage:c,changeCurrentPage:o,addProfile:d,addErrorMessage:j})),n.a.createElement("div",{className:"container"},e)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.ecc5ff42.chunk.js.map