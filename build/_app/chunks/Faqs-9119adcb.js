import{S as a,i as e,s as t,e as s,t as n,k as r,D as o,c as l,a as i,g as c,d as h,n as u,b as f,L as d,f as g,E as v,J as m,h as w,F as p,j as y,m as b,o as q,v as E,r as $,w as I,B as x,u as D,M as A}from"./vendor-dab8e6e1.js";function F(a){let e,t,y,b,q,E,$,I,x,D,A,F,V,k,z=a[0].question+"",B=a[0].answer+"";return{c(){e=s("div"),t=s("div"),y=s("p"),b=n(z),q=r(),E=s("div"),$=o("svg"),I=o("path"),x=r(),D=s("div"),A=s("p"),F=n(B),this.h()},l(a){e=l(a,"DIV",{class:!0});var s=i(e);t=l(s,"DIV",{class:!0});var n=i(t);y=l(n,"P",{});var r=i(y);b=c(r,z),r.forEach(h),q=u(n),E=l(n,"DIV",{class:!0});var o=i(E);$=l(o,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,class:!0,viewBox:!0},1);var f=i($);I=l(f,"path",{"fill-rule":!0,d:!0},1),i(I).forEach(h),f.forEach(h),o.forEach(h),n.forEach(h),x=u(s),D=l(s,"DIV",{class:!0});var d=i(D);A=l(d,"P",{class:!0});var g=i(A);F=c(g,B),g.forEach(h),d.forEach(h),s.forEach(h),this.h()},h(){f(I,"fill-rule","evenodd"),f(I,"d","M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"),f($,"xmlns","http://www.w3.org/2000/svg"),f($,"width","16"),f($,"height","16"),f($,"fill","currentColor"),f($,"class","bi bi-chevron-right"),f($,"viewBox","0 0 16 16"),f(E,"class","indicator transform transition-rotate origin-center duration-150 ease-in-out rotate absolute right-3 top-2/4 -translate-y-2/4"),d(E,"rotate-90",a[1]),f(t,"class","question z-20 text-gray-100 bg-secondary-800 p-4 cursor-pointer after:empty-content relative rounded"),f(A,"class","z-10"),f(D,"class","answer z-10 overflow-hidden transition-all transform-gpu duration-150 ease-in-out svelte-183qm3u"),d(D,"answer--hidden",!a[1]),d(D,"answer--active",a[1]),f(e,"class","faq mb-4 transition-all duration-150 ease-in-out bg-gray-200 rounded"),d(e,"active",a[1])},m(s,n){g(s,e,n),v(e,t),v(t,y),v(y,b),v(t,q),v(t,E),v(E,$),v($,I),v(e,x),v(e,D),v(D,A),v(A,F),V||(k=m(t,"click",a[2]),V=!0)},p(a,[t]){1&t&&z!==(z=a[0].question+"")&&w(b,z),2&t&&d(E,"rotate-90",a[1]),1&t&&B!==(B=a[0].answer+"")&&w(F,B),2&t&&d(D,"answer--hidden",!a[1]),2&t&&d(D,"answer--active",a[1]),2&t&&d(e,"active",a[1])},i:p,o:p,d(a){a&&h(e),V=!1,k()}}}function V(a,e,t){let{faq:s}=e,n=!1;return a.$$set=a=>{"faq"in a&&t(0,s=a.faq)},[s,n,function(){t(1,n=!n)}]}class k extends a{constructor(a){super(),e(this,a,V,F,t,{faq:0})}}function z(a,e,t){const s=a.slice();return s[1]=e[t],s}function B(a){let e,t;return{c(){e=s("p"),t=n("No FAQs Available!")},l(a){e=l(a,"P",{});var s=i(e);t=c(s,"No FAQs Available!"),s.forEach(h)},m(a,s){g(a,e,s),v(e,t)},d(a){a&&h(e)}}}function L(a){let e,t;return e=new k({props:{faq:a[1]}}),{c(){y(e.$$.fragment)},l(a){b(e.$$.fragment,a)},m(a,s){q(e,a,s),t=!0},p:p,i(a){t||(E(e.$$.fragment,a),t=!0)},o(a){$(e.$$.fragment,a),t=!1},d(a){I(e,a)}}}function N(a){let e,t,n=a[0],r=[];for(let s=0;s<n.length;s+=1)r[s]=L(z(a,n,s));const o=a=>$(r[a],1,1,(()=>{r[a]=null}));let c=null;return n.length||(c=B()),{c(){e=s("div");for(let a=0;a<r.length;a+=1)r[a].c();c&&c.c(),this.h()},l(a){e=l(a,"DIV",{class:!0});var t=i(e);for(let e=0;e<r.length;e+=1)r[e].l(t);c&&c.l(t),t.forEach(h),this.h()},h(){f(e,"class","faqs block")},m(a,s){g(a,e,s);for(let t=0;t<r.length;t+=1)r[t].m(e,null);c&&c.m(e,null),t=!0},p(a,[t]){if(1&t){let s;for(n=a[0],s=0;s<n.length;s+=1){const o=z(a,n,s);r[s]?(r[s].p(o,t),E(r[s],1)):(r[s]=L(o),r[s].c(),E(r[s],1),r[s].m(e,null))}for(x(),s=n.length;s<r.length;s+=1)o(s);D(),n.length?c&&(c.d(1),c=null):c||(c=B(),c.c(),c.m(e,null))}},i(a){if(!t){for(let a=0;a<n.length;a+=1)E(r[a]);t=!0}},o(a){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)$(r[e]);t=!1},d(a){a&&h(e),A(r,a),c&&c.d()}}}function P(a){return[[{question:"What is the difference between a misdemeanor and a felony?",answer:"About 10 years"},{question:"Do I have to testify in court?",answer:"No you do not, if doing so will disadvantage you."},{question:"I have been served with a search warrant, what should I do?",answer:"You must immediately comply with the warrant, but also call legal counsel immediately."},{question:"How do I establish a good defense strategy for my case?",answer:"Find yourself a good attorney like KraussLaw."}]]}class j extends a{constructor(a){super(),e(this,a,P,N,t,{})}}export{j as F};
