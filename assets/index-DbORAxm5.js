function Jd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const l in r)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(r,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>r[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function bd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hu={exports:{}},Bl={},Qu={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Er=Symbol.for("react.element"),e0=Symbol.for("react.portal"),t0=Symbol.for("react.fragment"),n0=Symbol.for("react.strict_mode"),r0=Symbol.for("react.profiler"),l0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),o0=Symbol.for("react.forward_ref"),s0=Symbol.for("react.suspense"),a0=Symbol.for("react.memo"),u0=Symbol.for("react.lazy"),ya=Symbol.iterator;function c0(e){return e===null||typeof e!="object"?null:(e=ya&&e[ya]||e["@@iterator"],typeof e=="function"?e:null)}var Yu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xu=Object.assign,Ku={};function zn(e,t,n){this.props=e,this.context=t,this.refs=Ku,this.updater=n||Yu}zn.prototype.isReactComponent={};zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gu(){}Gu.prototype=zn.prototype;function us(e,t,n){this.props=e,this.context=t,this.refs=Ku,this.updater=n||Yu}var cs=us.prototype=new Gu;cs.constructor=us;Xu(cs,zn.prototype);cs.isPureReactComponent=!0;var va=Array.isArray,Zu=Object.prototype.hasOwnProperty,fs={current:null},qu={key:!0,ref:!0,__self:!0,__source:!0};function Ju(e,t,n){var r,l={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)Zu.call(t,r)&&!qu.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Er,type:e,key:i,ref:o,props:l,_owner:fs.current}}function f0(e,t){return{$$typeof:Er,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ds(e){return typeof e=="object"&&e!==null&&e.$$typeof===Er}function d0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ga=/\/+/g;function Ri(e,t){return typeof e=="object"&&e!==null&&e.key!=null?d0(""+e.key):t.toString(36)}function br(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Er:case e0:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+Ri(o,0):r,va(l)?(n="",e!=null&&(n=e.replace(ga,"$&/")+"/"),br(l,t,n,"",function(c){return c})):l!=null&&(ds(l)&&(l=f0(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(ga,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",va(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Ri(i,s);o+=br(i,t,n,a,l)}else if(a=c0(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Ri(i,s++),o+=br(i,t,n,a,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Or(e,t,n){if(e==null)return e;var r=[],l=0;return br(e,r,"","",function(i){return t.call(n,i,l++)}),r}function p0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var xe={current:null},el={transition:null},m0={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:el,ReactCurrentOwner:fs};function bu(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Or,forEach:function(e,t,n){Or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Or(e,function(){t++}),t},toArray:function(e){return Or(e,function(t){return t})||[]},only:function(e){if(!ds(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=zn;O.Fragment=t0;O.Profiler=r0;O.PureComponent=us;O.StrictMode=n0;O.Suspense=s0;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;O.act=bu;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xu({},e.props),l=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=fs.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Zu.call(t,a)&&!qu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Er,type:e.type,key:l,ref:i,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:i0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:l0,_context:e},e.Consumer=e};O.createElement=Ju;O.createFactory=function(e){var t=Ju.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:o0,render:e}};O.isValidElement=ds;O.lazy=function(e){return{$$typeof:u0,_payload:{_status:-1,_result:e},_init:p0}};O.memo=function(e,t){return{$$typeof:a0,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=el.transition;el.transition={};try{e()}finally{el.transition=t}};O.unstable_act=bu;O.useCallback=function(e,t){return xe.current.useCallback(e,t)};O.useContext=function(e){return xe.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return xe.current.useDeferredValue(e)};O.useEffect=function(e,t){return xe.current.useEffect(e,t)};O.useId=function(){return xe.current.useId()};O.useImperativeHandle=function(e,t,n){return xe.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return xe.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return xe.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return xe.current.useMemo(e,t)};O.useReducer=function(e,t,n){return xe.current.useReducer(e,t,n)};O.useRef=function(e){return xe.current.useRef(e)};O.useState=function(e){return xe.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return xe.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return xe.current.useTransition()};O.version="18.3.1";Qu.exports=O;var j=Qu.exports;const ec=bd(j),so=Jd({__proto__:null,default:ec},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0=j,y0=Symbol.for("react.element"),v0=Symbol.for("react.fragment"),g0=Object.prototype.hasOwnProperty,x0=h0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w0={key:!0,ref:!0,__self:!0,__source:!0};function tc(e,t,n){var r,l={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)g0.call(t,r)&&!w0.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:y0,type:e,key:i,ref:o,props:l,_owner:x0.current}}Bl.Fragment=v0;Bl.jsx=tc;Bl.jsxs=tc;Hu.exports=Bl;var u=Hu.exports,ao={},nc={exports:{}},Oe={},rc={exports:{}},lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,M){var R=z.length;z.push(M);e:for(;0<R;){var q=R-1>>>1,re=z[q];if(0<l(re,M))z[q]=M,z[R]=re,R=q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var M=z[0],R=z.pop();if(R!==M){z[0]=R;e:for(var q=0,re=z.length,Mr=re>>>1;q<Mr;){var Ft=2*(q+1)-1,Mi=z[Ft],Dt=Ft+1,Rr=z[Dt];if(0>l(Mi,R))Dt<re&&0>l(Rr,Mi)?(z[q]=Rr,z[Dt]=R,q=Dt):(z[q]=Mi,z[Ft]=R,q=Ft);else if(Dt<re&&0>l(Rr,R))z[q]=Rr,z[Dt]=R,q=Dt;else break e}}return M}function l(z,M){var R=z.sortIndex-M.sortIndex;return R!==0?R:z.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],c=[],h=1,m=null,y=3,x=!1,g=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(z){for(var M=n(c);M!==null;){if(M.callback===null)r(c);else if(M.startTime<=z)r(c),M.sortIndex=M.expirationTime,t(a,M);else break;M=n(c)}}function w(z){if(v=!1,p(z),!g)if(n(a)!==null)g=!0,zi(N);else{var M=n(c);M!==null&&Ti(w,M.startTime-z)}}function N(z,M){g=!1,v&&(v=!1,d(T),T=-1),x=!0;var R=y;try{for(p(M),m=n(a);m!==null&&(!(m.expirationTime>M)||z&&!We());){var q=m.callback;if(typeof q=="function"){m.callback=null,y=m.priorityLevel;var re=q(m.expirationTime<=M);M=e.unstable_now(),typeof re=="function"?m.callback=re:m===n(a)&&r(a),p(M)}else r(a);m=n(a)}if(m!==null)var Mr=!0;else{var Ft=n(c);Ft!==null&&Ti(w,Ft.startTime-M),Mr=!1}return Mr}finally{m=null,y=R,x=!1}}var _=!1,E=null,T=-1,Z=5,L=-1;function We(){return!(e.unstable_now()-L<Z)}function On(){if(E!==null){var z=e.unstable_now();L=z;var M=!0;try{M=E(!0,z)}finally{M?Ln():(_=!1,E=null)}}else _=!1}var Ln;if(typeof f=="function")Ln=function(){f(On)};else if(typeof MessageChannel<"u"){var ha=new MessageChannel,qd=ha.port2;ha.port1.onmessage=On,Ln=function(){qd.postMessage(null)}}else Ln=function(){S(On,0)};function zi(z){E=z,_||(_=!0,Ln())}function Ti(z,M){T=S(function(){z(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){g||x||(g=!0,zi(N))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(y){case 1:case 2:case 3:var M=3;break;default:M=y}var R=y;y=M;try{return z()}finally{y=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,M){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var R=y;y=z;try{return M()}finally{y=R}},e.unstable_scheduleCallback=function(z,M,R){var q=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?q+R:q):R=q,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=R+re,z={id:h++,callback:M,priorityLevel:z,startTime:R,expirationTime:re,sortIndex:-1},R>q?(z.sortIndex=R,t(c,z),n(a)===null&&z===n(c)&&(v?(d(T),T=-1):v=!0,Ti(w,R-q))):(z.sortIndex=re,t(a,z),g||x||(g=!0,zi(N))),z},e.unstable_shouldYield=We,e.unstable_wrapCallback=function(z){var M=y;return function(){var R=y;y=M;try{return z.apply(this,arguments)}finally{y=R}}}})(lc);rc.exports=lc;var k0=rc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=j,Re=k0;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ic=new Set,rr={};function qt(e,t){kn(e,t),kn(e+"Capture",t)}function kn(e,t){for(rr[e]=t,e=0;e<t.length;e++)ic.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uo=Object.prototype.hasOwnProperty,C0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xa={},wa={};function E0(e){return uo.call(wa,e)?!0:uo.call(xa,e)?!1:C0.test(e)?wa[e]=!0:(xa[e]=!0,!1)}function N0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function j0(e,t,n,r){if(t===null||typeof t>"u"||N0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){fe[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];fe[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){fe[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){fe[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){fe[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){fe[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){fe[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){fe[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){fe[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var ps=/[\-:]([a-z])/g;function ms(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ps,ms);fe[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ps,ms);fe[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ps,ms);fe[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){fe[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});fe.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){fe[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function hs(e,t,n,r){var l=fe.hasOwnProperty(t)?fe[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(j0(t,n,l,r)&&(n=null),r||l===null?E0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ht=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lr=Symbol.for("react.element"),en=Symbol.for("react.portal"),tn=Symbol.for("react.fragment"),ys=Symbol.for("react.strict_mode"),co=Symbol.for("react.profiler"),oc=Symbol.for("react.provider"),sc=Symbol.for("react.context"),vs=Symbol.for("react.forward_ref"),fo=Symbol.for("react.suspense"),po=Symbol.for("react.suspense_list"),gs=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),ac=Symbol.for("react.offscreen"),ka=Symbol.iterator;function In(e){return e===null||typeof e!="object"?null:(e=ka&&e[ka]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,Oi;function Hn(e){if(Oi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oi=t&&t[1]||""}return`
`+Oi+e}var Li=!1;function Ii(e,t){if(!e||Li)return"";Li=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Li=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hn(e):""}function _0(e){switch(e.tag){case 5:return Hn(e.type);case 16:return Hn("Lazy");case 13:return Hn("Suspense");case 19:return Hn("SuspenseList");case 0:case 2:case 15:return e=Ii(e.type,!1),e;case 11:return e=Ii(e.type.render,!1),e;case 1:return e=Ii(e.type,!0),e;default:return""}}function mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case tn:return"Fragment";case en:return"Portal";case co:return"Profiler";case ys:return"StrictMode";case fo:return"Suspense";case po:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case sc:return(e.displayName||"Context")+".Consumer";case oc:return(e._context.displayName||"Context")+".Provider";case vs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gs:return t=e.displayName||null,t!==null?t:mo(e.type)||"Memo";case vt:t=e._payload,e=e._init;try{return mo(e(t))}catch{}}return null}function P0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mo(t);case 8:return t===ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function z0(e){var t=uc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ir(e){e._valueTracker||(e._valueTracker=z0(e))}function cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ml(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ho(e,t){var n=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Sa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function fc(e,t){t=t.checked,t!=null&&hs(e,"checked",t,!1)}function yo(e,t){fc(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vo(e,t.type,n):t.hasOwnProperty("defaultValue")&&vo(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ca(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vo(e,t,n){(t!=="number"||ml(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Qn=Array.isArray;function pn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ea(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(Qn(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function dc(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Na(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var $r,mc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for($r=$r||document.createElement("div"),$r.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=$r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function lr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T0=["Webkit","ms","Moz","O"];Object.keys(Kn).forEach(function(e){T0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kn[t]=Kn[e]})});function hc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kn.hasOwnProperty(e)&&Kn[e]?(""+t).trim():t+"px"}function yc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=hc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var M0=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wo(e,t){if(t){if(M0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var So=null;function xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Co=null,mn=null,hn=null;function ja(e){if(e=_r(e)){if(typeof Co!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Yl(t),Co(e.stateNode,e.type,t))}}function vc(e){mn?hn?hn.push(e):hn=[e]:mn=e}function gc(){if(mn){var e=mn,t=hn;if(hn=mn=null,ja(e),t)for(e=0;e<t.length;e++)ja(t[e])}}function xc(e,t){return e(t)}function wc(){}var $i=!1;function kc(e,t,n){if($i)return e(t,n);$i=!0;try{return xc(e,t,n)}finally{$i=!1,(mn!==null||hn!==null)&&(wc(),gc())}}function ir(e,t){var n=e.stateNode;if(n===null)return null;var r=Yl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Eo=!1;if(ft)try{var $n={};Object.defineProperty($n,"passive",{get:function(){Eo=!0}}),window.addEventListener("test",$n,$n),window.removeEventListener("test",$n,$n)}catch{Eo=!1}function R0(e,t,n,r,l,i,o,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var Gn=!1,hl=null,yl=!1,No=null,O0={onError:function(e){Gn=!0,hl=e}};function L0(e,t,n,r,l,i,o,s,a){Gn=!1,hl=null,R0.apply(O0,arguments)}function I0(e,t,n,r,l,i,o,s,a){if(L0.apply(this,arguments),Gn){if(Gn){var c=hl;Gn=!1,hl=null}else throw Error(k(198));yl||(yl=!0,No=c)}}function Jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _a(e){if(Jt(e)!==e)throw Error(k(188))}function $0(e){var t=e.alternate;if(!t){if(t=Jt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return _a(l),e;if(i===r)return _a(l),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Cc(e){return e=$0(e),e!==null?Ec(e):null}function Ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ec(e);if(t!==null)return t;e=e.sibling}return null}var Nc=Re.unstable_scheduleCallback,Pa=Re.unstable_cancelCallback,F0=Re.unstable_shouldYield,D0=Re.unstable_requestPaint,J=Re.unstable_now,A0=Re.unstable_getCurrentPriorityLevel,ws=Re.unstable_ImmediatePriority,jc=Re.unstable_UserBlockingPriority,vl=Re.unstable_NormalPriority,U0=Re.unstable_LowPriority,_c=Re.unstable_IdlePriority,Vl=null,rt=null;function B0(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Vl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ke=Math.clz32?Math.clz32:H0,V0=Math.log,W0=Math.LN2;function H0(e){return e>>>=0,e===0?32:31-(V0(e)/W0|0)|0}var Fr=64,Dr=4194304;function Yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Yn(s):(i&=o,i!==0&&(r=Yn(i)))}else o=n&~l,o!==0?r=Yn(o):i!==0&&(r=Yn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ke(t),l=1<<n,r|=e[n],t&=~l;return r}function Q0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-Ke(i),s=1<<o,a=l[o];a===-1?(!(s&n)||s&r)&&(l[o]=Q0(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function jo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pc(){var e=Fr;return Fr<<=1,!(Fr&4194240)&&(Fr=64),e}function Fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ke(t),e[t]=n}function X0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ke(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function zc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Tc,Ss,Mc,Rc,Oc,_o=!1,Ar=[],Et=null,Nt=null,jt=null,or=new Map,sr=new Map,xt=[],K0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function za(e,t){switch(e){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Nt=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":sr.delete(t.pointerId)}}function Fn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=_r(t),t!==null&&Ss(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function G0(e,t,n,r,l){switch(t){case"focusin":return Et=Fn(Et,e,t,n,r,l),!0;case"dragenter":return Nt=Fn(Nt,e,t,n,r,l),!0;case"mouseover":return jt=Fn(jt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return or.set(i,Fn(or.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,sr.set(i,Fn(sr.get(i)||null,e,t,n,r,l)),!0}return!1}function Lc(e){var t=Bt(e.target);if(t!==null){var n=Jt(t);if(n!==null){if(t=n.tag,t===13){if(t=Sc(n),t!==null){e.blockedOn=t,Oc(e.priority,function(){Mc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);So=r,n.target.dispatchEvent(r),So=null}else return t=_r(n),t!==null&&Ss(t),e.blockedOn=n,!1;t.shift()}return!0}function Ta(e,t,n){tl(e)&&n.delete(t)}function Z0(){_o=!1,Et!==null&&tl(Et)&&(Et=null),Nt!==null&&tl(Nt)&&(Nt=null),jt!==null&&tl(jt)&&(jt=null),or.forEach(Ta),sr.forEach(Ta)}function Dn(e,t){e.blockedOn===t&&(e.blockedOn=null,_o||(_o=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Z0)))}function ar(e){function t(l){return Dn(l,e)}if(0<Ar.length){Dn(Ar[0],e);for(var n=1;n<Ar.length;n++){var r=Ar[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Et!==null&&Dn(Et,e),Nt!==null&&Dn(Nt,e),jt!==null&&Dn(jt,e),or.forEach(t),sr.forEach(t),n=0;n<xt.length;n++)r=xt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xt.length&&(n=xt[0],n.blockedOn===null);)Lc(n),n.blockedOn===null&&xt.shift()}var yn=ht.ReactCurrentBatchConfig,xl=!0;function q0(e,t,n,r){var l=D,i=yn.transition;yn.transition=null;try{D=1,Cs(e,t,n,r)}finally{D=l,yn.transition=i}}function J0(e,t,n,r){var l=D,i=yn.transition;yn.transition=null;try{D=4,Cs(e,t,n,r)}finally{D=l,yn.transition=i}}function Cs(e,t,n,r){if(xl){var l=Po(e,t,n,r);if(l===null)Xi(e,t,r,wl,n),za(e,r);else if(G0(l,e,t,n,r))r.stopPropagation();else if(za(e,r),t&4&&-1<K0.indexOf(e)){for(;l!==null;){var i=_r(l);if(i!==null&&Tc(i),i=Po(e,t,n,r),i===null&&Xi(e,t,r,wl,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Xi(e,t,r,null,n)}}var wl=null;function Po(e,t,n,r){if(wl=null,e=xs(r),e=Bt(e),e!==null)if(t=Jt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wl=e,null}function Ic(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(A0()){case ws:return 1;case jc:return 4;case vl:case U0:return 16;case _c:return 536870912;default:return 16}default:return 16}}var kt=null,Es=null,nl=null;function $c(){if(nl)return nl;var e,t=Es,n=t.length,r,l="value"in kt?kt.value:kt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return nl=l.slice(e,1<r?1-r:void 0)}function rl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ur(){return!0}function Ma(){return!1}function Le(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ur:Ma,this.isPropagationStopped=Ma,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ns=Le(Tn),jr=K({},Tn,{view:0,detail:0}),b0=Le(jr),Di,Ai,An,Wl=K({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:js,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==An&&(An&&e.type==="mousemove"?(Di=e.screenX-An.screenX,Ai=e.screenY-An.screenY):Ai=Di=0,An=e),Di)},movementY:function(e){return"movementY"in e?e.movementY:Ai}}),Ra=Le(Wl),ep=K({},Wl,{dataTransfer:0}),tp=Le(ep),np=K({},jr,{relatedTarget:0}),Ui=Le(np),rp=K({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),lp=Le(rp),ip=K({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),op=Le(ip),sp=K({},Tn,{data:0}),Oa=Le(sp),ap={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=cp[e])?!!t[e]:!1}function js(){return fp}var dp=K({},jr,{key:function(e){if(e.key){var t=ap[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:js,charCode:function(e){return e.type==="keypress"?rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pp=Le(dp),mp=K({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),La=Le(mp),hp=K({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:js}),yp=Le(hp),vp=K({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gp=Le(vp),xp=K({},Wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wp=Le(xp),kp=[9,13,27,32],_s=ft&&"CompositionEvent"in window,Zn=null;ft&&"documentMode"in document&&(Zn=document.documentMode);var Sp=ft&&"TextEvent"in window&&!Zn,Fc=ft&&(!_s||Zn&&8<Zn&&11>=Zn),Ia=" ",$a=!1;function Dc(e,t){switch(e){case"keyup":return kp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nn=!1;function Cp(e,t){switch(e){case"compositionend":return Ac(t);case"keypress":return t.which!==32?null:($a=!0,Ia);case"textInput":return e=t.data,e===Ia&&$a?null:e;default:return null}}function Ep(e,t){if(nn)return e==="compositionend"||!_s&&Dc(e,t)?(e=$c(),nl=Es=kt=null,nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fc&&t.locale!=="ko"?null:t.data;default:return null}}var Np={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Np[e.type]:t==="textarea"}function Uc(e,t,n,r){vc(r),t=kl(t,"onChange"),0<t.length&&(n=new Ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qn=null,ur=null;function jp(e){qc(e,0)}function Hl(e){var t=on(e);if(cc(t))return e}function _p(e,t){if(e==="change")return t}var Bc=!1;if(ft){var Bi;if(ft){var Vi="oninput"in document;if(!Vi){var Da=document.createElement("div");Da.setAttribute("oninput","return;"),Vi=typeof Da.oninput=="function"}Bi=Vi}else Bi=!1;Bc=Bi&&(!document.documentMode||9<document.documentMode)}function Aa(){qn&&(qn.detachEvent("onpropertychange",Vc),ur=qn=null)}function Vc(e){if(e.propertyName==="value"&&Hl(ur)){var t=[];Uc(t,ur,e,xs(e)),kc(jp,t)}}function Pp(e,t,n){e==="focusin"?(Aa(),qn=t,ur=n,qn.attachEvent("onpropertychange",Vc)):e==="focusout"&&Aa()}function zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hl(ur)}function Tp(e,t){if(e==="click")return Hl(t)}function Mp(e,t){if(e==="input"||e==="change")return Hl(t)}function Rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:Rp;function cr(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!uo.call(t,l)||!Ze(e[l],t[l]))return!1}return!0}function Ua(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ba(e,t){var n=Ua(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ua(n)}}function Wc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hc(){for(var e=window,t=ml();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ml(e.document)}return t}function Ps(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Op(e){var t=Hc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wc(n.ownerDocument.documentElement,n)){if(r!==null&&Ps(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Ba(n,i);var o=Ba(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lp=ft&&"documentMode"in document&&11>=document.documentMode,rn=null,zo=null,Jn=null,To=!1;function Va(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;To||rn==null||rn!==ml(r)||(r=rn,"selectionStart"in r&&Ps(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jn&&cr(Jn,r)||(Jn=r,r=kl(zo,"onSelect"),0<r.length&&(t=new Ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rn)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ln={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionend:Br("Transition","TransitionEnd")},Wi={},Qc={};ft&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete ln.animationend.animation,delete ln.animationiteration.animation,delete ln.animationstart.animation),"TransitionEvent"in window||delete ln.transitionend.transition);function Ql(e){if(Wi[e])return Wi[e];if(!ln[e])return e;var t=ln[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qc)return Wi[e]=t[n];return e}var Yc=Ql("animationend"),Xc=Ql("animationiteration"),Kc=Ql("animationstart"),Gc=Ql("transitionend"),Zc=new Map,Wa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lt(e,t){Zc.set(e,t),qt(t,[e])}for(var Hi=0;Hi<Wa.length;Hi++){var Qi=Wa[Hi],Ip=Qi.toLowerCase(),$p=Qi[0].toUpperCase()+Qi.slice(1);Lt(Ip,"on"+$p)}Lt(Yc,"onAnimationEnd");Lt(Xc,"onAnimationIteration");Lt(Kc,"onAnimationStart");Lt("dblclick","onDoubleClick");Lt("focusin","onFocus");Lt("focusout","onBlur");Lt(Gc,"onTransitionEnd");kn("onMouseEnter",["mouseout","mouseover"]);kn("onMouseLeave",["mouseout","mouseover"]);kn("onPointerEnter",["pointerout","pointerover"]);kn("onPointerLeave",["pointerout","pointerover"]);qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));function Ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,I0(r,t,void 0,e),e.currentTarget=null}function qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;Ha(l,s,c),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;Ha(l,s,c),i=a}}}if(yl)throw e=No,yl=!1,No=null,e}function V(e,t){var n=t[Io];n===void 0&&(n=t[Io]=new Set);var r=e+"__bubble";n.has(r)||(Jc(t,e,2,!1),n.add(r))}function Yi(e,t,n){var r=0;t&&(r|=4),Jc(n,e,r,t)}var Vr="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[Vr]){e[Vr]=!0,ic.forEach(function(n){n!=="selectionchange"&&(Fp.has(n)||Yi(n,!1,e),Yi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vr]||(t[Vr]=!0,Yi("selectionchange",!1,t))}}function Jc(e,t,n,r){switch(Ic(t)){case 1:var l=q0;break;case 4:l=J0;break;default:l=Cs}n=l.bind(null,t,n,e),l=void 0,!Eo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Xi(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Bt(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}kc(function(){var c=i,h=xs(n),m=[];e:{var y=Zc.get(e);if(y!==void 0){var x=Ns,g=e;switch(e){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":x=pp;break;case"focusin":g="focus",x=Ui;break;case"focusout":g="blur",x=Ui;break;case"beforeblur":case"afterblur":x=Ui;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ra;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=yp;break;case Yc:case Xc:case Kc:x=lp;break;case Gc:x=gp;break;case"scroll":x=b0;break;case"wheel":x=wp;break;case"copy":case"cut":case"paste":x=op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=La}var v=(t&4)!==0,S=!v&&e==="scroll",d=v?y!==null?y+"Capture":null:y;v=[];for(var f=c,p;f!==null;){p=f;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,d!==null&&(w=ir(f,d),w!=null&&v.push(dr(f,w,p)))),S)break;f=f.return}0<v.length&&(y=new x(y,g,null,n,h),m.push({event:y,listeners:v}))}}if(!(t&7)){e:{if(y=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",y&&n!==So&&(g=n.relatedTarget||n.fromElement)&&(Bt(g)||g[dt]))break e;if((x||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,x?(g=n.relatedTarget||n.toElement,x=c,g=g?Bt(g):null,g!==null&&(S=Jt(g),g!==S||g.tag!==5&&g.tag!==6)&&(g=null)):(x=null,g=c),x!==g)){if(v=Ra,w="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=La,w="onPointerLeave",d="onPointerEnter",f="pointer"),S=x==null?y:on(x),p=g==null?y:on(g),y=new v(w,f+"leave",x,n,h),y.target=S,y.relatedTarget=p,w=null,Bt(h)===c&&(v=new v(d,f+"enter",g,n,h),v.target=p,v.relatedTarget=S,w=v),S=w,x&&g)t:{for(v=x,d=g,f=0,p=v;p;p=bt(p))f++;for(p=0,w=d;w;w=bt(w))p++;for(;0<f-p;)v=bt(v),f--;for(;0<p-f;)d=bt(d),p--;for(;f--;){if(v===d||d!==null&&v===d.alternate)break t;v=bt(v),d=bt(d)}v=null}else v=null;x!==null&&Qa(m,y,x,v,!1),g!==null&&S!==null&&Qa(m,S,g,v,!0)}}e:{if(y=c?on(c):window,x=y.nodeName&&y.nodeName.toLowerCase(),x==="select"||x==="input"&&y.type==="file")var N=_p;else if(Fa(y))if(Bc)N=Mp;else{N=zp;var _=Pp}else(x=y.nodeName)&&x.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(N=Tp);if(N&&(N=N(e,c))){Uc(m,N,n,h);break e}_&&_(e,y,c),e==="focusout"&&(_=y._wrapperState)&&_.controlled&&y.type==="number"&&vo(y,"number",y.value)}switch(_=c?on(c):window,e){case"focusin":(Fa(_)||_.contentEditable==="true")&&(rn=_,zo=c,Jn=null);break;case"focusout":Jn=zo=rn=null;break;case"mousedown":To=!0;break;case"contextmenu":case"mouseup":case"dragend":To=!1,Va(m,n,h);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":Va(m,n,h)}var E;if(_s)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else nn?Dc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Fc&&n.locale!=="ko"&&(nn||T!=="onCompositionStart"?T==="onCompositionEnd"&&nn&&(E=$c()):(kt=h,Es="value"in kt?kt.value:kt.textContent,nn=!0)),_=kl(c,T),0<_.length&&(T=new Oa(T,e,null,n,h),m.push({event:T,listeners:_}),E?T.data=E:(E=Ac(n),E!==null&&(T.data=E)))),(E=Sp?Cp(e,n):Ep(e,n))&&(c=kl(c,"onBeforeInput"),0<c.length&&(h=new Oa("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:c}),h.data=E))}qc(m,t)})}function dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function kl(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=ir(e,n),i!=null&&r.unshift(dr(e,i,l)),i=ir(e,t),i!=null&&r.push(dr(e,i,l))),e=e.return}return r}function bt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qa(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,l?(a=ir(n,i),a!=null&&o.unshift(dr(n,a,s))):l||(a=ir(n,i),a!=null&&o.push(dr(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Dp=/\r\n?/g,Ap=/\u0000|\uFFFD/g;function Ya(e){return(typeof e=="string"?e:""+e).replace(Dp,`
`).replace(Ap,"")}function Wr(e,t,n){if(t=Ya(t),Ya(e)!==t&&n)throw Error(k(425))}function Sl(){}var Mo=null,Ro=null;function Oo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,Up=typeof clearTimeout=="function"?clearTimeout:void 0,Xa=typeof Promise=="function"?Promise:void 0,Bp=typeof queueMicrotask=="function"?queueMicrotask:typeof Xa<"u"?function(e){return Xa.resolve(null).then(e).catch(Vp)}:Lo;function Vp(e){setTimeout(function(){throw e})}function Ki(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),ar(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);ar(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ka(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mn=Math.random().toString(36).slice(2),nt="__reactFiber$"+Mn,pr="__reactProps$"+Mn,dt="__reactContainer$"+Mn,Io="__reactEvents$"+Mn,Wp="__reactListeners$"+Mn,Hp="__reactHandles$"+Mn;function Bt(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[dt]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ka(e);e!==null;){if(n=e[nt])return n;e=Ka(e)}return t}e=n,n=e.parentNode}return null}function _r(e){return e=e[nt]||e[dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function on(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Yl(e){return e[pr]||null}var $o=[],sn=-1;function It(e){return{current:e}}function W(e){0>sn||(e.current=$o[sn],$o[sn]=null,sn--)}function B(e,t){sn++,$o[sn]=e.current,e.current=t}var Ot={},ye=It(Ot),Ce=It(!1),Yt=Ot;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ee(e){return e=e.childContextTypes,e!=null}function Cl(){W(Ce),W(ye)}function Ga(e,t,n){if(ye.current!==Ot)throw Error(k(168));B(ye,t),B(Ce,n)}function bc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(k(108,P0(e)||"Unknown",l));return K({},n,r)}function El(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Yt=ye.current,B(ye,e),B(Ce,Ce.current),!0}function Za(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=bc(e,t,Yt),r.__reactInternalMemoizedMergedChildContext=e,W(Ce),W(ye),B(ye,e)):W(Ce),B(Ce,n)}var st=null,Xl=!1,Gi=!1;function ef(e){st===null?st=[e]:st.push(e)}function Qp(e){Xl=!0,ef(e)}function $t(){if(!Gi&&st!==null){Gi=!0;var e=0,t=D;try{var n=st;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}st=null,Xl=!1}catch(l){throw st!==null&&(st=st.slice(e+1)),Nc(ws,$t),l}finally{D=t,Gi=!1}}return null}var an=[],un=0,Nl=null,jl=0,$e=[],Fe=0,Xt=null,at=1,ut="";function At(e,t){an[un++]=jl,an[un++]=Nl,Nl=e,jl=t}function tf(e,t,n){$e[Fe++]=at,$e[Fe++]=ut,$e[Fe++]=Xt,Xt=e;var r=at;e=ut;var l=32-Ke(r)-1;r&=~(1<<l),n+=1;var i=32-Ke(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,at=1<<32-Ke(t)+l|n<<l|r,ut=i+e}else at=1<<i|n<<l|r,ut=e}function zs(e){e.return!==null&&(At(e,1),tf(e,1,0))}function Ts(e){for(;e===Nl;)Nl=an[--un],an[un]=null,jl=an[--un],an[un]=null;for(;e===Xt;)Xt=$e[--Fe],$e[Fe]=null,ut=$e[--Fe],$e[Fe]=null,at=$e[--Fe],$e[Fe]=null}var Te=null,ze=null,Q=!1,Xe=null;function nf(e,t){var n=De(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,ze=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xt!==null?{id:at,overflow:ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=De(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,ze=null,!0):!1;default:return!1}}function Fo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Do(e){if(Q){var t=ze;if(t){var n=t;if(!qa(e,t)){if(Fo(e))throw Error(k(418));t=_t(n.nextSibling);var r=Te;t&&qa(e,t)?nf(r,n):(e.flags=e.flags&-4097|2,Q=!1,Te=e)}}else{if(Fo(e))throw Error(k(418));e.flags=e.flags&-4097|2,Q=!1,Te=e}}}function Ja(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Hr(e){if(e!==Te)return!1;if(!Q)return Ja(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Oo(e.type,e.memoizedProps)),t&&(t=ze)){if(Fo(e))throw rf(),Error(k(418));for(;t;)nf(e,t),t=_t(t.nextSibling)}if(Ja(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=_t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=Te?_t(e.stateNode.nextSibling):null;return!0}function rf(){for(var e=ze;e;)e=_t(e.nextSibling)}function Cn(){ze=Te=null,Q=!1}function Ms(e){Xe===null?Xe=[e]:Xe.push(e)}var Yp=ht.ReactCurrentBatchConfig;function Un(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function Qr(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){var t=e._init;return t(e._payload)}function lf(e){function t(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function n(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function l(d,f){return d=Mt(d,f),d.index=0,d.sibling=null,d}function i(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=2,f):p):(d.flags|=2,f)):(d.flags|=1048576,f)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,f,p,w){return f===null||f.tag!==6?(f=no(p,d.mode,w),f.return=d,f):(f=l(f,p),f.return=d,f)}function a(d,f,p,w){var N=p.type;return N===tn?h(d,f,p.props.children,w,p.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vt&&ba(N)===f.type)?(w=l(f,p.props),w.ref=Un(d,f,p),w.return=d,w):(w=cl(p.type,p.key,p.props,null,d.mode,w),w.ref=Un(d,f,p),w.return=d,w)}function c(d,f,p,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=ro(p,d.mode,w),f.return=d,f):(f=l(f,p.children||[]),f.return=d,f)}function h(d,f,p,w,N){return f===null||f.tag!==7?(f=Qt(p,d.mode,w,N),f.return=d,f):(f=l(f,p),f.return=d,f)}function m(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=no(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Lr:return p=cl(f.type,f.key,f.props,null,d.mode,p),p.ref=Un(d,null,f),p.return=d,p;case en:return f=ro(f,d.mode,p),f.return=d,f;case vt:var w=f._init;return m(d,w(f._payload),p)}if(Qn(f)||In(f))return f=Qt(f,d.mode,p,null),f.return=d,f;Qr(d,f)}return null}function y(d,f,p,w){var N=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(d,f,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Lr:return p.key===N?a(d,f,p,w):null;case en:return p.key===N?c(d,f,p,w):null;case vt:return N=p._init,y(d,f,N(p._payload),w)}if(Qn(p)||In(p))return N!==null?null:h(d,f,p,w,null);Qr(d,p)}return null}function x(d,f,p,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(p)||null,s(f,d,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Lr:return d=d.get(w.key===null?p:w.key)||null,a(f,d,w,N);case en:return d=d.get(w.key===null?p:w.key)||null,c(f,d,w,N);case vt:var _=w._init;return x(d,f,p,_(w._payload),N)}if(Qn(w)||In(w))return d=d.get(p)||null,h(f,d,w,N,null);Qr(f,w)}return null}function g(d,f,p,w){for(var N=null,_=null,E=f,T=f=0,Z=null;E!==null&&T<p.length;T++){E.index>T?(Z=E,E=null):Z=E.sibling;var L=y(d,E,p[T],w);if(L===null){E===null&&(E=Z);break}e&&E&&L.alternate===null&&t(d,E),f=i(L,f,T),_===null?N=L:_.sibling=L,_=L,E=Z}if(T===p.length)return n(d,E),Q&&At(d,T),N;if(E===null){for(;T<p.length;T++)E=m(d,p[T],w),E!==null&&(f=i(E,f,T),_===null?N=E:_.sibling=E,_=E);return Q&&At(d,T),N}for(E=r(d,E);T<p.length;T++)Z=x(E,d,T,p[T],w),Z!==null&&(e&&Z.alternate!==null&&E.delete(Z.key===null?T:Z.key),f=i(Z,f,T),_===null?N=Z:_.sibling=Z,_=Z);return e&&E.forEach(function(We){return t(d,We)}),Q&&At(d,T),N}function v(d,f,p,w){var N=In(p);if(typeof N!="function")throw Error(k(150));if(p=N.call(p),p==null)throw Error(k(151));for(var _=N=null,E=f,T=f=0,Z=null,L=p.next();E!==null&&!L.done;T++,L=p.next()){E.index>T?(Z=E,E=null):Z=E.sibling;var We=y(d,E,L.value,w);if(We===null){E===null&&(E=Z);break}e&&E&&We.alternate===null&&t(d,E),f=i(We,f,T),_===null?N=We:_.sibling=We,_=We,E=Z}if(L.done)return n(d,E),Q&&At(d,T),N;if(E===null){for(;!L.done;T++,L=p.next())L=m(d,L.value,w),L!==null&&(f=i(L,f,T),_===null?N=L:_.sibling=L,_=L);return Q&&At(d,T),N}for(E=r(d,E);!L.done;T++,L=p.next())L=x(E,d,T,L.value,w),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?T:L.key),f=i(L,f,T),_===null?N=L:_.sibling=L,_=L);return e&&E.forEach(function(On){return t(d,On)}),Q&&At(d,T),N}function S(d,f,p,w){if(typeof p=="object"&&p!==null&&p.type===tn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Lr:e:{for(var N=p.key,_=f;_!==null;){if(_.key===N){if(N=p.type,N===tn){if(_.tag===7){n(d,_.sibling),f=l(_,p.props.children),f.return=d,d=f;break e}}else if(_.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===vt&&ba(N)===_.type){n(d,_.sibling),f=l(_,p.props),f.ref=Un(d,_,p),f.return=d,d=f;break e}n(d,_);break}else t(d,_);_=_.sibling}p.type===tn?(f=Qt(p.props.children,d.mode,w,p.key),f.return=d,d=f):(w=cl(p.type,p.key,p.props,null,d.mode,w),w.ref=Un(d,f,p),w.return=d,d=w)}return o(d);case en:e:{for(_=p.key;f!==null;){if(f.key===_)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(d,f.sibling),f=l(f,p.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else t(d,f);f=f.sibling}f=ro(p,d.mode,w),f.return=d,d=f}return o(d);case vt:return _=p._init,S(d,f,_(p._payload),w)}if(Qn(p))return g(d,f,p,w);if(In(p))return v(d,f,p,w);Qr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(d,f.sibling),f=l(f,p),f.return=d,d=f):(n(d,f),f=no(p,d.mode,w),f.return=d,d=f),o(d)):n(d,f)}return S}var En=lf(!0),of=lf(!1),_l=It(null),Pl=null,cn=null,Rs=null;function Os(){Rs=cn=Pl=null}function Ls(e){var t=_l.current;W(_l),e._currentValue=t}function Ao(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function vn(e,t){Pl=e,Rs=cn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(Rs!==e)if(e={context:e,memoizedValue:t,next:null},cn===null){if(Pl===null)throw Error(k(308));cn=e,Pl.dependencies={lanes:0,firstContext:e}}else cn=cn.next=e;return t}var Vt=null;function Is(e){Vt===null?Vt=[e]:Vt.push(e)}function sf(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Is(t)):(n.next=l.next,l.next=n),t.interleaved=n,pt(e,r)}function pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gt=!1;function $s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function af(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,pt(e,n)}return l=r.interleaved,l===null?(t.next=t,Is(r)):(t.next=l.next,l.next=t),r.interleaved=t,pt(e,n)}function ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}function eu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zl(e,t,n,r){var l=e.updateQueue;gt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?i=c:o.next=c,o=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==o&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=a))}if(i!==null){var m=l.baseState;o=0,h=c=a=null,s=i;do{var y=s.lane,x=s.eventTime;if((r&y)===y){h!==null&&(h=h.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=e,v=s;switch(y=t,x=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){m=g.call(x,m,y);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,y=typeof g=="function"?g.call(x,m,y):g,y==null)break e;m=K({},m,y);break e;case 2:gt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,y=l.effects,y===null?l.effects=[s]:y.push(s))}else x={eventTime:x,lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=x,a=m):h=h.next=x,o|=y;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;y=s,s=y.next,y.next=null,l.lastBaseUpdate=y,l.shared.pending=null}}while(!0);if(h===null&&(a=m),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Gt|=o,e.lanes=o,e.memoizedState=m}}function tu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(k(191,l));l.call(r)}}}var Pr={},lt=It(Pr),mr=It(Pr),hr=It(Pr);function Wt(e){if(e===Pr)throw Error(k(174));return e}function Fs(e,t){switch(B(hr,t),B(mr,e),B(lt,Pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xo(t,e)}W(lt),B(lt,t)}function Nn(){W(lt),W(mr),W(hr)}function uf(e){Wt(hr.current);var t=Wt(lt.current),n=xo(t,e.type);t!==n&&(B(mr,e),B(lt,n))}function Ds(e){mr.current===e&&(W(lt),W(mr))}var Y=It(0);function Tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zi=[];function As(){for(var e=0;e<Zi.length;e++)Zi[e]._workInProgressVersionPrimary=null;Zi.length=0}var il=ht.ReactCurrentDispatcher,qi=ht.ReactCurrentBatchConfig,Kt=0,X=null,te=null,ie=null,Ml=!1,bn=!1,yr=0,Xp=0;function de(){throw Error(k(321))}function Us(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ze(e[n],t[n]))return!1;return!0}function Bs(e,t,n,r,l,i){if(Kt=i,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,il.current=e===null||e.memoizedState===null?qp:Jp,e=n(r,l),bn){i=0;do{if(bn=!1,yr=0,25<=i)throw Error(k(301));i+=1,ie=te=null,t.updateQueue=null,il.current=bp,e=n(r,l)}while(bn)}if(il.current=Rl,t=te!==null&&te.next!==null,Kt=0,ie=te=X=null,Ml=!1,t)throw Error(k(300));return e}function Vs(){var e=yr!==0;return yr=0,e}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?X.memoizedState=ie=e:ie=ie.next=e,ie}function Be(){if(te===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=ie===null?X.memoizedState:ie.next;if(t!==null)ie=t,te=e;else{if(e===null)throw Error(k(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},ie===null?X.memoizedState=ie=e:ie=ie.next=e}return ie}function vr(e,t){return typeof t=="function"?t(e):t}function Ji(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=te,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,c=i;do{var h=c.lane;if((Kt&h)===h)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var m={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=m,o=r):a=a.next=m,X.lanes|=h,Gt|=h}c=c.next}while(c!==null&&c!==i);a===null?o=r:a.next=s,Ze(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,X.lanes|=i,Gt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bi(e){var t=Be(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);Ze(i,t.memoizedState)||(Se=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function cf(){}function ff(e,t){var n=X,r=Be(),l=t(),i=!Ze(r.memoizedState,l);if(i&&(r.memoizedState=l,Se=!0),r=r.queue,Ws(mf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ie!==null&&ie.memoizedState.tag&1){if(n.flags|=2048,gr(9,pf.bind(null,n,r,l,t),void 0,null),oe===null)throw Error(k(349));Kt&30||df(n,t,l)}return l}function df(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function pf(e,t,n,r){t.value=n,t.getSnapshot=r,hf(t)&&yf(e)}function mf(e,t,n){return n(function(){hf(t)&&yf(e)})}function hf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ze(e,n)}catch{return!0}}function yf(e){var t=pt(e,1);t!==null&&Ge(t,e,1,-1)}function nu(e){var t=be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zp.bind(null,X,e),[t.memoizedState,e]}function gr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function vf(){return Be().memoizedState}function ol(e,t,n,r){var l=be();X.flags|=e,l.memoizedState=gr(1|t,n,void 0,r===void 0?null:r)}function Kl(e,t,n,r){var l=Be();r=r===void 0?null:r;var i=void 0;if(te!==null){var o=te.memoizedState;if(i=o.destroy,r!==null&&Us(r,o.deps)){l.memoizedState=gr(t,n,i,r);return}}X.flags|=e,l.memoizedState=gr(1|t,n,i,r)}function ru(e,t){return ol(8390656,8,e,t)}function Ws(e,t){return Kl(2048,8,e,t)}function gf(e,t){return Kl(4,2,e,t)}function xf(e,t){return Kl(4,4,e,t)}function wf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function kf(e,t,n){return n=n!=null?n.concat([e]):null,Kl(4,4,wf.bind(null,t,e),n)}function Hs(){}function Sf(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Us(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cf(e,t){var n=Be();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Us(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ef(e,t,n){return Kt&21?(Ze(n,t)||(n=Pc(),X.lanes|=n,Gt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Kp(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=qi.transition;qi.transition={};try{e(!1),t()}finally{D=n,qi.transition=r}}function Nf(){return Be().memoizedState}function Gp(e,t,n){var r=Tt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jf(e))_f(t,n);else if(n=sf(e,t,n,r),n!==null){var l=ge();Ge(n,e,r,l),Pf(n,t,r)}}function Zp(e,t,n){var r=Tt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jf(e))_f(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,Ze(s,o)){var a=t.interleaved;a===null?(l.next=l,Is(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=sf(e,t,l,r),n!==null&&(l=ge(),Ge(n,e,r,l),Pf(n,t,r))}}function jf(e){var t=e.alternate;return e===X||t!==null&&t===X}function _f(e,t){bn=Ml=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}var Rl={readContext:Ue,useCallback:de,useContext:de,useEffect:de,useImperativeHandle:de,useInsertionEffect:de,useLayoutEffect:de,useMemo:de,useReducer:de,useRef:de,useState:de,useDebugValue:de,useDeferredValue:de,useTransition:de,useMutableSource:de,useSyncExternalStore:de,useId:de,unstable_isNewReconciler:!1},qp={readContext:Ue,useCallback:function(e,t){return be().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ol(4194308,4,wf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ol(4194308,4,e,t)},useInsertionEffect:function(e,t){return ol(4,2,e,t)},useMemo:function(e,t){var n=be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gp.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=be();return e={current:e},t.memoizedState=e},useState:nu,useDebugValue:Hs,useDeferredValue:function(e){return be().memoizedState=e},useTransition:function(){var e=nu(!1),t=e[0];return e=Kp.bind(null,e[1]),be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,l=be();if(Q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),oe===null)throw Error(k(349));Kt&30||df(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ru(mf.bind(null,r,i,e),[e]),r.flags|=2048,gr(9,pf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=be(),t=oe.identifierPrefix;if(Q){var n=ut,r=at;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Xp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jp={readContext:Ue,useCallback:Sf,useContext:Ue,useEffect:Ws,useImperativeHandle:kf,useInsertionEffect:gf,useLayoutEffect:xf,useMemo:Cf,useReducer:Ji,useRef:vf,useState:function(){return Ji(vr)},useDebugValue:Hs,useDeferredValue:function(e){var t=Be();return Ef(t,te.memoizedState,e)},useTransition:function(){var e=Ji(vr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:cf,useSyncExternalStore:ff,useId:Nf,unstable_isNewReconciler:!1},bp={readContext:Ue,useCallback:Sf,useContext:Ue,useEffect:Ws,useImperativeHandle:kf,useInsertionEffect:gf,useLayoutEffect:xf,useMemo:Cf,useReducer:bi,useRef:vf,useState:function(){return bi(vr)},useDebugValue:Hs,useDeferredValue:function(e){var t=Be();return te===null?t.memoizedState=e:Ef(t,te.memoizedState,e)},useTransition:function(){var e=bi(vr)[0],t=Be().memoizedState;return[e,t]},useMutableSource:cf,useSyncExternalStore:ff,useId:Nf,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Uo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:K({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Gl={isMounted:function(e){return(e=e._reactInternals)?Jt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),l=Tt(e),i=ct(r,l);i.payload=t,n!=null&&(i.callback=n),t=Pt(e,i,l),t!==null&&(Ge(t,e,l,r),ll(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),l=Tt(e),i=ct(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pt(e,i,l),t!==null&&(Ge(t,e,l,r),ll(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Tt(e),l=ct(n,r);l.tag=2,t!=null&&(l.callback=t),t=Pt(e,l,r),t!==null&&(Ge(t,e,r,n),ll(t,e,r))}};function lu(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!cr(n,r)||!cr(l,i):!0}function zf(e,t,n){var r=!1,l=Ot,i=t.contextType;return typeof i=="object"&&i!==null?i=Ue(i):(l=Ee(t)?Yt:ye.current,r=t.contextTypes,i=(r=r!=null)?Sn(e,l):Ot),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function iu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Gl.enqueueReplaceState(t,t.state,null)}function Bo(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},$s(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ue(i):(i=Ee(t)?Yt:ye.current,l.context=Sn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Uo(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&Gl.enqueueReplaceState(l,l.state,null),zl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function jn(e,t){try{var n="",r=t;do n+=_0(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function eo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Vo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var em=typeof WeakMap=="function"?WeakMap:Map;function Tf(e,t,n){n=ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ll||(Ll=!0,Jo=r),Vo(e,t)},n}function Mf(e,t,n){n=ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Vo(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Vo(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function ou(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new em;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=mm.bind(null,e,t,n),t.then(e,e))}function su(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function au(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ct(-1,1),t.tag=2,Pt(n,t,1))),n.lanes|=1),e)}var tm=ht.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?of(t,null,n,r):En(t,e.child,n,r)}function uu(e,t,n,r,l){n=n.render;var i=t.ref;return vn(t,l),r=Bs(e,t,n,r,i,l),n=Vs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,mt(e,t,l)):(Q&&n&&zs(t),t.flags|=1,ve(e,t,r,l),t.child)}function cu(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Js(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Rf(e,t,i,r,l)):(e=cl(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:cr,n(o,r)&&e.ref===t.ref)return mt(e,t,l)}return t.flags|=1,e=Mt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Rf(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(cr(i,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,mt(e,t,l)}return Wo(e,t,n,r,l)}function Of(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(dn,Pe),Pe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(dn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(dn,Pe),Pe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(dn,Pe),Pe|=r;return ve(e,t,l,n),t.child}function Lf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wo(e,t,n,r,l){var i=Ee(n)?Yt:ye.current;return i=Sn(t,i),vn(t,l),n=Bs(e,t,n,r,i,l),r=Vs(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,mt(e,t,l)):(Q&&r&&zs(t),t.flags|=1,ve(e,t,n,l),t.child)}function fu(e,t,n,r,l){if(Ee(n)){var i=!0;El(t)}else i=!1;if(vn(t,l),t.stateNode===null)sl(e,t),zf(t,n,r),Bo(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ue(c):(c=Ee(n)?Yt:ye.current,c=Sn(t,c));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&iu(t,o,r,c),gt=!1;var y=t.memoizedState;o.state=y,zl(t,r,o,l),a=t.memoizedState,s!==r||y!==a||Ce.current||gt?(typeof h=="function"&&(Uo(t,n,h,r),a=t.memoizedState),(s=gt||lu(t,n,s,r,y,a,c))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,af(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Qe(t.type,s),o.props=c,m=t.pendingProps,y=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ue(a):(a=Ee(n)?Yt:ye.current,a=Sn(t,a));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==m||y!==a)&&iu(t,o,r,a),gt=!1,y=t.memoizedState,o.state=y,zl(t,r,o,l);var g=t.memoizedState;s!==m||y!==g||Ce.current||gt?(typeof x=="function"&&(Uo(t,n,x,r),g=t.memoizedState),(c=gt||lu(t,n,c,r,y,g,a)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&y===e.memoizedState||(t.flags|=1024),r=!1)}return Ho(e,t,n,r,i,l)}function Ho(e,t,n,r,l,i){Lf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Za(t,n,!1),mt(e,t,i);r=t.stateNode,tm.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=En(t,e.child,null,i),t.child=En(t,null,s,i)):ve(e,t,s,i),t.memoizedState=r.state,l&&Za(t,n,!0),t.child}function If(e){var t=e.stateNode;t.pendingContext?Ga(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ga(e,t.context,!1),Fs(e,t.containerInfo)}function du(e,t,n,r,l){return Cn(),Ms(l),t.flags|=256,ve(e,t,n,r),t.child}var Qo={dehydrated:null,treeContext:null,retryLane:0};function Yo(e){return{baseLanes:e,cachePool:null,transitions:null}}function $f(e,t,n){var r=t.pendingProps,l=Y.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),B(Y,l&1),e===null)return Do(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Jl(o,r,0,null),e=Qt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yo(n),t.memoizedState=Qo,e):Qs(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return nm(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Mt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=Mt(s,i):(i=Qt(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Yo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Qo,r}return i=e.child,e=i.sibling,r=Mt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qs(e,t){return t=Jl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yr(e,t,n,r){return r!==null&&Ms(r),En(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nm(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=eo(Error(k(422))),Yr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Jl({mode:"visible",children:r.children},l,0,null),i=Qt(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&En(t,e.child,null,o),t.child.memoizedState=Yo(o),t.memoizedState=Qo,i);if(!(t.mode&1))return Yr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=eo(i,r,void 0),Yr(e,t,o,r)}if(s=(o&e.childLanes)!==0,Se||s){if(r=oe,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,pt(e,l),Ge(r,e,l,-1))}return qs(),r=eo(Error(k(421))),Yr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=hm.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ze=_t(l.nextSibling),Te=t,Q=!0,Xe=null,e!==null&&($e[Fe++]=at,$e[Fe++]=ut,$e[Fe++]=Xt,at=e.id,ut=e.overflow,Xt=t),t=Qs(t,r.children),t.flags|=4096,t)}function pu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ao(e.return,t,n)}function to(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ff(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ve(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pu(e,n,t);else if(e.tag===19)pu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(Y,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Tl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),to(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Tl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}to(t,!0,n,null,i);break;case"together":to(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function sl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Mt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Mt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rm(e,t,n){switch(t.tag){case 3:If(t),Cn();break;case 5:uf(t);break;case 1:Ee(t.type)&&El(t);break;case 4:Fs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;B(_l,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?$f(e,t,n):(B(Y,Y.current&1),e=mt(e,t,n),e!==null?e.sibling:null);B(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ff(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),B(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Of(e,t,n)}return mt(e,t,n)}var Df,Xo,Af,Uf;Df=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xo=function(){};Af=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Wt(lt.current);var i=null;switch(n){case"input":l=ho(e,l),r=ho(e,r),i=[];break;case"select":l=K({},l,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":l=go(e,l),r=go(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Sl)}wo(n,r);var o;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(rr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var a=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(rr.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&V("scroll",e),i||s===a||(i=[])):(i=i||[]).push(c,a))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Uf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Bn(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lm(e,t,n){var r=t.pendingProps;switch(Ts(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ee(t.type)&&Cl(),pe(t),null;case 3:return r=t.stateNode,Nn(),W(Ce),W(ye),As(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(ts(Xe),Xe=null))),Xo(e,t),pe(t),null;case 5:Ds(t);var l=Wt(hr.current);if(n=t.type,e!==null&&t.stateNode!=null)Af(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return pe(t),null}if(e=Wt(lt.current),Hr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[nt]=t,r[pr]=i,e=(t.mode&1)!==0,n){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(l=0;l<Xn.length;l++)V(Xn[l],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Sa(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":Ea(r,i),V("invalid",r)}wo(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Wr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Wr(r.textContent,s,e),l=["children",""+s]):rr.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&V("scroll",r)}switch(n){case"input":Ir(r),Ca(r,i,!0);break;case"textarea":Ir(r),Na(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Sl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[nt]=t,e[pr]=r,Df(e,t,!1,!1),t.stateNode=e;e:{switch(o=ko(n,r),n){case"dialog":V("cancel",e),V("close",e),l=r;break;case"iframe":case"object":case"embed":V("load",e),l=r;break;case"video":case"audio":for(l=0;l<Xn.length;l++)V(Xn[l],e);l=r;break;case"source":V("error",e),l=r;break;case"img":case"image":case"link":V("error",e),V("load",e),l=r;break;case"details":V("toggle",e),l=r;break;case"input":Sa(e,r),l=ho(e,r),V("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=K({},r,{value:void 0}),V("invalid",e);break;case"textarea":Ea(e,r),l=go(e,r),V("invalid",e);break;default:l=r}wo(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?yc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&mc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&lr(e,a):typeof a=="number"&&lr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(rr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&V("scroll",e):a!=null&&hs(e,i,a,o))}switch(n){case"input":Ir(e),Ca(e,r,!1);break;case"textarea":Ir(e),Na(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?pn(e,!!r.multiple,i,!1):r.defaultValue!=null&&pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)Uf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Wt(hr.current),Wt(lt.current),Hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(i=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Wr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Wr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return pe(t),null;case 13:if(W(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&ze!==null&&t.mode&1&&!(t.flags&128))rf(),Cn(),t.flags|=98560,i=!1;else if(i=Hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[nt]=t}else Cn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),i=!1}else Xe!==null&&(ts(Xe),Xe=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ne===0&&(ne=3):qs())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Nn(),Xo(e,t),e===null&&fr(t.stateNode.containerInfo),pe(t),null;case 10:return Ls(t.type._context),pe(t),null;case 17:return Ee(t.type)&&Cl(),pe(t),null;case 19:if(W(Y),i=t.memoizedState,i===null)return pe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Bn(i,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Tl(e),o!==null){for(t.flags|=128,Bn(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>_n&&(t.flags|=128,r=!0,Bn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Tl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Bn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Q)return pe(t),null}else 2*J()-i.renderingStartTime>_n&&n!==1073741824&&(t.flags|=128,r=!0,Bn(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=Y.current,B(Y,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return Zs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Pe&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function im(e,t){switch(Ts(t),t.tag){case 1:return Ee(t.type)&&Cl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nn(),W(Ce),W(ye),As(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ds(t),null;case 13:if(W(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return W(Y),null;case 4:return Nn(),null;case 10:return Ls(t.type._context),null;case 22:case 23:return Zs(),null;case 24:return null;default:return null}}var Xr=!1,he=!1,om=typeof WeakSet=="function"?WeakSet:Set,P=null;function fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(e,t,r)}else n.current=null}function Ko(e,t,n){try{n()}catch(r){G(e,t,r)}}var mu=!1;function sm(e,t){if(Mo=xl,e=Hc(),Ps(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,c=0,h=0,m=e,y=null;t:for(;;){for(var x;m!==n||l!==0&&m.nodeType!==3||(s=o+l),m!==i||r!==0&&m.nodeType!==3||(a=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)y=m,m=x;for(;;){if(m===e)break t;if(y===n&&++c===l&&(s=o),y===i&&++h===r&&(a=o),(x=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ro={focusedElem:e,selectionRange:n},xl=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,S=g.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?v:Qe(t.type,v),S);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){G(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return g=mu,mu=!1,g}function er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Ko(t,n,i)}l=l.next}while(l!==r)}}function Zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Go(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bf(e){var t=e.alternate;t!==null&&(e.alternate=null,Bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[pr],delete t[Io],delete t[Wp],delete t[Hp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vf(e){return e.tag===5||e.tag===3||e.tag===4}function hu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sl));else if(r!==4&&(e=e.child,e!==null))for(Zo(e,t,n),e=e.sibling;e!==null;)Zo(e,t,n),e=e.sibling}function qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qo(e,t,n),e=e.sibling;e!==null;)qo(e,t,n),e=e.sibling}var ae=null,Ye=!1;function yt(e,t,n){for(n=n.child;n!==null;)Wf(e,t,n),n=n.sibling}function Wf(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:he||fn(n,t);case 6:var r=ae,l=Ye;ae=null,yt(e,t,n),ae=r,Ye=l,ae!==null&&(Ye?(e=ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ae.removeChild(n.stateNode));break;case 18:ae!==null&&(Ye?(e=ae,n=n.stateNode,e.nodeType===8?Ki(e.parentNode,n):e.nodeType===1&&Ki(e,n),ar(e)):Ki(ae,n.stateNode));break;case 4:r=ae,l=Ye,ae=n.stateNode.containerInfo,Ye=!0,yt(e,t,n),ae=r,Ye=l;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ko(n,t,o),l=l.next}while(l!==r)}yt(e,t,n);break;case 1:if(!he&&(fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){G(n,t,s)}yt(e,t,n);break;case 21:yt(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,yt(e,t,n),he=r):yt(e,t,n);break;default:yt(e,t,n)}}function yu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new om),t.forEach(function(r){var l=ym.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function He(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:ae=s.stateNode,Ye=!1;break e;case 3:ae=s.stateNode.containerInfo,Ye=!0;break e;case 4:ae=s.stateNode.containerInfo,Ye=!0;break e}s=s.return}if(ae===null)throw Error(k(160));Wf(i,o,l),ae=null,Ye=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){G(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hf(t,e),t=t.sibling}function Hf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(He(t,e),qe(e),r&4){try{er(3,e,e.return),Zl(3,e)}catch(v){G(e,e.return,v)}try{er(5,e,e.return)}catch(v){G(e,e.return,v)}}break;case 1:He(t,e),qe(e),r&512&&n!==null&&fn(n,n.return);break;case 5:if(He(t,e),qe(e),r&512&&n!==null&&fn(n,n.return),e.flags&32){var l=e.stateNode;try{lr(l,"")}catch(v){G(e,e.return,v)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&fc(l,i),ko(s,o);var c=ko(s,i);for(o=0;o<a.length;o+=2){var h=a[o],m=a[o+1];h==="style"?yc(l,m):h==="dangerouslySetInnerHTML"?mc(l,m):h==="children"?lr(l,m):hs(l,h,m,c)}switch(s){case"input":yo(l,i);break;case"textarea":dc(l,i);break;case"select":var y=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?pn(l,!!i.multiple,x,!1):y!==!!i.multiple&&(i.defaultValue!=null?pn(l,!!i.multiple,i.defaultValue,!0):pn(l,!!i.multiple,i.multiple?[]:"",!1))}l[pr]=i}catch(v){G(e,e.return,v)}}break;case 6:if(He(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(k(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(v){G(e,e.return,v)}}break;case 3:if(He(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ar(t.containerInfo)}catch(v){G(e,e.return,v)}break;case 4:He(t,e),qe(e);break;case 13:He(t,e),qe(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ks=J())),r&4&&yu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||h,He(t,e),he=c):He(t,e),qe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(m=P=h;P!==null;){switch(y=P,x=y.child,y.tag){case 0:case 11:case 14:case 15:er(4,y,y.return);break;case 1:fn(y,y.return);var g=y.stateNode;if(typeof g.componentWillUnmount=="function"){r=y,n=y.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){G(r,n,v)}}break;case 5:fn(y,y.return);break;case 22:if(y.memoizedState!==null){gu(m);continue}}x!==null?(x.return=y,P=x):gu(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{l=m.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=m.stateNode,a=m.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=hc("display",o))}catch(v){G(e,e.return,v)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=c?"":m.memoizedProps}catch(v){G(e,e.return,v)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:He(t,e),qe(e),r&4&&yu(e);break;case 21:break;default:He(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vf(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(lr(l,""),r.flags&=-33);var i=hu(e);qo(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=hu(e);Zo(e,s,o);break;default:throw Error(k(161))}}catch(a){G(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function am(e,t,n){P=e,Qf(e)}function Qf(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var l=P,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||Xr;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||he;s=Xr;var c=he;if(Xr=o,(he=a)&&!c)for(P=l;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?xu(l):a!==null?(a.return=o,P=a):xu(l);for(;i!==null;)P=i,Qf(i),i=i.sibling;P=l,Xr=s,he=c}vu(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,P=i):vu(e)}}function vu(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&tu(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tu(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&ar(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}he||t.flags&512&&Go(t)}catch(y){G(t,t.return,y)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function gu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function xu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zl(4,t)}catch(a){G(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){G(t,l,a)}}var i=t.return;try{Go(t)}catch(a){G(t,i,a)}break;case 5:var o=t.return;try{Go(t)}catch(a){G(t,o,a)}}}catch(a){G(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var um=Math.ceil,Ol=ht.ReactCurrentDispatcher,Ys=ht.ReactCurrentOwner,Ae=ht.ReactCurrentBatchConfig,I=0,oe=null,ee=null,ce=0,Pe=0,dn=It(0),ne=0,xr=null,Gt=0,ql=0,Xs=0,tr=null,ke=null,Ks=0,_n=1/0,ot=null,Ll=!1,Jo=null,zt=null,Kr=!1,St=null,Il=0,nr=0,bo=null,al=-1,ul=0;function ge(){return I&6?J():al!==-1?al:al=J()}function Tt(e){return e.mode&1?I&2&&ce!==0?ce&-ce:Yp.transition!==null?(ul===0&&(ul=Pc()),ul):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ic(e.type)),e):1}function Ge(e,t,n,r){if(50<nr)throw nr=0,bo=null,Error(k(185));Nr(e,n,r),(!(I&2)||e!==oe)&&(e===oe&&(!(I&2)&&(ql|=n),ne===4&&wt(e,ce)),Ne(e,r),n===1&&I===0&&!(t.mode&1)&&(_n=J()+500,Xl&&$t()))}function Ne(e,t){var n=e.callbackNode;Y0(e,t);var r=gl(e,e===oe?ce:0);if(r===0)n!==null&&Pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pa(n),t===1)e.tag===0?Qp(wu.bind(null,e)):ef(wu.bind(null,e)),Bp(function(){!(I&6)&&$t()}),n=null;else{switch(zc(r)){case 1:n=ws;break;case 4:n=jc;break;case 16:n=vl;break;case 536870912:n=_c;break;default:n=vl}n=bf(n,Yf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Yf(e,t){if(al=-1,ul=0,I&6)throw Error(k(327));var n=e.callbackNode;if(gn()&&e.callbackNode!==n)return null;var r=gl(e,e===oe?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$l(e,r);else{t=r;var l=I;I|=2;var i=Kf();(oe!==e||ce!==t)&&(ot=null,_n=J()+500,Ht(e,t));do try{dm();break}catch(s){Xf(e,s)}while(!0);Os(),Ol.current=i,I=l,ee!==null?t=0:(oe=null,ce=0,t=ne)}if(t!==0){if(t===2&&(l=jo(e),l!==0&&(r=l,t=es(e,l))),t===1)throw n=xr,Ht(e,0),wt(e,r),Ne(e,J()),n;if(t===6)wt(e,r);else{if(l=e.current.alternate,!(r&30)&&!cm(l)&&(t=$l(e,r),t===2&&(i=jo(e),i!==0&&(r=i,t=es(e,i))),t===1))throw n=xr,Ht(e,0),wt(e,r),Ne(e,J()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Ut(e,ke,ot);break;case 3:if(wt(e,r),(r&130023424)===r&&(t=Ks+500-J(),10<t)){if(gl(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Lo(Ut.bind(null,e,ke,ot),t);break}Ut(e,ke,ot);break;case 4:if(wt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Ke(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*um(r/1960))-r,10<r){e.timeoutHandle=Lo(Ut.bind(null,e,ke,ot),r);break}Ut(e,ke,ot);break;case 5:Ut(e,ke,ot);break;default:throw Error(k(329))}}}return Ne(e,J()),e.callbackNode===n?Yf.bind(null,e):null}function es(e,t){var n=tr;return e.current.memoizedState.isDehydrated&&(Ht(e,t).flags|=256),e=$l(e,t),e!==2&&(t=ke,ke=n,t!==null&&ts(t)),e}function ts(e){ke===null?ke=e:ke.push.apply(ke,e)}function cm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!Ze(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wt(e,t){for(t&=~Xs,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ke(t),r=1<<n;e[n]=-1,t&=~r}}function wu(e){if(I&6)throw Error(k(327));gn();var t=gl(e,0);if(!(t&1))return Ne(e,J()),null;var n=$l(e,t);if(e.tag!==0&&n===2){var r=jo(e);r!==0&&(t=r,n=es(e,r))}if(n===1)throw n=xr,Ht(e,0),wt(e,t),Ne(e,J()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ut(e,ke,ot),Ne(e,J()),null}function Gs(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(_n=J()+500,Xl&&$t())}}function Zt(e){St!==null&&St.tag===0&&!(I&6)&&gn();var t=I;I|=1;var n=Ae.transition,r=D;try{if(Ae.transition=null,D=1,e)return e()}finally{D=r,Ae.transition=n,I=t,!(I&6)&&$t()}}function Zs(){Pe=dn.current,W(dn)}function Ht(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Up(n)),ee!==null)for(n=ee.return;n!==null;){var r=n;switch(Ts(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:Nn(),W(Ce),W(ye),As();break;case 5:Ds(r);break;case 4:Nn();break;case 13:W(Y);break;case 19:W(Y);break;case 10:Ls(r.type._context);break;case 22:case 23:Zs()}n=n.return}if(oe=e,ee=e=Mt(e.current,null),ce=Pe=t,ne=0,xr=null,Xs=ql=Gt=0,ke=tr=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}Vt=null}return e}function Xf(e,t){do{var n=ee;try{if(Os(),il.current=Rl,Ml){for(var r=X.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Ml=!1}if(Kt=0,ie=te=X=null,bn=!1,yr=0,Ys.current=null,n===null||n.return===null){ne=1,xr=t,ee=null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=ce,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=su(o);if(x!==null){x.flags&=-257,au(x,o,s,i,t),x.mode&1&&ou(i,c,t),t=x,a=c;var g=t.updateQueue;if(g===null){var v=new Set;v.add(a),t.updateQueue=v}else g.add(a);break e}else{if(!(t&1)){ou(i,c,t),qs();break e}a=Error(k(426))}}else if(Q&&s.mode&1){var S=su(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),au(S,o,s,i,t),Ms(jn(a,s));break e}}i=a=jn(a,s),ne!==4&&(ne=2),tr===null?tr=[i]:tr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=Tf(i,a,t);eu(i,d);break e;case 1:s=a;var f=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(zt===null||!zt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Mf(i,s,t);eu(i,w);break e}}i=i.return}while(i!==null)}Zf(n)}catch(N){t=N,ee===n&&n!==null&&(ee=n=n.return);continue}break}while(!0)}function Kf(){var e=Ol.current;return Ol.current=Rl,e===null?Rl:e}function qs(){(ne===0||ne===3||ne===2)&&(ne=4),oe===null||!(Gt&268435455)&&!(ql&268435455)||wt(oe,ce)}function $l(e,t){var n=I;I|=2;var r=Kf();(oe!==e||ce!==t)&&(ot=null,Ht(e,t));do try{fm();break}catch(l){Xf(e,l)}while(!0);if(Os(),I=n,Ol.current=r,ee!==null)throw Error(k(261));return oe=null,ce=0,ne}function fm(){for(;ee!==null;)Gf(ee)}function dm(){for(;ee!==null&&!F0();)Gf(ee)}function Gf(e){var t=Jf(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Zf(e):ee=t,Ys.current=null}function Zf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=im(n,t),n!==null){n.flags&=32767,ee=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,ee=null;return}}else if(n=lm(n,t,Pe),n!==null){ee=n;return}if(t=t.sibling,t!==null){ee=t;return}ee=t=e}while(t!==null);ne===0&&(ne=5)}function Ut(e,t,n){var r=D,l=Ae.transition;try{Ae.transition=null,D=1,pm(e,t,n,r)}finally{Ae.transition=l,D=r}return null}function pm(e,t,n,r){do gn();while(St!==null);if(I&6)throw Error(k(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(X0(e,i),e===oe&&(ee=oe=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kr||(Kr=!0,bf(vl,function(){return gn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ae.transition,Ae.transition=null;var o=D;D=1;var s=I;I|=4,Ys.current=null,sm(e,n),Hf(n,e),Op(Ro),xl=!!Mo,Ro=Mo=null,e.current=n,am(n),D0(),I=s,D=o,Ae.transition=i}else e.current=n;if(Kr&&(Kr=!1,St=e,Il=l),i=e.pendingLanes,i===0&&(zt=null),B0(n.stateNode),Ne(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Ll)throw Ll=!1,e=Jo,Jo=null,e;return Il&1&&e.tag!==0&&gn(),i=e.pendingLanes,i&1?e===bo?nr++:(nr=0,bo=e):nr=0,$t(),null}function gn(){if(St!==null){var e=zc(Il),t=Ae.transition,n=D;try{if(Ae.transition=null,D=16>e?16:e,St===null)var r=!1;else{if(e=St,St=null,Il=0,I&6)throw Error(k(331));var l=I;for(I|=4,P=e.current;P!==null;){var i=P,o=i.child;if(P.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(P=c;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:er(8,h,i)}var m=h.child;if(m!==null)m.return=h,P=m;else for(;P!==null;){h=P;var y=h.sibling,x=h.return;if(Bf(h),h===c){P=null;break}if(y!==null){y.return=x,P=y;break}P=x}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}P=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,P=o;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:er(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,P=d;break e}P=i.return}}var f=e.current;for(P=f;P!==null;){o=P;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,P=p;else e:for(o=f;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Zl(9,s)}}catch(N){G(s,s.return,N)}if(s===o){P=null;break e}var w=s.sibling;if(w!==null){w.return=s.return,P=w;break e}P=s.return}}if(I=l,$t(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Vl,e)}catch{}r=!0}return r}finally{D=n,Ae.transition=t}}return!1}function ku(e,t,n){t=jn(n,t),t=Tf(e,t,1),e=Pt(e,t,1),t=ge(),e!==null&&(Nr(e,1,t),Ne(e,t))}function G(e,t,n){if(e.tag===3)ku(e,e,n);else for(;t!==null;){if(t.tag===3){ku(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=jn(n,e),e=Mf(t,e,1),t=Pt(t,e,1),e=ge(),t!==null&&(Nr(t,1,e),Ne(t,e));break}}t=t.return}}function mm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,oe===e&&(ce&n)===n&&(ne===4||ne===3&&(ce&130023424)===ce&&500>J()-Ks?Ht(e,0):Xs|=n),Ne(e,t)}function qf(e,t){t===0&&(e.mode&1?(t=Dr,Dr<<=1,!(Dr&130023424)&&(Dr=4194304)):t=1);var n=ge();e=pt(e,t),e!==null&&(Nr(e,t,n),Ne(e,n))}function hm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qf(e,n)}function ym(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),qf(e,n)}var Jf;Jf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ce.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,rm(e,t,n);Se=!!(e.flags&131072)}else Se=!1,Q&&t.flags&1048576&&tf(t,jl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;sl(e,t),e=t.pendingProps;var l=Sn(t,ye.current);vn(t,n),l=Bs(null,t,r,e,l,n);var i=Vs();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(i=!0,El(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,$s(t),l.updater=Gl,t.stateNode=l,l._reactInternals=t,Bo(t,r,e,n),t=Ho(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&zs(t),ve(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(sl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=gm(r),e=Qe(r,e),l){case 0:t=Wo(null,t,r,e,n);break e;case 1:t=fu(null,t,r,e,n);break e;case 11:t=uu(null,t,r,e,n);break e;case 14:t=cu(null,t,r,Qe(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Qe(r,l),Wo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Qe(r,l),fu(e,t,r,l,n);case 3:e:{if(If(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,l=i.element,af(e,t),zl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=jn(Error(k(423)),t),t=du(e,t,r,n,l);break e}else if(r!==l){l=jn(Error(k(424)),t),t=du(e,t,r,n,l);break e}else for(ze=_t(t.stateNode.containerInfo.firstChild),Te=t,Q=!0,Xe=null,n=of(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===l){t=mt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return uf(t),e===null&&Do(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,Oo(r,l)?o=null:i!==null&&Oo(r,i)&&(t.flags|=32),Lf(e,t),ve(e,t,o,n),t.child;case 6:return e===null&&Do(t),null;case 13:return $f(e,t,n);case 4:return Fs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=En(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Qe(r,l),uu(e,t,r,l,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,B(_l,r._currentValue),r._currentValue=o,i!==null)if(Ze(i.value,o)){if(i.children===l.children&&!Ce.current){t=mt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=ct(-1,n&-n),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?a.next=a:(a.next=h.next,h.next=a),c.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ao(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ao(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ve(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,vn(t,n),l=Ue(l),r=r(l),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,l=Qe(r,t.pendingProps),l=Qe(r.type,l),cu(e,t,r,l,n);case 15:return Rf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Qe(r,l),sl(e,t),t.tag=1,Ee(r)?(e=!0,El(t)):e=!1,vn(t,n),zf(t,r,l),Bo(t,r,l,n),Ho(null,t,r,!0,e,n);case 19:return Ff(e,t,n);case 22:return Of(e,t,n)}throw Error(k(156,t.tag))};function bf(e,t){return Nc(e,t)}function vm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,n,r){return new vm(e,t,n,r)}function Js(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gm(e){if(typeof e=="function")return Js(e)?1:0;if(e!=null){if(e=e.$$typeof,e===vs)return 11;if(e===gs)return 14}return 2}function Mt(e,t){var n=e.alternate;return n===null?(n=De(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function cl(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")Js(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case tn:return Qt(n.children,l,i,t);case ys:o=8,l|=8;break;case co:return e=De(12,n,t,l|2),e.elementType=co,e.lanes=i,e;case fo:return e=De(13,n,t,l),e.elementType=fo,e.lanes=i,e;case po:return e=De(19,n,t,l),e.elementType=po,e.lanes=i,e;case ac:return Jl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oc:o=10;break e;case sc:o=9;break e;case vs:o=11;break e;case gs:o=14;break e;case vt:o=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=De(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function Qt(e,t,n,r){return e=De(7,e,r,t),e.lanes=n,e}function Jl(e,t,n,r){return e=De(22,e,r,t),e.elementType=ac,e.lanes=n,e.stateNode={isHidden:!1},e}function no(e,t,n){return e=De(6,e,null,t),e.lanes=n,e}function ro(e,t,n){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xm(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function bs(e,t,n,r,l,i,o,s,a){return e=new xm(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=De(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$s(i),e}function wm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:en,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ed(e){if(!e)return Ot;e=e._reactInternals;e:{if(Jt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Ee(n))return bc(e,n,t)}return t}function td(e,t,n,r,l,i,o,s,a){return e=bs(n,r,!0,e,l,i,o,s,a),e.context=ed(null),n=e.current,r=ge(),l=Tt(n),i=ct(r,l),i.callback=t??null,Pt(n,i,l),e.current.lanes=l,Nr(e,l,r),Ne(e,r),e}function bl(e,t,n,r){var l=t.current,i=ge(),o=Tt(l);return n=ed(n),t.context===null?t.context=n:t.pendingContext=n,t=ct(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pt(l,t,o),e!==null&&(Ge(e,l,o,i),ll(e,l,o)),o}function Fl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Su(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ea(e,t){Su(e,t),(e=e.alternate)&&Su(e,t)}function km(){return null}var nd=typeof reportError=="function"?reportError:function(e){console.error(e)};function ta(e){this._internalRoot=e}ei.prototype.render=ta.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));bl(e,t,null,null)};ei.prototype.unmount=ta.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zt(function(){bl(null,e,null,null)}),t[dt]=null}};function ei(e){this._internalRoot=e}ei.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xt.length&&t!==0&&t<xt[n].priority;n++);xt.splice(n,0,e),n===0&&Lc(e)}};function na(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ti(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cu(){}function Sm(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=Fl(o);i.call(c)}}var o=td(t,r,e,0,null,!1,!1,"",Cu);return e._reactRootContainer=o,e[dt]=o.current,fr(e.nodeType===8?e.parentNode:e),Zt(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=Fl(a);s.call(c)}}var a=bs(e,0,!1,null,null,!1,!1,"",Cu);return e._reactRootContainer=a,e[dt]=a.current,fr(e.nodeType===8?e.parentNode:e),Zt(function(){bl(t,a,n,r)}),a}function ni(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=Fl(o);s.call(a)}}bl(t,o,e,l)}else o=Sm(n,t,e,l,r);return Fl(o)}Tc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Yn(t.pendingLanes);n!==0&&(ks(t,n|1),Ne(t,J()),!(I&6)&&(_n=J()+500,$t()))}break;case 13:Zt(function(){var r=pt(e,1);if(r!==null){var l=ge();Ge(r,e,1,l)}}),ea(e,1)}};Ss=function(e){if(e.tag===13){var t=pt(e,134217728);if(t!==null){var n=ge();Ge(t,e,134217728,n)}ea(e,134217728)}};Mc=function(e){if(e.tag===13){var t=Tt(e),n=pt(e,t);if(n!==null){var r=ge();Ge(n,e,t,r)}ea(e,t)}};Rc=function(){return D};Oc=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Co=function(e,t,n){switch(t){case"input":if(yo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=Yl(r);if(!l)throw Error(k(90));cc(r),yo(r,l)}}}break;case"textarea":dc(e,n);break;case"select":t=n.value,t!=null&&pn(e,!!n.multiple,t,!1)}};xc=Gs;wc=Zt;var Cm={usingClientEntryPoint:!1,Events:[_r,on,Yl,vc,gc,Gs]},Vn={findFiberByHostInstance:Bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Em={bundleType:Vn.bundleType,version:Vn.version,rendererPackageName:Vn.rendererPackageName,rendererConfig:Vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Cc(e),e===null?null:e.stateNode},findFiberByHostInstance:Vn.findFiberByHostInstance||km,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{Vl=Gr.inject(Em),rt=Gr}catch{}}Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cm;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!na(t))throw Error(k(200));return wm(e,t,null,n)};Oe.createRoot=function(e,t){if(!na(e))throw Error(k(299));var n=!1,r="",l=nd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=bs(e,1,!1,null,null,n,!1,r,l),e[dt]=t.current,fr(e.nodeType===8?e.parentNode:e),new ta(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Cc(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return Zt(e)};Oe.hydrate=function(e,t,n){if(!ti(t))throw Error(k(200));return ni(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!na(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=nd;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=td(t,null,e,1,n??null,l,!1,i,o),e[dt]=t.current,fr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new ei(t)};Oe.render=function(e,t,n){if(!ti(t))throw Error(k(200));return ni(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!ti(e))throw Error(k(40));return e._reactRootContainer?(Zt(function(){ni(null,null,e,!1,function(){e._reactRootContainer=null,e[dt]=null})}),!0):!1};Oe.unstable_batchedUpdates=Gs;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ti(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return ni(e,t,n,!1,r)};Oe.version="18.3.1-next-f1338f8080-20240426";function rd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rd)}catch(e){console.error(e)}}rd(),nc.exports=Oe;var Nm=nc.exports,Eu=Nm;ao.createRoot=Eu.createRoot,ao.hydrateRoot=Eu.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dl(){return Dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dl.apply(this,arguments)}var Ct;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ct||(Ct={}));const Nu="popstate";function jm(e){e===void 0&&(e={});function t(l,i){let{pathname:o="/",search:s="",hash:a=""}=zr(l.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),ns("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(l,i){let o=l.document.querySelector("base"),s="";if(o&&o.getAttribute("href")){let a=l.location.href,c=a.indexOf("#");s=c===-1?a:a.slice(0,c)}return s+"#"+(typeof i=="string"?i:ld(i))}function r(l,i){ra(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return Pm(t,n,r,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ra(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _m(){return Math.random().toString(36).substr(2,8)}function ju(e,t){return{usr:e.state,key:e.key,idx:t}}function ns(e,t,n,r){return n===void 0&&(n=null),Dl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zr(t):t,{state:n,key:t&&t.key||r||_m()})}function ld(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Pm(e,t,n,r){r===void 0&&(r={});let{window:l=document.defaultView,v5Compat:i=!1}=r,o=l.history,s=Ct.Pop,a=null,c=h();c==null&&(c=0,o.replaceState(Dl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function m(){s=Ct.Pop;let S=h(),d=S==null?null:S-c;c=S,a&&a({action:s,location:v.location,delta:d})}function y(S,d){s=Ct.Push;let f=ns(v.location,S,d);n&&n(f,S),c=h()+1;let p=ju(f,c),w=v.createHref(f);try{o.pushState(p,"",w)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;l.location.assign(w)}i&&a&&a({action:s,location:v.location,delta:1})}function x(S,d){s=Ct.Replace;let f=ns(v.location,S,d);n&&n(f,S),c=h();let p=ju(f,c),w=v.createHref(f);o.replaceState(p,"",w),i&&a&&a({action:s,location:v.location,delta:0})}function g(S){let d=l.location.origin!=="null"?l.location.origin:l.location.href,f=typeof S=="string"?S:ld(S);return f=f.replace(/ $/,"%20"),je(d,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,d)}let v={get action(){return s},get location(){return e(l,o)},listen(S){if(a)throw new Error("A history only accepts one active listener");return l.addEventListener(Nu,m),a=S,()=>{l.removeEventListener(Nu,m),a=null}},createHref(S){return t(l,S)},createURL:g,encodeLocation(S){let d=g(S);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:y,replace:x,go(S){return o.go(S)}};return v}var _u;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_u||(_u={}));function zm(e,t,n){return n===void 0&&(n="/"),Tm(e,t,n)}function Tm(e,t,n,r){let l=typeof t=="string"?zr(t):t,i=sd(l.pathname||"/",n);if(i==null)return null;let o=id(e);Mm(o);let s=null;for(let a=0;s==null&&a<o.length;++a){let c=Wm(i);s=Um(o[a],c)}return s}function id(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let l=(i,o,s)=>{let a={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};a.relativePath.startsWith("/")&&(je(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=xn([r,a.relativePath]),h=n.concat(a);i.children&&i.children.length>0&&(je(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),id(i.children,t,h,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Dm(c,i.index),routesMeta:h})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,o);else for(let a of od(i.path))l(i,o,a)}),t}function od(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return l?[i,""]:[i];let o=od(r.join("/")),s=[];return s.push(...o.map(a=>a===""?i:[i,a].join("/"))),l&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function Mm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Am(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Rm=/^:[\w-]+$/,Om=3,Lm=2,Im=1,$m=10,Fm=-2,Pu=e=>e==="*";function Dm(e,t){let n=e.split("/"),r=n.length;return n.some(Pu)&&(r+=Fm),t&&(r+=Lm),n.filter(l=>!Pu(l)).reduce((l,i)=>l+(Rm.test(i)?Om:i===""?Im:$m),r)}function Am(e,t){return e.length===t.length&&e.slice(0,-1).every((r,l)=>r===t[l])?e[e.length-1]-t[t.length-1]:0}function Um(e,t,n){let{routesMeta:r}=e,l={},i="/",o=[];for(let s=0;s<r.length;++s){let a=r[s],c=s===r.length-1,h=i==="/"?t:t.slice(i.length)||"/",m=Bm({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},h),y=a.route;if(!m)return null;Object.assign(l,m.params),o.push({params:l,pathname:xn([i,m.pathname]),pathnameBase:Hm(xn([i,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(i=xn([i,m.pathnameBase]))}return o}function Bm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Vm(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],o=i.replace(/(.)\/+$/,"$1"),s=l.slice(1);return{params:r.reduce((c,h,m)=>{let{paramName:y,isOptional:x}=h;if(y==="*"){let v=s[m]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const g=s[m];return x&&!g?c[y]=void 0:c[y]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Vm(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ra(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function Wm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ra(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function sd(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const xn=e=>e.join("/").replace(/\/\/+/g,"/"),Hm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function Qm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ad=["post","put","patch","delete"];new Set(ad);const Ym=["get",...ad];new Set(Ym);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Al(){return Al=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Al.apply(this,arguments)}const Xm=j.createContext(null),Km=j.createContext(null),ud=j.createContext(null),ri=j.createContext(null),li=j.createContext({outlet:null,matches:[],isDataRoute:!1}),cd=j.createContext(null);function la(){return j.useContext(ri)!=null}function Gm(){return la()||je(!1),j.useContext(ri).location}function Zm(e,t){return qm(e,t)}function qm(e,t,n,r){la()||je(!1);let{navigator:l}=j.useContext(ud),{matches:i}=j.useContext(li),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=Gm(),h;if(t){var m;let S=typeof t=="string"?zr(t):t;a==="/"||(m=S.pathname)!=null&&m.startsWith(a)||je(!1),h=S}else h=c;let y=h.pathname||"/",x=y;if(a!=="/"){let S=a.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(S.length).join("/")}let g=zm(e,{pathname:x}),v=nh(g&&g.map(S=>Object.assign({},S,{params:Object.assign({},s,S.params),pathname:xn([a,l.encodeLocation?l.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:xn([a,l.encodeLocation?l.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n,r);return t&&v?j.createElement(ri.Provider,{value:{location:Al({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Ct.Pop}},v):v}function Jm(){let e=oh(),t=Qm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:l},n):null,null)}const bm=j.createElement(Jm,null);class eh extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(li.Provider,{value:this.props.routeContext},j.createElement(cd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function th(e){let{routeContext:t,match:n,children:r}=e,l=j.useContext(Xm);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(li.Provider,{value:t},r)}function nh(e,t,n,r){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,s=(l=n)==null?void 0:l.errors;if(s!=null){let h=o.findIndex(m=>m.route.id&&(s==null?void 0:s[m.route.id])!==void 0);h>=0||je(!1),o=o.slice(0,Math.min(o.length,h+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let m=o[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=h),m.route.id){let{loaderData:y,errors:x}=n,g=m.route.loader&&y[m.route.id]===void 0&&(!x||x[m.route.id]===void 0);if(m.route.lazy||g){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,m,y)=>{let x,g=!1,v=null,S=null;n&&(x=s&&m.route.id?s[m.route.id]:void 0,v=m.route.errorElement||bm,a&&(c<0&&y===0?(sh("route-fallback"),g=!0,S=null):c===y&&(g=!0,S=m.route.hydrateFallbackElement||null)));let d=t.concat(o.slice(0,y+1)),f=()=>{let p;return x?p=v:g?p=S:m.route.Component?p=j.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=h,j.createElement(th,{match:m,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:p})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?j.createElement(eh,{location:n.location,revalidation:n.revalidation,component:v,error:x,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):f()},null)}var fd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(fd||{});function rh(e){let t=j.useContext(Km);return t||je(!1),t}function lh(e){let t=j.useContext(li);return t||je(!1),t}function ih(e){let t=lh(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function oh(){var e;let t=j.useContext(cd),n=rh(fd.UseRouteError),r=ih();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}const zu={};function sh(e,t,n){zu[e]||(zu[e]=!0)}function ah(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function dd(e){je(!1)}function uh(e){let{basename:t="/",children:n=null,location:r,navigationType:l=Ct.Pop,navigator:i,static:o=!1,future:s}=e;la()&&je(!1);let a=t.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:a,navigator:i,static:o,future:Al({v7_relativeSplatPath:!1},s)}),[a,s,i,o]);typeof r=="string"&&(r=zr(r));let{pathname:h="/",search:m="",hash:y="",state:x=null,key:g="default"}=r,v=j.useMemo(()=>{let S=sd(h,a);return S==null?null:{location:{pathname:S,search:m,hash:y,state:x,key:g},navigationType:l}},[a,h,m,y,x,g,l]);return v==null?null:j.createElement(ud.Provider,{value:c},j.createElement(ri.Provider,{children:n,value:v}))}function ch(e){let{children:t,location:n}=e;return Zm(rs(t),n)}new Promise(()=>{});function rs(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,l)=>{if(!j.isValidElement(r))return;let i=[...t,l];if(r.type===j.Fragment){n.push.apply(n,rs(r.props.children,i));return}r.type!==dd&&je(!1),!r.props.index||!r.props.children||je(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rs(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const fh="6";try{window.__reactRouterVersion=fh}catch{}const dh="startTransition",Tu=so[dh];function ph(e){let{basename:t,children:n,future:r,window:l}=e,i=j.useRef();i.current==null&&(i.current=jm({window:l,v5Compat:!0}));let o=i.current,[s,a]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=j.useCallback(m=>{c&&Tu?Tu(()=>a(m)):a(m)},[a,c]);return j.useLayoutEffect(()=>o.listen(h),[o,h]),j.useEffect(()=>ah(r),[r]),j.createElement(uh,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var Mu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Mu||(Mu={}));var Ru;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ru||(Ru={}));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),pd=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=j.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:o,...s},a)=>j.createElement("svg",{ref:a,...hh,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:pd("lucide",l),...s},[...o.map(([c,h])=>j.createElement(c,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=(e,t)=>{const n=j.forwardRef(({className:r,...l},i)=>j.createElement(yh,{ref:i,iconNode:t,className:pd(`lucide-${mh(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=H("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=H("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=H("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=H("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=H("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=H("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=H("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=H("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=H("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=H("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=H("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=H("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=H("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=H("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=H("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=H("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=H("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=H("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=H("School",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=H("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=H("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=H("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=H("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=H("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=H("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);function Oh(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Lh(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ih=function(){function e(n){var r=this;this._insertTag=function(l){var i;r.tags.length===0?r.insertionPoint?i=r.insertionPoint.nextSibling:r.prepend?i=r.container.firstChild:i=r.before:i=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(l,i),r.tags.push(l)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Lh(this));var l=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Oh(l);try{i.insertRule(r,i.cssRules.length)}catch{}}else l.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var l;return(l=r.parentNode)==null?void 0:l.removeChild(r)}),this.tags=[],this.ctr=0},e}(),me="-ms-",Ul="-moz-",$="-webkit-",Sd="comm",ia="rule",oa="decl",$h="@import",Cd="@keyframes",Fh="@layer",Dh=Math.abs,ii=String.fromCharCode,Ah=Object.assign;function Uh(e,t){return ue(e,0)^45?(((t<<2^ue(e,0))<<2^ue(e,1))<<2^ue(e,2))<<2^ue(e,3):0}function Ed(e){return e.trim()}function Bh(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ls(e,t){return e.indexOf(t)}function ue(e,t){return e.charCodeAt(t)|0}function wr(e,t,n){return e.slice(t,n)}function et(e){return e.length}function sa(e){return e.length}function Zr(e,t){return t.push(e),e}function Vh(e,t){return e.map(t).join("")}var oi=1,Pn=1,Nd=0,_e=0,b=0,Rn="";function si(e,t,n,r,l,i,o){return{value:e,root:t,parent:n,type:r,props:l,children:i,line:oi,column:Pn,length:o,return:""}}function Wn(e,t){return Ah(si("",null,null,"",null,null,0),e,{length:-e.length},t)}function Wh(){return b}function Hh(){return b=_e>0?ue(Rn,--_e):0,Pn--,b===10&&(Pn=1,oi--),b}function Me(){return b=_e<Nd?ue(Rn,_e++):0,Pn++,b===10&&(Pn=1,oi++),b}function it(){return ue(Rn,_e)}function fl(){return _e}function Tr(e,t){return wr(Rn,e,t)}function kr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jd(e){return oi=Pn=1,Nd=et(Rn=e),_e=0,[]}function _d(e){return Rn="",e}function dl(e){return Ed(Tr(_e-1,is(e===91?e+2:e===40?e+1:e)))}function Qh(e){for(;(b=it())&&b<33;)Me();return kr(e)>2||kr(b)>3?"":" "}function Yh(e,t){for(;--t&&Me()&&!(b<48||b>102||b>57&&b<65||b>70&&b<97););return Tr(e,fl()+(t<6&&it()==32&&Me()==32))}function is(e){for(;Me();)switch(b){case e:return _e;case 34:case 39:e!==34&&e!==39&&is(b);break;case 40:e===41&&is(e);break;case 92:Me();break}return _e}function Xh(e,t){for(;Me()&&e+b!==57;)if(e+b===84&&it()===47)break;return"/*"+Tr(t,_e-1)+"*"+ii(e===47?e:Me())}function Kh(e){for(;!kr(it());)Me();return Tr(e,_e)}function Gh(e){return _d(pl("",null,null,null,[""],e=jd(e),0,[0],e))}function pl(e,t,n,r,l,i,o,s,a){for(var c=0,h=0,m=o,y=0,x=0,g=0,v=1,S=1,d=1,f=0,p="",w=l,N=i,_=r,E=p;S;)switch(g=f,f=Me()){case 40:if(g!=108&&ue(E,m-1)==58){ls(E+=F(dl(f),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:E+=dl(f);break;case 9:case 10:case 13:case 32:E+=Qh(g);break;case 92:E+=Yh(fl()-1,7);continue;case 47:switch(it()){case 42:case 47:Zr(Zh(Xh(Me(),fl()),t,n),a);break;default:E+="/"}break;case 123*v:s[c++]=et(E)*d;case 125*v:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+h:d==-1&&(E=F(E,/\f/g,"")),x>0&&et(E)-m&&Zr(x>32?Iu(E+";",r,n,m-1):Iu(F(E," ","")+";",r,n,m-2),a);break;case 59:E+=";";default:if(Zr(_=Lu(E,t,n,c,h,l,s,p,w=[],N=[],m),i),f===123)if(h===0)pl(E,t,_,_,w,i,m,s,N);else switch(y===99&&ue(E,3)===110?100:y){case 100:case 108:case 109:case 115:pl(e,_,_,r&&Zr(Lu(e,_,_,0,0,l,s,p,l,w=[],m),N),l,N,m,s,r?w:N);break;default:pl(E,_,_,_,[""],N,0,s,N)}}c=h=x=0,v=d=1,p=E="",m=o;break;case 58:m=1+et(E),x=g;default:if(v<1){if(f==123)--v;else if(f==125&&v++==0&&Hh()==125)continue}switch(E+=ii(f),f*v){case 38:d=h>0?1:(E+="\f",-1);break;case 44:s[c++]=(et(E)-1)*d,d=1;break;case 64:it()===45&&(E+=dl(Me())),y=it(),h=m=et(p=E+=Kh(fl())),f++;break;case 45:g===45&&et(E)==2&&(v=0)}}return i}function Lu(e,t,n,r,l,i,o,s,a,c,h){for(var m=l-1,y=l===0?i:[""],x=sa(y),g=0,v=0,S=0;g<r;++g)for(var d=0,f=wr(e,m+1,m=Dh(v=o[g])),p=e;d<x;++d)(p=Ed(v>0?y[d]+" "+f:F(f,/&\f/g,y[d])))&&(a[S++]=p);return si(e,t,n,l===0?ia:s,a,c,h)}function Zh(e,t,n){return si(e,t,n,Sd,ii(Wh()),wr(e,2,-2),0)}function Iu(e,t,n,r){return si(e,t,n,oa,wr(e,0,r),wr(e,r+1,-1),r)}function wn(e,t){for(var n="",r=sa(e),l=0;l<r;l++)n+=t(e[l],l,e,t)||"";return n}function qh(e,t,n,r){switch(e.type){case Fh:if(e.children.length)break;case $h:case oa:return e.return=e.return||e.value;case Sd:return"";case Cd:return e.return=e.value+"{"+wn(e.children,r)+"}";case ia:e.value=e.props.join(",")}return et(n=wn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Jh(e){var t=sa(e);return function(n,r,l,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,l,i)||"";return o}}function bh(e){return function(t){t.root||(t=t.return)&&e(t)}}function e1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var t1=function(t,n,r){for(var l=0,i=0;l=i,i=it(),l===38&&i===12&&(n[r]=1),!kr(i);)Me();return Tr(t,_e)},n1=function(t,n){var r=-1,l=44;do switch(kr(l)){case 0:l===38&&it()===12&&(n[r]=1),t[r]+=t1(_e-1,n,r);break;case 2:t[r]+=dl(l);break;case 4:if(l===44){t[++r]=it()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=ii(l)}while(l=Me());return t},r1=function(t,n){return _d(n1(jd(t),n))},$u=new WeakMap,l1=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,l=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!$u.get(r))&&!l){$u.set(t,!0);for(var i=[],o=r1(n,i),s=r.props,a=0,c=0;a<o.length;a++)for(var h=0;h<s.length;h++,c++)t.props[c]=i[a]?o[a].replace(/&\f/g,s[h]):s[h]+" "+o[a]}}},i1=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Pd(e,t){switch(Uh(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Ul+e+me+e+e;case 6828:case 4268:return $+e+me+e+e;case 6165:return $+e+me+"flex-"+e+e;case 5187:return $+e+F(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return $+e+me+"flex-item-"+F(e,/flex-|-self/,"")+e;case 4675:return $+e+me+"flex-line-pack"+F(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+me+F(e,"shrink","negative")+e;case 5292:return $+e+me+F(e,"basis","preferred-size")+e;case 6060:return $+"box-"+F(e,"-grow","")+$+e+me+F(e,"grow","positive")+e;case 4554:return $+F(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(et(e)-1-t>6)switch(ue(e,t+1)){case 109:if(ue(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Ul+(ue(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ls(e,"stretch")?Pd(F(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ue(e,t+1)!==115)break;case 6444:switch(ue(e,et(e)-3-(~ls(e,"!important")&&10))){case 107:return F(e,":",":"+$)+e;case 101:return F(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ue(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+me+"$2box$3")+e}break;case 5936:switch(ue(e,t+11)){case 114:return $+e+me+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+me+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+me+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+me+e+e}return e}var o1=function(t,n,r,l){if(t.length>-1&&!t.return)switch(t.type){case oa:t.return=Pd(t.value,t.length);break;case Cd:return wn([Wn(t,{value:F(t.value,"@","@"+$)})],l);case ia:if(t.length)return Vh(t.props,function(i){switch(Bh(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return wn([Wn(t,{props:[F(i,/:(read-\w+)/,":"+Ul+"$1")]})],l);case"::placeholder":return wn([Wn(t,{props:[F(i,/:(plac\w+)/,":"+$+"input-$1")]}),Wn(t,{props:[F(i,/:(plac\w+)/,":"+Ul+"$1")]}),Wn(t,{props:[F(i,/:(plac\w+)/,me+"input-$1")]})],l)}return""})}},s1=[o1],a1=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var S=v.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var l=t.stylisPlugins||s1,i={},o,s=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var S=v.getAttribute("data-emotion").split(" "),d=1;d<S.length;d++)i[S[d]]=!0;s.push(v)});var a,c=[l1,i1];{var h,m=[qh,bh(function(v){h.insert(v)})],y=Jh(c.concat(l,m)),x=function(S){return wn(Gh(S),y)};a=function(S,d,f,p){h=f,x(S?S+"{"+d.styles+"}":d.styles),p&&(g.inserted[d.name]=!0)}}var g={key:n,sheet:new Ih({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:i,registered:{},insert:a};return g.sheet.hydrate(s),g},zd={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se=typeof Symbol=="function"&&Symbol.for,aa=se?Symbol.for("react.element"):60103,ua=se?Symbol.for("react.portal"):60106,ai=se?Symbol.for("react.fragment"):60107,ui=se?Symbol.for("react.strict_mode"):60108,ci=se?Symbol.for("react.profiler"):60114,fi=se?Symbol.for("react.provider"):60109,di=se?Symbol.for("react.context"):60110,ca=se?Symbol.for("react.async_mode"):60111,pi=se?Symbol.for("react.concurrent_mode"):60111,mi=se?Symbol.for("react.forward_ref"):60112,hi=se?Symbol.for("react.suspense"):60113,u1=se?Symbol.for("react.suspense_list"):60120,yi=se?Symbol.for("react.memo"):60115,vi=se?Symbol.for("react.lazy"):60116,c1=se?Symbol.for("react.block"):60121,f1=se?Symbol.for("react.fundamental"):60117,d1=se?Symbol.for("react.responder"):60118,p1=se?Symbol.for("react.scope"):60119;function Ie(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case aa:switch(e=e.type,e){case ca:case pi:case ai:case ci:case ui:case hi:return e;default:switch(e=e&&e.$$typeof,e){case di:case mi:case vi:case yi:case fi:return e;default:return t}}case ua:return t}}}function Td(e){return Ie(e)===pi}A.AsyncMode=ca;A.ConcurrentMode=pi;A.ContextConsumer=di;A.ContextProvider=fi;A.Element=aa;A.ForwardRef=mi;A.Fragment=ai;A.Lazy=vi;A.Memo=yi;A.Portal=ua;A.Profiler=ci;A.StrictMode=ui;A.Suspense=hi;A.isAsyncMode=function(e){return Td(e)||Ie(e)===ca};A.isConcurrentMode=Td;A.isContextConsumer=function(e){return Ie(e)===di};A.isContextProvider=function(e){return Ie(e)===fi};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===aa};A.isForwardRef=function(e){return Ie(e)===mi};A.isFragment=function(e){return Ie(e)===ai};A.isLazy=function(e){return Ie(e)===vi};A.isMemo=function(e){return Ie(e)===yi};A.isPortal=function(e){return Ie(e)===ua};A.isProfiler=function(e){return Ie(e)===ci};A.isStrictMode=function(e){return Ie(e)===ui};A.isSuspense=function(e){return Ie(e)===hi};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ai||e===pi||e===ci||e===ui||e===hi||e===u1||typeof e=="object"&&e!==null&&(e.$$typeof===vi||e.$$typeof===yi||e.$$typeof===fi||e.$$typeof===di||e.$$typeof===mi||e.$$typeof===f1||e.$$typeof===d1||e.$$typeof===p1||e.$$typeof===c1)};A.typeOf=Ie;zd.exports=A;var m1=zd.exports,Md=m1,h1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},y1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Rd={};Rd[Md.ForwardRef]=h1;Rd[Md.Memo]=y1;var v1=!0;function Od(e,t,n){var r="";return n.split(" ").forEach(function(l){e[l]!==void 0?t.push(e[l]+";"):l&&(r+=l+" ")}),r}var fa=function(t,n,r){var l=t.key+"-"+n.name;(r===!1||v1===!1)&&t.registered[l]===void 0&&(t.registered[l]=n.styles)},Ld=function(t,n,r){fa(t,n,r);var l=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var i=n;do t.insert(n===i?"."+l:"",i,t.sheet,!0),i=i.next;while(i!==void 0)}};function g1(e){for(var t=0,n,r=0,l=e.length;l>=4;++r,l-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(l){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var x1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},w1=/[A-Z]|^ms/g,k1=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Id=function(t){return t.charCodeAt(1)===45},Fu=function(t){return t!=null&&typeof t!="boolean"},lo=e1(function(e){return Id(e)?e:e.replace(w1,"-$&").toLowerCase()}),Du=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(k1,function(r,l,i){return tt={name:l,styles:i,next:tt},l})}return x1[t]!==1&&!Id(t)&&typeof n=="number"&&n!==0?n+"px":n};function Sr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var l=n;if(l.anim===1)return tt={name:l.name,styles:l.styles,next:tt},l.name;var i=n;if(i.styles!==void 0){var o=i.next;if(o!==void 0)for(;o!==void 0;)tt={name:o.name,styles:o.styles,next:tt},o=o.next;var s=i.styles+";";return s}return S1(e,t,n)}case"function":{if(e!==void 0){var a=tt,c=n(e);return tt=a,Sr(e,t,c)}break}}var h=n;if(t==null)return h;var m=t[h];return m!==void 0?m:h}function S1(e,t,n){var r="";if(Array.isArray(n))for(var l=0;l<n.length;l++)r+=Sr(e,t,n[l])+";";else for(var i in n){var o=n[i];if(typeof o!="object"){var s=o;t!=null&&t[s]!==void 0?r+=i+"{"+t[s]+"}":Fu(s)&&(r+=lo(i)+":"+Du(i,s)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var a=0;a<o.length;a++)Fu(o[a])&&(r+=lo(i)+":"+Du(i,o[a])+";");else{var c=Sr(e,t,o);switch(i){case"animation":case"animationName":{r+=lo(i)+":"+c+";";break}default:r+=i+"{"+c+"}"}}}return r}var Au=/label:\s*([^\s;{]+)\s*(;|$)/g,tt;function da(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,l="";tt=void 0;var i=e[0];if(i==null||i.raw===void 0)r=!1,l+=Sr(n,t,i);else{var o=i;l+=o[0]}for(var s=1;s<e.length;s++)if(l+=Sr(n,t,e[s]),r){var a=i;l+=a[s]}Au.lastIndex=0;for(var c="",h;(h=Au.exec(l))!==null;)c+="-"+h[1];var m=g1(l)+c;return{name:m,styles:l,next:tt}}var C1=function(t){return t()},E1=so.useInsertionEffect?so.useInsertionEffect:!1,$d=E1||C1,Fd=j.createContext(typeof HTMLElement<"u"?a1({key:"css"}):null);Fd.Provider;var Dd=function(t){return j.forwardRef(function(n,r){var l=j.useContext(Fd);return t(n,l,r)})},Ad=j.createContext({}),gi={}.hasOwnProperty,os="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ud=function(t,n){var r={};for(var l in n)gi.call(n,l)&&(r[l]=n[l]);return r[os]=t,r},N1=function(t){var n=t.cache,r=t.serialized,l=t.isStringTag;return fa(n,r,l),$d(function(){return Ld(n,r,l)}),null},j1=Dd(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var l=e[os],i=[r],o="";typeof e.className=="string"?o=Od(t.registered,i,e.className):e.className!=null&&(o=e.className+" ");var s=da(i,void 0,j.useContext(Ad));o+=t.key+"-"+s.name;var a={};for(var c in e)gi.call(e,c)&&c!=="css"&&c!==os&&(a[c]=e[c]);return a.className=o,n&&(a.ref=n),j.createElement(j.Fragment,null,j.createElement(N1,{cache:t,serialized:s,isStringTag:typeof l=="string"}),j.createElement(l,a))}),Bd=j1,_1=u.Fragment,le=function(t,n,r){return gi.call(n,"css")?u.jsx(Bd,Ud(t,n),r):u.jsx(t,n,r)},Uu=function(t,n){var r=arguments;if(n==null||!gi.call(n,"css"))return j.createElement.apply(void 0,r);var l=r.length,i=new Array(l);i[0]=Bd,i[1]=Ud(t,n);for(var o=2;o<l;o++)i[o]=r[o];return j.createElement.apply(null,i)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(Uu||(Uu={}));function Vd(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return da(t)}function C(){var e=Vd.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var P1=function e(t){for(var n=t.length,r=0,l="";r<n;r++){var i=t[r];if(i!=null){var o=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))o=e(i);else{o="";for(var s in i)i[s]&&s&&(o&&(o+=" "),o+=s)}break}default:o=i}o&&(l&&(l+=" "),l+=o)}}return l};function z1(e,t,n){var r=[],l=Od(e,r,n);return r.length<2?n:l+t(r)}var T1=function(t){var n=t.cache,r=t.serializedArr;return $d(function(){for(var l=0;l<r.length;l++)Ld(n,r[l],!1)}),null},io=Dd(function(e,t){var n=[],r=function(){for(var a=arguments.length,c=new Array(a),h=0;h<a;h++)c[h]=arguments[h];var m=da(c,t.registered);return n.push(m),fa(t,m,!1),t.key+"-"+m.name},l=function(){for(var a=arguments.length,c=new Array(a),h=0;h<a;h++)c[h]=arguments[h];return z1(t.registered,r,P1(c))},i={css:r,cx:l,theme:j.useContext(Ad)},o=e.children(i);return j.createElement(j.Fragment,null,j.createElement(T1,{cache:t,serializedArr:n}),o)}),M1=Object.defineProperty,R1=(e,t,n)=>t in e?M1(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qr=(e,t,n)=>R1(e,typeof t!="symbol"?t+"":t,n),ss=new Map,Jr=new WeakMap,Bu=0,O1=void 0;function L1(e){return e?(Jr.has(e)||(Bu+=1,Jr.set(e,Bu.toString())),Jr.get(e)):"0"}function I1(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?L1(e.root):e[t]}`).toString()}function $1(e){const t=I1(e);let n=ss.get(t);if(!n){const r=new Map;let l;const i=new IntersectionObserver(o=>{o.forEach(s=>{var a;const c=s.isIntersecting&&l.some(h=>s.intersectionRatio>=h);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=c),(a=r.get(s.target))==null||a.forEach(h=>{h(c,s)})})},e);l=i.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:i,elements:r},ss.set(t,n)}return n}function Wd(e,t,n={},r=O1){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:l,observer:i,elements:o}=$1(n),s=o.get(e)||[];return o.has(e)||o.set(e,s),s.push(t),i.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(o.delete(e),i.unobserve(e)),o.size===0&&(i.disconnect(),ss.delete(l))}}function F1(e){return typeof e.children!="function"}var Vu=class extends j.Component{constructor(e){super(e),qr(this,"node",null),qr(this,"_unobserveCb",null),qr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),qr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),F1(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:l,fallbackInView:i}=this.props;this._unobserveCb=Wd(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:l},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:x,entry:g}=this.state;return e({inView:x,entry:g,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:l,rootMargin:i,onChange:o,skip:s,trackVisibility:a,delay:c,initialInView:h,fallbackInView:m,...y}=this.props;return j.createElement(t||"div",{ref:this.handleNode,...y},e)}};function Hd({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:l,triggerOnce:i,skip:o,initialInView:s,fallbackInView:a,onChange:c}={}){var h;const[m,y]=j.useState(null),x=j.useRef(c),[g,v]=j.useState({inView:!!s,entry:void 0});x.current=c,j.useEffect(()=>{if(o||!m)return;let p;return p=Wd(m,(w,N)=>{v({inView:w,entry:N}),x.current&&x.current(w,N),N.isIntersecting&&i&&p&&(p(),p=void 0)},{root:l,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,m,l,r,i,o,n,a,t]);const S=(h=g.entry)==null?void 0:h.target,d=j.useRef(void 0);!m&&S&&!i&&!o&&d.current!==S&&(d.current=S,v({inView:!!s,entry:void 0}));const f=[y,g.inView,g.entry];return f.ref=f[0],f.inView=f[1],f.entry=f[2],f}var Qd={exports:{}},U={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),ma=Symbol.for("react.portal"),xi=Symbol.for("react.fragment"),wi=Symbol.for("react.strict_mode"),ki=Symbol.for("react.profiler"),Si=Symbol.for("react.provider"),Ci=Symbol.for("react.context"),D1=Symbol.for("react.server_context"),Ei=Symbol.for("react.forward_ref"),Ni=Symbol.for("react.suspense"),ji=Symbol.for("react.suspense_list"),_i=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),A1=Symbol.for("react.offscreen"),Yd;Yd=Symbol.for("react.module.reference");function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case pa:switch(e=e.type,e){case xi:case ki:case wi:case Ni:case ji:return e;default:switch(e=e&&e.$$typeof,e){case D1:case Ci:case Ei:case Pi:case _i:case Si:return e;default:return t}}case ma:return t}}}U.ContextConsumer=Ci;U.ContextProvider=Si;U.Element=pa;U.ForwardRef=Ei;U.Fragment=xi;U.Lazy=Pi;U.Memo=_i;U.Portal=ma;U.Profiler=ki;U.StrictMode=wi;U.Suspense=Ni;U.SuspenseList=ji;U.isAsyncMode=function(){return!1};U.isConcurrentMode=function(){return!1};U.isContextConsumer=function(e){return Ve(e)===Ci};U.isContextProvider=function(e){return Ve(e)===Si};U.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===pa};U.isForwardRef=function(e){return Ve(e)===Ei};U.isFragment=function(e){return Ve(e)===xi};U.isLazy=function(e){return Ve(e)===Pi};U.isMemo=function(e){return Ve(e)===_i};U.isPortal=function(e){return Ve(e)===ma};U.isProfiler=function(e){return Ve(e)===ki};U.isStrictMode=function(e){return Ve(e)===wi};U.isSuspense=function(e){return Ve(e)===Ni};U.isSuspenseList=function(e){return Ve(e)===ji};U.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===xi||e===ki||e===wi||e===Ni||e===ji||e===A1||typeof e=="object"&&e!==null&&(e.$$typeof===Pi||e.$$typeof===_i||e.$$typeof===Si||e.$$typeof===Ci||e.$$typeof===Ei||e.$$typeof===Yd||e.getModuleId!==void 0)};U.typeOf=Ve;Qd.exports=U;var U1=Qd.exports;C`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;C`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;C`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;C`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;C`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;C`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;C`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;C`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;C`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const Xd=C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function B1({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Xd,iterationCount:l=1}){return Vd`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${l};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function V1(e){return e==null}function W1(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Kd(e,t){return n=>n?e():t()}function Cr(e){return Kd(e,()=>null)}function as(e){return Cr(()=>({opacity:0}))(e)}const Gd=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:l=1e3,fraction:i=0,keyframes:o=Xd,triggerOnce:s=!1,className:a,style:c,childClassName:h,childStyle:m,children:y,onVisibilityChange:x}=e,g=j.useMemo(()=>B1({keyframes:o,duration:l}),[l,o]);return V1(y)?null:W1(y)?le(Q1,{...e,animationStyles:g,children:String(y)}):U1.isFragment(y)?le(Zd,{...e,animationStyles:g}):le(_1,{children:j.Children.map(y,(v,S)=>{if(!j.isValidElement(v))return null;const d=r+(t?S*l*n:0);switch(v.type){case"ol":case"ul":return le(io,{children:({cx:f})=>le(v.type,{...v.props,className:f(a,v.props.className),style:Object.assign({},c,v.props.style),children:le(Gd,{...e,children:v.props.children})})});case"li":return le(Vu,{threshold:i,triggerOnce:s,onChange:x,children:({inView:f,ref:p})=>le(io,{children:({cx:w})=>le(v.type,{...v.props,ref:p,className:w(h,v.props.className),css:Cr(()=>g)(f),style:Object.assign({},m,v.props.style,as(!f),{animationDelay:d+"ms"})})})});default:return le(Vu,{threshold:i,triggerOnce:s,onChange:x,children:({inView:f,ref:p})=>le("div",{ref:p,className:a,css:Cr(()=>g)(f),style:Object.assign({},c,as(!f),{animationDelay:d+"ms"}),children:le(io,{children:({cx:w})=>le(v.type,{...v.props,className:w(h,v.props.className),style:Object.assign({},m,v.props.style)})})})})}})})},H1={display:"inline-block",whiteSpace:"pre"},Q1=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:l=0,duration:i=1e3,fraction:o=0,triggerOnce:s=!1,className:a,style:c,children:h,onVisibilityChange:m}=e,{ref:y,inView:x}=Hd({triggerOnce:s,threshold:o,onChange:m});return Kd(()=>le("div",{ref:y,className:a,style:Object.assign({},c,H1),children:h.split("").map((g,v)=>le("span",{css:Cr(()=>t)(x),style:{animationDelay:l+v*i*r+"ms"},children:g},v))}),()=>le(Zd,{...e,children:h}))(n)},Zd=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:l,style:i,children:o,onVisibilityChange:s}=e,{ref:a,inView:c}=Hd({triggerOnce:r,threshold:n,onChange:s});return le("div",{ref:a,className:l,css:Cr(()=>t)(c),style:Object.assign({},i,as(!c)),children:o})};C`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;C`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;C`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;C`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;C`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;C`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;C`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;C`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;C`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;C`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;C`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const Y1=C`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,X1=C`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,K1=C`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,G1=C`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Z1=C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,q1=C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,J1=C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,b1=C`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function ey(e,t){switch(t){case"down":return e?Z1:Y1;case"right":return e?J1:K1;case"up":return e?b1:G1;case"left":default:return e?q1:X1}}const Je=e=>{const{direction:t,reverse:n=!1,...r}=e,l=j.useMemo(()=>ey(n,t),[t,n]);return le(Gd,{keyframes:l,...r})};C`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;C`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const ty=[{text:"Бизнес-процессы",color:"bg-cyan-500"},{text:"IT-системы",color:"bg-blue-500"},{text:"Команды",color:"bg-rose-500"},{text:"Бизнес-процессы",color:"bg-cyan-500"}];function ny(){return u.jsxs("div",{className:"text-xl md:text-2xl font-semibold text-gray-200 uppercase flex items-center justify-center gap-3",children:[u.jsx("span",{children:"Строю эффективные"}),u.jsx("div",{className:"h-[36px] overflow-hidden",children:u.jsx("div",{className:"animate-text-flip",children:ty.map((e,t)=>u.jsx("div",{className:"h-[36px] mb-0 flex items-center",children:u.jsx("div",{className:`text-white px-3 py-1 rounded-md ${e.color}`,children:e.text})},t))})})]})}const ry=()=>u.jsx("div",{className:"w-8 h-14 border-2 border-[#00d9ff] rounded-full flex justify-center pt-2 animate-bounce",children:u.jsx("div",{className:"w-1 h-3 bg-[#00d9ff] rounded-full"})});function ly(){return u.jsxs("section",{className:"bg-[#1e1e2f] text-white min-h-screen flex flex-col items-center justify-center text-center p-6 relative",children:[u.jsxs("div",{className:"flex flex-col items-center space-y-6 md:space-y-8 max-w-4xl mx-auto",children:[u.jsx("h1",{className:"text-5xl md:text-7xl font-extrabold tracking-wider text-[#00d9ff]",children:"Руслан Юмагулов"}),u.jsx(ny,{}),u.jsx("p",{className:"text-lg text-gray-400",children:"Превращаю хаос в предсказумую систему для масштабирования вашего бизнеса."}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-gray-300 pt-2",children:[u.jsxs("a",{href:"tel:+79923500987",className:"flex items-center gap-2 hover:text-white transition-colors",children:[u.jsx(wd,{size:18}),u.jsx("span",{children:"+7 (992) 350-09-87"})]}),u.jsxs("a",{href:"mailto:Trestan01@gmail.com",className:"flex items-center gap-2 hover:text-white transition-colors",children:[u.jsx(gd,{size:18}),u.jsx("span",{children:"Trestan01@gmail.com"})]}),u.jsxs("a",{href:"https://t.me/Trestan01",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 hover:text-white transition-colors",children:[u.jsx(xd,{size:18}),u.jsx("span",{children:"@Trestan01"})]})]}),u.jsxs("div",{className:"flex items-center gap-4 pt-4",children:[u.jsxs("a",{href:"./resume-ruslan-yumagulov.pdf",download:"resume-ruslan-yumagulov.pdf",className:"bg-[#00d9ff] hover:bg-[#00b8e6] text-black font-bold px-6 py-3 rounded-md text-base flex items-center gap-2 transition-transform hover:scale-105",children:[u.jsx(yd,{size:20}),u.jsx("span",{children:"Скачать резюме"})]}),u.jsxs("a",{href:"#contact",className:"bg-transparent border-2 border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff] hover:text-black font-bold px-6 py-3 rounded-md text-base flex items-center gap-2 transition-all hover:scale-105",children:[u.jsx(Ch,{size:20}),u.jsx("span",{children:"Связаться"})]})]})]}),u.jsx("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 z-10",children:u.jsx(ry,{})})]})}const iy="/portfolio/assets/ruslan-ExSj-5x4.png";function oy(){return u.jsx("section",{className:"bg-white py-24 px-4 sm:px-6 lg:px-8",children:u.jsx("div",{className:"max-w-6xl mx-auto",children:u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16 items-center",children:[u.jsxs("div",{className:"text-[#2c3e50] space-y-6",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-[#2c3e50]",children:"Обо мне"}),u.jsx("p",{className:"text-lg font-semibold",children:"Бизнес-архитектор с опытом масштабирования компаний."}),u.jsx("li",{className:"flex items-center gap-3"}),u.jsx("p",{className:"text-base",children:"За последние 3 года:"}),u.jsxs("ul",{className:"space-y-3",children:[u.jsxs("li",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"h-2 w-2 rounded-full bg-[#00d9ff] flex-shrink-0"}),u.jsxs("span",{children:["Увеличил оборот компании ",u.jsx("strong",{className:"font-bold text-[#2c3e50]",children:"в 3 раза"})]})]}),u.jsxs("li",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"h-2 w-2 rounded-full bg-[#00d9ff] flex-shrink-0"}),u.jsxs("span",{children:["Снизил стоимость лида ",u.jsx("strong",{className:"font-bold text-[#2c3e50]",children:"в 2.2 раза"})]})]}),u.jsxs("li",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"h-2 w-2 rounded-full bg-[#00d9ff] flex-shrink-0"}),u.jsxs("span",{children:["Сократил время обработки заявок ",u.jsx("strong",{className:"font-bold text-[#2c3e50]",children:"с 4 дней до 15 минут"})]})]}),u.jsxs("li",{className:"flex items-center gap-3",children:[u.jsx("span",{className:"h-2 w-2 rounded-full bg-[#00d9ff] flex-shrink-0"}),u.jsxs("span",{children:["Создал ",u.jsx("strong",{className:"font-bold text-[#2c3e50]",children:"30+ регламентов и процессов"})]})]})]}),u.jsxs("p",{className:"text-lg leading-relaxed pt-4",children:["Специализируюсь на ",u.jsx("span",{className:"text-[#00d9ff] font-semibold",children:"цифровой трансформации"}),", ",u.jsx("span",{className:"text-[#00d9ff] font-semibold",children:"автоматизации"})," и построении систем, которые работают без постоянного контроля."]})]}),u.jsx("div",{className:"flex justify-center md:justify-end",children:u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-xl p-8 w-80 h-80 text-center text-white flex flex-col items-center justify-center",children:u.jsxs("div",{children:[" ",u.jsx("div",{className:"w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4",children:u.jsx("img",{src:iy,alt:"Фото Руслана Юмагулова",className:"w-20 h-20 rounded-full object-cover"})}),u.jsx("h3",{className:"text-2xl font-bold",children:"Руслан Юмагулов"}),u.jsx("p",{className:"opacity-80",children:"COO / Digital Transformation"})]})}),u.jsx("div",{className:"absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-[#1e1e2f] rounded-full flex items-center justify-center border-4 border-white",children:u.jsx("span",{className:"text-[#00d9ff] text-3xl font-bold",children:"РЮ"})})]})})]})})})}const sy=[{icon:u.jsx(kd,{size:32,className:"text-[#00d9ff]"}),value:"×3",title:"Рост оборота",subtitle:"За 2 года работы"},{icon:u.jsx(Th,{size:32,className:"text-[#00d9ff]"}),value:"2.2×",title:"Снижение CPL",subtitle:"Оптимизация затрат"},{icon:u.jsx(Eh,{size:32,className:"text-[#00d9ff]"}),value:"30+",title:"Регламентов",subtitle:"Создано процессов"},{icon:u.jsx(Sh,{size:32,className:"text-[#00d9ff]"}),value:"93-97%",title:"Выполнение",subtitle:"KPI команды"}],ay=({icon:e,value:t,title:n,subtitle:r})=>u.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-8 text-center transition-all duration-300 hover:bg-white/10 hover:border-[#00d9ff] transform hover:-translate-y-2",children:[u.jsx("div",{className:"mb-4",children:e}),u.jsx("p",{className:"text-5xl font-extrabold text-[#00d9ff] mb-2",children:t}),u.jsx("h3",{className:"text-xl font-bold mb-1",children:n}),u.jsx("p",{className:"text-sm text-gray-400",children:r})]});function uy(){return u.jsx("section",{className:"bg-[#1e1e2f] text-white py-24 px-4",children:u.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-16",children:"Результаты в цифрах"}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",children:sy.map((e,t)=>u.jsx(ay,{icon:e.icon,value:e.value,title:e.title,subtitle:e.subtitle},t))}),u.jsx("p",{className:"text-center text-gray-400 mt-16 max-w-3xl mx-auto",children:"Каждая цифра — это результат системного подхода к управлению и внедрения современных технологий в бизнес-процессы"})]})})}const cy=[{company:"Школьная Лига",role:"Коммерческий директор",period:"Март 2025 - Сентябрь 2025 (7 месяцев)",icon:u.jsx(Ou,{size:24}),achievements:["Полная оцифровка компании за 7 месяцев","Разработал 30+ регламентов и процессов","Автоматизация: 4 дня → 2 часа → 15 минут","Построил HR-систему: найм, адаптация, мотивация"]},{company:"Medion",role:"Технический директор",period:"Октябрь 2022 - Февраль 2025 (2 год 6 месяцев)",icon:u.jsx(md,{size:24}),achievements:["Рост компании в 3 раза за 2 года","Снижение стоимости лида в 2.2 раза","Создание IT-отдела с нуля","NPS внутренних клиентов: 5 → 9.1","Защита AI-проекта в Сколково"]},{company:"Karso",role:"Заместитель генерального директора",period:"Май 2021 - Октябрь 2022 (1 год 6 месяцев)",icon:u.jsx(hd,{size:24}),achievements:["Разработка IT-платформы с нуля","Внедрение CRM и автоматизация продаж","Партнерство с Drom.ru и СберАвто"]},{company:"Mango Office",role:"Менеджер по продажам",period:"2019 - 2020",icon:u.jsx(Ou,{size:24}),achievements:["Изучал внутренние процессы IT-компании, что позволило достичь 13-го места в рейтинге продаж по России среди 250 менеджеров."]},{company:"Uber / Яндекс",role:"Партнер-рекрутер",period:"2016 - 2018",icon:u.jsx(Mh,{size:24}),achievements:["Самостоятельно создал сайт и настроил рекламные кампании для привлечения водителей, что позволило войти в топ-3 рекрутеров города."]}],fy=({item:e})=>u.jsxs("div",{className:"bg-white rounded-xl p-6 border border-cyan-200/80 shadow-sm w-full max-w-md",children:[u.jsxs("div",{className:"flex items-center gap-4 mb-2",children:[u.jsx("div",{className:"text-cyan-500",children:e.icon}),u.jsx("h3",{className:"text-xl font-bold text-gray-800",children:e.company})]}),u.jsx("p",{className:"font-semibold text-cyan-600 ml-11",children:e.role}),u.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-500 mt-2 mb-4 ml-11",children:[u.jsx(xh,{size:16}),u.jsx("span",{children:e.period})]}),u.jsx("ul",{className:"space-y-2",children:e.achievements.map((t,n)=>u.jsxs("li",{className:"flex items-start gap-3",children:[u.jsx(kd,{className:"text-cyan-500 mt-1 flex-shrink-0",size:16}),u.jsx("span",{className:"text-gray-600",children:t})]},n))})]});function dy(){return u.jsx("section",{className:"bg-white text-gray-800 py-24 px-4",children:u.jsxs("div",{className:"max-w-5xl mx-auto",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900",children:"Опыт работы"}),u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute left-1/2 top-0 bottom-0 w-0.5 bg-cyan-200/80 transform -translate-x-1/2"}),u.jsx("div",{className:"space-y-12",children:cy.map((e,t)=>u.jsxs("div",{className:"relative flex items-center",style:{justifyContent:t%2===0?"flex-start":"flex-end"},children:[u.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-cyan-400"}),u.jsx("div",{className:t%2===0?"pr-12":"pl-12",style:{width:"50%"},children:u.jsx(fy,{item:e})})]},t))})]})]})})}const py=[{icon:u.jsx(gh,{size:32,className:"text-[#00d9ff]"}),title:"Бизнес-архитектура",items:["Проектирование процессов (BPMN)","SWOT-анализ и Due Diligence","Построение операционных моделей","Стратегическое планирование"]},{icon:u.jsx(zh,{size:32,className:"text-[#00d9ff]"}),title:"Цифровая трансформация",items:["Автоматизация процессов","Внедрение AI-решений","CRM-системы (amoCRM, Bitrix24)","BI-аналитика (Power BI)"]},{icon:u.jsx(Rh,{size:32,className:"text-[#00d9ff]"}),title:"Управление",items:["Построение отделов с нуля","Снижение операционных расходов","Масштабирование бизнеса","Разработка регламентов и KPI"]}];function my(){return u.jsx("section",{id:"competencies",className:"bg-[#1e1e2f] text-white py-24 px-4",children:u.jsxs("div",{className:"max-w-6xl mx-auto",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16",children:"Ключевые компетенции"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:py.map((e,t)=>u.jsxs("div",{className:"group bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white transform hover:-translate-y-2",children:[u.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[u.jsx("div",{children:e.icon}),u.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-[#2c3e50] transition-colors duration-300",children:e.title})]}),u.jsx("ul",{className:"space-y-2",children:e.items.map((n,r)=>u.jsxs("li",{className:"flex items-start gap-3",children:[u.jsx("span",{className:"mt-1.5 w-2 h-2 rounded-full bg-[#00d9ff] flex-shrink-0"}),u.jsx("span",{className:"text-gray-300 group-hover:text-gray-700 transition-colors duration-300",children:n})]},r))})]},t))})]})})}const hy=[{quote:"Руслан — не просто менеджер, он системный архитектор. Он пришел в стартап и с нуля выстроил всю IT-экосистему и операционные процессы, что позволило нам выйти в окупаемость уже через год.",author:"Александр Мителкин",title:"Директор, Karso"},{quote:"Благодаря IT-стратегии и data-driven подходу, который внедрил Руслан, наша компания смогла вырасти в 3 раза. Его способность превращать хаос в управляемую систему — уникальна.",author:"Константин Усанов",title:"Исполнительный директор, Medion"}];function yy(){return u.jsx("section",{className:"bg-white py-24 px-4",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center text-[#2c3e50] mb-16",children:"Рекомендации"}),u.jsx("div",{className:"space-y-12",children:hy.map((e,t)=>u.jsxs("figure",{className:"text-center",children:[u.jsx("blockquote",{className:"text-xl italic text-gray-700 before:content-['“'] before:mr-1 after:content-['”'] after:ml-1",children:e.quote}),u.jsxs("figcaption",{className:"mt-4",children:[u.jsx("div",{className:"font-bold text-[#2c3e50]",children:e.author}),u.jsx("div",{className:"text-sm text-gray-500",children:e.title})]})]},t))})]})})}const vy=[{icon:u.jsx(md,{size:32}),title:"Medion: Рост оборота ×3",task:"Построить IT-отдел",solution:"Создал платформу, автоматизировал процессы",result:"Оборот ×3, CPL ↓2.2×"},{icon:u.jsx(_h,{size:32}),title:"Школьная Лига: Оцифровка",task:"Навести порядок в хаосе",solution:"30+ регламентов, автоматизация за 7 месяцев",result:"4 дня → 15 минут"},{icon:u.jsx(hd,{size:32}),title:"Karso: IT-платформа",task:"Создать B2B-платформу",solution:"Разработка с нуля в Figma",result:"Партнерство со Сбером"},{isSpecial:!0,icon:u.jsx(vh,{size:32}),title:"AI-платформа для Сколково",task:"Разработать архитектуру AI-системы для прогнозирования успеха сделок.",solution:"Спроектировал data-driven модель, анализирующую коммуникации (звонки, чаты).",result:"Защитил проект, продемонстрировав применимость AI для повышения эффективности продаж."}],gy=({project:e})=>u.jsxs("div",{className:"bg-[#1e1e2f] border border-gray-700/50 rounded-2xl p-6 h-full flex flex-col space-y-4 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"text-cyan-400",children:e.icon}),u.jsx("h3",{className:"text-xl font-bold text-white",children:e.title})]}),u.jsxs("div",{className:"space-y-2 text-sm text-gray-400 flex-grow",children:[u.jsxs("p",{children:[u.jsx("strong",{className:"font-medium text-cyan-400",children:"Задача:"})," ",e.task]}),u.jsxs("p",{children:[u.jsx("strong",{className:"font-medium text-cyan-400",children:"Решение:"})," ",e.solution]}),u.jsxs("p",{children:[u.jsx("strong",{className:"font-medium text-cyan-400",children:"Результат:"})," ",e.result]})]})]}),xy=({project:e})=>u.jsxs("div",{className:"bg-[#1e1e2f] border border-amber-500/50 rounded-2xl p-6 h-full flex flex-col space-y-4 transition-all duration-300 hover:border-amber-400/50 hover:-translate-y-1",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx("div",{className:"text-amber-400",children:e.icon}),u.jsx("h3",{className:"text-xl font-bold text-white",children:e.title})]}),u.jsxs("div",{className:"space-y-2 text-sm text-gray-400 flex-grow",children:[u.jsxs("p",{children:[u.jsx("strong",{className:"font-medium text-amber-400",children:"Задача:"})," ",e.task]}),u.jsxs("p",{children:[u.jsx("strong",{className:"font-medium text-amber-400",children:"Решение:"})," ",e.solution]}),u.jsxs("p",{children:[u.jsx("strong",{className:"font-medium text-amber-400",children:"Результат:"})," ",e.result]})]})]});function wy(){return u.jsx("section",{className:"bg-[#111827] text-white py-24 px-4",children:u.jsxs("div",{className:"max-w-6xl mx-auto",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16",children:"Ключевые кейсы трансформации"}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch",children:vy.map((e,t)=>u.jsx("div",{children:e.isSpecial?u.jsx(xy,{project:e}):u.jsx(gy,{project:e})},t))})]})})}const ky=[{category:"Методологии",skills:["Agile","Scrum","Kanban","SWOT","BPMN","CJM"]},{category:"Инструменты и Платформы",skills:["Bitrix24","amoCRM","Miro","Figma","Power BI"]},{category:"Управленческие компетенции",skills:["Product Management","Управление командами","Управление P&L","Due Diligence","AI-решения"]}];function Sy(){return u.jsx("section",{className:"bg-white text-[#2c3e50] py-24 px-4",children:u.jsxs("div",{className:"max-w-6xl mx-auto text-center",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-12 text-[#2c3e50]",children:"Технический стек"}),u.jsx("div",{className:"space-y-10",children:ky.map((e,t)=>u.jsxs("div",{children:[u.jsx("h3",{className:"text-xl font-semibold text-gray-600 mb-4",children:e.category}),u.jsx("div",{className:"flex flex-wrap justify-center gap-3",children:e.skills.map((n,r)=>u.jsx("div",{className:"bg-white border-2 border-[#00d9ff] text-gray-800 rounded-full px-5 py-2 text-sm transition-all duration-300 hover:bg-[#00d9ff] hover:text-white hover:border-transparent cursor-pointer",children:n},r))})]},t))})]})})}const oo=[{year:2025,title:"AI Fluency: Framework & Foundations",subtitle:"Anthropic"},{year:2024,title:"Коммерческий директор",subtitle:"Алексей Назаров"},{year:2022,title:"Работа в amoCRM",subtitle:"официальный курс"},{year:2021,title:"Power BI PRO",subtitle:"Skillbox"},{year:2019,title:"SPIN 2.0",subtitle:"MANGO OFFICE"},{year:2017,title:"Прямолинейная система продаж",subtitle:"Джордан Белфорт"}],Wu=3;function Cy(){const[e,t]=j.useState(!1),n=e?oo:oo.slice(0,Wu);return u.jsx("section",{className:"bg-[#1e1e2f] text-white py-24 px-4",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16",children:"Образование и курсы"}),u.jsx("div",{className:"space-y-4",children:n.map((r,l)=>u.jsxs("div",{className:"group flex items-center justify-between p-6 bg-white/5 border-2 border-white/10 rounded-xl transition-all duration-300 hover:border-[#00d9ff] hover:bg-white/10 transform hover:scale-[1.02]",children:[u.jsxs("div",{className:"flex items-center gap-6",children:[u.jsx("div",{className:"bg-cyan-400 text-black font-bold text-sm rounded-full px-4 py-2 group-hover:bg-cyan-300 transition-colors",children:r.year}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-bold text-white text-lg",children:r.title}),u.jsx("p",{className:"text-gray-400",children:r.subtitle})]})]}),u.jsx(Nh,{className:"text-cyan-400 group-hover:text-cyan-300 transition-colors",size:24})]},l))}),!e&&oo.length>Wu&&u.jsx("div",{className:"text-center mt-8",children:u.jsxs("button",{onClick:()=>t(!0),className:"font-semibold text-cyan-400 hover:text-white transition-colors flex items-center gap-2 mx-auto",children:["Показать все курсы ",u.jsx(wh,{size:20})]})})]})})}const Ey=[{title:"Цель",author:"Элияху Голдратт",coverUrl:"https://avatars.mds.yandex.net/get-entity_search/5574192/551792709/S600xU_2x"},{title:"Высокоэффективный менеджмент",author:"Эндрю Гроув",coverUrl:"https://i1.helikon.bg/products/6704/20/206704/206704_b.jpg"},{title:"От хорошего к великому",author:"Джим Коллинз",coverUrl:"https://avatars.mds.yandex.net/i?id=1b3a23ad1252cfc3297e70be1875d087_l-6961846-images-thumbs&n=13"}];function Ny(){return u.jsx("section",{className:"bg-white text-[#2c3e50] py-24 px-4",children:u.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-16 text-[#2c3e50]",children:"Любимые книги"}),u.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-8",children:Ey.map((e,t)=>u.jsxs("div",{className:"group relative rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2",children:[u.jsx("img",{src:e.coverUrl,alt:`Обложка книги ${e.title}`,className:"w-full h-full object-cover aspect-[2/3]"}),u.jsxs("div",{className:"absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[u.jsx("h3",{className:"font-bold text-lg text-white",children:e.title}),u.jsx("p",{className:"text-sm text-gray-300",children:e.author})]})]},t))})]})})}const jy=[{icon:u.jsx(wd,{size:20}),text:"+7 (992) 350-09-87",href:"tel:+79923500987"},{icon:u.jsx(gd,{size:20}),text:"Trestan01@gmail.com",href:"mailto:Trestan01@gmail.com"},{icon:u.jsx(xd,{size:20}),text:"@Trestan01",href:"https://t.me/Trestan01"},{icon:u.jsx(vd,{size:20}),text:"LinkedIn",href:"https://www.linkedin.com/in/ruslan-iumagulov-baa770387/"},{icon:u.jsx(jh,{size:20}),text:"Екатеринбург | Удаленная работа"}];function _y(){return u.jsx("section",{id:"contact",className:"bg-[#1e1e2f] text-white py-24 px-4",children:u.jsxs("div",{className:"max-w-6xl mx-auto",children:[u.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16",children:"Связаться со мной"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16 items-start",children:[u.jsxs("div",{className:"space-y-6",children:[u.jsx("p",{className:"text-xl text-gray-300",children:"Готов обсудить ваши задачи по цифровой трансформации и масштабированию бизнеса"}),u.jsx("div",{className:"space-y-4",children:jy.map((e,t)=>u.jsxs("div",{className:"flex items-center gap-4 text-gray-300",children:[u.jsx("div",{className:"text-[#00d9ff]",children:e.icon}),e.href?u.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"hover:text-white transition-colors",children:e.text}):u.jsx("span",{children:e.text})]},t))})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"bg-white/5 border border-white/10 rounded-xl p-8 space-y-4",children:[u.jsx("h3",{className:"text-lg font-semibold",children:"Быстрые действия"}),u.jsxs("a",{href:"/Юмагулов Руслан Юрьевич РЦТ.pdf",download:"Юмагулов Руслан Юрьевич РЦТ.pdf",className:"block w-full text-center bg-[#00d9ff] text-black font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105",children:[u.jsx(yd,{size:20,className:"inline-block mr-2"}),"Скачать резюме PDF"]}),u.jsxs("a",{href:"https://t.me/Trestan01",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-white text-[#1e1e2f] font-bold py-3 px-6 rounded-lg transition-transform hover:scale-105",children:[u.jsx(Ph,{size:20,className:"inline-block mr-2"}),"Написать в Telegram"]}),u.jsxs("a",{href:"https://www.linkedin.com/in/ruslan-iumagulov-baa770387/",target:"_blank",rel:"noopener noreferrer",className:"block w-full text-center bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#1e1e2f] font-bold py-3 px-6 rounded-lg transition-all hover:scale-105",children:[u.jsx(vd,{size:20,className:"inline-block mr-2"}),"Перейти в LinkedIn"]})]}),u.jsxs("p",{className:"text-xs text-gray-400 mt-4 text-center",children:["Отвечаю в течение 2-4 часов",u.jsx("br",{}),"Готов к удаленной работе и командировкам"]})]})]})]})})}function Py(){const[e,t]=j.useState(!1);j.useEffect(()=>{const r=()=>{window.scrollY>500?t(!0):t(!1)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return u.jsxs("main",{children:[u.jsx(ly,{}),u.jsx(Je,{direction:"left",triggerOnce:!0,children:u.jsx(oy,{})}),u.jsx(Je,{direction:"right",triggerOnce:!0,children:u.jsx(uy,{})}),u.jsx(Je,{direction:"left",triggerOnce:!0,children:u.jsx(dy,{})}),u.jsx(Je,{direction:"right",triggerOnce:!0,children:u.jsx(my,{})}),u.jsx(Je,{direction:"left",triggerOnce:!0,children:u.jsx(yy,{})}),u.jsx(Je,{direction:"right",triggerOnce:!0,children:u.jsx(wy,{})}),u.jsx(Je,{direction:"left",triggerOnce:!0,children:u.jsx(Sy,{})}),u.jsx(Je,{direction:"right",triggerOnce:!0,children:u.jsx(Cy,{})}),u.jsx(Je,{direction:"left",triggerOnce:!0,children:u.jsx(Ny,{})}),u.jsx(Je,{direction:"right",triggerOnce:!0,children:u.jsx(_y,{})}),e&&u.jsx("button",{onClick:n,className:"fixed bottom-8 right-8 z-50 bg-[#00d9ff] text-black rounded-full p-3 shadow-lg hover:bg-[#00b8e6] hover:scale-110 transition-all duration-300","aria-label":"Вернуться наверх",children:u.jsx(kh,{size:24})})]})}const zy=()=>u.jsx("svg",{style:{position:"absolute",width:0,height:0},children:u.jsx("defs",{children:u.jsxs("filter",{id:"electric-gold",colorInterpolationFilters:"sRGB",x:"-50%",y:"-50%",width:"200%",height:"200%",children:[u.jsx("feTurbulence",{type:"turbulence",baseFrequency:"0.02",numOctaves:"10",result:"noise1",seed:"1"}),u.jsx("feOffset",{in:"noise1",dx:"0",dy:"0",result:"offsetNoise1",children:u.jsx("animate",{attributeName:"dy",values:"700; 0",dur:"6s",repeatCount:"indefinite",calcMode:"linear"})}),u.jsx("feTurbulence",{type:"turbulence",baseFrequency:"0.02",numOctaves:"10",result:"noise2",seed:"1"}),u.jsx("feOffset",{in:"noise2",dx:"0",dy:"0",result:"offsetNoise2",children:u.jsx("animate",{attributeName:"dy",values:"0; -700",dur:"6s",repeatCount:"indefinite",calcMode:"linear"})}),u.jsx("feTurbulence",{type:"turbulence",baseFrequency:"0.02",numOctaves:"10",result:"noise1",seed:"2"}),u.jsx("feOffset",{in:"noise1",dx:"0",dy:"0",result:"offsetNoise3",children:u.jsx("animate",{attributeName:"dx",values:"490; 0",dur:"6s",repeatCount:"indefinite",calcMode:"linear"})}),u.jsx("feTurbulence",{type:"turbulence",baseFrequency:"0.02",numOctaves:"10",result:"noise2",seed:"2"}),u.jsx("feOffset",{in:"noise2",dx:"0",dy:"0",result:"offsetNoise4",children:u.jsx("animate",{attributeName:"dx",values:"0; -490",dur:"6s",repeatCount:"indefinite",calcMode:"linear"})}),u.jsx("feComposite",{in:"offsetNoise1",in2:"offsetNoise2",result:"part1"}),u.jsx("feComposite",{in:"offsetNoise3",in2:"offsetNoise4",result:"part2"}),u.jsx("feBlend",{in:"part1",in2:"part2",mode:"color-dodge",result:"combinedNoise"}),u.jsx("feDisplacementMap",{in:"SourceGraphic",in2:"combinedNoise",scale:"40",xChannelSelector:"R",yChannelSelector:"B"})]})})}),Ty=()=>u.jsxs(u.Fragment,{children:[u.jsx(zy,{}),u.jsx(ph,{children:u.jsx(ch,{children:u.jsx(dd,{path:"/",element:u.jsx(Py,{})})})})]});ao.createRoot(document.getElementById("root")).render(u.jsx(ec.StrictMode,{children:u.jsx(Ty,{})}));
