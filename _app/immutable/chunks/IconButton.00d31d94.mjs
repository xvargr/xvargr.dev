import{S as q,i as D,s as L,D as S,E as B,m as v,h as d,n as f,b as I,F as C,C as V,M as J,k as A,a as G,l as E,c as T,H as y,O as M,g as k,v as N,d as w,f as z,P as K,Q as W,R as X,U as Y,_ as Z,q as p,r as x,u as $,y as F,z as H,A as O,B as Q}from"./index.84184d6e.mjs";import{G as ee}from"./GithubSVG.a6c6276f.mjs";function le(s){let e,t;return{c(){e=S("svg"),t=S("path"),this.h()},l(l){e=B(l,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var r=v(e);t=B(r,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),v(t).forEach(d),r.forEach(d),this.h()},h(){f(t,"stroke-linecap","round"),f(t,"stroke-linejoin","round"),f(t,"d","M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"),f(e,"xmlns","http://www.w3.org/2000/svg"),f(e,"fill","none"),f(e,"viewBox","0 0 24 24"),f(e,"stroke-width","1.5"),f(e,"stroke","currentColor"),f(e,"class","w-6 h-6")},m(l,r){I(l,e,r),C(e,t)},p:V,i:V,o:V,d(l){l&&d(e)}}}class te extends q{constructor(e){super(),D(this,e,null,le,L,{})}}function P(s){let e,t;return{c(){e=A("span"),t=p(s[4]),this.h()},l(l){e=E(l,"SPAN",{class:!0});var r=v(e);t=x(r,s[4]),r.forEach(d),this.h()},h(){f(e,"class","status svelte-e8lmyg"),y(e,"infoVisible",s[8])},m(l,r){I(l,e,r),C(e,t)},p(l,r){r&16&&$(t,l[4]),r&256&&y(e,"infoVisible",l[8])},d(l){l&&d(e)}}}function j(s){let e,t,l,r,g;const c=[oe,ne],m=[];function b(n,o){return n[2]==="github"?0:n[2]==="download"?1:-1}return~(t=b(s))&&(l=m[t]=c[t](s)),{c(){e=A("span"),l&&l.c(),this.h()},l(n){e=E(n,"SPAN",{class:!0,style:!0});var o=v(e);l&&l.l(o),o.forEach(d),this.h()},h(){f(e,"class","icon svelte-e8lmyg"),f(e,"style",r=`margin-right:${s[9].default?"":"0"};`)},m(n,o){I(n,e,o),~t&&m[t].m(e,null),g=!0},p(n,o){let h=t;t=b(n),t!==h&&(l&&(N(),w(m[h],1,1,()=>{m[h]=null}),z()),~t?(l=m[t],l||(l=m[t]=c[t](n),l.c()),k(l,1),l.m(e,null)):l=null),(!g||o&512&&r!==(r=`margin-right:${n[9].default?"":"0"};`))&&f(e,"style",r)},i(n){g||(k(l),g=!0)},o(n){w(l),g=!1},d(n){n&&d(e),~t&&m[t].d()}}}function ne(s){let e,t;return e=new te({}),{c(){F(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,r){O(e,l,r),t=!0},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){Q(e,l)}}}function oe(s){let e,t;return e=new ee({}),{c(){F(e.$$.fragment)},l(l){H(e.$$.fragment,l)},m(l,r){O(e,l,r),t=!0},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){w(e.$$.fragment,l),t=!1},d(l){Q(e,l)}}}function se(s){let e,t,l,r,g,c,m,b,n=s[4]&&P(s),o=s[2]&&j(s);const h=s[11].default,_=J(h,s,s[10],null);return{c(){e=A("a"),n&&n.c(),t=G(),o&&o.c(),l=G(),_&&_.c(),this.h()},l(a){e=E(a,"A",{href:!0,target:!0,rel:!0,style:!0,download:!0,class:!0});var i=v(e);n&&n.l(i),t=T(i),o&&o.l(i),l=T(i),_&&_.l(i),i.forEach(d),this.h()},h(){f(e,"href",s[7]),f(e,"target",r=s[5]?"_blank":"_self"),f(e,"rel","noreferrer"),f(e,"style",g=`backgroundColor:${s[0]}; color:${s[1]}`),f(e,"download",s[3]),f(e,"class","svelte-e8lmyg"),y(e,"big",s[6])},m(a,i){I(a,e,i),n&&n.m(e,null),C(e,t),o&&o.m(e,null),C(e,l),_&&_.m(e,null),c=!0,m||(b=[M(e,"mouseenter",s[12]),M(e,"mouseleave",s[13])],m=!0)},p(a,[i]){a[4]?n?n.p(a,i):(n=P(a),n.c(),n.m(e,t)):n&&(n.d(1),n=null),a[2]?o?(o.p(a,i),i&4&&k(o,1)):(o=j(a),o.c(),k(o,1),o.m(e,l)):o&&(N(),w(o,1,1,()=>{o=null}),z()),_&&_.p&&(!c||i&1024)&&K(_,h,a,a[10],c?X(h,a[10],i,null):W(a[10]),null),(!c||i&128)&&f(e,"href",a[7]),(!c||i&32&&r!==(r=a[5]?"_blank":"_self"))&&f(e,"target",r),(!c||i&3&&g!==(g=`backgroundColor:${a[0]}; color:${a[1]}`))&&f(e,"style",g),(!c||i&8)&&f(e,"download",a[3]),(!c||i&64)&&y(e,"big",a[6])},i(a){c||(k(o),k(_,a),c=!0)},o(a){w(o),w(_,a),c=!1},d(a){a&&d(e),n&&n.d(),o&&o.d(),_&&_.d(a),m=!1,Y(b)}}}function ae(s,e,t){let{$$slots:l={},$$scope:r}=e;const g=Z(l);let{backgroundColor:c=null}=e,{textColor:m=null}=e,{icon:b=null}=e,{download:n=null}=e,{showInfo:o=!1}=e,{newTab:h=!1}=e,{big:_=!1}=e,{goto:a}=e,i=!1;const R=()=>t(8,i=!0),U=()=>t(8,i=!1);return s.$$set=u=>{"backgroundColor"in u&&t(0,c=u.backgroundColor),"textColor"in u&&t(1,m=u.textColor),"icon"in u&&t(2,b=u.icon),"download"in u&&t(3,n=u.download),"showInfo"in u&&t(4,o=u.showInfo),"newTab"in u&&t(5,h=u.newTab),"big"in u&&t(6,_=u.big),"goto"in u&&t(7,a=u.goto),"$$scope"in u&&t(10,r=u.$$scope)},[c,m,b,n,o,h,_,a,i,g,r,l,R,U]}class fe extends q{constructor(e){super(),D(this,e,ae,se,L,{backgroundColor:0,textColor:1,icon:2,download:3,showInfo:4,newTab:5,big:6,goto:7})}}export{fe as I};