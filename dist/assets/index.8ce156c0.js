const Ms=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Ms();function Jr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Fs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ls=Jr(Fs);function Xi(e){return!!e||e===""}function Zr(e){if(B(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=de(r)?Ds(r):Zr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(de(e))return e;if(me(e))return e}}const zs=/;(?![^(]*\))/g,js=/:(.+)/;function Ds(e){const t={};return e.split(zs).forEach(n=>{if(n){const r=n.split(js);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ea(e){let t="";if(de(e))t=e;else if(B(e))for(let n=0;n<e.length;n++){const r=ea(e[n]);r&&(t+=r+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ne={},It=[],Re=()=>{},$s=()=>!1,Hs=/^on[^a-z]/,Kn=e=>Hs.test(e),ta=e=>e.startsWith("onUpdate:"),pe=Object.assign,na=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Us=Object.prototype.hasOwnProperty,K=(e,t)=>Us.call(e,t),B=Array.isArray,Gt=e=>qn(e)==="[object Map]",Bs=e=>qn(e)==="[object Set]",U=e=>typeof e=="function",de=e=>typeof e=="string",ra=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Gi=e=>me(e)&&U(e.then)&&U(e.catch),Ws=Object.prototype.toString,qn=e=>Ws.call(e),Ys=e=>qn(e).slice(8,-1),Ks=e=>qn(e)==="[object Object]",aa=e=>de(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},qs=/-(\w)/g,De=Vn(e=>e.replace(qs,(t,n)=>n?n.toUpperCase():"")),Vs=/\B([A-Z])/g,jt=Vn(e=>e.replace(Vs,"-$1").toLowerCase()),Xn=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ur=Vn(e=>e?`on${Xn(e)}`:""),ln=(e,t)=>!Object.is(e,t),dr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Xs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let La;const Gs=()=>La||(La=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Fe;class Qs{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Fe&&(this.parent=Fe,this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Fe;try{return Fe=this,t()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function Js(e,t=Fe){t&&t.active&&t.effects.push(e)}const ia=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Qi=e=>(e.w&st)>0,Ji=e=>(e.n&st)>0,Zs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=st},el=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Qi(a)&&!Ji(a)?a.delete(e):t[n++]=a,a.w&=~st,a.n&=~st}t.length=n}},_r=new WeakMap;let Kt=0,st=1;const Er=30;let Pe;const pt=Symbol(""),Ar=Symbol("");class oa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Js(this,r)}run(){if(!this.active)return this.fn();let t=Pe,n=at;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pe,Pe=this,at=!0,st=1<<++Kt,Kt<=Er?Zs(this):za(this),this.fn()}finally{Kt<=Er&&el(this),st=1<<--Kt,Pe=this.parent,at=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(za(this),this.onStop&&this.onStop(),this.active=!1)}}function za(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let at=!0;const Zi=[];function Dt(){Zi.push(at),at=!1}function $t(){const e=Zi.pop();at=e===void 0?!0:e}function we(e,t,n){if(at&&Pe){let r=_r.get(e);r||_r.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=ia()),eo(a)}}function eo(e,t){let n=!1;Kt<=Er?Ji(e)||(e.n|=st,n=!Qi(e)):n=!e.has(Pe),n&&(e.add(Pe),Pe.deps.push(e))}function We(e,t,n,r,a,i){const o=_r.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&B(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":B(e)?aa(n)&&s.push(o.get("length")):(s.push(o.get(pt)),Gt(e)&&s.push(o.get(Ar)));break;case"delete":B(e)||(s.push(o.get(pt)),Gt(e)&&s.push(o.get(Ar)));break;case"set":Gt(e)&&s.push(o.get(pt));break}if(s.length===1)s[0]&&kr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);kr(ia(l))}}function kr(e,t){const n=B(e)?e:[...e];for(const r of n)r.computed&&ja(r);for(const r of n)r.computed||ja(r)}function ja(e,t){(e!==Pe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const tl=Jr("__proto__,__v_isRef,__isVue"),to=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ra)),nl=sa(),rl=sa(!1,!0),al=sa(!0),Da=il();function il(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)we(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Dt();const r=V(this)[t].apply(this,n);return $t(),r}}),e}function sa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?wl:oo:t?io:ao).get(r))return r;const o=B(r);if(!e&&o&&K(Da,a))return Reflect.get(Da,a,i);const s=Reflect.get(r,a,i);return(ra(a)?to.has(a):tl(a))||(e||we(r,"get",a),t)?s:ue(s)?o&&aa(a)?s:s.value:me(s)?e?so(s):vn(s):s}}const ol=no(),sl=no(!0);function no(e=!1){return function(n,r,a,i){let o=n[r];if(fn(o)&&ue(o)&&!ue(a))return!1;if(!e&&!fn(a)&&(Or(a)||(a=V(a),o=V(o)),!B(n)&&ue(o)&&!ue(a)))return o.value=a,!0;const s=B(n)&&aa(r)?Number(r)<n.length:K(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?ln(a,o)&&We(n,"set",r,a):We(n,"add",r,a)),l}}function ll(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&We(e,"delete",t,void 0),r}function fl(e,t){const n=Reflect.has(e,t);return(!ra(t)||!to.has(t))&&we(e,"has",t),n}function cl(e){return we(e,"iterate",B(e)?"length":pt),Reflect.ownKeys(e)}const ro={get:nl,set:ol,deleteProperty:ll,has:fl,ownKeys:cl},ul={get:al,set(e,t){return!0},deleteProperty(e,t){return!0}},dl=pe({},ro,{get:rl,set:sl}),la=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function xn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&we(a,"get",t),we(a,"get",i));const{has:o}=Gn(a),s=r?la:n?ua:cn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function wn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&we(r,"has",e),we(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function _n(e,t=!1){return e=e.__v_raw,!t&&we(V(e),"iterate",pt),Reflect.get(e,"size",e)}function $a(e){e=V(e);const t=V(this);return Gn(t).has.call(t,e)||(t.add(e),We(t,"add",e,e)),this}function Ha(e,t){t=V(t);const n=V(this),{has:r,get:a}=Gn(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ln(t,o)&&We(n,"set",e,t):We(n,"add",e,t),this}function Ua(e){const t=V(this),{has:n,get:r}=Gn(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&We(t,"delete",e,void 0),i}function Ba(){const e=V(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function En(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?la:e?ua:cn;return!e&&we(s,"iterate",pt),o.forEach((c,f)=>r.call(a,l(c),l(f),i))}}function An(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Gt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),f=n?la:t?ua:cn;return!t&&we(i,"iterate",l?Ar:pt),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:s?[f(d[0]),f(d[1])]:f(d),done:h}},[Symbol.iterator](){return this}}}}function Qe(e){return function(...t){return e==="delete"?!1:this}}function ml(){const e={get(i){return xn(this,i)},get size(){return _n(this)},has:wn,add:$a,set:Ha,delete:Ua,clear:Ba,forEach:En(!1,!1)},t={get(i){return xn(this,i,!1,!0)},get size(){return _n(this)},has:wn,add:$a,set:Ha,delete:Ua,clear:Ba,forEach:En(!1,!0)},n={get(i){return xn(this,i,!0)},get size(){return _n(this,!0)},has(i){return wn.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:En(!0,!1)},r={get(i){return xn(this,i,!0,!0)},get size(){return _n(this,!0)},has(i){return wn.call(this,i,!0)},add:Qe("add"),set:Qe("set"),delete:Qe("delete"),clear:Qe("clear"),forEach:En(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=An(i,!1,!1),n[i]=An(i,!0,!1),t[i]=An(i,!1,!0),r[i]=An(i,!0,!0)}),[e,n,t,r]}const[hl,pl,gl,vl]=ml();function fa(e,t){const n=t?e?vl:gl:e?pl:hl;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(K(n,a)&&a in r?n:r,a,i)}const bl={get:fa(!1,!1)},yl={get:fa(!1,!0)},xl={get:fa(!0,!1)},ao=new WeakMap,io=new WeakMap,oo=new WeakMap,wl=new WeakMap;function _l(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function El(e){return e.__v_skip||!Object.isExtensible(e)?0:_l(Ys(e))}function vn(e){return fn(e)?e:ca(e,!1,ro,bl,ao)}function Al(e){return ca(e,!1,dl,yl,io)}function so(e){return ca(e,!0,ul,xl,oo)}function ca(e,t,n,r,a){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=El(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function Tt(e){return fn(e)?Tt(e.__v_raw):!!(e&&e.__v_isReactive)}function fn(e){return!!(e&&e.__v_isReadonly)}function Or(e){return!!(e&&e.__v_isShallow)}function lo(e){return Tt(e)||fn(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function fo(e){return Fn(e,"__v_skip",!0),e}const cn=e=>me(e)?vn(e):e,ua=e=>me(e)?so(e):e;function co(e){at&&Pe&&(e=V(e),eo(e.dep||(e.dep=ia())))}function uo(e,t){e=V(e),e.dep&&kr(e.dep)}function ue(e){return!!(e&&e.__v_isRef===!0)}function kl(e){return mo(e,!1)}function Ol(e){return mo(e,!0)}function mo(e,t){return ue(e)?e:new Pl(e,t)}class Pl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:cn(t)}get value(){return co(this),this._value}set value(t){t=this.__v_isShallow?t:V(t),ln(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:cn(t),uo(this))}}function Qt(e){return ue(e)?e.value:e}const Cl={get:(e,t,n)=>Qt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ue(a)&&!ue(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function ho(e){return Tt(e)?e:new Proxy(e,Cl)}class Sl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new oa(t,()=>{this._dirty||(this._dirty=!0,uo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return co(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Rl(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Re):(r=e.get,a=e.set),new Sl(r,a,i||!a,n)}function it(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Qn(i,t,n)}return a}function Ie(e,t,n,r){if(U(e)){const i=it(e,t,n,r);return i&&Gi(i)&&i.catch(o=>{Qn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ie(e[i],t,n,r));return a}function Qn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){it(l,null,10,[e,o,s]);return}}Il(e,n,a,r)}function Il(e,t,n,r=!0){console.error(e)}let Ln=!1,Pr=!1;const ye=[];let Be=0;const Jt=[];let qt=null,kt=0;const Zt=[];let tt=null,Ot=0;const po=Promise.resolve();let da=null,Cr=null;function go(e){const t=da||po;return e?t.then(this?e.bind(this):e):t}function Tl(e){let t=Be+1,n=ye.length;for(;t<n;){const r=t+n>>>1;un(ye[r])<e?t=r+1:n=r}return t}function vo(e){(!ye.length||!ye.includes(e,Ln&&e.allowRecurse?Be+1:Be))&&e!==Cr&&(e.id==null?ye.push(e):ye.splice(Tl(e.id),0,e),bo())}function bo(){!Ln&&!Pr&&(Pr=!0,da=po.then(wo))}function Nl(e){const t=ye.indexOf(e);t>Be&&ye.splice(t,1)}function yo(e,t,n,r){B(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),bo()}function Ml(e){yo(e,qt,Jt,kt)}function Fl(e){yo(e,tt,Zt,Ot)}function Jn(e,t=null){if(Jt.length){for(Cr=t,qt=[...new Set(Jt)],Jt.length=0,kt=0;kt<qt.length;kt++)qt[kt]();qt=null,kt=0,Cr=null,Jn(e,t)}}function xo(e){if(Jn(),Zt.length){const t=[...new Set(Zt)];if(Zt.length=0,tt){tt.push(...t);return}for(tt=t,tt.sort((n,r)=>un(n)-un(r)),Ot=0;Ot<tt.length;Ot++)tt[Ot]();tt=null,Ot=0}}const un=e=>e.id==null?1/0:e.id;function wo(e){Pr=!1,Ln=!0,Jn(e),ye.sort((n,r)=>un(n)-un(r));const t=Re;try{for(Be=0;Be<ye.length;Be++){const n=ye[Be];n&&n.active!==!1&&it(n,null,14)}}finally{Be=0,ye.length=0,xo(),Ln=!1,da=null,(ye.length||Jt.length||Zt.length)&&wo(e)}}function Ll(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ne;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=r[f]||ne;h&&(a=n.map(v=>v.trim())),d&&(a=n.map(Xs))}let s,l=r[s=ur(t)]||r[s=ur(De(t))];!l&&i&&(l=r[s=ur(jt(t))]),l&&Ie(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ie(c,e,6,a)}}function _o(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=c=>{const f=_o(c,t,!0);f&&(s=!0,pe(o,f))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(B(i)?i.forEach(l=>o[l]=null):pe(o,i),r.set(e,o),o)}function Zn(e,t){return!e||!Kn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,jt(t))||K(e,t))}let ze=null,er=null;function zn(e){const t=ze;return ze=e,er=e&&e.type.__scopeId||null,t}function gm(e){er=e}function vm(){er=null}function zl(e,t=ze,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Za(-1);const i=zn(t),o=e(...a);return zn(i),r._d&&Za(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function mr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:f,renderCache:d,data:h,setupState:v,ctx:k,inheritAttrs:M}=e;let C,g;const _=zn(e);try{if(n.shapeFlag&4){const D=a||r;C=Le(f.call(D,D,d,i,v,h,k)),g=l}else{const D=t;C=Le(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),g=t.props?l:jl(l)}}catch(D){tn.length=0,Qn(D,e,1),C=xe(dn)}let T=C;if(g&&M!==!1){const D=Object.keys(g),{shapeFlag:Y}=T;D.length&&Y&7&&(o&&D.some(ta)&&(g=Dl(g,o)),T=Mt(T,g))}return n.dirs&&(T=Mt(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),C=T,zn(_),C}const jl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Kn(n))&&((t||(t={}))[n]=e[n]);return t},Dl=(e,t)=>{const n={};for(const r in e)(!ta(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function $l(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Wa(r,o,c):!!o;if(l&8){const f=t.dynamicProps;for(let d=0;d<f.length;d++){const h=f[d];if(o[h]!==r[h]&&!Zn(c,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Wa(r,o,c):!0:!!o;return!1}function Wa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Zn(n,i))return!0}return!1}function Hl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ul=e=>e.__isSuspense;function Bl(e,t){t&&t.pendingBranch?B(e)?t.effects.push(...e):t.effects.push(e):Fl(e)}function Cn(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function ot(e,t,n=!1){const r=ce||ze;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}const Ya={};function en(e,t,n){return Eo(e,t,n)}function Eo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=ne){const s=ce;let l,c=!1,f=!1;if(ue(e)?(l=()=>e.value,c=Or(e)):Tt(e)?(l=()=>e,r=!0):B(e)?(f=!0,c=e.some(g=>Tt(g)||Or(g)),l=()=>e.map(g=>{if(ue(g))return g.value;if(Tt(g))return Ct(g);if(U(g))return it(g,s,2)})):U(e)?t?l=()=>it(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return d&&d(),Ie(e,s,3,[h])}:l=Re,t&&r){const g=l;l=()=>Ct(g())}let d,h=g=>{d=C.onStop=()=>{it(g,s,4)}};if(hn)return h=Re,t?n&&Ie(t,s,3,[l(),f?[]:void 0,h]):l(),Re;let v=f?[]:Ya;const k=()=>{if(!!C.active)if(t){const g=C.run();(r||c||(f?g.some((_,T)=>ln(_,v[T])):ln(g,v)))&&(d&&d(),Ie(t,s,3,[g,v===Ya?void 0:v,h]),v=g)}else C.run()};k.allowRecurse=!!t;let M;a==="sync"?M=k:a==="post"?M=()=>ge(k,s&&s.suspense):M=()=>Ml(k);const C=new oa(l,M);return t?n?k():v=C.run():a==="post"?ge(C.run.bind(C),s&&s.suspense):C.run(),()=>{C.stop(),s&&s.scope&&na(s.scope.effects,C)}}function Wl(e,t,n){const r=this.proxy,a=de(e)?e.includes(".")?Ao(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=ce;Ft(this);const s=Eo(a,i.bind(r),n);return o?Ft(o):gt(),s}function Ao(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Ct(e,t){if(!me(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))Ct(e.value,t);else if(B(e))for(let n=0;n<e.length;n++)Ct(e[n],t);else if(Bs(e)||Gt(e))e.forEach(n=>{Ct(n,t)});else if(Ks(e))for(const n in e)Ct(e[n],t);return e}function bn(e){return U(e)?{setup:e,name:e.name}:e}const Sn=e=>!!e.type.__asyncLoader,ko=e=>e.type.__isKeepAlive;function Yl(e,t){Oo(e,"a",t)}function Kl(e,t){Oo(e,"da",t)}function Oo(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(tr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ko(a.parent.vnode)&&ql(r,t,n,a),a=a.parent}}function ql(e,t,n,r){const a=tr(t,e,r,!0);Po(()=>{na(r[t],a)},n)}function tr(e,t,n=ce,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Dt(),Ft(n);const s=Ie(t,n,e,o);return gt(),$t(),s});return r?a.unshift(i):a.push(i),i}}const Ve=e=>(t,n=ce)=>(!hn||e==="sp")&&tr(e,t,n),Vl=Ve("bm"),Xl=Ve("m"),Gl=Ve("bu"),Ql=Ve("u"),Jl=Ve("bum"),Po=Ve("um"),Zl=Ve("sp"),ef=Ve("rtg"),tf=Ve("rtc");function nf(e,t=ce){tr("ec",e,t)}function ct(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Dt(),Ie(l,n,8,[e.el,s,e,t]),$t())}}const Co="components";function rf(e,t){return of(Co,e,!0,t)||e}const af=Symbol();function of(e,t,n=!0,r=!1){const a=ze||ce;if(a){const i=a.type;if(e===Co){const s=jf(i);if(s&&(s===t||s===De(t)||s===Xn(De(t))))return i}const o=Ka(a[e]||i[e],t)||Ka(a.appContext[e],t);return!o&&r?i:o}}function Ka(e,t){return e&&(e[t]||e[De(t)]||e[Xn(De(t))])}const Sr=e=>e?Ho(e)?ga(e)||e.proxy:Sr(e.parent):null,jn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sr(e.parent),$root:e=>Sr(e.root),$emit:e=>e.emit,$options:e=>Ro(e),$forceUpdate:e=>e.f||(e.f=()=>vo(e.update)),$nextTick:e=>e.n||(e.n=go.bind(e.proxy)),$watch:e=>Wl.bind(e)}),sf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const v=o[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==ne&&K(r,t))return o[t]=1,r[t];if(a!==ne&&K(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&K(c,t))return o[t]=3,i[t];if(n!==ne&&K(n,t))return o[t]=4,n[t];Rr&&(o[t]=0)}}const f=jn[t];let d,h;if(f)return t==="$attrs"&&we(e,"get",t),f(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==ne&&K(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,K(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==ne&&K(a,t)?(a[t]=n,!0):r!==ne&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ne&&K(e,o)||t!==ne&&K(t,o)||(s=i[0])&&K(s,o)||K(r,o)||K(jn,o)||K(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Rr=!0;function lf(e){const t=Ro(e),n=e.proxy,r=e.ctx;Rr=!1,t.beforeCreate&&qa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:f,beforeMount:d,mounted:h,beforeUpdate:v,updated:k,activated:M,deactivated:C,beforeDestroy:g,beforeUnmount:_,destroyed:T,unmounted:D,render:Y,renderTracked:re,renderTriggered:se,errorCaptured:Ee,serverPrefetch:fe,expose:Ge,inheritAttrs:$e,components:ke,directives:yt,filters:xt}=t;if(c&&ff(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ee in o){const X=o[ee];U(X)&&(r[ee]=X.bind(n))}if(a){const ee=a.call(n,n);me(ee)&&(e.data=vn(ee))}if(Rr=!0,i)for(const ee in i){const X=i[ee],ve=U(X)?X.bind(n,n):U(X.get)?X.get.bind(n,n):Re,_t=!U(X)&&U(X.set)?X.set.bind(n):Re,He=oe({get:ve,set:_t});Object.defineProperty(r,ee,{enumerable:!0,configurable:!0,get:()=>He.value,set:Te=>He.value=Te})}if(s)for(const ee in s)So(s[ee],r,n,ee);if(l){const ee=U(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(X=>{Cn(X,ee[X])})}f&&qa(f,e,"c");function le(ee,X){B(X)?X.forEach(ve=>ee(ve.bind(n))):X&&ee(X.bind(n))}if(le(Vl,d),le(Xl,h),le(Gl,v),le(Ql,k),le(Yl,M),le(Kl,C),le(nf,Ee),le(tf,re),le(ef,se),le(Jl,_),le(Po,D),le(Zl,fe),B(Ge))if(Ge.length){const ee=e.exposed||(e.exposed={});Ge.forEach(X=>{Object.defineProperty(ee,X,{get:()=>n[X],set:ve=>n[X]=ve})})}else e.exposed||(e.exposed={});Y&&e.render===Re&&(e.render=Y),$e!=null&&(e.inheritAttrs=$e),ke&&(e.components=ke),yt&&(e.directives=yt)}function ff(e,t,n=Re,r=!1){B(e)&&(e=Ir(e));for(const a in e){const i=e[a];let o;me(i)?"default"in i?o=ot(i.from||a,i.default,!0):o=ot(i.from||a):o=ot(i),ue(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function qa(e,t,n){Ie(B(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function So(e,t,n,r){const a=r.includes(".")?Ao(n,r):()=>n[r];if(de(e)){const i=t[e];U(i)&&en(a,i)}else if(U(e))en(a,e.bind(n));else if(me(e))if(B(e))e.forEach(i=>So(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&en(a,i,e)}}function Ro(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Dn(l,c,o,!0)),Dn(l,t,o)),i.set(t,l),l}function Dn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Dn(e,i,n,!0),a&&a.forEach(o=>Dn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=cf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const cf={data:Va,props:dt,emits:dt,methods:dt,computed:dt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:dt,directives:dt,watch:df,provide:Va,inject:uf};function Va(e,t){return t?e?function(){return pe(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function uf(e,t){return dt(Ir(e),Ir(t))}function Ir(e){if(B(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function dt(e,t){return e?pe(pe(Object.create(null),e),t):t}function df(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function mf(e,t,n,r=!1){const a={},i={};Fn(i,nr,1),e.propsDefaults=Object.create(null),Io(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Al(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function hf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=e.vnode.dynamicProps;for(let d=0;d<f.length;d++){let h=f[d];if(Zn(e.emitsOptions,h))continue;const v=t[h];if(l)if(K(i,h))v!==i[h]&&(i[h]=v,c=!0);else{const k=De(h);a[k]=Tr(l,s,k,v,e,!1)}else v!==i[h]&&(i[h]=v,c=!0)}}}else{Io(e,t,a,i)&&(c=!0);let f;for(const d in s)(!t||!K(t,d)&&((f=jt(d))===d||!K(t,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(a[d]=Tr(l,s,d,void 0,e,!0)):delete a[d]);if(i!==s)for(const d in i)(!t||!K(t,d)&&!0)&&(delete i[d],c=!0)}c&&We(e,"set","$attrs")}function Io(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Pn(l))continue;const c=t[l];let f;a&&K(a,f=De(l))?!i||!i.includes(f)?n[f]=c:(s||(s={}))[f]=c:Zn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=V(n),c=s||ne;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Tr(a,l,d,c[d],e,!K(c,d))}}return o}function Tr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=K(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ft(a),r=c[n]=l.call(null,t),gt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===jt(n))&&(r=!0))}return r}function To(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const f=d=>{l=!0;const[h,v]=To(d,t,!0);pe(o,h),v&&s.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!i&&!l)return r.set(e,It),It;if(B(i))for(let f=0;f<i.length;f++){const d=De(i[f]);Xa(d)&&(o[d]=ne)}else if(i)for(const f in i){const d=De(f);if(Xa(d)){const h=i[f],v=o[d]=B(h)||U(h)?{type:h}:h;if(v){const k=Ja(Boolean,v.type),M=Ja(String,v.type);v[0]=k>-1,v[1]=M<0||k<M,(k>-1||K(v,"default"))&&s.push(d)}}}const c=[o,s];return r.set(e,c),c}function Xa(e){return e[0]!=="$"}function Ga(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Qa(e,t){return Ga(e)===Ga(t)}function Ja(e,t){return B(t)?t.findIndex(n=>Qa(n,e)):U(t)&&Qa(t,e)?0:-1}const No=e=>e[0]==="_"||e==="$stable",ma=e=>B(e)?e.map(Le):[Le(e)],pf=(e,t,n)=>{if(t._n)return t;const r=zl((...a)=>ma(t(...a)),n);return r._c=!1,r},Mo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(No(a))continue;const i=e[a];if(U(i))t[a]=pf(a,i,r);else if(i!=null){const o=ma(i);t[a]=()=>o}}},Fo=(e,t)=>{const n=ma(t);e.slots.default=()=>n},gf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),Fn(t,"_",n)):Mo(t,e.slots={})}else e.slots={},t&&Fo(e,t);Fn(e.slots,nr,1)},vf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ne;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Mo(t,a)),o=t}else t&&(Fo(e,t),o={default:1});if(i)for(const s in a)!No(s)&&!(s in o)&&delete a[s]};function Lo(){return{app:null,config:{isNativeTag:$s,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bf=0;function yf(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!me(a)&&(a=null);const i=Lo(),o=new Set;let s=!1;const l=i.app={_uid:bf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:$f,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&U(c.install)?(o.add(c),c.install(l,...f)):U(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,d){if(!s){const h=xe(r,a);return h.appContext=i,f&&t?t(h,c):e(h,c,d),s=!0,l._container=c,c.__vue_app__=l,ga(h.component)||h.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Nr(e,t,n,r,a=!1){if(B(e)){e.forEach((h,v)=>Nr(h,t&&(B(t)?t[v]:t),n,r,a));return}if(Sn(r)&&!a)return;const i=r.shapeFlag&4?ga(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,f=s.refs===ne?s.refs={}:s.refs,d=s.setupState;if(c!=null&&c!==l&&(de(c)?(f[c]=null,K(d,c)&&(d[c]=null)):ue(c)&&(c.value=null)),U(l))it(l,s,12,[o,f]);else{const h=de(l),v=ue(l);if(h||v){const k=()=>{if(e.f){const M=h?f[l]:l.value;a?B(M)&&na(M,i):B(M)?M.includes(i)||M.push(i):h?(f[l]=[i],K(d,l)&&(d[l]=f[l])):(l.value=[i],e.k&&(f[e.k]=l.value))}else h?(f[l]=o,K(d,l)&&(d[l]=o)):ue(l)&&(l.value=o,e.k&&(f[e.k]=o))};o?(k.id=-1,ge(k,n)):k()}}}const ge=Bl;function xf(e){return wf(e)}function wf(e,t){const n=Gs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:f,parentNode:d,nextSibling:h,setScopeId:v=Re,cloneNode:k,insertStaticContent:M}=e,C=(u,m,p,x=null,y=null,A=null,S=!1,E=null,O=!!m.dynamicChildren)=>{if(u===m)return;u&&!Wt(u,m)&&(x=F(u),Ae(u,y,A,!0),u=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:w,ref:L,shapeFlag:I}=m;switch(w){case ha:g(u,m,p,x);break;case dn:_(u,m,p,x);break;case Rn:u==null&&T(m,p,x,S);break;case Ue:yt(u,m,p,x,y,A,S,E,O);break;default:I&1?re(u,m,p,x,y,A,S,E,O):I&6?xt(u,m,p,x,y,A,S,E,O):(I&64||I&128)&&w.process(u,m,p,x,y,A,S,E,O,te)}L!=null&&y&&Nr(L,u&&u.ref,A,m||u,!m)},g=(u,m,p,x)=>{if(u==null)r(m.el=s(m.children),p,x);else{const y=m.el=u.el;m.children!==u.children&&c(y,m.children)}},_=(u,m,p,x)=>{u==null?r(m.el=l(m.children||""),p,x):m.el=u.el},T=(u,m,p,x)=>{[u.el,u.anchor]=M(u.children,m,p,x,u.el,u.anchor)},D=({el:u,anchor:m},p,x)=>{let y;for(;u&&u!==m;)y=h(u),r(u,p,x),u=y;r(m,p,x)},Y=({el:u,anchor:m})=>{let p;for(;u&&u!==m;)p=h(u),a(u),u=p;a(m)},re=(u,m,p,x,y,A,S,E,O)=>{S=S||m.type==="svg",u==null?se(m,p,x,y,A,S,E,O):Ge(u,m,y,A,S,E,O)},se=(u,m,p,x,y,A,S,E)=>{let O,w;const{type:L,props:I,shapeFlag:z,transition:$,patchFlag:q,dirs:Q}=u;if(u.el&&k!==void 0&&q===-1)O=u.el=k(u.el);else{if(O=u.el=o(u.type,A,I&&I.is,I),z&8?f(O,u.children):z&16&&fe(u.children,O,null,x,y,A&&L!=="foreignObject",S,E),Q&&ct(u,null,x,"created"),I){for(const ae in I)ae!=="value"&&!Pn(ae)&&i(O,ae,null,I[ae],A,u.children,x,y,P);"value"in I&&i(O,"value",null,I.value),(w=I.onVnodeBeforeMount)&&Me(w,x,u)}Ee(O,u,u.scopeId,S,x)}Q&&ct(u,null,x,"beforeMount");const J=(!y||y&&!y.pendingBranch)&&$&&!$.persisted;J&&$.beforeEnter(O),r(O,m,p),((w=I&&I.onVnodeMounted)||J||Q)&&ge(()=>{w&&Me(w,x,u),J&&$.enter(O),Q&&ct(u,null,x,"mounted")},y)},Ee=(u,m,p,x,y)=>{if(p&&v(u,p),x)for(let A=0;A<x.length;A++)v(u,x[A]);if(y){let A=y.subTree;if(m===A){const S=y.vnode;Ee(u,S,S.scopeId,S.slotScopeIds,y.parent)}}},fe=(u,m,p,x,y,A,S,E,O=0)=>{for(let w=O;w<u.length;w++){const L=u[w]=E?nt(u[w]):Le(u[w]);C(null,L,m,p,x,y,A,S,E)}},Ge=(u,m,p,x,y,A,S)=>{const E=m.el=u.el;let{patchFlag:O,dynamicChildren:w,dirs:L}=m;O|=u.patchFlag&16;const I=u.props||ne,z=m.props||ne;let $;p&&ut(p,!1),($=z.onVnodeBeforeUpdate)&&Me($,p,m,u),L&&ct(m,u,p,"beforeUpdate"),p&&ut(p,!0);const q=y&&m.type!=="foreignObject";if(w?$e(u.dynamicChildren,w,E,p,x,q,A):S||ve(u,m,E,null,p,x,q,A,!1),O>0){if(O&16)ke(E,m,I,z,p,x,y);else if(O&2&&I.class!==z.class&&i(E,"class",null,z.class,y),O&4&&i(E,"style",I.style,z.style,y),O&8){const Q=m.dynamicProps;for(let J=0;J<Q.length;J++){const ae=Q[J],Oe=I[ae],Et=z[ae];(Et!==Oe||ae==="value")&&i(E,ae,Oe,Et,y,u.children,p,x,P)}}O&1&&u.children!==m.children&&f(E,m.children)}else!S&&w==null&&ke(E,m,I,z,p,x,y);(($=z.onVnodeUpdated)||L)&&ge(()=>{$&&Me($,p,m,u),L&&ct(m,u,p,"updated")},x)},$e=(u,m,p,x,y,A,S)=>{for(let E=0;E<m.length;E++){const O=u[E],w=m[E],L=O.el&&(O.type===Ue||!Wt(O,w)||O.shapeFlag&70)?d(O.el):p;C(O,w,L,null,x,y,A,S,!0)}},ke=(u,m,p,x,y,A,S)=>{if(p!==x){for(const E in x){if(Pn(E))continue;const O=x[E],w=p[E];O!==w&&E!=="value"&&i(u,E,w,O,S,m.children,y,A,P)}if(p!==ne)for(const E in p)!Pn(E)&&!(E in x)&&i(u,E,p[E],null,S,m.children,y,A,P);"value"in x&&i(u,"value",p.value,x.value)}},yt=(u,m,p,x,y,A,S,E,O)=>{const w=m.el=u?u.el:s(""),L=m.anchor=u?u.anchor:s("");let{patchFlag:I,dynamicChildren:z,slotScopeIds:$}=m;$&&(E=E?E.concat($):$),u==null?(r(w,p,x),r(L,p,x),fe(m.children,p,L,y,A,S,E,O)):I>0&&I&64&&z&&u.dynamicChildren?($e(u.dynamicChildren,z,p,y,A,S,E),(m.key!=null||y&&m===y.subTree)&&zo(u,m,!0)):ve(u,m,p,L,y,A,S,E,O)},xt=(u,m,p,x,y,A,S,E,O)=>{m.slotScopeIds=E,u==null?m.shapeFlag&512?y.ctx.activate(m,p,x,S,O):wt(m,p,x,y,A,S,O):le(u,m,O)},wt=(u,m,p,x,y,A,S)=>{const E=u.component=Nf(u,x,y);if(ko(u)&&(E.ctx.renderer=te),Mf(E),E.asyncDep){if(y&&y.registerDep(E,ee),!u.el){const O=E.subTree=xe(dn);_(null,O,m,p)}return}ee(E,u,m,p,y,A,S)},le=(u,m,p)=>{const x=m.component=u.component;if($l(u,m,p))if(x.asyncDep&&!x.asyncResolved){X(x,m,p);return}else x.next=m,Nl(x.update),x.update();else m.el=u.el,x.vnode=m},ee=(u,m,p,x,y,A,S)=>{const E=()=>{if(u.isMounted){let{next:L,bu:I,u:z,parent:$,vnode:q}=u,Q=L,J;ut(u,!1),L?(L.el=q.el,X(u,L,S)):L=q,I&&dr(I),(J=L.props&&L.props.onVnodeBeforeUpdate)&&Me(J,$,L,q),ut(u,!0);const ae=mr(u),Oe=u.subTree;u.subTree=ae,C(Oe,ae,d(Oe.el),F(Oe),u,y,A),L.el=ae.el,Q===null&&Hl(u,ae.el),z&&ge(z,y),(J=L.props&&L.props.onVnodeUpdated)&&ge(()=>Me(J,$,L,q),y)}else{let L;const{el:I,props:z}=m,{bm:$,m:q,parent:Q}=u,J=Sn(m);if(ut(u,!1),$&&dr($),!J&&(L=z&&z.onVnodeBeforeMount)&&Me(L,Q,m),ut(u,!0),I&&H){const ae=()=>{u.subTree=mr(u),H(I,u.subTree,u,y,null)};J?m.type.__asyncLoader().then(()=>!u.isUnmounted&&ae()):ae()}else{const ae=u.subTree=mr(u);C(null,ae,p,x,u,y,A),m.el=ae.el}if(q&&ge(q,y),!J&&(L=z&&z.onVnodeMounted)){const ae=m;ge(()=>Me(L,Q,ae),y)}(m.shapeFlag&256||Q&&Sn(Q.vnode)&&Q.vnode.shapeFlag&256)&&u.a&&ge(u.a,y),u.isMounted=!0,m=p=x=null}},O=u.effect=new oa(E,()=>vo(w),u.scope),w=u.update=()=>O.run();w.id=u.uid,ut(u,!0),w()},X=(u,m,p)=>{m.component=u;const x=u.vnode.props;u.vnode=m,u.next=null,hf(u,m.props,x,p),vf(u,m.children,p),Dt(),Jn(void 0,u.update),$t()},ve=(u,m,p,x,y,A,S,E,O=!1)=>{const w=u&&u.children,L=u?u.shapeFlag:0,I=m.children,{patchFlag:z,shapeFlag:$}=m;if(z>0){if(z&128){He(w,I,p,x,y,A,S,E,O);return}else if(z&256){_t(w,I,p,x,y,A,S,E,O);return}}$&8?(L&16&&P(w,y,A),I!==w&&f(p,I)):L&16?$&16?He(w,I,p,x,y,A,S,E,O):P(w,y,A,!0):(L&8&&f(p,""),$&16&&fe(I,p,x,y,A,S,E,O))},_t=(u,m,p,x,y,A,S,E,O)=>{u=u||It,m=m||It;const w=u.length,L=m.length,I=Math.min(w,L);let z;for(z=0;z<I;z++){const $=m[z]=O?nt(m[z]):Le(m[z]);C(u[z],$,p,null,y,A,S,E,O)}w>L?P(u,y,A,!0,!1,I):fe(m,p,x,y,A,S,E,O,I)},He=(u,m,p,x,y,A,S,E,O)=>{let w=0;const L=m.length;let I=u.length-1,z=L-1;for(;w<=I&&w<=z;){const $=u[w],q=m[w]=O?nt(m[w]):Le(m[w]);if(Wt($,q))C($,q,p,null,y,A,S,E,O);else break;w++}for(;w<=I&&w<=z;){const $=u[I],q=m[z]=O?nt(m[z]):Le(m[z]);if(Wt($,q))C($,q,p,null,y,A,S,E,O);else break;I--,z--}if(w>I){if(w<=z){const $=z+1,q=$<L?m[$].el:x;for(;w<=z;)C(null,m[w]=O?nt(m[w]):Le(m[w]),p,q,y,A,S,E,O),w++}}else if(w>z)for(;w<=I;)Ae(u[w],y,A,!0),w++;else{const $=w,q=w,Q=new Map;for(w=q;w<=z;w++){const be=m[w]=O?nt(m[w]):Le(m[w]);be.key!=null&&Q.set(be.key,w)}let J,ae=0;const Oe=z-q+1;let Et=!1,Na=0;const Bt=new Array(Oe);for(w=0;w<Oe;w++)Bt[w]=0;for(w=$;w<=I;w++){const be=u[w];if(ae>=Oe){Ae(be,y,A,!0);continue}let Ne;if(be.key!=null)Ne=Q.get(be.key);else for(J=q;J<=z;J++)if(Bt[J-q]===0&&Wt(be,m[J])){Ne=J;break}Ne===void 0?Ae(be,y,A,!0):(Bt[Ne-q]=w+1,Ne>=Na?Na=Ne:Et=!0,C(be,m[Ne],p,null,y,A,S,E,O),ae++)}const Ma=Et?_f(Bt):It;for(J=Ma.length-1,w=Oe-1;w>=0;w--){const be=q+w,Ne=m[be],Fa=be+1<L?m[be+1].el:x;Bt[w]===0?C(null,Ne,p,Fa,y,A,S,E,O):Et&&(J<0||w!==Ma[J]?Te(Ne,p,Fa,2):J--)}}},Te=(u,m,p,x,y=null)=>{const{el:A,type:S,transition:E,children:O,shapeFlag:w}=u;if(w&6){Te(u.component.subTree,m,p,x);return}if(w&128){u.suspense.move(m,p,x);return}if(w&64){S.move(u,m,p,te);return}if(S===Ue){r(A,m,p);for(let I=0;I<O.length;I++)Te(O[I],m,p,x);r(u.anchor,m,p);return}if(S===Rn){D(u,m,p);return}if(x!==2&&w&1&&E)if(x===0)E.beforeEnter(A),r(A,m,p),ge(()=>E.enter(A),y);else{const{leave:I,delayLeave:z,afterLeave:$}=E,q=()=>r(A,m,p),Q=()=>{I(A,()=>{q(),$&&$()})};z?z(A,q,Q):Q()}else r(A,m,p)},Ae=(u,m,p,x=!1,y=!1)=>{const{type:A,props:S,ref:E,children:O,dynamicChildren:w,shapeFlag:L,patchFlag:I,dirs:z}=u;if(E!=null&&Nr(E,null,p,u,!0),L&256){m.ctx.deactivate(u);return}const $=L&1&&z,q=!Sn(u);let Q;if(q&&(Q=S&&S.onVnodeBeforeUnmount)&&Me(Q,m,u),L&6)N(u.component,p,x);else{if(L&128){u.suspense.unmount(p,x);return}$&&ct(u,null,m,"beforeUnmount"),L&64?u.type.remove(u,m,p,y,te,x):w&&(A!==Ue||I>0&&I&64)?P(w,m,p,!1,!0):(A===Ue&&I&384||!y&&L&16)&&P(O,m,p),x&&cr(u)}(q&&(Q=S&&S.onVnodeUnmounted)||$)&&ge(()=>{Q&&Me(Q,m,u),$&&ct(u,null,m,"unmounted")},p)},cr=u=>{const{type:m,el:p,anchor:x,transition:y}=u;if(m===Ue){b(p,x);return}if(m===Rn){Y(u);return}const A=()=>{a(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:S,delayLeave:E}=y,O=()=>S(p,A);E?E(u.el,A,O):O()}else A()},b=(u,m)=>{let p;for(;u!==m;)p=h(u),a(u),u=p;a(m)},N=(u,m,p)=>{const{bum:x,scope:y,update:A,subTree:S,um:E}=u;x&&dr(x),y.stop(),A&&(A.active=!1,Ae(S,u,m,p)),E&&ge(E,m),ge(()=>{u.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},P=(u,m,p,x=!1,y=!1,A=0)=>{for(let S=A;S<u.length;S++)Ae(u[S],m,p,x,y)},F=u=>u.shapeFlag&6?F(u.component.subTree):u.shapeFlag&128?u.suspense.next():h(u.anchor||u.el),G=(u,m,p)=>{u==null?m._vnode&&Ae(m._vnode,null,null,!0):C(m._vnode||null,u,m,null,null,null,p),xo(),m._vnode=u},te={p:C,um:Ae,m:Te,r:cr,mt:wt,mc:fe,pc:ve,pbc:$e,n:F,o:e};let W,H;return t&&([W,H]=t(te)),{render:G,hydrate:W,createApp:yf(G,W)}}function ut({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function zo(e,t,n=!1){const r=e.children,a=t.children;if(B(r)&&B(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=nt(a[i]),s.el=o.el),n||zo(o,s))}}function _f(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ef=e=>e.__isTeleport,Ue=Symbol(void 0),ha=Symbol(void 0),dn=Symbol(void 0),Rn=Symbol(void 0),tn=[];let Ce=null;function Af(e=!1){tn.push(Ce=e?null:[])}function kf(){tn.pop(),Ce=tn[tn.length-1]||null}let mn=1;function Za(e){mn+=e}function jo(e){return e.dynamicChildren=mn>0?Ce||It:null,kf(),mn>0&&Ce&&Ce.push(e),e}function bm(e,t,n,r,a,i){return jo($o(e,t,n,r,a,i,!0))}function Of(e,t,n,r,a){return jo(xe(e,t,n,r,a,!0))}function Mr(e){return e?e.__v_isVNode===!0:!1}function Wt(e,t){return e.type===t.type&&e.key===t.key}const nr="__vInternal",Do=({key:e})=>e!=null?e:null,In=({ref:e,ref_key:t,ref_for:n})=>e!=null?de(e)||ue(e)||U(e)?{i:ze,r:e,k:t,f:!!n}:e:null;function $o(e,t=null,n=null,r=0,a=null,i=e===Ue?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Do(t),ref:t&&In(t),scopeId:er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(pa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=de(n)?8:16),mn>0&&!o&&Ce&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ce.push(l),l}const xe=Pf;function Pf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===af)&&(e=dn),Mr(e)){const s=Mt(e,t,!0);return n&&pa(s,n),mn>0&&!i&&Ce&&(s.shapeFlag&6?Ce[Ce.indexOf(e)]=s:Ce.push(s)),s.patchFlag|=-2,s}if(Df(e)&&(e=e.__vccOpts),t){t=Cf(t);let{class:s,style:l}=t;s&&!de(s)&&(t.class=ea(s)),me(l)&&(lo(l)&&!B(l)&&(l=pe({},l)),t.style=Zr(l))}const o=de(e)?1:Ul(e)?128:Ef(e)?64:me(e)?4:U(e)?2:0;return $o(e,t,n,r,a,o,i,!0)}function Cf(e){return e?lo(e)||nr in e?pe({},e):e:null}function Mt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Rf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Do(s),ref:t&&t.ref?n&&a?B(a)?a.concat(In(t)):[a,In(t)]:In(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ue?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),el:e.el,anchor:e.anchor}}function Sf(e=" ",t=0){return xe(ha,null,e,t)}function ym(e,t){const n=xe(Rn,null,e);return n.staticCount=t,n}function Le(e){return e==null||typeof e=="boolean"?xe(dn):B(e)?xe(Ue,null,e.slice()):typeof e=="object"?nt(e):xe(ha,null,String(e))}function nt(e){return e.el===null||e.memo?e:Mt(e)}function pa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(B(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),pa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(nr in t)?t._ctx=ze:a===3&&ze&&(ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:ze},n=32):(t=String(t),r&64?(n=16,t=[Sf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=ea([t.class,r.class]));else if(a==="style")t.style=Zr([t.style,r.style]);else if(Kn(a)){const i=t[a],o=r[a];o&&i!==o&&!(B(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Me(e,t,n,r=null){Ie(e,t,7,[n,r])}const If=Lo();let Tf=0;function Nf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||If,i={uid:Tf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:To(r,a),emitsOptions:_o(r,a),emit:null,emitted:null,propsDefaults:ne,inheritAttrs:r.inheritAttrs,ctx:ne,data:ne,props:ne,attrs:ne,slots:ne,refs:ne,setupState:ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ll.bind(null,i),e.ce&&e.ce(i),i}let ce=null;const Ft=e=>{ce=e,e.scope.on()},gt=()=>{ce&&ce.scope.off(),ce=null};function Ho(e){return e.vnode.shapeFlag&4}let hn=!1;function Mf(e,t=!1){hn=t;const{props:n,children:r}=e.vnode,a=Ho(e);mf(e,n,a,t),gf(e,r);const i=a?Ff(e,t):void 0;return hn=!1,i}function Ff(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=fo(new Proxy(e.ctx,sf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?zf(e):null;Ft(e),Dt();const i=it(r,e,0,[e.props,a]);if($t(),gt(),Gi(i)){if(i.then(gt,gt),t)return i.then(o=>{ei(e,o,t)}).catch(o=>{Qn(o,e,0)});e.asyncDep=i}else ei(e,i,t)}else Uo(e,t)}function ei(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=ho(t)),Uo(e,n)}let ti;function Uo(e,t,n){const r=e.type;if(!e.render){if(!t&&ti&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=ti(a,c)}}e.render=r.render||Re}Ft(e),Dt(),lf(e),$t(),gt()}function Lf(e){return new Proxy(e.attrs,{get(t,n){return we(e,"get","$attrs"),t[n]}})}function zf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Lf(e))},slots:e.slots,emit:e.emit,expose:t}}function ga(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ho(fo(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in jn)return jn[n](e)}}))}function jf(e){return U(e)&&e.displayName||e.name}function Df(e){return U(e)&&"__vccOpts"in e}const oe=(e,t)=>Rl(e,t,hn);function rr(e,t,n){const r=arguments.length;return r===2?me(t)&&!B(t)?Mr(t)?xe(e,null,[t]):xe(e,t):xe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mr(n)&&(n=[n]),xe(e,t,n))}const $f="3.2.36",Hf="http://www.w3.org/2000/svg",mt=typeof document!="undefined"?document:null,ni=mt&&mt.createElement("template"),Uf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?mt.createElementNS(Hf,e):mt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>mt.createTextNode(e),createComment:e=>mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ni.innerHTML=r?`<svg>${e}</svg>`:e;const s=ni.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Bf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Wf(e,t,n){const r=e.style,a=de(n);if(n&&!a){for(const i in n)Fr(r,i,n[i]);if(t&&!de(t))for(const i in t)n[i]==null&&Fr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ri=/\s*!important$/;function Fr(e,t,n){if(B(n))n.forEach(r=>Fr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Yf(e,t);ri.test(n)?e.setProperty(jt(r),n.replace(ri,""),"important"):e[r]=n}}const ai=["Webkit","Moz","ms"],hr={};function Yf(e,t){const n=hr[t];if(n)return n;let r=De(t);if(r!=="filter"&&r in e)return hr[t]=r;r=Xn(r);for(let a=0;a<ai.length;a++){const i=ai[a]+r;if(i in e)return hr[t]=i}return t}const ii="http://www.w3.org/1999/xlink";function Kf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ii,t.slice(6,t.length)):e.setAttributeNS(ii,t,n);else{const i=Ls(t);n==null||i&&!Xi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function qf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Xi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[Bo,Vf]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let Lr=0;const Xf=Promise.resolve(),Gf=()=>{Lr=0},Qf=()=>Lr||(Xf.then(Gf),Lr=Bo());function Jf(e,t,n,r){e.addEventListener(t,n,r)}function Zf(e,t,n,r){e.removeEventListener(t,n,r)}function ec(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=tc(t);if(r){const c=i[t]=nc(r,a);Jf(e,s,c,l)}else o&&(Zf(e,s,o,l),i[t]=void 0)}}const oi=/(?:Once|Passive|Capture)$/;function tc(e){let t;if(oi.test(e)){t={};let n;for(;n=e.match(oi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[jt(e.slice(2)),t]}function nc(e,t){const n=r=>{const a=r.timeStamp||Bo();(Vf||a>=n.attached-1)&&Ie(rc(r,n.value),t,5,[r])};return n.value=e,n.attached=Qf(),n}function rc(e,t){if(B(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const si=/^on[a-z]/,ac=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Bf(e,r,a):t==="style"?Wf(e,n,r):Kn(t)?ta(t)||ec(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ic(e,t,r,a))?qf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Kf(e,t,r,a))};function ic(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&si.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||si.test(t)&&de(n)?!1:t in e}const oc=pe({patchProp:ac},Uf);let li;function sc(){return li||(li=xf(oc))}const lc=(...e)=>{const t=sc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=fc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function fc(e){return de(e)?document.querySelector(e):e}var cc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const uc={};function dc(e,t){const n=rf("router-view");return Af(),Of(n)}var mc=cc(uc,[["render",dc]]);const hc="modulepreload",fi={},pc="/",kn=function(t,n){return!n||n.length===0?t():Promise.all(n.map(r=>{if(r=`${pc}${r}`,r in fi)return;fi[r]=!0;const a=r.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=a?"stylesheet":hc,a||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),a)return new Promise((s,l)=>{o.addEventListener("load",s),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wo=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Ht=e=>Wo?Symbol(e):"_vr_"+e,gc=Ht("rvlm"),ci=Ht("rvd"),va=Ht("r"),Yo=Ht("rl"),zr=Ht("rvl"),Pt=typeof window!="undefined";function vc(e){return e.__esModule||Wo&&e[Symbol.toStringTag]==="Module"}const Z=Object.assign;function pr(e,t){const n={};for(const r in t){const a=t[r];n[r]=Array.isArray(a)?a.map(e):e(a)}return n}const nn=()=>{},bc=/\/$/,yc=e=>e.replace(bc,"");function gr(e,t,n="/"){let r,a={},i="",o="";const s=t.indexOf("?"),l=t.indexOf("#",s>-1?s:0);return s>-1&&(r=t.slice(0,s),i=t.slice(s+1,l>-1?l:t.length),a=e(i)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=Ec(r!=null?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:a,hash:o}}function xc(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ui(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function wc(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&Lt(t.matched[r],n.matched[a])&&Ko(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Lt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ko(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!_c(e[n],t[n]))return!1;return!0}function _c(e,t){return Array.isArray(e)?di(e,t):Array.isArray(t)?di(t,e):e===t}function di(e,t){return Array.isArray(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ec(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let a=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(a===1||o==="."))if(o==="..")a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var pn;(function(e){e.pop="pop",e.push="push"})(pn||(pn={}));var rn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(rn||(rn={}));function Ac(e){if(!e)if(Pt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),yc(e)}const kc=/^[^#]+#/;function Oc(e,t){return e.replace(kc,"#")+t}function Pc(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ar=()=>({left:window.pageXOffset,top:window.pageYOffset});function Cc(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Pc(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function mi(e,t){return(history.state?history.state.position-t:-1)+e}const jr=new Map;function Sc(e,t){jr.set(e,t)}function Rc(e){const t=jr.get(e);return jr.delete(e),t}let Ic=()=>location.protocol+"//"+location.host;function qo(e,t){const{pathname:n,search:r,hash:a}=t,i=e.indexOf("#");if(i>-1){let s=a.includes(e.slice(i))?e.slice(i).length:1,l=a.slice(s);return l[0]!=="/"&&(l="/"+l),ui(l,"")}return ui(n,e)+r+a}function Tc(e,t,n,r){let a=[],i=[],o=null;const s=({state:h})=>{const v=qo(e,location),k=n.value,M=t.value;let C=0;if(h){if(n.value=v,t.value=h,o&&o===k){o=null;return}C=M?h.position-M.position:0}else r(v);a.forEach(g=>{g(n.value,k,{delta:C,type:pn.pop,direction:C?C>0?rn.forward:rn.back:rn.unknown})})};function l(){o=n.value}function c(h){a.push(h);const v=()=>{const k=a.indexOf(h);k>-1&&a.splice(k,1)};return i.push(v),v}function f(){const{history:h}=window;!h.state||h.replaceState(Z({},h.state,{scroll:ar()}),"")}function d(){for(const h of i)h();i=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:d}}function hi(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?ar():null}}function Nc(e){const{history:t,location:n}=window,r={value:qo(e,n)},a={value:t.state};a.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Ic()+e+l;try{t[f?"replaceState":"pushState"](c,"",h),a.value=c}catch(v){console.error(v),n[f?"replace":"assign"](h)}}function o(l,c){const f=Z({},t.state,hi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position});i(l,f,!0),r.value=l}function s(l,c){const f=Z({},a.value,t.state,{forward:l,scroll:ar()});i(f.current,f,!0);const d=Z({},hi(r.value,l,null),{position:f.position+1},c);i(l,d,!1),r.value=l}return{location:r,state:a,push:s,replace:o}}function Mc(e){e=Ac(e);const t=Nc(e),n=Tc(e,t.state,t.location,t.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const a=Z({location:"",base:e,go:r,createHref:Oc.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Fc(e){return typeof e=="string"||e&&typeof e=="object"}function Vo(e){return typeof e=="string"||typeof e=="symbol"}const Je={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xo=Ht("nf");var pi;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(pi||(pi={}));function zt(e,t){return Z(new Error,{type:e,[Xo]:!0},t)}function Ze(e,t){return e instanceof Error&&Xo in e&&(t==null||!!(e.type&t))}const gi="[^/]+?",Lc={sensitive:!1,strict:!1,start:!0,end:!0},zc=/[.+*?^${}()[\]/\\]/g;function jc(e,t){const n=Z({},Lc,t),r=[];let a=n.start?"^":"";const i=[];for(const c of e){const f=c.length?[]:[90];n.strict&&!c.length&&(a+="/");for(let d=0;d<c.length;d++){const h=c[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(zc,"\\$&"),v+=40;else if(h.type===1){const{value:k,repeatable:M,optional:C,regexp:g}=h;i.push({name:k,repeatable:M,optional:C});const _=g||gi;if(_!==gi){v+=10;try{new RegExp(`(${_})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${k}" (${_}): `+D.message)}}let T=M?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(T=C&&c.length<2?`(?:/${T})`:"/"+T),C&&(T+="?"),a+=T,v+=20,C&&(v+=-8),M&&(v+=-20),_===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const o=new RegExp(a,n.sensitive?"":"i");function s(c){const f=c.match(o),d={};if(!f)return null;for(let h=1;h<f.length;h++){const v=f[h]||"",k=i[h-1];d[k.name]=v&&k.repeatable?v.split("/"):v}return d}function l(c){let f="",d=!1;for(const h of e){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const v of h)if(v.type===0)f+=v.value;else if(v.type===1){const{value:k,repeatable:M,optional:C}=v,g=k in c?c[k]:"";if(Array.isArray(g)&&!M)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const _=Array.isArray(g)?g.join("/"):g;if(!_)if(C)h.length<2&&e.length>1&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${k}"`);f+=_}}return f}return{re:o,score:r,keys:i,parse:s,stringify:l}}function Dc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function $c(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const i=Dc(r[n],a[n]);if(i)return i;n++}return a.length-r.length}const Hc={type:0,value:""},Uc=/[a-zA-Z0-9_]/;function Bc(e){if(!e)return[[]];if(e==="/")return[[Hc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${c}": ${v}`)}let n=0,r=n;const a=[];let i;function o(){i&&a.push(i),i=[]}let s=0,l,c="",f="";function d(){!c||(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;s<e.length;){if(l=e[s++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:l==="("?n=2:Uc.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&s--,f="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),a}function Wc(e,t,n){const r=jc(Bc(e.path),n),a=Z(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Yc(e,t){const n=[],r=new Map;t=bi({strict:!1,end:!0,sensitive:!1},t);function a(f){return r.get(f)}function i(f,d,h){const v=!h,k=qc(f);k.aliasOf=h&&h.record;const M=bi(t,f),C=[k];if("alias"in f){const T=typeof f.alias=="string"?[f.alias]:f.alias;for(const D of T)C.push(Z({},k,{components:h?h.record.components:k.components,path:D,aliasOf:h?h.record:k}))}let g,_;for(const T of C){const{path:D}=T;if(d&&D[0]!=="/"){const Y=d.record.path,re=Y[Y.length-1]==="/"?"":"/";T.path=d.record.path+(D&&re+D)}if(g=Wc(T,d,M),h?h.alias.push(g):(_=_||g,_!==g&&_.alias.push(g),v&&f.name&&!vi(g)&&o(f.name)),"children"in k){const Y=k.children;for(let re=0;re<Y.length;re++)i(Y[re],g,h&&h.children[re])}h=h||g,l(g)}return _?()=>{o(_)}:nn}function o(f){if(Vo(f)){const d=r.get(f);d&&(r.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function s(){return n}function l(f){let d=0;for(;d<n.length&&$c(f,n[d])>=0&&(f.record.path!==n[d].record.path||!Go(f,n[d]));)d++;n.splice(d,0,f),f.record.name&&!vi(f)&&r.set(f.record.name,f)}function c(f,d){let h,v={},k,M;if("name"in f&&f.name){if(h=r.get(f.name),!h)throw zt(1,{location:f});M=h.record.name,v=Z(Kc(d.params,h.keys.filter(_=>!_.optional).map(_=>_.name)),f.params),k=h.stringify(v)}else if("path"in f)k=f.path,h=n.find(_=>_.re.test(k)),h&&(v=h.parse(k),M=h.record.name);else{if(h=d.name?r.get(d.name):n.find(_=>_.re.test(d.path)),!h)throw zt(1,{location:f,currentLocation:d});M=h.record.name,v=Z({},d.params,f.params),k=h.stringify(v)}const C=[];let g=h;for(;g;)C.unshift(g.record),g=g.parent;return{name:M,path:k,params:v,matched:C,meta:Xc(C)}}return e.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:s,getRecordMatcher:a}}function Kc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function qc(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Vc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function Vc(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function vi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Xc(e){return e.reduce((t,n)=>Z(t,n.meta),{})}function bi(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Go(e,t){return t.children.some(n=>n===e||Go(e,n))}const Qo=/#/g,Gc=/&/g,Qc=/\//g,Jc=/=/g,Zc=/\?/g,Jo=/\+/g,eu=/%5B/g,tu=/%5D/g,Zo=/%5E/g,nu=/%60/g,es=/%7B/g,ru=/%7C/g,ts=/%7D/g,au=/%20/g;function ba(e){return encodeURI(""+e).replace(ru,"|").replace(eu,"[").replace(tu,"]")}function iu(e){return ba(e).replace(es,"{").replace(ts,"}").replace(Zo,"^")}function Dr(e){return ba(e).replace(Jo,"%2B").replace(au,"+").replace(Qo,"%23").replace(Gc,"%26").replace(nu,"`").replace(es,"{").replace(ts,"}").replace(Zo,"^")}function ou(e){return Dr(e).replace(Jc,"%3D")}function su(e){return ba(e).replace(Qo,"%23").replace(Zc,"%3F")}function lu(e){return e==null?"":su(e).replace(Qc,"%2F")}function $n(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function fu(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const i=r[a].replace(Jo," "),o=i.indexOf("="),s=$n(o<0?i:i.slice(0,o)),l=o<0?null:$n(i.slice(o+1));if(s in t){let c=t[s];Array.isArray(c)||(c=t[s]=[c]),c.push(l)}else t[s]=l}return t}function yi(e){let t="";for(let n in e){const r=e[n];if(n=ou(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Dr(i)):[r&&Dr(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function cu(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Array.isArray(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}function Yt(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function rt(e,t,n,r,a){const i=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((o,s)=>{const l=d=>{d===!1?s(zt(4,{from:n,to:t})):d instanceof Error?s(d):Fc(d)?s(zt(2,{from:t,to:d})):(i&&r.enterCallbacks[a]===i&&typeof d=="function"&&i.push(d),o())},c=e.call(r&&r.instances[a],t,n,l);let f=Promise.resolve(c);e.length<3&&(f=f.then(l)),f.catch(d=>s(d))})}function vr(e,t,n,r){const a=[];for(const i of e)for(const o in i.components){let s=i.components[o];if(!(t!=="beforeRouteEnter"&&!i.instances[o]))if(uu(s)){const c=(s.__vccOpts||s)[t];c&&a.push(rt(c,n,r,i,o))}else{let l=s();a.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=vc(c)?c.default:c;i.components[o]=f;const h=(f.__vccOpts||f)[t];return h&&rt(h,n,r,i,o)()}))}}return a}function uu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function xi(e){const t=ot(va),n=ot(Yo),r=oe(()=>t.resolve(Qt(e.to))),a=oe(()=>{const{matched:l}=r.value,{length:c}=l,f=l[c-1],d=n.matched;if(!f||!d.length)return-1;const h=d.findIndex(Lt.bind(null,f));if(h>-1)return h;const v=wi(l[c-2]);return c>1&&wi(f)===v&&d[d.length-1].path!==v?d.findIndex(Lt.bind(null,l[c-2])):h}),i=oe(()=>a.value>-1&&pu(n.params,r.value.params)),o=oe(()=>a.value>-1&&a.value===n.matched.length-1&&Ko(n.params,r.value.params));function s(l={}){return hu(l)?t[Qt(e.replace)?"replace":"push"](Qt(e.to)).catch(nn):Promise.resolve()}return{route:r,href:oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:s}}const du=bn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xi,setup(e,{slots:t}){const n=vn(xi(e)),{options:r}=ot(va),a=oe(()=>({[_i(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_i(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:rr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),mu=du;function hu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function pu(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!Array.isArray(a)||a.length!==r.length||r.some((i,o)=>i!==a[o]))return!1}return!0}function wi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _i=(e,t,n)=>e!=null?e:t!=null?t:n,gu=bn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ot(zr),a=oe(()=>e.route||r.value),i=ot(ci,0),o=oe(()=>a.value.matched[i]);Cn(ci,i+1),Cn(gc,o),Cn(zr,a);const s=kl();return en(()=>[s.value,o.value,e.name],([l,c,f],[d,h,v])=>{c&&(c.instances[f]=l,h&&h!==c&&l&&l===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),l&&c&&(!h||!Lt(c,h)||!d)&&(c.enterCallbacks[f]||[]).forEach(k=>k(l))},{flush:"post"}),()=>{const l=a.value,c=o.value,f=c&&c.components[e.name],d=e.name;if(!f)return Ei(n.default,{Component:f,route:l});const h=c.props[e.name],v=h?h===!0?l.params:typeof h=="function"?h(l):h:null,M=rr(f,Z({},v,t,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(c.instances[d]=null)},ref:s}));return Ei(n.default,{Component:M,route:l})||M}}});function Ei(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const vu=gu;function bu(e){const t=Yc(e.routes,e),n=e.parseQuery||fu,r=e.stringifyQuery||yi,a=e.history,i=Yt(),o=Yt(),s=Yt(),l=Ol(Je);let c=Je;Pt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=pr.bind(null,b=>""+b),d=pr.bind(null,lu),h=pr.bind(null,$n);function v(b,N){let P,F;return Vo(b)?(P=t.getRecordMatcher(b),F=N):F=b,t.addRoute(F,P)}function k(b){const N=t.getRecordMatcher(b);N&&t.removeRoute(N)}function M(){return t.getRoutes().map(b=>b.record)}function C(b){return!!t.getRecordMatcher(b)}function g(b,N){if(N=Z({},N||l.value),typeof b=="string"){const H=gr(n,b,N.path),u=t.resolve({path:H.path},N),m=a.createHref(H.fullPath);return Z(H,u,{params:h(u.params),hash:$n(H.hash),redirectedFrom:void 0,href:m})}let P;if("path"in b)P=Z({},b,{path:gr(n,b.path,N.path).path});else{const H=Z({},b.params);for(const u in H)H[u]==null&&delete H[u];P=Z({},b,{params:d(b.params)}),N.params=d(N.params)}const F=t.resolve(P,N),G=b.hash||"";F.params=f(h(F.params));const te=xc(r,Z({},b,{hash:iu(G),path:F.path})),W=a.createHref(te);return Z({fullPath:te,hash:G,query:r===yi?cu(b.query):b.query||{}},F,{redirectedFrom:void 0,href:W})}function _(b){return typeof b=="string"?gr(n,b,l.value.path):Z({},b)}function T(b,N){if(c!==b)return zt(8,{from:N,to:b})}function D(b){return se(b)}function Y(b){return D(Z(_(b),{replace:!0}))}function re(b){const N=b.matched[b.matched.length-1];if(N&&N.redirect){const{redirect:P}=N;let F=typeof P=="function"?P(b):P;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=_(F):{path:F},F.params={}),Z({query:b.query,hash:b.hash,params:b.params},F)}}function se(b,N){const P=c=g(b),F=l.value,G=b.state,te=b.force,W=b.replace===!0,H=re(P);if(H)return se(Z(_(H),{state:G,force:te,replace:W}),N||P);const u=P;u.redirectedFrom=N;let m;return!te&&wc(r,F,P)&&(m=zt(16,{to:u,from:F}),_t(F,F,!0,!1)),(m?Promise.resolve(m):fe(u,F)).catch(p=>Ze(p)?Ze(p,2)?p:ve(p):ee(p,u,F)).then(p=>{if(p){if(Ze(p,2))return se(Z(_(p.to),{state:G,force:te,replace:W}),N||u)}else p=$e(u,F,!0,W,G);return Ge(u,F,p),p})}function Ee(b,N){const P=T(b,N);return P?Promise.reject(P):Promise.resolve()}function fe(b,N){let P;const[F,G,te]=yu(b,N);P=vr(F.reverse(),"beforeRouteLeave",b,N);for(const H of F)H.leaveGuards.forEach(u=>{P.push(rt(u,b,N))});const W=Ee.bind(null,b,N);return P.push(W),At(P).then(()=>{P=[];for(const H of i.list())P.push(rt(H,b,N));return P.push(W),At(P)}).then(()=>{P=vr(G,"beforeRouteUpdate",b,N);for(const H of G)H.updateGuards.forEach(u=>{P.push(rt(u,b,N))});return P.push(W),At(P)}).then(()=>{P=[];for(const H of b.matched)if(H.beforeEnter&&!N.matched.includes(H))if(Array.isArray(H.beforeEnter))for(const u of H.beforeEnter)P.push(rt(u,b,N));else P.push(rt(H.beforeEnter,b,N));return P.push(W),At(P)}).then(()=>(b.matched.forEach(H=>H.enterCallbacks={}),P=vr(te,"beforeRouteEnter",b,N),P.push(W),At(P))).then(()=>{P=[];for(const H of o.list())P.push(rt(H,b,N));return P.push(W),At(P)}).catch(H=>Ze(H,8)?H:Promise.reject(H))}function Ge(b,N,P){for(const F of s.list())F(b,N,P)}function $e(b,N,P,F,G){const te=T(b,N);if(te)return te;const W=N===Je,H=Pt?history.state:{};P&&(F||W?a.replace(b.fullPath,Z({scroll:W&&H&&H.scroll},G)):a.push(b.fullPath,G)),l.value=b,_t(b,N,P,W),ve()}let ke;function yt(){ke||(ke=a.listen((b,N,P)=>{const F=g(b),G=re(F);if(G){se(Z(G,{replace:!0}),F).catch(nn);return}c=F;const te=l.value;Pt&&Sc(mi(te.fullPath,P.delta),ar()),fe(F,te).catch(W=>Ze(W,12)?W:Ze(W,2)?(se(W.to,F).then(H=>{Ze(H,20)&&!P.delta&&P.type===pn.pop&&a.go(-1,!1)}).catch(nn),Promise.reject()):(P.delta&&a.go(-P.delta,!1),ee(W,F,te))).then(W=>{W=W||$e(F,te,!1),W&&(P.delta?a.go(-P.delta,!1):P.type===pn.pop&&Ze(W,20)&&a.go(-1,!1)),Ge(F,te,W)}).catch(nn)}))}let xt=Yt(),wt=Yt(),le;function ee(b,N,P){ve(b);const F=wt.list();return F.length?F.forEach(G=>G(b,N,P)):console.error(b),Promise.reject(b)}function X(){return le&&l.value!==Je?Promise.resolve():new Promise((b,N)=>{xt.add([b,N])})}function ve(b){return le||(le=!b,yt(),xt.list().forEach(([N,P])=>b?P(b):N()),xt.reset()),b}function _t(b,N,P,F){const{scrollBehavior:G}=e;if(!Pt||!G)return Promise.resolve();const te=!P&&Rc(mi(b.fullPath,0))||(F||!P)&&history.state&&history.state.scroll||null;return go().then(()=>G(b,N,te)).then(W=>W&&Cc(W)).catch(W=>ee(W,b,N))}const He=b=>a.go(b);let Te;const Ae=new Set;return{currentRoute:l,addRoute:v,removeRoute:k,hasRoute:C,getRoutes:M,resolve:g,options:e,push:D,replace:Y,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:s.add,onError:wt.add,isReady:X,install(b){const N=this;b.component("RouterLink",mu),b.component("RouterView",vu),b.config.globalProperties.$router=N,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Qt(l)}),Pt&&!Te&&l.value===Je&&(Te=!0,D(a.location).catch(G=>{}));const P={};for(const G in Je)P[G]=oe(()=>l.value[G]);b.provide(va,N),b.provide(Yo,vn(P)),b.provide(zr,l);const F=b.unmount;Ae.add(b),b.unmount=function(){Ae.delete(b),Ae.size<1&&(c=Je,ke&&ke(),ke=null,l.value=Je,Te=!1,le=!1),F()}}}}function At(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function yu(e,t){const n=[],r=[],a=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const s=t.matched[o];s&&(e.matched.find(c=>Lt(c,s))?r.push(s):n.push(s));const l=e.matched[o];l&&(t.matched.find(c=>Lt(c,l))||a.push(l))}return[n,r,a]}const ns=bu({history:Mc(),routes:[{path:"/",component:()=>kn(()=>import("./Index.87775307.js"),["assets/Index.87775307.js","assets/Index.06c99fe9.css"])},{path:"/about",component:()=>kn(()=>import("./About.611cb6c0.js"),["assets/About.611cb6c0.js","assets/About.c00f29ae.css","assets/Footer.87db91d4.js","assets/Footer.91a8c494.css"])},{path:"/contact",component:()=>kn(()=>import("./Contact.3d8eac71.js"),["assets/Contact.3d8eac71.js","assets/Footer.87db91d4.js","assets/Footer.91a8c494.css"])},{path:"/project",component:()=>kn(()=>import("./Project.3c876074.js"),["assets/Project.3c876074.js","assets/Footer.87db91d4.js","assets/Footer.91a8c494.css"])}]});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ai(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ai(Object(n),!0).forEach(function(r){_u(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ai(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Hn(e){return Hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Hn(e)}function xu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ki(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wu(e,t,n){return t&&ki(e.prototype,t),n&&ki(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ya(e,t){return Au(e)||Ou(e,t)||rs(e,t)||Cu()}function ir(e){return Eu(e)||ku(e)||rs(e)||Pu()}function Eu(e){if(Array.isArray(e))return $r(e)}function Au(e){if(Array.isArray(e))return e}function ku(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ou(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function rs(e,t){if(!!e){if(typeof e=="string")return $r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $r(e,t)}}function $r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Oi=function(){},xa={},as={},is=null,os={mark:Oi,measure:Oi};try{typeof window!="undefined"&&(xa=window),typeof document!="undefined"&&(as=document),typeof MutationObserver!="undefined"&&(is=MutationObserver),typeof performance!="undefined"&&(os=performance)}catch{}var Su=xa.navigator||{},Pi=Su.userAgent,Ci=Pi===void 0?"":Pi,lt=xa,ie=as,Si=is,On=os;lt.document;var Xe=!!ie.documentElement&&!!ie.head&&typeof ie.addEventListener=="function"&&typeof ie.createElement=="function",ss=~Ci.indexOf("MSIE")||~Ci.indexOf("Trident/"),Ye="___FONT_AWESOME___",Hr=16,ls="fa",fs="svg-inline--fa",vt="data-fa-i2svg",Ur="data-fa-pseudo-element",Ru="data-fa-pseudo-element-pending",wa="data-prefix",_a="data-icon",Ri="fontawesome-i2svg",Iu="async",Tu=["HTML","HEAD","STYLE","SCRIPT"],cs=function(){try{return!0}catch{return!1}}(),Ea={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Un={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},us={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Nu={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Mu=/fa[srltdbk\-\ ]/,ds="fa-layers-text",Fu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Lu={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},ms=[1,2,3,4,5,6,7,8,9,10],zu=ms.concat([11,12,13,14,15,16,17,18,19,20]),ju=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Du=[].concat(ir(Object.keys(Un)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ht.GROUP,ht.SWAP_OPACITY,ht.PRIMARY,ht.SECONDARY]).concat(ms.map(function(e){return"".concat(e,"x")})).concat(zu.map(function(e){return"w-".concat(e)})),hs=lt.FontAwesomeConfig||{};function $u(e){var t=ie.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Hu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ie&&typeof ie.querySelector=="function"){var Uu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Uu.forEach(function(e){var t=ya(e,2),n=t[0],r=t[1],a=Hu($u(n));a!=null&&(hs[r]=a)})}var Bu={familyPrefix:ls,styleDefault:"solid",replacementClass:fs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},an=R(R({},Bu),hs);an.autoReplaceSvg||(an.observeMutations=!1);var j={};Object.keys(an).forEach(function(e){Object.defineProperty(j,e,{enumerable:!0,set:function(n){an[e]=n,Tn.forEach(function(r){return r(j)})},get:function(){return an[e]}})});lt.FontAwesomeConfig=j;var Tn=[];function Wu(e){return Tn.push(e),function(){Tn.splice(Tn.indexOf(e),1)}}var et=Hr,je={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yu(e){if(!(!e||!Xe)){var t=ie.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ie.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return ie.head.insertBefore(t,r),e}}var Ku="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gn(){for(var e=12,t="";e-- >0;)t+=Ku[Math.random()*62|0];return t}function Ut(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Aa(e){return e.classList?Ut(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ps(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ps(e[n]),'" ')},"").trim()}function or(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ka(e){return e.size!==je.size||e.x!==je.x||e.y!==je.y||e.rotate!==je.rotate||e.flipX||e.flipY}function Vu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Xu(e){var t=e.transform,n=e.width,r=n===void 0?Hr:n,a=e.height,i=a===void 0?Hr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ss?l+="translate(".concat(t.x/et-r/2,"em, ").concat(t.y/et-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/et,"em), calc(-50% + ").concat(t.y/et,"em)) "):l+="translate(".concat(t.x/et,"em, ").concat(t.y/et,"em) "),l+="scale(".concat(t.size/et*(t.flipX?-1:1),", ").concat(t.size/et*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Gu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function gs(){var e=ls,t=fs,n=j.familyPrefix,r=j.replacementClass,a=Gu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ii=!1;function br(){j.autoAddCss&&!Ii&&(Yu(gs()),Ii=!0)}var Qu={mixout:function(){return{dom:{css:gs,insertCss:br}}},hooks:function(){return{beforeDOMElementCreation:function(){br()},beforeI2svg:function(){br()}}}},Ke=lt||{};Ke[Ye]||(Ke[Ye]={});Ke[Ye].styles||(Ke[Ye].styles={});Ke[Ye].hooks||(Ke[Ye].hooks={});Ke[Ye].shims||(Ke[Ye].shims=[]);var Se=Ke[Ye],vs=[],Ju=function e(){ie.removeEventListener("DOMContentLoaded",e),Bn=1,vs.map(function(t){return t()})},Bn=!1;Xe&&(Bn=(ie.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ie.readyState),Bn||ie.addEventListener("DOMContentLoaded",Ju));function Zu(e){!Xe||(Bn?setTimeout(e,0):vs.push(e))}function yn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ps(e):"<".concat(t," ").concat(qu(r),">").concat(i.map(yn).join(""),"</").concat(t,">")}function Ti(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ed=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},yr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?ed(n,a):n,l,c,f;for(r===void 0?(l=1,f=t[i[0]]):(l=0,f=r);l<o;l++)c=i[l],f=s(f,t[c],c,t);return f};function td(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Br(e){var t=td(e);return t.length===1?t[0].toString(16):null}function nd(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ni(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Wr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ni(t);typeof Se.hooks.addPack=="function"&&!a?Se.hooks.addPack(e,Ni(t)):Se.styles[e]=R(R({},Se.styles[e]||{}),i),e==="fas"&&Wr("fa",t)}var on=Se.styles,rd=Se.shims,ad=Object.values(us),Oa=null,bs={},ys={},xs={},ws={},_s={},id=Object.keys(Ea);function od(e){return~Du.indexOf(e)}function sd(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!od(a)?a:null}var Es=function(){var t=function(i){return yr(on,function(o,s,l){return o[l]=yr(s,i,{}),o},{})};bs=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ys=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),_s=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in on||j.autoFetchSvg,r=yr(rd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});xs=r.names,ws=r.unicodes,Oa=sr(j.styleDefault)};Wu(function(e){Oa=sr(e.styleDefault)});Es();function Pa(e,t){return(bs[e]||{})[t]}function ld(e,t){return(ys[e]||{})[t]}function St(e,t){return(_s[e]||{})[t]}function As(e){return xs[e]||{prefix:null,iconName:null}}function fd(e){var t=ws[e],n=Pa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ft(){return Oa}var Ca=function(){return{prefix:null,iconName:null,rest:[]}};function sr(e){var t=Ea[e],n=Un[e]||Un[t],r=e in Se.styles?e:null;return n||r||null}function lr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=sd(j.familyPrefix,s);if(on[s]?(s=ad.includes(s)?Nu[s]:s,a=s,o.prefix=s):id.indexOf(s)>-1?(a=s,o.prefix=sr(s)):l?o.iconName=l:s!==j.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var c=a==="fa"?As(o.iconName):{},f=St(o.prefix,o.iconName);c.prefix&&(a=null),o.iconName=c.iconName||f||o.iconName,o.prefix=c.prefix||o.prefix,o.prefix==="far"&&!on.far&&on.fas&&!j.autoFetchSvg&&(o.prefix="fas")}return o},Ca());return(i.prefix==="fa"||a==="fa")&&(i.prefix=ft()||"fas"),i}var cd=function(){function e(){xu(this,e),this.definitions={}}return wu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=R(R({},n.definitions[s]||{}),o[s]),Wr(s,o[s]);var l=us[s];l&&Wr(l,o[s]),Es()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[s][d]=c)}),n[s][l]=c}),n}}]),e}(),Mi=[],Rt={},Nt={},ud=Object.keys(Nt);function dd(e,t){var n=t.mixoutsTo;return Mi=e,Rt={},Object.keys(Nt).forEach(function(r){ud.indexOf(r)===-1&&delete Nt[r]}),Mi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Hn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Rt[o]||(Rt[o]=[]),Rt[o].push(i[o])})}r.provides&&r.provides(Nt)}),n}function Yr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Rt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Rt[e]||[];a.forEach(function(i){i.apply(null,n)})}function qe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Nt[e]?Nt[e].apply(null,t):void 0}function Kr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ft();if(!!t)return t=St(n,t)||t,Ti(ks.definitions,n,t)||Ti(Se.styles,n,t)}var ks=new cd,md=function(){j.autoReplaceSvg=!1,j.observeMutations=!1,bt("noAuto")},hd={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xe?(bt("beforeI2svg",t),qe("pseudoElements2svg",t),qe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;j.autoReplaceSvg===!1&&(j.autoReplaceSvg=!0),j.observeMutations=!0,Zu(function(){gd({autoReplaceSvgRoot:n}),bt("watch",t)})}},pd={icon:function(t){if(t===null)return null;if(Hn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:St(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=sr(t[0]);return{prefix:r,iconName:St(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(j.familyPrefix,"-"))>-1||t.match(Mu))){var a=lr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||ft(),iconName:St(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=ft();return{prefix:i,iconName:St(i,t)||t}}}},_e={noAuto:md,config:j,dom:hd,parse:pd,library:ks,findIconDefinition:Kr,toHtml:yn},gd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ie:n;(Object.keys(Se.styles).length>0||j.autoFetchSvg)&&Xe&&j.autoReplaceSvg&&_e.dom.i2svg({node:r})};function fr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return yn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!Xe){var r=ie.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function vd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ka(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=or(R(R({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function bd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(j.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},a),{},{id:o}),children:r}]}]}function Sa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,v=h===void 0?!1:h,k=r.found?r:n,M=k.width,C=k.height,g=a==="fak",_=[j.replacementClass,i?"".concat(j.familyPrefix,"-").concat(i):""].filter(function(fe){return d.classes.indexOf(fe)===-1}).filter(function(fe){return fe!==""||!!fe}).concat(d.classes).join(" "),T={children:[],attributes:R(R({},d.attributes),{},{"data-prefix":a,"data-icon":i,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(C)})},D=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(M/C*16*.0625,"em")}:{};v&&(T.attributes[vt]=""),l&&(T.children.push({tag:"title",attributes:{id:T.attributes["aria-labelledby"]||"title-".concat(f||gn())},children:[l]}),delete T.attributes.title);var Y=R(R({},T),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:R(R({},D),d.styles)}),re=r.found&&n.found?qe("generateAbstractMask",Y)||{children:[],attributes:{}}:qe("generateAbstractIcon",Y)||{children:[],attributes:{}},se=re.children,Ee=re.attributes;return Y.children=se,Y.attributes=Ee,s?bd(Y):vd(Y)}function Fi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=R(R(R({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[vt]="");var f=R({},o.styles);ka(a)&&(f.transform=Xu({transform:a,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=or(f);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function yd(e){var t=e.content,n=e.title,r=e.extra,a=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=or(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var xr=Se.styles;function qr(e){var t=e[0],n=e[1],r=e.slice(4),a=ya(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(j.familyPrefix,"-").concat(ht.GROUP)},children:[{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(ht.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(j.familyPrefix,"-").concat(ht.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var xd={found:!1,width:512,height:512};function wd(e,t){!cs&&!j.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Vr(e,t){var n=t;return t==="fa"&&j.styleDefault!==null&&(t=ft()),new Promise(function(r,a){if(qe("missingIconAbstract"),n==="fa"){var i=As(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&xr[t]&&xr[t][e]){var o=xr[t][e];return r(qr(o))}wd(e,t),r(R(R({},xd),{},{icon:j.showMissingIcons&&e?qe("missingIconAbstract")||{}:{}}))})}var Li=function(){},Xr=j.measurePerformance&&On&&On.mark&&On.measure?On:{mark:Li,measure:Li},Vt='FA "6.1.1"',_d=function(t){return Xr.mark("".concat(Vt," ").concat(t," begins")),function(){return Os(t)}},Os=function(t){Xr.mark("".concat(Vt," ").concat(t," ends")),Xr.measure("".concat(Vt," ").concat(t),"".concat(Vt," ").concat(t," begins"),"".concat(Vt," ").concat(t," ends"))},Ra={begin:_d,end:Os},Nn=function(){};function zi(e){var t=e.getAttribute?e.getAttribute(vt):null;return typeof t=="string"}function Ed(e){var t=e.getAttribute?e.getAttribute(wa):null,n=e.getAttribute?e.getAttribute(_a):null;return t&&n}function Ad(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(j.replacementClass)}function kd(){if(j.autoReplaceSvg===!0)return Mn.replace;var e=Mn[j.autoReplaceSvg];return e||Mn.replace}function Od(e){return ie.createElementNS("http://www.w3.org/2000/svg",e)}function Pd(e){return ie.createElement(e)}function Ps(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Od:Pd:n;if(typeof e=="string")return ie.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ps(o,{ceFn:r}))}),a}function Cd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Mn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ps(a),n)}),n.getAttribute(vt)===null&&j.keepOriginalSource){var r=ie.createComment(Cd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Aa(n).indexOf(j.replacementClass))return Mn.replace(t);var a=new RegExp("".concat(j.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===j.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return yn(s)}).join(`
`);n.setAttribute(vt,""),n.innerHTML=o}};function ji(e){e()}function Cs(e,t){var n=typeof t=="function"?t:Nn;if(e.length===0)n();else{var r=ji;j.mutateApproach===Iu&&(r=lt.requestAnimationFrame||ji),r(function(){var a=kd(),i=Ra.begin("mutate");e.map(a),i(),n()})}}var Ia=!1;function Ss(){Ia=!0}function Gr(){Ia=!1}var Wn=null;function Di(e){if(!!Si&&!!j.observeMutations){var t=e.treeCallback,n=t===void 0?Nn:t,r=e.nodeCallback,a=r===void 0?Nn:r,i=e.pseudoElementsCallback,o=i===void 0?Nn:i,s=e.observeMutationsRoot,l=s===void 0?ie:s;Wn=new Si(function(c){if(!Ia){var f=ft();Ut(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!zi(d.addedNodes[0])&&(j.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&j.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&zi(d.target)&&~ju.indexOf(d.attributeName))if(d.attributeName==="class"&&Ed(d.target)){var h=lr(Aa(d.target)),v=h.prefix,k=h.iconName;d.target.setAttribute(wa,v||f),k&&d.target.setAttribute(_a,k)}else Ad(d.target)&&a(d.target)})}}),Xe&&Wn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Sd(){!Wn||Wn.disconnect()}function Rd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Id(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=lr(Aa(e));return a.prefix||(a.prefix=ft()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=ld(a.prefix,e.innerText)||Pa(a.prefix,Br(e.innerText))),a}function Td(e){var t=Ut(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return j.autoA11y&&(n?t["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(r||gn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Nd(){return{iconName:null,title:null,titleId:null,prefix:null,transform:je,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function $i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Id(e),r=n.iconName,a=n.prefix,i=n.rest,o=Td(e),s=Yr("parseNodeAttributes",{},e),l=t.styleParser?Rd(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:je,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Md=Se.styles;function Rs(e){var t=j.autoReplaceSvg==="nest"?$i(e,{styleParser:!1}):$i(e);return~t.extra.classes.indexOf(ds)?qe("generateLayersText",e,t):qe("generateSvgReplacementMutation",e,t)}function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xe)return Promise.resolve();var n=ie.documentElement.classList,r=function(d){return n.add("".concat(Ri,"-").concat(d))},a=function(d){return n.remove("".concat(Ri,"-").concat(d))},i=j.autoFetchSvg?Object.keys(Ea):Object.keys(Md),o=[".".concat(ds,":not([").concat(vt,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(vt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ut(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ra.begin("onTree"),c=s.reduce(function(f,d){try{var h=Rs(d);h&&f.push(h)}catch(v){cs||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,d){Promise.all(c).then(function(h){Cs(h,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),d(h)})})}function Fd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Rs(e).then(function(n){n&&Cs([n],t)})}function Ld(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Kr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Kr(a||{})),e(r,R(R({},n),{},{mask:a}))}}var zd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?je:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,d=n.title,h=d===void 0?null:d,v=n.titleId,k=v===void 0?null:v,M=n.classes,C=M===void 0?[]:M,g=n.attributes,_=g===void 0?{}:g,T=n.styles,D=T===void 0?{}:T;if(!!t){var Y=t.prefix,re=t.iconName,se=t.icon;return fr(R({type:"icon"},t),function(){return bt("beforeDOMElementCreation",{iconDefinition:t,params:n}),j.autoA11y&&(h?_["aria-labelledby"]="".concat(j.replacementClass,"-title-").concat(k||gn()):(_["aria-hidden"]="true",_.focusable="false")),Sa({icons:{main:qr(se),mask:l?qr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:re,transform:R(R({},je),a),symbol:o,title:h,maskId:f,titleId:k,extra:{attributes:_,styles:D,classes:C}})})}},jd={mixout:function(){return{icon:Ld(zd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hi,n.nodeCallback=Fd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?ie:r,i=n.callback,o=i===void 0?function(){}:i;return Hi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(v,k){Promise.all([Vr(a,s),f.iconName?Vr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var C=ya(M,2),g=C[0],_=C[1];v([n,Sa({icons:{main:g,mask:_},prefix:s,iconName:a,transform:l,symbol:c,maskId:d,title:i,titleId:o,extra:h,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=or(s);l.length>0&&(a.style=l);var c;return ka(o)&&(c=qe("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Dd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return fr({type:"layer"},function(){bt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(j.familyPrefix,"-layers")].concat(ir(i)).join(" ")},children:o}]})}}}},$d={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,f=r.styles,d=f===void 0?{}:f;return fr({type:"counter",content:n},function(){return bt("beforeDOMElementCreation",{content:n,params:r}),yd({content:n.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(j.familyPrefix,"-layers-counter")].concat(ir(s))}})})}}}},Hd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?je:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,f=r.attributes,d=f===void 0?{}:f,h=r.styles,v=h===void 0?{}:h;return fr({type:"text",content:n},function(){return bt("beforeDOMElementCreation",{content:n,params:r}),Fi({content:n,transform:R(R({},je),i),title:s,extra:{attributes:d,styles:v,classes:["".concat(j.familyPrefix,"-layers-text")].concat(ir(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ss){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return j.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Fi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Ud=new RegExp('"',"ug"),Ui=[1105920,1112319];function Bd(e){var t=e.replace(Ud,""),n=nd(t,0),r=n>=Ui[0]&&n<=Ui[1],a=t.length===2?t[0]===t[1]:!1;return{value:Br(a?t[0]:t),isSecondary:r||a}}function Bi(e,t){var n="".concat(Ru).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ut(e.children),o=i.filter(function(re){return re.getAttribute(Ur)===t})[0],s=lt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Fu),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&f!=="none"&&f!==""){var d=s.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Un[l[2].toLowerCase()]:Lu[c],v=Bd(d),k=v.value,M=v.isSecondary,C=l[0].startsWith("FontAwesome"),g=Pa(h,k),_=g;if(C){var T=fd(k);T.iconName&&T.prefix&&(g=T.iconName,h=T.prefix)}if(g&&!M&&(!o||o.getAttribute(wa)!==h||o.getAttribute(_a)!==_)){e.setAttribute(n,_),o&&e.removeChild(o);var D=Nd(),Y=D.extra;Y.attributes[Ur]=t,Vr(g,h).then(function(re){var se=Sa(R(R({},D),{},{icons:{main:re,mask:Ca()},prefix:h,iconName:_,extra:Y,watchable:!0})),Ee=ie.createElement("svg");t==="::before"?e.insertBefore(Ee,e.firstChild):e.appendChild(Ee),Ee.outerHTML=se.map(function(fe){return yn(fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Wd(e){return Promise.all([Bi(e,"::before"),Bi(e,"::after")])}function Yd(e){return e.parentNode!==document.head&&!~Tu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ur)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Wi(e){if(!!Xe)return new Promise(function(t,n){var r=Ut(e.querySelectorAll("*")).filter(Yd).map(Wd),a=Ra.begin("searchPseudoElements");Ss(),Promise.all(r).then(function(){a(),Gr(),t()}).catch(function(){a(),Gr(),n()})})}var Kd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Wi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?ie:r;j.searchPseudoElements&&Wi(a)}}},Yi=!1,qd={mixout:function(){return{dom:{unwatch:function(){Ss(),Yi=!0}}}},hooks:function(){return{bootstrap:function(){Di(Yr("mutationObserverCallbacks",{}))},noAuto:function(){Sd()},watch:function(n){var r=n.observeMutationsRoot;Yi?Gr():Di(Yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ki=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Vd={mixout:function(){return{parse:{transform:function(n){return Ki(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ki(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),d={transform:"".concat(l," ").concat(c," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:h};return{tag:"g",attributes:R({},v.outer),children:[{tag:"g",attributes:R({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),v.path)}]}]}}}},wr={x:0,y:0,width:"100%",height:"100%"};function qi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Xd(e){return e.tag==="g"?e.children:[e]}var Gd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?lr(a.split(" ").map(function(o){return o.trim()})):Ca();return i.prefix||(i.prefix=ft()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,d=o.width,h=o.icon,v=Vu({transform:l,containerWidth:d,iconWidth:c}),k={tag:"rect",attributes:R(R({},wr),{},{fill:"white"})},M=f.children?{children:f.children.map(qi)}:{},C={tag:"g",attributes:R({},v.inner),children:[qi(R({tag:f.tag,attributes:R(R({},f.attributes),v.path)},M))]},g={tag:"g",attributes:R({},v.outer),children:[C]},_="mask-".concat(s||gn()),T="clip-".concat(s||gn()),D={tag:"mask",attributes:R(R({},wr),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,g]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:Xd(h)},D]};return r.push(Y,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(_,")")},wr)}),{children:r,attributes:a}}}},Qd={provides:function(t){var n=!1;lt.matchMedia&&(n=lt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=R(R({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:R(R({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:R(R({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:R(R({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Jd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Zd=[Qu,jd,Dd,$d,Hd,Kd,qd,Vd,Gd,Qd,Jd];dd(Zd,{mixoutsTo:_e});_e.noAuto;var Is=_e.config,em=_e.library;_e.dom;var Ts=_e.parse;_e.findIconDefinition;_e.toHtml;var tm=_e.icon;_e.layer;var nm=_e.text;_e.counter;/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var rm={prefix:"fab",iconName:"behance",icon:[576,512,[],"f1b4","M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"]},am={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},im={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};em.add(am,rm,im);var om=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function sm(e,t){return t={exports:{}},e(t,t.exports),t.exports}var lm=sm(function(e){(function(t){var n=function(g,_,T){if(!c(_)||d(_)||h(_)||v(_)||l(_))return _;var D,Y=0,re=0;if(f(_))for(D=[],re=_.length;Y<re;Y++)D.push(n(g,_[Y],T));else{D={};for(var se in _)Object.prototype.hasOwnProperty.call(_,se)&&(D[g(se,T)]=n(g,_[se],T))}return D},r=function(g,_){_=_||{};var T=_.separator||"_",D=_.split||/(?=[A-Z])/;return g.split(D).join(T)},a=function(g){return k(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(_,T){return T?T.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var _=a(g);return _.substr(0,1).toUpperCase()+_.substr(1)},o=function(g,_){return r(g,_).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},c=function(g){return g===Object(g)},f=function(g){return s.call(g)=="[object Array]"},d=function(g){return s.call(g)=="[object Date]"},h=function(g){return s.call(g)=="[object RegExp]"},v=function(g){return s.call(g)=="[object Boolean]"},k=function(g){return g=g-0,g===g},M=function(g,_){var T=_&&"process"in _?_.process:_;return typeof T!="function"?g:function(D,Y){return T(D,g,Y)}},C={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,_){return n(M(a,_),g)},decamelizeKeys:function(g,_){return n(M(o,_),g,_)},pascalizeKeys:function(g,_){return n(M(i,_),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=C:t.humps=C})(om)}),fm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xt=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Yn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},cm=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||!Object.prototype.hasOwnProperty.call(e,r)||(n[r]=e[r]);return n},Qr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)};function um(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=lm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function dm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ta(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ta(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.class=dm(f);break;case"style":l.style=um(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=cm(n,["class","style"]);return rr(e.tag,Yn({},t,{class:a.class,style:Yn({},a.style,o)},a.attrs,s),r)}var Ns=!1;try{Ns=!0}catch{}function mm(){if(!Ns&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function sn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Xt({},e,t):{}}function hm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Xt(t,"fa-"+e.size,e.size!==null),Xt(t,"fa-rotate-"+e.rotation,e.rotation!==null),Xt(t,"fa-pull-"+e.pull,e.pull!==null),Xt(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Vi(e){if(e===null)return null;if((typeof e=="undefined"?"undefined":fm(e))==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var pm=bn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=oe(function(){return Vi(t.icon)}),i=oe(function(){return sn("classes",hm(t))}),o=oe(function(){return sn("transform",typeof t.transform=="string"?Ts.transform(t.transform):t.transform)}),s=oe(function(){return sn("mask",Vi(t.mask))}),l=oe(function(){return tm(a.value,Yn({},i.value,o.value,s.value,{symbol:t.symbol,title:t.title}))});en(l,function(f){if(!f)return mm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=oe(function(){return l.value?Ta(l.value.abstract[0],{},r):null});return function(){return c.value}}});bn({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Is.familyPrefix,i=oe(function(){return[a+"-layers"].concat(Qr(t.fixedWidth?[a+"-fw"]:[]))});return function(){return rr("div",{class:i.value},r.default?r.default():[])}}});bn({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Is.familyPrefix,i=oe(function(){return sn("classes",[].concat(Qr(t.counter?[a+"-layers-counter"]:[]),Qr(t.position?[a+"-layers-"+t.position]:[])))}),o=oe(function(){return sn("transform",typeof t.transform=="string"?Ts.transform(t.transform):t.transform)}),s=oe(function(){var c=nm(t.value.toString(),Yn({},o.value,i.value)),f=c.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=oe(function(){return Ta(s.value,{},r)});return function(){return l.value}}});ns.afterEach((e,t,n)=>{window.scrollTo(0,0)});lc(mc).use(ns).component("fa",pm).mount("#app");export{Ue as F,cc as _,xe as a,vm as b,bm as c,$o as d,Sf as e,ym as f,Af as o,gm as p,rf as r,zl as w};
