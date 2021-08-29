(this["webpackJsonpnote-editor"]=this["webpackJsonpnote-editor"]||[]).push([[0],{109:function(e,t,n){},110:function(e){e.exports=JSON.parse('{"notes":[{"id":"1","title":"JavaScript","body":"JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles."},{"id":"2","title":"React","body":"As its official tagline states, React is a library for building user interfaces. React is not a framework \u2013 it\'s not even exclusive to the web. It\'s used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications; React 360 can be used to build virtual reality applications; and there are other possibilities besides."},{"id":"3","title":"Redux","body":"Redux is a predictable state container for JavaScript apps.\\n\\nIt helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available."}],"tags":["javascript","react","redux","library","the","is","a"]}')},207:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(25),o=n.n(i),r=n(27),s=(n(109),n(15)),l=n(57),u=n(5),d=n(209),b=n(110),j=function(){return new Promise((function(e){return e(b)}))},f=function(e){var t={id:Object(d.a)(),title:e,body:""};return new Promise((function(e){return e(t)}))},O=function(e){return new Promise((function(e){return e({resultCode:0})}))},g=function(e){return new Promise((function(t){return t(e)}))},h=function(e){return new Promise((function(e){return e({resultCode:0})}))},p=function(e,t){return new Promise((function(e){return e(t)}))},m={},v=n(28),x=n.n(v),C=n(1),N=a.a.memo((function(e){var t=e.addItem,n=e.name,a=Object(c.useState)(""),i=Object(s.a)(a,2),o=i[0],r=i[1],l=Object(c.useState)(""),u=Object(s.a)(l,2),d=u[0],b=u[1],j=function(){""===o.trim()?b("".concat(n.split(" ")[1]," is required!")):(t(o),r(""))},f="".concat(x.a.input," ").concat(d?x.a.errorInput:"");return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:x.a.addItemForm,children:[Object(C.jsx)("input",{className:f,value:o,onChange:function(e){r(e.currentTarget.value)},type:"text",placeholder:"enter ".concat(n),onKeyPress:function(e){""!==d&&b(""),"Enter"===e.key&&j()}}),Object(C.jsx)("button",{onClick:j,children:"Add ".concat(n.split(" ")[0])})]}),Object(C.jsx)("div",{className:x.a.error,children:d})]})})),k=n(29),_=n.n(k),T=n(101),y=a.a.memo((function(e){var t=e.selectedNote,n=e.updateNoteText,a=e.returnWithoutChanges,i=e.tags,o=Object(c.useState)(t.body),r=Object(s.a)(o,2),l=r[0],u=r[1],d=Object(c.useCallback)((function(e){u(e)}),[]),b=Object(c.useCallback)((function(){a()}),[a]),j=Object(c.useCallback)((function(){l!==t.body?n(l):b()}),[l,b,n,t.body]),f=i.length?i.reduce((function(e,t){return t+"|".concat(e)})):null,O=new RegExp("\\b(".concat(f,")\\b"),"gi");return Object(C.jsxs)("div",{className:_.a.noteEditor,children:[Object(C.jsx)("div",{className:_.a.title,children:t.title}),Object(C.jsx)("div",{className:_.a.textarea,children:Object(C.jsx)(T.a,{value:l,highlight:f?O:null,onChange:d})}),Object(C.jsxs)("div",{className:_.a.buttons,children:[Object(C.jsx)("button",{onClick:j,children:"Save"}),Object(C.jsx)("button",{onClick:b,children:"Cancel"})]})]})})),w=n(42),E=n.n(w),A=a.a.memo((function(e){var t=e.selectedNote,n=e.setViewMode;return Object(C.jsxs)("div",{className:E.a.viewNote,children:[Object(C.jsx)("div",{className:E.a.noteTitle,children:t.title}),Object(C.jsx)("div",{children:t.body}),Object(C.jsx)("div",{className:E.a.closeButton,children:Object(C.jsx)("button",{onClick:function(){return n("none")},children:"Close"})})]})})),I=n(97),D=n.n(I),H=n(55),R=n.n(H),S=a.a.memo((function(e){var t=e.tag,n=e.onTagClick,c=e.onDeleteTagClickHandler;return Object(C.jsxs)("div",{className:R.a.tagBlock,children:[Object(C.jsxs)("span",{className:R.a.tag,onClick:function(){return n(t)},children:["#",t.toLowerCase()]}),Object(C.jsx)("button",{onClick:function(){return c(t)},children:"x"})]})})),F=function(e){var t=e.tags,n=e.onTagClick,c=e.onDeleteTagClickHandler,a=e.onResetClickHandler;return Object(C.jsxs)("div",{className:D.a.tags,children:[Object(C.jsx)("div",{children:t.length?t.map((function(e){return Object(C.jsx)(S,{tag:e,onTagClick:n,onDeleteTagClickHandler:c},e)})):Object(C.jsx)("div",{children:"No saved tags"})}),Object(C.jsx)("div",{children:Object(C.jsx)("button",{onClick:a,children:"Reset filter"})})]})},P=n(56),B=n.n(P),V=n(98),J=n.n(V),M=n(99),G=n.n(M),L=a.a.memo((function(e){var t=e.noteId,n=e.noteTitle,c=e.onNoteClickHandler,a=e.onEditClickHandler,i=e.onDeleteNoteClickHandler;return Object(C.jsxs)("div",{children:[Object(C.jsx)("span",{className:G.a.note,onClick:function(){return c(t)},children:n}),Object(C.jsx)("button",{onClick:function(){return c(t)},children:"View"}),Object(C.jsx)("button",{onClick:function(){return a(t)},children:"Edit"}),Object(C.jsx)("button",{onClick:function(){return i(t)},children:"Delete"})]})})),W=function(e){var t=e.filteredNotes,n=e.onNoteClickHandler,c=e.onEditClickHandler,a=e.onDeleteNoteClickHandler;return Object(C.jsx)("div",{className:J.a.notes,children:t.length?t.map((function(e){return Object(C.jsx)(L,{noteId:e.id,noteTitle:e.title,onNoteClickHandler:n,onEditClickHandler:c,onDeleteNoteClickHandler:a},e.id)})):Object(C.jsx)("div",{children:"No notes found"})})};function U(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.data})),n=Object(c.useState)("none"),a=Object(s.a)(n,2),i=a[0],o=a[1],l=Object(c.useState)(""),u=Object(s.a)(l,2),d=u[0],b=u[1],m=Object(c.useState)(""),v=Object(s.a)(m,2),x=v[0],k=v[1];Object(c.useEffect)((function(){e((function(e){j().then((function(t){e({type:"SET-DATA",data:t})}))}))}),[e]);var _=Object(c.useCallback)((function(e){b(e),o("read")}),[]),T=Object(c.useCallback)((function(e){b(e),o("edit")}),[]),w=Object(c.useCallback)((function(t){e(function(e){return function(t){f(e).then((function(e){t({type:"ADD-NOTE",note:e})}))}}(t))}),[e]),E=Object(c.useCallback)((function(n){t.tags.every((function(e){return e!==n}))&&e(function(e){return function(t){g(e).then((function(e){t({type:"ADD-TAG",tag:e})}))}}(n))}),[e,t.tags]),I=Object(c.useCallback)((function(t){e(function(e){return function(t){O(e).then((function(n){!n.resultCode&&t(function(e){return{type:"REMOVE-NOTE",noteId:e}}(e))}))}}(t))}),[e]),D=Object(c.useCallback)((function(t){e(function(e){return function(t){h(e).then((function(n){!n.resultCode&&t(function(e){return{type:"REMOVE-TAG",tag:e}}(e))}))}}(t))}),[e]),H=Object(c.useCallback)((function(t){var n=t.match(/(?<=#)\b\w*\b/gi);n&&n.forEach((function(e){return E(e)}));var c,a,i=t.replace(/#(?=\w)/gi,"");e((c=d,a=i,function(e){p(c,a).then((function(t){e(function(e,t){return{type:"UPDATE-NOTE",noteId:e,body:t}}(c,t))}))})),o("none")}),[e,E,d]),R=Object(c.useCallback)((function(){o("none")}),[]),S=Object(c.useCallback)((function(e){k(e)}),[]),P=Object(c.useCallback)((function(){k("")}),[]);if(!t.notes&&!t.tags)return Object(C.jsx)("div",{children:"Loading"});var V=t.notes.filter((function(e){return e.id===d}))[0],J=t.notes.filter((function(e){return""===x||new RegExp("\\b".concat(x,"\\b"),"i").test(e.body)}));return Object(C.jsx)("div",{className:B.a.app,children:"edit"!==i?Object(C.jsxs)("div",{className:B.a.notesAndTags,children:[Object(C.jsx)(N,{addItem:w,name:"note title"}),Object(C.jsx)(W,{filteredNotes:J,onNoteClickHandler:_,onEditClickHandler:T,onDeleteNoteClickHandler:I}),Object(C.jsx)(N,{addItem:E,name:"tag name"}),Object(C.jsx)(F,{tags:t.tags,onTagClick:S,onDeleteTagClickHandler:D,onResetClickHandler:P}),"read"===i&&Object(C.jsx)(A,{selectedNote:V,setViewMode:o})]}):Object(C.jsx)(y,{selectedNote:V,updateNoteText:H,returnWithoutChanges:R,tags:t.tags})})}var Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,210)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))},q=n(43),K=n(100),Y=Object(q.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-DATA":return Object(u.a)(Object(u.a)({},e),{},{notes:t.data.notes,tags:t.data.tags});case"ADD-NOTE":return Object(u.a)(Object(u.a)({},e),{},{notes:[].concat(Object(l.a)(e.notes),[t.note])});case"REMOVE-NOTE":return Object(u.a)(Object(u.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==t.noteId}))});case"ADD-TAG":return Object(u.a)(Object(u.a)({},e),{},{tags:[].concat(Object(l.a)(e.tags),[t.tag])});case"REMOVE-TAG":return Object(u.a)(Object(u.a)({},e),{},{tags:e.tags.filter((function(e){return e!==t.tag}))});case"UPDATE-NOTE":return Object(u.a)(Object(u.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.noteId?Object(u.a)(Object(u.a)({},e),{},{body:t.body}):e}))});default:return Object(u.a)({},e)}}}),X=Object(q.c)(Y,Object(q.a)(K.a));o.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(r.a,{store:X,children:Object(C.jsx)(U,{})})}),document.getElementById("root")),Z()},28:function(e,t,n){e.exports={addItemForm:"AddItemForm_addItemForm__1f81Z",input:"AddItemForm_input__3sw-N",errorInput:"AddItemForm_errorInput__1c0Ga",error:"AddItemForm_error__2YPx7"}},29:function(e,t,n){e.exports={noteEditor:"NoteEditor_noteEditor__2rgrL",title:"NoteEditor_title__9vIe-",buttons:"NoteEditor_buttons__ptcy6",textarea:"NoteEditor_textarea__264Gq"}},42:function(e,t,n){e.exports={viewNote:"ViewNote_viewNote__PurCZ",noteTitle:"ViewNote_noteTitle__3T3JU",closeButton:"ViewNote_closeButton__3F5Iv"}},55:function(e,t,n){e.exports={tag:"Tag_tag__xdOyX",tagBlock:"Tag_tagBlock__185Ic"}},56:function(e,t,n){e.exports={app:"App_app__34RHZ",notesAndTags:"App_notesAndTags__3wNM8"}},97:function(e,t,n){e.exports={tags:"Tags_tags__1ycSi"}},98:function(e,t,n){e.exports={notes:"Notes_notes__1N9T2"}},99:function(e,t,n){e.exports={note:"Note_note__1K4dm"}}},[[207,1,2]]]);
//# sourceMappingURL=main.e4cd81b9.chunk.js.map