import{$ as K,a0 as S,s as Q,u as A,p as X,a as Z,c as x,i as M,I as w,d as z,C as V,F as $,G as B,e as N,r as ee,x as oe,y as te,z as re,l as ne,m as ae}from"./scheduler.rsKKbDYC.js";import{S as se,i as le,f as ie,b as F,d as E,m as P,a as y,t as k,e as W,g as ce,c as fe}from"./index.DzfArh8w.js";import{f as ue,v as de,e as Y,i as ge,E as me,u as q,B as pe,g as be,h as _e,d as he,L as ye}from"./index.AOCYmvTY.js";function D(o){return o<.5?4*o*o*o:.5*Math.pow(2*o-2,3)+1}function L(o){const e=o-1;return e*e*e+1}function Ve(o){return-.5*(Math.cos(Math.PI*o)-1)}function ke(o,{delay:e=0,duration:t=400,easing:r=D,amount:s=5,opacity:a=0}={}){const i=getComputedStyle(o),u=+i.opacity,c=i.filter==="none"?"":i.filter,n=u*(1-a),[l,g]=S(s);return{delay:e,duration:t,easing:r,css:(m,p)=>`opacity: ${u-n*p}; filter: ${c} blur(${p*l}${g});`}}function Ce(o,{delay:e=0,duration:t=400,easing:r=K}={}){const s=+getComputedStyle(o).opacity;return{delay:e,duration:t,easing:r,css:a=>`opacity: ${a*s}`}}function ve(o,{delay:e=0,duration:t=400,easing:r=L,x:s=0,y:a=0,opacity:i=0}={}){const u=getComputedStyle(o),c=+u.opacity,n=u.transform==="none"?"":u.transform,l=c*(1-i),[g,m]=S(s),[p,_]=S(a);return{delay:e,duration:t,easing:r,css:(b,h)=>`
			transform: ${n} translate(${(1-b)*g}${m}, ${(1-b)*p}${_});
			opacity: ${c-l*h}`}}function Ie(o,{delay:e=0,duration:t=400,easing:r=L,axis:s="y"}={}){const a=getComputedStyle(o),i=+a.opacity,u=s==="y"?"height":"width",c=parseFloat(a[u]),n=s==="y"?["top","bottom"]:["left","right"],l=n.map(d=>`${d[0].toUpperCase()}${d.slice(1)}`),g=parseFloat(a[`padding${l[0]}`]),m=parseFloat(a[`padding${l[1]}`]),p=parseFloat(a[`margin${l[0]}`]),_=parseFloat(a[`margin${l[1]}`]),b=parseFloat(a[`border${l[0]}Width`]),h=parseFloat(a[`border${l[1]}Width`]);return{delay:e,duration:t,easing:r,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*i};${u}: ${d*c}px;padding-${n[0]}: ${d*g}px;padding-${n[1]}: ${d*m}px;margin-${n[0]}: ${d*p}px;margin-${n[1]}: ${d*_}px;border-${n[0]}-width: ${d*b}px;border-${n[1]}-width: ${d*h}px;`}}function Se(o,{delay:e=0,duration:t=400,easing:r=L,start:s=0,opacity:a=0}={}){const i=getComputedStyle(o),u=+i.opacity,c=i.transform==="none"?"":i.transform,n=1-s,l=u*(1-a);return{delay:e,duration:t,easing:r,css:(g,m)=>`
			transform: ${c} scale(${1-n*m});
			opacity: ${u-l*m}
		`}}function Ae(o,{delay:e=0,speed:t,duration:r,easing:s=D}={}){let a=o.getTotalLength();const i=getComputedStyle(o);return i.strokeLinecap!=="butt"&&(a+=parseInt(i.strokeWidth)),r===void 0?t===void 0?r=800:r=a/t:typeof r=="function"&&(r=r(a)),{delay:e,duration:r,easing:s,css:(u,c)=>`
			stroke-dasharray: ${a};
			stroke-dashoffset: ${c*a};
		`}}function Be(o){let e;if(typeof o=="function")return o;switch(o){case"fade":e=Ce;break;case"blur":e=ke;break;case"fly":e=ve;break;case"slide":e=Ie;break;case"scale":e=Se;break;case"draw":e=Ae;break;default:throw new Error("You must enter a valid transition name")}return e}const v={xs:18,sm:22,md:28,lg:34,xl:44};function Fe(o){const{themeColor:e}=ge;return{...de(o),hover:{[`${Y.selector} &`]:{color:e(o,2),"&:hover":{backgroundColor:e("dark",8)}},border:"1px solid transparent",backgroundColor:"transparent",color:e(o,7),"&:hover":{backgroundColor:e(o)}},transparent:{[`${Y.selector} &`]:{color:e(o,8),"&:hover":{backgroundColor:null}},border:"1px solid transparent",backgroundColor:"transparent",color:e(o,7),"&:hover":{backgroundColor:null}}}}const Ee=ue((o,{color:e,radius:t,size:r})=>({root:{focusRing:"auto",position:"relative",appearance:"none",WebkitAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",height:typeof r=="string"?v[r]:`${r}px`,minHeight:typeof r=="string"?v[r]:`${r}px`,width:typeof r=="string"?v[r]:`${r}px`,minWidth:typeof r=="string"?v[r]:`${r}px`,borderRadius:`$${t}`,padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",textDecoration:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&:disabled":{pointerEvents:"none",borderColor:"transparent",background:o.fn.themeColor("gray",2),backgroundColor:o.fn.themeColor("gray",2),color:o.fn.themeColor("gray",5),cursor:"not-allowed",darkMode:{borderColor:"transparent",backgroundColor:o.fn.themeColor("dark",4),color:o.fn.themeColor("dark",6)}}},loading:{pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"rgba(255, 255, 255, .5)",borderRadius:`$${t}`,cursor:"not-allowed"}},variants:{variation:Fe(e)}})),Pe=Object.freeze([{error:!0,message:"If using the 'href' prop, set 'root' prop to an anchor ('a') tag",solution:`
                If your component looks like this:

                &lt;ActionIcon href='https://example.com'&gt;
                          ^^^ - Try adding prop root='a'
                       &lt;Icon /&gt;
                &lt;/ActionIcon&gt;
                `}]);function We(o){let e;const t=o[21].default,r=ee(t,o,o[23],null),s=r||ze();return{c(){s&&s.c()},l(a){s&&s.l(a)},m(a,i){s&&s.m(a,i),e=!0},p(a,i){r&&r.p&&(!e||i&8388608)&&oe(r,t,a,a[23],e?re(t,a[23],i,null):te(a[23]),null)},i(a){e||(y(s,a),e=!0)},o(a){k(s,a),e=!1},d(a){s&&s.d(a)}}}function Me(o){let e,t;return e=new ye({props:{size:o[6].size,color:o[6].color,variant:o[6].variant}}),{c(){F(e.$$.fragment)},l(r){E(e.$$.fragment,r)},m(r,s){P(e,r,s),t=!0},p(r,s){const a={};s&64&&(a.size=r[6].size),s&64&&(a.color=r[6].color),s&64&&(a.variant=r[6].variant),e.$set(a)},i(r){t||(y(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function ze(o){let e;return{c(){e=ne("+")},l(t){e=ae(t,"+")},m(t,r){M(t,e,r)},d(t){t&&z(e)}}}function Le(o){let e,t,r,s;const a=[Me,We],i=[];function u(c,n){return c[7]?0:1}return e=u(o),t=i[e]=a[e](o),{c(){t.c(),r=N()},l(c){t.l(c),r=N()},m(c,n){i[e].m(c,n),M(c,r,n),s=!0},p(c,n){let l=e;e=u(c),e===l?i[e].p(c,n):(ce(),k(i[l],1,1,()=>{i[l]=null}),fe(),t=i[e],t?t.p(c,n):(t=i[e]=a[e](c),t.c()),y(t,1),t.m(r.parentNode,r))},i(c){s||(y(t),s=!0)},o(c){k(t),s=!1},d(c){c&&z(r),i[e].d(c)}}}function Oe(o){let e,t,r,s,a;e=new me({props:{observable:o[11],component:"ActionIcon",code:o[12]}});const i=[{use:[o[16],[q,o[2]]]},{tabindex:0},{disabled:o[8]||o[7]},{class:o[15](o[3],o[14].root,{[o[14].loading]:o[7]},o[13]({css:o[1],variation:o[5]}))},{target:o[10]?"_blank":null},{rel:o[10]?"noreferrer noopener":null},{root:o[4]},{href:o[9]},o[17]];function u(n){o[22](n)}let c={$$slots:{default:[Le]},$$scope:{ctx:o}};for(let n=0;n<i.length;n+=1)c=A(c,i[n]);return o[0]!==void 0&&(c.element=o[0]),r=new pe({props:c}),X.push(()=>ie(r,"element",u)),{c(){F(e.$$.fragment),t=Z(),F(r.$$.fragment)},l(n){E(e.$$.fragment,n),t=x(n),E(r.$$.fragment,n)},m(n,l){P(e,n,l),M(n,t,l),P(r,n,l),a=!0},p(n,[l]){const g={};l&2048&&(g.observable=n[11]),l&4096&&(g.code=n[12]),e.$set(g);const m=l&255934?be(i,[l&65540&&{use:[n[16],[q,n[2]]]},i[1],l&384&&{disabled:n[8]||n[7]},l&57514&&{class:n[15](n[3],n[14].root,{[n[14].loading]:n[7]},n[13]({css:n[1],variation:n[5]}))},l&1024&&{target:n[10]?"_blank":null},l&1024&&{rel:n[10]?"noreferrer noopener":null},l&16&&{root:n[4]},l&512&&{href:n[9]},l&131072&&_e(n[17])]):{};l&8388800&&(m.$$scope={dirty:l,ctx:n}),!s&&l&1&&(s=!0,m.element=n[0],w(()=>s=!1)),r.$set(m)},i(n){a||(y(e.$$.fragment,n),y(r.$$.fragment,n),a=!0)},o(n){k(e.$$.fragment,n),k(r.$$.fragment,n),a=!1},d(n){n&&z(t),W(e,n),W(r,n)}}}function Te(o,e,t){let r,s,a;const i=["use","element","class","override","root","color","variant","size","radius","loaderProps","loading","disabled","href","external"];let u=V(e,i),{$$slots:c={},$$scope:n}=e,{use:l=[],element:g=void 0,class:m="",override:p={},root:_="button",color:b="gray",variant:h="hover",size:d="md",radius:C="sm",loaderProps:O={size:"xs",color:"gray",variant:"circle"},loading:T=!1,disabled:j=!1,href:H="",external:R=!1}=e;const G=he($());let I=!1,U;_!=="a"&&e.href&&(I=!0,U=Pe[0]);function J(f){g=f,t(0,g)}return o.$$set=f=>{t(24,e=A(A({},e),B(f))),t(17,u=V(e,i)),"use"in f&&t(2,l=f.use),"element"in f&&t(0,g=f.element),"class"in f&&t(3,m=f.class),"override"in f&&t(1,p=f.override),"root"in f&&t(4,_=f.root),"color"in f&&t(18,b=f.color),"variant"in f&&t(5,h=f.variant),"size"in f&&t(19,d=f.size),"radius"in f&&t(20,C=f.radius),"loaderProps"in f&&t(6,O=f.loaderProps),"loading"in f&&t(7,T=f.loading),"disabled"in f&&t(8,j=f.disabled),"href"in f&&t(9,H=f.href),"external"in f&&t(10,R=f.external),"$$scope"in f&&t(23,n=f.$$scope)},o.$$.update=()=>{o.$$.dirty&2048&&I&&t(1,p={display:"none"}),o.$$.dirty&1835008&&t(15,{cx:r,classes:s,getStyles:a}=Ee({color:b,radius:C,size:d},{name:"ActionIcon"}),r,(t(14,s),t(18,b),t(20,C),t(19,d)),(t(13,a),t(18,b),t(20,C),t(19,d)))},e=B(e),[g,p,l,m,_,h,O,T,j,H,R,I,U,a,s,r,G,u,b,d,C,c,J,n]}class je extends se{constructor(e){super(),le(this,e,Te,Oe,Q,{use:2,element:0,class:3,override:1,root:4,color:18,variant:5,size:19,radius:20,loaderProps:6,loading:7,disabled:8,href:9,external:10})}}const Ne=je;export{Ne as A,Ce as f,Be as g,Ve as s};
