(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{13:function(e,t,n){},21:function(e,t,n){e.exports=n(31)},31:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),o=n.n(r),l=(n(13),n(2)),u=n(1),s=c.a.createContext();function i(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)([]),i=Object(u.a)(l,2),m=i[0],h=i[1],E=Object(a.useState)("light"),f=Object(u.a)(E,2),d=f[0],b=f[1],v=Object(a.useState)(!0),p=Object(u.a)(v,2),g=p[0],O=p[1];return Object(a.useEffect)((function(){fetch("/user/getUser").then((function(e){e.ok?e.text().then((function(e){o(e),fetch("/journal/getJournal?user=".concat(e)).then((function(e){e.ok?e.text().then((function(e){h(JSON.parse(e))})):e.text().then((function(e){console.error(e)}))})),fetch("/theme/getTheme?user=".concat(e)).then((function(e){e.ok?e.text().then((function(e){b(e)})):e.text().then((function(e){console.error(e)}))}))})):e.text().then((function(e){console.error(e)}))}))}),[g]),c.a.createElement(s.Provider,{value:{user:r,journal:m,theme:d,updateContext:function(){O((function(e){return!e}))}}},e.children)}var m=function(){var e=Object(a.useContext)(s),t=e.user,n=e.theme,r=e.updateContext,o="light"===n?"fa-toggle-off":"fa-toggle-on";return c.a.createElement("div",{className:"theme-switch-container"},c.a.createElement("span",{className:"theme-switch-label"},"Switch Theme: "),c.a.createElement("button",{className:"theme-switch fas "+o,onClick:function(){var e="light"===n?"dark":"light";fetch("/theme/updateTheme?user=".concat(t,"&theme=").concat(e),{method:"PUT"}).then((function(e){e.ok?r():e.text().then((function(e){console.error(e)}))}))}}))};var h=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],o=n[1];return c.a.createElement("button",{className:"nav-link ".concat(r),id:e.id,onMouseEnter:function(){"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?o(""):o("hovered")},onMouseLeave:function(){o("")},onTouchStart:function(){o("hovered")},onTouchEnd:function(){o("")},onClick:e.onClick},e.text)};var E=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],o=n[1];return c.a.createElement("button",{className:"button ".concat(r),id:e.id,onMouseEnter:function(){"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?o(""):o("hovered")},onMouseLeave:function(){o("")},onTouchStart:function(){o("hovered")},onTouchEnd:function(){o("")},onClick:e.onClick},e.text)};var f=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],o=n[1];return c.a.createElement("div",{id:e.id},c.a.createElement(E,{text:"LOGOUT",onClick:function(){fetch("/user/logout").then((function(e){e.ok?o(!0):console.error("Logout failed")}))}}),r?c.a.createElement(l.a,{to:"/login"}):null)};var d=function(e){var t=Object(a.useContext)(s),n=t.user,r=t.journal,o=t.theme,l=Object(a.useState)([]),i=Object(u.a)(l,2),E=i[0],d=i[1];return Object(a.useEffect)((function(){d(r.map((function(t){return c.a.createElement(h,{text:t.date,onClick:function(){return e.displayEntry(t.date)}})})))}),[r]),c.a.createElement("div",{className:"nav-container "+e.isNavOpen+" "+o},c.a.createElement("button",{class:"close-nav-button",onClick:e.closeNav},"\xd7"),c.a.createElement("h2",{className:"greeting"},"Hello, ",n,"!"),c.a.createElement(m,null),c.a.createElement(f,null),c.a.createElement("p",{className:"previous-entries"},"Previous Entries:"),c.a.createElement("div",{className:"nav-links-container"},E))},b=n(16);var v=function(){var e=Object(a.useContext)(s),t=e.user,n=e.journal,r=e.theme,o=e.updateContext,l=Object(a.useState)(""),i=Object(u.a)(l,2),m=i[0],h=i[1],f=Object(a.useState)(""),d=Object(u.a)(f,2),v=d[0],p=d[1];return Object(a.useEffect)((function(){var e=new Date,t=e.getMonth()+1,n=e.getDate(),a=e.getFullYear();p("".concat(t,"-").concat(n,"-").concat(a))}),[]),c.a.createElement("div",{className:"new-entry-container "+r},c.a.createElement("h1",{className:"entry-header"},v),c.a.createElement("textarea",{className:"new-entry-textarea",placeholder:"Type your entry here",value:m,onChange:function(e){h(e.target.value)}}),c.a.createElement(E,{text:"SUBMIT",onClick:function(){var e,a,c=n.filter((function(e){return e.date===v}));if(c.length>0){e={date:v,entry:c[c.length-1].entry+"\n---\n"+m};var r=n.filter((function(e){return e.date!==v}));a=[].concat(Object(b.a)(r),[e])}else e={date:v,entry:m},a=[].concat(Object(b.a)(n),[e]);fetch("/journal/updateJournal?user=".concat(t,"&journal=").concat(JSON.stringify(a)),{method:"PUT"}).then((function(e){e.ok?(o(),h("")):e.text().then((function(e){console.error(e)}))}))}}))};var p=function(e){var t=Object(a.useContext)(s).theme;return c.a.createElement("div",{className:"content-container "+t},c.a.createElement(E,{text:"NEW ENTRY",onClick:e.startNewEntry}),e.isNewEntryOpen?c.a.createElement(v,{updateMain:e.updateMain}):c.a.createElement("div",null,c.a.createElement("h1",{className:"entry-header"},e.displayedEntry.date),c.a.createElement("p",{className:"displayed-entry"},e.displayedEntry.entry)))};var g=function(){var e=Object(a.useContext)(s),t=e.journal,n=e.theme,r=Object(a.useState)(""),o=Object(u.a)(r,2),l=o[0],i=o[1],m=Object(a.useState)(""),h=Object(u.a)(m,2),E=h[0],f=h[1],b=Object(a.useState)(!1),v=Object(u.a)(b,2),g=v[0],O=v[1];return c.a.createElement("div",{className:"main-container "+n},c.a.createElement("button",{className:"open-nav-button",onClick:function(){i("open")}},"\u2630"),c.a.createElement(d,{isNavOpen:l,closeNav:function(){i("")},displayEntry:function(e){f(t.filter((function(t){return t.date===e}))[0]),O(!1)}}),c.a.createElement(p,{displayedEntry:E,isNewEntryOpen:g,startNewEntry:function(){O(!0)}}))};var O=function(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){fetch("/user/getUser").then((function(e){e.ok?o(!0):e.text().then((function(e){console.error(e),o(!1)}))}))}),[]),r?c.a.createElement(l.b,e):c.a.createElement(l.a,{to:"/login"})},j=n(7);var N=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(""),s=Object(u.a)(l,2),i=s[0],m=s[1],h=Object(a.useState)(),f=Object(u.a)(h,2),d=f[0],b=f[1];return c.a.createElement("div",{className:"register-container"},c.a.createElement("p",{className:"reg-title"},"REGISTER NEW USER"),d?c.a.createElement("p",null,"***",d,"***"):null,c.a.createElement("div",{className:"reg-input-box"},c.a.createElement("label",{htmlFor:"reg-username",className:"reg-label"},"Username:"),c.a.createElement("input",{type:"text",id:"reg-username",value:r,onChange:function(e){o(e.target.value)}})),c.a.createElement("div",{className:"reg-input-box"},c.a.createElement("label",{htmlFor:"reg-password",className:"reg-label"},"Password:"),c.a.createElement("input",{type:"password",id:"reg-password",value:i,onChange:function(e){m(e.target.value)}})),c.a.createElement(E,{text:"REGISTER",onClick:function(){fetch("/user/register?username=".concat(r,"&password=").concat(i),{method:"POST"}).then((function(t){t.ok?e.history.push("/"):t.text().then((function(e){b(e),console.error(e)}))})),o(""),m("")}}),c.a.createElement("p",{className:"reg-text"},"Already have an account?"),c.a.createElement(j.b,{to:"/login"},c.a.createElement(E,{text:"GO TO LOGIN PAGE"})))};var x=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)(""),s=Object(u.a)(l,2),i=s[0],m=s[1],h=Object(a.useState)(),f=Object(u.a)(h,2),d=f[0],b=f[1];return c.a.createElement("div",{className:"register-container"},d?c.a.createElement("p",null,"***",d,"***"):null,c.a.createElement("div",{className:"reg-input-box"},c.a.createElement("label",{htmlFor:"reg-username",className:"reg-label"},"Username:"),c.a.createElement("input",{type:"text",id:"reg-username",value:r,onChange:function(e){o(e.target.value)}})),c.a.createElement("div",{className:"reg-input-box"},c.a.createElement("label",{htmlFor:"reg-password",className:"reg-label"},"Password:"),c.a.createElement("input",{type:"password",id:"reg-password",value:i,onChange:function(e){m(e.target.value)}})),c.a.createElement(E,{text:"LOGIN",onClick:function(){fetch("/user/login?username=".concat(r,"&password=").concat(i),{method:"POST"}).then((function(t){t.ok?e.history.push("/main"):t.text().then((function(e){b(e),console.error(e)}))})),o(""),m("")}}),c.a.createElement("p",{className:"reg-text"},"Don't have an account?"),c.a.createElement(j.b,{to:"/register"},c.a.createElement(E,{text:"REGISTER NEW USER"})))};var y=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(l.d,null,c.a.createElement(l.b,{exact:!0,path:"/"},c.a.createElement(l.a,{to:"/main"})),c.a.createElement(O,{path:"/main"},c.a.createElement(i,null,c.a.createElement(g,null))),c.a.createElement(l.b,{path:"/register",component:N}),c.a.createElement(l.b,{path:"/login",component:x})))};o.a.render(c.a.createElement(j.a,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2ecde2f0.chunk.js.map