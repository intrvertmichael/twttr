(this.webpackJsonptwttr=this.webpackJsonptwttr||[]).push([[0],{108:function(e,t,n){e.exports=n(308)},113:function(e,t,n){},136:function(e,t,n){},300:function(e,t,n){},301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){},304:function(e,t,n){},305:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(40),c=n.n(o),s=n(3),u=n(7),i=n(28),l=n.n(i),f=(n(113),n(5)),p=n(1),m=n.n(p),d=n(2),g=n(9),b=n.n(g),E=function(){var e=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,b.a.get("/api/posts").catch((function(e){return t="Error: , ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==t?t:n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,b.a.get("/api/users").catch((function(e){return t="Error: , ".concat(e.response.data)}));case 3:return n=e.sent,e.abrupt("return",""!==t?t:n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.post("/api/login",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.post("/api/users",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.post("/api/posts",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.post("/api/delete",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.post("/api/like",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.post("/api/dislike",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.post("/api/search",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.post("/api/userPosts",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.get("/api/post/".concat(t)).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.post("/api/comments",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",e.next=3,b.a.post("/api/deletecomment",t).catch((function(e){return n="Error: ".concat(e.response.data)}));case 3:return r=e.sent,e.abrupt("return",""!==n?n:r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e){return function(t,n){t({type:"ADD_PROFILE",payload:e})}},N=function(e){return function(t,n){t({type:"SET_CURRENT_PAGE",currentPage:e})}},D=function(e){return function(t,n){t({type:"SET_ERROR_MESSAGE",message:e})}},T=function(e){return function(t,n){t({type:"SET_SEARCH",text:e})}},U=function(e){return function(t,n){t({type:"SET_SEARCH_RESULTS",payload:e})}},A=function(e){return e?function(){var t=Object(d.a)(m.a.mark((function t(n,r){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(e);case 2:a=t.sent,n({type:"SET_SINGLE_POST",payload:a});case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}():function(e,t){e({type:"SET_SINGLE_POST",payload:null})}},M=Object(f.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile}}),(function(e){return{setProfile:function(t){return e(R(t))},logInRequest:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(n,r){var a,o,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:"string"==typeof(a=t.sent)?(console.log(a),n({type:"SET_ERROR_MESSAGE",message:a})):(console.log("Log in was successful"),o=r().mongoDb.allUsers,c=o.find((function(e){return e._id===a._id})),localStorage.setItem("storediD",a._id),localStorage.setItem("storedToken",a.token),n({type:"ADD_PROFILE",payload:Object(s.a)(Object(s.a)({},c),{},{token:a.token})}),n({type:"SET_CURRENT_PAGE",currentPage:"posts"}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))},setCurrentPage:function(t){return e(N(t))},setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.setCurrentPage,n=e.setErrorMessage,o=e.logInRequest,c=Object(r.useState)(),i=Object(u.a)(c,2),l=i[0],f=i[1],p=function(e){e.preventDefault(),!l||!l.name||!l.password?n("Error: You have to fill out both fields"):(n(null),o(l))};return a.a.createElement("form",{onSubmit:p,className:"loginForm",onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),p(e))}},a.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your name",onChange:function(e){return f(Object(s.a)(Object(s.a)({},l),{},{name:e.target.value.toLowerCase().trim()}))}}),a.a.createElement("input",{type:"password",name:"password",placeholder:"Enter your password",onChange:function(e){return f(Object(s.a)(Object(s.a)({},l),{},{password:e.target.value.trim()}))}}),a.a.createElement("div",{className:"btns"},a.a.createElement("button",{className:"btns",onClick:function(){n(null),t("posts")}}," Cancel "),a.a.createElement("button",{className:"btns submit",type:"submit"},"Submit")))})),L=(n(136),Object(f.b)((function(e){return{allPosts:e.mongoDb.allPosts,search:e.page.search}}),(function(e){return{setErrorMessage:function(t){return e(D(t))},setSearch:function(t){return e(T(t))},setSearchResults:function(t){return e(U(t))}}}))((function(e){var t=e.setErrorMessage,n=e.setSearch,o=e.search,c=e.allPosts,s=e.setSearchResults,i=Object(r.useState)(),l=Object(u.a)(i,2),f=l[0],p=l[1],g=function(){var e=Object(d.a)(m.a.mark((function e(n){var r,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Searching for posts with ".concat(n," hashtag")),e.next=3,j({payload:n.toLowerCase()});case 3:"string"===typeof(r=e.sent)?(console.log(r),t(r)):(t(null),a=c.filter((function(e){for(var t=0;t<r.length;t++)if(r[t]===e._id)return e})),s(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){""===o?(n(null),s(null)):o&&g(o)}),[o]);var b=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log("search submitted ".concat(f)),n(f);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("form",{onSubmit:b},a.a.createElement("input",{type:"text",name:"search",placeholder:"Search for Hashtag here",onChange:function(e){p(e.target.value)},value:f}))}))),I=n(22),X=Object(f.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile,reduXcurrentPage:e.page.currentPage}}),(function(e){return{setProfile:function(t){return e(R(t))},removeProfile:function(){return e((function(e,t){e({type:"REMOVE_PROFILE"})}))},setCurrentPage:function(t){return e(N(t))},setSearch:function(t){return e(T(t))},setSearchResults:function(t){return e(U(t))},setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.removeProfile,n=e.reduXprofile,r=e.reduXcurrentPage,o=e.setCurrentPage,c=e.setSearch,s=e.setSearchResults,u=e.setErrorMessage,i=a.a.createElement(L,null),f=function(e){e.preventDefault(),c(null),s(null),u(null),o("posts")},p=a.a.createElement("div",{className:"page-logo",onClick:f}," ",a.a.createElement(I.c,null)," ");return!l.a.isEmpty(n)||"posts"!==r&&"single-page"!==r?"log-in"===r||"register"===r||"compose"===r?a.a.createElement(a.a.Fragment,null,"compose"!==r?p:a.a.createElement("div",{className:"profile-name compose-profile-name",onClick:f,style:{background:n.color}},n.name),a.a.createElement("div",{className:"page-label"},"log-in"===r?"Log In":r)):a.a.createElement("div",{className:"profile"},a.a.createElement("div",{className:"profile-name",onClick:f,style:{background:n.color}},n.name),a.a.createElement("button",{onClick:function(){return o("compose")}}," Compose "),a.a.createElement("button",{onClick:function(){console.log("Logged out."),t(),localStorage.removeItem("storediD"),localStorage.removeItem("storedToken"),u("You are now logged out. Hope to see you again soon."),o("posts")}}," Log Out"),i):a.a.createElement(a.a.Fragment,null,p,a.a.createElement("button",{className:"login-btn",onClick:function(){return o("log-in")}},"Log In "),a.a.createElement("button",{className:"register-btn",onClick:function(){return o("register")}},"Register "),i)})),F=n(106),G=(n(300),Object(f.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile}}),(function(e){return{setProfile:function(t){return e(R(t))},registerUser:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(n,r){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:"string"==typeof(a=t.sent)?(console.log(a),n({type:"SET_ERROR_MESSAGE",message:a})):(console.log("Registration was successful"),n({type:"ADD_PROFILE",payload:a}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))},setCurrentPage:function(t){return e(N(t))},setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.registerUser,n=e.setCurrentPage,o=e.setErrorMessage,c=Object(r.useState)(),i=Object(u.a)(c,2),l=i[0],f=i[1],p=Object(r.useRef)(),m=function(e){if(e.preventDefault(),!l||!l.name||!l.password||!l.rePassword||!l.color)o("Error: You have to fill out all fields");else{var r=l.password!==l.rePassword,a=l.name.split("").includes(" ");r?(p.current.style.backgroundColor="#FFE1E1",o("Error: Passwords do not match")):a?o("Error: Name can't have any spaces"):(p.current.style.backgroundColor="white",o(""),n("posts"),t(l))}};return a.a.createElement("form",{onSubmit:m,className:"registerForm",onKeyDown:function(e){13===e.keyCode&&(e.preventDefault(),m(e))}},a.a.createElement("input",{type:"text",name:"name",placeholder:"Enter your name",onChange:function(e){return f(Object(s.a)(Object(s.a)({},l),{},{name:e.target.value.toLowerCase().trim()}))}}),a.a.createElement("input",{type:"password",name:"password",placeholder:"Enter your password",onChange:function(e){return f(Object(s.a)(Object(s.a)({},l),{},{password:e.target.value.trim()}))}}),a.a.createElement("input",{type:"password",name:"rePassword",ref:p,placeholder:"Re-enter your password",onChange:function(e){return f(Object(s.a)(Object(s.a)({},l),{},{rePassword:e.target.value.trim()}))}}),a.a.createElement("div",{className:"color-btns"},a.a.createElement("div",{className:"color-btns-label"},a.a.createElement("p",null," Choose a color: ")),a.a.createElement("div",{className:"color-btns-choices"},a.a.createElement(F.TwitterPicker,{triangle:"hide",onChangeComplete:function(e,t){f(Object(s.a)(Object(s.a)({},l),{},{color:e.hex}))}}))),a.a.createElement("div",{className:"btns"},a.a.createElement("button",{onClick:function(){n("posts"),o(null)}}," Cancel "),a.a.createElement("button",{className:"btns submit",type:"submit"},"Submit")))}))),H=function(){return function(){var e=Object(d.a)(m.a.mark((function e(t,n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:"string"===typeof(r=e.sent)?(console.log(r),t({type:"UPDATE_ALL_POSTS",payload:[]}),t({type:"SET_ERROR_MESSAGE",message:r})):t({type:"UPDATE_ALL_POSTS",payload:r});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},K=Object(f.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile,currentPage:e.page.currentPage}}),(function(e){return{updateAllPosts:function(){return e(H())},addLikeRequest:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(n,r){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:"OK"!==(a=t.sent)?(console.log(a),n({type:"SET_ERROR_MESSAGE",message:a})):console.log("Like was added.");case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))},removeLikeRequest:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(n,r){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(e);case 2:"OK"!==(a=t.sent)?(console.log(a),n({type:"SET_ERROR_MESSAGE",message:a})):console.log("Like was removed.");case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))},setSinglePost:function(t){return e(A(t))},setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.reduXprofile,n=e.updateAllPosts,r=e.currentPage,o=e.setSinglePost,c=e.post,s=e.addLikeRequest,u=e.removeLikeRequest,i=e.setErrorMessage,l={},f=t&&c.authorId!==t._id&&!c.likes.includes(t._id),p=t&&c.authorId!==t._id&&c.likes.includes(t._id);return f?l={color:"black",cursor:"pointer",opacity:1}:p&&(l={color:"red",cursor:"pointer",opacity:1}),a.a.createElement("button",{className:"like",onClick:function(){var e=Object(d.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=4;break}i("Please log in to be able to like a post"),e.next=12;break;case 4:if(!f){e.next=9;break}return e.next=7,s({token:t.token,_id:c._id});case 7:e.next=12;break;case 9:if(!p){e.next=12;break}return e.next=12,u({token:t.token,_id:c._id});case 12:if("posts"!==r){e.next=17;break}return e.next=15,n();case 15:e.next=20;break;case 17:if("single-page"!==r){e.next=20;break}return e.next=20,o(c._id);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),style:l},a.a.createElement("label",null,c.likes.length),a.a.createElement(I.b,{className:"heart"}))})),q=Object(f.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile}}),(function(e){return{updateAllPosts:function(){return e(H())},deletePostRequest:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(n,r){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:"OK"!==(a=t.sent)?console.log(a):(console.log("Post was successfully deleted."),n({type:"SET_CURRENT_PAGE",currentPage:"posts"}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))},setCurrentPage:function(t){return e(N(t))}}}))((function(e){var t=e.reduXprofile,n=e.updateAllPosts,r=e.deletePostRequest,o=e.post,c=function(){var e=Object(d.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,r({token:t.token,_id:o._id});case 3:n();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a.a.createElement("button",{className:"delete",onClick:c},"Delete")})),W=function(e){var t=new Date(e),n="".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear()),r=t.getHours()>12?t.getHours()-12:t.getHours(),a=(t.getMinutes()<10?"0":"")+t.getMinutes(),o=t.getHours()>=12?"pm":"am";return"".concat(n," | ").concat(r,":").concat(a," ").concat(o)},J=Object(f.b)((function(e){return{allPosts:e.mongoDb.allPosts,allUsers:e.mongoDb.allUsers,reduXprofile:e.profile,currentPage:e.page.currentPage}}),(function(e){return{setSearch:function(t){return e(T(t))},getUserPosts:function(t){return e(function(e){return function(){var t=Object(d.a)(m.a.mark((function t(n,r){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x({authorId:e});case 2:"string"===typeof(a=t.sent)?(console.log(a),n({type:"SET_ERROR_MESSAGE",message:a})):(console.log("User's Posts were retreived."),n({type:"SET_SEARCH_RESULTS",payload:a}));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))},setCurrentPage:function(t){return e(N(t))},updateAllPosts:function(){return e(H())},setSinglePost:function(t){return e(A(t))}}}))((function(e){var t,n=e.setSearch,r=e.allUsers,o=e.reduXprofile,c=e.setCurrentPage,s=e.setSinglePost,u=e.currentPage,i=e.getUserPosts,l=e.post;r&&l&&(t=r.find((function(e){return e._id===l.authorId}))),t||(t={name:"User no longer exists",color:"red"});var f=function(){var e=Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(l._id);case 2:c("single-page");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(e){c("posts"),s(null),n(e)};return a.a.createElement("li",{className:"post"},a.a.createElement("div",{className:"post-header"},a.a.createElement("div",{className:"info-name",onClick:function(){i(t._id),"posts"!==u&&c("posts")}},a.a.createElement("div",{className:"icon-color",style:{background:t.color}}),a.a.createElement("h3",null,t.name)),a.a.createElement("div",{className:"like-comment-icons"},"posts"===u?a.a.createElement("el",{onClick:f,className:"comments"},a.a.createElement("label",null," ",l.comments?l.comments.length:0," "),a.a.createElement(I.a,{className:"commentbox"})):"",a.a.createElement(K,{post:l}))),a.a.createElement("div",{className:"post-body"},a.a.createElement("p",{className:"text"},function(e,t){return a.a.createElement(a.a.Fragment,null,e.split(/\s+/).map((function(e){if(e.startsWith("#"))return a.a.createElement("button",{onClick:function(){return p(e)},className:"hashtag"},e);if(e.startsWith("@")){var n=t.find((function(t){return t.name===e.toLowerCase().substring(1)})),r={};return n&&(r={background:n.color,color:"black"}),a.a.createElement("button",{style:r,className:"hashtag",onClick:function(){i(n._id),"posts"!==u&&c("posts")}},e)}return e+" "})))}(l.payload,r))),a.a.createElement("div",{className:"post-footer"},a.a.createElement("div",{className:"date-comments"},a.a.createElement("p",{className:"date"},W(l.date))),o&&o._id===l.authorId?a.a.createElement(q,{post:l}):""))})),Y=(n(301),Object(f.b)((function(e){return{singlePost:e.page.singlePost,profile:e.profile,allUsers:e.mongoDb.allUsers}}),(function(e){return{setSinglePost:function(t){return e(A(t))}}}))((function(e){var t=Object(r.useState)(),n=Object(u.a)(t,2),o=n[0],c=n[1],s=e.singlePost,i=e.profile,l=e.allUsers,f=e.setSinglePost,p=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={token:i.token,_id:s._id,message:o.trim()},e.next=4,_(n);case 4:if("OK"===(r=e.sent)){e.next=9;break}console.log(r),e.next=13;break;case 9:return console.log("Comment was added."),c(""),e.next=13,f(s._id);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=a.a.createElement("form",{onSubmit:p},a.a.createElement("input",{type:"text",name:"comment",className:"comment-input",value:o,placeholder:"Enter your comment here",onChange:function(e){return c(e.target.value)}})),b=function(){var e=Object(d.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={token:i.token,postId:s._id,commentId:t},e.next=3,C(n);case 3:if("OK"===(r=e.sent)){e.next=8;break}console.log(r),e.next=11;break;case 8:return console.log("Comment was added."),e.next=11,f(s._id);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=s.comments?s.comments.map((function(e){var t;return l&&(t=l.find((function(t){return t._id===e.authorId}))),a.a.createElement("div",{className:"single-comment",style:{borderRight:"10px solid ".concat(t.color)}},a.a.createElement("div",null,a.a.createElement("span",null," ","".concat(t.name,": ")," "),e.message),i&&e.authorId===i._id?a.a.createElement("button",{className:"delete-comment",onClick:function(t){t.preventDefault(),b(e._id)}}," Delete "):"")})):"";return a.a.createElement("div",null,a.a.createElement(J,{post:s}),a.a.createElement("div",{className:"comments-page"},a.a.createElement("div",{className:"comments-loop"},E),i?g:""))}))),B=(n(302),n(303),n(304),Object(f.b)((function(e){return{allPosts:e.mongoDb.allPosts,searchResults:e.page.searchResults}}),(function(e){return{}}))((function(e){var t=e.allPosts,n=e.searchResults,r=e.addPost,o=t;return n&&(o=n),l.a.isEmpty(o)||"string"===typeof o?a.a.createElement("div",{className:"emptyPosts"},a.a.createElement("p",null,"Unfortunately there are no posts")):a.a.createElement("ul",null,o.slice(0).reverse().map((function(e){return a.a.createElement(J,Object.assign({key:e._id},{post:e,addPost:r}))})))}))),V=(n(305),Object(f.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile}}),(function(e){return{setCurrentPage:function(t){return e(N(t))},setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.reduXprofile,n=e.setCurrentPage,o=e.setErrorMessage,c=Object(r.useState)(""),s=Object(u.a)(c,2),i=s[0],l=s[1],f=Object(r.useRef)(),p=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),i.trim().length>2&&i.trim().length<120?g():o("Error: Text is not the right length");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(m.a.mark((function e(){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y({token:t.token,payload:i.trim()});case 2:"OK"!==(r=e.sent)?o(r):(console.log("Post was created."),n("posts"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("form",{className:"composeForm",onSubmit:p},a.a.createElement("textarea",{type:"text",name:"text",placeholder:"Enter your message",ref:f,onChange:function(e){l(e.target.value),i.trim().length>120?f.current.style.backgroundColor="red":f.current.style.backgroundColor="white"}}),a.a.createElement("div",{className:"btns"},a.a.createElement("button",{name:"cancel",className:"submit",onClick:function(e){e.preventDefault(),o(null),n("posts")}},"Cancel"),a.a.createElement("button",{type:"submit",name:"submit",className:"submit"},"Submit")))})),n(306),Object(f.b)((function(e){return{allUsers:e.mongoDb.allUsers,reduXprofile:e.profile}}),(function(e){return{setCurrentPage:function(t){return e(N(t))},setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.setCurrentPage,n=e.setErrorMessage,o=e.reduXprofile,c=e.allUsers,s=Object(r.useState)(""),i=Object(u.a)(s,2),l=i[0],f=i[1],p=Object(r.useState)(!1),g=Object(u.a)(p,2),b=g[0],E=g[1],h=Object(r.useState)(null),v=Object(u.a)(h,2),O=v[0],k=v[1],w=Object(r.useState)(!1),S=Object(u.a)(w,2),j=S[0],x=S[1],P=Object(r.useState)(null),_=Object(u.a)(P,2),C=_[0],R=_[1],N=Object(r.useRef)(),D=function(){var e=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),l.trim().length>5&&l.trim().length<120?T():n("Error: Text is not the right length");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(m.a.mark((function e(){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y({token:o.token,payload:l.trim()});case 2:"OK"!==(r=e.sent)?n(r):(console.log("Post was created."),t("posts"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){if(O){document.designMode="on";for(var e=0;e<=O.length;e++)document.execCommand("delete",!1,"");document.execCommand("insertHTML",!1,"<a href='/' class='hashtag'>".concat(O,"</a>")),document.execCommand("insertText",!1," "),document.designMode="off",setTimeout((function(){N.current.focus()}),0),k(""),E(!1)}}),[O]),Object(r.useEffect)((function(){if(C){document.designMode="on";for(var e=0;e<=C.length;e++)document.execCommand("delete",!1,"");var t=c.filter((function(e){return e.name===C.substring(1)})),n=t[0],r=t.length>0?"background:".concat(n.color):"";document.execCommand("insertHTML",!1,"<a href='/' class='mention' style=".concat(r,">").concat(C,"</a>")),document.execCommand("insertText",!1," "),document.designMode="off",setTimeout((function(){N.current.focus()}),0),R(null),x(!1)}}),[c,C]);return a.a.createElement("div",{className:"highlighted-compose"},a.a.createElement("div",{contentEditable:"true",ref:N,class:"highlighted-compose-textArea",placeholder:"type something here...",onKeyUp:function(e){var t=N.current;51===e.keyCode?E(!0):b&&8===e.keyCode?O&&1===O.length&&E(!1):b&&32===e.keyCode&&t.innerText.split(/\s+/).forEach((function(e){e.startsWith("#")&&k(e)})),50===e.keyCode?x(!0):j&&8===e.keyCode?C&&1===C.length&&x(!1):j&&32===e.keyCode&&t.innerText.split(/\s+/).forEach((function(e){e.startsWith("@")&&R(e)})),f(N.current.innerText)}}),a.a.createElement("div",{className:"btns"},a.a.createElement("button",{name:"cancel",className:"submit",onClick:function(e){e.preventDefault(),n(null),t("posts")}},"Cancel"),a.a.createElement("button",{type:"submit",name:"submit",className:"submit",onClick:D},"Submit")))}))),$=(n(307),Object(f.b)((function(e){return{reduXerrorMessage:e.page.errorMessage}}),(function(e){return{setErrorMessage:function(t){return e(D(t))}}}))((function(e){var t=e.reduXerrorMessage,n=e.setErrorMessage;return t?a.a.createElement("div",{className:"errors",onClick:function(){return n(null)}},t):a.a.createElement("div",null)}))),z=Object(f.b)((function(e){return{reduXprofile:e.profile,allUsers:e.mongoDb.allUsers,reduXcurrentPage:e.page.currentPage,reduXerrorMessage:e.page.errorMessage}}),(function(e){return{setProfile:function(t){return e(R(t))},setErrorMessage:function(t){return e(D(t))},updateAllPosts:function(){return e(H())},updateAllUsers:function(){return e(function(){var e=Object(d.a)(m.a.mark((function e(t,n){var r,a,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:r=e.sent,"string"===typeof requestedPosts&&(console.log("There was a connection error with the DB."),r=[]),a=localStorage.getItem("storediD"),o=localStorage.getItem("storedToken"),a&&(c=r.find((function(e){return e._id===a})),t({type:"ADD_PROFILE",payload:Object(s.a)(Object(s.a)({},c),{},{token:o})})),t({type:"UPDATE_ALL_USERS",payload:r});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}}}))((function(e){var t,n=e.reduXcurrentPage,o=e.updateAllPosts,c=e.updateAllUsers;switch(Object(r.useEffect)((function(){c(),o()}),[n,o,c]),n){case"log-in":t=a.a.createElement(M,null);break;case"register":t=a.a.createElement(G,null);break;case"compose":t=a.a.createElement(V,null);break;case"single-page":t=a.a.createElement(Y,null);break;default:t=a.a.createElement(B,null)}return a.a.createElement("div",{className:"global-app"},a.a.createElement($,null),a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"sidebar"},a.a.createElement(X,null)),a.a.createElement("div",{className:"container"},t)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(20),Z=n(107),ee={allPosts:{},allUsers:{}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POSTS":case"UPDATE_ALL_POSTS":return Object(s.a)(Object(s.a)({},e),{},{allPosts:t.payload});case"ADD_USERS":case"UPDATE_ALL_USERS":return Object(s.a)(Object(s.a)({},e),{},{allUsers:t.payload});default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PROFILE":return Object(s.a)(Object(s.a)({},e),t.payload);case"REMOVE_PROFILE":return null;default:return e}},re={currentPage:"posts"},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case"SET_ERROR_MESSAGE":return Object(s.a)(Object(s.a)({},e),{},{errorMessage:t.message});case"SET_SEARCH":return Object(s.a)(Object(s.a)({},e),{},{search:t.text});case"SET_SEARCH_RESULTS":return Object(s.a)(Object(s.a)({},e),{},{searchResults:t.payload});case"SET_SINGLE_POST":return Object(s.a)(Object(s.a)({},e),{},{singlePost:t.payload});default:return e}},oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,ce=Object(Q.e)(Object(Q.c)({page:ae,profile:ne,mongoDb:te}),oe(Object(Q.a)(Z.a)));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f.a,{store:ce},a.a.createElement(z,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[108,1,2]]]);
//# sourceMappingURL=main.67c1cc42.chunk.js.map