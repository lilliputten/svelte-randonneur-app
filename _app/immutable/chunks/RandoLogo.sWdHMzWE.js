import{s as w,P as h,Q as c,h as p,d as n,j as t,i as x,K as d,O as m}from"./scheduler.8lYd5bl9.js";import{S as F,i as _}from"./index.QJWWgKti.js";function z(l,e={}){const{fixedPoint:i=2,stripFixedZeros:a=!0}=e;let r=l.toFixed(i);return a&&(r=r.replace(/\.*0+$/,"")),r}function B(l,e={}){const{normalize:i}=e,a=["B","K","M","G"],r=a.length-1,o=1024;let s=0,v=!1;for(;s<r;){const u=o-l;if(Math.abs(u)<100){v=!0,s++,l=1;break}else if(u>0)break;l/=o,s++}const g=a[s];let f=l;return i&&(f=z(l,typeof i=="object"?i:void 0)),v&&(f="~"+f),[f,g]}const E="Randonneour Data Browser";function b(l){let e,i,a,r;return{c(){e=h("svg"),i=h("path"),a=h("path"),r=h("path"),this.h()},l(o){e=c(o,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0,overflow:!0,"xml:space":!0});var s=p(e);i=c(s,"path",{fill:!0,d:!0}),p(i).forEach(n),a=c(s,"path",{opacity:!0,fill:!0,d:!0}),p(a).forEach(n),r=c(s,"path",{fill:!0,d:!0}),p(r).forEach(n),s.forEach(n),this.h()},h(){t(i,"fill","#339AF0"),t(i,"d","M55 0c30.375 0 55 24.625 55 55s-24.625 55-55 55S0 85.375 0 55 24.625 0 55 0"),t(a,"opacity",".4"),t(a,"fill","#FFF"),t(a,"d","m38.441 75.495 8.753 15.179c4.432 7.683 14.298 10.328 21.98 5.896a16.134 16.134 0 0 0 8.049-13.938c0-1.791-.334-3.556-.917-5.24 7.803-5.776 12.762-15.033 12.762-25.201 0-17.297-14.071-31.368-31.368-31.368H34.98c-8.869 0-16.083 7.215-16.083 16.084 0 2.854.591 5.696 1.903 8.019l17.641 30.569z"),t(r,"fill","#FFF"),t(r,"d","M57.699 31.331c11.501 0 20.86 9.358 20.86 20.86 0 10.081-7.218 18.517-16.765 20.426l4.173 7.234a5.57 5.57 0 0 1-2.043 7.616 5.575 5.575 0 0 1-7.617-2.044l-8.766-15.182a5.576 5.576 0 0 1 4.83-8.362h5.327c5.354 0 9.707-4.347 9.707-9.688 0-5.353-4.354-9.708-9.707-9.708H34.98a5.576 5.576 0 0 1 0-11.153h22.719zM43.913 47.233a5.576 5.576 0 0 0-5.575 5.576 5.567 5.567 0 0 0 5.575 5.565 5.568 5.568 0 0 0 5.577-5.565 5.578 5.578 0 0 0-5.577-5.576z"),t(e,"width",l[0]),t(e,"height",l[0]),t(e,"viewBox","0 0 110.5 110.5"),t(e,"fill","none"),t(e,"xmlns","http://www.w3.org/2000/svg"),t(e,"overflow","visible"),t(e,"xml:space","preserve")},m(o,s){x(o,e,s),d(e,i),d(e,a),d(e,r)},p(o,[s]){s&1&&t(e,"width",o[0]),s&1&&t(e,"height",o[0])},i:m,o:m,d(o){o&&n(e)}}}function S(l,e,i){let{size:a=110}=e;return l.$$set=r=>{"size"in r&&i(0,a=r.size)},[a]}class L extends F{constructor(e){super(),_(this,e,S,b,w,{size:0})}}export{L as R,E as a,B as g};
