import{s as ve,p as Pe,a as C,f as E,V as xe,d as _,c as U,g as P,h as N,W as ue,j as g,i as H,K as p,I as Ie,D as me,o as ye,l as le,m as ie,O as we,S as Ne,n as Te}from"../chunks/scheduler.ez7lS21_.js";import{S as Se,i as Le,f as Ve,b as O,d as A,m as W,a as R,t as G,e as K}from"../chunks/index.aYtyibD9.js";import{w as pe}from"../chunks/index.hn7oF0Js.js";import{g as Ce}from"../chunks/navigation.c2Pc-Szh.js";import{T as Ue,l as ge,s as ze,L as Be,x as ne}from"../chunks/FilterActionIcon.module.WBPPdIDW.js";import{R as Me,a as _e,r as he,g as je}from"../chunks/randoFileInfoStore.BRlO0AYL.js";import{g as Z,N as ke,B as $e,P as Oe}from"../chunks/randoPropertiesActions.H9P3TArh.js";import{s as De}from"../chunks/randoDataActions.BK-LBwqA.js";function be(o){if(o){o.includes("NaN")&&(o=o.replace(/(:\s*)NaN($|,)/g,"$1null$2"));try{return JSON.parse(o)}catch(t){const a=["Failed to parse json data",Z(t)].filter(Boolean).join(": "),n=new Error(a);console.error("[loadDemoData:safeParseJson]: error",a,{reason:a,error:t,jsonText:o});debugger;throw n}}}const Ae="/data/",ce=[{id:"minimal-1",filename:"minimal-1.json"},{id:"agribalyse-3.1.1-biosphere-ecoinvent-3.8-biosphere",filename:"agribalyse-3.1.1-biosphere-ecoinvent-3.8-biosphere.json"},{id:"ecoinvent-biosphere-3.8-3.9-example",filename:"ecoinvent-biosphere-3.8-3.9-example.json"},{id:"simapro-selection-to-ecoinvent-3.9-biosphere",filename:"simapro-selection-to-ecoinvent-3.9-biosphere.json"},{id:"UVEK-2022-to-ecoinvent-3.9-partial-mining",filename:"UVEK-2022-to-ecoinvent-3.9-partial-mining.json"},{id:"UVEK-2022-to-ecoinvent-3.9-partial-transport",filename:"UVEK-2022-to-ecoinvent-3.9-partial-transport.json"}],We=0;function Fe(o){return ce[o].filename}function Re(o){const t=Fe(o);return Ae+t}function Ge(o){return ce[o].id}function Ke(o){const t=Re(o);return fetch(t).then(e=>{const{ok:a,status:n,statusText:$}=e;if(!a){const d=[$,n&&"status: "+n].filter(Boolean).join(", ")||"Unknown error",l=new Error("Data loading error: "+d);console.error("[loadDemoData:loadDemoDataByIdx]: error (on then)",{reason:d,res:e,dataUrl:t});debugger;throw l}return e.text()}).then(e=>{const a=e&&be(e);if(!a)throw"Received empty data";const n=e.length;return{data:a,size:n}})}function Je(o,t={}){const{name:e,size:a}=o,{onProgress:n,onLoaded:$,onError:d,timeout:l}=t;return new Promise(function(T,b){const h=new FileReader;let v=l?setTimeout(function(){h.abort();const S="Timeout of "+l+'ms exceeded during upload of file "'+e+'"',w=new Error(S);console.error("[loadDataFile] timeout error",{timeoutError:w,timeout:l,fileName:e,fileReader:h});debugger;return d&&d({error:w,fileReader:h}),b(w)},l):void 0;function F(){v&&(clearTimeout(v),v=void 0)}n&&(h.onprogress=function(S){const{lengthComputable:w,loaded:c,total:f}=S,r=w&&f?Math.round(c*100/f):void 0;n({progress:r,loaded:c,total:f,fileReader:h})}),h.onloadend=function(S){const{target:w}=S;try{const c=w?.result,f=c&&be(c);if(!f)throw"Received empty data";return $&&$({data:f,fileReader:h}),T({data:f,size:a})}catch(c){const f=['Data processing error for file "'+e+'"',Z(c)].filter(Boolean).join(": "),r=new Error(f);console.error("[loadDataFile] onloadend: get data error",{dataError:r,error:c});debugger;return d&&d({error:r,fileReader:h}),b(r)}finally{F()}},h.onerror=function(S){const{loaded:w,target:c,type:f}=S;console.error("[loadDataFile] onerror",{fileName:e,loaded:w,target:c,errorType:f,ev:S});let r;if(c){const D=c.error,m=['Data loading error for file "'+e+'"',Z(D)].filter(Boolean).join(": ");r=new Error(m)}else{const D='Unknown data loading error for file "'+e+'"';r=new Error(D)}console.error("[loadDataFile] onerror: event error",{resultError:r});debugger;return d&&d({error:r,fileReader:h}),F(),b(r)},h.readAsText(o)})}const qe="_LoadDataPage_xmwrs_11",He="_WaiterPanel_xmwrs_22",Qe="_inited_xmwrs_37",Xe="_goingOut_xmwrs_37",Ye="_loading_xmwrs_37",Ze="_Wrapper_xmwrs_45",et="_SplashSection_xmwrs_53",tt="_SplashBackground_xmwrs_63",at="_SplashContent_xmwrs_74",ot="_AppTitle_xmwrs_84",rt="_LoadSection_xmwrs_88",nt="_vpadded_xmwrs_108",st="_SectionLabel_xmwrs_112",lt="_formGroup_xmwrs_117",it="_FileUploadField_xmwrs_124",u={LoadDataPage:qe,WaiterPanel:He,inited:Qe,goingOut:Xe,loading:Ye,Wrapper:Ze,SplashSection:et,SplashBackground:tt,SplashContent:at,AppTitle:ot,LoadSection:rt,vpadded:nt,SectionLabel:st,formGroup:lt,FileUploadField:it};function ct(o){let t;return{c(){t=le(_e)},l(e){t=ie(e,_e)},m(e,a){H(e,t,a)},p:we,d(e){e&&_(t)}}}function dt(o){let t;return{c(){t=le("Load demo data")},l(e){t=ie(e,"Load demo data")},m(e,a){H(e,t,a)},d(e){e&&_(t)}}}function ft(o){let t,e,a,n,$,d;return{c(){t=E("span"),e=le(o[1]),a=C(),n=E("input"),this.h()},l(l){t=P(l,"SPAN",{});var i=N(t);e=ie(i,o[1]),i.forEach(_),a=U(l),n=P(l,"INPUT",{type:!0,id:!0,name:!0,accept:!0}),this.h()},h(){g(n,"type","file"),g(n,"id","localDataFile"),g(n,"name","localDataFile"),g(n,"accept","application/json")},m(l,i){H(l,t,i),p(t,e),H(l,a,i),H(l,n,i),$||(d=Ne(n,"change",o[6]),$=!0)},p(l,i){i&2&&Te(e,l[1])},d(l){l&&(_(t),_(a),_(n)),$=!1,d()}}}function ut(o){let t,e;return t=new Be({}),{c(){O(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,n){W(t,a,n),e=!0},i(a){e||(R(t.$$.fragment,a),e=!0)},o(a){G(t.$$.fragment,a),e=!1},d(a){K(t,a)}}}function mt(o){let t,e,a,n,$,d,l,i,T,b,h,v,F,x,S="Load demo data",w,c,f,r,D,m,I,y,z,ee="Load local data",Q,V,M,se,j,te,X;i=new Me({props:{size:50}}),b=new Ue({props:{class:u.AppTitle,color:"blue",size:"xl",$$slots:{default:[ct]},$$scope:{ctx:o}}});function Ee(s){o[11](s)}let de={data:o[4],id:"demoDataFile",placeholder:"Select demo dataset"};return o[0]!==void 0&&(de.value=o[0]),f=new ke({props:de}),Pe.push(()=>Ve(f,"value",Ee)),m=new $e({props:{id:"loadDemoDataAction",$$slots:{default:[dt]},$$scope:{ctx:o}}}),m.$on("click",o[5]),M=new $e({props:{class:u.FileUploadField,id:"localDataFile",name:"localDataFile",title:o[1],$$slots:{default:[ft]},$$scope:{ctx:o}}}),j=new Oe({props:{class:u.WaiterPanel,radius:0,shadow:void 0,$$slots:{default:[ut]},$$scope:{ctx:o}}}),{c(){t=C(),e=E("div"),a=E("div"),n=E("div"),$=E("div"),d=C(),l=E("div"),O(i.$$.fragment),T=C(),O(b.$$.fragment),h=C(),v=E("div"),F=E("section"),x=E("div"),x.textContent=S,w=C(),c=E("div"),O(f.$$.fragment),D=C(),O(m.$$.fragment),I=C(),y=E("section"),z=E("div"),z.textContent=ee,Q=C(),V=E("div"),O(M.$$.fragment),se=C(),O(j.$$.fragment),this.h()},l(s){xe("svelte-8l8mdx",document.head).forEach(_),t=U(s),e=P(s,"DIV",{class:!0});var Y=N(e);a=P(Y,"DIV",{class:!0});var J=N(a);n=P(J,"DIV",{class:!0});var q=N(n);$=P(q,"DIV",{class:!0}),N($).forEach(_),d=U(q),l=P(q,"DIV",{class:!0});var k=N(l);A(i.$$.fragment,k),T=U(k),A(b.$$.fragment,k),k.forEach(_),q.forEach(_),h=U(J),v=P(J,"DIV",{class:!0});var B=N(v);F=P(B,"SECTION",{id:!0,class:!0});var ae=N(F);x=P(ae,"DIV",{class:!0,"data-svelte-h":!0}),ue(x)!=="svelte-ajwsgt"&&(x.textContent=S),w=U(ae),c=P(ae,"DIV",{class:!0});var oe=N(c);A(f.$$.fragment,oe),D=U(oe),A(m.$$.fragment,oe),oe.forEach(_),ae.forEach(_),I=U(B),y=P(B,"SECTION",{id:!0,class:!0});var re=N(y);z=P(re,"DIV",{class:!0,"data-svelte-h":!0}),ue(z)!=="svelte-18c8bhh"&&(z.textContent=ee),Q=U(re),V=P(re,"DIV",{class:!0});var fe=N(V);A(M.$$.fragment,fe),fe.forEach(_),re.forEach(_),se=U(B),A(j.$$.fragment,B),B.forEach(_),J.forEach(_),Y.forEach(_),this.h()},h(){document.title="Load data",g($,"class",u.SplashBackground),g(l,"class",u.SplashContent),g(n,"class",u.SplashSection),g(x,"class",u.SectionLabel),g(c,"class",u.formGroup),g(F,"id","loadDemoData"),g(F,"class",u.delimited),g(z,"class",u.SectionLabel),g(V,"class",u.formGroup),g(y,"id","loadLocalData"),g(y,"class",u.delimited),g(v,"class",u.LoadSection),g(a,"class",u.Wrapper),g(e,"class",te=ge(u.LoadDataPage,o[2]&&u.loading,o[8]&&u.goingOut&&o[3]&&u.inited))},m(s,L){H(s,t,L),H(s,e,L),p(e,a),p(a,n),p(n,$),p(n,d),p(n,l),W(i,l,null),p(l,T),W(b,l,null),p(a,h),p(a,v),p(v,F),p(F,x),p(F,w),p(F,c),W(f,c,null),p(c,D),W(m,c,null),p(v,I),p(v,y),p(y,z),p(y,Q),p(y,V),W(M,V,null),p(v,se),W(j,v,null),X=!0},p(s,[L]){const Y={};L&65536&&(Y.$$scope={dirty:L,ctx:s}),b.$set(Y);const J={};!r&&L&1&&(r=!0,J.value=s[0],Ie(()=>r=!1)),f.$set(J);const q={};L&65536&&(q.$$scope={dirty:L,ctx:s}),m.$set(q);const k={};L&2&&(k.title=s[1]),L&65538&&(k.$$scope={dirty:L,ctx:s}),M.$set(k);const B={};L&65536&&(B.$$scope={dirty:L,ctx:s}),j.$set(B),(!X||L&12&&te!==(te=ge(u.LoadDataPage,s[2]&&u.loading,s[8]&&u.goingOut&&s[3]&&u.inited)))&&g(e,"class",te)},i(s){X||(R(i.$$.fragment,s),R(b.$$.fragment,s),R(f.$$.fragment,s),R(m.$$.fragment,s),R(M.$$.fragment,s),R(j.$$.fragment,s),X=!0)},o(s){G(i.$$.fragment,s),G(b.$$.fragment,s),G(f.$$.fragment,s),G(m.$$.fragment,s),G(M.$$.fragment,s),G(j.$$.fragment,s),X=!1},d(s){s&&(_(t),_(e)),K(i),K(b),K(f),K(m),K(M),K(j)}}}function pt(o,t,e){let a,n,$;me(o,ze,r=>e(13,n=r));let d=We,l=!1,i,T=!1;const b=ce.map(({id:r},D)=>({label:r,value:String(D)}));let h="Select and upload local file";function v(){const r=Ge(d),D=Fe(d);e(9,l=!0),Ke(d).then(({data:m,size:I})=>{console.log("[LoadDataPage:loadDemoData] success",{dataId:r,data:m,size:I}),De(m),he.set({name:D,type:"demo",size:I}),ne({message:"Demo data loading successfully finished",type:"success"}),c()}).catch(m=>{const I=Z(m);console.error("[LoadDataPage:loadDemoData] error",I,{error:m,dataId:r});debugger;ne({message:I,type:"error"})}).finally(()=>{e(9,l=!1)})}function F(r){const m=r.target.files,I=m&&m[0];if(!I){const V=new Error("No file selected!");console.warn("[LoadDataPage:handleLocalFile] error",{error:V});return}const{name:y,type:z,size:ee}=I;if(!/\.json$/.test(y)||z!=="application/json"){const V=new Error("Expected json data file!");console.warn("[LoadDataPage:handleLocalFile] error",{error:V});return}i=I;const Q=je(ee,{normalize:!0}).join("");e(1,h=`${y} (${Q})`),x()}function x(){if(!i){const r=new Error("No local file defined");console.warn("[LoadDataPage:loadLocalData] error",{error:r});debugger;return}e(10,T=!0),Je(i,{timeout:5e3}).then(({data:r,size:D})=>{console.log("[LoadDataPage:loadLocalData] success",{localDataFile:i,data:r,size:D}),De(r),i&&he.set({name:i.name,type:"uploaded",size:i.size}),ne({message:"Local data loading successfully finished",type:"success"}),c()}).catch(r=>{const D=Z(r);console.error("[LoadDataPage:loadLocalData] error",D,{error:r,localDataFile:i});debugger;ne({message:D,type:"error"}),c()}).finally(()=>{e(10,T=!1)})}const S=pe(!1);me(o,S,r=>e(3,$=r));let w=pe(!1);ye(()=>{S.set(!0)});function c(){n&&(w.set(!0),Ce("/data"))}function f(r){d=r,e(0,d)}return o.$$.update=()=>{o.$$.dirty&1536&&e(2,a=l||T)},[d,h,a,$,b,v,F,S,w,l,T,f]}class gt extends Se{constructor(t){super(),Le(this,t,pt,mt,ve,{})}}function _t(o){let t,e;return t=new gt({}),{c(){O(t.$$.fragment)},l(a){A(t.$$.fragment,a)},m(a,n){W(t,a,n),e=!0},p:we,i(a){e||(R(t.$$.fragment,a),e=!0)},o(a){G(t.$$.fragment,a),e=!1},d(a){K(t,a)}}}class Ft extends Se{constructor(t){super(),Le(this,t,null,_t,ve,{})}}export{Ft as component};