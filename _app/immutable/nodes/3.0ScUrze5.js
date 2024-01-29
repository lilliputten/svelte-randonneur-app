import{s as H,u as ce,L as Se,M as $e,h as k,d as _,j as w,S as we,i as C,K as F,N as O,C as De,G as He,f as I,g as R,D as ee,e as oe,p as Ve,I as Oe,W as Ee,A as he,a as te,c as ae,V as me,l as fe,m as ue,n as Te,X as Le,Y as qe,U as ze,Z as Ue,o as We}from"../chunks/scheduler.l8TYPTVV.js";import{S as q,i as z,b as N,d as A,m as M,a as m,t as D,e as V,g as Z,c as J,f as Be}from"../chunks/index.11lTRa6W.js";import{c as ye,d as Ge,r as Ze,s as Je,f as Ye,g as Ke,b as Xe}from"../chunks/navigation.I6uad0gI.js";import{g as Qe,r as xe,s as Pe,q as ge,l as de,p as et,w as tt}from"../chunks/params.lwSC9kAU.js";import{a as at,b as pe,h as Ie}from"../chunks/randoFileInfoStore.CgGjl7mb.js";import{S as nt,s as rt}from"../chunks/SectionsMenu.YWANYafl.js";import{w as st}from"../chunks/index.QqyGaot-.js";import{e as it,a as ot}from"../chunks/extendDataSetWithFilters.Yln-XXBE.js";import{u as Re,G as lt,E as ct,e as ft,P as ut,C as dt}from"../chunks/EditableList.glmsgmy3.js";function pt(r){let e,a,t=[{width:r[1]},{height:r[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},r[2]],n={};for(let s=0;s<t.length;s+=1)n=ce(n,t[s]);return{c(){e=Se("svg"),a=Se("path"),this.h()},l(s){e=$e(s,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var i=k(e);a=$e(i,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),k(a).forEach(_),i.forEach(_),this.h()},h(){w(a,"fill-rule","evenodd"),w(a,"clip-rule","evenodd"),w(a,"d","M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"),w(a,"fill",r[0]),we(e,n)},m(s,i){C(s,e,i),F(e,a)},p(s,[i]){i&1&&w(a,"fill",s[0]),we(e,n=Qe(t,[i&2&&{width:s[1]},i&2&&{height:s[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},i&4&&s[2]]))},i:O,o:O,d(s){s&&_(e)}}}function _t(r,e,a){const t=["color","size"];let n=De(e,t),{color:s="currentColor"}=e,{size:i=15}=e;return r.$$set=l=>{e=ce(ce({},e),He(l)),a(2,n=De(e,t)),"color"in l&&a(0,s=l.color),"size"in l&&a(1,i=l.size)},[s,i,n]}class ht extends q{constructor(e){super(),z(this,e,_t,pt,H,{color:0,size:1})}}const mt=ht;function _e(r,e=0,a="",t={}){const{id:n,type:s}=r,i=[a,n].filter(Boolean).join(".");if(e&&!r.label&&!t.dontAddLabels&&(r.label=r.title||Re(n)),!r.title&&!t.dontAddTitles&&(r.title=r.label||Re(n)),r._fullId=i,r._level=e,s==="object"&&r.spec&&it(r.spec).forEach(o=>{_e(o,e+1,i)}),s==="list"&&r.spec){const l=r.spec;r.layout="table",r.flatObjects=!0,r.editInPlace=!1,r.useActionsColumn=!0,r.activeRows=!0,_e(l,e+1,i,{dontAddLabels:!0})}}const gt={id:"properties",type:"object",spec:[{id:"name",type:"string"},{id:"licenses",type:"list",spec:{id:"licenses-item",type:"object",spec:[{id:"name",type:"string"},{id:"path",type:"string"},{id:"title",type:"string"}]}},{id:"version",type:"string"},{id:"description",type:"string"},{id:"homepage",type:"string"},{id:"created",type:"string"},{id:"contributors",type:"list",spec:{id:"contributors-item",type:"object",spec:[{id:"title",type:"string"},{id:"path",type:"string"},{id:"role",type:"string"}]}}]};function vt(r){let e,a,t,n,s;return n=new nt({}),{c(){e=I("div"),a=I("div"),t=I("div"),N(n.$$.fragment),this.h()},l(i){e=R(i,"DIV",{class:!0});var l=k(e);a=R(l,"DIV",{class:!0});var o=k(a);t=R(o,"DIV",{class:!0});var f=k(t);A(n.$$.fragment,f),f.forEach(_),o.forEach(_),l.forEach(_),this.h()},h(){w(t,"class","content"),w(a,"class","container scrollable svelte-182161y"),w(e,"class","SectionsNavigator svelte-182161y")},m(i,l){C(i,e,l),F(e,a),F(a,t),M(n,t,null),s=!0},p:O,i(i){s||(m(n.$$.fragment,i),s=!0)},o(i){D(n.$$.fragment,i),s=!1},d(i){i&&_(e),V(n)}}}class bt extends q{constructor(e){super(),z(this,e,null,vt,H,{})}}var je={exports:{}};(function(r){/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */var e=e||function(a){if(!(!a||typeof navigator<"u"&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=a.document,n=function(){return a.URL||a.webkitURL||a},s=t.createElementNS("http://www.w3.org/1999/xhtml","a"),i="download"in s,l=function(d){var h=new MouseEvent("click");d.dispatchEvent(h)},o=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),f=a.webkitRequestFileSystem,v=a.requestFileSystem||f||a.mozRequestFileSystem,S=function(d){(a.setImmediate||a.setTimeout)(function(){throw d},0)},b="application/octet-stream",u=0,c=1e3*40,p=function(d){var h=function(){typeof d=="string"?n().revokeObjectURL(d):d.remove()};setTimeout(h,c)},g=function(d,h,B){h=[].concat(h);for(var E=h.length;E--;){var K=d["on"+h[E]];if(typeof K=="function")try{K.call(d,B||d)}catch(se){S(se)}}},$=function(d){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type)?new Blob(["\uFEFF",d],{type:d.type}):d},T=function(d,h,B){B||(d=$(d));var E=this,K=d.type,se=!1,j,X,le=function(){g(E,"writestart progress write writeend".split(" "))},U=function(){if(X&&o&&typeof FileReader<"u"){var W=new FileReader;W.onloadend=function(){var ne=W.result;X.location.href="data:attachment/file"+ne.slice(ne.search(/[,;]/)),E.readyState=E.DONE,le()},W.readAsDataURL(d),E.readyState=E.INIT;return}if((se||!j)&&(j=n().createObjectURL(d)),X)X.location.href=j;else{var ie=a.open(j,"_blank");ie===void 0&&o&&(a.location.href=j)}E.readyState=E.DONE,le(),p(j)},Q=function(W){return function(){if(E.readyState!==E.DONE)return W.apply(this,arguments)}},ve={create:!0,exclusive:!1},be;if(E.readyState=E.INIT,h||(h="download"),i){j=n().createObjectURL(d),setTimeout(function(){s.href=j,s.download=h,l(s),le(),p(j),E.readyState=E.DONE});return}if(a.chrome&&K&&K!==b&&(be=d.slice||d.webkitSlice,d=be.call(d,0,d.size,b),se=!0),f&&h!=="download"&&(h+=".download"),(K===b||f)&&(X=a),!v){U();return}u+=d.size,v(a.TEMPORARY,u,Q(function(W){W.root.getDirectory("saved",ve,Q(function(ie){var ne=function(){ie.getFile(h,ve,Q(function(L){L.createWriter(Q(function(x){x.onwriteend=function(G){X.location.href=L.toURL(),E.readyState=E.DONE,g(E,"writeend",G),p(L)},x.onerror=function(){var G=x.error;G.code!==G.ABORT_ERR&&U()},"writestart progress write abort".split(" ").forEach(function(G){x["on"+G]=E["on"+G]}),x.write(d),E.abort=function(){x.abort(),E.readyState=E.DONE},E.readyState=E.WRITING}),U)}),U)};ie.getFile(h,{create:!1},Q(function(L){L.remove(),ne()}),Q(function(L){L.code===L.NOT_FOUND_ERR?ne():U()}))}),U)}),U)},y=T.prototype,Y=function(d,h,B){return new T(d,h,B)};return typeof navigator<"u"&&navigator.msSaveOrOpenBlob?function(d,h,B){return B||(d=$(d)),navigator.msSaveOrOpenBlob(d,h||"download")}:(y.abort=function(){var d=this;d.readyState=d.DONE,g(d,"abort")},y.readyState=y.INIT=0,y.WRITING=1,y.DONE=2,y.error=y.onwritestart=y.onprogress=y.onwrite=y.onabort=y.onerror=y.onwriteend=null,Y)}}(typeof self<"u"&&self||typeof window<"u"&&window||xe.content);r.exports&&(r.exports.saveAs=e)})(je);var St=je.exports;function $t(r){let e,a,t;return a=new lt({props:{spec:r[1],data:r[0],onChange:r[2]}}),{c(){e=I("div"),N(a.$$.fragment),this.h()},l(n){e=R(n,"DIV",{class:!0});var s=k(e);A(a.$$.fragment,s),s.forEach(_),this.h()},h(){w(e,"class","EditProperties svelte-qhxnxq")},m(n,s){C(n,e,s),M(a,e,null),t=!0},p(n,[s]){const i={};s&1&&(i.data=n[0]),a.$set(i)},i(n){t||(m(a.$$.fragment,n),t=!0)},o(n){D(a.$$.fragment,n),t=!1},d(n){n&&_(e),V(a)}}}function wt(r,e,a){let t;ee(r,ye,i=>a(0,t=i));const n={...gt};_e(n),ot(n);function s(i,l){ye.set(i)}return[t,n,s]}class Dt extends q{constructor(e){super(),z(this,e,wt,$t,H,{})}}function ke(r){let e=r[0],a,t,n=Fe(r);return{c(){n.c(),a=oe()},l(s){n.l(s),a=oe()},m(s,i){n.m(s,i),C(s,a,i),t=!0},p(s,i){i&1&&H(e,e=s[0])?(Z(),D(n,1,1,O),J(),n=Fe(s),n.c(),m(n,1),n.m(a.parentNode,a)):n.p(s,i)},i(s){t||(m(n),t=!0)},o(s){D(n),t=!1},d(s){s&&_(a),n.d(s)}}}function Fe(r){let e,a,t;function n(i){r[11](i)}let s={spec:r[6],data:r[5],onChange:r[8],setHasFilters:r[1]};return r[3]!==void 0&&(s.api=r[3]),e=new ct({props:s}),Ve.push(()=>Be(e,"api",n)),{c(){N(e.$$.fragment)},l(i){A(e.$$.fragment,i)},m(i,l){M(e,i,l),t=!0},p(i,l){const o={};l&64&&(o.spec=i[6]),l&32&&(o.data=i[5]),l&2&&(o.setHasFilters=i[1]),!a&&l&8&&(a=!0,o.api=i[3],Oe(()=>a=!1)),e.$set(o)},i(i){t||(m(e.$$.fragment,i),t=!0)},o(i){D(e.$$.fragment,i),t=!1},d(i){V(e,i)}}}function Et(r){let e,a,t=r[2]&&ke(r);return{c(){e=I("div"),t&&t.c(),this.h()},l(n){e=R(n,"DIV",{class:!0,"data-set-id":!0});var s=k(e);t&&t.l(s),s.forEach(_),this.h()},h(){w(e,"class","EditDataSet svelte-ki2c8t"),w(e,"data-set-id",r[0])},m(n,s){C(n,e,s),t&&t.m(e,null),a=!0},p(n,[s]){n[2]?t?(t.p(n,s),s&4&&m(t,1)):(t=ke(n),t.c(),m(t,1),t.m(e,null)):t&&(Z(),D(t,1,1,()=>{t=null}),J()),(!a||s&1)&&w(e,"data-set-id",n[0])},i(n){a||(m(t),a=!0)},o(n){D(t),a=!1},d(n){n&&_(e),t&&t.d()}}}function yt(r,e,a){let t,n,s,i,l,o=O,f=()=>(o(),o=Ee(n,h=>a(10,l=h)),n),v,S=O,b=()=>(S(),S=Ee(t,h=>a(2,v=h)),t);r.$$.on_destroy.push(()=>o()),r.$$.on_destroy.push(()=>S());let{dataSetId:u}=e,{setHasFilters:c=void 0}=e;function p(h){const B={...h};return ft(B),B}let g;function $(h,B){n.set(h)}function T(){g.resetFilters()}function y(){g.addDataRow()}const Y={resetFilters:T,addDataRow:y};function d(h){g=h,a(3,g)}return r.$$set=h=>{"dataSetId"in h&&a(0,u=h.dataSetId),"setHasFilters"in h&&a(1,c=h.setHasFilters)},r.$$.update=()=>{r.$$.dirty&1&&b(a(7,t=Ge[u])),r.$$.dirty&1&&f(a(4,n=Pe[u])),r.$$.dirty&4&&a(6,s=p(v)),r.$$.dirty&1024&&a(5,i=l)},[u,c,v,g,n,i,s,t,$,Y,l,d]}class It extends q{constructor(e){super(),z(this,e,yt,Et,H,{dataSetId:0,setHasFilters:1,api:9})}get api(){return this.$$.ctx[9]}}const Rt="_MiddleButton_12513_11",kt="_RightButton_12513_12",Ft="_Title_12513_13",Ct="_MiddleMenu_12513_14",Nt="_RightMenu_12513_15",At="_EditorHeader_12513_16",Mt="_text_12513_45",P={MiddleButton:Rt,RightButton:kt,Title:Ft,MiddleMenu:Ct,RightMenu:Nt,EditorHeader:At,text:Mt};function Vt(r){let e;return{c(){e=fe(r[6])},l(a){e=ue(a,r[6])},m(a,t){C(a,e,t)},p(a,t){t&64&&Te(e,a[6])},d(a){a&&_(e)}}}function Ot(r){let e,a,t;return{c(){e=fe("Data set: "),a=I("strong"),t=fe(r[6])},l(n){e=ue(n,"Data set: "),a=R(n,"STRONG",{});var s=k(a);t=ue(s,r[6]),s.forEach(_)},m(n,s){C(n,e,s),C(n,a,s),F(a,t)},p(n,s){s&64&&Te(t,n[6])},d(n){n&&(_(e),_(a))}}}function Ce(r){let e,a;return e=new ge({props:{class:P.MiddleButton,color:"green",variant:"subtle",title:"Add dataset row",$$slots:{leftIcon:[Bt],default:[Tt]},$$scope:{ctx:r}}}),e.$on("click",function(){he(r[5])&&r[5].apply(this,arguments)}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p(t,n){r=t;const s={};n&512&&(s.$$scope={dirty:n,ctx:r}),e.$set(s)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function Tt(r){let e,a="Add dataset row";return{c(){e=I("span"),e.textContent=a,this.h()},l(t){e=R(t,"SPAN",{class:!0,"data-svelte-h":!0}),me(e)!=="svelte-1sinwsh"&&(e.textContent=a),this.h()},h(){w(e,"class",P.text)},m(t,n){C(t,e,n)},p:O,d(t){t&&_(e)}}}function Bt(r){let e,a;return e=new ut({props:{slot:"leftIcon"}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p:O,i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function Ne(r){let e,a;return e=new ge({props:{class:P.MiddleButton,color:"red",variant:"subtle",title:"Reset all filters",$$slots:{leftIcon:[jt],default:[Pt]},$$scope:{ctx:r}}}),e.$on("click",function(){he(r[4])&&r[4].apply(this,arguments)}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p(t,n){r=t;const s={};n&512&&(s.$$scope={dirty:n,ctx:r}),e.$set(s)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function Pt(r){let e,a="Reset all filters";return{c(){e=I("span"),e.textContent=a,this.h()},l(t){e=R(t,"SPAN",{class:!0,"data-svelte-h":!0}),me(e)!=="svelte-e7zu31"&&(e.textContent=a),this.h()},h(){w(e,"class",P.text)},m(t,n){C(t,e,n)},p:O,d(t){t&&_(e)}}}function jt(r){let e,a;return e=new dt({props:{slot:"leftIcon"}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p:O,i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function Ht(r){let e,a="Export data";return{c(){e=I("span"),e.textContent=a,this.h()},l(t){e=R(t,"SPAN",{class:!0,"data-svelte-h":!0}),me(e)!=="svelte-1wi0f3i"&&(e.textContent=a),this.h()},h(){w(e,"class",P.text)},m(t,n){C(t,e,n)},p:O,d(t){t&&_(e)}}}function Lt(r){let e,a;return e=new mt({props:{slot:"leftIcon"}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p:O,i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function qt(r){let e,a,t,n,s,i,l,o,f,v;function S(g,$){return g[7]?Ot:Vt}let b=S(r),u=b(r),c=r[7]&&Ce(r),p=r[7]&&r[2]&&Ne(r);return o=new ge({props:{class:P.RightButton,variant:"subtle",title:"Export data",$$slots:{leftIcon:[Lt],default:[Ht]},$$scope:{ctx:r}}}),o.$on("click",function(){he(r[3])&&r[3].apply(this,arguments)}),{c(){e=I("div"),a=I("div"),u.c(),t=te(),n=I("div"),c&&c.c(),s=te(),p&&p.c(),i=te(),l=I("div"),N(o.$$.fragment),this.h()},l(g){e=R(g,"DIV",{class:!0,"data-section-id":!0});var $=k(e);a=R($,"DIV",{class:!0});var T=k(a);u.l(T),T.forEach(_),t=ae($),n=R($,"DIV",{class:!0});var y=k(n);c&&c.l(y),s=ae(y),p&&p.l(y),y.forEach(_),i=ae($),l=R($,"DIV",{class:!0});var Y=k(l);A(o.$$.fragment,Y),Y.forEach(_),$.forEach(_),this.h()},h(){w(a,"class",P.Title),w(n,"class",P.MiddleMenu),w(l,"class",P.RightMenu),w(e,"class",f=de(r[1],P.EditorHeader)),w(e,"data-section-id",r[0])},m(g,$){C(g,e,$),F(e,a),u.m(a,null),F(e,t),F(e,n),c&&c.m(n,null),F(n,s),p&&p.m(n,null),F(e,i),F(e,l),M(o,l,null),v=!0},p(g,[$]){r=g,b===(b=S(r))&&u?u.p(r,$):(u.d(1),u=b(r),u&&(u.c(),u.m(a,null))),r[7]?c?(c.p(r,$),$&128&&m(c,1)):(c=Ce(r),c.c(),m(c,1),c.m(n,s)):c&&(Z(),D(c,1,1,()=>{c=null}),J()),r[7]&&r[2]?p?(p.p(r,$),$&132&&m(p,1)):(p=Ne(r),p.c(),m(p,1),p.m(n,null)):p&&(Z(),D(p,1,1,()=>{p=null}),J());const T={};$&512&&(T.$$scope={dirty:$,ctx:r}),o.$set(T),(!v||$&2&&f!==(f=de(r[1],P.EditorHeader)))&&w(e,"class",f),(!v||$&1)&&w(e,"data-section-id",r[0])},i(g){v||(m(c),m(p),m(o.$$.fragment,g),v=!0)},o(g){D(c),D(p),D(o.$$.fragment,g),v=!1},d(g){g&&_(e),u.d(),c&&c.d(),p&&p.d(),V(o)}}}function zt(r,e,a){let t,n,s,{sectionId:i}=e,{className:l=""}=e,{hasFilters:o=!1}=e,{handleExportData:f}=e,{handleResetAllFilters:v=void 0}=e,{handleAddNewDataSetRow:S=void 0}=e;return r.$$set=b=>{"sectionId"in b&&a(0,i=b.sectionId),"className"in b&&a(1,l=b.className),"hasFilters"in b&&a(2,o=b.hasFilters),"handleExportData"in b&&a(3,f=b.handleExportData),"handleResetAllFilters"in b&&a(4,v=b.handleResetAllFilters),"handleAddNewDataSetRow"in b&&a(5,S=b.handleAddNewDataSetRow)},r.$$.update=()=>{r.$$.dirty&1&&a(8,t=i==="properties"),r.$$.dirty&256&&a(7,n=!t),r.$$.dirty&1&&a(6,s=rt[i])},[i,l,o,f,v,S,s,n,t]}class Ut extends q{constructor(e){super(),z(this,e,zt,qt,H,{sectionId:0,className:1,hasFilters:2,handleExportData:3,handleResetAllFilters:4,handleAddNewDataSetRow:5})}}const Wt="_DataEditorWrapper_ibwgs_11",Gt="_header_ibwgs_18",Zt="_container_ibwgs_23",Jt="_scrollable_ibwgs_27",Yt="_content_ibwgs_30",re={DataEditorWrapper:Wt,header:Gt,container:Zt,scrollable:Jt,content:Yt};function Kt(r){let e,a,t;function n(i){r[8](i)}let s={dataSetId:r[0],setHasFilters:r[5]};return r[1]!==void 0&&(s.api=r[1]),e=new It({props:s}),Ve.push(()=>Be(e,"api",n)),{c(){N(e.$$.fragment)},l(i){A(e.$$.fragment,i)},m(i,l){M(e,i,l),t=!0},p(i,l){const o={};l&1&&(o.dataSetId=i[0]),!a&&l&2&&(a=!0,o.api=i[1],Oe(()=>a=!1)),e.$set(o)},i(i){t||(m(e.$$.fragment,i),t=!0)},o(i){D(e.$$.fragment,i),t=!1},d(i){V(e,i)}}}function Xt(r){let e,a;return e=new Dt({}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p:O,i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function Qt(r){let e,a,t,n,s,i,l,o,f;a=new Ut({props:{className:re.header,sectionId:r[0],hasFilters:r[2],handleExportData:r[3],handleResetAllFilters:r[7],handleAddNewDataSetRow:r[6]}});const v=[Xt,Kt],S=[];function b(u,c){return c&1&&(i=null),u[0]==="properties"?0:(i==null&&(i=!!(u[0]&&Le(Pe[u[0]]))),i?1:-1)}return~(l=b(r,-1))&&(o=S[l]=v[l](r)),{c(){e=I("div"),N(a.$$.fragment),t=te(),n=I("div"),s=I("div"),o&&o.c(),this.h()},l(u){e=R(u,"DIV",{class:!0});var c=k(e);A(a.$$.fragment,c),t=ae(c),n=R(c,"DIV",{class:!0});var p=k(n);s=R(p,"DIV",{class:!0});var g=k(s);o&&o.l(g),g.forEach(_),p.forEach(_),c.forEach(_),this.h()},h(){w(s,"class",re.content),w(n,"class",de(re.container,re.scrollable)),w(e,"class",re.DataEditorWrapper)},m(u,c){C(u,e,c),M(a,e,null),F(e,t),F(e,n),F(n,s),~l&&S[l].m(s,null),f=!0},p(u,[c]){const p={};c&1&&(p.sectionId=u[0]),c&4&&(p.hasFilters=u[2]),a.$set(p);let g=l;l=b(u,c),l===g?~l&&S[l].p(u,c):(o&&(Z(),D(S[g],1,1,()=>{S[g]=null}),J()),~l?(o=S[l],o?o.p(u,c):(o=S[l]=v[l](u),o.c()),m(o,1),o.m(s,null)):o=null)},i(u){f||(m(a.$$.fragment,u),m(o),f=!0)},o(u){D(a.$$.fragment,u),D(o),f=!1},d(u){u&&_(e),V(a),~l&&S[l].d()}}}function xt(r,e,a){let t,n,s;ee(r,at,c=>a(9,n=c)),ee(r,Ze,c=>a(10,s=c));let{sectionId:i}=e;function l(){Je(),Ye();const c=s,p=JSON.stringify(c,null,2),g=new Blob([p],{type:"application/json"});let $=n?.name||"exported-data.json";$=$.replace(/(\.json$|$)/i,"-exported.json");try{St.saveAs(g,$)}catch(T){const y=Ke(T);console.error("[DataEditorWrapper:handleExportData]",y,{error:T,data:c,dataJson:p,dataBlob:g,filename:$});debugger;pe({message:"Cannot export data: "+y,type:"error"})}finally{pe({message:"Data file has successfully exported",type:"success"})}}let o;const f=st(!1);ee(r,f,c=>a(2,t=c));function v(c){qe(f,t=c,t)}function S(){o.addDataRow()}function b(){o.resetFilters()}function u(c){o=c,a(1,o)}return r.$$set=c=>{"sectionId"in c&&a(0,i=c.sectionId)},[i,o,t,l,f,v,S,b,u]}class ea extends q{constructor(e){super(),z(this,e,xt,Qt,H,{sectionId:0})}}function Ae(r){let e,a,t,n,s,i,l;n=new bt({});let o=r[1]&&Me(r);return{c(){e=I("div"),a=I("div"),t=I("div"),N(n.$$.fragment),s=te(),i=I("div"),o&&o.c(),this.h()},l(f){e=R(f,"DIV",{class:!0});var v=k(e);a=R(v,"DIV",{class:!0});var S=k(a);t=R(S,"DIV",{class:!0});var b=k(t);A(n.$$.fragment,b),b.forEach(_),s=ae(S),i=R(S,"DIV",{class:!0});var u=k(i);o&&o.l(u),u.forEach(_),S.forEach(_),v.forEach(_),this.h()},h(){w(t,"class","column sideColumn leftColumn svelte-nbyqth"),w(i,"class","column mainColumn svelte-nbyqth"),w(a,"class","layout svelte-nbyqth"),w(e,"class","RandoPage svelte-nbyqth")},m(f,v){C(f,e,v),F(e,a),F(a,t),M(n,t,null),F(a,s),F(a,i),o&&o.m(i,null),l=!0},p(f,v){f[1]?o?(o.p(f,v),v&2&&m(o,1)):(o=Me(f),o.c(),m(o,1),o.m(i,null)):o&&(Z(),D(o,1,1,()=>{o=null}),J())},i(f){l||(m(n.$$.fragment,f),m(o),l=!0)},o(f){D(n.$$.fragment,f),D(o),l=!1},d(f){f&&_(e),V(n),o&&o.d()}}}function Me(r){let e,a;return e=new ea({props:{sectionId:r[1]}}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p(t,n){const s={};n&2&&(s.sectionId=t[1]),e.$set(s)},i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}function ta(r){let e,a,t;document.title="Data browser — "+et;let n=r[0]&&Ae(r);return{c(){e=te(),n&&n.c(),a=oe()},l(s){ze("svelte-1yohsf0",document.head).forEach(_),e=ae(s),n&&n.l(s),a=oe()},m(s,i){C(s,e,i),n&&n.m(s,i),C(s,a,i),t=!0},p(s,[i]){s[0]?n?(n.p(s,i),i&1&&m(n,1)):(n=Ae(s),n.c(),m(n,1),n.m(a.parentNode,a)):n&&(Z(),D(n,1,1,()=>{n=null}),J())},i(s){t||(m(n),t=!0)},o(s){D(n),t=!1},d(s){s&&(_(e),_(a)),n&&n.d(s)}}}function aa(r,e,a){let t,n;ee(r,Ie,f=>a(3,t=f)),ee(r,tt,f=>a(1,n=f));let s=!1,i=!1;function l(f){if(!f&&!s){const v="Data has not been initialized. Going to the main page.",S=new Error(v);console.warn("[RandoPage:checkReadiness]",S.message),s=!0,pe({message:v,type:"error"}),Xe("/",{replaceState:!0})}else a(0,i=!0)}const o=Ie.subscribe(l);return Ue(o),We(()=>{l(t)}),[i,n]}class na extends q{constructor(e){super(),z(this,e,aa,ta,H,{})}}function ra(r){let e,a;return e=new na({}),{c(){N(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,n){M(e,t,n),a=!0},p:O,i(t){a||(m(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){V(e,t)}}}class _a extends q{constructor(e){super(),z(this,e,null,ra,H,{})}}export{_a as component};
