function $(){}const Q=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function I(){return Object.create(null)}function N(t){t.forEach(U)}function q(t){return typeof t=="function"}function qt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let D;function Lt(t,e){return D||(D=document.createElement("a")),D.href=e,t===D.href}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Bt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)c[s]=e.dirty[s]|r[s];return c}return e.dirty|r}return e.dirty}function Ft(t,e,n,i,r,c){if(r){const o=V(e,n,i,c);t.p(o,r)}}function Wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Gt(t){const e={};for(const n in t)e[n]=!0;return e}function It(t){return t??""}const X=typeof window<"u";let Y=X?()=>window.performance.now():()=>Date.now(),W=X?t=>requestAnimationFrame(t):$;const E=new Set;function Z(t){E.forEach(e=>{e.c(t)||(E.delete(e),e.f())}),E.size!==0&&W(Z)}function tt(t){let e;return E.size===0&&W(Z),{promise:new Promise(n=>{E.add(e={c:t,f:n})}),abort(){E.delete(e)}}}let L=!1;function pt(){L=!0}function yt(){L=!1}function gt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&l.push(_)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,_=(r>0&&e[n[r]].claim_order<=u?r+1:gt(1,r,h=>e[n[h]].claim_order,u))-1;i[l]=n[_]+1;const a=_+1;n[a]=l,r=Math.max(a,r)}const c=[],o=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);s>=l;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);c.reverse(),o.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<o.length;l++){for(;u<c.length&&o[l].claim_order>=c[u].claim_order;)u++;const _=u<c.length?c[u]:null;t.insertBefore(o[l],_)}}function xt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $t(t){const e=it("style");return wt(et(t),e),e.sheet}function wt(t,e){return xt(t.head||t,e),e.sheet}function vt(t,e){if(L){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){L&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function nt(t){t.parentNode&&t.parentNode.removeChild(t)}function Kt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function Qt(){return G(" ")}function Ut(){return G("")}function Vt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,r=!1){At(t);const c=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const l=n(s);return l===void 0?t.splice(o,1):t[o]=l,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const l=n(s);return l===void 0?t.splice(o,1):t[o]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function st(t,e,n,i){return rt(t,r=>r.nodeName===e,r=>{const c=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||c.push(s.name)}c.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Yt(t,e,n){return st(t,e,n,it)}function Zt(t,e,n){return st(t,e,n,Et)}function St(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>G(e),!0)}function te(t){return St(t," ")}function ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ne(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ie(t,e,n){t.classList[n?"add":"remove"](e)}function kt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function re(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function se(t,e){return new t(e)}const P=new Map;let R=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Tt(t,e){const n={stylesheet:$t(e),rules:{}};return P.set(t,n),n}function B(t,e,n,i,r,c,o,s=0){const l=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=l){const y=e+(n-e)*c(p);u+=p*100+`%{${o(y,1-y)}}
`}const _=u+`100% {${o(n,1-n)}}
}`,a=`__svelte_${Ct(_)}_${s}`,h=et(t),{stylesheet:f,rules:d}=P.get(h)||Tt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,R+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),R-=r,R||jt())}function jt(){W(()=>{R||(P.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&nt(e)}),P.clear())})}let T;function k(t){T=t}function ot(){if(!T)throw new Error("Function called outside component initialization");return T}function oe(t){ot().$$.on_mount.push(t)}function le(t){ot().$$.after_update.push(t)}const v=[],J=[],M=[],K=[],lt=Promise.resolve();let F=!1;function ct(){F||(F=!0,lt.then(ut))}function ce(){return ct(),lt}function j(t){M.push(t)}const z=new Set;let w=0;function ut(){if(w!==0)return;const t=T;do{try{for(;w<v.length;){const e=v[w];w++,k(e),Dt(e.$$)}}catch(e){throw v.length=0,w=0,e}for(k(null),v.length=0,w=0;J.length;)J.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];z.has(n)||(z.add(n),n())}M.length=0}while(v.length);for(;K.length;)K.pop()();F=!1,z.clear(),k(t)}function Dt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let S;function at(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function C(t,e,n){t.dispatchEvent(kt(`${e?"intro":"outro"}${n}`))}const O=new Set;let g;function ue(){g={r:0,c:[],p:g}}function ae(){g.r||N(g.c),g=g.p}function Mt(t,e){t&&t.i&&(O.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(O.has(t))return;O.add(t),g.c.push(()=>{O.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ft={duration:0};function _e(t,e,n){const i={direction:"in"};let r=e(t,n,i),c=!1,o,s,l=0;function u(){o&&H(t,o)}function _(){const{delay:h=0,duration:f=300,easing:d=Q,tick:m=$,css:p}=r||ft;p&&(o=B(t,0,1,f,h,d,p,l++)),m(0,1);const y=Y()+h,A=y+f;s&&s.abort(),c=!0,j(()=>C(t,!0,"start")),s=tt(b=>{if(c){if(b>=A)return m(1,0),C(t,!0,"end"),u(),c=!1;if(b>=y){const x=d((b-y)/f);m(x,1-x)}}return c})}let a=!1;return{start(){a||(a=!0,H(t),q(r)?(r=r(i),at().then(_)):_())},invalidate(){a=!1},end(){c&&(u(),c=!1)}}}function de(t,e,n,i){const r={direction:"both"};let c=e(t,n,r),o=i?0:1,s=null,l=null,u=null;function _(){u&&H(t,u)}function a(f,d){const m=f.b-o;return d*=Math.abs(m),{a:o,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:p=Q,tick:y=$,css:A}=c||ft,b={start:Y()+d,b:f};f||(b.group=g,g.r+=1),s||l?l=b:(A&&(_(),u=B(t,o,f,m,d,p,A)),f&&y(0,1),s=a(b,m),j(()=>C(t,f,"start")),tt(x=>{if(l&&x>l.start&&(s=a(l,m),l=null,C(t,s.b,"start"),A&&(_(),u=B(t,o,s.b,s.duration,0,p,c.css))),s){if(x>=s.end)y(o=s.b,1-o),C(t,s.b,"end"),l||(s.b?_():--s.group.r||N(s.group.c)),s=null;else if(x>=s.start){const _t=x-s.start;o=s.a+s.d*p(_t/s.duration),y(o,1-o)}}return!!(s||l)}))}return{run(f){q(c)?at().then(()=>{c=c(r),h(f)}):h(f)},end(){_(),s=l=null}}}const he=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||j(()=>{const o=t.$$.on_mount.map(U).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...o):N(o),t.$$.on_mount=[]}),c.forEach(j)}function Pt(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Rt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,i,r,c,o,s=[-1]){const l=T;k(t);const u=t.$$={fragment:null,ctx:[],props:c,update:$,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:I(),dirty:s,skip_bound:!1,root:e.target||l.$$.root};o&&o(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return u.ctx&&r(u.ctx[a],u.ctx[a]=d)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](d),_&&Rt(t,a)),h}):[],u.update(),_=!0,N(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){pt();const a=Nt(e.target);u.fragment&&u.fragment.l(a),a.forEach(nt)}else u.fragment&&u.fragment.c();e.intro&&Mt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),yt(),ut()}k(l)}class ge{$destroy(){Pt(this,1),this.$destroy=$}$on(e,n){if(!q(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ot as A,Pt as B,$ as C,Et as D,Zt as E,vt as F,Lt as G,ie as H,zt as I,j as J,_e as K,de as L,Bt as M,re as N,Vt as O,Ft as P,Wt as Q,Ht as R,ge as S,he as T,N as U,Q as V,Kt as W,It as X,mt as Y,q as Z,Gt as _,Qt as a,Jt as b,te as c,fe as d,Ut as e,ae as f,Mt as g,nt as h,ye as i,le as j,it as k,Yt as l,Nt as m,Xt as n,oe as o,ne as p,G as q,St as r,qt as s,ce as t,ee as u,ue as v,J as w,se as x,me as y,pe as z};
