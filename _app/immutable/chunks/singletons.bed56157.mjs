import{C as d,Y as w,U as R,s as S,Z as I}from"./index.84184d6e.mjs";const f=[];function T(e,t){return{subscribe:p(e,t).subscribe}}function p(e,t=d){let n;const s=new Set;function r(a){if(S(e,a)&&(e=a,n)){const c=!f.length;for(const i of s)i[1](),f.push(i,e);if(c){for(let i=0;i<f.length;i+=2)f[i][0](f[i+1]);f.length=0}}}function o(a){r(a(e))}function l(a,c=d){const i=[a,c];return s.add(i),s.size===1&&(n=t(r)||d),a(e),()=>{s.delete(i),s.size===0&&(n(),n=null)}}return{set:r,update:o,subscribe:l}}function Y(e,t,n){const s=!Array.isArray(e),r=s?[e]:e,o=t.length<2;return T(n,l=>{let a=!1;const c=[];let i=0,_=d;const g=()=>{if(i)return;_();const u=t(s?c[0]:c,l);o?l(u):_=I(u)?u:d},A=r.map((u,h)=>w(u,E=>{c[h]=E,i&=~(1<<h),a&&g()},()=>{i|=1<<h}));return a=!0,g(),function(){R(A),_()}})}const P="",U=__sveltekit_1nz0te9.assets,x="1719757915332",$="sveltekit:snapshot",j="sveltekit:scroll",q="sveltekit:index",v={tap:1,hover:2,viewport:3,eager:4,off:-1};function z(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function C(){return{x:pageXOffset,y:pageYOffset}}function b(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const k={...v,"":v.hover};function y(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function K(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=y(e)}}function D(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const s=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!s||L(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:r,target:s}}function G(e){let t=null,n=null,s=null,r=null,o=e;for(;o&&o!==document.documentElement;)n===null&&(n=b(o,"preload-code")),s===null&&(s=b(o,"preload-data")),t===null&&(t=b(o,"noscroll")),r===null&&(r=b(o,"reload")),o=y(o);return{preload_code:k[n??"off"],preload_data:k[s??"off"],noscroll:t==="off"?!1:t===""?!0:null,reload:r==="off"?!1:r===""?!0:null}}function m(e){const t=p(e);let n=!0;function s(){n=!0,t.update(l=>l)}function r(l){n=!1,t.set(l)}function o(l){let a;return t.subscribe(c=>{(a===void 0||n&&c!==a)&&l(a=c)})}return{notify:s,set:r,subscribe:o}}function O(){const{set:e,subscribe:t}=p(!1);let n;async function s(){clearTimeout(n);const r=await fetch(`${U}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const l=(await r.json()).version!==x;return l&&(e(!0),clearTimeout(n)),l}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:t,check:s}}function L(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let N;function X(e){N=e.client}const B={url:m({}),page:m({}),navigating:p(null),updated:O()};export{q as I,v as P,j as S,$ as a,D as b,G as c,C as d,P as e,K as f,z as g,X as h,L as i,N as j,Y as k,B as s,p as w};
