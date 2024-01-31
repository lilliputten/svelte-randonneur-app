import{s as T,A as H,l as J,m as K,i as _,N as L,d as u,f as g,g as p,h as B,j as h,D as k,a as E,e as S,c as j,T as O,V as Q}from"./scheduler.jafUb2iH.js";import{S as q,i as z,b as P,d as R,m as U,a as m,t as d,e as y,g as F,c as G}from"./index.VIoRrsQt.js";import{x as W,l as b,D as X,C,m as I}from"./params.ir6jeoqU.js";const Y={properties:"Properties","create-datasets":"Create datasets",delete:"Delete",disaggregate:"Disaggregate",mapping:"Mapping",replace:"Replace",update:"Update"},Z="_Section_1wy0n_11",N={Section:Z};function $(a){let e;return{c(){e=J(a[4])},l(s){e=K(s,a[4])},m(s,o){_(s,e,o)},p:L,d(s){s&&u(e)}}}function x(a){let e,s;return e=new W({props:{class:b(a[0],N.Section),id:a[2],title:a[4],variant:a[1]?"filled":"light",fullSize:!0,$$slots:{default:[$]},$$scope:{ctx:a}}}),e.$on("click",function(){H(a[3].bind(null,a[2]))&&a[3].bind(null,a[2]).apply(this,arguments)}),{c(){P(e.$$.fragment)},l(o){R(e.$$.fragment,o)},m(o,n){U(e,o,n),s=!0},p(o,[n]){a=o;const l={};n&1&&(l.class=b(a[0],N.Section)),n&4&&(l.id=a[2]),n&2&&(l.variant=a[1]?"filled":"light"),n&32&&(l.$$scope={dirty:n,ctx:a}),e.$set(l)},i(o){s||(m(e.$$.fragment,o),s=!0)},o(o){d(e.$$.fragment,o),s=!1},d(o){y(e,o)}}}function ee(a,e,s){let{className:o=""}=e,{isActive:n=!1}=e,{sectionId:l}=e,{onSectionClick:t}=e;const r=Y[l];return a.$$set=i=>{"className"in i&&s(0,o=i.className),"isActive"in i&&s(1,n=i.isActive),"sectionId"in i&&s(2,l=i.sectionId),"onSectionClick"in i&&s(3,t=i.onSectionClick)},[o,n,l,t,r]}class te extends q{constructor(e){super(),z(this,e,ee,x,T,{className:0,isActive:1,sectionId:2,onSectionClick:3})}}function D(a,e,s){const o=a.slice();return o[5]=e[s],o}function A(a){let e,s,o,n=a[0]&&M(),l=I(a[1]),t=[];for(let i=0;i<l.length;i+=1)t[i]=V(D(a,l,i));const r=i=>d(t[i],1,1,()=>{t[i]=null});return{c(){n&&n.c(),e=E();for(let i=0;i<t.length;i+=1)t[i].c();s=S()},l(i){n&&n.l(i),e=j(i);for(let f=0;f<t.length;f+=1)t[f].l(i);s=S()},m(i,f){n&&n.m(i,f),_(i,e,f);for(let c=0;c<t.length;c+=1)t[c]&&t[c].m(i,f);_(i,s,f),o=!0},p(i,f){if(i[0]?n||(n=M(),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null),f&14){l=I(i[1]);let c;for(c=0;c<l.length;c+=1){const v=D(i,l,c);t[c]?(t[c].p(v,f),m(t[c],1)):(t[c]=V(v),t[c].c(),m(t[c],1),t[c].m(s.parentNode,s))}for(F(),c=l.length;c<t.length;c+=1)r(c);G()}},i(i){if(!o){for(let f=0;f<l.length;f+=1)m(t[f]);o=!0}},o(i){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)d(t[f]);o=!1},d(i){i&&(u(e),u(s)),n&&n.d(i),O(t,i)}}}function M(a){let e,s="Data sections";return{c(){e=g("div"),e.textContent=s,this.h()},l(o){e=p(o,"DIV",{class:!0,"data-svelte-h":!0}),Q(e)!=="svelte-93615h"&&(e.textContent=s),this.h()},h(){h(e,"class","SectionsTitle svelte-n6insw")},m(o,n){_(o,e,n)},d(o){o&&u(e)}}}function w(a){let e;return{c(){e=g("div"),this.h()},l(s){e=p(s,"DIV",{class:!0}),B(e).forEach(u),this.h()},h(){h(e,"class","delimiter section svelte-n6insw")},m(s,o){_(s,e,o)},d(s){s&&u(e)}}}function V(a){let e,s,o,n;e=new te({props:{sectionId:a[5],isActive:a[5]===a[2],onSectionClick:a[3]}});let l=a[5]==="properties"&&w();return{c(){P(e.$$.fragment),s=E(),l&&l.c(),o=S()},l(t){R(e.$$.fragment,t),s=j(t),l&&l.l(t),o=S()},m(t,r){U(e,t,r),_(t,s,r),l&&l.m(t,r),_(t,o,r),n=!0},p(t,r){const i={};r&2&&(i.sectionId=t[5]),r&6&&(i.isActive=t[5]===t[2]),e.$set(i),t[5]==="properties"?l||(l=w(),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){d(e.$$.fragment,t),n=!1},d(t){t&&(u(s),u(o)),y(e,t),l&&l.d(t)}}}function ne(a){let e,s,o,n=a[1]&&A(a);return{c(){e=g("div"),n&&n.c(),this.h()},l(l){e=p(l,"DIV",{class:!0,"data-in-side-menu":!0});var t=B(e);n&&n.l(t),t.forEach(u),this.h()},h(){h(e,"class","SectionsMenu svelte-n6insw"),h(e,"data-in-side-menu",s=a[0]?!0:void 0)},m(l,t){_(l,e,t),n&&n.m(e,null),o=!0},p(l,[t]){l[1]?n?(n.p(l,t),t&2&&m(n,1)):(n=A(l),n.c(),m(n,1),n.m(e,null)):n&&(F(),d(n,1,1,()=>{n=null}),G()),(!o||t&1&&s!==(s=l[0]?!0:void 0))&&h(e,"data-in-side-menu",s)},i(l){o||(m(n),o=!0)},o(l){d(n),o=!1},d(l){l&&u(e),n&&n.d()}}}function ie(a,e,s){let o,n;k(a,X,i=>s(1,o=i)),k(a,C,i=>s(2,n=i));let{inSideMenu:l=!1}=e,{onChangeSection:t=void 0}=e;function r(i){C.set(i),t&&t(i)}return a.$$set=i=>{"inSideMenu"in i&&s(0,l=i.inSideMenu),"onChangeSection"in i&&s(4,t=i.onChangeSection)},[l,o,n,r,t]}class ae extends q{constructor(e){super(),z(this,e,ie,ne,T,{inSideMenu:0,onChangeSection:4})}}export{ae as S,Y as s};
