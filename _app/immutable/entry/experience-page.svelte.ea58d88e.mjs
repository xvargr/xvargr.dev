import{S as te,i as le,s as se,k as g,q as L,a as A,l as p,m as k,r as O,h as _,c as H,n as v,b as w,F as m,C as ee,W as J,X as Se,u as X,g as V,v as ne,f as ae,d as C,H as x,G as ce,y as F,z as M,A as U,B as W}from"../chunks/index.84184d6e.mjs";import{a as Ie,u as we}from"../chunks/userData.0567a21e.mjs";import{T as Ae,I as He}from"../chunks/IconButton.cd9048c6.mjs";function fe(f,e,a){const t=f.slice();return t[3]=e[a],t}function he(f){let e,a=f[3]+"",t,o;return{c(){e=g("span"),t=L(a),o=A(),this.h()},l(n){e=p(n,"SPAN",{class:!0});var l=k(e);t=O(l,a),o=H(l),l.forEach(_),this.h()},h(){v(e,"class",Se(`skill ${f[3]}`)+" svelte-bbsmtb")},m(n,l){w(n,e,l),m(e,t),m(e,o)},p:ee,d(n){n&&_(e)}}}function De(f){let e,a,t,o,n,l=f[0],c=[];for(let s=0;s<l.length;s+=1)c[s]=he(fe(f,l,s));return{c(){e=g("section"),a=g("h2"),t=L("Skills"),o=A(),n=g("div");for(let s=0;s<c.length;s+=1)c[s].c();this.h()},l(s){e=p(s,"SECTION",{class:!0});var r=k(e);a=p(r,"H2",{class:!0});var i=k(a);t=O(i,"Skills"),i.forEach(_),o=H(r),n=p(r,"DIV",{class:!0});var h=k(n);for(let I=0;I<c.length;I+=1)c[I].l(h);h.forEach(_),r.forEach(_),this.h()},h(){v(a,"class","svelte-bbsmtb"),v(n,"class","skills-container svelte-bbsmtb"),v(e,"class","svelte-bbsmtb")},m(s,r){w(s,e,r),m(e,a),m(a,t),m(e,o),m(e,n);for(let i=0;i<c.length;i+=1)c[i].m(n,null)},p(s,[r]){if(r&1){l=s[0];let i;for(i=0;i<l.length;i+=1){const h=fe(s,l,i);c[i]?c[i].p(h,r):(c[i]=he(h),c[i].c(),c[i].m(n,null))}for(;i<c.length;i+=1)c[i].d(1);c.length=l.length}},i:ee,o:ee,d(s){s&&_(e),J(c,s)}}}function Te(f,e,a){let{data:t}=e;const{additionalSkills:o}=Ie,n=[...o];return t.repos.forEach(l=>{var c;(c=l.topics)==null||c.forEach(s=>{n.includes(s)||n.push(s)})}),f.$$set=l=>{"data"in l&&a(1,t=l.data)},[n,t]}class Ve extends te{constructor(e){super(),le(this,e,Te,De,se,{data:1})}}function ue(f,e,a){const t=f.slice();return t[2]=e[a],t[4]=a,t}function _e(f,e,a){const t=f.slice();return t[5]=e[a],t}function me(f,e,a){const t=f.slice();return t[8]=e[a],t}function de(f,e,a){const t=f.slice();return t[11]=e[a],t}function ve(f){let e,a=f[11]+"",t;return{c(){e=g("li"),t=L(a),this.h()},l(o){e=p(o,"LI",{class:!0});var n=k(e);t=O(n,a),n.forEach(_),this.h()},h(){v(e,"class","svelte-16smhl0")},m(o,n){w(o,e,n),m(e,t)},p(o,n){n&2&&a!==(a=o[11]+"")&&X(t,a)},d(o){o&&_(e)}}}function ge(f){let e,a,t,o=f[2].images,n=[];for(let l=0;l<o.length;l+=1)n[l]=pe(me(f,o,l));return{c(){e=g("hr"),a=A(),t=g("div");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=p(l,"HR",{class:!0}),a=H(l),t=p(l,"DIV",{class:!0});var c=k(t);for(let s=0;s<n.length;s+=1)n[s].l(c);c.forEach(_),this.h()},h(){v(e,"class","svelte-16smhl0"),v(t,"class","images-container svelte-16smhl0")},m(l,c){w(l,e,c),w(l,a,c),w(l,t,c);for(let s=0;s<n.length;s+=1)n[s].m(t,null)},p(l,c){if(c&2){o=l[2].images;let s;for(s=0;s<o.length;s+=1){const r=me(l,o,s);n[s]?n[s].p(r,c):(n[s]=pe(r),n[s].c(),n[s].m(t,null))}for(;s<n.length;s+=1)n[s].d(1);n.length=o.length}},d(l){l&&_(e),l&&_(a),l&&_(t),J(n,l)}}}function pe(f){let e,a,t;return{c(){e=g("img"),this.h()},l(o){e=p(o,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ce(e.src,a=f[8].src)||v(e,"src",a),v(e,"alt",t=f[8].alt),v(e,"class","svelte-16smhl0")},m(o,n){w(o,e,n)},p(o,n){n&2&&!ce(e.src,a=o[8].src)&&v(e,"src",a),n&2&&t!==(t=o[8].alt)&&v(e,"alt",t)},d(o){o&&_(e)}}}function $e(f){let e,a,t,o,n=f[2].skills,l=[];for(let s=0;s<n.length;s+=1)l[s]=be(_e(f,n,s));const c=s=>C(l[s],1,1,()=>{l[s]=null});return{c(){e=g("hr"),a=A(),t=g("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=p(s,"HR",{class:!0}),a=H(s),t=p(s,"DIV",{class:!0});var r=k(t);for(let i=0;i<l.length;i+=1)l[i].l(r);r.forEach(_),this.h()},h(){v(e,"class","svelte-16smhl0"),v(t,"class","tools-container svelte-16smhl0")},m(s,r){w(s,e,r),w(s,a,r),w(s,t,r);for(let i=0;i<l.length;i+=1)l[i].m(t,null);o=!0},p(s,r){if(r&2){n=s[2].skills;let i;for(i=0;i<n.length;i+=1){const h=_e(s,n,i);l[i]?(l[i].p(h,r),V(l[i],1)):(l[i]=be(h),l[i].c(),V(l[i],1),l[i].m(t,null))}for(ne(),i=n.length;i<l.length;i+=1)c(i);ae()}},i(s){if(!o){for(let r=0;r<n.length;r+=1)V(l[r]);o=!0}},o(s){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)C(l[r]);o=!1},d(s){s&&_(e),s&&_(a),s&&_(t),J(l,s)}}}function be(f){let e,a;return e=new Ae({props:{type:f[5]}}),{c(){F(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,o){U(e,t,o),a=!0},p(t,o){const n={};o&2&&(n.type=t[5]),e.$set(n)},i(t){a||(V(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){W(e,t)}}}function ke(f){let e,a,t,o,n,l=f[2].duration+"",c,s,r,i=f[2].institution+"",h,I,y,N=f[2].title+"",$,S,q,B,R,Y,K,Q,P,G,j=f[2].description,D=[];for(let u=0;u<j.length;u+=1)D[u]=ve(de(f,j,u));let T=f[2].images&&ge(f),E=f[2].skills&&$e(f);return{c(){e=g("div"),a=A(),t=g("div"),o=g("div"),n=g("span"),c=L(l),s=A(),r=g("h3"),h=L(i),I=A(),y=g("h4"),$=L(N),S=A(),q=g("hr"),B=A(),R=g("ul");for(let u=0;u<D.length;u+=1)D[u].c();Y=A(),T&&T.c(),K=A(),E&&E.c(),Q=A(),P=g("div"),this.h()},l(u){e=p(u,"DIV",{class:!0}),k(e).forEach(_),a=H(u),t=p(u,"DIV",{class:!0});var d=k(t);o=p(d,"DIV",{class:!0});var b=k(o);n=p(b,"SPAN",{class:!0});var z=k(n);c=O(z,l),z.forEach(_),s=H(b),r=p(b,"H3",{});var ie=k(r);h=O(ie,i),ie.forEach(_),b.forEach(_),I=H(d),y=p(d,"H4",{});var re=k(y);$=O(re,N),re.forEach(_),S=H(d),q=p(d,"HR",{class:!0}),B=H(d),R=p(d,"UL",{class:!0});var oe=k(R);for(let Z=0;Z<D.length;Z+=1)D[Z].l(oe);oe.forEach(_),Y=H(d),T&&T.l(d),K=H(d),E&&E.l(d),d.forEach(_),Q=H(u),P=p(u,"DIV",{class:!0}),k(P).forEach(_),this.h()},h(){v(e,"class","connector svelte-16smhl0"),x(e,"fade-top",f[4]===0),v(n,"class","duration svelte-16smhl0"),v(o,"class","header svelte-16smhl0"),v(q,"class","svelte-16smhl0"),v(R,"class","svelte-16smhl0"),v(t,"class","node svelte-16smhl0"),v(P,"class","connector svelte-16smhl0"),x(P,"fade-bottom",f[4]===f[1].length-1)},m(u,d){w(u,e,d),w(u,a,d),w(u,t,d),m(t,o),m(o,n),m(n,c),m(o,s),m(o,r),m(r,h),m(t,I),m(t,y),m(y,$),m(t,S),m(t,q),m(t,B),m(t,R);for(let b=0;b<D.length;b+=1)D[b].m(R,null);m(t,Y),T&&T.m(t,null),m(t,K),E&&E.m(t,null),w(u,Q,d),w(u,P,d),G=!0},p(u,d){if((!G||d&2)&&l!==(l=u[2].duration+"")&&X(c,l),(!G||d&2)&&i!==(i=u[2].institution+"")&&X(h,i),(!G||d&2)&&N!==(N=u[2].title+"")&&X($,N),d&2){j=u[2].description;let b;for(b=0;b<j.length;b+=1){const z=de(u,j,b);D[b]?D[b].p(z,d):(D[b]=ve(z),D[b].c(),D[b].m(R,null))}for(;b<D.length;b+=1)D[b].d(1);D.length=j.length}u[2].images?T?T.p(u,d):(T=ge(u),T.c(),T.m(t,K)):T&&(T.d(1),T=null),u[2].skills?E?(E.p(u,d),d&2&&V(E,1)):(E=$e(u),E.c(),V(E,1),E.m(t,null)):E&&(ne(),C(E,1,1,()=>{E=null}),ae()),(!G||d&2)&&x(P,"fade-bottom",u[4]===u[1].length-1)},i(u){G||(V(E),G=!0)},o(u){C(E),G=!1},d(u){u&&_(e),u&&_(a),u&&_(t),J(D,u),T&&T.d(),E&&E.d(),u&&_(Q),u&&_(P)}}}function ye(f){let e,a,t,o,n,l=f[1],c=[];for(let r=0;r<l.length;r+=1)c[r]=ke(ue(f,l,r));const s=r=>C(c[r],1,1,()=>{c[r]=null});return{c(){e=g("section"),a=g("h2"),t=L(f[0]),o=A();for(let r=0;r<c.length;r+=1)c[r].c();this.h()},l(r){e=p(r,"SECTION",{class:!0});var i=k(e);a=p(i,"H2",{class:!0});var h=k(a);t=O(h,f[0]),h.forEach(_),o=H(i);for(let I=0;I<c.length;I+=1)c[I].l(i);i.forEach(_),this.h()},h(){v(a,"class","svelte-16smhl0"),v(e,"class","svelte-16smhl0")},m(r,i){w(r,e,i),m(e,a),m(a,t),m(e,o);for(let h=0;h<c.length;h+=1)c[h].m(e,null);n=!0},p(r,[i]){if((!n||i&1)&&X(t,r[0]),i&2){l=r[1];let h;for(h=0;h<l.length;h+=1){const I=ue(r,l,h);c[h]?(c[h].p(I,i),V(c[h],1)):(c[h]=ke(I),c[h].c(),V(c[h],1),c[h].m(e,null))}for(ne(),h=l.length;h<c.length;h+=1)s(h);ae()}},i(r){if(!n){for(let i=0;i<l.length;i+=1)V(c[i]);n=!0}},o(r){c=c.filter(Boolean);for(let i=0;i<c.length;i+=1)C(c[i]);n=!1},d(r){r&&_(e),J(c,r)}}}function qe(f,e,a){let{title:t}=e,{timelineArray:o=[]}=e;return f.$$set=n=>{"title"in n&&a(0,t=n.title),"timelineArray"in n&&a(1,o=n.timelineArray)},[t,o]}class Ee extends te{constructor(e){super(),le(this,e,qe,ye,se,{title:0,timelineArray:1})}}function Ce(f){let e;return{c(){e=L("Download resume")},l(a){e=O(a,"Download resume")},m(a,t){w(a,e,t)},d(a){a&&_(e)}}}function Ne(f){let e,a,t,o,n,l,c,s,r,i,h,I,y,N;return a=new Ve({props:{data:f[0]}}),r=new He({props:{goto:`/${f[3].filename}`,download:f[3].downloadName,icon:"download",big:!0,$$slots:{default:[Ce]},$$scope:{ctx:f}}}),h=new Ee({props:{timelineArray:f[2],title:"Experience"}}),y=new Ee({props:{timelineArray:f[1],title:"Education"}}),{c(){e=g("article"),F(a.$$.fragment),t=A(),o=g("section"),n=g("h2"),l=L("Resume"),c=A(),s=g("div"),F(r.$$.fragment),i=A(),F(h.$$.fragment),I=A(),F(y.$$.fragment),this.h()},l($){e=p($,"ARTICLE",{});var S=k(e);M(a.$$.fragment,S),t=H(S),o=p(S,"SECTION",{class:!0});var q=k(o);n=p(q,"H2",{class:!0});var B=k(n);l=O(B,"Resume"),B.forEach(_),c=H(q),s=p(q,"DIV",{class:!0});var R=k(s);M(r.$$.fragment,R),R.forEach(_),q.forEach(_),i=H(S),M(h.$$.fragment,S),I=H(S),M(y.$$.fragment,S),S.forEach(_),this.h()},h(){v(n,"class","svelte-1rd3q5a"),v(s,"class","download-button svelte-1rd3q5a"),v(o,"class","svelte-1rd3q5a")},m($,S){w($,e,S),U(a,e,null),m(e,t),m(e,o),m(o,n),m(n,l),m(o,c),m(o,s),U(r,s,null),m(e,i),U(h,e,null),m(e,I),U(y,e,null),N=!0},p($,[S]){const q={};S&1&&(q.data=$[0]),a.$set(q);const B={};S&16&&(B.$$scope={dirty:S,ctx:$}),r.$set(B)},i($){N||(V(a.$$.fragment,$),V(r.$$.fragment,$),V(h.$$.fragment,$),V(y.$$.fragment,$),N=!0)},o($){C(a.$$.fragment,$),C(r.$$.fragment,$),C(h.$$.fragment,$),C(y.$$.fragment,$),N=!1},d($){$&&_(e),W(a),W(r),W(h),W(y)}}}function Re(f,e,a){let{data:t}=e;const{educationHistory:o,jobHistory:n}=Ie,{resume:l}=we;return f.$$set=c=>{"data"in c&&a(0,t=c.data)},[t,o,n,l]}class Pe extends te{constructor(e){super(),le(this,e,Re,Ne,se,{data:0})}}export{Pe as default};
