const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./web-_eQOoooP.js","./react-B96LqRAS.js","./index-xRIURe-Q.js","./index-MY-HQIDo.js","./index-CMI0BQ2K.js","./index-CfWHO9ib.js","./index-isL4k-1u.js","./index-C6gDaibE.js","./index-gXycRqiZ.js","./index-DCgQ0nVz.js"])))=>i.map(i=>d[i]);
var H7=Object.defineProperty;var V7=(e,a,n)=>a in e?H7(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n;var jt=(e,a,n)=>V7(e,typeof a!="symbol"?a+"":a,n);import{r as u,a as $e,R as St,c as I7,g as E7,u as ke,b as cc,d as Pt,N as ic,e as Ge,f as P7,h as Ta,H as T7}from"./react-B96LqRAS.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(c){if(c.ep)return;c.ep=!0;const i=n(c);fetch(c.href,i)}})();const R7="modulepreload",O7=function(e,a){return new URL(e,a).href},Y1={},Me=function(a,n,s){let c=Promise.resolve();if(n&&n.length>0){const d=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),l=r?.nonce||r?.getAttribute("nonce");c=Promise.allSettled(n.map(p=>{if(p=O7(p,s),p in Y1)return;Y1[p]=!0;const g=p.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(!!s)for(let y=d.length-1;y>=0;y--){const M=d[y];if(M.href===p&&(!g||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${m}`))return;const k=document.createElement("link");if(k.rel=g?"stylesheet":R7,g||(k.as="script"),k.crossOrigin="",k.href=p,l&&k.setAttribute("nonce",l),document.head.appendChild(k),g)return new Promise((y,M)=>{k.addEventListener("load",y),k.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${p}`)))})}))}function i(d){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=d,window.dispatchEvent(r),!r.defaultPrevented)throw d}return c.then(d=>{for(const r of d||[])r.status==="rejected"&&i(r.reason);return a().catch(i)})};var rc={exports:{}},va={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B7=u,F7=Symbol.for("react.element"),W7=Symbol.for("react.fragment"),U7=Object.prototype.hasOwnProperty,G7=B7.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y7={key:!0,ref:!0,__self:!0,__source:!0};function dc(e,a,n){var s,c={},i=null,d=null;n!==void 0&&(i=""+n),a.key!==void 0&&(i=""+a.key),a.ref!==void 0&&(d=a.ref);for(s in a)U7.call(a,s)&&!Y7.hasOwnProperty(s)&&(c[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps,a)c[s]===void 0&&(c[s]=a[s]);return{$$typeof:F7,type:e,key:i,ref:d,props:c,_owner:G7.current}}va.Fragment=W7;va.jsx=dc;va.jsxs=dc;rc.exports=va;var t=rc.exports,rn={},Z1=$e;rn.createRoot=Z1.createRoot,rn.hydrateRoot=Z1.hydrateRoot;/*! Capacitor: https://capacitorjs.com/ - MIT License */var rt;(function(e){e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE"})(rt||(rt={}));class Yt extends Error{constructor(a,n,s){super(a),this.message=a,this.code=n,this.data=s}}const Z7=e=>{var a,n;return e?.androidBridge?"android":!((n=(a=e?.webkit)===null||a===void 0?void 0:a.messageHandlers)===null||n===void 0)&&n.bridge?"ios":"web"},K7=e=>{const a=e.CapacitorCustomPlatform||null,n=e.Capacitor||{},s=n.Plugins=n.Plugins||{},c=()=>a!==null?a.name:Z7(e),i=()=>c()!=="web",d=m=>{const x=p.get(m);return!!(x?.platforms.has(c())||r(m))},r=m=>{var x;return(x=n.PluginHeaders)===null||x===void 0?void 0:x.find(k=>k.name===m)},l=m=>e.console.error(m),p=new Map,g=(m,x={})=>{const k=p.get(m);if(k)return console.warn(`Capacitor plugin "${m}" already registered. Cannot register plugins twice.`),k.proxy;const y=c(),M=r(m);let f;const z=async()=>(!f&&y in x?f=typeof x[y]=="function"?f=await x[y]():f=x[y]:a!==null&&!f&&"web"in x&&(f=typeof x.web=="function"?f=await x.web():f=x.web),f),V=(P,W)=>{var B,q;if(M){const G=M?.methods.find(O=>W===O.name);if(G)return G.rtype==="promise"?O=>n.nativePromise(m,W.toString(),O):(O,F)=>n.nativeCallback(m,W.toString(),O,F);if(P)return(B=P[W])===null||B===void 0?void 0:B.bind(P)}else{if(P)return(q=P[W])===null||q===void 0?void 0:q.bind(P);throw new Yt(`"${m}" plugin is not implemented on ${y}`,rt.Unimplemented)}},S=P=>{let W;const B=(...q)=>{const G=z().then(O=>{const F=V(O,P);if(F){const T=F(...q);return W=T?.remove,T}else throw new Yt(`"${m}.${P}()" is not implemented on ${y}`,rt.Unimplemented)});return P==="addListener"&&(G.remove=async()=>W()),G};return B.toString=()=>`${P.toString()}() { [capacitor code] }`,Object.defineProperty(B,"name",{value:P,writable:!1,configurable:!1}),B},j=S("addListener"),w=S("removeListener"),N=(P,W)=>{const B=j({eventName:P},W),q=async()=>{const O=await B;w({eventName:P,callbackId:O},W)},G=new Promise(O=>B.then(()=>O({remove:q})));return G.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await q()},G},R=new Proxy({},{get(P,W){switch(W){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return M?N:j;case"removeListener":return w;default:return S(W)}}});return s[m]=R,p.set(m,{name:m,proxy:R,platforms:new Set([...Object.keys(x),...M?[y]:[]])}),R};return n.convertFileSrc||(n.convertFileSrc=m=>m),n.getPlatform=c,n.handleError=l,n.isNativePlatform=i,n.isPluginAvailable=d,n.registerPlugin=g,n.Exception=Yt,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n},J7=e=>e.Capacitor=K7(e),dt=J7(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),vt=dt.registerPlugin;class In{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(a,n){let s=!1;this.listeners[a]||(this.listeners[a]=[],s=!0),this.listeners[a].push(n);const i=this.windowListeners[a];i&&!i.registered&&this.addWindowListener(i),s&&this.sendRetainedArgumentsForEvent(a);const d=async()=>this.removeListener(a,n);return Promise.resolve({remove:d})}async removeAllListeners(){this.listeners={};for(const a in this.windowListeners)this.removeWindowListener(this.windowListeners[a]);this.windowListeners={}}notifyListeners(a,n,s){const c=this.listeners[a];if(!c){if(s){let i=this.retainedEventArguments[a];i||(i=[]),i.push(n),this.retainedEventArguments[a]=i}return}c.forEach(i=>i(n))}hasListeners(a){var n;return!!(!((n=this.listeners[a])===null||n===void 0)&&n.length)}registerWindowListener(a,n){this.windowListeners[n]={registered:!1,windowEventName:a,pluginEventName:n,handler:s=>{this.notifyListeners(n,s)}}}unimplemented(a="not implemented"){return new dt.Exception(a,rt.Unimplemented)}unavailable(a="not available"){return new dt.Exception(a,rt.Unavailable)}async removeListener(a,n){const s=this.listeners[a];if(!s)return;const c=s.indexOf(n);this.listeners[a].splice(c,1),this.listeners[a].length||this.removeWindowListener(this.windowListeners[a])}addWindowListener(a){window.addEventListener(a.windowEventName,a.handler),a.registered=!0}removeWindowListener(a){a&&(window.removeEventListener(a.windowEventName,a.handler),a.registered=!1)}sendRetainedArgumentsForEvent(a){const n=this.retainedEventArguments[a];n&&(delete this.retainedEventArguments[a],n.forEach(s=>{this.notifyListeners(a,s)}))}}const X7=vt("WebView"),K1=e=>encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),J1=e=>e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class Q7 extends In{async getCookies(){const a=document.cookie,n={};return a.split(";").forEach(s=>{if(s.length<=0)return;let[c,i]=s.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=J1(c).trim(),i=J1(i).trim(),n[c]=i}),n}async setCookie(a){try{const n=K1(a.key),s=K1(a.value),c=a.expires?`; expires=${a.expires.replace("expires=","")}`:"",i=(a.path||"/").replace("path=",""),d=a.url!=null&&a.url.length>0?`domain=${a.url}`:"";document.cookie=`${n}=${s||""}${c}; path=${i}; ${d};`}catch(n){return Promise.reject(n)}}async deleteCookie(a){try{document.cookie=`${a.key}=; Max-Age=0`}catch(n){return Promise.reject(n)}}async clearCookies(){try{const a=document.cookie.split(";")||[];for(const n of a)document.cookie=n.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(a){return Promise.reject(a)}}async clearAllCookies(){try{await this.clearCookies()}catch(a){return Promise.reject(a)}}}const e9=vt("CapacitorCookies",{web:()=>new Q7}),t9=async e=>new Promise((a,n)=>{const s=new FileReader;s.onload=()=>{const c=s.result;a(c.indexOf(",")>=0?c.split(",")[1]:c)},s.onerror=c=>n(c),s.readAsDataURL(e)}),a9=(e={})=>{const a=Object.keys(e);return Object.keys(e).map(c=>c.toLocaleLowerCase()).reduce((c,i,d)=>(c[i]=e[a[d]],c),{})},n9=(e,a=!0)=>e?Object.entries(e).reduce((s,c)=>{const[i,d]=c;let r,l;return Array.isArray(d)?(l="",d.forEach(p=>{r=a?encodeURIComponent(p):p,l+=`${i}=${r}&`}),l.slice(0,-1)):(r=a?encodeURIComponent(d):d,l=`${i}=${r}`),`${s}&${l}`},"").substr(1):null,lc=(e,a={})=>{const n=Object.assign({method:e.method||"GET",headers:e.headers},a),c=a9(e.headers)["content-type"]||"";if(typeof e.data=="string")n.body=e.data;else if(c.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[d,r]of Object.entries(e.data||{}))i.set(d,r);n.body=i.toString()}else if(c.includes("multipart/form-data")||e.data instanceof FormData){const i=new FormData;if(e.data instanceof FormData)e.data.forEach((r,l)=>{i.append(l,r)});else for(const r of Object.keys(e.data))i.append(r,e.data[r]);n.body=i;const d=new Headers(n.headers);d.delete("content-type"),n.headers=d}else(c.includes("application/json")||typeof e.data=="object")&&(n.body=JSON.stringify(e.data));return n};class o9 extends In{async request(a){const n=lc(a,a.webFetchExtra),s=n9(a.params,a.shouldEncodeUrlParams),c=s?`${a.url}?${s}`:a.url,i=await fetch(c,n),d=i.headers.get("content-type")||"";let{responseType:r="text"}=i.ok?a:{};d.includes("application/json")&&(r="json");let l,p;switch(r){case"arraybuffer":case"blob":p=await i.blob(),l=await t9(p);break;case"json":l=await i.json();break;case"document":case"text":default:l=await i.text()}const g={};return i.headers.forEach((m,x)=>{g[x]=m}),{data:l,headers:g,status:i.status,url:i.url}}async get(a){return this.request(Object.assign(Object.assign({},a),{method:"GET"}))}async post(a){return this.request(Object.assign(Object.assign({},a),{method:"POST"}))}async put(a){return this.request(Object.assign(Object.assign({},a),{method:"PUT"}))}async patch(a){return this.request(Object.assign(Object.assign({},a),{method:"PATCH"}))}async delete(a){return this.request(Object.assign(Object.assign({},a),{method:"DELETE"}))}}const hc=vt("CapacitorHttp",{web:()=>new o9}),En=Object.freeze(Object.defineProperty({__proto__:null,Capacitor:dt,CapacitorCookies:e9,CapacitorException:Yt,CapacitorHttp:hc,get ExceptionCode(){return rt},WebPlugin:In,WebView:X7,buildRequestInit:lc,registerPlugin:vt},Symbol.toStringTag,{value:"Module"})),pc=vt("App",{web:()=>Me(()=>import("./web-_eQOoooP.js"),__vite__mapDeps([0,1]),import.meta.url).then(e=>new e.AppWeb)}),s9=Object.freeze(Object.defineProperty({__proto__:null,App:pc},Symbol.toStringTag,{value:"Module"}));var dn;(function(e){e.Dark="DARK",e.Light="LIGHT",e.Default="DEFAULT"})(dn||(dn={}));var ln;(function(e){e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none"})(ln||(ln={}));const mc=vt("Keyboard"),c9=Object.freeze(Object.defineProperty({__proto__:null,Keyboard:mc,get KeyboardResize(){return ln},get KeyboardStyle(){return dn}},Symbol.toStringTag,{value:"Module"}));function zt({title:e,code:a,future:n,children:s}){return t.jsxs("div",{className:"min-h-screen bg-paper px-4 pt-safe",children:[t.jsx("div",{className:"h-14 flex items-center justify-center",children:t.jsx("span",{className:"t-h3",children:e})}),t.jsxs("div",{className:"mt-2 rounded-card bg-surface shadow-card p-4",children:[t.jsxs("div",{className:"t-body text-ink-2",children:[a?`${a} · `:"",e]}),n?t.jsxs("div",{className:"mt-2 t-caption text-ink-3",children:["由 ",n," 承接（T04/T05 交付）"]}):null,s?t.jsx("div",{className:"mt-3",children:s}):null]})]})}const X1=e=>{let a;const n=new Set,s=(p,g)=>{const m=typeof p=="function"?p(a):p;if(!Object.is(m,a)){const x=a;a=g??(typeof m!="object"||m===null)?m:Object.assign({},a,m),n.forEach(k=>k(a,x))}},c=()=>a,r={setState:s,getState:c,getInitialState:()=>l,subscribe:p=>(n.add(p),()=>n.delete(p))},l=a=e(s,c,r);return r},i9=e=>e?X1(e):X1,r9=e=>e;function d9(e,a=r9){const n=St.useSyncExternalStore(e.subscribe,St.useCallback(()=>a(e.getState()),[e,a]),St.useCallback(()=>a(e.getInitialState()),[e,a]));return St.useDebugValue(n),n}const l9=e=>{const a=i9(e),n=s=>d9(a,s);return Object.assign(n,a),n},Mt=e=>l9;function Q1(e){if(typeof document>"u")return;document.documentElement.setAttribute("data-theme",e);const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",e==="dark"?"#121513":"#f4f5f3"),h9(e)}async function h9(e){try{if(!window.Capacitor?.isNativePlatform?.())return;const{StatusBar:n,Style:s}=await Me(async()=>{const{StatusBar:c,Style:i}=await import("./index-xRIURe-Q.js");return{StatusBar:c,Style:i}},__vite__mapDeps([2,1]),import.meta.url);await n.setStyle({style:e==="dark"?s.Dark:s.Light}),await n.setBackgroundColor({color:e==="dark"?"#121513":"#f4f5f3"})}catch{}}const p9={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function je(){if(typeof window>"u")return!1;const e=window.Capacitor;if(!e)return!1;const a=e.isNativePlatform;if(typeof a=="function")try{return a.call(e)===!0}catch{return!1}const n=e.getPlatform;if(typeof n=="function")try{return n.call(e)!=="web"}catch{return!1}return!1}function m9(){try{return p9??{}}catch{return{}}}function u9(){return m9().DEV===!0}function y9(){return!je()&&u9()}const k9={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},f9=/(token|password|passwd|secret|authorization|api[-_]?key|^key$|cookie|code)/i,eo=/^(Bearer\s+)[^\s]+/i,x9="***";function hn(e,a=0){if(a>6||e===null||e===void 0)return e;if(typeof e=="string")return eo.test(e)?e.replace(eo,"$1***"):e;if(Array.isArray(e))return e.map(n=>hn(n,a+1));if(typeof e=="object"){const n={};for(const[s,c]of Object.entries(e))n[s]=f9.test(s)?x9:hn(c,a+1);return n}return e}function g9(){try{const e=k9??{};return e.DEV===!0||e.MODE==="development"}catch{return!1}}function Ra(e,a,n){if(!g9())return;const s=n.map(c=>hn(c));console[e](`[guifou:${a}]`,...s)}const be={debug:(e,...a)=>Ra("log",e,a),warn:(e,...a)=>Ra("warn",e,a),error:(e,...a)=>Ra("error",e,a)};function b9(){const e=new Map;return{name:"memory",async get(a){return e.has(a)?e.get(a):null},async set(a,n){e.set(a,n)},async remove(a){e.delete(a)}}}function v9(e){return{name:"localStorage",async get(a){return e.getItem(a)},async set(a,n){e.setItem(a,n)},async remove(a){e.removeItem(a)}}}function M9(e){return{name:"preferences",async get(a){return(await e.get({key:a}))?.value??null},async set(a,n){await e.set({key:a,value:n})},async remove(a){await e.remove({key:a})}}}let Ue=null;async function Pn(){if(Ue)return Ue;if(je())try{const a=await Me(()=>import("./index-MY-HQIDo.js"),__vite__mapDeps([3,1]),import.meta.url);return Ue=M9(a.Preferences),Ue}catch(a){be.warn("kv","Preferences 不可用，回落 localStorage",a)}const e=typeof globalThis<"u"?globalThis.localStorage:void 0;return e?(Ue=v9(e),Ue):(Ue=b9(),Ue)}async function we(e,a=null){try{const s=await(await Pn()).get(e);return s==null||s===""?a:JSON.parse(s)}catch(n){return be.warn("kv",`读取失败：${e}`,n),a}}async function Ne(e,a){try{await(await Pn()).set(e,JSON.stringify(a))}catch(n){throw be.error("kv",`写入失败：${e}`,n),n}}async function w9(e){try{await(await Pn()).remove(e)}catch(a){be.warn("kv",`删除失败：${e}`,a)}}const Xe=["goods","subscriptions","bills","valueRecords","moods","times","wishlist","cooldowns","categories","usageRecords","reminders","walls"],Tn="guifou.kv.",aa="guifou.user",Rn="guifou.selfhost",_9="guifou.parse.rules",j9="guifou.rates.v2",Ct="guifou.ui",On="guifou.seeded.v1",At=`${Tn}settings`,Bn=`${Tn}servers`,z9=`${Tn}backupMeta`;function Ma(e){return`guifou.${e}`}const $9=Xe.map(e=>Ma(e));[...$9];/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=e=>e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function N9(e,a,n=[]){if(a==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:D9(e),size:24,node:a,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=e=>{let a="",n=!1;for(const s of e){if(s==="-"||s==="_"||s<=" "){n=a.length>0;continue}a.length===0?a+=s.toLowerCase():a+=n?s.toUpperCase():s,n=!1}return a};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=e=>{const a=S9(e);return a.charAt(0).toUpperCase()+a.slice(1)};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=(...e)=>e.filter((a,n,s)=>!!a&&a.trim()!==""&&s.indexOf(a)===n).join(" ").trim();/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Oa(e){return e!=null}function A9(e,a={}){const n=a.attributeNames??{},s=x=>n[x]??x,c=e.size??e.width??Qe.width,i=e.size??e.height??Qe.height,d=e.aliases?.filter(x=>typeof x=="string"&&x.trim()!=="").map(x=>`lucide-${x}`)??[],r=[...e.name?[`lucide-${e.name}`]:[],...d],l=a.className?.split(" ").filter(Boolean)??[],p=a.includeDefaultClasses===!1?pn(...l):pn("lucide",...r,...l),g=a.absoluteStrokeWidth?Number(a.strokeWidth??Qe["stroke-width"])*Number(e.size??e.width??Qe.width)/Number(a.size??a.width??Qe.width):a.strokeWidth??Qe["stroke-width"];return["svg",{...Object.entries(Qe).reduce((x,[k,y])=>(x[s(k)]=y,x),{}),..."color"in a&&a.color&&{[s("stroke")]:a.color},..."size"in a&&Oa(a.size)&&{[s("width")]:a.size,[s("height")]:a.size},..."width"in a&&Oa(a.width)&&{[s("width")]:a.width},..."height"in a&&Oa(a.height)&&{[s("height")]:a.height},[s("stroke-width")]:g,...p&&{[s("class")]:p},[s("viewBox")]:`0 0 ${c} ${i}`,...a.hasA11yProp===!1?{[s("aria-hidden")]:"true"}:{},..."attributes"in a&&a.attributes},e.node.map(x=>{const[k,y,M]=x,f=a.nonScalingStroke?{[s("vector-effect")]:"non-scaling-stroke",...y}:y;return M?[k,f,M]:[k,f]})]}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function q9(e,a={}){return A9(e,{...a,attributeNames:{...a.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=e=>{for(const a in e)if(a.startsWith("aria-")||a==="role"||a==="title")return!0;return!1},H9=u.createContext({}),V9=()=>u.useContext(H9),I9=u.forwardRef(({color:e,size:a,width:n,height:s,strokeWidth:c,absoluteStrokeWidth:i,nonScalingStroke:d,className:r="",children:l,iconNode:p=[],icon:g={node:p,aliases:[],size:24},...m},x)=>{const{size:k=24,strokeWidth:y=2,absoluteStrokeWidth:M=!1,nonScalingStroke:f=!1,color:z="currentColor",className:V=""}=V9()??{},S=!!l||L9(m),[j,w,N=[]]=q9(g,{color:e??z,width:n??a??k,height:s??a??k,strokeWidth:c??y,absoluteStrokeWidth:i??M,nonScalingStroke:d??f,className:pn(V,r),hasA11yProp:S,attributes:m});return u.createElement(j,{ref:x,...w},[...N.map(([R,P])=>u.createElement(R,P)),...Array.isArray(l)?l:[l]])});/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function o(e,a=[],n=[]){const s=typeof e=="string"?N9(e,a,n):e,c=u.forwardRef(({className:i,...d},r)=>u.createElement(I9,{ref:r,icon:s,className:i,...d}));return s.name&&(c.displayName=C9(s.name)),c}/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc={name:"a-arrow-down",size:24,node:[["path",{d:"m14 12 4 4 4-4",key:"buelq4"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",key:"d5nyq2"}],["path",{d:"M3.304 13h6.392",key:"1q3zxz"}]]};uc.node;const E9=o(uc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc={name:"a-arrow-up",size:24,node:[["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",key:"d5nyq2"}],["path",{d:"M3.304 13h6.392",key:"1q3zxz"}]]};yc.node;const P9=o(yc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc={name:"a-large-small",size:24,node:[["path",{d:"m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16",key:"xik6mr"}],["path",{d:"M15.697 14h5.606",key:"1stdlc"}],["path",{d:"m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16",key:"d5nyq2"}],["path",{d:"M3.304 13h6.392",key:"1q3zxz"}]]};kc.node;const T9=o(kc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc={name:"accessibility",size:24,node:[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]};fc.node;const R9=o(fc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc={name:"activity",size:24,node:[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]};xc.node;const O9=o(xc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc={name:"ad",size:24,node:[["path",{d:"M10 13H6",key:"18d9xh"}],["path",{d:"M10 15v-4a2 2 0 0 0-4 0v4",key:"ss28p3"}],["path",{d:"M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z",key:"b3f847"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]]};gc.node;const B9=o(gc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc={name:"air-vent",size:24,node:[["path",{d:"M18 17.5a2.5 2.5 0 1 1-4 2.03V12",key:"yd12zl"}],["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M6.6 15.572A2 2 0 1 0 10 17v-5",key:"1x1kqn"}]]};bc.node;const vc=o(bc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc={name:"airplay",size:24,node:[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]]};Mc.node;const wc=o(Mc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c={name:"alarm-clock",size:24,node:[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]};_c.node;const F9=o(_c);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc={name:"ambulance",size:24,node:[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]};jc.node;const W9=o(jc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc={name:"amphora",size:24,node:[["path",{d:"M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",key:"1h8rid"}],["path",{d:"M10 5H8a2 2 0 0 0 0 4h.68",key:"3ezsi6"}],["path",{d:"M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",key:"yt6q09"}],["path",{d:"M14 5h2a2 2 0 0 1 0 4h-.68",key:"8f95yk"}],["path",{d:"M18 22H6",key:"mg6kv4"}],["path",{d:"M9 2h6",key:"1jrp98"}]]};zc.node;const U9=o(zc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c={name:"anchor",size:24,node:[["path",{d:"M12 6v16",key:"nqf5sj"}],["path",{d:"m19 13 2-1a9 9 0 0 1-18 0l2 1",key:"y7qv08"}],["path",{d:"M9 11h6",key:"1fldmi"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}]]};$c.node;const G9=o($c);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc={name:"angle",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M3 11a10 10 0 0 1 10 10",key:"jhvw44"}]]};Dc.node;const Y9=o(Dc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc={name:"antenna",size:24,node:[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]};Nc.node;const Z9=o(Nc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc={name:"anvil",size:24,node:[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]]};Sc.node;const K9=o(Sc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc={name:"aperture",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]};Cc.node;const J9=o(Cc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac={name:"app-window-mac",size:24,node:[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M14 8h.01",key:"1primd"}]]};Ac.node;const X9=o(Ac);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc={name:"app-window",size:24,node:[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]};qc.node;const Q9=o(qc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc={name:"apple",size:24,node:[["path",{d:"M12 6.528V3a1 1 0 0 1 1-1h0",key:"11qiee"}],["path",{d:"M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21",key:"110c12"}]]};Lc.node;const ev=o(Lc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc={name:"archive-restore",size:24,node:[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]};Hc.node;const tv=o(Hc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc={name:"archive-x",size:24,node:[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]};Vc.node;const av=o(Vc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic={name:"archive",size:24,node:[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]};Ic.node;const nv=o(Ic);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec={name:"armchair",size:24,node:[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]};Ec.node;const ov=o(Ec);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc={name:"armenian-dram",size:24,node:[["path",{d:"M11 10h8",key:"cn0dty"}],["path",{d:"M11 14h8",key:"lksjnm"}],["path",{d:"M17 20V10a6 6 0 0 0-12 0",key:"1gdsmd"}]]};Pc.node;const sv=o(Pc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc={name:"arrow-down-wide-narrow",size:24,node:[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]],aliases:["sort-desc"]};Tc.node;const cv=o(Tc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc={name:"arrow-left",size:24,node:[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]};Rc.node;const iv=o(Rc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc={name:"arrow-up-narrow-wide",size:24,node:[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]],aliases:["sort-asc"]};Oc.node;const rv=o(Oc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc={name:"astroid",size:24,node:[["path",{d:"M12.983 21.186a1 1 0 0 1-1.966 0 10 10 0 0 0-8.203-8.203 1 1 0 0 1 0-1.966 10 10 0 0 0 8.203-8.203 1 1 0 0 1 1.966 0 10 10 0 0 0 8.203 8.203 1 1 0 0 1 0 1.966 10 10 0 0 0-8.203 8.203",key:"1tipus"}]]};Bc.node;const dv=o(Bc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc={name:"atom",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]};Fc.node;const lv=o(Fc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc={name:"audio-lines",size:24,node:[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]};Wc.node;const hv=o(Wc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc={name:"award",size:24,node:[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]};Uc.node;const pv=o(Uc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc={name:"axe",size:24,node:[["path",{d:"m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9",key:"5z9253"}],["path",{d:"M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z",key:"19zklq"}]]};Gc.node;const mv=o(Gc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc={name:"axis-3d",size:24,node:[["path",{d:"M13.5 10.5 15 9",key:"1nsxvm"}],["path",{d:"M4 4v15a1 1 0 0 0 1 1h15",key:"1w6lkd"}],["path",{d:"M4.293 19.707 6 18",key:"3g1p8c"}],["path",{d:"m9 15 1.5-1.5",key:"1xfbes"}]],aliases:["axis-3-d"]};Yc.node;const to=o(Yc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc={name:"baby",size:24,node:[["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"11xh7x"}],["path",{d:"M9 12h.01",key:"157uk2"}]]};Zc.node;const Kc=o(Zc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc={name:"backpack",size:24,node:[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1ol0lm"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}],["path",{d:"M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6",key:"1fr6do"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}]]};Jc.node;const Xc=o(Jc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc={name:"badge-check",size:24,node:[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["verified"]};Qc.node;const ei=o(Qc);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti={name:"badge",size:24,node:[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]};ti.node;const uv=o(ti);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai={name:"baggage-claim",size:24,node:[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]};ai.node;const yv=o(ai);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni={name:"balloon",size:24,node:[["path",{d:"M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1",key:"2nz4b"}],["path",{d:"M12 6a2 2 0 0 1 2 2",key:"7y7d82"}],["path",{d:"M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0",key:"vqb5s3"}]]};ni.node;const kv=o(ni);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi={name:"banana",size:24,node:[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]};oi.node;const fv=o(oi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si={name:"bandage",size:24,node:[["path",{d:"M10 10.01h.01",key:"1e9xi7"}],["path",{d:"M10 14.01h.01",key:"ac23bv"}],["path",{d:"M14 10.01h.01",key:"2wfrvf"}],["path",{d:"M14 14.01h.01",key:"8tw8yn"}],["path",{d:"M18 6v12",key:"1bcixs"}],["path",{d:"M6 6v12",key:"vkc79e"}],["rect",{x:"2",y:"6",width:"20",height:"12",rx:"2",key:"1wpnh2"}]]};si.node;const xv=o(si);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci={name:"ban",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}]]};ci.node;const gv=o(ci);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii={name:"bangladeshi-taka",size:24,node:[["path",{d:"M6 5a2 2 0 0 1 4 0v12a4 4 0 0 0 8 0 2 2 0 0 0-4 0",key:"1rv5si"}],["path",{d:"M6 9h12",key:"oae0tv"}]]};ii.node;const bv=o(ii);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri={name:"banknote",size:24,node:[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]};ri.node;const vv=o(ri);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di={name:"barcode",size:24,node:[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]};di.node;const Mv=o(di);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li={name:"barrel",size:24,node:[["path",{d:"M10 3a41 41 0 000 18",key:"1f9k6x"}],["path",{d:"M14 3a41 41 0 010 18",key:"1qo28r"}],["path",{d:"M16.997 21a2 2 0 001.68-.92 15.25 15.25 0 000-16.16 2 2 0 00-1.68-.92h-10a2 2 0 00-1.681.92 15.25 15.25 0 000 16.16 2 2 0 001.681.92z",key:"1nrwe5"}],["path",{d:"M3.54 16h16.914",key:"jntgtt"}],["path",{d:"M3.54 8h16.914",key:"14pf7i"}]]};li.node;const wv=o(li);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi={name:"bath",size:24,node:[["path",{d:"M10 4 8 6",key:"1rru8s"}],["path",{d:"M17 19v2",key:"ts1sot"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M7 19v2",key:"12npes"}],["path",{d:"M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"14ym8i"}]]};hi.node;const pi=o(hi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi={name:"battery-charging",size:24,node:[["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["path",{d:"M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935",key:"lre1cr"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936",key:"13q5k0"}]]};mi.node;const ui=o(mi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi={name:"battery-full",size:24,node:[["path",{d:"M10 10v4",key:"1mb2ec"}],["path",{d:"M14 10v4",key:"1nt88p"}],["path",{d:"M22 14v-4",key:"14q9d5"}],["path",{d:"M6 10v4",key:"1n77qd"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]]};yi.node;const _v=o(yi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki={name:"battery",size:24,node:[["path",{d:"M 22 14 L 22 10",key:"nqc4tb"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]]};ki.node;const jv=o(ki);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi={name:"beaker",size:24,node:[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]};fi.node;const zv=o(fi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi={name:"bean-off",size:24,node:[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]};xi.node;const $v=o(xi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi={name:"bean",size:24,node:[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]};gi.node;const Dv=o(gi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi={name:"bed-double",size:24,node:[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]};bi.node;const wa=o(bi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi={name:"bed-single",size:24,node:[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]};vi.node;const Nv=o(vi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi={name:"bed",size:24,node:[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]};Mi.node;const Sv=o(Mi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi={name:"beef-off",size:24,node:[["path",{d:"M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12",key:"3w1grc"}],["path",{d:"M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04",key:"1xgl7b"}],["path",{d:"M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"3m3yc0"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393",key:"1rvkn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151",key:"54713r"}]]};wi.node;const Cv=o(wi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i={name:"beef",size:24,node:[["path",{d:"M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3",key:"cisjcv"}],["path",{d:"m18.5 6 1.754 3.5a6.48 6.48 0 0 1-1.854 8.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"hvizuk"}],["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}]]};_i.node;const Av=o(_i);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji={name:"beer",size:24,node:[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]};ji.node;const qv=o(ji);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi={name:"bell-ring",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}]]};zi.node;const Lv=o(zi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i={name:"bell",size:24,node:[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]};$i.node;const Hv=o($i);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di={name:"between-horizontal-start",size:24,node:[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]],aliases:["between-horizonal-start"]};Di.node;const ao=o(Di);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni={name:"between-horizontal-end",size:24,node:[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]],aliases:["between-horizonal-end"]};Ni.node;const no=o(Ni);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si={name:"between-vertical-end",size:24,node:[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]};Si.node;const Vv=o(Si);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci={name:"between-vertical-start",size:24,node:[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]};Ci.node;const Iv=o(Ci);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai={name:"biceps-flexed",size:24,node:[["path",{d:"M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1",key:"1pmlyh"}],["path",{d:"M15 14a5 5 0 0 0-7.584 2",key:"5rb254"}],["path",{d:"M9.964 6.825C8.019 7.977 9.5 13 8 15",key:"kbvsx9"}]]};Ai.node;const Ev=o(Ai);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi={name:"bike",size:24,node:[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]};qi.node;const na=o(qi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li={name:"binary",size:24,node:[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]};Li.node;const Pv=o(Li);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi={name:"binoculars",size:24,node:[["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",key:"3apit1"}],["path",{d:"M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z",key:"rhpgnw"}],["path",{d:"M 22 16 L 2 16",key:"14lkq7"}],["path",{d:"M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z",key:"104b3k"}],["path",{d:"M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3",key:"14fczp"}]]};Hi.node;const Tv=o(Hi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi={name:"biohazard",size:24,node:[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]};Vi.node;const Rv=o(Vi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii={name:"birdhouse",size:24,node:[["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m17 18 1.956-11.468",key:"l5n2ro"}],["path",{d:"m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8",key:"1sy6n7"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M7 18 5.044 6.532",key:"1uqdf2"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}]]};Ii.node;const Ov=o(Ii);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei={name:"bird",size:24,node:[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]};Ei.node;const Bv=o(Ei);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi={name:"blend",size:24,node:[["circle",{cx:"15",cy:"9",r:"7",key:"1i12rt"}],["circle",{cx:"9",cy:"15",r:"7",key:"19bs8k"}]]};Pi.node;const Fv=o(Pi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti={name:"bitcoin",size:24,node:[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]};Ti.node;const Wv=o(Ti);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri={name:"blender",size:24,node:[["path",{d:"M8 14a2 2 0 0 0-1.963 1.615l-1.018 5.193A1 1 0 0 0 6 22h12a1 1 0 0 0 .981-1.192l-1.018-5.193A2 2 0 0 0 16 14z",key:"11zxmj"}],["path",{d:"m17 2-1 12",key:"nxm2fw"}],["path",{d:"M8.006 14 7 2",key:"13bxiv"}],["path",{d:"M7.565 8.787A5 5 0 0 0 12 8a5 5 0 0 1 4.56-.75",key:"1s61ad"}],["path",{d:"M19 2H5a2 2 0 0 0-2 2v5a2 2 0 0 0 .688 1.5",key:"gel3rg"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};Ri.node;const Oi=o(Ri);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi={name:"blinds",size:24,node:[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]};Bi.node;const Uv=o(Bi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi={name:"blocks",size:24,node:[["path",{d:"M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2",key:"1ah6g2"}],["rect",{x:"14",y:"2",width:"8",height:"8",rx:"1",key:"88lufb"}]]};Fi.node;const Gv=o(Fi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi={name:"bluetooth",size:24,node:[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]};Wi.node;const Yv=o(Wi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui={name:"bolt",size:24,node:[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]};Ui.node;const Zv=o(Ui);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi={name:"bomb",size:24,node:[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]};Gi.node;const Kv=o(Gi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi={name:"bone-fracture",size:24,node:[["path",{d:"M14 4.5a1 1 0 0 1 5 0 .5.5 0 0 0 .5.5 1 1 0 0 1 0 5c-.81 0-1.8-.7-2.5 0l-1.958 1.957a.15.15 0 0 1-.252-.072l-.493-2.07a.15.15 0 0 0-.111-.112l-2.072-.494a.15.15 0 0 1-.072-.252L14 7c.7-.7 0-1.69 0-2.5",key:"1c7o5b"}],["path",{d:"m16 20-1-2",key:"5348lt"}],["path",{d:"m20 16-2-1",key:"2c7pv5"}],["path",{d:"m4 8 2 1",key:"rpj1x4"}],["path",{d:"m8 4 1 2",key:"1r4zbp"}],["path",{d:"M9.698 14.19a.15.15 0 0 0 .112.112l2.074.489a.15.15 0 0 1 .072.252L10 17c-.7.7 0 1.69 0 2.5a1 1 0 0 1-5 0 .495.495 0 0 0-.5-.5 1 1 0 0 1 0-5c.81 0 1.8.7 2.5 0l1.956-1.957a.15.15 0 0 1 .252.072z",key:"3u61yx"}]]};Yi.node;const Jv=o(Yi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi={name:"bone",size:24,node:[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]};Zi.node;const Xv=o(Zi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki={name:"book-a",size:24,node:[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]};Ki.node;const Qv=o(Ki);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji={name:"book-alert",size:24,node:[["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M12 6v3",key:"1m4b9j"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]};Ji.node;const eM=o(Ji);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi={name:"book-audio",size:24,node:[["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 8v3",key:"1qzp49"}]]};Xi.node;const tM=o(Xi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi={name:"book-bookmark",size:24,node:[["path",{d:"M10 2v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834A.25.25 0 0016 9.751V2",key:"x9x4jl"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 016.5 2H19a1 1 0 011 1v18a1 1 0 01-1 1H6.5a1 1 0 010-5H20",key:"1889un"}]],aliases:["book-marked"]};Qi.node;const oo=o(Qi);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er={name:"book-check",size:24,node:[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]};er.node;const aM=o(er);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr={name:"book-dashed",size:24,node:[["path",{d:"M12 17h1.5",key:"1gkc67"}],["path",{d:"M12 22h1.5",key:"1my7sn"}],["path",{d:"M12 2h1.5",key:"19tvb7"}],["path",{d:"M17.5 22H19a1 1 0 0 0 1-1",key:"10akbh"}],["path",{d:"M17.5 2H19a1 1 0 0 1 1 1v1.5",key:"1vrfjs"}],["path",{d:"M20 14v3h-2.5",key:"1naeju"}],["path",{d:"M20 8.5V10",key:"1ctpfu"}],["path",{d:"M4 10V8.5",key:"1o3zg5"}],["path",{d:"M4 19.5V14",key:"ob81pf"}],["path",{d:"M4 4.5A2.5 2.5 0 0 1 6.5 2H8",key:"s8vcyb"}],["path",{d:"M8 22H6.5a1 1 0 0 1 0-5H8",key:"1cu73q"}]],aliases:["book-template"]};tr.node;const so=o(tr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar={name:"book-down",size:24,node:[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]};ar.node;const nM=o(ar);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr={name:"book-copy",size:24,node:[["path",{d:"M5 7a2 2 0 0 0-2 2v11",key:"1yhqjt"}],["path",{d:"M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21",key:"edzzo5"}],["path",{d:"M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10",key:"1nwzrg"}]]};nr.node;const oM=o(nr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or={name:"book-headphones",size:24,node:[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]};or.node;const sM=o(or);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr={name:"book-image",size:24,node:[["path",{d:"m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17",key:"q6ojf0"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}]]};sr.node;const cM=o(sr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr={name:"book-heart",size:24,node:[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",key:"9v40y5"}]]};cr.node;const iM=o(cr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir={name:"book-key",size:24,node:[["path",{d:"M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15",key:"4azifu"}],["path",{d:"M17 2v6",key:"qgmh37"}],["path",{d:"M17 4h2",key:"13vrzo"}],["path",{d:"M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"192hzx"}],["circle",{cx:"17",cy:"10",r:"2",key:"y0i25j"}]]};ir.node;const rM=o(ir);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr={name:"book-lock",size:24,node:[["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}],["path",{d:"M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"1rkj32"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["rect",{x:"12",y:"6",width:"8",height:"5",rx:"1",key:"73l30o"}]]};rr.node;const dM=o(rr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr={name:"book-minus",size:24,node:[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]};dr.node;const lM=o(dr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr={name:"book-open-check",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2h4.001A2 2 0 0022 17v-1.344",key:"144kbk"}]]};lr.node;const hM=o(lr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr={name:"book-open-text",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M16 13h2",key:"weia3s"}],["path",{d:"M16 9h2",key:"1n7gjm"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}],["path",{d:"M6 13h2",key:"1cckiz"}],["path",{d:"M6 9h2",key:"1k7j9f"}]]};hr.node;const pM=o(hr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr={name:"book-open",size:24,node:[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]]};pr.node;const _a=o(pr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr={name:"book-plus",size:24,node:[["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]};mr.node;const mM=o(mr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur={name:"book-search",size:24,node:[["path",{d:"M11 22H5.5a1 1 0 0 1 0-5h4.501",key:"mcbepb"}],["path",{d:"m21 22-1.879-1.878",key:"12q7x1"}],["path",{d:"M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8",key:"olfd5n"}],["circle",{cx:"17",cy:"18",r:"3",key:"82mm0e"}]]};ur.node;const uM=o(ur);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr={name:"book-text",size:24,node:[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h6",key:"1f0q6e"}]]};yr.node;const yM=o(yr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr={name:"book-type",size:24,node:[["path",{d:"M10 13h4",key:"ytezjc"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]};kr.node;const kM=o(kr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr={name:"book-up-2",size:24,node:[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"161d7n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]};fr.node;const fM=o(fr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr={name:"book-up",size:24,node:[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]};xr.node;const xM=o(xr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr={name:"book-user",size:24,node:[["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}]]};gr.node;const gM=o(gr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br={name:"book-x",size:24,node:[["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]};br.node;const bM=o(br);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr={name:"book",size:24,node:[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]};vr.node;const Mr=o(vr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};wr.node;const vM=o(wr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r={name:"boom-box",size:24,node:[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]};_r.node;const MM=o(_r);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr={name:"bot",size:24,node:[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]};jr.node;const zr=o(jr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r={name:"bow-arrow",size:24,node:[["path",{d:"M17 3h4v4",key:"19p9u1"}],["path",{d:"M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17",key:"12t3w9"}],["path",{d:"M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05",key:"ogng5l"}],["path",{d:"M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z",key:"8v3fy2"}],["path",{d:"M9.707 14.293 21 3",key:"ydm3bn"}]]};$r.node;const wM=o($r);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Dr.node;const _M=o(Dr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr={name:"boxes",size:24,node:[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]};Nr.node;const Sr=o(Nr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr={name:"braces",size:24,node:[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]],aliases:["curly-braces"]};Cr.node;const jM=o(Cr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar={name:"brain-circuit",size:24,node:[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]};Ar.node;const zM=o(Ar);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr={name:"brain-cog",size:24,node:[["path",{d:"m10.852 14.772-.383.923",key:"11vil6"}],["path",{d:"m10.852 9.228-.383-.923",key:"1fjppe"}],["path",{d:"m13.148 14.772.382.924",key:"je3va1"}],["path",{d:"m13.531 8.305-.383.923",key:"18epck"}],["path",{d:"m14.772 10.852.923-.383",key:"k9m8cz"}],["path",{d:"m14.772 13.148.923.383",key:"1xvhww"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771",key:"jcbbz1"}],["path",{d:"M17.998 5.125a4 4 0 0 1 2.525 5.771",key:"1kkn7e"}],["path",{d:"M19.505 10.294a4 4 0 0 1-1.5 7.706",key:"18bmuc"}],["path",{d:"M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516",key:"uozx0d"}],["path",{d:"M4.5 10.291A4 4 0 0 0 6 18",key:"whdemb"}],["path",{d:"M6.002 5.125a3 3 0 0 0 .4 1.375",key:"1kqy2g"}],["path",{d:"m9.228 10.852-.923-.383",key:"1wtb30"}],["path",{d:"m9.228 13.148-.923.383",key:"1a830x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};qr.node;const $M=o(qr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr={name:"brain",size:24,node:[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]};Lr.node;const Fn=o(Lr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr={name:"brick-wall-fire",size:24,node:[["path",{d:"M16 3v2.107",key:"gq8xun"}],["path",{d:"M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9",key:"1l2pih"}],["path",{d:"M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938",key:"jrnqjp"}],["path",{d:"M3 15h5.253",key:"xqg7rb"}],["path",{d:"M3 9h8.228",key:"1ppb70"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]};Hr.node;const DM=o(Hr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr={name:"brick-wall-shield",size:24,node:[["path",{d:"M12 9v1.258",key:"iwpddn"}],["path",{d:"M16 3v5.46",key:"d7ew98"}],["path",{d:"M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75",key:"137t5x"}],["path",{d:"M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z",key:"16j3tf"}],["path",{d:"M3 15h7",key:"1qldh6"}],["path",{d:"M3 9h12.142",key:"1yjd6m"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]};Vr.node;const NM=o(Vr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir={name:"brick-wall",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]};Ir.node;const SM=o(Ir);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er={name:"bridge",size:24,node:[["path",{d:"M10 9.728V16",key:"o67grx"}],["path",{d:"M14 9.728V16",key:"podb55"}],["path",{d:"M18 20V4",key:"o2hl4u"}],["path",{d:"m22 11-4-4A7.5 7.5 0 0 1 6 7l-4 4",key:"uc7s7"}],["path",{d:"M22 16H2",key:"142mmy"}],["path",{d:"M6 20V4",key:"1w1bmo"}]]};Er.node;const CM=o(Er);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr={name:"briefcase",size:24,node:[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};Pr.node;const ja=o(Pr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr={name:"bring-to-front",size:24,node:[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]};Tr.node;const AM=o(Tr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr={name:"broccoli",size:24,node:[["path",{d:"M10 13a3 3 0 01-2.121-5.121",key:"1g9r2w"}],["path",{d:"M15.606 14.204c-3.5 1.5-5.899 4.503-8.899 7.503A1 1 0 016 22c-2 0-4-2-4-4a1 1 0 01.293-.707c1.911-1.911 3.823-3.578 5.347-5.441",key:"1ansp5"}],["path",{d:"M16.573 14.737A4 4 0 0114 11",key:"icunya"}],["path",{d:"M7.14 10.907a4 4 0 112.756-7.43A4 4 0 0116.7 4.48a2 2 0 012.82 2.82 4 4 0 011.002 6.805 4 4 0 11-7.51 1.59",key:"cbikky"}]]};Rr.node;const qM=o(Rr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or={name:"broom-sparkles",size:24,node:[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M12 3h-2",key:"1su5n0"}],["path",{d:"M13.5 10.5 22 2",key:"1yxz6l"}],["path",{d:"M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z",key:"1q75r6"}],["path",{d:"M20 15v4",key:"nmhudv"}],["path",{d:"M22 17h-4",key:"1sj068"}],["path",{d:"M4 4v4",key:"a4sqb9"}],["path",{d:"m5 18 2-2",key:"11qwpn"}],["path",{d:"M6 6H2",key:"1cli1h"}],["path",{d:"m7.699 10.7 5.602 5.601",key:"1rehuz"}]]};Or.node;const LM=o(Or);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br={name:"broom",size:24,node:[["path",{d:"M13.5 10.5 22 2",key:"1yxz6l"}],["path",{d:"M14.734 13.841a2 2 0 00-.314-2.42L12.58 9.58a2 2 0 00-2.421-.314l-7.657 4.461A1 1 0 002.3 15.3l6.403 6.403a1 1 0 001.571-.204z",key:"1q75r6"}],["path",{d:"m5 18 2-2",key:"11qwpn"}],["path",{d:"m7.699 10.7 5.602 5.601",key:"1rehuz"}]]};Br.node;const HM=o(Br);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr={name:"brush",size:24,node:[["path",{d:"m11 10 3 3",key:"fzmg1i"}],["path",{d:"M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z",key:"p4q2r7"}],["path",{d:"M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031",key:"wy6l02"}]]};Fr.node;const Wr=o(Fr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur={name:"bubbles",size:24,node:[["path",{d:"M7.001 15.085A1.5 1.5 0 0 1 9 16.5",key:"y44lvh"}],["circle",{cx:"18.5",cy:"8.5",r:"3.5",key:"1wadoa"}],["circle",{cx:"7.5",cy:"16.5",r:"5.5",key:"6mdt3g"}],["circle",{cx:"7.5",cy:"4.5",r:"2.5",key:"637s54"}]]};Ur.node;const VM=o(Ur);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr={name:"bug",size:24,node:[["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",key:"uouzyp"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M21 21a4 4 0 0 0-3.81-4",key:"1b0z45"}],["path",{d:"M21 5a4 4 0 0 1-3.55 3.97",key:"5cxbf6"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M3 21a4 4 0 0 1 3.81-4",key:"1fjd4g"}],["path",{d:"M3 5a4 4 0 0 0 3.55 3.97",key:"1d7oge"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13V6a3 3 0 1 1 6 0v1.13",key:"1vgav8"}]]};Gr.node;const IM=o(Gr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr={name:"building-complex-plus",size:24,node:[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 21v-3a2 2 0 013.05-1.702",key:"m393w2"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M18 7h2a2 2 0 012 2v4.355",key:"p613ng"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h8.535",key:"s5wgjh"}],["path",{d:"M6 21V5a2 2 0 012-2h8a2 2 0 012 2v7.126",key:"hmp3za"}]]};Yr.node;const EM=o(Yr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr={name:"building-complex",size:24,node:[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],aliases:["building-2"]};Zr.node;const co=o(Zr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr={name:"building",size:24,node:[["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3",key:"cabbwy"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]]};Kr.node;const PM=o(Kr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr={name:"bus-front",size:24,node:[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]};Jr.node;const TM=o(Jr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr={name:"bus",size:24,node:[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]};Xr.node;const oa=o(Xr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr={name:"cable",size:24,node:[["path",{d:"M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z",key:"trhst0"}],["path",{d:"M17 21v-2",key:"ds4u3f"}],["path",{d:"M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10",key:"1mo9zo"}],["path",{d:"M21 21v-2",key:"eo0ou"}],["path",{d:"M3 5V3",key:"1k5hjh"}],["path",{d:"M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z",key:"1dd30t"}],["path",{d:"M7 5V3",key:"1t1388"}]]};Qr.node;const e2=o(Qr);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2={name:"cake-slice",size:24,node:[["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}],["path",{d:"m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6",key:"1gmhf7"}],["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}]]};t2.node;const RM=o(t2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2={name:"cake",size:24,node:[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h.01",key:"1bh4kh"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M17 4h.01",key:"1upcoc"}]]};a2.node;const OM=o(a2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2={name:"calculator",size:24,node:[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]};n2.node;const o2=o(n2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2={name:"calendar-days",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]]};s2.node;const BM=o(s2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2={name:"calendar",size:24,node:[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]]};c2.node;const FM=o(c2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};i2.node;const za=o(i2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2={name:"can-soda",size:24,node:[["path",{d:"m17 22 1.664-2.496a2 2 0 00.336-1.11V5.606a2 2 0 00-.336-1.11L17 2",key:"8r63so"}],["path",{d:"M18 22H6",key:"mg6kv4"}],["path",{d:"M18 2H6",key:"10w3qr"}],["path",{d:"M5 17h14",key:"74xsq1"}],["path",{d:"M5 7h14",key:"1ic0q6"}],["path",{d:"m7 22-1.664-2.496A2 2 0 015 18.394V5.606a2 2 0 01.336-1.11L7 2",key:"p59xmm"}]]};r2.node;const WM=o(r2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2={name:"can",size:24,node:[["path",{d:"M21 10.5a9 2.5 0 01-18 0v8a9 2.5 0 0018 0z",key:"9pzxzq"}],["path",{d:"M21 10.5A9 2.5 25.32 004.59 3.47 9 2.5 25.32 0021 10.5",key:"9bp7vi"}],["path",{d:"M3 10.5a9 2.5 0 016.527-2.405",key:"13emm5"}],["path",{d:"M9 16.858a31 31 0 006 0",key:"1nnpid"}]]};d2.node;const UM=o(d2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2={name:"candy-cane",size:24,node:[["path",{d:"m10.8 5 2.111 4.223",key:"11kb8w"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"m4.874 14.647 2.12 4.24",key:"ccpt4b"}],["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2z",key:"u5e8z4"}],["path",{d:"m7.906 9.712 2.005 4.411",key:"1k0qph"}]]};l2.node;const GM=o(l2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2={name:"candy",size:24,node:[["path",{d:"M10 7v10.9",key:"1gynux"}],["path",{d:"M14 6.1V17",key:"116kdf"}],["path",{d:"M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4",key:"gpb6xx"}],["path",{d:"M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07",key:"1tsln4"}],["path",{d:"M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4",key:"qexcha"}]]};h2.node;const YM=o(h2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2={name:"cannabis-off",size:24,node:[["path",{d:"M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5",key:"1bqfb7"}],["path",{d:"M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9",key:"1p520n"}],["path",{d:"M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684",key:"q2itvb"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907",key:"j9amvs"}],["path",{d:"M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3",key:"8gmd5g"}]]};p2.node;const ZM=o(p2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2={name:"cannabis",size:24,node:[["path",{d:"M12 22v-4",key:"1utk9m"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",key:"1mezod"}]]};m2.node;const KM=o(m2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2={name:"captions-off",size:24,node:[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]]};u2.node;const JM=o(u2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2={name:"captions",size:24,node:[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]],aliases:["subtitles"]};y2.node;const io=o(y2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2={name:"car-front",size:24,node:[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]};k2.node;const f2=o(k2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2={name:"car-taxi-front",size:24,node:[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]};x2.node;const g2=o(x2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2={name:"car",size:24,node:[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]};b2.node;const Wn=o(b2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2={name:"carrot",size:24,node:[["path",{d:"M15 16a1 1 0 0 0-7-7q-4 4-5.987 12.385a.5.5 0 0 0 .602.602Q11 20 15 16l-3-3",key:"1ta62j"}],["path",{d:"M15 9q4 4 7 0-3-4-7 0 4-4 0-7-4 3 0 7",key:"1svf7i"}],["path",{d:"m8 15-2.58-2.58",key:"7t238r"}]]};v2.node;const XM=o(v2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2={name:"cassette-tape",size:24,node:[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]};M2.node;const QM=o(M2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2={name:"cast",size:24,node:[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]};w2.node;const _2=o(w2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2={name:"cat",size:24,node:[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]};j2.node;const ew=o(j2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2={name:"cctv-off",size:24,node:[["path",{d:"m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448",key:"e75roo"}],["path",{d:"m15.166 15.166-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037",key:"1h9o5r"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902",key:"1askrb"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M2 21v-4",key:"l40lih"}],["path",{d:"M7 9h.01",key:"19b3jx"}]]};z2.node;const tw=o(z2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2={name:"cctv",size:24,node:[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",key:"ir91b5"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",key:"jlp8i1"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}],["path",{d:"M7 9h.01",key:"19b3jx"}]]};$2.node;const aw=o($2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2={name:"chart-area",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z",key:"q0gr47"}]],aliases:["area-chart"]};D2.node;const ro=o(D2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2={name:"chart-bar-big",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]],aliases:["bar-chart-horizontal-big"]};N2.node;const lo=o(N2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2={name:"chart-bar-decreasing",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h3",key:"ur6vzw"}],["path",{d:"M7 6h12",key:"sz5b0d"}]]};S2.node;const nw=o(S2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2={name:"chart-bar-increasing",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 11h8",key:"1feolt"}],["path",{d:"M7 16h12",key:"wsnu98"}],["path",{d:"M7 6h3",key:"w9rmul"}]]};C2.node;const ow=o(C2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2={name:"chart-bar-stacked",size:24,node:[["path",{d:"M11 13v4",key:"vyy2rb"}],["path",{d:"M15 5v4",key:"1gx88a"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"7",y:"13",width:"9",height:"4",rx:"1",key:"1iip1u"}],["rect",{x:"7",y:"5",width:"12",height:"4",rx:"1",key:"1anskk"}]]};A2.node;const sw=o(A2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2={name:"chart-bar",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]],aliases:["bar-chart-horizontal"]};q2.node;const ho=o(q2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2={name:"chart-candlestick",size:24,node:[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]],aliases:["candlestick-chart"]};L2.node;const po=o(L2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2={name:"chart-column-big",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]],aliases:["bar-chart-big"]};H2.node;const mo=o(H2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2={name:"chart-column-decreasing",size:24,node:[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17v-3",key:"1sqioe"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17V5",key:"1wzmnc"}]]};V2.node;const cw=o(V2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2={name:"chart-column-increasing",size:24,node:[["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aliases:["bar-chart-4"]};I2.node;const uo=o(I2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2={name:"chart-column-stacked",size:24,node:[["path",{d:"M11 13H7",key:"t0o9gq"}],["path",{d:"M19 9h-4",key:"rera1j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["rect",{x:"15",y:"5",width:"4",height:"12",rx:"1",key:"q8uenq"}],["rect",{x:"7",y:"8",width:"4",height:"9",rx:"1",key:"sr5ea"}]]};E2.node;const iw=o(E2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2={name:"chart-column",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aliases:["bar-chart-3"]};P2.node;const mn=o(P2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2={name:"chart-gantt",size:24,node:[["path",{d:"M10 6h8",key:"zvc2xc"}],["path",{d:"M12 16h6",key:"yi5mkt"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M8 11h7",key:"wz2hg0"}]]};T2.node;const rw=o(T2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2={name:"chart-line",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]],aliases:["line-chart"]};R2.node;const yo=o(R2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2={name:"chart-network",size:24,node:[["path",{d:"m13.11 7.664 1.78 2.672",key:"go2gg9"}],["path",{d:"m14.162 12.788-3.324 1.424",key:"11x848"}],["path",{d:"m20 4-6.06 1.515",key:"1wxxh7"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["circle",{cx:"12",cy:"6",r:"2",key:"1jj5th"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}],["circle",{cx:"9",cy:"15",r:"2",key:"lf2ghp"}]]};O2.node;const dw=o(O2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2={name:"chart-no-axes-column-decreasing",size:24,node:[["path",{d:"M5 21V3",key:"clc1r8"}],["path",{d:"M12 21V9",key:"uvy0l4"}],["path",{d:"M19 21v-6",key:"tkawy9"}]]};B2.node;const lw=o(B2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2={name:"chart-no-axes-column-increasing",size:24,node:[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V9",key:"uvy0l4"}],["path",{d:"M19 21V3",key:"11j9sm"}]],aliases:["bar-chart"]};F2.node;const ko=o(F2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2={name:"chart-no-axes-column",size:24,node:[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],aliases:["bar-chart-2"]};W2.node;const fo=o(W2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2={name:"chart-no-axes-combined",size:24,node:[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14.639V21",key:"1s85h0"}],["path",{d:"M20 10.656V21",key:"q45596"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18.463V21",key:"1otddq"}],["path",{d:"M8 14.656V21",key:"1t2idw"}]]};U2.node;const hw=o(U2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2={name:"chart-no-axes-gantt",size:24,node:[["path",{d:"M6 5h12",key:"fvfigv"}],["path",{d:"M4 12h10",key:"oujl3d"}],["path",{d:"M12 19h8",key:"baeox8"}]],aliases:["gantt-chart"]};G2.node;const xo=o(G2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2={name:"chart-pie",size:24,node:[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]],aliases:["pie-chart"]};Y2.node;const go=o(Y2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2={name:"chart-scatter",size:24,node:[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}]],aliases:["scatter-chart"]};Z2.node;const bo=o(Z2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2={name:"chart-spline",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7",key:"lw07rv"}]]};K2.node;const pw=o(K2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2={name:"chef-hat",size:24,node:[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]};J2.node;const X2=o(J2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2={name:"cherry",size:24,node:[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]};Q2.node;const mw=o(Q2);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed={name:"chess-bishop",size:24,node:[["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z",key:"b89hwq"}],["path",{d:"M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18",key:"8jdkhx"}],["path",{d:"m16 7-2.5 2.5",key:"1jq90w"}],["path",{d:"M9 2h6",key:"1jrp98"}]]};ed.node;const uw=o(ed);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td={name:"chess-king",size:24,node:[["path",{d:"M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z",key:"mqzwx6"}],["path",{d:"m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1",key:"1gdt1g"}],["path",{d:"M10 4h4",key:"1xpv9s"}],["path",{d:"M12 2v6.818",key:"b17a49"}]]};td.node;const yw=o(td);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad={name:"chess-knight",size:24,node:[["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z",key:"b89hwq"}],["path",{d:"M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456",key:"axbnlq"}],["path",{d:"m15 5 1.425-1.425",key:"15xz8w"}],["path",{d:"m17 8 1.53-1.53",key:"15zhqh"}],["path",{d:"M9.713 12.185 7 18",key:"1ocm0l"}]]};ad.node;const kw=o(ad);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd={name:"chess-pawn",size:24,node:[["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z",key:"b89hwq"}],["path",{d:"m14.5 10 1.5 8",key:"cim3qy"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"m8 18 1.5-8",key:"ja3yjd"}],["circle",{cx:"12",cy:"6",r:"4",key:"1frrej"}]]};nd.node;const fw=o(nd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od={name:"chess-queen",size:24,node:[["path",{d:"M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z",key:"mqzwx6"}],["path",{d:"m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402",key:"1js4gl"}],["path",{d:"m20 9-3 9",key:"r75r3f"}],["path",{d:"m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34",key:"1joj19"}],["path",{d:"M7 18 4 9",key:"1mfzj8"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"7",r:"2",key:"9w7p1x"}],["circle",{cx:"4",cy:"7",r:"2",key:"1d9wy8"}]]};od.node;const xw=o(od);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd={name:"chess-rook",size:24,node:[["path",{d:"M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z",key:"b89hwq"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"m17 18-1-9",key:"10nd7q"}],["path",{d:"M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2",key:"uxf4yx"}],["path",{d:"M6 4h12",key:"1x2ag7"}],["path",{d:"m7 18 1-9",key:"1si9vq"}]]};sd.node;const gw=o(sd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};cd.node;const bw=o(cd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id={name:"church",size:24,node:[["path",{d:"M10 9h4",key:"u4k05v"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9",key:"flvdwo"}],["path",{d:"M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14",key:"a5i0n2"}]]};id.node;const vw=o(id);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd={name:"cigarette-off",size:24,node:[["path",{d:"M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13",key:"1gdiyg"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866",key:"166zjj"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]]};rd.node;const Mw=o(rd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd={name:"cigarette",size:24,node:[["path",{d:"M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14",key:"1mb5g1"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"1yl5r7"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}],["path",{d:"M7 12v4",key:"jqww69"}]]};dd.node;const ww=o(dd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};ld.node;const _w=o(ld);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd={name:"circle-dashed",size:24,node:[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]};hd.node;const jw=o(hd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd={name:"circle-divide",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]],aliases:["divide-circle"]};pd.node;const zw=o(pd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md={name:"circle-dot",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};md.node;const $w=o(md);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud={name:"circle-parking-off",size:24,node:[["path",{d:"M12.656 7H13a3 3 0 0 1 2.984 3.307",key:"1sjx87"}],["path",{d:"M13 13H9",key:"e2beee"}],["path",{d:"M19.071 19.071A1 1 0 0 1 4.93 4.93",key:"1kb595"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.357 2.687a10 10 0 0 1 12.956 12.956",key:"5bsfdx"}],["path",{d:"M9 17V9",key:"ojradj"}]],aliases:["parking-circle-off"]};ud.node;const Dw=o(ud);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd={name:"circle-parking",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]],aliases:["parking-circle"]};yd.node;const Nw=o(yd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd={name:"circle-play",size:24,node:[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["play-circle"]};kd.node;const fd=o(kd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd={name:"circle-power",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}]],aliases:["power-circle"]};xd.node;const Sw=o(xd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};gd.node;const Cw=o(gd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd={name:"circle-user",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],aliases:["user-circle"]};bd.node;const Aw=o(bd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd={name:"circle-x",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-circle"]};vd.node;const qw=o(vd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md={name:"circuit-board",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]};Md.node;const Lw=o(Md);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd={name:"citrus",size:24,node:[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]};wd.node;const Hw=o(wd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d={name:"clapperboard",size:24,node:[["path",{d:"m12.296 3.464 3.02 3.956",key:"qash78"}],["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z",key:"1h7j8b"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"4lm6w1"}],["path",{d:"m6.18 5.276 3.1 3.899",key:"zjj9t3"}]]};_d.node;const jd=o(_d);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd={name:"clef-alto",size:24,node:[["path",{d:"M10 4v16",key:"14ds90"}],["path",{d:"M14 4.764a3 3 0 1 1-.152 4.327A4 4 0 0 1 10 12a4 4 0 0 1 3.848 2.909A3 3 0 1 1 14 19.236",key:"udi1dj"}],["path",{d:"M6 4v16",key:"n0nszo"}]]};zd.node;const Vw=o(zd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d={name:"clef-bass",size:24,node:[["path",{d:"M19 11h.01",key:"6rud08"}],["path",{d:"M19 6h.01",key:"1ngg9n"}],["path",{d:"M5 8c0-4 4-4 4-4 6 0 6 6 6 6 0 7-10 11-10 11",key:"149hcj"}],["circle",{cx:"7",cy:"8",r:"2",key:"p5re1b"}]]};$d.node;const Iw=o($d);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd={name:"clef-treble",size:24,node:[["path",{d:"M10.586 21.414a2 2 0 0 0 3.378-1.791L11.036 4.377a2 2 0 1 1 3.378 1.037C12.414 7.414 7 8 7 13a5 5 0 0 0 5 5 5 4 0 0 0 5-4 3 3 0 0 0-3-3 3 2 0 0 0-3 2",key:"1v9z72"}]]};Dd.node;const Ew=o(Dd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd={name:"clipboard-list",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]};Nd.node;const Pw=o(Nd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd={name:"clipboard",size:24,node:[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]};Sd.node;const Tw=o(Sd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Cd.node;const Rw=o(Cd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad={name:"closed-caption",size:24,node:[["path",{d:"M10 9.17a3 3 0 1 0 0 5.66",key:"h9wayk"}],["path",{d:"M17 9.17a3 3 0 1 0 0 5.66",key:"1v6zke"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]]};Ad.node;const Ow=o(Ad);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd={name:"cloud-cog",size:24,node:[["path",{d:"m10.852 19.772-.383.924",key:"r7sl7d"}],["path",{d:"m13.148 14.228.383-.923",key:"1d5zpm"}],["path",{d:"M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923",key:"1ydik7"}],["path",{d:"m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544",key:"1m1vsf"}],["path",{d:"m14.772 15.852.923-.383",key:"660p6e"}],["path",{d:"m14.772 18.148.923.383",key:"hrcpis"}],["path",{d:"M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"j2q98n"}],["path",{d:"m9.228 15.852-.923-.383",key:"1p9ong"}],["path",{d:"m9.228 18.148-.923.383",key:"6558rz"}]]};qd.node;const Bw=o(qd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld={name:"cloud-download",size:24,node:[["path",{d:"M12 13v8l-4-4",key:"1f5nwf"}],["path",{d:"m12 21 4-4",key:"1lfcce"}],["path",{d:"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",key:"ui1hmy"}]],aliases:["download-cloud"]};Ld.node;const Fw=o(Ld);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd={name:"cloud-rain",size:24,node:[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]};Hd.node;const Ww=o(Hd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd={name:"cloud-sun",size:24,node:[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]};Vd.node;const Uw=o(Vd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id={name:"cloud-upload",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],aliases:["upload-cloud"]};Id.node;const Ed=o(Id);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd={name:"cloud",size:24,node:[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]};Pd.node;const Un=o(Pd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td={name:"clover",size:24,node:[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]]};Td.node;const Gw=o(Td);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd={name:"club",size:24,node:[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]};Rd.node;const Yw=o(Rd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od={name:"coffee",size:24,node:[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]};Od.node;const Gn=o(Od);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd={name:"cog",size:24,node:[["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}]]};Bd.node;const Zw=o(Bd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd={name:"coins",size:24,node:[["path",{d:"M13.744 17.736a6 6 0 1 1-7.48-7.48",key:"bq4yh3"}],["path",{d:"M15 6h1v4",key:"11y1tn"}],["path",{d:"m6.134 14.768.866-.5 2 3.464",key:"17snzx"}],["circle",{cx:"16",cy:"8",r:"6",key:"14bfc9"}]]};Fd.node;const Wd=o(Fd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud={name:"columns-3",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],aliases:["panels-left-right"]};Ud.node;const Kw=o(Ud);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd={name:"combine",size:24,node:[["path",{d:"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"1l7d7l"}],["path",{d:"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"9955pe"}],["path",{d:"m7 15 3 3",key:"4hkfgk"}],["path",{d:"m7 21 3-3H5a2 2 0 0 1-2-2v-2",key:"1xljwe"}],["rect",{x:"14",y:"14",width:"7",height:"7",rx:"1",key:"1cdgtw"}],["rect",{x:"3",y:"3",width:"7",height:"7",rx:"1",key:"zi3rio"}]]};Gd.node;const Jw=o(Gd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd={name:"command",size:24,node:[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]};Yd.node;const Xw=o(Yd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};Zd.node;const Tt=o(Zd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd={name:"component",size:24,node:[["path",{d:"M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1uwlt4"}],["path",{d:"M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z",key:"10291m"}],["path",{d:"M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z",key:"1tqoq1"}],["path",{d:"M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z",key:"1x6lto"}]]};Kd.node;const Qw=o(Kd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd={name:"computer",size:24,node:[["path",{d:"M12 18h6",key:"aqd8w3"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M8 6h1",key:"tn6mkg"}],["rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",key:"rlpjsu"}],["rect",{x:"4",y:"2",width:"16",height:"12",rx:"2",key:"fhup8x"}]]};Jd.node;const Xd=o(Jd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd={name:"concierge-bell",size:24,node:[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]};Qd.node;const e_=o(Qd);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0={name:"cone",size:24,node:[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]};e0.node;const t_=o(e0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0={name:"construction",size:24,node:[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]};t0.node;const a_=o(t0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0={name:"contact",size:24,node:[["path",{d:"M16 2v2",key:"scm5qe"}],["path",{d:"M7 21v-2a2 2 0 012-2h6a2 2 0 012 2v2",key:"k82dct"}],["path",{d:"M8 2v2",key:"pbkmx"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]};a0.node;const n_=o(a0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0={name:"container",size:24,node:[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]};n0.node;const o_=o(n0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0={name:"contrast",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]};o0.node;const s_=o(o0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0={name:"cookie",size:24,node:[["path",{d:"M11 17h.01",key:"dukryu"}],["path",{d:"M11.496 2c.324-.016.558.292.529.615a4 4 0 004.235 4.368.713.713 0 01.758.757 4 4 0 004.366 4.237c.323-.03.63.204.614.527a10 10 0 01-2.915 6.566A1 1 0 114.93 4.918 10 10 0 0111.496 2",key:"1x76et"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M16 3h.01",key:"ll0zb8"}],["path",{d:"M21 4h.01",key:"uw58yv"}],["path",{d:"M21 8h.01",key:"17axm7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M9 8h.01",key:"1jwowd"}]]};s0.node;const c_=o(s0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0={name:"cooking-pot",size:24,node:[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]};c0.node;const i0=o(c0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0={name:"corner-down-left",size:24,node:[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}],["path",{d:"m9 10-5 5 5 5",key:"1kshq7"}]]};r0.node;const i_=o(r0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0={name:"corner-down-right",size:24,node:[["path",{d:"m15 10 5 5-5 5",key:"qqa56n"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]};d0.node;const r_=o(d0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0={name:"corner-left-down",size:24,node:[["path",{d:"m14 15-5 5-5-5",key:"1eia93"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]};l0.node;const d_=o(l0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0={name:"corner-left-up",size:24,node:[["path",{d:"M14 9 9 4 4 9",key:"1af5af"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]};h0.node;const l_=o(h0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0={name:"corner-right-down",size:24,node:[["path",{d:"m10 15 5 5 5-5",key:"1hpjnr"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]};p0.node;const h_=o(p0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0={name:"corner-right-up",size:24,node:[["path",{d:"m10 9 5-5 5 5",key:"9ctzwi"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]};m0.node;const p_=o(m0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0={name:"corner-up-left",size:24,node:[["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}],["path",{d:"M9 14 4 9l5-5",key:"102s5s"}]]};u0.node;const m_=o(u0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0={name:"corner-up-right",size:24,node:[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]};y0.node;const u_=o(y0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0={name:"cpu",size:24,node:[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]};k0.node;const y_=o(k0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0={name:"creative-commons",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]};f0.node;const k_=o(f0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}],["path",{d:"M6 14h2",key:"mk7k0u"}]]};x0.node;const Yn=o(x0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0={name:"croissant",size:24,node:[["path",{d:"M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487",key:"14kkz9"}],["path",{d:"M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132",key:"1g7v07"}],["path",{d:"M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42",key:"ratg6b"}],["path",{d:"M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14",key:"4454f0"}],["path",{d:"M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676",key:"qmemie"}]]};g0.node;const f_=o(g0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0={name:"cross",size:24,node:[["path",{d:"M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z",key:"1xbrqy"}]]};b0.node;const x_=o(b0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0={name:"crosshair",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]};v0.node;const g_=o(v0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0={name:"crown",size:24,node:[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]};M0.node;const Zn=o(M0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0={name:"cuboid",size:24,node:[["path",{d:"M10 22v-8",key:"1f8443"}],["path",{d:"M2.336 8.89 10 14l11.715-7.029",key:"1qnufy"}],["path",{d:"M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z",key:"670npk"}]]};w0.node;const b_=o(w0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0={name:"cup-soda",size:24,node:[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]};_0.node;const j0=o(_0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0={name:"currency",size:24,node:[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]};z0.node;const v_=o(z0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0={name:"cylinder",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]};$0.node;const M_=o($0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0={name:"dam",size:24,node:[["path",{d:"M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"157kva"}],["path",{d:"M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"d7q6m6"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z",key:"pr6s65"}]]};D0.node;const w_=o(D0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0={name:"database",size:24,node:[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]};N0.node;const S0=o(N0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0={name:"decimals-arrow-left",size:24,node:[["path",{d:"m13 21-3-3 3-3",key:"s3o1nf"}],["path",{d:"M20 18H10",key:"14r3mt"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5",key:"v9paqo"}]]};C0.node;const __=o(C0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0={name:"decimals-arrow-right",size:24,node:[["path",{d:"M10 18h10",key:"1y5s8o"}],["path",{d:"m17 21 3-3-3-3",key:"1ammt0"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{x:"15",y:"3",width:"5",height:"8",rx:"2.5",key:"76md6a"}],["rect",{x:"6",y:"3",width:"5",height:"8",rx:"2.5",key:"v9paqo"}]]};A0.node;const j_=o(A0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0={name:"delete",size:24,node:[["path",{d:"M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z",key:"1yo7s0"}],["path",{d:"m12 9 6 6",key:"anjzzh"}],["path",{d:"m18 9-6 6",key:"1fp51s"}]]};q0.node;const z_=o(q0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0={name:"dessert",size:24,node:[["path",{d:"M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826",key:"xi88qy"}],["path",{d:"M20.804 14.869a9 9 0 0 1-17.608 0",key:"1r28rg"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}]]};L0.node;const $_=o(L0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0={name:"diameter",size:24,node:[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]};H0.node;const D_=o(H0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0={name:"diamond",size:24,node:[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]};V0.node;const I0=o(V0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0={name:"diff",size:24,node:[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]};E0.node;const N_=o(E0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0={name:"disc",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};P0.node;const S_=o(P0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0={name:"divide",size:24,node:[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]};T0.node;const C_=o(T0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0={name:"dna-off",size:24,node:[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8",key:"1bivrr"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3",key:"nxix30"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1",key:"18cutr"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16",key:"rlvei3"}]]};R0.node;const A_=o(R0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0={name:"dna",size:24,node:[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]]};O0.node;const q_=o(O0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0={name:"dock",size:24,node:[["path",{d:"M2 8h20",key:"d11cs7"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 16h12",key:"u522kt"}]]};B0.node;const L_=o(B0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0={name:"dog",size:24,node:[["path",{d:"M11.25 16.25h1.5L12 17z",key:"w7jh35"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309",key:"u7s9ue"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"v8hric"}]]};F0.node;const W0=o(F0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0={name:"dollar-sign",size:24,node:[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]};U0.node;const H_=o(U0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0={name:"donut",size:24,node:[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};G0.node;const V_=o(G0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0={name:"dome",size:24,node:[["path",{d:"M10 21v-3a2 2 0 014 0v3",key:"109363"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M18 12v9",key:"igdtv6"}],["path",{d:"M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a1 1 0 011-1h18a1 1 0 011 1z",key:"ggamol"}],["path",{d:"M4 12a8 8 0 0116 0",key:"ug8bwn"}],["path",{d:"M6 12v9",key:"9e33v1"}]]};Y0.node;const I_=o(Y0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0={name:"door-closed",size:24,node:[["path",{d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16",key:"4uynto"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M9 12h.01",key:"157uk2"}]]};Z0.node;const E_=o(Z0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0={name:"door-open",size:24,node:[["path",{d:"M10 21H2",key:"1sthdo"}],["path",{d:"M10 3H7a2 2 0 00-2 2v16",key:"15gt7x"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M19 21V5a2 2 0 00-1.675-1.974l-6.163-1.013A1 1 0 0010 3v18a1 1 0 001.124.992z",key:"tyvg9a"}],["path",{d:"M22 21h-3",key:"1ec3tr"}]]};K0.node;const J0=o(K0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0={name:"dot",size:24,node:[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]};X0.node;const P_=o(X0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Q0.node;const el=o(Q0);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl={name:"drafting-compass",size:24,node:[["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0",key:"ppmlo4"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}]]};tl.node;const T_=o(tl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al={name:"drama",size:24,node:[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]};al.node;const R_=o(al);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl={name:"drill",size:24,node:[["path",{d:"M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z",key:"ioqxb1"}],["path",{d:"M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8",key:"1rs59n"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"m7 18 2-8",key:"1bzku2"}]]};nl.node;const O_=o(nl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol={name:"drone",size:24,node:[["path",{d:"M10 10 7 7",key:"zp14k7"}],["path",{d:"m10 14-3 3",key:"1jrpxk"}],["path",{d:"m14 10 3-3",key:"7tigam"}],["path",{d:"m14 14 3 3",key:"vm23p3"}],["path",{d:"M14.205 4.139a4 4 0 1 1 5.439 5.863",key:"1tm5p2"}],["path",{d:"M19.637 14a4 4 0 1 1-5.432 5.868",key:"16egi2"}],["path",{d:"M4.367 10a4 4 0 1 1 5.438-5.862",key:"1wta6a"}],["path",{d:"M9.795 19.862a4 4 0 1 1-5.429-5.873",key:"q39hpv"}],["rect",{x:"10",y:"8",width:"4",height:"8",rx:"1",key:"phrjt1"}]]};ol.node;const B_=o(ol);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl={name:"droplet",size:24,node:[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]};sl.node;const cl=o(sl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il={name:"droplets",size:24,node:[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]};il.node;const rl=o(il);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl={name:"drum",size:24,node:[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]};dl.node;const F_=o(dl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll={name:"drumstick",size:24,node:[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",key:"1dtqwm"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",key:"1oq1fw"}]]};ll.node;const W_=o(ll);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl={name:"dumbbell",size:24,node:[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]]};hl.node;const Kn=o(hl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl={name:"ear-off",size:24,node:[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]};pl.node;const U_=o(pl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml={name:"ear",size:24,node:[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]};ml.node;const G_=o(ml);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul={name:"earth-lock",size:24,node:[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]};ul.node;const Y_=o(ul);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl={name:"earth",size:24,node:[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["globe-2"]};yl.node;const vo=o(yl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl={name:"eclipse",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]};kl.node;const Z_=o(kl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl={name:"egg-fried",size:24,node:[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]};fl.node;const K_=o(fl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl={name:"egg",size:24,node:[["path",{d:"M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12",key:"1le142"}]]};xl.node;const J_=o(xl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl={name:"eject",size:24,node:[["path",{d:"M4 13a1 1 0 0 1-.72-1.695l7.257-7.668a2 2 0 0 1 2.926 0l7.256 7.668A1 1 0 0 1 20 13z",key:"ua5u6w"}],["rect",{x:"3",y:"17",width:"18",height:"4",rx:"1",key:"kj6cfs"}]]};gl.node;const X_=o(gl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl={name:"ellipse",size:24,node:[["ellipse",{cx:"12",cy:"12",rx:"10",ry:"6",key:"swdkt4"}]]};bl.node;const Q_=o(bl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl={name:"engine",size:24,node:[["path",{d:"M10 3h6",key:"1f0zxz"}],["path",{d:"M13 3v4",key:"vu7fyc"}],["path",{d:"M2 10v6",key:"c2i6v8"}],["path",{d:"M2 13h4",key:"14htpc"}],["path",{d:"M6 16a2 2 0 002 2h1a2 2 0 011.6.8l.3.4a2 2 0 001.6.8h2.264a2 2 0 001.789-1.106l1.67-3.341a1 1 0 01.895-.553H21a1 1 0 001-1v-4a1 1 0 00-1-1h-3.5a1 1 0 01-.8-.4l-.9-1.2A1 1 0 0015 7h-4a1 1 0 00-.8.4l-.9 1.2a1 1 0 01-.8.4H7a1 1 0 00-1 1z",key:"1bwqof"}]]};vl.node;const ej=o(vl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml={name:"equal-approximately-not",size:24,node:[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"yrdkhy"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"gzkvyz"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]};Ml.node;const tj=o(Ml);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl={name:"equal-approximately",size:24,node:[["path",{d:"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"yrdkhy"}],["path",{d:"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0",key:"gzkvyz"}]]};wl.node;const aj=o(wl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l={name:"equal-not",size:24,node:[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]};_l.node;const nj=o(_l);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl={name:"equal",size:24,node:[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]};jl.node;const oj=o(jl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl={name:"eraser",size:24,node:[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]]};zl.node;const sj=o(zl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l={name:"ethernet-port",size:24,node:[["path",{d:"M10 8v1",key:"1talb4"}],["path",{d:"M14 8v1",key:"1rsfgr"}],["path",{d:"M18 8v1",key:"gnkwox"}],["path",{d:"M19 17a2 2 0 00-1.765 1.059l-.47.882A2 2 0 0115 20H9a2 2 0 01-1.765-1.059l-.47-.882A2 2 0 005 17H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v9a2 2 0 01-2 2z",key:"v5qa57"}],["path",{d:"M6 8v1",key:"1636ez"}]]};$l.node;const cj=o($l);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl={name:"ev-charger",size:24,node:[["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5",key:"1wtuz0"}],["path",{d:"M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16",key:"e09ifn"}],["path",{d:"M2 21h13",key:"1x0fut"}],["path",{d:"M3 7h11",key:"19efrr"}],["path",{d:"m9 11-2 3h3l-2 3",key:"lmzxi1"}]]};Dl.node;const ij=o(Dl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl={name:"euro",size:24,node:[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]};Nl.node;const rj=o(Nl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Sl.node;const dj=o(Sl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl={name:"face-angry",size:24,node:[["path",{d:"M15 12v-1.584",key:"1md67h"}],["path",{d:"M17 10a5 5 0 00-3 1",key:"1dqs4m"}],["path",{d:"M7 10a5 5 0 013 1",key:"1okmnq"}],["path",{d:"M9 12v-1.584",key:"cfo04w"}],["path",{d:"M9 17a5 5 0 016.001 0",key:"ipdrmp"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["angry"]};Cl.node;const lj=o(Cl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al={name:"face-expressionless",size:24,node:[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M8 16h8",key:"10ke2u"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["annoyed"]};Al.node;const hj=o(Al);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql={name:"face-grinning",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M7.084 14.302a5.12 5.12 0 009.833 0 .24.24 0 00-.235-.302H7.32a.24.24 0 00-.235.302",key:"1ad3z7"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["laugh"]};ql.node;const pj=o(ql);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll={name:"face-neutral",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M8 16h8",key:"10ke2u"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["meh"]};Ll.node;const mj=o(Ll);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl={name:"face-slightly-frowning",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M9 10V9",key:"1lazqi"}],["path",{d:"M9 16a5 5 0 016 0",key:"34mdxb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["frown"]};Hl.node;const uj=o(Hl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl={name:"face-slightly-smiling-plus",size:24,node:[["path",{d:"M13.267 2.08a10 10 0 108.653 8.653",key:"1wbpyh"}],["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M9 10V9",key:"1lazqi"}]],aliases:["smile-plus"]};Vl.node;const yj=o(Vl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il={name:"face-slightly-smiling",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M16.472 15a6 6 0 01-8.943 0",key:"7qomzy"}],["path",{d:"M9 10V9",key:"1lazqi"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aliases:["smile"]};Il.node;const Mo=o(Il);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El={name:"factory",size:24,node:[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z",key:"1iv0i2"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]};El.node;const kj=o(El);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl={name:"fan",size:24,node:[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]};Pl.node;const Tl=o(Pl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl={name:"faucet",size:24,node:[["path",{d:"M10.083 5.428 5.57 4.083a2 2 0 10.001 3.834l4.512-1.345",key:"1curt5"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"m13.917 5.428 4.511-1.345a2 2 0 110 3.834l-4.51-1.345",key:"1j1ygv"}],["path",{d:"M18 17v-4.006",key:"1ovurp"}],["path",{d:"M22 11v8",key:"15un1y"}],["path",{d:"M22 12h-3a1 1 0 00-1 .994h-2.539a4 4 0 00-6.915-.012L7 13a5 5 0 00-5 5v1a1 1 0 001 1h2a1 1 0 001-1v-1a1 1 0 01.995-1l1.552.018a4 4 0 006.907 0L18 17a1 1 0 001 1h3",key:"2dw4iy"}],["circle",{cx:"12",cy:"6",r:"2",key:"1jj5th"}]]};Rl.node;const fj=o(Rl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol={name:"feather",size:24,node:[["path",{d:"M14.086 18.412A2 2 0 0112.67 19H5v-7.672a2 2 0 01.586-1.414L11.75 3.75a6 6 0 118.49 8.49z",key:"1nq9jb"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.488 15H9",key:"16yirz"}]]};Ol.node;const xj=o(Ol);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl={name:"fence",size:24,node:[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]};Bl.node;const gj=o(Bl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl={name:"ferris-wheel",size:24,node:[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]};Fl.node;const bj=o(Fl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl={name:"file-archive",size:24,node:[["path",{d:"M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5",key:"4pqfef"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 12v-1",key:"1ej8lb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M8 7V6",key:"1nbb54"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]};Wl.node;const vj=o(Wl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul={name:"file-axis-3d",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]],aliases:["file-axis-3-d"]};Ul.node;const wo=o(Ul);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl={name:"file-badge",size:24,node:[["path",{d:"M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3",key:"cvl1xm"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88",key:"1ff7gj"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}]],aliases:["file-badge-2"]};Gl.node;const _o=o(Gl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl={name:"file-box",size:24,node:[["path",{d:"M14 2v5a1 1 0 001 1h5",key:"9v5fu7"}],["path",{d:"M14.692 22H18a2 2 0 002-2V8a2.4 2.4 0 00-.706-1.706l-3.588-3.588A2.4 2.4 0 0014 2H6a2 2 0 00-2 2v3.804",key:"1ne0j7"}],["path",{d:"M2.264 13.752 7 16.5l4.737-2.748",key:"t73mg3"}],["path",{d:"M2.995 13.014A2 2 0 002 14.744v3.516a2 2 0 00.996 1.73l3 1.74a2 2 0 002.008 0l3-1.74A2 2 0 0012 18.26v-3.517a2 2 0 00-.995-1.73l-3-1.742a2 2 0 00-1.892-.064z",key:"h4qck"}],["path",{d:"M7 16.5V22",key:"1i1gou"}]]};Yl.node;const Mj=o(Yl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl={name:"file-braces-corner",size:24,node:[["path",{d:"M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",key:"14cnrg"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1",key:"sr0ebq"}],["path",{d:"M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1",key:"w793db"}]],aliases:["file-json-2"]};Zl.node;const jo=o(Zl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl={name:"file-braces",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],aliases:["file-json"]};Kl.node;const zo=o(Kl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl={name:"file-chart-column-increasing",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]],aliases:["file-bar-chart"]};Jl.node;const $o=o(Jl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl={name:"file-chart-column",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]],aliases:["file-bar-chart-2"]};Xl.node;const Do=o(Xl);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql={name:"file-chart-line",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]],aliases:["file-line-chart"]};Ql.node;const No=o(Ql);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh={name:"file-chart-pie",size:24,node:[["path",{d:"M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512",key:"13hoie"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475",key:"s6vs5t"}],["path",{d:"M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z",key:"1dl6s6"}]],aliases:["file-pie-chart"]};eh.node;const So=o(eh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th={name:"file-check-corner",size:24,node:[["path",{d:"M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6",key:"g5mvt7"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14 20 2 2 4-4",key:"15kota"}]],aliases:["file-check-2"]};th.node;const Co=o(th);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah={name:"file-check",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]};ah.node;const wj=o(ah);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh={name:"file-clock",size:24,node:[["path",{d:"M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85",key:"ryk6xj"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 14v2.2l1.6 1",key:"6m4bie"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}]]};nh.node;const _j=o(nh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh={name:"file-code-corner",size:24,node:[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],aliases:["file-code-2"]};oh.node;const Ao=o(oh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh={name:"file-code",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]]};sh.node;const jj=o(sh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch={name:"file-cog",size:24,node:[["path",{d:"M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z",key:"1ckgky"}],["path",{d:"M20 8v12a2 2 0 0 1-2 2h-4.182",key:"1726p0"}],["path",{d:"m3.305 19.53.923-.382",key:"ao1pio"}],["path",{d:"M4 10.592V4a2 2 0 0 1 2-2h8",key:"1foop0"}],["path",{d:"m4.228 16.852-.924-.383",key:"1fv9zy"}],["path",{d:"m5.852 15.228-.383-.923",key:"1a9hc2"}],["path",{d:"m5.852 20.772-.383.924",key:"1sh9ke"}],["path",{d:"m8.148 15.228.383-.923",key:"4yu6lf"}],["path",{d:"m8.53 21.696-.382-.924",key:"18b0s9"}],["path",{d:"m9.773 16.852.922-.383",key:"ti6xop"}],["path",{d:"m9.773 19.148.922.383",key:"rws47d"}],["circle",{cx:"7",cy:"18",r:"3",key:"lvkj7j"}]],aliases:["file-cog-2"]};ch.node;const qo=o(ch);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih={name:"file-diff",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]};ih.node;const zj=o(ih);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh={name:"file-digit",size:24,node:[["path",{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2",key:"jrl274"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 16h2v6",key:"1bxocy"}],["path",{d:"M10 22h4",key:"ceow96"}],["rect",{x:"2",y:"16",width:"4",height:"6",rx:"2",key:"r45zd0"}]]};rh.node;const $j=o(rh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh={name:"file-down",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]};dh.node;const Dj=o(dh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh={name:"file-exclamation-point",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["file-warning"]};lh.node;const Lo=o(lh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh={name:"file-headphone",size:24,node:[["path",{d:"M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343",key:"1vfytu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0",key:"1etmh7"}]],aliases:["file-audio","file-audio-2"]};hh.node;const Ba=o(hh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph={name:"file-heart",size:24,node:[["path",{d:"M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7",key:"oagw2b"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z",key:"rg3psg"}]]};ph.node;const Nj=o(ph);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh={name:"file-image",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]};mh.node;const Sj=o(mh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh={name:"file-input",size:24,node:[["path",{d:"M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1",key:"1q9hii"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]};uh.node;const Cj=o(uh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh={name:"file-key",size:24,node:[["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M4 12v6",key:"bg1pfk"}],["path",{d:"M4 14h2",key:"1sf9f8"}],["path",{d:"M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4",key:"d56i0q"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["file-key-2"]};yh.node;const Ho=o(yh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh={name:"file-lock",size:24,node:[["path",{d:"M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3",key:"1432pc"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M9 17v-2a2 2 0 0 0-4 0v2",key:"168m41"}],["rect",{width:"8",height:"5",x:"3",y:"17",rx:"1",key:"o8vfew"}]],aliases:["file-lock-2"]};kh.node;const Vo=o(kh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh={name:"file-minus-corner",size:24,node:[["path",{d:"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12",key:"l9p8hp"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],aliases:["file-minus-2"]};fh.node;const Io=o(fh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh={name:"file-minus",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M9 15h6",key:"cctwl0"}]]};xh.node;const Aj=o(xh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh={name:"file-music",size:24,node:[["path",{d:"M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35",key:"5ad7z2"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 20v-7l3 1.474",key:"1ggyb9"}],["circle",{cx:"6",cy:"20",r:"2",key:"j7wjp0"}]]};gh.node;const qj=o(gh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh={name:"file-output",size:24,node:[["path",{d:"M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127",key:"wfxp4w"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]};bh.node;const Lj=o(bh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh={name:"file-pen-line",size:24,node:[["path",{d:"M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z",key:"ukzhwg"}],["path",{d:"M14.487 7.858A1 1 0 0 1 14 7V2",key:"1klhew"}],["path",{d:"M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516",key:"rxaxab"}],["path",{d:"M8 18h1",key:"13wk12"}]],aliases:["file-signature"]};vh.node;const Eo=o(vh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh={name:"file-play",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z",key:"1tzo1f"}]],aliases:["file-video"]};Mh.node;const Po=o(Mh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh={name:"file-plus-corner",size:24,node:[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35",key:"17jvcc"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M14 19h6",key:"bvotb8"}],["path",{d:"M17 16v6",key:"18yu1i"}]],aliases:["file-plus-2"]};wh.node;const To=o(wh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h={name:"file-pen",size:24,node:[["path",{d:"M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",key:"o6klzx"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",key:"zhnas1"}]],aliases:["file-edit"]};_h.node;const Ro=o(_h);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh={name:"file-plus",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]};jh.node;const Hj=o(jh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh={name:"file-question-mark",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]],aliases:["file-question"]};zh.node;const Oo=o(zh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h={name:"file-scan",size:24,node:[["path",{d:"M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35",key:"1cdjst"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}]]};$h.node;const Vj=o($h);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh={name:"file-search-corner",size:24,node:[["path",{d:"M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25",key:"uh4ikj"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m21 22-2.88-2.88",key:"9dd25w"}],["circle",{cx:"16",cy:"17",r:"3",key:"11br10"}]],aliases:["file-search-2"]};Dh.node;const Bo=o(Dh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh={name:"file-search",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]};Nh.node;const Ij=o(Nh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh={name:"file-signal",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]],aliases:["file-volume-2"]};Sh.node;const Fo=o(Sh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch={name:"file-sliders",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]};Ch.node;const Ej=o(Ch);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah={name:"file-stack",size:24,node:[["path",{d:"M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1",key:"likhh7"}],["path",{d:"M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1",key:"17ky3x"}],["path",{d:"M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z",key:"1hyeo0"}]]};Ah.node;const Pj=o(Ah);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh={name:"file-spreadsheet",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]};qh.node;const Tj=o(qh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh={name:"file-symlink",size:24,node:[["path",{d:"M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"huwfnr"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}]]};Lh.node;const Rj=o(Lh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh={name:"file-terminal",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]};Hh.node;const Oj=o(Hh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};Vh.node;const Ih=o(Vh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh={name:"file-type-corner",size:24,node:[["path",{d:"M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6",key:"15usau"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16",key:"s1gz5"}],["path",{d:"M6 22h2",key:"194x9m"}],["path",{d:"M7 14v8",key:"11ixej"}]],aliases:["file-type-2"]};Eh.node;const Wo=o(Eh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph={name:"file-type",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M11 18h2",key:"12mj7e"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5",key:"qbrxap"}]]};Ph.node;const Bj=o(Ph);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th={name:"file-up",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]};Th.node;const Fj=o(Th);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh={name:"file-user",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M16 22a4 4 0 0 0-8 0",key:"7a83pg"}],["circle",{cx:"12",cy:"15",r:"3",key:"g36mzq"}]]};Rh.node;const Wj=o(Rh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh={name:"file-video-camera",size:24,node:[["path",{d:"M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2",key:"jrl274"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157",key:"17aeo9"}],["rect",{width:"7",height:"6",x:"3",y:"16",rx:"1",key:"s27ndx"}]],aliases:["file-video-2"]};Oh.node;const Uo=o(Oh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh={name:"file-volume",size:24,node:[["path",{d:"M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95",key:"44gpjv"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 15a5 5 0 0 1 0 6",key:"oxg87a"}],["path",{d:"M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z",key:"8rtoi1"}]]};Bh.node;const Uj=o(Bh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh={name:"file-x-corner",size:24,node:[["path",{d:"M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5",key:"1jo35a"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m15 17 5 5",key:"36xl1x"}],["path",{d:"m20 17-5 5",key:"vdz27y"}]],aliases:["file-x-2"]};Fh.node;const Go=o(Fh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh={name:"file-x",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]};Wh.node;const Gj=o(Wh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh={name:"file",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]]};Uh.node;const Yj=o(Uh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh={name:"files",size:24,node:[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]]};Gh.node;const Zj=o(Gh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh={name:"film",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]};Yh.node;const Zh=o(Yh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh={name:"fingerprint-pattern",size:24,node:[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]],aliases:["fingerprint"]};Kh.node;const Kj=o(Kh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh={name:"fire-extinguisher",size:24,node:[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]};Jh.node;const Jj=o(Jh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh={name:"fish-symbol",size:24,node:[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]};Xh.node;const Xj=o(Xh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh={name:"fish",size:24,node:[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]};Qh.node;const ep=o(Qh);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp={name:"flag-triangle-right",size:24,node:[["path",{d:"M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5",key:"kfjsu0"}]]};tp.node;const Qj=o(tp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap={name:"flag",size:24,node:[["path",{d:"M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528",key:"1jaruq"}]]};ap.node;const ez=o(ap);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np={name:"flame",size:24,node:[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]]};np.node;const Jn=o(np);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op={name:"flashlight-off",size:24,node:[["path",{d:"M11.652 6H18",key:"voqkpr"}],["path",{d:"M12 13v1",key:"176q98"}],["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6",key:"dzyf92"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007",key:"1hvcfn"}]]};op.node;const tz=o(op);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp={name:"flashlight",size:24,node:[["path",{d:"M12 13v1",key:"176q98"}],["path",{d:"M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z",key:"17vh7j"}],["path",{d:"M6 6h12",key:"n6hhss"}]]};sp.node;const az=o(sp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp={name:"flask-conical",size:24,node:[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]};cp.node;const nz=o(cp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip={name:"flower-2",size:24,node:[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]};ip.node;const rp=o(ip);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp={name:"flower",size:24,node:[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]]};dp.node;const oz=o(dp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp={name:"focus",size:24,node:[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]};lp.node;const sz=o(lp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp={name:"fold-horizontal",size:24,node:[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]};hp.node;const cz=o(hp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp={name:"fold-vertical",size:24,node:[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]};pp.node;const iz=o(pp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp={name:"folder-archive",size:24,node:[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]};mp.node;const rz=o(mp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up={name:"folder-bookmark",size:24,node:[["path",{d:"M12 6v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834a.25.25 0 00.406-.195V6",key:"d4trya"}],["path",{d:"M20 20a2 2 0 002-2V8a2 2 0 00-2-2h-7.9a2 2 0 01-1.69-.9L9.6 3.9A2 2 0 007.93 3H4a2 2 0 00-2 2v13a2 2 0 002 2z",key:"1qsbi2"}]]};up.node;const dz=o(up);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp={name:"folder-check",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]};yp.node;const lz=o(yp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp={name:"folder-clock",size:24,node:[["path",{d:"M16 14v2.2l1.6 1",key:"fo4ql5"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]};kp.node;const hz=o(kp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp={name:"folder-closed",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]};fp.node;const pz=o(fp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp={name:"folder-code",size:24,node:[["path",{d:"M10 10.5 8 13l2 2.5",key:"m4t9c1"}],["path",{d:"m14 10.5 2 2.5-2 2.5",key:"14w2eb"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z",key:"1u1bxd"}]]};xp.node;const mz=o(xp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp={name:"folder-cog",size:24,node:[["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3",key:"128dxu"}],["path",{d:"m14.305 19.53.923-.382",key:"3m78fa"}],["path",{d:"m15.228 16.852-.923-.383",key:"npixar"}],["path",{d:"m16.852 15.228-.383-.923",key:"5xggr7"}],["path",{d:"m16.852 20.772-.383.924",key:"dpfhf9"}],["path",{d:"m19.148 15.228.383-.923",key:"1reyyz"}],["path",{d:"m19.53 21.696-.382-.924",key:"1goivc"}],["path",{d:"m20.772 16.852.924-.383",key:"htqkph"}],["path",{d:"m20.772 19.148.924.383",key:"9w9pjp"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]],aliases:["folder-cog-2"]};gp.node;const Yo=o(gp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp={name:"folder-dot",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]};bp.node;const uz=o(bp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp={name:"folder-down",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]};vp.node;const yz=o(vp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp={name:"folder-git-2",size:24,node:[["path",{d:"M18 19a5 5 0 0 1-5-5v8",key:"sz5oeg"}],["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]};Mp.node;const kz=o(Mp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp={name:"folder-git",size:24,node:[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]};wp.node;const fz=o(wp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p={name:"folder-heart",size:24,node:[["path",{d:"M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417",key:"10r6g4"}],["path",{d:"M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",key:"15cy7q"}]]};_p.node;const xz=o(_p);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp={name:"folder-input",size:24,node:[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]};jp.node;const gz=o(jp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp={name:"folder-kanban",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]};zp.node;const bz=o(zp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p={name:"folder-key",size:24,node:[["path",{d:"M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36",key:"1shsnm"}],["path",{d:"M19 12v6",key:"kflna4"}],["path",{d:"M19 14h2",key:"wp2qbk"}],["circle",{cx:"19",cy:"20",r:"2",key:"1jfyz6"}]]};$p.node;const vz=o($p);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp={name:"folder-lock",size:24,node:[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]};Dp.node;const Mz=o(Dp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np={name:"folder-minus",size:24,node:[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]};Np.node;const wz=o(Np);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp={name:"folder-open-dot",size:24,node:[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]};Sp.node;const _z=o(Sp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp={name:"folder-open",size:24,node:[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]};Cp.node;const jz=o(Cp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap={name:"folder-output",size:24,node:[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]};Ap.node;const zz=o(Ap);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp={name:"folder-pen",size:24,node:[["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}],["path",{d:"M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1saktj"}]],aliases:["folder-edit"]};qp.node;const Zo=o(qp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp={name:"folder-plus",size:24,node:[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]};Lp.node;const $z=o(Lp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp={name:"folder-root",size:24,node:[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]};Hp.node;const Dz=o(Hp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp={name:"folder-search-2",size:24,node:[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]};Vp.node;const Nz=o(Vp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip={name:"folder-symlink",size:24,node:[["path",{d:"M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"y8kt7d"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]]};Ip.node;const Sz=o(Ip);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep={name:"folder-search",size:24,node:[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}]]};Ep.node;const Cz=o(Ep);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp={name:"folder-sync",size:24,node:[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]};Pp.node;const Az=o(Pp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp={name:"folder-tree",size:24,node:[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]};Tp.node;const qz=o(Tp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp={name:"folder-up",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]};Rp.node;const Lz=o(Rp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op={name:"folder-x",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]};Op.node;const Hz=o(Op);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp={name:"folder",size:24,node:[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]};Bp.node;const Vz=o(Bp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp={name:"folders",size:24,node:[["path",{d:"M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z",key:"a4852j"}],["path",{d:"M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1",key:"yxbcw3"}]]};Fp.node;const Iz=o(Fp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp={name:"footprints",size:24,node:[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]};Wp.node;const Up=o(Wp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp={name:"forklift",size:24,node:[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["path",{d:"M15 19h7",key:"1askl3"}],["path",{d:"M16 19V2",key:"1gf9nk"}],["path",{d:"M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828",key:"enx9tf"}],["path",{d:"M7 19h4",key:"fumhkk"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]};Gp.node;const Ez=o(Gp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp={name:"form",size:24,node:[["path",{d:"M4 14h6",key:"77gv2w"}],["path",{d:"M4 2h10",key:"a2b314"}],["rect",{x:"4",y:"18",width:"16",height:"4",rx:"1",key:"sybzq6"}],["rect",{x:"4",y:"6",width:"16",height:"4",rx:"1",key:"1osc9e"}]]};Yp.node;const Pz=o(Yp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp={name:"frame",size:24,node:[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]};Zp.node;const Tz=o(Zp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp={name:"fuel",size:24,node:[["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5",key:"1wtuz0"}],["path",{d:"M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16",key:"e09ifn"}],["path",{d:"M2 21h13",key:"1x0fut"}],["path",{d:"M3 9h11",key:"1p7c0w"}]]};Kp.node;const Rz=o(Kp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp={name:"funnel-plus",size:24,node:[["path",{d:"M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348",key:"8mvsmf"}],["path",{d:"M16 6h6",key:"1dogtp"}],["path",{d:"M19 3v6",key:"1ytpjt"}]]};Jp.node;const Oz=o(Jp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp={name:"funnel-x",size:24,node:[["path",{d:"M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473",key:"ol2ft2"}],["path",{d:"m16.5 3.5 5 5",key:"15e6fa"}],["path",{d:"m21.5 3.5-5 5",key:"m0lwru"}]],aliases:["filter-x"]};Xp.node;const Ko=o(Xp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};Qp.node;const Jo=o(Qp);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em={name:"galaxy",size:24,node:[["path",{d:"M16.005 15.108a5.041 6.52 28.25 00-8.008-6.217 5.041 6.52 28.25 008.008 6.217A11.884 7.288-60.76 014.029 7.001",key:"1w3uyc"}],["path",{d:"M17 21h.01",key:"1yigvh"}],["path",{d:"M7 3h.01",key:"we4yfo"}],["path",{d:"M7.997 8.891a11.885 7.288-60.756 0111.977 8.107",key:"mpf5op"}],["circle",{cx:"12",cy:"12",r:"1",fill:"currentColor",key:"1t76vf"}]]};em.node;const Bz=o(em);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm={name:"gallery-horizontal",size:24,node:[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]};tm.node;const Fz=o(tm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am={name:"gallery-vertical",size:24,node:[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]};am.node;const Wz=o(am);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm={name:"gamepad-2",size:24,node:[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]};nm.node;const Xn=o(nm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om={name:"gamepad",size:24,node:[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]};om.node;const Uz=o(om);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm={name:"gap-horizontal",size:24,node:[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M21 3h-3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3",key:"sixnkk"}],["path",{d:"M3 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3",key:"z694kp"}]]};sm.node;const Gz=o(sm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm={name:"gap-vertical",size:24,node:[["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M8 12h2",key:"f27al2"}],["path",{d:"M14 12h2",key:"5yx4ln"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M3 21v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3",key:"mbp45m"}],["path",{d:"M3 3v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3",key:"kci8nr"}]]};cm.node;const Yz=o(cm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im={name:"gauge",size:24,node:[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]};im.node;const Zz=o(im);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm={name:"gavel",size:24,node:[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381",key:"pgg06f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m21.5 10.5-8-8",key:"a17d9x"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m8.5 7.5 8 8",key:"1oyaui"}]]};rm.node;const Kz=o(rm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm={name:"gem",size:24,node:[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]]};dm.node;const Qn=o(dm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm={name:"georgian-lari",size:24,node:[["path",{d:"M11.5 21a7.5 7.5 0 1 1 7.35-9",key:"1gyj8k"}],["path",{d:"M13 12V3",key:"18om2a"}],["path",{d:"M4 21h16",key:"1h09gz"}],["path",{d:"M9 12V3",key:"geutu0"}]]};lm.node;const Jz=o(lm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm={name:"germ-off",size:24,node:[["path",{d:"m11 2 .925 1.848",key:"geewpq"}],["path",{d:"M13 15h.01",key:"igtdqu"}],["path",{d:"M13.424 7.768a2 2 0 112.808 2.808",key:"1e1m3r"}],["path",{d:"m16 21-1-2.472",key:"197l0j"}],["path",{d:"M16.988 16.988A12 12 0 019 20a5 5 0 01-2.759-9.171 8.8 8.8 0 002.307-2.28",key:"1ydoa0"}],["path",{d:"m19 2-1 1.804",key:"qavonm"}],["path",{d:"m2 19 2.746-1.373",key:"1mv7mx"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"m22 16-2.474-2.13a12 12 0 001.376-3.786 6 6 0 00-10.313-5.151",key:"11ksly"}],["path",{d:"m22 5-1.804 1",key:"8v36m5"}],["path",{d:"m3 10 2 2",key:"1n5c32"}],["path",{d:"M9 16h.01",key:"1zau5q"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]};hm.node;const Xz=o(hm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm={name:"germ",size:24,node:[["path",{d:"m11 2 .925 1.848",key:"geewpq"}],["path",{d:"M13 15h.01",key:"igtdqu"}],["path",{d:"m16 21-1-2.472",key:"197l0j"}],["path",{d:"m19 2-1 1.804",key:"qavonm"}],["path",{d:"m2 19 2.746-1.373",key:"1mv7mx"}],["path",{d:"m22 16-2.474-2.13",key:"1hzzot"}],["path",{d:"m22 5-1.804 1",key:"8v36m5"}],["path",{d:"m3 10 2 2",key:"1n5c32"}],["path",{d:"M9 16h.01",key:"1zau5q"}],["path",{d:"M9 20v2",key:"i2bqo8"}],["path",{d:"M9.33 7.035c-.51 1.478-1.786 2.93-3.09 3.794A5 5 0 009 20a12.1 12.1 0 0011.902-9.916A6 6 0 009.33 7.035",key:"lfugof"}],["circle",{cx:"15",cy:"9",r:"2",key:"14ricq"}]]};pm.node;const Qz=o(pm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm={name:"ghost",size:24,node:[["path",{d:"M15 10v1",key:"oj8wfp"}],["path",{d:"M7.528 20.472a1.6 1.6 0 012.277 0l1.057 1.056a1.6 1.6 0 002.276 0l1.057-1.056a1.6 1.6 0 012.277 0l1.114 1.114a1.4 1.4 0 002.414-1V10a8 8 0 00-16 0v10.586a1.4 1.4 0 002.414 1z",key:"13lou3"}],["path",{d:"M9 10v1",key:"1e14fa"}]]};mm.node;const e$=o(mm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um={name:"gift",size:24,node:[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]]};um.node;const sa=o(um);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym={name:"git-branch-minus",size:24,node:[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["path",{d:"M21 18h-6",key:"139f0c"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]};ym.node;const t$=o(ym);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km={name:"git-branch-plus",size:24,node:[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]};km.node;const a$=o(km);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm={name:"git-branch",size:24,node:[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]]};fm.node;const n$=o(fm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm={name:"git-commit-horizontal",size:24,node:[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]],aliases:["git-commit"]};xm.node;const Xo=o(xm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm={name:"git-commit-vertical",size:24,node:[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]};gm.node;const o$=o(gm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm={name:"git-compare-arrows",size:24,node:[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]};bm.node;const s$=o(bm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm={name:"git-compare",size:24,node:[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]};vm.node;const c$=o(vm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm={name:"git-fork",size:24,node:[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]};Mm.node;const i$=o(Mm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm={name:"git-graph",size:24,node:[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]};wm.node;const r$=o(wm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m={name:"git-merge-conflict",size:24,node:[["path",{d:"M12 6h4a2 2 0 0 1 2 2v7",key:"18ej7s"}],["path",{d:"M6 12v9",key:"9e33v1"}],["path",{d:"m8.5 3.5-5 5",key:"cpmru9"}],["path",{d:"m8.5 8.5-5-5",key:"1blc57"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]};_m.node;const d$=o(_m);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm={name:"git-merge",size:24,node:[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]};jm.node;const l$=o(jm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm={name:"git-pull-request-closed",size:24,node:[["path",{d:"m15.5 3.5 5 5",key:"1kmx7t"}],["path",{d:"m15.5 8.5 5-5",key:"saftza"}],["path",{d:"M18 11.62V15",key:"1greaj"}],["path",{d:"M6 9v12",key:"1sc30k"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}]]};zm.node;const h$=o(zm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m={name:"git-pull-request-arrow",size:24,node:[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]};$m.node;const p$=o($m);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm={name:"git-pull-request-create-arrow",size:24,node:[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]};Dm.node;const m$=o(Dm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm={name:"git-pull-request-create",size:24,node:[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]};Nm.node;const u$=o(Nm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm={name:"git-pull-request-draft",size:24,node:[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]};Sm.node;const y$=o(Sm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm={name:"git-pull-request",size:24,node:[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]};Cm.node;const k$=o(Cm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am={name:"glass-water",size:24,node:[["path",{d:"M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z",key:"p55z4y"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]};Am.node;const qm=o(Am);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm={name:"glasses",size:24,node:[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]};Lm.node;const Hm=o(Lm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm={name:"globe-check",size:24,node:[["path",{d:"m15 6 2 2 4-4",key:"levio8"}],["path",{d:"M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10",key:"46evmv"}]]};Vm.node;const f$=o(Vm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im={name:"globe-code",size:24,node:[["path",{d:"M15.5 10 13 7.5 15.5 5",key:"1sohav"}],["path",{d:"M15.861 14A14.5 14.5 0 0112 22a14.48 14.48 0 010-20 10 10 0 109.888 11.5",key:"zybipq"}],["path",{d:"M19.5 5 22 7.5 19.5 10",key:"hhg2en"}],["path",{d:"M2 12h8.5",key:"ovaggd"}]]};Im.node;const x$=o(Im);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em={name:"globe-lock",size:24,node:[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]};Em.node;const g$=o(Em);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm={name:"globe-off",size:24,node:[["path",{d:"M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643",key:"1jq2r7"}],["path",{d:"M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929",key:"1ohfya"}],["path",{d:"M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687",key:"1fyh9w"}],["path",{d:"M17.656 12H22",key:"1ttse4"}],["path",{d:"M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45",key:"rmtjzo"}],["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};Pm.node;const b$=o(Pm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm={name:"globe-x",size:24,node:[["path",{d:"m16 3 5 5",key:"1husv6"}],["path",{d:"M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10",key:"46evmv"}],["path",{d:"m21 3-5 5",key:"1g5oa7"}]]};Tm.node;const v$=o(Tm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm={name:"globe",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]};Rm.node;const M$=o(Rm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om={name:"goal",size:24,node:[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]};Om.node;const w$=o(Om);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm={name:"gpu",size:24,node:[["path",{d:"M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2",key:"hpo31w"}],["path",{d:"M2 21V3",key:"1bzk4w"}],["path",{d:"M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3",key:"5hbqbf"}],["circle",{cx:"16",cy:"11",r:"2",key:"qt15rb"}],["circle",{cx:"8",cy:"11",r:"2",key:"ssideg"}]]};Bm.node;const _$=o(Bm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm={name:"graduation-cap",size:24,node:[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]};Fm.node;const e1=o(Fm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm={name:"grape",size:24,node:[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]};Wm.node;const j$=o(Wm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um={name:"grid-2x2-check",size:24,node:[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]],aliases:["grid-2-x-2-check"]};Um.node;const Qo=o(Um);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm={name:"grid-2x2-plus",size:24,node:[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 22v-6",key:"qhmiwi"}]],aliases:["grid-2-x-2-plus"]};Gm.node;const es=o(Gm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym={name:"grid-2x2-x",size:24,node:[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16.5 16.5 5 5",key:"zc9lw7"}],["path",{d:"m16.5 21.5 5-5",key:"1fr29m"}]],aliases:["grid-2-x-2-x"]};Ym.node;const ts=o(Ym);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm={name:"grid-2x2",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],aliases:["grid-2-x-2"]};Zm.node;const un=o(Zm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km={name:"grid-3x2",size:24,node:[["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]};Km.node;const z$=o(Km);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm={name:"grid-3x3",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],aliases:["grid","grid-3-x-3"]};Jm.node;const Fa=o(Jm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm={name:"grip",size:24,node:[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]};Xm.node;const $$=o(Xm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm={name:"group",size:24,node:[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]};Qm.node;const D$=o(Qm);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu={name:"guitar",size:24,node:[["path",{d:"m11.9 12.1 4.514-4.514",key:"109xqo"}],["path",{d:"M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",key:"txyc8t"}],["path",{d:"m6 16 2 2",key:"16qmzd"}],["path",{d:"M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z",key:"1de1vg"}]]};eu.node;const tu=o(eu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au={name:"ham",size:24,node:[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",key:"1k1t7q"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",key:"153t1g"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",key:"gzrt0n"}],["path",{d:"m8.5 16.5-1-1",key:"otr954"}]]};au.node;const N$=o(au);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu={name:"hammer",size:24,node:[["path",{d:"m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9",key:"1hayfq"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"15ts47"}]]};nu.node;const ou=o(nu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su={name:"hand-helping",size:24,node:[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]],aliases:["helping-hand"]};su.node;const S$=o(su);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu={name:"hand",size:24,node:[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]};cu.node;const iu=o(cu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru={name:"hard-drive",size:24,node:[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]]};ru.node;const t1=o(ru);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du={name:"hard-hat",size:24,node:[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]]};du.node;const lu=o(du);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu={name:"hat-glasses",size:24,node:[["path",{d:"M14 18a2 2 0 0 0-4 0",key:"1v8fkw"}],["path",{d:"m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11",key:"1fkr7p"}],["path",{d:"M2 11h20",key:"3eubbj"}],["circle",{cx:"17",cy:"18",r:"3",key:"82mm0e"}],["circle",{cx:"7",cy:"18",r:"3",key:"lvkj7j"}]]};hu.node;const pu=o(hu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu={name:"haze",size:24,node:[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]};mu.node;const C$=o(mu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu={name:"hd",size:24,node:[["path",{d:"M10 12H6",key:"15f2ro"}],["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z",key:"b3f847"}],["path",{d:"M6 15V9",key:"12stmj"}],["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}]]};uu.node;const A$=o(uu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu={name:"hdmi-port",size:24,node:[["path",{d:"M22 9a1 1 0 00-1-1H3a1 1 0 00-1 1v4a1 1 0 001 1h.5a2 2 0 011.6.8l.3.4A2 2 0 007 16h10a2 2 0 001.6-.8l.3-.4a2 2 0 011.6-.8h.5a1 1 0 001-1z",key:"1kwg9h"}],["path",{d:"M8 12h8",key:"1wcyev"}]]};yu.node;const q$=o(yu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku={name:"headphones",size:24,node:[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]};ku.node;const ca=o(ku);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu={name:"headset",size:24,node:[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]};fu.node;const yn=o(fu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu={name:"heart-handshake",size:24,node:[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]]};xu.node;const L$=o(xu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu={name:"heart-pulse",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}],["path",{d:"M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"auskq0"}]]};gu.node;const ia=o(gu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu={name:"heart",size:24,node:[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]};bu.node;const H$=o(bu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu={name:"heater",size:24,node:[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]};vu.node;const V$=o(vu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu={name:"helicopter",size:24,node:[["path",{d:"M11 17v4",key:"14wq8k"}],["path",{d:"M14 3v8a2 2 0 0 0 2 2h5.865",key:"12oo5h"}],["path",{d:"M17 17v4",key:"hdt4hh"}],["path",{d:"M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z",key:"yynif"}],["path",{d:"M2 10v5",key:"sa5akn"}],["path",{d:"M6 3h16",key:"27qw71"}],["path",{d:"M7 21h14",key:"1ugz0u"}],["path",{d:"M8 13H2",key:"1thz1o"}]]};Mu.node;const wu=o(Mu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u={name:"highlighter",size:24,node:[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]};_u.node;const I$=o(_u);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju={name:"hop-off",size:24,node:[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};ju.node;const E$=o(ju);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu={name:"hop",size:24,node:[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]]};zu.node;const P$=o(zu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u={name:"hospital",size:24,node:[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M14 9h-4",key:"1w2s2s"}],["path",{d:"M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"1tthqt"}],["path",{d:"M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16",key:"dw4p4i"}]]};$u.node;const T$=o($u);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du={name:"hotel",size:24,node:[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]]};Du.node;const R$=o(Du);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu={name:"hourglass",size:24,node:[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]};Nu.node;const O$=o(Nu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su={name:"house-cog",size:24,node:[["path",{d:"M10.584 21H5a2 2 0 01-2-2v-9a2 2 0 01.709-1.527l7-6a2 2 0 012.582 0l7 6A2 2 0 0121 10.001v.583",key:"cw5g2y"}],["path",{d:"M14 12H10a1 1 0 00-1 1v8",key:"1qps3c"}],["path",{d:"m14.305 19.53.923-.382",key:"3m78fa"}],["path",{d:"m15.229 16.852-.924-.383",key:"qpfz85"}],["path",{d:"m16.852 15.228-.383-.923",key:"5xggr7"}],["path",{d:"m16.852 20.773-.383.924",key:"14cn6x"}],["path",{d:"m19.148 15.228.383-.923",key:"1reyyz"}],["path",{d:"m19.53 21.697-.382-.924",key:"x9j19g"}],["path",{d:"m20.773 16.852.922-.383",key:"59dfo2"}],["path",{d:"m20.773 19.148.922.383",key:"1lk755"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]};Su.node;const B$=o(Su);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu={name:"house-heart",size:24,node:[["path",{d:"M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z",key:"n9s7kx"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]]};Cu.node;const F$=o(Cu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au={name:"house-plug",size:24,node:[["path",{d:"M10 12V8.964",key:"1vll13"}],["path",{d:"M14 12V8.964",key:"1x3qvg"}],["path",{d:"M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z",key:"ppykja"}],["path",{d:"M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2",key:"365xoy"}]]};Au.node;const W$=o(Au);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu={name:"house-plus",size:24,node:[["path",{d:"M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35",key:"8ek5ge"}],["path",{d:"M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8",key:"1rbg29"}],["path",{d:"M15 18h6",key:"3b3c90"}],["path",{d:"M18 15v6",key:"9wciyi"}]]};qu.node;const U$=o(qu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu={name:"house-wifi",size:24,node:[["path",{d:"M9.5 13.866a4 4 0 0 1 5 .01",key:"1wy54i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}],["path",{d:"M7 10.754a8 8 0 0 1 10 0",key:"exoy2g"}]]};Lu.node;const G$=o(Lu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu={name:"house",size:24,node:[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],aliases:["home"]};Hu.node;const qt=o(Hu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu={name:"houses",size:24,node:[["path",{d:"m12.681 4.24.834-.715a1.45 1.45 0 011.88 0l5.09 4.364A1.45 1.45 0 0121 9v6.546a1.45 1.45 0 01-1 1.381",key:"1qphub"}],["path",{d:"M15.485 11.889A1.45 1.45 0 0116 13v6.546A1.454 1.454 0 0114.546 21H4.364a1.454 1.454 0 01-1.454-1.454V13a1.45 1.45 0 01.515-1.111l5.09-4.364a1.45 1.45 0 011.88 0z",key:"11pwvt"}],["path",{d:"M7.41 20.546v-4a1 1 0 011-1h2a1 1 0 011 1v4",key:"grn8bu"}]]};Vu.node;const Y$=o(Vu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu={name:"ice-cream-bowl",size:24,node:[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"1uxfcu"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]],aliases:["ice-cream-2"]};Iu.node;const Z$=o(Iu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu={name:"ice-cream-cone",size:24,node:[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]],aliases:["ice-cream"]};Eu.node;const K$=o(Eu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu={name:"image-plus",size:24,node:[["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}],["path",{d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]};Pu.node;const J$=o(Pu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};Tu.node;const Lt=o(Tu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru={name:"import",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]};Ru.node;const X$=o(Ru);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou={name:"indian-rupee",size:24,node:[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]};Ou.node;const Q$=o(Ou);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu={name:"infinity",size:24,node:[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]]};Bu.node;const eD=o(Bu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};Fu.node;const tD=o(Fu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu={name:"inspection-panel",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]};Wu.node;const aD=o(Wu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu={name:"iteration-ccw",size:24,node:[["path",{d:"m16 14 4 4-4 4",key:"hkso8o"}],["path",{d:"M20 10a8 8 0 1 0-8 8h8",key:"1bik7b"}]]};Uu.node;const nD=o(Uu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu={name:"iteration-cw",size:24,node:[["path",{d:"M4 10a8 8 0 1 1 8 8H4",key:"svv66n"}],["path",{d:"m8 22-4-4 4-4",key:"6g7gki"}]]};Gu.node;const oD=o(Gu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu={name:"iv-bag",size:24,node:[["path",{d:"M12 18v2a2 2 0 002 2h6",key:"1pl0l9"}],["path",{d:"M6 11c.72.5 1.44 1 3 1 3 0 3-2 6-2 1.56 0 2.28.5 3 1",key:"h3dcr"}],["path",{d:"M9.293 3c.453 0 .887-.18 1.207-.5s.754-.5 1.207-.5h.586c.453 0 .887.18 1.207.5s.754.5 1.207.5H16a2 2 0 012 2v11a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z",key:"nsf2p2"}]]};Yu.node;const sD=o(Yu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu={name:"japanese-yen",size:24,node:[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]};Zu.node;const cD=o(Zu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku={name:"joystick",size:24,node:[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]};Ku.node;const iD=o(Ku);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju={name:"kanban",size:24,node:[["path",{d:"M5 3v14",key:"9nsxs2"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"M19 3v18",key:"1sk56x"}]]};Ju.node;const rD=o(Ju);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu={name:"kayak",size:24,node:[["path",{d:"M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z",key:"skzb1g"}],["path",{d:"M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61",key:"cv9jm7"}],["path",{d:"m6.707 6.707 10.586 10.586",key:"d2l993"}],["path",{d:"M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z",key:"i0et4n"}]]};Xu.node;const dD=o(Xu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu={name:"kazakh-tenge",size:24,node:[["path",{d:"M12 8v12",key:"rrnztl"}],["path",{d:"M6 4h12",key:"1x2ag7"}],["path",{d:"M6 8h12",key:"6g4wlu"}]]};Qu.node;const lD=o(Qu);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey={name:"key-round",size:24,node:[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]};ey.node;const a1=o(ey);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty={name:"key",size:24,node:[["path",{d:"m2 21 9.6-9.6",key:"9l79m3"}],["path",{d:"m7.5 15.5 2.3 2.3a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L4 19",key:"fw8biw"}],["circle",{cx:"15.5",cy:"7.5",r:"5.5",key:"4wxmhb"}]]};ty.node;const hD=o(ty);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay={name:"keyboard",size:24,node:[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]};ay.node;const n1=o(ay);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny={name:"lambda",size:24,node:[["path",{d:"M11.38 10 5 20",key:"1y3u8v"}],["path",{d:"M19 18a2 2 0 01-2 2c-4.87-.003-5.052-16-10-16a2 2 0 00-2 2",key:"15fdan"}]]};ny.node;const pD=o(ny);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy={name:"lamp-ceiling",size:24,node:[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M14.829 15.998a3 3 0 1 1-5.658 0",key:"1pybiy"}],["path",{d:"M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z",key:"ma1wor"}]]};oy.node;const mD=o(oy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy={name:"lamp-desk",size:24,node:[["path",{d:"M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z",key:"sb8slu"}],["path",{d:"m14.207 4.793-3.414 3.414",key:"m2x3oj"}],["path",{d:"M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z",key:"8b3myj"}],["path",{d:"m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18",key:"43s6cu"}]]};sy.node;const cy=o(sy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy={name:"lamp-floor",size:24,node:[["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z",key:"1o95gh"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]};iy.node;const uD=o(iy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry={name:"lamp-wall-up",size:24,node:[["path",{d:"M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z",key:"1uvrbf"}],["path",{d:"M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z",key:"154r2a"}],["path",{d:"M8 18h4a2 2 0 0 0 2-2v-5",key:"z9mbu0"}]]};ry.node;const yD=o(ry);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy={name:"lamp",size:24,node:[["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z",key:"1l7kg2"}],["path",{d:"M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z",key:"1mmzpi"}]]};dy.node;const o1=o(dy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly={name:"land-plot",size:24,node:[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]};ly.node;const kD=o(ly);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy={name:"landmark",size:24,node:[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z",key:"yxxwt6"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]]};hy.node;const py=o(hy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my={name:"laptop-minimal-check",size:24,node:[["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{x:"3",y:"4",width:"18",height:"12",rx:"2",key:"8ur36m"}]]};my.node;const fD=o(my);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy={name:"laptop",size:24,node:[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]]};uy.node;const s1=o(uy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy={name:"laptop-minimal",size:24,node:[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]],aliases:["laptop-2"]};yy.node;const as=o(yy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky={name:"lasso-select",size:24,node:[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z",key:"72q637"}]]};ky.node;const xD=o(ky);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy={name:"lasso",size:24,node:[["path",{d:"M3.704 14.467a10 8 0 1 1 3.115 2.375",key:"wxgc5m"}],["path",{d:"M7 22a5 5 0 0 1-2-3.994",key:"1xp6a4"}],["circle",{cx:"5",cy:"16",r:"2",key:"18csp3"}]]};fy.node;const gD=o(fy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy={name:"layer-arrow-down",size:24,node:[["path",{d:"M12 10v10",key:"1ogziz"}],["path",{d:"M22 10a1 1 0 01-.59.92l-5.077 2.308",key:"q38q1t"}],["path",{d:"M22.017 10.005a1 1 0 00-.597-.916l-8.59-3.91a2 2 0 00-1.66.001L2.6 9.08a1 1 0 00-.02 1.831l5.093 2.316",key:"h1p4gn"}],["path",{d:"m9 17 3 3 3-3",key:"l18qqt"}]]};xy.node;const bD=o(xy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy={name:"layer-arrow-up",size:24,node:[["path",{d:"M12 14V4",key:"1t7zjg"}],["path",{d:"M7.674 10.774 2.58 13.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308",key:"1cy4ex"}],["path",{d:"m9 7 3-3 3 3",key:"8sjys4"}]]};gy.node;const vD=o(gy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by={name:"layers-2",size:24,node:[["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z",key:"15q6uc"}],["path",{d:"m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845",key:"byia6g"}]]};by.node;const MD=o(by);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy={name:"layers-arrow-down",size:24,node:[["path",{d:"M12 7v15",key:"1onnba"}],["path",{d:"M2 12a1 1 0 00.58.91l5.093 2.316",key:"xofxlj"}],["path",{d:"M22 12a1 1 0 01-.59.92l-5.077 2.308",key:"cc7swz"}],["path",{d:"M8 10.37 2.6 7.91a1 1 0 010-1.831l8.57-3.9a2 2 0 011.66.001l8.59 3.91a1 1 0 010 1.831l-5.392 2.45",key:"kdwjlb"}],["path",{d:"m9 19 3 3 3-3",key:"1fhphp"}]]};vy.node;const wD=o(vy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My={name:"layers-arrow-up",size:24,node:[["path",{d:"M12 12V2",key:"17ugg4"}],["path",{d:"M2 17.002a1 1 0 00.58.91l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92",key:"1ke1hd"}],["path",{d:"M7.674 8.774 2.58 11.09a1 1 0 000 1.822l8.6 3.91a2 2 0 001.65 0l8.58-3.9a1 1 0 00.59-.92 1 1 0 00-.59-.922l-5.078-2.308",key:"hlro1u"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]};My.node;const _D=o(My);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy={name:"layers-minus",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.832z",key:"tq134k"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M2.003 11.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18",key:"8mjqed"}],["path",{d:"M2.003 16.995a1 1 0 0 0 .597.915l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l2.11-.96",key:"7vwz41"}],["path",{d:"M22.018 12.004a1 1 0 0 1-.598.916l-.177.08",key:"bm5b9y"}]]};wy.node;const jD=o(wy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y={name:"layers-plus",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z",key:"zzgyd3"}],["path",{d:"M16 17h6",key:"1ook5g"}],["path",{d:"M19 14v6",key:"1ckrd5"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178",key:"1ia9y3"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962",key:"jksky3"}]]};_y.node;const zD=o(_y);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};jy.node;const ns=o(jy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy={name:"layout-grid",size:24,node:[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]};zy.node;const Ht=o(zy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y={name:"leaf",size:24,node:[["path",{d:"M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",key:"1wjnjv"}],["path",{d:"M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13",key:"c1ejpn"}]]};$y.node;const ra=o($y);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy={name:"leafy-green",size:24,node:[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]};Dy.node;const $D=o(Dy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny={name:"lectern",size:24,node:[["path",{d:"M15 13h4a2 2 0 001.901-1.38l1.057-4.333A1 1 0 0021 6H3a1 1 0 00-.958 1.287L3.1 11.621A2 2 0 005.001 13h4",key:"uu7fz6"}],["path",{d:"M15 22V11a1 1 0 00-1-1h-4a1 1 0 00-1 1v11",key:"hedff3"}],["path",{d:"M18 22H6",key:"mg6kv4"}],["path",{d:"M18 6V3a1 1 0 00-1-1h-3",key:"1y10qe"}]]};Ny.node;const DD=o(Ny);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy={name:"lens-concave",size:24,node:[["path",{d:"M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z",key:"109j23"}]]};Sy.node;const ND=o(Sy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy={name:"lens-convex",size:24,node:[["path",{d:"M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z",key:"cq67go"}]]};Cy.node;const SD=o(Cy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay={name:"library-big",size:24,node:[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]};Ay.node;const CD=o(Ay);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy={name:"library",size:24,node:[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]};qy.node;const AD=o(qy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly={name:"life-buoy",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]};Ly.node;const qD=o(Ly);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy={name:"ligature",size:24,node:[["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M14 20h4",key:"lzx1xo"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M8 20V8a4 4 0 0 1 7.464-2",key:"wk9t6r"}]]};Hy.node;const LD=o(Hy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};Vy.node;const c1=o(Vy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy={name:"lighthouse",size:24,node:[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"M16.066 16.865 7 22l2-11V6a3 3 0 016 0v5l2 11",key:"1945zj"}],["path",{d:"m19.792 4.5.866-.5",key:"nm0czm"}],["path",{d:"m19.797 13.5.866.5",key:"1ywzlr"}],["path",{d:"M21 9h1",key:"oh5ys"}],["path",{d:"M3 9H2",key:"1fr1tj"}],["path",{d:"m4.203 13.5-.866.5",key:"oyimbp"}],["path",{d:"M4.208 4.5 3.342 4",key:"lkiptw"}],["path",{d:"M5.5 22h13",key:"1mvt70"}],["path",{d:"m7.932 16.875 7.377-4.178",key:"w78ch2"}],["path",{d:"M8 11h8",key:"vwpz6n"}],["path",{d:"M8 7h8",key:"i86dvs"}]]};Iy.node;const HD=o(Iy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey={name:"line-dot-bottom-vertical",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}]]};Ey.node;const VD=o(Ey);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py={name:"line-dot-right-horizontal",size:24,node:[["path",{d:"M 3 12 L 15 12",key:"ymhu98"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}]]};Py.node;const ID=o(Py);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty={name:"line-dot-left-horizontal",size:24,node:[["path",{d:"M9 12h12",key:"nafxnq"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}]]};Ty.node;const ED=o(Ty);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry={name:"line-dot-top-vertical",size:24,node:[["path",{d:"M12 9v12",key:"10tdml"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]};Ry.node;const PD=o(Ry);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy={name:"line-squiggle",size:24,node:[["path",{d:"M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2",key:"1lrphd"}]]};Oy.node;const TD=o(Oy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By={name:"line-style",size:24,node:[["path",{d:"M11 5h2",key:"1s6z07"}],["path",{d:"M15 12h6",key:"upa0zy"}],["path",{d:"M19 5h2",key:"fjylsg"}],["path",{d:"M3 12h6",key:"ra68u1"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 5h2",key:"1qgu90"}]]};By.node;const RD=o(By);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy={name:"link-2",size:24,node:[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]};Fy.node;const os=o(Fy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy={name:"link",size:24,node:[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]};Wy.node;const Uy=o(Wy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy={name:"list",size:24,node:[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]};Gy.node;const OD=o(Gy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy={name:"loader-circle",size:24,node:[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],aliases:["loader-2"]};Yy.node;const ss=o(Yy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy={name:"loader-pinwheel",size:24,node:[["path",{d:"M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0",key:"1lzz15"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",key:"1gnrpi"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",key:"u9yy5q"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};Zy.node;const BD=o(Zy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky={name:"loader",size:24,node:[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]};Ky.node;const FD=o(Ky);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy={name:"locate-fixed",size:24,node:[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Jy.node;const WD=o(Jy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy={name:"locate-off",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M18.89 13.24a7 7 0 0 0-8.13-8.13",key:"1v9jrh"}],["path",{d:"M19 12h3",key:"osuazr"}],["path",{d:"M2 12h3",key:"1wrr53"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.05 7.05a7 7 0 0 0 9.9 9.9",key:"rc5l2e"}]]};Xy.node;const UD=o(Xy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy={name:"locate",size:24,node:[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]};Qy.node;const GD=o(Qy);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4={name:"lock-keyhole-open",size:24,node:[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]],aliases:["unlock-keyhole"]};e4.node;const YD=o(e4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4={name:"lock-open",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],aliases:["unlock"]};t4.node;const ZD=o(t4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};a4.node;const n4=o(a4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};o4.node;const KD=o(o4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4={name:"lollipop",size:24,node:[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]};s4.node;const JD=o(s4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4={name:"luggage",size:24,node:[["path",{d:"M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1m57jg"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]};c4.node;const i4=o(c4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4={name:"magnet",size:24,node:[["path",{d:"m12 15 4 4",key:"lnac28"}],["path",{d:"M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",key:"nlhkjb"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}]]};r4.node;const XD=o(r4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};d4.node;const l4=o(d4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4={name:"map-pin-pen",size:24,node:[["path",{d:"M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468",key:"1fahp3"}],["path",{d:"M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"1817ys"}],["circle",{cx:"10",cy:"10",r:"3",key:"1ns7v1"}]],aliases:["location-edit"]};h4.node;const QD=o(h4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4={name:"map-pin",size:24,node:[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]};p4.node;const eN=o(p4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4={name:"map",size:24,node:[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]};m4.node;const u4=o(m4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4={name:"mars-stroke",size:24,node:[["path",{d:"m14 6 4 4",key:"1q72g9"}],["path",{d:"M17 3h4v4",key:"19p9u1"}],["path",{d:"m21 3-7.75 7.75",key:"1cjbfd"}],["circle",{cx:"9",cy:"15",r:"6",key:"bx5svt"}]]};y4.node;const tN=o(y4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4={name:"mars",size:24,node:[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m21 3-6.75 6.75",key:"pv0uzu"}],["circle",{cx:"10",cy:"14",r:"6",key:"1qwbdc"}]]};k4.node;const aN=o(k4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4={name:"martini",size:24,node:[["path",{d:"M12 12 4.207 4.207A.707.707 0 0 1 4.707 3h14.586a.707.707 0 0 1 .5 1.207z",key:"vxdekd"}],["path",{d:"M12 12v10",key:"1nesaz"}],["path",{d:"M7 22h10",key:"10w4w3"}]]};f4.node;const nN=o(f4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};x4.node;const oN=o(x4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4={name:"maximize",size:24,node:[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]};g4.node;const sN=o(g4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4={name:"medal",size:24,node:[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]};b4.node;const v4=o(b4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4={name:"megaphone",size:24,node:[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]]};M4.node;const cN=o(M4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4={name:"memory-stick",size:24,node:[["path",{d:"M12 12v-2",key:"fwoke6"}],["path",{d:"M12 18v-2",key:"qj6yno"}],["path",{d:"M16 12v-2",key:"heuere"}],["path",{d:"M16 18v-2",key:"s1ct0w"}],["path",{d:"M2 11h1.5",key:"15p63e"}],["path",{d:"M20 18v-2",key:"12ehxp"}],["path",{d:"M20.5 11H22",key:"khsy7a"}],["path",{d:"M4 18v-2",key:"1c3oqr"}],["path",{d:"M8 12v-2",key:"1mwtfd"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["rect",{x:"2",y:"6",width:"20",height:"10",rx:"2",key:"1qcswk"}]]};w4.node;const iN=o(w4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};_4.node;const rN=o(_4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4={name:"merge",size:24,node:[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]};j4.node;const dN=o(j4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4={name:"message-circle",size:24,node:[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]]};z4.node;const lN=o(z4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4={name:"metronome",size:24,node:[["path",{d:"M12 11.4V9.1",key:"audfby"}],["path",{d:"m12 17 6.59-6.59",key:"c0sb7j"}],["path",{d:"m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2",key:"1pkfrk"}],["circle",{cx:"20",cy:"9",r:"2",key:"1udoqf"}]]};$4.node;const hN=o($4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4={name:"mic-signal",size:24,node:[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M18 11a6 6 0 00-3-5.197",key:"1lvu40"}],["path",{d:"M2 11a10 10 0 015-8.662",key:"bida4p"}],["path",{d:"M22 11a10 10 0 00-5-8.662",key:"idvinr"}],["path",{d:"M6 11a6 6 0 013-5.197",key:"17n2ii"}],["path",{d:"M9 21h6",key:"1udhl7"}],["rect",{x:"10",y:"9",width:"4",height:"8",rx:"2",key:"1l8p2f"}]],aliases:["podcast"]};D4.node;const pN=o(D4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4={name:"mic-vocal",size:24,node:[["path",{d:"m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12",key:"80a601"}],["path",{d:"M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5",key:"j0ngtp"}],["circle",{cx:"16",cy:"7",r:"5",key:"d08jfb"}]],aliases:["mic-2"]};N4.node;const mN=o(N4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4={name:"mic",size:24,node:[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]]};S4.node;const C4=o(S4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4={name:"microwave",size:24,node:[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]};A4.node;const q4=o(A4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4={name:"midi-port",size:24,node:[["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M15 2.458V5a1 1 0 01-1 1h-4a1 1 0 01-1-1V2.458",key:"1e2lr4"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M6 12h.01",key:"c2rlol"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};L4.node;const uN=o(L4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4={name:"milestone",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z",key:"8gz4t4"}]]};H4.node;const yN=o(H4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4={name:"milk",size:24,node:[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]};V4.node;const I4=o(V4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};E4.node;const kN=o(E4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4={name:"minimize",size:24,node:[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]};P4.node;const fN=o(P4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4={name:"mirror-round",size:24,node:[["path",{d:"M10 6.6 8.6 8",key:"itrr7k"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"M15 7.5 9.5 13",key:"1vyrsv"}],["path",{d:"M7 22h10",key:"10w4w3"}],["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}]]};T4.node;const xN=o(T4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4={name:"mirror-rectangular",size:24,node:[["path",{d:"M11 6 8 9",key:"7zt14w"}],["path",{d:"m16 7-8 8",key:"tkgtvu"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]]};R4.node;const gN=o(R4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4={name:"monitor-play",size:24,node:[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",key:"vbtd3f"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]]};O4.node;const B4=o(O4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4={name:"monitor-smartphone",size:24,node:[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]};F4.node;const bN=o(F4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4={name:"monitor",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]};W4.node;const $a=o(W4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4={name:"moon",size:24,node:[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]};U4.node;const vN=o(U4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4={name:"mop-sparkles",size:24,node:[["path",{d:"M10 22a3 3 0 01-3-3",key:"oxdmti"}],["path",{d:"M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a4.501 4.501 0 000 9z",key:"q53vem"}],["path",{d:"M10 3H8",key:"mzdi2d"}],["path",{d:"M12.5 11.5 22 2",key:"1r4cui"}],["path",{d:"M20 13v4",key:"1ugfop"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M4 5v4",key:"13jjxc"}],["path",{d:"M6 7H2",key:"8zbtv0"}],["path",{d:"m6.98 13.02 2.665-2.664a1.21 1.21 0 011.71 0l2.29 2.288a1.21 1.21 0 010 1.712l-2.088 2.087",key:"1dw0bk"}],["path",{d:"M9 2v2",key:"165o2o"}]]};G4.node;const MN=o(G4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4={name:"mop",size:24,node:[["path",{d:"M10 22c2.761 0 5-1.79 5-4-4.42 0-4.08-5-8.5-5a1 1 0 100 9za3 3 0 01-3-3",key:"16ixf7"}],["path",{d:"M12.5 11.5 22 2",key:"1r4cui"}],["path",{d:"m6.98 13.02 2.665-2.664a1.21 1.21 0 011.71 0l2.29 2.288a1.21 1.21 0 010 1.712l-2.088 2.087",key:"1dw0bk"}]]};Y4.node;const wN=o(Y4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4={name:"mosque",size:24,node:[["path",{d:"M12.268 2a2 2 0 003.465 2",key:"3in8xp"}],["path",{d:"M14 5 L14 8",key:"1fhhfb"}],["path",{d:"M16 22v-3a2 2 0 00-4 0v3",key:"1p6nbd"}],["path",{d:"M21 13c-.662-1.497-1.666-2.753-2.9-3.63C16.825 8.47 15.422 8 14 8s-2.826.47-4.1 1.37C8.668 10.248 7.663 11.504 7 13z",key:"ck3r5y"}],["path",{d:"M3 9h4",key:"rnfnj5"}],["path",{d:"M7 22V6a5 5 0 00-2-4 5 5 0 00-2 4v14a2 2 0 002 2h14a2 2 0 002-2v-7",key:"28kgc3"}]]};Z4.node;const _N=o(Z4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4={name:"motorbike",size:24,node:[["path",{d:"m18 14-1-3",key:"bdajw9"}],["path",{d:"m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81",key:"f5fotj"}],["path",{d:"M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5",key:"3i90e2"}],["circle",{cx:"19",cy:"17",r:"3",key:"1otbdv"}],["circle",{cx:"5",cy:"17",r:"3",key:"1d8p0c"}]]};K4.node;const J4=o(K4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4={name:"mountain",size:24,node:[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]};X4.node;const jN=o(X4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4={name:"mouse",size:24,node:[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]};Q4.node;const i1=o(Q4);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5={name:"mouth-off",size:24,node:[["path",{d:"M13.074 7.417a2.6 2.6 0 012.989.099c1.829 1.36 3.053 2.076 5.479 3.644a1 1 0 01.308 1.368 11.6 11.6 0 01-1.617 2.05",key:"150453"}],["path",{d:"M2 12a50.5 50.5 0 0010.99.99",key:"1ccgm2"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 11a1 1 0 011 1 51 51 0 01-3.734.61",key:"5gbt18"}],["path",{d:"M7.695 7.695c-1.7 1.247-2.92 1.967-5.238 3.464a1 1 0 00-.307 1.369 11.6 11.6 0 0014.766 4.388",key:"4jj8yu"}]]};e5.node;const zN=o(e5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5={name:"mouth",size:24,node:[["path",{d:"M2 12a50.5 50.5 0 0020 0 1 1 0 00-1-1",key:"18uu27"}],["path",{d:"M2.457 11.159a1 1 0 00-.307 1.369 11.59 11.59 0 0019.7 0 1 1 0 00-.308-1.368c-2.426-1.568-3.65-2.284-5.479-3.644a2.6 2.6 0 00-3.373.208 1 1 0 01-1.38 0 2.62 2.62 0 00-3.373-.208c-1.83 1.36-3.053 2.076-5.48 3.643",key:"9k55ex"}]]};t5.node;const $N=o(t5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5={name:"music-2",size:24,node:[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]};a5.node;const DN=o(a5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5={name:"music",size:24,node:[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]};n5.node;const r1=o(n5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5={name:"navigation",size:24,node:[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]};o5.node;const NN=o(o5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5={name:"nepali-rupee",size:24,node:[["path",{d:"M18 16.173 A4.74 4.74 0 0 0 13.496 8.005",key:"p7db3b"}],["path",{d:"M4 3 L20 3",key:"6x0y31"}],["path",{d:"M5 13 L13.5 21",key:"7ltufq"}],["path",{d:"M5 13 L9 13",key:"3nhwrb"}],["path",{d:"M8 13 C15.5 13 14.667 3 8 3",key:"fx539z"}]]};s5.node;const SN=o(s5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5={name:"network",size:24,node:[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]};c5.node;const CN=o(c5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5={name:"newspaper",size:24,node:[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]]};i5.node;const d1=o(i5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5={name:"nfc",size:24,node:[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]};r5.node;const AN=o(r5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5={name:"non-binary",size:24,node:[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"m8.5 4 7 4",key:"m1xjk3"}],["path",{d:"m8.5 8 7-4",key:"t0m5j6"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}]]};d5.node;const qN=o(d5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5={name:"notebook-pen",size:24,node:[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]};l5.node;const h5=o(l5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5={name:"notebook",size:24,node:[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]};p5.node;const LN=o(p5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5={name:"notepad-text-dashed",size:24,node:[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]};m5.node;const HN=o(m5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5={name:"notepad-text",size:24,node:[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]};u5.node;const VN=o(u5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5={name:"nut-off",size:24,node:[["path",{d:"M11.868 11.868a.88.88 0 01-.488.252c-1.78.28-3.54-.17-4.88-.62 0 1.272-.229 3.578-.653 5.347a10 10 0 01-.417 1.363c-.21.52-.82.55-1.17.12a10 10 0 01.677-13.393",key:"1wghw8"}],["path",{d:"M12.14 6.485a27.4 27.4 0 004.707-.638L20 9a7.23 7.23 0 011.706 7.05",key:"1ytkaj"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.707 20.707A1 1 0 0120 21h-1c-1.069 0-1.648.242-2.485.552A7.2 7.2 0 019.002 20l-3.155-3.153",key:"xvz8if"}],["path",{d:"M8.356 2.7a10 10 0 019.974 1.56c.43.35.4.97-.12 1.17a10 10 0 01-1.363.417",key:"o7h9wy"}]]};y5.node;const IN=o(y5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5={name:"nut",size:24,node:[["path",{d:"M16.847 5.847 20 9a7.23 7.23 0 011.551 7.516C21.241 17.352 21 17.932 21 19v1a1 1 0 01-1 1h-1c-1.069 0-1.648.242-2.485.552A7.2 7.2 0 019.002 20l-3.155-3.153",key:"1efe3h"}],["path",{d:"M18.21 5.43c-1.71.69-5.07 1.07-6.71 1.07.46 1.38.91 2.74.61 4.88a.88.88 0 01-.73.74c-1.78.28-3.54-.17-4.88-.62 0 1.64-.38 5-1.07 6.71-.21.52-.82.55-1.17.12A10 10 0 0118.33 4.26c.43.35.4.97-.12 1.17",key:"pqqcbt"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 010-1",key:"13508k"}]]};k5.node;const EN=o(k5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5={name:"octagon-alert",size:24,node:[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],aliases:["alert-octagon"]};f5.node;const PN=o(f5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5={name:"octagon-x",size:24,node:[["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z",key:"2d38gg"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-octagon"]};x5.node;const TN=o(x5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5={name:"option",size:24,node:[["path",{d:"M14 3h7",key:"16f0ms"}],["path",{d:"M3 3h5.28a1 1 0 0 1 .948.684l5.544 16.632a1 1 0 0 0 .949.684H21",key:"1qf1im"}]]};g5.node;const RN=o(g5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5={name:"orbit",size:24,node:[["path",{d:"M20.341 6.484A10 10 0 0 1 10.266 21.85",key:"1enhxb"}],["path",{d:"M3.659 17.516A10 10 0 0 1 13.74 2.152",key:"1crzgf"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]};b5.node;const ON=o(b5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5={name:"origami",size:24,node:[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",key:"1bx4vc"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",key:"1h3km6"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",key:"1hj4wg"}]]};v5.node;const BN=o(v5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5={name:"package-open",size:24,node:[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]};M5.node;const FN=o(M5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5={name:"package",size:24,node:[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]};w5.node;const l1=o(w5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5={name:"paint-bucket",size:24,node:[["path",{d:"M11 7 6 2",key:"1jwth8"}],["path",{d:"M18.992 12H2.041",key:"xw1gg"}],["path",{d:"M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595",key:"1nkol4"}],["path",{d:"m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33",key:"1nk1rd"}]]};_5.node;const WN=o(_5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5={name:"paint-roller",size:24,node:[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]};j5.node;const UN=o(j5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5={name:"paintbrush",size:24,node:[["path",{d:"m14.622 17.897-10.68-2.913",key:"vj2p1u"}],["path",{d:"M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z",key:"18tc5c"}],["path",{d:"M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15",key:"ytzfxy"}]]};z5.node;const GN=o(z5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};$5.node;const h1=o($5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5={name:"panda",size:24,node:[["path",{d:"M11.25 17.25h1.5L12 18z",key:"1wmwwj"}],["path",{d:"m15 12 2 2",key:"k60wz4"}],["path",{d:"M17.902 6.599a8 8 0 0 0-.5-.5",key:"1hpval"}],["path",{d:"M2 14.5C2 19.47 6.48 22 12 22s10-2.53 10-7.5a10 10 0 0 0-1.3-4.83 4.5 4.5 0 1 0-7.05-5.5 8 8 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5A10 10 0 0 0 2 14.5",key:"fsvxqb"}],["path",{d:"M6.099 6.599a8 8 0 0 1 .5-.5",key:"1mh6nx"}],["path",{d:"m9 12-2 2",key:"326nkw"}]]};D5.node;const YN=o(D5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5={name:"panel-bottom-close",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]};N5.node;const ZN=o(N5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5={name:"panel-bottom-dashed",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]],aliases:["panel-bottom-inactive"]};S5.node;const cs=o(S5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5={name:"panel-bottom-open",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]};C5.node;const KN=o(C5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5={name:"panel-bottom",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]};A5.node;const JN=o(A5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5={name:"panel-left-close",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],aliases:["sidebar-close"]};q5.node;const is=o(q5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5={name:"panel-left-dashed",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]],aliases:["panel-left-inactive"]};L5.node;const rs=o(L5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5={name:"panel-left-open",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],aliases:["sidebar-open"]};H5.node;const ds=o(H5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5={name:"panel-left-right-dashed",size:24,node:[["path",{d:"M15 10V9",key:"4dkmfx"}],["path",{d:"M15 15v-1",key:"6a4afx"}],["path",{d:"M15 21v-2",key:"1qshmc"}],["path",{d:"M15 5V3",key:"1fk0mb"}],["path",{d:"M9 10V9",key:"1lazqi"}],["path",{d:"M9 15v-1",key:"9lx740"}],["path",{d:"M9 21v-2",key:"1fwk0n"}],["path",{d:"M9 5V3",key:"2q8zi6"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]};V5.node;const XN=o(V5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5={name:"panel-left",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]],aliases:["sidebar"]};I5.node;const ls=o(I5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5={name:"panel-right-close",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]};E5.node;const QN=o(E5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5={name:"panel-right-dashed",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]],aliases:["panel-right-inactive"]};P5.node;const hs=o(P5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5={name:"panel-right-open",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]};T5.node;const eS=o(T5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5={name:"panel-right",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]};R5.node;const tS=o(R5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5={name:"panel-top-bottom-dashed",size:24,node:[["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 15h1",key:"1tg3ks"}],["path",{d:"M9 9h1",key:"15jzuz"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]};O5.node;const aS=o(O5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5={name:"panel-top-close",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]};B5.node;const nS=o(B5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5={name:"panel-top-dashed",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]],aliases:["panel-top-inactive"]};F5.node;const ps=o(F5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5={name:"panel-top-open",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]};W5.node;const oS=o(W5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5={name:"panels-right-bottom",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]};U5.node;const sS=o(U5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5={name:"panel-top",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]};G5.node;const cS=o(G5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5={name:"panels-left-bottom",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]};Y5.node;const iS=o(Y5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5={name:"panels-top-left",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],aliases:["layout"]};Z5.node;const rS=o(Z5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5={name:"paper-bag",size:24,node:[["path",{d:"M5.364 3.848C4 6 3 9.652 3 12.652V19a2 2 0 002 2h14a2 2 0 002-2v-5c0-2.334-1.816-4.668-2.622-7.002",key:"vlsvfu"}],["path",{d:"M7 3h11.379a2 2 0 011.789 1.106l.723 1.447A1 1 0 0119.997 7h-8.525a2 2 0 01-1.789-1.106L8.79 4.105a2 2 0 10-3.579 1.789l2.261 4.522A5 5 0 018 12.652V21",key:"12exh5"}]]};K5.node;const dS=o(K5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5={name:"paperclip",size:24,node:[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]]};J5.node;const X5=o(J5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5={name:"parasol",size:24,node:[["path",{d:"M12.5 11.134 18.196 21",key:"gf58kt"}],["path",{d:"M20.425 5.299a10 10 0 0 0-16.941 9.78c.183.563.843.774 1.355.478L20.16 6.711c.512-.296.66-.973.264-1.413",key:"znqfe4"}],["path",{d:"M21 21H3",key:"oafrgs"}]]};Q5.node;const lS=o(Q5);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek={name:"park",size:24,node:[["path",{d:"M12 18h10",key:"1c50yy"}],["path",{d:"M13.248 9.998A4.5 4.5 0 0 0 11.75 8.6V8a1 1 0 0 0-7.5 0 4.9 4.9 0 0 0 2.25 9H8",key:"t0a46z"}],["path",{d:"m15 14-2 6",key:"u1moqn"}],["path",{d:"m19 14 2 6",key:"ceqmri"}],["path",{d:"M21 14h-8",key:"jf2tjg"}],["path",{d:"M8 20v-5.922a2 2 0 0 0-.586-1.414L6.5 11.75",key:"4fcolv"}],["path",{d:"M9.205 12.795 8 14",key:"z0drss"}],["circle",{cx:"19",cy:"6",r:"2",key:"1yudst"}]]};ek.node;const hS=o(ek);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk={name:"parking-meter",size:24,node:[["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z",key:"1jofit"}],["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}]]};tk.node;const pS=o(tk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak={name:"party-popper",size:24,node:[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]};ak.node;const mS=o(ak);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk={name:"pc-case",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]};nk.node;const uS=o(nk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok={name:"paw-print",size:24,node:[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]};ok.node;const sk=o(ok);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck={name:"pen-line",size:24,node:[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-3"]};ck.node;const kn=o(ck);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik={name:"pen-tool",size:24,node:[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]};ik.node;const yS=o(ik);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk={name:"pen",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],aliases:["edit-2"]};rk.node;const ms=o(rk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk={name:"pencil-line",size:24,node:[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]};dk.node;const kS=o(dk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk={name:"pencil-ruler",size:24,node:[["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]};lk.node;const fS=o(lk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk={name:"pencil",size:24,node:[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]};hk.node;const pk=o(hk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk={name:"percent",size:24,node:[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]};mk.node;const xS=o(mk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk={name:"person-standing",size:24,node:[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]};uk.node;const yk=o(uk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk={name:"phi",size:24,node:[["path",{d:"M12 2v20",key:"t6zp3m"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]};kk.node;const gS=o(kk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk={name:"philippine-peso",size:24,node:[["path",{d:"M20 11H4",key:"6ut86h"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7",key:"1ana5r"}]]};fk.node;const bS=o(fk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk={name:"phone-call",size:24,node:[["path",{d:"M13 2a9 9 0 0 1 9 9",key:"1itnx2"}],["path",{d:"M13 6a5 5 0 0 1 5 5",key:"11nki7"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};xk.node;const vS=o(xk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk={name:"phone-forwarded",size:24,node:[["path",{d:"M14 6h8",key:"yd68k4"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};gk.node;const MS=o(gk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk={name:"phone-incoming",size:24,node:[["path",{d:"M16 2v6h6",key:"1mfrl5"}],["path",{d:"m22 2-6 6",key:"6f0sa0"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};bk.node;const wS=o(bk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk={name:"phone-missed",size:24,node:[["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"m22 2-6 6",key:"6f0sa0"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};vk.node;const _S=o(vk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk={name:"phone-off",size:24,node:[["path",{d:"M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272",key:"1wngk7"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}],["path",{d:"M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473",key:"10hv5p"}]]};Mk.node;const jS=o(Mk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk={name:"phone-outgoing",size:24,node:[["path",{d:"m16 8 6-6",key:"oawc05"}],["path",{d:"M22 8V2h-6",key:"oqy2zc"}],["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};wk.node;const zS=o(wk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};_k.node;const jk=o(_k);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk={name:"pi",size:24,node:[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]};zk.node;const $S=o(zk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k={name:"piano",size:24,node:[["path",{d:"M10 13v4",key:"5krxfa"}],["path",{d:"M14 13v4",key:"72xrsi"}],["path",{d:"M18 13v4",key:"1i7sbu"}],["path",{d:"M2 13h20",key:"5evz65"}],["path",{d:"M22 11.5A3.5 3.5 0 0018.5 8a3.52 3.52 0 01-3.173-2A7 7 0 002 9v10a2 2 0 002 2h16a2 2 0 002-2z",key:"1txdgy"}],["path",{d:"M6 13v4",key:"9v0cap"}]]};$k.node;const Dk=o($k);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk={name:"pickaxe",size:24,node:[["path",{d:"m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999",key:"1lw9ds"}],["path",{d:"M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024",key:"ffj4ej"}],["path",{d:"M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069",key:"8tj4zw"}],["path",{d:"M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z",key:"hh6h97"}]]};Nk.node;const DS=o(Nk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk={name:"picture-in-picture",size:24,node:[["path",{d:"M2 10h6V4",key:"zwrco"}],["path",{d:"m2 4 6 6",key:"ug085t"}],["path",{d:"M21 10V7a2 2 0 0 0-2-2h-7",key:"git5jr"}],["path",{d:"M3 14v2a2 2 0 0 0 2 2h3",key:"1f7fh3"}],["rect",{x:"12",y:"14",width:"10",height:"7",rx:"1",key:"1wjs3o"}]]};Sk.node;const NS=o(Sk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck={name:"picture-in-picture-2",size:24,node:[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]};Ck.node;const SS=o(Ck);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak={name:"piggy-bank",size:24,node:[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]]};Ak.node;const qk=o(Ak);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk={name:"pill-bottle",size:24,node:[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",key:"17ldeb"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",key:"nc37y6"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1",key:"3jeezo"}]]};Lk.node;const CS=o(Lk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk={name:"pill",size:24,node:[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]};Hk.node;const p1=o(Hk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk={name:"pin-off",size:24,node:[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]]};Vk.node;const AS=o(Vk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik={name:"pipette",size:24,node:[["path",{d:"m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12",key:"1y3wsu"}],["path",{d:"m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z",key:"110lr1"}],["path",{d:"m2 22 .414-.414",key:"jhxm08"}]]};Ik.node;const qS=o(Ik);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek={name:"pin",size:24,node:[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]};Ek.node;const LS=o(Ek);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk={name:"plane-landing",size:24,node:[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]};Pk.node;const HS=o(Pk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk={name:"pizza",size:24,node:[["path",{d:"m12 14-1 1",key:"11onhr"}],["path",{d:"m13.75 18.25-1.25 1.42",key:"1yisr3"}],["path",{d:"M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",key:"1qtqk6"}],["path",{d:"M18.8 9.3a1 1 0 0 0 2.1 7.7",key:"fbbbr2"}],["path",{d:"M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",key:"1hyfdd"}]]};Tk.node;const Rk=o(Tk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok={name:"plane-takeoff",size:24,node:[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]};Ok.node;const VS=o(Ok);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk={name:"plane",size:24,node:[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]};Bk.node;const m1=o(Bk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk={name:"plant-pot",size:24,node:[["path",{d:"M14 8.536V6a4 4 0 014-4h1.5a.5.5 0 01.5.5V4a4 4 0 01-4 4 4 4 0 00-4 4 5 5 0 01-8-4 5 5 0 018 4c0 2 1 3 1 5",key:"1yu01x"}],["path",{d:"m18 17-1.085 3.58A2 2 0 0115 22H9.002a2 2 0 01-1.913-1.418L6 17",key:"4ibc1g"}],["path",{d:"M5 17h14",key:"74xsq1"}]]};Fk.node;const IS=o(Fk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk={name:"plug-zap",size:24,node:[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]],aliases:["plug-zap-2"]};Wk.node;const ES=o(Wk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk={name:"plug",size:24,node:[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z",key:"1xoxul"}],["path",{d:"M9 8V2",key:"14iosj"}]]};Uk.node;const Gk=o(Uk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};Yk.node;const PS=o(Yk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk={name:"podium",size:24,node:[["path",{d:"M12 6V2h-1",key:"1hv4eo"}],["path",{d:"M9 15a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1",key:"1jvw5n"}],["path",{d:"M9 21V11a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10",key:"rgi5dp"}]]};Zk.node;const TS=o(Zk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk={name:"pocket-knife",size:24,node:[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]};Kk.node;const RS=o(Kk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk={name:"pointer-off",size:24,node:[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};Jk.node;const OS=o(Jk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk={name:"pointer",size:24,node:[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1agjmk"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1",key:"wdbh2u"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10",key:"1ibuk9"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]};Xk.node;const BS=o(Xk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk={name:"popcorn",size:24,node:[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]};Qk.node;const FS=o(Qk);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3={name:"popsicle",size:24,node:[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]};e3.node;const WS=o(e3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3={name:"pound-sterling",size:24,node:[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]};t3.node;const US=o(t3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3={name:"power-off",size:24,node:[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};a3.node;const GS=o(a3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3={name:"power",size:24,node:[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]};n3.node;const YS=o(n3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3={name:"presentation",size:24,node:[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]};o3.node;const ZS=o(o3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};s3.node;const u1=o(s3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3={name:"projector",size:24,node:[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]};c3.node;const i3=o(c3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3={name:"puzzle",size:24,node:[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]]};r3.node;const y1=o(r3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3={name:"pyramid",size:24,node:[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]};d3.node;const KS=o(d3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3={name:"qr-code",size:24,node:[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]};l3.node;const JS=o(l3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3={name:"rabbit",size:24,node:[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]};h3.node;const XS=o(h3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3={name:"radar",size:24,node:[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]};p3.node;const QS=o(p3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3={name:"radiation",size:24,node:[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z",key:"1y4lzb"}],["path",{d:"M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z",key:"163ggk"}],["path",{d:"M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z",key:"1l9i0b"}]]};m3.node;const eC=o(m3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3={name:"radical",size:24,node:[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",key:"1mqj8i"}]]};u3.node;const tC=o(u3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3={name:"radio-tower",size:24,node:[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]};y3.node;const aC=o(y3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3={name:"radio",size:24,node:[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};k3.node;const nC=o(k3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3={name:"radius",size:24,node:[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};f3.node;const oC=o(f3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3={name:"rainbow",size:24,node:[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]};x3.node;const sC=o(x3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3={name:"rat",size:24,node:[["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M13.236 18a3 3 0 0 0-2.2-5",key:"1tbvmo"}],["path",{d:"M16 9h.01",key:"1bdo4e"}],["path",{d:"M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3",key:"9ch7kn"}],["path",{d:"M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18",key:"3s7e9i"}]]};g3.node;const cC=o(g3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3={name:"receipt-text",size:24,node:[["path",{d:"M13 16H8",key:"wsln4y"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",key:"ycz6yz"}]]};b3.node;const iC=o(b3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3={name:"receipt",size:24,node:[["path",{d:"M12 17V7",key:"pyj7ub"}],["path",{d:"M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8",key:"1elt7d"}],["path",{d:"M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z",key:"ycz6yz"}]]};v3.node;const M3=o(v3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3={name:"rectangle-ellipsis",size:24,node:[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]],aliases:["form-input"]};w3.node;const rC=o(w3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3={name:"recycle",size:24,node:[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]};_3.node;const dC=o(_3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3={name:"refresh-ccw-dot",size:24,node:[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]};j3.node;const lC=o(j3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3={name:"refresh-ccw",size:24,node:[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]};z3.node;const hC=o(z3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3={name:"refresh-cw-off",size:24,node:[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]};$3.node;const pC=o($3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};D3.node;const N3=o(D3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3={name:"refrigerator",size:24,node:[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]};S3.node;const k1=o(S3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3={name:"remove-formatting",size:24,node:[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]};C3.node;const mC=o(C3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3={name:"repeat",size:24,node:[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]};A3.node;const us=o(A3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3={name:"replace",size:24,node:[["path",{d:"M14 4a1 1 0 0 1 1-1",key:"dhj8ez"}],["path",{d:"M15 10a1 1 0 0 1-1-1",key:"1mnyi5"}],["path",{d:"M21 4a1 1 0 0 0-1-1",key:"sfs9ap"}],["path",{d:"M21 9a1 1 0 0 1-1 1",key:"mp6qeo"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a2 2 0 0 1 2-2h2",key:"15xut4"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}]]};q3.node;const uC=o(q3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3={name:"replace-all",size:24,node:[["path",{d:"M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"zg1ipl"}],["path",{d:"M14 4a1 1 0 0 1 1-1",key:"dhj8ez"}],["path",{d:"M15 10a1 1 0 0 1-1-1",key:"1mnyi5"}],["path",{d:"M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1",key:"txt6k4"}],["path",{d:"M21 4a1 1 0 0 0-1-1",key:"sfs9ap"}],["path",{d:"M21 9a1 1 0 0 1-1 1",key:"mp6qeo"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5a2 2 0 0 1 2-2h2",key:"15xut4"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}]]};L3.node;const yC=o(L3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3={name:"ribbon",size:24,node:[["path",{d:"M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22",key:"1rnhq3"}],["path",{d:"m12 18 2.57-3.5",key:"116vt7"}],["path",{d:"M6.243 9.016a7 7 0 0 1 11.507-.009",key:"10dq0b"}],["path",{d:"M9.35 14.53 12 11.22",key:"tdsyp2"}],["path",{d:"M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z",key:"nmifey"}]]};H3.node;const V3=o(H3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3={name:"road",size:24,node:[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M12 5V3",key:"vd5es"}],["path",{d:"M12 9v3",key:"qyerrc"}],["path",{d:"M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z",key:"1cuxct"}]]};I3.node;const kC=o(I3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3={name:"rocket",size:24,node:[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]]};E3.node;const fC=o(E3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3={name:"rocking-chair",size:24,node:[["path",{d:"m15 13 3.708 7.416",key:"1edxn9"}],["path",{d:"M3 19a15 15 0 0 0 18 0",key:"d0d1c4"}],["path",{d:"m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18",key:"tpa4et"}],["path",{d:"m9 13-3.708 7.416",key:"1oplxx"}]]};P3.node;const xC=o(P3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3={name:"roller-coaster",size:24,node:[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]};T3.node;const gC=o(T3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3={name:"rose",size:24,node:[["path",{d:"M17 10h-1a4 4 0 1 1 4-4v.534",key:"7qf5zm"}],["path",{d:"M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31",key:"1et29u"}],["path",{d:"M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2",key:"kiv2lz"}],["path",{d:"M9.77 12C4 15 2 22 2 22",key:"h28rw0"}],["circle",{cx:"17",cy:"8",r:"2",key:"1330xn"}]]};R3.node;const bC=o(R3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};O3.node;const vC=o(O3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3={name:"route",size:24,node:[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]};B3.node;const MC=o(B3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3={name:"router",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]};F3.node;const f1=o(F3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3={name:"rows-3",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]],aliases:["panels-top-bottom"]};W3.node;const wC=o(W3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3={name:"rss",size:24,node:[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]};U3.node;const _C=o(U3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3={name:"rugby-ball",size:24,node:[["path",{d:"m10 10 4 4",key:"1twawc"}],["path",{d:"m13 7 4 4",key:"17f0qu"}],["path",{d:"M15.34 2.138A15 15 0 002.138 15.34c-.357 2.94.004 4.919.805 5.717.798.8 2.778 1.162 5.718.805A15 15 0 0021.862 8.661c.357-2.94-.004-4.92-.805-5.718-.798-.8-2.778-1.162-5.717-.805",key:"7bv9ob"}],["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"m7 13 4 4",key:"ir98si"}]]};G3.node;const jC=o(G3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3={name:"ruler",size:24,node:[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]};Y3.node;const Z3=o(Y3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3={name:"russian-ruble",size:24,node:[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]};K3.node;const zC=o(K3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3={name:"sailboat",size:24,node:[["path",{d:"M10 2v15",key:"1qf71f"}],["path",{d:"M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z",key:"1pxcvx"}],["path",{d:"M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z",key:"5oog16"}]]};J3.node;const X3=o(J3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3={name:"salad",size:24,node:[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]};Q3.node;const $C=o(Q3);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ef={name:"sandwich",size:24,node:[["path",{d:"m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777",key:"f1wd0e"}],["path",{d:"M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25",key:"1pfu07"}],["path",{d:"M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9",key:"1oq9qw"}],["path",{d:"m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2",key:"1fnwu5"}],["rect",{width:"20",height:"4",x:"2",y:"11",rx:"1",key:"itshg"}]]};ef.node;const DC=o(ef);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf={name:"satellite-dish",size:24,node:[["path",{d:"M18 12a6 6 0 00-6-6",key:"9b1kp8"}],["path",{d:"M2.824 10.459a8 8 0 0010.717 10.717c.558-.276.623-1.012.183-1.452l-9.448-9.448c-.44-.44-1.176-.375-1.452.183",key:"1jwhal"}],["path",{d:"M22 12A10 10 0 0012 2",key:"m7rnro"}],["path",{d:"m9 15 4-4",key:"1tjxz5"}]]};tf.node;const NC=o(tf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const af={name:"satellite",size:24,node:[["path",{d:"m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5",key:"dzhfyz"}],["path",{d:"M16.5 7.5 19 5",key:"1ltcjm"}],["path",{d:"m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5",key:"nfoymv"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}],["path",{d:"M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z",key:"nv9zqy"}]]};af.node;const SC=o(af);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf={name:"saudi-riyal",size:24,node:[["path",{d:"m20 19.5-5.5 1.2",key:"1aenhr"}],["path",{d:"M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2",key:"2rtezt"}],["path",{d:"m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2",key:"1kbm92"}],["path",{d:"M20 10 4 13.5",key:"8nums9"}]]};nf.node;const CC=o(nf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of={name:"save-all",size:24,node:[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5",key:"1xspal"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",key:"1ra60u"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",key:"1yve0x"}]]};of.node;const AC=o(of);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sf={name:"save-check",size:24,node:[["path",{d:"M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4v4.35",key:"6jbevg"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}],["path",{d:"M17 15.13V14a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1bzeol"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};sf.node;const qC=o(sf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cf={name:"save-off",size:24,node:[["path",{d:"M13 13H8a1 1 0 0 0-1 1v7",key:"h8g396"}],["path",{d:"M14 8h1",key:"1lfen6"}],["path",{d:"M17 21v-4",key:"1yknxs"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41",key:"1t4vdl"}],["path",{d:"M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15",key:"24cby9"}]]};cf.node;const LC=o(cf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf={name:"save-pen",size:24,node:[["path",{d:"M13.33 13H8a1 1 0 00-1 1v7",key:"60fs50"}],["path",{d:"M14.363 17.634a2 2 0 00-.506.854l-.837 2.87a.5.5 0 00.62.62l2.87-.837a2 2 0 00.854-.506l4.013-4.009a1 1 0 10-3.004-3.004z",key:"dpj1he"}],["path",{d:"M7 3v4a1 1 0 001 1h7",key:"vkun1b"}],["path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h10.2a2 2 0 011.4.6l3.8 3.8a2 2 0 01.6 1.4v.3",key:"1oj3yb"}]]};rf.node;const HC=o(rf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const df={name:"save-plus",size:24,node:[["path",{d:"M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V12",key:"bhibzn"}],["path",{d:"M16 13H8a1 1 0 0 0-1 1v7",key:"164ge7"}],["path",{d:"M19 22v-6",key:"qhmiwi"}],["path",{d:"M22 19h-6",key:"vcuq98"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};df.node;const VC=o(df);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lf={name:"save",size:24,node:[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]};lf.node;const IC=o(lf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf={name:"scale",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m19 8 3 8a5 5 0 0 1-6 0zV7",key:"zcdpyk"}],["path",{d:"M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1",key:"1yorad"}],["path",{d:"m5 8 3 8a5 5 0 0 1-6 0zV7",key:"eua70x"}],["path",{d:"M7 21h10",key:"1b0cd5"}]]};hf.node;const EC=o(hf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pf={name:"scaling",size:24,node:[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]};pf.node;const PC=o(pf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mf={name:"scan-line",size:24,node:[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]};mf.node;const uf=o(mf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yf={name:"school",size:24,node:[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M18 4.933V21",key:"tjwmp4"}],["path",{d:"m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6",key:"zywc2d"}],["path",{d:"m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11",key:"1d4ql0"}],["path",{d:"M6 4.933V21",key:"1ufz1j"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]};yf.node;const TC=o(yf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kf={name:"scissors",size:24,node:[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]};kf.node;const ff=o(kf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xf={name:"scooter",size:24,node:[["path",{d:"M21 4h-3.5l2 11.05",key:"1gktiw"}],["path",{d:"M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009",key:"1bq3u3"}],["circle",{cx:"19.5",cy:"17.5",r:"2.5",key:"e4zhv9"}],["circle",{cx:"4.5",cy:"17.5",r:"2.5",key:"50vk4p"}]]};xf.node;const RC=o(xf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gf={name:"screen-share-off",size:24,node:[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]};gf.node;const OC=o(gf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bf={name:"screen-share",size:24,node:[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]};bf.node;const BC=o(bf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vf={name:"scroll-text",size:24,node:[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]};vf.node;const Mf=o(vf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wf={name:"scroll",size:24,node:[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]};wf.node;const FC=o(wf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f={name:"search-alert",size:24,node:[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 7v4",key:"m2edmq"}],["path",{d:"M11 15h.01",key:"k85uqc"}]]};_f.node;const WC=o(_f);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf={name:"search-check",size:24,node:[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]};jf.node;const UC=o(jf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf={name:"search-code",size:24,node:[["path",{d:"m13 13.5 2-2.5-2-2.5",key:"1rvxrh"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M9 8.5 7 11l2 2.5",key:"6ffwbx"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};zf.node;const GC=o(zf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f={name:"search-slash",size:24,node:[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]};$f.node;const YC=o($f);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Df={name:"search-x",size:24,node:[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]};Df.node;const ZC=o(Df);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nf={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Nf.node;const da=o(Nf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sf={name:"section",size:24,node:[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",key:"vqan6v"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",key:"wdjd8o"}]]};Sf.node;const KC=o(Sf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cf={name:"separator-horizontal",size:24,node:[["path",{d:"m16 16-4 4-4-4",key:"3dv8je"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"m8 8 4-4 4 4",key:"2bscm2"}]]};Cf.node;const JC=o(Cf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af={name:"separator-vertical",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"m16 16 4-4-4-4",key:"1js579"}],["path",{d:"m8 8-4 4 4 4",key:"1whems"}]]};Af.node;const XC=o(Af);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf={name:"server",size:24,node:[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]};qf.node;const x1=o(qf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf={name:"shapes",size:24,node:[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]};Lf.node;const QC=o(Lf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hf={name:"settings",size:24,node:[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};Hf.node;const Vf=o(Hf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If={name:"share-2",size:24,node:[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]};If.node;const g1=o(If);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef={name:"sheet",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]};Ef.node;const eA=o(Ef);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf={name:"shell",size:24,node:[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]};Pf.node;const tA=o(Pf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tf={name:"shelving-unit",size:24,node:[["path",{d:"M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"wiz68x"}],["path",{d:"M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3",key:"1b59c4"}],["path",{d:"M20 22V2",key:"1bnhr8"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M4 4h16",key:"1bkgr1"}]]};Tf.node;const aA=o(Tf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Rf.node;const Da=o(Rf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};Of.node;const Rt=o(Of);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf={name:"ship",size:24,node:[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 9.189V13",key:"yp40p3"}],["path",{d:"M19 12V6a2 2 0 00-2-2H7a2 2 0 00-2 2v6",key:"1wcigf"}],["path",{d:"M19.38 19A11.6 11.6 0 0021 13l-8.188-3.639a2 2 0 00-1.624 0L3 13.001a11.6 11.6 0 002.81 7.76",key:"1kdp0u"}],["path",{d:"M2 20c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"1l8w7g"}]]};Bf.node;const Ff=o(Bf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf={name:"shirt",size:24,node:[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]};Wf.node;const b1=o(Wf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf={name:"shopping-bag",size:24,node:[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]]};Uf.node;const Na=o(Uf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf={name:"shopping-basket",size:24,node:[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]};Gf.node;const nA=o(Gf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf={name:"shopping-cart",size:24,node:[["path",{d:"m2.05 2.05 1.099-.028a1 1 0 0 1 1.008.815l2.69 14.347A1 1 0 0 0 7.83 18H18",key:"uebgi3"}],["path",{d:"M4.563 5h16.435a1 1 0 0 1 .981 1.204l-1.026 6.226A2 2 0 0 1 18.962 14H6.25",key:"1j7c9p"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]};Yf.node;const Zf=o(Yf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf={name:"shovel",size:24,node:[["path",{d:"M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z",key:"1gcedi"}],["path",{d:"M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z",key:"pg9kv3"}],["path",{d:"m9 15 7.879-7.878",key:"1o1zgh"}]]};Kf.node;const oA=o(Kf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf={name:"shower-head",size:24,node:[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]};Jf.node;const sA=o(Jf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf={name:"shredder",size:24,node:[["path",{d:"M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5",key:"1eob4r"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 22v-5",key:"sfixh4"}],["path",{d:"M14 19v-2",key:"pdve8j"}],["path",{d:"M18 20v-3",key:"uox2gk"}],["path",{d:"M2 13h20",key:"5evz65"}],["path",{d:"M6 20v-3",key:"c6pdcb"}]]};Xf.node;const cA=o(Xf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf={name:"shrimp",size:24,node:[["path",{d:"M10 2a3.28 3.28 0 003.227 1.798l6.17-.561A1 1 0 1119.614 8H8.5a6.44 6.44 0 00-5.63 9.75A6.5 6.5 0 008.5 21c1.38 0 2-.5 2.5-1",key:"17dh52"}],["path",{d:"M10 8a8.5 8.5 0 000 8",key:"vsnxbr"}],["path",{d:"M11 22c-.5-.5-1.12-1-2.5-1a1 1 0 010-5H12a7 7 0 007-7V8",key:"lzdhj4"}],["path",{d:"M13 12h.01",key:"1nih16"}],["path",{d:"M8 16c-2 0-4.5-4-4-6",key:"1f5g8v"}]]};Qf.node;const iA=o(Qf);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8={name:"shrub",size:24,node:[["path",{d:"M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5",key:"1p17fm"}],["path",{d:"M14.5 14.5 12 17",key:"dy5w4y"}],["path",{d:"M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z",key:"6z7b3o"}]]};e8.node;const rA=o(e8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8={name:"sigma",size:24,node:[["path",{d:"M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",key:"wuwx1p"}]]};t8.node;const dA=o(t8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8={name:"signal",size:24,node:[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]};a8.node;const lA=o(a8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8={name:"signature",size:24,node:[["path",{d:"m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284",key:"y32ogt"}],["path",{d:"M3 21h18",key:"itz85i"}]]};n8.node;const hA=o(n8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8={name:"signpost",size:24,node:[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z",key:"1tm261"}]]};o8.node;const pA=o(o8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8={name:"siren",size:24,node:[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]};s8.node;const mA=o(s8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8={name:"skull",size:24,node:[["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",key:"1o5pge"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}]]};c8.node;const uA=o(c8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8={name:"slice",size:24,node:[["path",{d:"M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14",key:"1sllp5"}]]};i8.node;const yA=o(i8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8={name:"sliders-horizontal",size:24,node:[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]]};r8.node;const kA=o(r8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};d8.node;const ys=o(d8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8={name:"smartphone-charging",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]};l8.node;const fA=o(l8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8={name:"smartphone-nfc",size:24,node:[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]};h8.node;const xA=o(h8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};p8.node;const kt=o(p8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8={name:"snail",size:24,node:[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]};m8.node;const gA=o(m8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8={name:"snowflake",size:24,node:[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]]};u8.node;const bA=o(u8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8={name:"soap-dispenser-droplet",size:24,node:[["path",{d:"M10.5 2v4",key:"1xt6in"}],["path",{d:"M14 2H7a2 2 0 0 0-2 2",key:"e6xig3"}],["path",{d:"M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19",key:"adq7uc"}],["path",{d:"M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"t9hm96"}]]};y8.node;const vA=o(y8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8={name:"sofa",size:24,node:[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]};k8.node;const f8=o(k8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8={name:"solar-panel",size:24,node:[["path",{d:"M11 2h2",key:"isr7bz"}],["path",{d:"m14.28 14-4.56 8",key:"4anwcf"}],["path",{d:"m21 22-1.558-4H4.558",key:"enk13h"}],["path",{d:"M3 10v2",key:"w8mti9"}],["path",{d:"M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z",key:"pouggg"}],["path",{d:"M7 2a4 4 0 0 1-4 4",key:"78s8of"}],["path",{d:"m8.66 7.66 1.41 1.41",key:"1vaqj8"}]]};x8.node;const MA=o(x8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8={name:"soup",size:24,node:[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]};g8.node;const wA=o(g8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8={name:"spade",size:24,node:[["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5",key:"1aw2pz"}]]};b8.node;const _A=o(b8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8={name:"space",size:24,node:[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]};v8.node;const jA=o(v8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8={name:"sparkle",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}]]};M8.node;const zA=o(M8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};w8.node;const Sa=o(w8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8={name:"speaker",size:24,node:[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]};_8.node;const j8=o(_8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8={name:"spell-check-2",size:24,node:[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]};z8.node;const $A=o(z8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8={name:"spell-check",size:24,node:[["path",{d:"m20 15-5.5 5.5L12 18",key:"6ytzne"}],["path",{d:"m4 16 6-12 5.115 10.23",key:"fyukjg"}],["path",{d:"M6 12h8",key:"1hdiqa"}]]};$8.node;const DA=o($8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8={name:"spline-pointer",size:24,node:[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}]]};D8.node;const NA=o(D8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8={name:"spline",size:24,node:[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]};N8.node;const SA=o(N8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8={name:"split",size:24,node:[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]};S8.node;const CA=o(S8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8={name:"spool",size:24,node:[["path",{d:"M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66",key:"13vns8"}],["path",{d:"m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178",key:"s8x3u0"}]]};C8.node;const AA=o(C8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8={name:"sport-shoe",size:24,node:[["path",{d:"m15 10.42 4.8-5.07",key:"10at9d"}],["path",{d:"M19 18h3",key:"nnkd4d"}],["path",{d:"M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14",key:"v410ed"}]]};A8.node;const qA=o(A8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8={name:"spotlight",size:24,node:[["path",{d:"M15.295 19.562 16 22",key:"31jsb7"}],["path",{d:"m17 16 3.758 2.098",key:"121ar7"}],["path",{d:"m19 12.5 3.026-.598",key:"19ukd3"}],["path",{d:"M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z",key:"lwb9l9"}],["path",{d:"M8 9V2",key:"1xa0v7"}]]};q8.node;const LA=o(q8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8={name:"spray-can",size:24,node:[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]};L8.node;const H8=o(L8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8={name:"sprout",size:24,node:[["path",{d:"M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",key:"139s4v"}],["path",{d:"M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",key:"1dlkgp"}],["path",{d:"M5 21h14",key:"11awu3"}]]};V8.node;const HA=o(V8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8={name:"square-bookmark",size:24,node:[["path",{d:"M11 3v7.751a.25.25 0 00.407.195l2.28-1.834a.5.5 0 01.627 0l2.28 1.834a.25.25 0 00.406-.195V3",key:"1rbn6x"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],aliases:["album"]};I8.node;const VA=o(I8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8={name:"square-chart-gantt",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]],aliases:["gantt-chart-square","square-gantt-chart"]};E8.node;const IA=o(E8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8={name:"square-dashed-kanban",size:24,node:[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]],aliases:["kanban-square-dashed"]};P8.node;const EA=o(P8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8={name:"square-dashed",size:24,node:[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]],aliases:["box-select"]};T8.node;const PA=o(T8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8={name:"square-divide",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]],aliases:["divide-square"]};R8.node;const TA=o(R8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8={name:"square-dot",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]],aliases:["dot-square"]};O8.node;const RA=o(O8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8={name:"square-equal",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]],aliases:["equal-square"]};B8.node;const OA=o(B8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8={name:"square-function",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]],aliases:["function-square"]};F8.node;const BA=o(F8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8={name:"square-kanban",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]],aliases:["kanban-square"]};W8.node;const FA=o(W8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8={name:"square-m",size:24,node:[["path",{d:"M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16",key:"1ywlsj"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],aliases:["m-square"]};U8.node;const WA=o(U8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8={name:"square-menu",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]],aliases:["menu-square"]};G8.node;const UA=o(G8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8={name:"square-mouse-pointer",size:24,node:[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",key:"xwnzip"}],["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}]],aliases:["inspect"]};Y8.node;const GA=o(Y8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8={name:"square-parking-off",size:24,node:[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]],aliases:["parking-square-off"]};Z8.node;const YA=o(Z8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8={name:"square-parking",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]],aliases:["parking-square"]};K8.node;const ZA=o(K8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8={name:"square-pen",size:24,node:[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],aliases:["pen-box","edit","pen-square"]};J8.node;const KA=o(J8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8={name:"square-pi",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]],aliases:["pi-square"]};X8.node;const JA=o(X8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8={name:"square-play",size:24,node:[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}]],aliases:["play-square"]};Q8.node;const XA=o(Q8);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6={name:"square-power",size:24,node:[["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M7.998 9.003a5 5 0 1 0 8-.005",key:"1pek45"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],aliases:["power-square"]};e6.node;const QA=o(e6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6={name:"square-sigma",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]],aliases:["sigma-square"]};t6.node;const eq=o(t6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6={name:"square-split-horizontal",size:24,node:[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M8 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3",key:"m1vog4"}]],aliases:["split-square-horizontal"]};a6.node;const tq=o(a6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6={name:"square-split-vertical",size:24,node:[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3",key:"1haecz"}]],aliases:["split-square-vertical"]};n6.node;const aq=o(n6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6={name:"square-x",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],aliases:["x-square"]};o6.node;const nq=o(o6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6={name:"squircle-dashed",size:24,node:[["path",{d:"M13.77 3.043a34 34 0 0 0-3.54 0",key:"1oaobr"}],["path",{d:"M13.771 20.956a33 33 0 0 1-3.541.001",key:"95iq0j"}],["path",{d:"M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44",key:"1u6qty"}],["path",{d:"M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438",key:"1ew6g6"}],["path",{d:"M20.957 10.23a33 33 0 0 1 0 3.54",key:"1l9npr"}],["path",{d:"M3.043 10.23a34 34 0 0 0 .001 3.541",key:"1it6jm"}],["path",{d:"M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438",key:"14uchd"}],["path",{d:"M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44",key:"8k4agb"}]]};s6.node;const oq=o(s6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6={name:"squircle",size:24,node:[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]};c6.node;const sq=o(c6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6={name:"squirrel",size:24,node:[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]};i6.node;const cq=o(i6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6={name:"stamp",size:24,node:[["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13",key:"i9gjdv"}],["path",{d:"M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z",key:"1vzg3v"}],["path",{d:"M5 22h14",key:"ehvnwv"}]]};r6.node;const iq=o(r6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};d6.node;const fn=o(d6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6={name:"stethoscope",size:24,node:[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]};l6.node;const h6=o(l6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6={name:"sticker",size:24,node:[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]};p6.node;const rq=o(p6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6={name:"sticky-note-check",size:24,node:[["path",{d:"m15 19 2 2 4-4",key:"1wqv71"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}],["path",{d:"M21 13V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6.5",key:"1onoss"}]]};m6.node;const dq=o(m6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6={name:"sticky-note-minus",size:24,node:[["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}],["path",{d:"M21 14V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.35",key:"g18rj4"}],["path",{d:"M21 18h-6",key:"139f0c"}]]};u6.node;const lq=o(u6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6={name:"sticky-note-off",size:24,node:[["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.586 3.586A2 2 0 0 0 3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.414-.586",key:"12nghy"}],["path",{d:"M8.656 3H15a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 21 9v6.344",key:"134c6x"}]]};y6.node;const hq=o(y6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6={name:"sticky-note-plus",size:24,node:[["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 12.356V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.355",key:"12ish9"}],["path",{d:"M21 18h-6",key:"139f0c"}]]};k6.node;const pq=o(k6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6={name:"sticky-note-x",size:24,node:[["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}],["path",{d:"m16 16 5 5",key:"8tpb07"}],["path",{d:"M21 12V9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"156tez"}],["path",{d:"m21 16-5 5",key:"kplof2"}]]};f6.node;const mq=o(f6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6={name:"sticky-note",size:24,node:[["path",{d:"M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",key:"1dfntj"}],["path",{d:"M15 3v5a1 1 0 0 0 1 1h5",key:"6s6qgf"}]]};x6.node;const uq=o(x6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6={name:"sticky-notes",size:24,node:[["path",{d:"M10 8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 16 14v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z",key:"19nc0g"}],["path",{d:"M10 8v5a1 1 0 0 0 1 1h5",key:"m3law1"}],["path",{d:"M8 4a2 2 0 0 1 2-2h6a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 22 8v6a2 2 0 0 1-2 2",key:"1iu1qd"}],["path",{d:"M16 2v5a1 1 0 0 0 1 1h5",key:"af171p"}]]};g6.node;const yq=o(g6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6={name:"stone",size:24,node:[["path",{d:"M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z",key:"1si4ox"}],["path",{d:"M11.99 22 14 12l7.822 3.184",key:"1u8to0"}],["path",{d:"M14 12 8.47 2.302",key:"guo3d5"}]]};b6.node;const kq=o(b6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6={name:"store",size:24,node:[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]]};v6.node;const v1=o(v6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6={name:"stretch-horizontal",size:24,node:[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]};M6.node;const fq=o(M6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6={name:"stretch-vertical",size:24,node:[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]};w6.node;const xq=o(w6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6={name:"summary",size:24,node:[["path",{d:"M15 4H7",key:"oyc4c8"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}],["path",{d:"M3 4v13a2 2 0 0 0 2 2h16",key:"o3n0ii"}],["path",{d:"M7 14h7",key:"16kgpy"}],["path",{d:"M7 9h12",key:"ihq7ma"}]]};_6.node;const gq=o(_6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6={name:"sun-medium",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]};j6.node;const bq=o(j6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6={name:"sun",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]};z6.node;const vq=o(z6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6={name:"swatch-book",size:24,node:[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h.01",key:"1euzgo"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]};$6.node;const Mq=o($6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6={name:"swiss-franc",size:24,node:[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]};D6.node;const wq=o(D6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6={name:"switch-camera",size:24,node:[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]};N6.node;const _q=o(N6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6={name:"sword",size:24,node:[["path",{d:"m11 19-6-6",key:"s7kpr"}],["path",{d:"m5 21-2-2",key:"1kw20b"}],["path",{d:"m8 16-4 4",key:"1oqv8h"}],["path",{d:"M9.5 17.5 20.414 6.586A2 2 0 0021 5.172V3h-2.172a2 2 0 00-1.414.586L6.5 14.5",key:"1pjndt"}]]};S6.node;const jq=o(S6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6={name:"swords",size:24,node:[["path",{d:"m13 19 6-6",key:"gj6q8g"}],["path",{d:"M14.5 17.5 3.586 6.586A2 2 0 013 5.172V3h2.172a2 2 0 011.414.586L17.5 14.5",key:"uwfxh8"}],["path",{d:"m14.828 6.172 2.586-2.586A2 2 0 0118.828 3H21v2.172a2 2 0 01-.586 1.414l-2.586 2.586",key:"1f17hx"}],["path",{d:"m16 16 4 4",key:"up5ibb"}],["path",{d:"m19 21 2-2",key:"1phfkn"}],["path",{d:"m5 14 4 4",key:"1gk0qx"}],["path",{d:"m5 21-2-2",key:"1kw20b"}],["path",{d:"M7.5 16.5 4 20",key:"14nozp"}]]};C6.node;const zq=o(C6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6={name:"syringe",size:24,node:[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]};A6.node;const $q=o(A6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6={name:"tablet",size:24,node:[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]};q6.node;const L6=o(q6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};H6.node;const M1=o(H6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6={name:"tags",size:24,node:[["path",{d:"M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z",key:"16rjxf"}],["path",{d:"M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193",key:"178nd4"}],["circle",{cx:"10.5",cy:"6.5",r:".5",fill:"currentColor",key:"12ikhr"}]]};V6.node;const Dq=o(V6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6={name:"tally-1",size:24,node:[["path",{d:"M4 4v16",key:"6qkkli"}]]};I6.node;const Nq=o(I6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6={name:"tally-2",size:24,node:[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]};E6.node;const Sq=o(E6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6={name:"tally-3",size:24,node:[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]};P6.node;const Cq=o(P6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6={name:"tally-4",size:24,node:[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]};T6.node;const Aq=o(T6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6={name:"tally-5",size:24,node:[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]};R6.node;const qq=o(R6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6={name:"tangent",size:24,node:[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]};O6.node;const Lq=o(O6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};B6.node;const Hq=o(B6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6={name:"telescope",size:24,node:[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]};F6.node;const W6=o(F6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6={name:"tent",size:24,node:[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]};U6.node;const G6=o(U6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6={name:"test-tube",size:24,node:[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2",key:"125lnx"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]};Y6.node;const Vq=o(Y6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6={name:"text-wrap",size:24,node:[["path",{d:"m16 16-3 3 3 3",key:"117b85"}],["path",{d:"M3 12h14.5a1 1 0 0 1 0 7H13",key:"18xa6z"}],["path",{d:"M3 19h6",key:"1ygdsz"}],["path",{d:"M3 5h18",key:"1u36vt"}]],aliases:["wrap-text"]};Z6.node;const Iq=o(Z6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6={name:"theater",size:24,node:[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]};K6.node;const Eq=o(K6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6={name:"thermometer",size:24,node:[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]};J6.node;const Pq=o(J6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6={name:"thumbs-down",size:24,node:[["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z",key:"m61m77"}],["path",{d:"M17 14V2",key:"8ymqnk"}]]};X6.node;const Tq=o(X6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6={name:"thumbs-up",size:24,node:[["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}],["path",{d:"M7 10v12",key:"1qc93n"}]]};Q6.node;const Rq=o(Q6);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex={name:"tic-tac-toe",size:24,node:[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"m21 16-5 5",key:"kplof2"}],["path",{d:"m21 21-5-5",key:"t60xrr"}],["path",{d:"M22 12H2",key:"v4uh5a"}],["path",{d:"M8 3 3 8",key:"3mf1mf"}],["path",{d:"M8 8 3 3",key:"176qcj"}],["circle",{cx:"18.5",cy:"5.5",r:"2.5",key:"1soi6c"}],["circle",{cx:"5.5",cy:"18.5",r:"2.5",key:"s5276v"}]]};ex.node;const Oq=o(ex);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx={name:"ticket",size:24,node:[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]};tx.node;const Bq=o(tx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax={name:"tickets",size:24,node:[["path",{d:"m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8",key:"15hfpj"}],["path",{d:"M6 10V8",key:"1y41hn"}],["path",{d:"M6 14v1",key:"cao2tf"}],["path",{d:"M6 19v2",key:"1loha6"}],["rect",{x:"2",y:"8",width:"20",height:"13",rx:"2",key:"p3bz5l"}]]};ax.node;const Fq=o(ax);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx={name:"timeline",size:24,node:[["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M4 16h.01",key:"jrnfb7"}],["path",{d:"M4 20h.01",key:"orx0iu"}],["path",{d:"M4 4h.01",key:"cieki8"}],["path",{d:"M4 8h.01",key:"43g258"}],["path",{d:"M9.414 13.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 12z",key:"1pvxkf"}],["path",{d:"M9.414 21.414a2 2 0 0 0 1.414.586H19a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 20z",key:"1k13gh"}],["path",{d:"M9.414 5.414A2 2 0 0 0 10.828 6H19a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-8.172a2 2 0 0 0-1.414.586L8 4z",key:"12x0hd"}]]};nx.node;const Wq=o(nx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox={name:"timer",size:24,node:[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]};ox.node;const Uq=o(ox);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx={name:"toggle-left",size:24,node:[["circle",{cx:"9",cy:"12",r:"3",key:"u3jwor"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]]};sx.node;const w1=o(sx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx={name:"toggle-right",size:24,node:[["circle",{cx:"15",cy:"12",r:"3",key:"1afu0r"}],["rect",{width:"20",height:"14",x:"2",y:"5",rx:"7",key:"g7kal2"}]]};cx.node;const ix=o(cx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx={name:"toilet",size:24,node:[["path",{d:"M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18",key:"kc4kqr"}],["path",{d:"M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8",key:"1tqs57"}]]};rx.node;const Gq=o(rx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx={name:"tool-case",size:24,node:[["path",{d:"M10 15h4",key:"192ueg"}],["path",{d:"m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27",key:"xbnumr"}],["path",{d:"m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122",key:"eaw7gc"}],["path",{d:"M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",key:"1vaooh"}]]};dx.node;const Yq=o(dx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx={name:"toolbox",size:24,node:[["path",{d:"M16 12v4",key:"vf1vip"}],["path",{d:"M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2",key:"llnzfg"}],["path",{d:"M17 6a2 2 0 011.414.586l3 3A2 2 0 0122 11v8a2 2 0 01-2 2H4a2 2 0 01-2-2v-8a2 2 0 01.586-1.414l3-3A2 2 0 017 6z",key:"1hprxj"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M8 12v4",key:"1w4uao"}]]};lx.node;const Zq=o(lx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx={name:"toothbrush-sparkles",size:24,node:[["path",{d:"M10 3H8",key:"mzdi2d"}],["path",{d:"M14.586 11.414 22 4",key:"swnl64"}],["path",{d:"M15 11a8 8 0 01-.429.4",key:"3uwied"}],["path",{d:"m2 22 7-7c1.857-1.857 3.714-1.99 5.571-3.6l-1.985-1.986A2 2 0 0114 6a2 2 0 012-2 2 2 0 013.262-1.552l2.152 2.138",key:"1kper6"}],["path",{d:"M20 15v4",key:"nmhudv"}],["path",{d:"M22 17h-4",key:"1sj068"}],["path",{d:"M4 5v4",key:"13jjxc"}],["path",{d:"M6 7H2",key:"8zbtv0"}],["path",{d:"M9 2v2",key:"165o2o"}]]};hx.node;const Kq=o(hx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px={name:"toothbrush",size:24,node:[["path",{d:"M15 11c-2 2-4 2-6 4l-7 7",key:"887gyg"}],["path",{d:"m22 4-7.414 7.414-2-2A2 2 0 0114 6c0-.512.196-1.024.586-1.414A2 2 0 0116 4a2 2 0 013.262-1.552l2.152 2.138",key:"1lv77q"}]]};px.node;const mx=o(px);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux={name:"tornado",size:24,node:[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]};ux.node;const Jq=o(ux);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx={name:"torus",size:24,node:[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]};yx.node;const Xq=o(yx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx={name:"touchpad-off",size:24,node:[["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"M19.656 14H22",key:"170xzr"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",key:"s23sx2"}],["path",{d:"M9.656 4H20a2 2 0 0 1 2 2v10.344",key:"ovjcvl"}]]};kx.node;const Qq=o(kx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx={name:"touchpad",size:24,node:[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]};fx.node;const eL=o(fx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx={name:"towel-rack",size:24,node:[["path",{d:"M22 7h-2",key:"1okbx2"}],["path",{d:"M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4",key:"kc32tg"}],["path",{d:"M9 7H2",key:"ahf7b7"}]]};xx.node;const tL=o(xx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx={name:"tower-control",size:24,node:[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]};gx.node;const aL=o(gx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx={name:"toy-brick",size:24,node:[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]};bx.node;const nL=o(bx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx={name:"tractor",size:24,node:[["path",{d:"m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20",key:"she1j9"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h8.129a1 1 0 0 1 .99.863L13 11.246",key:"1q1ert"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]]};vx.node;const oL=o(vx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx={name:"traffic-cone",size:24,node:[["path",{d:"M16.05 10.966a5 2.5 0 0 1-8.1 0",key:"m5jpwb"}],["path",{d:"m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04",key:"rbg3g8"}],["path",{d:"M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z",key:"vap8c8"}],["path",{d:"M9.194 6.57a5 2.5 0 0 0 5.61 0",key:"15hn5c"}]]};Mx.node;const sL=o(Mx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx={name:"trailer",size:24,node:[["path",{d:"M10 11.341V10",key:"1vu6ku"}],["path",{d:"M14 13v-3",key:"ywspeg"}],["path",{d:"M18 17V8a2 2 0 00-2-2H4a2 2 0 00-2 2v7a2 2 0 002 2h2",key:"19481b"}],["path",{d:"M22 15v1a1 1 0 01-1 1H10",key:"1lvljf"}],["path",{d:"M6 11.341V10",key:"1dkezj"}],["circle",{cx:"8",cy:"17",r:"2",key:"5kbc0u"}]]};wx.node;const cL=o(wx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x={name:"train-front",size:24,node:[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]};_x.node;const jx=o(_x);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx={name:"train-track",size:24,node:[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]};zx.node;const iL=o(zx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x={name:"tram-front",size:24,node:[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]],aliases:["train"]};$x.node;const Dx=o($x);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx={name:"transgender",size:24,node:[["path",{d:"M12 16v6",key:"c8a4gj"}],["path",{d:"M14 20h-4",key:"m8m19d"}],["path",{d:"M18 2h4v4",key:"1341mj"}],["path",{d:"m2 2 7.17 7.17",key:"13q8l2"}],["path",{d:"M2 5.355V2h3.357",key:"18136r"}],["path",{d:"m22 2-7.17 7.17",key:"1epvy4"}],["path",{d:"M8 5 5 8",key:"mgbjhz"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]};Nx.node;const rL=o(Nx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx={name:"tree-deciduous",size:24,node:[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]};Sx.node;const dL=o(Sx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx={name:"tree-palm",size:24,node:[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]],aliases:["palmtree"]};Cx.node;const ks=o(Cx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax={name:"tree-pine",size:24,node:[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]};Ax.node;const lL=o(Ax);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx={name:"trees",size:24,node:[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]};qx.node;const hL=o(qx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx={name:"trending-down",size:24,node:[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]]};Lx.node;const pL=o(Lx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx={name:"trending-up-down",size:24,node:[["path",{d:"M14.828 14.828 21 21",key:"ar5fw7"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"m21 3-9 9-4-4-6 6",key:"1h02xo"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}]]};Hx.node;const mL=o(Hx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx={name:"triangle-alert",size:24,node:[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["alert-triangle"]};Vx.node;const uL=o(Vx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};Ix.node;const Ex=o(Ix);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px={name:"trophy",size:24,node:[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]]};Px.node;const _1=o(Px);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx={name:"truck",size:24,node:[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]};Tx.node;const j1=o(Tx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx={name:"tube-lotion",size:24,node:[["path",{d:"M15 18v3a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3",key:"b580kr"}],["path",{d:"M17 2a2 2 0 0 1 1.6 3.2A8 8 0 0 0 17 10v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6a8 8 0 0 0-1.6-4.8A2 2 0 0 1 7 2z",key:"ih942v"}],["path",{d:"M7 10a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"1fwxph"}]]};Rx.node;const yL=o(Rx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox={name:"turkish-lira",size:24,node:[["path",{d:"M15 4 5 9",key:"14bkc9"}],["path",{d:"m15 8.5-10 5",key:"1grtsx"}],["path",{d:"M18 12a9 9 0 0 1-9 9V3",key:"1sst7f"}]]};Ox.node;const kL=o(Ox);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx={name:"turntable",size:24,node:[["path",{d:"M10 12.01h.01",key:"7rp0yl"}],["path",{d:"M18 8v4a8 8 0 0 1-1.07 4",key:"1st48v"}],["circle",{cx:"10",cy:"12",r:"4",key:"19levz"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};Bx.node;const fL=o(Bx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx={name:"turtle",size:24,node:[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]};Fx.node;const xL=o(Fx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx={name:"tv-minimal",size:24,node:[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]],aliases:["tv-2"]};Wx.node;const gL=o(Wx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux={name:"tv-minimal-play",size:24,node:[["path",{d:"M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",key:"vbtd3f"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]};Ux.node;const bL=o(Ux);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx={name:"tv",size:24,node:[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]]};Gx.node;const Ca=o(Gx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx={name:"umbrella-off",size:24,node:[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51",key:"yawknk"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10",key:"5sfalc"}]]};Yx.node;const vL=o(Yx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx={name:"umbrella",size:24,node:[["path",{d:"M12 13v7a2 2 0 0 0 4 0",key:"rpgb42"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z",key:"124nyo"}]]};Zx.node;const Kx=o(Zx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx={name:"unfold-horizontal",size:24,node:[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]};Jx.node;const ML=o(Jx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx={name:"unfold-vertical",size:24,node:[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]};Xx.node;const wL=o(Xx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx={name:"ungroup",size:24,node:[["rect",{x:"11",y:"14",width:"10",height:"7",rx:"2",key:"nfm8rk"}],["rect",{x:"3",y:"3",width:"10",height:"7",rx:"2",key:"1ljebb"}]]};Qx.node;const _L=o(Qx);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"university",size:24,node:[["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 16h.01",key:"plv8zi"}],["path",{d:"M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z",key:"1ogmi3"}],["path",{d:"M6 12h.01",key:"c2rlol"}],["path",{d:"M6 16h.01",key:"1pmjb7"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}]],aliases:["school-2"]};eg.node;const fs=o(eg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"unplug",size:24,node:[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]};tg.node;const jL=o(tg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};ag.node;const xn=o(ag);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"usb",size:24,node:[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]};ng.node;const z1=o(ng);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"user-cog",size:24,node:[["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m14.305 16.53.923-.382",key:"1itpsq"}],["path",{d:"m15.228 13.852-.923-.383",key:"eplpkm"}],["path",{d:"m16.852 12.228-.383-.923",key:"13v3q0"}],["path",{d:"m16.852 17.772-.383.924",key:"1i8mnm"}],["path",{d:"m19.148 12.228.383-.923",key:"1q8j1v"}],["path",{d:"m19.53 18.696-.382-.924",key:"vk1qj3"}],["path",{d:"m20.772 13.852.924-.383",key:"n880s0"}],["path",{d:"m20.772 16.148.924.383",key:"1g6xey"}],["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};og.node;const zL=o(og);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};sg.node;const cg=o(sg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"utensils-crossed",size:24,node:[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],aliases:["fork-knife-crossed"]};ig.node;const gn=o(ig);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};rg.node;const $L=o(rg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"utility-pole",size:24,node:[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]};dg.node;const DL=o(dg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"van",size:24,node:[["path",{d:"M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3",key:"k3s650"}],["path",{d:"M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2",key:"fnd93u"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]};lg.node;const NL=o(lg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg={name:"utensils",size:24,node:[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],aliases:["fork-knife"]};hg.node;const la=o(hg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg={name:"variable",size:24,node:[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]};pg.node;const SL=o(pg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg={name:"vault",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};mg.node;const CL=o(mg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"vector-square",size:24,node:[["path",{d:"M17.055 4.533a24 24 0 00-10.11 0",key:"1rchew"}],["path",{d:"M19.467 17.055a24 24 0 000-10.11",key:"oh3qan"}],["path",{d:"M4.533 6.945a24 24 0 000 10.11",key:"jtuody"}],["path",{d:"M6.945 19.467a24 24 0 0010.11 0",key:"2x0uq2"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}]]};ug.node;const AL=o(ug);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg={name:"vegan",size:24,node:[["path",{d:"M16 8q6 0 6-6-6 0-6 6",key:"qsyyc4"}],["path",{d:"M17.41 3.59a10 10 0 1 0 3 3",key:"41m9h7"}],["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}]]};yg.node;const qL=o(yg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg={name:"vector-polygon",size:24,node:[["path",{d:"m12.828 4.813 5.344 2.375",key:"d72xd9"}],["path",{d:"m15.769 18.153 3.461-8.306",key:"1m86ed"}],["path",{d:"m5.687 14.074 7.625 4.852",key:"16trhu"}],["path",{d:"M9.772 5.579 5.228 11.42",key:"1sledj"}],["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"15",cy:"20",r:"2",key:"1gio96"}],["circle",{cx:"20",cy:"8",r:"2",key:"auwzcq"}],["circle",{cx:"4",cy:"13",r:"2",key:"d2v72u"}]]};kg.node;const LL=o(kg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg={name:"venetian-mask",size:24,node:[["path",{d:"M18 11c-1.5 0-2.5.5-3 2",key:"1fod00"}],["path",{d:"M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z",key:"d70hit"}],["path",{d:"M6 11c1.5 0 2.5.5 3 2",key:"136fht"}]]};fg.node;const HL=o(fg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg={name:"venus-and-mars",size:24,node:[["path",{d:"M10 20h4",key:"ni2waw"}],["path",{d:"M12 16v6",key:"c8a4gj"}],["path",{d:"M17 2h4v4",key:"vhe59"}],["path",{d:"m21 2-5.46 5.46",key:"19kypf"}],["circle",{cx:"12",cy:"11",r:"5",key:"16gxyc"}]]};xg.node;const VL=o(xg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg={name:"venus",size:24,node:[["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M9 19h6",key:"456am0"}],["circle",{cx:"12",cy:"9",r:"6",key:"1nw4tq"}]]};gg.node;const IL=o(gg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg={name:"vibrate-off",size:24,node:[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]};bg.node;const EL=o(bg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg={name:"vibrate",size:24,node:[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]};vg.node;const PL=o(vg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg={name:"video",size:24,node:[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]};Mg.node;const wg=o(Mg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g={name:"view",size:24,node:[["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",key:"11ak4c"}]]};_g.node;const TL=o(_g);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg={name:"virus-off",size:24,node:[["path",{d:"M10.01 10h.01",key:"1a2j31"}],["path",{d:"M12 14.991h.01",key:"csw8q1"}],["path",{d:"M12 22v-3",key:"kmzjlo"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M13 2h-2",key:"mj6ths"}],["path",{d:"m16.5 19.794-1-1.733",key:"165y8t"}],["path",{d:"m16.5 4.205-1 1.732",key:"1v0drn"}],["path",{d:"M18.891 13.235a7 7 0 00-8.126-8.126",key:"ols27d"}],["path",{d:"m19.794 7.5-1.732 1",key:"1f81wk"}],["path",{d:"M2 12h3",key:"1wrr53"}],["path",{d:"M2 13v-2",key:"v9793i"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 12h-3",key:"silwxu"}],["path",{d:"M22 13v-2",key:"1nj1a6"}],["path",{d:"m4.206 16.5 1.732-1",key:"1b8gjo"}],["path",{d:"m4.206 7.5 1.732 1",key:"paipwt"}],["path",{d:"M7.05 7.05a7 7 0 009.9 9.9",key:"1rpkjt"}],["path",{d:"m7.5 19.794 1-1.733",key:"199mim"}],["path",{d:"M9 12h.01",key:"157uk2"}]]};jg.node;const RL=o(jg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg={name:"virus",size:24,node:[["path",{d:"M12 14.991h.01",key:"csw8q1"}],["path",{d:"M12 22v-3",key:"kmzjlo"}],["path",{d:"M12 2v3",key:"qbqxhf"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M13 2h-2",key:"mj6ths"}],["path",{d:"M13.99 10H14",key:"djkarb"}],["path",{d:"m16.5 19.794-1-1.733",key:"165y8t"}],["path",{d:"m16.5 4.205-1 1.732",key:"1v0drn"}],["path",{d:"m19.794 16.5-1.732-1",key:"2ukevj"}],["path",{d:"m19.794 7.5-1.732 1",key:"1f81wk"}],["path",{d:"M2 12h3",key:"1wrr53"}],["path",{d:"M2 13v-2",key:"v9793i"}],["path",{d:"M22 12h-3",key:"silwxu"}],["path",{d:"M22 13v-2",key:"1nj1a6"}],["path",{d:"m4.206 16.5 1.732-1",key:"1b8gjo"}],["path",{d:"m4.206 7.5 1.732 1",key:"paipwt"}],["path",{d:"m7.5 19.794 1-1.733",key:"199mim"}],["path",{d:"m7.5 4.205 1 1.732",key:"1dzlgs"}],["path",{d:"M9 12h.01",key:"157uk2"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]};zg.node;const OL=o(zg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g={name:"volleyball",size:24,node:[["path",{d:"M11 7a16 16 20 0 1 10.98 4.362",key:"1mmfx7"}],["path",{d:"M12 12a13 13 0 0 1-8.66 5",key:"14sm5y"}],["path",{d:"M16.83 13.634a16 16 0 0 1-9.267 7.328",key:"j0eyj5"}],["path",{d:"M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10",key:"qaetsw"}],["path",{d:"M8.17 15.366a16 16 0 0 1-1.713-11.69",key:"17ewdd"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]};$g.node;const Dg=o($g);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng={name:"voicemail",size:24,node:[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]};Ng.node;const BL=o(Ng);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg={name:"vote",size:24,node:[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]};Sg.node;const FL=o(Sg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg={name:"wallet",size:24,node:[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]};Cg.node;const Ag=o(Cg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg={name:"wallpaper",size:24,node:[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15",key:"1sl52q"}],["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]]};qg.node;const WL=o(qg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg={name:"wand-sparkles",size:24,node:[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],aliases:["wand-2"]};Lg.node;const Hg=o(Lg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg={name:"warehouse",size:24,node:[["path",{d:"M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11",key:"pb2vm6"}],["path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z",key:"doq5xv"}],["path",{d:"M6 13h12",key:"yf64js"}],["path",{d:"M6 17h12",key:"1jwigz"}]]};Vg.node;const UL=o(Vg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig={name:"washing-machine",size:24,node:[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]};Ig.node;const $1=o(Ig);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg={name:"watch",size:24,node:[["path",{d:"M12 10v2.2l1.6 1",key:"n3r21l"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}]]};Eg.node;const bn=o(Eg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg={name:"waves-horizontal",size:24,node:[["path",{d:"M2 12q2.5 2 5 0t5 0 5 0 5 0",key:"8ddzzs"}],["path",{d:"M2 19q2.5 2 5 0t5 0 5 0 5 0",key:"1wj4st"}],["path",{d:"M2 5q2.5 2 5 0t5 0 5 0 5 0",key:"69x50u"}]],aliases:["waves"]};Pg.node;const GL=o(Pg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg={name:"waypoints",size:24,node:[["path",{d:"m10.586 5.414-5.172 5.172",key:"4mc350"}],["path",{d:"m18.586 13.414-5.172 5.172",key:"8c96vv"}],["path",{d:"M6 12h12",key:"8npq4p"}],["circle",{cx:"12",cy:"20",r:"2",key:"144qzu"}],["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["circle",{cx:"20",cy:"12",r:"2",key:"1xzzfp"}],["circle",{cx:"4",cy:"12",r:"2",key:"1hvhnz"}]]};Tg.node;const YL=o(Tg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg={name:"webcam",size:24,node:[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]};Rg.node;const ZL=o(Rg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og={name:"webhook-off",size:24,node:[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};Og.node;const KL=o(Og);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg={name:"webhook",size:24,node:[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]};Bg.node;const JL=o(Bg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg={name:"weight-tilde",size:24,node:[["path",{d:"M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z",key:"1wl739"}],["path",{d:"M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0",key:"1egezo"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]};Fg.node;const XL=o(Fg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg={name:"weight",size:24,node:[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]};Wg.node;const QL=o(Wg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug={name:"wheat",size:24,node:[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]};Ug.node;const eH=o(Ug);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg={name:"whistle",size:24,node:[["path",{d:"M10 6v4",key:"1sdd75"}],["path",{d:"M21 6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.675A7 7 0 1 1 9 6z",key:"kuzxl1"}]]};Gg.node;const tH=o(Gg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg={name:"whole-word",size:24,node:[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]};Yg.node;const aH=o(Yg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg={name:"wifi",size:24,node:[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]};Zg.node;const D1=o(Zg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg={name:"wind-arrow-down",size:24,node:[["path",{d:"M10 2v8",key:"d4bbey"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2",key:"19kp1d"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2",key:"19kpjc"}],["path",{d:"m6 6 4 4 4-4",key:"k13n16"}]]};Kg.node;const nH=o(Kg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg={name:"wind-arrow-up",size:24,node:[["path",{d:"M10 2v8",key:"d4bbey"}],["path",{d:"M12.8 21.6A2 2 0 1 0 14 18H2",key:"19kp1d"}],["path",{d:"M17.5 10a2.5 2.5 0 1 1 2 4H2",key:"19kpjc"}],["path",{d:"m6 6 4 -4 4 4",key:"ym80l6"}]]};Jg.node;const oH=o(Jg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg={name:"wind",size:24,node:[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]};Xg.node;const Qg=o(Xg);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb={name:"wine",size:24,node:[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]};eb.node;const sH=o(eb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb={name:"workflow",size:24,node:[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]};tb.node;const cH=o(tb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab={name:"worm",size:24,node:[["path",{d:"m19 12-1.5 3",key:"9bcu4o"}],["path",{d:"M19.63 18.81 22 20",key:"121v98"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",key:"1tij6q"}]]};ab.node;const iH=o(ab);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb={name:"wrench-off",size:24,node:[["path",{d:"M10.747 5.093a6 6 0 0 1 6.841-2.882c.438.12.54.662.219.984L14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-2.882 6.842",key:"sded7h"}],["path",{d:"m13.5 13.5-7.88 7.88a1 1 0 0 1-2.999-3l7.88-7.88",key:"66etnh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};nb.node;const rH=o(nb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob={name:"wrench",size:24,node:[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]};ob.node;const Aa=o(ob);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb={name:"x-line-top",size:24,node:[["path",{d:"M18 4H6",key:"1hsngl"}],["path",{d:"M18 8 6 20",key:"xspwia"}],["path",{d:"m6 8 12 12",key:"qb1veh"}]]};sb.node;const dH=o(sb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};cb.node;const ib=o(cb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};rb.node;const N1=o(rb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db={name:"zodiac-aquarius",size:24,node:[["path",{d:"m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10",key:"1o8iok"}],["path",{d:"m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002",key:"112qy7"}]]};db.node;const lH=o(db);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb={name:"zodiac-aries",size:24,node:[["path",{d:"M12 7.5a4.5 4.5 0 1 1 5 4.5",key:"k987hv"}],["path",{d:"M7 12a4.5 4.5 0 1 1 5-4.5V21",key:"mjup0w"}]]};lb.node;const hH=o(lb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb={name:"zodiac-capricorn",size:24,node:[["path",{d:"M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0",key:"1kkncs"}],["path",{d:"M7 19V6a3 3 0 0 0-3-3h0",key:"1jg5y1"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}]]};hb.node;const pH=o(hb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb={name:"zodiac-cancer",size:24,node:[["path",{d:"M21 14.5A9 6.5 0 0 1 5.5 19",key:"1xj2o6"}],["path",{d:"M3 9.5A9 6.5 0 0 1 18.5 5",key:"1gln3t"}],["circle",{cx:"17.5",cy:"14.5",r:"3.5",key:"1ccu1t"}],["circle",{cx:"6.5",cy:"9.5",r:"3.5",key:"x5tc2d"}]]};pb.node;const mH=o(pb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb={name:"zodiac-gemini",size:24,node:[["path",{d:"M16 4.525v14.948",key:"bgoxo0"}],["path",{d:"M20 3A17 17 0 0 1 4 3",key:"1djemw"}],["path",{d:"M4 21a17 17 0 0 1 16 0",key:"onoyo7"}],["path",{d:"M8 4.525v14.948",key:"u5iyof"}]]};mb.node;const uH=o(mb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub={name:"zodiac-leo",size:24,node:[["path",{d:"M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0",key:"1qj6nb"}],["circle",{cx:"7",cy:"16",r:"3",key:"yyv3zl"}]]};ub.node;const yH=o(ub);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb={name:"zodiac-libra",size:24,node:[["path",{d:"M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21",key:"1novf0"}],["path",{d:"M3 20h18",key:"1l19wn"}]]};yb.node;const kH=o(yb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb={name:"zodiac-ophiuchus",size:24,node:[["path",{d:"M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10",key:"13lfmc"}],["path",{d:"M6 3v12a6 6 0 0 0 12 0V3",key:"1jnivp"}]]};kb.node;const fH=o(kb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb={name:"zodiac-pisces",size:24,node:[["path",{d:"M19 21a15 15 0 0 1 0-18",key:"br2vug"}],["path",{d:"M20 12H4",key:"1mtusc"}],["path",{d:"M5 3a15 15 0 0 1 0 18",key:"1w7hae"}]]};fb.node;const xH=o(fb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb={name:"zodiac-sagittarius",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M21 3 3 21",key:"1011np"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]};xb.node;const gH=o(xb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb={name:"zodiac-scorpio",size:24,node:[["path",{d:"M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3",key:"1w8g0z"}],["path",{d:"m22 19-3 3",key:"1ix4wq"}],["path",{d:"M5 19V5.5a1 1 0 0 1 5 0",key:"1d4oa3"}],["path",{d:"M5 5.5A2.5 2.5 0 0 0 2.5 3",key:"gp646f"}]]};gb.node;const bH=o(gb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb={name:"zodiac-taurus",size:24,node:[["circle",{cx:"12",cy:"15",r:"6",key:"lhqcmb"}],["path",{d:"M18 3A6 6 0 0 1 6 3",key:"1p399e"}]]};bb.node;const vH=o(bb);/**
 * @license lucide-react v1.52.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb={name:"zodiac-virgo",size:24,node:[["path",{d:"M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5",key:"1szkuh"}],["path",{d:"M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5",key:"pyq0k2"}],["path",{d:"M6 19V6a3 3 0 0 0-3-3h0",key:"pvee4g"}],["path",{d:"M6 5.5a1 1 0 0 1 5 0V19",key:"vncctg"}]]};vb.node;const MH=o(vb),S1=[{group:"数码",icons:[{id:"smartphone",label:"手机",Icon:kt},{id:"tablet",label:"平板",Icon:L6},{id:"laptop",label:"笔记本",Icon:s1},{id:"computer",label:"台式机",Icon:Xd},{id:"monitor",label:"显示器",Icon:$a},{id:"keyboard",label:"键盘",Icon:n1},{id:"mouse",label:"鼠标",Icon:i1},{id:"headphones",label:"耳机",Icon:ca},{id:"headset",label:"耳麦",Icon:yn},{id:"camera",label:"相机",Icon:za},{id:"video",label:"摄像机",Icon:wg},{id:"watch",label:"手表",Icon:bn},{id:"tv",label:"电视",Icon:Ca},{id:"speaker",label:"音箱",Icon:j8},{id:"gamepad",label:"游戏机",Icon:Xn},{id:"router",label:"路由器",Icon:f1},{id:"harddrive",label:"硬盘",Icon:t1},{id:"usb",label:"U盘",Icon:z1},{id:"battery-charging",label:"充电宝",Icon:ui},{id:"cable",label:"数据线",Icon:e2},{id:"plug",label:"插头",Icon:Gk},{id:"cast",label:"投屏",Icon:_2},{id:"projector",label:"投影仪",Icon:i3}]},{group:"交通",icons:[{id:"car",label:"汽车",Icon:Wn},{id:"car-taxi",label:"出租车",Icon:g2},{id:"bus",label:"公交",Icon:oa},{id:"plane",label:"飞机",Icon:m1},{id:"helicopter",label:"直升机",Icon:wu},{id:"train",label:"火车",Icon:jx},{id:"bike",label:"自行车",Icon:na},{id:"motorbike",label:"摩托车",Icon:J4},{id:"ship",label:"轮船",Icon:Ff},{id:"sailboat",label:"帆船",Icon:X3},{id:"truck",label:"货车",Icon:j1}]},{group:"家居家电",icons:[{id:"home",label:"房屋",Icon:qt},{id:"bed",label:"床",Icon:wa},{id:"sofa",label:"沙发",Icon:f8},{id:"door-open",label:"门柜",Icon:J0},{id:"lamp",label:"落地灯",Icon:o1},{id:"lamp-desk",label:"台灯",Icon:cy},{id:"refrigerator",label:"冰箱",Icon:k1},{id:"washing-machine",label:"洗衣机",Icon:$1},{id:"air-vent",label:"空调",Icon:vc},{id:"microwave",label:"微波炉",Icon:q4},{id:"cooking-pot",label:"锅具",Icon:i0},{id:"blender",label:"搅拌机",Icon:Oi},{id:"coffee",label:"咖啡机",Icon:Gn},{id:"fan",label:"风扇",Icon:Tl}]},{group:"首饰配件",icons:[{id:"gem",label:"珠宝",Icon:Qn},{id:"diamond",label:"钻饰",Icon:I0},{id:"crown",label:"冠饰",Icon:Zn},{id:"medal",label:"吊坠",Icon:v4},{id:"ring",label:"戒指",Icon:$w},{id:"necklace",label:"项链",Icon:Uy},{id:"ribbon",label:"手链丝巾",Icon:V3},{id:"watch-accessory",label:"腕表配饰",Icon:bn},{id:"glasses",label:"眼镜",Icon:Hm},{id:"sunglasses",label:"墨镜",Icon:pu}]},{group:"运动健康",icons:[{id:"dumbbell",label:"健身",Icon:Kn},{id:"footprints",label:"跑鞋鞋袜",Icon:Up},{id:"volleyball",label:"球类",Icon:Dg},{id:"trophy",label:"竞技奖杯",Icon:_1},{id:"person-standing",label:"瑜伽",Icon:yk},{id:"pill",label:"药品",Icon:p1},{id:"stethoscope",label:"医疗",Icon:h6},{id:"heart-pulse",label:"健康",Icon:ia},{id:"bath",label:"浴具",Icon:pi}]},{group:"服饰箱包",icons:[{id:"shirt",label:"衣服",Icon:b1},{id:"hard-hat",label:"帽子",Icon:lu},{id:"hand",label:"手套",Icon:iu},{id:"shopping-bag",label:"包袋",Icon:Na},{id:"backpack",label:"背包",Icon:Xc},{id:"briefcase",label:"公文包",Icon:ja},{id:"luggage",label:"行李箱",Icon:i4},{id:"scissors",label:"理发",Icon:ff},{id:"umbrella",label:"雨伞",Icon:Kx}]},{group:"个护日用",icons:[{id:"toothbrush",label:"电动牙刷",Icon:mx},{id:"soap",label:"洗护",Icon:vA},{id:"wind",label:"吹风机",Icon:Qg},{id:"droplets",label:"加湿器",Icon:rl},{id:"flame",label:"香薰",Icon:Jn},{id:"sparkles",label:"香氛",Icon:Sa},{id:"spray-can",label:"美妆喷雾",Icon:H8},{id:"brush",label:"化妆刷",Icon:Wr},{id:"package",label:"纸巾日化",Icon:l1},{id:"boxes",label:"收纳",Icon:Sr},{id:"glass-water",label:"水杯",Icon:qm},{id:"baby",label:"母婴",Icon:Kc}]},{group:"学习办公",icons:[{id:"book",label:"书",Icon:Mr},{id:"book-open",label:"阅读",Icon:_a},{id:"notebook",label:"笔记",Icon:h5},{id:"pencil",label:"文具",Icon:pk},{id:"calculator",label:"计算器",Icon:o2},{id:"printer",label:"打印机",Icon:u1},{id:"paperclip",label:"回形针",Icon:X5},{id:"ruler",label:"尺子",Icon:Z3},{id:"graduation-cap",label:"学位帽",Icon:e1},{id:"telescope",label:"望远镜",Icon:W6}]},{group:"通用场景",icons:[{id:"utensils",label:"餐饮",Icon:la},{id:"zap",label:"效率",Icon:N1},{id:"cloud",label:"云服务",Icon:Un},{id:"shield",label:"保险",Icon:Rt},{id:"wrench",label:"维修",Icon:Aa},{id:"bus",label:"公交",Icon:oa},{id:"home",label:"居住",Icon:qt},{id:"heart-pulse",label:"健康",Icon:ia},{id:"headphones",label:"娱乐",Icon:ca},{id:"gift",label:"人情",Icon:sa},{id:"headset",label:"通讯",Icon:yn},{id:"tag",label:"其他",Icon:M1}]},{group:"兴趣生活",icons:[{id:"music",label:"音乐",Icon:r1},{id:"guitar",label:"吉他",Icon:tu},{id:"piano",label:"钢琴",Icon:Dk},{id:"tickets",label:"演出",Icon:Fq},{id:"tent",label:"帐篷",Icon:G6},{id:"map",label:"旅行",Icon:u4},{id:"fish",label:"水族",Icon:ep},{id:"paw-print",label:"宠物",Icon:sk},{id:"flower",label:"花卉",Icon:rp},{id:"leaf",label:"植物",Icon:ra},{id:"gift",label:"礼品",Icon:sa},{id:"milk",label:"食品",Icon:I4},{id:"pizza",label:"零食",Icon:Rk},{id:"cup-soda",label:"饮品",Icon:j0},{id:"chef-hat",label:"厨具",Icon:X2},{id:"hammer",label:"五金",Icon:ou}]}],wH=M1,Mb=new Map(S1.flatMap(e=>e.icons).map(e=>[e.id,e.Icon]));function Be(e){return e&&Mb.get(e)||wH}function _H(e){return!!e&&Mb.has(e)}function ve(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function jH(){return`srv_${ve()}`}function zH(e){let a=0;for(let n=0;n<e.length;n+=1)a=(a<<5)-a+e.charCodeAt(n),a|=0;return Math.abs(a)}const $H=300,ft=new Map,ha=new Map;async function DH(e){const a=ft.get(e);ft.delete(e);const n=ha.get(e);ha.delete(e),n!==void 0&&await Ne(Ma(e),n),a?.resolvers.forEach(s=>s())}function NH(e,a){ha.set(e,a);const n=ft.get(e);return n&&clearTimeout(n.timer),new Promise(s=>{const c=n?n.resolvers:[];c.push(s);const i=setTimeout(()=>{DH(e)},$H);ft.set(e,{timer:i,resolvers:c})})}async function pa(e,a){const n=ft.get(e);n&&(clearTimeout(n.timer),ft.delete(e)),ha.delete(e),await Ne(Ma(e),a),n?.resolvers.forEach(s=>s())}async function wb(e){const a=await we(Ma(e),null);return Array.isArray(a)?a:[]}async function SH(){const e=await Promise.all(Xe.map(async n=>[n,await wb(n)])),a={};for(const[n,s]of e)a[n]=s;return a}async function CH(e){await Promise.all(Xe.map(a=>{const n=e[a];return n?pa(a,n):Promise.resolve()}))}const _b=999,Zt=[{id:"cg0",name:"数码",icon:"smartphone",kind:"goods",order:0},{id:"cg1",name:"衣物",icon:"shirt",kind:"goods",order:1},{id:"cg2",name:"家居",icon:"sofa",kind:"goods",order:2},{id:"cg3",name:"美妆",icon:"spray-can",kind:"goods",order:3},{id:"cg4",name:"厨房",icon:"cooking-pot",kind:"goods",order:4},{id:"cg5",name:"运动",icon:"volleyball",kind:"goods",order:5},{id:"cg6",name:"交通",icon:"car",kind:"goods",order:6},{id:"cg7",name:"家电",icon:"refrigerator",kind:"goods",order:7},{id:"cg8",name:"工具",icon:"hammer",kind:"goods",order:8},{id:"cg9",name:"玩具",icon:"gamepad",kind:"goods",order:9},{id:"cg10",name:"乐器",icon:"guitar",kind:"goods",order:10},{id:"cg11",name:"珠宝",icon:"gem",kind:"goods",order:11},{id:"cg12",name:"日用",icon:"package",kind:"goods",order:12},{id:"cs0",name:"影音",icon:"tv",kind:"sub",order:0},{id:"cs1",name:"效率",icon:"zap",kind:"sub",order:1},{id:"cs2",name:"学习",icon:"book-open",kind:"sub",order:2},{id:"cs3",name:"云服务",icon:"cloud",kind:"sub",order:3},{id:"cs4",name:"游戏",icon:"gamepad",kind:"sub",order:4},{id:"cs5",name:"生活",icon:"coffee",kind:"sub",order:5},{id:"cl0",name:"餐饮",icon:"utensils",kind:"ledger",order:0},{id:"cl1",name:"交通",icon:"bus",kind:"ledger",order:1},{id:"cl2",name:"居住",icon:"home",kind:"ledger",order:2},{id:"cl3",name:"学习",icon:"book-open",kind:"ledger",order:3},{id:"cl4",name:"健康",icon:"heart-pulse",kind:"ledger",order:4},{id:"cl5",name:"娱乐",icon:"headphones",kind:"ledger",order:5},{id:"cl6",name:"人情",icon:"gift",kind:"ledger",order:6},{id:"cl8",name:"服饰",icon:"shirt",kind:"ledger",order:7},{id:"cl9",name:"饰品",icon:"gem",kind:"ledger",order:8},{id:"cl10",name:"食材",icon:"milk",kind:"ledger",order:9},{id:"cl11",name:"日用",icon:"package",kind:"ledger",order:10},{id:"cl12",name:"美妆",icon:"spray-can",kind:"ledger",order:11},{id:"cl13",name:"数码",icon:"smartphone",kind:"ledger",order:12},{id:"cl14",name:"通讯",icon:"headset",kind:"ledger",order:13},{id:"cl15",name:"游戏",icon:"gamepad",kind:"ledger",order:14},{id:"cl16",name:"云服务",icon:"cloud",kind:"ledger",order:15},{id:"cl17",name:"宠物",icon:"paw-print",kind:"ledger",order:16},{id:"cl18",name:"旅行",icon:"luggage",kind:"ledger",order:17},{id:"cl19",name:"健身",icon:"dumbbell",kind:"ledger",order:18},{id:"cl20",name:"母婴",icon:"baby",kind:"ledger",order:19},{id:"cl21",name:"办公",icon:"paperclip",kind:"ledger",order:20},{id:"cl22",name:"保险",icon:"shield",kind:"ledger",order:21},{id:"cl23",name:"维修",icon:"wrench",kind:"ledger",order:22},{id:"cl7",name:"其他",icon:"tag",kind:"ledger",order:_b}],xs={baseCurrency:"CNY",currency:"CNY",rates:{},ratesUpdatedAt:"",includeRetired:!1,useDepreciation:!1,theme:"system",palette:"moss",showIcon:!0,showBuyDate:!0,showWarrantyCountdown:!0,formatDaysAsYmd:!1,vibrate:!0,splash:!0,reminderMaster:!0,homeTab:"goods",viewMode:"list",sortBy:"buyDate",lastBackupAt:"",autoSync:!0,aiEndpoint:"",aiKey:"",aiModel:"gpt-4o-mini",archivedSubIds:[]};function ot(){return{...xs,rates:{...xs.rates}}}const Wa={offlineMode:!1,homeTab:"goods",lastRoute:"/home"};async function AH(){return await we(On,!1)===!0}function qH(e){const a=new Map(e.map(r=>[r.id,r])),n=Zt.filter(r=>!a.has(r.id));let s=e,c=!1;n.length>0&&(s=[...e,...n],c=!0);const i=r=>/\p{Extended_Pictographic}/u.test(r);for(const r of Zt){const l=a.get(r.id);l&&l.icon!==r.icon&&!l.icon.startsWith("url:")&&!l.icon.startsWith("img:")&&(i(l.icon)||!_H(l.icon))&&(s=s.map(p=>p.id===r.id?{...p,icon:r.icon}:p),c=!0)}const d=Zt.reduce((r,l)=>l.id==="cl7"?r:Math.max(r,l.order),0);return a.get("cl7")&&a.get("cl7").order<d&&(s=s.map(r=>r.id==="cl7"?{...r,order:_b}:r),c=!0),{list:s,changed:c}}async function LH(){const e=await AH(),a=await wb("categories");if(!e||a.length===0)await pa("categories",Zt);else{const{list:n,changed:s}=qH(a);s&&await pa("categories",n)}e||(await we(At,null)||await Ne(At,ot()),await Ne(On,!0))}const Ce={invalid_url:"地址格式不正确，示例：http://192.168.1.10:3030",network:"无法连接到服务器，请检查地址、端口与网络（是否在同一个局域网/VPN 内）",timeout:"连接超时，请确认手机与服务器在同一局域网或已连 VPN",tls:"HTTPS 证书不受信任（多为自签证书），请改用 http 或在系统内安装该证书",http:"请求失败，请稍后重试",auth:"登录已过期，请重新登录",parse:"服务器已连通，但返回内容不是纳物服务端"},gs={400:"请求参数有误（400）",401:"登录已过期，请重新登录",403:"服务器拒绝了请求（403）：可能是账号未验证或已被停用",404:"接口不存在（404），请确认这是纳物服务端",405:"请求方法不被支持（405）",409:"数据冲突（409），请刷新后重试",422:"请求无法处理（422），请检查输入内容",429:"操作过于频繁（429），请稍后再试"};class X extends Error{constructor(n,s,c,i,d){super(s);jt(this,"kind");jt(this,"status");jt(this,"raw");jt(this,"requiresCode");this.name="ApiError",this.kind=n,this.status=c,this.raw=i,this.requiresCode=d}}function ma(e){return`连接超时（${e}s），请确认手机与服务器在同一局域网或已连 VPN`}function HH(e){return e?`服务器已连通，但返回内容不是纳物服务端（HTTP ${e}）`:Ce.parse}function VH(e,a){return a&&a.trim()?a.trim():gs[e]?gs[e]:e>=500?`服务器内部错误（${e}），请稍后重试`:`请求失败（${e}）：未知错误`}function IH(e){return e instanceof X}function qe(e){return IH(e)||e instanceof Error&&e.message?e.message:"未知错误，请稍后重试"}var jb={exports:{}};(function(e,a){(function(n,s){e.exports=s()})(I7,function(){var n=1e3,s=6e4,c=36e5,i="millisecond",d="second",r="minute",l="hour",p="day",g="week",m="month",x="quarter",k="year",y="date",M="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,z=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,V={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var T=["th","st","nd","rd"],D=F%100;return"["+F+(T[(D-20)%10]||T[D]||T[0])+"]"}},S=function(F,T,D){var _=String(F);return!_||_.length>=T?F:""+Array(T+1-_.length).join(D)+F},j={s:S,z:function(F){var T=-F.utcOffset(),D=Math.abs(T),_=Math.floor(D/60),A=D%60;return(T<=0?"+":"-")+S(_,2,"0")+":"+S(A,2,"0")},m:function F(T,D){if(T.date()<D.date())return-F(D,T);var _=12*(D.year()-T.year())+(D.month()-T.month()),A=T.clone().add(_,m),b=D-A<0,v=T.clone().add(_+(b?-1:1),m);return+(-(_+(D-A)/(b?A-v:v-A))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:m,y:k,w:g,d:p,D:y,h:l,m:r,s:d,ms:i,Q:x}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},w="en",N={};N[w]=V;var R="$isDayjsObject",P=function(F){return F instanceof G||!(!F||!F[R])},W=function F(T,D,_){var A;if(!T)return w;if(typeof T=="string"){var b=T.toLowerCase();N[b]&&(A=b),D&&(N[b]=D,A=b);var v=T.split("-");if(!A&&v.length>1)return F(v[0])}else{var h=T.name;N[h]=T,A=h}return!_&&A&&(w=A),A||!_&&w},B=function(F,T){if(P(F))return F.clone();var D=typeof T=="object"?T:{};return D.date=F,D.args=arguments,new G(D)},q=j;q.l=W,q.i=P,q.w=function(F,T){return B(F,{locale:T.$L,utc:T.$u,x:T.$x,$offset:T.$offset})};var G=function(){function F(D){this.$L=W(D.locale,null,!0),this.parse(D),this.$x=this.$x||D.x||{},this[R]=!0}var T=F.prototype;return T.parse=function(D){this.$d=function(_){var A=_.date,b=_.utc;if(A===null)return new Date(NaN);if(q.u(A))return new Date;if(A instanceof Date)return new Date(A);if(typeof A=="string"&&!/Z$/i.test(A)){var v=A.match(f);if(v){var h=v[2]-1||0,C=(v[7]||"0").substring(0,3);return b?new Date(Date.UTC(v[1],h,v[3]||1,v[4]||0,v[5]||0,v[6]||0,C)):new Date(v[1],h,v[3]||1,v[4]||0,v[5]||0,v[6]||0,C)}}return new Date(A)}(D),this.init()},T.init=function(){var D=this.$d;this.$y=D.getFullYear(),this.$M=D.getMonth(),this.$D=D.getDate(),this.$W=D.getDay(),this.$H=D.getHours(),this.$m=D.getMinutes(),this.$s=D.getSeconds(),this.$ms=D.getMilliseconds()},T.$utils=function(){return q},T.isValid=function(){return this.$d.toString()!==M},T.isSame=function(D,_){var A=B(D);return this.startOf(_)<=A&&A<=this.endOf(_)},T.isAfter=function(D,_){return B(D)<this.startOf(_)},T.isBefore=function(D,_){return this.endOf(_)<B(D)},T.$g=function(D,_,A){return q.u(D)?this[_]:this.set(A,D)},T.unix=function(){return Math.floor(this.valueOf()/1e3)},T.valueOf=function(){return this.$d.getTime()},T.startOf=function(D,_){var A=this,b=!!q.u(_)||_,v=q.p(D),h=function(he,oe){var le=q.w(A.$u?Date.UTC(A.$y,oe,he):new Date(A.$y,oe,he),A);return b?le:le.endOf(p)},C=function(he,oe){return q.w(A.toDate()[he].apply(A.toDate("s"),(b?[0,0,0,0]:[23,59,59,999]).slice(oe)),A)},$=this.$W,E=this.$M,U=this.$D,Y="set"+(this.$u?"UTC":"");switch(v){case k:return b?h(1,0):h(31,11);case m:return b?h(1,E):h(0,E+1);case g:var ee=this.$locale().weekStart||0,ae=($<ee?$+7:$)-ee;return h(b?U-ae:U+(6-ae),E);case p:case y:return C(Y+"Hours",0);case l:return C(Y+"Minutes",1);case r:return C(Y+"Seconds",2);case d:return C(Y+"Milliseconds",3);default:return this.clone()}},T.endOf=function(D){return this.startOf(D,!1)},T.$set=function(D,_){var A,b=q.p(D),v="set"+(this.$u?"UTC":""),h=(A={},A[p]=v+"Date",A[y]=v+"Date",A[m]=v+"Month",A[k]=v+"FullYear",A[l]=v+"Hours",A[r]=v+"Minutes",A[d]=v+"Seconds",A[i]=v+"Milliseconds",A)[b],C=b===p?this.$D+(_-this.$W):_;if(b===m||b===k){var $=this.clone().set(y,1);$.$d[h](C),$.init(),this.$d=$.set(y,Math.min(this.$D,$.daysInMonth())).$d}else h&&this.$d[h](C);return this.init(),this},T.set=function(D,_){return this.clone().$set(D,_)},T.get=function(D){return this[q.p(D)]()},T.add=function(D,_){var A,b=this;D=Number(D);var v=q.p(_),h=function(E){var U=B(b);return q.w(U.date(U.date()+Math.round(E*D)),b)};if(v===m)return this.set(m,this.$M+D);if(v===k)return this.set(k,this.$y+D);if(v===p)return h(1);if(v===g)return h(7);var C=(A={},A[r]=s,A[l]=c,A[d]=n,A)[v]||1,$=this.$d.getTime()+D*C;return q.w($,this)},T.subtract=function(D,_){return this.add(-1*D,_)},T.format=function(D){var _=this,A=this.$locale();if(!this.isValid())return A.invalidDate||M;var b=D||"YYYY-MM-DDTHH:mm:ssZ",v=q.z(this),h=this.$H,C=this.$m,$=this.$M,E=A.weekdays,U=A.months,Y=A.meridiem,ee=function(oe,le,L,Q){return oe&&(oe[le]||oe(_,b))||L[le].slice(0,Q)},ae=function(oe){return q.s(h%12||12,oe,"0")},he=Y||function(oe,le,L){var Q=oe<12?"AM":"PM";return L?Q.toLowerCase():Q};return b.replace(z,function(oe,le){return le||function(L){switch(L){case"YY":return String(_.$y).slice(-2);case"YYYY":return q.s(_.$y,4,"0");case"M":return $+1;case"MM":return q.s($+1,2,"0");case"MMM":return ee(A.monthsShort,$,U,3);case"MMMM":return ee(U,$);case"D":return _.$D;case"DD":return q.s(_.$D,2,"0");case"d":return String(_.$W);case"dd":return ee(A.weekdaysMin,_.$W,E,2);case"ddd":return ee(A.weekdaysShort,_.$W,E,3);case"dddd":return E[_.$W];case"H":return String(h);case"HH":return q.s(h,2,"0");case"h":return ae(1);case"hh":return ae(2);case"a":return he(h,C,!0);case"A":return he(h,C,!1);case"m":return String(C);case"mm":return q.s(C,2,"0");case"s":return String(_.$s);case"ss":return q.s(_.$s,2,"0");case"SSS":return q.s(_.$ms,3,"0");case"Z":return v}return null}(oe)||v.replace(":","")})},T.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},T.diff=function(D,_,A){var b,v=this,h=q.p(_),C=B(D),$=(C.utcOffset()-this.utcOffset())*s,E=this-C,U=function(){return q.m(v,C)};switch(h){case k:b=U()/12;break;case m:b=U();break;case x:b=U()/3;break;case g:b=(E-$)/6048e5;break;case p:b=(E-$)/864e5;break;case l:b=E/c;break;case r:b=E/s;break;case d:b=E/n;break;default:b=E}return A?b:q.a(b)},T.daysInMonth=function(){return this.endOf(m).$D},T.$locale=function(){return N[this.$L]},T.locale=function(D,_){if(!D)return this.$L;var A=this.clone(),b=W(D,_,!0);return b&&(A.$L=b),A},T.clone=function(){return q.w(this.$d,this)},T.toDate=function(){return new Date(this.valueOf())},T.toJSON=function(){return this.isValid()?this.toISOString():null},T.toISOString=function(){return this.$d.toISOString()},T.toString=function(){return this.$d.toUTCString()},F}(),O=G.prototype;return B.prototype=O,[["$ms",i],["$s",d],["$m",r],["$H",l],["$W",p],["$M",m],["$y",k],["$D",y]].forEach(function(F){O[F[1]]=function(T){return this.$g(T,F[0],F[1])}}),B.extend=function(F,T){return F.$i||(F(T,G,B),F.$i=!0),B},B.locale=W,B.isDayjs=P,B.unix=function(F){return B(1e3*F)},B.en=N[w],B.Ls=N,B.p={},B})})(jb);var EH=jb.exports;const xe=E7(EH),xt="YYYY-MM-DD",PH=["周日","周一","周二","周三","周四","周五","周六"];function se(){return xe().format(xt)}function me(){return new Date().toISOString()}function ua(e,a=xt){return e==null||e===""?"":xe(e).format(a)}function qa(e,a){return xe(e).add(a,"day").format(xt)}function Vt(e=se()){return xe(e||void 0).format("YYYY-MM")}function TH(e){const a=xe(`${e}-01`);return{start:a.startOf("month").format(xt),end:a.endOf("month").format(xt)}}function zb(e){return xe(`${e}-01`).subtract(1,"month").format("YYYY-MM")}function $b(e){return xe(`${e}-01`).add(1,"month").format("YYYY-MM")}function RH(e,a){return xe(a).startOf("day").diff(xe(e).startOf("day"),"day")}function vn(e){return RH(se(),e)}function Mn(e){const a=vn(e);return a===0?"今天":a===-1?"昨天":a===-2?"前天":a===1?"明天":a===2?"后天":ua(e,"M月D日")}function OH(e=se()){return PH[xe(e||void 0).day()]??""}function Db(){const e=se();return`${e}（${OH(e)}）`}function C1(e){return!e||!/^\d{4}-\d{2}-\d{2}$/.test(e)?!1:xe(e).isValid()&&xe(e).format(xt)===e}function BH(e,a=se()){const n=[];for(let s=e-1;s>=0;s-=1)n.push(qa(a,-s));return n}function FH(e,a=se()){const n=[];for(let s=e-1;s>=0;s-=1)n.push(xe(`${Vt(a)}-01`).subtract(s,"month").format("YYYY-MM"));return n}function ya(e,a=!1){const n=xe(`${e}-01`);return a?n.format("YYYY年M月"):n.format("M月")}function Kt(e){if(!e)return"";const a=xe(e);return a.isValid()?a.format("MM-DD HH:mm"):""}const ye={health:"/api/health",settings:"/api/settings",login:"/api/auth/login",register:"/api/auth/register",sendCode:"/api/auth/send-code",reset:"/api/auth/reset",logout:"/api/auth/logout",me:"/api/auth/me",changePassword:"/api/auth/changepassword",rules:"/api/user/rules",profile:"/api/user/profile",backups:"/api/user/backups",backup:e=>`/api/user/backups/${e}`,syncList:"/api/sync/list",syncPush:"/api/sync/push",syncPull:"/api/sync/pull",syncDelete:"/api/sync/delete"},WH=[ye.health,ye.login,ye.register,ye.sendCode,ye.reset];function UH(e){return WH.some(a=>e===a||e.startsWith(`${a}/`)||e.startsWith(`${a}?`))}const GH=/^[a-zA-Z0-9._~%-]+$/,YH=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,ZH=/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//,et={ok:!1,url:"",reason:"地址格式不正确，示例：http://192.168.1.10:3030"};function KH(e){if(!e||!GH.test(e))return!1;if(e==="localhost")return!0;const a=YH.exec(e);return a?a.slice(1,5).every(n=>{const s=Number(n);return s>=0&&s<=255}):e.includes(".")}function Je(e){const a=(e??"").trim();if(!a)return{...et,reason:"服务器地址不能为空"};if(/\s/.test(a))return{...et,reason:"服务器地址中不能包含空格"};const n=ZH.test(a);if(!n&&!a.includes(".")&&!a.includes(":"))return et;let s;try{s=new URL(n?a:`http://${a}`)}catch{return et}return s.protocol!=="http:"&&s.protocol!=="https:"?{...et,reason:"地址协议只支持 http 或 https"}:!KH(s.hostname)||s.port&&!/^\d+$/.test(s.port)?et:{ok:!0,url:`${s.protocol}//${s.host}`}}function bs(e,a,n){const s=e.replace(/\/+$/,""),c=a.startsWith("/")?a:`/${a}`,i=JH(n);return`${s}${c}${i}`}function JH(e){if(!e)return"";const a=Object.entries(e).filter(([,n])=>n!=null&&n!=="").map(([n,s])=>`${encodeURIComponent(n)}=${encodeURIComponent(String(s))}`);return a.length?`?${a.join("&")}`:""}function Nb(e){const a=Je(e);return a.ok?a.url:(e??"").trim()}const A1=/timeout|timed?\s*out|sockettimeout|超时|aborted/i,XH=/unknownhost|connectexception|econnrefused|econnreset|failed to connect|network|unreachable|no address associated|cleartext|socket|host/i,q1=/ssl|sslhandshake|certificate|trust anchor|not trusted|cert path|javax\.net/i;function L1(e){if(!e||typeof e!="object")return;const a=e.error;if(typeof a=="string"&&a.trim())return a.trim();const n=e.message;if(typeof n=="string"&&n.trim())return n.trim()}function QH(e,a){const n=`${L1(e)??""} `;return/验证|verify|verification|code/i.test(n)}function Sb(e,a=15){const n=e instanceof Error?e.message:typeof e=="string"?e:JSON.stringify(e??{}),s=String(n??"");return q1.test(s)?new X("tls",Ce.tls,void 0,e):A1.test(s)?new X("timeout",ma(a),void 0,e):XH.test(s)?new X("network",Ce.network,void 0,e):new X("network",Ce.network,void 0,e)}function Cb(e,a=15){if(e instanceof DOMException||e instanceof Error&&e.name==="AbortError")return new X("timeout",ma(a),void 0,e);const n=e instanceof Error?e.message:String(e??"");return A1.test(n)?new X("timeout",ma(a),void 0,e):q1.test(n)?new X("tls",Ce.tls,void 0,e):new X("network",Ce.network,void 0,e)}function H1(e,a=15){const n=e instanceof Error?e.message:String(e??"");return q1.test(n)?new X("tls",Ce.tls,void 0,e):A1.test(n)?new X("timeout",ma(a),void 0,e):new X("network",Ce.network,void 0,e)}function eV(e,a){const n=L1(a);if(e===401)return new X("auth",Ce.auth,e,a);const s=e===400&&QH(a);return new X("http",VH(e,n),e,a,s||void 0)}function vs(e,a){return new X("parse",HH(e),e,a)}const La=15e3,tV=8e3,Ms=400;let wn=null,Ab=null;function aV(e){wn=e}function nV(e){Ab=e}function oV(){try{return wn?wn():null}catch{return null}}const sV=e=>new Promise(a=>setTimeout(a,e));function cV(e){try{return JSON.parse(e)}catch{return null}}function Ua(e){return e==null?null:typeof e=="string"?cV(e)??null:e}async function iV(e,a,n,s){let c;try{c=(await Me(()=>Promise.resolve().then(()=>En),void 0,import.meta.url)).CapacitorHttp}catch(i){throw H1(i,Math.round(s/1e3))}try{const i=await c.request({url:e,method:a.method??"GET",headers:n,data:a.body,dataType:"json",connectTimeout:s,readTimeout:s,shouldEncodeUrlParams:!1});return{status:Number(i.status??0),data:i.data}}catch(i){throw Sb(i,Math.round(s/1e3))}}async function rV(e,a,n,s,c){const i=y9()?a:e,d=new AbortController,r=setTimeout(()=>{try{d.abort()}catch{}},c);try{const l=await fetch(i,{method:n.method??"GET",headers:s,body:(n.method??"GET")==="GET"?void 0:JSON.stringify(n.body??null),signal:n.signal??d.signal,credentials:"omit"}),p=await l.text();return{status:l.status,data:p}}catch(l){throw Cb(l,Math.round(c/1e3))}finally{clearTimeout(r)}}async function gt(e,a){const n=a.method??"GET",s=Je(e?.url??"");if(!s.ok)throw new X("invalid_url",s.reason??Ce.invalid_url,void 0,e?.url);const c=a.timeoutMs??La,i=Math.round(c/1e3),d=bs(s.url,a.path,a.query),r={"Content-Type":"application/json",Accept:"application/json",...a.headers??{}};if(a.auth!==!1&&!UH(a.path)){const m=oV();m&&(r.Authorization=`Bearer ${m}`)}const p=a.retry??(n==="GET"?1:0);let g=null;for(let m=0;m<=p;m+=1){const x=Date.now();try{const k=je()?await iV(d,a,r,c):await rV(d,bs("",a.path,a.query),a,r,c),y=Number(k.status??0);if(be.debug("http",`${n} ${a.path} → ${y} (${Date.now()-x}ms)`),y===401){const f=L1(Ua(k.data)),z=new X("auth",f??Ce.auth,y,k.data);if(a.ignoreUnauth!==!0)try{Ab?.(z)}catch{}throw z}if(y<200||y>=300)throw eV(y,Ua(k.data));const M=Ua(k.data);if(M===null||typeof M!="object"||a.expectOk!==!1&&M.ok===void 0)throw vs(y,k.data);return{status:y,data:M}}catch(k){const y=k instanceof X?k:H1(k,i);if(g=y,(y.kind==="network"||y.kind==="timeout")&&m<p){be.warn("http",`${n} ${a.path} 失败(${y.kind})，${Ms}ms 后重试`),await sV(Ms);continue}throw be.error("http",`${n} ${a.path} 失败`,y.kind,y.message),y}}throw g??new X("network",Ce.network)}function Fe(e,a,n,s=La){return gt(e,{method:"GET",path:a,query:n,timeoutMs:s})}function We(e,a,n,s=La){return gt(e,{method:"POST",path:a,body:n,timeoutMs:s,retry:0})}function dV(e,a,n,s=La){return gt(e,{method:"DELETE",path:a,body:n,timeoutMs:s,retry:0})}function qb(e){const a=e.data;if(!a||a.ok!==!0)throw new X("http",a?.error??"账号或密码不正确",e.status,a);if(!a.token||!a.user)throw new X("parse","服务器返回内容缺少登录信息",e.status,a);return{token:a.token,user:a.user,savedAt:me()}}async function lV(e,a,n){const s=await We(e,ye.login,{email:a,password:n});return qb(s)}async function hV(e,a){const n={email:a.email,password:a.password};a.code&&(n.code=a.code);try{const s=await We(e,ye.register,n);return qb(s)}catch(s){throw s instanceof X&&!s.requiresCode&&/验证|verify|code/i.test(s.message??"")?new X(s.kind,s.message,s.status,s.raw,!0):s}}async function pV(e,a,n="register"){const s=await We(e,ye.sendCode,{email:a,purpose:n});if(!s.data||s.data.ok!==!0)throw new X("http",s.data?.error??"验证码发送失败，请稍后重试",s.status,s.data)}async function mV(e,a,n,s){const c=await We(e,ye.reset,{email:a,code:n,newPassword:s});if(!c.data||c.data.ok!==!0)throw new X("http",c.data?.error??"重置密码失败，请稍后重试",c.status,c.data)}async function uV(e){const a=await Fe(e,ye.me);if(!a.data||a.data.ok!==!0||!a.data.user)throw new X("http",a.data?.error??"登录态校验失败",a.status,a.data);return a.data.user}async function yV(e){try{await We(e,ye.logout)}catch{}}async function Lb(e,a,n){const s=await We(e,ye.changePassword,{oldPassword:a,newPassword:n});if(!s.data||s.data.ok!==!0)throw new X("http",s.data?.error??"修改密码失败，请稍后重试",s.status,s.data)}async function V1(e){if(!e)return{kind:"idle"};try{const a=await Fe(e,ye.health,void 0,tV),n=a.data;if(a.status===200&&n?.ok===!0)return{kind:"online",dbOk:n.db!==!1,serverTime:n.time??""};throw new X("parse","服务器已连通，但接口返回异常，请确认这是纳物服务端",a.status,n)}catch(a){const n=a instanceof X?a:new X("network","无法连接到服务器",void 0,a);return be.warn("server","probe failed",n.kind,n.message),{kind:"error",error:n}}}let _n=null;function kV(e){_n=e}function lt(e,a){const n=e.find(s=>s.id===a)??null;return Promise.all([Ne(Bn,e),Ne(Rn,n)])}function ue(){const{servers:e,currentId:a}=ze.getState();return e.find(n=>n.id===a)??null}const ze=Mt()((e,a)=>({servers:[],currentId:null,probeState:{kind:"idle"},initServers:async()=>{const n=await we(Bn,null)??[],s=await we(Rn,null);let c=s?.id&&n.some(i=>i.id===s.id)?s.id:n[0]?.id??null;!c&&n.length>0&&(c=n[0]?.id??null),e({servers:n,currentId:c}),n.length>0&&c!==s?.id&&await lt(n,c)},add:async n=>{const s=Je(n.url);if(!s.ok)throw new X("invalid_url",s.reason??"地址格式不正确");const c={id:jH(),alias:(n.alias??"").trim()||"我的服务器",url:s.url,note:n.note,createdAt:me()},i=[...a().servers,c],d=a().currentId??c.id;return e({servers:i,currentId:d}),await lt(i,d),c},update:async(n,s)=>{const c=a().servers.map(i=>{if(i.id!==n)return i;const d={...i,...s,id:i.id};if(s.url!==void 0){const r=Je(s.url);if(!r.ok)throw new X("invalid_url",r.reason??"地址格式不正确");d.url=r.url}return d});e({servers:c}),await lt(c,a().currentId)},remove:async n=>{const s=a().servers.filter(i=>i.id!==n),c=a().currentId===n?s[0]?.id??null:a().currentId;e({servers:s,currentId:c}),await lt(s,c),(a().currentId!==n||s.length===0)&&_n?.(c)},setCurrent:async n=>{const s=a().currentId;e({currentId:n,probeState:{kind:"idle"}}),await lt(a().servers,n),s!==n&&_n?.(n)},probe:async n=>{const s=n?a().servers.find(i=>i.id===n)??null:ue();e({probeState:{kind:"probing"}});const c=await V1(s);return e({probeState:c}),s&&c.kind==="online"&&await a().markConnected(s.id,!0),c},markConnected:async(n,s)=>{const c=a().servers.map(i=>i.id===n?{...i,lastOk:s,lastConnectedAt:s?me():i.lastConnectedAt}:i);e({servers:c}),await lt(c,a().currentId)}}));async function ht(e){e?await Ne(aa,e):await w9(aa)}const _e=Mt()((e,a)=>({session:null,sessionState:"unknown",error:"",busy:!1,hydrateSession:async()=>{const n=await we(aa,null);if(!n?.token){e({session:null,sessionState:"unknown"});return}e({session:n,sessionState:"valid"}),a().verify()},login:async(n,s)=>{e({busy:!0,error:""});try{const c=ue(),i=await lV(c,n.trim(),s);await ht(i),e({session:i,sessionState:"valid",busy:!1,error:""}),c&&await ze.getState().markConnected(c.id,!0)}catch(c){throw e({busy:!1,error:qe(c)}),c}},register:async(n,s,c)=>{e({busy:!0,error:""});try{const i=ue(),d=await hV(i,{email:n.trim(),password:s,code:c});await ht(d),e({session:d,sessionState:"valid",busy:!1,error:""}),i&&await ze.getState().markConnected(i.id,!0)}catch(i){throw e({busy:!1,error:qe(i)}),i}},sendCode:async(n,s="register")=>{e({busy:!0,error:""});try{await pV(ue(),n.trim(),s),e({busy:!1})}catch(c){throw e({busy:!1,error:qe(c)}),c}},resetPassword:async(n,s,c)=>{e({busy:!0,error:""});try{await mV(ue(),n.trim(),s,c),e({busy:!1})}catch(i){throw e({busy:!1,error:qe(i)}),i}},changePassword:async(n,s)=>{e({busy:!0,error:""});try{await Lb(ue(),n,s),e({busy:!1})}catch(c){throw e({busy:!1,error:qe(c)}),c}},verify:async()=>{const{session:n}=a();if(!n?.token)return e({sessionState:"unknown"}),"unknown";try{const s=await uV(ue()),c={...n,user:s,savedAt:me()};return await ht(c),e({session:c,sessionState:"valid"}),"valid"}catch(s){return(s instanceof X?s.kind:"network")==="auth"?(await a().markExpired(),"expired"):(e({sessionState:"offline"}),be.warn("auth","校验失败（网络），转为离线可用"),"offline")}},logout:async()=>{try{await yV(ue())}finally{await ht(null),e({session:null,sessionState:"unknown",error:""})}},markExpired:async()=>{await ht(null),e({session:null,sessionState:"expired"})},clearLocalSession:async()=>{await ht(null),e({session:null,sessionState:"unknown",error:""})},clearError:()=>e({error:""})}));aV(()=>_e.getState().session?.token??null);nV(()=>{const e=_e.getState();e.sessionState!=="expired"&&e.markExpired()});async function Bt(e){await Ne(At,e)}const de=Mt()((e,a)=>({settings:ot(),loaded:!1,load:async()=>{const n=await we(At,null),s=n?{...ot(),...n}:ot();n||await Bt(s),e({settings:s,loaded:!0})},update:async n=>{const s={...a().settings,...n};e({settings:s}),await Bt(s)},replace:async n=>{const s={...ot(),...n};e({settings:s}),await Bt(s)},setLastBackupAt:async n=>{await a().update({lastBackupAt:n})},reset:async()=>{const n=ot();e({settings:n}),await Bt(n)}}));function ws(e){return e==="light"||e==="dark"?e:typeof window<"u"&&typeof window.matchMedia=="function"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function $t(){return de.getState().settings?.currency||"CNY"}const Z=Mt()((e,a)=>{const n=(i,d,r)=>{const l={label:i,collection:d,rows:r,at:me()};e(p=>({undoStack:[...p.undoStack,l].slice(-20)}))},s=(i=1)=>{e(d=>({changedSinceBackup:d.changedSinceBackup+i}))},c=async(i,d,r={})=>{r.label&&r.prev&&n(r.label,i,r.prev),e({[i]:d}),await NH(i,d),r.bump!==!1&&s()};return{goods:[],subscriptions:[],bills:[],valueRecords:[],moods:[],times:[],wishlist:[],cooldowns:[],categories:[],usageRecords:[],reminders:[],walls:[],loaded:!1,changedSinceBackup:0,undoStack:[],hydrateAll:async()=>{const i=await SH();e({...i,loaded:!0})},setAllCollections:async i=>{const d={};for(const r of Xe){const l=i[r];Array.isArray(l)&&(d[r]=l)}e({...d,undoStack:[],changedSinceBackup:0}),await CH(i)},resetChanged:()=>e({changedSinceBackup:0}),undo:async()=>{const i=a().undoStack,d=i[i.length-1];return d?(e({undoStack:i.slice(0,-1)}),e({[d.collection]:d.rows}),await pa(d.collection,d.rows),!0):!1},addLedger:async i=>{const d={id:ve(),type:i.type??"expense",amount:i.amount??0,currency:i.currency??$t(),date:i.date??se(),categoryId:i.categoryId??"cl7",judgement:i.judgement??(i.type==="income"?"gui":"xu"),note:i.note,createdAt:me()},r=a().valueRecords;return await c("valueRecords",[d,...r],{label:"新增一笔",prev:r}),d},addLedgerMany:async i=>{const d=i.map(l=>({id:ve(),type:l.type??"expense",amount:l.amount??0,currency:l.currency??$t(),date:l.date??se(),categoryId:l.categoryId??"cl7",judgement:l.judgement??(l.type==="income"?"gui":"xu"),note:l.note,createdAt:me()})),r=a().valueRecords;return await c("valueRecords",[...d,...r],{label:`新增 ${d.length} 笔`,prev:r}),d},updateLedger:async(i,d)=>{const r=a().valueRecords,l=r.map(p=>p.id===i?{...p,...d,id:p.id}:p);await c("valueRecords",l,{label:"修改一笔",prev:r})},removeLedger:async i=>{const d=a().valueRecords;await c("valueRecords",d.filter(r=>r.id!==i),{label:"删除一笔",prev:d})},addGoods:async i=>{const d=me(),r={id:ve(),name:i.name,categoryId:i.categoryId??"cg0",tags:i.tags??[],price:i.price??0,currency:i.currency??$t(),buyDate:i.buyDate??se(),status:i.status??"active",image:i.image,note:i.note,extraFees:i.extraFees??[],incomes:i.incomes??[],sellPrice:i.sellPrice,targetDailyCost:i.targetDailyCost,countEnabled:i.countEnabled??!1,totalCount:i.totalCount,usedCount:i.usedCount??0,warrantyDate:i.warrantyDate,warrantyRemind:i.warrantyRemind,createdAt:d,updatedAt:d},l=a().goods;return await c("goods",[r,...l],{label:"新增物品",prev:l}),r},updateGoods:async(i,d)=>{const r=a().goods,l=r.map(p=>p.id===i?{...p,...d,id:p.id,updatedAt:me()}:p);await c("goods",l,{label:"修改物品",prev:r})},removeGoods:async i=>{const d=a().goods;await c("goods",d.filter(r=>r.id!==i),{label:"删除物品",prev:d})},useGoodsOnce:async i=>{const d=a().goods,r=d.map(g=>g.id===i?{...g,usedCount:(g.usedCount??0)+1,countEnabled:!0,updatedAt:me()}:g);await c("goods",r,{label:"使用 +1",prev:d});const l={id:ve(),goodsId:i,date:se(),createdAt:me()},p=a().usageRecords;await c("usageRecords",[l,...p],{bump:!1})},retireGoods:async(i,d)=>{const r=a().goods,l=r.map(p=>p.id===i?{...p,status:"retired",sellPrice:d??p.sellPrice,updatedAt:me()}:p);await c("goods",l,{label:"退役物品",prev:r})},addSubscription:async i=>{const d=me(),r=i.startDate??se(),l={id:ve(),name:i.name,categoryId:i.categoryId??"cs0",icon:i.icon??"tv",currency:i.currency??$t(),type:i.type??"recurring",period:i.period??"month",every:i.every??1,amount:i.amount??0,startDate:r,nextRenewDate:i.nextRenewDate??r,autoRenew:i.autoRenew??!0,initSpent:i.initSpent,status:"active",remind:i.remind??{renewLead:3},createdAt:d,updatedAt:d},p=a().subscriptions;return await c("subscriptions",[l,...p],{label:"新增订阅",prev:p}),l},updateSubscription:async(i,d)=>{const r=a().subscriptions,l=r.map(p=>p.id===i?{...p,...d,id:p.id,updatedAt:me()}:p);await c("subscriptions",l,{label:"修改订阅",prev:r})},removeSubscription:async i=>{const d=a().subscriptions;await c("subscriptions",d.filter(l=>l.id!==i),{label:"删除订阅",prev:d});const r=a().bills;await c("bills",r.filter(l=>l.subId!==i),{bump:!1})},addBill:async i=>{const d={id:ve(),subId:i.subId,dueDate:i.dueDate??se(),amount:i.amount??0,currency:i.currency??$t(),status:i.status??"pending",paidDate:i.paidDate,refund:i.refund,createdAt:me()},r=a().bills;return await c("bills",[d,...r],{label:"新增账单",prev:r}),d},markBillPaid:async(i,d,r)=>{const l=a().bills,p=l.map(g=>g.id===i?{...g,status:"paid",paidDate:d??se(),refund:r??g.refund}:g);await c("bills",p,{label:"标记已扣款",prev:l})},addMood:async i=>{const d={id:ve(),feeling:i.feeling,text:i.text,crushed:i.crushed??!1,inHeart:i.inHeart??!1,date:i.date??se(),createdAt:me()},r=a().moods;return await c("moods",[d,...r],{label:"记录情绪",prev:r}),d},addTime:async i=>{const d={id:ve(),durationMin:i.durationMin??0,tags:i.tags??[],meaning:i.meaning??"xu",date:i.date??se(),note:i.note,createdAt:me()},r=a().times;return await c("times",[d,...r],{label:"记录时间",prev:r}),d},addWish:async i=>{const d={id:ve(),name:i.name,price:i.price,url:i.url,note:i.note,createdAt:me()},r=a().wishlist;return await c("wishlist",[d,...r],{label:"加入心愿单",prev:r}),d},addCooldown:async i=>{const d={id:ve(),name:i.name,until:i.until,createdAt:me()},r=a().cooldowns;return await c("cooldowns",[d,...r],{label:"加入冷却期",prev:r}),d},addWall:async i=>{const d={id:ve(),text:i.text,color:i.color,createdAt:me()},r=a().walls;return await c("walls",[d,...r],{label:"贴一句话",prev:r}),d},addReminder:async i=>{const d={id:ve(),kind:i.kind,refId:i.refId,at:i.at,done:i.done??!1,createdAt:me()},r=a().reminders;return await c("reminders",[d,...r],{label:"新增提醒",prev:r}),d},removeById:async(i,d)=>{const r=a()[i],l=(r??[]).filter(p=>p?.id!==d);await c(i,l,{label:"删除",prev:r})},addCategory:async i=>{const d=a().categories,r={id:ve(),name:i.name,icon:i.icon??"tag",kind:i.kind,order:i.order??d.length},l=d;return await c("categories",[...l,r],{label:"新增分类",prev:l}),r},updateCategory:async(i,d)=>{const r=a().categories,l=r.map(p=>p.id===i?{...p,...d,id:p.id}:p);await c("categories",l,{label:"修改分类",prev:r})},removeCategory:async i=>{const d=a().categories;await c("categories",d.filter(r=>r.id!==i),{label:"删除分类",prev:d})}}});async function _s(e){await Ne(Ct,e)}const Ee=Mt()(e=>({hydrated:!1,theme:"light",themeMode:"system",offlineMode:!1,bootError:"",init:async()=>{try{const a=await we(Ct,null)??{...Wa};e({offlineMode:a.offlineMode===!0}),await LH(),await Z.getState().hydrateAll(),await de.getState().load();const n=de.getState().settings.theme,s=ws(n);e({themeMode:n,theme:s}),Q1(s),await ze.getState().initServers(),kV(()=>{_e.getState().clearLocalSession()}),_e.getState().hydrateSession(),e({hydrated:!0,bootError:""})}catch(a){const n=a instanceof Error?a.message:String(a??"");e({hydrated:!0,bootError:n||"本地数据初始化失败"})}},setThemeMode:async a=>{await de.getState().update({theme:a});const n=ws(a);e({themeMode:a,theme:n}),Q1(n)},setOfflineMode:async a=>{const s={...await we(Ct,null)??{...Wa},offlineMode:a};await _s(s),e({offlineMode:a})},setLastRoute:async a=>{const n=await we(Ct,null)??{...Wa};await _s({...n,lastRoute:a})}}));let Hb=!0,js=0;const fV=40;function xV(e){Hb=e}const gV={light:10,medium:16,heavy:26,select:8,success:[12,45,18],warn:[14,60,14],error:[18,50,26]};async function Pe(e="light"){if(!Hb)return;const a=Date.now();if(!(a-js<fV)){js=a;try{if(dt.isNativePlatform()){const s=await Me(()=>import("./index-CMI0BQ2K.js"),__vite__mapDeps([4,1]),import.meta.url),{Haptics:c,ImpactStyle:i,NotificationType:d}=s;switch(e){case"select":await c.selectionStart(),window.setTimeout(()=>{c.selectionEnd().catch(()=>{})},40);break;case"success":await c.notification({type:d.Success});break;case"warn":await c.notification({type:d.Warning});break;case"error":await c.notification({type:d.Error});break;case"medium":await c.impact({style:i.Medium});break;case"heavy":await c.impact({style:i.Heavy});break;default:await c.impact({style:i.Light})}return}const n=navigator;typeof n.vibrate=="function"&&n.vibrate(gV[e])}catch{}}}const bV=3500,fe=Mt()((e,a)=>({toasts:[],confirmRequest:null,sheet:null,toast:(n,s="info",c={})=>{const i=ve(),d={id:i,message:n,kind:s,actionLabel:c.actionLabel,onAction:c.onAction,createdAt:Date.now()};e(l=>{const p=l.toasts.findIndex(m=>m.message===n);if(p!==-1){const m=l.toasts.slice();return m[p]=d,{toasts:m}}return{toasts:[...l.toasts.slice(-2),d]}});const r=c.durationMs??bV;return setTimeout(()=>{a().dismissToast(i)},r),i},dismissToast:n=>{e(s=>({toasts:s.toasts.filter(c=>c.id!==n)}))},clearToasts:()=>e({toasts:[]}),confirm:n=>new Promise(s=>{e({confirmRequest:{...n,confirmText:n.confirmText??"确定",cancelText:n.cancelText??"取消",resolver:s}})}),resolveConfirm:n=>{const s=a().confirmRequest;e({confirmRequest:null}),s?.resolver?.(n)},openSheet:(n,s)=>e({sheet:{key:s??ve(),node:n}}),closeSheet:()=>e({sheet:null})})),K=e=>(Pe("success"),fe.getState().toast(e,"success")),J=e=>(Pe("error"),fe.getState().toast(e,"error")),Ga=e=>fe.getState().toast(e,"info");async function vV(){let e="Android/Device";try{const n=await(await Me(()=>import("./index-CfWHO9ib.js"),__vite__mapDeps([5,1]),import.meta.url)).Device.getInfo(),s=n.model||"";e=s?`Android/${s}`:`Android/${n.name??"Device"}`}catch{}return e.slice(0,60)}async function MV(e){const a=await Fe(e,ye.backups),n=a.data;if(!n||n.ok!==!0)throw new X("http",n?.error??"备份列表获取失败",a.status,n);const s=Array.isArray(n.rows)?n.rows:[],c=n.backups;return s.length?s:Array.isArray(c)?c:[]}async function wV(e,a){const n=await We(e,ye.backups,a),s=n.data;if(!s||s.ok!==!0||typeof s.id!="number")throw new X("http",s?.error??"备份上传失败",n.status,s);return s.id}async function Vb(e,a){const n=await Fe(e,ye.backup(a)),s=n.data;if(!s||s.ok!==!0||s.payload===void 0)throw new X("http",s?.error??"备份详情获取失败",n.status,s);return{payload:s.payload,label:s.label??""}}async function _V(e,a){const n=await dV(e,ye.backup(a));if(!n.data||n.data.ok!==!0)throw new X("http",n.data?.error??"备份删除失败",n.status,n.data)}function jV(e="manual",a=new Date){const n=c=>String(c).padStart(2,"0"),s=`${n(a.getMonth()+1)}-${n(a.getDate())} ${n(a.getHours())}:${n(a.getMinutes())}`;return e==="auto"?`自动备份 ${s}`:`手动备份 ${s}`}const It="gf.icon.cache.index",Ot="gf.icon.c.",jn=500,Et=4e5;function Ha(e,a){const n=(e??"").trim();if(!n)return"";const s=/^https?:\/\/localhost(?::\d+)?/i,c=(a??ue()?.url??"").replace(/\/+$/,"");return c&&n.toLowerCase().startsWith(c.toLowerCase())?n.slice(c.length)||"/":s.test(n)?n.replace(s,"")||"/":n}async function Ib(e){for(const a of e){const n=Ha(a);if(!n)continue;const s=await we(Ot+n);if(s&&s.startsWith("data:"))return s}return null}async function zn(e,a){const n=Ha(e);if(!(!n||!a.startsWith("data:")||a.length>Et))try{await Ne(Ot+n,a);const s=await we(It)??{keys:[]};s.keys=[n,...s.keys.filter(c=>c!==n)].slice(0,jn),await Ne(It,s)}catch(s){be.warn("iconCache","写入失败",s)}}async function I1(e){const a=(e??"").trim();if(!a||!/^https?:\/\//i.test(a)&&!a.startsWith("/"))return null;if(je())try{const s=await(await Me(()=>Promise.resolve().then(()=>En),void 0,import.meta.url)).CapacitorHttp.request({url:a,method:"GET",responseType:"arraybuffer",connectTimeout:8e3,readTimeout:8e3}),c=Number(s.status??0);if(c<200||c>=300)return null;const i=typeof s.data=="string"?s.data:"";if(!i||i.length>Et)return null;const d=s.headers??{},r=Array.isArray(d["Content-Type"])?d["Content-Type"][0]:d["Content-Type"]??d["content-type"]??"";return`data:${/svg|image|icon/i.test(String(r))?String(r).split(";")[0]:"image/png"};base64,${i}`}catch(n){return be.debug("iconCache","原生抓取失败",a,n),null}try{const n=a.startsWith("/")?`${window.location.origin}${a}`:a,s=await fetch(n,{credentials:"omit"});if(!s.ok)return null;const c=await s.blob();return c.size>Et?null:await new Promise(i=>{const d=new FileReader;d.onload=()=>i(typeof d.result=="string"?d.result:null),d.onerror=()=>i(null),d.readAsDataURL(c)})}catch{return null}}async function zV(e,a){for(const n of e){const s=await I1(n);if(s){await zn(n,s);for(const c of e)c!==n&&await zn(c,s);return s}}return null}async function Ft(e,a){const n=e.map(d=>(d??"").trim()).filter(Boolean).slice(0,24),s=4;let c=0;const i=async()=>{for(;c<n.length;){const d=n[c++],r=Ha(d,a),l=await we(Ot+r);l&&l.startsWith("data:")||await I1(d).then(p=>p?zn(d,p):null)}};await Promise.all(Array.from({length:Math.min(s,n.length)},i))}async function $V(){const e=await we(It)??{keys:[]},a={};for(const n of e.keys){const s=await we(Ot+n);s&&s.startsWith("data:")&&s.length<=Et&&(a[n]=s)}return a}async function DV(e){if(!e||typeof e!="object")return 0;const a=Object.entries(e).filter(([c,i])=>typeof c=="string"&&c&&typeof i=="string"&&i.startsWith("data:")&&i.length<=Et);if(a.length===0)return 0;const n=await we(It)??{keys:[]};for(const[c,i]of a.slice(0,jn))await Ne(Ot+c,i),n.keys.includes(c)||n.keys.push(c);const s=a.map(([c])=>c);return n.keys=[...s,...n.keys.filter(c=>!s.includes(c))].slice(0,jn),await Ne(It,n),s.length}const NV="guifou-web",SV=1;function CV(e){const a={};for(const i of Xe){const d=e.collections?.[i];a[i]=Array.isArray(d)?d:[]}const n=a.goods?.length??0,s=a.subscriptions?.length??0,c=a.valueRecords?.length??0;return{collections:a,settings:e.settings??null,count:n+s+c,app:NV,version:SV,exportedAt:me()}}function AV(e,a){let n=e;if(typeof n=="string")try{n=JSON.parse(n)}catch{throw new X("parse","备份内容无法识别（不是合法 JSON）",void 0,e)}if(!n||typeof n!="object")throw new X("parse","备份内容无法识别",void 0,e);const s=n,c=s.collections??{},i={};for(const l of Xe){const p=c[l];i[l]=Array.isArray(p)?p:[]}const d={...ot(),...a??{},...s.settings&&typeof s.settings=="object"?s.settings:{}},r=typeof s.count=="number"?s.count:i.goods.length+i.subscriptions.length+i.valueRecords.length;return{collections:i,settings:d,count:r,exportedAt:typeof s.exportedAt=="string"?s.exportedAt:""}}async function Eb(){const e=Z.getState(),a=de.getState().settings,n={};for(const c of Xe)n[c]=e[c]??[];const s=CV({collections:n,settings:a});try{s.icons=await $V()}catch(c){be.warn("backup","图标缓存导出失败（快照继续，不含 icons）",c),s.icons=null}return s}async function qV(e="manual"){const a=ue();if(!a)throw new Error("未配置服务器");const n=await Eb(),s=await vV(),c=await wV(a,{payload:n,label:jV(e),item_count:n.count,device:s});return await de.getState().setLastBackupAt(new Date().toISOString()),Z.getState().resetChanged(),c}async function LV(){const e=ue();return e?MV(e):[]}async function HV(e){const a=ue();if(!a)throw new Error("未配置服务器");const n=await Vb(a,e),s=de.getState().settings,c=AV(n.payload,s);await Z.getState().setAllCollections(c.collections),await de.getState().replace(c.settings);let i=0;try{let r=null;if(typeof n.payload=="string")try{r=JSON.parse(n.payload).icons??null}catch{}else n.payload&&typeof n.payload=="object"&&(r=n.payload.icons??null);i=await DV(r)}catch(r){be.warn("backup","图标缓存恢复失败（不影响数据恢复）",r)}let d=0;for(const r of Xe)d+=c.collections[r]?.length??0;return{total:d,exportedAt:c.exportedAt,subCount:c.collections.subscriptions?.length??0,restoredIcons:i}}async function VV(e){const a=ue();if(!a)throw new Error("未配置服务器");await _V(a,e)}const IV=hc,EV=2e3,PV=60,TV=1500,RV=[3030,2222,8080,80],OV=["10.0.0","192.168.0","192.168.1","192.168.31"];function Pb(){return je()}function BV(e){const a=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.\d{1,3}$/.exec(e);return a?`${a[1]}.${a[2]}.${a[3]}`:null}function FV(e=[]){const a=[],n=i=>{i&&!a.includes(i)&&a.push(i)};for(const i of e)try{n(BV(new URL(i).hostname))}catch{}for(const i of OV)n(i);const s=[],c=new Set;e:for(const i of RV)for(const d of a)for(let r=1;r<=254;r+=1){const l=`http://${d}.${r}:${i}`;if(!c.has(l)&&(c.add(l),s.push(l),s.length>=TV))break e}return s}function WV(e){try{const a=JSON.parse(e);return a&&typeof a=="object"?a:null}catch{return null}}async function UV(e,a){try{const n=await IV.request({url:`${e}/api/health`,method:"GET",headers:{Accept:"application/json"},dataType:"json",connectTimeout:a,readTimeout:a,shouldEncodeUrlParams:!1});if(Number(n.status??0)!==200)return null;const s=typeof n.data=="string"?WV(n.data):n.data;if(!s||typeof s!="object"||s.ok!==!0)return null;const c=s,i=typeof c.name=="string"&&c.name?c.name:void 0;return{url:e,name:i}}catch{return null}}async function Tb(e={}){const{savedUrls:a=[],isCancelled:n=()=>!1,onProgress:s,concurrency:c=PV}=e,i=FV(a),d=i.length;if(s?.(0,d),d===0)return[];const r=[];let l=0,p=0;const g=async()=>{for(;;){if(n())return;const k=l;if(l+=1,k>=d)return;const y=await UV(i[k],EV);p+=1,s?.(p,d),y&&r.push(y)}},m=[],x=Math.max(1,Math.min(c,d));for(let k=0;k<x;k+=1)m.push(g());return await Promise.all(m),r}function GV(){const e=ke(),a=ze(j=>j.add),[n,s]=u.useState(""),[c,i]=u.useState({kind:"idle"}),[d,r]=u.useState(!1),[l,p]=u.useState({phase:"idle"}),g=u.useRef(!1);u.useEffect(()=>()=>{g.current=!0},[]);const m=n.trim()?Je(n):null,x=async j=>{const w=Je(j);if(w.ok){r(!0),i({kind:"probing"});try{const N=await V1({id:"tmp",alias:"",url:w.url,createdAt:""});i(N)}catch{i({kind:"error",error:void 0})}r(!1)}},k=async()=>{m?.ok&&await x(m.url)},y=()=>{if(l.phase==="scanning")return;g.current=!1,p({phase:"scanning",done:0,total:0});const j=ze.getState().servers.map(w=>w.url);Tb({savedUrls:j,isCancelled:()=>g.current,onProgress:(w,N)=>p(R=>R.phase==="scanning"?{...R,done:w,total:N}:R)}).then(w=>{if(g.current){p({phase:"idle"});return}p({phase:"done",hits:w})})},M=j=>{s(j.url),i({kind:"idle"}),p({phase:"idle"}),x(j.url)},f=async()=>{await Ee.getState().setOfflineMode(!0),e("/home",{replace:!0})},z=async()=>{if(!m?.ok)return;const j=await a({alias:"我的服务器",url:m.url});ze.setState({currentId:j.id}),e("/login")},V=c.kind==="online",S=l.phase==="scanning";return t.jsxs("div",{className:"flex min-h-full flex-col bg-surface-2 text-ink",children:[t.jsxs("div",{className:"flex flex-col items-center px-6 pb-6 pt-14",style:{paddingTop:"calc(env(safe-area-inset-top) + 3rem)"},children:[t.jsx("div",{className:"flex h-16 w-16 items-center justify-center rounded-3xl bg-accent text-3xl font-bold text-white shadow-lg shadow-accent/25",children:"纳"}),t.jsx("h1",{className:"mt-4 text-xl font-bold",children:"纳物"}),t.jsx("p",{className:"mt-1 text-sm text-ink-3",children:"物品与消费复盘"})]}),t.jsxs("div",{className:"mx-auto w-full max-w-md flex-1 px-6",children:[t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("label",{className:"text-sm font-medium",children:"服务器地址"}),t.jsx("p",{className:"mt-0.5 text-xs text-ink-3",children:"例如 http://192.168.1.10:3030"}),t.jsx("input",{value:n,onChange:j=>{s(j.target.value),i({kind:"idle"})},placeholder:"http://",inputMode:"url",autoCapitalize:"off",autoCorrect:"off",className:"mt-2 h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"}),n.trim()&&m&&!m.ok?t.jsx("p",{className:"mt-1.5 text-xs",style:{color:"var(--fou)"},children:m.reason}):null,t.jsx("button",{onClick:k,disabled:!m?.ok||d,className:"mt-3 h-10 w-full rounded-btn bg-accent-soft text-sm font-medium text-accent disabled:opacity-40",children:d?"正在连接…":"测试连接"}),t.jsx("button",{onClick:y,disabled:S||d,className:"mt-2 h-10 w-full rounded-btn border border-line text-sm text-ink-2 disabled:opacity-40",children:S?`正在扫描…已探测 ${l.done} / ${l.total}`:"扫描局域网"}),S?t.jsx("button",{onClick:()=>{g.current=!0},className:"mt-2 h-9 w-full text-sm text-ink-3",children:"停止"}):null,l.phase==="done"?l.hits.length===0?t.jsx("p",{className:"mt-2 text-xs text-ink-3",children:"未发现服务端，请检查网络或手动输入"}):t.jsxs("div",{className:"mt-2",children:[t.jsxs("p",{className:"text-xs font-medium",children:["发现 ",l.hits.length," 台服务端，点击使用："]}),t.jsx("ul",{className:"mt-1.5 space-y-1.5",children:l.hits.map(j=>t.jsx("li",{children:t.jsxs("button",{onClick:()=>M(j),className:"w-full rounded-btn border border-line bg-surface-2 px-3 py-2 text-left active:opacity-80",children:[t.jsx("span",{className:"block truncate text-xs font-medium",style:{color:"var(--gui)"},children:j.url}),j.name?t.jsx("span",{className:"block truncate text-[11px] text-ink-3",children:j.name}):null]})},j.url))})]}):null,l.phase!=="idle"&&!Pb()?t.jsx("p",{className:"mt-2 text-[11px] text-ink-3",children:"网页环境受浏览器跨域限制，可能扫不到服务端；请使用 App 内的扫描功能。"}):null,c.kind==="online"?t.jsxs("p",{className:"mt-2 text-xs",style:{color:"var(--gui)"},children:["✓ 连接成功",c.dbOk?"":"（但服务端数据库异常）"]}):null,c.kind==="error"?t.jsxs("p",{className:"mt-2 text-xs",style:{color:"var(--fou)"},children:["✗ ",c.error.message]}):null]}),t.jsx("button",{onClick:z,disabled:!V,className:"mt-4 h-12 w-full rounded-btn bg-accent text-base font-semibold text-white active:opacity-90 disabled:opacity-40",children:"连接并继续"}),t.jsx("button",{onClick:()=>void f(),className:"mt-3 h-10 w-full text-sm text-ink-3",children:"先离线用，稍后再配置 →"}),t.jsxs("p",{className:"mt-6 text-center text-xs leading-5 text-ink-3",children:["数据保存在本机，服务器仅用于云备份。",t.jsx("br",{}),"未登录也可以使用全部记账功能。"]})]})]})}function He({title:e,subtitle:a,onBack:n,right:s,children:c}){const i=ke(),d=n??(()=>i(-1));return t.jsxs("div",{className:"min-h-full bg-surface-2 text-ink",children:[t.jsxs("header",{className:"sticky top-0 z-20 flex items-center gap-2 border-b border-line px-3",style:{paddingTop:"env(safe-area-inset-top)",background:"color-mix(in srgb, var(--surface) 62%, transparent)",backdropFilter:"blur(24px) saturate(170%)",WebkitBackdropFilter:"blur(24px) saturate(170%)"},children:[t.jsx("button",{onClick:d,className:"-ml-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-btn text-xl text-ink-2 active:bg-surface-2","aria-label":"返回",children:"‹"}),t.jsxs("div",{className:"min-w-0 flex-1 py-2.5",children:[t.jsx("h1",{className:"truncate text-base font-semibold",children:e}),a?t.jsx("p",{className:"truncate text-xs text-ink-3",children:a}):null]}),s?t.jsx("div",{className:"flex shrink-0 items-center",children:s}):null]}),t.jsx("main",{className:"mx-auto w-full max-w-xl px-4 pb-10 pt-3",children:c})]})}function te({label:e,hint:a,children:n}){return t.jsxs("label",{className:"block",children:[t.jsx("span",{className:"text-xs font-medium text-ink-2",children:e}),t.jsx("div",{className:"mt-1.5",children:n}),a?t.jsx("span",{className:"mt-1 block text-xs text-ink-3",children:a}):null]})}const E1="/home",YV=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;function Rb(e){return e.replace(/[０-９]/g,a=>String.fromCharCode(a.charCodeAt(0)-65248)).replace(/[^0-9]/g,"").slice(0,8)}function Oe(e){return e.current?.value??""}function P1(e){const a=Oe(e).trim();return YV.test(a)?a:(J("邮箱格式不正确，请检查后重试"),e.current?.focus(),null)}function T1({inputRef:e,seed:a,onFilledChange:n}){return t.jsx("input",{ref:e,defaultValue:a,onInput:s=>n?.(s.currentTarget.value.trim().length>0),type:"text",inputMode:"email",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,enterKeyHint:"done",placeholder:"you@example.com",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}function ka({inputRef:e,placeholder:a,onFilledChange:n}){return t.jsx("input",{ref:e,onInput:s=>n?.(s.currentTarget.value.length>0),type:"password",placeholder:a,className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}function Ob({emailRef:e,codeRef:a,purpose:n,emailFilled:s}){return t.jsx(te,{label:"邮箱验证码",hint:"每次重新发送后，旧验证码立即失效，请用最新一封邮件",children:t.jsxs("div",{className:"flex gap-2",children:[t.jsx("input",{ref:a,type:"text",inputMode:"numeric",autoComplete:"one-time-code",maxLength:8,placeholder:"6 位数字",className:"h-11 flex-1 rounded-btn border border-line bg-surface-2 px-3 text-sm tracking-[0.3em] outline-none focus:border-accent"}),t.jsx(ZV,{emailRef:e,purpose:n,emailFilled:s,onSent:()=>{a.current&&(a.current.value="")}})]})})}function ZV({emailRef:e,purpose:a,emailFilled:n,onSent:s}){const c=_e(m=>m.sendCode),[i,d]=u.useState(0),[r,l]=u.useState(!1),p=u.useRef(null);u.useEffect(()=>()=>{p.current&&clearInterval(p.current)},[]);const g=async()=>{if(r||i>0)return;const m=Oe(e).trim();if(m){l(!0);try{await c(m,a),K("验证码已发送，注意查收（可能在垃圾邮件里）"),s(),d(60),p.current&&clearInterval(p.current),p.current=setInterval(()=>{d(x=>(x<=1&&p.current&&clearInterval(p.current),x<=1?0:x-1))},1e3)}catch(x){J(x.message)}l(!1)}};return t.jsx("button",{onClick:()=>void g(),disabled:r||i>0||!n,className:"h-11 w-28 shrink-0 rounded-btn bg-accent-soft text-xs font-medium text-accent disabled:opacity-40",children:r?"发送中…":i>0?`${i}s 后重发`:"发送验证码"})}function KV({emailRef:e,emailSeed:a}){const n=ke(),s=_e(x=>x.login),c=u.useRef(null),[i,d]=u.useState(!1),[r,l]=u.useState(a.trim().length>0),[p,g]=u.useState(!1),m=async()=>{if(i)return;const x=P1(e);if(x===null)return;const k=Oe(c);if(k){d(!0);try{await s(x,k),K("登录成功"),n(E1,{replace:!0})}catch(y){J(y.message)}d(!1)}};return t.jsxs(t.Fragment,{children:[t.jsx(te,{label:"邮箱",children:t.jsx(T1,{inputRef:e,seed:a,onFilledChange:l})}),t.jsx(te,{label:"密码",children:t.jsx(ka,{inputRef:c,placeholder:"密码",onFilledChange:g})}),t.jsx("button",{onClick:()=>void m(),disabled:i||!r||!p,className:"mt-1 h-12 w-full rounded-btn bg-accent text-base font-semibold text-white active:opacity-90 disabled:opacity-40",children:i?"请稍候…":"登录"})]})}function JV({emailRef:e,emailSeed:a}){const n=ke(),s=_e(y=>y.register),c=u.useRef(null),i=u.useRef(null),d=u.useRef(null),[r,l]=u.useState(!1),[p,g]=u.useState(a.trim().length>0),[m,x]=u.useState(!1),k=async()=>{if(r)return;const y=P1(e);if(y===null)return;const M=Oe(c),f=Oe(i);if(M.length<6){J("密码至少 6 位");return}if(M!==f){J("两次输入的密码不一致");return}const z=Rb(Oe(d)).trim();l(!0);try{await s(y,M,z||void 0),K("注册成功，已自动登录"),n(E1,{replace:!0})}catch(V){J(V.message)}l(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(te,{label:"邮箱",children:t.jsx(T1,{inputRef:e,seed:a,onFilledChange:g})}),t.jsx(Ob,{emailRef:e,codeRef:d,purpose:"register",emailFilled:p}),t.jsx(te,{label:"密码",children:t.jsx(ka,{inputRef:c,placeholder:"密码",onFilledChange:x})}),t.jsx(te,{label:"确认密码",children:t.jsx(ka,{inputRef:i,placeholder:"再输一次"})}),t.jsx("button",{onClick:()=>void k(),disabled:r||!p||!m,className:"mt-1 h-12 w-full rounded-btn bg-accent text-base font-semibold text-white active:opacity-90 disabled:opacity-40",children:r?"请稍候…":"注册并登录"})]})}function XV({emailRef:e,emailSeed:a,onSwitchToLogin:n}){const s=_e(k=>k.resetPassword),c=u.useRef(null),i=u.useRef(null),[d,r]=u.useState(!1),[l,p]=u.useState(a.trim().length>0),[g,m]=u.useState(!1),x=async()=>{if(d)return;const k=P1(e);if(k===null)return;const y=Oe(c);if(y.length<6){J("新密码至少 6 位");return}const M=Rb(Oe(i)).trim();r(!0);try{await s(k,M,y),K("密码已重置，请用新密码登录"),n()}catch(f){J(f.message)}r(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(te,{label:"邮箱",children:t.jsx(T1,{inputRef:e,seed:a,onFilledChange:p})}),t.jsx(Ob,{emailRef:e,codeRef:i,purpose:"reset",emailFilled:l}),t.jsx(te,{label:"新密码",children:t.jsx(ka,{inputRef:c,placeholder:"至少 6 位",onFilledChange:m})}),t.jsx("button",{onClick:()=>void x(),disabled:d||!l||!g,className:"mt-1 h-12 w-full rounded-btn bg-accent text-base font-semibold text-white active:opacity-90 disabled:opacity-40",children:d?"请稍候…":"重置密码"})]})}function Ya({initialMode:e="login"}){const a=ke(),[n,s]=u.useState(e),c=u.useRef(null),[i,d]=u.useState(""),r=[["login","登录"],["register","注册"],["reset","找回密码"]],l=p=>{p!==n&&(d(Oe(c)),s(p))};return t.jsxs(He,{title:n==="login"?"登录":n==="register"?"注册":"找回密码",onBack:()=>a(E1,{replace:!0}),children:[t.jsx("div",{className:"mb-4 flex gap-1 rounded-btn bg-surface-2 p-1",children:r.map(([p,g])=>t.jsx("button",{onClick:()=>l(p),className:`h-9 flex-1 rounded-btn text-sm ${n===p?"bg-surface font-semibold text-ink shadow-sm":"text-ink-3"}`,children:g},p))}),t.jsx("div",{className:"space-y-3 rounded-card border border-line bg-surface p-4",children:n==="login"?t.jsx(KV,{emailRef:c,emailSeed:i},"login"):n==="register"?t.jsx(JV,{emailRef:c,emailSeed:i},"register"):t.jsx(XV,{emailRef:c,emailSeed:i,onSwitchToLogin:()=>l("login")},"reset")}),t.jsxs("p",{className:"mt-4 text-center text-xs leading-5 text-ink-3",children:["登录后数据可云备份、跨设备恢复。",t.jsx("br",{}),"不登录也能正常记账，数据保存在本机。"]})]})}function QV(){const e=ke(),{servers:a,currentId:n,setCurrent:s,remove:c,add:i}=ze(),[d,r]=u.useState({phase:"idle"}),[l,p]=u.useState(null),[g,m]=u.useState(!1),x=u.useRef(!1);u.useEffect(()=>()=>{x.current=!0},[]);const k=async S=>{S!==n&&(await s(S),K("已切换服务器"))},y=async S=>{await fe.getState().confirm({title:"删除这个服务器？",message:"只删除连接配置，不影响服务器上的数据。"})&&(await c(S),K("已删除"))},M=()=>{if(d.phase==="scanning")return;x.current=!1,p(null),r({phase:"scanning",done:0,total:0});const S=a.map(j=>j.url);Tb({savedUrls:S,isCancelled:()=>x.current,onProgress:(j,w)=>r(N=>N.phase==="scanning"?{...N,done:j,total:w}:N)}).then(j=>{if(x.current){r({phase:"idle"});return}r({phase:"done",hits:j})})},f=S=>{p({url:S.url,name:S.name}),r({phase:"idle"})},z=async()=>{if(!l||g)return;const S=Je(l.url);if(!S.ok){Ga("地址格式不正确，请手动输入");return}if(a.some(w=>w.url===S.url)){Ga("已存在相同地址的服务器，无需重复添加"),p(null);return}m(!0);try{const w=await i({alias:l.name||"扫描到的服务器",url:S.url});await s(w.id),K("已添加并切换到新服务器"),p(null)}catch{Ga("添加失败，请重试或手动输入")}m(!1)},V=d.phase==="scanning";return t.jsxs(He,{title:"服务器管理",right:t.jsx("button",{onClick:()=>e("/servers/new"),className:"h-9 rounded-btn bg-accent px-3 text-sm font-medium text-white",children:"新增"}),children:[t.jsx("button",{onClick:M,disabled:V,className:"mb-3 h-10 w-full rounded-btn border border-line bg-surface text-sm text-ink-2 disabled:opacity-40",children:V?`正在扫描…已探测 ${d.done} / ${d.total}`:t.jsxs("span",{className:"flex items-center justify-center gap-1.5",children:[t.jsx(D1,{size:16,strokeWidth:1.8,"aria-hidden":!0}),"扫描局域网"]})}),V?t.jsx("button",{onClick:()=>{x.current=!0},className:"mb-3 h-8 w-full text-sm text-ink-3",children:"停止"}):null,d.phase==="done"?d.hits.length===0?t.jsx("p",{className:"mb-3 text-center text-xs text-ink-3",children:"未发现服务端，请检查网络或手动输入"}):t.jsx("ul",{className:"mb-3 space-y-1.5",children:d.hits.map(S=>t.jsx("li",{children:t.jsxs("button",{onClick:()=>f(S),className:"w-full rounded-btn border border-line bg-surface px-3 py-2 text-left active:opacity-80",children:[t.jsx("span",{className:"block truncate text-xs font-medium",style:{color:"var(--gui)"},children:S.url}),S.name?t.jsx("span",{className:"block truncate text-[11px] text-ink-3",children:S.name}):null,t.jsx("span",{className:"block text-[11px] text-ink-3",children:"点击保存为新服务器"})]})},S.url))}):null,d.phase!=="idle"&&!Pb()?t.jsx("p",{className:"mb-3 text-[11px] text-ink-3",children:"网页环境受浏览器跨域限制，可能扫不到服务端；请使用 App 内的扫描功能。"}):null,l?t.jsxs("div",{className:"mb-3 rounded-card border border-accent bg-surface p-4",children:[t.jsx("p",{className:"text-sm font-medium",children:"将添加服务器"}),t.jsx("p",{className:"mt-1 truncate text-xs",style:{color:"var(--gui)"},children:l.url}),t.jsxs("div",{className:"mt-3 flex gap-2",children:[t.jsx("button",{onClick:()=>void z(),disabled:g,className:"h-10 flex-1 rounded-btn bg-accent text-sm font-semibold text-white disabled:opacity-40",children:g?"正在保存…":"保存"}),t.jsx("button",{onClick:()=>p(null),className:"h-10 flex-1 rounded-btn border border-line text-sm text-ink-2",children:"取消"})]})]}):null,a.length===0?t.jsxs("div",{className:"rounded-card border border-dashed border-line bg-surface p-8 text-center text-sm text-ink-3",children:["还没有配置服务器。",t.jsx("br",{}),"不配置也可以离线记账。"]}):t.jsx("ul",{className:"space-y-2",children:a.map(S=>t.jsx("li",{children:t.jsxs("div",{className:`flex items-center gap-3 rounded-card border bg-surface p-3.5 ${S.id===n?"border-accent":"border-line"}`,children:[t.jsxs("button",{onClick:()=>k(S.id),className:"min-w-0 flex-1 text-left",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("span",{className:"truncate text-sm font-semibold",children:S.alias||"未命名服务器"}),S.id===n?t.jsx("span",{className:"rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-medium text-accent",children:"当前"}):null,S.lastOk===!1?t.jsx("span",{className:"text-xs",style:{color:"var(--fou)"},children:"离线"}):null]}),t.jsx("p",{className:"mt-0.5 truncate text-xs text-ink-3",children:Nb(S.url)})]}),t.jsx("button",{onClick:()=>e(`/servers/${S.id}`),className:"h-8 rounded-btn border border-line px-2.5 text-xs text-ink-2",children:"编辑"}),t.jsx("button",{onClick:()=>y(S.id),className:"h-8 rounded-btn border border-line px-2.5 text-xs",style:{color:"var(--fou)"},children:"删除"})]})},S.id))})]})}function zs(){const e=ke(),{id:a}=cc(),n=ze(z=>z.servers.find(V=>V.id===a)),{add:s,update:c,setCurrent:i}=ze.getState(),[d,r]=u.useState(n?.alias??""),[l,p]=u.useState(n?.url??""),[g,m]=u.useState({kind:"idle"}),[x,k]=u.useState(!1),y=l.trim()?Je(l):null,M=async()=>{if(y?.ok){k(!0),m({kind:"probing"});try{m(await V1({id:"tmp",alias:"",url:y.url,createdAt:""}))}catch(z){m({kind:"error",error:z})}k(!1)}},f=async()=>{if(!y?.ok){J(y?.reason??"请填写服务器地址");return}try{if(n)await c(n.id,{alias:d.trim()||"我的服务器",url:y.url}),K("已保存");else{const z=await s({alias:d.trim()||"我的服务器",url:y.url});await i(z.id),K("已添加并设为当前服务器")}e("/servers",{replace:!0})}catch(z){J(z.message)}};return t.jsx(He,{title:n?"编辑服务器":"新增服务器",children:t.jsxs("div",{className:"space-y-3 rounded-card border border-line bg-surface p-4",children:[t.jsx(te,{label:"备注名",hint:"随便起，方便区分多台服务器",children:t.jsx("input",{value:d,onChange:z=>r(z.target.value),placeholder:"例如：家里的小主机",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"服务器地址",hint:y?.ok?Nb(y.url):"例如 http://192.168.1.10:3030",children:t.jsx("input",{value:l,onChange:z=>{p(z.target.value),m({kind:"idle"})},inputMode:"url",autoCapitalize:"off",placeholder:"http://",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),l.trim()&&y&&!y.ok?t.jsx("p",{className:"text-xs",style:{color:"var(--fou)"},children:y.reason}):null,t.jsx("button",{onClick:M,disabled:!y?.ok||x,className:"h-10 w-full rounded-btn bg-accent-soft text-sm font-medium text-accent disabled:opacity-40",children:x?"正在连接…":"测试连接"}),g.kind==="online"?t.jsxs("p",{className:"text-xs",style:{color:"var(--gui)"},children:["✓ 连接成功",g.dbOk?"":"（但服务端数据库异常）"]}):null,g.kind==="error"?t.jsxs("p",{className:"text-xs",style:{color:"var(--fou)"},children:["✗ ",g.error.message]}):null,t.jsx("button",{onClick:f,disabled:!y?.ok,className:"h-12 w-full rounded-btn bg-accent text-base font-semibold text-white active:opacity-90 disabled:opacity-40",children:"保存"})]})})}const tt=[];let $s=0;function eI(e){if(typeof window>"u"||!window.history?.pushState)return()=>{};try{window.history.pushState({gfSheet:Date.now()},"")}catch{return()=>{}}const a={onClose:e};tt.push(a);let n=!1;const s=()=>{if(Date.now()<$s||tt[tt.length-1]!==a)return;const c=tt.indexOf(a);c!==-1&&tt.splice(c,1),n=!0,window.removeEventListener("popstate",s),e()};return window.addEventListener("popstate",s),()=>{window.removeEventListener("popstate",s);const c=tt.indexOf(a);if(c!==-1&&tt.splice(c,1),!n){$s=Date.now()+150;try{window.history.back()}catch{}}}}function wt(e,a){u.useEffect(()=>{if(e)return eI(a)},[e])}const Za=[{key:"basic",label:"日用",items:["a-large-small","accessibility","ad","air-vent","alarm-clock","alert-octagon","alert-triangle","ambulance","angle","anvil","archive","archive-restore","archive-x","armenian-dram","astroid","atom","axis3-d","axis3d","baggage-claim","balloon","ban","bandage","bangladeshi-taka","banknote","battery","battery-charging","beaker","bean","bean-off","beef","beef-off","bell","bell-ring","between-horizonal-end","between-horizonal-start","between-horizontal-end","between-horizontal-start","between-vertical-end","between-vertical-start","biceps-flexed","binary","binoculars","biohazard","birdhouse","bitcoin","blend","blocks","bomb","bone","bone-fracture","book","book-a","book-alert","book-audio","book-bookmark","book-check","book-copy","book-dashed","book-down","book-headphones","book-heart","book-image","book-key","book-lock","book-marked","book-minus","book-open","book-open-check","book-open-text","book-plus","book-search","book-template","book-text","book-type","book-up","book-up2","book-user","book-x","bookmark","boom-box","box","box-select","boxes","brain","brain-cog","brick-wall-fire","brick-wall-shield","bridge","broccoli","broom","building","building-complex","building-complex-plus","building2","cable","calculator","calendar","can","candlestick-chart","cannabis","cannabis-off","chart-candlestick","chart-scatter","chess-bishop","chess-pawn","cigarette","cigarette-off","clef-alto","clef-treble","clipboard","clipboard-list","clock","coins","command","component","computer","concierge-bell","construction","contact","container","contrast","corner-down-left","corner-down-right","corner-left-down","corner-left-up","corner-right-down","corner-right-up","corner-up-left","corner-up-right","creative-commons","credit-card","cross","cuboid","curly-braces","currency","dam","delete","dessert","diameter","diff","divide","divide-square","dna","dna-off","dock","dome","door-closed","door-open","dot","dot-square","download","download-cloud","droplet","droplets","ear","ear-off","earth-lock","eclipse","edit","edit2","edit3","eject","ellipse","engine","equal","equal-approximately","equal-approximately-not","equal-not","equal-square","eraser","ethernet-port","euro","face-angry","face-expressionless","face-grinning","face-neutral","face-slightly-smiling","face-slightly-smiling-plus","factory","fan","faucet","file","file-archive","file-audio","file-audio2","file-axis3-d","file-axis3d","file-badge","file-badge2","file-bar-chart","file-bar-chart2","file-box","file-braces","file-braces-corner","file-chart-column","file-chart-column-increasing","file-chart-line","file-chart-pie","file-check","file-check-corner","file-check2","file-clock","file-code","file-code-corner","file-code2","file-cog","file-cog2","file-diff","file-digit","file-down","file-edit","file-exclamation-point","file-headphone","file-heart","file-image","file-input","file-json","file-json2","file-key","file-key2","file-line-chart","file-lock","file-lock2","file-minus","file-minus-corner","file-minus2","file-music","file-output","file-pen","file-pen-line","file-pie-chart","file-play","file-plus","file-plus-corner","file-plus2","file-question","file-question-mark","file-scan","file-search","file-search-corner","file-search2","file-signal","file-signature","file-sliders","file-spreadsheet","file-stack","file-symlink","file-terminal","file-text","file-type","file-type-corner","file-type2","file-up","file-user","file-video","file-video-camera","file-video2","file-volume","file-volume2","file-warning","file-x","file-x-corner","file-x2","files","filter","filter-x","fingerprint","fire-extinguisher","flame","flashlight","flashlight-off","fold-horizontal","fold-vertical","folder","folder-archive","folder-bookmark","folder-check","folder-clock","folder-closed","folder-code","folder-cog","folder-cog2","folder-dot","folder-down","folder-edit","folder-git","folder-git2","folder-heart","folder-input","folder-kanban","folder-key","folder-lock","folder-minus","folder-open","folder-open-dot","folder-output","folder-pen","folder-plus","folder-root","folder-search","folder-search2","folder-symlink","folder-sync","folder-tree","folder-up","folder-x","folders","form","form-input","function-square","funnel","funnel-plus","funnel-x","galaxy","gap-horizontal","gap-vertical","gavel","georgian-lari","germ","germ-off","ghost","gift","git-branch","git-branch-minus","git-branch-plus","git-commit","git-commit-horizontal","git-commit-vertical","git-compare","git-graph","git-merge","git-merge-conflict","git-pull-request","git-pull-request-closed","git-pull-request-create","git-pull-request-draft","glasses","globe","globe-check","globe-code","globe-lock","globe-off","globe-x","globe2","goal","gpu","grid","grid2-x2","grid2-x2-check","grid2-x2-plus","grid2-x2-x","grid2x2","grid2x2-check","grid2x2-plus","grid2x2-x","grid3-x3","grid3x2","grid3x3","group","hand","haze","hd","hdmi-port","heart-pulse","history","home","hop","hop-off","hospital","hotel","hourglass","house","house-cog","house-heart","house-plug","house-plus","houses","import","indian-rupee","info","inspect","iteration-ccw","iteration-cw","iv-bag","kanban","kanban-square","kanban-square-dashed","kazakh-tenge","key","key-round","lambda","land-plot","lasso","lasso-select","layers-minus","layers-plus","layers2","layers3","leaf","leafy-green","lectern","lens-concave","lens-convex","ligature","lightbulb","lighthouse","line-dot-left-horizontal","line-dot-right-horizontal","line-dot-top-vertical","line-squiggle","line-style","loader","loader2","locate","locate-fixed","locate-off","location-edit","lock","lollipop","m-square","magnet","mars","mars-stroke","maximize","maximize2","menu","menu-square","merge","minimize","minimize2","mop","mosque","mouth","mouth-off","nepali-rupee","network","newspaper","nfc","non-binary","notebook","notebook-pen","notepad-text","notepad-text-dashed","option","orbit","package","package-open","palmtree","paper-bag","paperclip","parasol","park","parking-meter","paw-print","pc-case","pen","pencil","phi","philippine-peso","pi","pi-square","picture-in-picture","picture-in-picture2","piggy-bank","pill","pill-bottle","pin","pin-off","plant-pot","plug","podium","pointer","pointer-off","popsicle","pound-sterling","presentation","pyramid","radiation","radical","radius","rat","receipt","recycle","refresh-ccw","refresh-ccw-dot","refresh-cw","refresh-cw-off","remove-formatting","replace","replace-all","roller-coaster","rose","rss","ruler","russian-ruble","saudi-riyal","save","save-all","save-check","save-off","save-pen","save-plus","scale","scaling","scatter-chart","school","school2","scissors","scroll","scroll-text","section","separator-horizontal","separator-vertical","sheet","shell","shelving-unit","shield","shield-check","shopping-bag","shopping-cart","shower-head","shredder","shrub","sidebar","sidebar-close","sidebar-open","sigma","sigma-square","skull","slice","smile","sort-asc","sort-desc","sparkle","sparkles","spell-check","spell-check2","spline","spline-pointer","split","split-square-horizontal","split-square-vertical","spool","spray-can","sprout","stamp","stethoscope","sticky-note","sticky-note-check","sticky-note-minus","sticky-note-off","sticky-note-plus","sticky-note-x","sticky-notes","stone","store","subtitles","summary","swatch-book","swiss-franc","sword","syringe","tag","tally1","tally2","tally3","tally4","tally5","tangent","telescope","thermometer","thumbs-down","thumbs-up","tic-tac-toe","ticket","timeline","timer","toggle-left","toggle-right","toilet","toothbrush","toothbrush-sparkles","tornado","torus","tower-control","tractor","transgender","tree-deciduous","tree-palm","tree-pine","trees","trending-down","trending-up","trending-up-down","turkish-lira","umbrella","umbrella-off","unfold-horizontal","unfold-vertical","ungroup","university","unlock","unlock-keyhole","unplug","upload","upload-cloud","usb","utility-pole","variable","vault","vector-polygon","vector-square","vegan","venus","venus-and-mars","verified","vibrate","vibrate-off","view","virus","virus-off","voicemail","vote","wallet","wand-sparkles","waypoints","whole-word","wind","workflow","worm","wrap-text","x-line-top","x-octagon","x-square","zodiac-aquarius","zodiac-aries","zodiac-cancer","zodiac-gemini","zodiac-leo","zodiac-libra","zodiac-ophiuchus","zodiac-pisces","zodiac-sagittarius","zodiac-scorpio","zodiac-taurus","zodiac-virgo"]},{key:"digital",label:"数码",items:["antenna","bluetooth","bot","brain-circuit","camera","cctv","cctv-off","circuit-board","cpu","drone","ev-charger","gamepad","hard-drive","house-wifi","joystick","keyboard","laptop","laptop-minimal","laptop-minimal-check","laptop2","line-dot-bottom-vertical","memory-stick","monitor","monitor-smartphone","mouse","panel-bottom","panel-bottom-close","panel-bottom-dashed","panel-bottom-inactive","panel-bottom-open","panel-top-bottom-dashed","panels-left-bottom","panels-right-bottom","panels-top-bottom","phone","phone-call","phone-forwarded","phone-incoming","phone-missed","phone-off","phone-outgoing","power","power-circle","power-off","power-square","printer","projector","qr-code","radar","router","satellite","satellite-dish","scan-line","screen-share","screen-share-off","server","signal","smartphone","smartphone-charging","smartphone-nfc","switch-camera","tablet","tv","tv-minimal-play","video","webcam","wifi"]},{key:"dianqi",label:"电器",items:["airplay","battery-full","cast","heater","microwave","plug-zap","refrigerator","theater","washing-machine","zap"]},{key:"furniture",label:"家具",items:["app-window","app-window-mac","armchair","bed","bed-double","bed-single","blinds","drama","frame","gallery-horizontal","lamp","lamp-ceiling","lamp-desk","lamp-floor","lamp-wall-up","mirror-rectangular","mirror-round","rocking-chair","rugby-ball","sofa","tent","towel-rack","turntable","warehouse","waves"]},{key:"kitchen",label:"厨房",items:["amphora","apple","banana","beer","blender","cake","cake-slice","can-soda","candy","candy-cane","carrot","chef-hat","cherry","citrus","coffee","cookie","cooking-pot","croissant","cup-soda","drumstick","egg","egg-fried","fish","fish-symbol","fork-knife","fork-knife-crossed","forklift","git-fork","glass-water","grape","ham","hat-glasses","ice-cream-bowl","ice-cream-cone","inspection-panel","japanese-yen","martini","milk","panda","panel-left","panel-left-close","panel-left-dashed","panel-left-inactive","panel-left-open","panel-left-right-dashed","panel-right","panel-right-close","panel-right-dashed","panel-right-inactive","panel-right-open","panel-top","panel-top-close","panel-top-dashed","panel-top-inactive","panel-top-open","panels-left-right","panels-top-left","pizza","pocket-knife","popcorn","salad","sandwich","shrimp","sliders","sliders-horizontal","sliders-vertical","solar-panel","soup","spotlight","utensils","utensils-crossed","wheat","wine"]},{key:"clothing",label:"衣物",items:["badge","captions","captions-off","closed-caption","crown","ferris-wheel","footprints","graduation-cap","hard-hat","layers","loader-pinwheel","medal","ribbon","shirt","shopping-basket","snowflake","sport-shoe","zodiac-capricorn"]},{key:"cosmetic",label:"美妆",items:["bath","broom-sparkles","brush","chart-no-axes-combined","combine","crosshair","flask-conical","flower","gem","heart","mop-sparkles","paintbrush","snail","space","sun","sun-medium","test-tube","tube-lotion","venetian-mask"]},{key:"jewelry",label:"首饰",items:["award","bring-to-front","clover","diamond","eye","heart-handshake","infinity","link","moon","star","watch"]},{key:"traffic",label:"交通",items:["anchor","baby","bike","bus","bus-front","car","car-front","car-taxi-front","cloud-rain","compass","drafting-compass","flag","flag-triangle-right","fuel","gauge","helicopter","life-buoy","luggage","map","map-pin","metronome","milestone","motorbike","mountain","navigation","parking-circle","parking-circle-off","parking-square","parking-square-off","plane","plane-landing","plane-takeoff","road","rocket","route","sailboat","scooter","ship","signpost","siren","traffic-cone","trailer","train-front","train-track","tram-front","truck","van"]},{key:"tools",label:"工具",items:["axe","barrel","bolt","briefcase","cassette-tape","chart-no-axes-column","chart-no-axes-column-decreasing","chart-no-axes-column-increasing","chart-no-axes-gantt","cog","cone","cylinder","donut","drill","hammer","nut","nut-off","paint-bucket","paint-roller","pencil-ruler","pickaxe","pipette","settings","shovel","tool-case","toolbox","webhook","webhook-off","wrench","wrench-off"]},{key:"sports",label:"运动",items:["a-arrow-down","a-arrow-up","activity","backpack","bow-arrow","decimals-arrow-left","decimals-arrow-right","dumbbell","face-slightly-frowning","fence","git-compare-arrows","git-pull-request-arrow","git-pull-request-create-arrow","helping-hand","kayak","layer-arrow-down","layer-arrow-up","layers-arrow-down","layers-arrow-up","megaphone","swords","target","touchpad","touchpad-off","trophy","volleyball","weight","weight-tilde","whistle","wind-arrow-down","wind-arrow-up"]},{key:"instruments",label:"乐器",items:["album","audio-lines","circle-play","clapperboard","clef-bass","disc","drum","film","guitar","headphones","headset","library","library-big","mic","mic-vocal","midi-port","monitor-play","music","piano","podcast","radio","radio-tower","speaker","square-play","tv-minimal"]},{key:"toys",label:"玩具",items:["alert-circle","barcode","bird","brick-wall","bubbles","bug","cat","chess-king","chess-knight","chess-queen","chess-rook","church","circle-dashed","cloud-sun","club","divide-circle","dog","dollar-sign","grip","help-circle","layout-grid","loader-circle","person-standing","puzzle","rabbit","rainbow","search","search-alert","search-check","search-code","search-slash","search-x","spade","squircle","squircle-dashed","squirrel","sticker","toy-brick","turtle","x-circle"]},{key:"art",label:"艺术",items:["aperture","area-chart","bar-chart","bar-chart-big","bar-chart-horizontal","bar-chart-horizontal-big","bar-chart2","bar-chart3","bar-chart4","chart-area","chart-bar","chart-bar-big","chart-bar-decreasing","chart-bar-increasing","chart-bar-stacked","chart-column","chart-column-big","chart-column-decreasing","chart-column-increasing","chart-column-stacked","chart-gantt","chart-line","chart-network","chart-pie","chart-spline","earth","feather","focus","gallery-vertical","gantt-chart","gantt-chart-square","highlighter","image","image-plus","landmark","line-chart","origami","palette","party-popper","pen-line","pen-tool","pencil-line","pie-chart","shapes","signature","stretch-horizontal","stretch-vertical","wallpaper"]}],tI={"a-large-small":T9,accessibility:R9,ad:B9,"air-vent":vc,"alarm-clock":F9,"alert-octagon":PN,"alert-triangle":uL,ambulance:W9,angle:Y9,anvil:K9,archive:nv,"archive-restore":tv,"archive-x":av,"armenian-dram":sv,astroid:dv,atom:lv,"axis3-d":to,axis3d:to,"baggage-claim":yv,balloon:kv,ban:gv,bandage:xv,"bangladeshi-taka":bv,banknote:vv,battery:jv,"battery-charging":ui,beaker:zv,bean:Dv,"bean-off":$v,beef:Av,"beef-off":Cv,bell:Hv,"bell-ring":Lv,"between-horizonal-end":no,"between-horizonal-start":ao,"between-horizontal-end":no,"between-horizontal-start":ao,"between-vertical-end":Vv,"between-vertical-start":Iv,"biceps-flexed":Ev,binary:Pv,binoculars:Tv,biohazard:Rv,birdhouse:Ov,bitcoin:Wv,blend:Fv,blocks:Gv,bomb:Kv,bone:Xv,"bone-fracture":Jv,book:Mr,"book-a":Qv,"book-alert":eM,"book-audio":tM,"book-bookmark":oo,"book-check":aM,"book-copy":oM,"book-dashed":so,"book-down":nM,"book-headphones":sM,"book-heart":iM,"book-image":cM,"book-key":rM,"book-lock":dM,"book-marked":oo,"book-minus":lM,"book-open":_a,"book-open-check":hM,"book-open-text":pM,"book-plus":mM,"book-search":uM,"book-template":so,"book-text":yM,"book-type":kM,"book-up":xM,"book-up2":fM,"book-user":gM,"book-x":bM,bookmark:vM,"boom-box":MM,box:_M,"box-select":PA,boxes:Sr,brain:Fn,"brain-cog":$M,"brick-wall-fire":DM,"brick-wall-shield":NM,bridge:CM,broccoli:qM,broom:HM,building:PM,"building-complex":co,"building-complex-plus":EM,building2:co,cable:e2,calculator:o2,calendar:FM,can:UM,"candlestick-chart":po,cannabis:KM,"cannabis-off":ZM,"chart-candlestick":po,"chart-scatter":bo,"chess-bishop":uw,"chess-pawn":fw,cigarette:ww,"cigarette-off":Mw,"clef-alto":Vw,"clef-treble":Ew,clipboard:Tw,"clipboard-list":Pw,clock:Rw,coins:Wd,command:Xw,component:Qw,computer:Xd,"concierge-bell":e_,construction:a_,contact:n_,container:o_,contrast:s_,"corner-down-left":i_,"corner-down-right":r_,"corner-left-down":d_,"corner-left-up":l_,"corner-right-down":h_,"corner-right-up":p_,"corner-up-left":m_,"corner-up-right":u_,"creative-commons":k_,"credit-card":Yn,cross:x_,cuboid:b_,"curly-braces":jM,currency:v_,dam:w_,delete:z_,dessert:$_,diameter:D_,diff:N_,divide:C_,"divide-square":TA,dna:q_,"dna-off":A_,dock:L_,dome:I_,"door-closed":E_,"door-open":J0,dot:P_,"dot-square":RA,download:el,"download-cloud":Fw,droplet:cl,droplets:rl,ear:G_,"ear-off":U_,"earth-lock":Y_,eclipse:Z_,edit:KA,edit2:ms,edit3:kn,eject:X_,ellipse:Q_,engine:ej,equal:oj,"equal-approximately":aj,"equal-approximately-not":tj,"equal-not":nj,"equal-square":OA,eraser:sj,"ethernet-port":cj,euro:rj,"face-angry":lj,"face-expressionless":hj,"face-grinning":pj,"face-neutral":mj,"face-slightly-smiling":Mo,"face-slightly-smiling-plus":yj,factory:kj,fan:Tl,faucet:fj,file:Yj,"file-archive":vj,"file-audio":Ba,"file-audio2":Ba,"file-axis3-d":wo,"file-axis3d":wo,"file-badge":_o,"file-badge2":_o,"file-bar-chart":$o,"file-bar-chart2":Do,"file-box":Mj,"file-braces":zo,"file-braces-corner":jo,"file-chart-column":Do,"file-chart-column-increasing":$o,"file-chart-line":No,"file-chart-pie":So,"file-check":wj,"file-check-corner":Co,"file-check2":Co,"file-clock":_j,"file-code":jj,"file-code-corner":Ao,"file-code2":Ao,"file-cog":qo,"file-cog2":qo,"file-diff":zj,"file-digit":$j,"file-down":Dj,"file-edit":Ro,"file-exclamation-point":Lo,"file-headphone":Ba,"file-heart":Nj,"file-image":Sj,"file-input":Cj,"file-json":zo,"file-json2":jo,"file-key":Ho,"file-key2":Ho,"file-line-chart":No,"file-lock":Vo,"file-lock2":Vo,"file-minus":Aj,"file-minus-corner":Io,"file-minus2":Io,"file-music":qj,"file-output":Lj,"file-pen":Ro,"file-pen-line":Eo,"file-pie-chart":So,"file-play":Po,"file-plus":Hj,"file-plus-corner":To,"file-plus2":To,"file-question":Oo,"file-question-mark":Oo,"file-scan":Vj,"file-search":Ij,"file-search-corner":Bo,"file-search2":Bo,"file-signal":Fo,"file-signature":Eo,"file-sliders":Ej,"file-spreadsheet":Tj,"file-stack":Pj,"file-symlink":Rj,"file-terminal":Oj,"file-text":Ih,"file-type":Bj,"file-type-corner":Wo,"file-type2":Wo,"file-up":Fj,"file-user":Wj,"file-video":Po,"file-video-camera":Uo,"file-video2":Uo,"file-volume":Uj,"file-volume2":Fo,"file-warning":Lo,"file-x":Gj,"file-x-corner":Go,"file-x2":Go,files:Zj,filter:Jo,"filter-x":Ko,fingerprint:Kj,"fire-extinguisher":Jj,flame:Jn,flashlight:az,"flashlight-off":tz,"fold-horizontal":cz,"fold-vertical":iz,folder:Vz,"folder-archive":rz,"folder-bookmark":dz,"folder-check":lz,"folder-clock":hz,"folder-closed":pz,"folder-code":mz,"folder-cog":Yo,"folder-cog2":Yo,"folder-dot":uz,"folder-down":yz,"folder-edit":Zo,"folder-git":fz,"folder-git2":kz,"folder-heart":xz,"folder-input":gz,"folder-kanban":bz,"folder-key":vz,"folder-lock":Mz,"folder-minus":wz,"folder-open":jz,"folder-open-dot":_z,"folder-output":zz,"folder-pen":Zo,"folder-plus":$z,"folder-root":Dz,"folder-search":Cz,"folder-search2":Nz,"folder-symlink":Sz,"folder-sync":Az,"folder-tree":qz,"folder-up":Lz,"folder-x":Hz,folders:Iz,form:Pz,"form-input":rC,"function-square":BA,funnel:Jo,"funnel-plus":Oz,"funnel-x":Ko,galaxy:Bz,"gap-horizontal":Gz,"gap-vertical":Yz,gavel:Kz,"georgian-lari":Jz,germ:Qz,"germ-off":Xz,ghost:e$,gift:sa,"git-branch":n$,"git-branch-minus":t$,"git-branch-plus":a$,"git-commit":Xo,"git-commit-horizontal":Xo,"git-commit-vertical":o$,"git-compare":c$,"git-graph":r$,"git-merge":l$,"git-merge-conflict":d$,"git-pull-request":k$,"git-pull-request-closed":h$,"git-pull-request-create":u$,"git-pull-request-draft":y$,glasses:Hm,globe:M$,"globe-check":f$,"globe-code":x$,"globe-lock":g$,"globe-off":b$,"globe-x":v$,globe2:vo,goal:w$,gpu:_$,grid:Fa,"grid2-x2":un,"grid2-x2-check":Qo,"grid2-x2-plus":es,"grid2-x2-x":ts,grid2x2:un,"grid2x2-check":Qo,"grid2x2-plus":es,"grid2x2-x":ts,"grid3-x3":Fa,grid3x2:z$,grid3x3:Fa,group:D$,hand:iu,haze:C$,hd:A$,"hdmi-port":q$,"heart-pulse":ia,history:vC,home:qt,hop:P$,"hop-off":E$,hospital:T$,hotel:R$,hourglass:O$,house:qt,"house-cog":B$,"house-heart":F$,"house-plug":W$,"house-plus":U$,houses:Y$,import:X$,"indian-rupee":Q$,info:tD,inspect:GA,"iteration-ccw":nD,"iteration-cw":oD,"iv-bag":sD,kanban:rD,"kanban-square":FA,"kanban-square-dashed":EA,"kazakh-tenge":lD,key:hD,"key-round":a1,lambda:pD,"land-plot":kD,lasso:gD,"lasso-select":xD,"layers-minus":jD,"layers-plus":zD,layers2:MD,layers3:ns,leaf:ra,"leafy-green":$D,lectern:DD,"lens-concave":ND,"lens-convex":SD,ligature:LD,lightbulb:c1,lighthouse:HD,"line-dot-left-horizontal":ED,"line-dot-right-horizontal":ID,"line-dot-top-vertical":PD,"line-squiggle":TD,"line-style":RD,loader:FD,loader2:ss,locate:GD,"locate-fixed":WD,"locate-off":UD,"location-edit":QD,lock:n4,lollipop:JD,"m-square":WA,magnet:XD,mars:aN,"mars-stroke":tN,maximize:sN,maximize2:oN,menu:rN,"menu-square":UA,merge:dN,minimize:fN,minimize2:kN,mop:wN,mosque:_N,mouth:$N,"mouth-off":zN,"nepali-rupee":SN,network:CN,newspaper:d1,nfc:AN,"non-binary":qN,notebook:LN,"notebook-pen":h5,"notepad-text":VN,"notepad-text-dashed":HN,option:RN,orbit:ON,package:l1,"package-open":FN,palmtree:ks,"paper-bag":dS,paperclip:X5,parasol:lS,park:hS,"parking-meter":pS,"paw-print":sk,"pc-case":uS,pen:ms,pencil:pk,phi:gS,"philippine-peso":bS,pi:$S,"pi-square":JA,"picture-in-picture":NS,"picture-in-picture2":SS,"piggy-bank":qk,pill:p1,"pill-bottle":CS,pin:LS,"pin-off":AS,"plant-pot":IS,plug:Gk,podium:TS,pointer:BS,"pointer-off":OS,popsicle:WS,"pound-sterling":US,presentation:ZS,pyramid:KS,radiation:eC,radical:tC,radius:oC,rat:cC,receipt:M3,recycle:dC,"refresh-ccw":hC,"refresh-ccw-dot":lC,"refresh-cw":N3,"refresh-cw-off":pC,"remove-formatting":mC,replace:uC,"replace-all":yC,"roller-coaster":gC,rose:bC,rss:_C,ruler:Z3,"russian-ruble":zC,"saudi-riyal":CC,save:IC,"save-all":AC,"save-check":qC,"save-off":LC,"save-pen":HC,"save-plus":VC,scale:EC,scaling:PC,"scatter-chart":bo,school:TC,school2:fs,scissors:ff,scroll:FC,"scroll-text":Mf,section:KC,"separator-horizontal":JC,"separator-vertical":XC,sheet:eA,shell:tA,"shelving-unit":aA,shield:Rt,"shield-check":Da,"shopping-bag":Na,"shopping-cart":Zf,"shower-head":sA,shredder:cA,shrub:rA,sidebar:ls,"sidebar-close":is,"sidebar-open":ds,sigma:dA,"sigma-square":eq,skull:uA,slice:yA,smile:Mo,"sort-asc":rv,"sort-desc":cv,sparkle:zA,sparkles:Sa,"spell-check":DA,"spell-check2":$A,spline:SA,"spline-pointer":NA,split:CA,"split-square-horizontal":tq,"split-square-vertical":aq,spool:AA,"spray-can":H8,sprout:HA,stamp:iq,stethoscope:h6,"sticky-note":uq,"sticky-note-check":dq,"sticky-note-minus":lq,"sticky-note-off":hq,"sticky-note-plus":pq,"sticky-note-x":mq,"sticky-notes":yq,stone:kq,store:v1,subtitles:io,summary:gq,"swatch-book":Mq,"swiss-franc":wq,sword:jq,syringe:$q,tag:M1,tally1:Nq,tally2:Sq,tally3:Cq,tally4:Aq,tally5:qq,tangent:Lq,telescope:W6,thermometer:Pq,"thumbs-down":Tq,"thumbs-up":Rq,"tic-tac-toe":Oq,ticket:Bq,timeline:Wq,timer:Uq,"toggle-left":w1,"toggle-right":ix,toilet:Gq,toothbrush:mx,"toothbrush-sparkles":Kq,tornado:Jq,torus:Xq,"tower-control":aL,tractor:oL,transgender:rL,"tree-deciduous":dL,"tree-palm":ks,"tree-pine":lL,trees:hL,"trending-down":pL,"trending-up":Ex,"trending-up-down":mL,"turkish-lira":kL,umbrella:Kx,"umbrella-off":vL,"unfold-horizontal":ML,"unfold-vertical":wL,ungroup:_L,university:fs,unlock:ZD,"unlock-keyhole":YD,unplug:jL,upload:xn,"upload-cloud":Ed,usb:z1,"utility-pole":DL,variable:SL,vault:CL,"vector-polygon":LL,"vector-square":AL,vegan:qL,venus:IL,"venus-and-mars":VL,verified:ei,vibrate:PL,"vibrate-off":EL,view:TL,virus:OL,"virus-off":RL,voicemail:BL,vote:FL,wallet:Ag,"wand-sparkles":Hg,waypoints:YL,"whole-word":aH,wind:Qg,workflow:cH,worm:iH,"wrap-text":Iq,"x-line-top":dH,"x-octagon":TN,"x-square":nq,"zodiac-aquarius":lH,"zodiac-aries":hH,"zodiac-cancer":mH,"zodiac-gemini":uH,"zodiac-leo":yH,"zodiac-libra":kH,"zodiac-ophiuchus":fH,"zodiac-pisces":xH,"zodiac-sagittarius":gH,"zodiac-scorpio":bH,"zodiac-taurus":vH,"zodiac-virgo":MH,antenna:Z9,bluetooth:Yv,bot:zr,"brain-circuit":zM,camera:za,cctv:aw,"cctv-off":tw,"circuit-board":Lw,cpu:y_,drone:B_,"ev-charger":ij,gamepad:Uz,"hard-drive":t1,"house-wifi":G$,joystick:iD,keyboard:n1,laptop:s1,"laptop-minimal":as,"laptop-minimal-check":fD,laptop2:as,"line-dot-bottom-vertical":VD,"memory-stick":iN,monitor:$a,"monitor-smartphone":bN,mouse:i1,"panel-bottom":JN,"panel-bottom-close":ZN,"panel-bottom-dashed":cs,"panel-bottom-inactive":cs,"panel-bottom-open":KN,"panel-top-bottom-dashed":aS,"panels-left-bottom":iS,"panels-right-bottom":sS,"panels-top-bottom":wC,phone:jk,"phone-call":vS,"phone-forwarded":MS,"phone-incoming":wS,"phone-missed":_S,"phone-off":jS,"phone-outgoing":zS,power:YS,"power-circle":Sw,"power-off":GS,"power-square":QA,printer:u1,projector:i3,"qr-code":JS,radar:QS,router:f1,satellite:SC,"satellite-dish":NC,"scan-line":uf,"screen-share":BC,"screen-share-off":OC,server:x1,signal:lA,smartphone:kt,"smartphone-charging":fA,"smartphone-nfc":xA,"switch-camera":_q,tablet:L6,tv:Ca,"tv-minimal-play":bL,video:wg,webcam:ZL,wifi:D1,airplay:wc,"battery-full":_v,cast:_2,heater:V$,microwave:q4,"plug-zap":ES,refrigerator:k1,theater:Eq,"washing-machine":$1,zap:N1,"app-window":Q9,"app-window-mac":X9,armchair:ov,bed:Sv,"bed-double":wa,"bed-single":Nv,blinds:Uv,drama:R_,frame:Tz,"gallery-horizontal":Fz,lamp:o1,"lamp-ceiling":mD,"lamp-desk":cy,"lamp-floor":uD,"lamp-wall-up":yD,"mirror-rectangular":gN,"mirror-round":xN,"rocking-chair":xC,"rugby-ball":jC,sofa:f8,tent:G6,"towel-rack":tL,turntable:fL,warehouse:UL,waves:GL,amphora:U9,apple:ev,banana:fv,beer:qv,blender:Oi,cake:OM,"cake-slice":RM,"can-soda":WM,candy:YM,"candy-cane":GM,carrot:XM,"chef-hat":X2,cherry:mw,citrus:Hw,coffee:Gn,cookie:c_,"cooking-pot":i0,croissant:f_,"cup-soda":j0,drumstick:W_,egg:J_,"egg-fried":K_,fish:ep,"fish-symbol":Xj,"fork-knife":la,"fork-knife-crossed":gn,forklift:Ez,"git-fork":i$,"glass-water":qm,grape:j$,ham:N$,"hat-glasses":pu,"ice-cream-bowl":Z$,"ice-cream-cone":K$,"inspection-panel":aD,"japanese-yen":cD,martini:nN,milk:I4,panda:YN,"panel-left":ls,"panel-left-close":is,"panel-left-dashed":rs,"panel-left-inactive":rs,"panel-left-open":ds,"panel-left-right-dashed":XN,"panel-right":tS,"panel-right-close":QN,"panel-right-dashed":hs,"panel-right-inactive":hs,"panel-right-open":eS,"panel-top":cS,"panel-top-close":nS,"panel-top-dashed":ps,"panel-top-inactive":ps,"panel-top-open":oS,"panels-left-right":Kw,"panels-top-left":rS,pizza:Rk,"pocket-knife":RS,popcorn:FS,salad:$C,sandwich:DC,shrimp:iA,sliders:ys,"sliders-horizontal":kA,"sliders-vertical":ys,"solar-panel":MA,soup:wA,spotlight:LA,utensils:la,"utensils-crossed":gn,wheat:eH,wine:sH,badge:uv,captions:io,"captions-off":JM,"closed-caption":Ow,crown:Zn,"ferris-wheel":bj,footprints:Up,"graduation-cap":e1,"hard-hat":lu,layers:ns,"loader-pinwheel":BD,medal:v4,ribbon:V3,shirt:b1,"shopping-basket":nA,snowflake:bA,"sport-shoe":qA,"zodiac-capricorn":pH,bath:pi,"broom-sparkles":LM,brush:Wr,"chart-no-axes-combined":hw,combine:Jw,crosshair:g_,"flask-conical":nz,flower:oz,gem:Qn,heart:H$,"mop-sparkles":MN,paintbrush:GN,snail:gA,space:jA,sun:vq,"sun-medium":bq,"test-tube":Vq,"tube-lotion":yL,"venetian-mask":HL,award:pv,"bring-to-front":AM,clover:Gw,diamond:I0,eye:dj,"heart-handshake":L$,infinity:eD,link:Uy,moon:vN,star:fn,watch:bn,anchor:G9,baby:Kc,bike:na,bus:oa,"bus-front":TM,car:Wn,"car-front":f2,"car-taxi-front":g2,"cloud-rain":Ww,compass:Tt,"drafting-compass":T_,flag:ez,"flag-triangle-right":Qj,fuel:Rz,gauge:Zz,helicopter:wu,"life-buoy":qD,luggage:i4,map:u4,"map-pin":eN,metronome:hN,milestone:yN,motorbike:J4,mountain:jN,navigation:NN,"parking-circle":Nw,"parking-circle-off":Dw,"parking-square":ZA,"parking-square-off":YA,plane:m1,"plane-landing":HS,"plane-takeoff":VS,road:kC,rocket:fC,route:MC,sailboat:X3,scooter:RC,ship:Ff,signpost:pA,siren:mA,"traffic-cone":sL,trailer:cL,"train-front":jx,"train-track":iL,"tram-front":Dx,truck:j1,van:NL,axe:mv,barrel:wv,bolt:Zv,briefcase:ja,"cassette-tape":QM,"chart-no-axes-column":fo,"chart-no-axes-column-decreasing":lw,"chart-no-axes-column-increasing":ko,"chart-no-axes-gantt":xo,cog:Zw,cone:t_,cylinder:M_,donut:V_,drill:O_,hammer:ou,nut:EN,"nut-off":IN,"paint-bucket":WN,"paint-roller":UN,"pencil-ruler":fS,pickaxe:DS,pipette:qS,settings:Vf,shovel:oA,"tool-case":Yq,toolbox:Zq,webhook:JL,"webhook-off":KL,wrench:Aa,"wrench-off":rH,"a-arrow-down":E9,"a-arrow-up":P9,activity:O9,backpack:Xc,"bow-arrow":wM,"decimals-arrow-left":__,"decimals-arrow-right":j_,dumbbell:Kn,"face-slightly-frowning":uj,fence:gj,"git-compare-arrows":s$,"git-pull-request-arrow":p$,"git-pull-request-create-arrow":m$,"helping-hand":S$,kayak:dD,"layer-arrow-down":bD,"layer-arrow-up":vD,"layers-arrow-down":wD,"layers-arrow-up":_D,megaphone:cN,swords:zq,target:Hq,touchpad:eL,"touchpad-off":Qq,trophy:_1,volleyball:Dg,weight:QL,"weight-tilde":XL,whistle:tH,"wind-arrow-down":nH,"wind-arrow-up":oH,album:VA,"audio-lines":hv,"circle-play":fd,clapperboard:jd,"clef-bass":Iw,disc:S_,drum:F_,film:Zh,guitar:tu,headphones:ca,headset:yn,library:AD,"library-big":CD,mic:C4,"mic-vocal":mN,"midi-port":uN,"monitor-play":B4,music:r1,piano:Dk,podcast:pN,radio:nC,"radio-tower":aC,speaker:j8,"square-play":XA,"tv-minimal":gL,"alert-circle":_w,barcode:Mv,bird:Bv,"brick-wall":SM,bubbles:VM,bug:IM,cat:ew,"chess-king":yw,"chess-knight":kw,"chess-queen":xw,"chess-rook":gw,church:vw,"circle-dashed":jw,"cloud-sun":Uw,club:Yw,"divide-circle":zw,dog:W0,"dollar-sign":H_,grip:$$,"help-circle":Cw,"layout-grid":Ht,"loader-circle":ss,"person-standing":yk,puzzle:y1,rabbit:XS,rainbow:sC,search:da,"search-alert":WC,"search-check":UC,"search-code":GC,"search-slash":YC,"search-x":ZC,spade:_A,squircle:sq,"squircle-dashed":oq,squirrel:cq,sticker:rq,"toy-brick":nL,turtle:xL,"x-circle":qw,aperture:J9,"area-chart":ro,"bar-chart":ko,"bar-chart-big":mo,"bar-chart-horizontal":ho,"bar-chart-horizontal-big":lo,"bar-chart2":fo,"bar-chart3":mn,"bar-chart4":uo,"chart-area":ro,"chart-bar":ho,"chart-bar-big":lo,"chart-bar-decreasing":nw,"chart-bar-increasing":ow,"chart-bar-stacked":sw,"chart-column":mn,"chart-column-big":mo,"chart-column-decreasing":cw,"chart-column-increasing":uo,"chart-column-stacked":iw,"chart-gantt":rw,"chart-line":yo,"chart-network":dw,"chart-pie":go,"chart-spline":pw,earth:vo,feather:xj,focus:sz,"gallery-vertical":Wz,"gantt-chart":xo,"gantt-chart-square":IA,highlighter:I$,image:Lt,"image-plus":J$,landmark:py,"line-chart":yo,origami:BN,palette:h1,"party-popper":mS,"pen-line":kn,"pen-tool":yS,"pencil-line":kS,"pie-chart":go,shapes:QC,signature:hA,"stretch-horizontal":fq,"stretch-vertical":xq,wallpaper:WL},Bb=[{label:"影音娱乐",items:[{id:"bilibili",icon:B4},{id:"tv",icon:Ca},{id:"play",icon:fd},{id:"movie",icon:jd},{id:"music",icon:r1},{id:"music2",icon:DN},{id:"game",icon:Xn},{id:"palette",icon:h1}]},{label:"云服务",items:[{id:"cloud",icon:Un},{id:"cloud-up",icon:Ed},{id:"server",icon:x1},{id:"database",icon:S0},{id:"cloud-cog",icon:Bw},{id:"drive",icon:t1}]},{label:"生活服务",items:[{id:"food",icon:la},{id:"food2",icon:gn},{id:"coffee",icon:Gn},{id:"fitness",icon:Kn},{id:"power",icon:N1},{id:"water",icon:cl},{id:"gas",icon:Jn},{id:"hotel",icon:wa},{id:"express",icon:l1},{id:"truck",icon:j1},{id:"phone",icon:kt},{id:"tel",icon:jk}]},{label:"出行",items:[{id:"car",icon:Wn},{id:"car-front",icon:f2},{id:"train",icon:Dx},{id:"plane",icon:m1},{id:"bus",icon:oa},{id:"bike",icon:na}]},{label:"购物",items:[{id:"shopping",icon:Na},{id:"cart",icon:Zf},{id:"store",icon:v1}]},{label:"办公学习",items:[{id:"doc",icon:Ih},{id:"book",icon:_a},{id:"course",icon:e1},{id:"news",icon:d1},{id:"laptop",icon:s1},{id:"work",icon:ja},{id:"mail",icon:l4}]},{label:"通信社交",items:[{id:"chat",icon:lN},{id:"phone-bill",icon:kt},{id:"pay",icon:Yn}]},{label:"会员权益",items:[{id:"crown",icon:Zn},{id:"badge",icon:ei},{id:"gift",icon:sa},{id:"puzzle",icon:y1},{id:"bulb",icon:c1},{id:"tool",icon:Aa}]},{label:"AI 与效率",items:[{id:"bot",icon:zr},{id:"sparkles",icon:Sa},{id:"brain",icon:Fn},{id:"wand",icon:Hg},{id:"scan",icon:uf},{id:"keyboard",icon:n1},{id:"mouse",icon:i1},{id:"usb",icon:z1}]},{label:"金融保险",items:[{id:"bank",icon:py},{id:"wallet",icon:Ag},{id:"coins",icon:Wd},{id:"trend",icon:Ex},{id:"piggy",icon:qk},{id:"shield",icon:Da},{id:"percent",icon:xS},{id:"receipt",icon:M3}]},{label:"健康与兴趣",items:[{id:"heart-pulse",icon:ia},{id:"pill",icon:p1},{id:"bike2",icon:na},{id:"camera2",icon:za},{id:"headphones",icon:ca},{id:"mic",icon:C4},{id:"film",icon:Zh},{id:"trophy",icon:_1},{id:"shirt",icon:b1},{id:"gem",icon:Qn},{id:"flower",icon:rp},{id:"dog",icon:W0}]},{label:"家居通讯",items:[{id:"wifi",icon:D1},{id:"router",icon:f1},{id:"tv2",icon:$a},{id:"printer",icon:u1},{id:"fridge",icon:k1},{id:"washing",icon:$1},{id:"airplay",icon:wc},{id:"lamp",icon:o1}]}],aI=(()=>{const e={};for(const a of Bb)for(const n of a.items)e[n.id]=n.icon;return e.video=Ca,e.shopping=Na,e.gamepad=Xn,e.camera=h1,e.home=wa,e.store=v1,e.book=_a,e.news=d1,e.work=ja,e.pay=Yn,e.puzzle=y1,e.bulb=c1,e.tool=Aa,e})();function fa(e){return e?aI[e]??tI[e]??us:us}function nI(e,a=!0){return`https://favicon.im/${e}${a?"?larger=true":""}`}function oI(e){return`https://icon.horse/icon/${e}`}function De(e,a){return`${e.replace(/\/+$/,"")}/api/icon/img?d=${encodeURIComponent(a)}`}function sI(e,a){return[De(e,a),oI(a),nI(a)]}function cI(e){const a=(e??"").trim();return a.startsWith("url:")?"url":a.startsWith("img:")?"img":"builtin"}function iI(e){const a=(e??"").trim();if(!a)return null;const n=a.match(/([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+)/g);if(!n)return null;const s=n.sort((c,i)=>i.length-c.length)[0];try{const i=new URL(`https://${s}`).hostname.toLowerCase();return!i.includes(".")||/^\d+(\.\d+){3}$/.test(i)?null:i}catch{return null}}const Fb=[{label:"云服务 / 网盘",items:[{name:"阿里云",domain:"aliyun.com",alias:"aliyun ecs"},{name:"腾讯云",domain:"cloud.tencent.com",alias:"tencent cloud"},{name:"华为云",domain:"huaweicloud.com",alias:"huawei"},{name:"百度智能云",domain:"cloud.baidu.com",alias:"baidu bce"},{name:"金山云",domain:"ksyun.com",alias:"kingsoft"},{name:"UCloud",domain:"ucloud.cn",alias:"ucloud"},{name:"七牛云",domain:"qiniu.com",alias:"qiniu qn"},{name:"又拍云",domain:"upyun.com",alias:"upyun"},{name:"Cloudflare",domain:"cloudflare.com",alias:"cf cdn"},{name:"AWS",domain:"aws.amazon.com",alias:"amazon amazonweb"},{name:"Azure",domain:"azure.microsoft.com",alias:"microsoft"},{name:"谷歌云",domain:"cloud.google.com",alias:"gcp google"},{name:"百度网盘",domain:"pan.baidu.com",alias:"baidu 网盘"},{name:"阿里云盘",domain:"www.alipan.com",alias:"alipan 网盘"},{name:"夸克网盘",domain:"pan.quark.cn",alias:"quark"},{name:"迅雷",domain:"xunlei.com",alias:"thunder"},{name:"iCloud",domain:"icloud.com",alias:"apple 苹果"},{name:"OneDrive",domain:"onedrive.live.com",alias:"microsoft 微软"},{name:"Google Drive",domain:"drive.google.com",alias:"google 谷歌"},{name:"Dropbox",domain:"dropbox.com",alias:"db"},{name:"坚果云",domain:"jianguoyun.com",alias:"nutstore"}]},{label:"影音 / 视频",items:[{name:"哔哩哔哩",domain:"bilibili.com",alias:"b站 bilibili bili"},{name:"腾讯视频",domain:"v.qq.com",alias:"tencent video"},{name:"爱奇艺",domain:"iqiyi.com",alias:"iqiyi"},{name:"优酷",domain:"youku.com",alias:"youku"},{name:"芒果TV",domain:"mgtv.com",alias:"mango mgtv"},{name:"抖音",domain:"douyin.com",alias:"douyin tiktok"},{name:"快手",domain:"kuaishou.com",alias:"ks"},{name:"西瓜视频",domain:"ixigua.com",alias:"xigua"},{name:"剪映",domain:"capcut.cn",alias:"capcut jianying"},{name:" Netflix",domain:"netflix.com",alias:"netflix"},{name:"Disney+",domain:"disneyplus.com",alias:"disney 迪士尼"},{name:"YouTube",domain:"youtube.com",alias:"yt 谷歌"},{name:"哔哩哔哩漫画",domain:"manga.bilibili.com",alias:"漫画"},{name:"腾讯动漫",domain:"ac.qq.com",alias:"动漫"},{name:"快看漫画",domain:"kuaikanmanhua.com",alias:"快看"}]},{label:"音乐 / 电台",items:[{name:"网易云音乐",domain:"music.163.com",alias:"网易云 网易 cloudmusic"},{name:"QQ音乐",domain:"y.qq.com",alias:"qq music"},{name:"酷狗音乐",domain:"kugou.com",alias:"kugou"},{name:"酷我音乐",domain:"kuwo.cn",alias:"kuwo"},{name:"汽水音乐",domain:"qishui.douyin.com",alias:"qishui"},{name:"喜马拉雅",domain:"ximalaya.com",alias:"xmly 电台"},{name:"蜻蜓FM",domain:"qingting.fm",alias:"qingting fm"},{name:"懒人听书",domain:"lazyaudio.com",alias:"lanren 听书"},{name:"Spotify",domain:"spotify.com",alias:"spotify"},{name:"Apple Music",domain:"music.apple.com",alias:"itunes 苹果"},{name:"小宇宙",domain:"xiaoyuzhoufm.com",alias:"podcast 播客"}]},{label:"社交 / 通讯",items:[{name:"微信",domain:"weixin.qq.com",alias:"wechat weixin"},{name:"企业微信",domain:"work.weixin.qq.com",alias:"wecom 企微"},{name:"QQ",domain:"qq.com",alias:"tencent 企鹅"},{name:"微博",domain:"weibo.com",alias:"weibo 微博"},{name:"知乎",domain:"zhihu.com",alias:"zhihu"},{name:"小红书",domain:"xiaohongshu.com",alias:"xhs rednote"},{name:"豆瓣",domain:"douban.com",alias:"douban"},{name:"百度",domain:"baidu.com",alias:"baidu 搜索"},{name:"贴吧",domain:"tieba.baidu.com",alias:"tieba"},{name:"钉钉",domain:"dingtalk.com",alias:"dingtalk"},{name:"飞书",domain:"feishu.cn",alias:"lark 字节"},{name:"Telegram",domain:"telegram.org",alias:"tg 电报"},{name:"Discord",domain:"discord.com",alias:"discord"},{name:"Slack",domain:"slack.com",alias:"slack"}]},{label:"会员 / 附属",items:[{name:"QQ会员",domain:"vip.qq.com",alias:"qq 会员 王卡"},{name:"腾讯王卡",domain:"10010.com",alias:"wangka 王卡"},{name:"微博会员",domain:"vip.weibo.com",alias:"weibo 会员"},{name:"知乎会员",domain:"vip.zhihu.com",alias:"zhihu 盐选"},{name:"迅雷会员",domain:"vip.xunlei.com",alias:"xunlei 快鸟"},{name:"百度网盘会员",domain:"pan.baidu.com",alias:"svip 超级会员"},{name:"WPS会员",domain:"vip.wps.cn",alias:"wps 金山"},{name:"夸克会员",domain:"pan.quark.cn",alias:"quark svip"}]},{label:"购物 / 电商",items:[{name:"淘宝",domain:"taobao.com",alias:"taobao 天猫"},{name:"天猫",domain:"tmall.com",alias:"tmall"},{name:"京东",domain:"jd.com",alias:"jd 京东"},{name:"拼多多",domain:"pinduoduo.com",alias:"pdd"},{name:"闲鱼",domain:"goofish.com",alias:"xianyu 二手"},{name:"转转",domain:"zhuanzhuan.com",alias:"zhuanzhuan"},{name:"唯品会",domain:"vip.com",alias:"vipshop"},{name:"苏宁易购",domain:"suning.com",alias:"suning"},{name:"小米有品",domain:"xiaomiyoupin.com",alias:"mi youpin"},{name:"网易严选",domain:"you.163.com",alias:"yanxuan"},{name:"得物",domain:"dewu.com",alias:"dewu 毒"},{name:"饿了么",domain:"h5.ele.me",alias:"ele me 外卖"},{name:"美团",domain:"meituan.com",alias:"meituan 外卖"},{name:"大众点评",domain:"dianping.com",alias:"dianping"},{name:"山姆会员店",domain:"samsclub.cn",alias:"sams"},{name:"盒马",domain:"freshippo.com",alias:"hema 盒马"},{name:"淘宝买菜",domain:"taobao.com",alias:"买菜"}]},{label:"出行 / 交通",items:[{name:"携程",domain:"ctrip.com",alias:"ctrip trip"},{name:"去哪儿",domain:"qunar.com",alias:"qunar"},{name:"飞猪",domain:"fliggy.com",alias:"fliggy 阿里"},{name:"同程旅行",domain:"ly.com",alias:"tongcheng 同程"},{name:"12306",domain:"12306.cn",alias:"railway 火车 高铁"},{name:"滴滴出行",domain:"didiglobal.com",alias:"didi 打车"},{name:"高德地图",domain:"amap.com",alias:"amap 导航"},{name:"百度地图",domain:"map.baidu.com",alias:"baidu map 导航"},{name:"腾讯地图",domain:"map.qq.com",alias:"qq map 导航"},{name:"哈啰",domain:"hellohorse.com",alias:"hellobike 单车"},{name:"航旅纵横",domain:"umetrip.com",alias:"umetrip 航班"},{name:"华住会",domain:"huazhu.com",alias:"huazhu 酒店"},{name:"如家",domain:"homeinns.com",alias:"酒店"}]},{label:"运营商 / 生活缴费",items:[{name:"中国移动",domain:"10086.cn",alias:"china mobile 移动 话费"},{name:"中国联通",domain:"10010.com",alias:"china unicom 联通 话费"},{name:"中国电信",domain:"www.189.cn",alias:"china telecom 电信 话费"},{name:"中国广电",domain:"cbn.cn",alias:"广电 192 广电网络"},{name:"国家电网",domain:"www.sgcc.com.cn",alias:"电费 电网 sgcc 网上国网"},{name:"支付宝",domain:"www.alipay.com",alias:"alipay 支付"},{name:"云闪付",domain:"95516.com",alias:"unionpay 银联 云闪付"},{name:"顺丰速运",domain:"www.sf-express.com",alias:"sf 快递 顺丰"},{name:"菜鸟裹裹",domain:"cainiao.com",alias:"cainiao 快递"},{name:"京东物流",domain:"jl.jd.com",alias:"jd 快递"}]},{label:"游戏 / 游戏服务",items:[{name:"Steam",domain:"steampowered.com",alias:"steam valve"},{name:"Epic",domain:"epicgames.com",alias:"epic"},{name:"WeGame",domain:"wegame.com",alias:"wegame tencent"},{name:"TapTap",domain:"taptap.cn",alias:"taptap"},{name:"好游快爆",domain:"haoyoukuai.com",alias:"haoyou"},{name:"米哈游",domain:"mihoyo.com",alias:"miHoYo 原神 星穹铁道"},{name:"网易游戏",domain:"netease.com",alias:"netease 梦幻西游"},{name:"暴雪",domain:"blizzard.com",alias:"blizzard 战网"},{name:"Riot",domain:"riotgames.com",alias:"lol 英雄联盟"},{name:"PlayStation",domain:"playstation.com",alias:"psn ps5 索尼"},{name:"Xbox",domain:"xbox.com",alias:"xgp 微软"},{name:"Nintendo",domain:"nintendo.com",alias:"switch 任天堂 eshop"},{name:"腾讯游戏充值",domain:"pay.weixin.qq.com",alias:"点券 充值"}]},{label:"开发者 / 效率",items:[{name:"GitHub",domain:"github.com",alias:"github git copilot"},{name:"Gitee",domain:"gitee.com",alias:"码云"},{name:"掘金",domain:"juejin.cn",alias:"juejin"},{name:"CSDN",domain:"csdn.net",alias:"csdn"},{name:"V2EX",domain:"v2ex.com",alias:"v2ex"},{name:"StackOverflow",domain:"stackoverflow.com",alias:"so"},{name:"npm",domain:"npmjs.com",alias:"npm node"},{name:"Docker",domain:"docker.com",alias:"docker hub"},{name:"JetBrains",domain:"jetbrains.com",alias:"idea pycharm"},{name:"VS Code",domain:"code.visualstudio.com",alias:"vscode visualstudio"},{name:"Notion",domain:"notion.so",alias:"notion"},{name:"Figma",domain:"figma.com",alias:"figma 设计"},{name:"Adobe",domain:"adobe.com",alias:"adobe ps pr"},{name:"Canva可画",domain:"canva.cn",alias:"canva 设计"},{name:"稿定设计",domain:"gaoding.com",alias:"gaoding"},{name:"DeepL",domain:"deepl.com",alias:"deepl 翻译"},{name:"OpenAI",domain:"openai.com",alias:"chatgpt gpt"},{name:"Claude",domain:"claude.ai",alias:"anthropic claude"},{name:"DeepSeek",domain:"deepseek.com",alias:"deepseek ai"},{name:"Kimi",domain:"kimi.com",alias:"moonshot 月之暗面"},{name:"豆包",domain:"doubao.com",alias:"doubao 字节 ai"},{name:"通义千问",domain:"tongyi.aliyun.com",alias:"qwen 阿里 ai"},{name:"讯飞星火",domain:"xinghuo.xfyun.cn",alias:"xfyun 讯飞"}]},{label:"办公 / 文档 / 笔记",items:[{name:"WPS",domain:"wps.cn",alias:"wps 金山 office"},{name:"金山文档",domain:"kdocs.cn",alias:"kdocs"},{name:"腾讯文档",domain:"docs.qq.com",alias:"docs 在线文档"},{name:"石墨文档",domain:"shimo.im",alias:"shimo"},{name:"语雀",domain:"yuque.com",alias:"yuque 阿里"},{name:"幕布",domain:"mubu.com",alias:"mubu 大纲"},{name:"飞书文档",domain:"feishu.cn",alias:"lark docs"},{name:"有道云笔记",domain:"note.youdao.com",alias:"youdao 有道"},{name:"印象笔记",domain:"yinxiang.com",alias:"evernote"},{name:"Obsidian",domain:"obsidian.md",alias:"obsidian 笔记"},{name:"flomo浮墨",domain:"flomoapp.com",alias:"flomo"}]},{label:"读书 / 学习",items:[{name:"微信读书",domain:"weread.qq.com",alias:"weread 读书"},{name:"得到",domain:"www.dedao.cn",alias:"dedao 罗辑思维"},{name:"樊登读书",domain:"dengtedushu.com",alias:"fandeng 帆书"},{name:"网易公开课",domain:"open.163.com",alias:"mooc 公开课"},{name:"中国大学MOOC",domain:"icourse163.org",alias:"mooc 课程"},{name:"多邻国",domain:"duolingo.cn",alias:"duolingo 英语"},{name:"百词斩",domain:"baicizhan.com",alias:"单词 背单词"},{name:"扇贝",domain:"shanbay.com",alias:"shanbay 单词"},{name:"流利说",domain:"liulishuo.com",alias:"liulishuo 英语"},{name:"有道词典",domain:"dict.youdao.com",alias:"youdao 翻译"},{name:"Kindle",domain:"amazon.cn",alias:"kindle 电子书"},{name:"掌阅",domain:"izhen.com",alias:"ireader 小说"},{name:"QQ阅读",domain:"yuewen.com",alias:"阅文 小说"},{name:"起点读书",domain:"qidian.com",alias:"qidian 小说"}]},{label:"金融 / 证券",items:[{name:"同花顺",domain:"10jqka.com.cn",alias:"ths 炒股"},{name:"东方财富",domain:"eastmoney.com",alias:"eastmoney 财富"},{name:"雪球",domain:"xueqiu.com",alias:"xueqiu 股票"},{name:"富途",domain:"futunn.com",alias:"futu moomoo"},{name:"老虎证券",domain:"laohu8.com",alias:"tiger tigerbrokers"},{name:"招商银行",domain:"cmbchina.com",alias:"cmb 招行"},{name:"工商银行",domain:"icbc.com.cn",alias:"icbc 工行"},{name:"建设银行",domain:"ccb.com",alias:"ccb 建行"},{name:"农业银行",domain:"abchina.com",alias:"abc 农行"},{name:"中国银行",domain:"boc.cn",alias:"boc 中行"},{name:"平安",domain:"pingan.com",alias:"pingan 保险"},{name:"众安保险",domain:"zhongan.com",alias:"zhongan 保险"}]}],rI=Fb.flatMap(e=>e.items);function dI(e){const a=(e??"").trim().toLowerCase().split(/\s+/).filter(Boolean);return a.length===0?[]:rI.filter(n=>{const s=`${n.name} ${n.alias??""} ${n.domain}`.toLowerCase();return a.every(c=>s.includes(c))})}function Wb(e,a=96){return new Promise((n,s)=>{const c=new FileReader;c.onerror=()=>s(new Error("读取图片失败")),c.onload=()=>{const i=new Image;i.onerror=()=>s(new Error("解析图片失败")),i.onload=()=>{const d=Math.min(i.width,i.height),r=d===i.width?0:(i.width-d)/2,l=d===i.height?0:(i.height-d)/2,p=document.createElement("canvas");p.width=a,p.height=a;const g=p.getContext("2d");if(!g){s(new Error("画布不可用"));return}g.drawImage(i,r,l,d,d,0,0,a,a),n(p.toDataURL("image/jpeg",.85))},i.src=String(c.result)},c.readAsDataURL(e)})}function Ds(e){return`img:${e}`}function at(e){return`url:${e}`}function lI(e){return e?[{key:"lib",label:"系统图标",Icon:Ht},{key:"web",label:"品牌图片",Icon:os},{key:"img",label:"网络图片",Icon:Lt},{key:"upload",label:"相册上传",Icon:xn}]:[{key:"lib",label:"图标库",Icon:Ht},{key:"web",label:"网络图标",Icon:os},{key:"upload",label:"本地上传",Icon:xn}]}function R1(){return ue()?.url??(typeof window<"u"?window.location.origin:"")}function hI({abs:e,alt:a}){const n=u.useMemo(()=>[e],[e]),{src:s,done:c}=Va(n);return!c||!s?t.jsx("span",{className:"h-full w-full rounded bg-surface-2","aria-label":a}):t.jsx("img",{src:s,alt:a??e,className:"h-full w-full",style:{objectFit:"contain"}})}function Ub(e){return`/api/img/get?u=${encodeURIComponent(e)}`}function pI({raw:e,thumb:a,alt:n}){const s=u.useMemo(()=>[a??Ub(e)],[e,a]),{src:c,done:i}=Va(s);return!i||!c?t.jsx("span",{className:"flex h-full w-full items-center justify-center rounded-lg bg-surface-2 text-ink-3/40","aria-label":n,children:t.jsx(Lt,{size:16})}):t.jsx("img",{src:c,alt:n??e,className:"h-full w-full rounded-lg",style:{objectFit:"cover"}})}async function mI(e,a=512){const n=await new Promise(p=>{const g=new Image,m=setTimeout(()=>p(null),6e3);g.onload=()=>{clearTimeout(m),p(g)},g.onerror=()=>{clearTimeout(m),p(null)},g.src=e});if(!n)return e;const s=Math.min(n.naturalWidth,n.naturalHeight),c=(n.naturalWidth-s)/2,i=(n.naturalHeight-s)/2,d=Math.min(a,s),r=document.createElement("canvas");r.width=d,r.height=d;const l=r.getContext("2d");return l?(l.drawImage(n,c,i,s,s,0,0,d,d),r.toDataURL("image/jpeg",.85)):e}function Va(e){const a=e.map(c=>Ha(c)).join("|"),[n,s]=u.useState({src:null,done:!1});return u.useEffect(()=>{let c=!0;return s({src:null,done:!1}),(async()=>{const i=await Ib(a.split("|"));if(i){c&&s({src:i,done:!0});return}const d=await zV(a.split("|").map(r=>uI(r)));c&&s({src:d,done:!0})})(),()=>{c=!1}},[a]),n}function uI(e){if(/^https?:\/\//i.test(e))return e;const a=R1();return a?`${a}${e.startsWith("/")?"":"/"}${e}`:e}function $n({base:e,domain:a,size:n=24,alt:s}){const c=u.useMemo(()=>sI(e,a),[e,a]),{src:i,done:d}=Va(c);return d?i?t.jsx("span",{className:"flex shrink-0 items-center justify-center overflow-hidden",style:{width:n,height:n},children:t.jsx("img",{src:i,width:n,height:n,alt:s??a,className:"h-full w-full",style:{objectFit:"contain"}})}):t.jsx("span",{className:"flex shrink-0 items-center justify-center rounded-md bg-surface-2 text-ink-3",style:{width:n,height:n,fontSize:n*.5},"aria-label":s,children:a.charAt(0).toUpperCase()}):t.jsx("span",{className:"flex shrink-0 items-center justify-center rounded-md bg-surface-2 text-ink-3/40",style:{width:n,height:n},"aria-label":s})}function Wt(e,a){return e?e.startsWith("/")?`${a}${e}`:e:""}function ct({icon:e,size:a=22,className:n,fallbackBg:s,fallbackFg:c}){const i=(e??"").trim(),d=i.startsWith("url:"),r=i.startsWith("img:"),l=d?i.slice(4).trim():"",p=u.useMemo(()=>{if(!d||!l)return[];const M=[l];if(l.includes("api.iconify.design")){const f=R1();f&&M.unshift(`${f}/api/icon/proxy?u=${encodeURIComponent(l)}`)}else{const f=l.match(/[?&]d=([^&]+)/);if(f){const z=decodeURIComponent(f[1]);M.push(`https://icon.horse/i/${z}`,`https://favicon.im/${z}`)}}return M},[d,l]),{src:g,done:m}=Va(p),[x,k]=u.useState(!1);if(u.useEffect(()=>k(!1),[i]),r&&!x)return t.jsx("img",{src:i.slice(4).trim(),width:a,height:a,alt:"",className:n,style:{borderRadius:6,objectFit:"cover"},onError:()=>k(!0)});if(d){if(g)return t.jsx("img",{src:g,width:a,height:a,alt:"",className:n,style:{borderRadius:6,objectFit:"contain",background:s}});if(!m){const M=fa(i);return t.jsx(M,{size:a,className:`${n??""} opacity-30`,style:c?{color:c}:void 0})}}const y=fa(i);return t.jsx(y,{size:a,className:n,style:c?{color:c}:void 0})}function Ns({brand:e,base:a,active:n,onPick:s}){return t.jsxs("button",{type:"button",onClick:s,title:e.name,className:`flex flex-col items-center gap-1 rounded-btn border py-2 transition-all active:scale-95 ${n?"border-accent bg-accent-soft":"border-line bg-surface-2"}`,children:[t.jsx($n,{base:a,domain:e.domain,size:24,alt:e.name}),t.jsx("span",{className:"w-full truncate px-0.5 text-center text-[10px] text-ink-2",children:e.name})]})}function pt({children:e}){return t.jsx("p",{className:"mb-1.5 text-[11px] font-medium text-ink-3",children:e})}function O1({value:e,onChange:a,onFilePicked:n,systemMode:s=!1,initialTab:c}){const[i,d]=u.useState(c??"lib"),[r,l]=u.useState(""),[p,g]=u.useState(null),[m,x]=u.useState(null),[k,y]=u.useState(!1),[M,f]=u.useState(!1),z=u.useRef(null),V=u.useRef(null),S=u.useMemo(R1,[]),j=r.trim().toLowerCase(),w=s?Za.map(h=>({label:h.label,items:h.items.map(C=>({id:C}))})):Bb.map(h=>({label:h.label,items:h.items.map(C=>({id:C.id}))})),N=u.useMemo(()=>j?w.map(h=>({...h,items:h.items.filter(C=>C.id.includes(j))})).filter(h=>h.items.length>0):w,[j,s]),R=u.useMemo(()=>j?dI(r):null,[j,r]),P=u.useMemo(()=>j&&R&&R.length===0?iI(r):null,[j,R,r]),W=h=>{const C=h.trim();if(g(null),x(null),C.length<2){y(!1);return}if(y(!0),i==="img"){Fe({url:S},"/api/img/search",{q:C},1e4).then($=>{const E=$.data?.ok&&Array.isArray($.data.items)?$.data.items:[];x(E);const U=E.map(Y=>Y.thumb?Wt(Y.thumb,S):"").filter(Boolean);U.length>0&&Ft(U,S)}).catch(()=>x([])).finally(()=>y(!1));return}Fe({url:S},"/api/icon/search",{q:C},8e3).then($=>{const E=$.data?.ok&&Array.isArray($.data.items)?$.data.items:[];g(E);const U=E.map(Y=>Y.type==="icon"&&Y.url?Wt(Y.url,S):Y.domain?De(S,Y.domain):"").filter(Boolean);U.length>0&&Ft(U,S)}).catch(()=>g([]))},B=async h=>{const C=Wt(Ub(h),S);try{const $=await I1(C);if(!$){J("图片抓取失败，换一张试试");return}const E=await mI($,512);Pe("select"),a(Ds(E)),Ft([C],S)}catch{J("图片处理失败，换一张试试")}},q=(h,C)=>{Pe("select"),a(h),C&&Ft([C],S)};u.useEffect(()=>{const h=r.trim();if(h.length<2){y(!1);return}const C=setTimeout(()=>W(h),300);return()=>clearTimeout(C)},[r,S]),u.useEffect(()=>{const h=V.current;if(!h)return;let C=h.value;const $=()=>{h.value!==C&&(C=h.value,l(h.value))},E=()=>W(h.value),U=ae=>{(ae.key==="Enter"||ae.keyCode===13)&&!ae.isComposing&&ae.keyCode!==229&&(ae.preventDefault(),E())},Y=()=>{$(),E()};h.addEventListener("input",$),h.addEventListener("compositionupdate",$),h.addEventListener("compositionend",Y),h.addEventListener("keyup",U),h.addEventListener("search",E);const ee=window.setInterval($,150);return()=>{window.clearInterval(ee),h.removeEventListener("input",$),h.removeEventListener("compositionupdate",$),h.removeEventListener("compositionend",Y),h.removeEventListener("keyup",U),h.removeEventListener("search",E)}},[S,i]);const G=async h=>{if(h){if(n){n(h);return}f(!0);try{const C=await Wb(h,96);a(Ds(C))}catch(C){J(C instanceof Error?C.message:"图片处理失败")}finally{f(!1)}}},O=j!==""&&(i==="lib"||i==="web"),F=j!==""&&i==="img",T=u.useMemo(()=>(p??[]).filter(h=>h.type==="icon"&&h.url),[p]),D=u.useMemo(()=>(p??[]).filter(h=>h.domain),[p]),_=!k&&p!==null&&T.length===0&&D.length===0,A=N.length===0&&(!R||R.length===0)&&!P,b=O&&A&&(j.length<2||_),v=i==="lib"?t.jsxs(t.Fragment,{children:[s&&!j?t.jsx("div",{className:"sticky top-0 z-10 -mx-1 flex gap-1.5 overflow-x-auto bg-surface px-1 py-1",children:Za.map(h=>t.jsxs("button",{type:"button",onClick:()=>document.getElementById(`sysgrp-${h.key}`)?.scrollIntoView({behavior:"smooth",block:"start"}),className:"shrink-0 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] text-ink-2 active:scale-95",children:[h.label,t.jsx("span",{className:"ml-0.5 text-ink-3/70",children:h.items.length})]},h.key))}):null,N.map(h=>{const C=s?Za.find($=>$.label===h.label)?.key??"":"";return t.jsxs("div",{id:C?`sysgrp-${C}`:void 0,children:[t.jsxs(pt,{children:[h.label,s?t.jsxs("span",{className:"ml-1 text-ink-3/70",children:["(",h.items.length,")"]}):null]}),t.jsx("div",{className:"grid grid-cols-8 gap-2",children:h.items.map(({id:$})=>{const E=fa($);return t.jsx("button",{type:"button",onClick:()=>a($),"aria-label":$,title:$,className:`flex h-10 items-center justify-center rounded-btn border transition-all active:scale-95 ${e===$?"border-accent bg-accent-soft text-accent":"border-line bg-surface-2 text-ink-2"}`,children:t.jsx(E,{size:18})},$)})})]},h.label)})]}):Fb.map(h=>t.jsxs("div",{children:[t.jsxs(pt,{children:[h.label,t.jsxs("span",{className:"ml-1 text-ink-3/70",children:["(",h.items.length,")"]})]}),t.jsx("div",{className:"grid grid-cols-5 gap-2",children:h.items.map(C=>t.jsx(Ns,{brand:C,base:S,active:e===at(De(S,C.domain)),onPick:()=>q(at(De(S,C.domain)),De(S,C.domain))},C.domain+C.name))})]},h.label));return t.jsxs("div",{children:[t.jsx("div",{className:"mb-2 flex gap-1 rounded-btn bg-surface-2 p-1",children:lI(s).map(({key:h,label:C,Icon:$})=>t.jsxs("button",{type:"button",onClick:()=>d(h),className:`flex h-9 flex-1 items-center justify-center gap-1.5 rounded-btn text-xs font-medium ${i===h?"bg-surface text-accent shadow-sm":"text-ink-3"}`,children:[t.jsx($,{size:14}),C]},h))}),t.jsxs("div",{className:"mb-2 flex items-center gap-2.5",children:[t.jsx("span",{className:"flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-accent-soft text-accent",children:t.jsx(ct,{icon:e,size:22})}),t.jsx("span",{className:"text-xs text-ink-3",children:i==="upload"?M?"处理中…":"选一张方图，自动裁边压缩":i==="img"?"搜商品名称或型号，出真实商品图":i==="web"?O?"品牌 + 在线图标，一次搜齐":"内置品牌库，点击即采用":O?"按图标名过滤全部分类":"按分类浏览 · 点击即选中"})]}),i==="img"?t.jsxs("div",{className:"max-h-80 space-y-3 overflow-y-auto",children:[t.jsxs("div",{className:"flex h-9 items-center gap-2 rounded-btn border border-line bg-surface-2 px-2.5 focus-within:border-accent",children:[t.jsx("button",{type:"button","aria-label":"搜索",onClick:()=>V.current&&W(V.current.value),className:"shrink-0 text-ink-3 active:text-accent",children:t.jsx(da,{size:14})}),t.jsx("input",{ref:V,type:"search",defaultValue:"",onInput:h=>l(h.target.value),onKeyDown:h=>{const C=h.nativeEvent;(h.key==="Enter"||C.keyCode===13)&&!C.isComposing&&C.keyCode!==229&&(h.preventDefault(),W(h.target.value))},enterKeyHint:"search",placeholder:"如：iPhone 17、一加15、佳能 R6、戴森吸尘器…",className:"min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-ink-3"})]}),F?k?t.jsx("p",{className:"py-6 text-center text-xs text-ink-3",children:"正在检索商品图…"}):m&&m.length>0?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"grid grid-cols-3 gap-2",children:m.map(h=>h.url?t.jsx("button",{type:"button",onClick:()=>void B(h.url),title:"采用此商品图","aria-label":"采用此商品图",className:"aspect-square overflow-hidden rounded-xl border border-line bg-surface-2 transition-all active:scale-95",children:t.jsx(pI,{raw:h.url,thumb:h.thumb})},h.url):null)}),t.jsx("p",{className:"text-[10px] text-ink-3",children:"点选自动裁正方形存入本地 · 随备份携带 · 永久离线可用"})]}):t.jsxs("p",{className:"rounded-card border border-dashed border-line bg-surface-2 p-4 text-center text-xs text-ink-3",children:["没有找到「",r,"」的商品图，换个说法（品牌 + 型号）试试"]}):t.jsxs("div",{className:"flex flex-col items-center gap-2 rounded-card border border-dashed border-line bg-surface-2 px-4 py-8 text-center",children:[t.jsx(Lt,{size:24,className:"text-ink-3/60"}),t.jsx("p",{className:"text-xs text-ink-3",children:"搜「手机型号 / 相机 / 家电」等，直接出真实商品缩略图"})]})]}):i==="upload"?t.jsxs("div",{children:[t.jsxs("button",{type:"button",onClick:()=>z.current?.click(),disabled:M,className:"flex h-24 w-full flex-col items-center justify-center gap-1.5 rounded-card border border-dashed border-line bg-surface-2 text-xs text-ink-3 disabled:opacity-50",children:[t.jsx(Lt,{size:22}),M?"压缩处理中…":"点此选择图片（自动裁成正方形）"]}),t.jsx("input",{ref:z,type:"file",accept:"image/*",className:"hidden",onChange:h=>{const C=h.target.files?.[0];h.target.value="",G(C)}})]}):t.jsxs("div",{className:"max-h-80 space-y-3 overflow-y-auto",children:[t.jsxs("div",{className:"flex h-9 items-center gap-2 rounded-btn border border-line bg-surface-2 px-2.5 focus-within:border-accent",children:[t.jsx("button",{type:"button","aria-label":"搜索",onClick:()=>V.current&&W(V.current.value),className:"shrink-0 text-ink-3 active:text-accent",children:t.jsx(da,{size:14})}),t.jsx("input",{ref:V,type:"search",defaultValue:"",onInput:h=>l(h.target.value),onKeyDown:h=>{const C=h.nativeEvent;(h.key==="Enter"||C.keyCode===13)&&!C.isComposing&&C.keyCode!==229&&(h.preventDefault(),W(h.target.value))},enterKeyHint:"search",placeholder:s?"搜系统图标 / 品牌 / 在线…":"搜图标：耳机、水杯、微信、任一英文词…",className:"min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-ink-3"})]}),O?t.jsxs(t.Fragment,{children:[N.length>0?t.jsxs("div",{children:[t.jsx(pt,{children:"内置图标"}),t.jsx("div",{className:"space-y-3",children:N.map(h=>t.jsxs("div",{children:[t.jsx("p",{className:"mb-1 text-[10px] text-ink-3/80",children:h.label}),t.jsx("div",{className:"grid grid-cols-8 gap-2",children:h.items.map(({id:C})=>{const $=fa(C);return t.jsx("button",{type:"button",onClick:()=>a(C),"aria-label":C,title:C,className:`flex h-10 items-center justify-center rounded-btn border transition-all active:scale-95 ${e===C?"border-accent bg-accent-soft text-accent":"border-line bg-surface-2 text-ink-2"}`,children:t.jsx($,{size:18})},C)})})]},h.label))})]}):null,R&&R.length>0?t.jsxs("div",{children:[t.jsx(pt,{children:"品牌图标"}),t.jsx("div",{className:"grid grid-cols-5 gap-2",children:R.map(h=>t.jsx(Ns,{brand:h,base:S,active:e===at(De(S,h.domain)),onPick:()=>q(at(De(S,h.domain)),De(S,h.domain))},h.domain+h.name))})]}):P?t.jsxs("div",{children:[t.jsx(pt,{children:"域名直取"}),t.jsxs("button",{type:"button",onClick:()=>q(at(De(S,P)),De(S,P)),className:"flex w-full items-center justify-center gap-2 rounded-card border border-dashed border-line bg-surface-2 py-3 text-xs text-ink-2 active:scale-[0.99]",children:[t.jsx($n,{base:S,domain:P,size:20}),"获取 ",P," 的图标"]})]}):null,j.length>=2?t.jsxs("div",{children:[t.jsxs(pt,{children:["在线图标",k?t.jsx("span",{className:"ml-1 font-normal text-ink-3/70",children:"搜索中…"}):null]}),k?t.jsx("p",{className:"py-3 text-center text-xs text-ink-3",children:"正在检索图标…"}):t.jsxs(t.Fragment,{children:[T.length>0?t.jsx("div",{className:"mb-2 grid grid-cols-8 gap-2",children:T.map(h=>{const C=Wt(h.url,S);return t.jsx("button",{type:"button",onClick:()=>q(`url:${C}`,C),title:h.icon,"aria-label":h.icon,className:`flex h-10 items-center justify-center rounded-btn border bg-surface p-1.5 transition-all active:scale-95 ${e===`url:${C}`?"border-accent bg-accent-soft":"border-line"}`,children:t.jsx(hI,{abs:C,alt:h.icon})},h.icon)})}):null,D.length>0?t.jsx("ul",{className:"divide-y divide-line-2 overflow-hidden rounded-card border border-line bg-surface",children:D.map(h=>t.jsx("li",{children:t.jsxs("button",{type:"button",onClick:()=>q(at(De(S,h.domain)),De(S,h.domain)),className:`flex w-full items-center gap-2.5 px-3 py-2 text-left active:bg-surface-2 ${e===at(De(S,h.domain))?"bg-accent-soft":""}`,children:[t.jsx($n,{base:S,domain:h.domain,size:22}),t.jsx("span",{className:"min-w-0 flex-1 truncate text-xs text-ink-2",children:h.domain}),t.jsx("span",{className:"text-[11px] text-accent",children:"采用"})]})},h.domain))}):null]})]}):null,b?t.jsxs("p",{className:"rounded-card border border-dashed border-line bg-surface-2 p-4 text-center text-xs text-ink-3",children:["没有找到「",r,"」，换个说法试试，或切「网络图片 / 相册上传」"]}):null]}):v]})]})}const yI=[{key:"system",label:"系统图标",desc:"14 分类 · 单色线性 · 离线可用"},{key:"brand",label:"品牌图片",desc:"常见品牌官网图标"},{key:"net",label:"网络图片",desc:"搜商品名称/型号出真实商品图"},{key:"album",label:"相册图片",desc:"从手机相册选一张"},{key:"camera",label:"拍照",desc:"现场拍一张"}];function kI({open:e,onClose:a,onPick:n}){return wt(e,a),e?$e.createPortal(t.jsx("div",{className:"fixed inset-0 z-50 flex items-end bg-black/40",onClick:a,children:t.jsxs("div",{className:"sheet-enter mx-auto w-full max-w-md rounded-t-3xl bg-surface p-2 pb-[max(env(safe-area-inset-bottom),0.5rem)]",onClick:s=>s.stopPropagation(),children:[yI.map(s=>t.jsxs("button",{type:"button",onClick:()=>{Pe("select"),n(s.key)},className:"flex w-full flex-col items-center gap-0.5 border-b border-line py-3.5 last:border-b-0 active:bg-surface-2",children:[t.jsx("span",{className:"text-base font-medium text-ink",children:s.label}),t.jsx("span",{className:"text-[11px] text-ink-3",children:s.desc})]},s.key)),t.jsx("button",{type:"button",onClick:a,className:"mt-2 w-full rounded-2xl bg-surface-2 py-3.5 text-base font-semibold text-ink active:scale-[0.99]",children:"取消"})]})}),document.body):null}const Gb={goods:"物品分类",sub:"订阅分类",ledger:"记账分类"},fI="smartphone";function xI({kind:e,editing:a,onClose:n}){const s=Z(x=>x.categories),c=Z(x=>x.addCategory),i=Z(x=>x.updateCategory),d=!!a,[r,l]=u.useState(a?.name??""),[p,g]=u.useState(a&&Be(a.icon)!==Be(null)?a.icon:fI),m=async()=>{const x=r.trim();if(!x){J("请输入分类名称");return}if(d&&a)await i(a.id,{name:x,icon:p}),K("分类已保存");else{const y=s.filter(M=>M.kind===e).reduce((M,f)=>Math.max(M,f.order),-1);await c({name:x,icon:p,kind:e,order:y+1}),K("分类已新增")}n()};return $e.createPortal(t.jsx("div",{className:"fixed inset-0 z-50 flex items-end bg-black/40",onClick:n,children:t.jsxs("div",{className:"sheet-enter mx-auto max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-surface p-4",onClick:x=>x.stopPropagation(),style:{paddingBottom:"calc(env(safe-area-inset-bottom) + 2rem)"},children:[t.jsx("h3",{className:"mb-3 text-base font-semibold",children:d?"编辑分类":`新增${Gb[e]}`}),t.jsxs("div",{className:"space-y-3",children:[t.jsx(te,{label:"名称",children:t.jsx("input",{value:r,onChange:x=>l(x.target.value),placeholder:"例如 数码",enterKeyHint:"done",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"图标",children:t.jsx("div",{className:"max-h-52 space-y-2 overflow-y-auto rounded-btn border border-line bg-surface-2 p-2",children:S1.map(x=>t.jsxs("div",{children:[t.jsx("p",{className:"px-0.5 text-[10px] text-ink-3",children:x.group}),t.jsx("div",{className:"mt-1 grid grid-cols-8 gap-1.5",children:x.icons.map(k=>{const y=k.Icon;return t.jsx("button",{type:"button",title:k.label,"aria-label":k.label,onClick:()=>g(k.id),className:`flex h-9 items-center justify-center rounded-btn border ${p===k.id?"border-accent bg-accent-soft text-accent":"border-transparent bg-surface text-ink-2"}`,children:t.jsx(y,{size:18,strokeWidth:1.8,"aria-hidden":!0})},k.id)})})]},x.group))})}),t.jsx("button",{onClick:()=>void m(),className:"h-11 w-full rounded-btn bg-accent text-sm font-semibold text-white",children:d?"保存":"新增"})]})]})}),document.body)}function Ia({kind:e,onClose:a}){wt(!0,a);const n=Z(f=>f.categories),s=Z(f=>f.goods),c=Z(f=>f.subscriptions),i=Z(f=>f.valueRecords),d=Z(f=>f.updateCategory),r=Z(f=>f.removeCategory),{confirm:l}=fe.getState(),[p,g]=u.useState(null),m=u.useMemo(()=>n.filter(f=>f.kind===e).sort((f,z)=>f.order-z.order),[n,e]),x=f=>e==="goods"?s.filter(z=>z.categoryId===f.id).length:e==="sub"?c.filter(z=>z.categoryId===f.id).length:i.filter(z=>z.categoryId===f.id).length,k=e==="goods"?"件物品":e==="sub"?"个订阅":"笔流水",y=async(f,z)=>{const V=m.findIndex(j=>j.id===f),S=V+z;V===-1||S<0||S>=m.length||(await d(m[V].id,{order:m[S].order}),await d(m[S].id,{order:m[V].order}))},M=async f=>{const z=x(f),V=z>0?`该分类正被 ${z} ${k}使用，删除后它们将显示为未分类`:"该分类当前没有被使用";await l({title:`删除分类「${f.name}」？`,message:`${V}。数据本身不会被删除。`})&&(await r(f.id),K("分类已删除"))};return t.jsxs(t.Fragment,{children:[$e.createPortal(t.jsx("div",{className:"fixed inset-0 z-40 flex items-end bg-black/40",onClick:a,children:t.jsxs("div",{className:"sheet-enter mx-auto max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-surface p-4",onClick:f=>f.stopPropagation(),style:{paddingBottom:"calc(env(safe-area-inset-bottom) + 2rem)"},children:[t.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[t.jsxs("h2",{className:"text-base font-semibold",children:["管理",Gb[e]]}),t.jsx("button",{onClick:()=>g({}),className:"h-8 rounded-full bg-accent-soft px-3 text-xs font-medium text-accent",children:"＋ 新增"})]}),m.length===0?t.jsx("p",{className:"rounded-card border border-dashed border-line bg-surface-2 p-6 text-center text-xs text-ink-3",children:"还没有分类，点右上角「＋ 新增」建一个"}):t.jsx("ul",{className:"divide-y divide-line-2 overflow-hidden rounded-card border border-line bg-surface",children:m.map((f,z)=>{const V=Be(f.icon);return t.jsxs("li",{className:"flex items-center gap-2 px-3 py-2.5",children:[t.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-btn bg-surface-2 text-accent",children:t.jsx(V,{size:18,strokeWidth:1.8,"aria-hidden":!0})}),t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsx("p",{className:"truncate text-sm",children:f.name}),t.jsxs("p",{className:"text-[11px] text-ink-3",children:[x(f)," ",k]})]}),t.jsx("button",{onClick:()=>g({editing:f}),className:"h-8 shrink-0 rounded-btn bg-accent-soft px-2.5 text-xs font-medium text-accent",children:"编辑"}),t.jsx("button",{onClick:()=>void y(f.id,-1),disabled:z===0,"aria-label":`上移 ${f.name}`,className:"h-8 w-8 shrink-0 rounded-btn text-ink-2 active:bg-surface-2 disabled:opacity-30",children:"↑"}),t.jsx("button",{onClick:()=>void y(f.id,1),disabled:z===m.length-1,"aria-label":`下移 ${f.name}`,className:"h-8 w-8 shrink-0 rounded-btn text-ink-2 active:bg-surface-2 disabled:opacity-30",children:"↓"}),t.jsx("button",{onClick:()=>void M(f),"aria-label":`删除 ${f.name}`,className:"h-8 w-8 shrink-0 rounded-btn text-sm active:bg-surface-2",style:{color:"var(--fou)"},children:"✕"})]},f.id)})}),t.jsx("button",{onClick:a,className:"mt-4 h-11 w-full rounded-btn border border-line text-sm text-ink-2",children:"完成"})]})}),document.body),p?t.jsx(xI,{kind:e,editing:p.editing,onClose:()=>g(null)}):null]})}const Yb=[{code:"CNY",symbol:"¥",name:"人民币"},{code:"USD",symbol:"$",name:"美元"},{code:"EUR",symbol:"€",name:"欧元"},{code:"JPY",symbol:"¥",name:"日元"},{code:"GBP",symbol:"£",name:"英镑"},{code:"HKD",symbol:"HK$",name:"港币"},{code:"TWD",symbol:"NT$",name:"新台币"},{code:"KRW",symbol:"₩",name:"韩元"},{code:"SGD",symbol:"S$",name:"新加坡元"},{code:"AUD",symbol:"A$",name:"澳元"},{code:"CAD",symbol:"C$",name:"加元"},{code:"THB",symbol:"฿",name:"泰铢"}],gI=Yb.reduce((e,a)=>(e[a.code]=a.symbol,e),{});function Ea(e){return gI[e]??(e?`${e} `:"¥")}function Zb(e,a=2){return(Number.isFinite(e)?e:0).toLocaleString("zh-CN",{maximumFractionDigits:a})}function ne(e,a="CNY",n=!1){const s=Number.isFinite(e)?e:0;return`${n&&s<0?"-":""}${Ea(a)}${Zb(Math.abs(s))}`}function bI(e,a,n="CNY"){return`${a==="income"?"+":"-"}${Ea(n)}${Zb(Math.abs(e))}`}function Kb(e,a="CNY"){const n=Math.abs(Number.isFinite(e)?e:0);return n>=1e4?`${Ea(a)}${(n/1e4).toFixed(n%1e4===0?0:1)}万`:ne(e,a)}function Se(e,a=2){const n=10**a;return Math.round((Number.isFinite(e)?e:0)*n)/n}function vI(e){return e==="week"?52/12:e==="year"?1/12:1}function MI(e){const a=Number.isFinite(e?.amount)?e.amount:0,n=Math.max(Number.isFinite(e?.every)?e.every:1,1);return Se(a*vI(e.period)/n,4)}function Ss(e){return Se(e.filter(a=>(a?.status??"active")==="active").reduce((a,n)=>a+MI(n),0),2)}function wI(e,a){return Math.round((Date.parse(a)-Date.parse(e))/864e5)}function Ut(e,a=se()){const n=C1(e?.nextRenewDate)?e.nextRenewDate:a;return wI(a,n)}const Dn={month:"月",year:"年",week:"周"};function _I({icon:e,size:a=18,className:n}){return t.jsx(ct,{icon:e??"",size:a,className:n})}function jI({embedded:e=!1,addOpen:a,onAddOpenChange:n,openEditId:s}){const c=Z(H=>H.subscriptions),i=Z(H=>H.categories),d=Z(H=>H.bills),r=Z(H=>H.addSubscription),l=Z(H=>H.markBillPaid),p=de(H=>H.settings),g=de(H=>H.update),m=de(H=>H.settings.currency),[x,k]=u.useState(!1),y=a??x;wt(y,()=>M(!1));const M=H=>{k(H),n?.(H)},[f,z]=u.useState(""),[V,S]=u.useState(""),[j,w]=u.useState("month"),[N,R]=u.useState(se()),[P,W]=u.useState(""),[B,q]=u.useState(""),[G,O]=u.useState(null),[F,T]=u.useState(!1),D=u.useRef(null);u.useEffect(()=>{if(!s||D.current===s)return;const H=c.find(I=>I.id===s);H&&(D.current=s,O(H))},[s,c]);const _=u.useMemo(()=>i.filter(H=>H.kind==="sub").sort((H,I)=>H.order-I.order),[i]),A=H=>(p.archivedSubIds??[]).includes(H.id),b=c.filter(H=>!A(H)),v=c.filter(H=>A(H)),h=u.useMemo(()=>d.filter(H=>H.status==="pending"),[d]),[C,$]=u.useState("all"),E=u.useMemo(()=>[...C==="all"?b:b.filter(I=>I.categoryId===C)].sort((I,ce)=>Ut(I)-Ut(ce)),[b,C]),U=u.useMemo(()=>d.filter(H=>H.status==="paid"),[d]),Y=u.useMemo(()=>Math.round((b.reduce((H,I)=>H+(Number(I.initSpent)||0),0)+U.reduce((H,I)=>H+(Number(I.amount)||0)-(Number(I.refund)||0),0))*100)/100,[b,U]),ee=se().slice(0,7),ae=u.useMemo(()=>U.filter(H=>(H.paidDate??H.dueDate).slice(0,7)===ee).reduce((H,I)=>H+(Number(I.amount)||0),0),[U,ee]),he=u.useMemo(()=>h.filter(H=>H.dueDate.slice(0,7)===ee).reduce((H,I)=>H+(Number(I.amount)||0),0),[h,ee]),oe=u.useMemo(()=>b.filter(H=>H.type!=="lifetime").map(H=>({sub:H,days:Ut(H)})).filter(H=>H.days>=0&&H.days<=30).sort((H,I)=>H.days-I.days),[b]),le=async H=>{const I=p.archivedSubIds??[],ce=I.includes(H.id)?I.filter(ie=>ie!==H.id):[...I,H.id];await g({archivedSubIds:ce}),K(ce.includes(H.id)?"已停用（不再计入月均）":"已恢复在用")},L=async()=>{const H=Number(V);if(!f.trim()||!Number.isFinite(H)||H<=0){J("请填写名称和大于 0 的金额");return}await r({name:f.trim(),amount:H,period:j,every:1,startDate:N,nextRenewDate:N,categoryId:B||_[0]?.id,icon:P||void 0}),K("已添加订阅"),M(!1)},Q=H=>{const I=Ut(H),ce=i.find(ie=>ie.id===H.categoryId)?.name;return t.jsxs("li",{className:"rounded-card border border-line bg-surface",children:[t.jsxs("div",{onClick:()=>O(H),role:"button",className:"flex w-full cursor-pointer items-center gap-3 px-3.5 py-3 text-left active:opacity-70",children:[t.jsx("span",{className:"flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface-2 text-ink-2",children:t.jsx(_I,{icon:H.icon,size:20})}),t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsx("p",{className:"truncate text-sm font-medium",children:H.name}),t.jsxs("p",{className:"text-[11px] text-ink-3",children:[ce?`${ce} · `:"",ne(H.amount,H.currency),"/",Dn[H.period],H.type==="lifetime"?" · 买断":""]})]}),t.jsxs("div",{className:"shrink-0 text-right",children:[t.jsx("p",{className:"text-xs font-semibold",style:{color:I<0?"var(--fou)":I<=7?"var(--gui)":"var(--ink)"},children:I>=0?`${I} 天后续费`:`已逾期 ${-I} 天`}),t.jsx("button",{onClick:ie=>{ie.stopPropagation(),le(H)},className:"text-[11px] text-ink-3",children:A(H)?"恢复":"停用"})]})]}),h.some(ie=>ie.subId===H.id)?t.jsxs("div",{className:"flex items-center justify-between border-t border-line-2 px-3.5 py-2",children:[t.jsx("p",{className:"text-xs",style:{color:"var(--xu)"},children:"有待付账单"}),t.jsxs("button",{onClick:ie=>{ie.stopPropagation();const ge=h.find(Ve=>Ve.subId===H.id);l(ge.id).then(()=>K("已标记支付"))},className:"h-7 rounded-btn bg-accent-soft px-2.5 text-[11px] font-medium text-accent",children:["标记已付 ",ne(zI(h,H.id),m)]})]}):null]},H.id)},pe=t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mb-3 rounded-card border border-line bg-surface p-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("p",{className:"text-xs text-ink-3",children:"累计花费（含初始校准）"}),t.jsxs("span",{className:"rounded-full bg-surface-2 px-2 py-0.5 text-[11px] text-ink-3",children:["有效 ",b.length," 项"]})]}),t.jsx("p",{className:"mt-1 text-3xl font-bold leading-10",children:ne(Y,m)}),t.jsxs("div",{className:"mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-ink-3",children:[t.jsxs("span",{children:["本月已付 ",t.jsx("b",{className:"text-ink-2",children:ne(ae,m)})]}),t.jsxs("span",{children:["本月待续费 ",t.jsx("b",{className:"text-ink-2",children:ne(he,m)})]})]}),t.jsxs("div",{className:"mt-2.5 flex items-center justify-between rounded-btn bg-surface-2 px-3 py-2 text-xs",children:[t.jsxs("span",{className:"text-ink-3",children:["预计月均 ",t.jsx("b",{className:"text-sm text-ink",children:ne(Ss(b),m)})]}),t.jsxs("span",{className:"text-ink-3",children:["预计年化 ",t.jsx("b",{className:"text-sm text-ink",children:ne(Ss(b)*12,m)})]})]})]}),oe.length>0?t.jsxs("div",{className:"mb-3 rounded-card border border-line bg-surface px-3.5 py-3",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("p",{className:"text-xs font-semibold text-ink-2",children:[t.jsx(BM,{size:13,className:"mr-1 inline-block align-[-2px]"}),"未来 30 天 · ",oe.length," 项"]}),t.jsxs("p",{className:"text-[11px] text-ink-3",children:["合计 ",ne(oe.reduce((H,I)=>H+I.sub.amount,0),m)]})]}),t.jsxs("ul",{className:"mt-2 space-y-1.5",children:[oe.slice(0,3).map(({sub:H,days:I})=>t.jsxs("li",{className:"flex items-center justify-between text-xs",children:[t.jsxs("span",{className:"min-w-0 truncate text-ink-2",children:[I===0?"今天":I===1?"明天":`${I} 天后`," · ",H.name]}),t.jsx("span",{className:"ml-2 shrink-0 font-medium",children:ne(H.amount,H.currency)})]},H.id)),oe.length>3?t.jsxs("li",{className:"text-[11px] text-ink-3",children:["…还有 ",oe.length-3," 项，见下方列表"]}):null]})]}):null,t.jsx("div",{className:"mb-2 flex gap-1.5 overflow-x-auto pb-1",style:{scrollbarWidth:"none"},children:[{id:"all",name:"全部订阅"},..._].map(H=>t.jsx("button",{onClick:()=>$(H.id),className:`h-8 shrink-0 rounded-full border px-3.5 text-xs transition-all active:scale-95 ${C===H.id?"border-accent bg-accent-soft font-medium text-accent":"border-line bg-surface text-ink-3"}`,children:H.name},H.id))}),E.length===0?t.jsx("div",{className:"rounded-card border border-dashed border-line bg-surface p-10 text-center text-sm text-ink-3",children:c.length===0?"还没有订阅，点右上角添加":C==="all"?"全部已停用":"该分类下暂无在用订阅"}):t.jsx("ul",{className:"grid gap-2 md:grid-cols-2 xl:grid-cols-3",children:E.map(Q)}),v.length>0?t.jsxs(t.Fragment,{children:[t.jsx("h3",{className:"mb-2 mt-4 px-1 text-xs font-semibold text-ink-3",children:"已停用（不计入月均）"}),t.jsx("ul",{className:"grid gap-2 opacity-70 md:grid-cols-2 xl:grid-cols-3",children:v.map(Q)})]}):null,y?$e.createPortal(t.jsx("div",{className:"fixed inset-0 z-40 flex items-end bg-black/40",onClick:()=>M(!1),children:t.jsxs("div",{className:"sheet-enter mx-auto max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-surface p-4",onClick:H=>H.stopPropagation(),style:{paddingBottom:"calc(env(safe-area-inset-bottom) + 2rem)"},children:[t.jsx("h2",{className:"mb-3 text-base font-semibold",children:"添加订阅"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-xs font-medium text-ink-2",children:"图标"}),t.jsx("div",{className:"mt-1.5",children:t.jsx(O1,{value:P,onChange:W})})]}),t.jsx(Jb,{value:B,onChange:q,onManage:()=>T(!0)}),t.jsx(te,{label:"名称",children:t.jsx("input",{defaultValue:f,onChange:H=>z(H.target.value),placeholder:"例如：B 站大会员",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t.jsx(te,{label:"金额",children:t.jsx("input",{defaultValue:V,onChange:H=>S(H.target.value.replace(/[^\d.]/g,"")),inputMode:"decimal",placeholder:"0.00",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"周期",children:t.jsx("div",{className:"flex gap-1",children:["month","year","week"].map(H=>t.jsx("button",{onClick:()=>w(H),className:`h-11 flex-1 rounded-btn border text-sm ${j===H?"border-accent bg-accent-soft text-accent":"border-line text-ink-2"}`,children:Dn[H]},H))})})]}),t.jsx(te,{label:"开始日期",children:t.jsx("input",{type:"date",value:N,onChange:H=>R(H.target.value),className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none"})}),t.jsx("button",{onClick:()=>void L(),disabled:!f.trim()||!Number(V),className:"h-12 w-full rounded-btn bg-accent text-base font-semibold text-white disabled:opacity-40",children:"添加"})]})]})}),document.body):null,G?t.jsx($I,{initial:G,onClose:()=>O(null)}):null,F?t.jsx(Ia,{kind:"sub",onClose:()=>T(!1)}):null]});return e?pe:t.jsx(He,{title:"订阅管理",right:t.jsx("button",{onClick:()=>M(!0),className:"h-9 rounded-btn bg-accent px-3 text-sm font-medium text-white",children:"＋ 订阅"}),children:pe})}function zI(e,a){return e.find(n=>n.subId===a&&n.status==="pending")?.amount??0}function Jb({value:e,onChange:a,onManage:n}){const s=Z(d=>d.categories),c=u.useMemo(()=>s.filter(d=>d.kind==="sub").sort((d,r)=>d.order-r.order),[s]),i=e||c[0]?.id||"";return t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("p",{className:"text-xs font-medium text-ink-2",children:"分类"}),t.jsx("button",{type:"button",onClick:n,className:"text-xs font-medium text-accent",children:"管理"})]}),t.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1.5",children:c.map(d=>t.jsx("button",{type:"button",onClick:()=>a(d.id),className:`h-8 rounded-full border px-3 text-xs transition-all active:scale-95 ${i===d.id?"border-accent bg-accent-soft font-medium text-accent":"border-line text-ink-2"}`,children:d.name},d.id))})]})}function $I({initial:e,onClose:a}){wt(!0,a);const n=Z(O=>O.updateSubscription),s=Z(O=>O.removeById),c=de(O=>O.settings),i=de(O=>O.update),{confirm:d}=fe.getState(),[r,l]=u.useState(e.name),[p,g]=u.useState(String(e.amount??"")),[m,x]=u.useState(e.period),[k,y]=u.useState(String(e.every??1)),[M,f]=u.useState(e.nextRenewDate),[z,V]=u.useState(e.note??""),[S,j]=u.useState(e.icon??""),[w,N]=u.useState(e.categoryId??""),[R,P]=u.useState(!1),W=(c.archivedSubIds??[]).includes(e.id),B=async()=>{const O=Number(p),F=Math.max(1,Math.round(Number(k)||1));if(!r.trim()||!Number.isFinite(O)||O<=0){J("请填写名称和大于 0 的金额");return}const T={name:r.trim(),amount:O,period:m,every:F,nextRenewDate:M,categoryId:w||e.categoryId,icon:S||void 0,note:z.trim()||void 0};await n(e.id,T),K("已保存"),a()},q=async()=>{const O=c.archivedSubIds??[],F=O.includes(e.id)?O.filter(T=>T!==e.id):[...O,e.id];await i({archivedSubIds:F}),K(F.includes(e.id)?"已停用（不再计入月均）":"已恢复在用")},G=async()=>{await d({title:`删除「${e.name}」？`,message:"删除后不可恢复；如只是暂时不用，建议用「停用」。"})&&(await s("subscriptions",e.id),K("已删除"),a())};return t.jsxs(t.Fragment,{children:[$e.createPortal(t.jsx("div",{className:"fixed inset-0 z-40 flex items-end bg-black/40",onClick:a,children:t.jsxs("div",{className:"sheet-enter mx-auto max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-surface p-4",onClick:O=>O.stopPropagation(),style:{paddingBottom:"calc(env(safe-area-inset-bottom) + 2rem)"},children:[t.jsx("h2",{className:"mb-3 text-base font-semibold",children:"编辑订阅"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-xs font-medium text-ink-2",children:"图标"}),t.jsx("div",{className:"mt-1.5",children:t.jsx(O1,{value:S,onChange:j})})]}),t.jsx(Jb,{value:w,onChange:N,onManage:()=>P(!0)}),t.jsx(te,{label:"名称",children:t.jsx("input",{defaultValue:r,onChange:O=>l(O.target.value),placeholder:"例如：B 站大会员",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t.jsx(te,{label:"金额",children:t.jsx("input",{defaultValue:p,onChange:O=>g(O.target.value.replace(/[^\d.]/g,"")),inputMode:"decimal",placeholder:"0.00",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"周期",children:t.jsx("div",{className:"flex gap-1",children:["week","month","year"].map(O=>t.jsx("button",{onClick:()=>x(O),className:`h-11 flex-1 rounded-btn border text-sm transition-all active:scale-95 ${m===O?"border-accent bg-accent-soft text-accent":"border-line text-ink-2"}`,children:Dn[O]},O))})})]}),t.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t.jsx(te,{label:"每隔（几个周期扣一次）",children:t.jsx("input",{defaultValue:k,onChange:O=>y(O.target.value.replace(/[^\d]/g,"")),inputMode:"numeric",placeholder:"1",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"下次续费日期",children:t.jsx("input",{type:"date",value:M,onChange:O=>f(O.target.value),className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none"})})]}),t.jsx(te,{label:"备注（可选）",children:t.jsx("input",{defaultValue:z,onChange:O=>V(O.target.value),className:"h-10 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{onClick:()=>void q(),className:"h-10 flex-1 rounded-btn border border-line text-xs text-ink-2 active:scale-95 transition-transform",children:W?"恢复在用":"停用（不计月均）"}),t.jsx("button",{onClick:()=>void G(),className:"h-10 flex-1 rounded-btn border border-line text-xs active:scale-95 transition-transform",style:{color:"var(--fou)"},children:"删除"})]}),t.jsx("button",{onClick:()=>void B(),disabled:!r.trim()||!Number(p),className:"h-12 w-full rounded-btn bg-accent text-base font-semibold text-white active:scale-[0.98] transition-transform disabled:opacity-40",children:"保存"})]})]})}),document.body),R?t.jsx(Ia,{kind:"sub",onClose:()=>P(!1)}):null]})}const Ye="1.0.17";function DI(e,a){const n=String(e??"").trim().split("."),s=String(a).trim().split("."),c=Math.max(n.length,s.length);for(let i=0;i<c;i+=1){const d=parseInt(n[i]??"0",10)||0,r=parseInt(s[i]??"0",10)||0;if(d!==r)return d>r?1:-1}return 0}const Nn=[{to:"/home",label:"首页",Icon:qt},{to:"/ledger",label:"生活流",Icon:Mf},{to:"/report",label:"报表",Icon:mn},{to:"/me",label:"我的",Icon:cg}],Xb=new Set(["/home","/ledger","/report","/me","/wall"]),xa="gf.shellPref";function NI(){try{const e=new URLSearchParams(window.location.search),a=e.get("ui");if(a==="pc"||a==="mobile"){localStorage.setItem(xa,a),e.delete("ui");const n=e.toString();return window.history.replaceState(null,"",window.location.pathname+(n?`?${n}`:"")+window.location.hash),a}}catch{}return null}function Cs(){try{const e=localStorage.getItem(xa);if(e==="pc"||e==="mobile")return e}catch{}return"auto"}function Qb(e){try{e?localStorage.setItem(xa,e):localStorage.removeItem(xa)}catch{}window.dispatchEvent(new Event("gf:shell-pref"))}function e7(e){const[a,n]=u.useState(()=>window.matchMedia(e).matches);return u.useEffect(()=>{const s=window.matchMedia(e),c=i=>n(i.matches);return s.addEventListener("change",c),()=>s.removeEventListener("change",c)},[e]),a}function t7(){const e=e7("(min-width: 1024px)"),[a,n]=u.useState(()=>(NI(),Cs()));return u.useEffect(()=>{const c=()=>n(Cs());return window.addEventListener("gf:shell-pref",c),()=>window.removeEventListener("gf:shell-pref",c)},[]),(a==="pc"?!0:a==="mobile"?!1:e)?"desktop":"mobile"}const a7={background:"linear-gradient(to bottom, color-mix(in srgb, var(--surface) 52%, transparent), color-mix(in srgb, var(--surface) 66%, transparent))",border:"1px solid color-mix(in srgb, var(--surface) 55%, transparent)",boxShadow:"inset 0 1px 0 color-mix(in srgb, white 55%, transparent), inset 0 -1px 0 color-mix(in srgb, var(--line) 40%, transparent), 0 12px 36px rgba(0,0,0,0.14)",backdropFilter:"blur(28px) saturate(180%)",WebkitBackdropFilter:"blur(28px) saturate(180%)"};function SI({children:e}){const{pathname:a}=Pt(),n=t7();return a==="/admin"||a.startsWith("/admin/")?t.jsx("div",{className:"min-h-screen bg-paper text-ink",children:e}):n==="desktop"?t.jsx(CI,{children:e}):t.jsx(qI,{children:e})}function CI({children:e}){const{pathname:a}=Pt(),n=ke(),s=!e7("(min-width: 1024px)"),c=Xb.has(a),i=s?"w-14":"w-60";return t.jsxs("div",{className:"flex min-h-screen bg-paper text-ink",children:[t.jsxs("aside",{className:`fixed inset-y-0 left-0 z-30 flex flex-col ${i}`,style:{background:"var(--side)",color:"var(--side-ink)"},children:[t.jsxs("div",{className:`flex items-center ${s?"justify-center":"gap-2.5 px-5"} pt-6 pb-4`,children:[t.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",style:{background:"var(--side-2)"},children:t.jsx(Tt,{size:20,strokeWidth:1.8,"aria-hidden":!0})}),s?null:t.jsxs("span",{className:"min-w-0",children:[t.jsx("span",{className:"block text-base font-semibold leading-tight",children:"纳物"}),t.jsx("span",{className:"block text-[11px]",style:{color:"var(--side-dim)"},children:"NaWu"})]})]}),t.jsx("div",{className:s?"px-2":"px-4",children:t.jsxs("button",{onClick:()=>{Pe("medium"),n("/ai")},"aria-label":"AI 记一笔",className:`flex items-center font-medium transition-transform active:scale-95 ${s?"h-10 w-10 justify-center rounded-xl":"h-10 w-full justify-center gap-2 rounded-xl text-sm"}`,style:{background:"var(--accent)",color:"#fff"},children:[t.jsx(Sa,{size:18,strokeWidth:1.8,"aria-hidden":!0}),s?null:"AI 记一笔"]})}),t.jsx("nav",{className:`mt-4 flex-1 ${s?"px-2":"px-3"}`,children:Nn.map(d=>t.jsx(AI,{...d,narrow:s},d.to))}),t.jsxs("div",{className:`${s?"px-2":"px-3"} pb-4`,children:[t.jsx(As,{Icon:Rt,label:"管理后台",narrow:s,onClick:()=>n("/admin")}),t.jsx(As,{Icon:kt,label:"手机版网页",narrow:s,onClick:()=>Qb("mobile")}),s?null:t.jsxs("p",{className:"px-2 pt-3 text-[11px]",style:{color:"var(--side-dim)"},children:["纳物网页版 v",Ye]})]})]}),t.jsx("div",{className:"min-w-0 flex-1",style:{paddingLeft:s?56:240},children:c?t.jsx("div",{className:"mx-auto w-full max-w-5xl px-8 pb-20 pt-8",children:e}):t.jsx("div",{className:"mx-auto w-full max-w-3xl px-6 pb-20 pt-8",children:e})})]})}function AI({to:e,label:a,Icon:n,narrow:s}){return t.jsxs(ic,{to:e,title:a,onClick:()=>void Pe("select"),className:`mb-1 flex items-center rounded-xl text-sm transition-colors ${s?"h-10 justify-center":"h-11 gap-3 px-3"}`,style:({isActive:c})=>({background:c?"var(--side-2)":"transparent",color:c?"var(--side-ink)":"var(--side-dim)",fontWeight:c?600:400}),children:[t.jsx(n,{size:20,strokeWidth:1.8,"aria-hidden":!0}),s?null:a]})}function As({Icon:e,label:a,narrow:n,onClick:s}){return t.jsxs("button",{onClick:s,title:a,className:`mb-1 flex w-full items-center rounded-xl text-sm transition-colors hover:bg-white/5 ${n?"h-10 justify-center":"h-10 gap-3 px-3"}`,style:{color:"var(--side-dim)"},children:[t.jsx(e,{size:20,strokeWidth:1.8,"aria-hidden":!0}),n?null:a]})}function qI({children:e}){const{pathname:a}=Pt(),n=ke();return Xb.has(a)?t.jsxs("div",{className:"flex min-h-full flex-col bg-surface-2 text-ink",style:{paddingTop:"env(safe-area-inset-top)"},children:[t.jsx("main",{className:"mx-auto w-full max-w-xl flex-1 px-4 pb-36 pt-2",children:e}),t.jsxs("nav",{className:"fixed inset-x-3 z-30 mx-auto flex w-[calc(100%-1.5rem)] max-w-[calc(36rem-1.5rem)] items-stretch rounded-[28px] shadow-lg shadow-black/10",style:{...a7,bottom:"calc(env(safe-area-inset-bottom) + 8px)"},children:[Nn.slice(0,2).map(s=>t.jsx(qs,{...s},s.to)),t.jsx("div",{className:"relative w-16 shrink-0",children:t.jsx("button",{onClick:()=>{Pe("medium"),n("/ai")},"aria-label":"AI 记一笔",className:"absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-3xl font-light text-white shadow-lg shadow-accent/40 active:scale-95",style:{boxShadow:"0 10px 24px color-mix(in srgb, var(--accent) 40%, transparent)"},children:"＋"})}),Nn.slice(2).map(s=>t.jsx(qs,{...s},s.to))]})]}):t.jsx(t.Fragment,{children:e})}function qs({to:e,label:a,Icon:n}){return t.jsx(ic,{to:e,onClick:()=>void Pe("select"),className:({isActive:s})=>`flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] ${s?"font-semibold text-accent":"text-ink-3"}`,children:({isActive:s})=>t.jsxs(t.Fragment,{children:[t.jsx("span",{className:`flex h-8 w-12 items-center justify-center rounded-2xl transition-all ${s?"scale-105 bg-accent-soft":""}`,children:t.jsx(n,{size:22,strokeWidth:1.8,"aria-hidden":!0})}),a]})})}function Le(e){const a=Number.isFinite(e?.price)?e.price:0,n=Array.isArray(e?.extraFees)?e.extraFees.reduce((s,c)=>s+(Number.isFinite(c?.amount)?c.amount:0),0):0;return Se(a+n)}function n7(e){const a=Number.isFinite(e?.sellPrice)?e.sellPrice:0;return Se(Le(e)-a)}function ga(e,a=se()){const n=C1(e?.buyDate)?e.buyDate:a,s=-vn(n)+vn(a),c=Math.floor((Date.parse(a)-Date.parse(n))/864e5),i=Number.isFinite(c)?c:s;return Math.max(1,i+1)}function Ie(e,a=se()){return Se(n7(e)/ga(e,a),4)}function LI(e){const a=e?.countEnabled?Math.max(e.usedCount??0,1):Math.max(e.usedCount??1,1);return Se(n7(e)/a,4)}function HI(e,a=se()){const n=Number.isFinite(e?.targetDailyCost)?e.targetDailyCost:0;if(n<=0)return 0;const s=Ie(e,a);return s<=0?1:Math.max(0,Math.min(1,Se(n/s,4)))}function VI(e){return e==="retired"?"已退役":e==="favorite"?"心爱":"在用"}function II(e,a="buyDate",n=se()){const s=[...e];switch(a){case"price":return s.sort((c,i)=>Le(i)-Le(c));case"dailyCost":return s.sort((c,i)=>Ie(i,n)-Ie(c,n));case"name":return s.sort((c,i)=>(c.name??"").localeCompare(i.name??"","zh-CN"));case"buyDate":default:return s.sort((c,i)=>(i.buyDate??"").localeCompare(c.buyDate??""))}}const re={paper:"#f5f3ee",accent:"#2e6e5a",accentSoft:"#e3ede8",ink:"#26302c",ink3:"#8a938f",line:"#e4e2da"},Ka="纳物";function o7(e,a=6e3){return new Promise(n=>{const s=new Image;s.crossOrigin="anonymous";const c=setTimeout(()=>n(null),a);s.onload=()=>{clearTimeout(c),n(s)},s.onerror=()=>{clearTimeout(c),n(null)},s.src=e})}function B1(e){const a=e.image,n=(a?.ref??"").trim();return n?a?.source==="local"||n.startsWith("data:")?`img:${n}`:a?.source==="web"||/^https?:\/\//i.test(n)?`url:${n}`:"":""}function EI(e){const a=(e??"").trim();if(!a)return null;if(a.startsWith("img:"))return a.slice(4).trim();if(a.startsWith("url:")){let n=a.slice(4).trim();if(!/^https?:\/\//i.test(n)){const s=ue()?.url||(typeof window<"u"?window.location.origin:"")||"";if(!s)return null;n=`${s}${n.startsWith("/")?"":"/"}${n}`}if(n.includes("api.iconify.design")){const s=ue()?.url??(typeof window<"u"?window.location.origin:"");s&&(n=`${s}/api/icon/proxy?u=${encodeURIComponent(n)}`)}return n}return null}async function s7(e){const a=EI(e);return a?a.startsWith("data:")?a:await Ib([a])??a:null}function Re(e,a,n,s,c,i){e.beginPath(),e.moveTo(a+i,n),e.arcTo(a+s,n,a+s,n+c,i),e.arcTo(a+s,n+c,a,n+c,i),e.arcTo(a,n+c,a,n,i),e.arcTo(a,n,a+s,n,i),e.closePath()}function ut(e,a=!1){const n=Number.isFinite(e)?e:0;return a?n.toLocaleString("zh-CN",{minimumFractionDigits:2,maximumFractionDigits:2}):n.toLocaleString("zh-CN",{maximumFractionDigits:2})}function c7(e){const a=(e??"").trim();if(a.startsWith("img:"))return"cover";if(a.startsWith("url:")){const n=a.slice(4).toLowerCase();if(n.includes("/api/img/")||n.includes("bing.net")||n.includes("tse"))return"cover"}return"contain"}const PI=180;function i7(e,a,n,s,c,i,d,r){const l=a.width||1,p=a.height||1,g=r==="cover"&&Math.min(l,p)>=PI,m=g?0:Math.min(c,i)*.08,x=c-m*2,k=i-m*2,y=g?Math.max(x/l,k/p):Math.min(x/l,k/p),M=l*y,f=p*y;e.save(),d>0&&(Re(e,n,s,c,i,d),e.clip()),e.drawImage(a,n+(c-M)/2,s+(i-f)/2,M,f),e.restore()}function r7(e,a,n,s,c,i,d=0){d>0&&(e.fillStyle=re.accentSoft,Re(e,n,s,c,i,d),e.fill());const r=Math.min(c,i)*.24;e.fillStyle="#ffffff",e.beginPath(),e.arc(n+c/2,s+i/2,r,0,Math.PI*2),e.fill(),e.fillStyle=re.accent,e.font=`700 ${Math.round(r)}px system-ui, sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText((a||"物").charAt(0),n+c/2,s+i/2+r*.04),e.textAlign="left",e.textBaseline="alphabetic"}function yt(e,a,n){if(n<=0)return"";if(e.measureText(a).width<=n)return a;let s=0,c=a.length;for(;s<c;){const i=Math.ceil((s+c)/2);e.measureText(`${a.slice(0,i)}…`).width<=n?s=i:c=i-1}return`${a.slice(0,s)}…`}async function d7(e,a){const d=document.createElement("canvas");d.width=900,d.height=1200;const r=d.getContext("2d");if(!r)throw new Error("画布不可用");const l=(e.note??"").trim(),p=116,g=l?540:580,m=64,x=772;r.fillStyle=re.paper,r.fillRect(0,0,900,1200),r.fillStyle=re.accent,r.fillRect(0,0,900,10),r.fillStyle=re.ink,r.font="700 40px system-ui, sans-serif",r.fillText("纳物",64,92),r.fillStyle=re.ink3,r.font="400 24px system-ui, sans-serif",r.textAlign="right",r.fillText("值得的花销，值得记录",836,92),r.textAlign="left",r.fillStyle="#ffffff",Re(r,m,p,x,g,32),r.fill();const k=B1(e),y=await s7(k);let M=!1;if(y){const B=await o7(y);B&&(i7(r,B,m,p,x,g,32,c7(k)),M=!0)}M||r7(r,e.name,m,p,x,g,32),r.strokeStyle=re.line,r.lineWidth=2,Re(r,m,p,x,g,32),r.stroke();let f=p+g+74;r.fillStyle=re.ink,r.font="700 54px system-ui, sans-serif",r.fillText(yt(r,e.name||"未命名物品",772),64,f),l&&(f+=42,r.fillStyle=re.ink3,r.font="400 24px system-ui, sans-serif",r.fillText(yt(r,l,772),64,f));const z=f+30,V=52;let S=64;r.font="500 24px system-ui, sans-serif";const j=(B,q,G)=>{const O=r.measureText(B).width+40;return S+O>836?!1:(r.fillStyle=q,Re(r,S,z,O,V,V/2),r.fill(),r.fillStyle=G,r.fillText(B,S+20,z+V/2+9),S+=O+12,!0)};a&&j(a,re.accentSoft,re.accent),j(VI(e.status),"#eae7e0",e.status==="retired"?re.ink3:"#4c5b53");for(const B of(e.tags??[]).slice(0,3))if(!j(`#${B}`,"#f0eee8",re.ink3))break;const w=20,N=(772-w)/2,R=104,P=z+V+42;return[["总投入",`¥${ut(Le(e))}`],["日均成本",`¥${ut(Ie(e),!0)}`],["已陪伴",`${ga(e)} 天`],["购入于",C1(e.buyDate)?e.buyDate:"—"]].forEach(([B,q],G)=>{const O=64+G%2*(N+w),F=P+Math.floor(G/2)*(R+w);r.fillStyle="#ffffff",Re(r,O,F,N,R,24),r.fill(),r.strokeStyle=re.line,r.lineWidth=2,Re(r,O,F,N,R,24),r.stroke(),r.fillStyle=re.ink3,r.font="400 22px system-ui, sans-serif",r.fillText(B,O+24,F+40),r.fillStyle=re.ink,r.font="700 36px system-ui, sans-serif",r.fillText(yt(r,q,N-48),O+24,F+82)}),r.fillStyle=re.ink3,r.font="400 22px system-ui, sans-serif",r.fillText(`由「纳物」生成 · ${new Date().toLocaleDateString("zh-CN")}`,64,1156),r.textAlign="right",r.fillText("NaWu",836,1156),r.textAlign="left",d.toDataURL("image/png")}async function TI(e){const i=254.66666666666666,d=Math.round(i*.82),r=d+108,l=Math.max(1,Math.ceil(e.length/3)),p=216,m=p+l*(r+20)-20+92,x=document.createElement("canvas");x.width=900,x.height=m;const k=x.getContext("2d");if(!k)throw new Error("画布不可用");k.fillStyle=re.paper,k.fillRect(0,0,900,m),k.fillStyle=re.accent,k.fillRect(0,0,900,12),k.fillStyle=re.ink,k.font="700 52px system-ui, sans-serif",k.fillText("纳物 · 置物墙",48,116);const y=e.reduce((M,f)=>M+Le(f.g),0);k.fillStyle=re.ink3,k.font="400 26px system-ui, sans-serif",k.fillText(`${e.length} 件在役 · 总投入 ¥${ut(y)} · 日均 ¥${ut(e.reduce((M,f)=>M+Ie(f.g),0),!0)}`,48,160),k.font="400 22px system-ui, sans-serif",k.fillText("NaWu · 值得的花销，值得记录",48,196);for(let M=0;M<e.length;M+=1){const f=48+M%3*(i+20),z=p+Math.floor(M/3)*(r+20);k.fillStyle="#ffffff",Re(k,f,z,i,r,24),k.fill(),k.strokeStyle=re.line,k.lineWidth=2,Re(k,f,z,i,r,24),k.stroke(),k.fillStyle="#ffffff";const V=f+14,S=z+14,j=i-28,w=d,N=B1(e[M].g),R=await s7(N);let P=!1;if(R){const G=await o7(R);G&&(i7(k,G,V,S,j,w,16,c7(N)),P=!0)}P||r7(k,e[M].g.name,V,S,j,w,16);const W=e[M].g.name||"未命名";k.fillStyle=re.ink,k.font="600 24px system-ui, sans-serif",k.textAlign="left",k.fillText(yt(k,W,i-28),f+14,z+d+44),k.fillStyle=re.accent,k.font="700 26px system-ui, sans-serif";const B=`¥${ut(Le(e[M].g))}`;k.fillText(yt(k,B,(i-28)*.55),f+14,z+d+82),k.fillStyle=re.ink3,k.font="400 20px system-ui, sans-serif";const q=`日均 ¥${ut(Ie(e[M].g),!0)}`;k.textAlign="right",k.fillText(yt(k,q,(i-28)*.5),f+i-14,z+d+82),k.textAlign="left"}return k.fillStyle=re.ink3,k.font="400 20px system-ui, sans-serif",k.textAlign="center",k.fillText(`由「纳物」生成 · ${new Date().toLocaleDateString("zh-CN")}`,900/2,m-30),k.textAlign="left",x.toDataURL("image/png")}async function Sn(e,a){if(dt.isNativePlatform())try{const{Media:s}=await Me(async()=>{const{Media:d}=await import("./index-isL4k-1u.js");return{Media:d}},__vite__mapDeps([6,1]),import.meta.url);let c="";try{const{albums:d}=await s.getAlbums();c=d.find(r=>r.name===Ka)?.identifier??""}catch{}if(!c){await s.createAlbum({name:Ka});const{albums:d}=await s.getAlbums();c=d.find(r=>r.name===Ka)?.identifier??""}const i=a.replace(/\.png$/i,"");return await s.savePhoto({path:e,albumIdentifier:c||void 0,fileName:i}),"saved"}catch(s){be.warn("savePhoto failed, fallback to share/download",s)}try{const s=await(await fetch(e)).blob(),c=new File([s],a,{type:"image/png"}),i=navigator;if(i.canShare?.({files:[c]})&&i.share)return await i.share({files:[c]}),"shared"}catch{}const n=document.createElement("a");return n.href=e,n.download=a,n.click(),"downloaded"}const RI={grid3:Ht,grid2:un,list:OD},mt="color-mix(in srgb, var(--accent-soft) 55%, var(--surface))",OI=[{key:"all",label:"全部"},{key:"active",label:"在役"},{key:"retired",label:"退役"},{key:"favorite",label:"收藏"}],BI=[{key:"buyDate",label:"最近购入"},{key:"dailyCost",label:"日均↓"},{key:"price",label:"价格↓"},{key:"name",label:"名称"}];function FI(e,a=se()){const n=xe(e);if(!e||!n.isValid())return"1 天";const s=xe(a).diff(n,"month");if(s<=0)return`${Math.max(xe(a).diff(n,"day"),0)+1} 天`;const c=xe(a).diff(n.add(s,"month"),"day");return`${s} 个月${c} 天`}function Dt(e){return!!(e.image?.ref&&e.image.ref.startsWith("data:"))}function Nt(e){return!!(e.image?.ref&&e.image.ref.startsWith("http"))}function Ja(e){return e.status==="retired"&&Number.isFinite(e?.sellPrice)&&e.sellPrice>0}function WI(e){const a=Number.isFinite(e?.sellPrice)?e.sellPrice:0,n=a-Le(e);return a>0&&n>0?{label:"净赚",text:ne(n,e.currency)}:{label:"",text:ne(e.price,e.currency)}}function UI(e,a){return new Promise((n,s)=>{const c=new FileReader;c.onerror=()=>s(new Error("读取图片失败")),c.onload=()=>{const i=new Image;i.onerror=()=>s(new Error("解析图片失败")),i.onload=()=>{const d=Math.min(1,a/Math.max(i.width,i.height)),r=Math.max(1,Math.round(i.width*d)),l=Math.max(1,Math.round(i.height*d)),p=document.createElement("canvas");p.width=r,p.height=l;const g=p.getContext("2d");if(!g){s(new Error("画布不可用"));return}g.drawImage(i,0,0,r,l),n(p.toDataURL("image/jpeg",.82))},i.src=String(c.result)},c.readAsDataURL(e)})}function GI({on:e,onClick:a,label:n}){return t.jsx("button",{onClick:a,role:"switch","aria-checked":e,"aria-label":n,className:`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${e?"border-accent bg-accent":"border-line bg-surface-2"}`,children:t.jsx("span",{className:`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow transition-all ${e?"left-[26px]":"left-[2px]"}`})})}function Te({label:e,value:a,color:n}){return t.jsxs("div",{className:"min-w-0",children:[t.jsx("p",{className:"text-[11px] text-ink-3",children:e}),t.jsx("p",{className:"tnum truncate text-sm font-semibold",style:n?{color:n}:void 0,children:a})]})}function YI({src:e,onConfirm:a,onCancel:n,onPickAnother:s}){wt(!0,n);const c=u.useMemo(()=>Math.max(200,Math.min(window.innerWidth-48,480)),[]),[i,d]=u.useState(null),[r,l]=u.useState({scale:1,x:0,y:0}),p=u.useRef(null),g=u.useRef(null),m=u.useRef(r);m.current=r;const x=u.useRef(null);u.useEffect(()=>{const j=new Image;j.onload=()=>{p.current=j,g.current={w:j.naturalWidth,h:j.naturalHeight},d({w:j.naturalWidth,h:j.naturalHeight})},j.src=e},[e]);const k=i?Math.max(c/i.w,c/i.h):1;u.useEffect(()=>{const j=x.current;if(!j)return;const w=b=>Math.hypot(b[0].clientX-b[1].clientX,b[0].clientY-b[1].clientY),N=(b,v,h)=>{const C=g.current;if(!C)return{x:v,y:h};const $=Math.max(c/C.w,c/C.h),E=Math.max(0,(C.w*$*b-c)/2),U=Math.max(0,(C.h*$*b-c)/2);return{x:Math.min(E,Math.max(-E,v)),y:Math.min(U,Math.max(-U,h))}};let R="none",P=0,W=0,B=0,q=0,G=0,O=1,F=0;const T=b=>{b.touches.length===1?(R="pan",P=b.touches[0].clientX,W=b.touches[0].clientY,B=m.current.x,q=m.current.y):b.touches.length>=2&&(R="pinch",G=w(b.touches),O=m.current.scale,P=(b.touches[0].clientX+b.touches[1].clientX)/2,W=(b.touches[0].clientY+b.touches[1].clientY)/2,B=m.current.x,q=m.current.y)},D=b=>{if(R==="none")return;b.preventDefault();const v=m.current;if(R==="pan"&&b.touches.length===1){const h=N(v.scale,B+b.touches[0].clientX-P,q+b.touches[0].clientY-W);l({scale:v.scale,...h})}else if(R==="pinch"&&b.touches.length>=2){const h=Math.min(4,Math.max(1,O*w(b.touches)/G)),C=(b.touches[0].clientX+b.touches[1].clientX)/2,$=(b.touches[0].clientY+b.touches[1].clientY)/2,E=N(h,B+C-P,q+$-W);l({scale:h,...E})}},_=b=>{if(b.touches.length===0){const v=Date.now();R==="pan"&&v-F<300?(l({scale:1,x:0,y:0}),F=0):R==="pan"&&(F=v),R="none"}else b.touches.length===1&&R==="pinch"&&(R="pan",P=b.touches[0].clientX,W=b.touches[0].clientY,B=m.current.x,q=m.current.y)},A=b=>{b.preventDefault();const v=m.current,h=Math.min(4,Math.max(1,v.scale*(b.deltaY<0?1.1:.9))),C=N(h,v.x,v.y);l({scale:h,...C})};return j.addEventListener("touchstart",T,{passive:!1}),j.addEventListener("touchmove",D,{passive:!1}),j.addEventListener("touchend",_),j.addEventListener("touchcancel",_),j.addEventListener("wheel",A,{passive:!1}),()=>{j.removeEventListener("touchstart",T),j.removeEventListener("touchmove",D),j.removeEventListener("touchend",_),j.removeEventListener("touchcancel",_),j.removeEventListener("wheel",A)}},[c]);const y=u.useRef(null),M=j=>{y.current={x:j.clientX,y:j.clientY,bx:m.current.x,by:m.current.y}},f=j=>{const w=y.current,N=g.current;if(!w||!N)return;const R=Math.max(c/N.w,c/N.h),P=m.current.scale,W=Math.max(0,(N.w*R*P-c)/2),B=Math.max(0,(N.h*R*P-c)/2),q=Math.min(W,Math.max(-W,w.bx+j.clientX-w.x)),G=Math.min(B,Math.max(-B,w.by+j.clientY-w.y));l({scale:P,x:q,y:G})},z=()=>{y.current=null},V=()=>{const j=p.current,w=g.current;if(!j||!w)return;const N=m.current,P=Math.max(c/w.w,c/w.h)*N.scale,W=c/2+N.x-w.w*P/2,B=c/2+N.y-w.h*P/2,q=c/P,G=q,O=Math.min(Math.max(-W/P,0),Math.max(w.w-q,0)),F=Math.min(Math.max(-B/P,0),Math.max(w.h-G,0)),T=Math.min(512,Math.round(Math.max(q,1))),D=document.createElement("canvas");D.width=T,D.height=T;const _=D.getContext("2d");_&&(_.drawImage(j,O,F,q,G,0,0,T,T),a(D.toDataURL("image/jpeg",.85)))},S="pointer-events-none absolute h-6 w-6 border-white/90";return $e.createPortal(t.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-black",onClick:n,children:[t.jsx("p",{className:"mb-3 text-xs text-white/70",children:"拖动调整位置 · 双指缩放 · 双击重置"}),t.jsxs("div",{ref:x,className:"relative shrink-0 select-none overflow-hidden rounded-3xl bg-black",style:{width:c,height:c,touchAction:"none"},onClick:j=>j.stopPropagation(),onMouseDown:M,onMouseMove:f,onMouseUp:z,onMouseLeave:z,onDoubleClick:()=>l({scale:1,x:0,y:0}),children:[i?t.jsx("img",{src:e,alt:"裁剪预览",draggable:!1,className:"pointer-events-none",style:{position:"absolute",left:"50%",top:"50%",width:i.w*k,height:i.h*k,maxWidth:"none",transform:`translate(calc(-50% + ${r.x}px), calc(-50% + ${r.y}px)) scale(${r.scale})`,transformOrigin:"center"}}):t.jsx("span",{className:"flex h-full w-full items-center justify-center text-sm text-white/60",children:"图片加载中…"}),t.jsx("span",{className:`${S} left-3 top-3 rounded-tl-lg border-l-2 border-t-2`}),t.jsx("span",{className:`${S} right-3 top-3 rounded-tr-lg border-r-2 border-t-2`}),t.jsx("span",{className:`${S} bottom-3 left-3 rounded-bl-lg border-b-2 border-l-2`}),t.jsx("span",{className:`${S} bottom-3 right-3 rounded-br-lg border-b-2 border-r-2`})]}),t.jsxs("div",{className:"mt-5 flex items-center justify-center gap-3 px-6",onClick:j=>j.stopPropagation(),children:[t.jsx("button",{onClick:s,className:"h-11 rounded-btn border border-white/40 px-4 text-sm text-white/90 active:scale-95 transition-transform",children:"重选"}),t.jsx("button",{onClick:n,className:"h-11 rounded-btn border border-white/40 px-4 text-sm text-white/90 active:scale-95 transition-transform",children:"取消"}),t.jsx("button",{onClick:V,disabled:!i,className:"h-11 rounded-btn bg-accent px-5 text-sm font-semibold text-white active:scale-95 transition-transform disabled:opacity-40",children:"✓ 确认裁剪"})]})]}),document.body)}function Ls({initial:e,onClose:a}){wt(!0,a);const n=Z(I=>I.categories),s=Z(I=>I.addGoods),c=Z(I=>I.updateGoods),i=de(I=>I.settings.currency),{confirm:d}=fe.getState(),r=!!e,[l,p]=u.useState(e?.name??""),[g,m]=u.useState(e?String(e.price??""):""),[x,k]=u.useState(e?.buyDate??se()),[y,M]=u.useState(e?.categoryId??""),[f,z]=u.useState(e?.note??""),[V,S]=u.useState(e?.image),[j,w]=u.useState(null),N=u.useRef(null),[R,P]=u.useState(!1),[W,B]=u.useState(!1),[q,G]=u.useState(null),O=u.useRef(null),F=u.useRef(null),T=I=>{B(!1),I==="system"?G("lib"):I==="brand"?G("web"):I==="net"?G("img"):I==="album"?O.current?.click():I==="camera"&&F.current?.click()},D=V?V.ref.startsWith("http")?`url:${V.ref}`:V.ref.startsWith("data:")?`img:${V.ref}`:"":"",_=I=>{const ce=cI(I);S(ce==="img"?{source:"local",ref:I.slice(4)}:ce==="url"?{source:"web",ref:I.slice(4)}:void 0)},[A,b]=u.useState(e?.targetDailyCost!=null?String(e.targetDailyCost):""),[v,h]=u.useState(e?.countEnabled??!1),[C,$]=u.useState(e?.totalCount!=null?String(e.totalCount):""),[E,U]=u.useState(String(e?.usedCount??0)),[Y,ee]=u.useState(e?.sellPrice!=null?String(e.sellPrice):""),[ae,he]=u.useState(e?.extraFees?.map(I=>({name:I.name,amount:I.amount?String(I.amount):""}))??[]),[oe,le]=u.useState(e?.warrantyDate??""),L=(I,ce)=>{he(ie=>ie.map((ge,Ve)=>Ve===I?{...ge,...ce}:ge))},Q=u.useMemo(()=>n.filter(I=>I.kind==="goods").sort((I,ce)=>I.order-ce.order),[n]),pe=I=>{I&&UI(I,2048).then(ce=>w(ce)).catch(()=>J("图片读取失败"))},H=async()=>{const I=Number(g);if(!l.trim()||!Number.isFinite(I)||I<=0){J("请填写名称和大于 0 的价格");return}const ce={name:l.trim(),price:I,buyDate:x,categoryId:y||Q[0]?.id,note:f.trim()||void 0,image:V};if(r&&e){const ie=Y.trim()?Number(Y):0;let ge=!1;Number.isFinite(ie)&&ie>0&&e.status!=="retired"&&(ge=await d({title:"标记为已转卖？",message:"已填写出售价，是否同时标记为已转卖（退役）？"}));const Ve=ae.filter(_t=>_t.name.trim()!==""||Number(_t.amount)>0).map(_t=>({name:_t.name.trim(),amount:Number(_t.amount)||0}));await c(e.id,{...ce,targetDailyCost:A.trim()?Number(A):void 0,countEnabled:v,totalCount:v&&C.trim()?Number(C):void 0,usedCount:Math.max(0,Math.round(Number(E)||0)),sellPrice:Y.trim()?Number(Y):void 0,extraFees:Ve,warrantyDate:oe||void 0,...ge?{status:"retired"}:{}}),K(ge?"已保存并标记为已转卖":"已保存")}else await s(ce),K("已入库");a()};return t.jsxs(t.Fragment,{children:[$e.createPortal(t.jsx("div",{className:"fixed inset-0 z-40 flex items-end bg-black/40",onClick:a,children:t.jsxs("div",{className:"sheet-enter mx-auto max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-surface p-4",onClick:I=>I.stopPropagation(),style:{paddingBottom:"calc(env(safe-area-inset-bottom) + 2rem)"},children:[t.jsx("h2",{className:"mb-3 text-base font-semibold",children:r?"编辑物品":"物品入库"}),t.jsxs("div",{className:"space-y-3",children:[t.jsx(te,{label:"名称",children:t.jsx("input",{defaultValue:l,onChange:I=>p(I.target.value),placeholder:"买了什么",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t.jsx(te,{label:`价格（${i}）`,children:t.jsx("input",{defaultValue:g,onChange:I=>m(I.target.value.replace(/[^\d.]/g,"")),inputMode:"decimal",placeholder:"0.00",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"购买日期",children:t.jsx("input",{type:"date",value:x,onChange:I=>k(I.target.value),className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none"})})]}),t.jsx(te,{label:"图标 / 图片",children:t.jsxs("button",{type:"button",onClick:()=>B(!0),className:"flex w-full items-center gap-3 rounded-btn border border-line bg-surface-2 px-3 py-2.5 text-left active:scale-[0.99]",children:[t.jsx("span",{className:"flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-accent-soft text-accent",children:t.jsx(ct,{icon:D,size:26,fallbackBg:"transparent"})}),t.jsxs("span",{className:"min-w-0 flex-1",children:[t.jsx("span",{className:"block text-sm text-ink",children:"选择图片"}),t.jsx("span",{className:"block text-[11px] text-ink-3",children:"系统图标 / 品牌 / 网络商品图 / 相册 / 拍照"})]})]})}),t.jsxs("div",{children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("p",{className:"text-xs font-medium text-ink-2",children:"分类"}),t.jsx("button",{onClick:()=>P(!0),className:"text-xs font-medium text-accent",children:"管理"})]}),t.jsx("div",{className:"mt-1.5 flex flex-wrap gap-2",children:Q.map(I=>{const ce=Be(I.icon);return t.jsxs("button",{onClick:()=>M(I.id),className:`flex h-9 items-center gap-1.5 rounded-full border px-3 text-xs transition-all active:scale-95 ${(y||Q[0]?.id)===I.id?"border-accent bg-accent-soft text-accent":"border-line text-ink-2"}`,children:[t.jsx(ce,{size:13}),I.name]},I.id)})})]}),t.jsx(te,{label:"备注（可选）",children:t.jsx("input",{defaultValue:f,onChange:I=>z(I.target.value),className:"h-10 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),r?t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"pt-1 text-xs font-semibold text-ink-3",children:"成本核算"}),t.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[t.jsx(te,{label:"目标日均（留空不启用）",children:t.jsx("input",{defaultValue:A,onChange:I=>b(I.target.value.replace(/[^\d.]/g,"")),inputMode:"decimal",placeholder:"0.00",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"使用次数",children:t.jsx("input",{defaultValue:E,onChange:I=>U(I.target.value.replace(/[^\d]/g,"")),inputMode:"numeric",placeholder:"0",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})})]}),t.jsxs("div",{className:"flex items-center justify-between rounded-btn border border-line bg-surface-2 px-3 py-2.5",children:[t.jsx("span",{className:"text-sm",children:"启用使用计数"}),t.jsx(GI,{on:v,onClick:()=>h(!v),label:"启用使用计数"})]}),v?t.jsx(te,{label:"累计次数（计划使用总次数）",children:t.jsx("input",{defaultValue:C,onChange:I=>$(I.target.value.replace(/[^\d]/g,"")),inputMode:"numeric",placeholder:"0",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}):null,t.jsx("p",{className:"pt-1 text-xs font-semibold text-ink-3",children:"转卖与收益"}),t.jsx(te,{label:"出售价（退役转卖时填，填了会询问是否标记已转卖）",children:t.jsx("input",{defaultValue:Y,onChange:I=>ee(I.target.value.replace(/[^\d.]/g,"")),inputMode:"decimal",placeholder:"0.00",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsxs("div",{children:[t.jsx("p",{className:"text-xs font-medium text-ink-2",children:"附加费用（计入总投入）"}),ae.map((I,ce)=>t.jsxs("div",{className:"mt-1.5 flex items-center gap-2",children:[t.jsx("input",{defaultValue:I.name,onChange:ie=>L(ce,{name:ie.target.value}),placeholder:"说明（如运费）",className:"h-10 min-w-0 flex-1 rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"}),t.jsx("input",{defaultValue:I.amount,onChange:ie=>L(ce,{amount:ie.target.value.replace(/[^\d.]/g,"")}),inputMode:"decimal",placeholder:"0.00",className:"tnum h-10 w-20 shrink-0 rounded-btn border border-line bg-surface-2 px-2 text-sm outline-none focus:border-accent"}),t.jsx("button",{onClick:()=>he(ie=>ie.filter((ge,Ve)=>Ve!==ce)),"aria-label":"删除附加费",className:"flex h-10 w-8 shrink-0 items-center justify-center text-ink-3 active:opacity-70",children:t.jsx(ib,{size:14})})]},ce)),t.jsx("button",{onClick:()=>he(I=>[...I,{name:"",amount:""}]),className:"mt-2 h-9 w-full rounded-btn border border-dashed border-line text-xs text-ink-3 active:opacity-70",children:"＋ 添加附加费"})]}),t.jsx("p",{className:"pt-1 text-xs font-semibold text-ink-3",children:"保修"}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("input",{type:"date",value:oe,onChange:I=>le(I.target.value),className:"h-11 min-w-0 flex-1 rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none"}),oe?t.jsx("button",{onClick:()=>le(""),className:"h-11 shrink-0 rounded-btn px-2 text-xs text-ink-3 active:opacity-70",children:"清除"}):null]})]}):null,t.jsx("button",{onClick:()=>void H(),disabled:!l.trim()||!Number(g),className:"h-12 w-full rounded-btn bg-accent text-base font-semibold text-white active:scale-[0.98] transition-transform disabled:opacity-40",children:r?"保存":"入库"})]})]})}),document.body),t.jsx(kI,{open:W,onClose:()=>B(!1),onPick:T}),q?$e.createPortal(t.jsx("div",{className:"fixed inset-0 z-50 flex items-end bg-black/40",onClick:()=>G(null),children:t.jsxs("div",{className:"sheet-enter mx-auto max-h-[86vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-surface p-4 pb-[max(env(safe-area-inset-bottom),1rem)]",onClick:I=>I.stopPropagation(),children:[t.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[t.jsx("p",{className:"text-sm font-semibold",children:q==="lib"?"系统图标":q==="web"?"品牌图片":"网络图片"}),t.jsx("button",{onClick:()=>G(null),"aria-label":"完成",className:"flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-ink-2 active:scale-95",children:"✕"})]}),t.jsx(O1,{value:D,onChange:_,onFilePicked:pe,systemMode:!0,initialTab:q})]})}),document.body):null,t.jsx("input",{ref:O,type:"file",accept:"image/*",className:"hidden",onChange:I=>{const ce=I.target.files?.[0];I.target.value="",pe(ce)}}),t.jsx("input",{ref:F,type:"file",accept:"image/*",capture:"environment",className:"hidden",onChange:I=>{const ce=I.target.files?.[0];I.target.value="",pe(ce)}}),j?t.jsx(YI,{src:j,onConfirm:I=>{S({source:"local",ref:I}),w(null)},onCancel:()=>w(null),onPickAnother:()=>N.current?.click()}):null,R?t.jsx(Ia,{kind:"goods",onClose:()=>P(!1)}):null]})}function ZI(){const e=Z(L=>L.goods),a=Z(L=>L.categories),n=Z(L=>L.updateGoods),s=Z(L=>L.removeById),c=Z(L=>L.useGoodsOnce),i=de(L=>L.settings.currency),{confirm:d}=fe.getState(),r=Pt(),l=ke(),[p,g]=u.useState("goods"),[m,x]=u.useState("grid3"),[k,y]=u.useState(!1),[M,f]=u.useState(""),[z,V]=u.useState("active"),[S,j]=u.useState("buyDate"),[w,N]=u.useState(null),[R,P]=u.useState(!1),[W,B]=u.useState(null),[q,G]=u.useState(!1),[O,F]=u.useState(!1),[T,D]=u.useState(null);u.useEffect(()=>{const L=r.state;if(!(!L||!L.editGoodsId&&!L.editSubId))if(l(r.pathname,{replace:!0,state:null}),L.editGoodsId){const Q=Z.getState().goods.find(pe=>pe.id===L.editGoodsId);Q&&B(Q)}else L.editSubId&&(g("subs"),D(L.editSubId))},[r.state,r.pathname,l]);const _=L=>a.find(Q=>Q.id===L)?.name,A=L=>Be(a.find(Q=>Q.id===L)?.icon),b=u.useMemo(()=>{const L=e.filter(ie=>ie.status!=="retired"),Q=e.filter(ie=>ie.status==="retired"),pe=e.filter(ie=>ie.status==="favorite"),H=L.reduce((ie,ge)=>ie+Le(ge),0),I=L.reduce((ie,ge)=>ie+Ie(ge),0),ce=e.reduce((ie,ge)=>{const Ve=Number.isFinite(ge?.sellPrice)?ge.sellPrice:0;return Ve>0?ie+(Ve-Le(ge)):ie},0);return{active:L.length,retired:Q.length,favorites:pe.length,invest:H,daily:I,soldProfit:ce}},[e]),v=u.useMemo(()=>{const L=M.trim().toLowerCase(),Q=e.filter(I=>z==="all"?!0:I.status===z),pe=L?Q.filter(I=>I.name.toLowerCase().includes(L)||I.tags.some(ce=>ce.toLowerCase().includes(L))):Q,H=II(pe,S);return[...H.filter(I=>I.status!=="retired"),...H.filter(I=>I.status==="retired")]},[e,z,M,S]),h=w?e.find(L=>L.id===w)??null:null,C=async()=>{if(!(!h||O)){F(!0);try{const L=await d7(h,_(h.categoryId)??"未分类"),Q=await Sn(L,`纳物-${h.name||"物品"}.png`);K(Q==="saved"?"已保存到系统相册「纳物」":Q==="downloaded"?"海报已下载":"已分享")}catch(L){J(L instanceof Error?L.message:"生成分享卡片失败")}finally{F(!1)}}},$=h?Math.max((Number.isFinite(h.sellPrice)?h.sellPrice:0)-Le(h),0):0,E=u.useRef({timer:null,fired:!1,x:0,y:0}),U=(L,Q)=>{const pe=E.current;pe.fired=!1,pe.x=Q.clientX,pe.y=Q.clientY,pe.timer=window.setTimeout(()=>{pe.fired=!0,B(L)},500)},Y=L=>{const Q=E.current;Q.timer&&(clearTimeout(Q.timer),Q.timer=null),Q.fired||N(L.id)},ee=L=>{const Q=E.current;Q.timer&&Math.hypot(L.clientX-Q.x,L.clientY-Q.y)>10&&(clearTimeout(Q.timer),Q.timer=null)},ae=()=>{const L=E.current;L.timer&&(clearTimeout(L.timer),L.timer=null)},he=async L=>{await d({title:`删除「${L.name}」？`,message:"删除后不可恢复（建议先退役保留记录）。"})&&(await s("goods",L.id),N(null),K("已删除"))},oe=Ea(i),le=`${b.soldProfit>=0?"+":""}${ne(b.soldProfit,i)}`;return t.jsxs("div",{className:"page-enter",children:[t.jsxs("header",{className:"flex items-center justify-between pb-3 pt-2",children:[t.jsx("h1",{className:"text-3xl font-bold leading-9",children:"纳物"}),t.jsxs("div",{className:"flex items-center gap-1",children:[t.jsx("button",{onClick:()=>x(KI(m)),"aria-label":"切换视图",className:"flex h-9 w-9 items-center justify-center rounded-full text-ink-2 active:scale-95 active:bg-surface transition-transform",children:(()=>{const L=RI[m];return t.jsx(L,{size:19})})()}),t.jsx("button",{onClick:()=>{y(!k),k&&f("")},"aria-label":"搜索",className:"flex h-9 w-9 items-center justify-center rounded-full text-ink-2 active:scale-95 active:bg-surface transition-transform",children:t.jsx(da,{size:19})}),t.jsx("button",{onClick:()=>p==="goods"?P(!0):G(!0),"aria-label":"新增",className:"flex h-9 w-9 items-center justify-center rounded-full text-ink-2 active:scale-95 active:bg-surface transition-transform",children:t.jsx(PS,{size:22})})]})]}),k?t.jsx("input",{defaultValue:"",onChange:L=>f(L.target.value),placeholder:"搜索物品 / 标签",className:"mb-3 h-10 w-full rounded-btn border border-line bg-surface px-3 text-sm outline-none focus:border-accent"}):null,t.jsx("div",{className:"mx-auto mb-3 flex w-fit rounded-full border border-line bg-surface-2 p-1",children:[{key:"goods",label:"物品"},{key:"subs",label:"订阅"}].map(L=>t.jsx("button",{onClick:()=>g(L.key),className:`rounded-full px-6 py-1.5 text-sm transition-all active:scale-95 ${p===L.key?"bg-surface font-semibold shadow":"text-ink-3"}`,children:L.label},L.key))}),p==="goods"?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mb-3 rounded-2xl p-4",style:a7,children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("p",{className:"text-sm font-semibold",children:"我的资产"}),t.jsxs("p",{className:"tnum text-xs text-ink-2",children:[b.active," 在役 / ",b.retired," 退役"]})]}),t.jsxs("div",{className:"mt-2 flex items-end justify-between",children:[t.jsxs("div",{children:[t.jsxs("p",{className:"text-[11px] text-ink-3",children:["在役购入",b.favorites>0?` · 收藏 ${b.favorites}`:""]}),t.jsxs("p",{className:"tnum text-xl font-bold",children:[oe,b.invest.toLocaleString("zh-CN",{maximumFractionDigits:2})]})]}),t.jsxs("div",{className:"text-right",children:[t.jsxs("p",{className:"tnum text-[11px] text-ink-3",children:["在役日均 ",ne(b.daily,i)]}),t.jsxs("p",{className:"tnum text-[11px]",style:{color:b.soldProfit>0?"var(--gui)":"var(--ink-3)"},children:["已转卖净赚 ",le]})]})]})]}),t.jsxs("div",{className:"no-scrollbar -mx-4 mb-2 flex gap-2 overflow-x-auto px-4",children:[OI.map(L=>t.jsx("button",{onClick:()=>V(L.key),className:`h-8 shrink-0 rounded-full border px-3.5 text-xs transition-all active:scale-95 ${z===L.key?"border-accent bg-accent-soft font-medium text-accent":"border-line bg-surface text-ink-3"}`,children:L.label},L.key)),t.jsx("span",{className:"mx-0.5 my-1 w-px shrink-0 bg-line"}),BI.map(L=>t.jsx("button",{onClick:()=>j(L.key),className:`h-8 shrink-0 rounded-full border px-3.5 text-xs transition-all active:scale-95 ${S===L.key?"border-accent bg-accent-soft font-medium text-accent":"border-line bg-surface text-ink-3"}`,children:L.label},L.key))]}),v.length===0?t.jsx("div",{className:"rounded-card border border-dashed border-line bg-surface p-10 text-center text-sm text-ink-3",children:e.length===0?"还没有物品，点右上角 ＋ 入库第一件物品":"没有匹配的物品"}):m==="list"?t.jsx("ul",{className:"space-y-2 lg:grid lg:grid-cols-2 lg:gap-2 lg:space-y-0",children:v.map(L=>{const Q=L.status==="retired",pe=A(L.categoryId);return t.jsx("li",{children:t.jsxs("div",{role:"button",tabIndex:0,onPointerDown:H=>U(L,H),onPointerUp:()=>Y(L),onPointerMove:ee,onPointerLeave:ae,onContextMenu:H=>H.preventDefault(),className:"flex w-full cursor-pointer items-center gap-3 rounded-card border border-line bg-surface px-3.5 py-3 text-left active:scale-[0.98] transition-transform",children:[Dt(L)?t.jsx("img",{src:L.image?.ref,alt:L.name,className:"h-10 w-10 shrink-0 rounded-full object-cover"}):Nt(L)?t.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full",style:{background:mt},children:t.jsx(ct,{icon:`url:${L.image?.ref}`,size:28,className:"h-7 w-7"})}):t.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-full",style:{background:mt},children:t.jsx(pe,{size:18,className:"text-ink-3"})}),t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsxs("p",{className:`truncate text-sm font-medium ${Q?"line-through opacity-60":""}`,children:[L.name,Ja(L)?t.jsx("span",{className:"text-ink-3",children:" · 已转卖"}):null]}),t.jsxs("p",{className:"tnum text-[11px] text-ink-3",children:[ne(L.price,L.currency)," · 持有 ",ga(L)," 天",L.countEnabled?` · 用了 ${L.usedCount??0} 次`:""]})]}),t.jsxs("div",{className:"text-right",children:[t.jsx("p",{className:"tnum text-sm font-semibold",style:{color:Q?"var(--ink-3)":"var(--accent)"},children:ne(Ie(L),L.currency)}),t.jsx("p",{className:"text-[11px] text-ink-3",children:"日均"})]})]})},L.id)})}):t.jsx("ul",{className:`grid gap-2 ${m==="grid3"?"grid-cols-3 lg:grid-cols-4 xl:grid-cols-5":"grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}`,children:v.map(L=>{const Q=WI(L),pe=A(L.categoryId);return t.jsx("li",{children:t.jsxs("div",{role:"button",tabIndex:0,onPointerDown:H=>U(L,H),onPointerUp:()=>Y(L),onPointerMove:ee,onPointerLeave:ae,onContextMenu:H=>H.preventDefault(),className:"block w-full cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface text-left active:scale-95 transition-transform",children:[t.jsxs("div",{className:"relative aspect-square w-full",style:Dt(L)||Nt(L)?void 0:{background:mt},children:[Dt(L)?t.jsx("img",{src:L.image?.ref,alt:L.name,className:"h-full w-full object-cover"}):Nt(L)?t.jsx("span",{className:"flex h-full w-full items-center justify-center",style:{background:mt},children:t.jsx(ct,{icon:`url:${L.image?.ref}`,size:96,className:"h-3/5 w-3/5"})}):t.jsx("span",{className:"flex h-full w-full items-center justify-center text-ink-3",children:t.jsx(pe,{size:36})}),L.status==="retired"?t.jsx("span",{className:"absolute right-1 top-1.5 rounded-full px-1.5 text-[9px] leading-4 text-ink-2",style:{background:"color-mix(in srgb, var(--line) 90%, transparent)"},children:Ja(L)?"已转卖":"退役"}):L.status==="active"?t.jsx("span",{className:"absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full",style:{background:"color-mix(in srgb, var(--surface) 88%, transparent)"},children:t.jsx("span",{className:"h-1.5 w-1.5 rounded-full",style:{background:"var(--gui)"}})}):t.jsx("span",{className:"absolute right-1 top-1 flex h-4 w-4 items-center justify-center",children:t.jsx(fn,{size:13,style:{color:"var(--warn)",fill:"var(--warn)"}})})]}),t.jsxs("div",{className:"p-2",children:[t.jsx("p",{className:"line-clamp-2 min-h-[2.5em] text-xs leading-[1.25]",children:L.name}),t.jsx("p",{className:"tnum mt-1 text-sm font-semibold",children:Q.label?`${Q.label}${Q.text}`:Q.text}),t.jsxs("p",{className:"tnum mt-0.5 truncate text-[10px] text-ink-3",children:[ne(Ie(L),L.currency),"/天 · ",FI(L.buyDate)]})]})]})},L.id)})})]}):t.jsx("div",{className:"page-enter",children:t.jsx(jI,{embedded:!0,addOpen:q,onAddOpenChange:G,openEditId:T})},"subs"),h?$e.createPortal(t.jsx("div",{className:"fade-enter fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6",onClick:()=>N(null),children:t.jsxs("div",{className:"pop-enter mx-auto flex max-h-[86vh] w-full max-w-sm flex-col rounded-3xl bg-surface",onClick:L=>L.stopPropagation(),children:[t.jsxs("div",{className:"min-h-0 flex-1 overflow-y-auto",children:[t.jsxs("div",{className:"relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-t-3xl",style:Dt(h)||Nt(h)?void 0:{background:mt},children:[Dt(h)?t.jsx("img",{src:h.image?.ref,alt:h.name,className:"h-full w-full object-cover"}):Nt(h)?t.jsx("span",{className:"flex h-full w-full items-center justify-center",style:{background:mt},children:t.jsx(ct,{icon:`url:${h.image?.ref}`,size:140,className:"h-2/5 w-2/5"})}):t.jsx("span",{className:"flex h-full w-full items-center justify-center text-ink-3",children:(()=>{const L=A(h.categoryId);return t.jsx(L,{size:56})})()}),t.jsx("span",{className:"absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-medium",style:{background:"color-mix(in srgb, var(--surface) 90%, transparent)"},children:Ja(h)?"已转卖":h.status==="active"?t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx("span",{className:"h-1.5 w-1.5 rounded-full",style:{background:"var(--gui)"}}),"服役中"]}):h.status==="retired"?"退役":t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx(fn,{size:11,style:{color:"var(--warn)",fill:"var(--warn)"}}),"收藏"]})})]}),t.jsxs("div",{className:"px-5 pb-3 pt-4",children:[t.jsx("h2",{className:"line-clamp-2 text-lg font-semibold leading-6",children:h.name}),t.jsxs("div",{className:"mt-2 flex items-end justify-between gap-3",children:[t.jsxs("div",{className:"min-w-0",children:[t.jsx("p",{className:"text-[11px] text-ink-3",children:"购入价"}),t.jsx("p",{className:"t-num tnum",children:ne(h.price,h.currency)})]}),t.jsxs("div",{className:"flex shrink-0 flex-col items-end gap-1",children:[t.jsxs("span",{className:"tnum rounded-full bg-surface-2 px-2.5 py-0.5 text-[11px] text-ink-2",children:[ne(Ie(h),h.currency)," / 天"]}),$>0?t.jsxs("span",{className:"tnum rounded-full px-2.5 py-0.5 text-[11px] font-medium text-white",style:{background:"var(--gui)"},children:["净赚 +",ne($,h.currency)]}):null]})]}),t.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-x-4 gap-y-3",children:[t.jsx(Te,{label:"分类",value:_(h.categoryId)??"未分类"}),t.jsx(Te,{label:"陪伴",value:`${ga(h)} 天`}),t.jsx(Te,{label:"购入日期",value:ua(h.buyDate)}),t.jsx(Te,{label:"单次成本",value:`${ne(LI(h),h.currency)}/次`}),t.jsx(Te,{label:"使用次数",value:h.countEnabled&&h.totalCount?`${h.usedCount??0} / ${h.totalCount} 次`:`${h.usedCount??0} 次`}),h.targetDailyCost?t.jsx(Te,{label:"目标达成",value:`${Math.round(HI(h)*100)}%`}):null,h.extraFees.length>0?t.jsx(Te,{label:"总投入",value:ne(Le(h),h.currency)}):null,Number.isFinite(h.sellPrice)&&h.sellPrice>0?t.jsx(Te,{label:"出售价",value:ne(h.sellPrice,h.currency)}):null,h.warrantyDate?t.jsx(Te,{label:"保修至",value:ua(h.warrantyDate)}):null]}),h.note?t.jsx("p",{className:"mt-3 text-xs leading-5 text-ink-2",children:h.note}):null,t.jsxs("div",{className:"mt-4 flex gap-2",children:[t.jsxs("button",{onClick:()=>void C(),disabled:O,className:"flex h-10 flex-1 items-center justify-center gap-1 rounded-btn border border-line text-xs font-medium text-ink-2 active:scale-95 transition-transform disabled:opacity-50",children:[t.jsx(g1,{size:13,strokeWidth:1.8,"aria-hidden":!0}),O?"生成中…":"分享"]}),h.status!=="retired"?t.jsx("button",{onClick:()=>void c(h.id).then(()=>K("已 +1")),className:"h-10 flex-1 rounded-btn bg-accent-soft text-xs font-medium text-accent active:scale-95 transition-transform",children:"＋1 使用"}):null,t.jsx("button",{onClick:()=>{B(h),N(null)},className:"h-10 flex-1 rounded-btn border border-accent text-xs font-medium text-accent active:scale-95 transition-transform",children:"编辑"}),t.jsx("button",{onClick:()=>void n(h.id,{status:h.status==="retired"?"active":"retired"}),className:"h-10 flex-1 rounded-btn border border-line text-xs text-ink-2 active:scale-95 transition-transform",children:h.status==="retired"?"恢复在用":"标记退役"}),t.jsx("button",{onClick:()=>void he(h),className:"h-10 flex-1 rounded-btn border border-line text-xs active:scale-95 transition-transform",style:{color:"var(--fou)"},children:"删除"})]})]})]}),t.jsx("button",{onClick:()=>N(null),"aria-label":"关闭",className:"mx-auto -mb-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-surface text-ink-2 shadow-lg active:scale-95 transition-transform",children:t.jsx(ib,{size:18})})]})}),document.body):null,R?t.jsx(Ls,{onClose:()=>P(!1)}):null,W?t.jsx(Ls,{initial:W,onClose:()=>B(null)}):null]})}function KI(e){return e==="grid3"?"grid2":e==="grid2"?"list":"grid3"}function F1({id:e,size:a=18,className:n,strokeWidth:s}){const c=Be(e??void 0);return t.jsx(c,{size:a,className:n,strokeWidth:s,"aria-hidden":!0})}function JI(e,a=!0){const n=new Map;for(const c of e){const i=c?.date??"",d=n.get(i);d?d.push(c):n.set(i,[c])}const s=[...n.entries()].map(([c,i])=>({date:c,rows:i,expense:Ze(i),income:st(i)}));return s.sort((c,i)=>a?i.date.localeCompare(c.date):c.date.localeCompare(i.date)),s}function Ze(e){return Se(e.filter(a=>a?.type==="expense").reduce((a,n)=>a+(n.amount||0),0))}function st(e){return Se(e.filter(a=>a?.type==="income").reduce((a,n)=>a+(n.amount||0),0))}function XI(e,a){const n=a.month?TH(a.month):null,s=(a.keyword??"").trim();return e.filter(c=>!(!c||n&&(c.date<n.start||c.date>n.end)||a.from&&c.date<a.from||a.to&&c.date>a.to||a.judgement&&c.judgement!==a.judgement||a.categoryId&&c.categoryId!==a.categoryId||a.type&&c.type!==a.type||s&&!(c.note??"").includes(s)))}function Hs(e,a){return XI(e,{month:a})}const Vs=["#3f7d67","#4a7fb5","#b98a1f","#c2603f","#7a6bb5","#3f8f6a","#8a6f5a","#5b8c8a"];function QI(e,a,n={}){const s=n.type??"expense",c=e.filter(r=>r?.type===s),i=c.reduce((r,l)=>r+(l.amount||0),0);if(i<=0)return[];const d=new Map;for(const r of c){const l=r.categoryId??"cl7";d.set(l,(d.get(l)??0)+(r.amount||0))}return[...d.entries()].map(([r,l])=>{const p=a.find(g=>g.id===r);return{categoryId:r,name:p?.name??"其他",icon:p?.icon??"tag",amount:Se(l),ratio:Se(l/i,4),color:""}}).sort((r,l)=>l.amount-r.amount).map((r,l)=>({...r,color:Vs[l%Vs.length]}))}function eE(e){const a=e.filter(c=>c?.type==="expense"),n=a.reduce((c,i)=>c+(i.amount||0),0),s=[{judgement:"gui",label:"归",color:"#3f8f6a",amount:0},{judgement:"xu",label:"需",color:"#4a7fb5",amount:0},{judgement:"fou",label:"否",color:"#c2603f",amount:0}];for(const c of a){const i=s.find(d=>d.judgement===c.judgement)??s[1];i.amount=Se(i.amount+(c.amount||0))}return s.map(c=>({judgement:c.judgement,label:c.label,amount:c.amount,ratio:n>0?Se(c.amount/n,4):0,color:c.color}))}const tE=[["day","按日"],["month","按月"],["year","按年"]],aE={gui:{label:"归",desc:"值得的花销"},xu:{label:"需",desc:"必要的花销"},fou:{label:"否",desc:"本可避免"}};function nE({slices:e,total:a}){const s=2*Math.PI*54;let c=0;return t.jsxs("svg",{viewBox:"0 0 140 140",className:"h-36 w-36 shrink-0",children:[t.jsx("circle",{cx:"70",cy:"70",r:54,fill:"none",stroke:"var(--line)",strokeWidth:"16"}),e.map(i=>{const d=i.ratio*s,r=t.jsx("circle",{cx:"70",cy:"70",r:54,fill:"none",stroke:i.color,strokeWidth:"16",strokeDasharray:`${Math.max(d-1.5,0)} ${s}`,strokeDashoffset:-c,transform:"rotate(-90 70 70)"},i.categoryId);return c+=d,r}),t.jsx("text",{x:"70",y:"64",textAnchor:"middle",fontSize:"10",className:"fill-ink-3",children:"本月支出"}),t.jsx("text",{x:"70",y:"82",textAnchor:"middle",fontSize:"14",fontWeight:"700",className:"fill-ink",children:Kb(a)})]})}function oE(){const e=Z(w=>w.valueRecords),a=Z(w=>w.categories),n=de(w=>w.settings.currency),[s,c]=u.useState("month"),[i,d]=u.useState(()=>se()),[r,l]=u.useState(()=>Vt()),[p,g]=u.useState(()=>Number(Vt().slice(0,4))),m=u.useMemo(()=>s==="day"?e.filter(w=>w.date===i):s==="month"?Hs(e,r):e.filter(w=>w.date.startsWith(String(p))),[e,s,i,r,p]),x=u.useMemo(()=>Ze(m),[m]),k=u.useMemo(()=>st(m),[m]),y=u.useMemo(()=>QI(m,a,{type:"expense"}),[m,a]),M=u.useMemo(()=>eE(m),[m]),f=u.useMemo(()=>s==="month"?FH(6,`${r}-01`).map(w=>{const N=Hs(e,w);return{key:w,label:ya(w),expense:Ze(N),income:st(N)}}):s==="day"?BH(7,i).map(w=>{const N=e.filter(R=>R.date===w);return{key:w,label:ua(w,"M/D"),expense:Ze(N),income:st(N)}}):Array.from({length:12},(w,N)=>{const R=`${p}-${String(N+1).padStart(2,"0")}`,P=e.filter(W=>W.date.startsWith(R));return{key:R,label:`${N+1}月`,expense:Ze(P),income:st(P)}}),[s,e,i,r,p]),z=Math.max(...f.map(w=>Math.max(w.expense,w.income)),1),V=w=>{s==="day"?d(qa(i,w)):s==="month"?l(w===-1?zb(r):$b(r)):g(N=>N+w)},S=s==="day"?`${Mn(i)} · ${i}`:s==="month"?ya(r,!0):`${p} 年`,j=s==="day"?"近 7 天趋势":s==="month"?"近 6 个月趋势":`${p} 年逐月趋势`;return t.jsxs("div",{className:"text-ink",children:[t.jsxs("header",{className:"page-enter flex w-full items-end justify-between pb-1 pt-2",children:[t.jsxs("div",{className:"min-w-0",children:[t.jsx("h1",{className:"text-3xl font-bold leading-9",children:"报表"}),t.jsxs("p",{className:"truncate text-xs text-ink-3",children:[S," · 收 ",ne(k,n)," / 支 ",ne(x,n)]})]}),t.jsxs("div",{className:"flex shrink-0 items-center gap-1",children:[t.jsx("button",{onClick:()=>V(-1),className:"flex h-9 w-9 items-center justify-center rounded-full text-lg text-ink-2 active:scale-95 active:bg-surface transition-transform","aria-label":"上一期",children:"‹"}),s==="day"?t.jsx("input",{type:"date",value:i,onChange:w=>w.target.value&&d(w.target.value),"aria-label":"选择日期",className:"h-9 w-32 rounded-btn border border-line bg-surface px-1.5 text-[11px] text-ink-2 outline-none focus:border-accent"}):null,t.jsx("button",{onClick:()=>V(1),className:"flex h-9 w-9 items-center justify-center rounded-full text-lg text-ink-2 active:scale-95 active:bg-surface transition-transform","aria-label":"下一期",children:"›"})]})]}),t.jsxs("div",{className:"lg:grid lg:grid-cols-2 lg:gap-3",children:[t.jsx("div",{className:"mb-3 flex gap-2 lg:col-span-2",children:tE.map(([w,N])=>t.jsx("button",{onClick:()=>c(w),className:`h-8 rounded-full border px-3.5 text-xs transition-all active:scale-95 ${s===w?"border-accent bg-accent-soft font-medium text-accent":"border-line bg-surface text-ink-3"}`,children:N},w))}),t.jsxs("div",{className:"page-enter rounded-card border border-line bg-surface p-4",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"支出分类占比"}),t.jsx("p",{className:"mt-0.5 text-[11px] text-ink-3",children:"仅统计生活流记账（物品与订阅不计入）"}),y.length===0?t.jsxs("p",{className:"py-10 text-center text-sm text-ink-3",children:[s==="day"?"今天":s==="month"?"本月":"本年","还没有支出记录"]}):t.jsxs("div",{className:"mt-3 flex items-center gap-4",children:[t.jsx(nE,{slices:y,total:x}),t.jsxs("ul",{className:"min-w-0 flex-1 space-y-1.5",children:[y.slice(0,6).map(w=>t.jsxs("li",{className:"flex items-center gap-2 text-xs",children:[t.jsx("span",{className:"h-2.5 w-2.5 shrink-0 rounded-full",style:{background:w.color}}),t.jsxs("span",{className:"flex min-w-0 flex-1 items-center gap-1 truncate",children:[t.jsx(F1,{id:w.icon,size:14,className:"shrink-0 text-ink-2"}),w.name]}),t.jsxs("span",{className:"text-ink-3",children:[Math.round(w.ratio*100),"%"]}),t.jsx("span",{className:"w-16 text-right font-medium",children:Kb(w.amount,n)})]},w.categoryId)),y.length>6?t.jsxs("li",{className:"pl-5 text-[11px] text-ink-3",children:["其余 ",y.length-6," 个分类…"]}):null]})]})]}),t.jsxs("div",{className:"page-enter mt-3 rounded-card border border-line bg-surface p-4 lg:mt-0",children:[t.jsxs("div",{className:"flex items-baseline justify-between",children:[t.jsx("h2",{className:"text-sm font-semibold",children:j}),t.jsxs("p",{className:"text-[11px] text-ink-3",children:[t.jsxs("span",{className:"mr-2 inline-flex items-center gap-1",children:[t.jsx("span",{className:"inline-block h-2 w-2 rounded-full bg-accent"}),"支出"]}),t.jsxs("span",{className:"inline-flex items-center gap-1",children:[t.jsx("span",{className:"inline-block h-2 w-2 rounded-full",style:{background:"var(--xu)"}}),"收入"]})]})]}),t.jsx("p",{className:"mt-0.5 text-[11px] text-ink-3",children:"仅统计生活流记账"}),t.jsx("div",{className:"mt-4 flex h-32 items-end justify-between gap-2",children:f.map(w=>t.jsxs("div",{className:"flex min-w-0 flex-1 flex-col items-center gap-1",children:[t.jsxs("div",{className:"flex h-28 w-full items-end justify-center gap-1",children:[t.jsx("div",{className:"w-3.5 rounded-t bg-accent transition-all",style:{height:`${Math.max(w.expense/z*100,w.expense>0?3:0)}%`},title:`支出 ${ne(w.expense,n)}`}),t.jsx("div",{className:"w-3.5 rounded-t transition-all",style:{height:`${Math.max(w.income/z*100,w.income>0?3:0)}%`,background:"var(--xu)"},title:`收入 ${ne(w.income,n)}`})]}),t.jsx("span",{className:`text-[11px] ${w.key===(s==="day"?i:s==="month"?r:"")?"font-semibold text-accent":"text-ink-3"}`,children:w.label})]},w.key))})]}),t.jsxs("div",{className:"page-enter mt-3 rounded-card border border-line bg-surface p-4 lg:col-span-2 lg:mt-0",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"归 / 需 / 否 结构"}),t.jsx("p",{className:"mt-0.5 text-[11px] text-ink-3",children:"仅统计生活流记账（物品与订阅不计入）"}),t.jsx("div",{className:"mt-3 flex h-2 overflow-hidden rounded-full bg-surface-2",children:M.map(w=>t.jsx("div",{style:{width:`${w.ratio*100}%`,background:w.color}},w.judgement))}),t.jsx("ul",{className:"mt-3 space-y-2.5",children:M.map(w=>t.jsxs("li",{children:[t.jsxs("div",{className:"flex items-baseline justify-between text-xs",children:[t.jsxs("span",{style:{color:w.color},children:[w.label," · ",aE[w.judgement].desc]}),t.jsxs("span",{children:[t.jsx("span",{className:"font-semibold",children:ne(w.amount,n)}),t.jsxs("span",{className:"ml-1.5 text-ink-3",children:[Math.round(w.ratio*100),"%"]})]})]}),t.jsx("div",{className:"mt-1 h-1.5 overflow-hidden rounded-full bg-surface-2",children:t.jsx("div",{style:{width:`${w.ratio*100}%`,background:w.color},className:"h-full rounded-full"})})]},w.judgement))}),x===0?t.jsxs("p",{className:"mt-2 text-[11px] text-ink-3",children:[s==="day"?"今天":s==="month"?"本月":"本年","暂无支出，先去记一笔吧"]}):null]})]})]})}const sE=[["day","按日"],["month","按月"],["year","按年"]],Xa={gui:"var(--gui)",xu:"var(--xu)",fou:"var(--fou)"},Is={gui:"归",xu:"需",fou:"否"};function cE(e){return[...new Set(e.map(a=>a.date.slice(0,7)))].sort()}function iE(){const e=ke(),a=Z(_=>_.valueRecords),n=Z(_=>_.categories),s=Z(_=>_.removeLedger),c=Z(_=>_.undo),i=de(_=>_.settings.currency),[d,r]=u.useState("month"),[l,p]=u.useState(se()),[g,m]=u.useState(Vt()),[x,k]=u.useState(()=>Number(Vt().slice(0,4))),y=_=>n.find(A=>A.id===_),M=u.useMemo(()=>a.filter(_=>_.date===l),[a,l]),f=u.useMemo(()=>a.filter(_=>_.date.startsWith(g)),[a,g]),z=u.useMemo(()=>a.filter(_=>_.date.startsWith(String(x))),[a,x]),V=u.useMemo(()=>cE(z),[z]),S=d==="day"?M:d==="month"?f:z,j=u.useMemo(()=>Ze(S),[S]),w=u.useMemo(()=>S.filter(_=>_.type==="income").reduce((_,A)=>_+(A.amount||0),0),[S]),N=u.useMemo(()=>a.filter(_=>_.date===se()),[a]),R=u.useMemo(()=>Ze(N),[N]),P=u.useMemo(()=>N.filter(_=>_.type==="income").reduce((_,A)=>_+(A.amount||0),0),[N]),W=u.useMemo(()=>{const _={gui:0,xu:0,fou:0};for(const A of N)A.type==="expense"&&(_[A.judgement]+=A.amount||0);return _},[N]),B=R>0?Math.round((1-W.fou/R)*100):100,q=_=>R>0?Math.round(W[_]/R*100):0,G=_=>{d==="day"?p(qa(l,_)):d==="month"?m(_===-1?zb(g):$b(g)):k(A=>A+_)},O=d==="day"?`${Mn(l)} · ${l}`:d==="month"?ya(g,!0):`${x} 年`,F=async(_,A)=>{await s(_),fe.getState().toast(`已删除「${A}」`,"info",{actionLabel:"撤销",onAction:()=>void c()})},T=_=>{const A=JI(_);return A.length===0?t.jsxs("div",{className:"rounded-card border border-dashed border-line bg-surface p-10 text-center lg:col-span-2",children:[t.jsx(ra,{size:30,className:"mx-auto text-ink-3",strokeWidth:1.5}),t.jsxs("p",{className:"mt-2 text-sm text-ink-3",children:["这个",d==="day"?"天":"月","还没有记录"]}),t.jsx("button",{onClick:()=>e("/ai"),className:"mt-3 h-9 rounded-full bg-accent-soft px-4 text-xs font-medium text-accent",children:"试试 AI 记一笔"})]}):A.map(b=>t.jsxs("section",{children:[t.jsxs("div",{className:"flex items-baseline justify-between px-1 py-1.5",children:[t.jsx("h3",{className:"text-xs font-semibold text-ink-2",children:Mn(b.date)}),t.jsxs("p",{className:"text-[11px] text-ink-3",children:[b.income>0?`收 ${ne(b.income,i)} · `:"","支 ",ne(b.expense,i)]})]}),t.jsx("ul",{className:"divide-y divide-line-2 overflow-hidden rounded-card border border-line bg-surface",children:b.rows.map(v=>{const h=y(v.categoryId);return t.jsxs("li",{className:"flex items-center gap-3 px-3.5 py-3.5",children:[t.jsx("span",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-base font-bold",style:{color:Xa[v.judgement]},children:Is[v.judgement]}),t.jsxs("button",{onClick:()=>e(`/record/${v.id}`),className:"min-w-0 flex-1 text-left",children:[t.jsxs("p",{className:"flex items-center gap-1 truncate text-sm",children:[h?t.jsxs(t.Fragment,{children:[t.jsx(F1,{id:h.icon,size:14,className:"shrink-0 text-ink-2"}),h.name]}):"未分类",v.note?t.jsxs("span",{className:"text-ink-3",children:[" · ",v.note]}):null]}),t.jsxs("p",{className:"text-[11px] text-ink-3",children:[v.type==="income"?"收入":"支出"," · ",v.judgement==="gui"?"值得":v.judgement==="xu"?"必要":"本可避免"]})]}),t.jsxs("div",{className:"text-right",children:[t.jsx("p",{className:"text-sm font-semibold",style:{color:v.type==="income"?"var(--gui)":"var(--ink)"},children:bI(v.amount,v.type,v.currency)}),t.jsx("button",{onClick:()=>F(v.id,v.note||h?.name||"记录"),className:"text-[11px] text-ink-3",children:"删除"})]})]},v.id)})})]},b.date))},D=()=>V.length===0?t.jsxs("div",{className:"rounded-card border border-dashed border-line bg-surface p-10 text-center lg:col-span-2",children:[t.jsx(ra,{size:30,className:"mx-auto text-ink-3",strokeWidth:1.5}),t.jsxs("p",{className:"mt-2 text-sm text-ink-3",children:[x," 年还没有记录"]}),t.jsx("button",{onClick:()=>e("/ai"),className:"mt-3 h-9 rounded-full bg-accent-soft px-4 text-xs font-medium text-accent",children:"试试 AI 记一笔"})]}):[...V].reverse().map(_=>{const A=z.filter(b=>b.date.startsWith(_));return t.jsxs("section",{children:[t.jsxs("div",{className:"flex items-baseline justify-between px-1 py-1.5",children:[t.jsx("h3",{className:"text-xs font-semibold text-ink-2",children:ya(_)}),t.jsxs("p",{className:"text-[11px] text-ink-3",children:[st(A)>0?`收 ${ne(st(A),i)} · `:"","支 ",ne(Ze(A),i)]})]}),T(A)]},_)});return t.jsxs("div",{className:"space-y-3",children:[t.jsxs("header",{className:"flex items-center justify-between pb-3 pt-2",children:[t.jsx("h1",{className:"text-3xl font-bold leading-9",children:"生活流"}),t.jsxs("button",{onClick:()=>e("/record"),className:"h-9 rounded-full bg-accent-soft px-3.5 text-xs font-medium text-accent",children:[t.jsx(kn,{size:14,className:"mr-1 inline-block align-[-2px]"}),"手动记一笔"]})]}),t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("p",{className:"flex items-center gap-1.5 text-sm font-semibold",children:[t.jsx(iC,{size:15,className:"text-ink-2"}),"价值账本 · 今日"]}),t.jsxs("span",{className:"text-xs font-semibold",style:{color:"var(--gui)"},children:["↗ 健康度 ",B,"%"]})]}),t.jsxs("div",{className:"mt-1.5 flex items-end justify-between",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-[11px] text-ink-3",children:"今日支出"}),t.jsx("p",{className:"text-2xl font-bold leading-8",children:ne(R,i)})]}),t.jsxs("p",{className:"pb-1 text-[11px] text-ink-3",children:["同期收入 ",ne(P,i)]})]}),t.jsx("div",{className:"mt-2 flex h-1.5 overflow-hidden rounded-full bg-surface-2",children:["gui","xu","fou"].map(_=>t.jsx("span",{style:{width:`${q(_)}%`,background:Xa[_],transition:"width .3s"}},_))}),t.jsx("div",{className:"mt-2 flex justify-between text-[11px] text-ink-3",children:["gui","xu","fou"].map(_=>t.jsxs("span",{className:"flex items-center gap-1",children:[t.jsx("i",{className:"inline-block h-1.5 w-1.5 rounded-full",style:{background:Xa[_]}}),Is[_]," ",ne(W[_],i),t.jsxs("span",{className:"hidden sm:inline",children:["· ",_==="gui"?"投资":_==="xu"?"生存":"浪费"]})]},_))}),R===0?t.jsx("p",{className:"mt-2.5 rounded-btn bg-surface-2 px-3 py-2 text-xs text-ink-3",children:"暂无支出，保持空杯心态"}):W.fou>0?t.jsxs("p",{className:"mt-2.5 rounded-btn bg-surface-2 px-3 py-2 text-xs",style:{color:"var(--fou)"},children:["今日有 ",ne(W.fou,i),"「否」支出，占 ",q("fou"),"%"]}):null]}),t.jsx("div",{className:"flex gap-2",children:sE.map(([_,A])=>t.jsx("button",{onClick:()=>r(_),className:`h-8 rounded-full border px-3.5 text-xs transition-all active:scale-95 ${d===_?"border-accent bg-accent-soft font-medium text-accent":"border-line bg-surface text-ink-3"}`,children:A},_))}),t.jsxs("div",{className:"flex items-center justify-between rounded-card border border-line bg-surface px-3 py-2",children:[t.jsx("button",{onClick:()=>G(-1),className:"h-8 w-8 rounded-btn text-ink-2","aria-label":"上一期",children:"‹"}),t.jsxs("div",{className:"text-center",children:[t.jsx("p",{className:"text-sm font-semibold",children:O}),t.jsxs("p",{className:"text-[11px] text-ink-3",children:["支出 ",ne(j,i)," · 收入 ",ne(w,i)]})]}),d==="day"?t.jsx("input",{type:"date",value:l,onChange:_=>_.target.value&&p(_.target.value),"aria-label":"选择日期",className:"h-8 w-32 rounded-btn border border-line bg-surface-2 px-1.5 text-[11px] text-ink-2 outline-none focus:border-accent"}):t.jsx("button",{onClick:()=>G(1),className:"h-8 w-8 rounded-btn text-ink-2","aria-label":"下一期",children:"›"})]}),t.jsx("div",{className:"space-y-3 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-5 lg:space-y-0",children:d==="year"?D():T(S)})]})}const rE=[[/手机|数码|电脑|平板|相机|耳机|键盘|显示器|魅族|小米|华为|苹果|ipad|iphone/i,"smartphone"],[/衣|裤|鞋|帽|袜|外套|羽绒|裙/,"shirt"],[/家居|沙发|床|桌|椅|收纳|灯/,"sofa"],[/美妆|护肤|口红|粉底|香水|化妆/,"spray-can"],[/厨房|锅|碗|刀|餐具|烘焙/,"cooking-pot"],[/运动|健身|球|跑|瑜伽|户外/,"volleyball"],[/交通|车|自行车|电动车|摩托|地铁|公交|机票|高铁/,"bus"],[/家电|冰箱|空调|洗衣机|电视|微波炉/,"refrigerator"],[/工具|螺丝|钳|电钻|维修/,"hammer"],[/玩具|手办|模型|积木|娃娃/,"gamepad"],[/乐器|吉他|钢琴|尤克里里|鼓/,"guitar"],[/珠宝|首饰|戒指|项链|手表|黄金/,"gem"],[/日用|纸|清洁|洗护|牙膏|洗衣/,"package"],[/影音|视频|会员|音乐|影视|爱奇艺|优酷|b站|netflix/i,"tv"],[/效率|办公|笔记|notion/i,"zap"],[/学习|课程|书|教育|培训/,"book-open"],[/云|服务器|存储|域名|hosting/i,"cloud"],[/游戏|steam|ps|switch|皮肤|点券/i,"gamepad"],[/餐饮|吃|喝|外卖|饭|餐|咖啡|奶茶|零食|水果|菜/,"utensils"],[/居住|房租|水电|物业|燃气|住宿|酒店/,"home"],[/健康|药|医|体检|保险|健身卡/,"heart-pulse"],[/娱乐|电影|演出|ktv|旅游|旅行|门票/,"headphones"],[/人情|红包|礼物|份子|请客/,"gift"],[/通讯|话费|宽带|流量|sim/i,"headset"],[/宠物|猫|狗/,"paw-print"],[/保险|保障/,"shield"]],Es=["smartphone","shirt","sofa","cooking-pot","volleyball","car","refrigerator","hammer","gamepad","guitar","gem","package","tv","zap","book-open","cloud","utensils","home","heart-pulse","headphones","gift","tag"];function bt(e){const a=(e??"").trim();if(!a)return"tag";for(const[n,s]of rE)if(n.test(a))return s;return Es[zH(a)%Es.length]??"tag"}function Cn(e,a="xu"){return e==="gui"||e==="xu"||e==="fou"?e:a}const l7=2e4;function dE(e){const a=(e??"").trim().replace(/\/+$/,"");return a?/\/chat\/completions$/i.test(a)?a:/\/v\d+(?:alpha|beta)?$/i.test(a)?`${a}/chat/completions`:`${a}/v1/chat/completions`:""}function lE(e){const a=(e??"").trim();if(!a)throw new X("parse","AI 返回内容为空",void 0,e);const n=/```(?:json|jsonc)?\s*([\s\S]*?)```/i.exec(a),s=n?n[1].trim():a,c=s.indexOf("["),i=s.lastIndexOf("]");if(c===-1||i===-1||i<=c)throw new X("parse","AI 返回内容不是 JSON 数组",void 0,e);const d=s.slice(c,i+1);try{const r=JSON.parse(d);if(!Array.isArray(r))throw new Error("not array");return r}catch{throw new X("parse","AI 返回内容不是合法 JSON",void 0,d)}}async function hE(e,a,n,s){let c;try{c=(await Me(()=>Promise.resolve().then(()=>En),void 0,import.meta.url)).CapacitorHttp}catch(i){throw H1(i,Math.round(s/1e3))}try{const i=await c.request({url:e,method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${a.key}`},data:n,dataType:"json",connectTimeout:s,readTimeout:s,shouldEncodeUrlParams:!1}),d=i.data;return{status:Number(i.status??0),text:typeof d=="string"?d:JSON.stringify(d??"")}}catch(i){throw Sb(i,Math.round(s/1e3))}}async function pE(e,a,n,s){const c=new AbortController,i=setTimeout(()=>c.abort(),s);try{const d=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:`Bearer ${a.key}`},body:JSON.stringify(n),signal:c.signal,credentials:"omit"}),r=await d.text();return{status:d.status,text:r}}catch(d){throw Cb(d,Math.round(s/1e3))}finally{clearTimeout(i)}}async function h7(e,a,n=l7){const s=dE(e.endpoint);if(!s)throw new X("invalid_url","AI 接口地址未配置",void 0,e.endpoint);if(!e.key)throw new X("invalid_url","AI 接口密钥未配置",void 0,e.endpoint);const c={model:e.model||"gpt-4o-mini",messages:a,temperature:.2,stream:!1};be.debug("ai",`POST ${s} model=${c.model}`);const i=je()?await hE(s,e,c,n):await pE(s,e,c,n);if(i.status<200||i.status>=300)throw new X("http",`AI 接口返回异常（HTTP ${i.status}）`,i.status,i.text.slice(0,500));let d;try{d=JSON.parse(i.text)}catch{throw new X("parse","AI 接口返回内容不是合法 JSON",i.status,i.text.slice(0,500))}const l=d.choices?.[0]?.message?.content;if(typeof l=="string")return l;if(Array.isArray(l)){const p=l.map(g=>g?.text??"").join("");if(p)return p}throw new X("parse","AI 返回结构缺少 choices[0].message.content",i.status,d)}async function mE(e,a,n=l7){const s=await h7(e,a,n);return lE(s)}const p7=`你是「纳物」的记账助理。用户的一句话可能包含多条指令（买了多件东西、既有订阅又有物品、还随口记了吃喝和心情）。
你会收到编号的分句列表，请逐条解析，输出一个 JSON 数组，数组元素结构如下（不要输出其它文字）：

买入物品：{"action":"create_goods","name":"品牌+品类","channel":"京东|淘宝|线下...","price":数字,"currency":"CNY","buyDate":"YYYY-MM-DD","category":"物品分类名","icon":"单个emoji","tags":[],"note":""}
开通订阅：{"action":"create_subscription","name":"订阅名","amount":数字,"currency":"CNY","period":"month|year|week","every":1,"subCategory":"订阅分类名","icon":"单个emoji"}
卖出/退役：{"action":"retire_sell","match":"定位关键词","sellPrice":数字}
生活流记账：{"action":"create_ledger","type":"expense|income","amount":数字,"category":"生活分类名","judgement":"gui|xu|fou","date":"YYYY-MM-DD 或 null","note":"一句备注，如 早饭·小米粥"}
情绪记录：{"action":"create_mood","feeling":"单个emoji","text":"原文"}
时间记录：{"action":"create_time","durationMin":分钟数字,"tags":["标签"],"meaning":"gui|xu|fou","note":""}
无法识别：{"action":"unknown"}

规则：
1. 严格按分句顺序输出，每个分句对应数组里的一项；确实无法识别的分句输出 unknown。
2. 「会员/订阅/月卡/年卡/包年/续费」→ create_subscription；「卖了/退役/出售/回血」→ retire_sell；「买了/购入/入手/收了」→ create_goods。
3. 饮食日常流水（吃了/喝了/点了/外卖，或出现早中晚等用餐时段）→ create_ledger，type=expense，category 从生活分类列表里选（餐饮类优先），amount 用句中金额，没说金额 amount=0，不要编造。
4. **note 必须写成「餐次·内容」的干净短语，如「早饭·小米粥」「晚饭·啤酒」「午饭·公司食堂」，严禁把用户原话整句复制进 note**；内容只保留食物/饮品名，去掉「我今天早上吃的」这类口水词和金额。
5. **时段词映射餐次（口语没有明说早/午/晚饭时必须映射）**：「早上/早晨/上午 + 吃/喝」→ 早饭；「中午/晌午 + 吃/喝」→ 午饭；「下午 + 吃/喝」→ 下午茶；「晚上/傍晚 + 吃/喝」→ 晚饭；「半夜/深夜/凌晨 + 吃」→ 宵夜。例：「今天早上我吃了小米粥」→ note="早饭·小米粥"；「晚上喝了啤酒」→ note="晚饭·啤酒"。
6. 方言口语：过早=吃早饭（武汉），喝汤=吃晚饭（山东/河南），恰饭=吃饭（湖南），咥饭=吃饭（陕西），整饭/造饭=吃饭（东北）。
7. 「发了工资/进账/报销/收入」→ create_ledger 且 type=income；心情倾诉（开心/累/烦/焦虑…）→ create_mood；说了时长（X小时/X分钟）→ create_time。
8. 价格可能是中文数字（两千=2000、一千二=1200、三千五=3500），也可能是「花了X」「X块」。
9. channel 从用户提到的渠道里取；category/subCategory 必须从提供的列表里选；icon 用一个最贴切的 emoji。
10. retire_sell 的 match 要能唯一定位物品库中的物品。
11. 「昨天/前天」等相对日期按上下文里的今天换算成 YYYY-MM-DD。`;function Qa(e,a){return e.filter(n=>n.kind===a).sort((n,s)=>n.order-s.order).map(n=>n.name)}function uE(e,a,n=Db()){const s=Qa(a,"ledger").join("、")||"餐饮、交通、居住、学习、健康、娱乐、人情、服饰、饰品、食材、日用、美妆、数码、通讯、游戏、云服务、宠物、旅行、健身、母婴、办公、保险、维修、其他",c=Qa(a,"goods").join("、")||"数码、衣物、家居、美妆、厨房、运动、交通、家电、工具、玩具、乐器、珠宝、日用",i=Qa(a,"sub").join("、")||"影音、效率、学习、云服务、游戏、生活",d=e.map((r,l)=>`${l+1}) ${r}`).join(`
`);return[`今天是 ${n}`,`生活分类：${s}`,`物品分类：${c}`,`订阅分类：${i}`,"",d].join(`
`)}function yE(e,a,n=Db()){return[{role:"system",content:p7},{role:"user",content:uE(e,a,n)}]}const kE=/[。；;\n！!？?]+/,fE=/(?:，|,)?\s*(?:然后|接着|随后|之后|另外|还有|紧接着|接下来|再|顺便)\s*/,xE=/[，,]\s*(?=今天|昨天|前天|刚才|刚刚|早上|中午|晚上|下午)/,Ps=/[，,、]/;function Ts(e){return/[\d０-９]/.test(e)||/[元块￥¥]/.test(e)?!0:/花了|花费|用了|一共|总共|付了|实付|付款|充值|卖了几|卖了/.test(e)}function Jt(e){return e.replace(/^[，,、。．；;！!？? \t　「」『』""''\-—~～]+/,"").replace(/[，,、。．；;！!？? \t　「」『』""''\-—~～]+$/,"").trim()}function m7(e){const a=(e??"").trim();if(!a)return[];const n=a.split(kE).map(Jt).filter(Boolean),s=[];for(const c of n){const i=c.split(xE).map(Jt).filter(Boolean);for(const d of i){const r=d.split(fE).map(Jt).filter(Boolean);for(const l of r)s.push(...gE(l))}}return s.filter(c=>c.length>0)}function gE(e){if(!Ps.test(e))return e.trim()?[e.trim()]:[];const a=e.split(Ps).map(Jt).filter(Boolean);if(a.length<2)return a.length?[a[0]]:[];const n=[];let s=a[0];for(let c=1;c<a.length;c+=1){const i=a[c];Ts(s)&&Ts(i)?(n.push(s),s=i):s=`${s}，${i}`}return s.trim()&&n.push(s.trim()),n}const Rs={零:0,一:1,壹:1,二:2,两:2,贰:2,三:3,叁:3,四:4,肆:4,五:5,伍:5,六:6,陆:6,七:7,柒:7,八:8,捌:8,九:9,玖:9,"〇":0},Os={十:10,拾:10,百:100,佰:100,千:1e3,仟:1e3},Bs={万:1e4,亿:1e8};function bE(e){const a=(e??"").toString().trim();if(!a)return Number.NaN;if(/^\d+(\.\d+)?$/.test(a))return Number.parseFloat(a);if(a==="半")return .5;if(a==="块"||a==="元")return Number.NaN;let n=0,s=0,c=0,i=0,d=!1;for(const r of a){if(r in Rs){c=Rs[r],d=!0;continue}if(r in Os){const l=Os[r];s+=(c===0?1:c)*l,c=0,i=l,d=!0;continue}if(r in Bs){const l=Bs[r];s=(s+c)*l,n+=s,s=0,c=0,i=l,d=!0;continue}break}return d?(c>0&&i>=10?n+=s+c*i/10:n+=s+c,n):Number.NaN}function W1(e){if(typeof e=="number")return Number.isFinite(e)?e:Number.NaN;const a=(e??"").toString().trim().replace(/[,，\s]/g,"");return a?/^\d+(\.\d+)?$/.test(a)?Number.parseFloat(a):bE(a):Number.NaN}function u7(e){return Number.isFinite(e)&&e>0&&e<1e8}const vE="零一二两三四五六七八九十百千万壹贰叁肆伍陆柒捌玖拾佰仟〇",ME=[{name:"餐饮",words:["饭","餐","外卖","咖啡","奶茶","吃","宵夜","夜宵","早饭","早餐","午饭","午餐","晚饭","晚餐","下午茶","豆浆","包子","馒头","油条","粉","面","米线","火锅","烧烤","麻辣烫","汉堡","披萨","寿司","便当","饺子","面包","蛋糕","甜品","果汁","可乐","啤酒"]},{name:"交通",words:["打车","地铁","公交","油","停车","高铁","机票","火车","动车","飞机","航班","汽车","轿车","开车","自驾","出租车","网约车","滴滴","骑车","自行车","电动车","摩托","大巴","中巴","客车","轮船","船","步行","走路","徒步","单车","共享单车","乘坐","搭车"]},{name:"居住",words:["房租","水电","物业","燃气","取暖"]},{name:"学习",words:["书","课","培训","网课","学费","考试"]},{name:"健康",words:["药","医院","挂号","体检","看病","门诊","保健"]},{name:"通讯",words:["话费","充话费","电话费","流量","宽带","手机费","套餐","网卡","短信"]},{name:"云服务",words:["阿里云","腾讯云","华为云","服务器","域名","备案","cdn","云主机","对象存储","vps","云盘"]},{name:"游戏",words:["游戏","充值","皮肤","点券","steam","点卡","氪金","抽卡","月卡","通行证","首充"]},{name:"娱乐",words:["电影","ktv","演出","演唱会","剧本杀","酒吧","按摩","足浴","展览"]},{name:"服饰",words:["衣服","买衣","裤","鞋","帽","外套","卫衣","羽绒服","裙","袜","包","T恤","衬衫"]},{name:"饰品",words:["首饰","项链","戒指","耳环","手链","配饰","饰品","手表","手串"]},{name:"食材",words:["买菜","菜","水果","零食","超市","食材","肉","蛋","奶","米","粮油","生鲜"]},{name:"日用",words:["纸","洗衣液","牙膏","日用品","清洁","垃圾袋","洗护","毛巾"]},{name:"美妆",words:["口红","粉底","香水","护肤","面膜","化妆品","美妆","化妆"]},{name:"数码",words:["手机","电脑","耳机","充电宝","数据线","配件","贴膜","键盘","鼠标"]},{name:"宠物",words:["猫","狗","猫粮","狗粮","宠物","猫砂","驱虫","打疫苗"]},{name:"旅行",words:["旅游","旅行","酒店","民宿","门票","景区","度假","跟团"]},{name:"健身",words:["健身","健身房","私教","游泳","瑜伽","普拉提","球场","运动"]},{name:"母婴",words:["奶粉","尿布","尿不湿","母婴","婴儿","宝宝","辅食"]},{name:"办公",words:["文具","打印","办公","耗材","快递","邮寄"]},{name:"保险",words:["保险","社保","医保","车险","保费"]},{name:"维修",words:["维修","修理","换屏","保养","修","管道","家政"]},{name:"人情",words:["红包","礼物","份子","送礼","随礼","请客"]}],wE=[{name:"数码",words:["手机","电脑","平板","相机","耳机","键盘","鼠标","显示器","数码","魅族","小米","华为","苹果","iphone","ipad","笔记本","充电宝"]},{name:"运动",words:["跑鞋","球鞋","运动鞋","运动","健身","球","跑","瑜伽","户外","哑铃","跳绳"]},{name:"衣物",words:["衣","裤","鞋","帽","袜","外套","羽绒","裙","靴"]},{name:"家居",words:["沙发","床","桌","椅","收纳","灯","家居","被子","枕头"]},{name:"美妆",words:["口红","粉底","香水","护肤","美妆","化妆","面膜"]},{name:"厨房",words:["锅","碗","刀","餐具","厨房","烘焙","杯子","水壶"]},{name:"交通",words:["自行车","电动车","摩托","汽车","滑板"]},{name:"家电",words:["冰箱","空调","洗衣机","电视","微波炉","家电","扫地机","风扇"]},{name:"工具",words:["螺丝","钳","电钻","工具"]},{name:"玩具",words:["手办","模型","积木","娃娃","玩具"]},{name:"乐器",words:["吉他","钢琴","尤克里里","鼓","乐器"]},{name:"珠宝",words:["戒指","项链","首饰","珠宝","手表","黄金"]},{name:"日用",words:["纸","清洁","洗护","牙膏","洗衣","日用","毛巾"]}],_E=[{name:"影音",words:["视频","音乐","影视","爱奇艺","优酷","腾讯视频","b站","netflix","spotify","会员"]},{name:"效率",words:["效率","办公","笔记","notion","wps","office"]},{name:"学习",words:["课程","学习","教育","培训","网课"]},{name:"云服务",words:["云","服务器","存储","域名","hosting","icloud","网盘"]},{name:"游戏",words:["游戏","steam","psn","switch","点卡"]},{name:"生活",words:["生活","外卖","购物","超市"]}],Fs=/(早午餐|brunch|中午饭|下午点心|上午茶|下午茶|中午|早饭|早餐|早茶|午饭|午餐|中饭|晚饭|晚餐|夜宵|宵夜|加餐)/i,jE={早午餐:"早午餐",brunch:"早午餐",中午饭:"午饭",中午:"午饭",下午点心:"下午茶",上午茶:"早饭",早饭:"早饭",早餐:"早饭",早茶:"早茶",午饭:"午饭",午餐:"午饭",中饭:"午饭",晚饭:"晚饭",晚餐:"晚饭",夜宵:"宵夜",宵夜:"宵夜",下午茶:"下午茶",加餐:"加餐"},ba=/(吃了|吃的|吃了的|喝不了?|喝了|点了?个?|来了一份?|来了个|来了杯|来了点|嗦了?|炫了?个?|整了?个?|啃了?|撸了?|点了外卖|叫了?外卖|点了份|干了碗|干饭|过早|咥了?|恰了?|造了?饭|整了?饭)/,zE=[[/早上|早晨|清晨|早起|上午|过早/,"早饭"],[/中午|午间|晌午/,"午饭"],[/下午/,"下午茶"],[/晚上|傍晚|夜里|喝汤/,"晚饭"],[/半夜|深夜|凌晨/,"宵夜"]],Ws=/(打车|地铁|公交|高铁|机票|火车|动车|飞机|航班|自驾|出租车|网约车|滴滴|骑车|自行车|电动车|摩托|大巴|中巴|客车|轮船|步行|走路|徒步|单车|共享单车|乘坐|搭车|加油|停车)/,$E=/(收入|进账|到账|发了工资|发工资|工资|红包收款|报销|奖金|提成)/,An=/(买了|买了个?|买|购入|入手|收了|下单|抢了|剁手|添置|置办)/,DE=/(会员|订阅|月卡|年卡|季卡|周卡|包月|包年|续费|开通|自动续)/,NE=/(卖了|卖掉|出掉|出售|回血|转让|闲鱼出了)/,qn=/(\d+|[零一二两三四五六七八九十半]+)\s*(个)?\s*(小时|分钟|分|时|天)/,y7=/(冲动|浪费|后悔|不值|吃灰|闲置|踩坑|亏了)/,SE=/(学习|成长|投资|健康|健身|读书|课程|体检)/,Ln=/(学习|读书|健身|锻炼|成长|课程|陪家人|写作)/,k7=/(刷|短视频|虚度|浪费|摸鱼|发呆|熬夜)/,CE=[[/开心|高兴|爽|快乐|兴奋|满足|幸福|不错|美滋滋/,"😄"],[/累|疲惫|疲倦|困|乏|没劲/,"😮‍💨"],[/烦|烦躁|恼|上火|崩溃|裂开/,"😤"],[/焦虑|紧张|担心|慌|压力/,"😟"],[/难过|伤心|低落|沮丧|失落|委屈|emo/,"😔"],[/生气|愤怒|气死|火大/,"😠"],[/无聊|空虚|迷茫|发呆/,"😶"],[/平静|还好|一般|还行|凑合/,"🙂"]],AE=/(开心|高兴|快乐|兴奋|满足|幸福|美滋滋|累|疲惫|疲倦|困|没劲|烦|烦躁|崩溃|裂开|焦虑|紧张|担心|慌|压力|难过|伤心|低落|沮丧|失落|委屈|emo|生气|愤怒|气死|火大|无聊|空虚|迷茫|平静|还行|还好|一般)/,qE={今天:0,今日:0,昨天:-1,昨日:-1,前天:-2,上周:-7,上个月:-30,大前天:-3,明天:1,后天:2},f7=/(闲鱼|京东|淘宝|天猫|拼多多|抖音|快手|得物|线下|实体店|超市|官网|亚马逊|pdd|1688)/i,LE=/^(个|双|只|件|台|部|条|把|张|本|套|副|对|块|瓶|袋|盒|支|辆|台)/,Ke=`(?:\\d+(?:\\.\\d+)?|[${vE}]+)`,x7=new RegExp(`(?:花了|花费|用了|支付了?|付款|实付|付了|一共|总共|价格是?|掏了|砸了|充值)\\s*(${Ke})`,"g"),g7=new RegExp(`(${Ke})\\s*(?:块钱|块|元|￥|¥)`,"g"),b7=new RegExp(`(?:卖了|卖掉|出掉|出售|回血|转让)\\s*(${Ke})`,"g"),v7=new RegExp(`(?:月卡|年卡|季卡|周卡|包月|包年)\\s*(${Ke})`,"g");function HE(e){return x7.test(e)||g7.test(e)||b7.test(e)||v7.test(e)||/[元块¥￥]/.test(e)}function VE(e){const a=[x7,g7,b7,v7];for(const n of a){n.lastIndex=0;let s=n.exec(e);for(;s;){const c=W1(s[1]);if(u7(c))return{value:c,raw:s[0],index:s.index};s=n.exec(e)}}return IE(e)}function IE(e){const a=new RegExp(`(${Ke})`,"g"),n=[];a.lastIndex=0;let s=a.exec(e);for(;s;){const c=s[0],i=e.slice(s.index+c.length,s.index+c.length+1),d=!/\d/.test(c);if(!/^[年月日号点岁度层楼]/.test(i)&&!(d&&c.length===1)){const r=W1(c);u7(r)&&n.push({value:r,raw:c,index:s.index})}s=a.exec(e)}return n.length?n[n.length-1]:null}function EE(e,a=se()){const n=/(\d{4})[-/年](\d{1,2})[-/月](\d{1,2})/.exec(e);if(n){const s=String(n[2]).padStart(2,"0"),c=String(n[3]).padStart(2,"0");return`${n[1]}-${s}-${c}`}for(const[s,c]of Object.entries(qE))if(e.includes(s))return qa(a,c);return a}function PE(e){Fs.lastIndex=0;const a=Fs.exec(e);if(a)return jE[a[1]]??a[1];if(ba.test(e)){for(const[n,s]of zE)if(n.test(e))return s}return""}function TE(e){for(const[a,n]of CE)if(a.test(e))return n;return"🙂"}const Us={餐饮:"cl0",交通:"cl1",居住:"cl2",学习:"cl3",健康:"cl4",娱乐:"cl5",人情:"cl6",其他:"cl7",服饰:"cl8",饰品:"cl9",食材:"cl10",日用:"cl11",美妆:"cl12",数码:"cl13",通讯:"cl14",游戏:"cl15",云服务:"cl16",宠物:"cl17",旅行:"cl18",健身:"cl19",母婴:"cl20",办公:"cl21",保险:"cl22",维修:"cl23"};function Xt(e,a,n){if(!e)return"";const s=a.find(c=>c.kind===n&&c.name===e);return s?s.id:n==="ledger"&&Us[e]?Us[e]:""}function it(e,a){const n=e.find(s=>s.kind===a);return n?n.id:a==="ledger"?"cl7":a==="goods"?"cg0":"cs0"}function RE(e,a){const n=e.toLowerCase();for(const s of a)for(const c of s.words)if(n.includes(c.toLowerCase()))return s.name;return""}function en(e,a,n){const c=RE(e,n==="goods"?wE:n==="sub"?_E:ME);return Xt(c,a,n)||it(a,n)}function OE(e,a={}){return a.isIncome?"gui":a.isTraffic||a.isFood?"xu":Ln.test(e)?"gui":k7.test(e)||y7.test(e)?"fou":SE.test(e)?"gui":"xu"}function tn(e,a=""){let n=e;return n=n.replace(new RegExp(`(?:花了|花费|用了|支付了?|付款|实付|付了|一共|总共|价格是?|掏了|砸了)\\s*(${Ke})\\s*(?:块钱|块|元|￥|¥)?`,"g")," "),n=n.replace(new RegExp(`(${Ke})\\s*(?:块钱|块|元|￥|¥)`,"g")," "),n=n.replace(/(今天|昨天|前天|刚才|刚刚|大前天)/g," "),n=n.replace(/(早上|早晨|清晨|上午|中午|午间|晌午|下午|晚上|傍晚|夜里|半夜|深夜|凌晨)/g," "),n=n.replace(/(我|我们|俺|咱)/g," "),n=n.replace(/(然后|接着|随后|之后|另外|还有|紧接着|接下来|顺便)/g," "),n=n.replace(ba," "),n=n.replace(/(坐了|乘坐|坐|搭了|搭|打车|骑了|骑)/g," "),n=n.replace(/(买了|购入|入手|收了|下单|抢了|开了|开通|续费|订阅)/g," "),n=n.replace(f7," "),n=n.replace(/[，,。.；;！!？?、：:~～\-—]/g," "),n=n.replace(/\s+/g," ").trim(),n=n.replace(new RegExp(`(${Ke})`,"g")," ").replace(/\s+/g," ").trim(),a?`${a}·${n}`.slice(0,40):n.slice(0,40)}function an(e,a){let n=e.replace(/(今天|昨天|前天|刚才|刚刚|大前天)/g," ").replace(/(我|我们|俺|咱)/g," ").replace(f7," ");An.lastIndex=0;const s=An.exec(n);return s&&(n=n.slice(s.index+s[0].length)),a&&(n=n.replace(a," ")),n=n.replace(/(会员|订阅|月卡|年卡|季卡|周卡|包月|包年)/g," "),n=n.replace(/[（(][^）)]*[）)]/g," "),n=n.replace(/[，,。.；;！!？?、]/g," "),n=n.replace(/\s+/g," ").trim(),n=n.replace(LE,"").trim(),n=n.replace(/(了|的|个|一下)$/g,"").trim(),n.slice(0,24)}function BE(e){return/(年卡|包年|一年|每年|年费|年度)/.test(e)?{period:"year",every:1}:/(周卡|每周|一周)/.test(e)?{period:"week",every:1}:{period:"month",every:1}}function Gs(e){const a=qn.exec(e);if(!a)return 0;const n=W1(a[1]);if(!Number.isFinite(n))return 0;const s=a[3]??a[2]??"";return Math.round(s==="小时"||s==="时"?n*60:s==="天"?n*60*24:n)}function FE(e,a,n={}){const s=n.today??se(),c=n.currency??"CNY",i=(e??"").replace(/[０-９Ａ-Ｚａ-ｚ]/g,m=>String.fromCharCode(m.charCodeAt(0)-65248)).trim();if(!i)return{action:"unknown",source:"local",explanation:"空句"};const d=VE(i),r=d?d.value:0,l=EE(i,s),p=PE(i),g=a??[];if(!d&&AE.test(i))return{action:"create_mood",moodDraft:{feeling:TE(i),text:i},explanation:"本地规则：情绪记录",source:"local"};if(NE.test(i))return{action:"retire_sell",retireDraft:{match:an(i,d?.raw),sellPrice:r},explanation:"本地规则：退役转卖",source:"local"};if(DE.test(i)){const{period:m,every:x}=BE(i),k=an(i,d?.raw)||"订阅";return{action:"create_subscription",subDraft:{name:k,amount:r,currency:c,period:m,every:x,categoryId:en(i,g,"sub"),icon:bt(k)},explanation:"本地规则：订阅",source:"local"}}if(qn.test(i)&&!HE(i))return{action:"create_time",timeDraft:{durationMin:Gs(i),tags:[],meaning:Ln.test(i)?"gui":k7.test(i)?"fou":"xu",note:tn(i)},explanation:"本地规则：时间记录",source:"local"};if(An.test(i)&&!y7.test(i)){const m=an(i,d?.raw)||"物品";return{action:"create_goods",goodsDraft:{name:m,price:r,currency:c,buyDate:l,categoryId:en(i,g,"goods"),icon:bt(m),tags:[],note:""},explanation:"本地规则：买入物品",source:"local"}}if(r>0||ba.test(i)||Ws.test(i)){const m=$E.test(i),x=en(i,g,"ledger"),k=!!p||ba.test(i)||x==="cl0",y=Ws.test(i)||x==="cl1";return{action:"create_ledger",ledgerDraft:{type:m?"income":"expense",amount:r,categoryId:x,judgement:OE(i,{isIncome:m,isTraffic:y,isFood:k}),date:l,note:tn(i,p)},explanation:"本地规则：生活流",source:"local"}}return qn.test(i)?{action:"create_time",timeDraft:{durationMin:Gs(i),tags:[],meaning:Ln.test(i)?"gui":"xu",note:tn(i)},explanation:"本地规则：时间记录",source:"local"}:{action:"unknown",explanation:"本地规则未能识别",source:"local"}}function M7(e){return{endpoint:e?.aiEndpoint??"",key:e?.aiKey??"",model:e?.aiModel??"gpt-4o-mini"}}function w7(e){return!!(e.endpoint&&e.endpoint.trim())&&!!(e.key&&e.key.trim())}function _7(e,a,n){const s=String(e.action??"unknown"),c=d=>{const r=typeof d=="number"?d:Number.parseFloat(String(d??""));return Number.isFinite(r)?r:0},i=(d,r="")=>typeof d=="string"&&d.trim()?d.trim():r;switch(s){case"create_goods":{const d=i(e.name,"物品");return{action:"create_goods",goodsDraft:{name:d,price:c(e.price),currency:i(e.currency,n.currency),buyDate:i(e.buyDate,n.today),categoryId:Xt(i(e.category),a,"goods")||it(a,"goods"),icon:i(e.icon)||bt(d),tags:Array.isArray(e.tags)?e.tags.map(r=>String(r)):[],note:i(e.note),channel:i(e.channel)},explanation:"AI 解析：买入物品",source:"ai"}}case"create_subscription":{const d=i(e.name,"订阅"),r=i(e.period,"month");return{action:"create_subscription",subDraft:{name:d,amount:c(e.amount),currency:i(e.currency,n.currency),period:r==="year"||r==="week"?r:"month",every:Math.max(Math.round(c(e.every))||1,1),categoryId:Xt(i(e.subCategory)||i(e.category),a,"sub")||it(a,"sub"),icon:i(e.icon)||bt(d)},explanation:"AI 解析：订阅",source:"ai"}}case"create_ledger":{const d=Xt(i(e.category),a,"ledger")||it(a,"ledger"),r=e.type==="income"?"income":"expense",l=Cn(e.judgement,r==="income"?"gui":"xu");return{action:"create_ledger",ledgerDraft:{type:r,amount:c(e.amount),categoryId:d,judgement:l,date:i(e.date,n.today),note:i(e.note)},explanation:"AI 解析：生活流",source:"ai"}}case"create_mood":return{action:"create_mood",moodDraft:{feeling:i(e.feeling,"🙂"),text:i(e.text)},explanation:"AI 解析：情绪",source:"ai"};case"create_time":{const d=Cn(e.meaning,"xu");return{action:"create_time",timeDraft:{durationMin:c(e.durationMin),tags:Array.isArray(e.tags)?e.tags.map(r=>String(r)):[],meaning:d,note:i(e.note)},explanation:"AI 解析：时间记录",source:"ai"}}case"retire_sell":return{action:"retire_sell",retireDraft:{match:i(e.match),sellPrice:c(e.sellPrice)},explanation:"AI 解析：退役转卖",source:"ai"};default:return null}}function U1(e,a,n){const s=[];for(const c of e)!c||c.action==="unknown"||(c.ledgerDraft&&(c.ledgerDraft.amount=Number.isFinite(c.ledgerDraft.amount)?c.ledgerDraft.amount:0,c.ledgerDraft.date||(c.ledgerDraft.date=n.today),c.ledgerDraft.categoryId||(c.ledgerDraft.categoryId=it(a,"ledger")),c.ledgerDraft.judgement||(c.ledgerDraft.judgement=c.ledgerDraft.type==="income"?"gui":"xu")),c.goodsDraft&&(c.goodsDraft.buyDate||(c.goodsDraft.buyDate=n.today),c.goodsDraft.currency||(c.goodsDraft.currency=n.currency),c.goodsDraft.categoryId||(c.goodsDraft.categoryId=it(a,"goods")),c.goodsDraft.icon||(c.goodsDraft.icon=bt(c.goodsDraft.name))),c.subDraft&&(c.subDraft.currency||(c.subDraft.currency=n.currency),c.subDraft.categoryId||(c.subDraft.categoryId=it(a,"sub")),c.subDraft.every||(c.subDraft.every=1),c.subDraft.icon||(c.subDraft.icon=bt(c.subDraft.name))),s.push(c));return s}function Qt(e,a){const n=a.today??se(),s=a.settings?.currency||"CNY",i=m7(e).map(d=>FE(d,a.categories,{today:n,currency:s})).filter(d=>d.action!=="unknown");return{items:U1(i,a.categories,{today:n,currency:s}),source:"local"}}async function WE(e,a){const n=a.today??se(),s=a.settings?.currency||"CNY",c=m7(e);if(c.length===0)return{items:[],source:"local",reason:"没有可解析的内容"};const i=M7(a.settings);if(!w7(i))return{...Qt(e,a),reason:"未配置 AI，已使用本地规则解析"};try{const d=yE(c,a.categories),l=(await mE(i,d)).map(g=>g&&typeof g=="object"?_7(g,a.categories,{today:n,currency:s}):null).filter(g=>g!==null),p=U1(l,a.categories,{today:n,currency:s});return p.length===0?{...Qt(e,a),reason:"AI 未识别出有效条目，已使用本地规则解析"}:{items:p,source:"ai"}}catch(d){return be.warn("parse","AI 解析失败，回落本地规则",d),{...Qt(e,a),reason:"AI 调用失败，已使用本地规则解析"}}}async function UE(e,a){const n=M7(a.settings);if(w7(n))try{return await GE(e,a,n)}catch(s){return be.warn("parseImage","AI 识图失败，回落本地 OCR",s),await Ys(e,a,"AI 识图失败，已用本地识别")}return await Ys(e,a,"未配置 AI，已用本地识别")}async function GE(e,a,n){const s=a.today??se(),c=a.settings?.currency||"CNY",i=[{role:"system",content:p7},{role:"user",content:[{type:"text",text:`这是一张照片/截图。请识别图中所有可记账的信息（账单、小票、订单、物品、会员、订阅等），按系统提示词的 JSON 数组格式输出；识别不到任何可记账内容时输出 []。今天的日期：${s}。`},{type:"image_url",image_url:{url:e}}]}],r=(await h7(n,i,3e4).then(p=>{const g=p.indexOf("["),m=p.lastIndexOf("]");return g===-1||m<=g?[]:JSON.parse(p.slice(g,m+1))})).map(p=>p&&typeof p=="object"?_7(p,a.categories,{today:s,currency:c}):null).filter(p=>p!==null),l=U1(r,a.categories,{today:s,currency:c});return l.length===0?{items:[],source:"ai",reason:"图中没有识别出可记账的内容"}:{items:l,source:"ai"}}async function Ys(e,a,n){const{ocrText:s}=await Me(async()=>{const{ocrText:d}=await Promise.resolve().then(()=>RP);return{ocrText:d}},void 0,import.meta.url),c=await s(e);if(!c)return{items:[],source:"local",reason:`${n}，但图中没有识别出文字`};const i=Qt(c,a);return i.items.length===0?{items:[],source:"local",reason:`${n}，但文字里没有解析出可记账内容`}:{...i,reason:n}}var YE={exports:{}};(function(e){var a=function(n){var s=Object.prototype,c=s.hasOwnProperty,i=Object.defineProperty||function(b,v,h){b[v]=h.value},d,r=typeof Symbol=="function"?Symbol:{},l=r.iterator||"@@iterator",p=r.asyncIterator||"@@asyncIterator",g=r.toStringTag||"@@toStringTag";function m(b,v,h){return Object.defineProperty(b,v,{value:h,enumerable:!0,configurable:!0,writable:!0}),b[v]}try{m({},"")}catch{m=function(v,h,C){return v[h]=C}}function x(b,v,h,C){var $=v&&v.prototype instanceof S?v:S,E=Object.create($.prototype),U=new D(C||[]);return i(E,"_invoke",{value:G(b,h,U)}),E}n.wrap=x;function k(b,v,h){try{return{type:"normal",arg:b.call(v,h)}}catch(C){return{type:"throw",arg:C}}}var y="suspendedStart",M="suspendedYield",f="executing",z="completed",V={};function S(){}function j(){}function w(){}var N={};m(N,l,function(){return this});var R=Object.getPrototypeOf,P=R&&R(R(_([])));P&&P!==s&&c.call(P,l)&&(N=P);var W=w.prototype=S.prototype=Object.create(N);j.prototype=w,i(W,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:j,configurable:!0}),j.displayName=m(w,g,"GeneratorFunction");function B(b){["next","throw","return"].forEach(function(v){m(b,v,function(h){return this._invoke(v,h)})})}n.isGeneratorFunction=function(b){var v=typeof b=="function"&&b.constructor;return v?v===j||(v.displayName||v.name)==="GeneratorFunction":!1},n.mark=function(b){return Object.setPrototypeOf?Object.setPrototypeOf(b,w):(b.__proto__=w,m(b,g,"GeneratorFunction")),b.prototype=Object.create(W),b},n.awrap=function(b){return{__await:b}};function q(b,v){function h(E,U,Y,ee){var ae=k(b[E],b,U);if(ae.type==="throw")ee(ae.arg);else{var he=ae.arg,oe=he.value;return oe&&typeof oe=="object"&&c.call(oe,"__await")?v.resolve(oe.__await).then(function(le){h("next",le,Y,ee)},function(le){h("throw",le,Y,ee)}):v.resolve(oe).then(function(le){he.value=le,Y(he)},function(le){return h("throw",le,Y,ee)})}}var C;function $(E,U){function Y(){return new v(function(ee,ae){h(E,U,ee,ae)})}return C=C?C.then(Y,Y):Y()}i(this,"_invoke",{value:$})}B(q.prototype),m(q.prototype,p,function(){return this}),n.AsyncIterator=q,n.async=function(b,v,h,C,$){$===void 0&&($=Promise);var E=new q(x(b,v,h,C),$);return n.isGeneratorFunction(v)?E:E.next().then(function(U){return U.done?U.value:E.next()})};function G(b,v,h){var C=y;return function(E,U){if(C===f)throw new Error("Generator is already running");if(C===z){if(E==="throw")throw U;return A()}for(h.method=E,h.arg=U;;){var Y=h.delegate;if(Y){var ee=O(Y,h);if(ee){if(ee===V)continue;return ee}}if(h.method==="next")h.sent=h._sent=h.arg;else if(h.method==="throw"){if(C===y)throw C=z,h.arg;h.dispatchException(h.arg)}else h.method==="return"&&h.abrupt("return",h.arg);C=f;var ae=k(b,v,h);if(ae.type==="normal"){if(C=h.done?z:M,ae.arg===V)continue;return{value:ae.arg,done:h.done}}else ae.type==="throw"&&(C=z,h.method="throw",h.arg=ae.arg)}}}function O(b,v){var h=v.method,C=b.iterator[h];if(C===d)return v.delegate=null,h==="throw"&&b.iterator.return&&(v.method="return",v.arg=d,O(b,v),v.method==="throw")||h!=="return"&&(v.method="throw",v.arg=new TypeError("The iterator does not provide a '"+h+"' method")),V;var $=k(C,b.iterator,v.arg);if($.type==="throw")return v.method="throw",v.arg=$.arg,v.delegate=null,V;var E=$.arg;if(!E)return v.method="throw",v.arg=new TypeError("iterator result is not an object"),v.delegate=null,V;if(E.done)v[b.resultName]=E.value,v.next=b.nextLoc,v.method!=="return"&&(v.method="next",v.arg=d);else return E;return v.delegate=null,V}B(W),m(W,g,"Generator"),m(W,l,function(){return this}),m(W,"toString",function(){return"[object Generator]"});function F(b){var v={tryLoc:b[0]};1 in b&&(v.catchLoc=b[1]),2 in b&&(v.finallyLoc=b[2],v.afterLoc=b[3]),this.tryEntries.push(v)}function T(b){var v=b.completion||{};v.type="normal",delete v.arg,b.completion=v}function D(b){this.tryEntries=[{tryLoc:"root"}],b.forEach(F,this),this.reset(!0)}n.keys=function(b){var v=Object(b),h=[];for(var C in v)h.push(C);return h.reverse(),function $(){for(;h.length;){var E=h.pop();if(E in v)return $.value=E,$.done=!1,$}return $.done=!0,$}};function _(b){if(b){var v=b[l];if(v)return v.call(b);if(typeof b.next=="function")return b;if(!isNaN(b.length)){var h=-1,C=function $(){for(;++h<b.length;)if(c.call(b,h))return $.value=b[h],$.done=!1,$;return $.value=d,$.done=!0,$};return C.next=C}}return{next:A}}n.values=_;function A(){return{value:d,done:!0}}return D.prototype={constructor:D,reset:function(b){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(T),!b)for(var v in this)v.charAt(0)==="t"&&c.call(this,v)&&!isNaN(+v.slice(1))&&(this[v]=d)},stop:function(){this.done=!0;var b=this.tryEntries[0],v=b.completion;if(v.type==="throw")throw v.arg;return this.rval},dispatchException:function(b){if(this.done)throw b;var v=this;function h(ee,ae){return E.type="throw",E.arg=b,v.next=ee,ae&&(v.method="next",v.arg=d),!!ae}for(var C=this.tryEntries.length-1;C>=0;--C){var $=this.tryEntries[C],E=$.completion;if($.tryLoc==="root")return h("end");if($.tryLoc<=this.prev){var U=c.call($,"catchLoc"),Y=c.call($,"finallyLoc");if(U&&Y){if(this.prev<$.catchLoc)return h($.catchLoc,!0);if(this.prev<$.finallyLoc)return h($.finallyLoc)}else if(U){if(this.prev<$.catchLoc)return h($.catchLoc,!0)}else if(Y){if(this.prev<$.finallyLoc)return h($.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(b,v){for(var h=this.tryEntries.length-1;h>=0;--h){var C=this.tryEntries[h];if(C.tryLoc<=this.prev&&c.call(C,"finallyLoc")&&this.prev<C.finallyLoc){var $=C;break}}$&&(b==="break"||b==="continue")&&$.tryLoc<=v&&v<=$.finallyLoc&&($=null);var E=$?$.completion:{};return E.type=b,E.arg=v,$?(this.method="next",this.next=$.finallyLoc,V):this.complete(E)},complete:function(b,v){if(b.type==="throw")throw b.arg;return b.type==="break"||b.type==="continue"?this.next=b.arg:b.type==="return"?(this.rval=this.arg=b.arg,this.method="return",this.next="end"):b.type==="normal"&&v&&(this.next=v),V},finish:function(b){for(var v=this.tryEntries.length-1;v>=0;--v){var h=this.tryEntries[v];if(h.finallyLoc===b)return this.complete(h.completion,h.afterLoc),T(h),V}},catch:function(b){for(var v=this.tryEntries.length-1;v>=0;--v){var h=this.tryEntries[v];if(h.tryLoc===b){var C=h.completion;if(C.type==="throw"){var $=C.arg;T(h)}return $}}throw new Error("illegal catch attempt")},delegateYield:function(b,v,h){return this.delegate={iterator:_(b),resultName:v,nextLoc:h},this.method==="next"&&(this.arg=d),V}},n}(e.exports);try{regeneratorRuntime=a}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}})(YE);var j7=(e,a)=>`${e}-${a}-${Math.random().toString(16).slice(3,8)}`;const ZE=j7;let Zs=0;var KE=({id:e,action:a,payload:n={}})=>{let s=e;return typeof s>"u"&&(s=ZE("Job",Zs),Zs+=1),{id:s,action:a,payload:n}},Pa={};let G1=!1;Pa.logging=G1;Pa.setLogging=e=>{G1=e};Pa.log=(...e)=>G1?console.log.apply(void 0,e):null;function JE(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function XE(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var QE=XE;const eP=QE;var tP=e=>{const a={};return typeof WorkerGlobalScope<"u"?a.type="webworker":eP()?a.type="electron":typeof document=="object"?a.type="browser":typeof process=="object"&&typeof JE=="function"&&(a.type="node"),typeof e>"u"?a:a[e]};const aP=tP("type")==="browser",nP=aP?e=>new URL(e,window.location.href).href:e=>e;var oP=e=>{const a={...e};return["corePath","workerPath","langPath"].forEach(n=>{e[n]&&(a[n]=nP(a[n]))}),a},sP=e=>{const a=[],n=[],s=[],c=[],i=[];return e.blocks&&e.blocks.forEach(d=>{d.paragraphs.forEach(r=>{r.lines.forEach(l=>{l.words.forEach(p=>{p.symbols.forEach(g=>{i.push({...g,page:e,block:d,paragraph:r,line:l,word:p})}),c.push({...p,page:e,block:d,paragraph:r,line:l})}),s.push({...l,page:e,block:d,paragraph:r})}),n.push({...r,page:e,block:d})}),a.push({...d,page:e})}),{...e,blocks:a,paragraphs:n,lines:s,words:c,symbols:i}},cP={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const iP="5.1.1",rP={version:iP};var dP={workerBlobURL:!0,logger:()=>{}};const lP=rP.version,hP=dP;var pP={...hP,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${lP}/dist/worker.min.js`},mP=({workerPath:e,workerBlobURL:a})=>{let n;if(Blob&&URL&&a){const s=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(s))}else n=new Worker(e);return n},uP=e=>{e.terminate()},yP=(e,a)=>{e.onmessage=({data:n})=>{a(n)}},kP=async(e,a)=>{e.postMessage(a)};const nn=e=>new Promise((a,n)=>{const s=new FileReader;s.onload=()=>{a(s.result)},s.onerror=({target:{error:{code:c}}})=>{n(Error(`File could not be read! Code=${c}`))},s.readAsArrayBuffer(e)}),Hn=async e=>{let a=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?a=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):a=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(a=await Hn(e.src)),e.tagName==="VIDEO"&&(a=await Hn(e.poster)),e.tagName==="CANVAS"&&await new Promise(n=>{e.toBlob(async s=>{a=await nn(s),n()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();a=await nn(n)}else(e instanceof File||e instanceof Blob)&&(a=await nn(e));return new Uint8Array(a)};var fP=Hn;const xP=pP,gP=mP,bP=uP,vP=yP,MP=kP,wP=fP;var _P={defaultOptions:xP,spawnWorker:gP,terminateWorker:bP,onMessage:vP,send:MP,loadImage:wP};const jP=oP,zP=sP,Ae=KE,{log:Ks}=Pa,$P=j7,nt=cP,{defaultOptions:DP,spawnWorker:NP,terminateWorker:SP,onMessage:CP,loadImage:Js,send:AP}=_P;let Xs=0;var z7=async(e="eng",a=nt.LSTM_ONLY,n={},s={})=>{const c=$P("Worker",Xs),{logger:i,errorHandler:d,...r}=jP({...DP,...n}),l={},p={},g=typeof e=="string"?e.split("+"):e;let m=a,x=s;const k=[nt.DEFAULT,nt.LSTM_ONLY].includes(a)&&!r.legacyCore;let y,M;const f=new Promise(($,E)=>{M=$,y=E}),z=$=>{y($.message)};let V=NP(r);V.onerror=z,Xs+=1;const S=($,E)=>{l[$]=E},j=($,E)=>{p[$]=E},w=({id:$,action:E,payload:U})=>new Promise((Y,ee)=>{Ks(`[${c}]: Start ${$}, action=${E}`);const ae=`${E}-${$}`;S(ae,Y),j(ae,ee),AP(V,{workerId:c,jobId:$,action:E,payload:U})}),N=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),R=$=>w(Ae({id:$,action:"load",payload:{options:{lstmOnly:k,corePath:r.corePath,logging:r.logging}}})),P=($,E,U)=>w(Ae({id:U,action:"FS",payload:{method:"writeFile",args:[$,E]}})),W=($,E)=>w(Ae({id:E,action:"FS",payload:{method:"readFile",args:[$,{encoding:"utf8"}]}})),B=($,E)=>w(Ae({id:E,action:"FS",payload:{method:"unlink",args:[$]}})),q=($,E,U)=>w(Ae({id:U,action:"FS",payload:{method:$,args:E}})),G=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),O=($,E)=>w(Ae({id:E,action:"loadLanguage",payload:{langs:$,options:{langPath:r.langPath,dataPath:r.dataPath,cachePath:r.cachePath,cacheMethod:r.cacheMethod,gzip:r.gzip,lstmOnly:[nt.DEFAULT,nt.LSTM_ONLY].includes(m)&&!r.legacyLang}}})),F=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),T=($,E,U,Y)=>w(Ae({id:Y,action:"initialize",payload:{langs:$,oem:E,config:U}})),D=($="eng",E,U,Y)=>{if(k&&[nt.TESSERACT_ONLY,nt.TESSERACT_LSTM_COMBINED].includes(E))throw Error("Legacy model requested but code missing.");const ee=E||m;m=ee;const ae=U||x;x=ae;const oe=(typeof $=="string"?$.split("+"):$).filter(le=>!g.includes(le));return g.push(...oe),oe.length>0?O(oe,Y).then(()=>T($,ee,ae,Y)):T($,ee,ae,Y)},_=($={},E)=>w(Ae({id:E,action:"setParameters",payload:{params:$}})),A=async($,E={},U={blocks:!0,text:!0,hocr:!0,tsv:!0},Y)=>w(Ae({id:Y,action:"recognize",payload:{image:await Js($),options:E,output:U}})),b=($="Tesseract OCR Result",E=!1,U)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),w(Ae({id:U,action:"getPDF",payload:{title:$,textonly:E}}))),v=async($,E)=>{if(k)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return w(Ae({id:E,action:"detect",payload:{image:await Js($)}}))},h=async()=>(V!==null&&(SP(V),V=null),Promise.resolve());CP(V,({workerId:$,jobId:E,status:U,action:Y,data:ee})=>{const ae=`${Y}-${E}`;if(U==="resolve"){Ks(`[${$}]: Complete ${E}`);let he=ee;Y==="recognize"?he=zP(ee):Y==="getPDF"&&(he=Array.from({...ee,length:Object.keys(ee).length})),l[ae]({jobId:E,data:he})}else if(U==="reject")if(p[ae](ee),Y==="load"&&y(ee),d)d(ee);else throw Error(ee);else U==="progress"&&i({...ee,userJobId:E})});const C={id:c,worker:V,setResolve:S,setReject:j,load:N,writeText:P,readText:W,removeFile:B,FS:q,loadLanguage:G,initialize:F,reinitialize:D,setParameters:_,recognize:A,getPDF:b,detect:v,terminate:h};return R().then(()=>O(e)).then(()=>T(e,a,s)).then(()=>M(C)).catch(()=>{}),f};const $7=z7,qP=async(e,a,n)=>{const s=await $7(a,1,n);return s.recognize(e).finally(async()=>{await s.terminate()})},LP=async(e,a)=>{const n=await $7("osd",0,a);return n.detect(e).finally(async()=>{await n.terminate()})};var HP={recognize:qP,detect:LP};const VP=z7,IP=HP;var EP={createWorker:VP,...IP};let on=null;function PP(){return typeof window>"u"?"":window.location.origin}async function D7(){if(!on){const e=PP();on=EP.createWorker("chi_sim",1,{workerPath:`${e}/tess/worker.min.js`,corePath:`${e}/tess/`,langPath:`${e}/tessdata`,gzip:!1,logger:()=>{},errorHandler:()=>{}})}return on}async function TP(e){try{const a=await D7(),{data:n}=await a.recognize(e);return(n?.text??"").replace(/\s+/g," ").trim()}catch(a){return console.warn("[localOcr] failed",a),""}}function N7(){D7().catch(()=>{})}const RP=Object.freeze(Object.defineProperty({__proto__:null,ocrText:TP,warmUpOcr:N7},Symbol.toStringTag,{value:"Module"}));function OP(){const e=ke(),a=Z(D=>D.categories),n=de(D=>D.settings),s=Z(D=>D.addLedger),c=Z(D=>D.addLedgerMany),i=Z(D=>D.addGoods),d=Z(D=>D.addSubscription),r=Z(D=>D.addMood),l=Z(D=>D.addTime),p=u.useRef(null),[g,m]=u.useState(!1),[x,k]=u.useState(!1);u.useEffect(()=>{N7()},[]);const[y,M]=u.useState(null),[f,z]=u.useState("local"),[V,S]=u.useState(""),[j,w]=u.useState([]),N=u.useRef(null),[R,P]=u.useState(!1),W=D=>new Promise((_,A)=>{const b=new FileReader;b.onerror=()=>A(new Error("图片读取失败")),b.onload=()=>{const v=new Image;v.onerror=()=>A(new Error("图片解码失败")),v.onload=()=>{const C=Math.min(1,1024/Math.max(v.width,v.height)),$=document.createElement("canvas");$.width=Math.round(v.width*C),$.height=Math.round(v.height*C);const E=$.getContext("2d");if(!E)return A(new Error("画布不可用"));E.drawImage(v,0,0,$.width,$.height),_($.toDataURL("image/jpeg",.85))},v.src=String(b.result)},b.readAsDataURL(D)}),B=async D=>{if(!(!D||R||x)){P(!0);try{const _=await W(D),A=await UE(_,{categories:a,settings:n,today:se()});if(A.items.length===0){J(A.reason??"图中没有识别出可记账的内容");return}M(A.items),z(A.source),S(A.reason??"由照片识别"),w(A.items.map(()=>!0)),K(`从图片识别出 ${A.items.length} 条，请确认`)}catch(_){J(_.message||"识图失败，请稍后再试")}finally{P(!1),N.current&&(N.current.value="")}}},q=()=>p.current?.value??"",G=async()=>{const D=q();if(!(!D.trim()||x)){k(!0);try{const _=await WE(D,{categories:a,settings:n,today:se()});if(_.items.length===0){J("没有识别出可以记录的内容，试着说「花了多少钱」"),k(!1);return}M(_.items),z(_.source),S(_.reason??""),w(_.items.map(()=>!0))}catch(_){J(_.message)}k(!1)}},O=D=>a.find(_=>_.id===D),F=async()=>{if(!y)return;const D=y.filter((v,h)=>j[h]);if(D.length===0)return;const _=D.filter(v=>v.action==="create_ledger"&&v.ledgerDraft).map(v=>v.ledgerDraft);let A=null,b=null;for(const v of D){if(v.action==="create_goods"&&v.goodsDraft){const h=await i(v.goodsDraft);A=A??h}if(v.action==="create_subscription"&&v.subDraft){const h=await d(v.subDraft);b=b??h}v.action==="create_mood"&&v.moodDraft&&await r({...v.moodDraft}),v.action==="create_time"&&v.timeDraft&&await l({...v.timeDraft})}if(_.length===1?await s(_[0]):_.length>1&&await c(_),K(`已记录 ${D.length} 条`),A){e("/home",{replace:!0,state:{editGoodsId:A.id}});return}if(b){e("/home",{replace:!0,state:{editSubId:b.id}});return}e("/ledger",{replace:!0})},T=D=>{switch(D.action){case"create_ledger":{const _=D.ledgerDraft,A=O(_.categoryId);return`${_.type==="income"?"收入":"支出"} ¥${_.amount} · ${A?A.name:_.categoryId} · ${_.judgement==="gui"?"归":_.judgement==="xu"?"需":"否"} · ${_.date}`}case"create_goods":return`新增物品 ${D.goodsDraft.name} ¥${D.goodsDraft.price}`;case"create_subscription":return`新增订阅 ${D.subDraft.name} ¥${D.subDraft.amount}/${D.subDraft.period==="month"?"月":D.subDraft.period==="year"?"年":"周"}`;case"create_mood":return`情绪 ${D.moodDraft.feeling} ${D.moodDraft.text}`;case"create_time":return`时间 ${D.timeDraft.durationMin} 分钟`;case"retire_sell":return`退役转卖 ${D.retireDraft.match} ¥${D.retireDraft.sellPrice}`;default:return D.explanation??"未知内容"}};return t.jsx(He,{title:"AI 记一笔",onBack:()=>e(-1),children:t.jsxs("div",{className:"mx-auto w-full max-w-2xl",children:[t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("textarea",{ref:p,defaultValue:"",onInput:D=>m(D.currentTarget.value.trim().length>0),rows:4,placeholder:`像说话一样描述就行，例如：
今天早上吃了油条包子花了30，然后坐火车花了60去桐柏`,className:"w-full resize-none rounded-btn border border-line bg-surface-2 p-3 text-sm leading-6 outline-none focus:border-accent"}),t.jsxs("div",{className:"mt-2 flex gap-2",children:[t.jsxs("button",{type:"button",onClick:()=>N.current?.click(),disabled:R||x,className:"flex h-9 flex-1 items-center justify-center gap-1.5 rounded-btn border border-line bg-surface-2 text-xs text-ink-2 active:bg-surface disabled:opacity-50",children:[t.jsx(za,{size:14,strokeWidth:1.8,"aria-hidden":!0}),R?"识别中…":"拍照 / 相册识图添加"]}),t.jsx("input",{ref:N,type:"file",accept:"image/*",className:"hidden",onChange:D=>void B(D.target.files?.[0])})]}),t.jsxs("div",{className:"mt-2 flex items-center justify-between",children:[t.jsx("p",{className:"text-[11px] text-ink-3",children:n.aiEndpoint?"AI 模式":"本地规则模式（设置里可配 AI）"}),t.jsx("button",{onClick:G,disabled:!g||x,className:"h-10 rounded-full bg-accent px-6 text-sm font-semibold text-white active:opacity-90 disabled:opacity-40",children:x?"解析中…":"开始解析"})]})]}),y?t.jsxs("div",{className:"mt-4",children:[t.jsxs("div",{className:"mb-2 flex items-center justify-between px-1",children:[t.jsxs("h2",{className:"text-sm font-semibold",children:["识别出 ",y.length," 条",t.jsxs("span",{className:"ml-1.5 text-[11px] font-normal text-ink-3",children:["（",f==="ai"?"AI 解析":"本地规则",V?` · ${V}`:"","）"]})]}),t.jsx("button",{onClick:()=>w(j.every(Boolean)?j.map(()=>!1):j.map(()=>!0)),className:"text-xs text-accent",children:j.every(Boolean)?"全不选":"全选"})]}),t.jsx("ul",{className:"space-y-2",children:y.map((D,_)=>t.jsxs("li",{className:`flex items-start gap-3 rounded-card border p-3.5 ${j[_]?"border-accent bg-surface":"border-line bg-surface opacity-50"}`,onClick:()=>w(j.map((A,b)=>b===_?!A:A)),children:[t.jsx("span",{className:`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] ${j[_]?"border-accent bg-accent text-white":"border-line-2"}`,children:"✓"}),t.jsxs("div",{className:"min-w-0",children:[t.jsx("p",{className:"text-sm font-medium",children:T(D)}),D.explanation?t.jsx("p",{className:"mt-0.5 text-xs leading-5 text-ink-3",children:D.explanation}):null]})]},_))}),t.jsxs("button",{onClick:F,disabled:!j.some(Boolean),className:"mt-4 mb-2 h-12 w-full rounded-btn bg-accent text-base font-semibold text-white active:opacity-90 disabled:opacity-40",children:["记下选中的 ",j.filter(Boolean).length," 条"]})]}):t.jsxs("div",{className:"mt-4 rounded-card border border-dashed border-line bg-surface p-4",children:[t.jsx("p",{className:"text-xs font-medium text-ink-2",children:"可以这样说"}),t.jsx("ul",{className:"mt-2 space-y-1.5",children:["今天早上吃了油条包子花了30","然后坐火车花了60去桐柏","在闲鱼买了魅族20花了两千","开了个B站会员25"].map(D=>t.jsx("li",{children:t.jsxs("button",{onClick:()=>{const _=p.current;_&&(_.value=_.value?`${_.value}${D}`:D,m(!0),_.focus())},className:"text-xs text-accent",children:["「",D,"」"]})},D))})]})]})})}const BP=[{key:"gui",label:"归",desc:"值得花的",color:"var(--gui)"},{key:"xu",label:"需",desc:"必要的",color:"var(--xu)"},{key:"fou",label:"否",desc:"本可避免",color:"var(--fou)"}];function Qs(){const e=ke(),{id:a}=cc(),n=Z(q=>q.valueRecords.find(G=>G.id===a)),s=Z(q=>q.categories),c=Z(q=>q.addLedger),i=Z(q=>q.updateLedger),d=de(q=>q.settings.currency),[r,l]=u.useState(n?.type??"expense"),[p,g]=u.useState(n?.categoryId??""),[m,x]=u.useState(n?.judgement??"xu"),[k,y]=u.useState(n?.date??se()),[M,f]=u.useState(!1),z=u.useRef(null),[V,S]=u.useState(n?String(n.amount):""),[j,w]=u.useState(!1),N=u.useMemo(()=>s.filter(q=>q.kind==="ledger").sort((q,G)=>q.order-G.order),[s]),R=p||N[0]?.id||"",P=Number(V),W=Number.isFinite(P)&&P>0&&R,B=async()=>{if(!W||M)return;f(!0);const q={type:r,amount:P,categoryId:R,judgement:m,date:k,note:(z.current?.value??"").trim()||void 0,currency:d};try{n?(await i(n.id,q),K("已保存")):(await c(q),K("已记下这笔")),e("/ledger",{replace:!0})}finally{f(!1)}};return t.jsxs(He,{title:n?"编辑记录":"记一笔",onBack:()=>e("/ledger",{replace:!0}),children:[t.jsx("div",{className:"mb-3 flex gap-1 rounded-btn bg-surface-2 p-1",children:[["expense","支出"],["income","收入"]].map(([q,G])=>t.jsx("button",{onClick:()=>l(q),className:`h-10 flex-1 rounded-btn text-sm font-medium ${r===q?"bg-surface shadow-sm":"text-ink-3"}`,style:r===q?{color:q==="income"?"var(--gui)":"var(--ink)"}:void 0,children:G},q))}),t.jsxs("div",{className:"rounded-card border border-line bg-surface p-5 text-center",children:[t.jsxs("p",{className:"text-xs text-ink-3",children:["金额（",d,"）"]}),t.jsx("input",{defaultValue:n?String(n.amount):"",onChange:q=>S(q.target.value),inputMode:"decimal",placeholder:"0.00",className:"mt-1 w-full bg-transparent text-center text-4xl font-bold outline-none placeholder:text-ink-3/40",autoFocus:!0})]}),t.jsx("p",{className:"mb-2 mt-4 px-1 text-xs font-medium text-ink-2",children:"这笔花得怎么样？（复盘用）"}),t.jsx("div",{className:"grid grid-cols-3 gap-2",children:BP.map(q=>t.jsxs("button",{onClick:()=>x(q.key),className:`flex flex-col items-center rounded-card border-2 py-3 transition-colors ${m===q.key?"bg-surface":"border-line bg-surface opacity-60"}`,style:m===q.key?{borderColor:q.color}:void 0,children:[t.jsx("span",{className:"text-xl font-bold",style:{color:q.color},children:q.label}),t.jsx("span",{className:"mt-0.5 text-[11px] text-ink-3",children:q.desc})]},q.key))}),t.jsxs("div",{className:"mb-2 mt-4 flex items-center justify-between px-1",children:[t.jsx("p",{className:"text-xs font-medium text-ink-2",children:"分类"}),t.jsx("button",{onClick:()=>w(!0),className:"text-xs font-medium text-accent",children:"管理"})]}),t.jsx("div",{className:"grid grid-cols-4 gap-2",children:N.map(q=>t.jsxs("button",{onClick:()=>g(q.id),className:`flex flex-col items-center rounded-card border py-2.5 text-xs ${R===q.id?"border-accent bg-accent-soft text-accent":"border-line bg-surface text-ink-2"}`,children:[t.jsx(F1,{id:q.icon,size:20}),q.name]},q.id))}),j?t.jsx(Ia,{kind:"ledger",onClose:()=>w(!1)}):null,t.jsxs("div",{className:"mt-4 space-y-3 rounded-card border border-line bg-surface p-4",children:[t.jsxs("label",{className:"flex items-center justify-between text-sm",children:[t.jsx("span",{className:"text-ink-2",children:"日期"}),t.jsx("input",{type:"date",value:k,onChange:q=>y(q.target.value),className:"h-9 rounded-btn border border-line bg-surface-2 px-2 text-sm outline-none"})]}),t.jsxs("label",{className:"block",children:[t.jsx("span",{className:"text-sm text-ink-2",children:"备注"}),t.jsx("input",{ref:z,defaultValue:n?.note??"",placeholder:"买了什么？（可选）",className:"mt-1.5 h-10 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})]})]}),t.jsx("button",{onClick:B,disabled:!W||M,className:"mt-4 mb-2 h-12 w-full rounded-btn bg-accent text-base font-semibold text-white active:opacity-90 disabled:opacity-40",children:M?"保存中…":n?"保存修改":"记下这笔"})]})}async function FP(e){const a=await Fe(e,ye.rules);if(!a.data||a.data.ok!==!0)throw new X("http",a.data?.error??"规则获取失败",a.status,a.data);return a.data.rules??null}async function WP(e,a){const n=await We(e,ye.rules,{rules:a});if(!n.data||n.data.ok!==!0)throw new X("http",n.data?.error??"规则保存失败",n.status,n.data)}async function S7(e){const a=await Fe(e,ye.profile);if(!a.data||a.data.ok!==!0)throw new X("http",a.data?.error??"资料获取失败",a.status,a.data);return a.data.profile??{}}async function UP(e,a){const n=await We(e,ye.profile,a);if(!n.data||n.data.ok!==!0)throw new X("http",n.data?.error??"资料保存失败",n.status,n.data)}const GP={valid:"已登录",offline:"离线模式（保留本地登录态）",expired:"登录已过期",unknown:"未登录"},YP=[{to:"/wall",Icon:Ht,label:"置物墙",desc:"在役物品一览 · 生成分享卡片"},{to:"/backup",Icon:Un,label:"备份与恢复",desc:"云备份 / 覆盖恢复"},{to:"/categories",Icon:Dq,label:"分类管理",desc:"自定义分类"},{to:"/rules",Icon:Fn,label:"识别规则",desc:"教 AI 识记账：关键词 → 分类"},{to:"/servers",Icon:x1,label:"服务器管理",desc:"多服务器添加与切换"},{to:"/settings",Icon:Vf,label:"设置",desc:"主题 · AI · 同步 · 货币"}];function ZP(){const e=ke(),a=_e(x=>x.session),n=_e(x=>x.sessionState),s=Ee(x=>x.offlineMode),c=ze(x=>x.servers.find(k=>k.id===x.currentId)?.alias),i=n==="valid"&&!!a?.token,d=ue(),r=t7(),[l,p]=u.useState("");u.useEffect(()=>{if(!i||!d)return;let x=!0;return S7(d).then(k=>{const y=typeof k.display_name=="string"?k.display_name.trim():"";x&&y&&p(y)}).catch(()=>{}),()=>{x=!1}},[i,d]);const g=async()=>{await fe.getState().confirm({title:"退出登录？",message:"本地数据不会被删除，退出后可重新登录同步。"})&&(await _e.getState().logout(),K("已退出登录"))},m=l||a?.user?.display_name||a?.user?.email||"未登录";return t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsxs("button",{onClick:()=>e("/account"),className:"flex w-full items-center gap-3 text-left",children:[t.jsx("div",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent",children:i?t.jsx(Aw,{size:26,strokeWidth:1.8,"aria-hidden":!0}):t.jsx(Tt,{size:26,strokeWidth:1.8,"aria-hidden":!0})}),t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsx("p",{className:"truncate text-base font-semibold",children:m}),t.jsxs("p",{className:"text-xs text-ink-3",children:[GP[n]??"未登录",c?` · ${c}`:" · 未连接服务器",s?" · 离线记账":""]})]}),t.jsx(bw,{size:18,strokeWidth:1.8,className:"shrink-0 text-ink-3","aria-hidden":!0})]}),a&&!a.user.verified?t.jsx("p",{className:"mt-2 rounded-btn bg-accent-soft px-3 py-2 text-xs text-accent",children:"邮箱还未验证，部分同步功能可能受限"}):null,i?null:t.jsxs("div",{className:"mt-3 flex gap-2",children:[t.jsx("button",{onClick:()=>e("/login"),className:"h-10 flex-1 rounded-btn bg-accent text-sm font-medium text-white",children:"登录"}),t.jsx("button",{onClick:()=>e("/login"),className:"h-10 flex-1 rounded-btn border border-line text-sm text-ink-2",children:"注册新账号"})]})]}),i?null:t.jsx("p",{className:"px-1 text-xs text-ink-3",children:"不登录也可以离线记账；登录后才能使用云备份与多端同步。"}),t.jsx("ul",{className:"overflow-hidden rounded-card border border-line bg-surface",children:YP.map((x,k)=>t.jsx("li",{children:t.jsxs("button",{onClick:()=>e(x.to),className:`flex w-full items-center gap-3 px-4 py-3.5 text-left active:bg-surface-2 ${k>0?"border-t border-line-2":""}`,children:[t.jsx("span",{className:"text-accent",children:t.jsx(x.Icon,{size:20,strokeWidth:1.8,"aria-hidden":!0})}),t.jsxs("span",{className:"min-w-0 flex-1",children:[t.jsx("span",{className:"block text-sm font-medium",children:x.label}),t.jsx("span",{className:"block text-[11px] text-ink-3",children:x.desc})]}),t.jsx("span",{className:"text-ink-3",children:"›"})]})},x.to))}),je()?null:t.jsxs("ul",{className:"overflow-hidden rounded-card border border-line bg-surface",children:[t.jsx("li",{children:t.jsxs("button",{onClick:()=>Qb(r==="mobile"?"pc":"mobile"),className:"flex w-full items-center gap-3 px-4 py-3.5 text-left active:bg-surface-2",children:[t.jsx("span",{className:"text-accent",children:r==="mobile"?t.jsx($a,{size:20,strokeWidth:1.8,"aria-hidden":!0}):t.jsx(kt,{size:20,strokeWidth:1.8,"aria-hidden":!0})}),t.jsxs("span",{className:"min-w-0 flex-1",children:[t.jsx("span",{className:"block text-sm font-medium",children:r==="mobile"?"电脑版网页":"手机版网页"}),t.jsx("span",{className:"block text-[11px] text-ink-3",children:r==="mobile"?"切换到桌面布局（侧边栏宽屏版）":"切换到移动布局（底部标签栏）"})]}),t.jsx("span",{className:"text-ink-3",children:"›"})]})}),t.jsx("li",{className:"border-t border-line-2",children:t.jsxs("button",{onClick:()=>e("/admin"),className:"flex w-full items-center gap-3 px-4 py-3.5 text-left active:bg-surface-2",children:[t.jsx("span",{className:"text-accent",children:t.jsx(Rt,{size:20,strokeWidth:1.8,"aria-hidden":!0})}),t.jsxs("span",{className:"min-w-0 flex-1",children:[t.jsx("span",{className:"block text-sm font-medium",children:"管理后台"}),t.jsx("span",{className:"block text-[11px] text-ink-3",children:"注册登录控制 · 用户管理 · 功能开关"})]}),t.jsx("span",{className:"text-ink-3",children:"›"})]})})]}),i?t.jsx("button",{onClick:()=>void g(),className:"w-full rounded-card border border-line bg-surface py-3 text-sm",style:{color:"var(--fou)"},children:"退出登录"}):null,t.jsxs("p",{className:"pb-2 text-center text-[11px] text-ink-3",children:["纳物 · ",je()?"App":"网页版"," v",Ye]})]})}function KP(e){return Math.max(0,Math.floor((Date.now()-new Date(e.buyDate).getTime())/864e5))}function JP({g:e,categoryName:a,symbol:n,onShare:s}){return t.jsxs("div",{className:"page-enter overflow-hidden rounded-card border border-line bg-surface",children:[t.jsx("div",{className:"flex aspect-square items-center justify-center bg-surface-2 p-4",children:t.jsx(ct,{icon:B1(e),size:72,className:"text-ink-2"})}),t.jsxs("div",{className:"p-3",children:[t.jsx("p",{className:"truncate text-sm font-semibold",children:e.name}),t.jsxs("p",{className:"tnum mt-0.5 text-xs text-ink-3",children:[n,Number(e.price??0).toLocaleString("zh-CN",{maximumFractionDigits:2})," · 陪伴 ",KP(e)," 天"]}),a?t.jsx("p",{className:"mt-1 text-[11px] text-accent",children:a}):null,t.jsxs("button",{onClick:()=>s(e),"aria-label":`分享 ${e.name}`,className:"mt-2 flex h-8 w-full items-center justify-center gap-1.5 rounded-btn border border-line text-xs text-ink-2 active:bg-surface-2",children:[t.jsx(g1,{size:13,strokeWidth:1.8,"aria-hidden":!0}),"分享卡片"]})]})]})}function XP(){const e=ke(),a=Z(m=>m.goods),n=Z(m=>m.categories),s=de(m=>m.settings.currency),c=s==="CNY"?"¥":s==="USD"?"$":"¥",[i,d]=u.useState(!1),r=u.useMemo(()=>a.filter(m=>m.status!=="retired"),[a]),l=m=>n.find(x=>x.id===m)?.name??null,p=async m=>{try{const x=await d7(m,l(m.categoryId)),k=await Sn(x,`纳物-${m.name}.png`);k==="saved"?K("已保存到系统相册「纳物」"):k==="downloaded"&&K("海报已下载")}catch(x){J(x instanceof Error?x.message:"生成海报失败")}},g=async()=>{if(!(i||r.length===0)){d(!0);try{const m=await TI(r.map(k=>({g:k,categoryName:l(k.categoryId)}))),x=await Sn(m,"纳物-置物墙.png");K(x==="shared"?"已分享":x==="saved"?"已保存到系统相册「纳物」":"长图已下载")}catch(m){J(m instanceof Error?m.message:"生成整墙海报失败")}finally{d(!1)}}};return t.jsxs("div",{className:"page-enter min-h-full text-ink",children:[t.jsxs("header",{className:"flex w-full items-end justify-between pb-1 pt-2",children:[t.jsxs("div",{className:"min-w-0",children:[t.jsx("h1",{className:"text-3xl font-bold leading-9",children:"置物墙"}),t.jsxs("p",{className:"truncate text-xs text-ink-3",children:[r.length," 件在役 · 总投入"," ",ne(r.reduce((m,x)=>m+Number(x.price??0),0),s)]})]}),t.jsxs("div",{className:"flex shrink-0 gap-2",children:[t.jsxs("button",{onClick:()=>void g(),disabled:i,className:"flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-4 text-xs text-ink-2 active:bg-surface-2 disabled:opacity-50",children:[t.jsx(g1,{size:13,strokeWidth:1.8,"aria-hidden":!0}),i?"生成中…":"分享全部"]}),t.jsx("button",{onClick:()=>e("/home"),className:"h-9 rounded-full border border-line bg-surface px-4 text-xs text-ink-2 active:bg-surface-2",children:"去添置"})]})]}),r.length===0?t.jsx("div",{className:"mt-3 rounded-card border border-dashed border-line bg-surface p-10 text-center text-sm text-ink-3",children:"墙上还空着，先去首页入库第一件物品"}):t.jsx("div",{className:"mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",children:r.map(m=>t.jsx(JP,{g:m,categoryName:l(m.categoryId),symbol:c,onShare:x=>void p(x)},m.id))})]})}const ec="FLYME1",QP=0,eT=1,tT=2e5,Vn=16,C7=12,tc=7+Vn+C7,ea=new TextEncoder;new TextDecoder;function aT(){const e=globalThis.crypto;if(!e||!e.subtle)throw new X("parse","当前环境不支持 Web Crypto，无法加解密备份",void 0,null);return e.subtle}async function nT(e,a,n){const s=await e.importKey("raw",ea.encode(a),"PBKDF2",!1,["deriveKey"]);return e.deriveKey({name:"PBKDF2",salt:n,iterations:tT,hash:"SHA-256"},s,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function oT(e,a=""){const n=ea.encode(JSON.stringify(e)),s=(a||"").trim();if(!s){const g=new Uint8Array(7+n.length);return g.set(ea.encode(ec),0),g[6]=QP,g.set(n,7),g}const c=aT(),i=crypto.getRandomValues(new Uint8Array(Vn)),d=crypto.getRandomValues(new Uint8Array(C7)),r=await nT(c,s,i);let l;try{l=new Uint8Array(await c.encrypt({name:"AES-GCM",iv:d},r,n))}catch(g){throw new X("parse","备份加密失败",void 0,g instanceof Error?g.message:g)}const p=new Uint8Array(tc+l.length);return p.set(ea.encode(ec),0),p[6]=eT,p.set(i,7),p.set(d,7+Vn),p.set(l,tc),p}function sT(e="纳物备份",a=new Date){return`${e}_${a.toISOString().slice(0,10)}.flyme`}async function cT(e=""){const a=await Eb();return A7(a,e,rT())}async function iT(e,a,n=""){const c=(await Vb(e,a)).payload;return A7(c,n,dT())}async function A7(e,a,n){const s=await oT(e,a);return await lT(n,s),{fileName:n,encrypted:(a||"").trim().length>0}}function rT(){return sT("纳物备份")}function dT(){const e=new Date,a=n=>String(n).padStart(2,"0");return`纳物云备份_${e.toISOString().slice(0,10)}_${a(e.getHours())}${a(e.getMinutes())}.flyme`}async function lT(e,a){if(je()){await fT(e,a);return}xT(e,a)}const hT="文件已保存到 Documents，分享面板被占用，可稍后在文件管理器中取用",pT=300,mT=1200;function q7(e){return new Promise(a=>setTimeout(a,e))}function uT(e){const a=e instanceof Error?e.message:typeof e=="string"?e:"";return/in progress/i.test(a)}async function yT(e,a={}){const n=a.retries??1,s=a.delayMs??mT,c=a.sleep??q7;for(let i=0;;i++)try{await e();return}catch(d){if(!uT(d))throw d;if(i>=n)throw new Error(hT);await c(s)}}let ac=Promise.resolve();function kT(e){const a=ac.then(e,e);return ac=a.then(()=>{},()=>{}),a}async function fT(e,a){const{Filesystem:n,Directory:s}=await Me(async()=>{const{Filesystem:l,Directory:p}=await import("./index-C6gDaibE.js");return{Filesystem:l,Directory:p}},__vite__mapDeps([7,1]),import.meta.url),c=gT(a);let i;const d=[s.Documents,s.External,s.Data];let r=null;for(const l of d)try{i=(await n.writeFile({path:e,data:c,directory:l,recursive:!0})).uri;break}catch(p){r=p}if(!i)throw new Error(`备份文件写入失败：${qe(r)}`);await q7(pT),await kT(()=>yT(async()=>{const{Share:l}=await Me(async()=>{const{Share:p}=await import("./index-gXycRqiZ.js");return{Share:p}},__vite__mapDeps([8,1]),import.meta.url);await l.share({title:e,url:i,dialogTitle:"保存或分享备份文件"})}))}function xT(e,a){const n=new Blob([a],{type:"application/octet-stream"}),s=URL.createObjectURL(n),c=document.createElement("a");c.href=s,c.download=e,document.body.appendChild(c),c.click(),c.remove(),setTimeout(()=>URL.revokeObjectURL(s),1e4)}function gT(e){let a="";for(let s=0;s<e.length;s+=32768)a+=String.fromCharCode(...e.subarray(s,s+32768));return btoa(a)}function bT(){const e=ke(),a=ze(N=>N.servers.length>0),n=_e(N=>N.sessionState),s=de(N=>N.settings.lastBackupAt),c=de(N=>N.settings.autoSync),[i,d]=u.useState([]),[r,l]=u.useState(!0),[p,g]=u.useState(""),[m,x]=u.useState(!1),k=u.useRef(!1),[y,M]=u.useState(null),f=a&&n==="valid",z=u.useCallback(async()=>{l(!0),g("");try{d(await LV())}catch(N){g(qe(N))}finally{l(!1)}},[]);u.useEffect(()=>{f?z():l(!1)},[f,z]);const V=async()=>{x(!0);try{await qV("manual"),K("已备份到云端"),await z()}catch(N){J(qe(N))}finally{x(!1)}},S=async N=>{if(await fe.getState().confirm({title:"恢复这份备份？",message:"恢复会用备份内容覆盖本机全部数据（12 个集合与设置），且无法撤销。",confirmText:"覆盖恢复",danger:!0})){x(!0);try{const P=await HV(N.id),W=P.exportedAt?Kt(P.exportedAt):"未知时间";let B=`已恢复 ${P.total} 条记录（备份时间 ${W}）`;P.restoredIcons>0&&(B+=`，随备份恢复图标缓存 ${P.restoredIcons} 个（离线秒显）`),P.subCount>0&&(B+="。注：从网页版备份恢复时，订阅的「停用」状态不会随备份保存，如有需要请重新停用。"),fe.getState().toast(B,"success",{durationMs:6e3}),await z()}catch(P){J(qe(P))}finally{x(!1)}}},j=async N=>{if(await fe.getState().confirm({title:"删除这份备份？",message:"云端删除后不可恢复。",danger:!0})){x(!0);try{await VV(N.id),K("已删除"),await z()}catch(P){J(qe(P))}finally{x(!1)}}},w=async N=>{const R=y;if(!(!R||k.current)){k.current=!0,x(!0),M(null);try{const P=R.kind==="local"?await cT(N):await iT(ue(),R.row.id,N);K(P.encrypted?"已导出加密备份文件":"已导出备份文件（未加密）")}catch(P){J(qe(P))}finally{k.current=!1,x(!1)}}};return t.jsxs(He,{title:"备份与恢复",subtitle:s?`上次备份：${Kt(s)}`:"从未备份",children:[a?n!=="valid"?t.jsxs("div",{className:"rounded-card border border-dashed border-line bg-surface p-6 text-center text-sm text-ink-3",children:["云备份需要先登录账号。",t.jsx("button",{onClick:()=>e("/login"),className:"mt-3 block w-full rounded-btn bg-accent py-2.5 text-sm font-medium text-white",children:"去登录"})]}):t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>void V(),disabled:m,className:"h-12 w-full rounded-btn bg-accent text-base font-semibold text-white disabled:opacity-40",children:m?"处理中…":"立即备份到云端"}),t.jsxs("p",{className:"mt-2 px-1 text-[11px] text-ink-3",children:["服务器只保留最近 3 份备份；开启「自动同步」后满足条件会静默备份（设置里可开）。",c?"（已开启）":""]})]}):t.jsxs("div",{className:"rounded-card border border-dashed border-line bg-surface p-6 text-center text-sm text-ink-3",children:["先在「服务器管理」里添加并连接服务器，才能使用云备份。",t.jsx("button",{onClick:()=>e("/servers"),className:"mt-3 block w-full rounded-btn bg-accent py-2.5 text-sm font-medium text-white",children:"去配置服务器"})]}),t.jsxs("div",{className:"mt-4 rounded-card border border-line bg-surface p-3.5",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("p",{className:"min-w-0 flex-1 text-sm font-medium",children:"导出备份文件"}),t.jsx(el,{className:"h-4 w-4 text-ink-3","aria-hidden":!0})]}),t.jsx("p",{className:"mt-0.5 text-[11px] text-ink-3",children:"把当前全部数据导出为 .flyme 文件（网页版可直接导入）；可选密码加密，密码不保存在应用里，忘记后无法恢复。"}),t.jsx("button",{onClick:()=>M({kind:"local"}),disabled:m,className:"mt-2.5 h-9 w-full rounded-btn bg-accent-soft text-xs font-medium text-accent disabled:opacity-40",children:"导出当前数据（可选密码）"})]}),t.jsx("h3",{className:"mb-2 mt-5 px-1 text-xs font-semibold text-ink-3",children:"云端备份（最新在前）"}),r?t.jsx("p",{className:"py-6 text-center text-sm text-ink-3",children:"加载中…"}):p?t.jsx("p",{className:"rounded-card border border-line bg-surface p-4 text-center text-sm",style:{color:"var(--fou)"},children:p}):i.length===0?t.jsx("div",{className:"rounded-card border border-dashed border-line bg-surface p-8 text-center text-sm text-ink-3",children:f?"还没有云备份，点上方按钮创建第一份":"登录后可见"}):t.jsx("ul",{className:"space-y-2",children:i.map(N=>t.jsxs("li",{className:"rounded-card border border-line bg-surface p-3.5",children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("p",{className:"min-w-0 flex-1 truncate text-sm font-medium",children:N.label||`备份 #${N.id}`}),t.jsxs("span",{className:"rounded-full bg-accent-soft px-2 py-0.5 text-[10px] text-accent",children:[N.item_count," 条"]})]}),t.jsxs("p",{className:"mt-0.5 text-[11px] text-ink-3",children:[Kt(N.created_at)||N.created_at,N.device?` · ${N.device}`:"",N.bytes?` · ${(N.bytes/1024).toFixed(1)} KB`:""]}),t.jsxs("div",{className:"mt-2.5 flex gap-2",children:[t.jsx("button",{onClick:()=>void S(N),disabled:m,className:"h-8 flex-1 rounded-btn bg-accent-soft text-xs font-medium text-accent disabled:opacity-40",children:"恢复"}),t.jsx("button",{onClick:()=>M({kind:"cloud",row:N}),disabled:m,className:"h-8 flex-1 rounded-btn bg-accent-soft text-xs font-medium text-accent disabled:opacity-40",children:"下载"}),t.jsx("button",{onClick:()=>void j(N),disabled:m,className:"h-8 flex-1 rounded-btn border border-line text-xs disabled:opacity-40",style:{color:"var(--fou)"},children:"删除"})]})]},N.id))}),y!==null?t.jsx(vT,{title:y.kind==="local"?"导出备份文件":"下载云端备份",hint:y.kind==="local"?"将当前全部数据导出为 .flyme 文件，可留空密码（不加密）。":`将云端备份「${y.row.label||`#${y.row.id}`}」导出为 .flyme 文件，可留空密码（不加密）。`,busy:m,onClose:()=>{m||M(null)},onConfirm:N=>void w(N)}):null]})}function vT(e){const a=u.useRef(null),n=()=>{e.busy||e.onConfirm(a.current?.value??"")};return $e.createPortal(t.jsx("div",{className:"fixed inset-0 z-40 flex items-end bg-black/40",onClick:e.onClose,children:t.jsxs("div",{className:"sheet-enter mx-auto w-full max-w-xl rounded-t-2xl bg-surface p-4",onClick:s=>s.stopPropagation(),style:{paddingBottom:"calc(env(safe-area-inset-bottom) + 2rem)"},children:[t.jsx("h2",{className:"mb-3 text-base font-semibold",children:e.title}),t.jsxs("div",{className:"space-y-3",children:[t.jsx(te,{label:"加密密码（可选）",hint:e.hint,children:t.jsx("input",{ref:a,type:"text",defaultValue:"",placeholder:"留空则不加密",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:!1,enterKeyHint:"done",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx("p",{className:"text-[11px] text-ink-3",children:"加密采用 AES-256-GCM + PBKDF2（与网页版导出格式一致）；密码不会保存在应用里，忘记后无法恢复。"})]}),t.jsxs("div",{className:"mt-4 flex gap-2",children:[t.jsx("button",{onClick:e.onClose,disabled:e.busy,className:"h-11 flex-1 rounded-btn border border-line text-sm disabled:opacity-40",children:"取消"}),t.jsx("button",{onClick:n,disabled:e.busy,className:"h-11 flex-1 rounded-btn bg-accent text-sm font-semibold text-white disabled:opacity-40",children:e.busy?"处理中…":"导出并保存"})]})]})}),document.body)}async function MT(e){return(await Fe(e,"/api/app/version")).data}async function wT(e){const a=`${e.replace(/\/+$/,"")}/api/app/download`;if(je()){const{Browser:n}=await Me(async()=>{const{Browser:s}=await import("./index-DCgQ0nVz.js");return{Browser:s}},__vite__mapDeps([9,1]),import.meta.url);await n.open({url:a})}else window.open(a,"_blank")}const _T=[{value:"system",label:"跟随系统"},{value:"light",label:"浅色"},{value:"dark",label:"深色"}];function sn({on:e,onClick:a,label:n}){return t.jsx("button",{onClick:a,role:"switch","aria-checked":e,"aria-label":n,className:`relative h-6 w-11 shrink-0 rounded-full border transition-colors ${e?"border-accent bg-accent":"border-line bg-surface-2"}`,children:t.jsx("span",{className:`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-white shadow transition-all ${e?"left-[26px]":"left-[2px]"}`})})}function jT(){const e=ke(),a=Ee(M=>M.themeMode),n=Ee(M=>M.setThemeMode),s=de(M=>M.settings),c=de(M=>M.update),[i,d]=u.useState(s.aiEndpoint??""),[r,l]=u.useState(s.aiKey??""),[p,g]=u.useState(s.aiModel??""),m=async()=>{await c({aiEndpoint:i.trim().replace(/\/+$/,""),aiKey:r.trim(),aiModel:p.trim()}),K("AI 配置已保存")},[x,k]=u.useState(!1),y=async()=>{if(x)return;const M=ue();if(!M){J("请先在「服务器管理」中配置服务器");return}k(!0);try{const f=await MT(M),z=(f.version??"").trim();!z||DI(z,Ye)<=0?K(`已是最新版本 v${Ye}`):await fe.getState().confirm({title:`发现新版本 v${z}`,message:f.notes?f.notes:`将跳转浏览器下载安装包（当前 v${Ye}），下载完成后点击通知安装。`})&&await wT(M.url)}catch(f){J(f instanceof Error&&f.message?f.message:"检查更新失败，请确认服务器可访问")}k(!1)};return t.jsxs(He,{title:"设置",children:[t.jsxs("section",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"外观"}),t.jsx("div",{className:"mt-3 flex gap-1",children:_T.map(M=>t.jsx("button",{onClick:()=>void n(M.value),className:`h-10 flex-1 rounded-btn border text-sm ${a===M.value?"border-accent bg-accent-soft font-medium text-accent":"border-line text-ink-2"}`,children:M.label},M.value))})]}),t.jsxs("section",{className:"mt-3 rounded-card border border-line bg-surface p-4",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"AI 助手（可选）"}),t.jsx("p",{className:"mt-1 text-[11px] text-ink-3",children:"填 OpenAI 兼容接口直连第三方；留空则只使用本地识别规则。Key 只保存在本机。"}),t.jsxs("div",{className:"mt-3 space-y-3",children:[t.jsx(te,{label:"接口地址 Endpoint",children:t.jsx("input",{value:i,onChange:M=>d(M.target.value),placeholder:"https://api.example.com/v1",autoCapitalize:"off",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"API Key",children:t.jsx("input",{value:r,onChange:M=>l(M.target.value),type:"password",placeholder:"sk-…",autoCapitalize:"off",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"模型",children:t.jsx("input",{value:p,onChange:M=>g(M.target.value),placeholder:"例如 gpt-4o-mini",autoCapitalize:"off",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx("button",{onClick:()=>void m(),className:"h-11 w-full rounded-btn bg-accent text-sm font-semibold text-white",children:"保存 AI 配置"})]})]}),t.jsxs("section",{className:"mt-3 rounded-card border border-line bg-surface p-4",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"同步"}),t.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[t.jsxs("div",{className:"min-w-0 pr-3",children:[t.jsx("p",{className:"text-sm",children:"自动备份"}),t.jsx("p",{className:"text-[11px] text-ink-3",children:"登录后满足条件（24 小时节流 + 变更达标）静默备份。服务器只保留最近 3 份。"})]}),t.jsx(sn,{on:s.autoSync,label:"自动备份",onClick:()=>void c({autoSync:!s.autoSync})})]}),t.jsxs("p",{className:"mt-2 text-[11px] text-ink-3",children:["上次备份：",s.lastBackupAt?Kt(s.lastBackupAt):"从未"]}),t.jsx("button",{onClick:()=>e("/backup"),className:"mt-3 h-10 w-full rounded-btn border border-line text-sm text-ink-2",children:"打开备份与恢复 ›"})]}),t.jsxs("section",{className:"mt-3 rounded-card border border-line bg-surface p-4",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"显示偏好"}),t.jsxs("div",{className:"mt-3 space-y-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"min-w-0 pr-3",children:[t.jsx("p",{className:"text-sm",children:"震动反馈"}),t.jsx("p",{className:"text-[11px] text-ink-3",children:"保存成功、切换 Tab、点选图标时轻微震动；失败时给出失败反馈。"})]}),t.jsx(sn,{on:s.vibrate!==!1,label:"震动反馈",onClick:()=>{const M=s.vibrate===!1;c({vibrate:M}),M&&Pe("select")}})]}),t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{className:"min-w-0 pr-3",children:[t.jsx("p",{className:"text-sm",children:"开屏动画"}),t.jsx("p",{className:"text-[11px] text-ink-3",children:"打开应用时播放品牌开屏页（网页端每次浏览会话只播一次）。"})]}),t.jsx(sn,{on:s.splash!==!1,label:"开屏动画",onClick:()=>void c({splash:s.splash===!1})})]})]})]}),t.jsxs("section",{className:"mt-3 rounded-card border border-line bg-surface p-4",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"货币"}),"        ",t.jsx("select",{value:s.currency,onChange:M=>void c({currency:M.target.value}),className:"mt-3 h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent",children:Yb.map(M=>t.jsxs("option",{value:M.code,children:[M.symbol," ",M.name,"（",M.code,"）"]},M.code))})]}),je()?t.jsxs("section",{className:"mt-3 rounded-card border border-line bg-surface p-4",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"应用更新"}),t.jsxs("p",{className:"mt-1 text-[11px] text-ink-3",children:["当前版本 v",Ye,"。安装包由你的服务器提供，更新前请确保可以访问服务器。"]}),t.jsx("button",{onClick:()=>void y(),disabled:x,className:"mt-3 h-10 w-full rounded-btn bg-accent-soft text-sm font-medium text-accent disabled:opacity-40",children:x?"正在检查…":"检查更新"})]}):null,t.jsxs("p",{className:"mt-5 pb-2 text-center text-[11px] text-ink-3",children:["纳物 · ",je()?"App":"网页版"," v",Ye]})]})}const zT="smartphone",$T={goods:"物品分类",sub:"订阅分类",ledger:"记账分类"};function DT({editing:e,initialKind:a,onClose:n}){const s=Z(y=>y.categories),c=Z(y=>y.addCategory),i=Z(y=>y.updateCategory),d=!!e,[r,l]=u.useState(e?.kind??a),[p,g]=u.useState(e?.name??""),[m,x]=u.useState(e&&Be(e.icon)!==Be(null)?e.icon:zT),k=async()=>{const y=p.trim();if(!y){J("请输入分类名称");return}if(d&&e)await i(e.id,{name:y,icon:m}),K("分类已保存");else{const f=s.filter(z=>z.kind===r).reduce((z,V)=>Math.max(z,V.order),-1);await c({name:y,icon:m,kind:r,order:f+1}),K("分类已新增")}n()};return $e.createPortal(t.jsx("div",{className:"fixed inset-0 z-40 flex items-end bg-black/40",onClick:n,children:t.jsxs("div",{className:"sheet-enter mx-auto max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-surface p-4",onClick:y=>y.stopPropagation(),style:{paddingBottom:"calc(env(safe-area-inset-bottom) + 2rem)"},children:[t.jsx("h2",{className:"mb-3 text-base font-semibold",children:d?"编辑分类":"新增分类"}),t.jsxs("div",{className:"space-y-3",children:[d?null:t.jsx(te,{label:"类型",children:t.jsx("div",{className:"flex gap-1",children:["goods","sub","ledger"].map(y=>t.jsx("button",{type:"button",onClick:()=>l(y),className:`h-10 flex-1 rounded-btn border text-sm ${r===y?"border-accent bg-accent-soft font-medium text-accent":"border-line text-ink-2"}`,children:$T[y]},y))})}),t.jsx(te,{label:"名称",children:t.jsx("input",{value:p,onChange:y=>g(y.target.value),placeholder:"例如 数码",enterKeyHint:"done",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"图标",children:t.jsx("div",{className:"max-h-56 space-y-2 overflow-y-auto rounded-btn border border-line bg-surface-2 p-2",children:S1.map(y=>t.jsxs("div",{children:[t.jsx("p",{className:"px-0.5 text-[10px] text-ink-3",children:y.group}),t.jsx("div",{className:"mt-1 grid grid-cols-8 gap-1.5",children:y.icons.map(M=>{const f=M.Icon;return t.jsx("button",{type:"button",title:M.label,"aria-label":M.label,onClick:()=>x(M.id),className:`flex h-9 items-center justify-center rounded-btn border ${m===M.id?"border-accent bg-accent-soft text-accent":"border-transparent bg-surface text-ink-2"}`,children:t.jsx(f,{size:18,strokeWidth:1.8,"aria-hidden":!0})},M.id)})})]},y.group))})}),t.jsx("button",{onClick:()=>void k(),className:"h-11 w-full rounded-btn bg-accent text-sm font-semibold text-white",children:d?"保存":"新增"})]})]})}),document.body)}function cn({title:e,cats:a,unit:n,countOf:s,onAdd:c,onEdit:i,onMove:d,onDelete:r}){return t.jsxs("section",{children:[t.jsxs("div",{className:"mb-1.5 flex items-center justify-between px-1",children:[t.jsx("h2",{className:"text-xs font-semibold text-ink-2",children:e}),t.jsx("button",{onClick:c,className:"text-xs font-medium text-accent",children:"＋ 新增"})]}),t.jsx("ul",{className:"divide-y divide-line-2 overflow-hidden rounded-card border border-line bg-surface",children:a.length===0?t.jsx("li",{className:"px-3.5 py-6 text-center text-xs text-ink-3",children:"还没有分类，点右上角新增一个"}):a.map((l,p)=>t.jsxs("li",{className:"flex items-center gap-2 px-3.5 py-2.5",children:[t.jsx("span",{className:"flex h-9 w-9 shrink-0 items-center justify-center rounded-btn bg-surface-2 text-accent",children:(()=>{const g=Be(l.icon);return t.jsx(g,{size:18,strokeWidth:1.8,"aria-hidden":!0})})()}),t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsx("p",{className:"truncate text-sm",children:l.name}),t.jsxs("p",{className:"text-[11px] text-ink-3",children:[s(l)," ",n]})]}),t.jsx("button",{onClick:()=>i(l),className:"h-8 shrink-0 rounded-btn bg-accent-soft px-2.5 text-xs font-medium text-accent",children:"编辑"}),t.jsx("button",{onClick:()=>d(l,-1),disabled:p===0,"aria-label":`上移 ${l.name}`,className:"h-8 w-8 shrink-0 rounded-btn text-ink-2 active:bg-surface-2 disabled:opacity-30",children:"↑"}),t.jsx("button",{onClick:()=>d(l,1),disabled:p===a.length-1,"aria-label":`下移 ${l.name}`,className:"h-8 w-8 shrink-0 rounded-btn text-ink-2 active:bg-surface-2 disabled:opacity-30",children:"↓"}),t.jsx("button",{onClick:()=>r(l),"aria-label":`删除 ${l.name}`,className:"h-8 w-8 shrink-0 rounded-btn text-sm active:bg-surface-2",style:{color:"var(--fou)"},children:"✕"})]},l.id))})]})}function NT(){const e=Z(f=>f.categories),a=Z(f=>f.goods),n=Z(f=>f.subscriptions),s=Z(f=>f.valueRecords),c=Z(f=>f.updateCategory),i=Z(f=>f.removeCategory),[d,r]=u.useState(null),l=u.useMemo(()=>e.filter(f=>f.kind==="goods").sort((f,z)=>f.order-z.order),[e]),p=u.useMemo(()=>e.filter(f=>f.kind==="sub").sort((f,z)=>f.order-z.order),[e]),g=u.useMemo(()=>e.filter(f=>f.kind==="ledger").sort((f,z)=>f.order-z.order),[e]),m=f=>a.filter(z=>z.categoryId===f.id).length,x=f=>n.filter(z=>z.categoryId===f.id).length,k=f=>s.filter(z=>z.categoryId===f.id).length,y=async(f,z,V)=>{const S=e.filter(P=>P.kind===f).sort((P,W)=>P.order-W.order),j=S.findIndex(P=>P.id===z),w=j+V;if(j===-1||w<0||w>=S.length)return;const N=S[j],R=S[w];await c(N.id,{order:R.order}),await c(R.id,{order:N.order})},M=async f=>{const z=m(f),V=x(f),S=k(f),j=[];z>0&&j.push(`${z} 件物品`),V>0&&j.push(`${V} 个订阅`),S>0&&j.push(`${S} 笔流水`);const w=j.length>0?`该分类正被 ${j.join("、")}使用，删除后它们将不再归属任何分类（界面上显示为未分类）`:"该分类当前没有被物品、订阅或流水使用";await fe.getState().confirm({title:`删除分类「${f.name}」？`,message:`${w}。物品/订阅数据本身不会被删除。`})&&(await i(f.id),K("分类已删除"))};return t.jsxs(He,{title:"分类管理",subtitle:"自定义物品、订阅与生活流的分组和排序",right:t.jsx("button",{onClick:()=>r({kind:"goods"}),className:"mr-1 h-9 rounded-full bg-accent-soft px-3.5 text-xs font-medium text-accent",children:"＋ 新增"}),children:[t.jsxs("div",{className:"space-y-4",children:[t.jsx(cn,{title:"物品分类",cats:l,unit:"件物品",countOf:m,onAdd:()=>r({kind:"goods"}),onEdit:f=>r({kind:"goods",editing:f}),onMove:(f,z)=>void y("goods",f.id,z),onDelete:f=>void M(f)}),t.jsx(cn,{title:"订阅分类",cats:p,unit:"个订阅",countOf:x,onAdd:()=>r({kind:"sub"}),onEdit:f=>r({kind:"sub",editing:f}),onMove:(f,z)=>void y("sub",f.id,z),onDelete:f=>void M(f)}),t.jsx(cn,{title:"记账分类（生活流）",cats:g,unit:"笔流水",countOf:k,onAdd:()=>r({kind:"ledger"}),onEdit:f=>r({kind:"ledger",editing:f}),onMove:(f,z)=>void y("ledger",f.id,z),onDelete:f=>void M(f)})]}),d?t.jsx(DT,{editing:d.editing,initialKind:d.kind,onClose:()=>r(null)}):null]})}const ST=[["gui","归"],["xu","需"],["fou","否"]],nc={gui:"归",xu:"需",fou:"否"};function CT(e){return Array.isArray(e)?e.filter(a=>!!a&&typeof a=="object").map(a=>({keyword:typeof a.keyword=="string"?a.keyword.trim():"",category:typeof a.category=="string"?a.category.trim():"",judgement:Cn(a.judgement,"xu")})).filter(a=>a.keyword&&a.category):[]}function AT({editing:e,ledgerCats:a,onClose:n,onSubmit:s}){const c=!!e,i=u.useRef(null),[d,r]=u.useState(e?.category??a[0]?.name??"其他"),[l,p]=u.useState(e?.judgement??"xu"),g=()=>{const m=(i.current?.value??"").trim();if(!m){J("请输入关键词"),i.current?.focus();return}if(!d){J("请选择归类分类");return}s({keyword:m,category:d,judgement:l}),n()};return $e.createPortal(t.jsx("div",{className:"fixed inset-0 z-40 flex items-end bg-black/40",onClick:n,children:t.jsxs("div",{className:"sheet-enter mx-auto max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-t-2xl bg-surface p-4",onClick:m=>m.stopPropagation(),style:{paddingBottom:"calc(env(safe-area-inset-bottom) + 2rem)"},children:[t.jsx("h2",{className:"mb-3 text-base font-semibold",children:c?"编辑规则":"新增规则"}),t.jsxs("div",{className:"space-y-3",children:[t.jsx(te,{label:"关键词",hint:"AI 记账文本包含该词时按下方规则归类",children:t.jsx("input",{ref:i,defaultValue:e?.keyword??"",placeholder:"例如 星巴克",enterKeyHint:"done",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})}),t.jsx(te,{label:"归类为",children:t.jsx("select",{value:d,onChange:m=>r(m.target.value),className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent",children:a.map(m=>t.jsxs("option",{value:m.name,children:[m.icon," ",m.name]},m.id))})}),t.jsx(te,{label:"归 / 需 / 否",children:t.jsx("div",{className:"flex gap-1",children:ST.map(([m,x])=>t.jsx("button",{type:"button",onClick:()=>p(m),className:`h-10 flex-1 rounded-btn border text-sm ${l===m?"border-accent bg-accent-soft font-medium text-accent":"border-line text-ink-2"}`,children:x},m))})}),t.jsx("button",{onClick:g,className:"h-11 w-full rounded-btn bg-accent text-sm font-semibold text-white",children:c?"保存规则":"添加规则"})]})]})}),document.body)}function qT(){const e=_e(j=>j.sessionState),a=_e(j=>j.session),n=Z(j=>j.categories),[s,c]=u.useState([]),[i,d]=u.useState(!1),[r,l]=u.useState(!1),[p,g]=u.useState(!1),[m,x]=u.useState(null),k=e==="valid"&&!!a?.token,y=ue(),M=k&&!!y,f=u.useMemo(()=>n.filter(j=>j.kind==="ledger").sort((j,w)=>j.order-w.order),[n]);u.useEffect(()=>{if(!M)return;let j=!0;return d(!0),FP(y).then(w=>{j&&c(CT(w))}).catch(w=>{j&&J(w.message||"规则获取失败")}).finally(()=>{j&&d(!1)}),()=>{j=!1}},[M,y?.id]);const z=(j,w)=>{c(N=>{if(typeof w=="number"){const R=N.slice();return R[w]=j,R}return[...N,j]}),g(!0)},V=async(j,w)=>{await fe.getState().confirm({title:"删除这条规则？",message:`「${w.keyword} → ${w.category} · ${nc[w.judgement]}」删除后需点「保存到服务器」才生效。`})&&(c(R=>R.filter((P,W)=>W!==j)),g(!0))},S=async()=>{if(!(r||!M)){l(!0);try{await WP(y,s),K("识别规则已保存，云同步生效"),g(!1)}catch(j){J(j.message||"规则保存失败")}l(!1)}};return t.jsxs(He,{title:"识别规则",subtitle:M?"命中关键词的记录自动归类":void 0,right:t.jsx("button",{onClick:()=>x({}),disabled:!M,className:"mr-1 h-9 rounded-full bg-accent-soft px-3.5 text-xs font-medium text-accent disabled:opacity-40",children:"＋ 新增"}),children:[t.jsx("p",{className:"mb-3 px-1 text-xs leading-5 text-ink-3",children:"教 AI 识记账：命中关键词的记录自动归类（如：星巴克 → 餐饮 · 需）。保存后云同步生效。"}),M?t.jsxs(t.Fragment,{children:[t.jsx("ul",{className:"divide-y divide-line-2 overflow-hidden rounded-card border border-line bg-surface",children:i?t.jsx("li",{className:"px-3.5 py-8 text-center text-sm text-ink-3",children:"正在加载…"}):s.length===0?t.jsx("li",{className:"px-3.5 py-8 text-center text-sm text-ink-3",children:"还没有规则，点右上角「＋ 新增」教 AI 一条"}):s.map((j,w)=>t.jsxs("li",{className:"flex items-center gap-3 px-3.5 py-3",children:[t.jsxs("span",{className:"min-w-0 flex-1 truncate text-sm",children:[t.jsx("span",{className:"font-medium",children:j.keyword}),t.jsxs("span",{className:"text-ink-3",children:[" → ",j.category]}),t.jsx("span",{className:"ml-1.5 rounded-btn bg-accent-soft px-1.5 py-0.5 text-[11px] font-medium text-accent",children:nc[j.judgement]})]}),t.jsx("button",{onClick:()=>x({editing:j,index:w}),className:"h-8 shrink-0 rounded-btn bg-accent-soft px-2.5 text-xs font-medium text-accent",children:"编辑"}),t.jsx("button",{onClick:()=>void V(w,j),"aria-label":`删除规则 ${j.keyword}`,className:"h-8 w-8 shrink-0 rounded-btn text-sm active:bg-surface-2",style:{color:"var(--fou)"},children:"✕"})]},`${j.keyword}-${w}`))}),t.jsx("button",{onClick:()=>void S(),disabled:r||i,className:"mt-4 h-12 w-full rounded-btn bg-accent text-base font-semibold text-white active:opacity-90 disabled:opacity-40",children:r?"保存中…":p?"保存到服务器 *":"保存到服务器"}),p?t.jsx("p",{className:"mt-2 text-center text-[11px] text-ink-3",children:"有未保存的修改（标 * 号）"}):null]}):t.jsxs("div",{className:"rounded-card border border-dashed border-line bg-surface p-6 text-center",children:[t.jsx("p",{className:"text-accent",children:t.jsx(n4,{size:24,strokeWidth:1.8,"aria-hidden":!0})}),t.jsx("p",{className:"mt-2 text-sm text-ink-2",children:"识别规则保存在服务器，需登录后使用"})]}),m?t.jsx(AT,{editing:m.editing,ledgerCats:f,onClose:()=>x(null),onSubmit:j=>z(j,m.index)}):null]})}function LT(){const e=ke();return t.jsxs("div",{className:"rounded-card border border-dashed border-line bg-surface p-6 text-center",children:[t.jsx("p",{className:"flex justify-center text-accent",children:t.jsx(cg,{size:24,strokeWidth:1.8,"aria-hidden":!0})}),t.jsx("p",{className:"mt-2 text-sm text-ink-2",children:"账号资料保存在服务器，需登录后使用"}),t.jsx("button",{onClick:()=>e("/login"),className:"mt-3 h-10 rounded-full bg-accent-soft px-4 text-xs font-medium text-accent",children:"去登录"})]})}function HT(){const e=ke(),a=_e(N=>N.sessionState),n=_e(N=>N.session),s=a==="valid"&&!!n?.token,c=ue(),[i,d]=u.useState(null),[r,l]=u.useState(!1),[p,g]=u.useState(!1),[m,x]=u.useState(!1),k=u.useRef(null),y=u.useRef(null),M=u.useRef(null),f=u.useRef(null),z=async()=>{if(!(!s||!c)){l(!0);try{const N=await S7(c);d({display_name:typeof N.display_name=="string"?N.display_name:"",avatar_url:typeof N.avatar_url=="string"?N.avatar_url:"",plan:typeof N.plan=="string"?N.plan:"free"})}catch{d({display_name:n?.user?.display_name??"",avatar_url:"",plan:"free"})}l(!1)}};u.useEffect(()=>{z()},[s,c?.id]);const V=n?.user?.email??"",S=async()=>{if(p||!c)return;const N=(k.current?.value??"").trim();if(!N){J("昵称不能为空"),k.current?.focus();return}g(!0);try{await UP(c,{display_name:N,avatar_url:i?.avatar_url??"",plan:i?.plan??"free"}),K("昵称已保存"),d(R=>R?{...R,display_name:N}:{display_name:N,avatar_url:"",plan:"free"})}catch(R){J(R.message||"保存失败，请稍后重试")}g(!1)},j=async()=>{if(m||!c)return;const N=y.current?.value??"",R=M.current?.value??"",P=f.current?.value??"";if(!N){J("请输入当前密码"),y.current?.focus();return}if(R.length<6){J("新密码至少 6 位"),M.current?.focus();return}if(R!==P){J("两次输入的新密码不一致"),f.current?.focus();return}x(!0);try{await Lb(c,N,R),K("密码已修改，下次登录请使用新密码"),y.current&&(y.current.value=""),M.current&&(M.current.value=""),f.current&&(f.current.value="")}catch(W){J(W.message||"修改密码失败，请稍后重试")}x(!1)},w="h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent";return t.jsx(He,{title:"账号编辑",onBack:()=>e("/me"),children:s?t.jsxs(t.Fragment,{children:[t.jsxs("section",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"账号"}),t.jsxs("p",{className:"mt-1 text-xs text-ink-3",children:[V||"未知邮箱"," · ",r?"加载中…":`套餐：${i?.plan??"free"}`]})]}),t.jsxs("section",{className:"mt-3 rounded-card border border-line bg-surface p-4",children:[t.jsx("h2",{className:"text-sm font-semibold",children:"昵称"}),t.jsxs("div",{className:"mt-3 space-y-3",children:[t.jsx(te,{label:"显示名",children:t.jsx("input",{ref:k,defaultValue:i?.display_name??n?.user?.display_name??"",placeholder:"怎么称呼你",enterKeyHint:"done",autoCapitalize:"off",autoCorrect:"off",spellCheck:!1,className:w})}),t.jsx("button",{onClick:()=>void S(),disabled:p||r,className:"h-11 w-full rounded-btn bg-accent text-sm font-semibold text-white disabled:opacity-40",children:p?"保存中…":"保存昵称"})]})]}),t.jsxs("section",{className:"mt-3 rounded-card border border-line bg-surface p-4",children:[t.jsxs("h2",{className:"flex items-center gap-1.5 text-sm font-semibold",children:[t.jsx(a1,{size:16,strokeWidth:1.8,"aria-hidden":!0}),"修改密码"]}),t.jsxs("div",{className:"mt-3 space-y-3",children:[t.jsx(te,{label:"当前密码",children:t.jsx("input",{ref:y,type:"password",placeholder:"当前密码",className:w})}),t.jsx(te,{label:"新密码",children:t.jsx("input",{ref:M,type:"password",placeholder:"至少 6 位",className:w})}),t.jsx(te,{label:"确认新密码",children:t.jsx("input",{ref:f,type:"password",placeholder:"再输一次",className:w})}),t.jsx("button",{onClick:()=>void j(),disabled:m,className:"h-11 w-full rounded-btn bg-accent text-sm font-semibold text-white disabled:opacity-40",children:m?"提交中…":"修改密码"})]})]})]}):t.jsx(LT,{})})}const ta="gf.adminToken",VT=[{key:"siteClosed",label:"关闭站点",desc:"维护模式：除管理后台外全部不可用"},{key:"allowRegister",label:"允许注册",desc:"关闭后新用户无法注册"},{key:"allowLogin",label:"允许登录",desc:"关闭后用户无法登录（已登录不受影响）"},{key:"requireVerified",label:"邮箱验证后才能登录",desc:"要求用户先完成邮箱验证"},{key:"featAi",label:"AI 记一笔",desc:"自然语言记账入口"},{key:"featOcr",label:"识图添加",desc:"AI 记一笔内拍照/截图识别记账"},{key:"featShare",label:"分享生图",desc:"物品详情/置物墙生成分享卡片"},{key:"featWall",label:"置物墙",desc:"在役物品墙展示页（我的 → 置物墙）"},{key:"featSync",label:"云同步",desc:"多端数据同步"}];function oc(e){return{"X-Admin-Token":e}}function IT(){const e=ke(),[a,n]=u.useState(()=>{try{return localStorage.getItem(ta)??""}catch{return""}}),[s,c]=u.useState("users"),[i,d]=u.useState([]),[r,l]=u.useState({}),[p,g]=u.useState([]),[m,x]=u.useState(!1),k=()=>ue(),y=u.useCallback(async(z,V)=>{const S=await gt(k(),{method:"POST",path:z,body:V??{},auth:!1,retry:0,ignoreUnauth:!0,headers:a?oc(a):void 0});if(!S.data||S.data.ok!==!0)throw new X("http",S.data?.error??"请求失败",S.status,S.data);return S.data},[k,a]),M=u.useCallback(async z=>{const V=await gt(k(),{method:"GET",path:z,auth:!1,ignoreUnauth:!0,headers:a?oc(a):void 0});if(!V.data||V.data.ok!==!0)throw new X("http",V.data?.error??"请求失败",V.status,V.data);return V.data},[k,a]),f=u.useCallback(async()=>{if(a){x(!0);try{const[z,V,S]=await Promise.all([M("/api/admin/users"),M("/api/admin/settings"),M("/api/admin/me")]);d(z.rows??[]),l(V.settings??{}),g(S.admins??[])}catch(z){if(z instanceof X&&z.status===401){try{localStorage.removeItem(ta)}catch{}n("")}else J(z instanceof Error?z.message:"加载失败")}finally{x(!1)}}},[M,a]);return u.useEffect(()=>{f()},[a]),a?t.jsxs("div",{className:"mx-auto w-full max-w-4xl px-4 pb-16 pt-6 sm:px-6",children:[t.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[t.jsx("button",{onClick:()=>e("/me"),"aria-label":"返回",className:"flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-2 active:bg-surface-2",children:t.jsx(iv,{size:18,strokeWidth:1.8,"aria-hidden":!0})}),t.jsx("span",{className:"text-accent",children:t.jsx(Rt,{size:22,strokeWidth:1.8,"aria-hidden":!0})}),t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsx("h1",{className:"t-h2 leading-tight",children:"管理后台"}),t.jsx("p",{className:"text-xs text-ink-3",children:"注册与登录控制 · 用户管理 · 功能开关 · 管理员账号"})]}),t.jsx("button",{onClick:()=>void f(),"aria-label":"刷新",className:"flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink-2 active:bg-surface-2",children:t.jsx(N3,{size:16,strokeWidth:1.8,className:m?"animate-spin":"","aria-hidden":!0})})]}),t.jsx("div",{className:"mb-4 flex gap-1 overflow-x-auto rounded-card border border-line bg-surface p-1",children:[["users","用户管理",$L],["switches","站点开关",w1],["mail","邮件服务",l4],["db","数据库",S0],["security","账号安全",a1]].map(([z,V,S])=>t.jsxs("button",{onClick:()=>c(z),className:`flex flex-1 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-btn px-3 py-2 text-sm transition-colors ${s===z?"bg-accent-soft font-semibold text-accent":"text-ink-3"}`,children:[t.jsx(S,{size:16,strokeWidth:1.8,"aria-hidden":!0}),V]},z))}),s==="users"?t.jsx(PT,{users:i,adminPost:y,reload:()=>void f()}):null,s==="switches"?t.jsx(TT,{settings:r,adminPost:y,reload:()=>void f()}):null,s==="mail"?t.jsx(OT,{adminGet:M,adminPost:y}):null,s==="db"?t.jsx(BT,{adminGet:M,adminPost:y}):null,s==="security"?t.jsx(RT,{admins:p,adminPost:y,onLogout:()=>n("")}):null]}):t.jsx(ET,{onLogin:z=>{try{localStorage.setItem(ta,z)}catch{}n(z)},serverNow:k})}function ET({onLogin:e,serverNow:a}){const[n,s]=u.useState(!1),[c,i]=u.useState(""),d=async r=>{r.preventDefault();const l=new FormData(r.currentTarget),p=String(l.get("username")??"").trim(),g=String(l.get("password")??"");if(!(!p||!g)){s(!0),i("");try{const m=await gt(a(),{method:"POST",path:"/api/admin/login",body:{username:p,password:g},auth:!1,retry:0,ignoreUnauth:!0});m.data?.ok===!0&&m.data.token?e(m.data.token):i(m.data?.error??"登录失败")}catch(m){i(m instanceof Error?m.message:"网络错误，请稍后再试")}finally{s(!1)}}};return t.jsx("div",{className:"flex min-h-screen items-center justify-center bg-paper px-4",children:t.jsxs("div",{className:"w-full max-w-sm rounded-card border border-line bg-surface p-6 shadow-lg",children:[t.jsxs("div",{className:"mb-5 flex items-center gap-3",children:[t.jsx("span",{className:"flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent",children:t.jsx(Da,{size:24,strokeWidth:1.8,"aria-hidden":!0})}),t.jsxs("div",{children:[t.jsx("h1",{className:"text-lg font-semibold leading-tight",children:"管理后台"}),t.jsx("p",{className:"text-xs text-ink-3",children:"仅限管理员，普通用户无需访问"})]})]}),t.jsxs("form",{onSubmit:r=>void d(r),className:"space-y-3",children:[t.jsx("input",{name:"username",placeholder:"管理员用户名",autoComplete:"username",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"}),t.jsx("input",{name:"password",type:"password",placeholder:"密码",autoComplete:"current-password",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"}),c?t.jsx("p",{className:"text-xs",style:{color:"var(--danger)"},children:c}):null,t.jsx("button",{type:"submit",disabled:n,className:"h-11 w-full rounded-btn bg-accent text-sm font-medium text-white disabled:opacity-60",children:n?"登录中…":"进入后台"})]})]})})}function PT({users:e,adminPost:a,reload:n}){const s=async c=>{try{await c(),n()}catch(i){J(i instanceof Error?i.message:"操作失败")}};return t.jsxs("div",{className:"space-y-2",children:[e.length===0?t.jsx("p",{className:"px-1 py-8 text-center text-sm text-ink-3",children:"暂无用户"}):null,e.map(c=>t.jsxs("div",{className:"rounded-card border border-line bg-surface p-3.5",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsx("p",{className:"truncate text-sm font-medium",children:c.display_name||"（未设昵称）"}),t.jsx("p",{className:"truncate text-xs text-ink-3",children:c.email})]}),t.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px]",style:{background:c.disabled?"var(--danger-soft)":"var(--accent-soft)",color:c.disabled?"var(--danger)":"var(--accent)"},children:c.disabled?"已停用":"正常"}),t.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px]",style:{background:c.verified?"var(--accent-soft)":"var(--warn-soft)",color:c.verified?"var(--accent)":"var(--warn)"},children:c.verified?"已验证":"未验证"})]}),t.jsxs("p",{className:"mt-1 text-[11px] text-ink-3",children:["注册 ",c.created_at?.slice(0,10)??"—"," · 最近登录 ",c.last_login_at?c.last_login_at.slice(0,16).replace("T"," "):"从未"]}),t.jsxs("div",{className:"mt-2.5 flex flex-wrap gap-2",children:[t.jsx(Gt,{onClick:()=>void s(async()=>{await a("/api/admin/users/verify",{email:c.email,verified:!c.verified}),K(c.verified?"已取消验证":"已通过验证")}),children:c.verified?"取消验证":"通过验证"}),t.jsx(Gt,{onClick:()=>void s(async()=>{await a("/api/admin/users/disable",{email:c.email,disabled:!c.disabled}),K(c.disabled?"已启用":"已停用")}),children:c.disabled?"启用":"停用"}),t.jsx(Gt,{onClick:()=>{const i=window.prompt(`为 ${c.email} 设置新密码（至少 6 位）：`);i&&s(async()=>{await a("/api/admin/users/password",{email:c.email,newPassword:i}),K("密码已重置")})},children:"重置密码"}),t.jsx(Gt,{danger:!0,onClick:()=>{window.confirm(`确定删除用户 ${c.email}？该用户的云备份与资料将一并清除，且不可恢复。`)&&s(async()=>{await a("/api/admin/users/delete",{email:c.email}),K("已删除")})},children:"删除"})]})]},c.email))]})}function Gt({children:e,onClick:a,danger:n}){return t.jsx("button",{onClick:a,className:"rounded-full border border-line px-3 py-1 text-xs text-ink-2 transition-colors active:bg-surface-2",style:n?{color:"var(--danger)"}:void 0,children:e})}function TT({settings:e,adminPost:a,reload:n}){const[s,c]=u.useState(""),[i,d]=u.useState(""),[r,l]=u.useState(null),[p,g]=u.useState(null),m=u.useRef(null);u.useEffect(()=>{d(e.notice??""),l(e.siteName??""),g(e.siteIcon??"")},[e]);const x=async y=>{c(y);try{await a("/api/admin/settings",{key:y,value:e[y]==="true"?"false":"true"}),n()}catch(M){J(M instanceof Error?M.message:"保存失败")}finally{c("")}},k=async(y,M)=>{c(y);try{await a("/api/admin/settings",{key:y,value:M}),K("已保存"),n()}catch(f){J(f instanceof Error?f.message:"保存失败")}finally{c("")}};return t.jsxs("div",{className:"space-y-2",children:[VT.map(y=>{const M=e[y.key]==="true";return t.jsxs("div",{className:"flex items-center gap-3 rounded-card border border-line bg-surface px-4 py-3",children:[t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsx("p",{className:"flex items-center gap-1.5 text-sm font-medium",children:y.label}),t.jsx("p",{className:"text-[11px] text-ink-3",children:y.desc})]}),t.jsx("button",{onClick:()=>void x(y.key),disabled:s===y.key,"aria-label":y.label,className:M?"text-accent":"text-ink-3",children:M?t.jsx(ix,{size:26,strokeWidth:1.6,"aria-hidden":!0}):t.jsx(w1,{size:26,strokeWidth:1.6,"aria-hidden":!0})})]},y.key)}),t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("p",{className:"text-sm font-medium",children:"站点名称"}),t.jsxs("div",{className:"mt-2 flex gap-2",children:[t.jsx("input",{defaultValue:r??"",onChange:y=>l(y.target.value),placeholder:"留空使用默认「纳物」",className:"h-10 min-w-0 flex-1 rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"}),t.jsx("button",{onClick:()=>void k("siteName",r??""),disabled:s==="siteName",className:"h-10 rounded-btn bg-accent px-4 text-sm font-medium text-white disabled:opacity-60",children:"保存"})]})]}),t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("p",{className:"text-sm font-medium",children:"站点图标"}),t.jsx("p",{className:"mt-0.5 text-[11px] text-ink-3",children:"显示在浏览器标签页与登录页；支持图片链接或本地上传（自动压缩）"}),t.jsxs("div",{className:"mt-2 flex items-center gap-3",children:[p?t.jsx("img",{src:p,alt:"站点图标",className:"h-12 w-12 shrink-0 rounded-xl border border-line object-contain p-1",onError:y=>{y.target.style.opacity="0.3"}}):t.jsx("span",{className:"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-dashed border-line text-xs text-ink-3",children:"无"}),t.jsx("input",{value:p??"",onChange:y=>g(y.target.value),placeholder:"https://…/favicon.png 或上传",className:"h-10 min-w-0 flex-1 rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"})]}),t.jsxs("div",{className:"mt-2 flex gap-2",children:[t.jsx("button",{onClick:()=>m.current?.click(),className:"h-9 rounded-full border border-line px-4 text-xs text-ink-2 active:bg-surface-2",children:"本地上传"}),t.jsx("input",{ref:m,type:"file",accept:"image/*",className:"hidden",onChange:async y=>{const M=y.target.files?.[0];if(y.target.value="",!!M)try{const f=await Wb(M,128);g(f),await k("siteIcon",f)}catch(f){J(f instanceof Error?f.message:"图片处理失败")}}}),t.jsx("button",{onClick:()=>{g(""),k("siteIcon","")},disabled:s==="siteIcon"||!p,className:"h-9 rounded-full border border-line px-4 text-xs text-ink-2 disabled:opacity-40",children:"清除"}),t.jsx("button",{onClick:()=>void k("siteIcon",p??""),disabled:s==="siteIcon",className:"ml-auto h-9 rounded-btn bg-accent px-4 text-xs font-medium text-white disabled:opacity-60",children:"保存图标"})]})]}),t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("p",{className:"text-sm font-medium",children:"全站公告"}),t.jsx("textarea",{defaultValue:i,onChange:y=>d(y.target.value),rows:3,placeholder:"会显示在登录/注册页；留空不显示",className:"mt-2 w-full rounded-btn border border-line bg-surface-2 p-3 text-sm outline-none focus:border-accent"}),t.jsx("button",{onClick:()=>void k("notice",i),disabled:s==="notice",className:"mt-2 h-10 rounded-btn bg-accent px-4 text-sm font-medium text-white disabled:opacity-60",children:"保存公告"})]})]})}function RT({admins:e,adminPost:a,onLogout:n}){const[s,c]=u.useState(""),[i,d]=u.useState(!1),r=async g=>{g.preventDefault();const m=String(new FormData(g.currentTarget).get("username")??"").trim();if(m){d(!0);try{await a("/api/admin/username",{username:m}),K("登录名已更新，下次登录请使用新用户名"),g.target.reset()}catch(x){J(x instanceof Error?x.message:"修改失败")}finally{d(!1)}}},l=async g=>{g.preventDefault();const m=new FormData(g.currentTarget),x=String(m.get("old")??""),k=String(m.get("new")??""),y=String(m.get("confirm")??"");if(k!==y){c("两次输入的新密码不一致");return}c("");try{await a("/api/admin/password",{oldPassword:x,newPassword:k}),K("密码已更新"),g.target.reset()}catch(M){J(M instanceof Error?M.message:"修改失败")}},p=async()=>{try{await a("/api/admin/logout")}catch{}try{localStorage.removeItem(ta)}catch{}n()};return t.jsxs("div",{className:"space-y-2",children:[t.jsxs("form",{onSubmit:g=>void r(g),className:"rounded-card border border-line bg-surface p-4",children:[t.jsxs("p",{className:"mb-3 flex items-center gap-2 text-sm font-medium",children:[t.jsx(Da,{size:16,strokeWidth:1.8,className:"text-accent","aria-hidden":!0}),"修改管理员登录名"]}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("input",{name:"username",defaultValue:e[0]?.username??"",placeholder:"新的登录用户名（3-40 字符）",autoComplete:"username",className:"h-11 min-w-0 flex-1 rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"}),t.jsx("button",{type:"submit",disabled:i,className:"h-11 shrink-0 rounded-btn bg-accent px-4 text-sm font-medium text-white disabled:opacity-60",children:i?"保存中…":"更新登录名"})]})]}),t.jsxs("form",{onSubmit:g=>void l(g),className:"rounded-card border border-line bg-surface p-4",children:[t.jsxs("p",{className:"mb-3 flex items-center gap-2 text-sm font-medium",children:[t.jsx(zL,{size:16,strokeWidth:1.8,className:"text-accent","aria-hidden":!0}),"修改管理员密码"]}),t.jsxs("div",{className:"space-y-2",children:[t.jsx("input",{name:"old",type:"password",placeholder:"当前密码",autoComplete:"current-password",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"}),t.jsx("input",{name:"new",type:"password",placeholder:"新密码（至少 6 位）",autoComplete:"new-password",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"}),t.jsx("input",{name:"confirm",type:"password",placeholder:"确认新密码",autoComplete:"new-password",className:"h-11 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent"}),s?t.jsx("p",{className:"text-xs",style:{color:"var(--danger)"},children:s}):null,t.jsx("button",{type:"submit",className:"h-10 w-full rounded-btn bg-accent text-sm font-medium text-white",children:"更新密码"})]})]}),t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("p",{className:"mb-2 text-sm font-medium",children:"管理员列表"}),t.jsx("ul",{className:"space-y-1.5",children:e.map(g=>t.jsxs("li",{className:"flex items-center justify-between text-sm",children:[t.jsxs("span",{children:[g.display_name||g.username,t.jsx("span",{className:"ml-2 text-xs text-ink-3",children:g.username})]}),t.jsx("span",{className:"text-[11px] text-ink-3",children:g.created_at?.slice(0,10)??""})]},g.username))})]}),t.jsxs("button",{onClick:()=>void p(),className:"flex w-full items-center justify-center gap-2 rounded-card border py-3 text-sm",style:{borderColor:"var(--danger-soft)",background:"var(--danger-soft)",color:"var(--danger)"},children:[t.jsx(KD,{size:16,strokeWidth:1.8,"aria-hidden":!0}),"退出管理后台"]})]})}function OT({adminGet:e,adminPost:a}){const[n,s]=u.useState(null),[c,i]=u.useState(""),[d,r]=u.useState(""),l=u.useCallback(async()=>{try{const k=await e("/api/admin/smtp");s(k)}catch(k){J(k instanceof Error?k.message:"加载失败")}},[e]);u.useEffect(()=>{l()},[l]);const p=async k=>{k.preventDefault();const y=new FormData(k.currentTarget),M={host:String(y.get("host")??"").trim(),port:Number(y.get("port"))||0,secure:y.get("secure")==="on",user:String(y.get("user")??"").trim(),from:String(y.get("from")??"").trim()},f=String(y.get("pass")??"");f&&(M.pass=f),i("save"),r("");try{await a("/api/admin/smtp",M),K("SMTP 配置已保存"),r("已保存。可用「发送测试邮件」验证。"),await l()}catch(z){J(z instanceof Error?z.message:"保存失败")}finally{i("")}},g=async k=>{k.preventDefault();const y=String(new FormData(k.currentTarget).get("to")??"").trim();if(y){i("test"),r("");try{await a("/api/admin/smtp/test",{to:y}),K("测试邮件已发送"),r(`测试邮件已发送至 ${y}，请查收。`)}catch(M){r(M instanceof Error?M.message:"发送失败"),J("测试邮件发送失败")}finally{i("")}}},m=async()=>{if(window.confirm("确定清除 SMTP 配置？清除后注册验证码邮件将无法发送。")){i("clear");try{await a("/api/admin/smtp/clear"),K("已清除"),await l()}catch(k){J(k instanceof Error?k.message:"操作失败")}finally{i("")}}},x="h-10 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent";return t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("p",{className:"text-sm font-medium",children:"发件邮箱（SMTP）"}),t.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px]",style:{background:n?.configured?"var(--accent-soft)":"var(--warn-soft)",color:n?.configured?"var(--accent)":"var(--warn)"},children:n?.configured?"已配置":"未配置"})]}),t.jsxs("p",{className:"mt-0.5 text-[11px] text-ink-3",children:["用于发送注册/找回密码验证码。",n?.configured?`当前：${n.host}:${n.port}（${n.user}）`:"尚未配置。"]}),t.jsxs("form",{onSubmit:k=>void p(k),className:"mt-3 grid gap-2 sm:grid-cols-2",children:[t.jsx("input",{name:"host",defaultValue:n?.host??"",placeholder:"SMTP 服务器（如 smtp.qq.com）",className:x}),t.jsx("input",{name:"port",defaultValue:n?.port?String(n.port):"465",placeholder:"端口（465/587/25）",inputMode:"numeric",className:x}),t.jsx("input",{name:"user",defaultValue:n?.user??"",placeholder:"发件账号（邮箱）",autoComplete:"off",className:x}),t.jsx("input",{name:"pass",type:"password",placeholder:"密码/授权码（留空保持不变）",autoComplete:"new-password",className:x}),t.jsx("input",{name:"from",defaultValue:n?.from??"",placeholder:"发件人地址（一般同账号）",className:x}),t.jsxs("label",{className:"flex items-center gap-2 text-xs text-ink-2",children:[t.jsx("input",{name:"secure",type:"checkbox",defaultChecked:n?.secure??!0,className:"h-4 w-4 accent-[var(--accent)]"}),"SSL/TLS（端口 465 勾选）"]}),t.jsx("button",{type:"submit",disabled:c==="save",className:"h-10 rounded-btn bg-accent text-sm font-medium text-white disabled:opacity-60 sm:col-span-2",children:c==="save"?"保存中…":"保存 SMTP 配置"})]})]}),t.jsxs("form",{onSubmit:k=>void g(k),className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("p",{className:"text-sm font-medium",children:"发送测试邮件"}),t.jsxs("div",{className:"mt-2 flex gap-2",children:[t.jsx("input",{name:"to",type:"email",required:!0,placeholder:"你的邮箱",className:`${x} min-w-0 flex-1`}),t.jsx("button",{type:"submit",disabled:c==="test",className:"h-10 shrink-0 rounded-btn border border-accent px-4 text-sm font-medium text-accent disabled:opacity-60",children:c==="test"?"发送中…":"发送测试"})]})]}),t.jsx("div",{className:"rounded-card border border-line bg-surface p-4",children:t.jsxs("div",{className:"flex items-center justify-between gap-3",children:[t.jsx("p",{className:"min-w-0 flex-1 text-xs text-ink-3",children:d||"配置保存后即可用测试邮件验证连通性。"}),t.jsx("button",{onClick:()=>void m(),disabled:c==="clear"||!n?.configured,className:"h-9 shrink-0 rounded-full border px-4 text-xs disabled:opacity-40",style:{color:"var(--danger)",borderColor:"var(--danger-soft)"},children:"清除配置"})]})})]})}function BT({adminGet:e,adminPost:a}){const[n,s]=u.useState(null),[c,i]=u.useState(null),[d,r]=u.useState(""),[l,p]=u.useState(""),g=u.useCallback(async()=>{try{const[y,M]=await Promise.all([e("/api/admin/dbinfo"),e("/api/admin/dbconf")]);s(y),i(M)}catch(y){J(y instanceof Error?y.message:"加载失败")}},[e]);u.useEffect(()=>{g()},[g]);const m="h-10 w-full rounded-btn border border-line bg-surface-2 px-3 text-sm outline-none focus:border-accent",x=async(y,M)=>{const f=new FormData(y),z={host:String(f.get("host")??"").trim(),port:Number(f.get("port"))||3306,user:String(f.get("user")??"").trim(),name:String(f.get("name")??"").trim()},V=String(f.get("pass")??"");V&&(z.pass=V),r(M?"test":"save"),p("");try{await a(M?"/api/admin/dbconf/test":"/api/admin/dbconf",z),M?(p("连接成功，配置可用。点「保存并切换」生效。"),K("连接成功")):(p("配置已保存并重新连接。"),K("数据库配置已保存"),await g())}catch(S){p(S instanceof Error?S.message:"操作失败"),J(M?"连接失败":"保存失败")}finally{r("")}},k=async y=>{r(y),p("");try{const M=await e(`/api/admin/backup?scope=${y}`),f={app:"nawu",exportedAt:new Date().toISOString(),scope:y,tables:M.tables??{}},z=new Blob([JSON.stringify(f,null,2)],{type:"application/json"}),V=document.createElement("a");V.href=URL.createObjectURL(z),V.download=`nawu-backup-${y}-${new Date().toISOString().slice(0,10)}.json`,V.click(),URL.revokeObjectURL(V.href);const S=Object.values(f.tables).reduce((j,w)=>j+(Array.isArray(w)?w.length:0),0);p(`备份已下载（${Object.keys(f.tables).length} 张表 / ${S} 行）。恢复备份目前需联系维护者手工导入。`),K("备份已下载")}catch(M){p(M instanceof Error?M.message:"导出失败"),J("备份导出失败")}finally{r("")}};return t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("p",{className:"text-sm font-medium",children:"数据备份"}),t.jsx("p",{className:"mt-0.5 text-[11px] text-ink-3",children:"导出为 JSON 文件保存在本地；建议定期下载留存。"}),t.jsxs("div",{className:"mt-2 flex flex-wrap gap-2",children:[t.jsx("button",{onClick:()=>void k("site"),disabled:d==="site",className:"h-10 rounded-btn border border-accent px-4 text-sm font-medium text-accent disabled:opacity-60",children:d==="site"?"导出中…":"站点数据备份（用户/云备份/名册）"}),t.jsx("button",{onClick:()=>void k("all"),disabled:d==="all",className:"h-10 rounded-btn border border-accent px-4 text-sm font-medium text-accent disabled:opacity-60",children:d==="all"?"导出中…":"全站备份（全部数据表）"})]})]}),t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsx("p",{className:"text-sm font-medium",children:"当前连接"}),t.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px]",style:{background:n?.connected?"var(--accent-soft)":"var(--danger-soft)",color:n?.connected?"var(--accent)":"var(--danger)"},children:n?.connected?"已连接":"未连接"})]}),n?.connected?t.jsxs("div",{className:"mt-2 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-ink-2 sm:grid-cols-3",children:[t.jsxs("p",{children:["主机：",t.jsx("span",{className:"text-ink",children:n.host})]}),t.jsxs("p",{children:["数据库：",t.jsx("span",{className:"text-ink",children:n.database})]}),t.jsxs("p",{children:["用户：",t.jsx("span",{className:"text-ink",children:n.user})]}),t.jsxs("p",{children:["延迟：",t.jsxs("span",{className:"text-ink",children:[n.latencyMs," ms"]})]}),t.jsxs("p",{children:["数据行：",t.jsx("span",{className:"text-ink",children:n.rowCount})]}),t.jsxs("p",{children:["表：",t.jsxs("span",{className:"text-ink",children:[n.tables?.length??0," 张"]})]})]}):t.jsx("p",{className:"mt-2 text-xs",style:{color:"var(--danger)"},children:n?.error??"数据库不可用"}),n?.tables?.length?t.jsx("p",{className:"mt-2 text-[11px] leading-5 text-ink-3",children:n.tables.join(" · ")}):null]}),t.jsxs("div",{className:"rounded-card border border-line bg-surface p-4",children:[t.jsx("p",{className:"text-sm font-medium",children:"手动连接数据库"}),t.jsx("p",{className:"mt-0.5 text-[11px] text-ink-3",children:"切换到其他 MySQL 实例（如迁移服务器）。密码留空表示保持现有密码；保存前会先测试连接，失败不落盘。"}),t.jsxs("form",{onSubmit:y=>{y.preventDefault(),x(y.currentTarget,!1)},className:"mt-3 grid gap-2 sm:grid-cols-2",children:[t.jsx("input",{name:"host",defaultValue:c?.host??"",placeholder:"主机（如 127.0.0.1）",className:m}),t.jsx("input",{name:"port",defaultValue:c?.port?String(c.port):"3306",placeholder:"端口",inputMode:"numeric",className:m}),t.jsx("input",{name:"user",defaultValue:c?.user??"",placeholder:"用户名",autoComplete:"off",className:m}),t.jsx("input",{name:"pass",type:"password",placeholder:`密码（当前 ${c?.passMasked??"未设置"}，留空不变）`,autoComplete:"new-password",className:m}),t.jsx("input",{name:"name",defaultValue:c?.database??"",placeholder:"数据库名",className:`${m} sm:col-span-2`}),t.jsxs("div",{className:"flex gap-2 sm:col-span-2",children:[t.jsx("button",{type:"button",onClick:y=>void x(y.currentTarget.form,!0),disabled:d!=="",className:"h-10 flex-1 rounded-btn border border-accent text-sm font-medium text-accent disabled:opacity-60",children:d==="test"?"测试中…":"测试连接"}),t.jsx("button",{type:"submit",disabled:d!=="",className:"h-10 flex-1 rounded-btn bg-accent text-sm font-medium text-white disabled:opacity-60",children:d==="save"?"保存中…":"保存并切换"})]})]}),l?t.jsx("p",{className:"mt-2 whitespace-pre-wrap text-xs text-ink-2",children:l}):null]})]})}const FT=[{path:"/onboarding/server",element:t.jsx(GV,{})},{path:"/login",element:t.jsx(Ya,{})},{path:"/register",element:t.jsx(Ya,{})},{path:"/forgot",element:t.jsx(Ya,{})},{path:"/servers",element:t.jsx(QV,{})},{path:"/servers/new",element:t.jsx(zs,{})},{path:"/servers/:id",element:t.jsx(zs,{})},{path:"/home",element:t.jsx(ZI,{})},{path:"/overview",element:t.jsx(Ge,{to:"/home",replace:!0})},{path:"/report",element:t.jsx(oE,{})},{path:"/ledger",element:t.jsx(iE,{})},{path:"/ai",element:t.jsx(OP,{})},{path:"/ai/confirm",element:t.jsx(Ge,{to:"/ai",replace:!0})},{path:"/record",element:t.jsx(Qs,{})},{path:"/record/:id",element:t.jsx(Qs,{})},{path:"/goods",element:t.jsx(Ge,{to:"/home",replace:!0})},{path:"/goods/new",element:t.jsx(Ge,{to:"/home",replace:!0})},{path:"/goods/:id",element:t.jsx(zt,{code:"P15",title:"物品详情",future:"首页卡片点击弹出详情弹窗"})},{path:"/goods/:id/edit",element:t.jsx(zt,{code:"P16",title:"编辑物品",future:"src/pages/GoodsEditPage.tsx"})},{path:"/subs",element:t.jsx(Ge,{to:"/home",replace:!0})},{path:"/subs/new",element:t.jsx(Ge,{to:"/home",replace:!0})},{path:"/subs/:id",element:t.jsx(zt,{code:"P18",title:"订阅详情",future:"src/pages/SubEditPage.tsx"})},{path:"/subs/:id/bills",element:t.jsx(zt,{code:"P19",title:"订阅账单",future:"src/pages/SubBillsPage.tsx"})},{path:"/me",element:t.jsx(ZP,{})},{path:"/wall",element:t.jsx(XP,{})},{path:"/backup",element:t.jsx(bT,{})},{path:"/settings",element:t.jsx(jT,{})},{path:"/profile",element:t.jsx(zt,{code:"P23",title:"账号资料",future:"src/pages/ProfilePage.tsx"})},{path:"/categories",element:t.jsx(NT,{})},{path:"/rules",element:t.jsx(qT,{})},{path:"/account",element:t.jsx(HT,{})},{path:"/admin",element:t.jsx(IT,{})}],L7="gf.splash.shown";function WT(){try{return window.sessionStorage.getItem(L7)==="1"}catch{return!1}}function UT(){try{window.sessionStorage.setItem(L7,"1")}catch{}}function GT(){return je()?!0:!WT()}const YT=1400,ZT=420;function KT(){const[e,a]=u.useState(()=>GT()),[n,s]=u.useState(!1);return u.useEffect(()=>{if(!e)return;UT();const c=typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=c?500:YT,d=c?160:ZT,r=window.setTimeout(()=>s(!0),i),l=window.setTimeout(()=>a(!1),i+d);return()=>{window.clearTimeout(r),window.clearTimeout(l)}},[e]),e?$e.createPortal(t.jsxs("div",{className:`fixed inset-0 z-[120] flex flex-col items-center justify-center bg-paper ${n?"splash-out":""}`,"aria-hidden":!0,children:[t.jsx("div",{className:"pointer-events-none absolute inset-0",style:{background:"radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--accent) 22%, transparent), transparent 62%)"}}),t.jsx("div",{className:"splash-logo relative mb-6 flex h-28 w-28 items-center justify-center rounded-[32px] bg-accent shadow-lg shadow-accent/30",children:t.jsx(Tt,{size:54,strokeWidth:1.6,className:"text-white","aria-hidden":!0})}),t.jsx("div",{className:"splash-up relative text-[30px] font-semibold tracking-[0.32em] text-ink",style:{animationDelay:"240ms"},children:"纳物"}),t.jsx("div",{className:"splash-up relative mt-2 text-[13px] tracking-[0.18em] text-ink-3",style:{animationDelay:"400ms"},children:"NAWU"}),t.jsxs("div",{className:"splash-up absolute bottom-[calc(env(safe-area-inset-bottom)+28px)] flex flex-col items-center gap-1",style:{animationDelay:"620ms"},children:[t.jsx("span",{className:"text-[12px] text-ink-3",children:"值得的花销，值得记录"}),t.jsxs("span",{className:"text-[11px] text-ink-3/80",children:["v",Ye]})]})]}),document.body):null}function JT(){const e=fe(c=>c.toasts),a=fe(c=>c.confirmRequest),n=fe(c=>c.dismissToast),s=fe(c=>c.resolveConfirm);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"fixed left-0 right-0 top-0 z-[80] flex flex-col items-center gap-2 pt-safe",children:e.map(c=>t.jsx(XT,{toast:c,onDismiss:n,onAction:()=>{c.onAction?.(),n(c.id)}},c.id))}),a?t.jsx(QT,{request:a,onResolve:s}):null]})}function XT({toast:e,onDismiss:a,onAction:n}){const s=e.kind==="error"?"bg-danger-soft text-danger":e.kind==="success"?"bg-accent-soft text-accent":"bg-surface text-ink";return t.jsx("div",{className:`toast-enter mx-4 mt-2 w-[min(92vw,420px)] rounded-btn px-4 py-3 shadow-lg ${s}`,onClick:()=>a(e.id),children:t.jsxs("div",{className:"flex items-center justify-between gap-3",children:[t.jsx("span",{className:"t-body flex-1",children:e.message}),e.actionLabel?t.jsx("button",{type:"button",className:"min-h-[44px] px-2 t-body font-medium text-accent",onClick:c=>{c.stopPropagation(),n()},children:e.actionLabel}):null]})})}function QT({request:e,onResolve:a}){return t.jsx("div",{className:"fixed inset-0 z-[90] flex items-center justify-center bg-black/40 px-6",children:t.jsxs("div",{className:"w-full max-w-[320px] rounded-card bg-surface p-4 shadow-lg",children:[t.jsx("div",{className:"t-h3",children:e.title}),e.message?t.jsx("div",{className:"mt-2 t-body text-ink-2",children:e.message}):null,t.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[t.jsx("button",{type:"button",className:"min-h-[44px] px-4 rounded-btn t-body text-ink-2",onClick:()=>a(!1),children:e.cancelText}),t.jsx("button",{type:"button",className:"min-h-[44px] px-4 rounded-btn t-body text-accent font-medium",onClick:()=>a(!0),children:e.confirmText})]})]})})}function eR(){u.useEffect(()=>{if(!dt.isNativePlatform())return;const e=()=>{window.setTimeout(()=>{mc.setResizeMode({mode:"body"}).catch(()=>{});for(const s of[document.body,document.documentElement])s.style.height="";document.body.style.minHeight="100%",document.body.offsetHeight,window.dispatchEvent(new Event("resize"))},250)},a=pc.addListener("appStateChange",n=>{n.isActive&&e()});return()=>{a.then(n=>n.remove())}},[])}let sc=!1;async function tR(){if(sc)return;sc=!0;const{add:e}=ze.getState();try{await e({alias:"当前站点",url:window.location.origin})}catch{await Ee.getState().setOfflineMode(!0)}}function aR({children:e}){const a=ke(),n=Pt(),s=Ee(r=>r.hydrated),c=Ee(r=>r.offlineMode),i=ze(r=>r.servers.length),d=je();return u.useEffect(()=>{if(s){if(!d){i===0&&!c&&tR(),n.pathname.startsWith("/onboarding")&&a("/home",{replace:!0});return}i===0&&!c&&a("/onboarding/server",{replace:!0})}},[s,n.pathname,a,d,c,i]),t.jsx(t.Fragment,{children:e})}function nR(){return t.jsx("div",{className:"min-h-screen bg-paper flex items-center justify-center",children:t.jsxs("div",{className:"flex flex-col items-center gap-3",children:[t.jsx(Tt,{size:36,className:"text-ink-3",strokeWidth:1.5}),t.jsx("div",{className:"t-h3 text-ink-2",children:"纳物"}),t.jsx("div",{className:"w-40 h-1 rounded bg-line overflow-hidden",children:t.jsx("div",{className:"h-full w-1/3 shimmer"})})]})})}function oR(){const e=Ee(c=>c.hydrated),a=de(c=>c.settings.vibrate),n=de(c=>c.settings.splash);eR(),u.useEffect(()=>{xV(a!==!1)},[a]);const s=e?t.jsxs(aR,{children:[t.jsx(SI,{children:t.jsxs(P7,{children:[t.jsx(Ta,{path:"/",element:t.jsx(Ge,{to:"/home",replace:!0})}),FT.map(c=>t.jsx(Ta,{path:c.path,element:c.element},c.path)),t.jsx(Ta,{path:"*",element:t.jsx(Ge,{to:"/home",replace:!0})})]})}),t.jsx(JT,{})]}):t.jsx(nR,{});return t.jsxs(t.Fragment,{children:[s,n!==!1?t.jsx(KT,{}):null]})}async function sR(e){if(je())try{const[{StatusBar:a,Style:n},{Keyboard:s},{App:c}]=await Promise.all([Me(()=>import("./index-xRIURe-Q.js"),__vite__mapDeps([2,1]),import.meta.url),Me(()=>Promise.resolve().then(()=>c9),void 0,import.meta.url),Me(()=>Promise.resolve().then(()=>s9),void 0,import.meta.url)]);await a.setOverlaysWebView({overlay:!1}),await a.setStyle({style:e==="dark"?n.Dark:n.Light}),await a.setBackgroundColor({color:e==="dark"?"#121513":"#f4f5f3"}),await s.setResizeMode({mode:"body"}).catch(()=>{}),await c.removeAllListeners()}catch{}}async function cR(){await Ee.getState().init();const a=Ee.getState().theme;document.documentElement.setAttribute("data-theme",a),await sR(a);const n=document.getElementById("root");if(!n)throw new Error("#root 节点缺失，请检查 index.html");rn.createRoot(n).render(t.jsx(St.StrictMode,{children:t.jsx(T7,{children:t.jsx(oR,{})})}))}cR();export{In as W,Me as _,lc as b,vt as r};
