import{s as V,u as oe,P as ge,Q as pe,h as I,d as _,j as p,T as ve,i as k,K as w,O as T,C as Se,G as qe,A as Me,l as de,m as fe,f as E,g as $,U as Le,a as Z,e as Q,c as X,D as se,X as be,W as Fe,n as Pe,V as Ue,L as We,o as ze}from"../chunks/scheduler.D9i2_oPc.js";import{S as B,i as q,b as C,d as j,m as N,a as S,t as y,e as M,g as te,c as ne}from"../chunks/index.hhuPaoSW.js";import{w as He}from"../chunks/index.RFOEB-ae.js";import{c as ye,d as Ge,f as Ke,r as Je,s as Ze,h as Qe,g as Xe,i as Ye,b as xe}from"../chunks/navigation.5yvXZHHb.js";import{a as le,h as De}from"../chunks/hasDataStore.DrD_3SsW.js";import{g as et,l as ee,m as Ie,p as tt}from"../chunks/FilterActionIcon.module.QY3rxjnu.js";import"../chunks/build.7ea8yXHO.js";import{e as nt,B as Ve,a as at}from"../chunks/extendDataSetWithFilters.K91ioLcD.js";import{u as Ee,G as Oe,e as rt}from"../chunks/EditableList.RAQknRu9.js";function st(i){let e,t,n=[{width:i[1]},{height:i[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},i[2]],a={};for(let r=0;r<n.length;r+=1)a=oe(a,n[r]);return{c(){e=ge("svg"),t=ge("path"),this.h()},l(r){e=pe(r,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var s=I(e);t=pe(s,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),I(t).forEach(_),s.forEach(_),this.h()},h(){p(t,"fill-rule","evenodd"),p(t,"clip-rule","evenodd"),p(t,"d","M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"),p(t,"fill",i[0]),ve(e,a)},m(r,s){k(r,e,s),w(e,t)},p(r,[s]){s&1&&p(t,"fill",r[0]),ve(e,a=et(n,[s&2&&{width:r[1]},s&2&&{height:r[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},s&4&&r[2]]))},i:T,o:T,d(r){r&&_(e)}}}function it(i,e,t){const n=["color","size"];let a=Se(e,n),{color:r="currentColor"}=e,{size:s=15}=e;return i.$$set=o=>{e=oe(oe({},e),qe(o)),t(2,a=Se(e,n)),"color"in o&&t(0,r=o.color),"size"in o&&t(1,s=o.size)},[r,s,a]}class ot extends B{constructor(e){super(),q(this,e,it,st,V,{color:0,size:1})}}const lt=ot;function ce(i,e=0,t="",n={}){const{id:a,type:r}=i,s=[t,a].filter(Boolean).join(".");if(e&&!i.label&&!n.dontAddLabels&&(i.label=i.title||Ee(a)),!i.title&&!n.dontAddTitles&&(i.title=i.label||Ee(a)),i._fullId=s,i._level=e,r==="object"&&i.spec&&nt(i.spec).forEach(l=>{ce(l,e+1,s)}),r==="list"&&i.spec){const o=i.spec;i.layout="table",i.flatObjects=!0,i.editInPlace=!1,i.useActionsColumn=!0,i.activeRows=!0,ce(o,e+1,s,{dontAddLabels:!0})}}const ct={id:"properties",type:"object",spec:[{id:"name",type:"string"},{id:"licenses",type:"list",spec:{id:"licenses-item",type:"object",spec:[{id:"name",type:"string"},{id:"path",type:"string"},{id:"title",type:"string"}]}},{id:"version",type:"string"},{id:"description",type:"string"},{id:"homepage",type:"string"},{id:"created",type:"string"},{id:"contributors",type:"list",spec:{id:"contributors-item",type:"object",spec:[{id:"title",type:"string"},{id:"path",type:"string"},{id:"role",type:"string"}]}}]},Ae={properties:"Properties","create-datasets":"Create datasets",delete:"Delete",disaggregate:"Disaggregate",mapping:"Mapping",replace:"Replace",update:"Update"},dt="_Section_1wy0n_11",$e={Section:dt};function ft(i){let e;return{c(){e=de(i[4])},l(t){e=fe(t,i[4])},m(t,n){k(t,e,n)},p:T,d(t){t&&_(e)}}}function ut(i){let e,t;return e=new Ve({props:{class:ee(i[0],$e.Section),id:i[2],title:i[4],variant:i[1]?"filled":"light",fullSize:!0,$$slots:{default:[ft]},$$scope:{ctx:i}}}),e.$on("click",function(){Me(i[3].bind(null,i[2]))&&i[3].bind(null,i[2]).apply(this,arguments)}),{c(){C(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,a){N(e,n,a),t=!0},p(n,[a]){i=n;const r={};a&1&&(r.class=ee(i[0],$e.Section)),a&4&&(r.id=i[2]),a&2&&(r.variant=i[1]?"filled":"light"),a&32&&(r.$$scope={dirty:a,ctx:i}),e.$set(r)},i(n){t||(S(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function ht(i,e,t){let{className:n=""}=e,{isActive:a=!1}=e,{sectionId:r}=e,{onChangeSection:s}=e;const o=Ae[r];return i.$$set=l=>{"className"in l&&t(0,n=l.className),"isActive"in l&&t(1,a=l.isActive),"sectionId"in l&&t(2,r=l.sectionId),"onChangeSection"in l&&t(3,s=l.onChangeSection)},[n,a,r,s,o]}class _t extends B{constructor(e){super(),q(this,e,ht,ut,V,{className:0,isActive:1,sectionId:2,onChangeSection:3})}}function we(i,e,t){const n=i.slice();return n[3]=e[t],n}function ke(i){let e;return{c(){e=E("div"),this.h()},l(t){e=$(t,"DIV",{class:!0}),I(e).forEach(_),this.h()},h(){p(e,"class","delimiter section svelte-1jijdnl")},m(t,n){k(t,e,n)},d(t){t&&_(e)}}}function Re(i){let e,t,n,a;e=new _t({props:{sectionId:i[3],isActive:i[3]===i[1],onChangeSection:i[2]}});let r=i[3]==="properties"&&ke();return{c(){C(e.$$.fragment),t=Z(),r&&r.c(),n=Q()},l(s){j(e.$$.fragment,s),t=X(s),r&&r.l(s),n=Q()},m(s,o){N(e,s,o),k(s,t,o),r&&r.m(s,o),k(s,n,o),a=!0},p(s,o){const l={};o&1&&(l.sectionId=s[3]),o&3&&(l.isActive=s[3]===s[1]),o&4&&(l.onChangeSection=s[2]),e.$set(l),s[3]==="properties"?r||(r=ke(),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i(s){a||(S(e.$$.fragment,s),a=!0)},o(s){y(e.$$.fragment,s),a=!1},d(s){s&&(_(t),_(n)),M(e,s),r&&r.d(s)}}}function mt(i){let e,t,n,a,r=Ie(i[0]),s=[];for(let l=0;l<r.length;l+=1)s[l]=Re(we(i,r,l));const o=l=>y(s[l],1,1,()=>{s[l]=null});return{c(){e=E("div"),t=E("div"),n=E("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=$(l,"DIV",{class:!0});var d=I(e);t=$(d,"DIV",{class:!0});var c=I(t);n=$(c,"DIV",{class:!0});var m=I(n);for(let f=0;f<s.length;f+=1)s[f].l(m);m.forEach(_),c.forEach(_),d.forEach(_),this.h()},h(){p(n,"class","content svelte-1jijdnl"),p(t,"class","container scrollable svelte-1jijdnl"),p(e,"class","SectionsNavigator svelte-1jijdnl")},m(l,d){k(l,e,d),w(e,t),w(t,n);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(n,null);a=!0},p(l,[d]){if(d&7){r=Ie(l[0]);let c;for(c=0;c<r.length;c+=1){const m=we(l,r,c);s[c]?(s[c].p(m,d),S(s[c],1)):(s[c]=Re(m),s[c].c(),S(s[c],1),s[c].m(n,null))}for(te(),c=r.length;c<s.length;c+=1)o(c);ne()}},i(l){if(!a){for(let d=0;d<r.length;d+=1)S(s[d]);a=!0}},o(l){s=s.filter(Boolean);for(let d=0;d<s.length;d+=1)y(s[d]);a=!1},d(l){l&&_(e),Le(s,l)}}}function gt(i,e,t){let{allSections:n}=e,{sectionId:a}=e,{onChangeSection:r}=e;return i.$$set=s=>{"allSections"in s&&t(0,n=s.allSections),"sectionId"in s&&t(1,a=s.sectionId),"onChangeSection"in s&&t(2,r=s.onChangeSection)},[n,a,r]}class pt extends B{constructor(e){super(),q(this,e,gt,mt,V,{allSections:0,sectionId:1,onChangeSection:2})}}var Te={exports:{}};(function(i){/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */var e=e||function(t){if(!(!t||typeof navigator<"u"&&/MSIE [1-9]\./.test(navigator.userAgent))){var n=t.document,a=function(){return t.URL||t.webkitURL||t},r=n.createElementNS("http://www.w3.org/1999/xhtml","a"),s="download"in r,o=function(u){var D=new MouseEvent("click");u.dispatchEvent(D)},l=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),d=t.webkitRequestFileSystem,c=t.requestFileSystem||d||t.mozRequestFileSystem,m=function(u){(t.setImmediate||t.setTimeout)(function(){throw u},0)},f="application/octet-stream",h=0,b=1e3*40,g=function(u){var D=function(){typeof u=="string"?a().revokeObjectURL(u):u.remove()};setTimeout(D,b)},O=function(u,D,F){D=[].concat(D);for(var v=D.length;v--;){var z=u["on"+D[v]];if(typeof z=="function")try{z.call(u,F||u)}catch(ae){m(ae)}}},ue=function(u){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(u.type)?new Blob(["\uFEFF",u],{type:u.type}):u},he=function(u,D,F){F||(u=ue(u));var v=this,z=u.type,ae=!1,A,H,ie=function(){O(v,"writestart progress write writeend".split(" "))},P=function(){if(H&&l&&typeof FileReader<"u"){var U=new FileReader;U.onloadend=function(){var Y=U.result;H.location.href="data:attachment/file"+Y.slice(Y.search(/[,;]/)),v.readyState=v.DONE,ie()},U.readAsDataURL(u),v.readyState=v.INIT;return}if((ae||!A)&&(A=a().createObjectURL(u)),H)H.location.href=A;else{var re=t.open(A,"_blank");re===void 0&&l&&(t.location.href=A)}v.readyState=v.DONE,ie(),g(A)},G=function(U){return function(){if(v.readyState!==v.DONE)return U.apply(this,arguments)}},_e={create:!0,exclusive:!1},me;if(v.readyState=v.INIT,D||(D="download"),s){A=a().createObjectURL(u),setTimeout(function(){r.href=A,r.download=D,o(r),ie(),g(A),v.readyState=v.DONE});return}if(t.chrome&&z&&z!==f&&(me=u.slice||u.webkitSlice,u=me.call(u,0,u.size,f),ae=!0),d&&D!=="download"&&(D+=".download"),(z===f||d)&&(H=t),!c){P();return}h+=u.size,c(t.TEMPORARY,h,G(function(U){U.root.getDirectory("saved",_e,G(function(re){var Y=function(){re.getFile(D,_e,G(function(L){L.createWriter(G(function(K){K.onwriteend=function(W){H.location.href=L.toURL(),v.readyState=v.DONE,O(v,"writeend",W),g(L)},K.onerror=function(){var W=K.error;W.code!==W.ABORT_ERR&&P()},"writestart progress write abort".split(" ").forEach(function(W){K["on"+W]=v["on"+W]}),K.write(u),v.abort=function(){K.abort(),v.readyState=v.DONE},v.readyState=v.WRITING}),P)}),P)};re.getFile(D,{create:!1},G(function(L){L.remove(),Y()}),G(function(L){L.code===L.NOT_FOUND_ERR?Y():P()}))}),P)}),P)},R=he.prototype,Be=function(u,D,F){return new he(u,D,F)};return typeof navigator<"u"&&navigator.msSaveOrOpenBlob?function(u,D,F){return F||(u=ue(u)),navigator.msSaveOrOpenBlob(u,D||"download")}:(R.abort=function(){var u=this;u.readyState=u.DONE,O(u,"abort")},R.readyState=R.INIT=0,R.WRITING=1,R.DONE=2,R.error=R.onwritestart=R.onprogress=R.onwrite=R.onabort=R.onerror=R.onwriteend=null,Be)}}(typeof self<"u"&&self||typeof window<"u"&&window||tt.content);i.exports&&(i.exports.saveAs=e)})(Te);var vt=Te.exports;function St(i){let e,t,n;return t=new Oe({props:{spec:i[1],data:i[0],onChange:i[2]}}),{c(){e=E("div"),C(t.$$.fragment),this.h()},l(a){e=$(a,"DIV",{class:!0});var r=I(e);j(t.$$.fragment,r),r.forEach(_),this.h()},h(){p(e,"class","EditProperties svelte-qhxnxq")},m(a,r){k(a,e,r),N(t,e,null),n=!0},p(a,[r]){const s={};r&1&&(s.data=a[0]),t.$set(s)},i(a){n||(S(t.$$.fragment,a),n=!0)},o(a){y(t.$$.fragment,a),n=!1},d(a){a&&_(e),M(t)}}}function bt(i,e,t){let n;se(i,ye,s=>t(0,n=s));const a={...ct};ce(a),at(a);function r(s,o){ye.set(s)}return[n,a,r]}class yt extends B{constructor(e){super(),q(this,e,bt,St,V,{})}}function Ce(i){let e=i[0],t,n,a=je(i);return{c(){a.c(),t=Q()},l(r){a.l(r),t=Q()},m(r,s){a.m(r,s),k(r,t,s),n=!0},p(r,s){s&1&&V(e,e=r[0])?(te(),y(a,1,1,T),ne(),a=je(r),a.c(),S(a,1),a.m(t.parentNode,t)):a.p(r,s)},i(r){n||(S(a),n=!0)},o(r){y(a),n=!1},d(r){r&&_(t),a.d(r)}}}function je(i){let e,t;return e=new Oe({props:{spec:i[3],data:i[5],onChange:i[6]}}),{c(){C(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,a){N(e,n,a),t=!0},p(n,a){const r={};a&8&&(r.spec=n[3]),a&32&&(r.data=n[5]),e.$set(r)},i(n){t||(S(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function Dt(i){let e,t,n=i[1]&&Ce(i);return{c(){e=E("div"),n&&n.c(),this.h()},l(a){e=$(a,"DIV",{class:!0,"data-set-id":!0});var r=I(e);n&&n.l(r),r.forEach(_),this.h()},h(){p(e,"class","EditDataSet svelte-ki2c8t"),p(e,"data-set-id",i[0])},m(a,r){k(a,e,r),n&&n.m(e,null),t=!0},p(a,[r]){a[1]?n?(n.p(a,r),r&2&&S(n,1)):(n=Ce(a),n.c(),S(n,1),n.m(e,null)):n&&(te(),y(n,1,1,()=>{n=null}),ne()),(!t||r&1)&&p(e,"data-set-id",a[0])},i(a){t||(S(n),t=!0)},o(a){y(n),t=!1},d(a){a&&_(e),n&&n.d()}}}function It(i,e,t){let n,a,r,s,o=T,l=()=>(o(),o=be(n,g=>t(1,s=g)),n),d,c=T,m=()=>(c(),c=be(a,g=>t(5,d=g)),a);i.$$.on_destroy.push(()=>o()),i.$$.on_destroy.push(()=>c());let{dataSetId:f}=e;function h(g){const O={...g};return rt(O),O}function b(g,O){a.set(g)}return i.$$set=g=>{"dataSetId"in g&&t(0,f=g.dataSetId)},i.$$.update=()=>{i.$$.dirty&1&&l(t(4,n=Ge[f])),i.$$.dirty&1&&m(t(2,a=Ke[f])),i.$$.dirty&2&&t(3,r=h(s))},[f,s,a,r,n,d,b]}class Et extends B{constructor(e){super(),q(this,e,It,Dt,V,{dataSetId:0})}}const $t="_MiddleButton_1ttq3_11",wt="_RightButton_1ttq3_12",kt="_Title_1ttq3_13",Rt="_MiddleMenu_1ttq3_14",Ct="_RightMenu_1ttq3_15",jt="_EditorHeader_1ttq3_16",J={MiddleButton:$t,RightButton:wt,Title:kt,MiddleMenu:Rt,RightMenu:Ct,EditorHeader:jt};function Nt(i){let e;return{c(){e=de("Export data")},l(t){e=fe(t,"Export data")},m(t,n){k(t,e,n)},d(t){t&&_(e)}}}function Mt(i){let e,t;return e=new lt({props:{slot:"leftIcon"}}),{c(){C(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,a){N(e,n,a),t=!0},p:T,i(n){t||(S(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function Vt(i){let e,t,n,a,r,s="",o,l,d,c,m;return d=new Ve({props:{class:J.RightButton,variant:"subtle",$$slots:{leftIcon:[Mt],default:[Nt]},$$scope:{ctx:i}}}),d.$on("click",function(){Me(i[2])&&i[2].apply(this,arguments)}),{c(){e=E("div"),t=E("div"),n=de(i[3]),a=Z(),r=E("div"),r.innerHTML=s,o=Z(),l=E("div"),C(d.$$.fragment),this.h()},l(f){e=$(f,"DIV",{class:!0,"data-section-id":!0});var h=I(e);t=$(h,"DIV",{class:!0});var b=I(t);n=fe(b,i[3]),b.forEach(_),a=X(h),r=$(h,"DIV",{class:!0,"data-svelte-h":!0}),Fe(r)!=="svelte-9cak0c"&&(r.innerHTML=s),o=X(h),l=$(h,"DIV",{class:!0});var g=I(l);j(d.$$.fragment,g),g.forEach(_),h.forEach(_),this.h()},h(){p(t,"class",J.Title),p(r,"class",J.MiddleMenu),p(l,"class",J.RightMenu),p(e,"class",c=ee(i[1],J.EditorHeader)),p(e,"data-section-id",i[0])},m(f,h){k(f,e,h),w(e,t),w(t,n),w(e,a),w(e,r),w(e,o),w(e,l),N(d,l,null),m=!0},p(f,[h]){i=f,(!m||h&8)&&Pe(n,i[3]);const b={};h&16&&(b.$$scope={dirty:h,ctx:i}),d.$set(b),(!m||h&2&&c!==(c=ee(i[1],J.EditorHeader)))&&p(e,"class",c),(!m||h&1)&&p(e,"data-section-id",i[0])},i(f){m||(S(d.$$.fragment,f),m=!0)},o(f){y(d.$$.fragment,f),m=!1},d(f){f&&_(e),M(d)}}}function Ot(i,e,t){let n,{sectionId:a}=e,{className:r=""}=e,{handleExportData:s}=e;return i.$$set=o=>{"sectionId"in o&&t(0,a=o.sectionId),"className"in o&&t(1,r=o.className),"handleExportData"in o&&t(2,s=o.handleExportData)},i.$$.update=()=>{i.$$.dirty&1&&t(3,n=Ae[a])},[a,r,s,n]}class At extends B{constructor(e){super(),q(this,e,Ot,Vt,V,{sectionId:0,className:1,handleExportData:2})}}const Tt="_DataEditorWrapper_1jxjy_11",Bt="_header_1jxjy_18",qt="_container_1jxjy_21",Lt="_scrollable_1jxjy_25",Ft="_content_1jxjy_28",x={DataEditorWrapper:Tt,header:Bt,container:qt,scrollable:Lt,content:Ft};function Pt(i){let e,t;return e=new Et({props:{dataSetId:i[0]}}),{c(){C(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,a){N(e,n,a),t=!0},p(n,a){const r={};a&1&&(r.dataSetId=n[0]),e.$set(r)},i(n){t||(S(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function Ut(i){let e,t;return e=new yt({}),{c(){C(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,a){N(e,n,a),t=!0},p:T,i(n){t||(S(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function Wt(i){let e,t,n,a,r,s,o,l;t=new At({props:{className:x.header,sectionId:i[0],handleExportData:i[1]}});const d=[Ut,Pt],c=[];function m(f,h){return f[0]==="properties"?0:1}return s=m(i),o=c[s]=d[s](i),{c(){e=E("div"),C(t.$$.fragment),n=Z(),a=E("div"),r=E("div"),o.c(),this.h()},l(f){e=$(f,"DIV",{class:!0});var h=I(e);j(t.$$.fragment,h),n=X(h),a=$(h,"DIV",{class:!0});var b=I(a);r=$(b,"DIV",{class:!0});var g=I(r);o.l(g),g.forEach(_),b.forEach(_),h.forEach(_),this.h()},h(){p(r,"class",x.content),p(a,"class",ee(x.container,x.scrollable)),p(e,"class",x.DataEditorWrapper)},m(f,h){k(f,e,h),N(t,e,null),w(e,n),w(e,a),w(a,r),c[s].m(r,null),l=!0},p(f,[h]){const b={};h&1&&(b.sectionId=f[0]),t.$set(b);let g=s;s=m(f),s===g?c[s].p(f,h):(te(),y(c[g],1,1,()=>{c[g]=null}),ne(),o=c[s],o?o.p(f,h):(o=c[s]=d[s](f),o.c()),S(o,1),o.m(r,null))},i(f){l||(S(t.$$.fragment,f),S(o),l=!0)},o(f){y(t.$$.fragment,f),y(o),l=!1},d(f){f&&_(e),M(t),c[s].d()}}}function zt(i,e,t){let n;se(i,Je,s=>t(2,n=s));let{sectionId:a}=e;function r(){Ze(),Qe();const s=n,o=JSON.stringify(s,null,2),l=new Blob([o],{type:"application/json"}),d="edited-data.json";console.log("[DataEditorWrapper:exportData]",{data:s,filename:d});try{vt.saveAs(l,d)}catch(c){const m=Xe(c);console.error("[DataEditorWrapper:handleExportData]",m,{error:c,data:s,dataJson:o,dataBlob:l,filename:d});debugger;le({message:"Cannot export data: "+m,type:"error"})}finally{le({message:"File has successfully exported",type:"success"})}}return i.$$set=s=>{"sectionId"in s&&t(0,a=s.sectionId)},[a,r]}class Ht extends B{constructor(e){super(),q(this,e,zt,Wt,V,{sectionId:0})}}function Ne(i){let e,t,n,a,r,s,o,l;return a=new pt({props:{allSections:i[2],sectionId:i[1],onChangeSection:i[4]}}),o=new Ht({props:{sectionId:i[1]}}),{c(){e=E("div"),t=E("div"),n=E("div"),C(a.$$.fragment),r=Z(),s=E("div"),C(o.$$.fragment),this.h()},l(d){e=$(d,"DIV",{class:!0});var c=I(e);t=$(c,"DIV",{class:!0});var m=I(t);n=$(m,"DIV",{class:!0});var f=I(n);j(a.$$.fragment,f),f.forEach(_),r=X(m),s=$(m,"DIV",{class:!0});var h=I(s);j(o.$$.fragment,h),h.forEach(_),m.forEach(_),c.forEach(_),this.h()},h(){p(n,"class","column sideColumn leftColumn svelte-1fqm414"),p(s,"class","column mainColumn svelte-1fqm414"),p(t,"class","layout svelte-1fqm414"),p(e,"class","RandoPage svelte-1fqm414")},m(d,c){k(d,e,c),w(e,t),w(t,n),N(a,n,null),w(t,r),w(t,s),N(o,s,null),l=!0},p(d,c){const m={};c&2&&(m.sectionId=d[1]),a.$set(m);const f={};c&2&&(f.sectionId=d[1]),o.$set(f)},i(d){l||(S(a.$$.fragment,d),S(o.$$.fragment,d),l=!0)},o(d){y(a.$$.fragment,d),y(o.$$.fragment,d),l=!1},d(d){d&&_(e),M(a),M(o)}}}function Gt(i){let e,t,n,a=i[0]&&Ne(i);return{c(){e=Z(),a&&a.c(),t=Q(),this.h()},l(r){Ue("svelte-oi6135",document.head).forEach(_),e=X(r),a&&a.l(r),t=Q(),this.h()},h(){document.title="Edit data"},m(r,s){k(r,e,s),a&&a.m(r,s),k(r,t,s),n=!0},p(r,[s]){r[0]?a?(a.p(r,s),s&1&&S(a,1)):(a=Ne(r),a.c(),S(a,1),a.m(t.parentNode,t)):a&&(te(),y(a,1,1,()=>{a=null}),ne())},i(r){n||(S(a),n=!0)},o(r){y(a),n=!1},d(r){r&&(_(e),_(t)),a&&a.d(r)}}}function Kt(i,e,t){let n,a;se(i,De,b=>t(6,n=b));let r=!1,s=!1;function o(b){if(!b&&!r){const g="Data has not been initialized. Going to the main page.",O=new Error(g);console.warn("[RandoPage:checkReadiness]",O.message),r=!0,le({message:g,type:"error"}),xe("/",{replaceState:!0})}else t(0,s=!0)}const l=De.subscribe(o);We(l),ze(()=>{o(n)});const c=["properties",...Ye()],m=c[0],f=He(m);se(i,f,b=>t(1,a=b));function h(b){f.set(b)}return[s,a,c,f,h]}class Jt extends B{constructor(e){super(),q(this,e,Kt,Gt,V,{})}}function Zt(i){let e,t;return e=new Jt({}),{c(){C(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,a){N(e,n,a),t=!0},p:T,i(n){t||(S(e.$$.fragment,n),t=!0)},o(n){y(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}class sn extends B{constructor(e){super(),q(this,e,null,Zt,V,{})}}export{sn as component};