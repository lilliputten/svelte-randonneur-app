import{w as n}from"./index.RFOEB-ae.js";import{Y as u}from"./scheduler.D9i2_oPc.js";const a=n([]),s={};function T(t){const e={...{id:0,type:"info",dismissible:!0,timeout:3e3,message:""},...t};if(!e.id){const m=u(a);do e.id=Math.floor(Math.random()*1e4);while(m.find(r=>r.id===e.id))}const i=e.id;a.update(m=>[e,...m]),e.timeout&&(s[i]&&clearTimeout(s[i]),s[i]=setTimeout(()=>f(i),e.timeout))}function f(t){a.update(o=>o.filter(e=>e.id!==t)),s[t]&&(clearTimeout(s[t]),delete s[t])}function p(t){s[t]&&(clearTimeout(s[t]),delete s[t])}function h(t){const o=u(a).find(e=>e.id===t);o?.timeout&&(s[t]&&clearTimeout(s[t]),s[t]=setTimeout(()=>f(t),o.timeout))}const c=n(!1);function D(t){c.set(t)}export{T as a,f as d,c as h,p,h as r,D as s,a as t};
