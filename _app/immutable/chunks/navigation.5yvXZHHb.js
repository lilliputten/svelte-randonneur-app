import{Y as n}from"./scheduler.D9i2_oPc.js";import{w as o}from"./index.RFOEB-ae.js";import{d as v,a as l}from"./extendDataSetWithFilters.K91ioLcD.js";import"./index.hhuPaoSW.js";import"./FilterActionIcon.module.QY3rxjnu.js";import{k as f}from"./singletons.8E2FnDHJ.js";const c=o(void 0),u=["create-datasets","delete","disaggregate","mapping","replace","update"],D=o(void 0),h=o(void 0),b=o(void 0),R=o(void 0),x=o(void 0),P=o(void 0),m={"create-datasets":D,delete:h,disaggregate:b,mapping:R,replace:x,update:P};function z(t){return t?t instanceof Error?t.message:String(t):""}const E=o(void 0),_=o(void 0),w=o(void 0),y=o(void 0),K=o(void 0),k=o(void 0),A={"create-datasets":E,delete:_,disaggregate:w,mapping:y,replace:K,update:k};function B(t,e){const a=A[t];if(!e){a.set(void 0);return}const s=v(t,e);l(s),a.set(s)}function C(){const t=n(c);u.forEach(e=>{const a=m[e],s=t?.[e];a.set(s),B(e,s)})}function G(){const t=u.reduce((e,a)=>{const s=m[a],r=n(s);return e[a]=r,e},{});c.update(e=>({...e,...t}))}function H(){return u.map(t=>{const e=m[t];return n(e)&&t}).filter(Boolean)}const g=o(void 0);function I(){const t=n(c);if(!t){g.set(void 0);return}const{name:e,version:a,description:s,homepage:r,licenses:i,contributors:d,created:p}=t,S={name:e,version:a,description:s,homepage:r,licenses:i,contributors:d,created:p};g.set(S)}function J(){const t=n(g),e=t?.name,a=t?.version,s=t?.description,r=t?.homepage,i=t?.licenses,d=t?.contributors,p=t?.created;c.update(S=>({...S,name:e,version:a,description:s,homepage:r,licenses:i,contributors:d,created:p}))}const L=f("goto");export{I as a,L as b,g as c,A as d,C as e,m as f,z as g,J as h,H as i,c as r,G as s};
