(this.webpackJsonptwttr=this.webpackJsonptwttr||[]).push([[0],{122:function(e,t,r){},123:function(e,t,r){},290:function(e,t,r){},291:function(e,t,r){},292:function(e,t,r){},293:function(e,t,r){},294:function(e,t,r){},295:function(e,t,r){},296:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(96),c=r.n(o),s=r(5),u=r(1),i=r.n(u),l=r(3),p=r(6),f=r(15),m=r.n(f),d=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,m.a.get("/api/posts").catch((function(e){return t="Error: , ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==t?t:r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,m.a.get("/api/users").catch((function(e){return t="Error: , ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==t?t:r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",e.next=3,m.a.post("/api/login",t).catch((function(e){return r="Error: ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==r?r:n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",e.next=3,m.a.post("/api/users",t).catch((function(e){return r="Error: ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==r?r:n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",e.next=3,m.a.post("/api/posts",t).catch((function(e){return r="Error: ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==r?r:n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",e.next=3,m.a.post("/api/delete",t).catch((function(e){return r="Error: ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==r?r:n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",e.next=3,m.a.post("/api/like",t).catch((function(e){return r="Error: ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==r?r:n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",e.next=3,m.a.post("/api/dislike",t).catch((function(e){return r="Error: ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==r?r:n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",e.next=3,m.a.post("/api/search",t).catch((function(e){return r="Error: ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==r?r:n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=(r(122),function(e){var t=e.changeCurrentPage,r=(e.profile,e.addProfile),o=e.addErrorMessage,c=Object(n.useState)(),u=Object(p.a)(c,2),f=u[0],m=u[1],d=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),!f||!f.name||!f.password?o("Error: You have to fill out both fields"):g();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(f);case 2:"string"==typeof(n=e.sent)?(console.log(n),o(n)):(console.log("Log in was successful"),r(n),t("posts"),o(""),localStorage.setItem("storediD",n._id),localStorage.setItem("storedToken",n.token));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("form",{onSubmit:d,className:"loginForm",onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),d(e))}},a.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your name",onChange:function(e){return m(Object(s.a)(Object(s.a)({},f),{},{name:e.target.value.toLowerCase().trim()}))}}),a.a.createElement("input",{type:"password",name:"password",placeholder:"Enter your password",onChange:function(e){return m(Object(s.a)(Object(s.a)({},f),{},{password:e.target.value.trim()}))}}),a.a.createElement("div",{className:"btns"},a.a.createElement("button",{className:"btns",onClick:function(){o(""),t("posts")}}," Cancel "),a.a.createElement("button",{className:"btns submit",type:"submit"},"Submit")))}),j=(r(123),function(e){var t=Object(n.useState)(""),r=Object(p.a)(t,2),o=r[0],c=r[1],s=e.profile,u=e.currentPage,f=e.addProfile,m=e.changeCurrentPage,d=e.users,g=e.addErrorMessage,b=e.addPost,h=e.allPosts,v=e.server_GetPostsRequest,E=function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==o){e.next=5;break}v(),e.next=9;break;case 5:return e.next=7,y({payload:o.toLowerCase()});case 7:"string"===typeof(r=e.sent)?(console.log(r),g(r)):(g(""),console.log("front end response: ",r),n=h.filter((function(e){for(var t=0;t<r.length;t++)if(r[t]===e._id)return e})),b(n));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=a.a.createElement("input",{type:"text",name:"search",placeholder:"Search for Hashtag here",onChange:function(e){c(e.target.value)},value:o}),k={};return s&&(k=d.find((function(e){return e._id===s._id}))),s||"posts"!==u?"log in"===u||"register"===u||"compose"===u?a.a.createElement("div",{className:"page-label"},u):a.a.createElement("div",{className:"profile"},a.a.createElement("div",{className:"profile-name",onClick:function(){c(""),v()},style:{background:k?k.color:"black"}},k?k.name:""),a.a.createElement("button",{onClick:function(){return m("compose")}}," Compose "),a.a.createElement("button",{onClick:function(){f(null),localStorage.removeItem("storediD"),localStorage.removeItem("storedToken"),m("posts"),console.log("Logged out.")}},"Log Out"),a.a.createElement("form",{onSubmit:E},w)):a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{className:"login-btn",onClick:function(){return m("log in")}},"Log In "),a.a.createElement("button",{className:"register-btn",onClick:function(){return m("register")}},"Register "),a.a.createElement("form",{onSubmit:E},w))}),x=r(97),C=(r(290),function(e){var t=e.addProfile,r=e.changeCurrentPage,o=e.addErrorMessage,c=Object(n.useState)(),u=Object(p.a)(c,2),f=u[0],m=u[1],d=Object(n.useRef)(),g=function(e){(console.log(f),e.preventDefault(),f&&f.name&&f.password&&f.rePassword&&f.color)?f.password!==f.rePassword?(d.current.style.backgroundColor="#FFE1E1",o("Error: Passwords do not match")):(d.current.style.backgroundColor="white",b()):o("Error: You have to fill out all fields")},b=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(f);case 2:"string"==typeof(n=e.sent)?(console.log(n),o(n)):(console.log("Log in was successful"),t(n),r("posts"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("form",{onSubmit:g,className:"registerForm",onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),g(e))}},a.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your name",onChange:function(e){return m(Object(s.a)(Object(s.a)({},f),{},{name:e.target.value.toLowerCase().trim()}))}}),a.a.createElement("input",{type:"password",name:"password",placeholder:"Enter your password",onChange:function(e){return m(Object(s.a)(Object(s.a)({},f),{},{password:e.target.value.trim()}))}}),a.a.createElement("input",{type:"password",name:"rePassword",ref:d,placeholder:"Re-enter your password",onChange:function(e){return m(Object(s.a)(Object(s.a)({},f),{},{rePassword:e.target.value.trim()}))}}),a.a.createElement("div",{className:"color-btns"},a.a.createElement("div",{className:"color-btns-label"},a.a.createElement("p",null," Choose a color: ")),a.a.createElement("div",{className:"color-btns-choices"},a.a.createElement(x.TwitterPicker,{triangle:"hide",onChangeComplete:function(e,t){m(Object(s.a)(Object(s.a)({},f),{},{color:e.hex}))}}))),a.a.createElement("div",{className:"btns"},a.a.createElement("button",{onClick:function(){r("posts"),o("")}}," Cancel "),a.a.createElement("button",{className:"btns submit",type:"submit"},"Submit")))}),P=(r(291),r(292),r(98)),N=function(e){var t=e.profile,r=e.post,n=e.server_GetPostsRequest,o=function(){var e=Object(l.a)(i.a.mark((function e(a){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,w({token:t.token,_id:r._id});case 3:"OK"!==(o=e.sent)?console.log(o):(console.log("Like was added."),n());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=Object(l.a)(i.a.mark((function e(a){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,k({token:t.token,_id:r._id});case 3:"OK"!==(o=e.sent)?console.log(o):(console.log("Like was removed."),n());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s={},u=r&&t&&r.authorId!==t._id&&!r.likes.includes(t._id),p=r&&t&&r.authorId!==t._id&&r.likes.includes(t._id);return u?s={color:"black",cursor:"pointer",opacity:1}:p&&(s={color:"red",cursor:"pointer",opacity:1}),a.a.createElement("button",{className:"like",onClick:function(e){u?o(e):p&&c(e)},style:s},a.a.createElement("label",null,r.likes.length),a.a.createElement(P.a,{className:"heart"}))},S=function(e){var t=e.post,r=e.profile,n=e.users,o=e.changeCurrentPage,c=e.server_GetPostsRequest,s=n.find((function(e){return e._id===t.authorId}));s||(s={name:"User no longer exists",color:"red"});var u,p=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),f();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({token:r.token,_id:t._id});case 2:"OK"!==(n=e.sent)?console.log(n):(console.log("Post was successfully deleted."),c());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();r&&r._id===t.authorId&&(u=a.a.createElement("button",{className:"delete",onClick:p}," Delete "));var m=new Date(t.date),d="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][m.getMonth()]," ").concat(m.getDate(),", ").concat(m.getFullYear()),g=m.getHours()>12?m.getHours()-12:m.getHours(),b=(m.getMinutes()<10?"0":"")+m.getMinutes(),h=m.getHours()>=12?"pm":"am",v="".concat(d," | ").concat(g,":").concat(b," ").concat(h),w=a.a.createElement(a.a.Fragment,null," ",t.payload.split(" ").map((function(e){return e.startsWith("#")?a.a.createElement("button",null,e):e+" "})));return a.a.createElement("li",{className:"post"},a.a.createElement("div",{className:"info"},a.a.createElement("div",{className:"info-name"},a.a.createElement("div",{className:"icon-color",style:{background:s.color}}),a.a.createElement("h3",null,s.name)),a.a.createElement("p",{className:"text"},w),a.a.createElement("p",{className:"date"},v)),a.a.createElement("div",{className:"postButtons"},a.a.createElement(N,{profile:r,post:t,changeCurrentPage:o,server_GetPostsRequest:c}),u))},_=(r(293),function(e){var t=e.profile,r=e.posts,n=e.users,o=e.changeCurrentPage,c=e.server_GetPostsRequest;return r&&0===r.length?a.a.createElement("div",{className:"emptyPosts"},a.a.createElement("img",{src:"https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif",alt:"none found"}),a.a.createElement("p",null,"Unfortunately there are no posts")):a.a.createElement("ul",null,r.slice(0).reverse().map((function(e){return a.a.createElement(S,Object.assign({key:e._id},{profile:t,post:e,users:n,changeCurrentPage:o,server_GetPostsRequest:c}))})))}),D=(r(294),function(e){var t=e.profile,r=e.changeCurrentPage,o=e.addErrorMessage,c=Object(n.useState)(""),s=Object(p.a)(c,2),u=s[0],f=s[1],m=Object(n.useRef)(),d=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u.trim("").length>2&&u.trim("").length<120?g():o("Error: Text is not the right length");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v({token:t.token,payload:u});case 2:"OK"!==(n=e.sent)?o(n):(console.log("Post was created."),r("posts"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("form",{className:"composeForm",onSubmit:d},a.a.createElement("textarea",{type:"text",name:"text",placeholder:"Enter your message",ref:m,onChange:function(e){f(e.target.value.trim()),u.trim("").length>120?m.current.style.backgroundColor="red":m.current.style.backgroundColor="white"}}),a.a.createElement("div",{className:"btns"},a.a.createElement("button",{name:"cancel",className:"submit",onClick:function(e){e.preventDefault(),r("posts")}},"Cancel"),a.a.createElement("button",{type:"submit",name:"submit",className:"submit"},"Submit")))}),M=(r(295),function(e){return a.a.createElement("div",{className:"errors",onClick:function(){return e.addErrorMessage("")}},e.errorMessage)});var I=function(){var e,t=Object(n.useState)("posts"),r=Object(p.a)(t,2),o=r[0],c=r[1],u=Object(n.useState)(),f=Object(p.a)(u,2),m=f[0],b=f[1],h=Object(n.useState)([]),v=Object(p.a)(h,2),E=v[0],w=v[1],k=Object(n.useState)([]),y=Object(p.a)(k,2),x=y[0],P=y[1],N=Object(n.useState)([]),S=Object(p.a)(N,2),I=S[0],R=S[1],L=Object(n.useState)(),F=Object(p.a)(L,2),q=F[0],G=F[1],H=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:"string"===typeof(t=e.sent)?(G("There was a connection error with the DB."),w([])):(w(t),P(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(){var t,r,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:"string"===typeof(t=e.sent)?console(t):(r=localStorage.getItem("storediD"),n=localStorage.getItem("storedToken"),r&&(a=t.find((function(e){return e._id===r})),b(Object(s.a)(Object(s.a)({},a),{},{token:n}))),R(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();switch(Object(n.useEffect)((function(){J(),H()}),[o]),o){case"log in":e=a.a.createElement(O,{profile:m,addProfile:b,changeCurrentPage:c,addErrorMessage:G});break;case"register":e=a.a.createElement(C,{addProfile:b,changeCurrentPage:c,addErrorMessage:G});break;case"compose":e=a.a.createElement(D,{profile:m,changeCurrentPage:c,addErrorMessage:G});break;default:e=a.a.createElement(_,{profile:m,posts:E,users:I,changeCurrentPage:c,server_GetPostsRequest:H})}return a.a.createElement("div",{className:"global-app"},q?a.a.createElement(M,{errorMessage:q,addErrorMessage:G}):"",a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"sidebar"},a.a.createElement(j,{users:I,profile:m,addProfile:b,currentPage:o,changeCurrentPage:c,addErrorMessage:G,addPost:w,allPosts:x,server_GetPostsRequest:H})),a.a.createElement("div",{className:"container"},e)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,r){e.exports=r(296)}},[[99,1,2]]]);
//# sourceMappingURL=main.8ab97bda.chunk.js.map