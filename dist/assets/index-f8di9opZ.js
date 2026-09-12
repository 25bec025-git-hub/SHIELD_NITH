var dr=Object.defineProperty;var lr=(a,t,e)=>t in a?dr(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var S=(a,t,e)=>lr(a,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=(a,t,e=[])=>{const s=document.createElementNS("http://www.w3.org/2000/svg",a);return Object.keys(t).forEach(i=>{s.setAttribute(i,String(t[i]))}),e.length&&e.forEach(i=>{const o=po(...i);s.appendChild(o)}),s};var pr=([a,t,e])=>po(a,t,e);/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=a=>Array.from(a.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),ur=a=>typeof a=="string"?a:!a||!a.class?"":a.class&&typeof a.class=="string"?a.class.split(" "):a.class&&Array.isArray(a.class)?a.class:"",fr=a=>a.flatMap(ur).map(e=>e.trim()).filter(Boolean).filter((e,s,i)=>i.indexOf(e)===s).join(" "),vr=a=>a.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,s)=>e.toUpperCase()+s.toLowerCase()),d1=(a,{nameAttr:t,icons:e,attrs:s})=>{var f;const i=a.getAttribute(t);if(i==null)return;const o=vr(i),r=e[o];if(!r)return console.warn(`${a.outerHTML} icon name was not found in the provided icons object.`);const c=gr(a),[h,d,l]=r,p={...d,"data-lucide":i,...s,...c},g=fr(["lucide",`lucide-${i}`,c,s]);g&&Object.assign(p,{class:g});const u=pr([h,p,l]);return(f=a.parentNode)==null?void 0:f.replaceChild(u,a)};/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=["svg",n,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 7v9"}],["path",{d:"m14 12 4 4 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=["svg",n,[["path",{d:"M3.5 13h6"}],["path",{d:"m2 16 4.5-9 4.5 9"}],["path",{d:"M18 16V7"}],["path",{d:"m14 11 4-4 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=["svg",n,[["path",{d:"M21 14h-5"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"}],["path",{d:"M4.5 13h6"}],["path",{d:"m3 16 4.5-9 4.5 9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=["svg",n,[["circle",{cx:"16",cy:"4",r:"1"}],["path",{d:"m18 19 1-7-6 1"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=["svg",n,[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=["svg",n,[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 8h12"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=["svg",n,[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}],["path",{d:"m12 15 5 6H7Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=["svg",n,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=["svg",n,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=["svg",n,[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.26 18.67 4 21"}],["path",{d:"m2 2 20 20"}],["path",{d:"M4 4 2 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=["svg",n,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}],["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=["svg",n,[["circle",{cx:"12",cy:"13",r:"8"}],["path",{d:"M12 9v4l2 2"}],["path",{d:"M5 3 2 6"}],["path",{d:"m22 6-3-3"}],["path",{d:"M6.38 18.7 4 21"}],["path",{d:"M17.64 18.67 20 21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=["svg",n,[["path",{d:"M11 21c0-2.5 2-2.5 2-5"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=["svg",n,[["path",{d:"M2 12h20"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=["svg",n,[["path",{d:"M12 2v20"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=["svg",n,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=["svg",n,[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2"}],["path",{d:"M22 22H2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=["svg",n,[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2"}],["path",{d:"M22 22V2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=["svg",n,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M17 22v-5"}],["path",{d:"M17 7V2"}],["path",{d:"M7 22v-3"}],["path",{d:"M7 5V2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=["svg",n,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M10 2v20"}],["path",{d:"M20 2v20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=["svg",n,[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2"}],["path",{d:"M4 2v20"}],["path",{d:"M14 2v20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=["svg",n,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=["svg",n,[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2"}],["path",{d:"M22 2v20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=["svg",n,[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=["svg",n,[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2"}],["path",{d:"M4 22V2"}],["path",{d:"M20 22V2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=["svg",n,[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2"}],["path",{d:"M3 2v20"}],["path",{d:"M21 2v20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=["svg",n,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=["svg",n,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=["svg",n,[["line",{x1:"21",x2:"3",y1:"6",y2:"6"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=["svg",n,[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2"}],["path",{d:"M22 2H2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=["svg",n,[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2"}],["path",{d:"M2 2v20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=["svg",n,[["path",{d:"M22 17h-3"}],["path",{d:"M22 7h-5"}],["path",{d:"M5 17H2"}],["path",{d:"M7 7H2"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=["svg",n,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 20h20"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=["svg",n,[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M2 4h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=["svg",n,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=["svg",n,[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2"}],["path",{d:"M2 22h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=["svg",n,[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2"}],["path",{d:"M2 2h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=["svg",n,[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2"}],["path",{d:"M22 20H2"}],["path",{d:"M22 4H2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=["svg",n,[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2"}],["path",{d:"M2 21h20"}],["path",{d:"M2 3h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=["svg",n,[["path",{d:"M10 10H6"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"}],["path",{d:"M8 8v4"}],["path",{d:"M9 18h6"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=["svg",n,[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=["svg",n,[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=["svg",n,[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68"}],["path",{d:"M18 22H6"}],["path",{d:"M9 2h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=["svg",n,[["path",{d:"M12 22V8"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3"}],["circle",{cx:"12",cy:"5",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["path",{d:"M7.5 8 10 9"}],["path",{d:"m14 9 2.5-1"}],["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 15h8"}],["path",{d:"M8 9h2"}],["path",{d:"M14 9h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=["svg",n,[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=["svg",n,[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14.31 8 5.74 9.94"}],["path",{d:"M9.69 8h11.48"}],["path",{d:"m7.38 12 5.74-9.94"}],["path",{d:"M9.69 16 3.95 6.06"}],["path",{d:"M14.31 16H2.83"}],["path",{d:"m16.62 12-5.74 9.94"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=["svg",n,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h.01"}],["path",{d:"M10 8h.01"}],["path",{d:"M14 8h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=["svg",n,[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}],["path",{d:"M10 4v4"}],["path",{d:"M2 8h20"}],["path",{d:"M6 4v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=["svg",n,[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"}],["path",{d:"M10 2c1 .5 2 2 2 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=["svg",n,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2"}],["path",{d:"m9 15 3-3 3 3"}],["path",{d:"M12 12v9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=["svg",n,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"m9.5 17 5-5"}],["path",{d:"m9.5 12 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=["svg",n,[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{d:"M10 12h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=["svg",n,[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=["svg",n,[["path",{d:"M15 5H9"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=["svg",n,[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=["svg",n,[["path",{d:"M19 15V9"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=["svg",n,[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=["svg",n,[["path",{d:"M5 9v6"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=["svg",n,[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=["svg",n,[["path",{d:"M9 19h6"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=["svg",n,[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=["svg",n,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=["svg",n,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=["svg",n,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=["svg",n,[["path",{d:"M19 3H5"}],["path",{d:"M12 21V7"}],["path",{d:"m6 15 6 6 6-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=["svg",n,[["path",{d:"M17 7 7 17"}],["path",{d:"M17 17H7V7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=["svg",n,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h4"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=["svg",n,[["path",{d:"m7 7 10 10"}],["path",{d:"M17 7v10H7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=["svg",n,[["path",{d:"M12 2v14"}],["path",{d:"m19 9-7 7-7-7"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=["svg",n,[["path",{d:"M12 17V3"}],["path",{d:"m6 11 6 6 6-6"}],["path",{d:"M19 21H5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=["svg",n,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=["svg",n,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"M11 4h10"}],["path",{d:"M11 8h7"}],["path",{d:"M11 12h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=["svg",n,[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=["svg",n,[["path",{d:"M12 5v14"}],["path",{d:"m19 12-7 7-7-7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=["svg",n,[["path",{d:"m9 6-6 6 6 6"}],["path",{d:"M3 12h14"}],["path",{d:"M21 19V5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=["svg",n,[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=["svg",n,[["path",{d:"M3 19V5"}],["path",{d:"m13 6-6 6 6 6"}],["path",{d:"M7 12h14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=["svg",n,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=["svg",n,[["path",{d:"M3 5v14"}],["path",{d:"M21 12H7"}],["path",{d:"m15 18 6-6-6-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=["svg",n,[["path",{d:"m16 3 4 4-4 4"}],["path",{d:"M20 7H4"}],["path",{d:"m8 21-4-4 4-4"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=["svg",n,[["path",{d:"M17 12H3"}],["path",{d:"m11 18 6-6-6-6"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=["svg",n,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=["svg",n,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2"}],["path",{d:"M17 20v-6h-2"}],["path",{d:"M15 20h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=["svg",n,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M17 10V4h-2"}],["path",{d:"M15 10h4"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=["svg",n,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M20 8h-5"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10"}],["path",{d:"M15 14h5l-5 6h5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=["svg",n,[["path",{d:"m21 16-4 4-4-4"}],["path",{d:"M17 20V4"}],["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=["svg",n,[["path",{d:"m5 9 7-7 7 7"}],["path",{d:"M12 16V2"}],["circle",{cx:"12",cy:"21",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=["svg",n,[["path",{d:"m18 9-6-6-6 6"}],["path",{d:"M12 3v14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=["svg",n,[["path",{d:"M7 17V7h10"}],["path",{d:"M17 17 7 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=["svg",n,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h4"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=["svg",n,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=["svg",n,[["path",{d:"M5 3h14"}],["path",{d:"m18 13-6-6-6 6"}],["path",{d:"M12 7v14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=["svg",n,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M11 12h10"}],["path",{d:"M11 16h7"}],["path",{d:"M11 20h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=["svg",n,[["path",{d:"m3 8 4-4 4 4"}],["path",{d:"M7 4v16"}],["path",{d:"M15 4h5l-5 6h5"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"}],["path",{d:"M20 18h-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=["svg",n,[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=["svg",n,[["path",{d:"m4 6 3-3 3 3"}],["path",{d:"M7 17V3"}],["path",{d:"m14 6 3-3 3 3"}],["path",{d:"M17 17V3"}],["path",{d:"M4 21h16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=["svg",n,[["path",{d:"M12 6v12"}],["path",{d:"M17.196 9 6.804 15"}],["path",{d:"m6.804 9 10.392 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=["svg",n,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=["svg",n,[["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=["svg",n,[["path",{d:"M2 10v3"}],["path",{d:"M6 6v11"}],["path",{d:"M10 3v18"}],["path",{d:"M14 8v7"}],["path",{d:"M18 5v13"}],["path",{d:"M22 10v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=["svg",n,[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=["svg",n,[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=["svg",n,[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=["svg",n,[["path",{d:"M4 4v16h16"}],["path",{d:"m4 20 7-7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=["svg",n,[["path",{d:"M9 12h.01"}],["path",{d:"M15 12h.01"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=["svg",n,[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"}],["path",{d:"M8 10h8"}],["path",{d:"M8 18h8"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M12 7v10"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M7 12h5"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 8h8"}],["path",{d:"M8 12h8"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m9 8 3 3v7"}],["path",{d:"m12 11 3-3"}],["path",{d:"M9 12h6"}],["path",{d:"M9 16h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M8 12h4"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 16h7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M9 16h5"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["path",{d:"M11 17V8h4"}],["path",{d:"M11 12h3"}],["path",{d:"M9 16h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=["svg",n,[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=["svg",n,[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1"}],["circle",{cx:"18",cy:"20",r:"2"}],["circle",{cx:"9",cy:"20",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.9 4.9 14.2 14.2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=["svg",n,[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=["svg",n,[["path",{d:"M10 10.01h.01"}],["path",{d:"M10 14.01h.01"}],["path",{d:"M14 10.01h.01"}],["path",{d:"M14 14.01h.01"}],["path",{d:"M18 6v11.5"}],["path",{d:"M6 6v12"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=["svg",n,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M6 12h.01M18 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=["svg",n,[["path",{d:"M3 5v14"}],["path",{d:"M8 5v14"}],["path",{d:"M12 5v14"}],["path",{d:"M17 5v14"}],["path",{d:"M21 5v14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=["svg",n,[["path",{d:"M4 20h16"}],["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=["svg",n,[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=["svg",n,[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"}],["path",{d:"m11 7-3 5h4l-3 5"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=["svg",n,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=["svg",n,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=["svg",n,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=["svg",n,[["path",{d:"M10 17h.01"}],["path",{d:"M10 7v6"}],["path",{d:"M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"}],["path",{d:"M22 11v2"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=["svg",n,[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=["svg",n,[["path",{d:"M4.5 3h15"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"}],["path",{d:"M6 14h12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=["svg",n,[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=["svg",n,[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=["svg",n,[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M12 4v6"}],["path",{d:"M2 18h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=["svg",n,[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"}],["path",{d:"M3 18h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=["svg",n,[["path",{d:"M2 4v16"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10"}],["path",{d:"M2 17h20"}],["path",{d:"M6 8v9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=["svg",n,[["circle",{cx:"12.5",cy:"8.5",r:"2.5"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=["svg",n,[["path",{d:"M13 13v5"}],["path",{d:"M17 11.47V8"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"}],["path",{d:"M9 14.6V18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=["svg",n,[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1"}],["path",{d:"M9 12v6"}],["path",{d:"M13 12v6"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=["svg",n,[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["circle",{cx:"18",cy:"8",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=["svg",n,[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9"}],["path",{d:"M9 9h.01"}],["circle",{cx:"9",cy:"9",r:"7"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6"}],["circle",{cx:"20",cy:"16",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=["svg",n,[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=["svg",n,[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=["svg",n,[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M15 8h6"}],["path",{d:"M18 5v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=["svg",n,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=["svg",n,[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=["svg",n,[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1"}],["path",{d:"m22 15-3-3 3-3"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=["svg",n,[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1"}],["path",{d:"m2 9 3 3-3 3"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=["svg",n,[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1"}],["path",{d:"m9 22 3-3 3 3"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=["svg",n,[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1"}],["path",{d:"m15 2-3 3-3-3"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=["svg",n,[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=["svg",n,[["circle",{cx:"18.5",cy:"17.5",r:"3.5"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5"}],["circle",{cx:"15",cy:"5",r:"1"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=["svg",n,[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2"}],["path",{d:"M6 20h4"}],["path",{d:"M14 10h4"}],["path",{d:"M6 14h2v6"}],["path",{d:"M14 4h2v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=["svg",n,[["path",{d:"M10 10h4"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"}],["path",{d:"M 22 16 L 2 16"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=["svg",n,[["circle",{cx:"12",cy:"11.9",r:"2"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"}],["path",{d:"m8.9 10.1 1.4.8"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"}],["path",{d:"m15.1 10.1-1.4.8"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"}],["path",{d:"M12 13.9v1.6"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=["svg",n,[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=["svg",n,[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=["svg",n,[["circle",{cx:"9",cy:"9",r:"7"}],["circle",{cx:"15",cy:"15",r:"7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=["svg",n,[["path",{d:"M3 3h18"}],["path",{d:"M20 7H8"}],["path",{d:"M20 11H8"}],["path",{d:"M10 19h10"}],["path",{d:"M8 15h12"}],["path",{d:"M4 3v14"}],["circle",{cx:"4",cy:"19",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=["svg",n,[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=["svg",n,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=["svg",n,[["path",{d:"m17 17-5 5V12l-5 5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=["svg",n,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=["svg",n,[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=["svg",n,[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=["svg",n,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=["svg",n,[["circle",{cx:"11",cy:"13",r:"9"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"}],["path",{d:"m22 2-1.5 1.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=["svg",n,[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=["svg",n,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m8 13 4-7 4 7"}],["path",{d:"M9.1 11h5.7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=["svg",n,[["path",{d:"M12 6v7"}],["path",{d:"M16 8v3"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 8v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=["svg",n,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 9.5 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=["svg",n,[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=["svg",n,[["path",{d:"M12 17h2"}],["path",{d:"M12 22h2"}],["path",{d:"M12 2h2"}],["path",{d:"M18 22h1a1 1 0 0 0 1-1"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v1"}],["path",{d:"M20 15v2h-2"}],["path",{d:"M20 8v3"}],["path",{d:"M4 11V9"}],["path",{d:"M4 19.5V15"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=["svg",n,[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3 3 3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=["svg",n,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=["svg",n,[["path",{d:"M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=["svg",n,[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"10",cy:"8",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=["svg",n,[["path",{d:"m19 3 1 1"}],["path",{d:"m20 2-4.5 4.5"}],["path",{d:"M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"}],["circle",{cx:"14",cy:"8",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=["svg",n,[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=["svg",n,[["path",{d:"M10 2v8l3-3 3 3V2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=["svg",n,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=["svg",n,[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z"}],["path",{d:"m16 12 2 2 4-4"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=["svg",n,[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}],["path",{d:"M6 8h2"}],["path",{d:"M6 12h2"}],["path",{d:"M16 8h2"}],["path",{d:"M16 12h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=["svg",n,[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=["svg",n,[["path",{d:"M12 7v6"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=["svg",n,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M8 11h8"}],["path",{d:"M8 7h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=["svg",n,[["path",{d:"M10 13h4"}],["path",{d:"M12 6v7"}],["path",{d:"M16 8V6H8v2"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=["svg",n,[["path",{d:"M12 13V7"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{d:"m9 10 3-3 3 3"}],["path",{d:"m9 5 3-3 3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=["svg",n,[["path",{d:"M12 13V7"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=["svg",n,[["path",{d:"M15 13a3 3 0 1 0-6 0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["circle",{cx:"12",cy:"8",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=["svg",n,[["path",{d:"m14.5 7-5 5"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{d:"m9.5 7 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=["svg",n,[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=["svg",n,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=["svg",n,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=["svg",n,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=["svg",n,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=["svg",n,[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=["svg",n,[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"}],["path",{d:"M8 8v1"}],["path",{d:"M12 8v1"}],["path",{d:"M16 8v1"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2"}],["circle",{cx:"8",cy:"15",r:"2"}],["circle",{cx:"16",cy:"15",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=["svg",n,[["path",{d:"M12 6V2H8"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"}],["path",{d:"M2 12h2"}],["path",{d:"M9 11v2"}],["path",{d:"M15 11v2"}],["path",{d:"M20 12h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=["svg",n,[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M22 22 2 2"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"}],["path",{d:"M9 13v2"}],["path",{d:"M9.67 4H12v2.33"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=["svg",n,[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=["svg",n,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=["svg",n,[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=["svg",n,[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"}],["path",{d:"m7 16.5-4.74-2.85"}],["path",{d:"m7 16.5 5-3"}],["path",{d:"M7 16.5v5.17"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"}],["path",{d:"m17 16.5-5-3"}],["path",{d:"m17 16.5 4.74-2.85"}],["path",{d:"M17 16.5v5.17"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"}],["path",{d:"M12 8 7.26 5.15"}],["path",{d:"m12 8 4.74-2.85"}],["path",{d:"M12 13.5V8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=["svg",n,[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=["svg",n,[["path",{d:"M16 3h3v18h-3"}],["path",{d:"M8 21H5V3h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=["svg",n,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M12 13h4"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{d:"M12 8h8"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2"}],["circle",{cx:"16",cy:"13",r:".5"}],["circle",{cx:"18",cy:"3",r:".5"}],["circle",{cx:"20",cy:"21",r:".5"}],["circle",{cx:"20",cy:"8",r:".5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=["svg",n,[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m15.7 10.4-.9.4"}],["path",{d:"m9.2 13.2-.9.4"}],["path",{d:"m13.6 15.7-.4-.9"}],["path",{d:"m10.8 9.2-.4-.9"}],["path",{d:"m15.7 13.5-.9-.4"}],["path",{d:"m9.2 10.9-.9-.4"}],["path",{d:"m10.5 15.7.4-.9"}],["path",{d:"m13.1 9.2.4-.9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=["svg",n,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 9v6"}],["path",{d:"M16 15v6"}],["path",{d:"M16 3v6"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["path",{d:"M8 15v6"}],["path",{d:"M8 3v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=["svg",n,[["path",{d:"M12 12h.01"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=["svg",n,[["path",{d:"M12 11v4"}],["path",{d:"M14 13h-4"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"}],["path",{d:"M18 6v14"}],["path",{d:"M6 6v14"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=["svg",n,[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=["svg",n,[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=["svg",n,[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=["svg",n,[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"}],["path",{d:"M12 20v-8"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=["svg",n,[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M6 13H2"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=["svg",n,[["path",{d:"m8 2 1.88 1.88"}],["path",{d:"M14.12 3.88 16 2"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"}],["path",{d:"M12 20v-9"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5"}],["path",{d:"M6 13H2"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4"}],["path",{d:"M22 13h-4"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=["svg",n,[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"}],["path",{d:"M10 6h4"}],["path",{d:"M10 10h4"}],["path",{d:"M10 14h4"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=["svg",n,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["path",{d:"M9 22v-4h6v4"}],["path",{d:"M8 6h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=["svg",n,[["path",{d:"M4 6 2 7"}],["path",{d:"M10 6h4"}],["path",{d:"m22 7-2-1"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M6 19v2"}],["path",{d:"M18 21v-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=["svg",n,[["path",{d:"M8 6v6"}],["path",{d:"M15 6v6"}],["path",{d:"M2 12h19.6"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"}],["circle",{cx:"7",cy:"18",r:"2"}],["path",{d:"M9 18h5"}],["circle",{cx:"16",cy:"18",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=["svg",n,[["path",{d:"M10 3h.01"}],["path",{d:"M14 2h.01"}],["path",{d:"m2 9 20-5"}],["path",{d:"M12 12V6.5"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3"}],["path",{d:"M9 12v5"}],["path",{d:"M15 12v5"}],["path",{d:"M4 17h16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=["svg",n,[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"}],["path",{d:"M21 21v-2h-4"}],["path",{d:"M3 5h4V3"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=["svg",n,[["circle",{cx:"9",cy:"7",r:"2"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"}],["path",{d:"M16 13H3"}],["path",{d:"M16 17H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=["svg",n,[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"}],["path",{d:"M2 21h20"}],["path",{d:"M7 8v3"}],["path",{d:"M12 8v3"}],["path",{d:"M17 8v3"}],["path",{d:"M7 4h.01"}],["path",{d:"M12 4h.01"}],["path",{d:"M17 4h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=["svg",n,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18"}],["path",{d:"M16 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=["svg",n,[["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 14v8"}],["path",{d:"M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=["svg",n,[["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M16 2v4"}],["path",{d:"M18 22v-8"}],["path",{d:"M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m9 16 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=["svg",n,[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{d:"M16 2v4"}],["path",{d:"M8 2v4"}],["path",{d:"M3 10h5"}],["path",{d:"M17.5 17.5 16 16.3V14"}],["circle",{cx:"16",cy:"16",r:"6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=["svg",n,[["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"M16 2v4"}],["path",{d:"m16.9 15.2-.4-.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M8 14h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M8 18h.01"}],["path",{d:"M12 18h.01"}],["path",{d:"M16 18h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"}],["path",{d:"M3 10h18"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=["svg",n,[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"}],["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=["svg",n,[["path",{d:"M16 19h6"}],["path",{d:"M16 2v4"}],["path",{d:"M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=["svg",n,[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h7"}],["path",{d:"M21 10h-5.5"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"M10 16h4"}],["path",{d:"M12 14v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"M16 19h6"}],["path",{d:"M19 16v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M16 2v4"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["path",{d:"M17 14h-6"}],["path",{d:"M13 18H7"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 18h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=["svg",n,[["path",{d:"M16 2v4"}],["path",{d:"M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"}],["path",{d:"m22 22-1.875-1.875"}],["path",{d:"M3 10h18"}],["path",{d:"M8 2v4"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"}],["path",{d:"M3 10h18"}],["path",{d:"m17 22 5-5"}],["path",{d:"m17 17 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}],["path",{d:"m14 14-4 4"}],["path",{d:"m10 14 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=["svg",n,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=["svg",n,[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{cx:"12",cy:"13",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=["svg",n,[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"}],["path",{d:"M17.75 7 15 2.1"}],["path",{d:"M10.9 4.8 13 9"}],["path",{d:"m7.9 9.7 2 4.4"}],["path",{d:"M4.9 14.7 7 18.9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=["svg",n,[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"}],["path",{d:"M14 16.5V14"}],["path",{d:"M14 6.5v1.843"}],["path",{d:"M10 10v7.5"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=["svg",n,[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"}],["path",{d:"M14 6.5v10"}],["path",{d:"M10 7.5v10"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=["svg",n,[["path",{d:"M12 22v-4"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=["svg",n,[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{d:"M17 11h-.5"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M7 11h4"}],["path",{d:"M7 15h2.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=["svg",n,[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=["svg",n,[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=["svg",n,[["path",{d:"M10 2h4"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"}],["path",{d:"M7 14h.01"}],["path",{d:"M17 14h.01"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2"}],["path",{d:"M5 18v2"}],["path",{d:"M19 18v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=["svg",n,[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"}],["circle",{cx:"7",cy:"17",r:"2"}],["path",{d:"M9 17h6"}],["circle",{cx:"17",cy:"17",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=["svg",n,[["rect",{width:"4",height:"4",x:"2",y:"9"}],["rect",{width:"4",height:"10",x:"10",y:"9"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"}],["circle",{cx:"8",cy:"19",r:"2"}],["path",{d:"M10 19h12v-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=["svg",n,[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=["svg",n,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=["svg",n,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["circle",{cx:"18",cy:"12",r:"3"}],["path",{d:"M21 9v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=["svg",n,[["path",{d:"m3 15 4-8 4 8"}],["path",{d:"M4 13h6"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=["svg",n,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["circle",{cx:"8",cy:"10",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"10",r:"2"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=["svg",n,[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"}],["path",{d:"M2 12a9 9 0 0 1 8 8"}],["path",{d:"M2 16a5 5 0 0 1 4 4"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=["svg",n,[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"}],["path",{d:"M18 11V4H6v7"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"}],["path",{d:"M22 11V9"}],["path",{d:"M2 11V9"}],["path",{d:"M6 4V2"}],["path",{d:"M18 4V2"}],["path",{d:"M10 4V2"}],["path",{d:"M14 4V2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=["svg",n,[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"}],["path",{d:"M8 14v.5"}],["path",{d:"M16 14v.5"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=["svg",n,[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{d:"M2 21v-4"}],["path",{d:"M7 9h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=["svg",n,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=["svg",n,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=["svg",n,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h3"}],["path",{d:"M7 6h12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=["svg",n,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 11h8"}],["path",{d:"M7 16h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=["svg",n,[["path",{d:"M11 13v4"}],["path",{d:"M15 5v4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=["svg",n,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16h8"}],["path",{d:"M7 11h12"}],["path",{d:"M7 6h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=["svg",n,[["path",{d:"M9 5v4"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1"}],["path",{d:"M9 15v2"}],["path",{d:"M17 3v2"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1"}],["path",{d:"M17 13v3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=["svg",n,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=["svg",n,[["path",{d:"M13 17V9"}],["path",{d:"M18 17v-3"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17V5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=["svg",n,[["path",{d:"M13 17V9"}],["path",{d:"M18 17V5"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=["svg",n,[["path",{d:"M11 13H7"}],["path",{d:"M19 9h-4"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=["svg",n,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=["svg",n,[["path",{d:"M10 6h8"}],["path",{d:"M12 16h6"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M8 11h7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=["svg",n,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"m19 9-5 5-4-4-3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=["svg",n,[["path",{d:"m13.11 7.664 1.78 2.672"}],["path",{d:"m14.162 12.788-3.324 1.424"}],["path",{d:"m20 4-6.06 1.515"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["circle",{cx:"12",cy:"6",r:"2"}],["circle",{cx:"16",cy:"12",r:"2"}],["circle",{cx:"9",cy:"15",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=["svg",n,[["path",{d:"M12 20V10"}],["path",{d:"M18 20v-4"}],["path",{d:"M6 20V4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=["svg",n,[["line",{x1:"12",x2:"12",y1:"20",y2:"10"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=["svg",n,[["line",{x1:"18",x2:"18",y1:"20",y2:"10"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=["svg",n,[["path",{d:"M12 16v5"}],["path",{d:"M16 14v7"}],["path",{d:"M20 10v11"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"}],["path",{d:"M4 18v3"}],["path",{d:"M8 14v7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=["svg",n,[["path",{d:"M8 6h10"}],["path",{d:"M6 12h9"}],["path",{d:"M11 18h7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=["svg",n,[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=["svg",n,[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=["svg",n,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=["svg",n,[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=["svg",n,[["path",{d:"M20 6 9 17l-5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=["svg",n,[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"}],["path",{d:"M6 17h12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=["svg",n,[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=["svg",n,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=["svg",n,[["path",{d:"m17 18-6-6 6-6"}],["path",{d:"M7 6v12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=["svg",n,[["path",{d:"m7 18 6-6-6-6"}],["path",{d:"M17 6v12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=["svg",n,[["path",{d:"m15 18-6-6 6-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=["svg",n,[["path",{d:"m9 18 6-6-6-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=["svg",n,[["path",{d:"m18 15-6-6-6 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=["svg",n,[["path",{d:"m7 20 5-5 5 5"}],["path",{d:"m7 4 5 5 5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=["svg",n,[["path",{d:"m7 6 5 5 5-5"}],["path",{d:"m7 13 5 5 5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=["svg",n,[["path",{d:"m18 8 4 4-4 4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=["svg",n,[["path",{d:"m9 7-5 5 5 5"}],["path",{d:"m15 7 5 5-5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=["svg",n,[["path",{d:"m11 17-5-5 5-5"}],["path",{d:"m18 17-5-5 5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=["svg",n,[["path",{d:"m20 17-5-5 5-5"}],["path",{d:"m4 17 5-5-5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=["svg",n,[["path",{d:"m6 17 5-5-5-5"}],["path",{d:"m13 17 5-5-5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=["svg",n,[["path",{d:"m7 15 5 5 5-5"}],["path",{d:"m7 9 5-5 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=["svg",n,[["path",{d:"m17 11-5-5-5 5"}],["path",{d:"m17 18-5-5-5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=["svg",n,[["path",{d:"M10 9h4"}],["path",{d:"M12 7v5"}],["path",{d:"M14 22v-4a2 2 0 0 0-4 0v4"}],["path",{d:"M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"}],["path",{d:"m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=["svg",n,[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=["svg",n,[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5"}],["path",{d:"M7 12v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 12H8"}],["path",{d:"m12 8-4 4 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=["svg",n,[["path",{d:"M2 12a10 10 0 1 1 10 10"}],["path",{d:"m2 22 10-10"}],["path",{d:"M8 22H2v-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=["svg",n,[["path",{d:"M12 22a10 10 0 1 1 10-10"}],["path",{d:"M22 22 12 12"}],["path",{d:"M22 16v6h-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=["svg",n,[["path",{d:"M2 8V2h6"}],["path",{d:"m2 2 10 10"}],["path",{d:"M12 2A10 10 0 1 1 2 12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=["svg",n,[["path",{d:"M22 12A10 10 0 1 1 12 2"}],["path",{d:"M22 2 12 12"}],["path",{d:"M16 2h6v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=["svg",n,[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=["svg",n,[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=["svg",n,[["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 18V6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=["svg",n,[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M17 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=["svg",n,[["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=["svg",n,[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=["svg",n,[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{d:"M12 8v8"}],["path",{d:"M16 12H8"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=["svg",n,[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M13.4 10.6 19 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=["svg",n,[["path",{d:"m2 2 20 20"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m5 5 14 14"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.34"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polygon",{points:"10 8 16 12 10 16 10 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=["svg",n,[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["rect",{width:"6",height:"6",x:"9",y:"9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=["svg",n,[["path",{d:"M18 20a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"10",r:"4"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4"}],["circle",{cx:"15",cy:"15",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=["svg",n,[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34"}],["path",{d:"m14 10-5.5 5.5"}],["path",{d:"M14 17.85V10H6.15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=["svg",n,[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"}],["path",{d:"m6.2 5.3 3.1 3.9"}],["path",{d:"m12.4 3.4 3.1 4"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m9 14 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4"}],["path",{d:"M21 14H11"}],["path",{d:"m15 10-4 4 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M12 11h4"}],["path",{d:"M12 16h4"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=["svg",n,[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"}],["path",{d:"m17 10 4 4-4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1"}],["path",{d:"M8 18h1"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 14h6"}],["path",{d:"M12 17v-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"M9 12v-1h6v1"}],["path",{d:"M11 17h2"}],["path",{d:"M12 11v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}],["path",{d:"m15 11-6 6"}],["path",{d:"m9 11 6 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=["svg",n,[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 14.5 16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 12 16.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 9.5 16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 8 14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 7.5 12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=["svg",n,[["path",{d:"M12.338 21.994A10 10 0 1 1 21.925 13.227"}],["path",{d:"M12 6v6l2 1"}],["path",{d:"m14 18 4 4 4-4"}],["path",{d:"M18 14v8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=["svg",n,[["path",{d:"M13.228 21.925A10 10 0 1 1 21.994 12.338"}],["path",{d:"M12 6v6l1.562.781"}],["path",{d:"m14 18 4-4 4 4"}],["path",{d:"M18 22v-8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16 14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=["svg",n,[["circle",{cx:"12",cy:"17",r:"3"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"}],["path",{d:"m15.7 18.4-.9-.3"}],["path",{d:"m9.2 15.9-.9-.3"}],["path",{d:"m10.6 20.7.3-.9"}],["path",{d:"m13.1 14.2.3-.9"}],["path",{d:"m13.6 20.7-.4-1"}],["path",{d:"m10.8 14.3-.4-1"}],["path",{d:"m8.3 18.6 1-.4"}],["path",{d:"m14.7 15.8 1-.4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=["svg",n,[["path",{d:"M12 13v8l-4-4"}],["path",{d:"m12 21 4-4"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=["svg",n,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 19v1"}],["path",{d:"M8 14v1"}],["path",{d:"M16 19v1"}],["path",{d:"M16 14v1"}],["path",{d:"M12 21v1"}],["path",{d:"M12 16v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=["svg",n,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 17H7"}],["path",{d:"M17 21H9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=["svg",n,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v2"}],["path",{d:"M8 14v2"}],["path",{d:"M16 20h.01"}],["path",{d:"M8 20h.01"}],["path",{d:"M12 16v2"}],["path",{d:"M12 22h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=["svg",n,[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"}],["path",{d:"m13 12-3 5h4l-3 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=["svg",n,[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M11 20v2"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=["svg",n,[["path",{d:"M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"}],["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=["svg",n,[["path",{d:"m2 2 20 20"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=["svg",n,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m9.2 22 3-7"}],["path",{d:"m9 13-3 7"}],["path",{d:"m17 13-3 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=["svg",n,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M16 14v6"}],["path",{d:"M8 14v6"}],["path",{d:"M12 16v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=["svg",n,[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"M8 15h.01"}],["path",{d:"M8 19h.01"}],["path",{d:"M12 17h.01"}],["path",{d:"M12 21h.01"}],["path",{d:"M16 15h.01"}],["path",{d:"M16 19h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=["svg",n,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"}],["path",{d:"M11 20v2"}],["path",{d:"M7 19v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=["svg",n,[["path",{d:"M12 2v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"M20 12h2"}],["path",{d:"m19.07 4.93-1.41 1.41"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=["svg",n,[["path",{d:"M12 13v8"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"}],["path",{d:"m8 17 4-4 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=["svg",n,[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=["svg",n,[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=["svg",n,[["path",{d:"M16.17 7.83 2 22"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"}],["path",{d:"m7.83 7.83 8.34 8.34"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=["svg",n,[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"}],["path",{d:"M12 17.66L12 22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=["svg",n,[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=["svg",n,[["polyline",{points:"16 18 22 12 16 6"}],["polyline",{points:"8 6 2 12 8 18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=["svg",n,[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5"}],["polyline",{points:"22 8.5 12 15.5 2 8.5"}],["polyline",{points:"2 15.5 12 8.5 22 15.5"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=["svg",n,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=["svg",n,[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=["svg",n,[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=["svg",n,[["circle",{cx:"8",cy:"8",r:"6"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18"}],["path",{d:"M7 6h1v4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7.5 3v18"}],["path",{d:"M12 3v18"}],["path",{d:"M16.5 3v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=["svg",n,[["path",{d:"M10 18H5a3 3 0 0 1-3-3v-1"}],["path",{d:"M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"m7 21 3-3-3-3"}],["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=["svg",n,[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=["svg",n,[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=["svg",n,[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=["svg",n,[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h2"}],["path",{d:"M12 18h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=["svg",n,[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"}],["path",{d:"M20 16a8 8 0 1 0-16 0"}],["path",{d:"M12 4v4"}],["path",{d:"M10 4h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=["svg",n,[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=["svg",n,[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1"}],["path",{d:"M17 14v7"}],["path",{d:"M7 14v7"}],["path",{d:"M17 3v3"}],["path",{d:"M7 3v3"}],["path",{d:"M10 14 2.3 6.3"}],["path",{d:"m14 6 7.7 7.7"}],["path",{d:"m8 6 8 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=["svg",n,[["path",{d:"M16 2v2"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"12",r:"4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=["svg",n,[["path",{d:"M16 2v2"}],["path",{d:"M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"11",r:"3"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=["svg",n,[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"}],["path",{d:"M10 21.9V14L2.1 9.1"}],["path",{d:"m10 14 11.9-6.9"}],["path",{d:"M14 19.8v-8.1"}],["path",{d:"M18 17.5V9.4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=["svg",n,[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"}],["path",{d:"M8.5 8.5v.01"}],["path",{d:"M16 15.5v.01"}],["path",{d:"M12 12v.01"}],["path",{d:"M11 17v.01"}],["path",{d:"M7 14v.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=["svg",n,[["path",{d:"M2 12h20"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"}],["path",{d:"m4 8 16-4"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=["svg",n,[["path",{d:"m12 15 2 2 4-4"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=["svg",n,[["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=["svg",n,[["line",{x1:"15",x2:"15",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=["svg",n,[["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=["svg",n,[["line",{x1:"12",x2:"18",y1:"12",y2:"18"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=["svg",n,[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=["svg",n,[["polyline",{points:"9 10 4 15 9 20"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=["svg",n,[["polyline",{points:"15 10 20 15 15 20"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=["svg",n,[["polyline",{points:"14 15 9 20 4 15"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=["svg",n,[["polyline",{points:"14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=["svg",n,[["polyline",{points:"10 15 15 20 20 15"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=["svg",n,[["polyline",{points:"10 9 15 4 20 9"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=["svg",n,[["polyline",{points:"9 14 4 9 9 4"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=["svg",n,[["polyline",{points:"15 14 20 9 15 4"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=["svg",n,[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1"}],["path",{d:"M15 2v2"}],["path",{d:"M15 20v2"}],["path",{d:"M2 15h2"}],["path",{d:"M2 9h2"}],["path",{d:"M20 15h2"}],["path",{d:"M20 9h2"}],["path",{d:"M9 2v2"}],["path",{d:"M9 20v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=["svg",n,[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=["svg",n,[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=["svg",n,[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=["svg",n,[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=["svg",n,[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=["svg",n,[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"}],["path",{d:"M10 22v-8L2.25 9.15"}],["path",{d:"m10 14 11.77-6.87"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=["svg",n,[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"}],["path",{d:"M5 8h14"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}],["path",{d:"m12 8 1-6h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=["svg",n,[["circle",{cx:"12",cy:"12",r:"8"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=["svg",n,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=["svg",n,[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M2 6h4"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=["svg",n,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69"}],["path",{d:"M21 9.3V5"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{d:"M12 12v4h4"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=["svg",n,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84"}],["path",{d:"M21 5V8"}],["path",{d:"M21 12L18 17H22L19 22"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=["svg",n,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=["svg",n,[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"}],["path",{d:"m12 9 6 6"}],["path",{d:"m18 9-6 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=["svg",n,[["circle",{cx:"12",cy:"4",r:"2"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=["svg",n,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86"}],["path",{d:"m6.41 6.41 11.18 11.18"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=["svg",n,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=["svg",n,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"}],["path",{d:"M9.2 9.2h.01"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"M14.7 14.8h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=["svg",n,[["path",{d:"M12 8v8"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=["svg",n,[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M15 9h.01"}],["path",{d:"M9 15h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 16h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M16 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"M8 8h.01"}],["path",{d:"M8 12h.01"}],["path",{d:"M8 16h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=["svg",n,[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 14h.01"}],["path",{d:"M15 6h.01"}],["path",{d:"M18 9h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=["svg",n,[["path",{d:"M12 3v14"}],["path",{d:"M5 10h14"}],["path",{d:"M5 21h14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"5"}],["path",{d:"M12 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=["svg",n,[["circle",{cx:"12",cy:"6",r:"1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12"}],["circle",{cx:"12",cy:"18",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=["svg",n,[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3"}],["path",{d:"m2 2 20 20"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=["svg",n,[["path",{d:"m10 16 1.5 1.5"}],["path",{d:"m14 8-1.5-1.5"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"}],["path",{d:"m16.5 10.5 1 1"}],["path",{d:"m17 6-2.891-2.891"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6"}],["path",{d:"m20 9 .891.891"}],["path",{d:"M3.109 14.109 4 15"}],["path",{d:"m6.5 12.5 1 1"}],["path",{d:"m7 18 2.891 2.891"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=["svg",n,[["path",{d:"M2 8h20"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 16h12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=["svg",n,[["path",{d:"M11.25 16.25h1.5L12 17z"}],["path",{d:"M16 14v.5"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"}],["path",{d:"M8 14v.5"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=["svg",n,[["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=["svg",n,[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=["svg",n,[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"}],["path",{d:"M2 20h20"}],["path",{d:"M14 12v.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=["svg",n,[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14"}],["path",{d:"M2 20h3"}],["path",{d:"M13 20h9"}],["path",{d:"M10 12v.01"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=["svg",n,[["circle",{cx:"12.1",cy:"12.1",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=["svg",n,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=["svg",n,[["path",{d:"m12.99 6.74 1.93 3.44"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0"}],["path",{d:"m21 21-2.16-3.84"}],["path",{d:"m3 21 8.02-14.26"}],["circle",{cx:"12",cy:"5",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=["svg",n,[["path",{d:"M10 11h.01"}],["path",{d:"M14 6h.01"}],["path",{d:"M18 6h.01"}],["path",{d:"M6.5 13.1h.01"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=["svg",n,[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z"}],["path",{d:"M18 6h4"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"}],["path",{d:"m5 10-2 8"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8"}],["path",{d:"m7 18 2-8"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=["svg",n,[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=["svg",n,[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=["svg",n,[["path",{d:"m2 2 8 8"}],["path",{d:"m22 2-8 8"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5"}],["path",{d:"M7 13.4v7.9"}],["path",{d:"M12 14v8"}],["path",{d:"M17 13.4v7.9"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=["svg",n,[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=["svg",n,[["path",{d:"M14.4 14.4 9.6 9.6"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"}],["path",{d:"m21.5 21.5-1.4-1.4"}],["path",{d:"M3.9 3.9 2.5 2.5"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=["svg",n,[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=["svg",n,[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=["svg",n,[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=["svg",n,[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a7 7 0 1 0 10 10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=["svg",n,[["circle",{cx:"11.5",cy:"12.5",r:"3.5"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=["svg",n,[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=["svg",n,[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=["svg",n,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=["svg",n,[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=["svg",n,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=["svg",n,[["line",{x1:"5",x2:"19",y1:"9",y2:"9"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=["svg",n,[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"}],["path",{d:"M22 21H7"}],["path",{d:"m5 11 9 9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=["svg",n,[["path",{d:"m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"}],["path",{d:"M6 8v1"}],["path",{d:"M10 8v1"}],["path",{d:"M14 8v1"}],["path",{d:"M18 8v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=["svg",n,[["path",{d:"M4 10h12"}],["path",{d:"M4 14h9"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=["svg",n,[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=["svg",n,[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=["svg",n,[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=["svg",n,[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=["svg",n,[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=["svg",n,[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M17 18h1"}],["path",{d:"M12 18h1"}],["path",{d:"M7 18h1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=["svg",n,[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"}],["path",{d:"M12 12v.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=["svg",n,[["polygon",{points:"13 19 22 12 13 5 13 19"}],["polygon",{points:"2 19 11 12 2 5 2 19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=["svg",n,[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"}],["path",{d:"M16 8 2 22"}],["path",{d:"M17.5 15H9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=["svg",n,[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M6 8h4"}],["path",{d:"M6 18h4"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}],["path",{d:"M14 8h4"}],["path",{d:"M14 18h4"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=["svg",n,[["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M12 2v4"}],["path",{d:"m6.8 15-3.5 2"}],["path",{d:"m20.7 7-3.5 2"}],["path",{d:"M6.8 9 3.3 7"}],["path",{d:"m20.7 17-3.5-2"}],["path",{d:"m9 22 3-8 3 8"}],["path",{d:"M8 22h8"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=["svg",n,[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=["svg",n,[["path",{d:"M10 12v-1"}],["path",{d:"M10 18v-2"}],["path",{d:"M10 7V6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"}],["circle",{cx:"10",cy:"20",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"3",cy:"17",r:"1"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3"}],["circle",{cx:"9",cy:"17",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=["svg",n,[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 18 4-4"}],["path",{d:"M8 10v8h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=["svg",n,[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=["svg",n,[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"}],["path",{d:"M7 17v5"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-2"}],["path",{d:"M12 18v-4"}],["path",{d:"M16 18v-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 18v-1"}],["path",{d:"M12 18v-6"}],["path",{d:"M16 18v-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=["svg",n,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3 15 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m9 15 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=["svg",n,[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"8",cy:"16",r:"6"}],["path",{d:"M9.5 17.5 8 16.25V14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m5 12-3 3 3 3"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=["svg",n,[["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=["svg",n,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m3.2 12.9-.9-.4"}],["path",{d:"m3.2 15.1-.9.4"}],["path",{d:"M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"}],["path",{d:"m4.9 11.2-.4-.9"}],["path",{d:"m4.9 16.8-.4.9"}],["path",{d:"m7.5 10.3-.4.9"}],["path",{d:"m7.5 17.7-.4-.9"}],["path",{d:"m9.7 12.5-.9.4"}],["path",{d:"m9.7 15.5-.9-.4"}],["circle",{cx:"6",cy:"14",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2"}],["path",{d:"M10 12h2v6"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 18v-6"}],["path",{d:"m9 15 3 3 3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"10",cy:"12",r:"2"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 15h10"}],["path",{d:"m9 18 3-3-3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"m10 10-4.5 4.5"}],["path",{d:"m9 11 1 1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["circle",{cx:"10",cy:"16",r:"2"}],["path",{d:"m16 10-4.5 4.5"}],["path",{d:"m15 11 1 1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=["svg",n,[["circle",{cx:"14",cy:"16",r:"2"}],["circle",{cx:"6",cy:"18",r:"2"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5"}],["path",{d:"M8 18v-7.7L16 9v7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=["svg",n,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"}],["path",{d:"m5 11-3 3"}],["path",{d:"m5 17-3-3h10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=["svg",n,[["path",{d:"m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"}],["path",{d:"M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["path",{d:"M8 18h1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=["svg",n,[["path",{d:"M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M3 15h6"}],["path",{d:"M6 12v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=["svg",n,[["path",{d:"M12 17h.01"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=["svg",n,[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M16 14a2 2 0 0 0-2 2"}],["path",{d:"M20 14a2 2 0 0 1 2 2"}],["path",{d:"M20 22a2 2 0 0 0 2-2"}],["path",{d:"M16 22a2 2 0 0 1-2-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5"}],["path",{d:"M13.3 16.3 15 18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=["svg",n,[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 18-1.5-1.5"}],["circle",{cx:"5",cy:"14",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 12h8"}],["path",{d:"M10 11v2"}],["path",{d:"M8 17h8"}],["path",{d:"M14 16v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=["svg",n,[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=["svg",n,[["path",{d:"m10 18 3-3-3-3"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 16 2-2-2-2"}],["path",{d:"M12 18h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M2 13v-1h6v1"}],["path",{d:"M5 12v6"}],["path",{d:"M4 18h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M9 13v-1h6v1"}],["path",{d:"M12 12v6"}],["path",{d:"M11 18h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M12 12v6"}],["path",{d:"m15 15-3-3-3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m10 11 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 15h.01"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3"}],["path",{d:"M15 12a5 5 0 0 1 0 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=["svg",n,[["path",{d:"M11 11a5 5 0 0 1 0 6"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"}],["path",{d:"M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=["svg",n,[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m8 12.5-5 5"}],["path",{d:"m3 12.5 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{d:"m14.5 12.5-5 5"}],["path",{d:"m9.5 12.5 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=["svg",n,[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=["svg",n,[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 3v18"}],["path",{d:"M3 7.5h4"}],["path",{d:"M3 12h18"}],["path",{d:"M3 16.5h4"}],["path",{d:"M17 3v18"}],["path",{d:"M17 7.5h4"}],["path",{d:"M17 16.5h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=["svg",n,[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=["svg",n,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=["svg",n,[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{d:"M2 12a10 10 0 0 1 18-6"}],["path",{d:"M2 16h.01"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=["svg",n,[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"}],["path",{d:"M9 18h8"}],["path",{d:"M18 3h-3"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11"}],["path",{d:"M5 13h4"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=["svg",n,[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=["svg",n,[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=["svg",n,[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"}],["path",{d:"M18 12v.5"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=["svg",n,[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11"}],["path",{d:"M4 22V4"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=["svg",n,[["path",{d:"M17 22V2L7 7l10 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=["svg",n,[["path",{d:"M7 22V2l10 5-10 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=["svg",n,[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=["svg",n,[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"}],["path",{d:"m5 22 14-4"}],["path",{d:"m5 18 14 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=["svg",n,[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=["svg",n,[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=["svg",n,[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=["svg",n,[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542"}],["path",{d:"M10 2v2.343"}],["path",{d:"M14 2v6.343"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h9"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=["svg",n,[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=["svg",n,[["path",{d:"M10 2v7.31"}],["path",{d:"M14 9.3V1.99"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0"}],["path",{d:"M5.52 16h12.96"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=["svg",n,[["path",{d:"m3 7 5 5-5 5V7"}],["path",{d:"m21 7-5 5 5 5V7"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=["svg",n,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"}],["path",{d:"M12 20v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 2v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=["svg",n,[["path",{d:"m17 3-5 5-5-5h10"}],["path",{d:"m17 21-5-5-5 5h10"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=["svg",n,[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=["svg",n,[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M12 10v12"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=["svg",n,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"}],["path",{d:"M12 7.5V9"}],["path",{d:"M7.5 12H9"}],["path",{d:"M16.5 12H15"}],["path",{d:"M12 16.5V15"}],["path",{d:"m8 8 1.88 1.88"}],["path",{d:"M14.12 9.88 16 8"}],["path",{d:"m8 16 1.88-1.88"}],["path",{d:"M14.12 14.12 16 16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=["svg",n,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=["svg",n,[["path",{d:"M2 12h6"}],["path",{d:"M22 12h-6"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 9-3 3 3 3"}],["path",{d:"m5 15 3-3-3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=["svg",n,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3-3-3 3"}],["path",{d:"m15 5-3 3-3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=["svg",n,[["circle",{cx:"15",cy:"19",r:"2"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"}],["path",{d:"M15 11v-1"}],["path",{d:"M15 17v-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=["svg",n,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9 13 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=["svg",n,[["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"}],["path",{d:"M16 14v2l1 1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=["svg",n,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M2 10h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=["svg",n,[["path",{d:"M10 10.5 8 13l2 2.5"}],["path",{d:"m14 10.5 2 2.5-2 2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=["svg",n,[["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"}],["path",{d:"m21.7 19.4-.9-.3"}],["path",{d:"m15.2 16.9-.9-.3"}],["path",{d:"m16.6 21.7.3-.9"}],["path",{d:"m19.1 15.2.3-.9"}],["path",{d:"m19.6 21.7-.4-1"}],["path",{d:"m16.8 15.3-.4-1"}],["path",{d:"m14.3 19.6 1-.4"}],["path",{d:"m20.7 16.8 1-.4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=["svg",n,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=["svg",n,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m15 13-3 3-3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=["svg",n,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"}],["circle",{cx:"13",cy:"12",r:"2"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8"}],["circle",{cx:"20",cy:"19",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=["svg",n,[["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M14 13h3"}],["path",{d:"M7 13h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=["svg",n,[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=["svg",n,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"}],["path",{d:"M2 13h10"}],["path",{d:"m9 16 3-3-3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=["svg",n,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["path",{d:"M8 10v4"}],["path",{d:"M12 10v2"}],["path",{d:"M16 10v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=["svg",n,[["circle",{cx:"16",cy:"20",r:"2"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"}],["path",{d:"m22 14-4.5 4.5"}],["path",{d:"m21 15 1 1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=["svg",n,[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=["svg",n,[["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=["svg",n,[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"}],["circle",{cx:"14",cy:"15",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=["svg",n,[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=["svg",n,[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"}],["path",{d:"M2 13h10"}],["path",{d:"m5 10-3 3 3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=["svg",n,[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=["svg",n,[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=["svg",n,[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"}],["circle",{cx:"12",cy:"13",r:"2"}],["path",{d:"M12 15v5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=["svg",n,[["circle",{cx:"11.5",cy:"12.5",r:"2.5"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M13.3 14.3 15 16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=["svg",n,[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"}],["path",{d:"m21 21-1.9-1.9"}],["circle",{cx:"17",cy:"17",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=["svg",n,[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"}],["path",{d:"m8 16 3-3-3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=["svg",n,[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"}],["path",{d:"M12 10v4h4"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5"}],["path",{d:"M22 22v-4h-4"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=["svg",n,[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=["svg",n,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"M12 10v6"}],["path",{d:"m9 13 3-3 3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=["svg",n,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}],["path",{d:"m9.5 10.5 5 5"}],["path",{d:"m14.5 10.5-5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=["svg",n,[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=["svg",n,[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=["svg",n,[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"}],["path",{d:"M16 17h4"}],["path",{d:"M4 13h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=["svg",n,[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5"}],["circle",{cx:"13",cy:"19",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=["svg",n,[["polyline",{points:"15 17 20 12 15 7"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=["svg",n,[["line",{x1:"22",x2:"2",y1:"6",y2:"6"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=["svg",n,[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=["svg",n,[["line",{x1:"3",x2:"15",y1:"22",y2:"22"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=["svg",n,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=["svg",n,[["path",{d:"M2 7v10"}],["path",{d:"M6 5v14"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=["svg",n,[["path",{d:"M2 3v18"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2"}],["path",{d:"M22 3v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=["svg",n,[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2"}],["path",{d:"M4 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}],["path",{d:"M19 21h1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=["svg",n,[["path",{d:"M7 2h10"}],["path",{d:"M5 6h14"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=["svg",n,[["path",{d:"M3 2h18"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2"}],["path",{d:"M3 22h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=["svg",n,[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=["svg",n,[["line",{x1:"6",x2:"10",y1:"12",y2:"12"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=["svg",n,[["path",{d:"m12 14 4-4"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=["svg",n,[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"}],["path",{d:"m16 16 6-6"}],["path",{d:"m8 8 6-6"}],["path",{d:"m9 7 8 8"}],["path",{d:"m21 11-8-8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=["svg",n,[["path",{d:"M6 3h12l4 6-10 13L2 9Z"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6"}],["path",{d:"M2 9h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=["svg",n,[["path",{d:"M9 10h.01"}],["path",{d:"M15 10h.01"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=["svg",n,[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1"}],["path",{d:"M12 8v13"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=["svg",n,[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=["svg",n,[["line",{x1:"6",x2:"6",y1:"3",y2:"15"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M18 9a9 9 0 0 1-9 9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=["svg",n,[["circle",{cx:"12",cy:"12",r:"3"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=["svg",n,[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=["svg",n,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}],["path",{d:"m15 9-3-3 3-3"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9"}],["path",{d:"m9 15 3 3-3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=["svg",n,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=["svg",n,[["circle",{cx:"12",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["circle",{cx:"18",cy:"6",r:"3"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{d:"M12 12v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=["svg",n,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v6"}],["circle",{cx:"5",cy:"18",r:"3"}],["path",{d:"M12 3v18"}],["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=["svg",n,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=["svg",n,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["circle",{cx:"19",cy:"18",r:"3"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=["svg",n,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"m21 3-6 6"}],["path",{d:"m21 9-6-6"}],["path",{d:"M18 11.5V15"}],["circle",{cx:"18",cy:"18",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=["svg",n,[["circle",{cx:"5",cy:"6",r:"3"}],["path",{d:"M5 9v12"}],["path",{d:"m15 9-3-3 3-3"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3"}],["path",{d:"M19 15v6"}],["path",{d:"M22 18h-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=["svg",n,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M6 9v12"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=["svg",n,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M18 6V5"}],["path",{d:"M18 11v-1"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=["svg",n,[["circle",{cx:"18",cy:"18",r:"3"}],["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=["svg",n,[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=["svg",n,[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=["svg",n,[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=["svg",n,[["circle",{cx:"6",cy:"15",r:"4"}],["circle",{cx:"18",cy:"15",r:"4"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=["svg",n,[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"}],["path",{d:"M2 12h8.5"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=["svg",n,[["path",{d:"M12 13V2l8 4-8 4"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=["svg",n,[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}],["path",{d:"M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=["svg",n,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=["svg",n,[["path",{d:"M22 5V2l-5.89 5.89"}],["circle",{cx:"16.6",cy:"15.89",r:"3"}],["circle",{cx:"8.11",cy:"7.4",r:"3"}],["circle",{cx:"12.35",cy:"11.65",r:"3"}],["circle",{cx:"13.91",cy:"5.85",r:"3"}],["circle",{cx:"18.15",cy:"10.09",r:"3"}],["circle",{cx:"6.56",cy:"13.2",r:"3"}],["circle",{cx:"10.8",cy:"17.44",r:"3"}],["circle",{cx:"5",cy:"19",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=["svg",n,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=["svg",n,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"M16 19h6"}],["path",{d:"M19 22v-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=["svg",n,[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"}],["path",{d:"m16 16 5 5"}],["path",{d:"m16 21 5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}],["path",{d:"M12 3v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}],["path",{d:"M9 3v18"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=["svg",n,[["circle",{cx:"12",cy:"9",r:"1"}],["circle",{cx:"19",cy:"9",r:"1"}],["circle",{cx:"5",cy:"9",r:"1"}],["circle",{cx:"12",cy:"15",r:"1"}],["circle",{cx:"19",cy:"15",r:"1"}],["circle",{cx:"5",cy:"15",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=["svg",n,[["circle",{cx:"9",cy:"12",r:"1"}],["circle",{cx:"9",cy:"5",r:"1"}],["circle",{cx:"9",cy:"19",r:"1"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"15",cy:"5",r:"1"}],["circle",{cx:"15",cy:"19",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=["svg",n,[["circle",{cx:"12",cy:"5",r:"1"}],["circle",{cx:"19",cy:"5",r:"1"}],["circle",{cx:"5",cy:"5",r:"1"}],["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}],["circle",{cx:"12",cy:"19",r:"1"}],["circle",{cx:"19",cy:"19",r:"1"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=["svg",n,[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=["svg",n,[["path",{d:"m11.9 12.1 4.514-4.514"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"}],["path",{d:"m6 16 2 2"}],["path",{d:"M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=["svg",n,[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"}],["path",{d:"m8.5 16.5-1-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=["svg",n,[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}],["path",{d:"m18 15 4-4"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=["svg",n,[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 16 6 6"}],["circle",{cx:"16",cy:"9",r:"2.9"}],["circle",{cx:"6",cy:"5",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=["svg",n,[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 15 6 6"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=["svg",n,[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"}],["path",{d:"m2 13 6 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=["svg",n,[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=["svg",n,[["path",{d:"M12 3V2"}],["path",{d:"M5 10a7.1 7.1 0 0 1 14 0"}],["path",{d:"M4 10h16"}],["path",{d:"M2 14h12a2 2 0 1 1 0 4h-2"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18"}],["path",{d:"M5 14v7H2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=["svg",n,[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=["svg",n,[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{d:"m21 3 1 11h-2"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{d:"M3 4h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=["svg",n,[["path",{d:"M12 2v8"}],["path",{d:"m16 6-4 4-4-4"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=["svg",n,[["path",{d:"m16 6-4-4-4 4"}],["path",{d:"M12 2v8"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6 18h.01"}],["path",{d:"M10 18h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=["svg",n,[["line",{x1:"22",x2:"2",y1:"12",y2:"12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=["svg",n,[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=["svg",n,[["line",{x1:"4",x2:"20",y1:"9",y2:"9"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=["svg",n,[["path",{d:"m5.2 6.2 1.4 1.4"}],["path",{d:"M2 13h2"}],["path",{d:"M20 13h2"}],["path",{d:"m17.4 7.6 1.4-1.4"}],["path",{d:"M22 17H2"}],["path",{d:"M22 21H2"}],["path",{d:"M16 13a4 4 0 0 0-8 0"}],["path",{d:"M12 5V2.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=["svg",n,[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"}],["path",{d:"M7.5 12h9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=["svg",n,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"m17 12 3-2v8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=["svg",n,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=["svg",n,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=["svg",n,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 10v4h4"}],["path",{d:"M21 10v8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=["svg",n,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["path",{d:"M17 13v-3h4"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=["svg",n,[["path",{d:"M4 12h8"}],["path",{d:"M4 18V6"}],["path",{d:"M12 18V6"}],["circle",{cx:"19",cy:"16",r:"2"}],["path",{d:"M20 10c-2 2-3 3.5-3 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=["svg",n,[["path",{d:"M6 12h12"}],["path",{d:"M6 20V4"}],["path",{d:"M18 20V4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=["svg",n,[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=["svg",n,[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=["svg",n,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=["svg",n,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"}],["path",{d:"m18 15-2-2"}],["path",{d:"m15 18-2-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=["svg",n,[["line",{x1:"2",y1:"2",x2:"22",y2:"22"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=["svg",n,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=["svg",n,[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=["svg",n,[["path",{d:"M11 8c2-3-2-3 0-6"}],["path",{d:"M15.5 8c2-3-2-3 0-6"}],["path",{d:"M6 10h.01"}],["path",{d:"M6 14h.01"}],["path",{d:"M10 16v-4"}],["path",{d:"M14 16v-4"}],["path",{d:"M18 16v-4"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"}],["path",{d:"M5 20v2"}],["path",{d:"M19 20v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=["svg",n,[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=["svg",n,[["path",{d:"m9 11-6 6v3h9l3-3"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=["svg",n,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=["svg",n,[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=["svg",n,[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=["svg",n,[["path",{d:"M12 6v4"}],["path",{d:"M14 14h-4"}],["path",{d:"M14 18h-4"}],["path",{d:"M14 8h-4"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=["svg",n,[["path",{d:"M10 22v-6.57"}],["path",{d:"M12 11h.01"}],["path",{d:"M12 7h.01"}],["path",{d:"M14 15.43V22"}],["path",{d:"M15 16a5 5 0 0 0-6 0"}],["path",{d:"M16 11h.01"}],["path",{d:"M16 7h.01"}],["path",{d:"M8 11h.01"}],["path",{d:"M8 7h.01"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=["svg",n,[["path",{d:"M5 22h14"}],["path",{d:"M5 2h14"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=["svg",n,[["path",{d:"M10 12V8.964"}],["path",{d:"M14 12V8.964"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=["svg",n,[["path",{d:"M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"}],["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M15 6h6"}],["path",{d:"M18 3v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=["svg",n,[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=["svg",n,[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=["svg",n,[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"}],["path",{d:"M17 7A5 5 0 0 0 7 7"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=["svg",n,[["path",{d:"M16 10h2"}],["path",{d:"M16 14h2"}],["path",{d:"M6.17 15a3 3 0 0 1 5.66 0"}],["circle",{cx:"9",cy:"11",r:"2"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=["svg",n,[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19 3 3v-5.5"}],["path",{d:"m17 22 3-3"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=["svg",n,[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=["svg",n,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=["svg",n,[["path",{d:"m11 16-5 5"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=["svg",n,[["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=["svg",n,[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"}],["path",{d:"m14 19.5 3-3 3 3"}],["path",{d:"M17 22v-5.5"}],["circle",{cx:"9",cy:"9",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["circle",{cx:"9",cy:"9",r:"2"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=["svg",n,[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"}],["circle",{cx:"12",cy:"8",r:"2"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=["svg",n,[["path",{d:"M12 3v12"}],["path",{d:"m8 11 4 4 4-4"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=["svg",n,[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=["svg",n,[["polyline",{points:"7 8 3 12 7 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=["svg",n,[["polyline",{points:"3 8 7 12 3 16"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=["svg",n,[["path",{d:"M6 3h12"}],["path",{d:"M6 8h12"}],["path",{d:"m6 13 8.5 8"}],["path",{d:"M6 13h3"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=["svg",n,[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h.01"}],["path",{d:"M17 7h.01"}],["path",{d:"M7 17h.01"}],["path",{d:"M17 17h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=["svg",n,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=["svg",n,[["line",{x1:"19",x2:"10",y1:"4",y2:"4"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=["svg",n,[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"}],["polyline",{points:"16 14 20 18 16 22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=["svg",n,[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"}],["polyline",{points:"8 22 4 18 8 14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=["svg",n,[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3"}],["path",{d:"M6 15h12"}],["path",{d:"M6 11h12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=["svg",n,[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{d:"M6 15v-2"}],["path",{d:"M12 15V9"}],["circle",{cx:"12",cy:"6",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=["svg",n,[["path",{d:"M6 5v11"}],["path",{d:"M12 5v6"}],["path",{d:"M18 5v14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef=["svg",n,[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af=["svg",n,[["path",{d:"M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"}],["path",{d:"m14 7 3 3"}],["path",{d:"m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf=["svg",n,[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=["svg",n,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M6 8h4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M2 12h20"}],["path",{d:"M6 12v4"}],["path",{d:"M10 12v4"}],["path",{d:"M14 12v4"}],["path",{d:"M18 12v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=["svg",n,[["path",{d:"M 20 4 A2 2 0 0 1 22 6"}],["path",{d:"M 22 6 L 22 16.41"}],["path",{d:"M 7 16 L 16 16"}],["path",{d:"M 9.69 4 L 20 4"}],["path",{d:"M14 8h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"}],["path",{d:"M6 8h.01"}],["path",{d:"M8 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=["svg",n,[["path",{d:"M10 8h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M14 8h.01"}],["path",{d:"M16 12h.01"}],["path",{d:"M18 8h.01"}],["path",{d:"M6 8h.01"}],["path",{d:"M7 16h10"}],["path",{d:"M8 12h.01"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf=["svg",n,[["path",{d:"M12 2v5"}],["path",{d:"M6 7h12l4 9H2l4-9Z"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=["svg",n,[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z"}],["path",{d:"M9.5 6.5 4 12l3 6"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df=["svg",n,[["path",{d:"M9 2h6l3 7H6l3-7Z"}],["path",{d:"M12 9v13"}],["path",{d:"M9 22h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf=["svg",n,[["path",{d:"M11 13h6l3 7H8l3-7Z"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf=["svg",n,[["path",{d:"M11 4h6l3 7H8l3-7Z"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf=["svg",n,[["path",{d:"M8 2h8l4 10H4L8 2Z"}],["path",{d:"M12 12v6"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uf=["svg",n,[["path",{d:"m12 8 6-3-6-3v10"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"}],["path",{d:"m6.49 12.85 11.02 6.3"}],["path",{d:"M17.51 12.85 6.5 19.15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=["svg",n,[["line",{x1:"3",x2:"21",y1:"22",y2:"22"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11"}],["polygon",{points:"12 2 20 7 4 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf=["svg",n,[["path",{d:"m5 8 6 6"}],["path",{d:"m4 14 6-6 2-3"}],["path",{d:"M2 5h12"}],["path",{d:"M7 2h1"}],["path",{d:"m22 22-5-10-5 10"}],["path",{d:"M14 18h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=["svg",n,[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf=["svg",n,[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=["svg",n,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf=["svg",n,[["path",{d:"M7 22a5 5 0 0 1-2-4"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf=["svg",n,[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf=["svg",n,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf=["svg",n,[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf=["svg",n,[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=["svg",n,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf=["svg",n,[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["path",{d:"M14 4h7"}],["path",{d:"M14 9h7"}],["path",{d:"M14 15h7"}],["path",{d:"M14 20h7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf=["svg",n,[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=["svg",n,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=["svg",n,[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf=["svg",n,[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=["svg",n,[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"}],["path",{d:"M2 22 17 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=["svg",n,[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df=["svg",n,[["path",{d:"M15 12h6"}],["path",{d:"M15 6h6"}],["path",{d:"m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"}],["path",{d:"M3 18h18"}],["path",{d:"M4 11h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=["svg",n,[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1"}],["path",{d:"M7 3v18"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=["svg",n,[["path",{d:"m16 6 4 14"}],["path",{d:"M12 6v14"}],["path",{d:"M8 8v12"}],["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m4.93 4.93 4.24 4.24"}],["path",{d:"m14.83 9.17 4.24-4.24"}],["path",{d:"m14.83 14.83 4.24 4.24"}],["path",{d:"m9.17 14.83-4.24 4.24"}],["circle",{cx:"12",cy:"12",r:"4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=["svg",n,[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"}],["path",{d:"M6 12h4"}],["path",{d:"M14 12h2v8"}],["path",{d:"M6 20h4"}],["path",{d:"M14 20h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=["svg",n,[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=["svg",n,[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{d:"M9 18h6"}],["path",{d:"M10 22h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=["svg",n,[["path",{d:"M9 17H7A5 5 0 0 1 7 7"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf=["svg",n,[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=["svg",n,[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=["svg",n,[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=["svg",n,[["path",{d:"M11 18H3"}],["path",{d:"m15 18 2 2 4-4"}],["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=["svg",n,[["path",{d:"m3 17 2 2 4-4"}],["path",{d:"m3 7 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=["svg",n,[["path",{d:"m3 10 2.5-2.5L3 5"}],["path",{d:"m3 19 2.5-2.5L3 14"}],["path",{d:"M10 6h11"}],["path",{d:"M10 12h11"}],["path",{d:"M10 18h11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=["svg",n,[["path",{d:"M16 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M10 18H3"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5"}],["path",{d:"m16 16-2 2 2 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=["svg",n,[["path",{d:"M3 6h18"}],["path",{d:"M7 12h10"}],["path",{d:"M10 18h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=["svg",n,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=["svg",n,[["path",{d:"M21 15V6"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"}],["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=["svg",n,[["line",{x1:"10",x2:"21",y1:"6",y2:"6"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18"}],["path",{d:"M4 6h1v4"}],["path",{d:"M4 10h2"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=["svg",n,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"M18 9v6"}],["path",{d:"M21 12h-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=["svg",n,[["path",{d:"M21 6H3"}],["path",{d:"M7 12H3"}],["path",{d:"M7 18H3"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"}],["path",{d:"M11 10v4h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=["svg",n,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M10 6H3"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5"}],["path",{d:"m16 8-2-2 2-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=["svg",n,[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1"}],["path",{d:"m3 17 2 2 4-4"}],["path",{d:"M13 6h8"}],["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=["svg",n,[["path",{d:"M21 12h-8"}],["path",{d:"M21 6H8"}],["path",{d:"M21 18h-8"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=["svg",n,[["path",{d:"M12 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M12 18H3"}],["path",{d:"m16 12 5 3-5 3v-6Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=["svg",n,[["path",{d:"M11 12H3"}],["path",{d:"M16 6H3"}],["path",{d:"M16 18H3"}],["path",{d:"m19 10-4 4"}],["path",{d:"m15 10 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=["svg",n,[["line",{x1:"8",x2:"21",y1:"6",y2:"6"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=["svg",n,[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=["svg",n,[["path",{d:"M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"}],["circle",{cx:"12",cy:"12",r:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=["svg",n,[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=["svg",n,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=["svg",n,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=["svg",n,[["line",{x1:"2",x2:"5",y1:"12",y2:"12"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}],["circle",{cx:"12",cy:"12",r:"7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=["svg",n,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=["svg",n,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=["svg",n,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=["svg",n,[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=["svg",n,[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}],["polyline",{points:"10 17 15 12 10 7"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=["svg",n,[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{points:"16 17 21 12 16 7"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=["svg",n,[["path",{d:"M13 12h8"}],["path",{d:"M13 18h8"}],["path",{d:"M13 6h8"}],["path",{d:"M3 12h1"}],["path",{d:"M3 18h1"}],["path",{d:"M3 6h1"}],["path",{d:"M8 12h1"}],["path",{d:"M8 18h1"}],["path",{d:"M8 6h1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=["svg",n,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=["svg",n,[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"}],["path",{d:"M10 20h4"}],["circle",{cx:"16",cy:"20",r:"2"}],["circle",{cx:"8",cy:"20",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=["svg",n,[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"}],["path",{d:"m5 8 4 4"}],["path",{d:"m12 15 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=["svg",n,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=["svg",n,[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=["svg",n,[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=["svg",n,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M19 16v6"}],["path",{d:"M16 19h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=["svg",n,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=["svg",n,[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.5-1.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=["svg",n,[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"M20 14v4"}],["path",{d:"M20 22v.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=["svg",n,[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}],["path",{d:"m17 17 4 4"}],["path",{d:"m21 17-4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=["svg",n,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=["svg",n,[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"}],["polyline",{points:"15,9 18,9 18,11"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=["svg",n,[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=["svg",n,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m9 10 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=["svg",n,[["path",{d:"M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m16 18 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=["svg",n,[["path",{d:"M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"}],["path",{d:"M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"}],["path",{d:"M18 22v-3"}],["circle",{cx:"10",cy:"10",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=["svg",n,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=["svg",n,[["path",{d:"M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=["svg",n,[["path",{d:"M12.75 7.09a3 3 0 0 1 2.16 2.16"}],["path",{d:"M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"}],["path",{d:"m2 2 20 20"}],["path",{d:"M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"}],["path",{d:"M9.13 9.13a3 3 0 0 0 3.74 3.74"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=["svg",n,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=["svg",n,[["path",{d:"M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M16 18h6"}],["path",{d:"M19 15v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=["svg",n,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=["svg",n,[["path",{d:"M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"m21.5 15.5-5 5"}],["path",{d:"m21.5 20.5-5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=["svg",n,[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=["svg",n,[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"}],["circle",{cx:"12",cy:"8",r:"2"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=["svg",n,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=["svg",n,[["path",{d:"M8 22h8"}],["path",{d:"M12 11v11"}],["path",{d:"m19 3-7 8-7-8Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=["svg",n,[["polyline",{points:"15 3 21 3 21 9"}],["polyline",{points:"9 21 3 21 3 15"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=["svg",n,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=["svg",n,[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"}],["path",{d:"M11 12 5.12 2.2"}],["path",{d:"m13 12 5.88-9.8"}],["path",{d:"M8 7h8"}],["circle",{cx:"12",cy:"17",r:"5"}],["path",{d:"M12 18v-2h-.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=["svg",n,[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14"}],["path",{d:"M21 15.34V6l-7.31 2.03"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=["svg",n,[["path",{d:"m3 11 18-5v12L3 14v-3z"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=["svg",n,[["path",{d:"M6 19v-3"}],["path",{d:"M10 19v-3"}],["path",{d:"M14 19v-3"}],["path",{d:"M18 19v-3"}],["path",{d:"M8 11V9"}],["path",{d:"M16 11V9"}],["path",{d:"M12 11V9"}],["path",{d:"M2 15h20"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=["svg",n,[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=["svg",n,[["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"}],["path",{d:"m20 22-5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=["svg",n,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=["svg",n,[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=["svg",n,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=["svg",n,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=["svg",n,[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5"}],["path",{d:"m2 2 20 20"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=["svg",n,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=["svg",n,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=["svg",n,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m10 15-3-3 3-3"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=["svg",n,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=["svg",n,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=["svg",n,[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=["svg",n,[["path",{d:"M10 7.5 8 10l2 2.5"}],["path",{d:"m14 7.5 2 2.5-2 2.5"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=["svg",n,[["path",{d:"M10 17H7l-4 4v-7"}],["path",{d:"M14 17h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 14v1a2 2 0 0 1-2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M3 9v1"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=["svg",n,[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"}],["path",{d:"M9 10h6"}],["path",{d:"M12 7v6"}],["path",{d:"M9 17h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=["svg",n,[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=["svg",n,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=["svg",n,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 10h.01"}],["path",{d:"M12 10h.01"}],["path",{d:"M16 10h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=["svg",n,[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"m2 2 20 20"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=["svg",n,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=["svg",n,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=["svg",n,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m10 7-3 3 3 3"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=["svg",n,[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"}],["path",{d:"M16 3h5v5"}],["path",{d:"m16 8 5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=["svg",n,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M13 8H7"}],["path",{d:"M17 12H7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=["svg",n,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"M12 7v2"}],["path",{d:"M12 13h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=["svg",n,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}],["path",{d:"m14.5 7.5-5 5"}],["path",{d:"m9.5 7.5 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=["svg",n,[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=["svg",n,[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=["svg",n,[["line",{x1:"2",x2:"22",y1:"2",y2:"22"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=["svg",n,[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"}],["circle",{cx:"16",cy:"7",r:"5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=["svg",n,[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=["svg",n,[["path",{d:"M18 12h2"}],["path",{d:"M18 16h2"}],["path",{d:"M18 20h2"}],["path",{d:"M18 4h2"}],["path",{d:"M18 8h2"}],["path",{d:"M4 12h2"}],["path",{d:"M4 16h2"}],["path",{d:"M4 20h2"}],["path",{d:"M4 4h2"}],["path",{d:"M4 8h2"}],["path",{d:"M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=["svg",n,[["path",{d:"M6 18h8"}],["path",{d:"M3 22h18"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1"}],["path",{d:"M9 14h2"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=["svg",n,[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1"}],["path",{d:"M18 8v7"}],["path",{d:"M6 19v2"}],["path",{d:"M18 19v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=["svg",n,[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=["svg",n,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=["svg",n,[["path",{d:"M8 2h8"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=["svg",n,[["polyline",{points:"4 14 10 14 10 20"}],["polyline",{points:"20 10 14 10 14 4"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=["svg",n,[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=["svg",n,[["path",{d:"M5 12h14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=["svg",n,[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=["svg",n,[["path",{d:"M12 17v4"}],["path",{d:"m15.2 4.9-.9-.4"}],["path",{d:"m15.2 7.1-.9.4"}],["path",{d:"m16.9 3.2-.4-.9"}],["path",{d:"m16.9 8.8-.4.9"}],["path",{d:"m19.5 2.3-.4.9"}],["path",{d:"m19.5 9.7-.4-.9"}],["path",{d:"m21.7 4.5-.9.4"}],["path",{d:"m21.7 7.5-.9-.4"}],["path",{d:"M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"}],["path",{d:"M8 21h8"}],["circle",{cx:"18",cy:"6",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=["svg",n,[["circle",{cx:"19",cy:"6",r:"3"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=["svg",n,[["path",{d:"M12 13V7"}],["path",{d:"m15 10-3 3-3-3"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=["svg",n,[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=["svg",n,[["path",{d:"M10 13V7"}],["path",{d:"M14 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=["svg",n,[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=["svg",n,[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=["svg",n,[["path",{d:"M5.5 20H8"}],["path",{d:"M17 9h.01"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"}],["circle",{cx:"17",cy:"15",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=["svg",n,[["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=["svg",n,[["path",{d:"m9 10 3-3 3 3"}],["path",{d:"M12 13V7"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=["svg",n,[["path",{d:"m14.5 12.5-5-5"}],["path",{d:"m9.5 12.5 5-5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=["svg",n,[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=["svg",n,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=["svg",n,[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=["svg",n,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=["svg",n,[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=["svg",n,[["path",{d:"M12 6v.343"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=["svg",n,[["path",{d:"M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=["svg",n,[["path",{d:"M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"}],["circle",{cx:"16",cy:"16",r:"6"}],["path",{d:"m11.8 11.8 8.4 8.4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=["svg",n,[["path",{d:"M14 4.1 12 6"}],["path",{d:"m5.1 8-2.9-.8"}],["path",{d:"m6 12-1.9 2"}],["path",{d:"M7.2 2.2 8 5.1"}],["path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=["svg",n,[["path",{d:"M12.586 12.586 19 19"}],["path",{d:"M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=["svg",n,[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7"}],["path",{d:"M12 6v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=["svg",n,[["path",{d:"M5 3v16h16"}],["path",{d:"m5 19 6-6"}],["path",{d:"m2 6 3-3 3 3"}],["path",{d:"m18 16 3 3-3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=["svg",n,[["polyline",{points:"5 11 5 5 11 5"}],["polyline",{points:"19 13 19 19 13 19"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=["svg",n,[["polyline",{points:"13 5 19 5 19 11"}],["polyline",{points:"11 19 5 19 5 13"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=["svg",n,[["path",{d:"M11 19H5V13"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=["svg",n,[["path",{d:"M19 13V19H13"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=["svg",n,[["path",{d:"M8 18L12 22L16 18"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=["svg",n,[["polyline",{points:"18 8 22 12 18 16"}],["polyline",{points:"6 8 2 12 6 16"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=["svg",n,[["path",{d:"M6 8L2 12L6 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=["svg",n,[["path",{d:"M18 8L22 12L18 16"}],["path",{d:"M2 12H22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=["svg",n,[["path",{d:"M5 11V5H11"}],["path",{d:"M5 5L19 19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=["svg",n,[["path",{d:"M13 5H19V11"}],["path",{d:"M19 5L5 19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=["svg",n,[["path",{d:"M8 6L12 2L16 6"}],["path",{d:"M12 2V22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=["svg",n,[["polyline",{points:"8 18 12 22 16 18"}],["polyline",{points:"8 6 12 2 16 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=["svg",n,[["polyline",{points:"5 9 2 12 5 15"}],["polyline",{points:"9 5 12 2 15 5"}],["polyline",{points:"15 19 12 22 9 19"}],["polyline",{points:"19 9 22 12 19 15"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=["svg",n,[["circle",{cx:"8",cy:"18",r:"4"}],["path",{d:"M12 18V2l7 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=["svg",n,[["circle",{cx:"12",cy:"18",r:"4"}],["path",{d:"M16 18V2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=["svg",n,[["path",{d:"M9 18V5l12-2v13"}],["path",{d:"m9 9 12-2"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=["svg",n,[["path",{d:"M9 18V5l12-2v13"}],["circle",{cx:"6",cy:"18",r:"3"}],["circle",{cx:"18",cy:"16",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=["svg",n,[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=["svg",n,[["polygon",{points:"12 2 19 21 12 17 5 21 12 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=["svg",n,[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=["svg",n,[["polygon",{points:"3 11 22 2 13 21 11 13 3 11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=["svg",n,[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{d:"M12 12V8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=["svg",n,[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"}],["path",{d:"M18 14h-8"}],["path",{d:"M15 18h-5"}],["path",{d:"M10 6h8v4h-8V6Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=["svg",n,[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=["svg",n,[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"}],["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=["svg",n,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M15 2v20"}],["path",{d:"M15 7h5"}],["path",{d:"M15 12h5"}],["path",{d:"M15 17h5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=["svg",n,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M9.5 8h5"}],["path",{d:"M9.5 12H16"}],["path",{d:"M9.5 16H14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=["svg",n,[["path",{d:"M2 6h4"}],["path",{d:"M2 10h4"}],["path",{d:"M2 14h4"}],["path",{d:"M2 18h4"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M16 2v20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2"}],["path",{d:"M20 12v2"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1"}],["path",{d:"M13 22h-2"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2"}],["path",{d:"M4 14v-2"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=["svg",n,[["path",{d:"M8 2v4"}],["path",{d:"M12 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2"}],["path",{d:"M8 10h6"}],["path",{d:"M8 14h8"}],["path",{d:"M8 18h5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=["svg",n,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"}],["path",{d:"M19 10v3.343"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=["svg",n,[["path",{d:"M12 4V2"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=["svg",n,[["path",{d:"M12 16h.01"}],["path",{d:"M12 8v4"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=["svg",n,[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=["svg",n,[["path",{d:"M10 15V9"}],["path",{d:"M14 15V9"}],["path",{d:"M2.586 16.872A2 2 0 0 1 2 15.458V8.542a2 2 0 0 1 .586-1.414l4.542-4.542A2 2 0 0 1 8.542 2h6.916a2 2 0 0 1 1.414.586l4.542 4.542A2 2 0 0 1 22 8.542v6.916a2 2 0 0 1-.586 1.414l-4.542 4.542a2 2 0 0 1-1.414.586H8.542a2 2 0 0 1-1.414-.586z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=["svg",n,[["path",{d:"m15 9-6 6"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=["svg",n,[["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=["svg",n,[["path",{d:"M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=["svg",n,[["path",{d:"M3 3h6l6 18h6"}],["path",{d:"M14 3h7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=["svg",n,[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=["svg",n,[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=["svg",n,[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"}],["path",{d:"M12 3v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=["svg",n,[["path",{d:"m16 16 2 2 4-4"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=["svg",n,[["path",{d:"M16 16h6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=["svg",n,[["path",{d:"M12 22v-9"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=["svg",n,[["path",{d:"M16 16h6"}],["path",{d:"M19 13v6"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=["svg",n,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5"}],["path",{d:"M20.27 17.27 22 19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=["svg",n,[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"}],["path",{d:"m7.5 4.27 9 5.15"}],["polyline",{points:"3.29 7 12 12 20.71 7"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12"}],["path",{d:"m17 13 5 5m-5 0 5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=["svg",n,[["path",{d:"m7.5 4.27 9 5.15"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{d:"m3.3 7 8.7 5 8.7-5"}],["path",{d:"M12 22V12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm=["svg",n,[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"}],["path",{d:"m5 2 5 5"}],["path",{d:"M2 13h15"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm=["svg",n,[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=["svg",n,[["path",{d:"M10 2v2"}],["path",{d:"M14 2v4"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=["svg",n,[["path",{d:"m14.622 17.897-10.68-2.913"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=["svg",n,[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m15 8-3 3-3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 15h1"}],["path",{d:"M19 15h2"}],["path",{d:"M3 15h2"}],["path",{d:"M9 15h1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}],["path",{d:"m9 10 3-3 3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 14v1"}],["path",{d:"M9 19v2"}],["path",{d:"M9 3v2"}],["path",{d:"M9 9v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m8 9 3 3-3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 14v1"}],["path",{d:"M15 19v2"}],["path",{d:"M15 3v2"}],["path",{d:"M15 9v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}],["path",{d:"m10 15-3-3 3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m9 16 3-3 3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M14 9h1"}],["path",{d:"M19 9h2"}],["path",{d:"M3 9h2"}],["path",{d:"M9 9h1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"m15 14-3 3-3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"M9 15h12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h12"}],["path",{d:"M15 3v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M9 21V9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=["svg",n,[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=["svg",n,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=["svg",n,[["path",{d:"M9 9a3 3 0 1 1 6 0"}],["path",{d:"M12 12v3"}],["path",{d:"M11 15h2"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=["svg",n,[["path",{d:"M5.8 11.3 2 22l10.7-3.79"}],["path",{d:"M4 3h.01"}],["path",{d:"M22 8h.01"}],["path",{d:"M15 2h.01"}],["path",{d:"M22 20h.01"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=["svg",n,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=["svg",n,[["circle",{cx:"11",cy:"4",r:"2"}],["circle",{cx:"18",cy:"8",r:"2"}],["circle",{cx:"20",cy:"16",r:"2"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=["svg",n,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2"}],["path",{d:"M15 14h.01"}],["path",{d:"M9 6h6"}],["path",{d:"M9 10h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=["svg",n,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=["svg",n,[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=["svg",n,[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"}],["path",{d:"m2.3 2.3 7.286 7.286"}],["circle",{cx:"11",cy:"11",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=["svg",n,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=["svg",n,[["path",{d:"M12 20h9"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}],["path",{d:"m15 5 3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=["svg",n,[["path",{d:"m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"}],["path",{d:"m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"}],["path",{d:"m15 5 4 4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=["svg",n,[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"}],["path",{d:"m8 6 2-2"}],["path",{d:"m18 16 2-2"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=["svg",n,[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=["svg",n,[["path",{d:"M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=["svg",n,[["line",{x1:"19",x2:"5",y1:"5",y2:"19"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=["svg",n,[["circle",{cx:"12",cy:"5",r:"1"}],["path",{d:"m9 20 3-6 3 6"}],["path",{d:"m6 8 6 2 6-2"}],["path",{d:"M12 10v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=["svg",n,[["path",{d:"M20 11H4"}],["path",{d:"M20 7H4"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=["svg",n,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=["svg",n,[["polyline",{points:"18 2 22 6 18 10"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=["svg",n,[["polyline",{points:"16 2 16 8 22 8"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=["svg",n,[["line",{x1:"22",x2:"16",y1:"2",y2:"8"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=["svg",n,[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=["svg",n,[["polyline",{points:"22 8 22 2 16 2"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=["svg",n,[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=["svg",n,[["line",{x1:"9",x2:"9",y1:"4",y2:"20"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=["svg",n,[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"}],["path",{d:"M2 14h20"}],["path",{d:"M6 14v4"}],["path",{d:"M10 14v4"}],["path",{d:"M14 14v4"}],["path",{d:"M18 14v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=["svg",n,[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=["svg",n,[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=["svg",n,[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=["svg",n,[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=["svg",n,[["path",{d:"M14 3v11"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9"}],["path",{d:"M18 3v11"}],["path",{d:"M22 18H2l4-4"}],["path",{d:"m6 22-4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=["svg",n,[["path",{d:"M10 3v11"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{d:"M14 3v11"}],["path",{d:"m18 14 4 4H2"}],["path",{d:"m22 18-4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=["svg",n,[["path",{d:"M13 4v16"}],["path",{d:"M17 4v16"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=["svg",n,[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=["svg",n,[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"}],["path",{d:"m8.5 8.5 7 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=["svg",n,[["path",{d:"M12 17v5"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"}],["path",{d:"m2 2 20 20"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=["svg",n,[["path",{d:"M12 17v5"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=["svg",n,[["path",{d:"m2 22 1-1h3l9-9"}],["path",{d:"M3 21v-3l9-9"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=["svg",n,[["path",{d:"M15 11h.01"}],["path",{d:"M11 15h.01"}],["path",{d:"M16 16h.01"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=["svg",n,[["path",{d:"M2 22h20"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=["svg",n,[["path",{d:"M2 22h20"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=["svg",n,[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=["svg",n,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=["svg",n,[["path",{d:"M9 2v6"}],["path",{d:"M15 2v6"}],["path",{d:"M12 17v5"}],["path",{d:"M5 8h14"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=["svg",n,[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"m2 22 3-3"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m18 3-4 4h6l-4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=["svg",n,[["path",{d:"M12 22v-5"}],["path",{d:"M9 8V2"}],["path",{d:"M15 8V2"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=["svg",n,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=["svg",n,[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"}],["path",{d:"M18 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=["svg",n,[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"}],["polyline",{points:"8 10 12 14 16 10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=["svg",n,[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0"}],["path",{d:"M8 14a5 5 0 1 1 8 0"}],["circle",{cx:"12",cy:"11",r:"1"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=["svg",n,[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"}],["path",{d:"M6 6v8"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=["svg",n,[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=["svg",n,[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"}],["path",{d:"M10 22 9 8"}],["path",{d:"m14 22 1-14"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=["svg",n,[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"}],["path",{d:"m22 22-5.5-5.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=["svg",n,[["path",{d:"M18 7c0-5.333-8-5.333-8 0"}],["path",{d:"M10 7v14"}],["path",{d:"M6 21h12"}],["path",{d:"M6 13h10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=["svg",n,[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68"}],["path",{d:"M12 2v4"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=["svg",n,[["path",{d:"M12 2v10"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=["svg",n,[["path",{d:"M2 3h20"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"}],["path",{d:"m7 21 5-5 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=["svg",n,[["path",{d:"M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"}],["path",{d:"m16 19 2 2 4-4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=["svg",n,[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=["svg",n,[["path",{d:"M5 7 3 5"}],["path",{d:"M9 6V3"}],["path",{d:"m13 7 2-2"}],["circle",{cx:"9",cy:"13",r:"3"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"}],["path",{d:"M16 16h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=["svg",n,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M12 9v11"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=["svg",n,[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=["svg",n,[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"}],["path",{d:"M12 2v20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=["svg",n,[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{d:"M21 21v.01"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{d:"M3 12h.01"}],["path",{d:"M12 3h.01"}],["path",{d:"M12 16v.01"}],["path",{d:"M16 12h1"}],["path",{d:"M21 12v.01"}],["path",{d:"M12 21v-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=["svg",n,[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=["svg",n,[["path",{d:"M13 16a3 3 0 0 1 2.24 5"}],["path",{d:"M18 12h.01"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=["svg",n,[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{d:"M4 6h.01"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{d:"M12 18h.01"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"m13.41 10.59 5.66-5.66"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=["svg",n,[["path",{d:"M12 12h.01"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=["svg",n,[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=["svg",n,[["path",{d:"M5 16v2"}],["path",{d:"M19 16v2"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2"}],["path",{d:"M18 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=["svg",n,[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"}],["circle",{cx:"12",cy:"9",r:"2"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1"}],["path",{d:"M9.5 18h5"}],["path",{d:"m8 22 4-11 4 11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=["svg",n,[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=["svg",n,[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{cx:"19",cy:"19",r:"2"}],["path",{d:"m13.41 13.41 4.18 4.18"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=["svg",n,[["path",{d:"M5 15h14"}],["path",{d:"M5 9h14"}],["path",{d:"m14 20-5-5 6-6-5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=["svg",n,[["path",{d:"M22 17a10 10 0 0 0-20 0"}],["path",{d:"M6 17a6 6 0 0 1 12 0"}],["path",{d:"M10 17a2 2 0 0 1 4 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=["svg",n,[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12"}],["path",{d:"M16 9h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=["svg",n,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=["svg",n,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M12 6.5v11"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=["svg",n,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 12h5"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=["svg",n,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 7h8"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8"}],["path",{d:"M8 11h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=["svg",n,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"m12 10 3-3"}],["path",{d:"m9 7 3 3v7.5"}],["path",{d:"M9 11h6"}],["path",{d:"M9 15h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=["svg",n,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 13h5"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0"}],["path",{d:"M8 17h7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=["svg",n,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M8 15h5"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=["svg",n,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M10 17V7h5"}],["path",{d:"M10 11h4"}],["path",{d:"M8 15h5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=["svg",n,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M14 8H8"}],["path",{d:"M16 12H8"}],["path",{d:"M13 16H8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=["svg",n,[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"}],["path",{d:"M12 17.5v-11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=["svg",n,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}],["path",{d:"M12 12h.01"}],["path",{d:"M17 12h.01"}],["path",{d:"M7 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=["svg",n,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=["svg",n,[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=["svg",n,[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"}],["path",{d:"m14 16-3 3 3 3"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=["svg",n,[["path",{d:"m15 14 5-5-5-5"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=["svg",n,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=["svg",n,[["path",{d:"M21 7v6h-6"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=["svg",n,[["path",{d:"M3 2v6h6"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8"}],["path",{d:"M21 22v-6h-6"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=["svg",n,[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"}],["path",{d:"M16 16h5v5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=["svg",n,[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"}],["path",{d:"M8 16H3v5"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M22 22 2 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=["svg",n,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=["svg",n,[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"}],["path",{d:"M5 10h14"}],["path",{d:"M15 7v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=["svg",n,[["path",{d:"M17 3v10"}],["path",{d:"m12.67 5.5 8.66 5"}],["path",{d:"m12.67 10.5 8.66-5"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=["svg",n,[["path",{d:"M4 7V4h16v3"}],["path",{d:"M5 20h6"}],["path",{d:"M13 4 8 20"}],["path",{d:"m15 15 5 5"}],["path",{d:"m20 15-5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=["svg",n,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}],["path",{d:"M11 10h1v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=["svg",n,[["path",{d:"m2 9 3-3 3 3"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6"}],["path",{d:"m22 15-3 3-3-3"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=["svg",n,[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=["svg",n,[["path",{d:"M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a 3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=["svg",n,[["path",{d:"M14 4a2 2 0 0 1 2-2"}],["path",{d:"M16 10a2 2 0 0 1-2-2"}],["path",{d:"M20 2a2 2 0 0 1 2 2"}],["path",{d:"M22 8a2 2 0 0 1-2 2"}],["path",{d:"m3 7 3 3 3-3"}],["path",{d:"M6 10V5a3 3 0 0 1 3-3h1"}],["rect",{x:"2",y:"14",width:"8",height:"8",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=["svg",n,[["polyline",{points:"7 17 2 12 7 7"}],["polyline",{points:"12 17 7 12 12 7"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=["svg",n,[["polyline",{points:"9 17 4 12 9 7"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=["svg",n,[["polygon",{points:"11 19 2 12 11 5 11 19"}],["polygon",{points:"22 19 13 12 22 5 22 19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=["svg",n,[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"}],["path",{d:"m12 18 2.57-3.5"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009"}],["path",{d:"M9.35 14.53 12 11.22"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=["svg",n,[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=["svg",n,[["polyline",{points:"3.5 2 6.5 12.5 18 12.5"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=["svg",n,[["path",{d:"M6 19V5"}],["path",{d:"M10 19V6.8"}],["path",{d:"M14 19v-7.8"}],["path",{d:"M18 5v4"}],["path",{d:"M18 19v-6"}],["path",{d:"M22 19V9"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=["svg",n,[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=["svg",n,[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6"}],["path",{d:"m15 2-3 3 3 3"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=["svg",n,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=["svg",n,[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3"}],["path",{d:"m9 8 3-3-3-3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=["svg",n,[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=["svg",n,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"}],["path",{d:"m2 2 20 20"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3"}],["path",{d:"M15 5h-4.3"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=["svg",n,[["circle",{cx:"6",cy:"19",r:"3"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"}],["circle",{cx:"18",cy:"5",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=["svg",n,[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2"}],["path",{d:"M6.01 18H6"}],["path",{d:"M10.01 18H10"}],["path",{d:"M15 10v4"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 12h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 7.5H3"}],["path",{d:"M21 12H3"}],["path",{d:"M21 16.5H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=["svg",n,[["path",{d:"M4 11a9 9 0 0 1 9 9"}],["path",{d:"M4 4a16 16 0 0 1 16 16"}],["circle",{cx:"5",cy:"19",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=["svg",n,[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"}],["path",{d:"m14.5 12.5 2-2"}],["path",{d:"m11.5 9.5 2-2"}],["path",{d:"m8.5 6.5 2-2"}],["path",{d:"m17.5 15.5 2-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=["svg",n,[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18"}],["path",{d:"M6 15h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=["svg",n,[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"}],["path",{d:"M21 14 10 2 3 14h18Z"}],["path",{d:"M10 2v16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=["svg",n,[["path",{d:"M7 21h10"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"}],["path",{d:"m13 12 4-4"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=["svg",n,[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=["svg",n,[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z"}],["path",{d:"m9 15 3-3"}],["path",{d:"M17 13a6 6 0 0 0-6-6"}],["path",{d:"M21 13A10 10 0 0 0 11 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=["svg",n,[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=["svg",n,[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=["svg",n,[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7"}],["path",{d:"M14 8h1"}],["path",{d:"M17 21v-4"}],["path",{d:"m2 2 20 20"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"}],["path",{d:"M29.5 11.5s5 5 4 5"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=["svg",n,[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=["svg",n,[["circle",{cx:"19",cy:"19",r:"2"}],["circle",{cx:"5",cy:"5",r:"2"}],["path",{d:"M5 7v12h12"}],["path",{d:"m5 19 6-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=["svg",n,[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=["svg",n,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M14 15H9v-5"}],["path",{d:"M16 3h5v5"}],["path",{d:"M21 3 9 15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=["svg",n,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 7v10"}],["path",{d:"M12 7v10"}],["path",{d:"M17 7v10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=["svg",n,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=["svg",n,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 9h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=["svg",n,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 12h10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=["svg",n,[["path",{d:"M17 12v4a1 1 0 0 1-1 1h-4"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M17 8V7"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M7 17h.01"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["rect",{x:"7",y:"7",width:"5",height:"5",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=["svg",n,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m16 16-1.9-1.9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=["svg",n,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M7 8h8"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=["svg",n,[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=["svg",n,[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"}],["path",{d:"M18 5v17"}],["path",{d:"m4 6 8-4 8 4"}],["path",{d:"M6 5v17"}],["circle",{cx:"12",cy:"9",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=["svg",n,[["path",{d:"M5.42 9.42 8 12"}],["circle",{cx:"4",cy:"8",r:"2"}],["path",{d:"m14 6-8.58 8.58"}],["circle",{cx:"4",cy:"16",r:"2"}],["path",{d:"M10.8 14.8 14 18"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=["svg",n,[["circle",{cx:"6",cy:"6",r:"3"}],["path",{d:"M8.12 8.12 12 12"}],["path",{d:"M20 4 8.12 15.88"}],["circle",{cx:"6",cy:"18",r:"3"}],["path",{d:"M14.8 14.8 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=["svg",n,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m22 3-5 5"}],["path",{d:"m17 3 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=["svg",n,[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}],["path",{d:"m17 8 5-5"}],["path",{d:"M17 3h5v5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=["svg",n,[["path",{d:"M15 12h-5"}],["path",{d:"M15 8h-5"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=["svg",n,[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=["svg",n,[["path",{d:"m8 11 2 2 4-4"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=["svg",n,[["path",{d:"m13 13.5 2-2.5-2-2.5"}],["path",{d:"m21 21-4.3-4.3"}],["path",{d:"M9 8.5 7 11l2 2.5"}],["circle",{cx:"11",cy:"11",r:"8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=["svg",n,[["path",{d:"m13.5 8.5-5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=["svg",n,[["path",{d:"m13.5 8.5-5 5"}],["path",{d:"m8.5 8.5 5 5"}],["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=["svg",n,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=["svg",n,[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=["svg",n,[["path",{d:"M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"}],["path",{d:"M6 12h16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=["svg",n,[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=["svg",n,[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=["svg",n,[["line",{x1:"3",x2:"21",y1:"12",y2:"12"}],["polyline",{points:"8 8 12 4 16 8"}],["polyline",{points:"16 16 12 20 8 16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=["svg",n,[["line",{x1:"12",x2:"12",y1:"3",y2:"21"}],["polyline",{points:"8 8 4 12 8 16"}],["polyline",{points:"16 16 20 12 16 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=["svg",n,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m15.7 13.4-.9-.3"}],["path",{d:"m9.2 10.9-.9-.3"}],["path",{d:"m10.6 15.7.3-.9"}],["path",{d:"m13.6 15.7-.4-1"}],["path",{d:"m10.8 9.3-.4-1"}],["path",{d:"m8.3 13.6 1-.4"}],["path",{d:"m14.7 10.8 1-.4"}],["path",{d:"m13.4 8.3-.3.9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=["svg",n,[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"}],["path",{d:"M6 6h.01"}],["path",{d:"M6 18h.01"}],["path",{d:"m13 6-4 6h6l-4 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=["svg",n,[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"}],["path",{d:"M6 18h.01"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=["svg",n,[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=["svg",n,[["path",{d:"M20 7h-9"}],["path",{d:"M14 17H5"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=["svg",n,[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=["svg",n,[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=["svg",n,[["circle",{cx:"18",cy:"5",r:"3"}],["circle",{cx:"6",cy:"12",r:"3"}],["circle",{cx:"18",cy:"19",r:"3"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=["svg",n,[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{points:"16 6 12 2 8 6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=["svg",n,[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m4.243 5.21 14.39 12.472"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M8 12h.01"}],["path",{d:"M12 12h.01"}],["path",{d:"M16 12h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 22V2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=["svg",n,[["path",{d:"m2 2 20 20"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"m14.5 9.5-5 5"}],["path",{d:"m9.5 9.5 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=["svg",n,[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=["svg",n,[["circle",{cx:"12",cy:"12",r:"8"}],["path",{d:"M12 2v7.5"}],["path",{d:"m19 5-5.23 5.23"}],["path",{d:"M22 12h-7.5"}],["path",{d:"m19 19-5.23-5.23"}],["path",{d:"M12 14.5V22"}],["path",{d:"M10.23 13.77 5 19"}],["path",{d:"M9.5 12H2"}],["path",{d:"M10.23 10.23 5 5"}],["circle",{cx:"12",cy:"12",r:"2.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=["svg",n,[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{d:"M12 10v4"}],["path",{d:"M12 2v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=["svg",n,[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=["svg",n,[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"}],["path",{d:"M3 6h18"}],["path",{d:"M16 10a4 4 0 0 1-8 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=["svg",n,[["path",{d:"m15 11-1 9"}],["path",{d:"m19 11-4-7"}],["path",{d:"M2 11h20"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"}],["path",{d:"M4.5 15.5h15"}],["path",{d:"m5 11 4-7"}],["path",{d:"m9 11 1 9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=["svg",n,[["circle",{cx:"8",cy:"21",r:"1"}],["circle",{cx:"19",cy:"21",r:"1"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=["svg",n,[["path",{d:"M2 22v-5l5-5 5 5-5 5z"}],["path",{d:"M9.5 14.5 16 8"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=["svg",n,[["path",{d:"m4 4 2.5 2.5"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7"}],["path",{d:"M15 5 5 15"}],["path",{d:"M14 17v.01"}],["path",{d:"M10 16v.01"}],["path",{d:"M13 13v.01"}],["path",{d:"M16 10v.01"}],["path",{d:"M11 20v.01"}],["path",{d:"M17 14v.01"}],["path",{d:"M20 11v.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=["svg",n,[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=["svg",n,[["path",{d:"M12 22v-7l-2-2"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"}],["path",{d:"m14 14-2 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=["svg",n,[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"}],["path",{d:"m18 2 4 4-4 4"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"}],["path",{d:"m18 14 4 4-4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=["svg",n,[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=["svg",n,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=["svg",n,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=["svg",n,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=["svg",n,[["path",{d:"M2 20h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=["svg",n,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=["svg",n,[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"}],["path",{d:"M3 21h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=["svg",n,[["path",{d:"M10 9H4L2 7l2-2h6"}],["path",{d:"M14 5h6l2 2-2 2h-6"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18"}],["path",{d:"M8 22h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=["svg",n,[["path",{d:"M12 13v8"}],["path",{d:"M12 3v3"}],["path",{d:"M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=["svg",n,[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"}],["path",{d:"M21 12h1"}],["path",{d:"M18.5 4.5 18 5"}],["path",{d:"M2 12h1"}],["path",{d:"M12 2v1"}],["path",{d:"m4.929 4.929.707.707"}],["path",{d:"M12 12v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=["svg",n,[["polygon",{points:"19 20 9 12 19 4 19 20"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=["svg",n,[["polygon",{points:"5 4 15 12 5 20 5 4"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=["svg",n,[["path",{d:"m12.5 17-.5-1-.5 1h1z"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"}],["circle",{cx:"15",cy:"12",r:"1"}],["circle",{cx:"9",cy:"12",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=["svg",n,[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=["svg",n,[["path",{d:"M22 2 2 22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=["svg",n,[["path",{d:"m8 14-6 6h9v-3"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=["svg",n,[["line",{x1:"21",x2:"14",y1:"4",y2:"4"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=["svg",n,[["line",{x1:"4",x2:"4",y1:"21",y2:"14"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=["svg",n,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12.667 8 10 12h4l-2.667 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=["svg",n,[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=["svg",n,[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}],["path",{d:"M12 18h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=["svg",n,[["path",{d:"M22 11v1a10 10 0 1 1-9-10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}],["path",{d:"M16 5h6"}],["path",{d:"M19 2v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=["svg",n,[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}],["circle",{cx:"10",cy:"13",r:"8"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}],["path",{d:"M18 3 19.1 5.2"}],["path",{d:"M22 3 20.9 5.2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=["svg",n,[["line",{x1:"2",x2:"22",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22"}],["path",{d:"m20 16-4-4 4-4"}],["path",{d:"m4 8 4 4-4 4"}],["path",{d:"m16 4-4 4-4-4"}],["path",{d:"m8 20 4-4 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=["svg",n,[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"}],["path",{d:"M4 18v2"}],["path",{d:"M20 18v2"}],["path",{d:"M12 4v9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=["svg",n,[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"}],["path",{d:"M7 21h10"}],["path",{d:"M19.5 12 22 6"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=["svg",n,[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=["svg",n,[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"}],["path",{d:"M12 18v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=["svg",n,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=["svg",n,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=["svg",n,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2"}],["path",{d:"M12 6h.01"}],["circle",{cx:"12",cy:"14",r:"4"}],["path",{d:"M12 14h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=["svg",n,[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=["svg",n,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=["svg",n,[["path",{d:"m6 16 6-12 6 12"}],["path",{d:"M8 12h8"}],["path",{d:"m16 20 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=["svg",n,[["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=["svg",n,[["path",{d:"M16 3h5v5"}],["path",{d:"M8 3H3v5"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"}],["path",{d:"m15 9 6-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=["svg",n,[["path",{d:"M3 3h.01"}],["path",{d:"M7 5h.01"}],["path",{d:"M11 7h.01"}],["path",{d:"M3 7h.01"}],["path",{d:"M7 9h.01"}],["path",{d:"M3 11h.01"}],["rect",{width:"4",height:"4",x:"15",y:"5"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{d:"m13 14 8-2"}],["path",{d:"m13 19 8-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=["svg",n,[["path",{d:"M7 20h10"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 8-8 8"}],["path",{d:"M16 16H8V8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 8 8 8"}],["path",{d:"M16 8v8H8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8 12 4 4 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m12 8-4 4 4 4"}],["path",{d:"M16 12H8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=["svg",n,[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"}],["path",{d:"m3 21 9-9"}],["path",{d:"M9 21H3v-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=["svg",n,[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}],["path",{d:"m21 21-9-9"}],["path",{d:"M21 15v6h-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=["svg",n,[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"}],["path",{d:"m3 3 9 9"}],["path",{d:"M3 9V3h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=["svg",n,[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"}],["path",{d:"m21 3-9 9"}],["path",{d:"M15 3h6v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"m12 16 4-4-4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8h8"}],["path",{d:"M16 16 8 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 8h8v8"}],["path",{d:"m8 16 8-8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 12-4-4-4 4"}],["path",{d:"M12 16V8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 8v8"}],["path",{d:"m8.5 14 7-4"}],["path",{d:"m8.5 10 7 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=["svg",n,[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"}],["path",{d:"M10 22H8"}],["path",{d:"M16 22h-2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 8h7"}],["path",{d:"M8 12h6"}],["path",{d:"M11 16h5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=["svg",n,[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"}],["path",{d:"m9 11 3 3L22 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m16 10-4 4-4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m14 16-4-4 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m10 8 4 4-4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m8 14 4-4 4 4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=["svg",n,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=["svg",n,[["path",{d:"M10 9.5 8 12l2 2.5"}],["path",{d:"M14 21h1"}],["path",{d:"m14 9.5 2 2.5-2 2.5"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=["svg",n,[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"}],["path",{d:"M9 21h1"}],["path",{d:"M14 21h1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=["svg",n,[["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M9 3h1"}],["path",{d:"M14 3h1"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 9v1"}],["path",{d:"M21 14v1"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M14 21h1"}],["path",{d:"M9 21h1"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M3 14v1"}],["path",{d:"M3 9v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=["svg",n,[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h2"}],["path",{d:"M14 3h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v2"}],["path",{d:"M3 14v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"12",r:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 10h10"}],["path",{d:"M7 14h10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}],["path",{d:"M9 11.2h5.7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 7v7"}],["path",{d:"M12 7v4"}],["path",{d:"M16 7v9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7v10"}],["path",{d:"M11 7v10"}],["path",{d:"m15 7 2 10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 16V8l4 4 4-4v8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 8h10"}],["path",{d:"M7 12h10"}],["path",{d:"M7 16h10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=["svg",n,[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=["svg",n,[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3"}],["path",{d:"m2 2 20 20"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2"}],["path",{d:"M9 17v-2.3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=["svg",n,[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"M9 9h.01"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M7 7h10"}],["path",{d:"M10 7v10"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17"}],["path",{d:"M12 7v10"}],["path",{d:"M16 7v10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"m9 8 6 4-6 4Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M8 12h8"}],["path",{d:"M12 8v8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=["svg",n,[["path",{d:"M12 7v4"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=["svg",n,[["path",{d:"M7 12h2l2 5 2-10h4"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=["svg",n,[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2"}],["circle",{cx:"8",cy:"8",r:"2"}],["path",{d:"M9.414 9.414 12 12"}],["path",{d:"M14.8 14.8 18 18"}],["circle",{cx:"8",cy:"16",r:"2"}],["path",{d:"m18 6-8.586 8.586"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=["svg",n,[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=["svg",n,[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=["svg",n,[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=["svg",n,[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=["svg",n,[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=["svg",n,[["path",{d:"M18 21a6 6 0 0 0-12 0"}],["circle",{cx:"12",cy:"11",r:"4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["path",{d:"m15 9-6 6"}],["path",{d:"m9 9 6 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=["svg",n,[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=["svg",n,[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"}],["path",{d:"M18 13h.01"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=["svg",n,[["path",{d:"M5 22h14"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=["svg",n,[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=["svg",n,[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=["svg",n,[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=["svg",n,[["line",{x1:"18",x2:"18",y1:"20",y2:"4"}],["polygon",{points:"14,20 4,12 14,4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=["svg",n,[["line",{x1:"6",x2:"6",y1:"4",y2:"20"}],["polygon",{points:"10,4 20,12 10,20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=["svg",n,[["path",{d:"M11 2v2"}],["path",{d:"M5 2v2"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3"}],["circle",{cx:"20",cy:"10",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=["svg",n,[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4"}],["path",{d:"M8 13h.01"}],["path",{d:"M16 13h.01"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=["svg",n,[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=["svg",n,[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"}],["path",{d:"M2 7h20"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=["svg",n,[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=["svg",n,[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=["svg",n,[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=["svg",n,[["path",{d:"m4 5 8 8"}],["path",{d:"m12 5-8 8"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=["svg",n,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 4h.01"}],["path",{d:"M20 12h.01"}],["path",{d:"M12 20h.01"}],["path",{d:"M4 12h.01"}],["path",{d:"M17.657 6.343h.01"}],["path",{d:"M17.657 17.657h.01"}],["path",{d:"M6.343 17.657h.01"}],["path",{d:"M6.343 6.343h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=["svg",n,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 3v1"}],["path",{d:"M12 20v1"}],["path",{d:"M3 12h1"}],["path",{d:"M20 12h1"}],["path",{d:"m18.364 5.636-.707.707"}],["path",{d:"m6.343 17.657-.707.707"}],["path",{d:"m5.636 5.636.707.707"}],["path",{d:"m17.657 17.657.707.707"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=["svg",n,[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.9 4.9 1.4 1.4"}],["path",{d:"m17.7 17.7 1.4 1.4"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.3 17.7-1.4 1.4"}],["path",{d:"m19.1 4.9-1.4 1.4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=["svg",n,[["path",{d:"M10 9a3 3 0 1 0 0 6"}],["path",{d:"M2 12h1"}],["path",{d:"M14 21V3"}],["path",{d:"M10 4V3"}],["path",{d:"M10 21v-1"}],["path",{d:"m3.64 18.36.7-.7"}],["path",{d:"m4.34 6.34-.7-.7"}],["path",{d:"M14 12h8"}],["path",{d:"m17 4-3 3"}],["path",{d:"m14 17 3 3"}],["path",{d:"m21 15-3-3 3-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=["svg",n,[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=["svg",n,[["path",{d:"M12 2v8"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m8 6 4-4 4 4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=["svg",n,[["path",{d:"M12 10V2"}],["path",{d:"m4.93 10.93 1.41 1.41"}],["path",{d:"M2 18h2"}],["path",{d:"M20 18h2"}],["path",{d:"m19.07 10.93-1.41 1.41"}],["path",{d:"M22 22H2"}],["path",{d:"m16 6-4 4-4-4"}],["path",{d:"M16 18a4 4 0 0 0-8 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=["svg",n,[["path",{d:"m4 19 8-8"}],["path",{d:"m12 19-8-8"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=["svg",n,[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"}],["path",{d:"M 7 17h.01"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=["svg",n,[["path",{d:"M10 21V3h8"}],["path",{d:"M6 16h9"}],["path",{d:"M10 9.5h7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=["svg",n,[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"m18 22-3-3 3-3"}],["path",{d:"m6 2 3 3-3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=["svg",n,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=["svg",n,[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=["svg",n,[["path",{d:"m18 2 4 4"}],["path",{d:"m17 7 3-3"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"}],["path",{d:"m9 11 4 4"}],["path",{d:"m5 19-3 3"}],["path",{d:"m14 4 6 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=["svg",n,[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=["svg",n,[["path",{d:"M12 21v-6"}],["path",{d:"M12 9V3"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=["svg",n,[["path",{d:"M12 15V9"}],["path",{d:"M3 15h18"}],["path",{d:"M3 9h18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=["svg",n,[["path",{d:"M14 14v2"}],["path",{d:"M14 20v2"}],["path",{d:"M14 2v2"}],["path",{d:"M14 8v2"}],["path",{d:"M2 15h8"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"}],["path",{d:"M2 9h8"}],["path",{d:"M22 15h-4"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"}],["path",{d:"M22 9h-4"}],["path",{d:"M5 3v18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=["svg",n,[["path",{d:"M16 12H3"}],["path",{d:"M16 18H3"}],["path",{d:"M16 6H3"}],["path",{d:"M21 12h.01"}],["path",{d:"M21 18h.01"}],["path",{d:"M21 6h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=["svg",n,[["path",{d:"M15 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M21 9H3"}],["path",{d:"M21 15H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=["svg",n,[["path",{d:"M14 10h2"}],["path",{d:"M15 22v-8"}],["path",{d:"M15 2v4"}],["path",{d:"M2 10h2"}],["path",{d:"M20 10h2"}],["path",{d:"M3 19h18"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"}],["path",{d:"M8 10h2"}],["path",{d:"M9 22v-8"}],["path",{d:"M9 2v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=["svg",n,[["path",{d:"M12 3v18"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9h18"}],["path",{d:"M3 15h18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=["svg",n,[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{d:"M8 18h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=["svg",n,[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=["svg",n,[["circle",{cx:"7",cy:"7",r:"5"}],["circle",{cx:"17",cy:"17",r:"5"}],["path",{d:"M12 17h10"}],["path",{d:"m3.46 10.54 7.08-7.08"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=["svg",n,[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=["svg",n,[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=["svg",n,[["path",{d:"M4 4v16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=["svg",n,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=["svg",n,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=["svg",n,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=["svg",n,[["path",{d:"M4 4v16"}],["path",{d:"M9 4v16"}],["path",{d:"M14 4v16"}],["path",{d:"M19 4v16"}],["path",{d:"M22 6 2 18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=["svg",n,[["circle",{cx:"17",cy:"4",r:"2"}],["path",{d:"M15.59 5.41 5.41 15.59"}],["circle",{cx:"4",cy:"17",r:"2"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=["svg",n,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=["svg",n,[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"}],["path",{d:"m13.56 11.747 4.332-.924"}],["path",{d:"m16 21-3.105-6.21"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"}],["path",{d:"m6.158 8.633 1.114 4.456"}],["path",{d:"m8 21 3.105-6.21"}],["circle",{cx:"12",cy:"13",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=["svg",n,[["circle",{cx:"4",cy:"4",r:"2"}],["path",{d:"m14 5 3-3 3 3"}],["path",{d:"m14 10 3-3 3 3"}],["path",{d:"M17 14V2"}],["path",{d:"M17 14H7l-5 8h20Z"}],["path",{d:"M8 14v8"}],["path",{d:"m9 14 5 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=["svg",n,[["path",{d:"M3.5 21 14 3"}],["path",{d:"M20.5 21 10 3"}],["path",{d:"M15.5 21 12 15l-3.5 6"}],["path",{d:"M2 21h20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=["svg",n,[["polyline",{points:"4 17 10 11 4 5"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=["svg",n,[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{d:"m16 2 6 6"}],["path",{d:"M12 16H4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=["svg",n,[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"}],["path",{d:"M8.5 2h7"}],["path",{d:"M14.5 16h-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=["svg",n,[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"}],["path",{d:"M3 2h7"}],["path",{d:"M14 2h7"}],["path",{d:"M9 16H4"}],["path",{d:"M20 16h-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=["svg",n,[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"}],["path",{d:"M9 7v10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=["svg",n,[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=["svg",n,[["path",{d:"M17 6H3"}],["path",{d:"M21 12H8"}],["path",{d:"M21 18H8"}],["path",{d:"M3 12v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=["svg",n,[["path",{d:"M21 6H3"}],["path",{d:"M10 12H3"}],["path",{d:"M10 18H3"}],["circle",{cx:"17",cy:"15",r:"3"}],["path",{d:"m21 19-1.9-1.9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=["svg",n,[["path",{d:"M5 3a2 2 0 0 0-2 2"}],["path",{d:"M19 3a2 2 0 0 1 2 2"}],["path",{d:"M21 19a2 2 0 0 1-2 2"}],["path",{d:"M5 21a2 2 0 0 1-2-2"}],["path",{d:"M9 3h1"}],["path",{d:"M9 21h1"}],["path",{d:"M14 3h1"}],["path",{d:"M14 21h1"}],["path",{d:"M3 9v1"}],["path",{d:"M21 9v1"}],["path",{d:"M3 14v1"}],["path",{d:"M21 14v1"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=["svg",n,[["path",{d:"M17 6.1H3"}],["path",{d:"M21 12.1H3"}],["path",{d:"M15.1 18H3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=["svg",n,[["path",{d:"M2 10s3-3 3-8"}],["path",{d:"M22 10s-3-3-3-8"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8"}],["path",{d:"M2 10s2 2 2 5"}],["path",{d:"M22 10s-2 2-2 5"}],["path",{d:"M8 15h8"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=["svg",n,[["path",{d:"M2 12h10"}],["path",{d:"M9 4v16"}],["path",{d:"m3 9 3 3-3 3"}],["path",{d:"M12 6 9 9 6 6"}],["path",{d:"m6 18 3-3 1.5 1.5"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=["svg",n,[["path",{d:"M12 9a4 4 0 0 0-2 7.5"}],["path",{d:"M12 3v2"}],["path",{d:"m6.6 18.4-1.4 1.4"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}],["path",{d:"M4 13H2"}],["path",{d:"M6.34 7.34 4.93 5.93"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=["svg",n,[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=["svg",n,[["path",{d:"M17 14V2"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=["svg",n,[["path",{d:"M7 10v12"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=["svg",n,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9 12 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=["svg",n,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=["svg",n,[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 9h.01"}],["path",{d:"m15 9-6 6"}],["path",{d:"M15 15h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=["svg",n,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M9 12h6"}],["path",{d:"M12 9v6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=["svg",n,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=["svg",n,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"m9.5 14.5 5-5"}],["path",{d:"m9.5 9.5 5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=["svg",n,[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{d:"M13 5v2"}],["path",{d:"M13 17v2"}],["path",{d:"M13 11v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=["svg",n,[["path",{d:"M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"}],["path",{d:"m12 13.5 3.75.5"}],["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=["svg",n,[["path",{d:"m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"}],["path",{d:"M6 10V8"}],["path",{d:"M6 14v1"}],["path",{d:"M6 19v2"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=["svg",n,[["path",{d:"M10 2h4"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"}],["path",{d:"m2 2 20 20"}],["path",{d:"M12 12v-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=["svg",n,[["path",{d:"M10 2h4"}],["path",{d:"M12 14v-4"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"}],["path",{d:"M9 17H4v5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=["svg",n,[["line",{x1:"10",x2:"14",y1:"2",y2:"2"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11"}],["circle",{cx:"12",cy:"14",r:"8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=["svg",n,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"8",cy:"12",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=["svg",n,[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6"}],["circle",{cx:"16",cy:"12",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=["svg",n,[["path",{d:"M21 4H3"}],["path",{d:"M18 8H6"}],["path",{d:"M19 12H9"}],["path",{d:"M16 16h-6"}],["path",{d:"M11 20H9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=["svg",n,[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=["svg",n,[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"}],["path",{d:"M2 14h12"}],["path",{d:"M22 14h-2"}],["path",{d:"M12 20v-6"}],["path",{d:"m2 2 20 20"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=["svg",n,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 14h20"}],["path",{d:"M12 20v-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=["svg",n,[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"}],["path",{d:"M8 13v9"}],["path",{d:"M16 22v-9"}],["path",{d:"m9 6 1 7"}],["path",{d:"m15 6-1 7"}],["path",{d:"M12 6V2"}],["path",{d:"M13 2h-2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=["svg",n,[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=["svg",n,[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"}],["path",{d:"M16 18h-5"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"}],["path",{d:"M4 11V4"}],["path",{d:"M7 15h.01"}],["path",{d:"M8 10.1V4"}],["circle",{cx:"18",cy:"18",r:"2"}],["circle",{cx:"7",cy:"15",r:"5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=["svg",n,[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=["svg",n,[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"}],["path",{d:"M10 15h.01"}],["path",{d:"M14 15h.01"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"}],["path",{d:"m9 19-2 3"}],["path",{d:"m15 19 2 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=["svg",n,[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1"}],["path",{d:"m9 15-1-1"}],["path",{d:"m15 15 1-1"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"}],["path",{d:"m8 19-2 3"}],["path",{d:"m16 19 2 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=["svg",n,[["path",{d:"M2 17 17 2"}],["path",{d:"m2 14 8 8"}],["path",{d:"m5 11 8 8"}],["path",{d:"m8 8 8 8"}],["path",{d:"m11 5 8 8"}],["path",{d:"m14 2 8 8"}],["path",{d:"M7 22 22 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=["svg",n,[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2"}],["path",{d:"M4 11h16"}],["path",{d:"M12 3v8"}],["path",{d:"m8 19-2 3"}],["path",{d:"m18 22-2-3"}],["path",{d:"M8 15h.01"}],["path",{d:"M16 15h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=["svg",n,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=["svg",n,[["path",{d:"M3 6h18"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=["svg",n,[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"}],["path",{d:"M12 19v3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=["svg",n,[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=["svg",n,[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"}],["path",{d:"M12 22v-3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=["svg",n,[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"}],["path",{d:"M7 16v6"}],["path",{d:"M13 19v3"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}],["rect",{width:"3",height:"9",x:"7",y:"7"}],["rect",{width:"3",height:"5",x:"14",y:"7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=["svg",n,[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{points:"16 17 22 17 22 11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=["svg",n,[["path",{d:"M14.828 14.828 21 21"}],["path",{d:"M21 16v5h-5"}],["path",{d:"m21 3-9 9-4-4-6 6"}],["path",{d:"M21 8V3h-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=["svg",n,[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{points:"16 7 22 7 22 13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=["svg",n,[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=["svg",n,[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=["svg",n,[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=["svg",n,[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18"}],["path",{d:"M4 22h16"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=["svg",n,[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"}],["path",{d:"M15 18H9"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"}],["circle",{cx:"17",cy:"18",r:"2"}],["circle",{cx:"7",cy:"18",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=["svg",n,[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"}],["path",{d:"M4.82 7.9 8 10"}],["path",{d:"M15.18 7.9 12 10"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hw=["svg",n,[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"}],["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=["svg",n,[["path",{d:"M7 21h10"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=["svg",n,[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2"}],["polyline",{points:"17 2 12 7 7 2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=["svg",n,[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=["svg",n,[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=["svg",n,[["path",{d:"M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=["svg",n,[["polyline",{points:"4 7 4 4 20 4 20 7"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=["svg",n,[["path",{d:"M12 2v1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=["svg",n,[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0"}],["path",{d:"M12 2v1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=["svg",n,[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=["svg",n,[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=["svg",n,[["circle",{cx:"12",cy:"17",r:"1"}],["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=["svg",n,[["path",{d:"M3 7v6h6"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=["svg",n,[["path",{d:"M16 12h6"}],["path",{d:"M8 12H2"}],["path",{d:"M12 2v2"}],["path",{d:"M12 8v2"}],["path",{d:"M12 14v2"}],["path",{d:"M12 20v2"}],["path",{d:"m19 15 3-3-3-3"}],["path",{d:"m5 9-3 3 3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=["svg",n,[["path",{d:"M12 22v-6"}],["path",{d:"M12 8V2"}],["path",{d:"M4 12H2"}],["path",{d:"M10 12H8"}],["path",{d:"M16 12h-2"}],["path",{d:"M22 12h-2"}],["path",{d:"m15 19-3 3-3-3"}],["path",{d:"m15 5-3-3-3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=["svg",n,[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=["svg",n,[["circle",{cx:"12",cy:"10",r:"1"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M6 17v.01"}],["path",{d:"M6 13v.01"}],["path",{d:"M18 17v.01"}],["path",{d:"M18 13v.01"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=["svg",n,[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=["svg",n,[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=["svg",n,[["path",{d:"m19 5 3-3"}],["path",{d:"m2 22 3-3"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"}],["path",{d:"M7.5 13.5 10 11"}],["path",{d:"M10.5 16.5 13 14"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=["svg",n,[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"17 8 12 3 7 8"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=["svg",n,[["circle",{cx:"10",cy:"7",r:"1"}],["circle",{cx:"4",cy:"20",r:"1"}],["path",{d:"M4.7 19.3 19 5"}],["path",{d:"m21 3-3 1 2 2Z"}],["path",{d:"M9.26 7.68 5 12l2 5"}],["path",{d:"m10 14 5 2 3.5-3.5"}],["path",{d:"m18 12 1-1 1 1-1 1Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=["svg",n,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["polyline",{points:"16 11 18 13 22 9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gw=["svg",n,[["circle",{cx:"18",cy:"15",r:"3"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2"}],["path",{d:"m21.7 16.4-.9-.3"}],["path",{d:"m15.2 13.9-.9-.3"}],["path",{d:"m16.6 18.7.3-.9"}],["path",{d:"m19.1 12.2.3-.9"}],["path",{d:"m19.6 18.7-.4-1"}],["path",{d:"m16.8 12.3-.4-1"}],["path",{d:"m14.3 16.6 1-.4"}],["path",{d:"m20.7 13.8 1-.4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=["svg",n,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=["svg",n,[["path",{d:"M11.5 15H7a4 4 0 0 0-4 4v2"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"7",r:"4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=["svg",n,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=["svg",n,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m16 19 2 2 4-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=["svg",n,[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"10",cy:"8",r:"5"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m19.5 14.3-.4.9"}],["path",{d:"m16.9 20.8-.4.9"}],["path",{d:"m21.7 19.5-.9-.4"}],["path",{d:"m15.2 16.9-.9-.4"}],["path",{d:"m21.7 16.5-.9.4"}],["path",{d:"m15.2 19.1-.9.4"}],["path",{d:"m19.5 21.7-.4-.9"}],["path",{d:"m16.9 15.2-.4-.9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=["svg",n,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=["svg",n,[["path",{d:"M2 21a8 8 0 0 1 10.821-7.487"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"}],["circle",{cx:"10",cy:"8",r:"5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=["svg",n,[["path",{d:"M2 21a8 8 0 0 1 13.292-6"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M19 16v6"}],["path",{d:"M22 19h-6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jw=["svg",n,[["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62"}],["circle",{cx:"18",cy:"18",r:"3"}],["path",{d:"m22 22-1.9-1.9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=["svg",n,[["path",{d:"M2 21a8 8 0 0 1 11.873-7"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"m17 17 5 5"}],["path",{d:"m22 17-5 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=["svg",n,[["circle",{cx:"12",cy:"8",r:"5"}],["path",{d:"M20 21a8 8 0 0 0-16 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=["svg",n,[["circle",{cx:"10",cy:"7",r:"4"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2"}],["circle",{cx:"17",cy:"17",r:"3"}],["path",{d:"m21 21-1.9-1.9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=["svg",n,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=["svg",n,[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=["svg",n,[["path",{d:"M18 21a8 8 0 0 0-16 0"}],["circle",{cx:"10",cy:"8",r:"5"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=["svg",n,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=["svg",n,[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"}],["path",{d:"m2.1 21.8 6.4-6.3"}],["path",{d:"m19 5-7 7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=["svg",n,[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"}],["path",{d:"M7 2v20"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=["svg",n,[["path",{d:"M12 2v20"}],["path",{d:"M2 5h20"}],["path",{d:"M3 3v2"}],["path",{d:"M7 3v2"}],["path",{d:"M17 3v2"}],["path",{d:"M21 3v2"}],["path",{d:"m19 5-7 7-7-7"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=["svg",n,[["path",{d:"M8 21s-4-3-4-9 4-9 4-9"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 7.9 2.7 2.7"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 10.6 2.7-2.7"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m7.9 16.1 2.7-2.7"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor"}],["path",{d:"m13.4 13.4 2.7 2.7"}],["circle",{cx:"12",cy:"12",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=["svg",n,[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=["svg",n,[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=["svg",n,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=["svg",n,[["path",{d:"m2 8 2 2-2 2 2 2-2 2"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=["svg",n,[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=["svg",n,[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=["svg",n,[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"M2 8h20"}],["circle",{cx:"8",cy:"14",r:"2"}],["path",{d:"M8 12h8"}],["circle",{cx:"16",cy:"14",r:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=["svg",n,[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"}],["circle",{cx:"12",cy:"12",r:"1"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=["svg",n,[["circle",{cx:"6",cy:"12",r:"4"}],["circle",{cx:"18",cy:"12",r:"4"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=["svg",n,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=["svg",n,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["path",{d:"M16 9a5 5 0 0 1 0 6"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=["svg",n,[["path",{d:"M16 9a5 5 0 0 1 .95 2.293"}],["path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}],["path",{d:"m2 2 20 20"}],["path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}],["path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=["svg",n,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=["svg",n,[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=["svg",n,[["path",{d:"m9 12 2 2 4-4"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"}],["path",{d:"M22 19H2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=["svg",n,[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=["svg",n,[["path",{d:"M17 14h.01"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=["svg",n,[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=["svg",n,[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=["svg",n,[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"}],["path",{d:"m14 7 3 3"}],["path",{d:"M5 6v4"}],["path",{d:"M19 14v4"}],["path",{d:"M10 2v2"}],["path",{d:"M7 8H3"}],["path",{d:"M21 16h-4"}],["path",{d:"M11 3H9"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=["svg",n,[["path",{d:"M15 4V2"}],["path",{d:"M15 16v-2"}],["path",{d:"M8 9h2"}],["path",{d:"M20 9h2"}],["path",{d:"M17.8 11.8 19 13"}],["path",{d:"M15 9h.01"}],["path",{d:"M17.8 6.2 19 5"}],["path",{d:"m3 21 9-9"}],["path",{d:"M12.2 6.2 11 5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=["svg",n,[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"}],["path",{d:"M6 18h12"}],["path",{d:"M6 14h12"}],["rect",{width:"12",height:"12",x:"6",y:"10"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HS=["svg",n,[["path",{d:"M3 6h3"}],["path",{d:"M17 6h.01"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2"}],["circle",{cx:"12",cy:"13",r:"5"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=["svg",n,[["circle",{cx:"12",cy:"12",r:"6"}],["polyline",{points:"12 10 12 12 13 13"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=["svg",n,[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=["svg",n,[["circle",{cx:"12",cy:"4.5",r:"2.5"}],["path",{d:"m10.2 6.3-3.9 3.9"}],["circle",{cx:"4.5",cy:"12",r:"2.5"}],["path",{d:"M7 12h10"}],["circle",{cx:"19.5",cy:"12",r:"2.5"}],["path",{d:"m13.8 17.7 3.9-3.9"}],["circle",{cx:"12",cy:"19.5",r:"2.5"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=["svg",n,[["circle",{cx:"12",cy:"10",r:"8"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 22h10"}],["path",{d:"M12 22v-4"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VS=["svg",n,[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414"}],["path",{d:"m12 6 .6 1"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=["svg",n,[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=["svg",n,[["circle",{cx:"12",cy:"5",r:"3"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=["svg",n,[["path",{d:"m2 22 10-10"}],["path",{d:"m16 8-1.17 1.17"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=["svg",n,[["path",{d:"M2 22 16 8"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=["svg",n,[["circle",{cx:"7",cy:"12",r:"3"}],["path",{d:"M10 9v6"}],["circle",{cx:"17",cy:"12",r:"3"}],["path",{d:"M14 7v8"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=["svg",n,[["path",{d:"M12 20h.01"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=["svg",n,[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=["svg",n,[["path",{d:"M12 20h.01"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=["svg",n,[["path",{d:"M12 20h.01"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WS=["svg",n,[["path",{d:"M12 20h.01"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=["svg",n,[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=["svg",n,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h3m7 0h-1.343"}],["path",{d:"M12 15v7"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=["svg",n,[["path",{d:"M8 22h8"}],["path",{d:"M7 10h10"}],["path",{d:"M12 15v7"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=["svg",n,[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=["svg",n,[["path",{d:"m19 12-1.5 3"}],["path",{d:"M19.63 18.81 22 20"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GS=["svg",n,[["line",{x1:"3",x2:"21",y1:"6",y2:"6"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4"}],["polyline",{points:"16 16 14 18 16 20"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=["svg",n,[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XS=["svg",n,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=["svg",n,[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"}],["path",{d:"m10 15 5-3-5-3z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QS=["svg",n,[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"}],["path",{d:"m2 2 20 20"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JS=["svg",n,[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=["svg",n,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=["svg",n,[["circle",{cx:"11",cy:"11",r:"8"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11"}]]];/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:mr,AArrowUp:Mr,ALargeSmall:yr,Accessibility:xr,Activity:br,ActivitySquare:Si,AirVent:wr,Airplay:Sr,AlarmCheck:l1,AlarmClock:Ar,AlarmClockCheck:l1,AlarmClockMinus:p1,AlarmClockOff:Cr,AlarmClockPlus:g1,AlarmMinus:p1,AlarmPlus:g1,AlarmSmoke:kr,Album:Hr,AlertCircle:z1,AlertOctagon:Js,AlertTriangle:An,AlignCenter:Tr,AlignCenterHorizontal:Lr,AlignCenterVertical:_r,AlignEndHorizontal:Pr,AlignEndVertical:Vr,AlignHorizontalDistributeCenter:Dr,AlignHorizontalDistributeEnd:Er,AlignHorizontalDistributeStart:Ir,AlignHorizontalJustifyCenter:Or,AlignHorizontalJustifyEnd:Rr,AlignHorizontalJustifyStart:Br,AlignHorizontalSpaceAround:Fr,AlignHorizontalSpaceBetween:zr,AlignJustify:Nr,AlignLeft:Wr,AlignRight:$r,AlignStartHorizontal:Ur,AlignStartVertical:Zr,AlignVerticalDistributeCenter:jr,AlignVerticalDistributeEnd:qr,AlignVerticalDistributeStart:Gr,AlignVerticalJustifyCenter:Yr,AlignVerticalJustifyEnd:Xr,AlignVerticalJustifyStart:Kr,AlignVerticalSpaceAround:Qr,AlignVerticalSpaceBetween:Jr,Ambulance:t0,Ampersand:e0,Ampersands:a0,Amphora:s0,Anchor:i0,Angry:n0,Annoyed:o0,Antenna:r0,Anvil:c0,Aperture:h0,AppWindow:l0,AppWindowMac:d0,Apple:p0,Archive:f0,ArchiveRestore:g0,ArchiveX:u0,AreaChart:H1,Armchair:v0,ArrowBigDown:M0,ArrowBigDownDash:m0,ArrowBigLeft:x0,ArrowBigLeftDash:y0,ArrowBigRight:w0,ArrowBigRightDash:b0,ArrowBigUp:C0,ArrowBigUpDash:S0,ArrowDown:E0,ArrowDown01:A0,ArrowDown10:k0,ArrowDownAZ:u1,ArrowDownAz:u1,ArrowDownCircle:N1,ArrowDownFromLine:H0,ArrowDownLeft:L0,ArrowDownLeftFromCircle:$1,ArrowDownLeftFromSquare:Li,ArrowDownLeftSquare:Ci,ArrowDownNarrowWide:_0,ArrowDownRight:T0,ArrowDownRightFromCircle:U1,ArrowDownRightFromSquare:_i,ArrowDownRightSquare:Ai,ArrowDownSquare:ki,ArrowDownToDot:P0,ArrowDownToLine:V0,ArrowDownUp:D0,ArrowDownWideNarrow:f1,ArrowDownZA:v1,ArrowDownZa:v1,ArrowLeft:B0,ArrowLeftCircle:W1,ArrowLeftFromLine:I0,ArrowLeftRight:O0,ArrowLeftSquare:Hi,ArrowLeftToLine:R0,ArrowRight:W0,ArrowRightCircle:q1,ArrowRightFromLine:F0,ArrowRightLeft:z0,ArrowRightSquare:Vi,ArrowRightToLine:N0,ArrowUp:Q0,ArrowUp01:$0,ArrowUp10:U0,ArrowUpAZ:m1,ArrowUpAz:m1,ArrowUpCircle:G1,ArrowUpDown:Z0,ArrowUpFromDot:j0,ArrowUpFromLine:q0,ArrowUpLeft:G0,ArrowUpLeftFromCircle:Z1,ArrowUpLeftFromSquare:Ti,ArrowUpLeftSquare:Di,ArrowUpNarrowWide:M1,ArrowUpRight:Y0,ArrowUpRightFromCircle:j1,ArrowUpRightFromSquare:Pi,ArrowUpRightSquare:Ei,ArrowUpSquare:Ii,ArrowUpToLine:X0,ArrowUpWideNarrow:K0,ArrowUpZA:y1,ArrowUpZa:y1,ArrowsUpFromLine:J0,Asterisk:tc,AsteriskSquare:Oi,AtSign:ec,Atom:ac,AudioLines:sc,AudioWaveform:ic,Award:nc,Axe:oc,Axis3D:x1,Axis3d:x1,Baby:rc,Backpack:cc,Badge:Cc,BadgeAlert:hc,BadgeCent:dc,BadgeCheck:b1,BadgeDollarSign:lc,BadgeEuro:pc,BadgeHelp:gc,BadgeIndianRupee:uc,BadgeInfo:fc,BadgeJapaneseYen:vc,BadgeMinus:mc,BadgePercent:Mc,BadgePlus:yc,BadgePoundSterling:xc,BadgeRussianRuble:bc,BadgeSwissFranc:wc,BadgeX:Sc,BaggageClaim:Ac,Ban:kc,Banana:Hc,Bandage:Lc,Banknote:_c,BarChart:I1,BarChart2:O1,BarChart3:D1,BarChart4:V1,BarChartBig:P1,BarChartHorizontal:_1,BarChartHorizontalBig:L1,Barcode:Tc,Baseline:Pc,Bath:Vc,Battery:Bc,BatteryCharging:Dc,BatteryFull:Ec,BatteryLow:Ic,BatteryMedium:Oc,BatteryWarning:Rc,Beaker:Fc,Bean:Nc,BeanOff:zc,Bed:Uc,BedDouble:Wc,BedSingle:$c,Beef:Zc,Beer:qc,BeerOff:jc,Bell:th,BellDot:Gc,BellElectric:Yc,BellMinus:Xc,BellOff:Kc,BellPlus:Qc,BellRing:Jc,BetweenHorizonalEnd:w1,BetweenHorizonalStart:S1,BetweenHorizontalEnd:w1,BetweenHorizontalStart:S1,BetweenVerticalEnd:eh,BetweenVerticalStart:ah,BicepsFlexed:sh,Bike:ih,Binary:nh,Binoculars:oh,Biohazard:rh,Bird:ch,Bitcoin:hh,Blend:dh,Blinds:lh,Blocks:ph,Bluetooth:vh,BluetoothConnected:gh,BluetoothOff:uh,BluetoothSearching:fh,Bold:mh,Bolt:Mh,Bomb:yh,Bone:xh,Book:$h,BookA:bh,BookAudio:wh,BookCheck:Sh,BookCopy:Ch,BookDashed:C1,BookDown:Ah,BookHeadphones:kh,BookHeart:Hh,BookImage:Lh,BookKey:_h,BookLock:Th,BookMarked:Ph,BookMinus:Vh,BookOpen:Ih,BookOpenCheck:Dh,BookOpenText:Eh,BookPlus:Oh,BookTemplate:C1,BookText:Rh,BookType:Bh,BookUp:zh,BookUp2:Fh,BookUser:Nh,BookX:Wh,Bookmark:Gh,BookmarkCheck:Uh,BookmarkMinus:Zh,BookmarkPlus:jh,BookmarkX:qh,BoomBox:Yh,Bot:Qh,BotMessageSquare:Xh,BotOff:Kh,Box:td,BoxSelect:Jh,Boxes:ed,Braces:A1,Brackets:ad,Brain:nd,BrainCircuit:sd,BrainCog:id,BrickWall:od,Briefcase:hd,BriefcaseBusiness:rd,BriefcaseMedical:cd,BringToFront:dd,Brush:ld,Bug:ud,BugOff:pd,BugPlay:gd,Building:vd,Building2:fd,Bus:Md,BusFront:md,Cable:xd,CableCar:yd,Cake:wd,CakeSlice:bd,Calculator:Sd,Calendar:Wd,CalendarArrowDown:Cd,CalendarArrowUp:Ad,CalendarCheck:Hd,CalendarCheck2:kd,CalendarClock:Ld,CalendarCog:_d,CalendarDays:Td,CalendarFold:Pd,CalendarHeart:Vd,CalendarMinus:Ed,CalendarMinus2:Dd,CalendarOff:Id,CalendarPlus:Rd,CalendarPlus2:Od,CalendarRange:Bd,CalendarSearch:Fd,CalendarX:Nd,CalendarX2:zd,Camera:Ud,CameraOff:$d,CandlestickChart:T1,Candy:qd,CandyCane:Zd,CandyOff:jd,Cannabis:Gd,Captions:k1,CaptionsOff:Yd,Car:Qd,CarFront:Xd,CarTaxiFront:Kd,Caravan:Jd,Carrot:tl,CaseLower:el,CaseSensitive:al,CaseUpper:sl,CassetteTape:il,Cast:nl,Castle:ol,Cat:rl,Cctv:cl,ChartArea:H1,ChartBar:_1,ChartBarBig:L1,ChartBarDecreasing:hl,ChartBarIncreasing:dl,ChartBarStacked:ll,ChartCandlestick:T1,ChartColumn:D1,ChartColumnBig:P1,ChartColumnDecreasing:pl,ChartColumnIncreasing:V1,ChartColumnStacked:gl,ChartGantt:ul,ChartLine:E1,ChartNetwork:fl,ChartNoAxesColumn:O1,ChartNoAxesColumnDecreasing:vl,ChartNoAxesColumnIncreasing:I1,ChartNoAxesCombined:ml,ChartNoAxesGantt:R1,ChartPie:B1,ChartScatter:F1,ChartSpline:Ml,Check:xl,CheckCheck:yl,CheckCircle:Y1,CheckCircle2:X1,CheckSquare:Bi,CheckSquare2:Fi,ChefHat:bl,Cherry:wl,ChevronDown:Sl,ChevronDownCircle:K1,ChevronDownSquare:zi,ChevronFirst:Cl,ChevronLast:Al,ChevronLeft:kl,ChevronLeftCircle:Q1,ChevronLeftSquare:Ni,ChevronRight:Hl,ChevronRightCircle:J1,ChevronRightSquare:Wi,ChevronUp:Ll,ChevronUpCircle:ts,ChevronUpSquare:$i,ChevronsDown:Tl,ChevronsDownUp:_l,ChevronsLeft:Dl,ChevronsLeftRight:Vl,ChevronsLeftRightEllipsis:Pl,ChevronsRight:Il,ChevronsRightLeft:El,ChevronsUp:Rl,ChevronsUpDown:Ol,Chrome:Bl,Church:Fl,Cigarette:Nl,CigaretteOff:zl,Circle:Ql,CircleAlert:z1,CircleArrowDown:N1,CircleArrowLeft:W1,CircleArrowOutDownLeft:$1,CircleArrowOutDownRight:U1,CircleArrowOutUpLeft:Z1,CircleArrowOutUpRight:j1,CircleArrowRight:q1,CircleArrowUp:G1,CircleCheck:X1,CircleCheckBig:Y1,CircleChevronDown:K1,CircleChevronLeft:Q1,CircleChevronRight:J1,CircleChevronUp:ts,CircleDashed:Wl,CircleDivide:es,CircleDollarSign:$l,CircleDot:Zl,CircleDotDashed:Ul,CircleEllipsis:jl,CircleEqual:ql,CircleFadingArrowUp:Gl,CircleFadingPlus:Yl,CircleGauge:as,CircleHelp:ss,CircleMinus:is,CircleOff:Xl,CircleParking:os,CircleParkingOff:ns,CirclePause:rs,CirclePercent:cs,CirclePlay:hs,CirclePlus:ds,CirclePower:ls,CircleSlash:Kl,CircleSlash2:ps,CircleSlashed:ps,CircleStop:gs,CircleUser:fs,CircleUserRound:us,CircleX:vs,CircuitBoard:Jl,Citrus:tp,Clapperboard:ep,Clipboard:dp,ClipboardCheck:ap,ClipboardCopy:sp,ClipboardEdit:Ms,ClipboardList:ip,ClipboardMinus:np,ClipboardPaste:op,ClipboardPen:Ms,ClipboardPenLine:ms,ClipboardPlus:rp,ClipboardSignature:ms,ClipboardType:cp,ClipboardX:hp,Clock:Ap,Clock1:lp,Clock10:pp,Clock11:gp,Clock12:up,Clock2:fp,Clock3:vp,Clock4:mp,Clock5:Mp,Clock6:yp,Clock7:xp,Clock8:bp,Clock9:wp,ClockArrowDown:Sp,ClockArrowUp:Cp,Cloud:Fp,CloudCog:kp,CloudDownload:ys,CloudDrizzle:Hp,CloudFog:Lp,CloudHail:_p,CloudLightning:Tp,CloudMoon:Vp,CloudMoonRain:Pp,CloudOff:Dp,CloudRain:Ip,CloudRainWind:Ep,CloudSnow:Op,CloudSun:Bp,CloudSunRain:Rp,CloudUpload:xs,Cloudy:zp,Clover:Np,Club:Wp,Code:$p,Code2:bs,CodeSquare:Ui,CodeXml:bs,Codepen:Up,Codesandbox:Zp,Coffee:jp,Cog:qp,Coins:Gp,Columns:ws,Columns2:ws,Columns3:Ss,Columns4:Yp,Combine:Xp,Command:Kp,Compass:Qp,Component:Jp,Computer:t4,ConciergeBell:e4,Cone:a4,Construction:s4,Contact:i4,Contact2:Cs,ContactRound:Cs,Container:n4,Contrast:o4,Cookie:r4,CookingPot:c4,Copy:u4,CopyCheck:h4,CopyMinus:d4,CopyPlus:l4,CopySlash:p4,CopyX:g4,Copyleft:f4,Copyright:v4,CornerDownLeft:m4,CornerDownRight:M4,CornerLeftDown:y4,CornerLeftUp:x4,CornerRightDown:b4,CornerRightUp:w4,CornerUpLeft:S4,CornerUpRight:C4,Cpu:A4,CreativeCommons:k4,CreditCard:H4,Croissant:L4,Crop:_4,Cross:T4,Crosshair:P4,Crown:V4,Cuboid:D4,CupSoda:E4,CurlyBraces:A1,Currency:I4,Cylinder:O4,Dam:R4,Database:z4,DatabaseBackup:B4,DatabaseZap:F4,Delete:N4,Dessert:W4,Diameter:$4,Diamond:j4,DiamondMinus:U4,DiamondPercent:As,DiamondPlus:Z4,Dice1:q4,Dice2:G4,Dice3:Y4,Dice4:X4,Dice5:K4,Dice6:Q4,Dices:J4,Diff:t5,Disc:i5,Disc2:e5,Disc3:a5,DiscAlbum:s5,Divide:n5,DivideCircle:es,DivideSquare:qi,Dna:r5,DnaOff:o5,Dock:c5,Dog:h5,DollarSign:d5,Donut:l5,DoorClosed:p5,DoorOpen:g5,Dot:u5,DotSquare:Gi,Download:f5,DownloadCloud:ys,DraftingCompass:v5,Drama:m5,Dribbble:M5,Drill:y5,Droplet:x5,Droplets:b5,Drum:w5,Drumstick:S5,Dumbbell:C5,Ear:k5,EarOff:A5,Earth:ks,EarthLock:H5,Eclipse:L5,Edit:Le,Edit2:pi,Edit3:li,Egg:P5,EggFried:_5,EggOff:T5,Ellipsis:Ls,EllipsisVertical:Hs,Equal:D5,EqualNot:V5,EqualSquare:Yi,Eraser:E5,EthernetPort:I5,Euro:O5,Expand:R5,ExternalLink:B5,Eye:z5,EyeOff:F5,Facebook:N5,Factory:W5,Fan:$5,FastForward:U5,Feather:Z5,Fence:j5,FerrisWheel:q5,Figma:G5,File:Ug,FileArchive:Y5,FileAudio:K5,FileAudio2:X5,FileAxis3D:_s,FileAxis3d:_s,FileBadge:J5,FileBadge2:Q5,FileBarChart:Ts,FileBarChart2:Ps,FileBox:tg,FileChartColumn:Ps,FileChartColumnIncreasing:Ts,FileChartLine:Vs,FileChartPie:Ds,FileCheck:ag,FileCheck2:eg,FileClock:sg,FileCode:ng,FileCode2:ig,FileCog:Es,FileCog2:Es,FileDiff:og,FileDigit:rg,FileDown:cg,FileEdit:Os,FileHeart:hg,FileImage:dg,FileInput:lg,FileJson:gg,FileJson2:pg,FileKey:fg,FileKey2:ug,FileLineChart:Vs,FileLock:mg,FileLock2:vg,FileMinus:yg,FileMinus2:Mg,FileMusic:xg,FileOutput:bg,FilePen:Os,FilePenLine:Is,FilePieChart:Ds,FilePlus:Sg,FilePlus2:wg,FileQuestion:Cg,FileScan:Ag,FileSearch:Hg,FileSearch2:kg,FileSignature:Is,FileSliders:Lg,FileSpreadsheet:_g,FileStack:Tg,FileSymlink:Pg,FileTerminal:Vg,FileText:Dg,FileType:Ig,FileType2:Eg,FileUp:Og,FileVideo:Bg,FileVideo2:Rg,FileVolume:zg,FileVolume2:Fg,FileWarning:Ng,FileX:$g,FileX2:Wg,Files:Zg,Film:jg,Filter:Gg,FilterX:qg,Fingerprint:Yg,FireExtinguisher:Xg,Fish:Jg,FishOff:Kg,FishSymbol:Qg,Flag:su,FlagOff:tu,FlagTriangleLeft:eu,FlagTriangleRight:au,Flame:nu,FlameKindling:iu,Flashlight:ru,FlashlightOff:ou,FlaskConical:hu,FlaskConicalOff:cu,FlaskRound:du,FlipHorizontal:pu,FlipHorizontal2:lu,FlipVertical:uu,FlipVertical2:gu,Flower:vu,Flower2:fu,Focus:mu,FoldHorizontal:Mu,FoldVertical:yu,Folder:qu,FolderArchive:xu,FolderCheck:bu,FolderClock:wu,FolderClosed:Su,FolderCode:Cu,FolderCog:Rs,FolderCog2:Rs,FolderDot:Au,FolderDown:ku,FolderEdit:Bs,FolderGit:Lu,FolderGit2:Hu,FolderHeart:_u,FolderInput:Tu,FolderKanban:Pu,FolderKey:Vu,FolderLock:Du,FolderMinus:Eu,FolderOpen:Ou,FolderOpenDot:Iu,FolderOutput:Ru,FolderPen:Bs,FolderPlus:Bu,FolderRoot:Fu,FolderSearch:Nu,FolderSearch2:zu,FolderSymlink:Wu,FolderSync:$u,FolderTree:Uu,FolderUp:Zu,FolderX:ju,Folders:Gu,Footprints:Yu,ForkKnife:On,ForkKnifeCrossed:In,Forklift:Xu,FormInput:ui,Forward:Ku,Frame:Qu,Framer:Ju,Frown:t3,Fuel:e3,Fullscreen:a3,FunctionSquare:Xi,GalleryHorizontal:i3,GalleryHorizontalEnd:s3,GalleryThumbnails:n3,GalleryVertical:r3,GalleryVerticalEnd:o3,Gamepad:h3,Gamepad2:c3,GanttChart:R1,GanttChartSquare:fa,Gauge:d3,GaugeCircle:as,Gavel:l3,Gem:p3,Ghost:g3,Gift:u3,GitBranch:v3,GitBranchPlus:f3,GitCommit:Fs,GitCommitHorizontal:Fs,GitCommitVertical:m3,GitCompare:y3,GitCompareArrows:M3,GitFork:x3,GitGraph:b3,GitMerge:w3,GitPullRequest:L3,GitPullRequestArrow:S3,GitPullRequestClosed:C3,GitPullRequestCreate:k3,GitPullRequestCreateArrow:A3,GitPullRequestDraft:H3,Github:_3,Gitlab:T3,GlassWater:P3,Glasses:V3,Globe:E3,Globe2:ks,GlobeLock:D3,Goal:I3,Grab:O3,GraduationCap:R3,Grape:B3,Grid:ua,Grid2X2:zs,Grid2x2:zs,Grid2x2Check:F3,Grid2x2Plus:z3,Grid2x2X:N3,Grid3X3:ua,Grid3x3:ua,Grip:U3,GripHorizontal:W3,GripVertical:$3,Group:Z3,Guitar:j3,Ham:q3,Hammer:G3,Hand:J3,HandCoins:Y3,HandHeart:X3,HandHelping:Ns,HandMetal:K3,HandPlatter:Q3,Handshake:t6,HardDrive:s6,HardDriveDownload:e6,HardDriveUpload:a6,HardHat:i6,Hash:n6,Haze:o6,HdmiPort:r6,Heading:u6,Heading1:c6,Heading2:h6,Heading3:d6,Heading4:l6,Heading5:p6,Heading6:g6,Headphones:f6,Headset:v6,Heart:b6,HeartCrack:m6,HeartHandshake:M6,HeartOff:y6,HeartPulse:x6,Heater:w6,HelpCircle:ss,HelpingHand:Ns,Hexagon:S6,Highlighter:C6,History:A6,Home:Ws,Hop:H6,HopOff:k6,Hospital:L6,Hotel:_6,Hourglass:T6,House:Ws,HousePlug:P6,HousePlus:V6,IceCream:Us,IceCream2:$s,IceCreamBowl:$s,IceCreamCone:Us,IdCard:D6,Image:z6,ImageDown:E6,ImageMinus:I6,ImageOff:O6,ImagePlay:R6,ImagePlus:B6,ImageUp:F6,Images:N6,Import:W6,Inbox:$6,Indent:js,IndentDecrease:Zs,IndentIncrease:js,IndianRupee:U6,Infinity:Z6,Info:j6,Inspect:an,InspectionPanel:q6,Instagram:G6,Italic:Y6,IterationCcw:X6,IterationCw:K6,JapaneseYen:Q6,Joystick:J6,Kanban:tf,KanbanSquare:Ki,KanbanSquareDashed:Zi,Key:sf,KeyRound:ef,KeySquare:af,Keyboard:rf,KeyboardMusic:nf,KeyboardOff:of,Lamp:gf,LampCeiling:cf,LampDesk:hf,LampFloor:df,LampWallDown:lf,LampWallUp:pf,LandPlot:uf,Landmark:ff,Languages:vf,Laptop:mf,Laptop2:qs,LaptopMinimal:qs,Lasso:yf,LassoSelect:Mf,Laugh:xf,Layers:Sf,Layers2:bf,Layers3:wf,Layout:di,LayoutDashboard:Cf,LayoutGrid:Af,LayoutList:kf,LayoutPanelLeft:Hf,LayoutPanelTop:Lf,LayoutTemplate:_f,Leaf:Tf,LeafyGreen:Pf,Lectern:Vf,LetterText:Df,Library:If,LibraryBig:Ef,LibrarySquare:Qi,LifeBuoy:Of,Ligature:Rf,Lightbulb:Ff,LightbulbOff:Bf,LineChart:E1,Link:Wf,Link2:Nf,Link2Off:zf,Linkedin:$f,List:n8,ListCheck:Uf,ListChecks:Zf,ListCollapse:jf,ListEnd:qf,ListFilter:Gf,ListMinus:Yf,ListMusic:Xf,ListOrdered:Kf,ListPlus:Qf,ListRestart:Jf,ListStart:t8,ListTodo:e8,ListTree:a8,ListVideo:s8,ListX:i8,Loader:r8,Loader2:Gs,LoaderCircle:Gs,LoaderPinwheel:o8,Locate:d8,LocateFixed:c8,LocateOff:h8,Lock:p8,LockKeyhole:l8,LockKeyholeOpen:Ys,LockOpen:Xs,LogIn:g8,LogOut:u8,Logs:f8,Lollipop:v8,Luggage:m8,MSquare:Ji,Magnet:M8,Mail:H8,MailCheck:y8,MailMinus:x8,MailOpen:b8,MailPlus:w8,MailQuestion:S8,MailSearch:C8,MailWarning:A8,MailX:k8,Mailbox:L8,Mails:_8,Map:W8,MapPin:z8,MapPinCheck:P8,MapPinCheckInside:T8,MapPinHouse:V8,MapPinMinus:E8,MapPinMinusInside:D8,MapPinOff:I8,MapPinPlus:R8,MapPinPlusInside:O8,MapPinX:F8,MapPinXInside:B8,MapPinned:N8,Martini:$8,Maximize:Z8,Maximize2:U8,Medal:j8,Megaphone:G8,MegaphoneOff:q8,Meh:Y8,MemoryStick:X8,Menu:K8,MenuSquare:tn,Merge:Q8,MessageCircle:hv,MessageCircleCode:J8,MessageCircleDashed:tv,MessageCircleHeart:ev,MessageCircleMore:av,MessageCircleOff:sv,MessageCirclePlus:iv,MessageCircleQuestion:nv,MessageCircleReply:ov,MessageCircleWarning:rv,MessageCircleX:cv,MessageSquare:Cv,MessageSquareCode:dv,MessageSquareDashed:lv,MessageSquareDiff:pv,MessageSquareDot:gv,MessageSquareHeart:uv,MessageSquareMore:fv,MessageSquareOff:vv,MessageSquarePlus:mv,MessageSquareQuote:Mv,MessageSquareReply:yv,MessageSquareShare:xv,MessageSquareText:bv,MessageSquareWarning:wv,MessageSquareX:Sv,MessagesSquare:Av,Mic:Hv,Mic2:Ks,MicOff:kv,MicVocal:Ks,Microchip:Lv,Microscope:_v,Microwave:Tv,Milestone:Pv,Milk:Dv,MilkOff:Vv,Minimize:Iv,Minimize2:Ev,Minus:Ov,MinusCircle:is,MinusSquare:en,Monitor:Yv,MonitorCheck:Rv,MonitorCog:Bv,MonitorDot:Fv,MonitorDown:zv,MonitorOff:Nv,MonitorPause:Wv,MonitorPlay:$v,MonitorSmartphone:Uv,MonitorSpeaker:Zv,MonitorStop:jv,MonitorUp:qv,MonitorX:Gv,Moon:Kv,MoonStar:Xv,MoreHorizontal:Ls,MoreVertical:Hs,Mountain:Jv,MountainSnow:Qv,Mouse:nm,MouseOff:tm,MousePointer:im,MousePointer2:em,MousePointerBan:am,MousePointerClick:sm,MousePointerSquareDashed:ji,Move:Mm,Move3D:Qs,Move3d:Qs,MoveDiagonal:rm,MoveDiagonal2:om,MoveDown:dm,MoveDownLeft:cm,MoveDownRight:hm,MoveHorizontal:lm,MoveLeft:pm,MoveRight:gm,MoveUp:vm,MoveUpLeft:um,MoveUpRight:fm,MoveVertical:mm,Music:wm,Music2:ym,Music3:xm,Music4:bm,Navigation:km,Navigation2:Cm,Navigation2Off:Sm,NavigationOff:Am,Network:Hm,Newspaper:Lm,Nfc:_m,Notebook:Dm,NotebookPen:Tm,NotebookTabs:Pm,NotebookText:Vm,NotepadText:Im,NotepadTextDashed:Em,Nut:Rm,NutOff:Om,Octagon:Fm,OctagonAlert:Js,OctagonMinus:Bm,OctagonPause:ti,OctagonX:ei,Omega:zm,Option:Nm,Orbit:Wm,Origami:$m,Outdent:Zs,Package:Km,Package2:Um,PackageCheck:Zm,PackageMinus:jm,PackageOpen:qm,PackagePlus:Gm,PackageSearch:Ym,PackageX:Xm,PaintBucket:Qm,PaintRoller:Jm,Paintbrush:tM,Paintbrush2:ai,PaintbrushVertical:ai,Palette:eM,Palmtree:Cn,PanelBottom:iM,PanelBottomClose:aM,PanelBottomDashed:si,PanelBottomInactive:si,PanelBottomOpen:sM,PanelLeft:ri,PanelLeftClose:ii,PanelLeftDashed:ni,PanelLeftInactive:ni,PanelLeftOpen:oi,PanelRight:rM,PanelRightClose:nM,PanelRightDashed:ci,PanelRightInactive:ci,PanelRightOpen:oM,PanelTop:dM,PanelTopClose:cM,PanelTopDashed:hi,PanelTopInactive:hi,PanelTopOpen:hM,PanelsLeftBottom:lM,PanelsLeftRight:Ss,PanelsRightBottom:pM,PanelsTopBottom:mi,PanelsTopLeft:di,Paperclip:gM,Parentheses:uM,ParkingCircle:os,ParkingCircleOff:ns,ParkingMeter:fM,ParkingSquare:nn,ParkingSquareOff:sn,PartyPopper:vM,Pause:mM,PauseCircle:rs,PauseOctagon:ti,PawPrint:MM,PcCase:yM,Pen:pi,PenBox:Le,PenLine:li,PenOff:xM,PenSquare:Le,PenTool:bM,Pencil:AM,PencilLine:wM,PencilOff:SM,PencilRuler:CM,Pentagon:kM,Percent:HM,PercentCircle:cs,PercentDiamond:As,PercentSquare:on,PersonStanding:LM,PhilippinePeso:_M,Phone:OM,PhoneCall:TM,PhoneForwarded:PM,PhoneIncoming:VM,PhoneMissed:DM,PhoneOff:EM,PhoneOutgoing:IM,Pi:RM,PiSquare:rn,Piano:BM,Pickaxe:FM,PictureInPicture:NM,PictureInPicture2:zM,PieChart:B1,PiggyBank:WM,Pilcrow:ZM,PilcrowLeft:$M,PilcrowRight:UM,PilcrowSquare:cn,Pill:qM,PillBottle:jM,Pin:YM,PinOff:GM,Pipette:XM,Pizza:KM,Plane:ty,PlaneLanding:QM,PlaneTakeoff:JM,Play:ey,PlayCircle:hs,PlaySquare:hn,Plug:sy,Plug2:ay,PlugZap:gi,PlugZap2:gi,Plus:iy,PlusCircle:ds,PlusSquare:dn,Pocket:oy,PocketKnife:ny,Podcast:ry,Pointer:hy,PointerOff:cy,Popcorn:dy,Popsicle:ly,PoundSterling:py,Power:uy,PowerCircle:ls,PowerOff:gy,PowerSquare:ln,Presentation:fy,Printer:my,PrinterCheck:vy,Projector:My,Proportions:yy,Puzzle:xy,Pyramid:by,QrCode:wy,Quote:Sy,Rabbit:Cy,Radar:Ay,Radiation:ky,Radical:Hy,Radio:Ty,RadioReceiver:Ly,RadioTower:_y,Radius:Py,RailSymbol:Vy,Rainbow:Dy,Rat:Ey,Ratio:Iy,Receipt:Uy,ReceiptCent:Oy,ReceiptEuro:Ry,ReceiptIndianRupee:By,ReceiptJapaneseYen:Fy,ReceiptPoundSterling:zy,ReceiptRussianRuble:Ny,ReceiptSwissFranc:Wy,ReceiptText:$y,RectangleEllipsis:ui,RectangleHorizontal:Zy,RectangleVertical:jy,Recycle:qy,Redo:Xy,Redo2:Gy,RedoDot:Yy,RefreshCcw:Qy,RefreshCcwDot:Ky,RefreshCw:tx,RefreshCwOff:Jy,Refrigerator:ex,Regex:ax,RemoveFormatting:sx,Repeat:ox,Repeat1:ix,Repeat2:nx,Replace:cx,ReplaceAll:rx,Reply:dx,ReplyAll:hx,Rewind:lx,Ribbon:px,Rocket:gx,RockingChair:ux,RollerCoaster:fx,Rotate3D:fi,Rotate3d:fi,RotateCcw:mx,RotateCcwSquare:vx,RotateCw:yx,RotateCwSquare:Mx,Route:bx,RouteOff:xx,Router:wx,Rows:vi,Rows2:vi,Rows3:mi,Rows4:Sx,Rss:Cx,Ruler:Ax,RussianRuble:kx,Sailboat:Hx,Salad:Lx,Sandwich:_x,Satellite:Px,SatelliteDish:Tx,Save:Ex,SaveAll:Vx,SaveOff:Dx,Scale:Ix,Scale3D:Mi,Scale3d:Mi,Scaling:Ox,Scan:Ux,ScanBarcode:Rx,ScanEye:Bx,ScanFace:Fx,ScanLine:zx,ScanQrCode:Nx,ScanSearch:Wx,ScanText:$x,ScatterChart:F1,School:Zx,School2:Hn,Scissors:qx,ScissorsLineDashed:jx,ScissorsSquare:pn,ScissorsSquareDashedBottom:Ri,ScreenShare:Yx,ScreenShareOff:Gx,Scroll:Kx,ScrollText:Xx,Search:a7,SearchCheck:Qx,SearchCode:Jx,SearchSlash:t7,SearchX:e7,Section:s7,Send:n7,SendHorizonal:yi,SendHorizontal:yi,SendToBack:i7,SeparatorHorizontal:o7,SeparatorVertical:r7,Server:l7,ServerCog:c7,ServerCrash:h7,ServerOff:d7,Settings:g7,Settings2:p7,Shapes:u7,Share:v7,Share2:f7,Sheet:m7,Shell:M7,Shield:L7,ShieldAlert:y7,ShieldBan:x7,ShieldCheck:b7,ShieldClose:xi,ShieldEllipsis:w7,ShieldHalf:S7,ShieldMinus:C7,ShieldOff:A7,ShieldPlus:k7,ShieldQuestion:H7,ShieldX:xi,Ship:T7,ShipWheel:_7,Shirt:P7,ShoppingBag:V7,ShoppingBasket:D7,ShoppingCart:E7,Shovel:I7,ShowerHead:O7,Shrink:R7,Shrub:B7,Shuffle:F7,Sidebar:ri,SidebarClose:ii,SidebarOpen:oi,Sigma:z7,SigmaSquare:gn,Signal:Z7,SignalHigh:N7,SignalLow:W7,SignalMedium:$7,SignalZero:U7,Signature:j7,Signpost:G7,SignpostBig:q7,Siren:Y7,SkipBack:X7,SkipForward:K7,Skull:Q7,Slack:J7,Slash:t9,SlashSquare:un,Slice:e9,Sliders:bi,SlidersHorizontal:a9,SlidersVertical:bi,Smartphone:n9,SmartphoneCharging:s9,SmartphoneNfc:i9,Smile:r9,SmilePlus:o9,Snail:c9,Snowflake:h9,Sofa:d9,SortAsc:M1,SortDesc:f1,Soup:l9,Space:p9,Spade:g9,Sparkle:u9,Sparkles:wi,Speaker:f9,Speech:v9,SpellCheck:M9,SpellCheck2:m9,Spline:y9,Split:x9,SplitSquareHorizontal:fn,SplitSquareVertical:vn,SprayCan:b9,Sprout:w9,Square:L9,SquareActivity:Si,SquareArrowDown:ki,SquareArrowDownLeft:Ci,SquareArrowDownRight:Ai,SquareArrowLeft:Hi,SquareArrowOutDownLeft:Li,SquareArrowOutDownRight:_i,SquareArrowOutUpLeft:Ti,SquareArrowOutUpRight:Pi,SquareArrowRight:Vi,SquareArrowUp:Ii,SquareArrowUpLeft:Di,SquareArrowUpRight:Ei,SquareAsterisk:Oi,SquareBottomDashedScissors:Ri,SquareChartGantt:fa,SquareCheck:Fi,SquareCheckBig:Bi,SquareChevronDown:zi,SquareChevronLeft:Ni,SquareChevronRight:Wi,SquareChevronUp:$i,SquareCode:Ui,SquareDashedBottom:C9,SquareDashedBottomCode:S9,SquareDashedKanban:Zi,SquareDashedMousePointer:ji,SquareDivide:qi,SquareDot:Gi,SquareEqual:Yi,SquareFunction:Xi,SquareGanttChart:fa,SquareKanban:Ki,SquareLibrary:Qi,SquareM:Ji,SquareMenu:tn,SquareMinus:en,SquareMousePointer:an,SquareParking:nn,SquareParkingOff:sn,SquarePen:Le,SquarePercent:on,SquarePi:rn,SquarePilcrow:cn,SquarePlay:hn,SquarePlus:dn,SquarePower:ln,SquareRadical:A9,SquareScissors:pn,SquareSigma:gn,SquareSlash:un,SquareSplitHorizontal:fn,SquareSplitVertical:vn,SquareSquare:k9,SquareStack:H9,SquareTerminal:mn,SquareUser:yn,SquareUserRound:Mn,SquareX:xn,Squircle:_9,Squirrel:T9,Stamp:P9,Star:E9,StarHalf:V9,StarOff:D9,Stars:wi,StepBack:I9,StepForward:O9,Stethoscope:R9,Sticker:B9,StickyNote:F9,StopCircle:gs,Store:z9,StretchHorizontal:N9,StretchVertical:W9,Strikethrough:$9,Subscript:U9,Subtitles:k1,Sun:Y9,SunDim:Z9,SunMedium:j9,SunMoon:q9,SunSnow:G9,Sunrise:X9,Sunset:K9,Superscript:Q9,SwatchBook:J9,SwissFranc:tb,SwitchCamera:eb,Sword:ab,Swords:sb,Syringe:ib,Table:pb,Table2:nb,TableCellsMerge:ob,TableCellsSplit:rb,TableColumnsSplit:cb,TableOfContents:hb,TableProperties:db,TableRowsSplit:lb,Tablet:ub,TabletSmartphone:gb,Tablets:fb,Tag:vb,Tags:mb,Tally1:Mb,Tally2:yb,Tally3:xb,Tally4:bb,Tally5:wb,Tangent:Sb,Target:Cb,Telescope:Ab,Tent:Hb,TentTree:kb,Terminal:Lb,TerminalSquare:mn,TestTube:_b,TestTube2:bn,TestTubeDiagonal:bn,TestTubes:Tb,Text:Ib,TextCursor:Vb,TextCursorInput:Pb,TextQuote:Db,TextSearch:Eb,TextSelect:wn,TextSelection:wn,Theater:Ob,Thermometer:Fb,ThermometerSnowflake:Rb,ThermometerSun:Bb,ThumbsDown:zb,ThumbsUp:Nb,Ticket:Gb,TicketCheck:Wb,TicketMinus:$b,TicketPercent:Ub,TicketPlus:Zb,TicketSlash:jb,TicketX:qb,Tickets:Xb,TicketsPlane:Yb,Timer:Jb,TimerOff:Kb,TimerReset:Qb,ToggleLeft:tw,ToggleRight:ew,Tornado:aw,Torus:sw,Touchpad:nw,TouchpadOff:iw,TowerControl:ow,ToyBrick:rw,Tractor:cw,TrafficCone:hw,Train:Sn,TrainFront:lw,TrainFrontTunnel:dw,TrainTrack:pw,TramFront:Sn,Trash:uw,Trash2:gw,TreeDeciduous:fw,TreePalm:Cn,TreePine:vw,Trees:mw,Trello:Mw,TrendingDown:yw,TrendingUp:bw,TrendingUpDown:xw,Triangle:Sw,TriangleAlert:An,TriangleRight:ww,Trophy:Cw,Truck:Aw,Turtle:kw,Tv:Lw,Tv2:kn,TvMinimal:kn,TvMinimalPlay:Hw,Twitch:_w,Twitter:Tw,Type:Vw,TypeOutline:Pw,Umbrella:Ew,UmbrellaOff:Dw,Underline:Iw,Undo:Bw,Undo2:Ow,UndoDot:Rw,UnfoldHorizontal:Fw,UnfoldVertical:zw,Ungroup:Nw,University:Hn,Unlink:$w,Unlink2:Ww,Unlock:Xs,UnlockKeyhole:Ys,Unplug:Uw,Upload:Zw,UploadCloud:xs,Usb:jw,User:aS,User2:Dn,UserCheck:qw,UserCheck2:Ln,UserCircle:fs,UserCircle2:us,UserCog:Gw,UserCog2:_n,UserMinus:Yw,UserMinus2:Tn,UserPen:Xw,UserPlus:Kw,UserPlus2:Pn,UserRound:Dn,UserRoundCheck:Ln,UserRoundCog:_n,UserRoundMinus:Tn,UserRoundPen:Qw,UserRoundPlus:Pn,UserRoundSearch:Jw,UserRoundX:Vn,UserSearch:tS,UserSquare:yn,UserSquare2:Mn,UserX:eS,UserX2:Vn,Users:sS,Users2:En,UsersRound:En,Utensils:On,UtensilsCrossed:In,UtilityPole:iS,Variable:nS,Vault:oS,Vegan:rS,VenetianMask:cS,Verified:b1,Vibrate:dS,VibrateOff:hS,Video:pS,VideoOff:lS,Videotape:gS,View:uS,Voicemail:fS,Volume:xS,Volume1:vS,Volume2:mS,VolumeOff:MS,VolumeX:yS,Vote:bS,Wallet:SS,Wallet2:Rn,WalletCards:wS,WalletMinimal:Rn,Wallpaper:CS,Wand:AS,Wand2:Bn,WandSparkles:Bn,Warehouse:kS,WashingMachine:HS,Watch:LS,Waves:_S,Waypoints:TS,Webcam:PS,Webhook:DS,WebhookOff:VS,Weight:ES,Wheat:OS,WheatOff:IS,WholeWord:RS,Wifi:WS,WifiHigh:BS,WifiLow:FS,WifiOff:zS,WifiZero:NS,Wind:$S,Wine:ZS,WineOff:US,Workflow:jS,Worm:qS,WrapText:GS,Wrench:YS,X:XS,XCircle:vs,XOctagon:ei,XSquare:xn,Youtube:KS,Zap:JS,ZapOff:QS,ZoomIn:tC,ZoomOut:eC},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=({icons:a={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(a).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const s=document.querySelectorAll(`[${t}]`);if(Array.from(s).forEach(i=>d1(i,{nameAttr:t,icons:a,attrs:e})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(o=>d1(o,{nameAttr:"icon-name",icons:a,attrs:e})))}},Z={name:"SHIELD Cybersecurity Society",shortName:"SHIELD NITH",tagline:"Defending the Byte. Securing the Future.",institution:"National Institute of Technology Hamirpur (NIT Hamirpur)",location:"Department of Computer Science & Engineering, NIT Hamirpur, Himachal Pradesh, 177005",email:"shield@nith.ac.in",discord:"https://discord.gg/shield-nith-mock",github:"https://github.com/shield-nith",linkedin:"https://linkedin.com/company/shield-nith",twitter:"https://x.com/shield_nith",facultyAdvisor:{name:"Dr. Rakesh Kumar",role:"Faculty Advisor & Associate Professor, DoCSE",bio:"Pioneer in Network Security and Applied Cryptography research at NIT Hamirpur. Guiding SHIELD since its inception in 2021.",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"}},iC=[{label:"Active Members",value:"500+",icon:"users"},{label:"National CTF Podiums",value:"34",icon:"trophy"},{label:"Workshops & Bootcamps",value:"50+",icon:"terminal"},{label:"Bug Bounties Won",value:"₹2.4M+",icon:"shield-check"}],nC=[{id:"pwn",title:"Binary Exploitation & Pwn",description:"Memory corruption vulnerabilities, buffer overflows, ROP chains, kernel exploitation, and shellcoding.",icon:"cpu",badgeColor:"cyber-badge-red"},{id:"websec",title:"Web & Cloud Security",description:"OWASP Top 10 vulnerabilities, API security, OAuth bypasses, server-side exploitation, and AWS/Azure hardening.",icon:"globe",badgeColor:"cyber-badge-cyan"},{id:"re",title:"Reverse Engineering",description:"Decompiling malware binaries, disassembly with Ghidra & IDA Pro, anti-analysis evasion, and firmware analysis.",icon:"binary",badgeColor:"cyber-badge-teal"},{id:"crypto",title:"Cryptography & Math",description:"RSA attacks, elliptic curve cryptography, lattice reduction, post-quantum ciphers, and zero-knowledge proofs.",icon:"key-round",badgeColor:"cyber-badge-purple"},{id:"forensics",title:"Digital Forensics & Incident Response",description:"Memory dumps, PCAP network analysis, steganography, disk forensics, and threat hunting techniques.",icon:"file-search",badgeColor:"cyber-badge-cyan"}],va=[{id:"t1",name:"Aarav Sharma",role:"President & Team Captain",domain:"Core",batch:"Dual Degree CSE '26",bio:"Ranked Top 5 in InCTF 2025. Specialized in Linux Kernel Pwn and Browser Exploitation. Published CVE-2024-XXXX.",image:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",github:"https://github.com/aarav-pwn",linkedin:"https://linkedin.com/in/aarav-sharma-nith",twitter:"https://x.com/aarav_pwn"},{id:"t2",name:"Ananya Verma",role:"Vice President & Web Sec Lead",domain:"WebSec",batch:"B.Tech CSE '26",bio:"Bug bounty researcher with hall of fame mentions at Google, Meta, and RedHat. Passionate about GraphQL & SSRF.",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",github:"https://github.com/ananya-websec",linkedin:"https://linkedin.com/in/ananya-verma",twitter:"https://x.com/ananya_sec"},{id:"t3",name:"Rohan Thakur",role:"Reverse Engineering Lead",domain:"Reverse Engineering",batch:"B.Tech ECE '26",bio:"Ghidra plugin author and malware analyst. Focused on IoT firmware extraction and ARM assembly analysis.",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",github:"https://github.com/rohan-rev",linkedin:"https://linkedin.com/in/rohan-thakur",twitter:"https://x.com/rohan_asm"},{id:"t4",name:"Sneha Patel",role:"Cryptography & Math Lead",domain:"Cryptography",batch:"B.Tech CSE '27",bio:"Math enthusiast solving lattice-based cryptography challenges. 1st Place in Crypton 2025 CTF.",image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",github:"https://github.com/sneha-crypto",linkedin:"https://linkedin.com/in/sneha-patel",twitter:"https://x.com/sneha_crypto"},{id:"t5",name:"Vikramaditya Singh",role:"Forensics & IR Lead",domain:"Forensics",batch:"B.Tech Dual CSE '27",bio:"Network forensics nerd and Volatility contributor. Organizes NITH Cyber Hunt & DFIR workshops.",image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",github:"https://github.com/vikram-dfir",linkedin:"https://linkedin.com/in/vikramaditya-s",twitter:"https://x.com/vikram_dfir"},{id:"t6",name:"Dr. Rakesh Kumar",role:"Faculty Advisor",domain:"Advisors",batch:"Faculty, DoCSE",bio:"Associate Professor at NIT Hamirpur. Expertise in Wireless Sensor Networks & Cryptographic Protocols.",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",github:"https://github.com/rakesh-nith",linkedin:"https://linkedin.com/in/rakesh-kumar-nith",twitter:"https://x.com/rakesh_nith"}],bt=[{id:"e1",title:"SHIELD CTF 2026: National Hackathon",category:"CTF",type:"Upcoming",date:"2026-10-15T10:00:00+05:30",displayDate:"October 15-17, 2026",venue:"Main Auditorium & Online (Hybrid)",location:"NIT Hamirpur Campus",description:"48-hour national jeopardy-style CTF hosted by SHIELD NITH. Categories include Pwn, Web, Crypto, Rev, and Forensics with prize pool of ₹1,50,000.",prizes:"₹1,50,000 Total Cash Prizes + Swag + HTB Vouchers",speaker:"SHIELD Core Team & Guest Judges",status:"Registration Open",schemaJson:{"@context":"https://schema.org","@type":"Event",name:"SHIELD CTF 2026: National Hackathon",startDate:"2026-10-15T10:00:00+05:30",endDate:"2026-10-17T10:00:00+05:30",eventStatus:"https://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",location:{"@type":"Place",name:"NIT Hamirpur Main Auditorium",address:"NIT Hamirpur, HP, 177005"},description:"48-hour national jeopardy-style CTF hosted by SHIELD NITH."}},{id:"e2",title:"Hands-on Kernel Exploitation Workshop",category:"Workshop",type:"Upcoming",date:"2026-09-28T14:00:00+05:30",displayDate:"September 28, 2026",venue:"Lab 3, Department of CSE",location:"DoCSE, NIT Hamirpur",description:"Deep dive into Linux kernel internals, slab allocators, privilege escalation techniques, and writing custom Kernel ROP payloads.",prizes:"Certificate of Completion + Lab Access",speaker:"Aarav Sharma (SHIELD Captain)",status:"Limited Seats",schemaJson:{"@context":"https://schema.org","@type":"Event",name:"Hands-on Kernel Exploitation Workshop",startDate:"2026-09-28T14:00:00+05:30",eventStatus:"https://schema.org/EventScheduled",location:{"@type":"Place",name:"Lab 3, Department of CSE, NIT Hamirpur"}}},{id:"e3",title:"Bug Bounty Hunting 101: Web App Security",category:"Workshop",type:"Past",date:"2026-08-10T11:00:00+05:30",displayDate:"August 10, 2026",venue:"Mini Auditorium, NITH",location:"NIT Hamirpur Campus",description:"Interactive session on reconnaissance, Burp Suite Pro tips, IDOR exploitation, and writing impactful vulnerability reports.",prizes:"PortSwigger Academy Subscriptions",speaker:"Ananya Verma (Bug Bounty Hunter)",status:"Completed (250+ Attendees)",schemaJson:null},{id:"e4",title:"CyberSec Career & Industry AMA",category:"Seminar",type:"Past",date:"2026-07-20T16:00:00+05:30",displayDate:"July 20, 2026",venue:"Online Google Meet",location:"Virtual",description:"Industry insights from NITH alumni currently working at CrowdStrike, Google Security, and Palo Alto Networks.",prizes:"1-on-1 Resume Reviews",speaker:"NITH Cyber Alumni Panel",status:"Completed (300+ Viewers)",schemaJson:null}],oC=[{id:"p1",title:"ShieldScan: Automated Subdomain & Asset Scanner",category:"Tools",domain:"WebSec",description:"Open-source Python CLI tool built by SHIELD for rapid subdomain discovery, port scanning, and CVE fingerprinting.",stars:184,tags:["Python","Recon","OSINT","CLI"],link:"https://github.com/shield-nith/shieldscan-mock",docUrl:"#"},{id:"p2",title:"NITH CTF Lab Setup & Docker Environment",category:"Lab Setup",domain:"General",description:"One-command Docker environment pre-configured with Ghidra, gdb-pwndbg, Burp Suite, Volatility, and CyberChef.",stars:240,tags:["Docker","Linux","Pwn","Lab"],link:"https://github.com/shield-nith/ctf-docker-environment-mock",docUrl:"#"},{id:"p3",title:"Ultimate Heap Exploitation Cheatsheet",category:"Cheatsheets",domain:"Pwn",description:"Comprehensive guide covering glibc malloc internals, fastbin dup, tcache poisoning, and house of force techniques.",stars:310,tags:["C","Linux","glibc","Heap"],link:"https://github.com/shield-nith/heap-cheatsheet-mock",docUrl:"#"},{id:"p4",title:"InCTF 2025 Official SHIELD Writeups",category:"Writeups",domain:"All",description:"Detailed challenge solutions and exploits written by SHIELD members for InCTF 2025 national finals.",stars:95,tags:["CTF","Writeups","Crypto","Rev"],link:"https://github.com/shield-nith/inctf-2025-writeups-mock",docUrl:"#"},{id:"p5",title:"CryptoTool: Lattice Reduction & RSA Solver",category:"Tools",domain:"Cryptography",description:"SageMath script library for solving Hastad broadcast attacks, Coppersmith theorem, and LLL reductions.",stars:120,tags:["SageMath","Python","RSA","Lattice"],link:"https://github.com/shield-nith/cryptotool-mock",docUrl:"#"}],Fn=[{id:"b1",title:"Uncovering Zero-Day Flaws in IoT Firmware: A Case Study",author:"Rohan Thakur",date:"Sep 05, 2026",readTime:"6 min read",category:"Reverse Engineering",excerpt:"How we unpacked a router firmware binary using Binwalk and Ghidra to discover an unauthenticated remote code execution vulnerability.",content:`
### Introduction
During our weekend research sprint at SHIELD NITH, we analyzed a popular Wi-Fi router firmware image. Our goal was to understand the vendor's HTTP daemon implementation and identify potential memory safety bugs.

### Unpacking with Binwalk
We started by extracting the file system using \`binwalk -e firmware.bin\`. The command carved out the SquashFS filesystem, giving us direct access to the binary targets in \`/bin\` and \`/usr/sbin\`.

### Ghidra Analysis
Loading \`httpd\` into Ghidra with MIPS big-endian architecture, we located the custom CGI handler. The application used an unsanitized \`strcpy()\` buffer when parsing the HTTP \`Authorization\` header string.

\`\`\`c
void handle_auth(char *header) {
    char username_buf[64];
    // Vulnerable unchecked copy into stack buffer
    strcpy(username_buf, header);
}
\`\`\`

### Impact & Remediation
We reported the issue responsibly through the vendor's security portal. This case highlights why automated static analysis and memory-safe code practices are vital for embedded devices.
    `},{title:"SHIELD NITH Places 2nd at National CyberCon CTF",id:"b2",author:"SHIELD Media Team",date:"Aug 28, 2026",readTime:"3 min read",category:"Society News",excerpt:"SHIELD's competitive team 'NITH_ByteBusters' secured 2nd place among 180+ university teams at CyberCon 2026 in New Delhi.",content:`
We are thrilled to announce that team **NITH_ByteBusters**, representing SHIELD Cybersecurity Society, secured 2nd position overall at the prestigious CyberCon 2026 CTF held in New Delhi!

The 24-hour non-stop competition tested skills in web exploitation, binary pwn, lattice cryptography, and forensic analysis. Huge congratulations to team members Aarav, Ananya, Rohan, and Sneha for bringing home the trophy and a cash prize of ₹75,000!
    `},{title:"Demystifying OAuth 2.0 State Parameter Bypass Attacks",id:"b3",author:"Ananya Verma",date:"Aug 14, 2026",readTime:"8 min read",category:"Web Security",excerpt:"An in-depth guide on Cross-Site Request Forgery (CSRF) vulnerabilities in OAuth authentication flows and how to mitigate them.",content:`
OAuth 2.0 is the standard protocol for authorization, but missing or misconfigured \`state\` parameter validation can lead to account takeover via CSRF.

### The Mechanics of OAuth CSRF
When an application initiates an OAuth flow, it sends the user to an authorization server. Without a cryptographic, unpredictable \`state\` parameter tied to the user's session:

1. Attacker initiates OAuth flow and intercepts authorization code from provider.
2. Attacker tricks victim into completing the OAuth flow using the attacker's authorization code.
3. Victim's local application account is linked to attacker's social provider credentials.

### Prevention Best Practices
Always generate a strong cryptographically random \`state\` token stored in HTTPOnly cookies or server session prior to redirection.
    `}],zn=[{id:"g1",title:"SHIELD Hackathon 2025 Winners",category:"Hackathons",date:"2025",image:"https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",caption:"Prize distribution ceremony at NIT Hamirpur Auditorium with Director and HOD DoCSE."},{id:"g2",title:"Kernel Pwn Hands-on Workshop",category:"Workshops",date:"2025",image:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",caption:"Students solving custom kernel exploitation challenges in CSE Lab 2."},{id:"g3",title:"CyberCon 2026 Podium Moment",category:"CTF",date:"2026",image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",caption:"Team NITH_ByteBusters celebrating their 2nd place win at CyberCon 2026."},{id:"g4",title:"Bug Bounty Awareness Seminar",category:"Workshops",date:"2026",image:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",caption:"Over 250+ NIT Hamirpur students attending the Web Security seminar."},{id:"g5",title:"SHIELD Annual Team Outing",category:"Socials",date:"2025",image:"https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",caption:"Society core members and domain leads in Hamirpur hills."},{id:"g6",title:"Hardware Hacking & Router Teardown Lab",category:"Workshops",date:"2026",image:"https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",caption:"Analyzing UART pins and dumping flash memory from embedded routers."}],rC=[{name:"HackTheBox",tier:"Gold Partner",logoText:"HACKTHEBOX",type:"Platform & Labs Partner",perks:"VIP+ Lab Access & Exclusive CTF Hosting Support",website:"https://hackthebox.com"},{name:"TryHackMe",tier:"Gold Partner",logoText:"TRYHACKME",type:"Education Partner",perks:"Student Vouchers & Custom Learning Rooms",website:"https://tryhackme.com"},{name:"PortSwigger",tier:"Silver Partner",logoText:"PORTSWIGGER",type:"Web Security Partner",perks:"Burp Suite Certified Practitioner Sponsorship",website:"https://portswigger.net"},{name:"GitHub Education",tier:"Educational Partner",logoText:"GITHUB",type:"Infrastructure Partner",perks:"GitHub Student Developer Pack & Copilot Grants",website:"https://education.github.com"}],cC=[{id:"faq1",category:"Membership",question:"Who is eligible to join SHIELD Cybersecurity Society?",answer:"Any registered student (B.Tech, Dual Degree, M.Tech, Ph.D.) at NIT Hamirpur across any branch can join. Prior cybersecurity experience is NOT required for general membership; we hold beginner bootcamps every semester!"},{id:"faq2",category:"Membership",question:"How do I become a core member of the CTF competitive team?",answer:"You can apply during our annual induction drive held in September/October or by performing well in our internal monthly CTF competitions hosted on the SHIELD platform."},{id:"faq3",category:"Events & CTFs",question:"Are SHIELD workshops and hackathons free for NITH students?",answer:"Yes, 100% free! All internal workshops, guest lectures, CTF lab access, and bootcamps organized by SHIELD are completely free for all NIT Hamirpur students."},{id:"faq4",category:"Sponsorship",question:"How can companies sponsor SHIELD events or recruit NITH cyber talent?",answer:"Industry partners can reach out via our contact form or directly email shield@nith.ac.in. We offer customized sponsorship tiers (Gold, Silver, CTF Prize partner) with direct access to top-ranking student security researchers."},{id:"faq5",category:"Resources",question:"Where can I find beginner-friendly security tutorials?",answer:"Check our Projects/Resources tab on this website! We provide curated cheatsheets, recommended TryHackMe/HackTheBox pathways, and custom Docker environments for Linux kernel and web security labs."}],hC=[{id:"foundations",title:"FOUNDATIONS",domainSlug:"cybersecurity-fundamentals",icon:"shield"},{id:"networking",title:"NETWORKING",domainSlug:"network-security",icon:"network"},{id:"linux",title:"LINUX & SYSTEMS",domainSlug:"linux-security",icon:"terminal"},{id:"websec",title:"WEB SECURITY",domainSlug:"web-security",icon:"globe"},{id:"crypto",title:"CRYPTOGRAPHY",domainSlug:"cryptography",icon:"key-round"},{id:"forensics",title:"DIGITAL FORENSICS",domainSlug:"digital-forensics",icon:"file-search"},{id:"osint",title:"OSINT",domainSlug:"osint",icon:"search"},{id:"ethical-hacking",title:"ETHICAL HACKING",domainSlug:"ethical-hacking",icon:"zap"},{id:"vuln-assessment",title:"VULNERABILITY ASSESSMENT",domainSlug:"vulnerability-assessment",icon:"search-code"},{id:"pen-testing",title:"PENETRATION TESTING",domainSlug:"penetration-testing",icon:"target"},{id:"reverse-engineering",title:"REVERSE ENGINEERING",domainSlug:"reverse-engineering",icon:"cpu"},{id:"binary-exploitation",title:"BINARY EXPLOITATION",domainSlug:"binary-exploitation",icon:"binary"},{id:"malware-analysis",title:"MALWARE ANALYSIS",domainSlug:"malware-analysis",icon:"bug"},{id:"soc",title:"SOC & DEFENSIVE SECURITY",domainSlug:"soc-security",icon:"shield-alert"},{id:"incident-response",title:"INCIDENT RESPONSE",domainSlug:"incident-response",icon:"siren"},{id:"cloud-security",title:"CLOUD SECURITY",domainSlug:"cloud-security",icon:"cloud-lightning"},{id:"mobile-security",title:"MOBILE SECURITY",domainSlug:"mobile-security",icon:"smartphone"},{id:"wireless-security",title:"WIRELESS SECURITY",domainSlug:"wireless-security",icon:"wifi"},{id:"iot-security",title:"IoT SECURITY",domainSlug:"iot-security",icon:"radio"},{id:"devsecops",title:"DEVSECOPS",domainSlug:"devsecops",icon:"git-branch"},{id:"ctf",title:"CTF / PRACTICAL SECURITY",domainSlug:"ctf-practical-security",icon:"trophy"}],$e=[{id:"cybersecurity-fundamentals",slug:"cybersecurity-fundamentals",title:"Cybersecurity Fundamentals",description:"Core concepts of information security, CIA triad, threat models, security architecture, and ethics.",icon:"shield",difficulty:"Beginner",modulesCount:4,estimatedTime:"6 Hours",badgeColor:"cyber-badge-cyan"},{id:"network-security",slug:"network-security",title:"Networking & Network Security",description:"OSI model, TCP/IP, packet analysis with Wireshark, firewalls, IDS/IPS, VPNs, and network architecture.",icon:"network",difficulty:"Beginner to Advanced",modulesCount:6,estimatedTime:"14 Hours",badgeColor:"cyber-badge-cyan"},{id:"linux-security",slug:"linux-security",title:"Linux & System Security",description:"Linux CLI mastery, permissions, process isolation, hardening, system logging, and privilege escalation basics.",icon:"terminal",difficulty:"Beginner to Intermediate",modulesCount:5,estimatedTime:"10 Hours",badgeColor:"cyber-badge-teal"},{id:"web-security",slug:"web-security",title:"Web Security",description:"HTTP/HTTPS protocols, OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, SSRF, IDOR), Burp Suite, and API security.",icon:"globe",difficulty:"Beginner to Advanced",modulesCount:6,estimatedTime:"16 Hours",badgeColor:"cyber-badge-cyan"},{id:"cryptography",slug:"cryptography",title:"Cryptography",description:"Symmetric & asymmetric encryption (AES, RSA, ECC), hash functions (SHA-256), TLS/SSL, PKI, and HMAC.",icon:"key-round",difficulty:"Intermediate",modulesCount:5,estimatedTime:"12 Hours",badgeColor:"cyber-badge-purple"},{id:"digital-forensics",slug:"digital-forensics",title:"Digital Forensics",description:"Memory dumps, disk analysis, timeline creation, PCAP network forensics, Volatility, and Autopsy.",icon:"file-search",difficulty:"Intermediate",modulesCount:5,estimatedTime:"11 Hours",badgeColor:"cyber-badge-teal"},{id:"osint",slug:"osint",title:"OSINT (Open Source Intelligence)",description:"Reconnaissance methodology, domain enumeration, metadata analysis, search operators, and threat intelligence.",icon:"search",difficulty:"Beginner",modulesCount:4,estimatedTime:"7 Hours",badgeColor:"cyber-badge-cyan"},{id:"ethical-hacking",slug:"ethical-hacking",title:"Ethical Hacking",description:"Methodologies, scope of engagement, foot-printing, scanning, exploitation principles, and reporting.",icon:"zap",difficulty:"Intermediate",modulesCount:5,estimatedTime:"12 Hours",badgeColor:"cyber-badge-teal"},{id:"vulnerability-assessment",slug:"vulnerability-assessment",title:"Vulnerability Assessment",description:"Asset discovery, CVE databases, CVSS scoring, automated scanning, and vulnerability prioritization.",icon:"search-code",difficulty:"Intermediate",modulesCount:4,estimatedTime:"8 Hours",badgeColor:"cyber-badge-purple"},{id:"penetration-testing",slug:"penetration-testing",title:"Penetration Testing Concepts",description:"Rules of engagement, PTES framework, post-exploitation, pivoting, lateral movement, and remediation.",icon:"target",difficulty:"Advanced",modulesCount:5,estimatedTime:"15 Hours",badgeColor:"cyber-badge-red"},{id:"reverse-engineering",slug:"reverse-engineering",title:"Reverse Engineering",description:"x86/x64 assembly, Ghidra decompilation, GDB debugging, ELF/PE file structures, and anti-analysis evasion.",icon:"cpu",difficulty:"Advanced",modulesCount:5,estimatedTime:"18 Hours",badgeColor:"cyber-badge-red"},{id:"binary-exploitation",slug:"binary-exploitation",title:"Binary Exploitation",description:"Stack buffer overflows, ROP chains, heap exploitation (tcache, fastbin), shellcoding, and ASLR/NX bypasses.",icon:"binary",difficulty:"Advanced",modulesCount:5,estimatedTime:"20 Hours",badgeColor:"cyber-badge-red"},{id:"malware-analysis",slug:"malware-analysis",title:"Malware Analysis",description:"Static & dynamic analysis in isolated sandboxes, unpackers, behavior analysis, and IOC extraction.",icon:"bug",difficulty:"Advanced",modulesCount:5,estimatedTime:"14 Hours",badgeColor:"cyber-badge-red"},{id:"soc-security",slug:"soc-security",title:"Security Operations / SOC",description:"SIEM platforms, log aggregation, rule writing (Sigma/YARA), threat hunting, and security monitoring.",icon:"shield-alert",difficulty:"Intermediate",modulesCount:4,estimatedTime:"10 Hours",badgeColor:"cyber-badge-purple"},{id:"incident-response",slug:"incident-response",title:"Incident Response",description:"NIST/SANS IR frameworks, containment, eradication, recovery, forensic evidence preservation, and post-mortems.",icon:"siren",difficulty:"Intermediate to Advanced",modulesCount:4,estimatedTime:"9 Hours",badgeColor:"cyber-badge-red"},{id:"cloud-security",slug:"cloud-security",title:"Cloud Security",description:"AWS/Azure identity security, S3 bucket permissions, IAM policies, Kubernetes hardening, and cloud misconfigurations.",icon:"cloud-lightning",difficulty:"Intermediate",modulesCount:5,estimatedTime:"12 Hours",badgeColor:"cyber-badge-teal"},{id:"mobile-security",slug:"mobile-security",title:"Mobile Security",description:"Android APK decompilation with JADX, iOS binary analysis, Frida dynamic instrumentation, and OWASP Mobile Top 10.",icon:"smartphone",difficulty:"Intermediate to Advanced",modulesCount:4,estimatedTime:"11 Hours",badgeColor:"cyber-badge-purple"},{id:"wireless-security",slug:"wireless-security",title:"Wireless Security",description:"802.11 standards, WPA2/WPA3 enterprise protocols, rogue AP detection, handshake captures, and BLE security.",icon:"wifi",difficulty:"Intermediate",modulesCount:4,estimatedTime:"8 Hours",badgeColor:"cyber-badge-teal"},{id:"iot-security",slug:"iot-security",title:"IoT Security",description:"Hardware interfaces (UART, JTAG), firmware extraction, embedded Linux security, and MQTT protocol security.",icon:"radio",difficulty:"Advanced",modulesCount:4,estimatedTime:"13 Hours",badgeColor:"cyber-badge-red"},{id:"devsecops",slug:"devsecops",title:"DevSecOps",description:"CI/CD pipeline security, SAST/DAST integration, secrets management, software supply chain security, and SCA.",icon:"git-branch",difficulty:"Intermediate",modulesCount:4,estimatedTime:"10 Hours",badgeColor:"cyber-badge-cyan"},{id:"iam-security",slug:"iam-security",title:"Identity & Access Management",description:"Authentication protocols, SSO, SAML, OAuth 2.0, OpenID Connect, RBAC, ABAC, and privilege management.",icon:"user-check",difficulty:"Intermediate",modulesCount:4,estimatedTime:"8 Hours",badgeColor:"cyber-badge-purple"},{id:"application-security",slug:"application-security",title:"Application Security",description:"Secure coding practices, input validation, output encoding, threat modeling (STRIDE), and code reviews.",icon:"code-2",difficulty:"Intermediate",modulesCount:4,estimatedTime:"10 Hours",badgeColor:"cyber-badge-teal"},{id:"security-automation",slug:"security-automation",title:"Security Automation",description:"Python scripting for security, SOAR platforms, API automation, custom scapy script development.",icon:"bot",difficulty:"Intermediate",modulesCount:4,estimatedTime:"9 Hours",badgeColor:"cyber-badge-cyan"},{id:"ctf-practical-security",slug:"ctf-practical-security",title:"CTF & Practical Security",description:"Jeopardy & Attack-Defend strategies, gdb-pwndbg tricks, CyberChef recipes, flag formatting, and writeup techniques.",icon:"trophy",difficulty:"All Levels",modulesCount:5,estimatedTime:"20 Hours",badgeColor:"cyber-badge-cyan"}],Nn={"network-security":{domainId:"network-security",title:"Networking & Network Security",description:"Comprehensive network fundamentals, protocol mechanics, packet inspection, firewalls, and traffic analysis.",levels:[{level:1,levelTitle:"LEVEL 1 — BEGINNER (FOUNDATIONS)",modules:[{id:"net-mod-1",title:"Networking Fundamentals & Architectures",lessons:[{id:"net-les-1",title:"What is Networking & Network Types (LAN, WAN, MAN)",shortExplanation:"Computer networking connects independent computing systems to exchange data, resources, and services.",whyItMatters:"Every cyber security attack, defense, or forensic investigation involves computer networks. Understanding topology and scale is the foundation of network defense.",howItWorks:"Networks range from localized Local Area Networks (LANs) inside buildings using Ethernet or Wi-Fi, to Metropolitan Area Networks (MANs) spanning cities, and Wide Area Networks (WANs) such as the global Internet connecting Autonomous Systems (AS) via border gateways.",realWorldExample:"In an enterprise environment, a company office runs a LAN. When an employee accesses a cloud database in another region, traffic travels over a encrypted WAN link through ISP gateways.",diagram:"[Workstation / Client] ---> (Local Switch - LAN) ---> [Edge Firewall/Router] ---> (Internet / WAN) ---> [Remote Server]",commands:[{command:"ip addr",purpose:"View IP addresses and network interface status on Linux.",syntax:"ip addr show [interface]",example:"ip addr show eth0",expectedOutput:`2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0`,explanation:"Displays the inet (IPv4) address 192.168.1.50 with subnet mask /24 (255.255.255.0) assigned to network interface eth0.",safeContext:"Run locally on your Linux terminal to check interface IP configuration."}],tools:["ip","ping","traceroute"],securityImplications:"Misconfigured network boundaries can expose internal LAN services to public WAN access.",commonMistakes:"Confusing public IP addresses with private IP ranges (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16).",interviewQuestions:[{q:"What is the primary difference between a LAN and a WAN?",shortAnswer:"LAN covers a small local area (e.g., home/office) controlled by one org; WAN spans large geographic regions connected via public/private ISPs.",tip:"Mention speed differences, ownership control, and routing boundaries."}],quickRevision:"LAN = Local, WAN = Wide area internet connections. Check interface IPs with `ip addr`.",safeExercise:"Open your terminal and run `ip addr` or `ipconfig` to identify your local IP address and interface name."},{id:"net-les-2",title:"The OSI 7-Layer Model vs. TCP/IP Model",shortExplanation:"Conceptual frameworks that standardize network communication functions into abstract layers.",whyItMatters:"Security controls (firewalls, IDS, proxies) and attack vectors operate at specific layers of the OSI model.",howItWorks:"The OSI model has 7 layers: 1-Physical, 2-Data Link (MAC), 3-Network (IP), 4-Transport (TCP/UDP), 5-Session, 6-Presentation, 7-Application (HTTP/DNS). As data travels down the stack, each layer adds headers (Encapsulation). As it receives, headers are stripped (Decapsulation).",realWorldExample:"A Layer 3/4 firewall filters packets based on IP addresses and TCP/UDP ports, whereas a Layer 7 Web Application Firewall (WAF) inspects HTTP request payloads for SQL injection.",diagram:`OSI MODEL                 TCP/IP MODEL
7. Application         
6. Presentation    }--->  Application (HTTP, DNS, SSH)
5. Session        /
4. Transport      ---->  Transport (TCP, UDP)
3. Network        ---->  Internet (IP, ICMP)
2. Data Link      ____  Network Interface (Ethernet, Wi-Fi)
1. Physical       /`,commands:[{command:"ss -tulpn",purpose:"Display listening sockets and ports (Layer 4 Transport Layer).",syntax:"ss -tulpn",example:"ss -tulpn",expectedOutput:`Netid State  Recv-Q Send-Q Local Address:Port  Peer Address:Port Process
udp   UNCONN 0      0      0.0.0.0:53          0.0.0.0:*     users:(("systemd-resolved",pid=612,fd=13))
tcp   LISTEN 0      128    0.0.0.0:22          0.0.0.0:*     users:(("sshd",pid=890,fd=3))`,explanation:"Lists listening UDP port 53 (DNS) and TCP port 22 (SSH) along with process names.",safeContext:"Safe command to inspect what services are listening locally on your system."}],tools:["ss","netstat","Wireshark"],securityImplications:"Attackers target different layers: Layer 2 ARP spoofing, Layer 3/4 SYN floods, Layer 7 HTTP flood DDoS.",commonMistakes:"Thinking HTTPS encrypts Layer 3 IP headers. HTTPS only encrypts Layer 7 application data!",interviewQuestions:[{q:"At which OSI layer does a standard packet filtering firewall operate?",shortAnswer:"Layer 3 (Network - IP addresses) and Layer 4 (Transport - TCP/UDP ports).",tip:"Differentiate between network firewalls (L3/L4) and WAFs (L7)."}],quickRevision:"OSI = 7 Layers (APSTNDP). TCP/IP = 4 Layers. Encapsulation adds headers downwards.",safeExercise:"Execute `ss -tulpn` on Linux or `netstat -ano` on Windows to view active listening ports."}]}]},{level:2,levelTitle:"LEVEL 2 — INTERMEDIATE (NETWORK PROTOCOLS & CONCEPTS)",modules:[{id:"net-mod-2",title:"Core Protocols (DNS, ARP, DHCP, HTTP, SSH)",lessons:[{id:"net-les-3",title:"DNS Mechanics, Resolution & Security (DNSSEC)",shortExplanation:"The Domain Name System (DNS) translates human-readable domain names (e.g. nith.ac.in) into IP addresses.",whyItMatters:"DNS is critical infrastructure. DNS spoofing, cache poisoning, and DNS tunneling are major attack techniques.",howItWorks:"When you request a domain, the local OS checks cache, then queries the Recursive Resolver -> Root Server (.) -> TLD Server (.ac.in) -> Authoritative Nameserver.",realWorldExample:"Attackers perform DNS Hijacking by redirecting authoritative domain records to malicious phishing IPs.",diagram:`[Client] ---> (1. Query) ---> [Recursive Resolver]
                                    |---> (2. Query .) ---> [Root DNS]
                                    |---> (3. Query .ac.in) ---> [TLD DNS]
                                    |---> (4. Query nith.ac.in) ---> [Authoritative DNS]`,commands:[{command:"dig +trace nith.ac.in",purpose:"Perform a full iterative DNS resolution trace.",syntax:"dig +trace [domain]",example:"dig +trace nith.ac.in",expectedOutput:"nith.ac.in. 300 IN A 14.139.221.6",explanation:"Shows step-by-step query from root servers down to the authoritative answer.",safeContext:"Safe diagnostic tool to test domain resolution."}],tools:["dig","nslookup","Wireshark"],securityImplications:"Unencrypted DNS (UDP 53) allows ISPs and attackers on public Wi-Fi to log every website domain you visit. DoH (DNS over HTTPS) mitigates this.",commonMistakes:"Assuming DNS queries are encrypted by default.",interviewQuestions:[{q:"Explain DNS Cache Poisoning.",shortAnswer:"An attacker injects forged DNS responses into a resolver cache, redirecting users to malicious IPs before the real server responds.",tip:"Mention transaction ID matching and DNSSEC signatures."}],quickRevision:"DNS runs on UDP/TCP port 53. `dig` is the primary CLI tool for DNS queries.",safeExercise:"Run `dig nith.ac.in ANY` in terminal to inspect DNS records."}]}]},{level:3,levelTitle:"LEVEL 3 — ADVANCED (NETWORK DEFENSE & TOOLS)",modules:[{id:"net-mod-3",title:"Packet Analysis with Wireshark & tcpdump",lessons:[{id:"net-les-4",title:"Capture & Analyze Traffic using tcpdump and Wireshark",shortExplanation:"Packet inspection captures raw network frames to analyze protocols, debug issues, and detect intrusions.",whyItMatters:"Packet analysis is mandatory for Threat Hunting, Incident Response, and Security Audits.",howItWorks:"Network interface cards (NICs) placed in promiscuous mode pass all captured frames on the wire to capture libraries (libpcap/npcap) for dissection.",realWorldExample:"Analyzing a PCAP file to detect cleartext password transmission over FTP or unencrypted HTTP.",diagram:"[Network Wire] ===(Promiscuous Mode NIC)===> [libpcap / tcpdump] ===> [.pcap File] ===> [Wireshark Dissector]",commands:[{command:'tcpdump -i eth0 -n "port 80 or port 443" -w capture.pcap',purpose:"Capture web traffic on interface eth0 and write raw packets to file.",syntax:"tcpdump -i [interface] [filter] -w [filename]",example:'tcpdump -i eth0 -n "tcp port 80" -c 10',expectedOutput:"17:18:02.123456 IP 192.168.1.50.49152 > 104.21.5.10.80: Flags [S], seq 123456789",explanation:"Captures 10 TCP packets on port 80 displaying IP addresses, port numbers, TCP SYN flags [S], and sequence numbers.",safeContext:"Only capture traffic on interfaces you own or have permission to monitor."}],tools:["tcpdump","Wireshark","tshark"],securityImplications:"Cleartext protocols (HTTP, Telnet, FTP) leak credentials to anyone running a packet sniffer on the local LAN segment.",commonMistakes:"Running packet captures on high-speed 10Gbps links without BPF (Berkeley Packet Filters), causing packet drops.",interviewQuestions:[{q:"What display filter in Wireshark finds all HTTP POST requests containing data?",shortAnswer:'`http.request.method == "POST"`',tip:"Know basic BPF and Wireshark display filter syntax."}],quickRevision:"tcpdump = CLI packet capture. Wireshark = GUI analysis. BPF filters optimize captures.",safeExercise:"Run `tcpdump -i any -c 5 icmp` in terminal, then open another terminal and run `ping 8.8.8.8` to observe ICMP packets."}]}]}]},"web-security":{domainId:"web-security",title:"Web Security",description:"Web applications, HTTP protocols, authentication, OWASP Top 10 vulnerabilities, and security auditing.",levels:[{level:1,levelTitle:"LEVEL 1 — BEGINNER (WEB FUNDAMENTALS)",modules:[{id:"web-mod-1",title:"HTTP Protocol, Headers, Cookies & Sessions",lessons:[{id:"web-les-1",title:"HTTP Request & Response Cycle, Verbs & Headers",shortExplanation:"HTTP is a stateless application-layer protocol for transmitting hypermedia documents across client and server.",whyItMatters:"Web security vulnerabilities stem from improper handling of client-controlled HTTP inputs on the server side.",howItWorks:"The client sends an HTTP Request (GET, POST, PUT, DELETE) containing URL, Headers, and Body. The server processes it and returns an HTTP Response with status code (200, 404, 500), headers, and payload.",realWorldExample:"Manipulating HTTP Headers like `User-Agent` or `X-Forwarded-For` to bypass IP-based access controls.",diagram:`[Browser Client] --- HTTP GET /index.html ---> [Web Server]
[Browser Client] <--- 200 OK (HTML Payload) --- [Web Server]`,commands:[{command:"curl -i -X GET https://shield-nith.ac.in",purpose:"Fetch web page with HTTP response headers included.",syntax:"curl -i [URL]",example:"curl -i https://shield-nith.ac.in",expectedOutput:`HTTP/2 200
content-type: text/html; charset=UTF-8
server: nginx
strict-transport-security: max-age=31536000`,explanation:"Shows HTTP response headers including Strict-Transport-Security (HSTS).",safeContext:"Standard HTTP client diagnostic tool."}],tools:["curl","Browser DevTools","Burp Suite"],securityImplications:"Security headers like CSP, HSTS, X-Frame-Options protect browsers against XSS and clickjacking.",commonMistakes:"Trusting any client-side header value on the server without validation.",interviewQuestions:[{q:"What is the difference between HTTP GET and POST requests?",shortAnswer:"GET requests data in URL parameters (visible, cached); POST submits data in the request body (not cached, suitable for sensitive data).",tip:"Never send passwords or sensitive tokens via GET parameters."}],quickRevision:"HTTP is stateless. `curl -v` provides full verbosity of headers.",safeExercise:"Open Chrome/Firefox DevTools (F12) -> Network tab and observe request headers when reloading a web page."}]}]},{level:2,levelTitle:"LEVEL 2 — INTERMEDIATE (OWASP VULNERABILITIES)",modules:[{id:"web-mod-2",title:"Injection Attacks (SQLi, Command Injection)",lessons:[{id:"web-les-2",title:"SQL Injection (SQLi) - Principles & Mitigation",shortExplanation:"SQLi occurs when untrusted user input is directly concatenated into dynamic SQL queries without parameterization.",whyItMatters:"SQLi can lead to complete database dump, authentication bypass, data tampering, and remote code execution (RCE).",howItWorks:"An attacker inputs payload like ' OR '1'='1 which modifies query logic: SELECT * FROM users WHERE user='' OR '1'='1' AND pass=''.",realWorldExample:"Bypassing login screens by entering ' OR 1=1 -- into username input fields.",diagram:"[User Input: ' OR 1=1 --] ===> [Vulnerable Query Concatenation] ===> Database Executes: TRUE ===> Auth Bypassed!",commands:[{command:"ffuf -w wordlist.txt -u http://127.0.0.1:8080/page?id=FUZZ",purpose:"Fuzz web parameters to discover injection anomalies.",syntax:"ffuf -w [wordlist] -u [URL]",example:"ffuf -w sqli.txt -u http://localhost:3000/api?q=FUZZ",expectedOutput:"200 OK payload: 1' OR 1=1",explanation:"Substitutes wordlist items into FUZZ placeholder to discover vulnerable endpoints.",safeContext:"Only run fuzzers on authorized local lab targets."}],tools:["Burp Suite","sqlmap","ffuf"],securityImplications:"Always use Prepared Statements (Parameterized Queries) or ORMs to eliminate SQLi risks entirely.",commonMistakes:"Trying to prevent SQLi using input blacklists (e.g. stripping SELECT or UNION) instead of parameterized queries.",interviewQuestions:[{q:"How do Prepared Statements prevent SQL Injection?",shortAnswer:"They separate query code from user data. The database compiles the SQL template first, treating user input strictly as literal parameter values.",tip:"Emphasize that user input can never alter query logic in parameterized queries."}],quickRevision:"SQLi = Unsafe concatenation of input in queries. Solution = Parameterized Queries.",safeExercise:"Set up OWASP Juice Shop in Docker (`docker run -p 3000:3000 bkimminich/juice-shop`) and solve the initial SQLi login challenge."}]}]}]},cryptography:{domainId:"cryptography",title:"Cryptography",description:"Mathematics of secrets, symmetric/asymmetric ciphers, hashing, MACs, and public key infrastructure.",levels:[{level:1,levelTitle:"LEVEL 1 — BEGINNER (CRYPTO ESSENTIALS)",modules:[{id:"cry-mod-1",title:"Symmetric & Asymmetric Encryption, Hashes",lessons:[{id:"cry-les-1",title:"Symmetric Encryption vs. Asymmetric Cryptography",shortExplanation:"Symmetric crypto uses a single shared secret key for encryption & decryption. Asymmetric uses public/private key pairs.",whyItMatters:"Symmetric encryption (AES-256) is fast and protects bulk data. Asymmetric (RSA/ECC) solves key exchange and identity authentication.",howItWorks:"In RSA, Alice encrypts with Bob's Public Key. Only Bob's Private Key can decrypt it. In AES, both parties must securely share the key beforehand.",realWorldExample:"TLS handshakes use asymmetric ECC Diffie-Hellman to exchange a session key, then switch to symmetric AES-GCM for fast data transfer.",diagram:`SYMMETRIC:   Plaintext + SecretKey ===> Ciphertext ===> Ciphertext + SecretKey ===> Plaintext
ASYMMETRIC:  Plaintext + BobPublicKey ===> Ciphertext ===> Ciphertext + BobPrivateKey ===> Plaintext`,commands:[{command:"openssl rand -hex 16",purpose:"Generate a cryptographically secure 128-bit random hex key.",syntax:"openssl rand -hex [num_bytes]",example:"openssl rand -hex 16",expectedOutput:"4f2e8a10b99c73d5e21f00a98b4712ce",explanation:"Uses OS CSPRNG source (/dev/urandom) to generate 16 random bytes.",safeContext:"Safe utility for key generation."}],tools:["openssl","CyberChef"],securityImplications:"Hardcoding encryption keys in source code leads to full system compromise.",commonMistakes:"Using ECB mode in AES which preserves pattern structures in ciphertext.",interviewQuestions:[{q:"What is the main advantage of Asymmetric cryptography over Symmetric cryptography?",shortAnswer:"It solves key distribution; parties can communicate securely without sharing secret keys in advance.",tip:"Note that symmetric encryption is significantly faster."}],quickRevision:"Symmetric = 1 Shared Key (AES). Asymmetric = Key Pair (RSA/ECC).",safeExercise:"Run `openssl dgst -sha256 myfile.txt` to calculate SHA-256 checksum of a file."}]}]}]}};function ma(a){if(Nn[a])return Nn[a];const t=$e.find(e=>e.slug===a)||{title:a.replace(/-/g," ").toUpperCase(),description:"Structured educational curriculum covering key concepts, tools, and practical exercises."};return{domainId:a,title:t.title,description:t.description,levels:[{level:1,levelTitle:"LEVEL 1 — BEGINNER (FOUNDATIONS)",modules:[{id:`${a}-mod-1`,title:`${t.title} Fundamentals & Core Principles`,lessons:[{id:`${a}-les-1`,title:`Introduction to ${t.title}`,shortExplanation:`Essential concepts and operational principles of ${t.title}.`,whyItMatters:`Understanding ${t.title} is essential for building defensive resilience and identifying vulnerabilities.`,howItWorks:`Core workflows and technical mechanisms that govern ${t.title} systems.`,realWorldExample:`Practical industry applications and threat models encountered in ${t.title}.`,diagram:`[Client / User] ===> (${t.title} Control Boundary) ===> [Protected Target System]`,commands:[{command:`echo "Learning ${t.title}"`,purpose:"Demonstrate terminal execution context.",syntax:"echo [text]",example:`echo "Studying ${t.title} at SHIELD NITH"`,expectedOutput:`Studying ${t.title} at SHIELD NITH`,explanation:"Prints formatted text to stdout.",safeContext:"Safe shell command."}],tools:["Wireshark","Nmap","Linux CLI"],securityImplications:"Lack of defensive hardening and monitoring creates high-risk exposure points.",commonMistakes:"Ignoring default configurations and failing to audit system access logs.",interviewQuestions:[{q:`What is the core security objective in ${t.title}?`,shortAnswer:"Maintaining Confidentiality, Integrity, and Availability while enforcing least privilege.",tip:"Always align technical answers with core security frameworks."}],quickRevision:`Review core ${t.title} concepts and CLI diagnostic commands.`,safeExercise:`Set up a local test environment or lab to practice ${t.title} exercises.`}]}]},{level:2,levelTitle:"LEVEL 2 — INTERMEDIATE (PRACTICAL APPLICATIONS)",modules:[{id:`${a}-mod-2`,title:`Advanced ${t.title} Techniques`,lessons:[{id:`${a}-les-2`,title:`Practical Tools & Hardening for ${t.title}`,shortExplanation:`Hands-on tools, diagnostics, and defensive controls for ${t.title}.`,whyItMatters:"Translates theoretical concepts into active defense and vulnerability auditing.",howItWorks:"Utilizing specialized security utilities to audit system state and enforce security baselines.",realWorldExample:"Auditing system configurations against CIS Benchmarks.",diagram:"[Audit Scanner] ---> (Rule Set Check) ---> [Target Config] ---> [Compliance Report]",commands:[{command:"uname -a",purpose:"Check operating system release and kernel details.",syntax:"uname -a",example:"uname -a",expectedOutput:"Linux nith-cyber 6.8.0-generic #1 SMP x86_64",explanation:"Outputs system kernel architecture and build date.",safeContext:"Standard diagnostic command."}],tools:["Ghidra","Burp Suite","curl"],securityImplications:"Regular security assessments prevent security regression in production.",commonMistakes:"Running scans without defining scope or authorizing targets.",interviewQuestions:[{q:"How do you prioritize remediation for identified vulnerabilities?",shortAnswer:"Using CVSS scores combined with asset criticality, exploit availability, and exposure level.",tip:"Highlight risk-based decision making."}],quickRevision:"Combine automated tools with manual verification for effective security assessment.",safeExercise:"Perform an inventory of active services on your local machine using CLI tools."}]}]}]}}const dC=[{category:"Linux & Systems",commands:[{command:"ls -la",purpose:"List all directory contents including hidden files with long format details.",syntax:"ls [options] [path]",example:"ls -la /var/log",expectedOutput:`drwxr-xr-x  2 root root 4096 Sep 12 10:00 .
-rw-r-----  1 root adm  12450 Sep 12 10:05 auth.log`,explanation:"Displays file permissions, owner, group, size, modification date, and filename including dotfiles.",safeContext:"Safe read-only command."},{command:'grep -rnI "password" .',purpose:'Recursively search directory for literal text matching "password", ignoring binary files.',syntax:'grep [options] "pattern" [path]',example:'grep -rnI "SECRET_KEY" ./src',expectedOutput:'./src/config.js:14:const SECRET_KEY = "env_var_placeholder";',explanation:"Scans text files recursively line-by-line and prints filename with line numbers.",safeContext:"Useful for auditing local source code for hardcoded secrets."},{command:"chmod 600 id_rsa",purpose:"Set strict read/write permissions for file owner only (SSH private key security requirement).",syntax:"chmod [octal_mode] [file]",example:"chmod 600 ~/.ssh/id_rsa",expectedOutput:"Permissions updated: -rw-------",explanation:"Octal 600 grants owner read (4) + write (2), revoking all access for group and others.",safeContext:"Essential for securing SSH keys on Linux."}]},{category:"Networking",commands:[{command:"ip route",purpose:"Display kernel IP routing table.",syntax:"ip route",example:"ip route",expectedOutput:`default via 192.168.1.1 dev eth0 proto dhcp metric 100
192.168.1.0/24 dev eth0 proto kernel scope link src 192.168.1.50`,explanation:"Shows default gateway router IP (192.168.1.1) and active local network interface.",safeContext:"Safe network diagnostic command."},{command:"nmap -sV -sC -p 22,80,443 127.0.0.1",purpose:"Scan localhost for open ports 22, 80, 443 with service version detection and default safe scripts.",syntax:"nmap [flags] [target]",example:"nmap -sV -p 80 localhost",expectedOutput:`PORT   STATE SERVICE VERSION
80/tcp open  http    nginx 1.18.0`,explanation:"Probes TCP ports on localhost to discover active web server software version.",safeContext:"Only scan localhost or explicitly authorized systems."}]}],lC=[{id:"wireshark",name:"Wireshark",category:"Network Inspection",description:"The world's foremost network protocol analyzer for deep-packet inspection.",whySecurityProsUseIt:"Allows security analysts to capture and interactively browse network traffic running on computer networks.",installation:"sudo apt-get install wireshark",basicUsage:"wireshark -i eth0",importantCommands:["tshark -i eth0 -w dump.pcap",'tshark -r dump.pcap -Y "http"'],safeLabExample:"Capture local loopback traffic while running `curl http://localhost:3000` to analyze HTTP headers.",docUrl:"https://www.wireshark.org/docs/"},{id:"nmap",name:"Nmap (Network Mapper)",category:"Reconnaissance & Auditing",description:"Open-source utility for network discovery, port scanning, and vulnerability auditing.",whySecurityProsUseIt:"Discovers hosts on networks, open ports, running services, OS versions, and firewall configurations.",installation:"sudo apt-get install nmap",basicUsage:"nmap -sV -F localhost",importantCommands:["nmap -sS -p- 127.0.0.1","nmap -sU --top-ports 20 127.0.0.1"],safeLabExample:"Audit your local web server port configuration using `nmap -sV -p 80,443 127.0.0.1`.",docUrl:"https://nmap.org/book/man.html"},{id:"burpsuite",name:"Burp Suite",category:"Web Security Testing",description:"Leading graphical tool for testing web application security and intercepting HTTP traffic.",whySecurityProsUseIt:"Acts as a local proxy between browser and web server, allowing researchers to modify HTTP requests on the fly.",installation:"Download Community Edition installer from PortSwigger.",basicUsage:"Set browser proxy to 127.0.0.1:8080 and navigate target web app.",importantCommands:["Proxy Intercept ON","Send request to Repeater (Ctrl+R)"],safeLabExample:"Intercept login request to local OWASP Juice Shop lab to inspect form fields.",docUrl:"https://portswigger.net/burp/documentation"},{id:"ghidra",name:"Ghidra",category:"Reverse Engineering",description:"Software reverse engineering (SRE) framework developed by NSA Research Directorate.",whySecurityProsUseIt:"Decompiles binary executables into C-like pseudocode for malware analysis and binary auditing.",installation:"Download ZIP release from ghidra-sre.org and run ./ghidraRun",basicUsage:"./ghidraRun",importantCommands:["Import File (I)","Analyze (Auto Analysis)","Decompile Window (Ctrl+E)"],safeLabExample:"Decompile a simple C binary compiled locally to observe main() decompilation.",docUrl:"https://ghidra-sre.org/"}],Wn=[{term:"CIA Triad",category:"Fundamentals",definition:"The core security model consisting of Confidentiality (privacy), Integrity (trustworthiness), and Availability (accessibility)."},{term:"TCP",category:"Networking",definition:"Transmission Control Protocol. Connection-oriented, reliable transport protocol with 3-way handshake."},{term:"UDP",category:"Networking",definition:"User Datagram Protocol. Connectionless, lightweight transport protocol without guaranteed delivery."},{term:"DNS",category:"Networking",definition:"Domain Name System. Distributed database translating hostnames to IP addresses."},{term:"TLS",category:"Cryptography",definition:"Transport Layer Security. Cryptographic protocol designed to provide privacy and data integrity over networks."},{term:"XSS",category:"Web Security",definition:"Cross-Site Scripting. Vulnerability allowing attackers to inject malicious scripts into trusted websites viewed by users."},{term:"SQLi",category:"Web Security",definition:"SQL Injection. Vulnerability where untrusted user input alters database SQL query logic."},{term:"CSRF",category:"Web Security",definition:"Cross-Site Request Forgery. Attack forcing an authenticated end user to execute unwanted actions on a web app."},{term:"JWT",category:"Authentication",definition:"JSON Web Token. Compact, URL-safe means of representing claims to be transferred between two parties."},{term:"CVE",category:"Vulnerabilities",definition:"Common Vulnerabilities and Exposures. Standardized public dictionary of known security flaws."},{term:"CVSS",category:"Vulnerabilities",definition:"Common Vulnerability Scoring System. Standard framework for rating vulnerability severity from 0.0 to 10.0."},{term:"SIEM",category:"SOC & Defense",definition:"Security Information and Event Management. Software aggregating security logs for analysis and alert detection."}],pC=[{id:"cs-linux",title:"Linux Security & CLI Cheatsheet",category:"Linux",content:`
# Linux File Permissions
chmod 700 file.txt  # Owner read/write/execute only
chmod 644 file.txt  # Owner rw, Group/Others r
chown user:group file.txt

# File Searching & Auditing
find / -name "*.conf" 2>/dev/null  # Search config files suppressing errors
grep -rnI "API_KEY" /etc/           # Recursive text search
lsof -i :80                         # View process using port 80

# Process & Service Inspection
ps aux | grep nginx                 # List processes matching pattern
systemctl status sshd               # Check SSH service status
journalctl -u sshd -n 50 --no-pager # View last 50 SSH service logs
    `},{id:"cs-network",title:"Networking & Nmap Quick Reference",category:"Networking",content:`
# Network Interface Diagnostics
ip addr show                        # Display interface IPs
ip route                            # View default gateway and routing table
ss -tulpn                           # List listening TCP/UDP ports with PIDs

# Nmap Scanning Recipes
nmap -sV -sC 127.0.0.1              # Version & default script scan on localhost
nmap -sn 192.168.1.0/24             # Ping sweep subnet discovery
nmap -p- --min-rate 1000 127.0.0.1  # Fast scan all 65535 ports on localhost
    `}];class gC{constructor(){this.storageKey="shield_learning_progress_v1",this.data=this.load()}load(){try{const t=localStorage.getItem(this.storageKey);return t?{...this.getDefaults(),...JSON.parse(t)}:this.getDefaults()}catch{return this.getDefaults()}}getDefaults(){return{completedLessons:[],bookmarks:[],recentlyViewed:[],lastActiveLesson:null,quizScores:{}}}save(){try{localStorage.setItem(this.storageKey,JSON.stringify(this.data))}catch(t){console.warn("Failed to save learning progress to LocalStorage:",t)}}isLessonCompleted(t){return this.data.completedLessons.includes(t)}toggleLessonCompleted(t){return this.isLessonCompleted(t)?this.data.completedLessons=this.data.completedLessons.filter(e=>e!==t):this.data.completedLessons.push(t),this.save(),this.isLessonCompleted(t)}isBookmarked(t){return this.data.bookmarks.includes(t)}toggleBookmark(t){return this.isBookmarked(t)?this.data.bookmarks=this.data.bookmarks.filter(e=>e!==t):this.data.bookmarks.push(t),this.save(),this.isBookmarked(t)}recordVisit(t,e,s){this.data.lastActiveLesson={domainSlug:t,lessonId:e,lessonTitle:s,timestamp:new Date().toISOString()};const i=this.data.recentlyViewed.findIndex(o=>o.lessonId===e);i!==-1&&this.data.recentlyViewed.splice(i,1),this.data.recentlyViewed.unshift({domainSlug:t,lessonId:e,lessonTitle:s,timestamp:new Date().toISOString()}),this.data.recentlyViewed.length>10&&this.data.recentlyViewed.pop(),this.save()}saveQuizScore(t,e,s){this.data.quizScores[t]={score:e,total:s,timestamp:new Date().toISOString()},this.save()}getDomainProgress(t,e){return!t||t===0?0:Math.min(Math.round(e/t*100),100)}getOverallStats(t){const e=this.data.completedLessons.length,s=this.data.bookmarks.length,i=this.data.lastActiveLesson;return{completedCount:e,bookmarkCount:s,lastActive:i,recentlyViewed:this.data.recentlyViewed}}}const tt=new gC;function uC(a="cyber-canvas"){const t=document.getElementById(a);if(!t)return;const e=t.getContext("2d");let s,i,o=[],r={x:null,y:null,radius:120};function c(){s=t.width=t.parentElement?t.parentElement.offsetWidth:window.innerWidth,i=t.height=t.parentElement?t.parentElement.offsetHeight:window.innerHeight,d()}class h{constructor(){this.x=Math.random()*s,this.y=Math.random()*i,this.vx=(Math.random()-.5)*.8,this.vy=(Math.random()-.5)*.8,this.radius=Math.random()*2+1,this.color=Math.random()>.4?"#00f3ff":"#00ffcc",this.alpha=Math.random()*.6+.2}draw(){e.save(),e.globalAlpha=this.alpha,e.beginPath(),e.arc(this.x,this.y,this.radius,0,Math.PI*2),e.fillStyle=this.color,e.shadowBlur=8,e.shadowColor=this.color,e.fill(),e.restore()}update(){if(this.x+=this.vx,this.y+=this.vy,(this.x<0||this.x>s)&&(this.vx*=-1),(this.y<0||this.y>i)&&(this.vy*=-1),r.x!==null&&r.y!==null){const u=r.x-this.x,f=r.y-this.y,v=Math.sqrt(u*u+f*f);if(v<r.radius){const m=(r.radius-v)/r.radius;this.x-=u/v*m*3,this.y-=f/v*m*3}}}}function d(){o=[];const g=Math.min(Math.floor(s*i/12e3),75);for(let u=0;u<g;u++)o.push(new h)}function l(){for(let g=0;g<o.length;g++)for(let u=g+1;u<o.length;u++){const f=o[g].x-o[u].x,v=o[g].y-o[u].y,m=Math.sqrt(f*f+v*v);m<110&&(e.save(),e.globalAlpha=(1-m/110)*.25,e.beginPath(),e.moveTo(o[g].x,o[g].y),e.lineTo(o[u].x,o[u].y),e.strokeStyle="#00f3ff",e.lineWidth=.8,e.stroke(),e.restore())}}function p(){e.clearRect(0,0,s,i),e.save(),e.strokeStyle="rgba(0, 243, 255, 0.03)",e.lineWidth=1;const g=40;for(let u=0;u<s;u+=g)e.beginPath(),e.moveTo(u,0),e.lineTo(u,i),e.stroke();for(let u=0;u<i;u+=g)e.beginPath(),e.moveTo(0,u),e.lineTo(s,u),e.stroke();e.restore(),o.forEach(u=>{u.update(),u.draw()}),l(),requestAnimationFrame(p)}window.addEventListener("resize",c),window.addEventListener("mousemove",g=>{const u=t.getBoundingClientRect();r.x=g.clientX-u.left,r.y=g.clientY-u.top}),window.addEventListener("mouseleave",()=>{r.x=null,r.y=null}),c(),p()}/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */function Ae(a){return a+.5|0}const wt=(a,t,e)=>Math.max(Math.min(a,e),t);function oe(a){return wt(Ae(a*2.55),0,255)}function Ht(a){return wt(Ae(a*255),0,255)}function vt(a){return wt(Ae(a/2.55)/100,0,1)}function $n(a){return wt(Ae(a*100),0,100)}const nt={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Va=[..."0123456789ABCDEF"],fC=a=>Va[a&15],vC=a=>Va[(a&240)>>4]+Va[a&15],_e=a=>(a&240)>>4===(a&15),mC=a=>_e(a.r)&&_e(a.g)&&_e(a.b)&&_e(a.a);function MC(a){var t=a.length,e;return a[0]==="#"&&(t===4||t===5?e={r:255&nt[a[1]]*17,g:255&nt[a[2]]*17,b:255&nt[a[3]]*17,a:t===5?nt[a[4]]*17:255}:(t===7||t===9)&&(e={r:nt[a[1]]<<4|nt[a[2]],g:nt[a[3]]<<4|nt[a[4]],b:nt[a[5]]<<4|nt[a[6]],a:t===9?nt[a[7]]<<4|nt[a[8]]:255})),e}const yC=(a,t)=>a<255?t(a):"";function xC(a){var t=mC(a)?fC:vC;return a?"#"+t(a.r)+t(a.g)+t(a.b)+yC(a.a,t):void 0}const bC=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function go(a,t,e){const s=t*Math.min(e,1-e),i=(o,r=(o+a/30)%12)=>e-s*Math.max(Math.min(r-3,9-r,1),-1);return[i(0),i(8),i(4)]}function wC(a,t,e){const s=(i,o=(i+a/60)%6)=>e-e*t*Math.max(Math.min(o,4-o,1),0);return[s(5),s(3),s(1)]}function SC(a,t,e){const s=go(a,1,.5);let i;for(t+e>1&&(i=1/(t+e),t*=i,e*=i),i=0;i<3;i++)s[i]*=1-t-e,s[i]+=t;return s}function CC(a,t,e,s,i){return a===i?(t-e)/s+(t<e?6:0):t===i?(e-a)/s+2:(a-t)/s+4}function Ga(a){const e=a.r/255,s=a.g/255,i=a.b/255,o=Math.max(e,s,i),r=Math.min(e,s,i),c=(o+r)/2;let h,d,l;return o!==r&&(l=o-r,d=c>.5?l/(2-o-r):l/(o+r),h=CC(e,s,i,l,o),h=h*60+.5),[h|0,d||0,c]}function Ya(a,t,e,s){return(Array.isArray(t)?a(t[0],t[1],t[2]):a(t,e,s)).map(Ht)}function Xa(a,t,e){return Ya(go,a,t,e)}function AC(a,t,e){return Ya(SC,a,t,e)}function kC(a,t,e){return Ya(wC,a,t,e)}function uo(a){return(a%360+360)%360}function HC(a){const t=bC.exec(a);let e=255,s;if(!t)return;t[5]!==s&&(e=t[6]?oe(+t[5]):Ht(+t[5]));const i=uo(+t[2]),o=+t[3]/100,r=+t[4]/100;return t[1]==="hwb"?s=AC(i,o,r):t[1]==="hsv"?s=kC(i,o,r):s=Xa(i,o,r),{r:s[0],g:s[1],b:s[2],a:e}}function LC(a,t){var e=Ga(a);e[0]=uo(e[0]+t),e=Xa(e),a.r=e[0],a.g=e[1],a.b=e[2]}function _C(a){if(!a)return;const t=Ga(a),e=t[0],s=$n(t[1]),i=$n(t[2]);return a.a<255?`hsla(${e}, ${s}%, ${i}%, ${vt(a.a)})`:`hsl(${e}, ${s}%, ${i}%)`}const Un={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},Zn={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"};function TC(){const a={},t=Object.keys(Zn),e=Object.keys(Un);let s,i,o,r,c;for(s=0;s<t.length;s++){for(r=c=t[s],i=0;i<e.length;i++)o=e[i],c=c.replace(o,Un[o]);o=parseInt(Zn[r],16),a[c]=[o>>16&255,o>>8&255,o&255]}return a}let Te;function PC(a){Te||(Te=TC(),Te.transparent=[0,0,0,0]);const t=Te[a.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}const VC=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function DC(a){const t=VC.exec(a);let e=255,s,i,o;if(t){if(t[7]!==s){const r=+t[7];e=t[8]?oe(r):wt(r*255,0,255)}return s=+t[1],i=+t[3],o=+t[5],s=255&(t[2]?oe(s):wt(s,0,255)),i=255&(t[4]?oe(i):wt(i,0,255)),o=255&(t[6]?oe(o):wt(o,0,255)),{r:s,g:i,b:o,a:e}}}function EC(a){return a&&(a.a<255?`rgba(${a.r}, ${a.g}, ${a.b}, ${vt(a.a)})`:`rgb(${a.r}, ${a.g}, ${a.b})`)}const Ma=a=>a<=.0031308?a*12.92:Math.pow(a,1/2.4)*1.055-.055,qt=a=>a<=.04045?a/12.92:Math.pow((a+.055)/1.055,2.4);function IC(a,t,e){const s=qt(vt(a.r)),i=qt(vt(a.g)),o=qt(vt(a.b));return{r:Ht(Ma(s+e*(qt(vt(t.r))-s))),g:Ht(Ma(i+e*(qt(vt(t.g))-i))),b:Ht(Ma(o+e*(qt(vt(t.b))-o))),a:a.a+e*(t.a-a.a)}}function Pe(a,t,e){if(a){let s=Ga(a);s[t]=Math.max(0,Math.min(s[t]+s[t]*e,t===0?360:1)),s=Xa(s),a.r=s[0],a.g=s[1],a.b=s[2]}}function fo(a,t){return a&&Object.assign(t||{},a)}function jn(a){var t={r:0,g:0,b:0,a:255};return Array.isArray(a)?a.length>=3&&(t={r:a[0],g:a[1],b:a[2],a:255},a.length>3&&(t.a=Ht(a[3]))):(t=fo(a,{r:0,g:0,b:0,a:1}),t.a=Ht(t.a)),t}function OC(a){return a.charAt(0)==="r"?DC(a):HC(a)}class me{constructor(t){if(t instanceof me)return t;const e=typeof t;let s;e==="object"?s=jn(t):e==="string"&&(s=MC(t)||PC(t)||OC(t)),this._rgb=s,this._valid=!!s}get valid(){return this._valid}get rgb(){var t=fo(this._rgb);return t&&(t.a=vt(t.a)),t}set rgb(t){this._rgb=jn(t)}rgbString(){return this._valid?EC(this._rgb):void 0}hexString(){return this._valid?xC(this._rgb):void 0}hslString(){return this._valid?_C(this._rgb):void 0}mix(t,e){if(t){const s=this.rgb,i=t.rgb;let o;const r=e===o?.5:e,c=2*r-1,h=s.a-i.a,d=((c*h===-1?c:(c+h)/(1+c*h))+1)/2;o=1-d,s.r=255&d*s.r+o*i.r+.5,s.g=255&d*s.g+o*i.g+.5,s.b=255&d*s.b+o*i.b+.5,s.a=r*s.a+(1-r)*i.a,this.rgb=s}return this}interpolate(t,e){return t&&(this._rgb=IC(this._rgb,t._rgb,e)),this}clone(){return new me(this.rgb)}alpha(t){return this._rgb.a=Ht(t),this}clearer(t){const e=this._rgb;return e.a*=1-t,this}greyscale(){const t=this._rgb,e=Ae(t.r*.3+t.g*.59+t.b*.11);return t.r=t.g=t.b=e,this}opaquer(t){const e=this._rgb;return e.a*=1+t,this}negate(){const t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return Pe(this._rgb,2,t),this}darken(t){return Pe(this._rgb,2,-t),this}saturate(t){return Pe(this._rgb,1,t),this}desaturate(t){return Pe(this._rgb,1,-t),this}rotate(t){return LC(this._rgb,t),this}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */function gt(){}const RC=(()=>{let a=0;return()=>a++})();function P(a){return a==null}function z(a){if(Array.isArray&&Array.isArray(a))return!0;const t=Object.prototype.toString.call(a);return t.slice(0,7)==="[object"&&t.slice(-6)==="Array]"}function V(a){return a!==null&&Object.prototype.toString.call(a)==="[object Object]"}function W(a){return(typeof a=="number"||a instanceof Number)&&isFinite(+a)}function it(a,t){return W(a)?a:t}function L(a,t){return typeof a>"u"?t:a}const BC=(a,t)=>typeof a=="string"&&a.endsWith("%")?parseFloat(a)/100:+a/t,vo=(a,t)=>typeof a=="string"&&a.endsWith("%")?parseFloat(a)/100*t:+a;function R(a,t,e){if(a&&typeof a.call=="function")return a.apply(e,t)}function I(a,t,e,s){let i,o,r;if(z(a))for(o=a.length,i=0;i<o;i++)t.call(e,a[i],i);else if(V(a))for(r=Object.keys(a),o=r.length,i=0;i<o;i++)t.call(e,a[r[i]],r[i])}function Je(a,t){let e,s,i,o;if(!a||!t||a.length!==t.length)return!1;for(e=0,s=a.length;e<s;++e)if(i=a[e],o=t[e],i.datasetIndex!==o.datasetIndex||i.index!==o.index)return!1;return!0}function ta(a){if(z(a))return a.map(ta);if(V(a)){const t=Object.create(null),e=Object.keys(a),s=e.length;let i=0;for(;i<s;++i)t[e[i]]=ta(a[e[i]]);return t}return a}function mo(a){return["__proto__","prototype","constructor"].indexOf(a)===-1}function FC(a,t,e,s){if(!mo(a))return;const i=t[a],o=e[a];V(i)&&V(o)?Me(i,o,s):t[a]=ta(o)}function Me(a,t,e){const s=z(t)?t:[t],i=s.length;if(!V(a))return a;e=e||{};const o=e.merger||FC;let r;for(let c=0;c<i;++c){if(r=s[c],!V(r))continue;const h=Object.keys(r);for(let d=0,l=h.length;d<l;++d)o(h[d],a,r,e)}return a}function pe(a,t){return Me(a,t,{merger:zC})}function zC(a,t,e){if(!mo(a))return;const s=t[a],i=e[a];V(s)&&V(i)?pe(s,i):Object.prototype.hasOwnProperty.call(t,a)||(t[a]=ta(i))}const qn={"":a=>a,x:a=>a.x,y:a=>a.y};function NC(a){const t=a.split("."),e=[];let s="";for(const i of t)s+=i,s.endsWith("\\")?s=s.slice(0,-1)+".":(e.push(s),s="");return e}function WC(a){const t=NC(a);return e=>{for(const s of t){if(s==="")break;e=e&&e[s]}return e}}function Lt(a,t){return(qn[t]||(qn[t]=WC(t)))(a)}function Ka(a){return a.charAt(0).toUpperCase()+a.slice(1)}const ye=a=>typeof a<"u",_t=a=>typeof a=="function",Gn=(a,t)=>{if(a.size!==t.size)return!1;for(const e of a)if(!t.has(e))return!1;return!0};function $C(a){return a.type==="mouseup"||a.type==="click"||a.type==="contextmenu"}const E=Math.PI,B=2*E,UC=B+E,ea=Number.POSITIVE_INFINITY,ZC=E/180,U=E/2,Dt=E/4,Yn=E*2/3,St=Math.log10,pt=Math.sign;function ge(a,t,e){return Math.abs(a-t)<e}function Xn(a){const t=Math.round(a);a=ge(a,t,a/1e3)?t:a;const e=Math.pow(10,Math.floor(St(a))),s=a/e;return(s<=1?1:s<=2?2:s<=5?5:10)*e}function jC(a){const t=[],e=Math.sqrt(a);let s;for(s=1;s<e;s++)a%s===0&&(t.push(s),t.push(a/s));return e===(e|0)&&t.push(e),t.sort((i,o)=>i-o).pop(),t}function qC(a){return typeof a=="symbol"||typeof a=="object"&&a!==null&&!(Symbol.toPrimitive in a||"toString"in a||"valueOf"in a)}function Xt(a){return!qC(a)&&!isNaN(parseFloat(a))&&isFinite(a)}function GC(a,t){const e=Math.round(a);return e-t<=a&&e+t>=a}function Mo(a,t,e){let s,i,o;for(s=0,i=a.length;s<i;s++)o=a[s][e],isNaN(o)||(t.min=Math.min(t.min,o),t.max=Math.max(t.max,o))}function rt(a){return a*(E/180)}function Qa(a){return a*(180/E)}function Kn(a){if(!W(a))return;let t=1,e=0;for(;Math.round(a*t)/t!==a;)t*=10,e++;return e}function yo(a,t){const e=t.x-a.x,s=t.y-a.y,i=Math.sqrt(e*e+s*s);let o=Math.atan2(s,e);return o<-.5*E&&(o+=B),{angle:o,distance:i}}function Da(a,t){return Math.sqrt(Math.pow(t.x-a.x,2)+Math.pow(t.y-a.y,2))}function YC(a,t){return(a-t+UC)%B-E}function K(a){return(a%B+B)%B}function xe(a,t,e,s){const i=K(a),o=K(t),r=K(e),c=K(o-i),h=K(r-i),d=K(i-o),l=K(i-r);return i===o||i===r||s&&o===r||c>h&&d<l}function q(a,t,e){return Math.max(t,Math.min(e,a))}function XC(a){return q(a,-32768,32767)}function Mt(a,t,e,s=1e-6){return a>=Math.min(t,e)-s&&a<=Math.max(t,e)+s}function Ja(a,t,e){e=e||(r=>a[r]<t);let s=a.length-1,i=0,o;for(;s-i>1;)o=i+s>>1,e(o)?i=o:s=o;return{lo:i,hi:s}}const yt=(a,t,e,s)=>Ja(a,e,s?i=>{const o=a[i][t];return o<e||o===e&&a[i+1][t]===e}:i=>a[i][t]<e),KC=(a,t,e)=>Ja(a,e,s=>a[s][t]>=e);function QC(a,t,e){let s=0,i=a.length;for(;s<i&&a[s]<t;)s++;for(;i>s&&a[i-1]>e;)i--;return s>0||i<a.length?a.slice(s,i):a}const xo=["push","pop","shift","splice","unshift"];function JC(a,t){if(a._chartjs){a._chartjs.listeners.push(t);return}Object.defineProperty(a,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),xo.forEach(e=>{const s="_onData"+Ka(e),i=a[e];Object.defineProperty(a,e,{configurable:!0,enumerable:!1,value(...o){const r=i.apply(this,o);return a._chartjs.listeners.forEach(c=>{typeof c[s]=="function"&&c[s](...o)}),r}})})}function Qn(a,t){const e=a._chartjs;if(!e)return;const s=e.listeners,i=s.indexOf(t);i!==-1&&s.splice(i,1),!(s.length>0)&&(xo.forEach(o=>{delete a[o]}),delete a._chartjs)}function bo(a){const t=new Set(a);return t.size===a.length?a:Array.from(t)}const wo=function(){return typeof window>"u"?function(a){return a()}:window.requestAnimationFrame}();function So(a,t){let e=[],s=!1;return function(...i){e=i,s||(s=!0,wo.call(window,()=>{s=!1,a.apply(t,e)}))}}function tA(a,t){let e;return function(...s){return t?(clearTimeout(e),e=setTimeout(a,t,s)):a.apply(this,s),t}}const t1=a=>a==="start"?"left":a==="end"?"right":"center",X=(a,t,e)=>a==="start"?t:a==="end"?e:(t+e)/2,eA=(a,t,e,s)=>a===(s?"left":"right")?e:a==="center"?(t+e)/2:t;function Co(a,t,e){const s=t.length;let i=0,o=s;if(a._sorted){const{iScale:r,vScale:c,_parsed:h}=a,d=a.dataset&&a.dataset.options?a.dataset.options.spanGaps:null,l=r.axis,{min:p,max:g,minDefined:u,maxDefined:f}=r.getUserBounds();if(u){if(i=Math.min(yt(h,l,p).lo,e?s:yt(t,l,r.getPixelForValue(p)).lo),d){const v=h.slice(0,i+1).reverse().findIndex(m=>!P(m[c.axis]));i-=Math.max(0,v)}i=q(i,0,s-1)}if(f){let v=Math.max(yt(h,r.axis,g,!0).hi+1,e?0:yt(t,l,r.getPixelForValue(g),!0).hi+1);if(d){const m=h.slice(v-1).findIndex(M=>!P(M[c.axis]));v+=Math.max(0,m)}o=q(v,i,s)-i}else o=s-i}return{start:i,count:o}}function Ao(a){const{xScale:t,yScale:e,_scaleRanges:s}=a,i={xmin:t.min,xmax:t.max,ymin:e.min,ymax:e.max};if(!s)return a._scaleRanges=i,!0;const o=s.xmin!==t.min||s.xmax!==t.max||s.ymin!==e.min||s.ymax!==e.max;return Object.assign(s,i),o}const Ve=a=>a===0||a===1,Jn=(a,t,e)=>-(Math.pow(2,10*(a-=1))*Math.sin((a-t)*B/e)),t2=(a,t,e)=>Math.pow(2,-10*a)*Math.sin((a-t)*B/e)+1,ue={linear:a=>a,easeInQuad:a=>a*a,easeOutQuad:a=>-a*(a-2),easeInOutQuad:a=>(a/=.5)<1?.5*a*a:-.5*(--a*(a-2)-1),easeInCubic:a=>a*a*a,easeOutCubic:a=>(a-=1)*a*a+1,easeInOutCubic:a=>(a/=.5)<1?.5*a*a*a:.5*((a-=2)*a*a+2),easeInQuart:a=>a*a*a*a,easeOutQuart:a=>-((a-=1)*a*a*a-1),easeInOutQuart:a=>(a/=.5)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2),easeInQuint:a=>a*a*a*a*a,easeOutQuint:a=>(a-=1)*a*a*a*a+1,easeInOutQuint:a=>(a/=.5)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2),easeInSine:a=>-Math.cos(a*U)+1,easeOutSine:a=>Math.sin(a*U),easeInOutSine:a=>-.5*(Math.cos(E*a)-1),easeInExpo:a=>a===0?0:Math.pow(2,10*(a-1)),easeOutExpo:a=>a===1?1:-Math.pow(2,-10*a)+1,easeInOutExpo:a=>Ve(a)?a:a<.5?.5*Math.pow(2,10*(a*2-1)):.5*(-Math.pow(2,-10*(a*2-1))+2),easeInCirc:a=>a>=1?a:-(Math.sqrt(1-a*a)-1),easeOutCirc:a=>Math.sqrt(1-(a-=1)*a),easeInOutCirc:a=>(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1),easeInElastic:a=>Ve(a)?a:Jn(a,.075,.3),easeOutElastic:a=>Ve(a)?a:t2(a,.075,.3),easeInOutElastic(a){return Ve(a)?a:a<.5?.5*Jn(a*2,.1125,.45):.5+.5*t2(a*2-1,.1125,.45)},easeInBack(a){return a*a*((1.70158+1)*a-1.70158)},easeOutBack(a){return(a-=1)*a*((1.70158+1)*a+1.70158)+1},easeInOutBack(a){let t=1.70158;return(a/=.5)<1?.5*(a*a*(((t*=1.525)+1)*a-t)):.5*((a-=2)*a*(((t*=1.525)+1)*a+t)+2)},easeInBounce:a=>1-ue.easeOutBounce(1-a),easeOutBounce(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},easeInOutBounce:a=>a<.5?ue.easeInBounce(a*2)*.5:ue.easeOutBounce(a*2-1)*.5+.5};function e1(a){if(a&&typeof a=="object"){const t=a.toString();return t==="[object CanvasPattern]"||t==="[object CanvasGradient]"}return!1}function e2(a){return e1(a)?a:new me(a)}function ya(a){return e1(a)?a:new me(a).saturate(.5).darken(.1).hexString()}const aA=["x","y","borderWidth","radius","tension"],sA=["color","borderColor","backgroundColor"];function iA(a){a.set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),a.describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>t!=="onProgress"&&t!=="onComplete"&&t!=="fn"}),a.set("animations",{colors:{type:"color",properties:sA},numbers:{type:"number",properties:aA}}),a.describe("animations",{_fallback:"animation"}),a.set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>t|0}}}})}function nA(a){a.set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}const a2=new Map;function oA(a,t){t=t||{};const e=a+JSON.stringify(t);let s=a2.get(e);return s||(s=new Intl.NumberFormat(a,t),a2.set(e,s)),s}function ke(a,t,e){return oA(t,e).format(a)}const ko={values(a){return z(a)?a:""+a},numeric(a,t,e){if(a===0)return"0";const s=this.chart.options.locale;let i,o=a;if(e.length>1){const d=Math.max(Math.abs(e[0].value),Math.abs(e[e.length-1].value));(d<1e-4||d>1e15)&&(i="scientific"),o=rA(a,e)}const r=St(Math.abs(o)),c=isNaN(r)?1:Math.max(Math.min(-1*Math.floor(r),20),0),h={notation:i,minimumFractionDigits:c,maximumFractionDigits:c};return Object.assign(h,this.options.ticks.format),ke(a,s,h)},logarithmic(a,t,e){if(a===0)return"0";const s=e[t].significand||a/Math.pow(10,Math.floor(St(a)));return[1,2,3,5,10,15].includes(s)||t>.8*e.length?ko.numeric.call(this,a,t,e):""}};function rA(a,t){let e=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(e)>=1&&a!==Math.floor(a)&&(e=a-Math.floor(a)),e}var ra={formatters:ko};function cA(a){a.set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:ra.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),a.route("scale.ticks","color","","color"),a.route("scale.grid","color","","borderColor"),a.route("scale.border","color","","borderColor"),a.route("scale.title","color","","color"),a.describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&t!=="callback"&&t!=="parser",_indexable:t=>t!=="borderDash"&&t!=="tickBorderDash"&&t!=="dash"}),a.describe("scales",{_fallback:"scale"}),a.describe("scale.ticks",{_scriptable:t=>t!=="backdropPadding"&&t!=="callback",_indexable:t=>t!=="backdropPadding"})}const Wt=Object.create(null),Ea=Object.create(null);function fe(a,t){if(!t)return a;const e=t.split(".");for(let s=0,i=e.length;s<i;++s){const o=e[s];a=a[o]||(a[o]=Object.create(null))}return a}function xa(a,t,e){return typeof t=="string"?Me(fe(a,t),e):Me(fe(a,""),t)}class hA{constructor(t,e){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=s=>s.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(s,i)=>ya(i.backgroundColor),this.hoverBorderColor=(s,i)=>ya(i.borderColor),this.hoverColor=(s,i)=>ya(i.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t),this.apply(e)}set(t,e){return xa(this,t,e)}get(t){return fe(this,t)}describe(t,e){return xa(Ea,t,e)}override(t,e){return xa(Wt,t,e)}route(t,e,s,i){const o=fe(this,t),r=fe(this,s),c="_"+e;Object.defineProperties(o,{[c]:{value:o[e],writable:!0},[e]:{enumerable:!0,get(){const h=this[c],d=r[i];return V(h)?Object.assign({},d,h):L(h,d)},set(h){this[c]=h}}})}apply(t){t.forEach(e=>e(this))}}var N=new hA({_scriptable:a=>!a.startsWith("on"),_indexable:a=>a!=="events",hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}},[iA,nA,cA]);function dA(a){return!a||P(a.size)||P(a.family)?null:(a.style?a.style+" ":"")+(a.weight?a.weight+" ":"")+a.size+"px "+a.family}function aa(a,t,e,s,i){let o=t[i];return o||(o=t[i]=a.measureText(i).width,e.push(i)),o>s&&(s=o),s}function lA(a,t,e,s){s=s||{};let i=s.data=s.data||{},o=s.garbageCollect=s.garbageCollect||[];s.font!==t&&(i=s.data={},o=s.garbageCollect=[],s.font=t),a.save(),a.font=t;let r=0;const c=e.length;let h,d,l,p,g;for(h=0;h<c;h++)if(p=e[h],p!=null&&!z(p))r=aa(a,i,o,r,p);else if(z(p))for(d=0,l=p.length;d<l;d++)g=p[d],g!=null&&!z(g)&&(r=aa(a,i,o,r,g));a.restore();const u=o.length/2;if(u>e.length){for(h=0;h<u;h++)delete i[o[h]];o.splice(0,u)}return r}function Et(a,t,e){const s=a.currentDevicePixelRatio,i=e!==0?Math.max(e/2,.5):0;return Math.round((t-i)*s)/s+i}function s2(a,t){!t&&!a||(t=t||a.getContext("2d"),t.save(),t.resetTransform(),t.clearRect(0,0,a.width,a.height),t.restore())}function Ia(a,t,e,s){Ho(a,t,e,s,null)}function Ho(a,t,e,s,i){let o,r,c,h,d,l,p,g;const u=t.pointStyle,f=t.rotation,v=t.radius;let m=(f||0)*ZC;if(u&&typeof u=="object"&&(o=u.toString(),o==="[object HTMLImageElement]"||o==="[object HTMLCanvasElement]")){a.save(),a.translate(e,s),a.rotate(m),a.drawImage(u,-u.width/2,-u.height/2,u.width,u.height),a.restore();return}if(!(isNaN(v)||v<=0)){switch(a.beginPath(),u){default:i?a.ellipse(e,s,i/2,v,0,0,B):a.arc(e,s,v,0,B),a.closePath();break;case"triangle":l=i?i/2:v,a.moveTo(e+Math.sin(m)*l,s-Math.cos(m)*v),m+=Yn,a.lineTo(e+Math.sin(m)*l,s-Math.cos(m)*v),m+=Yn,a.lineTo(e+Math.sin(m)*l,s-Math.cos(m)*v),a.closePath();break;case"rectRounded":d=v*.516,h=v-d,r=Math.cos(m+Dt)*h,p=Math.cos(m+Dt)*(i?i/2-d:h),c=Math.sin(m+Dt)*h,g=Math.sin(m+Dt)*(i?i/2-d:h),a.arc(e-p,s-c,d,m-E,m-U),a.arc(e+g,s-r,d,m-U,m),a.arc(e+p,s+c,d,m,m+U),a.arc(e-g,s+r,d,m+U,m+E),a.closePath();break;case"rect":if(!f){h=Math.SQRT1_2*v,l=i?i/2:h,a.rect(e-l,s-h,2*l,2*h);break}m+=Dt;case"rectRot":p=Math.cos(m)*(i?i/2:v),r=Math.cos(m)*v,c=Math.sin(m)*v,g=Math.sin(m)*(i?i/2:v),a.moveTo(e-p,s-c),a.lineTo(e+g,s-r),a.lineTo(e+p,s+c),a.lineTo(e-g,s+r),a.closePath();break;case"crossRot":m+=Dt;case"cross":p=Math.cos(m)*(i?i/2:v),r=Math.cos(m)*v,c=Math.sin(m)*v,g=Math.sin(m)*(i?i/2:v),a.moveTo(e-p,s-c),a.lineTo(e+p,s+c),a.moveTo(e+g,s-r),a.lineTo(e-g,s+r);break;case"star":p=Math.cos(m)*(i?i/2:v),r=Math.cos(m)*v,c=Math.sin(m)*v,g=Math.sin(m)*(i?i/2:v),a.moveTo(e-p,s-c),a.lineTo(e+p,s+c),a.moveTo(e+g,s-r),a.lineTo(e-g,s+r),m+=Dt,p=Math.cos(m)*(i?i/2:v),r=Math.cos(m)*v,c=Math.sin(m)*v,g=Math.sin(m)*(i?i/2:v),a.moveTo(e-p,s-c),a.lineTo(e+p,s+c),a.moveTo(e+g,s-r),a.lineTo(e-g,s+r);break;case"line":r=i?i/2:Math.cos(m)*v,c=Math.sin(m)*v,a.moveTo(e-r,s-c),a.lineTo(e+r,s+c);break;case"dash":a.moveTo(e,s),a.lineTo(e+Math.cos(m)*(i?i/2:v),s+Math.sin(m)*v);break;case!1:a.closePath();break}a.fill(),t.borderWidth>0&&a.stroke()}}function xt(a,t,e){return e=e||.5,!t||a&&a.x>t.left-e&&a.x<t.right+e&&a.y>t.top-e&&a.y<t.bottom+e}function ca(a,t){a.save(),a.beginPath(),a.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),a.clip()}function ha(a){a.restore()}function pA(a,t,e,s,i){if(!t)return a.lineTo(e.x,e.y);if(i==="middle"){const o=(t.x+e.x)/2;a.lineTo(o,t.y),a.lineTo(o,e.y)}else i==="after"!=!!s?a.lineTo(t.x,e.y):a.lineTo(e.x,t.y);a.lineTo(e.x,e.y)}function gA(a,t,e,s){if(!t)return a.lineTo(e.x,e.y);a.bezierCurveTo(s?t.cp1x:t.cp2x,s?t.cp1y:t.cp2y,s?e.cp2x:e.cp1x,s?e.cp2y:e.cp1y,e.x,e.y)}function uA(a,t){t.translation&&a.translate(t.translation[0],t.translation[1]),P(t.rotation)||a.rotate(t.rotation),t.color&&(a.fillStyle=t.color),t.textAlign&&(a.textAlign=t.textAlign),t.textBaseline&&(a.textBaseline=t.textBaseline)}function fA(a,t,e,s,i){if(i.strikethrough||i.underline){const o=a.measureText(s),r=t-o.actualBoundingBoxLeft,c=t+o.actualBoundingBoxRight,h=e-o.actualBoundingBoxAscent,d=e+o.actualBoundingBoxDescent,l=i.strikethrough?(h+d)/2:d;a.strokeStyle=a.fillStyle,a.beginPath(),a.lineWidth=i.decorationWidth||2,a.moveTo(r,l),a.lineTo(c,l),a.stroke()}}function vA(a,t){const e=a.fillStyle;a.fillStyle=t.color,a.fillRect(t.left,t.top,t.width,t.height),a.fillStyle=e}function $t(a,t,e,s,i,o={}){const r=z(t)?t:[t],c=o.strokeWidth>0&&o.strokeColor!=="";let h,d;for(a.save(),a.font=i.string,uA(a,o),h=0;h<r.length;++h)d=r[h],o.backdrop&&vA(a,o.backdrop),c&&(o.strokeColor&&(a.strokeStyle=o.strokeColor),P(o.strokeWidth)||(a.lineWidth=o.strokeWidth),a.strokeText(d,e,s,o.maxWidth)),a.fillText(d,e,s,o.maxWidth),fA(a,e,s,d,o),s+=Number(i.lineHeight);a.restore()}function be(a,t){const{x:e,y:s,w:i,h:o,radius:r}=t;a.arc(e+r.topLeft,s+r.topLeft,r.topLeft,1.5*E,E,!0),a.lineTo(e,s+o-r.bottomLeft),a.arc(e+r.bottomLeft,s+o-r.bottomLeft,r.bottomLeft,E,U,!0),a.lineTo(e+i-r.bottomRight,s+o),a.arc(e+i-r.bottomRight,s+o-r.bottomRight,r.bottomRight,U,0,!0),a.lineTo(e+i,s+r.topRight),a.arc(e+i-r.topRight,s+r.topRight,r.topRight,0,-U,!0),a.lineTo(e+r.topLeft,s)}const mA=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,MA=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function yA(a,t){const e=(""+a).match(mA);if(!e||e[1]==="normal")return t*1.2;switch(a=+e[2],e[3]){case"px":return a;case"%":a/=100;break}return t*a}const xA=a=>+a||0;function a1(a,t){const e={},s=V(t),i=s?Object.keys(t):t,o=V(a)?s?r=>L(a[r],a[t[r]]):r=>a[r]:()=>a;for(const r of i)e[r]=xA(o(r));return e}function Lo(a){return a1(a,{top:"y",right:"x",bottom:"y",left:"x"})}function zt(a){return a1(a,["topLeft","topRight","bottomLeft","bottomRight"])}function J(a){const t=Lo(a);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function j(a,t){a=a||{},t=t||N.font;let e=L(a.size,t.size);typeof e=="string"&&(e=parseInt(e,10));let s=L(a.style,t.style);s&&!(""+s).match(MA)&&(console.warn('Invalid font style specified: "'+s+'"'),s=void 0);const i={family:L(a.family,t.family),lineHeight:yA(L(a.lineHeight,t.lineHeight),e),size:e,style:s,weight:L(a.weight,t.weight),string:""};return i.string=dA(i),i}function re(a,t,e,s){let i,o,r;for(i=0,o=a.length;i<o;++i)if(r=a[i],r!==void 0&&r!==void 0)return r}function bA(a,t,e){const{min:s,max:i}=a,o=vo(t,(i-s)/2),r=(c,h)=>e&&c===0?0:c+h;return{min:r(s,-Math.abs(o)),max:r(i,o)}}function Tt(a,t){return Object.assign(Object.create(a),t)}function s1(a,t=[""],e,s,i=()=>a[0]){const o=e||a;typeof s>"u"&&(s=Vo("_fallback",a));const r={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:a,_rootScopes:o,_fallback:s,_getTarget:i,override:c=>s1([c,...a],t,o,s)};return new Proxy(r,{deleteProperty(c,h){return delete c[h],delete c._keys,delete a[0][h],!0},get(c,h){return To(c,h,()=>_A(h,t,a,c))},getOwnPropertyDescriptor(c,h){return Reflect.getOwnPropertyDescriptor(c._scopes[0],h)},getPrototypeOf(){return Reflect.getPrototypeOf(a[0])},has(c,h){return n2(c).includes(h)},ownKeys(c){return n2(c)},set(c,h,d){const l=c._storage||(c._storage=i());return c[h]=l[h]=d,delete c._keys,!0}})}function Kt(a,t,e,s){const i={_cacheable:!1,_proxy:a,_context:t,_subProxy:e,_stack:new Set,_descriptors:_o(a,s),setContext:o=>Kt(a,o,e,s),override:o=>Kt(a.override(o),t,e,s)};return new Proxy(i,{deleteProperty(o,r){return delete o[r],delete a[r],!0},get(o,r,c){return To(o,r,()=>SA(o,r,c))},getOwnPropertyDescriptor(o,r){return o._descriptors.allKeys?Reflect.has(a,r)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(a,r)},getPrototypeOf(){return Reflect.getPrototypeOf(a)},has(o,r){return Reflect.has(a,r)},ownKeys(){return Reflect.ownKeys(a)},set(o,r,c){return a[r]=c,delete o[r],!0}})}function _o(a,t={scriptable:!0,indexable:!0}){const{_scriptable:e=t.scriptable,_indexable:s=t.indexable,_allKeys:i=t.allKeys}=a;return{allKeys:i,scriptable:e,indexable:s,isScriptable:_t(e)?e:()=>e,isIndexable:_t(s)?s:()=>s}}const wA=(a,t)=>a?a+Ka(t):t,i1=(a,t)=>V(t)&&a!=="adapters"&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function To(a,t,e){if(Object.prototype.hasOwnProperty.call(a,t)||t==="constructor")return a[t];const s=e();return a[t]=s,s}function SA(a,t,e){const{_proxy:s,_context:i,_subProxy:o,_descriptors:r}=a;let c=s[t];return _t(c)&&r.isScriptable(t)&&(c=CA(t,c,a,e)),z(c)&&c.length&&(c=AA(t,c,a,r.isIndexable)),i1(t,c)&&(c=Kt(c,i,o&&o[t],r)),c}function CA(a,t,e,s){const{_proxy:i,_context:o,_subProxy:r,_stack:c}=e;if(c.has(a))throw new Error("Recursion detected: "+Array.from(c).join("->")+"->"+a);c.add(a);let h=t(o,r||s);return c.delete(a),i1(a,h)&&(h=n1(i._scopes,i,a,h)),h}function AA(a,t,e,s){const{_proxy:i,_context:o,_subProxy:r,_descriptors:c}=e;if(typeof o.index<"u"&&s(a))return t[o.index%t.length];if(V(t[0])){const h=t,d=i._scopes.filter(l=>l!==h);t=[];for(const l of h){const p=n1(d,i,a,l);t.push(Kt(p,o,r&&r[a],c))}}return t}function Po(a,t,e){return _t(a)?a(t,e):a}const kA=(a,t)=>a===!0?t:typeof a=="string"?Lt(t,a):void 0;function HA(a,t,e,s,i){for(const o of t){const r=kA(e,o);if(r){a.add(r);const c=Po(r._fallback,e,i);if(typeof c<"u"&&c!==e&&c!==s)return c}else if(r===!1&&typeof s<"u"&&e!==s)return null}return!1}function n1(a,t,e,s){const i=t._rootScopes,o=Po(t._fallback,e,s),r=[...a,...i],c=new Set;c.add(s);let h=i2(c,r,e,o||e,s);return h===null||typeof o<"u"&&o!==e&&(h=i2(c,r,o,h,s),h===null)?!1:s1(Array.from(c),[""],i,o,()=>LA(t,e,s))}function i2(a,t,e,s,i){for(;e;)e=HA(a,t,e,s,i);return e}function LA(a,t,e){const s=a._getTarget();t in s||(s[t]={});const i=s[t];return z(i)&&V(e)?e:i||{}}function _A(a,t,e,s){let i;for(const o of t)if(i=Vo(wA(o,a),e),typeof i<"u")return i1(a,i)?n1(e,s,a,i):i}function Vo(a,t){for(const e of t){if(!e)continue;const s=e[a];if(typeof s<"u")return s}}function n2(a){let t=a._keys;return t||(t=a._keys=TA(a._scopes)),t}function TA(a){const t=new Set;for(const e of a)for(const s of Object.keys(e).filter(i=>!i.startsWith("_")))t.add(s);return Array.from(t)}function Do(a,t,e,s){const{iScale:i}=a,{key:o="r"}=this._parsing,r=new Array(s);let c,h,d,l;for(c=0,h=s;c<h;++c)d=c+e,l=t[d],r[c]={r:i.parse(Lt(l,o),d)};return r}const PA=Number.EPSILON||1e-14,Qt=(a,t)=>t<a.length&&!a[t].skip&&a[t],Eo=a=>a==="x"?"y":"x";function VA(a,t,e,s){const i=a.skip?t:a,o=t,r=e.skip?t:e,c=Da(o,i),h=Da(r,o);let d=c/(c+h),l=h/(c+h);d=isNaN(d)?0:d,l=isNaN(l)?0:l;const p=s*d,g=s*l;return{previous:{x:o.x-p*(r.x-i.x),y:o.y-p*(r.y-i.y)},next:{x:o.x+g*(r.x-i.x),y:o.y+g*(r.y-i.y)}}}function DA(a,t,e){const s=a.length;let i,o,r,c,h,d=Qt(a,0);for(let l=0;l<s-1;++l)if(h=d,d=Qt(a,l+1),!(!h||!d)){if(ge(t[l],0,PA)){e[l]=e[l+1]=0;continue}i=e[l]/t[l],o=e[l+1]/t[l],c=Math.pow(i,2)+Math.pow(o,2),!(c<=9)&&(r=3/Math.sqrt(c),e[l]=i*r*t[l],e[l+1]=o*r*t[l])}}function EA(a,t,e="x"){const s=Eo(e),i=a.length;let o,r,c,h=Qt(a,0);for(let d=0;d<i;++d){if(r=c,c=h,h=Qt(a,d+1),!c)continue;const l=c[e],p=c[s];r&&(o=(l-r[e])/3,c[`cp1${e}`]=l-o,c[`cp1${s}`]=p-o*t[d]),h&&(o=(h[e]-l)/3,c[`cp2${e}`]=l+o,c[`cp2${s}`]=p+o*t[d])}}function IA(a,t="x"){const e=Eo(t),s=a.length,i=Array(s).fill(0),o=Array(s);let r,c,h,d=Qt(a,0);for(r=0;r<s;++r)if(c=h,h=d,d=Qt(a,r+1),!!h){if(d){const l=d[t]-h[t];i[r]=l!==0?(d[e]-h[e])/l:0}o[r]=c?d?pt(i[r-1])!==pt(i[r])?0:(i[r-1]+i[r])/2:i[r-1]:i[r]}DA(a,i,o),EA(a,o,t)}function De(a,t,e){return Math.max(Math.min(a,e),t)}function OA(a,t){let e,s,i,o,r,c=xt(a[0],t);for(e=0,s=a.length;e<s;++e)r=o,o=c,c=e<s-1&&xt(a[e+1],t),o&&(i=a[e],r&&(i.cp1x=De(i.cp1x,t.left,t.right),i.cp1y=De(i.cp1y,t.top,t.bottom)),c&&(i.cp2x=De(i.cp2x,t.left,t.right),i.cp2y=De(i.cp2y,t.top,t.bottom)))}function RA(a,t,e,s,i){let o,r,c,h;if(t.spanGaps&&(a=a.filter(d=>!d.skip)),t.cubicInterpolationMode==="monotone")IA(a,i);else{let d=s?a[a.length-1]:a[0];for(o=0,r=a.length;o<r;++o)c=a[o],h=VA(d,c,a[Math.min(o+1,r-(s?0:1))%r],t.tension),c.cp1x=h.previous.x,c.cp1y=h.previous.y,c.cp2x=h.next.x,c.cp2y=h.next.y,d=c}t.capBezierPoints&&OA(a,e)}function o1(){return typeof window<"u"&&typeof document<"u"}function r1(a){let t=a.parentNode;return t&&t.toString()==="[object ShadowRoot]"&&(t=t.host),t}function sa(a,t,e){let s;return typeof a=="string"?(s=parseInt(a,10),a.indexOf("%")!==-1&&(s=s/100*t.parentNode[e])):s=a,s}const da=a=>a.ownerDocument.defaultView.getComputedStyle(a,null);function BA(a,t){return da(a).getPropertyValue(t)}const FA=["top","right","bottom","left"];function Nt(a,t,e){const s={};e=e?"-"+e:"";for(let i=0;i<4;i++){const o=FA[i];s[o]=parseFloat(a[t+"-"+o+e])||0}return s.width=s.left+s.right,s.height=s.top+s.bottom,s}const zA=(a,t,e)=>(a>0||t>0)&&(!e||!e.shadowRoot);function NA(a,t){const e=a.touches,s=e&&e.length?e[0]:a,{offsetX:i,offsetY:o}=s;let r=!1,c,h;if(zA(i,o,a.target))c=i,h=o;else{const d=t.getBoundingClientRect();c=s.clientX-d.left,h=s.clientY-d.top,r=!0}return{x:c,y:h,box:r}}function Rt(a,t){if("native"in a)return a;const{canvas:e,currentDevicePixelRatio:s}=t,i=da(e),o=i.boxSizing==="border-box",r=Nt(i,"padding"),c=Nt(i,"border","width"),{x:h,y:d,box:l}=NA(a,e),p=r.left+(l&&c.left),g=r.top+(l&&c.top);let{width:u,height:f}=t;return o&&(u-=r.width+c.width,f-=r.height+c.height),{x:Math.round((h-p)/u*e.width/s),y:Math.round((d-g)/f*e.height/s)}}function WA(a,t,e){let s,i;if(t===void 0||e===void 0){const o=a&&r1(a);if(!o)t=a.clientWidth,e=a.clientHeight;else{const r=o.getBoundingClientRect(),c=da(o),h=Nt(c,"border","width"),d=Nt(c,"padding");t=r.width-d.width-h.width,e=r.height-d.height-h.height,s=sa(c.maxWidth,o,"clientWidth"),i=sa(c.maxHeight,o,"clientHeight")}}return{width:t,height:e,maxWidth:s||ea,maxHeight:i||ea}}const Ct=a=>Math.round(a*10)/10;function $A(a,t,e,s){const i=da(a),o=Nt(i,"margin"),r=sa(i.maxWidth,a,"clientWidth")||ea,c=sa(i.maxHeight,a,"clientHeight")||ea,h=WA(a,t,e);let{width:d,height:l}=h;if(i.boxSizing==="content-box"){const g=Nt(i,"border","width"),u=Nt(i,"padding");d-=u.width+g.width,l-=u.height+g.height}return d=Math.max(0,d-o.width),l=Math.max(0,s?d/s:l-o.height),d=Ct(Math.min(d,r,h.maxWidth)),l=Ct(Math.min(l,c,h.maxHeight)),d&&!l&&(l=Ct(d/2)),(t!==void 0||e!==void 0)&&s&&h.height&&l>h.height&&(l=h.height,d=Ct(Math.floor(l*s))),{width:d,height:l}}function o2(a,t,e){const s=t||1,i=Ct(a.height*s),o=Ct(a.width*s);a.height=Ct(a.height),a.width=Ct(a.width);const r=a.canvas;return r.style&&(e||!r.style.height&&!r.style.width)&&(r.style.height=`${a.height}px`,r.style.width=`${a.width}px`),a.currentDevicePixelRatio!==s||r.height!==i||r.width!==o?(a.currentDevicePixelRatio=s,r.height=i,r.width=o,a.ctx.setTransform(s,0,0,s,0,0),!0):!1}const UA=function(){let a=!1;try{const t={get passive(){return a=!0,!1}};o1()&&(window.addEventListener("test",null,t),window.removeEventListener("test",null,t))}catch{}return a}();function r2(a,t){const e=BA(a,t),s=e&&e.match(/^(\d+)(\.\d+)?px$/);return s?+s[1]:void 0}function Bt(a,t,e,s){return{x:a.x+e*(t.x-a.x),y:a.y+e*(t.y-a.y)}}function ZA(a,t,e,s){return{x:a.x+e*(t.x-a.x),y:s==="middle"?e<.5?a.y:t.y:s==="after"?e<1?a.y:t.y:e>0?t.y:a.y}}function jA(a,t,e,s){const i={x:a.cp2x,y:a.cp2y},o={x:t.cp1x,y:t.cp1y},r=Bt(a,i,e),c=Bt(i,o,e),h=Bt(o,t,e),d=Bt(r,c,e),l=Bt(c,h,e);return Bt(d,l,e)}const qA=function(a,t){return{x(e){return a+a+t-e},setWidth(e){t=e},textAlign(e){return e==="center"?e:e==="right"?"left":"right"},xPlus(e,s){return e-s},leftForLtr(e,s){return e-s}}},GA=function(){return{x(a){return a},setWidth(a){},textAlign(a){return a},xPlus(a,t){return a+t},leftForLtr(a,t){return a}}};function Yt(a,t,e){return a?qA(t,e):GA()}function Io(a,t){let e,s;(t==="ltr"||t==="rtl")&&(e=a.canvas.style,s=[e.getPropertyValue("direction"),e.getPropertyPriority("direction")],e.setProperty("direction",t,"important"),a.prevTextDirection=s)}function Oo(a,t){t!==void 0&&(delete a.prevTextDirection,a.canvas.style.setProperty("direction",t[0],t[1]))}function Ro(a){return a==="angle"?{between:xe,compare:YC,normalize:K}:{between:Mt,compare:(t,e)=>t-e,normalize:t=>t}}function c2({start:a,end:t,count:e,loop:s,style:i}){return{start:a%e,end:t%e,loop:s&&(t-a+1)%e===0,style:i}}function YA(a,t,e){const{property:s,start:i,end:o}=e,{between:r,normalize:c}=Ro(s),h=t.length;let{start:d,end:l,loop:p}=a,g,u;if(p){for(d+=h,l+=h,g=0,u=h;g<u&&r(c(t[d%h][s]),i,o);++g)d--,l--;d%=h,l%=h}return l<d&&(l+=h),{start:d,end:l,loop:p,style:a.style}}function Bo(a,t,e){if(!e)return[a];const{property:s,start:i,end:o}=e,r=t.length,{compare:c,between:h,normalize:d}=Ro(s),{start:l,end:p,loop:g,style:u}=YA(a,t,e),f=[];let v=!1,m=null,M,y,w;const b=()=>h(i,w,M)&&c(i,w)!==0,x=()=>c(o,M)===0||h(o,w,M),C=()=>v||b(),A=()=>!v||x();for(let k=l,H=l;k<=p;++k)y=t[k%r],!y.skip&&(M=d(y[s]),M!==w&&(v=h(M,i,o),m===null&&C()&&(m=c(M,i)===0?k:H),m!==null&&A()&&(f.push(c2({start:m,end:k,loop:g,count:r,style:u})),m=null),H=k,w=M));return m!==null&&f.push(c2({start:m,end:p,loop:g,count:r,style:u})),f}function Fo(a,t){const e=[],s=a.segments;for(let i=0;i<s.length;i++){const o=Bo(s[i],a.points,t);o.length&&e.push(...o)}return e}function XA(a,t,e,s){let i=0,o=t-1;if(e&&!s)for(;i<t&&!a[i].skip;)i++;for(;i<t&&a[i].skip;)i++;for(i%=t,e&&(o+=i);o>i&&a[o%t].skip;)o--;return o%=t,{start:i,end:o}}function KA(a,t,e,s){const i=a.length,o=[];let r=t,c=a[t],h;for(h=t+1;h<=e;++h){const d=a[h%i];d.skip||d.stop?c.skip||(s=!1,o.push({start:t%i,end:(h-1)%i,loop:s}),t=r=d.stop?h:null):(r=h,c.skip&&(t=h)),c=d}return r!==null&&o.push({start:t%i,end:r%i,loop:s}),o}function QA(a,t){const e=a.points,s=a.options.spanGaps,i=e.length;if(!i)return[];const o=!!a._loop,{start:r,end:c}=XA(e,i,o,s);if(s===!0)return h2(a,[{start:r,end:c,loop:o}],e,t);const h=c<r?c+i:c,d=!!a._fullLoop&&r===0&&c===i-1;return h2(a,KA(e,r,h,d),e,t)}function h2(a,t,e,s){return!s||!s.setContext||!e?t:JA(a,t,e,s)}function JA(a,t,e,s){const i=a._chart.getContext(),o=d2(a.options),{_datasetIndex:r,options:{spanGaps:c}}=a,h=e.length,d=[];let l=o,p=t[0].start,g=p;function u(f,v,m,M){const y=c?-1:1;if(f!==v){for(f+=h;e[f%h].skip;)f-=y;for(;e[v%h].skip;)v+=y;f%h!==v%h&&(d.push({start:f%h,end:v%h,loop:m,style:M}),l=M,p=v%h)}}for(const f of t){p=c?p:f.start;let v=e[p%h],m;for(g=p+1;g<=f.end;g++){const M=e[g%h];m=d2(s.setContext(Tt(i,{type:"segment",p0:v,p1:M,p0DataIndex:(g-1)%h,p1DataIndex:g%h,datasetIndex:r}))),tk(m,l)&&u(p,g-1,f.loop,l),v=M,l=m}p<g-1&&u(p,g-1,f.loop,l)}return d}function d2(a){return{backgroundColor:a.backgroundColor,borderCapStyle:a.borderCapStyle,borderDash:a.borderDash,borderDashOffset:a.borderDashOffset,borderJoinStyle:a.borderJoinStyle,borderWidth:a.borderWidth,borderColor:a.borderColor}}function tk(a,t){if(!t)return!1;const e=[],s=function(i,o){return e1(o)?(e.includes(o)||e.push(o),e.indexOf(o)):o};return JSON.stringify(a,s)!==JSON.stringify(t,s)}function Ee(a,t,e){return a.options.clip?a[e]:t[e]}function ek(a,t){const{xScale:e,yScale:s}=a;return e&&s?{left:Ee(e,t,"left"),right:Ee(e,t,"right"),top:Ee(s,t,"top"),bottom:Ee(s,t,"bottom")}:t}function zo(a,t){const e=t._clip;if(e.disabled)return!1;const s=ek(t,a.chartArea);return{left:e.left===!1?0:s.left-(e.left===!0?0:e.left),right:e.right===!1?a.width:s.right+(e.right===!0?0:e.right),top:e.top===!1?0:s.top-(e.top===!0?0:e.top),bottom:e.bottom===!1?a.height:s.bottom+(e.bottom===!0?0:e.bottom)}}/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */class ak{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,s,i){const o=e.listeners[i],r=e.duration;o.forEach(c=>c({chart:t,initial:e.initial,numSteps:r,currentStep:Math.min(s-e.start,r)}))}_refresh(){this._request||(this._running=!0,this._request=wo.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((s,i)=>{if(!s.running||!s.items.length)return;const o=s.items;let r=o.length-1,c=!1,h;for(;r>=0;--r)h=o[r],h._active?(h._total>s.duration&&(s.duration=h._total),h.tick(t),c=!0):(o[r]=o[o.length-1],o.pop());c&&(i.draw(),this._notify(i,s,t,"progress")),o.length||(s.running=!1,this._notify(i,s,t,"complete"),s.initial=!1),e+=o.length}),this._lastDate=t,e===0&&(this._running=!1)}_getAnims(t){const e=this._charts;let s=e.get(t);return s||(s={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,s)),s}listen(t,e,s){this._getAnims(t).listeners[e].push(s)}add(t,e){!e||!e.length||this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){const e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((s,i)=>Math.max(s,i._duration),0),this._refresh())}running(t){if(!this._running)return!1;const e=this._charts.get(t);return!(!e||!e.running||!e.items.length)}stop(t){const e=this._charts.get(t);if(!e||!e.items.length)return;const s=e.items;let i=s.length-1;for(;i>=0;--i)s[i].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}}var ut=new ak;const l2="transparent",sk={boolean(a,t,e){return e>.5?t:a},color(a,t,e){const s=e2(a||l2),i=s.valid&&e2(t||l2);return i&&i.valid?i.mix(s,e).hexString():t},number(a,t,e){return a+(t-a)*e}};class ik{constructor(t,e,s,i){const o=e[s];i=re([t.to,i,o,t.from]);const r=re([t.from,o,i]);this._active=!0,this._fn=t.fn||sk[t.type||typeof r],this._easing=ue[t.easing]||ue.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=s,this._from=r,this._to=i,this._promises=void 0}active(){return this._active}update(t,e,s){if(this._active){this._notify(!1);const i=this._target[this._prop],o=s-this._start,r=this._duration-o;this._start=s,this._duration=Math.floor(Math.max(r,t.duration)),this._total+=o,this._loop=!!t.loop,this._to=re([t.to,e,i,t.from]),this._from=re([t.from,i,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){const e=t-this._start,s=this._duration,i=this._prop,o=this._from,r=this._loop,c=this._to;let h;if(this._active=o!==c&&(r||e<s),!this._active){this._target[i]=c,this._notify(!0);return}if(e<0){this._target[i]=o;return}h=e/s%2,h=r&&h>1?2-h:h,h=this._easing(Math.min(1,Math.max(0,h))),this._target[i]=this._fn(o,c,h)}wait(){const t=this._promises||(this._promises=[]);return new Promise((e,s)=>{t.push({res:e,rej:s})})}_notify(t){const e=t?"res":"rej",s=this._promises||[];for(let i=0;i<s.length;i++)s[i][e]()}}class No{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!V(t))return;const e=Object.keys(N.animation),s=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{const o=t[i];if(!V(o))return;const r={};for(const c of e)r[c]=o[c];(z(o.properties)&&o.properties||[i]).forEach(c=>{(c===i||!s.has(c))&&s.set(c,r)})})}_animateOptions(t,e){const s=e.options,i=ok(t,s);if(!i)return[];const o=this._createAnimations(i,s);return s.$shared&&nk(t.options.$animations,s).then(()=>{t.options=s},()=>{}),o}_createAnimations(t,e){const s=this._properties,i=[],o=t.$animations||(t.$animations={}),r=Object.keys(e),c=Date.now();let h;for(h=r.length-1;h>=0;--h){const d=r[h];if(d.charAt(0)==="$")continue;if(d==="options"){i.push(...this._animateOptions(t,e));continue}const l=e[d];let p=o[d];const g=s.get(d);if(p)if(g&&p.active()){p.update(g,l,c);continue}else p.cancel();if(!g||!g.duration){t[d]=l;continue}o[d]=p=new ik(g,t,d,l),i.push(p)}return i}update(t,e){if(this._properties.size===0){Object.assign(t,e);return}const s=this._createAnimations(t,e);if(s.length)return ut.add(this._chart,s),!0}}function nk(a,t){const e=[],s=Object.keys(t);for(let i=0;i<s.length;i++){const o=a[s[i]];o&&o.active()&&e.push(o.wait())}return Promise.all(e)}function ok(a,t){if(!t)return;let e=a.options;if(!e){a.options=t;return}return e.$shared&&(a.options=e=Object.assign({},e,{$shared:!1,$animations:{}})),e}function p2(a,t){const e=a&&a.options||{},s=e.reverse,i=e.min===void 0?t:0,o=e.max===void 0?t:0;return{start:s?o:i,end:s?i:o}}function rk(a,t,e){if(e===!1)return!1;const s=p2(a,e),i=p2(t,e);return{top:i.end,right:s.end,bottom:i.start,left:s.start}}function ck(a){let t,e,s,i;return V(a)?(t=a.top,e=a.right,s=a.bottom,i=a.left):t=e=s=i=a,{top:t,right:e,bottom:s,left:i,disabled:a===!1}}function Wo(a,t){const e=[],s=a._getSortedDatasetMetas(t);let i,o;for(i=0,o=s.length;i<o;++i)e.push(s[i].index);return e}function g2(a,t,e,s={}){const i=a.keys,o=s.mode==="single";let r,c,h,d;if(t===null)return;let l=!1;for(r=0,c=i.length;r<c;++r){if(h=+i[r],h===e){if(l=!0,s.all)continue;break}d=a.values[h],W(d)&&(o||t===0||pt(t)===pt(d))&&(t+=d)}return!l&&!s.all?0:t}function hk(a,t){const{iScale:e,vScale:s}=t,i=e.axis==="x"?"x":"y",o=s.axis==="x"?"x":"y",r=Object.keys(a),c=new Array(r.length);let h,d,l;for(h=0,d=r.length;h<d;++h)l=r[h],c[h]={[i]:l,[o]:a[l]};return c}function ba(a,t){const e=a&&a.options.stacked;return e||e===void 0&&t.stack!==void 0}function dk(a,t,e){return`${a.id}.${t.id}.${e.stack||e.type}`}function lk(a){const{min:t,max:e,minDefined:s,maxDefined:i}=a.getUserBounds();return{min:s?t:Number.NEGATIVE_INFINITY,max:i?e:Number.POSITIVE_INFINITY}}function pk(a,t,e){const s=a[t]||(a[t]={});return s[e]||(s[e]={})}function u2(a,t,e,s){for(const i of t.getMatchingVisibleMetas(s).reverse()){const o=a[i.index];if(e&&o>0||!e&&o<0)return i.index}return null}function f2(a,t){const{chart:e,_cachedMeta:s}=a,i=e._stacks||(e._stacks={}),{iScale:o,vScale:r,index:c}=s,h=o.axis,d=r.axis,l=dk(o,r,s),p=t.length;let g;for(let u=0;u<p;++u){const f=t[u],{[h]:v,[d]:m}=f,M=f._stacks||(f._stacks={});g=M[d]=pk(i,l,v),g[c]=m,g._top=u2(g,r,!0,s.type),g._bottom=u2(g,r,!1,s.type);const y=g._visualValues||(g._visualValues={});y[c]=m}}function wa(a,t){const e=a.scales;return Object.keys(e).filter(s=>e[s].axis===t).shift()}function gk(a,t){return Tt(a,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:"default",type:"dataset"})}function uk(a,t,e){return Tt(a,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})}function ee(a,t){const e=a.controller.index,s=a.vScale&&a.vScale.axis;if(s){t=t||a._parsed;for(const i of t){const o=i._stacks;if(!o||o[s]===void 0||o[s][e]===void 0)return;delete o[s][e],o[s]._visualValues!==void 0&&o[s]._visualValues[e]!==void 0&&delete o[s]._visualValues[e]}}}const Sa=a=>a==="reset"||a==="none",v2=(a,t)=>t?a:Object.assign({},a),fk=(a,t,e)=>a&&!t.hidden&&t._stacked&&{keys:Wo(e,!0),values:null};class ct{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){const t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=ba(t.vScale,t),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled("filler")&&console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")}updateIndex(t){this.index!==t&&ee(this._cachedMeta),this.index=t}linkScales(){const t=this.chart,e=this._cachedMeta,s=this.getDataset(),i=(p,g,u,f)=>p==="x"?g:p==="r"?f:u,o=e.xAxisID=L(s.xAxisID,wa(t,"x")),r=e.yAxisID=L(s.yAxisID,wa(t,"y")),c=e.rAxisID=L(s.rAxisID,wa(t,"r")),h=e.indexAxis,d=e.iAxisID=i(h,o,r,c),l=e.vAxisID=i(h,r,o,c);e.xScale=this.getScaleForId(o),e.yScale=this.getScaleForId(r),e.rScale=this.getScaleForId(c),e.iScale=this.getScaleForId(d),e.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){const e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){const t=this._cachedMeta;this._data&&Qn(this._data,this),t._stacked&&ee(t)}_dataCheck(){const t=this.getDataset(),e=t.data||(t.data=[]),s=this._data;if(V(e)){const i=this._cachedMeta;this._data=hk(e,i)}else if(s!==e){if(s){Qn(s,this);const i=this._cachedMeta;ee(i),i._parsed=[]}e&&Object.isExtensible(e)&&JC(e,this),this._syncList=[],this._data=e}}addElements(){const t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){const e=this._cachedMeta,s=this.getDataset();let i=!1;this._dataCheck();const o=e._stacked;e._stacked=ba(e.vScale,e),e.stack!==s.stack&&(i=!0,ee(e),e.stack=s.stack),this._resyncElements(t),(i||o!==e._stacked)&&(f2(this,e._parsed),e._stacked=ba(e.vScale,e))}configure(){const t=this.chart.config,e=t.datasetScopeKeys(this._type),s=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(s,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){const{_cachedMeta:s,_data:i}=this,{iScale:o,_stacked:r}=s,c=o.axis;let h=t===0&&e===i.length?!0:s._sorted,d=t>0&&s._parsed[t-1],l,p,g;if(this._parsing===!1)s._parsed=i,s._sorted=!0,g=i;else{z(i[t])?g=this.parseArrayData(s,i,t,e):V(i[t])?g=this.parseObjectData(s,i,t,e):g=this.parsePrimitiveData(s,i,t,e);const u=()=>p[c]===null||d&&p[c]<d[c];for(l=0;l<e;++l)s._parsed[l+t]=p=g[l],h&&(u()&&(h=!1),d=p);s._sorted=h}r&&f2(this,g)}parsePrimitiveData(t,e,s,i){const{iScale:o,vScale:r}=t,c=o.axis,h=r.axis,d=o.getLabels(),l=o===r,p=new Array(i);let g,u,f;for(g=0,u=i;g<u;++g)f=g+s,p[g]={[c]:l||o.parse(d[f],f),[h]:r.parse(e[f],f)};return p}parseArrayData(t,e,s,i){const{xScale:o,yScale:r}=t,c=new Array(i);let h,d,l,p;for(h=0,d=i;h<d;++h)l=h+s,p=e[l],c[h]={x:o.parse(p[0],l),y:r.parse(p[1],l)};return c}parseObjectData(t,e,s,i){const{xScale:o,yScale:r}=t,{xAxisKey:c="x",yAxisKey:h="y"}=this._parsing,d=new Array(i);let l,p,g,u;for(l=0,p=i;l<p;++l)g=l+s,u=e[g],d[l]={x:o.parse(Lt(u,c),g),y:r.parse(Lt(u,h),g)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,s){const i=this.chart,o=this._cachedMeta,r=e[t.axis],c={keys:Wo(i,!0),values:e._stacks[t.axis]._visualValues};return g2(c,r,o.index,{mode:s})}updateRangeFromParsed(t,e,s,i){const o=s[e.axis];let r=o===null?NaN:o;const c=i&&s._stacks[e.axis];i&&c&&(i.values=c,r=g2(i,o,this._cachedMeta.index)),t.min=Math.min(t.min,r),t.max=Math.max(t.max,r)}getMinMax(t,e){const s=this._cachedMeta,i=s._parsed,o=s._sorted&&t===s.iScale,r=i.length,c=this._getOtherScale(t),h=fk(e,s,this.chart),d={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:l,max:p}=lk(c);let g,u;function f(){u=i[g];const v=u[c.axis];return!W(u[t.axis])||l>v||p<v}for(g=0;g<r&&!(!f()&&(this.updateRangeFromParsed(d,t,u,h),o));++g);if(o){for(g=r-1;g>=0;--g)if(!f()){this.updateRangeFromParsed(d,t,u,h);break}}return d}getAllParsedValues(t){const e=this._cachedMeta._parsed,s=[];let i,o,r;for(i=0,o=e.length;i<o;++i)r=e[i][t.axis],W(r)&&s.push(r);return s}getMaxOverflow(){return!1}getLabelAndValue(t){const e=this._cachedMeta,s=e.iScale,i=e.vScale,o=this.getParsed(t);return{label:s?""+s.getLabelForValue(o[s.axis]):"",value:i?""+i.getLabelForValue(o[i.axis]):""}}_update(t){const e=this._cachedMeta;this.update(t||"default"),e._clip=ck(L(this.options.clip,rk(e.xScale,e.yScale,this.getMaxOverflow())))}update(t){}draw(){const t=this._ctx,e=this.chart,s=this._cachedMeta,i=s.data||[],o=e.chartArea,r=[],c=this._drawStart||0,h=this._drawCount||i.length-c,d=this.options.drawActiveElementsOnTop;let l;for(s.dataset&&s.dataset.draw(t,o,c,h),l=c;l<c+h;++l){const p=i[l];p.hidden||(p.active&&d?r.push(p):p.draw(t,o))}for(l=0;l<r.length;++l)r[l].draw(t,o)}getStyle(t,e){const s=e?"active":"default";return t===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(s):this.resolveDataElementOptions(t||0,s)}getContext(t,e,s){const i=this.getDataset();let o;if(t>=0&&t<this._cachedMeta.data.length){const r=this._cachedMeta.data[t];o=r.$context||(r.$context=uk(this.getContext(),t,r)),o.parsed=this.getParsed(t),o.raw=i.data[t],o.index=o.dataIndex=t}else o=this.$context||(this.$context=gk(this.chart.getContext(),this.index)),o.dataset=i,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=s,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",s){const i=e==="active",o=this._cachedDataOpts,r=t+"-"+e,c=o[r],h=this.enableOptionSharing&&ye(s);if(c)return v2(c,h);const d=this.chart.config,l=d.datasetElementScopeKeys(this._type,t),p=i?[`${t}Hover`,"hover",t,""]:[t,""],g=d.getOptionScopes(this.getDataset(),l),u=Object.keys(N.elements[t]),f=()=>this.getContext(s,i,e),v=d.resolveNamedOptions(g,u,f,p);return v.$shared&&(v.$shared=h,o[r]=Object.freeze(v2(v,h))),v}_resolveAnimations(t,e,s){const i=this.chart,o=this._cachedDataOpts,r=`animation-${e}`,c=o[r];if(c)return c;let h;if(i.options.animation!==!1){const l=this.chart.config,p=l.datasetAnimationScopeKeys(this._type,e),g=l.getOptionScopes(this.getDataset(),p);h=l.createResolver(g,this.getContext(t,s,e))}const d=new No(i,h&&h.animations);return h&&h._cacheable&&(o[r]=Object.freeze(d)),d}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||Sa(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){const s=this.resolveDataElementOptions(t,e),i=this._sharedOptions,o=this.getSharedOptions(s),r=this.includeOptions(e,o)||o!==i;return this.updateSharedOptions(o,e,s),{sharedOptions:o,includeOptions:r}}updateElement(t,e,s,i){Sa(i)?Object.assign(t,s):this._resolveAnimations(e,i).update(t,s)}updateSharedOptions(t,e,s){t&&!Sa(e)&&this._resolveAnimations(void 0,e).update(t,s)}_setStyle(t,e,s,i){t.active=i;const o=this.getStyle(e,i);this._resolveAnimations(e,s,i).update(t,{options:!i&&this.getSharedOptions(o)||o})}removeHoverStyle(t,e,s){this._setStyle(t,s,"active",!1)}setHoverStyle(t,e,s){this._setStyle(t,s,"active",!0)}_removeDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){const t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){const e=this._data,s=this._cachedMeta.data;for(const[c,h,d]of this._syncList)this[c](h,d);this._syncList=[];const i=s.length,o=e.length,r=Math.min(o,i);r&&this.parse(0,r),o>i?this._insertElements(i,o-i,t):o<i&&this._removeElements(o,i-o)}_insertElements(t,e,s=!0){const i=this._cachedMeta,o=i.data,r=t+e;let c;const h=d=>{for(d.length+=e,c=d.length-1;c>=r;c--)d[c]=d[c-e]};for(h(o),c=t;c<r;++c)o[c]=new this.dataElementType;this._parsing&&h(i._parsed),this.parse(t,e),s&&this.updateElements(o,t,e,"reset")}updateElements(t,e,s,i){}_removeElements(t,e){const s=this._cachedMeta;if(this._parsing){const i=s._parsed.splice(t,e);s._stacked&&ee(s,i)}s.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{const[e,s,i]=t;this[e](s,i)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){const t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);const s=arguments.length-2;s&&this._sync(["_insertElements",t,s])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}S(ct,"defaults",{}),S(ct,"datasetElementType",null),S(ct,"dataElementType",null);function vk(a,t){if(!a._cache.$bar){const e=a.getMatchingVisibleMetas(t);let s=[];for(let i=0,o=e.length;i<o;i++)s=s.concat(e[i].controller.getAllParsedValues(a));a._cache.$bar=bo(s.sort((i,o)=>i-o))}return a._cache.$bar}function mk(a){const t=a.iScale,e=vk(t,a.type);let s=t._length,i,o,r,c;const h=()=>{r===32767||r===-32768||(ye(c)&&(s=Math.min(s,Math.abs(r-c)||s)),c=r)};for(i=0,o=e.length;i<o;++i)r=t.getPixelForValue(e[i]),h();for(c=void 0,i=0,o=t.ticks.length;i<o;++i)r=t.getPixelForTick(i),h();return s}function Mk(a,t,e,s){const i=e.barThickness;let o,r;return P(i)?(o=t.min*e.categoryPercentage,r=e.barPercentage):(o=i*s,r=1),{chunk:o/s,ratio:r,start:t.pixels[a]-o/2}}function yk(a,t,e,s){const i=t.pixels,o=i[a];let r=a>0?i[a-1]:null,c=a<i.length-1?i[a+1]:null;const h=e.categoryPercentage;r===null&&(r=o-(c===null?t.end-t.start:c-o)),c===null&&(c=o+o-r);const d=o-(o-Math.min(r,c))/2*h;return{chunk:Math.abs(c-r)/2*h/s,ratio:e.barPercentage,start:d}}function xk(a,t,e,s){const i=e.parse(a[0],s),o=e.parse(a[1],s),r=Math.min(i,o),c=Math.max(i,o);let h=r,d=c;Math.abs(r)>Math.abs(c)&&(h=c,d=r),t[e.axis]=d,t._custom={barStart:h,barEnd:d,start:i,end:o,min:r,max:c}}function $o(a,t,e,s){return z(a)?xk(a,t,e,s):t[e.axis]=e.parse(a,s),t}function m2(a,t,e,s){const i=a.iScale,o=a.vScale,r=i.getLabels(),c=i===o,h=[];let d,l,p,g;for(d=e,l=e+s;d<l;++d)g=t[d],p={},p[i.axis]=c||i.parse(r[d],d),h.push($o(g,p,o,d));return h}function Ca(a){return a&&a.barStart!==void 0&&a.barEnd!==void 0}function bk(a,t,e){return a!==0?pt(a):(t.isHorizontal()?1:-1)*(t.min>=e?1:-1)}function wk(a){let t,e,s,i,o;return a.horizontal?(t=a.base>a.x,e="left",s="right"):(t=a.base<a.y,e="bottom",s="top"),t?(i="end",o="start"):(i="start",o="end"),{start:e,end:s,reverse:t,top:i,bottom:o}}function Sk(a,t,e,s){let i=t.borderSkipped;const o={};if(!i){a.borderSkipped=o;return}if(i===!0){a.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}const{start:r,end:c,reverse:h,top:d,bottom:l}=wk(a);i==="middle"&&e&&(a.enableBorderRadius=!0,(e._top||0)===s?i=d:(e._bottom||0)===s?i=l:(o[M2(l,r,c,h)]=!0,i=d)),o[M2(i,r,c,h)]=!0,a.borderSkipped=o}function M2(a,t,e,s){return s?(a=Ck(a,t,e),a=y2(a,e,t)):a=y2(a,t,e),a}function Ck(a,t,e){return a===t?e:a===e?t:a}function y2(a,t,e){return a==="start"?t:a==="end"?e:a}function Ak(a,{inflateAmount:t},e){a.inflateAmount=t==="auto"?e===1?.33:0:t}class Ue extends ct{parsePrimitiveData(t,e,s,i){return m2(t,e,s,i)}parseArrayData(t,e,s,i){return m2(t,e,s,i)}parseObjectData(t,e,s,i){const{iScale:o,vScale:r}=t,{xAxisKey:c="x",yAxisKey:h="y"}=this._parsing,d=o.axis==="x"?c:h,l=r.axis==="x"?c:h,p=[];let g,u,f,v;for(g=s,u=s+i;g<u;++g)v=e[g],f={},f[o.axis]=o.parse(Lt(v,d),g),p.push($o(Lt(v,l),f,r,g));return p}updateRangeFromParsed(t,e,s,i){super.updateRangeFromParsed(t,e,s,i);const o=s._custom;o&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,o.min),t.max=Math.max(t.max,o.max))}getMaxOverflow(){return 0}getLabelAndValue(t){const e=this._cachedMeta,{iScale:s,vScale:i}=e,o=this.getParsed(t),r=o._custom,c=Ca(r)?"["+r.start+", "+r.end+"]":""+i.getLabelForValue(o[i.axis]);return{label:""+s.getLabelForValue(o[s.axis]),value:c}}initialize(){this.enableOptionSharing=!0,super.initialize();const t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){const e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,s,i){const o=i==="reset",{index:r,_cachedMeta:{vScale:c}}=this,h=c.getBasePixel(),d=c.isHorizontal(),l=this._getRuler(),{sharedOptions:p,includeOptions:g}=this._getSharedOptions(e,i);for(let u=e;u<e+s;u++){const f=this.getParsed(u),v=o||P(f[c.axis])?{base:h,head:h}:this._calculateBarValuePixels(u),m=this._calculateBarIndexPixels(u,l),M=(f._stacks||{})[c.axis],y={horizontal:d,base:v.base,enableBorderRadius:!M||Ca(f._custom)||r===M._top||r===M._bottom,x:d?v.head:m.center,y:d?m.center:v.head,height:d?m.size:Math.abs(v.size),width:d?Math.abs(v.size):m.size};g&&(y.options=p||this.resolveDataElementOptions(u,t[u].active?"active":i));const w=y.options||t[u].options;Sk(y,w,M,r),Ak(y,w,l.ratio),this.updateElement(t[u],u,y,i)}}_getStacks(t,e){const{iScale:s}=this._cachedMeta,i=s.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped),o=s.options.stacked,r=[],c=this._cachedMeta.controller.getParsed(e),h=c&&c[s.axis],d=l=>{const p=l._parsed.find(u=>u[s.axis]===h),g=p&&p[l.vScale.axis];if(P(g)||isNaN(g))return!0};for(const l of i)if(!(e!==void 0&&d(l))&&((o===!1||r.indexOf(l.stack)===-1||o===void 0&&l.stack===void 0)&&r.push(l.stack),l.index===t))break;return r.length||r.push(void 0),r}_getStackCount(t){return this._getStacks(void 0,t).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){const t=this.chart.scales,e=this.chart.options.indexAxis;return Object.keys(t).filter(s=>t[s].axis===e).shift()}_getAxis(){const t={},e=this.getFirstScaleIdForIndexAxis();for(const s of this.chart.data.datasets)t[L(this.chart.options.indexAxis==="x"?s.xAxisID:s.yAxisID,e)]=!0;return Object.keys(t)}_getStackIndex(t,e,s){const i=this._getStacks(t,s),o=e!==void 0?i.indexOf(e):-1;return o===-1?i.length-1:o}_getRuler(){const t=this.options,e=this._cachedMeta,s=e.iScale,i=[];let o,r;for(o=0,r=e.data.length;o<r;++o)i.push(s.getPixelForValue(this.getParsed(o)[s.axis],o));const c=t.barThickness;return{min:c||mk(e),pixels:i,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:t.grouped,ratio:c?1:t.categoryPercentage*t.barPercentage}}_calculateBarValuePixels(t){const{_cachedMeta:{vScale:e,_stacked:s,index:i},options:{base:o,minBarLength:r}}=this,c=o||0,h=this.getParsed(t),d=h._custom,l=Ca(d);let p=h[e.axis],g=0,u=s?this.applyStack(e,h,s):p,f,v;u!==p&&(g=u-p,u=p),l&&(p=d.barStart,u=d.barEnd-d.barStart,p!==0&&pt(p)!==pt(d.barEnd)&&(g=0),g+=p);const m=!P(o)&&!l?o:g;let M=e.getPixelForValue(m);if(this.chart.getDataVisibility(t)?f=e.getPixelForValue(g+u):f=M,v=f-M,Math.abs(v)<r){v=bk(v,e,c)*r,p===c&&(M-=v/2);const y=e.getPixelForDecimal(0),w=e.getPixelForDecimal(1),b=Math.min(y,w),x=Math.max(y,w);M=Math.max(Math.min(M,x),b),f=M+v,s&&!l&&(h._stacks[e.axis]._visualValues[i]=e.getValueForPixel(f)-e.getValueForPixel(M))}if(M===e.getPixelForValue(c)){const y=pt(v)*e.getLineWidthForValue(c)/2;M+=y,v-=y}return{size:v,base:M,head:f,center:f+v/2}}_calculateBarIndexPixels(t,e){const s=e.scale,i=this.options,o=i.skipNull,r=L(i.maxBarThickness,1/0);let c,h;const d=this._getAxisCount();if(e.grouped){const l=o?this._getStackCount(t):e.stackCount,p=i.barThickness==="flex"?yk(t,e,i,l*d):Mk(t,e,i,l*d),g=this.chart.options.indexAxis==="x"?this.getDataset().xAxisID:this.getDataset().yAxisID,u=this._getAxis().indexOf(L(g,this.getFirstScaleIdForIndexAxis())),f=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0)+u;c=p.start+p.chunk*f+p.chunk/2,h=Math.min(r,p.chunk*p.ratio)}else c=s.getPixelForValue(this.getParsed(t)[s.axis],t),h=Math.min(r,e.min*e.ratio);return{base:c-h/2,head:c+h/2,center:c,size:h}}draw(){const t=this._cachedMeta,e=t.vScale,s=t.data,i=s.length;let o=0;for(;o<i;++o)this.getParsed(o)[e.axis]!==null&&!s[o].hidden&&s[o].draw(this._ctx)}}S(Ue,"id","bar"),S(Ue,"defaults",{datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}}),S(Ue,"overrides",{scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}});class Ze extends ct{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,s,i){const o=super.parsePrimitiveData(t,e,s,i);for(let r=0;r<o.length;r++)o[r]._custom=this.resolveDataElementOptions(r+s).radius;return o}parseArrayData(t,e,s,i){const o=super.parseArrayData(t,e,s,i);for(let r=0;r<o.length;r++){const c=e[s+r];o[r]._custom=L(c[2],this.resolveDataElementOptions(r+s).radius)}return o}parseObjectData(t,e,s,i){const o=super.parseObjectData(t,e,s,i);for(let r=0;r<o.length;r++){const c=e[s+r];o[r]._custom=L(c&&c.r&&+c.r,this.resolveDataElementOptions(r+s).radius)}return o}getMaxOverflow(){const t=this._cachedMeta.data;let e=0;for(let s=t.length-1;s>=0;--s)e=Math.max(e,t[s].size(this.resolveDataElementOptions(s))/2);return e>0&&e}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:o}=e,r=this.getParsed(t),c=i.getLabelForValue(r.x),h=o.getLabelForValue(r.y),d=r._custom;return{label:s[t]||"",value:"("+c+", "+h+(d?", "+d:"")+")"}}update(t){const e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,s,i){const o=i==="reset",{iScale:r,vScale:c}=this._cachedMeta,{sharedOptions:h,includeOptions:d}=this._getSharedOptions(e,i),l=r.axis,p=c.axis;for(let g=e;g<e+s;g++){const u=t[g],f=!o&&this.getParsed(g),v={},m=v[l]=o?r.getPixelForDecimal(.5):r.getPixelForValue(f[l]),M=v[p]=o?c.getBasePixel():c.getPixelForValue(f[p]);v.skip=isNaN(m)||isNaN(M),d&&(v.options=h||this.resolveDataElementOptions(g,u.active?"active":i),o&&(v.options.radius=0)),this.updateElement(u,g,v,i)}}resolveDataElementOptions(t,e){const s=this.getParsed(t);let i=super.resolveDataElementOptions(t,e);i.$shared&&(i=Object.assign({},i,{$shared:!1}));const o=i.radius;return e!=="active"&&(i.radius=0),i.radius+=L(s&&s._custom,o),i}}S(Ze,"id","bubble"),S(Ze,"defaults",{datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}}),S(Ze,"overrides",{scales:{x:{type:"linear"},y:{type:"linear"}}});function kk(a,t,e){let s=1,i=1,o=0,r=0;if(t<B){const c=a,h=c+t,d=Math.cos(c),l=Math.sin(c),p=Math.cos(h),g=Math.sin(h),u=(w,b,x)=>xe(w,c,h,!0)?1:Math.max(b,b*e,x,x*e),f=(w,b,x)=>xe(w,c,h,!0)?-1:Math.min(b,b*e,x,x*e),v=u(0,d,p),m=u(U,l,g),M=f(E,d,p),y=f(E+U,l,g);s=(v-M)/2,i=(m-y)/2,o=-(v+M)/2,r=-(m+y)/2}return{ratioX:s,ratioY:i,offsetX:o,offsetY:r}}class Ft extends ct{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){const s=this.getDataset().data,i=this._cachedMeta;if(this._parsing===!1)i._parsed=s;else{let o=h=>+s[h];if(V(s[t])){const{key:h="value"}=this._parsing;o=d=>+Lt(s[d],h)}let r,c;for(r=t,c=t+e;r<c;++r)i._parsed[r]=o(r)}}_getRotation(){return rt(this.options.rotation-90)}_getCircumference(){return rt(this.options.circumference)}_getRotationExtents(){let t=B,e=-B;for(let s=0;s<this.chart.data.datasets.length;++s)if(this.chart.isDatasetVisible(s)&&this.chart.getDatasetMeta(s).type===this._type){const i=this.chart.getDatasetMeta(s).controller,o=i._getRotation(),r=i._getCircumference();t=Math.min(t,o),e=Math.max(e,o+r)}return{rotation:t,circumference:e-t}}update(t){const e=this.chart,{chartArea:s}=e,i=this._cachedMeta,o=i.data,r=this.getMaxBorderWidth()+this.getMaxOffset(o)+this.options.spacing,c=Math.max((Math.min(s.width,s.height)-r)/2,0),h=Math.min(BC(this.options.cutout,c),1),d=this._getRingWeight(this.index),{circumference:l,rotation:p}=this._getRotationExtents(),{ratioX:g,ratioY:u,offsetX:f,offsetY:v}=kk(p,l,h),m=(s.width-r)/g,M=(s.height-r)/u,y=Math.max(Math.min(m,M)/2,0),w=vo(this.options.radius,y),b=Math.max(w*h,0),x=(w-b)/this._getVisibleDatasetWeightTotal();this.offsetX=f*w,this.offsetY=v*w,i.total=this.calculateTotal(),this.outerRadius=w-x*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-x*d,0),this.updateElements(o,0,o.length,t)}_circumference(t,e){const s=this.options,i=this._cachedMeta,o=this._getCircumference();return e&&s.animation.animateRotate||!this.chart.getDataVisibility(t)||i._parsed[t]===null||i.data[t].hidden?0:this.calculateCircumference(i._parsed[t]*o/B)}updateElements(t,e,s,i){const o=i==="reset",r=this.chart,c=r.chartArea,d=r.options.animation,l=(c.left+c.right)/2,p=(c.top+c.bottom)/2,g=o&&d.animateScale,u=g?0:this.innerRadius,f=g?0:this.outerRadius,{sharedOptions:v,includeOptions:m}=this._getSharedOptions(e,i);let M=this._getRotation(),y;for(y=0;y<e;++y)M+=this._circumference(y,o);for(y=e;y<e+s;++y){const w=this._circumference(y,o),b=t[y],x={x:l+this.offsetX,y:p+this.offsetY,startAngle:M,endAngle:M+w,circumference:w,outerRadius:f,innerRadius:u};m&&(x.options=v||this.resolveDataElementOptions(y,b.active?"active":i)),M+=w,this.updateElement(b,y,x,i)}}calculateTotal(){const t=this._cachedMeta,e=t.data;let s=0,i;for(i=0;i<e.length;i++){const o=t._parsed[i];o!==null&&!isNaN(o)&&this.chart.getDataVisibility(i)&&!e[i].hidden&&(s+=Math.abs(o))}return s}calculateCircumference(t){const e=this._cachedMeta.total;return e>0&&!isNaN(t)?B*(Math.abs(t)/e):0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],o=ke(e._parsed[t],s.options.locale);return{label:i[t]||"",value:o}}getMaxBorderWidth(t){let e=0;const s=this.chart;let i,o,r,c,h;if(!t){for(i=0,o=s.data.datasets.length;i<o;++i)if(s.isDatasetVisible(i)){r=s.getDatasetMeta(i),t=r.data,c=r.controller;break}}if(!t)return 0;for(i=0,o=t.length;i<o;++i)h=c.resolveDataElementOptions(i),h.borderAlign!=="inner"&&(e=Math.max(e,h.borderWidth||0,h.hoverBorderWidth||0));return e}getMaxOffset(t){let e=0;for(let s=0,i=t.length;s<i;++s){const o=this.resolveDataElementOptions(s);e=Math.max(e,o.offset||0,o.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let s=0;s<t;++s)this.chart.isDatasetVisible(s)&&(e+=this._getRingWeight(s));return e}_getRingWeight(t){return Math.max(L(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}S(Ft,"id","doughnut"),S(Ft,"defaults",{datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"}),S(Ft,"descriptors",{_scriptable:t=>t!=="spacing",_indexable:t=>t!=="spacing"&&!t.startsWith("borderDash")&&!t.startsWith("hoverBorderDash")}),S(Ft,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data,{labels:{pointStyle:s,textAlign:i,color:o,useBorderRadius:r,borderRadius:c}}=t.legend.options;return e.labels.length&&e.datasets.length?e.labels.map((h,d)=>{const p=t.getDatasetMeta(0).controller.getStyle(d);return{text:h,fillStyle:p.backgroundColor,fontColor:o,hidden:!t.getDataVisibility(d),lineDash:p.borderDash,lineDashOffset:p.borderDashOffset,lineJoin:p.borderJoinStyle,lineWidth:p.borderWidth,strokeStyle:p.borderColor,textAlign:i,pointStyle:s,borderRadius:r&&(c||p.borderRadius),index:d}}):[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}}});class je extends ct{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){const e=this._cachedMeta,{dataset:s,data:i=[],_dataset:o}=e,r=this.chart._animationsDisabled;let{start:c,count:h}=Co(e,i,r);this._drawStart=c,this._drawCount=h,Ao(e)&&(c=0,h=i.length),s._chart=this.chart,s._datasetIndex=this.index,s._decimated=!!o._decimated,s.points=i;const d=this.resolveDatasetElementOptions(t);this.options.showLine||(d.borderWidth=0),d.segment=this.options.segment,this.updateElement(s,void 0,{animated:!r,options:d},t),this.updateElements(i,c,h,t)}updateElements(t,e,s,i){const o=i==="reset",{iScale:r,vScale:c,_stacked:h,_dataset:d}=this._cachedMeta,{sharedOptions:l,includeOptions:p}=this._getSharedOptions(e,i),g=r.axis,u=c.axis,{spanGaps:f,segment:v}=this.options,m=Xt(f)?f:Number.POSITIVE_INFINITY,M=this.chart._animationsDisabled||o||i==="none",y=e+s,w=t.length;let b=e>0&&this.getParsed(e-1);for(let x=0;x<w;++x){const C=t[x],A=M?C:{};if(x<e||x>=y){A.skip=!0;continue}const k=this.getParsed(x),H=P(k[u]),_=A[g]=r.getPixelForValue(k[g],x),T=A[u]=o||H?c.getBasePixel():c.getPixelForValue(h?this.applyStack(c,k,h):k[u],x);A.skip=isNaN(_)||isNaN(T)||H,A.stop=x>0&&Math.abs(k[g]-b[g])>m,v&&(A.parsed=k,A.raw=d.data[x]),p&&(A.options=l||this.resolveDataElementOptions(x,C.active?"active":i)),M||this.updateElement(C,x,A,i),b=k}}getMaxOverflow(){const t=this._cachedMeta,e=t.dataset,s=e.options&&e.options.borderWidth||0,i=t.data||[];if(!i.length)return s;const o=i[0].size(this.resolveDataElementOptions(0)),r=i[i.length-1].size(this.resolveDataElementOptions(i.length-1));return Math.max(s,o,r)/2}draw(){const t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}S(je,"id","line"),S(je,"defaults",{datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1}),S(je,"overrides",{scales:{_index_:{type:"category"},_value_:{type:"linear"}}});class ve extends ct{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){const e=this._cachedMeta,s=this.chart,i=s.data.labels||[],o=ke(e._parsed[t].r,s.options.locale);return{label:i[t]||"",value:o}}parseObjectData(t,e,s,i){return Do.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){const t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((s,i)=>{const o=this.getParsed(i).r;!isNaN(o)&&this.chart.getDataVisibility(i)&&(o<e.min&&(e.min=o),o>e.max&&(e.max=o))}),e}_updateRadius(){const t=this.chart,e=t.chartArea,s=t.options,i=Math.min(e.right-e.left,e.bottom-e.top),o=Math.max(i/2,0),r=Math.max(s.cutoutPercentage?o/100*s.cutoutPercentage:1,0),c=(o-r)/t.getVisibleDatasetCount();this.outerRadius=o-c*this.index,this.innerRadius=this.outerRadius-c}updateElements(t,e,s,i){const o=i==="reset",r=this.chart,h=r.options.animation,d=this._cachedMeta.rScale,l=d.xCenter,p=d.yCenter,g=d.getIndexAngle(0)-.5*E;let u=g,f;const v=360/this.countVisibleElements();for(f=0;f<e;++f)u+=this._computeAngle(f,i,v);for(f=e;f<e+s;f++){const m=t[f];let M=u,y=u+this._computeAngle(f,i,v),w=r.getDataVisibility(f)?d.getDistanceFromCenterForValue(this.getParsed(f).r):0;u=y,o&&(h.animateScale&&(w=0),h.animateRotate&&(M=y=g));const b={x:l,y:p,innerRadius:0,outerRadius:w,startAngle:M,endAngle:y,options:this.resolveDataElementOptions(f,m.active?"active":i)};this.updateElement(m,f,b,i)}}countVisibleElements(){const t=this._cachedMeta;let e=0;return t.data.forEach((s,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,s){return this.chart.getDataVisibility(t)?rt(this.resolveDataElementOptions(t,e).angle||s):0}}S(ve,"id","polarArea"),S(ve,"defaults",{dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0}),S(ve,"overrides",{aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){const e=t.data;if(e.labels.length&&e.datasets.length){const{labels:{pointStyle:s,color:i}}=t.legend.options;return e.labels.map((o,r)=>{const h=t.getDatasetMeta(0).controller.getStyle(r);return{text:o,fillStyle:h.backgroundColor,strokeStyle:h.borderColor,fontColor:i,lineWidth:h.borderWidth,pointStyle:s,hidden:!t.getDataVisibility(r),index:r}})}return[]}},onClick(t,e,s){s.chart.toggleDataVisibility(e.index),s.chart.update()}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}});class Oa extends Ft{}S(Oa,"id","pie"),S(Oa,"defaults",{cutout:0,rotation:0,circumference:360,radius:"100%"});class qe extends ct{getLabelAndValue(t){const e=this._cachedMeta.vScale,s=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(s[e.axis])}}parseObjectData(t,e,s,i){return Do.bind(this)(t,e,s,i)}update(t){const e=this._cachedMeta,s=e.dataset,i=e.data||[],o=e.iScale.getLabels();if(s.points=i,t!=="resize"){const r=this.resolveDatasetElementOptions(t);this.options.showLine||(r.borderWidth=0);const c={_loop:!0,_fullLoop:o.length===i.length,options:r};this.updateElement(s,void 0,c,t)}this.updateElements(i,0,i.length,t)}updateElements(t,e,s,i){const o=this._cachedMeta.rScale,r=i==="reset";for(let c=e;c<e+s;c++){const h=t[c],d=this.resolveDataElementOptions(c,h.active?"active":i),l=o.getPointPositionForValue(c,this.getParsed(c).r),p=r?o.xCenter:l.x,g=r?o.yCenter:l.y,u={x:p,y:g,angle:l.angle,skip:isNaN(p)||isNaN(g),options:d};this.updateElement(h,c,u,i)}}}S(qe,"id","radar"),S(qe,"defaults",{datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}}),S(qe,"overrides",{aspectRatio:1,scales:{r:{type:"radialLinear"}}});class Ge extends ct{getLabelAndValue(t){const e=this._cachedMeta,s=this.chart.data.labels||[],{xScale:i,yScale:o}=e,r=this.getParsed(t),c=i.getLabelForValue(r.x),h=o.getLabelForValue(r.y);return{label:s[t]||"",value:"("+c+", "+h+")"}}update(t){const e=this._cachedMeta,{data:s=[]}=e,i=this.chart._animationsDisabled;let{start:o,count:r}=Co(e,s,i);if(this._drawStart=o,this._drawCount=r,Ao(e)&&(o=0,r=s.length),this.options.showLine){this.datasetElementType||this.addElements();const{dataset:c,_dataset:h}=e;c._chart=this.chart,c._datasetIndex=this.index,c._decimated=!!h._decimated,c.points=s;const d=this.resolveDatasetElementOptions(t);d.segment=this.options.segment,this.updateElement(c,void 0,{animated:!i,options:d},t)}else this.datasetElementType&&(delete e.dataset,this.datasetElementType=!1);this.updateElements(s,o,r,t)}addElements(){const{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=this.chart.registry.getElement("line")),super.addElements()}updateElements(t,e,s,i){const o=i==="reset",{iScale:r,vScale:c,_stacked:h,_dataset:d}=this._cachedMeta,l=this.resolveDataElementOptions(e,i),p=this.getSharedOptions(l),g=this.includeOptions(i,p),u=r.axis,f=c.axis,{spanGaps:v,segment:m}=this.options,M=Xt(v)?v:Number.POSITIVE_INFINITY,y=this.chart._animationsDisabled||o||i==="none";let w=e>0&&this.getParsed(e-1);for(let b=e;b<e+s;++b){const x=t[b],C=this.getParsed(b),A=y?x:{},k=P(C[f]),H=A[u]=r.getPixelForValue(C[u],b),_=A[f]=o||k?c.getBasePixel():c.getPixelForValue(h?this.applyStack(c,C,h):C[f],b);A.skip=isNaN(H)||isNaN(_)||k,A.stop=b>0&&Math.abs(C[u]-w[u])>M,m&&(A.parsed=C,A.raw=d.data[b]),g&&(A.options=p||this.resolveDataElementOptions(b,x.active?"active":i)),y||this.updateElement(x,b,A,i),w=C}this.updateSharedOptions(p,i,l)}getMaxOverflow(){const t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let c=0;for(let h=e.length-1;h>=0;--h)c=Math.max(c,e[h].size(this.resolveDataElementOptions(h))/2);return c>0&&c}const s=t.dataset,i=s.options&&s.options.borderWidth||0;if(!e.length)return i;const o=e[0].size(this.resolveDataElementOptions(0)),r=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(i,o,r)/2}}S(Ge,"id","scatter"),S(Ge,"defaults",{datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1}),S(Ge,"overrides",{interaction:{mode:"point"},scales:{x:{type:"linear"},y:{type:"linear"}}});var Hk=Object.freeze({__proto__:null,BarController:Ue,BubbleController:Ze,DoughnutController:Ft,LineController:je,PieController:Oa,PolarAreaController:ve,RadarController:qe,ScatterController:Ge});function It(){throw new Error("This method is not implemented: Check that a complete date adapter is provided.")}class c1{constructor(t){S(this,"options");this.options=t||{}}static override(t){Object.assign(c1.prototype,t)}init(){}formats(){return It()}parse(){return It()}format(){return It()}add(){return It()}diff(){return It()}startOf(){return It()}endOf(){return It()}}var Lk={_date:c1};function _k(a,t,e,s){const{controller:i,data:o,_sorted:r}=a,c=i._cachedMeta.iScale,h=a.dataset&&a.dataset.options?a.dataset.options.spanGaps:null;if(c&&t===c.axis&&t!=="r"&&r&&o.length){const d=c._reversePixels?KC:yt;if(s){if(i._sharedOptions){const l=o[0],p=typeof l.getRange=="function"&&l.getRange(t);if(p){const g=d(o,t,e-p),u=d(o,t,e+p);return{lo:g.lo,hi:u.hi}}}}else{const l=d(o,t,e);if(h){const{vScale:p}=i._cachedMeta,{_parsed:g}=a,u=g.slice(0,l.lo+1).reverse().findIndex(v=>!P(v[p.axis]));l.lo-=Math.max(0,u);const f=g.slice(l.hi).findIndex(v=>!P(v[p.axis]));l.hi+=Math.max(0,f)}return l}}return{lo:0,hi:o.length-1}}function la(a,t,e,s,i){const o=a.getSortedVisibleDatasetMetas(),r=e[t];for(let c=0,h=o.length;c<h;++c){const{index:d,data:l}=o[c],{lo:p,hi:g}=_k(o[c],t,r,i);for(let u=p;u<=g;++u){const f=l[u];f.skip||s(f,d,u)}}}function Tk(a){const t=a.indexOf("x")!==-1,e=a.indexOf("y")!==-1;return function(s,i){const o=t?Math.abs(s.x-i.x):0,r=e?Math.abs(s.y-i.y):0;return Math.sqrt(Math.pow(o,2)+Math.pow(r,2))}}function Aa(a,t,e,s,i){const o=[];return!i&&!a.isPointInArea(t)||la(a,e,t,function(c,h,d){!i&&!xt(c,a.chartArea,0)||c.inRange(t.x,t.y,s)&&o.push({element:c,datasetIndex:h,index:d})},!0),o}function Pk(a,t,e,s){let i=[];function o(r,c,h){const{startAngle:d,endAngle:l}=r.getProps(["startAngle","endAngle"],s),{angle:p}=yo(r,{x:t.x,y:t.y});xe(p,d,l)&&i.push({element:r,datasetIndex:c,index:h})}return la(a,e,t,o),i}function Vk(a,t,e,s,i,o){let r=[];const c=Tk(e);let h=Number.POSITIVE_INFINITY;function d(l,p,g){const u=l.inRange(t.x,t.y,i);if(s&&!u)return;const f=l.getCenterPoint(i);if(!(!!o||a.isPointInArea(f))&&!u)return;const m=c(t,f);m<h?(r=[{element:l,datasetIndex:p,index:g}],h=m):m===h&&r.push({element:l,datasetIndex:p,index:g})}return la(a,e,t,d),r}function ka(a,t,e,s,i,o){return!o&&!a.isPointInArea(t)?[]:e==="r"&&!s?Pk(a,t,e,i):Vk(a,t,e,s,i,o)}function x2(a,t,e,s,i){const o=[],r=e==="x"?"inXRange":"inYRange";let c=!1;return la(a,e,t,(h,d,l)=>{h[r]&&h[r](t[e],i)&&(o.push({element:h,datasetIndex:d,index:l}),c=c||h.inRange(t.x,t.y,i))}),s&&!c?[]:o}var Dk={modes:{index(a,t,e,s){const i=Rt(t,a),o=e.axis||"x",r=e.includeInvisible||!1,c=e.intersect?Aa(a,i,o,s,r):ka(a,i,o,!1,s,r),h=[];return c.length?(a.getSortedVisibleDatasetMetas().forEach(d=>{const l=c[0].index,p=d.data[l];p&&!p.skip&&h.push({element:p,datasetIndex:d.index,index:l})}),h):[]},dataset(a,t,e,s){const i=Rt(t,a),o=e.axis||"xy",r=e.includeInvisible||!1;let c=e.intersect?Aa(a,i,o,s,r):ka(a,i,o,!1,s,r);if(c.length>0){const h=c[0].datasetIndex,d=a.getDatasetMeta(h).data;c=[];for(let l=0;l<d.length;++l)c.push({element:d[l],datasetIndex:h,index:l})}return c},point(a,t,e,s){const i=Rt(t,a),o=e.axis||"xy",r=e.includeInvisible||!1;return Aa(a,i,o,s,r)},nearest(a,t,e,s){const i=Rt(t,a),o=e.axis||"xy",r=e.includeInvisible||!1;return ka(a,i,o,e.intersect,s,r)},x(a,t,e,s){const i=Rt(t,a);return x2(a,i,"x",e.intersect,s)},y(a,t,e,s){const i=Rt(t,a);return x2(a,i,"y",e.intersect,s)}}};const Uo=["left","top","right","bottom"];function ae(a,t){return a.filter(e=>e.pos===t)}function b2(a,t){return a.filter(e=>Uo.indexOf(e.pos)===-1&&e.box.axis===t)}function se(a,t){return a.sort((e,s)=>{const i=t?s:e,o=t?e:s;return i.weight===o.weight?i.index-o.index:i.weight-o.weight})}function Ek(a){const t=[];let e,s,i,o,r,c;for(e=0,s=(a||[]).length;e<s;++e)i=a[e],{position:o,options:{stack:r,stackWeight:c=1}}=i,t.push({index:e,box:i,pos:o,horizontal:i.isHorizontal(),weight:i.weight,stack:r&&o+r,stackWeight:c});return t}function Ik(a){const t={};for(const e of a){const{stack:s,pos:i,stackWeight:o}=e;if(!s||!Uo.includes(i))continue;const r=t[s]||(t[s]={count:0,placed:0,weight:0,size:0});r.count++,r.weight+=o}return t}function Ok(a,t){const e=Ik(a),{vBoxMaxWidth:s,hBoxMaxHeight:i}=t;let o,r,c;for(o=0,r=a.length;o<r;++o){c=a[o];const{fullSize:h}=c.box,d=e[c.stack],l=d&&c.stackWeight/d.weight;c.horizontal?(c.width=l?l*s:h&&t.availableWidth,c.height=i):(c.width=s,c.height=l?l*i:h&&t.availableHeight)}return e}function Rk(a){const t=Ek(a),e=se(t.filter(d=>d.box.fullSize),!0),s=se(ae(t,"left"),!0),i=se(ae(t,"right")),o=se(ae(t,"top"),!0),r=se(ae(t,"bottom")),c=b2(t,"x"),h=b2(t,"y");return{fullSize:e,leftAndTop:s.concat(o),rightAndBottom:i.concat(h).concat(r).concat(c),chartArea:ae(t,"chartArea"),vertical:s.concat(i).concat(h),horizontal:o.concat(r).concat(c)}}function w2(a,t,e,s){return Math.max(a[e],t[e])+Math.max(a[s],t[s])}function Zo(a,t){a.top=Math.max(a.top,t.top),a.left=Math.max(a.left,t.left),a.bottom=Math.max(a.bottom,t.bottom),a.right=Math.max(a.right,t.right)}function Bk(a,t,e,s){const{pos:i,box:o}=e,r=a.maxPadding;if(!V(i)){e.size&&(a[i]-=e.size);const p=s[e.stack]||{size:0,count:1};p.size=Math.max(p.size,e.horizontal?o.height:o.width),e.size=p.size/p.count,a[i]+=e.size}o.getPadding&&Zo(r,o.getPadding());const c=Math.max(0,t.outerWidth-w2(r,a,"left","right")),h=Math.max(0,t.outerHeight-w2(r,a,"top","bottom")),d=c!==a.w,l=h!==a.h;return a.w=c,a.h=h,e.horizontal?{same:d,other:l}:{same:l,other:d}}function Fk(a){const t=a.maxPadding;function e(s){const i=Math.max(t[s]-a[s],0);return a[s]+=i,i}a.y+=e("top"),a.x+=e("left"),e("right"),e("bottom")}function zk(a,t){const e=t.maxPadding;function s(i){const o={left:0,top:0,right:0,bottom:0};return i.forEach(r=>{o[r]=Math.max(t[r],e[r])}),o}return s(a?["left","right"]:["top","bottom"])}function ce(a,t,e,s){const i=[];let o,r,c,h,d,l;for(o=0,r=a.length,d=0;o<r;++o){c=a[o],h=c.box,h.update(c.width||t.w,c.height||t.h,zk(c.horizontal,t));const{same:p,other:g}=Bk(t,e,c,s);d|=p&&i.length,l=l||g,h.fullSize||i.push(c)}return d&&ce(i,t,e,s)||l}function Ie(a,t,e,s,i){a.top=e,a.left=t,a.right=t+s,a.bottom=e+i,a.width=s,a.height=i}function S2(a,t,e,s){const i=e.padding;let{x:o,y:r}=t;for(const c of a){const h=c.box,d=s[c.stack]||{placed:0,weight:1},l=c.stackWeight/d.weight||1;if(c.horizontal){const p=t.w*l,g=d.size||h.height;ye(d.start)&&(r=d.start),h.fullSize?Ie(h,i.left,r,e.outerWidth-i.right-i.left,g):Ie(h,t.left+d.placed,r,p,g),d.start=r,d.placed+=p,r=h.bottom}else{const p=t.h*l,g=d.size||h.width;ye(d.start)&&(o=d.start),h.fullSize?Ie(h,o,i.top,g,e.outerHeight-i.bottom-i.top):Ie(h,o,t.top+d.placed,g,p),d.start=o,d.placed+=p,o=h.right}}t.x=o,t.y=r}var Q={addBox(a,t){a.boxes||(a.boxes=[]),t.fullSize=t.fullSize||!1,t.position=t.position||"top",t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},a.boxes.push(t)},removeBox(a,t){const e=a.boxes?a.boxes.indexOf(t):-1;e!==-1&&a.boxes.splice(e,1)},configure(a,t,e){t.fullSize=e.fullSize,t.position=e.position,t.weight=e.weight},update(a,t,e,s){if(!a)return;const i=J(a.options.layout.padding),o=Math.max(t-i.width,0),r=Math.max(e-i.height,0),c=Rk(a.boxes),h=c.vertical,d=c.horizontal;I(a.boxes,v=>{typeof v.beforeLayout=="function"&&v.beforeLayout()});const l=h.reduce((v,m)=>m.box.options&&m.box.options.display===!1?v:v+1,0)||1,p=Object.freeze({outerWidth:t,outerHeight:e,padding:i,availableWidth:o,availableHeight:r,vBoxMaxWidth:o/2/l,hBoxMaxHeight:r/2}),g=Object.assign({},i);Zo(g,J(s));const u=Object.assign({maxPadding:g,w:o,h:r,x:i.left,y:i.top},i),f=Ok(h.concat(d),p);ce(c.fullSize,u,p,f),ce(h,u,p,f),ce(d,u,p,f)&&ce(h,u,p,f),Fk(u),S2(c.leftAndTop,u,p,f),u.x+=u.w,u.y+=u.h,S2(c.rightAndBottom,u,p,f),a.chartArea={left:u.left,top:u.top,right:u.left+u.w,bottom:u.top+u.h,height:u.h,width:u.w},I(c.chartArea,v=>{const m=v.box;Object.assign(m,a.chartArea),m.update(u.w,u.h,{left:0,top:0,right:0,bottom:0})})}};class jo{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,s){}removeEventListener(t,e,s){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,s,i){return e=Math.max(0,e||t.width),s=s||t.height,{width:e,height:Math.max(0,i?Math.floor(e/i):s)}}isAttached(t){return!0}updateConfig(t){}}class Nk extends jo{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}const Ye="$chartjs",Wk={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},C2=a=>a===null||a==="";function $k(a,t){const e=a.style,s=a.getAttribute("height"),i=a.getAttribute("width");if(a[Ye]={initial:{height:s,width:i,style:{display:e.display,height:e.height,width:e.width}}},e.display=e.display||"block",e.boxSizing=e.boxSizing||"border-box",C2(i)){const o=r2(a,"width");o!==void 0&&(a.width=o)}if(C2(s))if(a.style.height==="")a.height=a.width/(t||2);else{const o=r2(a,"height");o!==void 0&&(a.height=o)}return a}const qo=UA?{passive:!0}:!1;function Uk(a,t,e){a&&a.addEventListener(t,e,qo)}function Zk(a,t,e){a&&a.canvas&&a.canvas.removeEventListener(t,e,qo)}function jk(a,t){const e=Wk[a.type]||a.type,{x:s,y:i}=Rt(a,t);return{type:e,chart:t,native:a,x:s!==void 0?s:null,y:i!==void 0?i:null}}function ia(a,t){for(const e of a)if(e===t||e.contains(t))return!0}function qk(a,t,e){const s=a.canvas,i=new MutationObserver(o=>{let r=!1;for(const c of o)r=r||ia(c.addedNodes,s),r=r&&!ia(c.removedNodes,s);r&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}function Gk(a,t,e){const s=a.canvas,i=new MutationObserver(o=>{let r=!1;for(const c of o)r=r||ia(c.removedNodes,s),r=r&&!ia(c.addedNodes,s);r&&e()});return i.observe(document,{childList:!0,subtree:!0}),i}const we=new Map;let A2=0;function Go(){const a=window.devicePixelRatio;a!==A2&&(A2=a,we.forEach((t,e)=>{e.currentDevicePixelRatio!==a&&t()}))}function Yk(a,t){we.size||window.addEventListener("resize",Go),we.set(a,t)}function Xk(a){we.delete(a),we.size||window.removeEventListener("resize",Go)}function Kk(a,t,e){const s=a.canvas,i=s&&r1(s);if(!i)return;const o=So((c,h)=>{const d=i.clientWidth;e(c,h),d<i.clientWidth&&e()},window),r=new ResizeObserver(c=>{const h=c[0],d=h.contentRect.width,l=h.contentRect.height;d===0&&l===0||o(d,l)});return r.observe(i),Yk(a,o),r}function Ha(a,t,e){e&&e.disconnect(),t==="resize"&&Xk(a)}function Qk(a,t,e){const s=a.canvas,i=So(o=>{a.ctx!==null&&e(jk(o,a))},a);return Uk(s,t,i),i}class Jk extends jo{acquireContext(t,e){const s=t&&t.getContext&&t.getContext("2d");return s&&s.canvas===t?($k(t,e),s):null}releaseContext(t){const e=t.canvas;if(!e[Ye])return!1;const s=e[Ye].initial;["height","width"].forEach(o=>{const r=s[o];P(r)?e.removeAttribute(o):e.setAttribute(o,r)});const i=s.style||{};return Object.keys(i).forEach(o=>{e.style[o]=i[o]}),e.width=e.width,delete e[Ye],!0}addEventListener(t,e,s){this.removeEventListener(t,e);const i=t.$proxies||(t.$proxies={}),r={attach:qk,detach:Gk,resize:Kk}[e]||Qk;i[e]=r(t,e,s)}removeEventListener(t,e){const s=t.$proxies||(t.$proxies={}),i=s[e];if(!i)return;({attach:Ha,detach:Ha,resize:Ha}[e]||Zk)(t,e,i),s[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,s,i){return $A(t,e,s,i)}isAttached(t){const e=t&&r1(t);return!!(e&&e.isConnected)}}function tH(a){return!o1()||typeof OffscreenCanvas<"u"&&a instanceof OffscreenCanvas?Nk:Jk}class ht{constructor(){S(this,"x");S(this,"y");S(this,"active",!1);S(this,"options");S(this,"$animations")}tooltipPosition(t){const{x:e,y:s}=this.getProps(["x","y"],t);return{x:e,y:s}}hasValue(){return Xt(this.x)&&Xt(this.y)}getProps(t,e){const s=this.$animations;if(!e||!s)return this;const i={};return t.forEach(o=>{i[o]=s[o]&&s[o].active()?s[o]._to:this[o]}),i}}S(ht,"defaults",{}),S(ht,"defaultRoutes");function eH(a,t){const e=a.options.ticks,s=aH(a),i=Math.min(e.maxTicksLimit||s,s),o=e.major.enabled?iH(t):[],r=o.length,c=o[0],h=o[r-1],d=[];if(r>i)return nH(t,d,o,r/i),d;const l=sH(o,t,i);if(r>0){let p,g;const u=r>1?Math.round((h-c)/(r-1)):null;for(Oe(t,d,l,P(u)?0:c-u,c),p=0,g=r-1;p<g;p++)Oe(t,d,l,o[p],o[p+1]);return Oe(t,d,l,h,P(u)?t.length:h+u),d}return Oe(t,d,l),d}function aH(a){const t=a.options.offset,e=a._tickSize(),s=a._length/e+(t?0:1),i=a._maxLength/e;return Math.floor(Math.min(s,i))}function sH(a,t,e){const s=oH(a),i=t.length/e;if(!s)return Math.max(i,1);const o=jC(s);for(let r=0,c=o.length-1;r<c;r++){const h=o[r];if(h>i)return h}return Math.max(i,1)}function iH(a){const t=[];let e,s;for(e=0,s=a.length;e<s;e++)a[e].major&&t.push(e);return t}function nH(a,t,e,s){let i=0,o=e[0],r;for(s=Math.ceil(s),r=0;r<a.length;r++)r===o&&(t.push(a[r]),i++,o=e[i*s])}function Oe(a,t,e,s,i){const o=L(s,0),r=Math.min(L(i,a.length),a.length);let c=0,h,d,l;for(e=Math.ceil(e),i&&(h=i-s,e=h/Math.floor(h/e)),l=o;l<0;)c++,l=Math.round(o+c*e);for(d=Math.max(o,0);d<r;d++)d===l&&(t.push(a[d]),c++,l=Math.round(o+c*e))}function oH(a){const t=a.length;let e,s;if(t<2)return!1;for(s=a[0],e=1;e<t;++e)if(a[e]-a[e-1]!==s)return!1;return s}const rH=a=>a==="left"?"right":a==="right"?"left":a,k2=(a,t,e)=>t==="top"||t==="left"?a[t]+e:a[t]-e,H2=(a,t)=>Math.min(t||a,a);function L2(a,t){const e=[],s=a.length/t,i=a.length;let o=0;for(;o<i;o+=s)e.push(a[Math.floor(o)]);return e}function cH(a,t,e){const s=a.ticks.length,i=Math.min(t,s-1),o=a._startPixel,r=a._endPixel,c=1e-6;let h=a.getPixelForTick(i),d;if(!(e&&(s===1?d=Math.max(h-o,r-h):t===0?d=(a.getPixelForTick(1)-h)/2:d=(h-a.getPixelForTick(i-1))/2,h+=i<t?d:-d,h<o-c||h>r+c)))return h}function hH(a,t){I(a,e=>{const s=e.gc,i=s.length/2;let o;if(i>t){for(o=0;o<i;++o)delete e.data[s[o]];s.splice(0,i)}})}function ie(a){return a.drawTicks?a.tickLength:0}function _2(a,t){if(!a.display)return 0;const e=j(a.font,t),s=J(a.padding);return(z(a.text)?a.text.length:1)*e.lineHeight+s.height}function dH(a,t){return Tt(a,{scale:t,type:"scale"})}function lH(a,t,e){return Tt(a,{tick:e,index:t,type:"tick"})}function pH(a,t,e){let s=t1(a);return(e&&t!=="right"||!e&&t==="right")&&(s=rH(s)),s}function gH(a,t,e,s){const{top:i,left:o,bottom:r,right:c,chart:h}=a,{chartArea:d,scales:l}=h;let p=0,g,u,f;const v=r-i,m=c-o;if(a.isHorizontal()){if(u=X(s,o,c),V(e)){const M=Object.keys(e)[0],y=e[M];f=l[M].getPixelForValue(y)+v-t}else e==="center"?f=(d.bottom+d.top)/2+v-t:f=k2(a,e,t);g=c-o}else{if(V(e)){const M=Object.keys(e)[0],y=e[M];u=l[M].getPixelForValue(y)-m+t}else e==="center"?u=(d.left+d.right)/2-m+t:u=k2(a,e,t);f=X(s,r,i),p=e==="left"?-U:U}return{titleX:u,titleY:f,maxWidth:g,rotation:p}}class Ut extends ht{constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:s,_suggestedMax:i}=this;return t=it(t,Number.POSITIVE_INFINITY),e=it(e,Number.NEGATIVE_INFINITY),s=it(s,Number.POSITIVE_INFINITY),i=it(i,Number.NEGATIVE_INFINITY),{min:it(t,s),max:it(e,i),minDefined:W(t),maxDefined:W(e)}}getMinMax(t){let{min:e,max:s,minDefined:i,maxDefined:o}=this.getUserBounds(),r;if(i&&o)return{min:e,max:s};const c=this.getMatchingVisibleMetas();for(let h=0,d=c.length;h<d;++h)r=c[h].controller.getMinMax(this,t),i||(e=Math.min(e,r.min)),o||(s=Math.max(s,r.max));return e=o&&e>s?s:e,s=i&&e>s?e:s,{min:it(e,it(s,e)),max:it(s,it(e,s))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){const t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}getLabelItems(t=this.chart.chartArea){return this._labelItems||(this._labelItems=this._computeLabelItems(t))}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){R(this.options.beforeUpdate,[this])}update(t,e,s){const{beginAtZero:i,grace:o,ticks:r}=this.options,c=r.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=s=Object.assign({left:0,right:0,top:0,bottom:0},s),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+s.left+s.right:this.height+s.top+s.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=bA(this,o,i),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();const h=c<this.ticks.length;this._convertTicksToLabels(h?L2(this.ticks,c):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),r.display&&(r.autoSkip||r.source==="auto")&&(this.ticks=eH(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),h&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t=this.options.reverse,e,s;this.isHorizontal()?(e=this.left,s=this.right):(e=this.top,s=this.bottom,t=!t),this._startPixel=e,this._endPixel=s,this._reversePixels=t,this._length=s-e,this._alignToPixels=this.options.alignToPixels}afterUpdate(){R(this.options.afterUpdate,[this])}beforeSetDimensions(){R(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){R(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),R(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){R(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){const e=this.options.ticks;let s,i,o;for(s=0,i=t.length;s<i;s++)o=t[s],o.label=R(e.callback,[o.value,s,t],this)}afterTickToLabelConversion(){R(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){R(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){const t=this.options,e=t.ticks,s=H2(this.ticks.length,t.ticks.maxTicksLimit),i=e.minRotation||0,o=e.maxRotation;let r=i,c,h,d;if(!this._isVisible()||!e.display||i>=o||s<=1||!this.isHorizontal()){this.labelRotation=i;return}const l=this._getLabelSizes(),p=l.widest.width,g=l.highest.height,u=q(this.chart.width-p,0,this.maxWidth);c=t.offset?this.maxWidth/s:u/(s-1),p+6>c&&(c=u/(s-(t.offset?.5:1)),h=this.maxHeight-ie(t.grid)-e.padding-_2(t.title,this.chart.options.font),d=Math.sqrt(p*p+g*g),r=Qa(Math.min(Math.asin(q((l.highest.height+6)/c,-1,1)),Math.asin(q(h/d,-1,1))-Math.asin(q(g/d,-1,1)))),r=Math.max(i,Math.min(o,r))),this.labelRotation=r}afterCalculateLabelRotation(){R(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){R(this.options.beforeFit,[this])}fit(){const t={width:0,height:0},{chart:e,options:{ticks:s,title:i,grid:o}}=this,r=this._isVisible(),c=this.isHorizontal();if(r){const h=_2(i,e.options.font);if(c?(t.width=this.maxWidth,t.height=ie(o)+h):(t.height=this.maxHeight,t.width=ie(o)+h),s.display&&this.ticks.length){const{first:d,last:l,widest:p,highest:g}=this._getLabelSizes(),u=s.padding*2,f=rt(this.labelRotation),v=Math.cos(f),m=Math.sin(f);if(c){const M=s.mirror?0:m*p.width+v*g.height;t.height=Math.min(this.maxHeight,t.height+M+u)}else{const M=s.mirror?0:v*p.width+m*g.height;t.width=Math.min(this.maxWidth,t.width+M+u)}this._calculatePadding(d,l,m,v)}}this._handleMargins(),c?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,s,i){const{ticks:{align:o,padding:r},position:c}=this.options,h=this.labelRotation!==0,d=c!=="top"&&this.axis==="x";if(this.isHorizontal()){const l=this.getPixelForTick(0)-this.left,p=this.right-this.getPixelForTick(this.ticks.length-1);let g=0,u=0;h?d?(g=i*t.width,u=s*e.height):(g=s*t.height,u=i*e.width):o==="start"?u=e.width:o==="end"?g=t.width:o!=="inner"&&(g=t.width/2,u=e.width/2),this.paddingLeft=Math.max((g-l+r)*this.width/(this.width-l),0),this.paddingRight=Math.max((u-p+r)*this.width/(this.width-p),0)}else{let l=e.height/2,p=t.height/2;o==="start"?(l=0,p=t.height):o==="end"&&(l=e.height,p=0),this.paddingTop=l+r,this.paddingBottom=p+r}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){R(this.options.afterFit,[this])}isHorizontal(){const{axis:t,position:e}=this.options;return e==="top"||e==="bottom"||t==="x"}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){this.beforeTickToLabelConversion(),this.generateTickLabels(t);let e,s;for(e=0,s=t.length;e<s;e++)P(t[e].label)&&(t.splice(e,1),s--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){const e=this.options.ticks.sampleSize;let s=this.ticks;e<s.length&&(s=L2(s,e)),this._labelSizes=t=this._computeLabelSizes(s,s.length,this.options.ticks.maxTicksLimit)}return t}_computeLabelSizes(t,e,s){const{ctx:i,_longestTextCache:o}=this,r=[],c=[],h=Math.floor(e/H2(e,s));let d=0,l=0,p,g,u,f,v,m,M,y,w,b,x;for(p=0;p<e;p+=h){if(f=t[p].label,v=this._resolveTickFontOptions(p),i.font=m=v.string,M=o[m]=o[m]||{data:{},gc:[]},y=v.lineHeight,w=b=0,!P(f)&&!z(f))w=aa(i,M.data,M.gc,w,f),b=y;else if(z(f))for(g=0,u=f.length;g<u;++g)x=f[g],!P(x)&&!z(x)&&(w=aa(i,M.data,M.gc,w,x),b+=y);r.push(w),c.push(b),d=Math.max(w,d),l=Math.max(b,l)}hH(o,e);const C=r.indexOf(d),A=c.indexOf(l),k=H=>({width:r[H]||0,height:c[H]||0});return{first:k(0),last:k(e-1),widest:k(C),highest:k(A),widths:r,heights:c}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);const e=this._startPixel+t*this._length;return XC(this._alignToPixels?Et(this.chart,e,0):e)}getDecimalForPixel(t){const e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){const{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){const e=this.ticks||[];if(t>=0&&t<e.length){const s=e[t];return s.$context||(s.$context=lH(this.getContext(),t,s))}return this.$context||(this.$context=dH(this.chart.getContext(),this))}_tickSize(){const t=this.options.ticks,e=rt(this.labelRotation),s=Math.abs(Math.cos(e)),i=Math.abs(Math.sin(e)),o=this._getLabelSizes(),r=t.autoSkipPadding||0,c=o?o.widest.width+r:0,h=o?o.highest.height+r:0;return this.isHorizontal()?h*s>c*i?c/s:h/i:h*i<c*s?h/s:c/i}_isVisible(){const t=this.options.display;return t!=="auto"?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){const e=this.axis,s=this.chart,i=this.options,{grid:o,position:r,border:c}=i,h=o.offset,d=this.isHorizontal(),p=this.ticks.length+(h?1:0),g=ie(o),u=[],f=c.setContext(this.getContext()),v=f.display?f.width:0,m=v/2,M=function(F){return Et(s,F,v)};let y,w,b,x,C,A,k,H,_,T,D,G;if(r==="top")y=M(this.bottom),A=this.bottom-g,H=y-m,T=M(t.top)+m,G=t.bottom;else if(r==="bottom")y=M(this.top),T=t.top,G=M(t.bottom)-m,A=y+m,H=this.top+g;else if(r==="left")y=M(this.right),C=this.right-g,k=y-m,_=M(t.left)+m,D=t.right;else if(r==="right")y=M(this.left),_=t.left,D=M(t.right)-m,C=y+m,k=this.left+g;else if(e==="x"){if(r==="center")y=M((t.top+t.bottom)/2+.5);else if(V(r)){const F=Object.keys(r)[0],$=r[F];y=M(this.chart.scales[F].getPixelForValue($))}T=t.top,G=t.bottom,A=y+m,H=A+g}else if(e==="y"){if(r==="center")y=M((t.left+t.right)/2);else if(V(r)){const F=Object.keys(r)[0],$=r[F];y=M(this.chart.scales[F].getPixelForValue($))}C=y-m,k=C-g,_=t.left,D=t.right}const st=L(i.ticks.maxTicksLimit,p),O=Math.max(1,Math.ceil(p/st));for(w=0;w<p;w+=O){const F=this.getContext(w),$=o.setContext(F),ot=c.setContext(F),Y=$.lineWidth,Zt=$.color,He=ot.dash||[],jt=ot.dashOffset,Jt=$.tickWidth,Pt=$.tickColor,te=$.tickBorderDash||[],Vt=$.tickBorderDashOffset;b=cH(this,w,h),b!==void 0&&(x=Et(s,b,Y),d?C=k=_=D=x:A=H=T=G=x,u.push({tx1:C,ty1:A,tx2:k,ty2:H,x1:_,y1:T,x2:D,y2:G,width:Y,color:Zt,borderDash:He,borderDashOffset:jt,tickWidth:Jt,tickColor:Pt,tickBorderDash:te,tickBorderDashOffset:Vt}))}return this._ticksLength=p,this._borderValue=y,u}_computeLabelItems(t){const e=this.axis,s=this.options,{position:i,ticks:o}=s,r=this.isHorizontal(),c=this.ticks,{align:h,crossAlign:d,padding:l,mirror:p}=o,g=ie(s.grid),u=g+l,f=p?-l:u,v=-rt(this.labelRotation),m=[];let M,y,w,b,x,C,A,k,H,_,T,D,G="middle";if(i==="top")C=this.bottom-f,A=this._getXAxisLabelAlignment();else if(i==="bottom")C=this.top+f,A=this._getXAxisLabelAlignment();else if(i==="left"){const O=this._getYAxisLabelAlignment(g);A=O.textAlign,x=O.x}else if(i==="right"){const O=this._getYAxisLabelAlignment(g);A=O.textAlign,x=O.x}else if(e==="x"){if(i==="center")C=(t.top+t.bottom)/2+u;else if(V(i)){const O=Object.keys(i)[0],F=i[O];C=this.chart.scales[O].getPixelForValue(F)+u}A=this._getXAxisLabelAlignment()}else if(e==="y"){if(i==="center")x=(t.left+t.right)/2-u;else if(V(i)){const O=Object.keys(i)[0],F=i[O];x=this.chart.scales[O].getPixelForValue(F)}A=this._getYAxisLabelAlignment(g).textAlign}e==="y"&&(h==="start"?G="top":h==="end"&&(G="bottom"));const st=this._getLabelSizes();for(M=0,y=c.length;M<y;++M){w=c[M],b=w.label;const O=o.setContext(this.getContext(M));k=this.getPixelForTick(M)+o.labelOffset,H=this._resolveTickFontOptions(M),_=H.lineHeight,T=z(b)?b.length:1;const F=T/2,$=O.color,ot=O.textStrokeColor,Y=O.textStrokeWidth;let Zt=A;r?(x=k,A==="inner"&&(M===y-1?Zt=this.options.reverse?"left":"right":M===0?Zt=this.options.reverse?"right":"left":Zt="center"),i==="top"?d==="near"||v!==0?D=-T*_+_/2:d==="center"?D=-st.highest.height/2-F*_+_:D=-st.highest.height+_/2:d==="near"||v!==0?D=_/2:d==="center"?D=st.highest.height/2-F*_:D=st.highest.height-T*_,p&&(D*=-1),v!==0&&!O.showLabelBackdrop&&(x+=_/2*Math.sin(v))):(C=k,D=(1-T)*_/2);let He;if(O.showLabelBackdrop){const jt=J(O.backdropPadding),Jt=st.heights[M],Pt=st.widths[M];let te=D-jt.top,Vt=0-jt.left;switch(G){case"middle":te-=Jt/2;break;case"bottom":te-=Jt;break}switch(A){case"center":Vt-=Pt/2;break;case"right":Vt-=Pt;break;case"inner":M===y-1?Vt-=Pt:M>0&&(Vt-=Pt/2);break}He={left:Vt,top:te,width:Pt+jt.width,height:Jt+jt.height,color:O.backdropColor}}m.push({label:b,font:H,textOffset:D,options:{rotation:v,color:$,strokeColor:ot,strokeWidth:Y,textAlign:Zt,textBaseline:G,translation:[x,C],backdrop:He}})}return m}_getXAxisLabelAlignment(){const{position:t,ticks:e}=this.options;if(-rt(this.labelRotation))return t==="top"?"left":"right";let i="center";return e.align==="start"?i="left":e.align==="end"?i="right":e.align==="inner"&&(i="inner"),i}_getYAxisLabelAlignment(t){const{position:e,ticks:{crossAlign:s,mirror:i,padding:o}}=this.options,r=this._getLabelSizes(),c=t+o,h=r.widest.width;let d,l;return e==="left"?i?(l=this.right+o,s==="near"?d="left":s==="center"?(d="center",l+=h/2):(d="right",l+=h)):(l=this.right-c,s==="near"?d="right":s==="center"?(d="center",l-=h/2):(d="left",l=this.left)):e==="right"?i?(l=this.left+o,s==="near"?d="right":s==="center"?(d="center",l-=h/2):(d="left",l-=h)):(l=this.left+c,s==="near"?d="left":s==="center"?(d="center",l+=h/2):(d="right",l=this.right)):d="right",{textAlign:d,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;const t=this.chart,e=this.options.position;if(e==="left"||e==="right")return{top:0,left:this.left,bottom:t.height,right:this.right};if(e==="top"||e==="bottom")return{top:this.top,left:0,bottom:this.bottom,right:t.width}}drawBackground(){const{ctx:t,options:{backgroundColor:e},left:s,top:i,width:o,height:r}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(s,i,o,r),t.restore())}getLineWidthForValue(t){const e=this.options.grid;if(!this._isVisible()||!e.display)return 0;const i=this.ticks.findIndex(o=>o.value===t);return i>=0?e.setContext(this.getContext(i)).lineWidth:0}drawGrid(t){const e=this.options.grid,s=this.ctx,i=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t));let o,r;const c=(h,d,l)=>{!l.width||!l.color||(s.save(),s.lineWidth=l.width,s.strokeStyle=l.color,s.setLineDash(l.borderDash||[]),s.lineDashOffset=l.borderDashOffset,s.beginPath(),s.moveTo(h.x,h.y),s.lineTo(d.x,d.y),s.stroke(),s.restore())};if(e.display)for(o=0,r=i.length;o<r;++o){const h=i[o];e.drawOnChartArea&&c({x:h.x1,y:h.y1},{x:h.x2,y:h.y2},h),e.drawTicks&&c({x:h.tx1,y:h.ty1},{x:h.tx2,y:h.ty2},{color:h.tickColor,width:h.tickWidth,borderDash:h.tickBorderDash,borderDashOffset:h.tickBorderDashOffset})}}drawBorder(){const{chart:t,ctx:e,options:{border:s,grid:i}}=this,o=s.setContext(this.getContext()),r=s.display?o.width:0;if(!r)return;const c=i.setContext(this.getContext(0)).lineWidth,h=this._borderValue;let d,l,p,g;this.isHorizontal()?(d=Et(t,this.left,r)-r/2,l=Et(t,this.right,c)+c/2,p=g=h):(p=Et(t,this.top,r)-r/2,g=Et(t,this.bottom,c)+c/2,d=l=h),e.save(),e.lineWidth=o.width,e.strokeStyle=o.color,e.beginPath(),e.moveTo(d,p),e.lineTo(l,g),e.stroke(),e.restore()}drawLabels(t){if(!this.options.ticks.display)return;const s=this.ctx,i=this._computeLabelArea();i&&ca(s,i);const o=this.getLabelItems(t);for(const r of o){const c=r.options,h=r.font,d=r.label,l=r.textOffset;$t(s,d,0,l,h,c)}i&&ha(s)}drawTitle(){const{ctx:t,options:{position:e,title:s,reverse:i}}=this;if(!s.display)return;const o=j(s.font),r=J(s.padding),c=s.align;let h=o.lineHeight/2;e==="bottom"||e==="center"||V(e)?(h+=r.bottom,z(s.text)&&(h+=o.lineHeight*(s.text.length-1))):h+=r.top;const{titleX:d,titleY:l,maxWidth:p,rotation:g}=gH(this,h,e,c);$t(t,s.text,0,0,o,{color:s.color,maxWidth:p,rotation:g,textAlign:pH(c,e,i),textBaseline:"middle",translation:[d,l]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){const t=this.options,e=t.ticks&&t.ticks.z||0,s=L(t.grid&&t.grid.z,-1),i=L(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==Ut.prototype.draw?[{z:e,draw:o=>{this.draw(o)}}]:[{z:s,draw:o=>{this.drawBackground(),this.drawGrid(o),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:e,draw:o=>{this.drawLabels(o)}}]}getMatchingVisibleMetas(t){const e=this.chart.getSortedVisibleDatasetMetas(),s=this.axis+"AxisID",i=[];let o,r;for(o=0,r=e.length;o<r;++o){const c=e[o];c[s]===this.id&&(!t||c.type===t)&&i.push(c)}return i}_resolveTickFontOptions(t){const e=this.options.ticks.setContext(this.getContext(t));return j(e.font)}_maxDigits(){const t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class Re{constructor(t,e,s){this.type=t,this.scope=e,this.override=s,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){const e=Object.getPrototypeOf(t);let s;vH(e)&&(s=this.register(e));const i=this.items,o=t.id,r=this.scope+"."+o;if(!o)throw new Error("class does not have id: "+t);return o in i||(i[o]=t,uH(t,r,s),this.override&&N.override(t.id,t.overrides)),r}get(t){return this.items[t]}unregister(t){const e=this.items,s=t.id,i=this.scope;s in e&&delete e[s],i&&s in N[i]&&(delete N[i][s],this.override&&delete Wt[s])}}function uH(a,t,e){const s=Me(Object.create(null),[e?N.get(e):{},N.get(t),a.defaults]);N.set(t,s),a.defaultRoutes&&fH(t,a.defaultRoutes),a.descriptors&&N.describe(t,a.descriptors)}function fH(a,t){Object.keys(t).forEach(e=>{const s=e.split("."),i=s.pop(),o=[a].concat(s).join("."),r=t[e].split("."),c=r.pop(),h=r.join(".");N.route(o,i,h,c)})}function vH(a){return"id"in a&&"defaults"in a}class mH{constructor(){this.controllers=new Re(ct,"datasets",!0),this.elements=new Re(ht,"elements"),this.plugins=new Re(Object,"plugins"),this.scales=new Re(Ut,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,s){[...e].forEach(i=>{const o=s||this._getRegistryForType(i);s||o.isForType(i)||o===this.plugins&&i.id?this._exec(t,o,i):I(i,r=>{const c=s||this._getRegistryForType(r);this._exec(t,c,r)})})}_exec(t,e,s){const i=Ka(t);R(s["before"+i],[],s),e[t](s),R(s["after"+i],[],s)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){const s=this._typedRegistries[e];if(s.isForType(t))return s}return this.plugins}_get(t,e,s){const i=e.get(t);if(i===void 0)throw new Error('"'+t+'" is not a registered '+s+".");return i}}var lt=new mH;class MH{constructor(){this._init=void 0}notify(t,e,s,i){if(e==="beforeInit"&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install")),this._init===void 0)return;const o=i?this._descriptors(t).filter(i):this._descriptors(t),r=this._notify(o,t,e,s);return e==="afterDestroy"&&(this._notify(o,t,"stop"),this._notify(this._init,t,"uninstall"),this._init=void 0),r}_notify(t,e,s,i){i=i||{};for(const o of t){const r=o.plugin,c=r[s],h=[e,i,o.options];if(R(c,h,r)===!1&&i.cancelable)return!1}return!0}invalidate(){P(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;const e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){const s=t&&t.config,i=L(s.options&&s.options.plugins,{}),o=yH(s);return i===!1&&!e?[]:bH(t,o,i,e)}_notifyStateChanges(t){const e=this._oldCache||[],s=this._cache,i=(o,r)=>o.filter(c=>!r.some(h=>c.plugin.id===h.plugin.id));this._notify(i(e,s),t,"stop"),this._notify(i(s,e),t,"start")}}function yH(a){const t={},e=[],s=Object.keys(lt.plugins.items);for(let o=0;o<s.length;o++)e.push(lt.getPlugin(s[o]));const i=a.plugins||[];for(let o=0;o<i.length;o++){const r=i[o];e.indexOf(r)===-1&&(e.push(r),t[r.id]=!0)}return{plugins:e,localIds:t}}function xH(a,t){return!t&&a===!1?null:a===!0?{}:a}function bH(a,{plugins:t,localIds:e},s,i){const o=[],r=a.getContext();for(const c of t){const h=c.id,d=xH(s[h],i);d!==null&&o.push({plugin:c,options:wH(a.config,{plugin:c,local:e[h]},d,r)})}return o}function wH(a,{plugin:t,local:e},s,i){const o=a.pluginScopeKeys(t),r=a.getOptionScopes(s,o);return e&&t.defaults&&r.push(t.defaults),a.createResolver(r,i,[""],{scriptable:!1,indexable:!1,allKeys:!0})}function Ra(a,t){const e=N.datasets[a]||{};return((t.datasets||{})[a]||{}).indexAxis||t.indexAxis||e.indexAxis||"x"}function SH(a,t){let e=a;return a==="_index_"?e=t:a==="_value_"&&(e=t==="x"?"y":"x"),e}function CH(a,t){return a===t?"_index_":"_value_"}function T2(a){if(a==="x"||a==="y"||a==="r")return a}function AH(a){if(a==="top"||a==="bottom")return"x";if(a==="left"||a==="right")return"y"}function Ba(a,...t){if(T2(a))return a;for(const e of t){const s=e.axis||AH(e.position)||a.length>1&&T2(a[0].toLowerCase());if(s)return s}throw new Error(`Cannot determine type of '${a}' axis. Please provide 'axis' or 'position' option.`)}function P2(a,t,e){if(e[t+"AxisID"]===a)return{axis:t}}function kH(a,t){if(t.data&&t.data.datasets){const e=t.data.datasets.filter(s=>s.xAxisID===a||s.yAxisID===a);if(e.length)return P2(a,"x",e[0])||P2(a,"y",e[0])}return{}}function HH(a,t){const e=Wt[a.type]||{scales:{}},s=t.scales||{},i=Ra(a.type,t),o=Object.create(null);return Object.keys(s).forEach(r=>{const c=s[r];if(!V(c))return console.error(`Invalid scale configuration for scale: ${r}`);if(c._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${r}`);const h=Ba(r,c,kH(r,a),N.scales[c.type]),d=CH(h,i),l=e.scales||{};o[r]=pe(Object.create(null),[{axis:h},c,l[h],l[d]])}),a.data.datasets.forEach(r=>{const c=r.type||a.type,h=r.indexAxis||Ra(c,t),l=(Wt[c]||{}).scales||{};Object.keys(l).forEach(p=>{const g=SH(p,h),u=r[g+"AxisID"]||g;o[u]=o[u]||Object.create(null),pe(o[u],[{axis:g},s[u],l[p]])})}),Object.keys(o).forEach(r=>{const c=o[r];pe(c,[N.scales[c.type],N.scale])}),o}function Yo(a){const t=a.options||(a.options={});t.plugins=L(t.plugins,{}),t.scales=HH(a,t)}function Xo(a){return a=a||{},a.datasets=a.datasets||[],a.labels=a.labels||[],a}function LH(a){return a=a||{},a.data=Xo(a.data),Yo(a),a}const V2=new Map,Ko=new Set;function Be(a,t){let e=V2.get(a);return e||(e=t(),V2.set(a,e),Ko.add(e)),e}const ne=(a,t,e)=>{const s=Lt(t,e);s!==void 0&&a.add(s)};class _H{constructor(t){this._config=LH(t),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=Xo(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){const t=this._config;this.clearCache(),Yo(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return Be(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return Be(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return Be(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){const e=t.id,s=this.type;return Be(`${s}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){const s=this._scopeCache;let i=s.get(t);return(!i||e)&&(i=new Map,s.set(t,i)),i}getOptionScopes(t,e,s){const{options:i,type:o}=this,r=this._cachedScopes(t,s),c=r.get(e);if(c)return c;const h=new Set;e.forEach(l=>{t&&(h.add(t),l.forEach(p=>ne(h,t,p))),l.forEach(p=>ne(h,i,p)),l.forEach(p=>ne(h,Wt[o]||{},p)),l.forEach(p=>ne(h,N,p)),l.forEach(p=>ne(h,Ea,p))});const d=Array.from(h);return d.length===0&&d.push(Object.create(null)),Ko.has(e)&&r.set(e,d),d}chartOptionScopes(){const{options:t,type:e}=this;return[t,Wt[e]||{},N.datasets[e]||{},{type:e},N,Ea]}resolveNamedOptions(t,e,s,i=[""]){const o={$shared:!0},{resolver:r,subPrefixes:c}=D2(this._resolverCache,t,i);let h=r;if(PH(r,e)){o.$shared=!1,s=_t(s)?s():s;const d=this.createResolver(t,s,c);h=Kt(r,s,d)}for(const d of e)o[d]=h[d];return o}createResolver(t,e,s=[""],i){const{resolver:o}=D2(this._resolverCache,t,s);return V(e)?Kt(o,e,void 0,i):o}}function D2(a,t,e){let s=a.get(t);s||(s=new Map,a.set(t,s));const i=e.join();let o=s.get(i);return o||(o={resolver:s1(t,e),subPrefixes:e.filter(c=>!c.toLowerCase().includes("hover"))},s.set(i,o)),o}const TH=a=>V(a)&&Object.getOwnPropertyNames(a).some(t=>_t(a[t]));function PH(a,t){const{isScriptable:e,isIndexable:s}=_o(a);for(const i of t){const o=e(i),r=s(i),c=(r||o)&&a[i];if(o&&(_t(c)||TH(c))||r&&z(c))return!0}return!1}var VH="4.5.1";const DH=["top","bottom","left","right","chartArea"];function E2(a,t){return a==="top"||a==="bottom"||DH.indexOf(a)===-1&&t==="x"}function I2(a,t){return function(e,s){return e[a]===s[a]?e[t]-s[t]:e[a]-s[a]}}function O2(a){const t=a.chart,e=t.options.animation;t.notifyPlugins("afterRender"),R(e&&e.onComplete,[a],t)}function EH(a){const t=a.chart,e=t.options.animation;R(e&&e.onProgress,[a],t)}function Qo(a){return o1()&&typeof a=="string"?a=document.getElementById(a):a&&a.length&&(a=a[0]),a&&a.canvas&&(a=a.canvas),a}const Xe={},R2=a=>{const t=Qo(a);return Object.values(Xe).filter(e=>e.canvas===t).pop()};function IH(a,t,e){const s=Object.keys(a);for(const i of s){const o=+i;if(o>=t){const r=a[i];delete a[i],(e>0||o>t)&&(a[o+e]=r)}}}function OH(a,t,e,s){return!e||a.type==="mouseout"?null:s?t:a}class mt{static register(...t){lt.add(...t),B2()}static unregister(...t){lt.remove(...t),B2()}constructor(t,e){const s=this.config=new _H(e),i=Qo(t),o=R2(i);if(o)throw new Error("Canvas is already in use. Chart with ID '"+o.id+"' must be destroyed before the canvas with ID '"+o.canvas.id+"' can be reused.");const r=s.createResolver(s.chartOptionScopes(),this.getContext());this.platform=new(s.platform||tH(i)),this.platform.updateConfig(s);const c=this.platform.acquireContext(i,r.aspectRatio),h=c&&c.canvas,d=h&&h.height,l=h&&h.width;if(this.id=RC(),this.ctx=c,this.canvas=h,this.width=l,this.height=d,this._options=r,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new MH,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=tA(p=>this.update(p),r.resizeDelay||0),this._dataChanges=[],Xe[this.id]=this,!c||!h){console.error("Failed to create chart: can't acquire context from the given item");return}ut.listen(this,"complete",O2),ut.listen(this,"progress",EH),this._initialize(),this.attached&&this.update()}get aspectRatio(){const{options:{aspectRatio:t,maintainAspectRatio:e},width:s,height:i,_aspectRatio:o}=this;return P(t)?e&&o?o:i?s/i:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}get registry(){return lt}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():o2(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return s2(this.canvas,this.ctx),this}stop(){return ut.stop(this),this}resize(t,e){ut.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){const s=this.options,i=this.canvas,o=s.maintainAspectRatio&&this.aspectRatio,r=this.platform.getMaximumSize(i,t,e,o),c=s.devicePixelRatio||this.platform.getDevicePixelRatio(),h=this.width?"resize":"attach";this.width=r.width,this.height=r.height,this._aspectRatio=this.aspectRatio,o2(this,c,!0)&&(this.notifyPlugins("resize",{size:r}),R(s.onResize,[this,r],this),this.attached&&this._doResize(h)&&this.render())}ensureScalesHaveIDs(){const e=this.options.scales||{};I(e,(s,i)=>{s.id=i})}buildOrUpdateScales(){const t=this.options,e=t.scales,s=this.scales,i=Object.keys(s).reduce((r,c)=>(r[c]=!1,r),{});let o=[];e&&(o=o.concat(Object.keys(e).map(r=>{const c=e[r],h=Ba(r,c),d=h==="r",l=h==="x";return{options:c,dposition:d?"chartArea":l?"bottom":"left",dtype:d?"radialLinear":l?"category":"linear"}}))),I(o,r=>{const c=r.options,h=c.id,d=Ba(h,c),l=L(c.type,r.dtype);(c.position===void 0||E2(c.position,d)!==E2(r.dposition))&&(c.position=r.dposition),i[h]=!0;let p=null;if(h in s&&s[h].type===l)p=s[h];else{const g=lt.getScale(l);p=new g({id:h,type:l,ctx:this.ctx,chart:this}),s[p.id]=p}p.init(c,t)}),I(i,(r,c)=>{r||delete s[c]}),I(s,r=>{Q.configure(this,r,r.options),Q.addBox(this,r)})}_updateMetasets(){const t=this._metasets,e=this.data.datasets.length,s=t.length;if(t.sort((i,o)=>i.index-o.index),s>e){for(let i=e;i<s;++i)this._destroyDatasetMeta(i);t.splice(e,s-e)}this._sortedMetasets=t.slice(0).sort(I2("order","index"))}_removeUnreferencedMetasets(){const{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((s,i)=>{e.filter(o=>o===s._dataset).length===0&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){const t=[],e=this.data.datasets;let s,i;for(this._removeUnreferencedMetasets(),s=0,i=e.length;s<i;s++){const o=e[s];let r=this.getDatasetMeta(s);const c=o.type||this.config.type;if(r.type&&r.type!==c&&(this._destroyDatasetMeta(s),r=this.getDatasetMeta(s)),r.type=c,r.indexAxis=o.indexAxis||Ra(c,this.options),r.order=o.order||0,r.index=s,r.label=""+o.label,r.visible=this.isDatasetVisible(s),r.controller)r.controller.updateIndex(s),r.controller.linkScales();else{const h=lt.getController(c),{datasetElementType:d,dataElementType:l}=N.datasets[c];Object.assign(h,{dataElementType:lt.getElement(l),datasetElementType:d&&lt.getElement(d)}),r.controller=new h(this,s),t.push(r.controller)}}return this._updateMetasets(),t}_resetElements(){I(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){const e=this.config;e.update();const s=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),i=this._animationsDisabled=!s.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0})===!1)return;const o=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let r=0;for(let d=0,l=this.data.datasets.length;d<l;d++){const{controller:p}=this.getDatasetMeta(d),g=!i&&o.indexOf(p)===-1;p.buildOrUpdateElements(g),r=Math.max(+p.getMaxOverflow(),r)}r=this._minPadding=s.layout.autoPadding?r:0,this._updateLayout(r),i||I(o,d=>{d.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(I2("z","_idx"));const{_active:c,_lastEvent:h}=this;h?this._eventHandler(h,!0):c.length&&this._updateHoverStyles(c,c,!0),this.render()}_updateScales(){I(this.scales,t=>{Q.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){const t=this.options,e=new Set(Object.keys(this._listeners)),s=new Set(t.events);(!Gn(e,s)||!!this._responsiveListeners!==t.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){const{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(const{method:s,start:i,count:o}of e){const r=s==="_removeElements"?-o:o;IH(t,i,r)}}_getUniformDataChanges(){const t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];const e=this.data.datasets.length,s=o=>new Set(t.filter(r=>r[0]===o).map((r,c)=>c+","+r.splice(1).join(","))),i=s(0);for(let o=1;o<e;o++)if(!Gn(i,s(o)))return;return Array.from(i).map(o=>o.split(",")).map(o=>({method:o[1],start:+o[2],count:+o[3]}))}_updateLayout(t){if(this.notifyPlugins("beforeLayout",{cancelable:!0})===!1)return;Q.update(this,this.width,this.height,t);const e=this.chartArea,s=e.width<=0||e.height<=0;this._layers=[],I(this.boxes,i=>{s&&i.position==="chartArea"||(i.configure&&i.configure(),this._layers.push(...i._layers()))},this),this._layers.forEach((i,o)=>{i._idx=o}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})!==!1){for(let e=0,s=this.data.datasets.length;e<s;++e)this.getDatasetMeta(e).controller.configure();for(let e=0,s=this.data.datasets.length;e<s;++e)this._updateDataset(e,_t(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){const s=this.getDatasetMeta(t),i={meta:s,index:t,mode:e,cancelable:!0};this.notifyPlugins("beforeDatasetUpdate",i)!==!1&&(s.controller._update(e),i.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",i))}render(){this.notifyPlugins("beforeRender",{cancelable:!0})!==!1&&(ut.has(this)?this.attached&&!ut.running(this)&&ut.start(this):(this.draw(),O2({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){const{width:s,height:i}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(s,i)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins("beforeDraw",{cancelable:!0})===!1)return;const e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){const e=this._sortedMetasets,s=[];let i,o;for(i=0,o=e.length;i<o;++i){const r=e[i];(!t||r.visible)&&s.push(r)}return s}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0})===!1)return;const t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){const e=this.ctx,s={meta:t,index:t.index,cancelable:!0},i=zo(this,t);this.notifyPlugins("beforeDatasetDraw",s)!==!1&&(i&&ca(e,i),t.controller.draw(),i&&ha(e),s.cancelable=!1,this.notifyPlugins("afterDatasetDraw",s))}isPointInArea(t){return xt(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,s,i){const o=Dk.modes[e];return typeof o=="function"?o(this,t,s,i):[]}getDatasetMeta(t){const e=this.data.datasets[t],s=this._metasets;let i=s.filter(o=>o&&o._dataset===e).pop();return i||(i={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},s.push(i)),i}getContext(){return this.$context||(this.$context=Tt(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){const e=this.data.datasets[t];if(!e)return!1;const s=this.getDatasetMeta(t);return typeof s.hidden=="boolean"?!s.hidden:!e.hidden}setDatasetVisibility(t,e){const s=this.getDatasetMeta(t);s.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,s){const i=s?"show":"hide",o=this.getDatasetMeta(t),r=o.controller._resolveAnimations(void 0,i);ye(e)?(o.data[e].hidden=!s,this.update()):(this.setDatasetVisibility(t,s),r.update(o,{visible:s}),this.update(c=>c.datasetIndex===t?i:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){const e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),ut.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");const{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),s2(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),delete Xe[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){const t=this._listeners,e=this.platform,s=(o,r)=>{e.addEventListener(this,o,r),t[o]=r},i=(o,r,c)=>{o.offsetX=r,o.offsetY=c,this._eventHandler(o)};I(this.options.events,o=>s(o,i))}bindResponsiveEvents(){this._responsiveListeners||(this._responsiveListeners={});const t=this._responsiveListeners,e=this.platform,s=(h,d)=>{e.addEventListener(this,h,d),t[h]=d},i=(h,d)=>{t[h]&&(e.removeEventListener(this,h,d),delete t[h])},o=(h,d)=>{this.canvas&&this.resize(h,d)};let r;const c=()=>{i("attach",c),this.attached=!0,this.resize(),s("resize",o),s("detach",r)};r=()=>{this.attached=!1,i("resize",o),this._stop(),this._resize(0,0),s("attach",c)},e.isAttached(this.canvas)?c():r()}unbindEvents(){I(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},I(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,s){const i=s?"set":"remove";let o,r,c,h;for(e==="dataset"&&(o=this.getDatasetMeta(t[0].datasetIndex),o.controller["_"+i+"DatasetHoverStyle"]()),c=0,h=t.length;c<h;++c){r=t[c];const d=r&&this.getDatasetMeta(r.datasetIndex).controller;d&&d[i+"HoverStyle"](r.element,r.datasetIndex,r.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){const e=this._active||[],s=t.map(({datasetIndex:o,index:r})=>{const c=this.getDatasetMeta(o);if(!c)throw new Error("No dataset found at index "+o);return{datasetIndex:o,element:c.data[r],index:r}});!Je(s,e)&&(this._active=s,this._lastEvent=null,this._updateHoverStyles(s,e))}notifyPlugins(t,e,s){return this._plugins.notify(this,t,e,s)}isPluginEnabled(t){return this._plugins._cache.filter(e=>e.plugin.id===t).length===1}_updateHoverStyles(t,e,s){const i=this.options.hover,o=(h,d)=>h.filter(l=>!d.some(p=>l.datasetIndex===p.datasetIndex&&l.index===p.index)),r=o(e,t),c=s?t:o(t,e);r.length&&this.updateHoverStyle(r,i.mode,!1),c.length&&i.mode&&this.updateHoverStyle(c,i.mode,!0)}_eventHandler(t,e){const s={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},i=r=>(r.options.events||this.options.events).includes(t.native.type);if(this.notifyPlugins("beforeEvent",s,i)===!1)return;const o=this._handleEvent(t,e,s.inChartArea);return s.cancelable=!1,this.notifyPlugins("afterEvent",s,i),(o||s.changed)&&this.render(),this}_handleEvent(t,e,s){const{_active:i=[],options:o}=this,r=e,c=this._getActiveElements(t,i,s,r),h=$C(t),d=OH(t,this._lastEvent,s,h);s&&(this._lastEvent=null,R(o.onHover,[t,c,this],this),h&&R(o.onClick,[t,c,this],this));const l=!Je(c,i);return(l||e)&&(this._active=c,this._updateHoverStyles(c,i,e)),this._lastEvent=d,l}_getActiveElements(t,e,s,i){if(t.type==="mouseout")return[];if(!s)return e;const o=this.options.hover;return this.getElementsAtEventForMode(t,o.mode,o,i)}}S(mt,"defaults",N),S(mt,"instances",Xe),S(mt,"overrides",Wt),S(mt,"registry",lt),S(mt,"version",VH),S(mt,"getChart",R2);function B2(){return I(mt.instances,a=>a._plugins.invalidate())}function RH(a,t,e){const{startAngle:s,x:i,y:o,outerRadius:r,innerRadius:c,options:h}=t,{borderWidth:d,borderJoinStyle:l}=h,p=Math.min(d/r,K(s-e));if(a.beginPath(),a.arc(i,o,r-d/2,s+p/2,e-p/2),c>0){const g=Math.min(d/c,K(s-e));a.arc(i,o,c+d/2,e-g/2,s+g/2,!0)}else{const g=Math.min(d/2,r*K(s-e));if(l==="round")a.arc(i,o,g,e-E/2,s+E/2,!0);else if(l==="bevel"){const u=2*g*g,f=-u*Math.cos(e+E/2)+i,v=-u*Math.sin(e+E/2)+o,m=u*Math.cos(s+E/2)+i,M=u*Math.sin(s+E/2)+o;a.lineTo(f,v),a.lineTo(m,M)}}a.closePath(),a.moveTo(0,0),a.rect(0,0,a.canvas.width,a.canvas.height),a.clip("evenodd")}function BH(a,t,e){const{startAngle:s,pixelMargin:i,x:o,y:r,outerRadius:c,innerRadius:h}=t;let d=i/c;a.beginPath(),a.arc(o,r,c,s-d,e+d),h>i?(d=i/h,a.arc(o,r,h,e+d,s-d,!0)):a.arc(o,r,i,e+U,s-U),a.closePath(),a.clip()}function FH(a){return a1(a,["outerStart","outerEnd","innerStart","innerEnd"])}function zH(a,t,e,s){const i=FH(a.options.borderRadius),o=(e-t)/2,r=Math.min(o,s*t/2),c=h=>{const d=(e-Math.min(o,h))*s/2;return q(h,0,Math.min(o,d))};return{outerStart:c(i.outerStart),outerEnd:c(i.outerEnd),innerStart:q(i.innerStart,0,r),innerEnd:q(i.innerEnd,0,r)}}function Gt(a,t,e,s){return{x:e+a*Math.cos(t),y:s+a*Math.sin(t)}}function na(a,t,e,s,i,o){const{x:r,y:c,startAngle:h,pixelMargin:d,innerRadius:l}=t,p=Math.max(t.outerRadius+s+e-d,0),g=l>0?l+s+e+d:0;let u=0;const f=i-h;if(s){const O=l>0?l-s:0,F=p>0?p-s:0,$=(O+F)/2,ot=$!==0?f*$/($+s):f;u=(f-ot)/2}const v=Math.max(.001,f*p-e/E)/p,m=(f-v)/2,M=h+m+u,y=i-m-u,{outerStart:w,outerEnd:b,innerStart:x,innerEnd:C}=zH(t,g,p,y-M),A=p-w,k=p-b,H=M+w/A,_=y-b/k,T=g+x,D=g+C,G=M+x/T,st=y-C/D;if(a.beginPath(),o){const O=(H+_)/2;if(a.arc(r,c,p,H,O),a.arc(r,c,p,O,_),b>0){const Y=Gt(k,_,r,c);a.arc(Y.x,Y.y,b,_,y+U)}const F=Gt(D,y,r,c);if(a.lineTo(F.x,F.y),C>0){const Y=Gt(D,st,r,c);a.arc(Y.x,Y.y,C,y+U,st+Math.PI)}const $=(y-C/g+(M+x/g))/2;if(a.arc(r,c,g,y-C/g,$,!0),a.arc(r,c,g,$,M+x/g,!0),x>0){const Y=Gt(T,G,r,c);a.arc(Y.x,Y.y,x,G+Math.PI,M-U)}const ot=Gt(A,M,r,c);if(a.lineTo(ot.x,ot.y),w>0){const Y=Gt(A,H,r,c);a.arc(Y.x,Y.y,w,M-U,H)}}else{a.moveTo(r,c);const O=Math.cos(H)*p+r,F=Math.sin(H)*p+c;a.lineTo(O,F);const $=Math.cos(_)*p+r,ot=Math.sin(_)*p+c;a.lineTo($,ot)}a.closePath()}function NH(a,t,e,s,i){const{fullCircles:o,startAngle:r,circumference:c}=t;let h=t.endAngle;if(o){na(a,t,e,s,h,i);for(let d=0;d<o;++d)a.fill();isNaN(c)||(h=r+(c%B||B))}return na(a,t,e,s,h,i),a.fill(),h}function WH(a,t,e,s,i){const{fullCircles:o,startAngle:r,circumference:c,options:h}=t,{borderWidth:d,borderJoinStyle:l,borderDash:p,borderDashOffset:g,borderRadius:u}=h,f=h.borderAlign==="inner";if(!d)return;a.setLineDash(p||[]),a.lineDashOffset=g,f?(a.lineWidth=d*2,a.lineJoin=l||"round"):(a.lineWidth=d,a.lineJoin=l||"bevel");let v=t.endAngle;if(o){na(a,t,e,s,v,i);for(let m=0;m<o;++m)a.stroke();isNaN(c)||(v=r+(c%B||B))}f&&BH(a,t,v),h.selfJoin&&v-r>=E&&u===0&&l!=="miter"&&RH(a,t,v),o||(na(a,t,e,s,v,i),a.stroke())}class he extends ht{constructor(e){super();S(this,"circumference");S(this,"endAngle");S(this,"fullCircles");S(this,"innerRadius");S(this,"outerRadius");S(this,"pixelMargin");S(this,"startAngle");this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,s,i){const o=this.getProps(["x","y"],i),{angle:r,distance:c}=yo(o,{x:e,y:s}),{startAngle:h,endAngle:d,innerRadius:l,outerRadius:p,circumference:g}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),u=(this.options.spacing+this.options.borderWidth)/2,f=L(g,d-h),v=xe(r,h,d)&&h!==d,m=f>=B||v,M=Mt(c,l+u,p+u);return m&&M}getCenterPoint(e){const{x:s,y:i,startAngle:o,endAngle:r,innerRadius:c,outerRadius:h}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius"],e),{offset:d,spacing:l}=this.options,p=(o+r)/2,g=(c+h+l+d)/2;return{x:s+Math.cos(p)*g,y:i+Math.sin(p)*g}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){const{options:s,circumference:i}=this,o=(s.offset||0)/4,r=(s.spacing||0)/2,c=s.circular;if(this.pixelMargin=s.borderAlign==="inner"?.33:0,this.fullCircles=i>B?Math.floor(i/B):0,i===0||this.innerRadius<0||this.outerRadius<0)return;e.save();const h=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(h)*o,Math.sin(h)*o);const d=1-Math.sin(Math.min(E,i||0)),l=o*d;e.fillStyle=s.backgroundColor,e.strokeStyle=s.borderColor,NH(e,this,l,r,c),WH(e,this,l,r,c),e.restore()}}S(he,"id","arc"),S(he,"defaults",{borderAlign:"center",borderColor:"#fff",borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1}),S(he,"defaultRoutes",{backgroundColor:"backgroundColor"}),S(he,"descriptors",{_scriptable:!0,_indexable:e=>e!=="borderDash"});function Jo(a,t,e=t){a.lineCap=L(e.borderCapStyle,t.borderCapStyle),a.setLineDash(L(e.borderDash,t.borderDash)),a.lineDashOffset=L(e.borderDashOffset,t.borderDashOffset),a.lineJoin=L(e.borderJoinStyle,t.borderJoinStyle),a.lineWidth=L(e.borderWidth,t.borderWidth),a.strokeStyle=L(e.borderColor,t.borderColor)}function $H(a,t,e){a.lineTo(e.x,e.y)}function UH(a){return a.stepped?pA:a.tension||a.cubicInterpolationMode==="monotone"?gA:$H}function tr(a,t,e={}){const s=a.length,{start:i=0,end:o=s-1}=e,{start:r,end:c}=t,h=Math.max(i,r),d=Math.min(o,c),l=i<r&&o<r||i>c&&o>c;return{count:s,start:h,loop:t.loop,ilen:d<h&&!l?s+d-h:d-h}}function ZH(a,t,e,s){const{points:i,options:o}=t,{count:r,start:c,loop:h,ilen:d}=tr(i,e,s),l=UH(o);let{move:p=!0,reverse:g}=s||{},u,f,v;for(u=0;u<=d;++u)f=i[(c+(g?d-u:u))%r],!f.skip&&(p?(a.moveTo(f.x,f.y),p=!1):l(a,v,f,g,o.stepped),v=f);return h&&(f=i[(c+(g?d:0))%r],l(a,v,f,g,o.stepped)),!!h}function jH(a,t,e,s){const i=t.points,{count:o,start:r,ilen:c}=tr(i,e,s),{move:h=!0,reverse:d}=s||{};let l=0,p=0,g,u,f,v,m,M;const y=b=>(r+(d?c-b:b))%o,w=()=>{v!==m&&(a.lineTo(l,m),a.lineTo(l,v),a.lineTo(l,M))};for(h&&(u=i[y(0)],a.moveTo(u.x,u.y)),g=0;g<=c;++g){if(u=i[y(g)],u.skip)continue;const b=u.x,x=u.y,C=b|0;C===f?(x<v?v=x:x>m&&(m=x),l=(p*l+b)/++p):(w(),a.lineTo(b,x),f=C,p=0,v=m=x),M=x}w()}function Fa(a){const t=a.options,e=t.borderDash&&t.borderDash.length;return!a._decimated&&!a._loop&&!t.tension&&t.cubicInterpolationMode!=="monotone"&&!t.stepped&&!e?jH:ZH}function qH(a){return a.stepped?ZA:a.tension||a.cubicInterpolationMode==="monotone"?jA:Bt}function GH(a,t,e,s){let i=t._path;i||(i=t._path=new Path2D,t.path(i,e,s)&&i.closePath()),Jo(a,t.options),a.stroke(i)}function YH(a,t,e,s){const{segments:i,options:o}=t,r=Fa(t);for(const c of i)Jo(a,o,c.style),a.beginPath(),r(a,t,c,{start:e,end:e+s-1})&&a.closePath(),a.stroke()}const XH=typeof Path2D=="function";function KH(a,t,e,s){XH&&!t.options.segment?GH(a,t,e,s):YH(a,t,e,s)}class At extends ht{constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){const s=this.options;if((s.tension||s.cubicInterpolationMode==="monotone")&&!s.stepped&&!this._pointsUpdated){const i=s.spanGaps?this._loop:this._fullLoop;RA(this._points,s,t,i,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=QA(this,this.options.segment))}first(){const t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){const t=this.segments,e=this.points,s=t.length;return s&&e[t[s-1].end]}interpolate(t,e){const s=this.options,i=t[e],o=this.points,r=Fo(this,{property:e,start:i,end:i});if(!r.length)return;const c=[],h=qH(s);let d,l;for(d=0,l=r.length;d<l;++d){const{start:p,end:g}=r[d],u=o[p],f=o[g];if(u===f){c.push(u);continue}const v=Math.abs((i-u[e])/(f[e]-u[e])),m=h(u,f,v,s.stepped);m[e]=t[e],c.push(m)}return c.length===1?c[0]:c}pathSegment(t,e,s){return Fa(this)(t,this,e,s)}path(t,e,s){const i=this.segments,o=Fa(this);let r=this._loop;e=e||0,s=s||this.points.length-e;for(const c of i)r&=o(t,this,c,{start:e,end:e+s-1});return!!r}draw(t,e,s,i){const o=this.options||{};(this.points||[]).length&&o.borderWidth&&(t.save(),KH(t,this,s,i),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}S(At,"id","line"),S(At,"defaults",{borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0}),S(At,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"}),S(At,"descriptors",{_scriptable:!0,_indexable:t=>t!=="borderDash"&&t!=="fill"});function F2(a,t,e,s){const i=a.options,{[e]:o}=a.getProps([e],s);return Math.abs(t-o)<i.radius+i.hitRadius}class Ke extends ht{constructor(e){super();S(this,"parsed");S(this,"skip");S(this,"stop");this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,s,i){const o=this.options,{x:r,y:c}=this.getProps(["x","y"],i);return Math.pow(e-r,2)+Math.pow(s-c,2)<Math.pow(o.hitRadius+o.radius,2)}inXRange(e,s){return F2(this,e,"x",s)}inYRange(e,s){return F2(this,e,"y",s)}getCenterPoint(e){const{x:s,y:i}=this.getProps(["x","y"],e);return{x:s,y:i}}size(e){e=e||this.options||{};let s=e.radius||0;s=Math.max(s,s&&e.hoverRadius||0);const i=s&&e.borderWidth||0;return(s+i)*2}draw(e,s){const i=this.options;this.skip||i.radius<.1||!xt(this,s,this.size(i)/2)||(e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.fillStyle=i.backgroundColor,Ia(e,i,this.x,this.y))}getRange(){const e=this.options||{};return e.radius+e.hitRadius}}S(Ke,"id","point"),S(Ke,"defaults",{borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0}),S(Ke,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});function er(a,t){const{x:e,y:s,base:i,width:o,height:r}=a.getProps(["x","y","base","width","height"],t);let c,h,d,l,p;return a.horizontal?(p=r/2,c=Math.min(e,i),h=Math.max(e,i),d=s-p,l=s+p):(p=o/2,c=e-p,h=e+p,d=Math.min(s,i),l=Math.max(s,i)),{left:c,top:d,right:h,bottom:l}}function kt(a,t,e,s){return a?0:q(t,e,s)}function QH(a,t,e){const s=a.options.borderWidth,i=a.borderSkipped,o=Lo(s);return{t:kt(i.top,o.top,0,e),r:kt(i.right,o.right,0,t),b:kt(i.bottom,o.bottom,0,e),l:kt(i.left,o.left,0,t)}}function JH(a,t,e){const{enableBorderRadius:s}=a.getProps(["enableBorderRadius"]),i=a.options.borderRadius,o=zt(i),r=Math.min(t,e),c=a.borderSkipped,h=s||V(i);return{topLeft:kt(!h||c.top||c.left,o.topLeft,0,r),topRight:kt(!h||c.top||c.right,o.topRight,0,r),bottomLeft:kt(!h||c.bottom||c.left,o.bottomLeft,0,r),bottomRight:kt(!h||c.bottom||c.right,o.bottomRight,0,r)}}function tL(a){const t=er(a),e=t.right-t.left,s=t.bottom-t.top,i=QH(a,e/2,s/2),o=JH(a,e/2,s/2);return{outer:{x:t.left,y:t.top,w:e,h:s,radius:o},inner:{x:t.left+i.l,y:t.top+i.t,w:e-i.l-i.r,h:s-i.t-i.b,radius:{topLeft:Math.max(0,o.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,o.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,o.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,o.bottomRight-Math.max(i.b,i.r))}}}}function La(a,t,e,s){const i=t===null,o=e===null,c=a&&!(i&&o)&&er(a,s);return c&&(i||Mt(t,c.left,c.right))&&(o||Mt(e,c.top,c.bottom))}function eL(a){return a.topLeft||a.topRight||a.bottomLeft||a.bottomRight}function aL(a,t){a.rect(t.x,t.y,t.w,t.h)}function _a(a,t,e={}){const s=a.x!==e.x?-t:0,i=a.y!==e.y?-t:0,o=(a.x+a.w!==e.x+e.w?t:0)-s,r=(a.y+a.h!==e.y+e.h?t:0)-i;return{x:a.x+s,y:a.y+i,w:a.w+o,h:a.h+r,radius:a.radius}}class Qe extends ht{constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){const{inflateAmount:e,options:{borderColor:s,backgroundColor:i}}=this,{inner:o,outer:r}=tL(this),c=eL(r.radius)?be:aL;t.save(),(r.w!==o.w||r.h!==o.h)&&(t.beginPath(),c(t,_a(r,e,o)),t.clip(),c(t,_a(o,-e,r)),t.fillStyle=s,t.fill("evenodd")),t.beginPath(),c(t,_a(o,e)),t.fillStyle=i,t.fill(),t.restore()}inRange(t,e,s){return La(this,t,e,s)}inXRange(t,e){return La(this,t,null,e)}inYRange(t,e){return La(this,null,t,e)}getCenterPoint(t){const{x:e,y:s,base:i,horizontal:o}=this.getProps(["x","y","base","horizontal"],t);return{x:o?(e+i)/2:e,y:o?s:(s+i)/2}}getRange(t){return t==="x"?this.width/2:this.height/2}}S(Qe,"id","bar"),S(Qe,"defaults",{borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0}),S(Qe,"defaultRoutes",{backgroundColor:"backgroundColor",borderColor:"borderColor"});var sL=Object.freeze({__proto__:null,ArcElement:he,BarElement:Qe,LineElement:At,PointElement:Ke});const za=["rgb(54, 162, 235)","rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(201, 203, 207)"],z2=za.map(a=>a.replace("rgb(","rgba(").replace(")",", 0.5)"));function ar(a){return za[a%za.length]}function sr(a){return z2[a%z2.length]}function iL(a,t){return a.borderColor=ar(t),a.backgroundColor=sr(t),++t}function nL(a,t){return a.backgroundColor=a.data.map(()=>ar(t++)),t}function oL(a,t){return a.backgroundColor=a.data.map(()=>sr(t++)),t}function rL(a){let t=0;return(e,s)=>{const i=a.getDatasetMeta(s).controller;i instanceof Ft?t=nL(e,t):i instanceof ve?t=oL(e,t):i&&(t=iL(e,t))}}function N2(a){let t;for(t in a)if(a[t].borderColor||a[t].backgroundColor)return!0;return!1}function cL(a){return a&&(a.borderColor||a.backgroundColor)}function hL(){return N.borderColor!=="rgba(0,0,0,0.1)"||N.backgroundColor!=="rgba(0,0,0,0.1)"}var dL={id:"colors",defaults:{enabled:!0,forceOverride:!1},beforeLayout(a,t,e){if(!e.enabled)return;const{data:{datasets:s},options:i}=a.config,{elements:o}=i,r=N2(s)||cL(i)||o&&N2(o)||hL();if(!e.forceOverride&&r)return;const c=rL(a);s.forEach(c)}};function lL(a,t,e,s,i){const o=i.samples||s;if(o>=e)return a.slice(t,t+e);const r=[],c=(e-2)/(o-2);let h=0;const d=t+e-1;let l=t,p,g,u,f,v;for(r[h++]=a[l],p=0;p<o-2;p++){let m=0,M=0,y;const w=Math.floor((p+1)*c)+1+t,b=Math.min(Math.floor((p+2)*c)+1,e)+t,x=b-w;for(y=w;y<b;y++)m+=a[y].x,M+=a[y].y;m/=x,M/=x;const C=Math.floor(p*c)+1+t,A=Math.min(Math.floor((p+1)*c)+1,e)+t,{x:k,y:H}=a[l];for(u=f=-1,y=C;y<A;y++)f=.5*Math.abs((k-m)*(a[y].y-H)-(k-a[y].x)*(M-H)),f>u&&(u=f,g=a[y],v=y);r[h++]=g,l=v}return r[h++]=a[d],r}function pL(a,t,e,s){let i=0,o=0,r,c,h,d,l,p,g,u,f,v;const m=[],M=t+e-1,y=a[t].x,b=a[M].x-y;for(r=t;r<t+e;++r){c=a[r],h=(c.x-y)/b*s,d=c.y;const x=h|0;if(x===l)d<f?(f=d,p=r):d>v&&(v=d,g=r),i=(o*i+c.x)/++o;else{const C=r-1;if(!P(p)&&!P(g)){const A=Math.min(p,g),k=Math.max(p,g);A!==u&&A!==C&&m.push({...a[A],x:i}),k!==u&&k!==C&&m.push({...a[k],x:i})}r>0&&C!==u&&m.push(a[C]),m.push(c),l=x,o=0,f=v=d,p=g=u=r}}return m}function ir(a){if(a._decimated){const t=a._data;delete a._decimated,delete a._data,Object.defineProperty(a,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function W2(a){a.data.datasets.forEach(t=>{ir(t)})}function gL(a,t){const e=t.length;let s=0,i;const{iScale:o}=a,{min:r,max:c,minDefined:h,maxDefined:d}=o.getUserBounds();return h&&(s=q(yt(t,o.axis,r).lo,0,e-1)),d?i=q(yt(t,o.axis,c).hi+1,s,e)-s:i=e-s,{start:s,count:i}}var uL={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(a,t,e)=>{if(!e.enabled){W2(a);return}const s=a.width;a.data.datasets.forEach((i,o)=>{const{_data:r,indexAxis:c}=i,h=a.getDatasetMeta(o),d=r||i.data;if(re([c,a.options.indexAxis])==="y"||!h.controller.supportsDecimation)return;const l=a.scales[h.xAxisID];if(l.type!=="linear"&&l.type!=="time"||a.options.parsing)return;let{start:p,count:g}=gL(h,d);const u=e.threshold||4*s;if(g<=u){ir(i);return}P(r)&&(i._data=d,delete i.data,Object.defineProperty(i,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(v){this._data=v}}));let f;switch(e.algorithm){case"lttb":f=lL(d,p,g,s,e);break;case"min-max":f=pL(d,p,g,s);break;default:throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`)}i._decimated=f})},destroy(a){W2(a)}};function fL(a,t,e){const s=a.segments,i=a.points,o=t.points,r=[];for(const c of s){let{start:h,end:d}=c;d=pa(h,d,i);const l=Na(e,i[h],i[d],c.loop);if(!t.segments){r.push({source:c,target:l,start:i[h],end:i[d]});continue}const p=Fo(t,l);for(const g of p){const u=Na(e,o[g.start],o[g.end],g.loop),f=Bo(c,i,u);for(const v of f)r.push({source:v,target:g,start:{[e]:$2(l,u,"start",Math.max)},end:{[e]:$2(l,u,"end",Math.min)}})}}return r}function Na(a,t,e,s){if(s)return;let i=t[a],o=e[a];return a==="angle"&&(i=K(i),o=K(o)),{property:a,start:i,end:o}}function vL(a,t){const{x:e=null,y:s=null}=a||{},i=t.points,o=[];return t.segments.forEach(({start:r,end:c})=>{c=pa(r,c,i);const h=i[r],d=i[c];s!==null?(o.push({x:h.x,y:s}),o.push({x:d.x,y:s})):e!==null&&(o.push({x:e,y:h.y}),o.push({x:e,y:d.y}))}),o}function pa(a,t,e){for(;t>a;t--){const s=e[t];if(!isNaN(s.x)&&!isNaN(s.y))break}return t}function $2(a,t,e,s){return a&&t?s(a[e],t[e]):a?a[e]:t?t[e]:0}function nr(a,t){let e=[],s=!1;return z(a)?(s=!0,e=a):e=vL(a,t),e.length?new At({points:e,options:{tension:0},_loop:s,_fullLoop:s}):null}function U2(a){return a&&a.fill!==!1}function mL(a,t,e){let i=a[t].fill;const o=[t];let r;if(!e)return i;for(;i!==!1&&o.indexOf(i)===-1;){if(!W(i))return i;if(r=a[i],!r)return!1;if(r.visible)return i;o.push(i),i=r.fill}return!1}function ML(a,t,e){const s=wL(a);if(V(s))return isNaN(s.value)?!1:s;let i=parseFloat(s);return W(i)&&Math.floor(i)===i?yL(s[0],t,i,e):["origin","start","end","stack","shape"].indexOf(s)>=0&&s}function yL(a,t,e,s){return(a==="-"||a==="+")&&(e=t+e),e===t||e<0||e>=s?!1:e}function xL(a,t){let e=null;return a==="start"?e=t.bottom:a==="end"?e=t.top:V(a)?e=t.getPixelForValue(a.value):t.getBasePixel&&(e=t.getBasePixel()),e}function bL(a,t,e){let s;return a==="start"?s=e:a==="end"?s=t.options.reverse?t.min:t.max:V(a)?s=a.value:s=t.getBaseValue(),s}function wL(a){const t=a.options,e=t.fill;let s=L(e&&e.target,e);return s===void 0&&(s=!!t.backgroundColor),s===!1||s===null?!1:s===!0?"origin":s}function SL(a){const{scale:t,index:e,line:s}=a,i=[],o=s.segments,r=s.points,c=CL(t,e);c.push(nr({x:null,y:t.bottom},s));for(let h=0;h<o.length;h++){const d=o[h];for(let l=d.start;l<=d.end;l++)AL(i,r[l],c)}return new At({points:i,options:{}})}function CL(a,t){const e=[],s=a.getMatchingVisibleMetas("line");for(let i=0;i<s.length;i++){const o=s[i];if(o.index===t)break;o.hidden||e.unshift(o.dataset)}return e}function AL(a,t,e){const s=[];for(let i=0;i<e.length;i++){const o=e[i],{first:r,last:c,point:h}=kL(o,t,"x");if(!(!h||r&&c)){if(r)s.unshift(h);else if(a.push(h),!c)break}}a.push(...s)}function kL(a,t,e){const s=a.interpolate(t,e);if(!s)return{};const i=s[e],o=a.segments,r=a.points;let c=!1,h=!1;for(let d=0;d<o.length;d++){const l=o[d],p=r[l.start][e],g=r[l.end][e];if(Mt(i,p,g)){c=i===p,h=i===g;break}}return{first:c,last:h,point:s}}class or{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,s){const{x:i,y:o,radius:r}=this;return e=e||{start:0,end:B},t.arc(i,o,r,e.end,e.start,!0),!s.bounds}interpolate(t){const{x:e,y:s,radius:i}=this,o=t.angle;return{x:e+Math.cos(o)*i,y:s+Math.sin(o)*i,angle:o}}}function HL(a){const{chart:t,fill:e,line:s}=a;if(W(e))return LL(t,e);if(e==="stack")return SL(a);if(e==="shape")return!0;const i=_L(a);return i instanceof or?i:nr(i,s)}function LL(a,t){const e=a.getDatasetMeta(t);return e&&a.isDatasetVisible(t)?e.dataset:null}function _L(a){return(a.scale||{}).getPointPositionForValue?PL(a):TL(a)}function TL(a){const{scale:t={},fill:e}=a,s=xL(e,t);if(W(s)){const i=t.isHorizontal();return{x:i?s:null,y:i?null:s}}return null}function PL(a){const{scale:t,fill:e}=a,s=t.options,i=t.getLabels().length,o=s.reverse?t.max:t.min,r=bL(e,t,o),c=[];if(s.grid.circular){const h=t.getPointPositionForValue(0,o);return new or({x:h.x,y:h.y,radius:t.getDistanceFromCenterForValue(r)})}for(let h=0;h<i;++h)c.push(t.getPointPositionForValue(h,r));return c}function Ta(a,t,e){const s=HL(t),{chart:i,index:o,line:r,scale:c,axis:h}=t,d=r.options,l=d.fill,p=d.backgroundColor,{above:g=p,below:u=p}=l||{},f=i.getDatasetMeta(o),v=zo(i,f);s&&r.points.length&&(ca(a,e),VL(a,{line:r,target:s,above:g,below:u,area:e,scale:c,axis:h,clip:v}),ha(a))}function VL(a,t){const{line:e,target:s,above:i,below:o,area:r,scale:c,clip:h}=t,d=e._loop?"angle":t.axis;a.save();let l=o;o!==i&&(d==="x"?(Z2(a,s,r.top),Pa(a,{line:e,target:s,color:i,scale:c,property:d,clip:h}),a.restore(),a.save(),Z2(a,s,r.bottom)):d==="y"&&(j2(a,s,r.left),Pa(a,{line:e,target:s,color:o,scale:c,property:d,clip:h}),a.restore(),a.save(),j2(a,s,r.right),l=i)),Pa(a,{line:e,target:s,color:l,scale:c,property:d,clip:h}),a.restore()}function Z2(a,t,e){const{segments:s,points:i}=t;let o=!0,r=!1;a.beginPath();for(const c of s){const{start:h,end:d}=c,l=i[h],p=i[pa(h,d,i)];o?(a.moveTo(l.x,l.y),o=!1):(a.lineTo(l.x,e),a.lineTo(l.x,l.y)),r=!!t.pathSegment(a,c,{move:r}),r?a.closePath():a.lineTo(p.x,e)}a.lineTo(t.first().x,e),a.closePath(),a.clip()}function j2(a,t,e){const{segments:s,points:i}=t;let o=!0,r=!1;a.beginPath();for(const c of s){const{start:h,end:d}=c,l=i[h],p=i[pa(h,d,i)];o?(a.moveTo(l.x,l.y),o=!1):(a.lineTo(e,l.y),a.lineTo(l.x,l.y)),r=!!t.pathSegment(a,c,{move:r}),r?a.closePath():a.lineTo(e,p.y)}a.lineTo(e,t.first().y),a.closePath(),a.clip()}function Pa(a,t){const{line:e,target:s,property:i,color:o,scale:r,clip:c}=t,h=fL(e,s,i);for(const{source:d,target:l,start:p,end:g}of h){const{style:{backgroundColor:u=o}={}}=d,f=s!==!0;a.save(),a.fillStyle=u,DL(a,r,c,f&&Na(i,p,g)),a.beginPath();const v=!!e.pathSegment(a,d);let m;if(f){v?a.closePath():q2(a,s,g,i);const M=!!s.pathSegment(a,l,{move:v,reverse:!0});m=v&&M,m||q2(a,s,p,i)}a.closePath(),a.fill(m?"evenodd":"nonzero"),a.restore()}}function DL(a,t,e,s){const i=t.chart.chartArea,{property:o,start:r,end:c}=s||{};if(o==="x"||o==="y"){let h,d,l,p;o==="x"?(h=r,d=i.top,l=c,p=i.bottom):(h=i.left,d=r,l=i.right,p=c),a.beginPath(),e&&(h=Math.max(h,e.left),l=Math.min(l,e.right),d=Math.max(d,e.top),p=Math.min(p,e.bottom)),a.rect(h,d,l-h,p-d),a.clip()}}function q2(a,t,e,s){const i=t.interpolate(e,s);i&&a.lineTo(i.x,i.y)}var EL={id:"filler",afterDatasetsUpdate(a,t,e){const s=(a.data.datasets||[]).length,i=[];let o,r,c,h;for(r=0;r<s;++r)o=a.getDatasetMeta(r),c=o.dataset,h=null,c&&c.options&&c instanceof At&&(h={visible:a.isDatasetVisible(r),index:r,fill:ML(c,r,s),chart:a,axis:o.controller.options.indexAxis,scale:o.vScale,line:c}),o.$filler=h,i.push(h);for(r=0;r<s;++r)h=i[r],!(!h||h.fill===!1)&&(h.fill=mL(i,r,e.propagate))},beforeDraw(a,t,e){const s=e.drawTime==="beforeDraw",i=a.getSortedVisibleDatasetMetas(),o=a.chartArea;for(let r=i.length-1;r>=0;--r){const c=i[r].$filler;c&&(c.line.updateControlPoints(o,c.axis),s&&c.fill&&Ta(a.ctx,c,o))}},beforeDatasetsDraw(a,t,e){if(e.drawTime!=="beforeDatasetsDraw")return;const s=a.getSortedVisibleDatasetMetas();for(let i=s.length-1;i>=0;--i){const o=s[i].$filler;U2(o)&&Ta(a.ctx,o,a.chartArea)}},beforeDatasetDraw(a,t,e){const s=t.meta.$filler;!U2(s)||e.drawTime!=="beforeDatasetDraw"||Ta(a.ctx,s,a.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};const G2=(a,t)=>{let{boxHeight:e=t,boxWidth:s=t}=a;return a.usePointStyle&&(e=Math.min(e,t),s=a.pointStyleWidth||Math.min(s,t)),{boxWidth:s,boxHeight:e,itemHeight:Math.max(t,e)}},IL=(a,t)=>a!==null&&t!==null&&a.datasetIndex===t.datasetIndex&&a.index===t.index;class Y2 extends ht{constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,s){this.maxWidth=t,this.maxHeight=e,this._margins=s,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){const t=this.options.labels||{};let e=R(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(s=>t.filter(s,this.chart.data))),t.sort&&(e=e.sort((s,i)=>t.sort(s,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){const{options:t,ctx:e}=this;if(!t.display){this.width=this.height=0;return}const s=t.labels,i=j(s.font),o=i.size,r=this._computeTitleHeight(),{boxWidth:c,itemHeight:h}=G2(s,o);let d,l;e.font=i.string,this.isHorizontal()?(d=this.maxWidth,l=this._fitRows(r,o,c,h)+10):(l=this.maxHeight,d=this._fitCols(r,i,c,h)+10),this.width=Math.min(d,t.maxWidth||this.maxWidth),this.height=Math.min(l,t.maxHeight||this.maxHeight)}_fitRows(t,e,s,i){const{ctx:o,maxWidth:r,options:{labels:{padding:c}}}=this,h=this.legendHitBoxes=[],d=this.lineWidths=[0],l=i+c;let p=t;o.textAlign="left",o.textBaseline="middle";let g=-1,u=-l;return this.legendItems.forEach((f,v)=>{const m=s+e/2+o.measureText(f.text).width;(v===0||d[d.length-1]+m+2*c>r)&&(p+=l,d[d.length-(v>0?0:1)]=0,u+=l,g++),h[v]={left:0,top:u,row:g,width:m,height:i},d[d.length-1]+=m+c}),p}_fitCols(t,e,s,i){const{ctx:o,maxHeight:r,options:{labels:{padding:c}}}=this,h=this.legendHitBoxes=[],d=this.columnSizes=[],l=r-t;let p=c,g=0,u=0,f=0,v=0;return this.legendItems.forEach((m,M)=>{const{itemWidth:y,itemHeight:w}=OL(s,e,o,m,i);M>0&&u+w+2*c>l&&(p+=g+c,d.push({width:g,height:u}),f+=g+c,v++,g=u=0),h[M]={left:f,top:u,col:v,width:y,height:w},g=Math.max(g,y),u+=w+c}),p+=g,d.push({width:g,height:u}),p}adjustHitBoxes(){if(!this.options.display)return;const t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:s,labels:{padding:i},rtl:o}}=this,r=Yt(o,this.left,this.width);if(this.isHorizontal()){let c=0,h=X(s,this.left+i,this.right-this.lineWidths[c]);for(const d of e)c!==d.row&&(c=d.row,h=X(s,this.left+i,this.right-this.lineWidths[c])),d.top+=this.top+t+i,d.left=r.leftForLtr(r.x(h),d.width),h+=d.width+i}else{let c=0,h=X(s,this.top+t+i,this.bottom-this.columnSizes[c].height);for(const d of e)d.col!==c&&(c=d.col,h=X(s,this.top+t+i,this.bottom-this.columnSizes[c].height)),d.top=h,d.left+=this.left+i,d.left=r.leftForLtr(r.x(d.left),d.width),h+=d.height+i}}isHorizontal(){return this.options.position==="top"||this.options.position==="bottom"}draw(){if(this.options.display){const t=this.ctx;ca(t,this),this._draw(),ha(t)}}_draw(){const{options:t,columnSizes:e,lineWidths:s,ctx:i}=this,{align:o,labels:r}=t,c=N.color,h=Yt(t.rtl,this.left,this.width),d=j(r.font),{padding:l}=r,p=d.size,g=p/2;let u;this.drawTitle(),i.textAlign=h.textAlign("left"),i.textBaseline="middle",i.lineWidth=.5,i.font=d.string;const{boxWidth:f,boxHeight:v,itemHeight:m}=G2(r,p),M=function(C,A,k){if(isNaN(f)||f<=0||isNaN(v)||v<0)return;i.save();const H=L(k.lineWidth,1);if(i.fillStyle=L(k.fillStyle,c),i.lineCap=L(k.lineCap,"butt"),i.lineDashOffset=L(k.lineDashOffset,0),i.lineJoin=L(k.lineJoin,"miter"),i.lineWidth=H,i.strokeStyle=L(k.strokeStyle,c),i.setLineDash(L(k.lineDash,[])),r.usePointStyle){const _={radius:v*Math.SQRT2/2,pointStyle:k.pointStyle,rotation:k.rotation,borderWidth:H},T=h.xPlus(C,f/2),D=A+g;Ho(i,_,T,D,r.pointStyleWidth&&f)}else{const _=A+Math.max((p-v)/2,0),T=h.leftForLtr(C,f),D=zt(k.borderRadius);i.beginPath(),Object.values(D).some(G=>G!==0)?be(i,{x:T,y:_,w:f,h:v,radius:D}):i.rect(T,_,f,v),i.fill(),H!==0&&i.stroke()}i.restore()},y=function(C,A,k){$t(i,k.text,C,A+m/2,d,{strikethrough:k.hidden,textAlign:h.textAlign(k.textAlign)})},w=this.isHorizontal(),b=this._computeTitleHeight();w?u={x:X(o,this.left+l,this.right-s[0]),y:this.top+l+b,line:0}:u={x:this.left+l,y:X(o,this.top+b+l,this.bottom-e[0].height),line:0},Io(this.ctx,t.textDirection);const x=m+l;this.legendItems.forEach((C,A)=>{i.strokeStyle=C.fontColor,i.fillStyle=C.fontColor;const k=i.measureText(C.text).width,H=h.textAlign(C.textAlign||(C.textAlign=r.textAlign)),_=f+g+k;let T=u.x,D=u.y;h.setWidth(this.width),w?A>0&&T+_+l>this.right&&(D=u.y+=x,u.line++,T=u.x=X(o,this.left+l,this.right-s[u.line])):A>0&&D+x>this.bottom&&(T=u.x=T+e[u.line].width+l,u.line++,D=u.y=X(o,this.top+b+l,this.bottom-e[u.line].height));const G=h.x(T);if(M(G,D,C),T=eA(H,T+f+g,w?T+_:this.right,t.rtl),y(h.x(T),D,C),w)u.x+=_+l;else if(typeof C.text!="string"){const st=d.lineHeight;u.y+=rr(C,st)+l}else u.y+=x}),Oo(this.ctx,t.textDirection)}drawTitle(){const t=this.options,e=t.title,s=j(e.font),i=J(e.padding);if(!e.display)return;const o=Yt(t.rtl,this.left,this.width),r=this.ctx,c=e.position,h=s.size/2,d=i.top+h;let l,p=this.left,g=this.width;if(this.isHorizontal())g=Math.max(...this.lineWidths),l=this.top+d,p=X(t.align,p,this.right-g);else{const f=this.columnSizes.reduce((v,m)=>Math.max(v,m.height),0);l=d+X(t.align,this.top,this.bottom-f-t.labels.padding-this._computeTitleHeight())}const u=X(c,p,p+g);r.textAlign=o.textAlign(t1(c)),r.textBaseline="middle",r.strokeStyle=e.color,r.fillStyle=e.color,r.font=s.string,$t(r,e.text,u,l,s)}_computeTitleHeight(){const t=this.options.title,e=j(t.font),s=J(t.padding);return t.display?e.lineHeight+s.height:0}_getLegendItemAt(t,e){let s,i,o;if(Mt(t,this.left,this.right)&&Mt(e,this.top,this.bottom)){for(o=this.legendHitBoxes,s=0;s<o.length;++s)if(i=o[s],Mt(t,i.left,i.left+i.width)&&Mt(e,i.top,i.top+i.height))return this.legendItems[s]}return null}handleEvent(t){const e=this.options;if(!FL(t.type,e))return;const s=this._getLegendItemAt(t.x,t.y);if(t.type==="mousemove"||t.type==="mouseout"){const i=this._hoveredItem,o=IL(i,s);i&&!o&&R(e.onLeave,[t,i,this],this),this._hoveredItem=s,s&&!o&&R(e.onHover,[t,s,this],this)}else s&&R(e.onClick,[t,s,this],this)}}function OL(a,t,e,s,i){const o=RL(s,a,t,e),r=BL(i,s,t.lineHeight);return{itemWidth:o,itemHeight:r}}function RL(a,t,e,s){let i=a.text;return i&&typeof i!="string"&&(i=i.reduce((o,r)=>o.length>r.length?o:r)),t+e.size/2+s.measureText(i).width}function BL(a,t,e){let s=a;return typeof t.text!="string"&&(s=rr(t,e)),s}function rr(a,t){const e=a.text?a.text.length:0;return t*e}function FL(a,t){return!!((a==="mousemove"||a==="mouseout")&&(t.onHover||t.onLeave)||t.onClick&&(a==="click"||a==="mouseup"))}var zL={id:"legend",_element:Y2,start(a,t,e){const s=a.legend=new Y2({ctx:a.ctx,options:e,chart:a});Q.configure(a,s,e),Q.addBox(a,s)},stop(a){Q.removeBox(a,a.legend),delete a.legend},beforeUpdate(a,t,e){const s=a.legend;Q.configure(a,s,e),s.options=e},afterUpdate(a){const t=a.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(a,t){t.replay||a.legend.handleEvent(t.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(a,t,e){const s=t.datasetIndex,i=e.chart;i.isDatasetVisible(s)?(i.hide(s),t.hidden=!0):(i.show(s),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:a=>a.chart.options.color,boxWidth:40,padding:10,generateLabels(a){const t=a.data.datasets,{labels:{usePointStyle:e,pointStyle:s,textAlign:i,color:o,useBorderRadius:r,borderRadius:c}}=a.legend.options;return a._getSortedDatasetMetas().map(h=>{const d=h.controller.getStyle(e?0:void 0),l=J(d.borderWidth);return{text:t[h.index].label,fillStyle:d.backgroundColor,fontColor:o,hidden:!h.visible,lineCap:d.borderCapStyle,lineDash:d.borderDash,lineDashOffset:d.borderDashOffset,lineJoin:d.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:d.borderColor,pointStyle:s||d.pointStyle,rotation:d.rotation,textAlign:i||d.textAlign,borderRadius:r&&(c||d.borderRadius),datasetIndex:h.index}},this)}},title:{color:a=>a.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:a=>!a.startsWith("on"),labels:{_scriptable:a=>!["generateLabels","filter","sort"].includes(a)}}};class h1 extends ht{constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){const s=this.options;if(this.left=0,this.top=0,!s.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;const i=z(s.text)?s.text.length:1;this._padding=J(s.padding);const o=i*j(s.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=o:this.width=o}isHorizontal(){const t=this.options.position;return t==="top"||t==="bottom"}_drawArgs(t){const{top:e,left:s,bottom:i,right:o,options:r}=this,c=r.align;let h=0,d,l,p;return this.isHorizontal()?(l=X(c,s,o),p=e+t,d=o-s):(r.position==="left"?(l=s+t,p=X(c,i,e),h=E*-.5):(l=o-t,p=X(c,e,i),h=E*.5),d=i-e),{titleX:l,titleY:p,maxWidth:d,rotation:h}}draw(){const t=this.ctx,e=this.options;if(!e.display)return;const s=j(e.font),o=s.lineHeight/2+this._padding.top,{titleX:r,titleY:c,maxWidth:h,rotation:d}=this._drawArgs(o);$t(t,e.text,0,0,s,{color:e.color,maxWidth:h,rotation:d,textAlign:t1(e.align),textBaseline:"middle",translation:[r,c]})}}function NL(a,t){const e=new h1({ctx:a.ctx,options:t,chart:a});Q.configure(a,e,t),Q.addBox(a,e),a.titleBlock=e}var WL={id:"title",_element:h1,start(a,t,e){NL(a,e)},stop(a){const t=a.titleBlock;Q.removeBox(a,t),delete a.titleBlock},beforeUpdate(a,t,e){const s=a.titleBlock;Q.configure(a,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const Fe=new WeakMap;var $L={id:"subtitle",start(a,t,e){const s=new h1({ctx:a.ctx,options:e,chart:a});Q.configure(a,s,e),Q.addBox(a,s),Fe.set(a,s)},stop(a){Q.removeBox(a,Fe.get(a)),Fe.delete(a)},beforeUpdate(a,t,e){const s=Fe.get(a);Q.configure(a,s,e),s.options=e},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};const de={average(a){if(!a.length)return!1;let t,e,s=new Set,i=0,o=0;for(t=0,e=a.length;t<e;++t){const c=a[t].element;if(c&&c.hasValue()){const h=c.tooltipPosition();s.add(h.x),i+=h.y,++o}}return o===0||s.size===0?!1:{x:[...s].reduce((c,h)=>c+h)/s.size,y:i/o}},nearest(a,t){if(!a.length)return!1;let e=t.x,s=t.y,i=Number.POSITIVE_INFINITY,o,r,c;for(o=0,r=a.length;o<r;++o){const h=a[o].element;if(h&&h.hasValue()){const d=h.getCenterPoint(),l=Da(t,d);l<i&&(i=l,c=h)}}if(c){const h=c.tooltipPosition();e=h.x,s=h.y}return{x:e,y:s}}};function dt(a,t){return t&&(z(t)?Array.prototype.push.apply(a,t):a.push(t)),a}function ft(a){return(typeof a=="string"||a instanceof String)&&a.indexOf(`
`)>-1?a.split(`
`):a}function UL(a,t){const{element:e,datasetIndex:s,index:i}=t,o=a.getDatasetMeta(s).controller,{label:r,value:c}=o.getLabelAndValue(i);return{chart:a,label:r,parsed:o.getParsed(i),raw:a.data.datasets[s].data[i],formattedValue:c,dataset:o.getDataset(),dataIndex:i,datasetIndex:s,element:e}}function X2(a,t){const e=a.chart.ctx,{body:s,footer:i,title:o}=a,{boxWidth:r,boxHeight:c}=t,h=j(t.bodyFont),d=j(t.titleFont),l=j(t.footerFont),p=o.length,g=i.length,u=s.length,f=J(t.padding);let v=f.height,m=0,M=s.reduce((b,x)=>b+x.before.length+x.lines.length+x.after.length,0);if(M+=a.beforeBody.length+a.afterBody.length,p&&(v+=p*d.lineHeight+(p-1)*t.titleSpacing+t.titleMarginBottom),M){const b=t.displayColors?Math.max(c,h.lineHeight):h.lineHeight;v+=u*b+(M-u)*h.lineHeight+(M-1)*t.bodySpacing}g&&(v+=t.footerMarginTop+g*l.lineHeight+(g-1)*t.footerSpacing);let y=0;const w=function(b){m=Math.max(m,e.measureText(b).width+y)};return e.save(),e.font=d.string,I(a.title,w),e.font=h.string,I(a.beforeBody.concat(a.afterBody),w),y=t.displayColors?r+2+t.boxPadding:0,I(s,b=>{I(b.before,w),I(b.lines,w),I(b.after,w)}),y=0,e.font=l.string,I(a.footer,w),e.restore(),m+=f.width,{width:m,height:v}}function ZL(a,t){const{y:e,height:s}=t;return e<s/2?"top":e>a.height-s/2?"bottom":"center"}function jL(a,t,e,s){const{x:i,width:o}=s,r=e.caretSize+e.caretPadding;if(a==="left"&&i+o+r>t.width||a==="right"&&i-o-r<0)return!0}function qL(a,t,e,s){const{x:i,width:o}=e,{width:r,chartArea:{left:c,right:h}}=a;let d="center";return s==="center"?d=i<=(c+h)/2?"left":"right":i<=o/2?d="left":i>=r-o/2&&(d="right"),jL(d,a,t,e)&&(d="center"),d}function K2(a,t,e){const s=e.yAlign||t.yAlign||ZL(a,e);return{xAlign:e.xAlign||t.xAlign||qL(a,t,e,s),yAlign:s}}function GL(a,t){let{x:e,width:s}=a;return t==="right"?e-=s:t==="center"&&(e-=s/2),e}function YL(a,t,e){let{y:s,height:i}=a;return t==="top"?s+=e:t==="bottom"?s-=i+e:s-=i/2,s}function Q2(a,t,e,s){const{caretSize:i,caretPadding:o,cornerRadius:r}=a,{xAlign:c,yAlign:h}=e,d=i+o,{topLeft:l,topRight:p,bottomLeft:g,bottomRight:u}=zt(r);let f=GL(t,c);const v=YL(t,h,d);return h==="center"?c==="left"?f+=d:c==="right"&&(f-=d):c==="left"?f-=Math.max(l,g)+i:c==="right"&&(f+=Math.max(p,u)+i),{x:q(f,0,s.width-t.width),y:q(v,0,s.height-t.height)}}function ze(a,t,e){const s=J(e.padding);return t==="center"?a.x+a.width/2:t==="right"?a.x+a.width-s.right:a.x+s.left}function J2(a){return dt([],ft(a))}function XL(a,t,e){return Tt(a,{tooltip:t,tooltipItems:e,type:"tooltip"})}function to(a,t){const e=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return e?a.override(e):a}const cr={beforeTitle:gt,title(a){if(a.length>0){const t=a[0],e=t.chart.data.labels,s=e?e.length:0;if(this&&this.options&&this.options.mode==="dataset")return t.dataset.label||"";if(t.label)return t.label;if(s>0&&t.dataIndex<s)return e[t.dataIndex]}return""},afterTitle:gt,beforeBody:gt,beforeLabel:gt,label(a){if(this&&this.options&&this.options.mode==="dataset")return a.label+": "+a.formattedValue||a.formattedValue;let t=a.dataset.label||"";t&&(t+=": ");const e=a.formattedValue;return P(e)||(t+=e),t},labelColor(a){const e=a.chart.getDatasetMeta(a.datasetIndex).controller.getStyle(a.dataIndex);return{borderColor:e.borderColor,backgroundColor:e.backgroundColor,borderWidth:e.borderWidth,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(a){const e=a.chart.getDatasetMeta(a.datasetIndex).controller.getStyle(a.dataIndex);return{pointStyle:e.pointStyle,rotation:e.rotation}},afterLabel:gt,afterBody:gt,beforeFooter:gt,footer:gt,afterFooter:gt};function et(a,t,e,s){const i=a[t].call(e,s);return typeof i>"u"?cr[t].call(e,s):i}class Wa extends ht{constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){const t=this._cachedAnimations;if(t)return t;const e=this.chart,s=this.options.setContext(this.getContext()),i=s.enabled&&e.options.animation&&s.animations,o=new No(this.chart,i);return i._cacheable&&(this._cachedAnimations=Object.freeze(o)),o}getContext(){return this.$context||(this.$context=XL(this.chart.getContext(),this,this._tooltipItems))}getTitle(t,e){const{callbacks:s}=e,i=et(s,"beforeTitle",this,t),o=et(s,"title",this,t),r=et(s,"afterTitle",this,t);let c=[];return c=dt(c,ft(i)),c=dt(c,ft(o)),c=dt(c,ft(r)),c}getBeforeBody(t,e){return J2(et(e.callbacks,"beforeBody",this,t))}getBody(t,e){const{callbacks:s}=e,i=[];return I(t,o=>{const r={before:[],lines:[],after:[]},c=to(s,o);dt(r.before,ft(et(c,"beforeLabel",this,o))),dt(r.lines,et(c,"label",this,o)),dt(r.after,ft(et(c,"afterLabel",this,o))),i.push(r)}),i}getAfterBody(t,e){return J2(et(e.callbacks,"afterBody",this,t))}getFooter(t,e){const{callbacks:s}=e,i=et(s,"beforeFooter",this,t),o=et(s,"footer",this,t),r=et(s,"afterFooter",this,t);let c=[];return c=dt(c,ft(i)),c=dt(c,ft(o)),c=dt(c,ft(r)),c}_createItems(t){const e=this._active,s=this.chart.data,i=[],o=[],r=[];let c=[],h,d;for(h=0,d=e.length;h<d;++h)c.push(UL(this.chart,e[h]));return t.filter&&(c=c.filter((l,p,g)=>t.filter(l,p,g,s))),t.itemSort&&(c=c.sort((l,p)=>t.itemSort(l,p,s))),I(c,l=>{const p=to(t.callbacks,l);i.push(et(p,"labelColor",this,l)),o.push(et(p,"labelPointStyle",this,l)),r.push(et(p,"labelTextColor",this,l))}),this.labelColors=i,this.labelPointStyles=o,this.labelTextColors=r,this.dataPoints=c,c}update(t,e){const s=this.options.setContext(this.getContext()),i=this._active;let o,r=[];if(!i.length)this.opacity!==0&&(o={opacity:0});else{const c=de[s.position].call(this,i,this._eventPosition);r=this._createItems(s),this.title=this.getTitle(r,s),this.beforeBody=this.getBeforeBody(r,s),this.body=this.getBody(r,s),this.afterBody=this.getAfterBody(r,s),this.footer=this.getFooter(r,s);const h=this._size=X2(this,s),d=Object.assign({},c,h),l=K2(this.chart,s,d),p=Q2(s,d,l,this.chart);this.xAlign=l.xAlign,this.yAlign=l.yAlign,o={opacity:1,x:p.x,y:p.y,width:h.width,height:h.height,caretX:c.x,caretY:c.y}}this._tooltipItems=r,this.$context=void 0,o&&this._resolveAnimations().update(this,o),t&&s.external&&s.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,s,i){const o=this.getCaretPosition(t,s,i);e.lineTo(o.x1,o.y1),e.lineTo(o.x2,o.y2),e.lineTo(o.x3,o.y3)}getCaretPosition(t,e,s){const{xAlign:i,yAlign:o}=this,{caretSize:r,cornerRadius:c}=s,{topLeft:h,topRight:d,bottomLeft:l,bottomRight:p}=zt(c),{x:g,y:u}=t,{width:f,height:v}=e;let m,M,y,w,b,x;return o==="center"?(b=u+v/2,i==="left"?(m=g,M=m-r,w=b+r,x=b-r):(m=g+f,M=m+r,w=b-r,x=b+r),y=m):(i==="left"?M=g+Math.max(h,l)+r:i==="right"?M=g+f-Math.max(d,p)-r:M=this.caretX,o==="top"?(w=u,b=w-r,m=M-r,y=M+r):(w=u+v,b=w+r,m=M+r,y=M-r),x=w),{x1:m,x2:M,x3:y,y1:w,y2:b,y3:x}}drawTitle(t,e,s){const i=this.title,o=i.length;let r,c,h;if(o){const d=Yt(s.rtl,this.x,this.width);for(t.x=ze(this,s.titleAlign,s),e.textAlign=d.textAlign(s.titleAlign),e.textBaseline="middle",r=j(s.titleFont),c=s.titleSpacing,e.fillStyle=s.titleColor,e.font=r.string,h=0;h<o;++h)e.fillText(i[h],d.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+c,h+1===o&&(t.y+=s.titleMarginBottom-c)}}_drawColorBox(t,e,s,i,o){const r=this.labelColors[s],c=this.labelPointStyles[s],{boxHeight:h,boxWidth:d}=o,l=j(o.bodyFont),p=ze(this,"left",o),g=i.x(p),u=h<l.lineHeight?(l.lineHeight-h)/2:0,f=e.y+u;if(o.usePointStyle){const v={radius:Math.min(d,h)/2,pointStyle:c.pointStyle,rotation:c.rotation,borderWidth:1},m=i.leftForLtr(g,d)+d/2,M=f+h/2;t.strokeStyle=o.multiKeyBackground,t.fillStyle=o.multiKeyBackground,Ia(t,v,m,M),t.strokeStyle=r.borderColor,t.fillStyle=r.backgroundColor,Ia(t,v,m,M)}else{t.lineWidth=V(r.borderWidth)?Math.max(...Object.values(r.borderWidth)):r.borderWidth||1,t.strokeStyle=r.borderColor,t.setLineDash(r.borderDash||[]),t.lineDashOffset=r.borderDashOffset||0;const v=i.leftForLtr(g,d),m=i.leftForLtr(i.xPlus(g,1),d-2),M=zt(r.borderRadius);Object.values(M).some(y=>y!==0)?(t.beginPath(),t.fillStyle=o.multiKeyBackground,be(t,{x:v,y:f,w:d,h,radius:M}),t.fill(),t.stroke(),t.fillStyle=r.backgroundColor,t.beginPath(),be(t,{x:m,y:f+1,w:d-2,h:h-2,radius:M}),t.fill()):(t.fillStyle=o.multiKeyBackground,t.fillRect(v,f,d,h),t.strokeRect(v,f,d,h),t.fillStyle=r.backgroundColor,t.fillRect(m,f+1,d-2,h-2))}t.fillStyle=this.labelTextColors[s]}drawBody(t,e,s){const{body:i}=this,{bodySpacing:o,bodyAlign:r,displayColors:c,boxHeight:h,boxWidth:d,boxPadding:l}=s,p=j(s.bodyFont);let g=p.lineHeight,u=0;const f=Yt(s.rtl,this.x,this.width),v=function(k){e.fillText(k,f.x(t.x+u),t.y+g/2),t.y+=g+o},m=f.textAlign(r);let M,y,w,b,x,C,A;for(e.textAlign=r,e.textBaseline="middle",e.font=p.string,t.x=ze(this,m,s),e.fillStyle=s.bodyColor,I(this.beforeBody,v),u=c&&m!=="right"?r==="center"?d/2+l:d+2+l:0,b=0,C=i.length;b<C;++b){for(M=i[b],y=this.labelTextColors[b],e.fillStyle=y,I(M.before,v),w=M.lines,c&&w.length&&(this._drawColorBox(e,t,b,f,s),g=Math.max(p.lineHeight,h)),x=0,A=w.length;x<A;++x)v(w[x]),g=p.lineHeight;I(M.after,v)}u=0,g=p.lineHeight,I(this.afterBody,v),t.y-=o}drawFooter(t,e,s){const i=this.footer,o=i.length;let r,c;if(o){const h=Yt(s.rtl,this.x,this.width);for(t.x=ze(this,s.footerAlign,s),t.y+=s.footerMarginTop,e.textAlign=h.textAlign(s.footerAlign),e.textBaseline="middle",r=j(s.footerFont),e.fillStyle=s.footerColor,e.font=r.string,c=0;c<o;++c)e.fillText(i[c],h.x(t.x),t.y+r.lineHeight/2),t.y+=r.lineHeight+s.footerSpacing}}drawBackground(t,e,s,i){const{xAlign:o,yAlign:r}=this,{x:c,y:h}=t,{width:d,height:l}=s,{topLeft:p,topRight:g,bottomLeft:u,bottomRight:f}=zt(i.cornerRadius);e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,e.lineWidth=i.borderWidth,e.beginPath(),e.moveTo(c+p,h),r==="top"&&this.drawCaret(t,e,s,i),e.lineTo(c+d-g,h),e.quadraticCurveTo(c+d,h,c+d,h+g),r==="center"&&o==="right"&&this.drawCaret(t,e,s,i),e.lineTo(c+d,h+l-f),e.quadraticCurveTo(c+d,h+l,c+d-f,h+l),r==="bottom"&&this.drawCaret(t,e,s,i),e.lineTo(c+u,h+l),e.quadraticCurveTo(c,h+l,c,h+l-u),r==="center"&&o==="left"&&this.drawCaret(t,e,s,i),e.lineTo(c,h+p),e.quadraticCurveTo(c,h,c+p,h),e.closePath(),e.fill(),i.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){const e=this.chart,s=this.$animations,i=s&&s.x,o=s&&s.y;if(i||o){const r=de[t.position].call(this,this._active,this._eventPosition);if(!r)return;const c=this._size=X2(this,t),h=Object.assign({},r,this._size),d=K2(e,t,h),l=Q2(t,h,d,e);(i._to!==l.x||o._to!==l.y)&&(this.xAlign=d.xAlign,this.yAlign=d.yAlign,this.width=c.width,this.height=c.height,this.caretX=r.x,this.caretY=r.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){const e=this.options.setContext(this.getContext());let s=this.opacity;if(!s)return;this._updateAnimationTarget(e);const i={width:this.width,height:this.height},o={x:this.x,y:this.y};s=Math.abs(s)<.001?0:s;const r=J(e.padding),c=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&c&&(t.save(),t.globalAlpha=s,this.drawBackground(o,t,i,e),Io(t,e.textDirection),o.y+=r.top,this.drawTitle(o,t,e),this.drawBody(o,t,e),this.drawFooter(o,t,e),Oo(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){const s=this._active,i=t.map(({datasetIndex:c,index:h})=>{const d=this.chart.getDatasetMeta(c);if(!d)throw new Error("Cannot find a dataset at index "+c);return{datasetIndex:c,element:d.data[h],index:h}}),o=!Je(s,i),r=this._positionChanged(i,e);(o||r)&&(this._active=i,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,s=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;const i=this.options,o=this._active||[],r=this._getActiveElements(t,o,e,s),c=this._positionChanged(r,t),h=e||!Je(r,o)||c;return h&&(this._active=r,(i.enabled||i.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),h}_getActiveElements(t,e,s,i){const o=this.options;if(t.type==="mouseout")return[];if(!i)return e.filter(c=>this.chart.data.datasets[c.datasetIndex]&&this.chart.getDatasetMeta(c.datasetIndex).controller.getParsed(c.index)!==void 0);const r=this.chart.getElementsAtEventForMode(t,o.mode,o,s);return o.reverse&&r.reverse(),r}_positionChanged(t,e){const{caretX:s,caretY:i,options:o}=this,r=de[o.position].call(this,t,e);return r!==!1&&(s!==r.x||i!==r.y)}}S(Wa,"positioners",de);var KL={id:"tooltip",_element:Wa,positioners:de,afterInit(a,t,e){e&&(a.tooltip=new Wa({chart:a,options:e}))},beforeUpdate(a,t,e){a.tooltip&&a.tooltip.initialize(e)},reset(a,t,e){a.tooltip&&a.tooltip.initialize(e)},afterDraw(a){const t=a.tooltip;if(t&&t._willRender()){const e={tooltip:t};if(a.notifyPlugins("beforeTooltipDraw",{...e,cancelable:!0})===!1)return;t.draw(a.ctx),a.notifyPlugins("afterTooltipDraw",e)}},afterEvent(a,t){if(a.tooltip){const e=t.replay;a.tooltip.handleEvent(t.event,e,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(a,t)=>t.bodyFont.size,boxWidth:(a,t)=>t.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:cr},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:a=>a!=="filter"&&a!=="itemSort"&&a!=="external",_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},QL=Object.freeze({__proto__:null,Colors:dL,Decimation:uL,Filler:EL,Legend:zL,SubTitle:$L,Title:WL,Tooltip:KL});const JL=(a,t,e,s)=>(typeof t=="string"?(e=a.push(t)-1,s.unshift({index:e,label:t})):isNaN(t)&&(e=null),e);function t_(a,t,e,s){const i=a.indexOf(t);if(i===-1)return JL(a,t,e,s);const o=a.lastIndexOf(t);return i!==o?e:i}const e_=(a,t)=>a===null?null:q(Math.round(a),0,t);function eo(a){const t=this.getLabels();return a>=0&&a<t.length?t[a]:a}class $a extends Ut{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){const e=this._addedLabels;if(e.length){const s=this.getLabels();for(const{index:i,label:o}of e)s[i]===o&&s.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if(P(t))return null;const s=this.getLabels();return e=isFinite(e)&&s[e]===t?e:t_(s,t,L(e,t),this._addedLabels),e_(e,s.length-1)}determineDataLimits(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let{min:s,max:i}=this.getMinMax(!0);this.options.bounds==="ticks"&&(t||(s=0),e||(i=this.getLabels().length-1)),this.min=s,this.max=i}buildTicks(){const t=this.min,e=this.max,s=this.options.offset,i=[];let o=this.getLabels();o=t===0&&e===o.length-1?o:o.slice(t,e+1),this._valueRange=Math.max(o.length-(s?0:1),1),this._startValue=this.min-(s?.5:0);for(let r=t;r<=e;r++)i.push({value:r});return i}getLabelForValue(t){return eo.call(this,t)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return typeof t!="number"&&(t=this.parse(t)),t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){const e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}S($a,"id","category"),S($a,"defaults",{ticks:{callback:eo}});function a_(a,t){const e=[],{bounds:i,step:o,min:r,max:c,precision:h,count:d,maxTicks:l,maxDigits:p,includeBounds:g}=a,u=o||1,f=l-1,{min:v,max:m}=t,M=!P(r),y=!P(c),w=!P(d),b=(m-v)/(p+1);let x=Xn((m-v)/f/u)*u,C,A,k,H;if(x<1e-14&&!M&&!y)return[{value:v},{value:m}];H=Math.ceil(m/x)-Math.floor(v/x),H>f&&(x=Xn(H*x/f/u)*u),P(h)||(C=Math.pow(10,h),x=Math.ceil(x*C)/C),i==="ticks"?(A=Math.floor(v/x)*x,k=Math.ceil(m/x)*x):(A=v,k=m),M&&y&&o&&GC((c-r)/o,x/1e3)?(H=Math.round(Math.min((c-r)/x,l)),x=(c-r)/H,A=r,k=c):w?(A=M?r:A,k=y?c:k,H=d-1,x=(k-A)/H):(H=(k-A)/x,ge(H,Math.round(H),x/1e3)?H=Math.round(H):H=Math.ceil(H));const _=Math.max(Kn(x),Kn(A));C=Math.pow(10,P(h)?_:h),A=Math.round(A*C)/C,k=Math.round(k*C)/C;let T=0;for(M&&(g&&A!==r?(e.push({value:r}),A<r&&T++,ge(Math.round((A+T*x)*C)/C,r,ao(r,b,a))&&T++):A<r&&T++);T<H;++T){const D=Math.round((A+T*x)*C)/C;if(y&&D>c)break;e.push({value:D})}return y&&g&&k!==c?e.length&&ge(e[e.length-1].value,c,ao(c,b,a))?e[e.length-1].value=c:e.push({value:c}):(!y||k===c)&&e.push({value:k}),e}function ao(a,t,{horizontal:e,minRotation:s}){const i=rt(s),o=(e?Math.sin(i):Math.cos(i))||.001,r=.75*t*(""+a).length;return Math.min(t/o,r)}class oa extends Ut{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return P(t)||(typeof t=="number"||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){const{beginAtZero:t}=this.options,{minDefined:e,maxDefined:s}=this.getUserBounds();let{min:i,max:o}=this;const r=h=>i=e?i:h,c=h=>o=s?o:h;if(t){const h=pt(i),d=pt(o);h<0&&d<0?c(0):h>0&&d>0&&r(0)}if(i===o){let h=o===0?1:Math.abs(o*.05);c(o+h),t||r(i-h)}this.min=i,this.max=o}getTickLimit(){const t=this.options.ticks;let{maxTicksLimit:e,stepSize:s}=t,i;return s?(i=Math.ceil(this.max/s)-Math.floor(this.min/s)+1,i>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`),i=1e3)):(i=this.computeTickLimit(),e=e||11),e&&(i=Math.min(e,i)),i}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){const t=this.options,e=t.ticks;let s=this.getTickLimit();s=Math.max(2,s);const i={maxTicks:s,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:e.includeBounds!==!1},o=this._range||this,r=a_(i,o);return t.bounds==="ticks"&&Mo(r,this,"value"),t.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){const t=this.ticks;let e=this.min,s=this.max;if(super.configure(),this.options.offset&&t.length){const i=(s-e)/Math.max(t.length-1,1)/2;e-=i,s+=i}this._startValue=e,this._endValue=s,this._valueRange=s-e}getLabelForValue(t){return ke(t,this.chart.options.locale,this.options.ticks.format)}}class Ua extends oa{determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=W(t)?t:0,this.max=W(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){const t=this.isHorizontal(),e=t?this.width:this.height,s=rt(this.options.ticks.minRotation),i=(t?Math.sin(s):Math.cos(s))||.001,o=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,o.lineHeight/i))}getPixelForValue(t){return t===null?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}S(Ua,"id","linear"),S(Ua,"defaults",{ticks:{callback:ra.formatters.numeric}});const Se=a=>Math.floor(St(a)),Ot=(a,t)=>Math.pow(10,Se(a)+t);function so(a){return a/Math.pow(10,Se(a))===1}function io(a,t,e){const s=Math.pow(10,e),i=Math.floor(a/s);return Math.ceil(t/s)-i}function s_(a,t){const e=t-a;let s=Se(e);for(;io(a,t,s)>10;)s++;for(;io(a,t,s)<10;)s--;return Math.min(s,Se(a))}function i_(a,{min:t,max:e}){t=it(a.min,t);const s=[],i=Se(t);let o=s_(t,e),r=o<0?Math.pow(10,Math.abs(o)):1;const c=Math.pow(10,o),h=i>o?Math.pow(10,i):0,d=Math.round((t-h)*r)/r,l=Math.floor((t-h)/c/10)*c*10;let p=Math.floor((d-l)/Math.pow(10,o)),g=it(a.min,Math.round((h+l+p*Math.pow(10,o))*r)/r);for(;g<e;)s.push({value:g,major:so(g),significand:p}),p>=10?p=p<15?15:20:p++,p>=20&&(o++,p=2,r=o>=0?1:r),g=Math.round((h+l+p*Math.pow(10,o))*r)/r;const u=it(a.max,g);return s.push({value:u,major:so(u),significand:p}),s}class Za extends Ut{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){const s=oa.prototype.parse.apply(this,[t,e]);if(s===0){this._zero=!0;return}return W(s)&&s>0?s:null}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!0);this.min=W(t)?Math.max(0,t):null,this.max=W(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!W(this._userMin)&&(this.min=t===Ot(this.min,0)?Ot(this.min,-1):Ot(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){const{minDefined:t,maxDefined:e}=this.getUserBounds();let s=this.min,i=this.max;const o=c=>s=t?s:c,r=c=>i=e?i:c;s===i&&(s<=0?(o(1),r(10)):(o(Ot(s,-1)),r(Ot(i,1)))),s<=0&&o(Ot(i,-1)),i<=0&&r(Ot(s,1)),this.min=s,this.max=i}buildTicks(){const t=this.options,e={min:this._userMin,max:this._userMax},s=i_(e,this);return t.bounds==="ticks"&&Mo(s,this,"value"),t.reverse?(s.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),s}getLabelForValue(t){return t===void 0?"0":ke(t,this.chart.options.locale,this.options.ticks.format)}configure(){const t=this.min;super.configure(),this._startValue=St(t),this._valueRange=St(this.max)-St(t)}getPixelForValue(t){return(t===void 0||t===0)&&(t=this.min),t===null||isNaN(t)?NaN:this.getPixelForDecimal(t===this.min?0:(St(t)-this._startValue)/this._valueRange)}getValueForPixel(t){const e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}S(Za,"id","logarithmic"),S(Za,"defaults",{ticks:{callback:ra.formatters.logarithmic,major:{enabled:!0}}});function ja(a){const t=a.ticks;if(t.display&&a.display){const e=J(t.backdropPadding);return L(t.font&&t.font.size,N.font.size)+e.height}return 0}function n_(a,t,e){return e=z(e)?e:[e],{w:lA(a,t.string,e),h:e.length*t.lineHeight}}function no(a,t,e,s,i){return a===s||a===i?{start:t-e/2,end:t+e/2}:a<s||a>i?{start:t-e,end:t}:{start:t,end:t+e}}function o_(a){const t={l:a.left+a._padding.left,r:a.right-a._padding.right,t:a.top+a._padding.top,b:a.bottom-a._padding.bottom},e=Object.assign({},t),s=[],i=[],o=a._pointLabels.length,r=a.options.pointLabels,c=r.centerPointLabels?E/o:0;for(let h=0;h<o;h++){const d=r.setContext(a.getPointLabelContext(h));i[h]=d.padding;const l=a.getPointPosition(h,a.drawingArea+i[h],c),p=j(d.font),g=n_(a.ctx,p,a._pointLabels[h]);s[h]=g;const u=K(a.getIndexAngle(h)+c),f=Math.round(Qa(u)),v=no(f,l.x,g.w,0,180),m=no(f,l.y,g.h,90,270);r_(e,t,u,v,m)}a.setCenterPoint(t.l-e.l,e.r-t.r,t.t-e.t,e.b-t.b),a._pointLabelItems=d_(a,s,i)}function r_(a,t,e,s,i){const o=Math.abs(Math.sin(e)),r=Math.abs(Math.cos(e));let c=0,h=0;s.start<t.l?(c=(t.l-s.start)/o,a.l=Math.min(a.l,t.l-c)):s.end>t.r&&(c=(s.end-t.r)/o,a.r=Math.max(a.r,t.r+c)),i.start<t.t?(h=(t.t-i.start)/r,a.t=Math.min(a.t,t.t-h)):i.end>t.b&&(h=(i.end-t.b)/r,a.b=Math.max(a.b,t.b+h))}function c_(a,t,e){const s=a.drawingArea,{extra:i,additionalAngle:o,padding:r,size:c}=e,h=a.getPointPosition(t,s+i+r,o),d=Math.round(Qa(K(h.angle+U))),l=g_(h.y,c.h,d),p=l_(d),g=p_(h.x,c.w,p);return{visible:!0,x:h.x,y:l,textAlign:p,left:g,top:l,right:g+c.w,bottom:l+c.h}}function h_(a,t){if(!t)return!0;const{left:e,top:s,right:i,bottom:o}=a;return!(xt({x:e,y:s},t)||xt({x:e,y:o},t)||xt({x:i,y:s},t)||xt({x:i,y:o},t))}function d_(a,t,e){const s=[],i=a._pointLabels.length,o=a.options,{centerPointLabels:r,display:c}=o.pointLabels,h={extra:ja(o)/2,additionalAngle:r?E/i:0};let d;for(let l=0;l<i;l++){h.padding=e[l],h.size=t[l];const p=c_(a,l,h);s.push(p),c==="auto"&&(p.visible=h_(p,d),p.visible&&(d=p))}return s}function l_(a){return a===0||a===180?"center":a<180?"left":"right"}function p_(a,t,e){return e==="right"?a-=t:e==="center"&&(a-=t/2),a}function g_(a,t,e){return e===90||e===270?a-=t/2:(e>270||e<90)&&(a-=t),a}function u_(a,t,e){const{left:s,top:i,right:o,bottom:r}=e,{backdropColor:c}=t;if(!P(c)){const h=zt(t.borderRadius),d=J(t.backdropPadding);a.fillStyle=c;const l=s-d.left,p=i-d.top,g=o-s+d.width,u=r-i+d.height;Object.values(h).some(f=>f!==0)?(a.beginPath(),be(a,{x:l,y:p,w:g,h:u,radius:h}),a.fill()):a.fillRect(l,p,g,u)}}function f_(a,t){const{ctx:e,options:{pointLabels:s}}=a;for(let i=t-1;i>=0;i--){const o=a._pointLabelItems[i];if(!o.visible)continue;const r=s.setContext(a.getPointLabelContext(i));u_(e,r,o);const c=j(r.font),{x:h,y:d,textAlign:l}=o;$t(e,a._pointLabels[i],h,d+c.lineHeight/2,c,{color:r.color,textAlign:l,textBaseline:"middle"})}}function hr(a,t,e,s){const{ctx:i}=a;if(e)i.arc(a.xCenter,a.yCenter,t,0,B);else{let o=a.getPointPosition(0,t);i.moveTo(o.x,o.y);for(let r=1;r<s;r++)o=a.getPointPosition(r,t),i.lineTo(o.x,o.y)}}function v_(a,t,e,s,i){const o=a.ctx,r=t.circular,{color:c,lineWidth:h}=t;!r&&!s||!c||!h||e<0||(o.save(),o.strokeStyle=c,o.lineWidth=h,o.setLineDash(i.dash||[]),o.lineDashOffset=i.dashOffset,o.beginPath(),hr(a,e,r,s),o.closePath(),o.stroke(),o.restore())}function m_(a,t,e){return Tt(a,{label:e,index:t,type:"pointLabel"})}class le extends oa{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){const t=this._padding=J(ja(this.options)/2),e=this.width=this.maxWidth-t.width,s=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+s/2+t.top),this.drawingArea=Math.floor(Math.min(e,s)/2)}determineDataLimits(){const{min:t,max:e}=this.getMinMax(!1);this.min=W(t)&&!isNaN(t)?t:0,this.max=W(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/ja(this.options))}generateTickLabels(t){oa.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((e,s)=>{const i=R(this.options.pointLabels.callback,[e,s],this);return i||i===0?i:""}).filter((e,s)=>this.chart.getDataVisibility(s))}fit(){const t=this.options;t.display&&t.pointLabels.display?o_(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,s,i){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((s-i)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,s,i))}getIndexAngle(t){const e=B/(this._pointLabels.length||1),s=this.options.startAngle||0;return K(t*e+rt(s))}getDistanceFromCenterForValue(t){if(P(t))return NaN;const e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if(P(t))return NaN;const e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){const e=this._pointLabels||[];if(t>=0&&t<e.length){const s=e[t];return m_(this.getContext(),t,s)}}getPointPosition(t,e,s=0){const i=this.getIndexAngle(t)-U+s;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter,angle:i}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){const{left:e,top:s,right:i,bottom:o}=this._pointLabelItems[t];return{left:e,top:s,right:i,bottom:o}}drawBackground(){const{backgroundColor:t,grid:{circular:e}}=this.options;if(t){const s=this.ctx;s.save(),s.beginPath(),hr(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),s.closePath(),s.fillStyle=t,s.fill(),s.restore()}}drawGrid(){const t=this.ctx,e=this.options,{angleLines:s,grid:i,border:o}=e,r=this._pointLabels.length;let c,h,d;if(e.pointLabels.display&&f_(this,r),i.display&&this.ticks.forEach((l,p)=>{if(p!==0||p===0&&this.min<0){h=this.getDistanceFromCenterForValue(l.value);const g=this.getContext(p),u=i.setContext(g),f=o.setContext(g);v_(this,u,h,r,f)}}),s.display){for(t.save(),c=r-1;c>=0;c--){const l=s.setContext(this.getPointLabelContext(c)),{color:p,lineWidth:g}=l;!g||!p||(t.lineWidth=g,t.strokeStyle=p,t.setLineDash(l.borderDash),t.lineDashOffset=l.borderDashOffset,h=this.getDistanceFromCenterForValue(e.reverse?this.min:this.max),d=this.getPointPosition(c,h),t.beginPath(),t.moveTo(this.xCenter,this.yCenter),t.lineTo(d.x,d.y),t.stroke())}t.restore()}}drawBorder(){}drawLabels(){const t=this.ctx,e=this.options,s=e.ticks;if(!s.display)return;const i=this.getIndexAngle(0);let o,r;t.save(),t.translate(this.xCenter,this.yCenter),t.rotate(i),t.textAlign="center",t.textBaseline="middle",this.ticks.forEach((c,h)=>{if(h===0&&this.min>=0&&!e.reverse)return;const d=s.setContext(this.getContext(h)),l=j(d.font);if(o=this.getDistanceFromCenterForValue(this.ticks[h].value),d.showLabelBackdrop){t.font=l.string,r=t.measureText(c.label).width,t.fillStyle=d.backdropColor;const p=J(d.backdropPadding);t.fillRect(-r/2-p.left,-o-l.size/2-p.top,r+p.width,l.size+p.height)}$t(t,c.label,0,-o,l,{color:d.color,strokeColor:d.textStrokeColor,strokeWidth:d.textStrokeWidth})}),t.restore()}drawTitle(){}}S(le,"id","radialLinear"),S(le,"defaults",{display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:ra.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(t){return t},padding:5,centerPointLabels:!1}}),S(le,"defaultRoutes",{"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"}),S(le,"descriptors",{angleLines:{_fallback:"grid"}});const ga={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},at=Object.keys(ga);function oo(a,t){return a-t}function ro(a,t){if(P(t))return null;const e=a._adapter,{parser:s,round:i,isoWeekday:o}=a._parseOpts;let r=t;return typeof s=="function"&&(r=s(r)),W(r)||(r=typeof s=="string"?e.parse(r,s):e.parse(r)),r===null?null:(i&&(r=i==="week"&&(Xt(o)||o===!0)?e.startOf(r,"isoWeek",o):e.startOf(r,i)),+r)}function co(a,t,e,s){const i=at.length;for(let o=at.indexOf(a);o<i-1;++o){const r=ga[at[o]],c=r.steps?r.steps:Number.MAX_SAFE_INTEGER;if(r.common&&Math.ceil((e-t)/(c*r.size))<=s)return at[o]}return at[i-1]}function M_(a,t,e,s,i){for(let o=at.length-1;o>=at.indexOf(e);o--){const r=at[o];if(ga[r].common&&a._adapter.diff(i,s,r)>=t-1)return r}return at[e?at.indexOf(e):0]}function y_(a){for(let t=at.indexOf(a)+1,e=at.length;t<e;++t)if(ga[at[t]].common)return at[t]}function ho(a,t,e){if(!e)a[t]=!0;else if(e.length){const{lo:s,hi:i}=Ja(e,t),o=e[s]>=t?e[s]:e[i];a[o]=!0}}function x_(a,t,e,s){const i=a._adapter,o=+i.startOf(t[0].value,s),r=t[t.length-1].value;let c,h;for(c=o;c<=r;c=+i.add(c,1,s))h=e[c],h>=0&&(t[h].major=!0);return t}function lo(a,t,e){const s=[],i={},o=t.length;let r,c;for(r=0;r<o;++r)c=t[r],i[c]=r,s.push({value:c,major:!1});return o===0||!e?s:x_(a,s,i,e)}class Ce extends Ut{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e={}){const s=t.time||(t.time={}),i=this._adapter=new Lk._date(t.adapters.date);i.init(e),pe(s.displayFormats,i.formats()),this._parseOpts={parser:s.parser,round:s.round,isoWeekday:s.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return t===void 0?null:ro(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){const t=this.options,e=this._adapter,s=t.time.unit||"day";let{min:i,max:o,minDefined:r,maxDefined:c}=this.getUserBounds();function h(d){!r&&!isNaN(d.min)&&(i=Math.min(i,d.min)),!c&&!isNaN(d.max)&&(o=Math.max(o,d.max))}(!r||!c)&&(h(this._getLabelBounds()),(t.bounds!=="ticks"||t.ticks.source!=="labels")&&h(this.getMinMax(!1))),i=W(i)&&!isNaN(i)?i:+e.startOf(Date.now(),s),o=W(o)&&!isNaN(o)?o:+e.endOf(Date.now(),s)+1,this.min=Math.min(i,o-1),this.max=Math.max(i+1,o)}_getLabelBounds(){const t=this.getLabelTimestamps();let e=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],s=t[t.length-1]),{min:e,max:s}}buildTicks(){const t=this.options,e=t.time,s=t.ticks,i=s.source==="labels"?this.getLabelTimestamps():this._generate();t.bounds==="ticks"&&i.length&&(this.min=this._userMin||i[0],this.max=this._userMax||i[i.length-1]);const o=this.min,r=this.max,c=QC(i,o,r);return this._unit=e.unit||(s.autoSkip?co(e.minUnit,this.min,this.max,this._getLabelCapacity(o)):M_(this,c.length,e.minUnit,this.min,this.max)),this._majorUnit=!s.major.enabled||this._unit==="year"?void 0:y_(this._unit),this.initOffsets(i),t.reverse&&c.reverse(),lo(this,c,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t=[]){let e=0,s=0,i,o;this.options.offset&&t.length&&(i=this.getDecimalForValue(t[0]),t.length===1?e=1-i:e=(this.getDecimalForValue(t[1])-i)/2,o=this.getDecimalForValue(t[t.length-1]),t.length===1?s=o:s=(o-this.getDecimalForValue(t[t.length-2]))/2);const r=t.length<3?.5:.25;e=q(e,0,r),s=q(s,0,r),this._offsets={start:e,end:s,factor:1/(e+1+s)}}_generate(){const t=this._adapter,e=this.min,s=this.max,i=this.options,o=i.time,r=o.unit||co(o.minUnit,e,s,this._getLabelCapacity(e)),c=L(i.ticks.stepSize,1),h=r==="week"?o.isoWeekday:!1,d=Xt(h)||h===!0,l={};let p=e,g,u;if(d&&(p=+t.startOf(p,"isoWeek",h)),p=+t.startOf(p,d?"day":r),t.diff(s,e,r)>1e5*c)throw new Error(e+" and "+s+" are too far apart with stepSize of "+c+" "+r);const f=i.ticks.source==="data"&&this.getDataTimestamps();for(g=p,u=0;g<s;g=+t.add(g,c,r),u++)ho(l,g,f);return(g===s||i.bounds==="ticks"||u===1)&&ho(l,g,f),Object.keys(l).sort(oo).map(v=>+v)}getLabelForValue(t){const e=this._adapter,s=this.options.time;return s.tooltipFormat?e.format(t,s.tooltipFormat):e.format(t,s.displayFormats.datetime)}format(t,e){const i=this.options.time.displayFormats,o=this._unit,r=e||i[o];return this._adapter.format(t,r)}_tickFormatFunction(t,e,s,i){const o=this.options,r=o.ticks.callback;if(r)return R(r,[t,e,s],this);const c=o.time.displayFormats,h=this._unit,d=this._majorUnit,l=h&&c[h],p=d&&c[d],g=s[e],u=d&&p&&g&&g.major;return this._adapter.format(t,i||(u?p:l))}generateTickLabels(t){let e,s,i;for(e=0,s=t.length;e<s;++e)i=t[e],i.label=this._tickFormatFunction(i.value,e,t)}getDecimalForValue(t){return t===null?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){const e=this._offsets,s=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+s)*e.factor)}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+s*(this.max-this.min)}_getLabelSize(t){const e=this.options.ticks,s=this.ctx.measureText(t).width,i=rt(this.isHorizontal()?e.maxRotation:e.minRotation),o=Math.cos(i),r=Math.sin(i),c=this._resolveTickFontOptions(0).size;return{w:s*o+c*r,h:s*r+c*o}}_getLabelCapacity(t){const e=this.options.time,s=e.displayFormats,i=s[e.unit]||s.millisecond,o=this._tickFormatFunction(t,0,lo(this,[t],this._majorUnit),i),r=this._getLabelSize(o),c=Math.floor(this.isHorizontal()?this.width/r.w:this.height/r.h)-1;return c>0?c:1}getDataTimestamps(){let t=this._cache.data||[],e,s;if(t.length)return t;const i=this.getMatchingVisibleMetas();if(this._normalized&&i.length)return this._cache.data=i[0].controller.getAllParsedValues(this);for(e=0,s=i.length;e<s;++e)t=t.concat(i[e].controller.getAllParsedValues(this));return this._cache.data=this.normalize(t)}getLabelTimestamps(){const t=this._cache.labels||[];let e,s;if(t.length)return t;const i=this.getLabels();for(e=0,s=i.length;e<s;++e)t.push(ro(this,i[e]));return this._cache.labels=this._normalized?t:this.normalize(t)}normalize(t){return bo(t.sort(oo))}}S(Ce,"id","time"),S(Ce,"defaults",{bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",callback:!1,major:{enabled:!1}}});function Ne(a,t,e){let s=0,i=a.length-1,o,r,c,h;e?(t>=a[s].pos&&t<=a[i].pos&&({lo:s,hi:i}=yt(a,"pos",t)),{pos:o,time:c}=a[s],{pos:r,time:h}=a[i]):(t>=a[s].time&&t<=a[i].time&&({lo:s,hi:i}=yt(a,"time",t)),{time:o,pos:c}=a[s],{time:r,pos:h}=a[i]);const d=r-o;return d?c+(h-c)*(t-o)/d:c}class qa extends Ce{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){const t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=Ne(e,this.min),this._tableRange=Ne(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){const{min:e,max:s}=this,i=[],o=[];let r,c,h,d,l;for(r=0,c=t.length;r<c;++r)d=t[r],d>=e&&d<=s&&i.push(d);if(i.length<2)return[{time:e,pos:0},{time:s,pos:1}];for(r=0,c=i.length;r<c;++r)l=i[r+1],h=i[r-1],d=i[r],Math.round((l+h)/2)!==d&&o.push({time:d,pos:r/(c-1)});return o}_generate(){const t=this.min,e=this.max;let s=super.getDataTimestamps();return(!s.includes(t)||!s.length)&&s.splice(0,0,t),(!s.includes(e)||s.length===1)&&s.push(e),s.sort((i,o)=>i-o)}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;const e=this.getDataTimestamps(),s=this.getLabelTimestamps();return e.length&&s.length?t=this.normalize(e.concat(s)):t=e.length?e:s,t=this._cache.all=t,t}getDecimalForValue(t){return(Ne(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){const e=this._offsets,s=this.getDecimalForPixel(t)/e.factor-e.end;return Ne(this._table,s*this._tableRange+this._minPos,!0)}}S(qa,"id","timeseries"),S(qa,"defaults",Ce.defaults);var b_=Object.freeze({__proto__:null,CategoryScale:$a,LinearScale:Ua,LogarithmicScale:Za,RadialLinearScale:le,TimeScale:Ce,TimeSeriesScale:qa});const w_=[Hk,sL,QL,b_];mt.register(...w_);class S_{constructor(){this.logsKey="shield_analytics_logs_v1",this.sessionKey="shield_session_id",this.initSession(),this.chartInstance=null}initSession(){localStorage.getItem(this.sessionKey)||localStorage.setItem(this.sessionKey,"SES-"+Math.random().toString(36).substring(2,9).toUpperCase())}getSessionId(){return localStorage.getItem(this.sessionKey)||"SES-GUEST"}getLogs(){try{return JSON.parse(localStorage.getItem(this.logsKey))||[]}catch{return[]}}track(t,e,s="",i={}){const o=new Date().toISOString(),r=this.getSessionId(),c={id:"EVT-"+Math.random().toString(36).substring(2,8),timestamp:o,sessionId:r,eventName:t,category:e,label:s,details:i},h=this.getLogs();h.unshift(c),h.length>200&&h.pop(),localStorage.setItem(this.logsKey,JSON.stringify(h)),window.gtag&&window.gtag("event",t,{event_category:e,event_label:s,value:1,...i}),console.log(`[SHIELD Analytics] ${e} -> ${t}: ${s}`)}getStats(){const t=this.getLogs(),e=t.length,s=t.filter(c=>c.category==="Pageview").length,i=t.filter(c=>c.category==="Registration").length,o=t.filter(c=>c.category==="Resource").length,r={};return t.filter(c=>c.category==="Pageview").forEach(c=>{r[c.label]=(r[c.label]||0)+1}),{totalEvents:e,pageviews:Math.max(s,42),eventRegistrations:Math.max(i,18),resourceDownloads:Math.max(o,29),pageCounts:r}}renderChart(t){if(!t)return;const e=this.getStats(),s=Object.keys(e.pageCounts).length>0?Object.keys(e.pageCounts):["Home","Events","Projects","Team","About","Contact","Blog"],i=Object.keys(e.pageCounts).length>0?Object.values(e.pageCounts):[28,19,15,12,10,8,7];this.chartInstance&&this.chartInstance.destroy();const o=t.getContext("2d");this.chartInstance=new mt(o,{type:"bar",data:{labels:s,datasets:[{label:"Page Views / Interactions",data:i,backgroundColor:"rgba(0, 243, 255, 0.6)",borderColor:"#00f3ff",borderWidth:1.5,borderRadius:6}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{labels:{color:"#94a3b8",font:{family:"Inter"}}}},scales:{x:{ticks:{color:"#94a3b8",font:{family:"Inter"}},grid:{color:"rgba(30, 41, 59, 0.5)"}},y:{beginAtZero:!0,ticks:{color:"#94a3b8",font:{family:"Inter"}},grid:{color:"rgba(30, 41, 59, 0.5)"}}}}})}}const We=new S_;class C_{constructor(){this.currentSection="home",this.teamFilter="All",this.eventsFilter="All",this.eventsViewMode="list",this.projectsFilter="All",this.projectsSearch="",this.blogFilter="All",this.galleryFilter="All",this.faqSearch="",this.learningSearch="",this.learningDifficultyFilter="All",this.glossarySearch="",this.selectedQuizAnswers={},this.selectedEventForRegistration=null,this.activeArticle=null,this.lightboxIndex=0}init(){this.renderHeader(),this.renderFooter(),this.setupNavigation(),this.initCanvas(),this.handleRoute(),this.setupGlobalEventListeners(),this.injectGlobalSchema(),this.refreshIcons(),We.track("pageview","Pageview","init")}refreshIcons(){setTimeout(()=>{sC({icons:aC})},50)}initCanvas(){uC("cyber-canvas")}injectGlobalSchema(){const t={"@context":"https://schema.org","@type":"EducationalOrganization",name:Z.name,alternateName:Z.shortName,url:window.location.href,logo:"https://shield-nith.ac.in/logo.png",description:Z.tagline,address:{"@type":"PostalAddress",addressLocality:"Hamirpur",addressRegion:"Himachal Pradesh",postalCode:"177005",addressCountry:"IN"},parentOrganization:{"@type":"CollegeOrUniversity",name:Z.institution}},e=document.createElement("script");e.type="application/ld+json",e.text=JSON.stringify(t),document.head.appendChild(e)}setupNavigation(){window.addEventListener("hashchange",()=>{this.handleRoute()})}handleRoute(){const e=(window.location.hash.replace("#","")||"home").split("/").filter(Boolean),s=e[0]||"home",i=e.slice(1).join("/");this.navigateTo(s,i,!1)}navigateTo(t,e="",s=!0){const o=["home","about","team","events","projects","blog","gallery","sponsors","faq","contact","learning"].includes(t)?t:"home";this.currentSection=o,document.querySelectorAll(".nav-link").forEach(c=>{var d;((d=c.getAttribute("href"))==null?void 0:d.replace("#","").split("/")[0])===o?(c.classList.add("text-cyber-cyan","border-b-2","border-cyber-cyan"),c.classList.remove("text-cyber-muted")):(c.classList.remove("text-cyber-cyan","border-b-2","border-cyber-cyan"),c.classList.add("text-cyber-muted"))});const r=document.getElementById("mobile-menu");if(r&&!r.classList.contains("hidden")){r.classList.add("hidden");const c=document.getElementById("mobile-menu-toggle");c&&c.setAttribute("aria-expanded","false")}if(s){const c=e?`${o}/${e}`:o;window.location.hash=c}this.renderSection(o,e),window.scrollTo({top:0,behavior:"smooth"}),We.track("pageview","Pageview",e?`${o}/${e}`:o)}renderHeader(){const t=document.getElementById("app-header");if(!t)return;t.innerHTML=`
      <header class="sticky top-0 z-40 w-full border-b border-cyber-cardBorder/60 bg-cyber-bg/90 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <!-- Logo -->
          <a href="#home" class="flex items-center space-x-3 group cursor-pointer focus:outline-none" aria-label="SHIELD NITH Homepage">
            <div class="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center group-hover:border-cyber-cyan group-hover:shadow-neon-cyan transition-all duration-300">
              <i data-lucide="shield" class="w-6 h-6 text-cyber-cyan group-hover:scale-110 transition-transform"></i>
            </div>
            <div>
              <span class="font-display font-bold text-xl tracking-wide text-white group-hover:text-cyber-cyan transition-colors">SHIELD</span>
              <span class="block text-[10px] font-mono text-cyber-teal tracking-widest uppercase">NIT HAMIRPUR</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-5 text-sm font-medium" aria-label="Main Navigation">
            <a href="#home" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="home">Home</a>
            <a href="#about" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="about">About</a>
            <a href="#team" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="team">Team</a>
            <a href="#events" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="events">Events</a>
            <a href="#projects" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="projects">Projects</a>
            <a href="#learning" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan text-cyber-cyan font-semibold flex items-center space-x-1" data-section="learning">
              <i data-lucide="book-open" class="w-4 h-4 text-cyber-cyan mr-1 inline"></i>
              <span>Learning</span>
            </a>
            <a href="#blog" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="blog">Blog</a>
            <a href="#gallery" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="gallery">Gallery</a>
            <a href="#faq" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="faq">FAQ</a>
            <a href="#contact" class="nav-link py-2 px-1 transition-colors hover:text-cyber-cyan" data-section="contact">Contact</a>
          </nav>

          <!-- CTAs & Analytics Trigger -->
          <div class="hidden lg:flex items-center space-x-3">
            <button id="open-analytics-btn" class="btn-cyber-outline text-xs px-3 py-1.5 flex items-center space-x-2" title="View Live Site Analytics Dashboard">
              <i data-lucide="bar-chart-3" class="w-4 h-4 text-cyber-cyan"></i>
              <span>Analytics</span>
            </button>
            <a href="#faq" id="join-header-btn" class="btn-cyber-primary text-xs px-4 py-2 flex items-center space-x-2">
              <i data-lucide="user-plus" class="w-4 h-4"></i>
              <span>Join SHIELD</span>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex md:hidden items-center space-x-3">
            <button id="open-analytics-mobile" class="p-2 text-cyber-cyan border border-cyber-cardBorder rounded-md" aria-label="Open Analytics">
              <i data-lucide="bar-chart-3" class="w-5 h-5"></i>
            </button>
            <button id="mobile-menu-toggle" class="p-2 text-cyber-muted hover:text-white rounded-md border border-cyber-cardBorder focus:outline-none focus:ring-2 focus:ring-cyber-cyan" aria-expanded="false" aria-controls="mobile-menu" aria-label="Toggle navigation menu">
              <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Menu Dropdown -->
        <div id="mobile-menu" class="hidden md:hidden border-b border-cyber-cardBorder bg-cyber-bg/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3">
          <a href="#home" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Home</a>
          <a href="#about" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">About</a>
          <a href="#team" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Team</a>
          <a href="#events" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Events</a>
          <a href="#projects" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Projects</a>
          <a href="#learning" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-cyan font-bold">Learning Hub</a>
          <a href="#blog" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Blog</a>
          <a href="#gallery" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Gallery</a>
          <a href="#sponsors" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Sponsors</a>
          <a href="#faq" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Membership & FAQ</a>
          <a href="#contact" class="mobile-nav-link block py-2 px-3 rounded-md hover:bg-cyber-cardHover text-cyber-text">Contact</a>
          <div class="pt-2">
            <a href="#faq" class="btn-cyber-primary w-full text-center py-2.5 text-xs">Join SHIELD Society</a>
          </div>
        </div>
      </header>
    `;const e=document.getElementById("mobile-menu-toggle"),s=document.getElementById("mobile-menu");e&&s&&e.addEventListener("click",()=>{const r=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",(!r).toString()),s.classList.toggle("hidden")});const i=document.getElementById("open-analytics-btn"),o=document.getElementById("open-analytics-mobile");i&&i.addEventListener("click",()=>this.openAnalyticsModal()),o&&o.addEventListener("click",()=>this.openAnalyticsModal())}renderFooter(){const t=document.getElementById("app-footer");t&&(t.innerHTML=`
      <footer class="border-t border-cyber-cardBorder bg-cyber-bg text-cyber-muted pt-16 pb-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
            
            <!-- Col 1: Brand & Tagline -->
            <div class="space-y-4 md:col-span-1">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-md bg-cyber-cyan/10 border border-cyber-cyan/40 flex items-center justify-center">
                  <i data-lucide="shield" class="w-5 h-5 text-cyber-cyan"></i>
                </div>
                <span class="font-display font-bold text-lg text-white">SHIELD</span>
              </div>
              <p class="text-sm leading-relaxed text-cyber-muted">
                Official Cybersecurity Society of NIT Hamirpur. Empowering students with offensive and defensive security research, CTF training, and bug bounty skills.
              </p>
              <div class="flex items-center space-x-3 pt-2">
                <a href="${Z.github}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-md border border-cyber-cardBorder hover:border-cyber-cyan hover:text-cyber-cyan transition-colors" aria-label="GitHub">
                  <i data-lucide="github" class="w-4 h-4"></i>
                </a>
                <a href="${Z.discord}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-md border border-cyber-cardBorder hover:border-cyber-cyan hover:text-cyber-cyan transition-colors" aria-label="Discord">
                  <i data-lucide="message-square" class="w-4 h-4"></i>
                </a>
                <a href="${Z.linkedin}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-md border border-cyber-cardBorder hover:border-cyber-cyan hover:text-cyber-cyan transition-colors" aria-label="LinkedIn">
                  <i data-lucide="linkedin" class="w-4 h-4"></i>
                </a>
                <a href="${Z.twitter}" target="_blank" rel="noopener noreferrer" class="p-2 rounded-md border border-cyber-cardBorder hover:border-cyber-cyan hover:text-cyber-cyan transition-colors" aria-label="Twitter X">
                  <i data-lucide="twitter" class="w-4 h-4"></i>
                </a>
              </div>
            </div>

            <!-- Col 2: Navigation Links -->
            <div>
              <h3 class="font-mono text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
              <ul class="space-y-2.5 text-sm">
                <li><a href="#about" class="hover:text-cyber-cyan transition-colors">About Us</a></li>
                <li><a href="#learning" class="hover:text-cyber-cyan transition-colors text-cyber-cyan">Learning Hub</a></li>
                <li><a href="#team" class="hover:text-cyber-cyan transition-colors">Executive Team</a></li>
                <li><a href="#events" class="hover:text-cyber-cyan transition-colors">CTFs & Workshops</a></li>
                <li><a href="#projects" class="hover:text-cyber-cyan transition-colors">Lab Tools & Resources</a></li>
                <li><a href="#blog" class="hover:text-cyber-cyan transition-colors">Blog & Advisories</a></li>
              </ul>
            </div>

            <!-- Col 3: Society Pillars -->
            <div>
              <h3 class="font-mono text-sm font-semibold text-white uppercase tracking-wider mb-4">Learning Tracks</h3>
              <ul class="space-y-2.5 text-sm">
                <li><a href="#learning/network-security" class="hover:text-cyber-cyan flex items-center space-x-2"><i data-lucide="network" class="w-3.5 h-3.5 text-cyber-cyan"></i><span>Network Security</span></a></li>
                <li><a href="#learning/web-security" class="hover:text-cyber-cyan flex items-center space-x-2"><i data-lucide="globe" class="w-3.5 h-3.5 text-cyber-teal"></i><span>Web Security</span></a></li>
                <li><a href="#learning/cryptography" class="hover:text-cyber-cyan flex items-center space-x-2"><i data-lucide="key-round" class="w-3.5 h-3.5 text-cyber-purple"></i><span>Cryptography</span></a></li>
                <li><a href="#learning/linux-security" class="hover:text-cyber-cyan flex items-center space-x-2"><i data-lucide="terminal" class="w-3.5 h-3.5 text-cyber-cyan"></i><span>Linux & Systems</span></a></li>
                <li><a href="#learning/cheatsheets" class="hover:text-cyber-cyan flex items-center space-x-2"><i data-lucide="file-text" class="w-3.5 h-3.5 text-cyber-red"></i><span>Security Cheatsheets</span></a></li>
              </ul>
            </div>

            <!-- Col 4: Campus Location -->
            <div>
              <h3 class="font-mono text-sm font-semibold text-white uppercase tracking-wider mb-4">Campus Location</h3>
              <address class="not-italic text-sm space-y-2 text-cyber-muted">
                <p class="flex items-start space-x-2">
                  <i data-lucide="map-pin" class="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5"></i>
                  <span>${Z.location}</span>
                </p>
                <p class="flex items-center space-x-2">
                  <i data-lucide="mail" class="w-4 h-4 text-cyber-teal shrink-0"></i>
                  <a href="mailto:${Z.email}" class="hover:text-white">${Z.email}</a>
                </p>
              </address>
              <div class="mt-4 pt-4 border-t border-cyber-cardBorder">
                <span class="inline-flex items-center space-x-2 text-xs font-mono text-cyber-teal">
                  <span class="w-2 h-2 rounded-full bg-cyber-teal animate-ping"></span>
                  <span>NIT Hamirpur Recognized Society</span>
                </span>
              </div>
            </div>

          </div>

          <div class="mt-12 pt-6 border-t border-cyber-cardBorder/60 flex flex-col md:flex-row items-center justify-between text-xs text-cyber-muted">
            <p>© 2026 SHIELD Cybersecurity Society, NIT Hamirpur. All rights reserved.</p>
            <p class="mt-2 md:mt-0 font-mono">Designed for WCAG 2.1 AA Accessibility & Security</p>
          </div>
        </div>
      </footer>
    `)}renderSection(t,e=""){const s=document.getElementById("app-main");if(s){if(t==="learning"){this.renderLearningSection(s,e),this.refreshIcons();return}switch(t){case"home":s.innerHTML=this.getHomeHTML();break;case"about":s.innerHTML=this.getAboutHTML();break;case"team":s.innerHTML=this.getTeamHTML(),this.bindTeamEvents();break;case"events":s.innerHTML=this.getEventsHTML(),this.bindEventsListeners();break;case"projects":s.innerHTML=this.getProjectsHTML(),this.bindProjectsListeners();break;case"blog":s.innerHTML=this.getBlogHTML(),this.bindBlogListeners();break;case"gallery":s.innerHTML=this.getGalleryHTML(),this.bindGalleryListeners();break;case"sponsors":s.innerHTML=this.getSponsorsHTML(),this.bindSponsorsListeners();break;case"faq":s.innerHTML=this.getFAQHTML(),this.bindFAQListeners();break;case"contact":s.innerHTML=this.getContactHTML(),this.bindContactListeners();break;default:s.innerHTML=this.getHomeHTML()}this.refreshIcons()}}renderLearningSection(t,e){if(!e||e===""||e==="hub"){t.innerHTML=this.getLearningHubHTML(),this.bindLearningHubListeners();return}if(e==="my-learning"){t.innerHTML=this.getMyLearningHTML(),this.bindMyLearningListeners();return}if(e==="glossary"){t.innerHTML=this.getGlossaryHTML(),this.bindGlossaryListeners();return}if(e==="cheatsheets"){t.innerHTML=this.getCheatsheetsHTML(),this.bindCheatsheetsListeners();return}if(e==="tools"){t.innerHTML=this.getToolsHTML();return}if(e==="commands"){t.innerHTML=this.getCommandsHTML();return}const s=e.split("/"),i=s[0],o=s[1];o?(t.innerHTML=this.getLessonLayoutHTML(i,o),this.bindLessonListeners(i,o)):(t.innerHTML=this.getLearningDomainHTML(i),this.bindDomainPageListeners(i))}getLearningHubHTML(){let t=$e;if(this.learningDifficultyFilter!=="All"&&(t=t.filter(e=>e.difficulty.includes(this.learningDifficultyFilter))),this.learningSearch.trim()!==""){const e=this.learningSearch.toLowerCase();t=t.filter(s=>s.title.toLowerCase().includes(e)||s.description.toLowerCase().includes(e))}return`
      <div class="space-y-16 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Hero Header -->
        <section class="text-center max-w-4xl mx-auto space-y-6">
          <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono">
            <i data-lucide="graduation-cap" class="w-4 h-4"></i>
            <span>STRUCTURED CYBERSECURITY EDUCATION PLATFORM</span>
          </div>

          <h1 class="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            CYBERSECURITY<br />
            <span class="bg-gradient-to-r from-cyber-cyan via-cyber-teal to-blue-400 bg-clip-text text-transparent">
              LEARNING HUB
            </span>
          </h1>

          <p class="text-base sm:text-lg text-cyber-muted max-w-2xl mx-auto leading-relaxed">
            Learn cybersecurity from fundamentals to advanced security concepts through structured theory, practical labs, tools, and challenges.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a href="#learning/network-security" class="btn-cyber-primary text-xs px-6 py-3">
              <i data-lucide="play" class="w-4 h-4 mr-2"></i>
              <span>Start Learning</span>
            </a>
            <a href="#roadmap-section" class="btn-cyber-secondary text-xs px-6 py-3">
              <i data-lucide="map" class="w-4 h-4 mr-2"></i>
              <span>Explore Roadmap</span>
            </a>
            <a href="#learning/my-learning" class="btn-cyber-outline text-xs px-6 py-3">
              <i data-lucide="bookmark" class="w-4 h-4 mr-2 text-cyber-cyan"></i>
              <span>My Learning</span>
            </a>
          </div>
        </section>

        <!-- Quick Access Navigation Bar -->
        <div class="flex flex-wrap items-center justify-center gap-3 py-3 px-4 cyber-card rounded-xl border border-cyber-cardBorder">
          <span class="text-xs font-mono text-cyber-muted mr-2">QUICK HUBS:</span>
          <a href="#learning/my-learning" class="px-3 py-1.5 rounded bg-cyber-bg hover:bg-cyber-cardHover text-xs font-mono text-cyber-cyan flex items-center">
            <i data-lucide="user-check" class="w-3.5 h-3.5 mr-1.5"></i> My Progress
          </a>
          <a href="#learning/glossary" class="px-3 py-1.5 rounded bg-cyber-bg hover:bg-cyber-cardHover text-xs font-mono text-cyber-teal flex items-center">
            <i data-lucide="book-marked" class="w-3.5 h-3.5 mr-1.5"></i> Glossary
          </a>
          <a href="#learning/cheatsheets" class="px-3 py-1.5 rounded bg-cyber-bg hover:bg-cyber-cardHover text-xs font-mono text-cyber-purple flex items-center">
            <i data-lucide="file-code" class="w-3.5 h-3.5 mr-1.5"></i> Cheatsheets
          </a>
          <a href="#learning/commands" class="px-3 py-1.5 rounded bg-cyber-bg hover:bg-cyber-cardHover text-xs font-mono text-cyber-red flex items-center">
            <i data-lucide="terminal" class="w-3.5 h-3.5 mr-1.5"></i> Commands Reference
          </a>
          <a href="#learning/tools" class="px-3 py-1.5 rounded bg-cyber-bg hover:bg-cyber-cardHover text-xs font-mono text-cyber-cyan flex items-center">
            <i data-lucide="wrench" class="w-3.5 h-3.5 mr-1.5"></i> Security Tools
          </a>
        </div>

        <!-- Interactive Cybersecurity Roadmap -->
        <section id="roadmap-section" class="cyber-card p-6 sm:p-8 rounded-2xl space-y-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-cyber-cardBorder pb-4">
            <div>
              <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">CURRICULUM PATHWAY</span>
              <h2 class="text-2xl font-bold font-display text-white">Interactive Cybersecurity Roadmap</h2>
            </div>
            <span class="text-xs font-mono text-cyber-teal">21 Sequential Progression Phases</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            ${hC.map((e,s)=>`
              <a href="#learning/${e.domainSlug}" class="p-3.5 rounded-xl border border-cyber-cardBorder bg-cyber-bg/70 hover:border-cyber-cyan hover:bg-cyber-cardHover transition-all flex items-center space-x-3 group">
                <span class="w-7 h-7 rounded-lg bg-cyber-cyan/10 text-cyber-cyan font-mono text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-cyber-cyan group-hover:text-black">
                  ${s+1}
                </span>
                <div class="truncate">
                  <span class="block text-xs font-mono text-white font-bold group-hover:text-cyber-cyan truncate">${e.title}</span>
                  <span class="text-[10px] text-cyber-muted font-mono">Explore Domain →</span>
                </div>
              </a>
            `).join("")}
          </div>
        </section>

        <!-- Learning Domains Directory Header & Search Filter -->
        <section class="space-y-8">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-cyber-cardBorder pb-6">
            <div>
              <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">LEARNING DOMAINS</span>
              <h2 class="text-2xl sm:text-3xl font-bold font-display text-white">Explore 24 Specialized Security Domains</h2>
              <p class="text-xs text-cyber-muted mt-1">Note: These represent general cybersecurity learning paths and educational topics.</p>
            </div>

            <!-- Search & Filters -->
            <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div class="relative flex-1 sm:w-64">
                <i data-lucide="search" class="w-4 h-4 absolute left-3 top-3 text-cyber-muted"></i>
                <input type="text" id="learning-search-input" value="${this.learningSearch}" placeholder="Search domains or topics..." class="w-full pl-9 pr-4 py-2 bg-cyber-card border border-cyber-cardBorder rounded-md text-xs text-white focus:border-cyber-cyan focus:outline-none" />
              </div>

              <select id="learning-difficulty-filter" class="px-3 py-2 bg-cyber-card border border-cyber-cardBorder rounded-md text-xs text-white focus:border-cyber-cyan focus:outline-none font-mono">
                <option value="All" ${this.learningDifficultyFilter==="All"?"selected":""}>All Difficulties</option>
                <option value="Beginner" ${this.learningDifficultyFilter==="Beginner"?"selected":""}>Beginner</option>
                <option value="Intermediate" ${this.learningDifficultyFilter==="Intermediate"?"selected":""}>Intermediate</option>
                <option value="Advanced" ${this.learningDifficultyFilter==="Advanced"?"selected":""}>Advanced</option>
              </select>
            </div>
          </div>

          <!-- Domain Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${t.map(e=>{const s=ma(e.slug);let i=0;s.levels.forEach(c=>{c.modules.forEach(h=>{i+=h.lessons.length})});let o=0;s.levels.forEach(c=>{c.modules.forEach(h=>{h.lessons.forEach(d=>{tt.isLessonCompleted(d.id)&&o++})})});const r=tt.getDomainProgress(i,o);return`
                <div class="cyber-card p-6 rounded-2xl space-y-4 flex flex-col justify-between border border-cyber-cardBorder hover:border-cyber-cyan/40 transition-all">
                  <div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="w-10 h-10 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan">
                        <i data-lucide="${e.icon}" class="w-5 h-5"></i>
                      </div>
                      <span class="cyber-badge ${e.badgeColor}">${e.difficulty}</span>
                    </div>

                    <h3 class="text-xl font-bold font-display text-white group-hover:text-cyber-cyan transition-colors">
                      ${e.title}
                    </h3>
                    <p class="text-xs text-cyber-muted mt-2 leading-relaxed line-clamp-3">
                      ${e.description}
                    </p>
                  </div>

                  <div class="space-y-4 pt-4 border-t border-cyber-cardBorder/60">
                    <div class="flex items-center justify-between text-xs font-mono text-cyber-muted">
                      <span><i data-lucide="layers" class="w-3.5 h-3.5 inline mr-1 text-cyber-cyan"></i>${e.modulesCount} Modules</span>
                      <span><i data-lucide="clock" class="w-3.5 h-3.5 inline mr-1 text-cyber-teal"></i>${e.estimatedTime}</span>
                    </div>

                    <!-- Progress Bar -->
                    <div class="space-y-1">
                      <div class="flex justify-between text-[11px] font-mono text-cyber-muted">
                        <span>Progress</span>
                        <span class="text-cyber-cyan">${r}%</span>
                      </div>
                      <div class="w-full bg-cyber-bg h-1.5 rounded-full overflow-hidden border border-cyber-cardBorder">
                        <div class="bg-gradient-to-r from-cyber-cyan to-cyber-teal h-full transition-all duration-300" style="width: ${r}%;"></div>
                      </div>
                    </div>

                    <a href="#learning/${e.slug}" class="btn-cyber-primary w-full text-xs py-2.5 justify-center">
                      <i data-lucide="book-open" class="w-4 h-4 mr-2"></i>
                      <span>Start Learning Domain</span>
                    </a>
                  </div>
                </div>
              `}).join("")}
          </div>
        </section>

      </div>
    `}bindLearningHubListeners(){const t=document.getElementById("learning-search-input");t&&t.addEventListener("input",s=>{this.learningSearch=s.target.value,this.renderSection("learning","hub")});const e=document.getElementById("learning-difficulty-filter");e&&e.addEventListener("change",s=>{this.learningDifficultyFilter=s.target.value,this.renderSection("learning","hub")})}getLearningDomainHTML(t){const e=ma(t),s=$e.find(c=>c.slug===t)||{title:e.title,description:e.description,difficulty:"All Levels"};let i=0,o=0;e.levels.forEach(c=>{c.modules.forEach(h=>{h.lessons.forEach(d=>{i++,tt.isLessonCompleted(d.id)&&o++})})});const r=tt.getDomainProgress(i,o);return`
      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Breadcrumb Navigation -->
        <nav class="flex items-center space-x-2 text-xs font-mono text-cyber-muted" aria-label="Breadcrumb">
          <a href="#learning" class="hover:text-cyber-cyan">Learning Hub</a>
          <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          <span class="text-cyber-cyan font-bold">${e.title}</span>
        </nav>

        <!-- Domain Banner Header -->
        <div class="cyber-card p-8 rounded-2xl border border-cyber-cyan/30 space-y-6">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div class="space-y-3 max-w-3xl">
              <div class="flex flex-wrap items-center gap-2">
                <span class="cyber-badge cyber-badge-cyan">${s.difficulty}</span>
                <span class="cyber-badge cyber-badge-teal">${i} Lessons Total</span>
              </div>
              <h1 class="text-3xl sm:text-4xl font-display font-extrabold text-white">${e.title}</h1>
              <p class="text-sm text-cyber-muted leading-relaxed">${e.description}</p>
            </div>

            <!-- Progress Card -->
            <div class="shrink-0 w-full md:w-64 p-4 rounded-xl bg-cyber-bg/80 border border-cyber-cardBorder space-y-2">
              <div class="flex justify-between text-xs font-mono">
                <span class="text-cyber-muted">Domain Progress</span>
                <span class="text-cyber-cyan font-bold">${r}%</span>
              </div>
              <div class="w-full bg-cyber-card h-2 rounded-full overflow-hidden">
                <div class="bg-gradient-to-r from-cyber-cyan to-cyber-teal h-full transition-all duration-300" style="width: ${r}%;"></div>
              </div>
              <p class="text-[11px] font-mono text-cyber-muted text-right">${o} / ${i} Completed</p>
            </div>
          </div>
        </div>

        <!-- Curriculum Level Accordion / Modules -->
        <div class="space-y-8">
          ${e.levels.map(c=>`
            <div class="space-y-4">
              <div class="flex items-center space-x-3 border-b border-cyber-cardBorder pb-2">
                <span class="w-3 h-3 rounded-full bg-cyber-cyan"></span>
                <h2 class="text-lg font-bold font-mono text-white tracking-wide">${c.levelTitle}</h2>
              </div>

              <div class="space-y-4">
                ${c.modules.map(h=>`
                  <div class="cyber-card p-6 rounded-2xl space-y-4">
                    <h3 class="text-base font-bold font-display text-white flex items-center space-x-2">
                      <i data-lucide="folder-git-2" class="w-4 h-4 text-cyber-teal"></i>
                      <span>${h.title}</span>
                    </h3>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      ${h.lessons.map(d=>{const l=tt.isLessonCompleted(d.id);return tt.isBookmarked(d.id),`
                          <div class="p-4 rounded-xl border border-cyber-cardBorder bg-cyber-bg/60 hover:border-cyber-cyan/50 transition-all flex items-start justify-between gap-4">
                            <div class="space-y-1 max-w-sm">
                              <div class="flex items-center space-x-2">
                                ${l?'<i data-lucide="check-circle-2" class="w-4 h-4 text-cyber-teal shrink-0"></i>':'<i data-lucide="circle" class="w-4 h-4 text-cyber-muted shrink-0"></i>'}
                                <h4 class="font-bold text-white text-sm hover:text-cyber-cyan cursor-pointer leading-snug">
                                  <a href="#learning/${t}/${d.id}">${d.title}</a>
                                </h4>
                              </div>
                              <p class="text-xs text-cyber-muted line-clamp-2 pl-6">${d.shortExplanation}</p>
                            </div>

                            <a href="#learning/${t}/${d.id}" class="btn-cyber-secondary text-[11px] px-3 py-1.5 shrink-0 font-mono">
                              Study →
                            </a>
                          </div>
                        `}).join("")}
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>

      </div>
    `}bindDomainPageListeners(t){}getLessonLayoutHTML(t,e){const s=ma(t);let i=null,o=null,r=[];if(s.levels.forEach(p=>{p.modules.forEach(g=>{g.lessons.forEach(u=>{r.push(u),u.id===e&&(i=u,o=g)})})}),!i&&r.length>0&&(i=r[0]),!i)return'<div class="p-12 text-center text-white font-mono">Lesson not found. <a href="#learning" class="text-cyber-cyan underline">Return to Learning Hub</a></div>';tt.recordVisit(t,i.id,i.title);const c=tt.isLessonCompleted(i.id),h=tt.isBookmarked(i.id),d=r.findIndex(p=>p.id===i.id),l=r[d+1];return`
      <div class="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Breadcrumb & Top Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-cyber-cardBorder pb-4">
          <nav class="flex items-center space-x-2 text-xs font-mono text-cyber-muted truncate" aria-label="Breadcrumb">
            <a href="#learning" class="hover:text-cyber-cyan">Learning</a>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            <a href="#learning/${t}" class="hover:text-cyber-cyan truncate">${s.title}</a>
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            <span class="text-cyber-cyan font-bold truncate">${i.title}</span>
          </nav>

          <div class="flex items-center space-x-3">
            <button id="toggle-bookmark-btn" class="btn-cyber-outline text-xs px-3 py-1.5 flex items-center space-x-1.5 ${h?"border-cyber-cyan text-cyber-cyan bg-cyber-cyan/10":""}" data-id="${i.id}">
              <i data-lucide="bookmark" class="w-4 h-4"></i>
              <span>${h?"Bookmarked":"Bookmark"}</span>
            </button>

            <button id="toggle-complete-btn" class="btn-cyber-primary text-xs px-4 py-1.5 flex items-center space-x-1.5 ${c?"bg-cyber-teal hover:bg-cyber-teal":""}" data-id="${i.id}">
              <i data-lucide="${c?"check-circle":"circle"}" class="w-4 h-4"></i>
              <span>${c?"Completed":"Mark Complete"}</span>
            </button>
          </div>
        </div>

        <!-- Main Lesson Split View Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          <!-- Left Sidebar Navigation Menu -->
          <aside class="lg:col-span-1 space-y-4">
            <div class="cyber-card p-4 rounded-xl space-y-3 sticky top-24 max-h-[80vh] overflow-y-auto">
              <h3 class="text-xs font-mono text-cyber-cyan uppercase tracking-wider border-b border-cyber-cardBorder pb-2 flex items-center justify-between">
                <span>CURRICULUM LESSONS</span>
                <span class="text-[10px] text-cyber-teal font-bold">${r.length} Lessons</span>
              </h3>

              <div class="space-y-1">
                ${r.map(p=>{const g=tt.isLessonCompleted(p.id),u=p.id===i.id;return`
                    <a href="#learning/${t}/${p.id}" class="block p-2 rounded text-xs font-mono transition-all ${u?"bg-cyber-cyan/20 text-cyber-cyan font-bold border-l-2 border-cyber-cyan":"text-cyber-muted hover:bg-cyber-cardHover hover:text-white"} flex items-center justify-between">
                      <span class="truncate pr-2">${p.title}</span>
                      ${g?'<i data-lucide="check" class="w-3.5 h-3.5 text-cyber-teal shrink-0"></i>':""}
                    </a>
                  `}).join("")}
              </div>
            </div>
          </aside>

          <!-- Right Content Column -->
          <main class="lg:col-span-3 space-y-8">
            
            <!-- Lesson Header Title -->
            <div class="space-y-2">
              <span class="cyber-badge cyber-badge-cyan">${o?o.title:"Module"}</span>
              <h1 class="text-2xl sm:text-4xl font-display font-extrabold text-white">${i.title}</h1>
            </div>

            <!-- Short Explanation -->
            <div class="cyber-card p-6 rounded-2xl space-y-3 border-l-4 border-l-cyber-cyan">
              <h3 class="text-xs font-mono text-cyber-cyan uppercase font-bold tracking-wider">CONCEPT OVERVIEW</h3>
              <p class="text-sm sm:text-base text-cyber-text leading-relaxed">${i.shortExplanation}</p>
            </div>

            <!-- Why It Matters & How It Works -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="cyber-card p-6 rounded-2xl space-y-3 border-t-2 border-t-cyber-teal">
                <h3 class="text-xs font-mono text-cyber-teal uppercase font-bold tracking-wider flex items-center">
                  <i data-lucide="shield-check" class="w-4 h-4 mr-1.5"></i> WHY IT MATTERS
                </h3>
                <p class="text-xs sm:text-sm text-cyber-muted leading-relaxed">${i.whyItMatters}</p>
              </div>

              <div class="cyber-card p-6 rounded-2xl space-y-3 border-t-2 border-t-cyber-purple">
                <h3 class="text-xs font-mono text-cyber-purple uppercase font-bold tracking-wider flex items-center">
                  <i data-lucide="cpu" class="w-4 h-4 mr-1.5"></i> HOW IT WORKS
                </h3>
                <p class="text-xs sm:text-sm text-cyber-muted leading-relaxed">${i.howItWorks}</p>
              </div>
            </div>

            <!-- Diagram Box (If Available) -->
            ${i.diagram?`
              <div class="cyber-card p-6 rounded-2xl space-y-3">
                <h3 class="text-xs font-mono text-cyber-cyan uppercase font-bold tracking-wider flex items-center">
                  <i data-lucide="git-branch" class="w-4 h-4 mr-1.5"></i> ARCHITECTURAL DIAGRAM
                </h3>
                <pre class="p-4 bg-cyber-bg border border-cyber-cardBorder rounded-xl font-mono text-xs text-cyber-teal overflow-x-auto leading-relaxed">${i.diagram}</pre>
              </div>
            `:""}

            <!-- Real-World Example -->
            ${i.realWorldExample?`
              <div class="cyber-card p-6 rounded-2xl space-y-3 bg-cyber-bg/80">
                <h3 class="text-xs font-mono text-cyber-cyan uppercase font-bold tracking-wider flex items-center">
                  <i data-lucide="globe" class="w-4 h-4 mr-1.5"></i> REAL-WORLD INCIDENT / SCENARIO
                </h3>
                <p class="text-xs sm:text-sm text-cyber-muted leading-relaxed">${i.realWorldExample}</p>
              </div>
            `:""}

            <!-- Commands & Code Examples -->
            ${i.commands&&i.commands.length>0?`
              <div class="space-y-4">
                <h3 class="text-base font-bold font-mono text-white flex items-center">
                  <i data-lucide="terminal" class="w-5 h-5 text-cyber-cyan mr-2"></i> COMMAND & SYNTAX REFERENCE
                </h3>

                ${i.commands.map(p=>`
                  <div class="cyber-card p-6 rounded-2xl space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-mono text-cyber-cyan font-bold">${p.purpose}</span>
                      <button class="copy-cmd-btn text-[11px] font-mono text-cyber-muted hover:text-cyber-cyan" data-cmd="${p.command}">
                        Copy Command
                      </button>
                    </div>

                    <div class="p-3 bg-cyber-bg border border-cyber-cardBorder rounded-lg font-mono text-xs text-cyber-cyan overflow-x-auto">
                      <code>$ ${p.command}</code>
                    </div>

                    <p class="text-xs text-cyber-muted">${p.explanation}</p>

                    ${p.expectedOutput?`
                      <div class="space-y-1">
                        <span class="text-[10px] font-mono text-cyber-teal">EXPECTED OUTPUT:</span>
                        <pre class="p-3 bg-cyber-bg/90 border border-cyber-cardBorder/60 rounded text-[11px] font-mono text-cyber-muted overflow-x-auto">${p.expectedOutput}</pre>
                      </div>
                    `:""}
                  </div>
                `).join("")}
              </div>
            `:""}

            <!-- Security Implications & Common Mistakes -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              ${i.securityImplications?`
                <div class="cyber-card p-6 rounded-2xl space-y-2 border-l-4 border-l-cyber-red">
                  <h4 class="text-xs font-mono text-cyber-red font-bold">SECURITY IMPLICATIONS</h4>
                  <p class="text-xs text-cyber-muted leading-relaxed">${i.securityImplications}</p>
                </div>
              `:""}

              ${i.commonMistakes?`
                <div class="cyber-card p-6 rounded-2xl space-y-2 border-l-4 border-l-cyber-purple">
                  <h4 class="text-xs font-mono text-cyber-purple font-bold">COMMON PITFALLS & MISTAKES</h4>
                  <p class="text-xs text-cyber-muted leading-relaxed">${i.commonMistakes}</p>
                </div>
              `:""}
            </div>

            <!-- Safe Practical Exercise & Warning -->
            ${i.safeExercise?`
              <div class="cyber-card p-6 rounded-2xl space-y-3 bg-cyber-cyan/5 border border-cyber-cyan/30">
                <div class="flex items-center space-x-2 text-cyber-cyan">
                  <i data-lucide="flask-conical" class="w-5 h-5"></i>
                  <h4 class="font-mono text-sm font-bold">SAFE HANDS-ON EXERCISE</h4>
                </div>
                <p class="text-xs text-cyber-text leading-relaxed">${i.safeExercise}</p>
                <div class="p-3 rounded bg-cyber-red/10 border border-cyber-red/30 text-cyber-red text-[11px] font-mono">
                  ⚠️ SAFETY NOTICE: Use only systems you own or have explicit authorization to test. Do not scan or exploit external targets.
                </div>
              </div>
            `:""}

            <!-- Interview Preparation Section -->
            ${i.interviewQuestions&&i.interviewQuestions.length>0?`
              <div class="cyber-card p-6 rounded-2xl space-y-4">
                <h3 class="text-base font-bold font-mono text-white flex items-center">
                  <i data-lucide="help-circle" class="w-5 h-5 text-cyber-teal mr-2"></i> INTERVIEW PREPARATION
                </h3>

                <div class="space-y-3">
                  ${i.interviewQuestions.map((p,g)=>`
                    <div class="p-4 rounded-xl border border-cyber-cardBorder bg-cyber-bg/60 space-y-2">
                      <div class="font-bold text-sm text-white font-display">Q: ${p.q}</div>
                      <div class="text-xs text-cyber-cyan font-mono">A: ${p.shortAnswer}</div>
                      ${p.tip?`<div class="text-[11px] text-cyber-teal font-mono">💡 Interview Tip: ${p.tip}</div>`:""}
                    </div>
                  `).join("")}
                </div>
              </div>
            `:""}

            <!-- Bottom Lesson Navigation Bar -->
            <div class="flex items-center justify-between pt-6 border-t border-cyber-cardBorder">
              <a href="#learning/${t}" class="btn-cyber-outline text-xs px-4 py-2">
                ← Back to Domain
              </a>

              ${l?`
                <a href="#learning/${t}/${l.id}" class="btn-cyber-primary text-xs px-5 py-2">
                  <span>Next Lesson: ${l.title}</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 ml-1.5"></i>
                </a>
              `:`
                <a href="#learning" class="btn-cyber-primary text-xs px-5 py-2">
                  <span>Complete Domain →</span>
                </a>
              `}
            </div>

          </main>
        </div>

      </div>
    `}bindLessonListeners(t,e){const s=document.getElementById("toggle-bookmark-btn");s&&s.addEventListener("click",o=>{const r=o.currentTarget.getAttribute("data-id");tt.toggleBookmark(r),this.renderSection("learning",`${t}/${e}`)});const i=document.getElementById("toggle-complete-btn");i&&i.addEventListener("click",o=>{const r=o.currentTarget.getAttribute("data-id");tt.toggleLessonCompleted(r),this.renderSection("learning",`${t}/${e}`)}),document.querySelectorAll(".copy-cmd-btn").forEach(o=>{o.addEventListener("click",r=>{const c=r.currentTarget.getAttribute("data-cmd");navigator.clipboard.writeText(c),r.currentTarget.innerText="Copied!",setTimeout(()=>{r.currentTarget.innerText="Copy Command"},2e3)})})}getMyLearningHTML(){const t=tt.getOverallStats($e);return`
      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-cyber-cardBorder pb-6">
          <div>
            <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">PERSONAL PROGRESS DASHBOARD</span>
            <h1 class="text-3xl sm:text-4xl font-display font-extrabold text-white">My Learning Progress</h1>
          </div>

          <a href="#learning" class="btn-cyber-secondary text-xs px-4 py-2">
            ← Return to Learning Hub
          </a>
        </div>

        <!-- Quick Stats Cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="cyber-card p-6 rounded-2xl space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-cyan">${t.completedCount}</div>
            <div class="text-xs font-mono text-cyber-muted">Completed Lessons</div>
          </div>
          <div class="cyber-card p-6 rounded-2xl space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-teal">${t.bookmarkCount}</div>
            <div class="text-xs font-mono text-cyber-muted">Bookmarked Topics</div>
          </div>
          <div class="cyber-card p-6 rounded-2xl space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-purple">${t.recentlyViewed.length}</div>
            <div class="text-xs font-mono text-cyber-muted">Recently Viewed</div>
          </div>
          <div class="cyber-card p-6 rounded-2xl space-y-1">
            <div class="text-3xl font-mono font-bold text-cyber-red">24</div>
            <div class="text-xs font-mono text-cyber-muted">Total Domains</div>
          </div>
        </div>

        <!-- Continue Where You Left Off Card -->
        ${t.lastActive?`
          <div class="cyber-card p-6 rounded-2xl border border-cyber-cyan/40 space-y-3 bg-cyber-cyan/5">
            <span class="cyber-badge cyber-badge-cyan">CONTINUE LEARNING</span>
            <h3 class="text-xl font-bold font-display text-white">${t.lastActive.lessonTitle}</h3>
            <div class="pt-2">
              <a href="#learning/${t.lastActive.domainSlug}/${t.lastActive.lessonId}" class="btn-cyber-primary text-xs px-5 py-2.5">
                Resume Lesson →
              </a>
            </div>
          </div>
        `:""}

        <!-- Bookmarked Topics Grid -->
        <div class="cyber-card p-6 rounded-2xl space-y-4">
          <h3 class="text-lg font-bold font-display text-white flex items-center">
            <i data-lucide="bookmark" class="w-5 h-5 text-cyber-cyan mr-2"></i> Bookmarked Lessons
          </h3>

          ${t.bookmarkCount>0?`
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${tt.data.bookmarks.map(e=>`
                <div class="p-3 rounded-lg border border-cyber-cardBorder bg-cyber-bg/70 flex items-center justify-between">
                  <span class="text-xs font-mono text-white truncate">${e}</span>
                  <a href="#learning/network-security/${e}" class="text-xs font-mono text-cyber-cyan hover:underline">Study →</a>
                </div>
              `).join("")}
            </div>
          `:`
            <p class="text-xs font-mono text-cyber-muted">No lessons bookmarked yet. Click the bookmark button on any lesson page!</p>
          `}
        </div>

      </div>
    `}bindMyLearningListeners(){}getGlossaryHTML(){const t=this.glossarySearch.trim()===""?Wn:Wn.filter(e=>e.term.toLowerCase().includes(this.glossarySearch.toLowerCase())||e.definition.toLowerCase().includes(this.glossarySearch.toLowerCase()));return`
      <div class="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">CYBER DICTIONARY</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Cybersecurity Glossary</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Instant reference dictionary of essential security acronyms and terminology.</p>
        </div>

        <!-- Search Bar -->
        <div class="relative max-w-md mx-auto">
          <i data-lucide="search" class="w-4 h-4 absolute left-3 top-3 text-cyber-muted"></i>
          <input type="text" id="glossary-search-input" value="${this.glossarySearch}" placeholder="Search term (e.g. XSS, TCP, TLS)..." class="w-full pl-9 pr-4 py-2.5 bg-cyber-card border border-cyber-cardBorder rounded-md text-sm text-white focus:border-cyber-cyan focus:outline-none" />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${t.map(e=>`
            <div class="cyber-card p-5 rounded-xl space-y-2 border border-cyber-cardBorder">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-bold font-mono text-white">${e.term}</h3>
                <span class="cyber-badge cyber-badge-cyan text-[10px]">${e.category}</span>
              </div>
              <p class="text-xs text-cyber-muted leading-relaxed">${e.definition}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `}bindGlossaryListeners(){const t=document.getElementById("glossary-search-input");t&&t.addEventListener("input",e=>{this.glossarySearch=e.target.value,this.renderSection("learning","glossary")})}getCheatsheetsHTML(){return`
      <div class="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">QUICK REFERENCE</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Security Cheatsheets</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Printable reference guides for Linux CLI, Nmap, Wireshark, and Web Security auditing.</p>
        </div>

        <div class="space-y-6">
          ${pC.map(t=>`
            <div class="cyber-card p-6 rounded-2xl space-y-4">
              <div class="flex items-center justify-between border-b border-cyber-cardBorder pb-3">
                <h3 class="text-lg font-bold font-mono text-white">${t.title}</h3>
                <span class="cyber-badge cyber-badge-teal">${t.category}</span>
              </div>
              <pre class="p-4 bg-cyber-bg border border-cyber-cardBorder rounded-xl font-mono text-xs text-cyber-cyan overflow-x-auto leading-relaxed">${t.content.trim()}</pre>
            </div>
          `).join("")}
        </div>
      </div>
    `}bindCheatsheetsListeners(){}getToolsHTML(){return`
      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">TOOL DIRECTORY</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Essential Security Tools</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Core software utilities used by security professionals for analysis and auditing.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${lC.map(t=>`
            <div class="cyber-card p-6 rounded-2xl space-y-4 border border-cyber-cardBorder">
              <div class="flex items-center justify-between">
                <h3 class="text-xl font-bold font-display text-white">${t.name}</h3>
                <span class="cyber-badge cyber-badge-cyan">${t.category}</span>
              </div>

              <p class="text-xs text-cyber-muted leading-relaxed">${t.description}</p>
              
              <div class="space-y-2 text-xs font-mono">
                <div class="text-cyber-teal font-bold">Why Security Pros Use It:</div>
                <div class="text-cyber-muted">${t.whySecurityProsUseIt}</div>

                <div class="text-cyber-teal font-bold pt-2">Installation Command:</div>
                <div class="p-2 bg-cyber-bg border border-cyber-cardBorder rounded text-cyber-cyan">${t.installation}</div>
              </div>

              <div class="pt-4 border-t border-cyber-cardBorder">
                <a href="${t.docUrl}" target="_blank" rel="noopener noreferrer" class="btn-cyber-outline text-xs w-full py-2 justify-center">
                  Official Documentation →
                </a>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}getCommandsHTML(){return`
      <div class="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">COMMAND REFERENCE</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Linux & Security Commands</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Comprehensive command syntax, expected output, and safe usage contexts.</p>
        </div>

        <div class="space-y-8">
          ${dC.map(t=>`
            <div class="space-y-4">
              <h2 class="text-xl font-bold font-mono text-cyber-cyan border-b border-cyber-cardBorder pb-2">${t.category} Commands</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${t.commands.map(e=>`
                  <div class="cyber-card p-5 rounded-xl space-y-3 border border-cyber-cardBorder">
                    <div class="p-2.5 bg-cyber-bg border border-cyber-cardBorder rounded font-mono text-xs text-cyber-cyan font-bold">
                      <code>$ ${e.command}</code>
                    </div>
                    <p class="text-xs text-white font-bold">${e.purpose}</p>
                    <p class="text-xs text-cyber-muted">${e.explanation}</p>
                    <div class="text-[11px] font-mono text-cyber-teal">Safe Context: ${e.safeContext}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}getHomeHTML(){return`
      <!-- Hero Banner Section -->
      <section class="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
        <canvas id="cyber-canvas" class="absolute inset-0 w-full h-full pointer-events-auto z-0"></canvas>
        
        <div class="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          
          <div class="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-mono tracking-wide animate-pulse-slow">
            <span class="w-2 h-2 rounded-full bg-cyber-teal"></span>
            <span>NIT HAMIRPUR'S OFFICIAL CYBERSECURITY CLUB</span>
          </div>

          <h1 class="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-tight">
            Defending the Byte.<br />
            <span class="bg-gradient-to-r from-cyber-cyan via-cyber-teal to-blue-400 bg-clip-text text-transparent glitch-hover">
              Securing the Future.
            </span>
          </h1>

          <p class="max-w-2xl mx-auto text-base sm:text-lg text-cyber-muted leading-relaxed font-sans">
            We are a student-led cybersecurity society at NIT Hamirpur dedicated to ethical hacking, reverse engineering, CTF competitions, and zero-day vulnerability research.
          </p>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#learning" class="btn-cyber-primary w-full sm:w-auto text-sm px-6 py-3">
              <i data-lucide="book-open" class="w-4 h-4 mr-2"></i>
              <span>Explore Learning Hub</span>
            </a>
            <a href="#events" class="btn-cyber-secondary w-full sm:w-auto text-sm px-6 py-3">
              <i data-lucide="terminal" class="w-4 h-4 mr-2"></i>
              <span>Events & CTFs</span>
            </a>
            <a href="${Z.discord}" target="_blank" rel="noopener noreferrer" class="btn-cyber-outline w-full sm:w-auto text-sm px-6 py-3">
              <i data-lucide="message-square" class="w-4 h-4 mr-2 text-cyber-cyan"></i>
              <span>Join Discord</span>
            </a>
          </div>

          <div class="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            ${iC.map(t=>`
              <div class="cyber-card p-4 rounded-xl text-center">
                <i data-lucide="${t.icon}" class="w-6 h-6 text-cyber-cyan mx-auto mb-2"></i>
                <div class="text-2xl sm:text-3xl font-mono font-bold text-white">${t.value}</div>
                <div class="text-xs text-cyber-muted mt-1 font-sans">${t.label}</div>
              </div>
            `).join("")}
          </div>

        </div>
      </section>

      <!-- Domain Highlights -->
      <section class="py-20 border-t border-cyber-cardBorder bg-cyber-bg/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">WHAT WE DO</h2>
            <p class="text-3xl sm:text-4xl font-display font-bold text-white">Specialized Security Domains</p>
            <p class="text-cyber-muted text-sm sm:text-base">Mastering cutting-edge offensive and defensive cybersecurity subfields.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${nC.map(t=>`
              <div class="cyber-card p-6 rounded-xl space-y-4 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 rounded-lg bg-cyber-cardBorder/60 flex items-center justify-center border border-cyber-cyan/30">
                      <i data-lucide="${t.icon}" class="w-6 h-6 text-cyber-cyan"></i>
                    </div>
                    <span class="cyber-badge ${t.badgeColor}">${t.id.toUpperCase()}</span>
                  </div>
                  <h3 class="text-lg font-bold text-white font-display">${t.title}</h3>
                  <p class="text-sm text-cyber-muted mt-2 leading-relaxed">${t.description}</p>
                </div>
                <div class="pt-4 border-t border-cyber-cardBorder/40">
                  <a href="#learning/${t.id==="pwn"?"binary-exploitation":t.id==="websec"?"web-security":t.id==="re"?"reverse-engineering":t.id==="crypto"?"cryptography":"digital-forensics"}" class="inline-flex items-center text-xs font-mono text-cyber-cyan hover:underline">
                    <span>Study Domain Curriculum</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5 ml-1"></i>
                  </a>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- Featured Flagship CTF Banner -->
      <section class="py-16 bg-cyber-card/40 border-y border-cyber-cardBorder">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div class="space-y-4 max-w-2xl">
            <div class="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-cyber-red/10 border border-cyber-red/40 text-cyber-red text-xs font-mono">
              <span class="w-2 h-2 rounded-full bg-cyber-red animate-ping"></span>
              <span>FLAGSHIP EVENT ANNOUNCEMENT</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-display font-bold text-white">${bt[0].title}</h3>
            <p class="text-sm text-cyber-muted">${bt[0].description}</p>
            <div class="flex flex-wrap gap-4 text-xs font-mono text-cyber-teal pt-1">
              <span class="flex items-center"><i data-lucide="calendar" class="w-4 h-4 mr-1"></i>${bt[0].displayDate}</span>
              <span class="flex items-center"><i data-lucide="map-pin" class="w-4 h-4 mr-1"></i>${bt[0].venue}</span>
              <span class="flex items-center text-cyber-cyan"><i data-lucide="trophy" class="w-4 h-4 mr-1"></i>${bt[0].prizes}</span>
            </div>
          </div>
          <div class="shrink-0 w-full lg:w-auto">
            <a href="#events" class="btn-cyber-primary w-full lg:w-auto text-sm px-8 py-4">
              <i data-lucide="ticket" class="w-5 h-5 mr-2"></i>
              <span>Register For Flagship CTF</span>
            </a>
          </div>
        </div>
      </section>
    `}getAboutHTML(){return`
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">ABOUT SHIELD</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Empowering NIT Hamirpur's Cyber Security Pioneers</h1>
          <p class="text-cyber-muted text-base">Founded in 2021 under the Department of Computer Science & Engineering, SHIELD bridges academic computer science with real-world security research.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="cyber-card p-8 rounded-2xl space-y-4 border-l-4 border-l-cyber-cyan">
            <div class="w-12 h-12 rounded-xl bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan">
              <i data-lucide="target" class="w-6 h-6"></i>
            </div>
            <h2 class="text-2xl font-bold text-white font-display">Our Mission</h2>
            <p class="text-cyber-muted text-sm leading-relaxed">
              To cultivate a vibrant security culture at NIT Hamirpur where students master ethical hacking, binary analysis, cryptography, and defense methodologies. We aim to produce world-class security researchers, bug hunters, and industry professionals.
            </p>
          </div>

          <div class="cyber-card p-8 rounded-2xl space-y-4 border-l-4 border-l-cyber-teal">
            <div class="w-12 h-12 rounded-xl bg-cyber-teal/10 flex items-center justify-center text-cyber-teal">
              <i data-lucide="eye" class="w-6 h-6"></i>
            </div>
            <h2 class="text-2xl font-bold text-white font-display">Our Vision</h2>
            <p class="text-cyber-muted text-sm leading-relaxed">
              To establish NIT Hamirpur as a national hub for cybersecurity excellence, competing at top-tier global CTF hackathons, contributing to open-source security tools, and collaborating with global security researchers.
            </p>
          </div>
        </div>

        <div class="cyber-card p-8 rounded-2xl flex flex-col md:flex-row items-center gap-8 border border-cyber-cyan/20">
          <img src="${Z.facultyAdvisor.image}" alt="${Z.facultyAdvisor.name}" class="w-32 h-32 rounded-full object-cover border-2 border-cyber-cyan shadow-neon-cyan" />
          <div class="space-y-3 text-center md:text-left">
            <span class="cyber-badge cyber-badge-cyan">FACULTY ADVISOR SPOTLIGHT</span>
            <h3 class="text-2xl font-bold text-white font-display">${Z.facultyAdvisor.name}</h3>
            <p class="text-xs font-mono text-cyber-teal">${Z.facultyAdvisor.role}</p>
            <p class="text-sm text-cyber-muted leading-relaxed">${Z.facultyAdvisor.bio}</p>
          </div>
        </div>
      </section>
    `}getTeamHTML(){const t=["All","Core","WebSec","Reverse Engineering","Cryptography","Forensics","Advisors"],e=this.teamFilter==="All"?va:va.filter(s=>s.domain===this.teamFilter);return`
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">SOCIETY LEADERSHIP</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Meet Team SHIELD</h1>
          <p class="text-cyber-muted text-sm sm:text-base">The passionate minds leading offensive research, CTFs, and security workshops at NIT Hamirpur.</p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-2">
          ${t.map(s=>`
            <button class="team-filter-btn px-4 py-2 text-xs font-mono rounded-md border transition-all ${this.teamFilter===s?"bg-cyber-cyan text-black border-cyber-cyan font-bold shadow-neon-cyan":"bg-cyber-card text-cyber-muted border-cyber-cardBorder hover:text-white"}" data-category="${s}">
              ${s}
            </button>
          `).join("")}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${e.map(s=>`
            <div class="cyber-card rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div>
                <div class="relative mb-4">
                  <img src="${s.image}" alt="${s.name}" class="w-full h-56 object-cover rounded-xl border border-cyber-cardBorder" />
                  <span class="absolute top-3 right-3 cyber-badge cyber-badge-cyan">${s.batch}</span>
                </div>
                <h3 class="text-xl font-bold font-display text-white">${s.name}</h3>
                <p class="text-xs font-mono text-cyber-teal mt-0.5">${s.role}</p>
                <p class="text-xs text-cyber-muted mt-3 leading-relaxed">${s.bio}</p>
              </div>

              <div class="pt-4 border-t border-cyber-cardBorder flex items-center justify-between">
                <div class="flex items-center space-x-3 text-cyber-muted">
                  ${s.github?`<a href="${s.github}" target="_blank" rel="noopener noreferrer" class="hover:text-cyber-cyan" aria-label="${s.name}'s GitHub"><i data-lucide="github" class="w-4 h-4"></i></a>`:""}
                  ${s.linkedin?`<a href="${s.linkedin}" target="_blank" rel="noopener noreferrer" class="hover:text-cyber-cyan" aria-label="${s.name}'s LinkedIn"><i data-lucide="linkedin" class="w-4 h-4"></i></a>`:""}
                </div>
                <button class="view-member-modal text-xs font-mono text-cyber-cyan hover:underline" data-id="${s.id}">
                  Profile Bio →
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `}bindTeamEvents(){document.querySelectorAll(".team-filter-btn").forEach(t=>{t.addEventListener("click",e=>{this.teamFilter=e.currentTarget.getAttribute("data-category"),this.renderSection("team")})}),document.querySelectorAll(".view-member-modal").forEach(t=>{t.addEventListener("click",e=>{const s=e.currentTarget.getAttribute("data-id"),i=va.find(o=>o.id===s);i&&this.openMemberModal(i)})})}getEventsHTML(){const t=["All","CTF","Workshop","Seminar"],e=this.eventsFilter==="All"?bt:bt.filter(s=>s.category===this.eventsFilter);return`
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">CALENDAR & EVENTS</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Workshops, Bootcamps & CTFs</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Participate in hands-on cybersecurity sessions hosted on campus and online.</p>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-cyber-cardBorder pb-6">
          <div class="flex flex-wrap items-center gap-2">
            ${t.map(s=>`
              <button class="event-filter-btn px-3 py-1.5 text-xs font-mono rounded-md border transition-all ${this.eventsFilter===s?"bg-cyber-cyan text-black border-cyber-cyan font-bold shadow-neon-cyan":"bg-cyber-card text-cyber-muted border-cyber-cardBorder hover:text-white"}" data-category="${s}">
                ${s}
              </button>
            `).join("")}
          </div>
        </div>

        <div class="space-y-6">
          ${e.map(s=>`
            <div class="cyber-card p-6 rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-l-4 ${s.type==="Upcoming"?"border-l-cyber-cyan":"border-l-cyber-muted"}">
              <div class="space-y-2 max-w-3xl">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="cyber-badge ${s.type==="Upcoming"?"cyber-badge-cyan":"cyber-badge-teal"}">${s.type.toUpperCase()}</span>
                  <span class="cyber-badge cyber-badge-purple">${s.category}</span>
                  <span class="text-xs font-mono text-cyber-muted">${s.displayDate}</span>
                </div>
                <h3 class="text-xl font-bold font-display text-white">${s.title}</h3>
                <p class="text-sm text-cyber-muted">${s.description}</p>
                <div class="flex flex-wrap gap-4 text-xs font-mono text-cyber-teal pt-1">
                  <span>${s.venue}</span>
                  <span class="text-cyber-cyan">${s.prizes}</span>
                </div>
              </div>

              <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                ${s.type==="Upcoming"?`
                  <button class="register-event-btn btn-cyber-primary text-xs px-5 py-2.5" data-id="${s.id}">
                    Register Now
                  </button>
                `:`
                  <span class="px-4 py-2 rounded border border-cyber-cardBorder text-xs font-mono text-cyber-muted bg-cyber-card">
                    Event Concluded
                  </span>
                `}
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `}bindEventsListeners(){document.querySelectorAll(".event-filter-btn").forEach(t=>{t.addEventListener("click",e=>{this.eventsFilter=e.currentTarget.getAttribute("data-category"),this.renderSection("events")})}),document.querySelectorAll(".register-event-btn").forEach(t=>{t.addEventListener("click",e=>{const s=e.currentTarget.getAttribute("data-id"),i=bt.find(o=>o.id===s);i&&this.openRegistrationModal(i)})})}getProjectsHTML(){return`
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">OPEN-SOURCE & LABS</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Projects & Lab Tools</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Explore custom security tools, CTF writeups, and lab setup scripts built by SHIELD.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${oC.map(t=>`
            <div class="cyber-card p-6 rounded-2xl space-y-4 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="cyber-badge cyber-badge-cyan">${t.category}</span>
                  <span class="text-xs font-mono text-cyber-teal">★ ${t.stars}</span>
                </div>
                <h3 class="text-lg font-bold font-display text-white">${t.title}</h3>
                <p class="text-xs text-cyber-muted mt-2 leading-relaxed">${t.description}</p>
              </div>

              <div class="pt-4 border-t border-cyber-cardBorder flex items-center justify-between">
                <a href="${t.link}" target="_blank" rel="noopener noreferrer" class="text-xs font-mono text-cyber-cyan hover:underline flex items-center">
                  <i data-lucide="github" class="w-4 h-4 mr-1.5"></i>
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `}bindProjectsListeners(){}getBlogHTML(){return`
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">CYBER DIGEST</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">News & Technical Blog</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Technical writeups, security advisories, and society competition recaps.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          ${Fn.map(t=>`
            <article class="cyber-card p-6 rounded-2xl space-y-4 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between text-xs font-mono text-cyber-muted mb-2">
                  <span class="cyber-badge cyber-badge-cyan">${t.category}</span>
                  <span>${t.readTime}</span>
                </div>
                <h3 class="text-xl font-bold font-display text-white hover:text-cyber-cyan cursor-pointer read-article-btn" data-id="${t.id}">
                  ${t.title}
                </h3>
                <p class="text-xs text-cyber-muted mt-2 leading-relaxed">${t.excerpt}</p>
              </div>

              <div class="pt-4 border-t border-cyber-cardBorder flex items-center justify-between text-xs">
                <span class="text-cyber-teal font-mono">By ${t.author}</span>
                <button class="read-article-btn font-mono text-cyber-cyan hover:underline" data-id="${t.id}">
                  Read Full Article →
                </button>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
    `}bindBlogListeners(){document.querySelectorAll(".read-article-btn").forEach(t=>{t.addEventListener("click",e=>{const s=e.currentTarget.getAttribute("data-id"),i=Fn.find(o=>o.id===s);i&&this.openArticleModal(i)})})}getGalleryHTML(){return`
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">MEMORIES</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">SHIELD Photo Gallery</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Highlights from workshops, hackathons, and national CTF podiums.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${zn.map((t,e)=>`
            <div class="gallery-card-item cyber-card rounded-2xl overflow-hidden group cursor-pointer" data-index="${e}">
              <div class="relative overflow-hidden aspect-video">
                <img src="${t.image}" alt="${t.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-4 space-y-1">
                <h3 class="font-bold text-white text-base">${t.title}</h3>
                <p class="text-xs text-cyber-muted">${t.caption}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `}bindGalleryListeners(){document.querySelectorAll(".gallery-card-item").forEach(t=>{t.addEventListener("click",e=>{const s=parseInt(e.currentTarget.getAttribute("data-index"),10);this.openLightbox(s)})})}getSponsorsHTML(){return`
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">PARTNERS</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Sponsors & Industry Partners</h1>
          <p class="text-cyber-muted text-sm sm:text-base">We collaborate with world-leading security platforms to empower NIT Hamirpur security talent.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${rC.map(t=>`
            <div class="cyber-card p-6 rounded-2xl text-center space-y-4 flex flex-col justify-between">
              <div>
                <span class="cyber-badge cyber-badge-cyan mb-4">${t.tier}</span>
                <div class="h-20 flex items-center justify-center my-2 bg-cyber-bg rounded-xl border border-cyber-cardBorder">
                  <span class="font-display font-black text-xl text-white tracking-widest">${t.logoText}</span>
                </div>
                <h3 class="text-lg font-bold text-white">${t.name}</h3>
                <p class="text-xs text-cyber-muted mt-2">${t.perks}</p>
              </div>

              <a href="${t.website}" target="_blank" rel="noopener noreferrer" class="btn-cyber-outline text-xs w-full py-2">
                Visit Partner Site
              </a>
            </div>
          `).join("")}
        </div>
      </section>
    `}bindSponsorsListeners(){}getFAQHTML(){return`
      <section class="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">MEMBERSHIP & FAQ</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Frequently Asked Questions</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Everything you need to know about joining SHIELD and attending our events.</p>
        </div>

        <div class="space-y-4">
          ${cC.map((t,e)=>`
            <div class="cyber-card p-5 rounded-xl space-y-2">
              <h3 class="font-bold text-white text-base flex items-center justify-between">
                <span>${t.question}</span>
                <span class="cyber-badge cyber-badge-cyan text-[10px]">${t.category}</span>
              </h3>
              <p class="text-sm text-cyber-muted leading-relaxed">${t.answer}</p>
            </div>
          `).join("")}
        </div>
      </section>
    `}bindFAQListeners(){}getContactHTML(){return`
      <section class="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-mono text-cyber-cyan uppercase tracking-widest">GET IN TOUCH</span>
          <h1 class="text-3xl sm:text-5xl font-display font-extrabold text-white">Contact & Connect</h1>
          <p class="text-cyber-muted text-sm sm:text-base">Have questions, feedback, or sponsorship inquiries? Reach out to the SHIELD team.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div class="cyber-card p-8 rounded-2xl space-y-6">
            <h3 class="text-2xl font-bold font-display text-white">Send Us A Message</h3>
            
            <form id="contact-form" class="space-y-4">
              <div>
                <label for="contact-name" class="block text-xs font-mono text-cyber-muted mb-1">Full Name *</label>
                <input type="text" id="contact-name" required placeholder="e.g. Rahul Verma" class="w-full px-4 py-2.5 bg-cyber-bg border border-cyber-cardBorder rounded-md text-sm text-white focus:border-cyber-cyan focus:outline-none" />
              </div>

              <div>
                <label for="contact-email" class="block text-xs font-mono text-cyber-muted mb-1">Email Address *</label>
                <input type="email" id="contact-email" required placeholder="name@nith.ac.in" class="w-full px-4 py-2.5 bg-cyber-bg border border-cyber-cardBorder rounded-md text-sm text-white focus:border-cyber-cyan focus:outline-none" />
              </div>

              <div>
                <label for="contact-message" class="block text-xs font-mono text-cyber-muted mb-1">Message *</label>
                <textarea id="contact-message" rows="4" required placeholder="Your message details..." class="w-full px-4 py-2.5 bg-cyber-bg border border-cyber-cardBorder rounded-md text-sm text-white focus:border-cyber-cyan focus:outline-none"></textarea>
              </div>

              <button type="submit" class="btn-cyber-primary w-full py-3 text-xs">
                <span>Send Message</span>
              </button>
            </form>
          </div>

          <div class="cyber-card p-6 rounded-2xl space-y-4">
            <h3 class="text-xl font-bold font-display text-white">Society Headquarters</h3>
            <p class="text-sm text-cyber-muted">${Z.location}</p>
            <p class="text-sm text-cyber-teal font-mono">Email: ${Z.email}</p>
          </div>
        </div>
      </section>
    `}bindContactListeners(){const t=document.getElementById("contact-form");t&&t.addEventListener("submit",e=>{e.preventDefault(),alert("✓ Message submitted successfully!"),t.reset()})}openAnalyticsModal(){const t=document.getElementById("analytics-modal");if(!t)return;t.classList.remove("hidden"),t.classList.add("flex");const e=We.getStats();document.getElementById("stat-total-events").innerText=e.totalEvents,document.getElementById("stat-pageviews").innerText=e.pageviews,document.getElementById("stat-registrations").innerText=e.eventRegistrations,document.getElementById("stat-downloads").innerText=e.resourceDownloads;const s=document.getElementById("analytics-chart-canvas");We.renderChart(s)}closeAnalyticsModal(){const t=document.getElementById("analytics-modal");t&&(t.classList.add("hidden"),t.classList.remove("flex"))}openMemberModal(t){const e=document.getElementById("member-modal");e&&(document.getElementById("member-modal-img").src=t.image,document.getElementById("member-modal-name").innerText=t.name,document.getElementById("member-modal-role").innerText=t.role,document.getElementById("member-modal-batch").innerText=t.batch,document.getElementById("member-modal-bio").innerText=t.bio,e.classList.remove("hidden"),e.classList.add("flex"))}closeMemberModal(){const t=document.getElementById("member-modal");t&&t.classList.add("hidden")}openRegistrationModal(t){this.selectedEventForRegistration=t;const e=document.getElementById("registration-modal");e&&(document.getElementById("reg-modal-event-title").innerText=t.title,document.getElementById("reg-modal-event-date").innerText=t.displayDate+" • "+t.venue,e.classList.remove("hidden"),e.classList.add("flex"))}closeRegistrationModal(){const t=document.getElementById("registration-modal");t&&t.classList.add("hidden")}openArticleModal(t){const e=document.getElementById("article-modal");e&&(document.getElementById("art-modal-title").innerText=t.title,document.getElementById("art-modal-meta").innerText=`By ${t.author} • ${t.date} • ${t.readTime}`,document.getElementById("art-modal-body").innerHTML=t.content.replace(/\n/g,"<br/>"),e.classList.remove("hidden"),e.classList.add("flex"))}closeArticleModal(){const t=document.getElementById("article-modal");t&&t.classList.add("hidden")}openLightbox(t){this.lightboxIndex=t;const e=zn[t];if(!e)return;const s=document.getElementById("lightbox-modal");s&&(document.getElementById("lightbox-img").src=e.image,document.getElementById("lightbox-title").innerText=e.title,document.getElementById("lightbox-caption").innerText=e.caption,s.classList.remove("hidden"),s.classList.add("flex"))}closeLightbox(){const t=document.getElementById("lightbox-modal");t&&t.classList.add("hidden")}setupGlobalEventListeners(){var t,e,s,i,o;window.addEventListener("keydown",r=>{r.key==="Escape"&&(this.closeAnalyticsModal(),this.closeMemberModal(),this.closeRegistrationModal(),this.closeArticleModal(),this.closeLightbox())}),(t=document.getElementById("close-analytics-modal"))==null||t.addEventListener("click",()=>this.closeAnalyticsModal()),(e=document.getElementById("close-member-modal"))==null||e.addEventListener("click",()=>this.closeMemberModal()),(s=document.getElementById("close-registration-modal"))==null||s.addEventListener("click",()=>this.closeRegistrationModal()),(i=document.getElementById("close-article-modal"))==null||i.addEventListener("click",()=>this.closeArticleModal()),(o=document.getElementById("close-lightbox-modal"))==null||o.addEventListener("click",()=>this.closeLightbox())}}document.addEventListener("DOMContentLoaded",()=>{new C_().init()});
