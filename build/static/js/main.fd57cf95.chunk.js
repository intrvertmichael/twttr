(this.webpackJsonptwttr=this.webpackJsonptwttr||[]).push([[0],{108:function(e,t,n){e.exports=n(307)},131:function(e,t,n){},136:function(e,t,n){},300:function(e,t,n){},301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){},305:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(40),c=n.n(o),s=n(3),u=n(1),l=n.n(u),i=n(4),p=n(13),f=n(28),m=n.n(f),d=n(11),g=n.n(d),b=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,g.a.get("/api/posts").catch((function(e){return t="Error: , ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==t?t:n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,g.a.get("/api/users").catch((function(e){return t="Error: , ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==t?t:n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,g.a.post("/api/login",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,g.a.post("/api/users",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,g.a.post("/api/delete",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,g.a.post("/api/like",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,g.a.post("/api/dislike",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,g.a.post("/api/search",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,g.a.get("/api/post/".concat(t)).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,g.a.post("/api/comments",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,g.a.post("/api/deletecomment",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=(n(131),n(5)),_=function(e){return function(t,n){t({type:"ADD_PROFILE",payload:e})}},C=function(e){return function(t,n){t({type:"SET_CURRENT_PAGE",currentPage:e})}},D=function(e){return function(t,n){t({type:"SET_ERROR_MESSAGE",message:e})}},N=function(e){return function(t,n){t({type:"SET_SEARCH",text:e})}},U=function(e){return function(t,n){t({type:"SET_SEARCH_RESULTS",payload:e})}},R=function(e){return e?function(){var t=Object(i.a)(l.a.mark((function t(n,r){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:a=t.sent,n({type:"SET_SINGLE_POST",payload:a});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}():function(e,t){e({type:"SET_SINGLE_POST",payload:null})}},A=Object(x.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile}}),(function(e){return{setProfile:function(t){return e(_(t))},setCurrentPage:function(t){return e(C(t))},setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.allUsers,n=e.setProfile,o=e.setCurrentPage,c=e.setErrorMessage,u=Object(r.useState)(),f=Object(p.a)(u,2),m=f[0],d=f[1],g=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),!m||!m.name||!m.password?c("Error: You have to fill out both fields"):b();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(i.a)(l.a.mark((function e(){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(m);case 2:"string"==typeof(r=e.sent)?(console.log(r),c(r)):(console.log("Log in was successful"),a=t.find((function(e){return e._id===r._id})),n(Object(s.a)(Object(s.a)({},a),{},{token:r.token})),o("posts"),c(null),localStorage.setItem("storediD",r._id),localStorage.setItem("storedToken",r.token));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("form",{onSubmit:g,className:"loginForm",onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),g(e))}},a.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your name",onChange:function(e){return d(Object(s.a)(Object(s.a)({},m),{},{name:e.target.value.toLowerCase().trim()}))}}),a.a.createElement("input",{type:"password",name:"password",placeholder:"Enter your password",onChange:function(e){return d(Object(s.a)(Object(s.a)({},m),{},{password:e.target.value.trim()}))}}),a.a.createElement("div",{className:"btns"},a.a.createElement("button",{className:"btns",onClick:function(){c(null),o("posts")}}," Cancel "),a.a.createElement("button",{className:"btns submit",type:"submit"},"Submit")))})),T=(n(136),Object(x.b)((function(e){return{allPosts:e.mongoDb.allPosts,search:e.page.search}}),(function(e){return{setErrorMessage:function(t){return e(D(t))},setSearch:function(t){return e(N(t))},setSearchResults:function(t){return e(U(t))}}}))((function(e){var t=e.setErrorMessage,n=e.setSearch,o=e.search,c=e.allPosts,s=e.setSearchResults,u=Object(r.useState)(),f=Object(p.a)(u,2),m=f[0],d=f[1],g=function(){var e=Object(i.a)(l.a.mark((function e(n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Searching for posts with ".concat(n," hashtag")),e.next=3,k({payload:n.toLowerCase()});case 3:"string"===typeof(r=e.sent)?(console.log(r),t(r)):(t(null),a=c.filter((function(e){for(var t=0;t<r.length;t++)if(r[t]===e._id)return e})),s(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){""===o?(n(null),s(null)):o&&g(o)}),[o]);var b=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("search submitted ".concat(m)),n(m);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("form",{onSubmit:b},a.a.createElement("input",{type:"text",name:"search",placeholder:"Search for Hashtag here",onChange:function(e){d(e.target.value)},value:m}))}))),L=n(22),M=Object(x.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile,reduXcurrentPage:e.page.currentPage}}),(function(e){return{setProfile:function(t){return e(_(t))},removeProfile:function(){return e((function(e,t){e({type:"REMOVE_PROFILE"})}))},setCurrentPage:function(t){return e(C(t))},setSearch:function(t){return e(N(t))},setSearchResults:function(t){return e(U(t))},setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.removeProfile,n=e.reduXprofile,r=e.reduXcurrentPage,o=e.setCurrentPage,c=e.setSearch,s=e.setSearchResults,u=e.setErrorMessage,l=a.a.createElement(T,null),i=function(e){e.preventDefault(),c(null),s(null),u(null),o("posts")},p=a.a.createElement("div",{className:"page-logo",onClick:i}," ",a.a.createElement(L.c,null)," ");return!m.a.isEmpty(n)||"posts"!==r&&"single-page"!==r?"log-in"===r||"register"===r||"compose"===r?a.a.createElement(a.a.Fragment,null,"compose"!==r?p:"",a.a.createElement("div",{className:"page-label"},"log-in"===r?"Log In":r)):a.a.createElement("div",{className:"profile"},a.a.createElement("div",{className:"profile-name",onClick:i,style:{background:n.color}},n.name),a.a.createElement("button",{onClick:function(){return o("compose")}}," Compose "),a.a.createElement("button",{onClick:function(){console.log("Logged out."),t(),localStorage.removeItem("storediD"),localStorage.removeItem("storedToken"),o("posts")}}," Log Out"),l):a.a.createElement(a.a.Fragment,null,p,a.a.createElement("button",{className:"login-btn",onClick:function(){return o("log-in")}},"Log In "),a.a.createElement("button",{className:"register-btn",onClick:function(){return o("register")}},"Register "),l)})),I=n(106),X=(n(300),Object(x.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile}}),(function(e){return{setProfile:function(t){return e(_(t))},setCurrentPage:function(t){return e(C(t))},setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.setProfile,n=e.setCurrentPage,o=e.setErrorMessage,c=Object(r.useState)(),u=Object(p.a)(c,2),f=u[0],m=u[1],d=Object(r.useRef)(),g=function(e){if(e.preventDefault(),!f||!f.name||!f.password||!f.rePassword||!f.color)o("Error: You have to fill out all fields");else{var t=f.password!==f.rePassword,n=f.name.split("").includes(" ");t?(d.current.style.backgroundColor="#FFE1E1",o("Error: Passwords do not match")):n?o("Error: Name can't have any spaces"):(d.current.style.backgroundColor="white",b())}},b=function(){var e=Object(i.a)(l.a.mark((function e(){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(f);case 2:"string"==typeof(r=e.sent)?(console.log(r),o(r)):(console.log("Log in was successful"),t(r),n("posts"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("form",{onSubmit:g,className:"registerForm",onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),g(e))}},a.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your name",onChange:function(e){return m(Object(s.a)(Object(s.a)({},f),{},{name:e.target.value.toLowerCase().trim()}))}}),a.a.createElement("input",{type:"password",name:"password",placeholder:"Enter your password",onChange:function(e){return m(Object(s.a)(Object(s.a)({},f),{},{password:e.target.value.trim()}))}}),a.a.createElement("input",{type:"password",name:"rePassword",ref:d,placeholder:"Re-enter your password",onChange:function(e){return m(Object(s.a)(Object(s.a)({},f),{},{rePassword:e.target.value.trim()}))}}),a.a.createElement("div",{className:"color-btns"},a.a.createElement("div",{className:"color-btns-label"},a.a.createElement("p",null," Choose a color: ")),a.a.createElement("div",{className:"color-btns-choices"},a.a.createElement(I.TwitterPicker,{triangle:"hide",onChangeComplete:function(e,t){m(Object(s.a)(Object(s.a)({},f),{},{color:e.hex}))}}))),a.a.createElement("div",{className:"btns"},a.a.createElement("button",{onClick:function(){n("posts"),o(null)}}," Cancel "),a.a.createElement("button",{className:"btns submit",type:"submit"},"Submit")))}))),F=function(){return function(){var e=Object(i.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:r=e.sent,t({type:"UPDATE_ALL_POSTS",payload:r});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},H=Object(x.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile,currentPage:e.page.currentPage}}),(function(e){return{updateAllPosts:function(){return e(F())},setSinglePost:function(t){return e(R(t))}}}))((function(e){var t=e.reduXprofile,n=e.updateAllPosts,r=e.currentPage,o=e.setSinglePost,c=e.post,s=function(){var e=Object(i.a)(l.a.mark((function e(a){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,y({token:t.token,_id:c._id});case 3:if("OK"===(s=e.sent)){e.next=8;break}console.log(s),e.next=16;break;case 8:if(console.log("Like was added."),"posts"!==r){e.next=13;break}n(),e.next=16;break;case 13:if("single-page"!==r){e.next=16;break}return e.next=16,o(c._id);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(i.a)(l.a.mark((function e(a){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,w({token:t.token,_id:c._id});case 3:if("OK"===(s=e.sent)){e.next=8;break}console.log(s),e.next=16;break;case 8:if(console.log("Like was removed."),"posts"!==r){e.next=13;break}n(),e.next=16;break;case 13:if("single-page"!==r){e.next=16;break}return e.next=16,o(c._id);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p={},f=t&&c.authorId!==t._id&&!c.likes.includes(t._id),m=t&&c.authorId!==t._id&&c.likes.includes(t._id);return f?p={color:"black",cursor:"pointer",opacity:1}:m&&(p={color:"red",cursor:"pointer",opacity:1}),a.a.createElement("button",{className:"like",onClick:function(e){f?s(e):m&&u(e)},style:p},a.a.createElement("label",null,c.likes.length),a.a.createElement(L.b,{className:"heart"}))})),K=Object(x.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile}}),(function(e){return{updateAllPosts:function(){return e(F())},setCurrentPage:function(t){return e(C(t))}}}))((function(e){var t=e.reduXprofile,n=e.updateAllPosts,r=e.setCurrentPage,o=e.post,c=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),s();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O({token:t.token,_id:o._id});case 2:"OK"!==(a=e.sent)?console.log(a):(console.log("Post was successfully deleted."),n(),r("posts"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("button",{className:"delete",onClick:c},"Delete")})),G=function(e){var t=new Date(e),n="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear()),r=t.getHours()>12?t.getHours()-12:t.getHours(),a=(t.getMinutes()<10?"0":"")+t.getMinutes(),o=t.getHours()>=12?"pm":"am";return"".concat(n," | ").concat(r,":").concat(a," ").concat(o)},J=Object(x.b)((function(e){return{allPosts:e.mongoDb.allPosts,allUsers:e.mongoDb.allUsers,reduXprofile:e.profile,currentPage:e.page.currentPage}}),(function(e){return{setSearch:function(t){return e(N(t))},setCurrentPage:function(t){return e(C(t))},updateAllPosts:function(){return e(F())},setSinglePost:function(t){return e(R(t))}}}))((function(e){var t=e.setSearch,n=e.allUsers,r=e.reduXprofile,o=e.setCurrentPage,c=e.setSinglePost,s=e.currentPage,u=e.post,p=n.find((function(e){return e._id===u.authorId}));p||(p={name:"User no longer exists",color:"red"});var f=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(u._id);case 2:o("single-page");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(e){o("posts"),c(null),t(e)};return a.a.createElement("li",{className:"post"},a.a.createElement("div",{className:"post-header"},a.a.createElement("div",{className:"info-name"},a.a.createElement("div",{className:"icon-color",style:{background:p.color}}),a.a.createElement("h3",null,p.name)),a.a.createElement("div",{className:"like-comment-icons"},"posts"===s?a.a.createElement("el",{onClick:f,className:"comments"},a.a.createElement("label",null," ",u.comments?u.comments.length:0," "),a.a.createElement(L.a,{className:"commentbox"})):"",a.a.createElement(H,{post:u}))),a.a.createElement("div",{className:"post-body"},a.a.createElement("p",{className:"text"},function(e,t){return a.a.createElement(a.a.Fragment,null,e.split(/\s+/).map((function(e){if(e.startsWith("#"))return a.a.createElement("button",{onClick:function(){return m(e)},className:"hashtag"},e);if(e.startsWith("@")){var n=t.find((function(t){return t.name===e.toLowerCase().substring(1)})),r={};return n&&(r={background:n.color,color:"black"}),a.a.createElement("button",{style:r,className:"hashtag"},e)}return e+" "})))}(u.payload,n))),a.a.createElement("div",{className:"post-footer"},a.a.createElement("div",{className:"date-comments"},a.a.createElement("p",{className:"date"},G(u.date))),r&&r._id===u.authorId?a.a.createElement(K,{post:u}):""))})),W=(n(301),Object(x.b)((function(e){return{singlePost:e.page.singlePost,profile:e.profile,allUsers:e.mongoDb.allUsers}}),(function(e){return{setSinglePost:function(t){return e(R(t))}}}))((function(e){var t=Object(r.useState)(),n=Object(p.a)(t,2),o=n[0],c=n[1],s=e.singlePost,u=e.profile,f=e.allUsers,m=e.setSinglePost,d=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={token:u.token,_id:s._id,message:o.trim()},e.next=4,j(n);case 4:if("OK"===(r=e.sent)){e.next=9;break}console.log(r),e.next=13;break;case 9:return console.log("Comment was added."),c(""),e.next=13,m(s._id);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=a.a.createElement("form",{onSubmit:d},a.a.createElement("input",{type:"text",name:"comment",className:"comment-input",value:o,placeholder:"Enter your comment here",onChange:function(e){return c(e.target.value)}})),b=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={token:u.token,postId:s._id,commentId:t},e.next=3,S(n);case 3:if(r=e.sent,console.log("response",r),"OK"===r){e.next=9;break}console.log(r),e.next=12;break;case 9:return console.log("Comment was added."),e.next=12,m(s._id);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=s.comments?s.comments.map((function(e){var t;return f&&(t=f.find((function(t){return t._id===e.authorId}))),a.a.createElement("div",{className:"single-comment",style:{borderRight:"10px solid ".concat(t.color)}},a.a.createElement("div",null,a.a.createElement("span",null," ","".concat(t.name,": ")," "),e.message),u&&e.authorId===u._id?a.a.createElement("button",{className:"delete-comment",onClick:function(t){t.preventDefault(),b(e._id)}}," Delete "):"")})):"";return a.a.createElement("div",null,a.a.createElement(J,{post:s}),a.a.createElement("div",{className:"comments-page"},a.a.createElement("div",{className:"comments-loop"},E),u?g:""))}))),Y=(n(302),n(303),n(304),Object(x.b)((function(e){return{allPosts:e.mongoDb.allPosts,searchResults:e.page.searchResults}}),(function(e){return{}}))((function(e){var t=e.allPosts,n=e.searchResults,r=e.addPost,o=t;return n&&(o=n),m.a.isEmpty(o)?a.a.createElement("div",{className:"emptyPosts"},a.a.createElement("img",{src:"https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif",alt:"none found"}),a.a.createElement("p",null,"Unfortunately there are no posts")):a.a.createElement("ul",null,o.slice(0).reverse().map((function(e){return a.a.createElement(J,Object.assign({key:e._id},{post:e,addPost:r}))})))}))),V=(n(305),Object(x.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile}}),(function(e){return{setCurrentPage:function(t){return e(C(t))},setErrorMessage:function(t){return e(D(t))}}}))((function(e){e.reduXprofile,e.setCurrentPage,e.setErrorMessage,e.allUsers;var t=Object(r.useState)(" "),n=Object(p.a)(t,2),o=(n[0],n[1],Object(r.useState)()),c=Object(p.a)(o,2),s=c[0],u=c[1],l=Object(r.useState)(0),i=Object(p.a)(l,2),f=(i[0],i[1],Object(r.useRef)());return a.a.createElement("div",{contentEditable:"true",className:"test",placeholder:"type something here",ref:f,onKeyUp:function(e){f.current.focus();var t=f.current.innerText.split(" ").map((function(e){return e.startsWith("#")?a.a.createElement("div",null,a.a.createElement("button",null,e),a.a.createElement("span",null," ")):"".concat(e," ")}));console.log(t);var n=a.a.createElement("p",null," ",t," ");console.log(n),u(""),u(n)}},s)}))),B=(n(306),Object(x.b)((function(e){return{reduXerrorMessage:e.page.errorMessage}}),(function(e){return{setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.reduXerrorMessage,n=e.setErrorMessage;return t?a.a.createElement("div",{className:"errors",onClick:function(){return n(null)}},t):a.a.createElement("div",null)}))),$=Object(x.b)((function(e){return console.log(e),{reduXprofile:e.profile,allUsers:e.mongoDb.allUsers,reduXcurrentPage:e.page.currentPage,reduXerrorMessage:e.page.errorMessage}}),(function(e){return{reduXaddPosts:function(t){return e(function(e){return function(t,n){t({type:"ADD_POSTS",payload:e})}}(t))},reduXaddUsers:function(t){return e(function(e){return function(t,n){t({type:"ADD_USERS",payload:e})}}(t))},setProfile:function(t){return e(_(t))},setErrorMessage:function(t){return e(D(t))},updateAllPosts:function(){return e(F())},updateAllUsers:function(){return e(function(){var e=Object(i.a)(l.a.mark((function e(t,n){var r,a,o,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:r=e.sent,a=localStorage.getItem("storediD"),o=localStorage.getItem("storedToken"),a&&(c=r.find((function(e){return e._id===a})),t({type:"ADD_PROFILE",payload:Object(s.a)(Object(s.a)({},c),{},{token:o})})),t({type:"UPDATE_ALL_USERS",payload:r});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))((function(e){var t,n=e.reduXcurrentPage,o=e.updateAllPosts,c=e.updateAllUsers;switch(Object(r.useEffect)((function(){c(),o()}),[n]),n){case"log-in":t=a.a.createElement(A,null);break;case"register":t=a.a.createElement(X,null);break;case"compose":t=a.a.createElement(V,null);break;case"single-page":t=a.a.createElement(W,null);break;default:t=a.a.createElement(Y,null)}return a.a.createElement("div",{className:"global-app"},a.a.createElement(B,null),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"sidebar"},a.a.createElement(M,null)),a.a.createElement("div",{className:"container"},t)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=n(20),z=n(107),Q={allPosts:{},allUsers:{}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POSTS":case"UPDATE_ALL_POSTS":return Object(s.a)(Object(s.a)({},e),{},{allPosts:t.payload});case"ADD_USERS":case"UPDATE_ALL_USERS":return Object(s.a)(Object(s.a)({},e),{},{allUsers:t.payload});default:return e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROFILE":return Object(s.a)(Object(s.a)({},e),t.payload);case"REMOVE_PROFILE":return null;default:return e}},te={currentPage:"posts"},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case"SET_ERROR_MESSAGE":return Object(s.a)(Object(s.a)({},e),{},{errorMessage:t.message});case"SET_SEARCH":return Object(s.a)(Object(s.a)({},e),{},{search:t.text});case"SET_SEARCH_RESULTS":return Object(s.a)(Object(s.a)({},e),{},{searchResults:t.payload});case"SET_SINGLE_POST":return Object(s.a)(Object(s.a)({},e),{},{singlePost:t.payload});default:return e}},re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||q.d,ae=Object(q.e)(Object(q.c)({page:ne,profile:ee,mongoDb:Z}),re(Object(q.a)(z.a)));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(x.a,{store:ae},a.a.createElement($,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,2]]]);
//# sourceMappingURL=main.fd57cf95.chunk.js.map