import{s as $,f as m,a as V,g as f,h,X as y,c as k,d,j as v,i as p,K as g,O as _,W as P}from"../chunks/scheduler.rsKKbDYC.js";import{S as D,i as S,b as x,d as E,m as w,a as b,t as q,e as C}from"../chunks/index.DzfArh8w.js";import"../chunks/index.AOCYmvTY.js";import{G,e as j}from"../chunks/EditableList.B5CZojTd.js";import{d as H}from"../chunks/deriveDataSetSpec.Y-8kg9En.js";function K(c){let e,t,a="DemoEditDataSet",o,s,i,n;return i=new G({props:{spec:c[1],data:c[0],onChange:N}}),{c(){e=m("div"),t=m("h2"),t.textContent=a,o=V(),s=m("div"),x(i.$$.fragment),this.h()},l(r){e=f(r,"DIV",{class:!0});var l=h(e);t=f(l,"H2",{"data-svelte-h":!0}),y(t)!=="svelte-trq1wl"&&(t.textContent=a),o=k(l),s=f(l,"DIV",{});var u=h(s);E(i.$$.fragment,u),u.forEach(d),l.forEach(d),this.h()},h(){v(e,"class","DemoEditDataSet svelte-1wwwr3q")},m(r,l){p(r,e,l),g(e,t),g(e,o),g(e,s),w(i,s,null),n=!0},p:_,i(r){n||(b(i.$$.fragment,r),n=!0)},o(r){q(i.$$.fragment,r),n=!1},d(r){r&&d(e),C(i)}}}function N(c,e){console.log("[DemoEditDataSet:onChange]",e.id,{id:e.id,data:c,spec:e})}function O(c){const e=[{name:"Nickel, ion",code:"e030108f-2125-4bcb-a73b-ad72130fcca3",categories:["water","ground-"],unit:"kilogram"}],t=H("create-datasets",e);return j(t),console.log("[DemoEditDataSet]",{dataSetSpec:t,dataSetData:e}),[e,t]}class W extends D{constructor(e){super(),S(this,e,O,K,$,{})}}function X(c){let e,t,a,o,s,i;return s=new W({}),{c(){e=V(),t=m("div"),a=m("div"),o=m("div"),x(s.$$.fragment),this.h()},l(n){P("svelte-1ggnkv8",document.head).forEach(d),e=k(n),t=f(n,"DIV",{class:!0});var l=h(t);a=f(l,"DIV",{class:!0});var u=h(a);o=f(u,"DIV",{class:!0});var I=h(o);E(s.$$.fragment,I),I.forEach(d),u.forEach(d),l.forEach(d),this.h()},h(){document.title="Demo",v(o,"class","content svelte-15h7gqx"),v(a,"class","container scrollable svelte-15h7gqx"),v(t,"class","DemoPage svelte-15h7gqx")},m(n,r){p(n,e,r),p(n,t,r),g(t,a),g(a,o),w(s,o,null),i=!0},p:_,i(n){i||(b(s.$$.fragment,n),i=!0)},o(n){q(s.$$.fragment,n),i=!1},d(n){n&&(d(e),d(t)),C(s)}}}class z extends D{constructor(e){super(),S(this,e,null,X,$,{})}}function A(c){let e,t;return e=new z({}),{c(){x(e.$$.fragment)},l(a){E(e.$$.fragment,a)},m(a,o){w(e,a,o),t=!0},p:_,i(a){t||(b(e.$$.fragment,a),t=!0)},o(a){q(e.$$.fragment,a),t=!1},d(a){C(e,a)}}}class Q extends D{constructor(e){super(),S(this,e,null,A,$,{})}}export{Q as component};
