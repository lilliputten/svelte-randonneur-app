import{s as $,f as m,a as b,g as u,h,V as P,c as y,d,j as p,i as g,K as v,N as _,U as k}from"../chunks/scheduler.jafUb2iH.js";import{S as D,i as x,b as S,d as E,m as w,a as q,t as C,e as I}from"../chunks/index.VIoRrsQt.js";import{p as G}from"../chunks/params.AZAjyG-P.js";import{G as T,e as j}from"../chunks/EditableList.Z_f-b_qp.js";import{d as B,a as F}from"../chunks/extendDataSetWithFilters.N31T2Y2S.js";function H(c){let e,t,a="DemoEditDataSet",o,s,i,n;return i=new T({props:{spec:c[1],data:c[0],onChange:K}}),{c(){e=m("div"),t=m("h2"),t.textContent=a,o=b(),s=m("div"),S(i.$$.fragment),this.h()},l(r){e=u(r,"DIV",{class:!0});var l=h(e);t=u(l,"H2",{"data-svelte-h":!0}),P(t)!=="svelte-trq1wl"&&(t.textContent=a),o=y(l),s=u(l,"DIV",{});var f=h(s);E(i.$$.fragment,f),f.forEach(d),l.forEach(d),this.h()},h(){p(e,"class","DemoEditDataSet svelte-1wwwr3q")},m(r,l){g(r,e,l),v(e,t),v(e,o),v(e,s),w(i,s,null),n=!0},p:_,i(r){n||(q(i.$$.fragment,r),n=!0)},o(r){C(i.$$.fragment,r),n=!1},d(r){r&&d(e),I(i)}}}function K(c,e){console.log("[DemoEditDataSet:onChange]",e.id,{id:e.id,data:c,spec:e})}function N(c){const e=[{created:void 0},{created:"2023-12-22T01:23:45.67Z",source:{name:"1,4-Butanediol",categories:["Emissions to water","river","xtra"],unit:"kg"},comment:"Identical names"},{created:void 0,source:{categories:["X"],unit:"g"}}],t=B("sample",e);return F(t),j(t),[e,t]}class U extends D{constructor(e){super(),x(this,e,N,H,$,{})}}function W(c){let e,t,a,o,s,i;return document.title="Demo — "+G,s=new U({}),{c(){e=b(),t=m("div"),a=m("div"),o=m("div"),S(s.$$.fragment),this.h()},l(n){k("svelte-19qkl1l",document.head).forEach(d),e=y(n),t=u(n,"DIV",{class:!0});var l=h(t);a=u(l,"DIV",{class:!0});var f=h(a);o=u(f,"DIV",{class:!0});var V=h(o);E(s.$$.fragment,V),V.forEach(d),f.forEach(d),l.forEach(d),this.h()},h(){p(o,"class","content svelte-15h7gqx"),p(a,"class","container scrollable svelte-15h7gqx"),p(t,"class","DemoPage svelte-15h7gqx")},m(n,r){g(n,e,r),g(n,t,r),v(t,a),v(a,o),w(s,o,null),i=!0},p:_,i(n){i||(q(s.$$.fragment,n),i=!0)},o(n){C(s.$$.fragment,n),i=!1},d(n){n&&(d(e),d(t)),I(s)}}}class X extends D{constructor(e){super(),x(this,e,null,W,$,{})}}function Z(c){let e,t;return e=new X({}),{c(){S(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,o){w(e,a,o),t=!0},p:_,i(a){t||(q(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){I(e,a)}}}class O extends D{constructor(e){super(),x(this,e,null,Z,$,{})}}export{O as component};
