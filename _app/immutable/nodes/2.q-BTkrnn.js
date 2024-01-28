import{s as $e,p as Pe,a as U,f as w,U as je,d as v,c as z,g as P,h as T,V as pe,j as h,i as Q,K as g,I as ye,D as le,o as Ie,l as ie,m as de,N as Se,P as Ne,n as ke}from"../chunks/scheduler.l8TYPTVV.js";import{S as be,i as Le,f as Te,b as O,d as R,m as W,a as x,t as G,e as K}from"../chunks/index.11lTRa6W.js";import{w as me}from"../chunks/index.QqyGaot-.js";import{g as te,r as Ve,e as Ce,a as Ue,b as ze}from"../chunks/navigation.X7NNzUAS.js";import{T as Be,p as ge,l as _e,c as Me,L as Ae}from"../chunks/randoDataSetsStore.nqaS7DvT.js";import{R as Oe,a as he,g as Re}from"../chunks/RandoLogo.e653hoDT.js";import{s as We,h as xe,a as ve,b as se}from"../chunks/randoFileInfoStore.CgGjl7mb.js";import{N as Ge,P as Ke}from"../chunks/extendDataSetWithFilters.BuhGwmDD.js";function Fe(a){if(a){a.includes("NaN")&&(a=a.replace(/(:\s*)NaN($|,)/g,"$1null$2"));try{return JSON.parse(a)}catch(t){const o=["Failed to parse json data",te(t)].filter(Boolean).join(": "),r=new Error(o);console.error("[loadDemoData:safeParseJson]: error",o,{reason:o,error:t,jsonText:a});debugger;throw r}}}function De(a){Ve.set(a);const t=!!a;Ce(),Ue(),We(t)}const Je="/data/",ce=[{id:"minimal-1",filename:"minimal-1.json"},{id:"agribalyse-3.1.1-biosphere-ecoinvent-3.8-biosphere",filename:"agribalyse-3.1.1-biosphere-ecoinvent-3.8-biosphere.json"},{id:"ecoinvent-biosphere-3.8-3.9-example",filename:"ecoinvent-biosphere-3.8-3.9-example.json"},{id:"simapro-selection-to-ecoinvent-3.9-biosphere",filename:"simapro-selection-to-ecoinvent-3.9-biosphere.json"},{id:"UVEK-2022-to-ecoinvent-3.9-partial-mining",filename:"UVEK-2022-to-ecoinvent-3.9-partial-mining.json"},{id:"UVEK-2022-to-ecoinvent-3.9-partial-transport",filename:"UVEK-2022-to-ecoinvent-3.9-partial-transport.json"}],He=0;function Ee(a){return ce[a].filename}function qe(a){const t=Ee(a);return Je+t}function Qe(a){return ce[a].id}function Xe(a){const t=qe(a);return fetch(t).then(e=>{const{ok:o,status:r,statusText:D}=e;if(!o){const u=[D,r&&"status: "+r].filter(Boolean).join(", ")||"Unknown error",s=new Error("Data loading error: "+u);console.error("[loadDemoData:loadDemoDataByIdx]: error (on then)",{reason:u,res:e,dataUrl:t});debugger;throw s}return e.text()}).then(e=>{const o=e&&Fe(e);if(!o)throw"Received empty data";const r=e.length;return{data:o,size:r}})}function Ye(a,t={}){const{name:e,size:o}=a,{onProgress:r,onLoaded:D,onError:u,timeout:s}=t;return new Promise(function(V,p){const m=new FileReader;let S=s?setTimeout(function(){m.abort();const y="Timeout of "+s+'ms exceeded during upload of file "'+e+'"',L=new Error(y);console.error("[loadDataFile] timeout error",{timeoutError:L,timeout:s,fileName:e,fileReader:m});debugger;return u&&u({error:L,fileReader:m}),p(L)},s):void 0;function b(){S&&(clearTimeout(S),S=void 0)}r&&(m.onprogress=function(y){const{lengthComputable:L,loaded:c,total:f}=y,_=L&&f?Math.round(c*100/f):void 0;r({progress:_,loaded:c,total:f,fileReader:m})}),m.onloadend=function(y){const{target:L}=y;try{const c=L?.result,f=c&&Fe(c);if(!f)throw"Received empty data";return D&&D({data:f,fileReader:m}),V({data:f,size:o})}catch(c){const f=['Data processing error for file "'+e+'"',te(c)].filter(Boolean).join(": "),_=new Error(f);console.error("[loadDataFile] onloadend: get data error",{dataError:_,error:c});debugger;return u&&u({error:_,fileReader:m}),p(_)}finally{b()}},m.onerror=function(y){const{loaded:L,target:c,type:f}=y;console.error("[loadDataFile] onerror",{fileName:e,loaded:L,target:c,errorType:f,ev:y});let _;if(c){const F=c.error,l=['Data loading error for file "'+e+'"',te(F)].filter(Boolean).join(": ");_=new Error(l)}else{const F='Unknown data loading error for file "'+e+'"';_=new Error(F)}console.error("[loadDataFile] onerror: event error",{resultError:_});debugger;return u&&u({error:_,fileReader:m}),b(),p(_)},m.readAsText(a)})}const Ze="_LoadDataPage_1vje0_11",et="_WaiterPanel_1vje0_22",tt="_inited_1vje0_37",at="_goingOut_1vje0_37",ot="_loading_1vje0_37",rt="_Wrapper_1vje0_45",nt="_SplashSection_1vje0_53",st="_SplashBackground_1vje0_67",lt="_dark_1vje0_78",it="_SplashContent_1vje0_81",dt="_AppTitle_1vje0_90",ct="_LoadSection_1vje0_93",ft="_vpadded_1vje0_113",ut="_SectionLabel_1vje0_117",pt="_formGroup_1vje0_122",mt="_FileUploadField_1vje0_130",d={LoadDataPage:Ze,WaiterPanel:et,inited:tt,goingOut:at,loading:ot,Wrapper:rt,SplashSection:nt,SplashBackground:st,dark:lt,SplashContent:it,AppTitle:dt,LoadSection:ct,vpadded:ft,SectionLabel:ut,formGroup:pt,FileUploadField:mt};function gt(a){let t;return{c(){t=ie(he)},l(e){t=de(e,he)},m(e,o){Q(e,t,o)},p:Se,d(e){e&&v(t)}}}function _t(a){let t,e,o,r,D,u;return{c(){t=w("span"),e=ie(a[1]),o=U(),r=w("input"),this.h()},l(s){t=P(s,"SPAN",{});var i=T(t);e=de(i,a[1]),i.forEach(v),o=z(s),r=P(s,"INPUT",{type:!0,id:!0,name:!0,accept:!0}),this.h()},h(){h(r,"type","file"),h(r,"id","localDataFile"),h(r,"name","localDataFile"),h(r,"accept","application/json")},m(s,i){Q(s,t,i),g(t,e),Q(s,o,i),Q(s,r,i),D||(u=Ne(r,"change",a[7]),D=!0)},p(s,i){i&2&&ke(e,s[1])},d(s){s&&(v(t),v(o),v(r)),D=!1,u()}}}function ht(a){let t;return{c(){t=ie("Load demo data")},l(e){t=de(e,"Load demo data")},m(e,o){Q(e,t,o)},d(e){e&&v(t)}}}function vt(a){let t,e;return t=new Ae({}),{c(){O(t.$$.fragment)},l(o){R(t.$$.fragment,o)},m(o,r){W(t,o,r),e=!0},i(o){e||(x(t.$$.fragment,o),e=!0)},o(o){G(t.$$.fragment,o),e=!1},d(o){K(t,o)}}}function Dt(a){let t,e,o,r,D,u,s,i,V,p,m,S,b,j,y="Load local data",L,c,f,_,F,l,C="Load demo data",N,$,I,X,Y,k,J,M,ae,Z;i=new Oe({props:{size:50}}),p=new Be({props:{class:d.AppTitle,color:"blue",size:"xl",$$slots:{default:[gt]},$$scope:{ctx:a}}}),f=new ge({props:{class:d.FileUploadField,id:"localDataFile",name:"localDataFile",title:a[1],$$slots:{default:[_t]},$$scope:{ctx:a}}});function we(n){a[13](n)}let fe={data:a[5],id:"demoDataFile",placeholder:"Select demo dataset"};return a[0]!==void 0&&(fe.value=a[0]),I=new Ge({props:fe}),Pe.push(()=>Te(I,"value",we)),k=new ge({props:{id:"loadDemoDataAction",$$slots:{default:[ht]},$$scope:{ctx:a}}}),k.$on("click",a[6]),M=new Ke({props:{class:d.WaiterPanel,radius:0,shadow:void 0,$$slots:{default:[vt]},$$scope:{ctx:a}}}),{c(){t=U(),e=w("div"),o=w("div"),r=w("div"),D=w("div"),u=U(),s=w("div"),O(i.$$.fragment),V=U(),O(p.$$.fragment),m=U(),S=w("div"),b=w("section"),j=w("div"),j.textContent=y,L=U(),c=w("div"),O(f.$$.fragment),_=U(),F=w("section"),l=w("div"),l.textContent=C,N=U(),$=w("div"),O(I.$$.fragment),Y=U(),O(k.$$.fragment),J=U(),O(M.$$.fragment),this.h()},l(n){je("svelte-8l8mdx",document.head).forEach(v),t=z(n),e=P(n,"DIV",{class:!0});var ee=T(e);o=P(ee,"DIV",{class:!0});var A=T(o);r=P(A,"DIV",{class:!0});var H=T(r);D=P(H,"DIV",{class:!0}),T(D).forEach(v),u=z(H),s=P(H,"DIV",{class:!0});var q=T(s);R(i.$$.fragment,q),V=z(q),R(p.$$.fragment,q),q.forEach(v),H.forEach(v),m=z(A),S=P(A,"DIV",{class:!0});var B=T(S);b=P(B,"SECTION",{id:!0,class:!0});var oe=T(b);j=P(oe,"DIV",{class:!0,"data-svelte-h":!0}),pe(j)!=="svelte-18c8bhh"&&(j.textContent=y),L=z(oe),c=P(oe,"DIV",{class:!0});var ue=T(c);R(f.$$.fragment,ue),ue.forEach(v),oe.forEach(v),_=z(B),F=P(B,"SECTION",{id:!0,class:!0});var re=T(F);l=P(re,"DIV",{class:!0,"data-svelte-h":!0}),pe(l)!=="svelte-ajwsgt"&&(l.textContent=C),N=z(re),$=P(re,"DIV",{class:!0});var ne=T($);R(I.$$.fragment,ne),Y=z(ne),R(k.$$.fragment,ne),ne.forEach(v),re.forEach(v),J=z(B),R(M.$$.fragment,B),B.forEach(v),A.forEach(v),ee.forEach(v),this.h()},h(){document.title="Load data",h(D,"class",d.SplashBackground),h(s,"class",d.SplashContent),h(r,"class",d.SplashSection),h(j,"class",d.SectionLabel),h(c,"class",d.formGroup),h(b,"id","loadLocalData"),h(b,"class",d.delimited),h(l,"class",d.SectionLabel),h($,"class",d.formGroup),h(F,"id","loadDemoData"),h(F,"class",d.delimited),h(S,"class",d.LoadSection),h(o,"class",d.Wrapper),h(e,"class",ae=_e(d.LoadDataPage,a[2]&&d.loading,a[9]&&d.goingOut&&a[4]&&d.inited,a[3]&&d.dark))},m(n,E){Q(n,t,E),Q(n,e,E),g(e,o),g(o,r),g(r,D),g(r,u),g(r,s),W(i,s,null),g(s,V),W(p,s,null),g(o,m),g(o,S),g(S,b),g(b,j),g(b,L),g(b,c),W(f,c,null),g(S,_),g(S,F),g(F,l),g(F,N),g(F,$),W(I,$,null),g($,Y),W(k,$,null),g(S,J),W(M,S,null),Z=!0},p(n,[E]){const ee={};E&262144&&(ee.$$scope={dirty:E,ctx:n}),p.$set(ee);const A={};E&2&&(A.title=n[1]),E&262146&&(A.$$scope={dirty:E,ctx:n}),f.$set(A);const H={};!X&&E&1&&(X=!0,H.value=n[0],ye(()=>X=!1)),I.$set(H);const q={};E&262144&&(q.$$scope={dirty:E,ctx:n}),k.$set(q);const B={};E&262144&&(B.$$scope={dirty:E,ctx:n}),M.$set(B),(!Z||E&28&&ae!==(ae=_e(d.LoadDataPage,n[2]&&d.loading,n[9]&&d.goingOut&&n[4]&&d.inited,n[3]&&d.dark)))&&h(e,"class",ae)},i(n){Z||(x(i.$$.fragment,n),x(p.$$.fragment,n),x(f.$$.fragment,n),x(I.$$.fragment,n),x(k.$$.fragment,n),x(M.$$.fragment,n),Z=!0)},o(n){G(i.$$.fragment,n),G(p.$$.fragment,n),G(f.$$.fragment,n),G(I.$$.fragment,n),G(k.$$.fragment,n),G(M.$$.fragment,n),Z=!1},d(n){n&&(v(t),v(e)),K(i),K(p),K(f),K(I),K(k),K(M)}}}function $t(a,t,e){let o,r,D,u,s;le(a,xe,l=>e(15,D=l)),le(a,Me,l=>e(12,u=l));let i=He,V=!1,p,m=!1;const S=ce.map(({id:l},C)=>({label:l,value:String(C)}));let b="Select and upload local file";function j(){const l=Qe(i),C=Ee(i);e(10,V=!0),Xe(i).then(({data:N,size:$})=>{De(N),ve.set({name:C,type:"demo",size:$}),se({message:"Demo data loading successfully finished",type:"success"}),_()}).catch(N=>{const $=te(N);console.error("[LoadDataPage:loadDemoData] error",$,{error:N,dataId:l});debugger;se({message:$,type:"error"})}).finally(()=>{e(10,V=!1)})}function y(l){const N=l.target.files,$=N&&N[0];if(!$){const J=new Error("No file selected!");console.warn("[LoadDataPage:handleLocalFile] error",{error:J});return}const{name:I,type:X,size:Y}=$;if(!/\.json$/.test(I)||X!=="application/json"){const J=new Error("Expected json data file!");console.warn("[LoadDataPage:handleLocalFile] error",{error:J});return}p=$;const k=Re(Y,{normalize:!0}).join("");e(1,b=`${I} (${k})`),L()}function L(){if(!p){const l=new Error("No local file defined");console.warn("[LoadDataPage:loadLocalData] error",{error:l});debugger;return}e(11,m=!0),Ye(p,{timeout:5e3}).then(({data:l})=>{De(l),p&&ve.set({name:p.name,type:"uploaded",size:p.size}),se({message:"Local data loading successfully finished",type:"success"}),_()}).catch(l=>{const C=te(l);console.error("[LoadDataPage:loadLocalData] error",C,{error:l,localDataFile:p});debugger;se({message:C,type:"error"}),_()}).finally(()=>{e(11,m=!1)})}const c=me(!1);le(a,c,l=>e(4,s=l));let f=me(!1);Ie(()=>{c.set(!0)});function _(){D&&(f.set(!0),ze("/data"))}function F(l){i=l,e(0,i)}return a.$$.update=()=>{a.$$.dirty&4096&&e(3,o=u==="dark"),a.$$.dirty&3072&&e(2,r=V||m)},[i,b,r,o,s,S,j,y,c,f,V,m,u,F]}class St extends be{constructor(t){super(),Le(this,t,$t,Dt,$e,{})}}function bt(a){let t,e;return t=new St({}),{c(){O(t.$$.fragment)},l(o){R(t.$$.fragment,o)},m(o,r){W(t,o,r),e=!0},p:Se,i(o){e||(x(t.$$.fragment,o),e=!0)},o(o){G(t.$$.fragment,o),e=!1},d(o){K(t,o)}}}class Nt extends be{constructor(t){super(),Le(this,t,null,bt,$e,{})}}export{Nt as component};
