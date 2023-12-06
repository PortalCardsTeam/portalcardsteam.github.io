var C0=Object.defineProperty;var M0=(s,t,c)=>t in s?C0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):s[t]=c;var y0=(s,t,c)=>(M0(s,typeof t!="symbol"?t+"":t,c),c);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const f of a)if(f.type==="childList")for(const l of f.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function c(a){const f={};return a.integrity&&(f.integrity=a.integrity),a.referrerPolicy&&(f.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?f.credentials="include":a.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function n(a){if(a.ep)return;a.ep=!0;const f=c(a);fetch(a.href,f)}})();function U(){}function t0(s,t){for(const c in t)s[c]=t[c];return s}function H0(s){return s()}function k0(){return Object.create(null)}function u0(s){s.forEach(H0)}function I0(s){return typeof s=="function"}function W(s,t){return s!=s?t==t:s!==t||s&&typeof s=="object"||typeof s=="function"}function F0(s){return Object.keys(s).length===0}function s0(s){const t={};for(const c in s)c[0]!=="$"&&(t[c]=s[c]);return t}function r(s,t){s.appendChild(t)}function D(s,t,c){s.insertBefore(t,c||null)}function V(s){s.parentNode&&s.parentNode.removeChild(s)}function K0(s,t){for(let c=0;c<s.length;c+=1)s[c]&&s[c].d(t)}function G(s){return document.createElement(s)}function i(s){return document.createElementNS("http://www.w3.org/2000/svg",s)}function l0(s){return document.createTextNode(s)}function r0(){return l0(" ")}function b0(){return l0("")}function i0(s,t,c,n){return s.addEventListener(t,c,n),()=>s.removeEventListener(t,c,n)}function e(s,t,c){c==null?s.removeAttribute(t):s.getAttribute(t)!==c&&s.setAttribute(t,c)}function q0(s){return Array.from(s.childNodes)}function L0(s,t){t=""+t,s.data!==t&&(s.data=t)}function o0(s,t,c){s.classList.toggle(t,!!c)}function S0(s,t){return new s(t)}let m0;function p0(s){m0=s}function z0(){if(!m0)throw new Error("Function called outside component initialization");return m0}function U0(s){z0().$$.on_mount.push(s)}const h0=[],O0=[];let f0=[];const E0=[],V0=Promise.resolve();let $0=!1;function D0(){$0||($0=!0,V0.then(R0))}function Z0(s){f0.push(s)}const w0=new Set;let a0=0;function R0(){if(a0!==0)return;const s=m0;do{try{for(;a0<h0.length;){const t=h0[a0];a0++,p0(t),G0(t.$$)}}catch(t){throw h0.length=0,a0=0,t}for(p0(null),h0.length=0,a0=0;O0.length;)O0.pop()();for(let t=0;t<f0.length;t+=1){const c=f0[t];w0.has(c)||(w0.add(c),c())}f0.length=0}while(h0.length);for(;E0.length;)E0.pop()();$0=!1,w0.clear(),p0(s)}function G0(s){if(s.fragment!==null){s.update(),u0(s.before_update);const t=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,t),s.after_update.forEach(Z0)}}function J0(s){const t=[],c=[];f0.forEach(n=>s.indexOf(n)===-1?t.push(n):c.push(n)),c.forEach(n=>n()),f0=t}const _0=new Set;let n0;function g0(){n0={r:0,c:[],p:n0}}function v0(){n0.r||u0(n0.c),n0=n0.p}function Z(s,t){s&&s.i&&(_0.delete(s),s.i(t))}function H(s,t,c,n){if(s&&s.o){if(_0.has(s))return;_0.add(s),n0.c.push(()=>{_0.delete(s),n&&(c&&s.d(1),n())}),s.o(t)}else n&&n()}function A0(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function e0(s){s&&s.c()}function J(s,t,c){const{fragment:n,after_update:a}=s.$$;n&&n.m(t,c),Z0(()=>{const f=s.$$.on_mount.map(H0).filter(I0);s.$$.on_destroy?s.$$.on_destroy.push(...f):u0(f),s.$$.on_mount=[]}),a.forEach(Z0)}function Q(s,t){const c=s.$$;c.fragment!==null&&(J0(c.after_update),u0(c.on_destroy),c.fragment&&c.fragment.d(t),c.on_destroy=c.fragment=null,c.ctx=[])}function Q0(s,t){s.$$.dirty[0]===-1&&(h0.push(s),D0(),s.$$.dirty.fill(0)),s.$$.dirty[t/31|0]|=1<<t%31}function X(s,t,c,n,a,f,l=null,o=[-1]){const h=m0;p0(s);const u=s.$$={fragment:null,ctx:[],props:f,update:U,not_equal:a,bound:k0(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:k0(),dirty:o,skip_bound:!1,root:t.target||h.$$.root};l&&l(u.root);let p=!1;if(u.ctx=c?c(s,t.props||{},(d,_,...I)=>{const R=I.length?I[0]:_;return u.ctx&&a(u.ctx[d],u.ctx[d]=R)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](R),p&&Q0(s,d)),_}):[],u.update(),p=!0,u0(u.before_update),u.fragment=n?n(u.ctx):!1,t.target){if(t.hydrate){const d=q0(t.target);u.fragment&&u.fragment.l(d),d.forEach(V)}else u.fragment&&u.fragment.c();t.intro&&Z(s.$$.fragment),J(s,t.target,t.anchor),R0()}p0(h)}class Y{constructor(){y0(this,"$$");y0(this,"$$set")}$destroy(){Q(this,1),this.$destroy=U}$on(t,c){if(!I0(c))return U;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(c),()=>{const a=n.indexOf(c);a!==-1&&n.splice(a,1)}}$set(t){this.$$set&&!F0(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const W0="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(W0);function X0(s){let t,c,n,a,f,l,o,h,u,p,d,_,I,R,K,M,x,b,B,j,A,T,z,k,L,S,v,O,y,$,g,w,C,E,F,m,N,q,P,c0;return{c(){t=i("svg"),c=i("defs"),n=i("style"),a=l0(`.exp-1, .exp-2, .exp-3, .exp-4, .exp-5 {
        stroke-miterlimit: 10;
        stroke-width: .25px;
      }

      .exp-1, .exp-3 {
        stroke: #221f20;
      }

      .exp-1, .exp-6 {
        fill: #eeeae1;
      }

      .exp-2 {
        fill: #fadfa6;
      }

      .exp-2, .exp-5 {
        stroke: #191b1e;
      }

      .exp-3, .exp-7 {
        fill: #e07758;
      }

      .exp-8, .exp-9, .exp-7, .exp-6 {
        stroke-width: 0px;
      }

      .exp-9 {
        fill: #221f20;
      }

      .exp-4 {
        stroke: #e07758;
      }

      .exp-4, .exp-5 {
        fill: none;
      }
      
    `),f=i("g"),l=i("rect"),o=i("rect"),h=i("g"),u=i("path"),p=i("path"),d=i("path"),_=i("path"),I=i("path"),R=i("path"),K=i("path"),M=i("path"),x=i("path"),b=i("path"),B=i("g"),j=i("path"),A=i("path"),T=i("g"),z=i("path"),k=i("path"),L=i("path"),S=i("path"),v=i("path"),O=i("g"),y=i("g"),$=i("rect"),g=i("rect"),w=i("rect"),C=i("circle"),E=i("rect"),F=i("circle"),m=i("g"),N=i("path"),q=i("path"),P=i("rect"),e(l,"id","Outer"),e(l,"class","exp-7"),e(l,"width","96.66"),e(l,"height","36.73"),e(l,"rx","2"),e(l,"ry","2"),e(o,"id","Inner"),e(o,"class","exp-6"),e(o,"x","2.18"),e(o,"y","1.64"),e(o,"width","92.3"),e(o,"height","33.26"),e(o,"rx","8"),e(o,"ry","8"),e(u,"class","exp-4"),e(u,"d","m20.75,21.47h-5.86c-.1,0-.18-.08-.18-.18v-5.86c0-.1.08-.18.18-.18h5.86c.1,0,.18.08.18.18s-.08.18-.18.18h-5.68v2.57h5.68c.1,0,.18.08.18.18s-.08.18-.18.18h-5.68v2.57h5.68c.1,0,.18.08.18.18s-.08.18-.18.18h0Z"),e(p,"class","exp-4"),e(p,"d","m27.18,21.47s-.09-.02-.13-.05l-2.8-2.8-2.8,2.8c-.07.07-.18.07-.25,0s-.07-.18,0-.25l2.8-2.8-2.8-2.8c-.07-.07-.07-.18,0-.25.07-.07.18-.07.25,0l2.8,2.8,2.8-2.8c.07-.07.18-.07.25,0,.07.07.07.18,0,.25l-2.8,2.8,2.8,2.8c.07.07.07.18,0,.25-.04.04-.08.05-.13.05h0Z"),e(d,"class","exp-4"),e(d,"d","m28.06,21.47c-.1,0-.18-.08-.18-.18v-5.86c0-.1.08-.18.18-.18h5.86c.1,0,.18.08.18.18v2.92c0,.1-.08.18-.18.18h-5.68v2.76c0,.1-.08.18-.18.18Zm.18-3.29h5.5v-2.56h-5.5v2.56Z"),e(_,"class","exp-4"),e(_,"d","m40.86,21.47h-5.86c-.1,0-.18-.08-.18-.18v-5.86c0-.1.08-.18.18-.18h5.86c.1,0,.18.08.18.18s-.08.18-.18.18h-5.68v2.57h5.68c.1,0,.18.08.18.18s-.08.18-.18.18h-5.68v2.57h5.68c.1,0,.18.08.18.18s-.08.18-.18.18h0Z"),e(I,"class","exp-4"),e(I,"d","m47.71,21.47s-.09-.02-.13-.05l-2.84-2.88h-2.71v2.75c0,.1-.08.18-.18.18s-.18-.08-.18-.18v-5.86c0-.1.08-.18.18-.18h5.86s.09.02.13.05.05.08.05.13v2.93c0,.1-.08.18-.18.18h-2.46l2.59,2.62c.07.07.07.18,0,.25-.04.04-.08.05-.13.05h0Zm-5.68-3.29h5.5v-2.57s-5.5,0-5.5,0v2.57Z"),e(R,"class","exp-4"),e(R,"d","m54.29,21.47h-5.86c-.1,0-.18-.08-.18-.18s.08-.18.18-.18h2.72l.03-5.5h-2.75c-.1,0-.18-.08-.18-.18s.08-.18.18-.18h5.86c.1,0,.18.08.18.18s-.08.18-.18.18h-2.75l-.03,5.5h2.78c.1,0,.18.08.18.18s-.08.18-.18.18Z"),e(K,"class","exp-4"),e(K,"d","m61.03,21.47h-5.86c-.1,0-.18-.08-.18-.18v-5.86c0-.1.08-.18.18-.18h5.86c.1,0,.18.08.18.18s-.08.18-.18.18h-5.68v2.57h5.68c.1,0,.18.08.18.18s-.08.18-.18.18h-5.68v2.57h5.68c.1,0,.18.08.18.18s-.08.18-.18.18h0Z"),e(M,"class","exp-4"),e(M,"d","m67.88,21.47s-.09-.02-.13-.05l-5.55-5.55v5.43c0,.1-.08.18-.18.18s-.18-.08-.18-.18v-5.86c0-.07.04-.14.11-.17.07-.03.14-.01.19.04l.03.03,5.53,5.53v-5.43c0-.1.08-.18.18-.18s.18.08.18.18v5.86c0,.07-.04.14-.11.17-.02,0-.04.01-.07.01h0Z"),e(x,"class","exp-4"),e(x,"d","m75.04,21.47h-5.86c-.1,0-.18-.08-.18-.18v-5.86c0-.1.08-.18.18-.18h5.86c.1,0,.18.08.18.18s-.08.18-.18.18h-5.68v5.5h5.68c.1,0,.18.08.18.18s-.08.18-.18.18Z"),e(b,"class","exp-4"),e(b,"d","m81.78,21.47h-5.86c-.1,0-.18-.08-.18-.18v-5.86c0-.1.08-.18.18-.18h5.86c.1,0,.18.08.18.18s-.08.18-.18.18h-5.68v2.57h5.68c.1,0,.18.08.18.18s-.08.18-.18.18h-5.68v2.57h5.68c.1,0,.18.08.18.18s-.08.18-.18.18h0Z"),e(j,"id","Star2"),e(j,"class","exp-1"),e(j,"d","m2.18,33.5h0c.02.82.7,1.47,1.54,1.49h0,0c-.84.02-1.52.68-1.54,1.49h0s0,0,0,0c-.02-.82-.7-1.47-1.54-1.49h0,0c.84-.02,1.52-.68,1.54-1.49h0Z"),e(A,"id","Star1"),e(A,"class","exp-1"),e(A,"d","m94.48.24h0c.02.82.7,1.47,1.54,1.49h0,0c-.84.02-1.52.68-1.54,1.49h0s0,0,0,0c-.02-.82-.7-1.47-1.54-1.49h0,0c.84-.02,1.52-.68,1.54-1.49h0Z"),e(B,"id","Stars"),e(z,"class","exp-5"),e(z,"d","m8.49,21.94s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.01h0s0,0,0-.01c0,0,0,0,0,0,0,0,0,0,0,0l.89-.89h-.87s-.03-.01-.03-.03.01-.03.03-.03h.94s0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0h0s0,0,0,.01c0,0,0,0,0,0l-.89.89h.87s.03.01.03.03-.01.03-.03.03h-.94Z"),e(k,"class","exp-5"),e(k,"d","m7.53,19.78h0s-.01,0-.02,0-.01,0-.02-.01h0s0-.01-.01-.02c0,0,0-.01,0-.02h0s0-.02,0-.02c0,0,0-.01.01-.02h0s1.77-1.77,1.77-1.77h-1.72s-.06-.03-.06-.06.03-.06.06-.06h1.86s.01,0,.02,0c0,0,.01,0,.02.01s0,.01.01.02c0,0,0,.01,0,.02h0s0,.02,0,.02c0,0,0,.01-.01.02l-1.77,1.77h1.72s.06.03.06.06-.03.06-.06.06h-1.86Z"),e(L,"class","exp-5"),e(L,"d","m6.56,15.94h0s-.02,0-.03,0c0,0-.02,0-.03-.02,0,0,0,0,0,0,0,0-.01-.02-.02-.03,0,0,0-.02,0-.03h0s0-.03,0-.04c0,0,0-.02.02-.03h0s2.65-2.65,2.65-2.65h-2.59s-.09-.04-.09-.09.04-.09.09-.09h2.8s.02,0,.03,0c.01,0,.02.01.03.02s.01.02.02.03c0,0,0,.02,0,.03h0s0,.03,0,.04c0,.01-.01.02-.02.03l-2.65,2.65h2.59s.09.04.09.09-.04.09-.09.09h-2.8Z"),e(S,"class","exp-5"),e(S,"d","m5.6,10.42h0s-.03,0-.04,0c-.01,0-.02-.01-.03-.02,0,0,0,0,0,0,0-.01-.02-.02-.02-.03,0-.01,0-.03,0-.04h0s0-.03,0-.05c0-.01.01-.02.02-.03,0,0,0,0,0,0l3.53-3.53h-3.45c-.06,0-.11-.05-.11-.11s.05-.11.11-.11h3.73s.03,0,.04,0c.01,0,.03.01.04.03.01.01.02.02.02.04,0,.01,0,.02,0,.04h0s0,.04,0,.05c0,.01-.01.03-.02.04l-3.53,3.53h3.45c.06,0,.11.05.11.11s-.05.11-.11.11h-3.72Z"),e(v,"class","exp-5"),e(v,"d","m4.63,5.11h0s-.03,0-.05-.01c-.02,0-.03-.02-.04-.03h0s-.02-.03-.03-.05c0-.02-.01-.03-.01-.05h0s0-.04.01-.06c0-.02.02-.03.03-.04,0,0,0,0,0,0L8.95.45h-4.32c-.08,0-.14-.06-.14-.14s.06-.14.14-.14h4.67s.03,0,.05.01c.02,0,.03.02.05.03.01.01.02.03.03.05,0,.01,0,.03.01.05h0s0,.04-.01.06c0,.02-.02.03-.03.05l-4.42,4.42h4.32c.08,0,.14.06.14.14s-.06.14-.14.14h-4.66Z"),e(T,"id","Zees"),e($,"id","RightLeg"),e($,"class","exp-3"),e($,"x","9.25"),e($,"y","30.72"),e($,"width","1.99"),e($,"height","4.14"),e($,"rx",".99"),e($,"ry",".99"),e(g,"id","LeftLeg"),e(g,"class","exp-3"),e(g,"x","12.03"),e(g,"y","30.72"),e(g,"width","1.99"),e(g,"height","4.14"),e(g,"rx",".99"),e(g,"ry",".99"),e(w,"id","RightArm"),e(w,"class","exp-3"),e(w,"x","5.58"),e(w,"y","28.51"),e(w,"width","5.77"),e(w,"height","1.99"),e(w,"rx",".99"),e(w,"ry",".99"),e(w,"transform","translate(-22.08 26.44) rotate(-68.26)"),e(C,"id","Body"),e(C,"class","exp-3"),e(C,"cx","12.03"),e(C,"cy","28.75"),e(C,"r","4.07"),e(E,"id","LeftArm"),e(E,"class","exp-3"),e(E,"x","13.57"),e(E,"y","27.05"),e(E,"width","1.99"),e(E,"height","5.77"),e(E,"rx",".99"),e(E,"ry",".99"),e(E,"transform","translate(-4.61 2.72) rotate(-9.23)"),e(F,"id","Head"),e(F,"class","exp-3"),e(F,"cx","9.76"),e(F,"cy","24.83"),e(F,"r","2.34"),e(O,"id","blob"),e(N,"class","exp-2"),e(N,"d","m10.01,21.13c-.12-.47-.55-.76-.94-.66-.25.07-.43.28-.5.54-.19-.2-.45-.29-.7-.22-.4.1-.62.57-.5,1.04,0,.03.02.05.03.08h0s.23.89.23.89l2.64-.7-.23-.89h0s0-.06-.02-.08Z"),e(q,"class","exp-8"),e(q,"d","m7.58,24.03c.08-.22.19-.43.33-.62l-.02-.07,2.79-.74.02.09h.02c.17.07.33.17.47.29.38-.25.6-.5.55-.7-.11-.43-1.4-.47-2.86-.08-1.47.39-2.56,1.05-2.45,1.49.06.24.51.35,1.15.34Z"),e(m,"id","Hat"),e(P,"class","exp-9"),e(P,"x","6.53"),e(P,"y","23.74"),e(P,"width","6.07"),e(P,"height","1.06"),e(P,"rx",".2"),e(P,"ry",".2"),e(P,"transform","translate(-3.77 1.85) rotate(-9.23)"),e(f,"id","Layer_1-2"),e(f,"data-name","Layer 1"),e(t,"class",c0=s[0].class),e(t,"id","Layer_2"),e(t,"data-name","Layer 2"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"viewBox","0 0 96.66 36.73")},m(d0,x0){D(d0,t,x0),r(t,c),r(c,n),r(n,a),r(t,f),r(f,l),r(f,o),r(f,h),r(h,u),r(h,p),r(h,d),r(h,_),r(h,I),r(h,R),r(h,K),r(h,M),r(h,x),r(h,b),r(f,B),r(B,j),r(B,A),r(f,T),r(T,z),r(T,k),r(T,L),r(T,S),r(T,v),r(f,O),r(O,y),r(y,$),r(y,g),r(y,w),r(y,C),r(y,E),r(y,F),r(f,m),r(m,N),r(m,q),r(f,P)},p(d0,[x0]){x0&1&&c0!==(c0=d0[0].class)&&e(t,"class",c0)},i:U,o:U,d(d0){d0&&V(t)}}}function Y0(s,t,c){return s.$$set=n=>{c(0,t=t0(t0({},t),s0(n)))},t=s0(t),[t]}class e1 extends Y{constructor(t){super(),X(this,t,Y0,X0,W,{})}}function t1(s){let t,c,n,a,f,l;return{c(){t=G("div"),c=G("a"),n=r0(),a=G("div"),a.innerHTML='<h1 class="content-text-title">experience</h1> <p class="content-text-paragraph">Thank you for testing Portal Cards.</p>',e(c,"href","https://portal-cards.circle.so/join?invitation_token=490322c75818db0e5ac839ae956a9e4fa220e59c-bb34c7dd-f9b6-4dcd-a776-b1f9ec73504e"),e(c,"target","_blank"),e(c,"rel","noopener noreferrer"),e(a,"class","content-text"),e(t,"id",f=s[0].id),e(t,"class",l=s[0].class)},m(o,h){D(o,t,h),r(t,c),r(t,n),r(t,a)},p(o,[h]){h&1&&f!==(f=o[0].id)&&e(t,"id",f),h&1&&l!==(l=o[0].class)&&e(t,"class",l)},i:U,o:U,d(o){o&&V(t)}}}function s1(s,t,c){return s.$$set=n=>{c(0,t=t0(t0({},t),s0(n)))},t=s0(t),[t]}class c1 extends Y{constructor(t){super(),X(this,t,s1,t1,W,{})}}class n1 extends Y{constructor(t){super(),X(this,t,null,null,W,{})}}class l1 extends Y{constructor(t){super(),X(this,t,null,null,W,{})}}function r1(s){let t,c,n;var a=s[0].html;function f(l,o){return{props:{id:l[1].id,class:l[1].class}}}return a&&(t=S0(a,f(s))),{c(){t&&e0(t.$$.fragment),c=b0()},m(l,o){t&&J(t,l,o),D(l,c,o),n=!0},p(l,o){if(a!==(a=l[0].html)){if(t){g0();const h=t;H(h.$$.fragment,1,0,()=>{Q(h,1)}),v0()}a?(t=S0(a,f(l)),e0(t.$$.fragment),Z(t.$$.fragment,1),J(t,c.parentNode,c)):t=null}else if(a){const h={};o&2&&(h.id=l[1].id),o&2&&(h.class=l[1].class),t.$set(h)}},i(l){n||(t&&Z(t.$$.fragment,l),n=!0)},o(l){t&&H(t.$$.fragment,l),n=!1},d(l){l&&V(c),t&&Q(t,l)}}}function a1(s){let t,c,n=s[0]&&r1(s);return{c(){n&&n.c(),t=b0()},m(a,f){n&&n.m(a,f),D(a,t,f),c=!0},p(a,[f]){a[0]&&n.p(a,f)},i(a){c||(Z(n),c=!0)},o(a){H(n),c=!1},d(a){a&&V(t),n&&n.d(a)}}}function h1(s,t,c){let{name:n}=t,f=[{name:"experience",html:c1},{name:"feedback",html:n1},{name:"tutorial",html:l1}].find(l=>l.name===n);return s.$$set=l=>{c(1,t=t0(t0({},t),s0(l))),"name"in l&&c(2,n=l.name)},t=s0(t),[f,t,n]}class T0 extends Y{constructor(t){super(),X(this,t,h1,a1,W,{name:2})}}function N0(s,t,c){const n=s.slice();return n[8]=t[c][0],n[9]=t[c][1],n}function P0(s){let t,c;return t=new T0({props:{name:"experience",id:"preview",class:"preview"}}),{c(){e0(t.$$.fragment)},m(n,a){J(t,n,a),c=!0},i(n){c||(Z(t.$$.fragment,n),c=!0)},o(n){H(t.$$.fragment,n),c=!1},d(n){Q(t,n)}}}function B0(s){let t,c,n=A0(Object.entries(s[2])),a=[];for(let l=0;l<n.length;l+=1)a[l]=j0(N0(s,n,l));const f=l=>H(a[l],1,1,()=>{a[l]=null});return{c(){t=G("div");for(let l=0;l<a.length;l+=1)a[l].c();e(t,"class","content")},m(l,o){D(l,t,o);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(t,null);c=!0},p(l,o){if(o&4){n=A0(Object.entries(l[2]));let h;for(h=0;h<n.length;h+=1){const u=N0(l,n,h);a[h]?(a[h].p(u,o),Z(a[h],1)):(a[h]=j0(u),a[h].c(),Z(a[h],1),a[h].m(t,null))}for(g0(),h=n.length;h<a.length;h+=1)f(h);v0()}},i(l){if(!c){for(let o=0;o<n.length;o+=1)Z(a[o]);c=!0}},o(l){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)H(a[o]);c=!1},d(l){l&&V(t),K0(a,l)}}}function i1(s){let t,c;return t=new T0({props:{name:"experience",id:s[8],class:"content-footer"}}),{c(){e0(t.$$.fragment)},m(n,a){J(t,n,a),c=!0},p(n,a){const f={};a&4&&(f.id=n[8]),t.$set(f)},i(n){c||(Z(t.$$.fragment,n),c=!0)},o(n){H(t.$$.fragment,n),c=!1},d(n){Q(t,n)}}}function f1(s){let t,c,n=s[8]+"",a,f,l,o=s[9]+"",h,u,p;return{c(){t=G("div"),c=G("h1"),a=l0(n),f=r0(),l=G("p"),h=l0(o),u=r0(),e(c,"class","content-text-title"),e(l,"class","content-text-paragraph"),e(t,"id",p=s[8]),e(t,"class","content-text")},m(d,_){D(d,t,_),r(t,c),r(c,a),r(t,f),r(t,l),r(l,h),r(t,u)},p(d,_){_&4&&n!==(n=d[8]+"")&&L0(a,n),_&4&&o!==(o=d[9]+"")&&L0(h,o),_&4&&p!==(p=d[8])&&e(t,"id",p)},i:U,o:U,d(d){d&&V(t)}}}function j0(s){let t,c,n,a;const f=[f1,i1],l=[];function o(h,u){return h[8]!="experience"?0:1}return t=o(s),c=l[t]=f[t](s),{c(){c.c(),n=b0()},m(h,u){l[t].m(h,u),D(h,n,u),a=!0},p(h,u){let p=t;t=o(h),t===p?l[t].p(h,u):(g0(),H(l[p],1,1,()=>{l[p]=null}),v0(),c=l[t],c?c.p(h,u):(c=l[t]=f[t](h),c.c()),Z(c,1),c.m(n.parentNode,n))},i(h){a||(Z(c),a=!0)},o(h){H(c),a=!1},d(h){h&&V(n),l[t].d(h)}}}function o1(s){let t,c,n,a,f,l,o;c=new e1({props:{class:"title"}});let h=s[1]&&!s[0]&&P0(),u=s[0]&&B0(s);return{c(){t=G("div"),e0(c.$$.fragment),n=r0(),h&&h.c(),a=r0(),u&&u.c(),e(t,"class","card"),o0(t,"clicked",s[0])},m(p,d){D(p,t,d),J(c,t,null),r(t,n),h&&h.m(t,null),r(t,a),u&&u.m(t,null),f=!0,l||(o=[i0(t,"click",s[3]),i0(t,"mouseenter",s[5]),i0(t,"mouseleave",s[6]),i0(t,"keydown",s[3])],l=!0)},p(p,[d]){p[1]&&!p[0]?h?d&3&&Z(h,1):(h=P0(),h.c(),Z(h,1),h.m(t,a)):h&&(g0(),H(h,1,1,()=>{h=null}),v0()),p[0]?u?(u.p(p,d),d&1&&Z(u,1)):(u=B0(p),u.c(),Z(u,1),u.m(t,null)):u&&(g0(),H(u,1,1,()=>{u=null}),v0()),(!f||d&1)&&o0(t,"clicked",p[0])},i(p){f||(Z(c.$$.fragment,p),Z(h),Z(u),f=!0)},o(p){H(c.$$.fragment,p),H(h),H(u),f=!1},d(p){p&&V(t),Q(c),h&&h.d(),u&&u.d(),l=!1,u0(o)}}}function u1(s){return Object.keys(s)}function d1(s,t,c){let n=!1,a=!1,f={exposition:"",evaluation:"",embryo:""};function l(){c(0,n=!n)}function o(d){c(1,a=d)}async function h(d){const _=`${d}.txt`,K=(await(await fetch(_)).text()).split(`
`),M=u1(f);for(let x=0;x<M.length;x++)c(2,f[M[x]]=K[x],f)}return U0(()=>{h("about")}),[n,a,f,l,o,()=>o(!0),()=>o(!1)]}class p1 extends Y{constructor(t){super(),X(this,t,d1,o1,W,{})}}function m1(s){let t,c,n,a,f,l,o,h,u,p,d,_,I,R,K,M,x,b,B,j,A,T,z,k,L,S,v,O,y,$,g,w,C,E,F,m,N,q;return{c(){t=i("svg"),c=i("defs"),n=i("style"),a=l0(`.fee-1, .fee-2, .fee-3, .fee-4, .fee-5 {
        stroke-miterlimit: 10;
        stroke-width: .25px;
      }

      .fee-1, .fee-3 {
        stroke: #231f20;
      }

      .fee-1, .fee-6 {
        fill: #eeeae0;
      }

      .fee-2 {
        fill: #ffdf9e;
      }

      .fee-2, .fee-4 {
        stroke: #181b1f;
      }

      .fee-3 {
        fill: #f47a56;
      }

      .fee-7, .fee-8, .fee-9, .fee-10, .fee-6 {
        stroke-width: 0px;
      }

      .fee-8 {
        fill: #214745;
      }

      .fee-9 {
        fill: #231f20;
      }

      .fee-10 {
        fill: #fff;
      }

      .fee-4, .fee-5 {
        fill: none;
      }

      .fee-5 {
        stroke: #214745;
      }
    `),f=i("g"),l=i("rect"),o=i("rect"),h=i("g"),u=i("path"),p=i("path"),d=i("path"),_=i("path"),I=i("path"),R=i("path"),K=i("path"),M=i("path"),x=i("path"),b=i("g"),B=i("path"),j=i("path"),A=i("g"),T=i("path"),z=i("path"),k=i("path"),L=i("path"),S=i("path"),v=i("g"),O=i("rect"),y=i("rect"),$=i("circle"),g=i("rect"),w=i("circle"),C=i("g"),E=i("path"),F=i("path"),m=i("rect"),N=i("rect"),e(l,"id","Outer"),e(l,"class","fee-8"),e(l,"width","96.66"),e(l,"height","36.73"),e(l,"rx","2"),e(l,"ry","2"),e(o,"id","Inner"),e(o,"class","fee-6"),e(o,"x","2.18"),e(o,"y","1.64"),e(o,"width","92.3"),e(o,"height","33.26"),e(o,"rx","8"),e(o,"ry","8"),e(u,"class","fee-5"),e(u,"d","m12.35,21.4c-.13,0-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24h7.91c.13,0,.24.11.24.24s-.11.24-.24.24h-7.67v3.47h3.71c.13,0,.24.11.24.24s-.11.24-.24.24h-3.71v3.71c0,.13-.11.24-.24.24h0Z"),e(p,"class","fee-5"),e(p,"d","m29.25,21.4h-7.91c-.13,0-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24h7.91c.13,0,.24.11.24.24s-.11.24-.24.24h-7.67v3.47h7.67c.13,0,.24.11.24.24s-.11.24-.24.24h-7.67v3.47h7.67c.13,0,.24.11.24.24s-.11.24-.24.24h0Z"),e(d,"class","fee-5"),e(d,"d","m38.52,21.4h-7.91c-.13,0-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24h7.91c.13,0,.24.11.24.24s-.11.24-.24.24h-7.67v3.47h7.67c.13,0,.24.11.24.24s-.11.24-.24.24h-7.67v3.47h7.67c.13,0,.24.11.24.24s-.11.24-.24.24h0Z"),e(_,"class","fee-5"),e(_,"d","m47.17,21.4h-7.91c-.13,0-.24-.11-.24-.24s.11-.24.24-.24h7.67v-7.43h-7.67c-.13,0-.24-.11-.24-.24s.11-.24.24-.24h7.91c.13,0,.24.11.24.24v7.91c0,.13-.11.24-.24.24Z"),e(I,"class","fee-5"),e(I,"d","m56.86,21.4h-7.91c-.13,0-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24h7.44c.13,0,.24.11.24.24v3.72c.15,0,.22,0,.23,0,.13,0,.24.11.24.24v3.96c0,.13-.11.24-.24.24h0Zm-7.67-7.91v3.5c1.05,0,5.27-.02,6.96-.02v-3.47h-6.96Zm0,7.43h7.43v-3.48c-.06,0-.12,0-.19,0-.02,0-.05,0-.07,0-.19,0-.43,0-.73,0l-6.44.02v3.45h0Z"),e(R,"class","fee-5"),e(R,"d","m66.39,21.4c-.13,0-.24-.11-.24-.24v-3.69h-7.43v3.69c0,.13-.11.24-.24.24s-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24h7.91c.13,0,.24.11.24.24v7.91c0,.13-.11.24-.24.24Zm-7.67-4.42h7.43v-3.5h-7.43v3.5Z"),e(K,"class","fee-5"),e(K,"d","m76.07,21.4h-7.91c-.13,0-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24h7.91c.13,0,.24.11.24.24s-.11.24-.24.24h-7.67v7.43h7.67c.13,0,.24.11.24.24s-.11.24-.24.24Z"),e(M,"class","fee-5"),e(M,"d","m85.18,21.41c-.08,0-.16-.04-.21-.11l-3.83-5.75-3.62,1.81v3.8c0,.14-.11.25-.25.25s-.25-.11-.25-.25v-7.91c0-.14.11-.25.25-.25s.25.11.25.25v3.55l3.59-1.79s0,0,.01,0l3.95-1.98c.12-.06.27-.01.33.11.06.12.01.27-.11.33l-3.7,1.85,3.8,5.7c.08.11.05.27-.07.35-.04.03-.09.04-.14.04h0Z"),e(x,"class","fee-10"),e(x,"d","m74.99,10.39c0,.76-.62,1.38-1.38,1.38-.31,0-.6-.11-.84-.28-.35.4-.86.65-1.43.65-.37,0-.71-.11-1-.29-.35.43-.88.7-1.47.7s-1.08-.25-1.43-.65c-.43.36-.99.57-1.6.57-1.39,0-2.51-1.12-2.51-2.51s1.12-2.51,2.51-2.51c.18,0,.35.02.52.05.21-1.25,1.3-2.2,2.62-2.2s2.31.88,2.59,2.05c.05,0,.1,0,.14,0,.97,0,1.77.73,1.88,1.66h.01c.76,0,1.38.62,1.38,1.38Z"),e(B,"id","Star2"),e(B,"class","fee-1"),e(B,"d","m2.18,33.5h0c.02.82.7,1.47,1.54,1.49h0,0c-.84.02-1.52.68-1.54,1.49h0s0,0,0,0c-.02-.82-.7-1.47-1.54-1.49h0,0c.84-.02,1.52-.68,1.54-1.49h0Z"),e(j,"id","Star1"),e(j,"class","fee-1"),e(j,"d","m94.48.24h0c.02.82.7,1.47,1.54,1.49h0,0c-.84.02-1.52.68-1.54,1.49h0s0,0,0,0c-.02-.82-.7-1.47-1.54-1.49h0,0c.84-.02,1.52-.68,1.54-1.49h0Z"),e(b,"id","Stars"),e(T,"class","fee-4"),e(T,"d","m65.74,5.7s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.01h0s0,0,0-.01c0,0,0,0,0,0,0,0,0,0,0,0l.89-.89h-.87s-.03-.01-.03-.03.01-.03.03-.03h.94s0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0h0s0,0,0,.01c0,0,0,0,0,0l-.89.89h.87s.03.01.03.03-.01.03-.03.03h-.94Z"),e(z,"class","fee-4"),e(z,"d","m61.79,5.7h0s-.01,0-.02,0-.01,0-.02-.01h0s0-.01-.01-.02c0,0,0-.01,0-.02h0s0-.02,0-.02c0,0,0-.01.01-.02h0s1.77-1.77,1.77-1.77h-1.72s-.06-.03-.06-.06.03-.06.06-.06h1.86s.01,0,.02,0c0,0,.01,0,.02.01s0,.01.01.02c0,0,0,.01,0,.02h0s0,.02,0,.02c0,0,0,.01-.01.02l-1.77,1.77h1.72s.06.03.06.06-.03.06-.06.06h-1.86Z"),e(k,"class","fee-4"),e(k,"d","m56.85,5.7h0s-.02,0-.03,0c0,0-.02,0-.03-.02,0,0,0,0,0,0,0,0-.01-.02-.02-.03,0,0,0-.02,0-.03h0s0-.03,0-.04c0,0,0-.02.02-.03h0s2.65-2.65,2.65-2.65h-2.59s-.09-.04-.09-.09.04-.09.09-.09h2.8s.02,0,.03,0c.01,0,.02.01.03.02s.01.02.02.03c0,0,0,.02,0,.03h0s0,.03,0,.04c0,.01-.01.02-.02.03l-2.65,2.65h2.59s.09.04.09.09-.04.09-.09.09h-2.8Z"),e(L,"class","fee-4"),e(L,"d","m50.93,5.7h0s-.03,0-.04,0c-.01,0-.02-.01-.03-.02,0,0,0,0,0,0,0-.01-.02-.02-.02-.03,0-.01,0-.03,0-.04h0s0-.03,0-.05c0-.01.01-.02.02-.03,0,0,0,0,0,0l3.53-3.53h-3.45c-.06,0-.11-.05-.11-.11s.05-.11.11-.11h3.73s.03,0,.04,0c.01,0,.03.01.04.03.01.01.02.02.02.04,0,.01,0,.02,0,.04h0s0,.04,0,.05c0,.01-.01.03-.02.04l-3.53,3.53h3.45c.06,0,.11.05.11.11s-.05.11-.11.11h-3.72Z"),e(S,"class","fee-4"),e(S,"d","m44.01,5.7h0s-.03,0-.05-.01c-.02,0-.03-.02-.04-.03h0s-.02-.03-.03-.05c0-.02-.01-.03-.01-.05h0s0-.04.01-.06c0-.02.02-.03.03-.04,0,0,0,0,0,0l4.42-4.42h-4.32c-.08,0-.14-.06-.14-.14s.06-.14.14-.14h4.67s.03,0,.05.01c.02,0,.03.02.05.03.01.01.02.03.03.05,0,.01,0,.03.01.05h0s0,.04-.01.06c0,.02-.02.03-.03.05l-4.42,4.42h4.32c.08,0,.14.06.14.14s-.06.14-.14.14h-4.66Z"),e(A,"id","Zees"),e(O,"id","RightLeg"),e(O,"class","fee-3"),e(O,"x","70.96"),e(O,"y","9.12"),e(O,"width","1.61"),e(O,"height","3.36"),e(O,"rx",".81"),e(O,"ry",".81"),e(O,"transform","translate(143.43 -.62) rotate(162.39)"),e(y,"id","LeftLeg"),e(y,"class","fee-3"),e(y,"x","72.8"),e(y,"y","6.95"),e(y,"width","1.61"),e(y,"height","3.36"),e(y,"rx",".81"),e(y,"ry",".81"),e(y,"transform","translate(136.81 -30.07) rotate(141.84)"),e($,"id","Head"),e($,"class","fee-3"),e($,"cx","67.51"),e($,"cy","5.07"),e($,"r","1.9"),e(g,"id","LeftArm"),e(g,"class","fee-3"),e(g,"x","71.28"),e(g,"y","3.14"),e(g,"width","1.61"),e(g,"height","4.68"),e(g,"rx",".81"),e(g,"ry",".81"),e(g,"transform","translate(95.45 -62.92) rotate(104.51)"),e(w,"id","Body"),e(w,"class","fee-3"),e(w,"cx","70.08"),e(w,"cy","7.6"),e(w,"r","3.31"),e(E,"class","fee-2"),e(E,"d","m65.99,2.5c-.3-.25-.72-.25-.93.01-.13.16-.15.39-.07.59-.22-.04-.43.02-.57.18-.21.26-.14.67.16.92.02.02.04.03.06.04h0s.57.48.57.48l1.41-1.7-.57-.48h0s-.03-.03-.05-.05Z"),e(F,"class","fee-7"),e(F,"d","m65.75,5.56c-.05-.18-.08-.37-.07-.56l-.04-.04,1.49-1.8.06.05h.01c.15-.04.3-.05.45-.04.14-.35.16-.61.03-.72-.28-.23-1.14.35-1.93,1.3-.79.95-1.19,1.9-.91,2.14.16.13.51,0,.92-.32Z"),e(C,"id","Hat"),e(m,"id","RightArm"),e(m,"class","fee-3"),e(m,"x","68.23"),e(m,"y","5.54"),e(m,"width","1.61"),e(m,"height","4.68"),e(m,"rx",".81"),e(m,"ry",".81"),e(m,"transform","translate(133.9 32.82) rotate(-165.49)"),e(v,"id","blob"),e(N,"class","fee-9"),e(N,"x","64.46"),e(N,"y","4.39"),e(N,"width","4.93"),e(N,"height",".68"),e(N,"rx",".15"),e(N,"ry",".15"),e(N,"transform","translate(18.3 50.95) rotate(-47.59)"),e(f,"id","Layer_1-2"),e(f,"data-name","Layer 1"),e(t,"class",q=s[0].class),e(t,"id","Layer_2"),e(t,"data-name","Layer 2"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"viewBox","0 0 96.66 36.73")},m(P,c0){D(P,t,c0),r(t,c),r(c,n),r(n,a),r(t,f),r(f,l),r(f,o),r(f,h),r(h,u),r(h,p),r(h,d),r(h,_),r(h,I),r(h,R),r(h,K),r(h,M),r(f,x),r(f,b),r(b,B),r(b,j),r(f,A),r(A,T),r(A,z),r(A,k),r(A,L),r(A,S),r(f,v),r(v,O),r(v,y),r(v,$),r(v,g),r(v,w),r(v,C),r(C,E),r(C,F),r(v,m),r(f,N)},p(P,[c0]){c0&1&&q!==(q=P[0].class)&&e(t,"class",q)},i:U,o:U,d(P){P&&V(t)}}}function g1(s,t,c){return s.$$set=n=>{c(0,t=t0(t0({},t),s0(n)))},t=s0(t),[t]}class v1 extends Y{constructor(t){super(),X(this,t,g1,m1,W,{})}}function _1(s){let t,c,n,a,f;return c=new v1({props:{class:"title"}}),{c(){t=G("div"),e0(c.$$.fragment),e(t,"class","card"),o0(t,"clicked",s[0])},m(l,o){D(l,t,o),J(c,t,null),n=!0,a||(f=i0(t,"click",s[1]),a=!0)},p(l,[o]){(!n||o&1)&&o0(t,"clicked",l[0])},i(l){n||(Z(c.$$.fragment,l),n=!0)},o(l){H(c.$$.fragment,l),n=!1},d(l){l&&V(t),Q(c),a=!1,f()}}}function x1(s,t,c){let n=!1;function a(){c(0,n=!n)}return[n,a]}class y1 extends Y{constructor(t){super(),X(this,t,x1,_1,W,{})}}function w1(s){let t,c,n,a,f,l,o,h,u,p,d,_,I,R,K,M,x,b,B,j,A,T,z,k,L,S,v,O,y,$,g,w,C,E,F,m,N;return{c(){t=i("svg"),c=i("defs"),n=i("style"),a=l0(`.tut-1, .tut-2, .tut-3, .tut-4, .tut-5 {
        stroke-miterlimit: 10;
        stroke-width: .25px;
      }

      .tut-1, .tut-3 {
        stroke: #231f20;
      }

      .tut-1, .tut-6 {
        fill: #eeeae0;
      }

      .tut-2 {
        fill: #ffdf9e;
      }

      .tut-2, .tut-5 {
        stroke: #181b1f;
      }

      .tut-3 {
        fill: #f47a56;
      }

      .tut-7, .tut-8, .tut-9, .tut-6 {
        stroke-width: 0px;
      }

      .tut-8 {
        fill: #231f20;
      }

      .tut-9 {
        fill: #c798c5;
      }

      .tut-4 {
        stroke: #c798c5;
      }

      .tut-4, .tut-5 {
        fill: none;
      }
    `),f=i("g"),l=i("rect"),o=i("rect"),h=i("g"),u=i("path"),p=i("path"),d=i("g"),_=i("path"),I=i("path"),R=i("path"),K=i("path"),M=i("path"),x=i("g"),b=i("rect"),B=i("circle"),j=i("circle"),A=i("g"),T=i("path"),z=i("path"),k=i("rect"),L=i("rect"),S=i("rect"),v=i("g"),O=i("path"),y=i("path"),$=i("path"),g=i("path"),w=i("path"),C=i("path"),E=i("path"),F=i("path"),m=i("rect"),e(l,"id","Outer"),e(l,"class","tut-9"),e(l,"width","96.66"),e(l,"height","36.73"),e(l,"rx","2"),e(l,"ry","2"),e(o,"id","Inner"),e(o,"class","tut-6"),e(o,"x","2.18"),e(o,"y","1.64"),e(o,"width","92.3"),e(o,"height","33.26"),e(o,"rx","8"),e(o,"ry","8"),e(u,"id","Star2"),e(u,"class","tut-1"),e(u,"d","m2.18,33.5h0c.02.82.7,1.47,1.54,1.49h0,0c-.84.02-1.52.68-1.54,1.49h0s0,0,0,0c-.02-.82-.7-1.47-1.54-1.49h0,0c.84-.02,1.52-.68,1.54-1.49h0Z"),e(p,"id","Star1"),e(p,"class","tut-1"),e(p,"d","m94.48.24h0c.02.82.7,1.47,1.54,1.49h0,0c-.84.02-1.52.68-1.54,1.49h0s0,0,0,0c-.02-.82-.7-1.47-1.54-1.49h0,0c.84-.02,1.52-.68,1.54-1.49h0Z"),e(h,"id","Stars"),e(_,"class","tut-5"),e(_,"d","m94.52,22.74s0,0,0,0c0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.01h0s0,0,0-.01c0,0,0,0,0,0,0,0,0,0,0,0l.89-.89h-.87s-.03-.01-.03-.03.01-.03.03-.03h.94s0,0,0,0c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0h0s0,0,0,.01c0,0,0,0,0,0l-.89.89h.87s.03.01.03.03-.01.03-.03.03h-.94Z"),e(I,"class","tut-5"),e(I,"d","m92.01,21.29h0s-.01,0-.02,0-.01,0-.02-.01h0s0-.01-.01-.02c0,0,0-.01,0-.02h0s0-.02,0-.02c0,0,0-.01.01-.02h0s1.77-1.77,1.77-1.77h-1.72s-.06-.03-.06-.06.03-.06.06-.06h1.86s.01,0,.02,0c0,0,.01,0,.02.01s0,.01.01.02c0,0,0,.01,0,.02h0s0,.02,0,.02c0,0,0,.01-.01.02l-1.77,1.77h1.72s.06.03.06.06-.03.06-.06.06h-1.86Z"),e(R,"class","tut-5"),e(R,"d","m88.52,18.23h0s-.02,0-.03,0c0,0-.02,0-.03-.02,0,0,0,0,0,0,0,0-.01-.02-.02-.03,0,0,0-.02,0-.03h0s0-.03,0-.04c0,0,0-.02.02-.03h0s2.65-2.65,2.65-2.65h-2.59s-.09-.04-.09-.09.04-.09.09-.09h2.8s.02,0,.03,0c.01,0,.02.01.03.02s.01.02.02.03c0,0,0,.02,0,.03h0s0,.03,0,.04c0,.01-.01.02-.02.03l-2.65,2.65h2.59s.09.04.09.09-.04.09-.09.09h-2.8Z"),e(K,"class","tut-5"),e(K,"d","m84.6,13.88h0s-.03,0-.04,0c-.01,0-.02-.01-.03-.02,0,0,0,0,0,0,0-.01-.02-.02-.02-.03,0-.01,0-.03,0-.04h0s0-.03,0-.05c0-.01.01-.02.02-.03,0,0,0,0,0,0l3.53-3.53h-3.45c-.06,0-.11-.05-.11-.11s.05-.11.11-.11h3.73s.03,0,.04,0c.01,0,.03.01.04.03.01.01.02.02.02.04,0,.01,0,.02,0,.04h0s0,.04,0,.05c0,.01-.01.03-.02.04l-3.53,3.53h3.45c.06,0,.11.05.11.11s-.05.11-.11.11h-3.72Z"),e(M,"class","tut-5"),e(M,"d","m79.78,8.17h0s-.03,0-.05-.01c-.02,0-.03-.02-.04-.03h0s-.02-.03-.03-.05c0-.02-.01-.03-.01-.05h0s0-.04.01-.06c0-.02.02-.03.03-.04,0,0,0,0,0,0l4.42-4.42h-4.32c-.08,0-.14-.06-.14-.14s.06-.14.14-.14h4.67s.03,0,.05.01c.02,0,.03.02.05.03.01.01.02.03.03.05,0,.01,0,.03.01.05h0s0,.04-.01.06c0,.02-.02.03-.03.05l-4.42,4.42h4.32c.08,0,.14.06.14.14s-.06.14-.14.14h-4.66Z"),e(d,"id","Zees"),e(b,"id","LeftArm"),e(b,"class","tut-3"),e(b,"x","94.08"),e(b,"y","27.41"),e(b,"width","1.99"),e(b,"height","5.77"),e(b,"rx",".99"),e(b,"ry",".99"),e(b,"transform","translate(-4.71 29.55) rotate(-17.25)"),e(B,"id","Body"),e(B,"class","tut-3"),e(B,"cx","91.3"),e(B,"cy","29.76"),e(B,"r","4.07"),e(j,"id","Head"),e(j,"class","tut-3"),e(j,"cx","93.25"),e(j,"cy","25.34"),e(j,"r","2.34"),e(T,"class","tut-2"),e(T,"d","m96.35,23.35c.3-.38.28-.9-.04-1.15-.2-.16-.48-.18-.73-.07.04-.27-.04-.53-.24-.7-.32-.25-.83-.15-1.13.23-.02.02-.03.05-.05.07h0s-.57.72-.57.72l2.15,1.69.57-.72h0s.04-.05.06-.07Z"),e(z,"class","tut-7"),e(z,"d","m92.58,23.16c.23-.07.46-.11.69-.11l.04-.06,2.27,1.78-.06.08h.02c.04.19.06.38.05.57.43.16.76.18.89.02.28-.35-.46-1.4-1.66-2.34-1.19-.94-2.38-1.41-2.66-1.06-.16.2.03.62.42,1.12Z"),e(A,"id","Hat"),e(k,"id","RightLeg"),e(k,"class","tut-3"),e(k,"x","88.93"),e(k,"y","32.14"),e(k,"width","1.99"),e(k,"height","4.14"),e(k,"rx",".99"),e(k,"ry",".99"),e(k,"transform","translate(179.85 68.43) rotate(180)"),e(L,"id","LeftLeg"),e(L,"class","tut-3"),e(L,"x","92.13"),e(L,"y","32.14"),e(L,"width","1.99"),e(L,"height","4.14"),e(L,"rx",".99"),e(L,"ry",".99"),e(L,"transform","translate(186.25 68.43) rotate(-180)"),e(S,"id","RightArm"),e(S,"class","tut-3"),e(S,"x","88.93"),e(S,"y","27.67"),e(S,"width","1.99"),e(S,"height","5.77"),e(S,"rx",".99"),e(S,"ry",".99"),e(S,"transform","translate(181.86 6.72) rotate(146.69)"),e(x,"id","blob"),e(O,"class","tut-4"),e(O,"d","m16.38,21.4c-.13,0-.24-.11-.24-.24v-7.67h-3.71c-.13,0-.24-.11-.24-.24s.11-.24.24-.24h7.91c.13,0,.24.11.24.24s-.11.24-.24.24h-3.71v7.67c0,.13-.11.24-.24.24h0Z"),e(y,"class","tut-4"),e(y,"d","m29.3,21.4h-7.91c-.13,0-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24s.24.11.24.24v7.67h7.43v-7.67c0-.13.11-.24.24-.24s.24.11.24.24v7.91c0,.13-.11.24-.24.24Z"),e($,"class","tut-4"),e($,"d","m34.31,21.4c-.13,0-.24-.11-.24-.24v-7.67h-3.71c-.13,0-.24-.11-.24-.24s.11-.24.24-.24h7.91c.13,0,.24.11.24.24s-.11.24-.24.24h-3.71v7.67c0,.13-.11.24-.24.24h0Z"),e(g,"class","tut-4"),e(g,"d","m47.23,21.4h-7.91c-.13,0-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24h7.91c.13,0,.24.11.24.24v7.91c0,.13-.11.24-.24.24Zm-7.67-.48h7.43v-7.43h-7.43v7.43Z"),e(w,"class","tut-4"),e(w,"d","m56.91,21.4c-.06,0-.12-.02-.17-.07l-3.84-3.88h-3.66v3.71c0,.13-.11.24-.24.24s-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24h7.91c.06,0,.12.03.17.07s.07.11.07.17v3.96c0,.13-.11.24-.24.24h-3.33l3.5,3.54c.09.09.09.25,0,.34-.05.05-.11.07-.17.07h0Zm-7.67-4.44h7.43v-3.47s-7.43,0-7.43,0v3.47Z"),e(C,"class","tut-4"),e(C,"d","m65.79,21.4h-7.91c-.13,0-.24-.11-.24-.24s.11-.24.24-.24h3.67l.04-7.43h-3.71c-.13,0-.24-.11-.24-.24s.11-.24.24-.24h7.91c.13,0,.24.11.24.24s-.11.24-.24.24h-3.71l-.04,7.43h3.76c.13,0,.24.11.24.24s-.11.24-.24.24Z"),e(E,"class","tut-4"),e(E,"d","m74.88,21.4c-.13,0-.24-.11-.24-.24v-3.69h-7.43v3.69c0,.13-.11.24-.24.24s-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24h7.91c.13,0,.24.11.24.24v7.91c0,.13-.11.24-.24.24Zm-7.67-4.42h7.43v-3.5h-7.43v3.5Z"),e(F,"class","tut-4"),e(F,"d","m84.56,21.4h-7.91c-.13,0-.24-.11-.24-.24v-7.91c0-.13.11-.24.24-.24s.24.11.24.24v7.67h7.67c.13,0,.24.11.24.24s-.11.24-.24.24Z"),e(m,"class","tut-8"),e(m,"x","90.97"),e(m,"y","24.11"),e(m,"width","5.61"),e(m,"height",".94"),e(m,"rx",".2"),e(m,"ry",".2"),e(m,"transform","translate(34.67 -52.26) rotate(37.75)"),e(f,"id","Layer_1-2"),e(f,"data-name","Layer 1"),e(t,"class",N=s[0].class),e(t,"id","Layer_2"),e(t,"data-name","Layer 2"),e(t,"xmlns","http://www.w3.org/2000/svg"),e(t,"viewBox","0 0 96.76 36.73")},m(q,P){D(q,t,P),r(t,c),r(c,n),r(n,a),r(t,f),r(f,l),r(f,o),r(f,h),r(h,u),r(h,p),r(f,d),r(d,_),r(d,I),r(d,R),r(d,K),r(d,M),r(f,x),r(x,b),r(x,B),r(x,j),r(x,A),r(A,T),r(A,z),r(x,k),r(x,L),r(x,S),r(f,v),r(v,O),r(v,y),r(v,$),r(v,g),r(v,w),r(v,C),r(v,E),r(v,F),r(f,m)},p(q,[P]){P&1&&N!==(N=q[0].class)&&e(t,"class",N)},i:U,o:U,d(q){q&&V(t)}}}function $1(s,t,c){return s.$$set=n=>{c(0,t=t0(t0({},t),s0(n)))},t=s0(t),[t]}class Z1 extends Y{constructor(t){super(),X(this,t,$1,w1,W,{})}}function b1(s){let t,c,n,a,f;return c=new Z1({props:{class:"title"}}),{c(){t=G("div"),e0(c.$$.fragment),e(t,"class","card"),o0(t,"clicked",s[0])},m(l,o){D(l,t,o),J(c,t,null),n=!0,a||(f=i0(t,"click",s[1]),a=!0)},p(l,[o]){(!n||o&1)&&o0(t,"clicked",l[0])},i(l){n||(Z(c.$$.fragment,l),n=!0)},o(l){H(c.$$.fragment,l),n=!1},d(l){l&&V(t),Q(c),a=!1,f()}}}function k1(s,t,c){let n=!1;function a(){c(0,n=!n)}return[n,a]}class L1 extends Y{constructor(t){super(),X(this,t,k1,b1,W,{})}}function S1(s){let t,c,n,a,f,l,o,h;return n=new p1({}),f=new L1({}),o=new y1({}),{c(){t=G("main"),c=G("div"),e0(n.$$.fragment),a=r0(),e0(f.$$.fragment),l=r0(),e0(o.$$.fragment),e(c,"class","menu")},m(u,p){D(u,t,p),r(t,c),J(n,c,null),r(c,a),J(f,c,null),r(c,l),J(o,c,null),h=!0},p:U,i(u){h||(Z(n.$$.fragment,u),Z(f.$$.fragment,u),Z(o.$$.fragment,u),h=!0)},o(u){H(n.$$.fragment,u),H(f.$$.fragment,u),H(o.$$.fragment,u),h=!1},d(u){u&&V(t),Q(n),Q(f),Q(o)}}}class O1 extends Y{constructor(t){super(),X(this,t,null,S1,W,{})}}new O1({target:document.getElementById("app")});
