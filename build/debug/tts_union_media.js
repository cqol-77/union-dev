/*!  tts_union -  by cqol_77 2013-05-10 */
(function(e,t){function n(e){var t=e.length,n=lt.type(e);return lt.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e){var t=Nt[e]={};return lt.each(e.match(ct)||[],function(e,n){t[n]=!0}),t}function i(e,n,r,i){if(lt.acceptData(e)){var o,a,s=lt.expando,l="string"==typeof n,u=e.nodeType,c=u?lt.cache:e,p=u?e[s]:e[s]&&s;if(p&&c[p]&&(i||c[p].data)||!l||r!==t)return p||(u?e[s]=p=Z.pop()||lt.guid++:p=s),c[p]||(c[p]={},u||(c[p].toJSON=lt.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[p]=lt.extend(c[p],n):c[p].data=lt.extend(c[p].data,n)),o=c[p],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[lt.camelCase(n)]=r),l?(a=o[n],null==a&&(a=o[lt.camelCase(n)])):a=o,a}}function o(e,t,n){if(lt.acceptData(e)){var r,i,o,a=e.nodeType,l=a?lt.cache:e,u=a?e[lt.expando]:lt.expando;if(l[u]){if(t&&(o=n?l[u]:l[u].data)){lt.isArray(t)?t=t.concat(lt.map(t,lt.camelCase)):t in o?t=[t]:(t=lt.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?s:lt.isEmptyObject)(o))return}(n||(delete l[u].data,s(l[u])))&&(a?lt.cleanData([e],!0):lt.support.deleteExpando||l!=l.window?delete l[u]:l[u]=null)}}}function a(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(kt,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:Ct.test(r)?lt.parseJSON(r):r}catch(o){}lt.data(e,n,r)}else r=t}return r}function s(e){var t;for(t in e)if(("data"!==t||!lt.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function l(){return!0}function u(){return!1}function c(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function p(e,t,n){if(t=t||0,lt.isFunction(t))return lt.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return lt.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=lt.grep(e,function(e){return 1===e.nodeType});if(Rt.test(t))return lt.filter(t,r,!n);t=lt.filter(t,r)}return lt.grep(e,function(e){return lt.inArray(e,t)>=0===n})}function f(e){var t=Ut.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function d(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function h(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function m(e){var t=on.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function g(e,t){for(var n,r=0;null!=(n=e[r]);r++)lt._data(n,"globalEval",!t||lt._data(t[r],"globalEval"))}function y(e,t){if(1===t.nodeType&&lt.hasData(e)){var n,r,i,o=lt._data(e),a=lt._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)lt.event.add(t,n,s[n][r])}a.data&&(a.data=lt.extend({},a.data))}}function v(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!lt.support.noCloneEvent&&t[lt.expando]){i=lt._data(t);for(r in i.events)lt.removeEvent(t,r,i.handle);t.removeAttribute(lt.expando)}"script"===n&&t.text!==e.text?(h(t).text=e.text,m(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),lt.support.html5Clone&&e.innerHTML&&!lt.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&tn.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function b(e,n){var r,i,o=0,a=typeof e.getElementsByTagName!==V?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==V?e.querySelectorAll(n||"*"):t;if(!a)for(a=[],r=e.childNodes||e;null!=(i=r[o]);o++)!n||lt.nodeName(i,n)?a.push(i):lt.merge(a,b(i,n));return n===t||n&&lt.nodeName(e,n)?lt.merge([e],a):a}function x(e){tn.test(e.type)&&(e.defaultChecked=e.checked)}function T(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=kn.length;i--;)if(t=kn[i]+n,t in e)return t;return r}function w(e,t){return e=t||e,"none"===lt.css(e,"display")||!lt.contains(e.ownerDocument,e)}function N(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=lt._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&w(r)&&(o[a]=lt._data(r,"olddisplay",S(r.nodeName)))):o[a]||(i=w(r),(n&&"none"!==n||!i)&&lt._data(r,"olddisplay",i?n:lt.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function C(e,t,n){var r=vn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=lt.css(e,n+Cn[o],!0,i)),r?("content"===n&&(a-=lt.css(e,"padding"+Cn[o],!0,i)),"margin"!==n&&(a-=lt.css(e,"border"+Cn[o]+"Width",!0,i))):(a+=lt.css(e,"padding"+Cn[o],!0,i),"padding"!==n&&(a+=lt.css(e,"border"+Cn[o]+"Width",!0,i)));return a}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=pn(e),a=lt.support.boxSizing&&"border-box"===lt.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=fn(e,t,o),(0>i||null==i)&&(i=e.style[t]),bn.test(i))return i;r=a&&(lt.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(a?"border":"content"),r,o)+"px"}function S(e){var t=Y,n=Tn[e];return n||(n=A(e,t),"none"!==n&&n||(cn=(cn||lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(cn[0].contentWindow||cn[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=A(e,t),cn.detach()),Tn[e]=n),n}function A(e,t){var n=lt(t.createElement(e)).appendTo(t.body),r=lt.css(n[0],"display");return n.remove(),r}function j(e,t,n,r){var i;if(lt.isArray(t))lt.each(t,function(t,i){n||Sn.test(e)?r(e,i):j(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==lt.type(t))r(e,t);else for(i in t)j(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(ct)||[];if(lt.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function L(e,n,r,i){function o(l){var u;return a[l]=!0,lt.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||s||a[c]?s?!(u=c):t:(n.dataTypes.unshift(c),o(c),!1)}),u}var a={},s=e===zn;return o(n.dataTypes[0])||!a["*"]&&o("*")}function _(e,n){var r,i,o=lt.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&lt.extend(!0,e,r),e}function H(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);for(;"*"===u[0];)u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function $(e,t){var n,r,i,o,a={},s=0,l=e.dataTypes.slice(),u=l[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=l[++s];)if("*"!==r){if("*"!==u&&u!==r){if(i=a[u+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[u+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],l.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+u+" to "+r}}}u=r}return{state:"success",data:t}}function M(){try{return new e.XMLHttpRequest}catch(t){}}function q(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function F(){return setTimeout(function(){Zn=t}),Zn=lt.now()}function O(e,t){lt.each(t,function(t,n){for(var r=(or[t]||[]).concat(or["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function B(e,t,n){var r,i,o=0,a=ir.length,s=lt.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=Zn||F(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:lt.extend({},t),opts:lt.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Zn||F(),duration:n.duration,tweens:[],createTween:function(t,n){var r=lt.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(I(c,u.opts.specialEasing);a>o;o++)if(r=ir[o].call(u,e,c,u.opts))return r;return O(u,c),lt.isFunction(u.opts.start)&&u.opts.start.call(e,u),lt.fx.timer(lt.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function I(e,t){var n,r,i,o,a;for(i in e)if(r=lt.camelCase(i),o=t[r],n=e[i],lt.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=lt.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}function W(e,t,n){var r,i,o,a,s,l,u,c,p,f=this,d=e.style,h={},m=[],g=e.nodeType&&w(e);n.queue||(c=lt._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,lt.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===lt.css(e,"display")&&"none"===lt.css(e,"float")&&(lt.support.inlineBlockNeedsLayout&&"inline"!==S(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",lt.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],tr.exec(a)){if(delete t[i],l=l||"toggle"===a,a===(g?"hide":"show"))continue;m.push(i)}if(o=m.length){s=lt._data(e,"fxshow")||lt._data(e,"fxshow",{}),"hidden"in s&&(g=s.hidden),l&&(s.hidden=!g),g?lt(e).show():f.done(function(){lt(e).hide()}),f.done(function(){var t;lt._removeData(e,"fxshow");for(t in h)lt.style(e,t,h[t])});for(i=0;o>i;i++)r=m[i],u=f.createTween(r,g?s[r]:0),h[r]=s[r]||lt.style(e,r),r in s||(s[r]=u.start,g&&(u.end=u.start,u.start="width"===r||"height"===r?1:0))}}function P(e,t,n,r,i){return new P.prototype.init(e,t,n,r,i)}function R(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Cn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function z(e){return lt.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var X,U,V=typeof t,Y=e.document,J=e.location,G=e.TTSUI,K=e.$,Q={},Z=[],et="1.9.1",tt=Z.concat,nt=Z.push,rt=Z.slice,it=Z.indexOf,ot=Q.toString,at=Q.hasOwnProperty,st=et.trim,lt=function(e,t){return new lt.fn.init(e,t,U)},ut=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ct=/\S+/g,pt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ft=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,dt=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ht=/^[\],:{}\s]*$/,mt=/(?:^|:|,)(?:\s*\[)+/g,gt=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,yt=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,vt=/^-ms-/,bt=/-([\da-z])/gi,xt=function(e,t){return t.toUpperCase()},Tt=function(e){(Y.addEventListener||"load"===e.type||"complete"===Y.readyState)&&(wt(),lt.ready())},wt=function(){Y.addEventListener?(Y.removeEventListener("DOMContentLoaded",Tt,!1),e.removeEventListener("load",Tt,!1)):(Y.detachEvent("onreadystatechange",Tt),e.detachEvent("onload",Tt))};lt.fn=lt.prototype={ttsui:et,constructor:lt,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ft.exec(e),!i||!i[1]&&n)return!n||n.ttsui?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof lt?n[0]:n,lt.merge(this,lt.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:Y,!0)),dt.test(i[1])&&lt.isPlainObject(n))for(i in n)lt.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=Y.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=Y,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):lt.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),lt.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return rt.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=lt.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return lt.each(this,e,t)},ready:function(e){return lt.ready.promise().done(e),this},slice:function(){return this.pushStack(rt.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(lt.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:nt,sort:[].sort,splice:[].splice},lt.fn.init.prototype=lt.fn,lt.extend=lt.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||lt.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(lt.isPlainObject(r)||(n=lt.isArray(r)))?(n?(n=!1,a=e&&lt.isArray(e)?e:[]):a=e&&lt.isPlainObject(e)?e:{},s[i]=lt.extend(c,a,r)):r!==t&&(s[i]=r));return s},lt.extend({noConflict:function(t){return e.$===lt&&(e.$=K),t&&e.TTSUI===lt&&(e.TTSUI=G),lt},isReady:!1,readyWait:1,holdReady:function(e){e?lt.readyWait++:lt.ready(!0)},ready:function(e){if(e===!0?!--lt.readyWait:!lt.isReady){if(!Y.body)return setTimeout(lt.ready);lt.isReady=!0,e!==!0&&--lt.readyWait>0||(X.resolveWith(Y,[lt]),lt.fn.trigger&&lt(Y).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===lt.type(e)},isArray:Array.isArray||function(e){return"array"===lt.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Q[ot.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==lt.type(e)||e.nodeType||lt.isWindow(e))return!1;try{if(e.constructor&&!at.call(e,"constructor")&&!at.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||at.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||Y;var r=dt.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=lt.buildFragment([e],t,i),i&&lt(i).remove(),lt.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=lt.trim(n),n&&ht.test(n.replace(gt,"@").replace(yt,"]").replace(mt,"")))?Function("return "+n)():(lt.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||lt.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&lt.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(vt,"ms-").replace(bt,xt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:st&&!st.call("﻿ ")?function(e){return null==e?"":st.call(e)}:function(e){return null==e?"":(e+"").replace(pt,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?lt.merge(r,"string"==typeof e?[e]:e):nt.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(it)return it.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),l=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&(l[l.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(l[l.length]=i);return tt.apply([],l)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),lt.isFunction(e)?(r=rt.call(arguments,2),i=function(){return e.apply(n||this,r.concat(rt.call(arguments)))},i.guid=e.guid=e.guid||lt.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===lt.type(r)){o=!0;for(l in r)lt.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,lt.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(lt(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()}}),lt.ready.promise=function(t){if(!X)if(X=lt.Deferred(),"complete"===Y.readyState)setTimeout(lt.ready);else if(Y.addEventListener)Y.addEventListener("DOMContentLoaded",Tt,!1),e.addEventListener("load",Tt,!1);else{Y.attachEvent("onreadystatechange",Tt),e.attachEvent("onload",Tt);var n=!1;try{n=null==e.frameElement&&Y.documentElement}catch(r){}n&&n.doScroll&&function i(){if(!lt.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}wt(),lt.ready()}}()}return X.promise(t)},lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Q["[object "+t+"]"]=t.toLowerCase()}),U=lt(Y);var Nt={};lt.Callbacks=function(e){e="string"==typeof e?Nt[e]||r(e):lt.extend({},e);var n,i,o,a,s,l,u=[],c=!e.once&&[],p=function(t){for(i=e.memory&&t,o=!0,s=l||0,l=0,a=u.length,n=!0;u&&a>s;s++)if(u[s].apply(t[0],t[1])===!1&&e.stopOnFalse){i=!1;break}n=!1,u&&(c?c.length&&p(c.shift()):i?u=[]:f.disable())},f={add:function(){if(u){var t=u.length;(function r(t){lt.each(t,function(t,n){var i=lt.type(n);"function"===i?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!==i&&r(n)})})(arguments),n?a=u.length:i&&(l=t,p(i))}return this},remove:function(){return u&&lt.each(arguments,function(e,t){for(var r;(r=lt.inArray(t,u,r))>-1;)u.splice(r,1),n&&(a>=r&&a--,s>=r&&s--)}),this},has:function(e){return e?lt.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=c=i=t,this},disabled:function(){return!u},lock:function(){return c=t,i||f.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||o&&!c||(n?c.push(t):p(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},lt.extend({Deferred:function(e){var t=[["resolve","done",lt.Callbacks("once memory"),"resolved"],["reject","fail",lt.Callbacks("once memory"),"rejected"],["notify","progress",lt.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return lt.Deferred(function(n){lt.each(t,function(t,o){var a=o[0],s=lt.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&lt.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?lt.extend(e,r):r}},i={};return r.pipe=r.then,lt.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=rt.call(arguments),a=o.length,s=1!==a||e&&lt.isFunction(e.promise)?a:0,l=1===s?e:lt.Deferred(),u=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?rt.call(arguments):i,r===t?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&lt.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,t)):--s;return s||l.resolveWith(r,o),l.promise()}}),lt.support=function(){var t,n,r,i,o,a,s,l,u,c,p=Y.createElement("div");if(p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0],!n||!r||!n.length)return{};o=Y.createElement("select"),s=o.appendChild(Y.createElement("option")),i=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==p.className,leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!i.value,optSelected:s.selected,enctype:!!Y.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==Y.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===Y.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},i.checked=!0,t.noCloneChecked=i.cloneNode(!0).checked,o.disabled=!0,t.optDisabled=!s.disabled;try{delete p.test}catch(f){t.deleteExpando=!1}i=Y.createElement("input"),i.setAttribute("value",""),t.input=""===i.getAttribute("value"),i.value="t",i.setAttribute("type","radio"),t.radioValue="t"===i.value,i.setAttribute("checked","t"),i.setAttribute("name","t"),a=Y.createDocumentFragment(),a.appendChild(i),t.appendChecked=i.checked,t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,p.attachEvent&&(p.attachEvent("onclick",function(){t.noCloneEvent=!1}),p.cloneNode(!0).click());for(c in{submit:!0,change:!0,focusin:!0})p.setAttribute(l="on"+c,"t"),t[c+"Bubbles"]=l in e||p.attributes[l].expando===!1;return p.style.backgroundClip="content-box",p.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===p.style.backgroundClip,lt(function(){var n,r,i,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",a=Y.getElementsByTagName("body")[0];a&&(n=Y.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(p),p.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=p.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",u=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",t.reliableHiddenOffsets=u&&0===i[0].offsetHeight,p.innerHTML="",p.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===p.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==a.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(p,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(p,null)||{width:"4px"}).width,r=p.appendChild(Y.createElement("div")),r.style.cssText=p.style.cssText=o,r.style.marginRight=r.style.width="0",p.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof p.style.zoom!==V&&(p.innerHTML="",p.style.cssText=o+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===p.offsetWidth,p.style.display="block",p.innerHTML="<div></div>",p.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==p.offsetWidth,t.inlineBlockNeedsLayout&&(a.style.zoom=1)),a.removeChild(n),n=p=i=r=null)}),n=o=a=s=r=i=null,t}();var Ct=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,kt=/([A-Z])/g;lt.extend({cache:{},expando:"TTSUI"+(et+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?lt.cache[e[lt.expando]]:e[lt.expando],!!e&&!s(e)},data:function(e,t,n){return i(e,t,n)},removeData:function(e,t){return o(e,t)},_data:function(e,t,n){return i(e,t,n,!0)},_removeData:function(e,t){return o(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&lt.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),lt.fn.extend({data:function(e,n){var r,i,o=this[0],s=0,l=null;if(e===t){if(this.length&&(l=lt.data(o),1===o.nodeType&&!lt._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>s;s++)i=r[s].name,i.indexOf("data-")||(i=lt.camelCase(i.slice(5)),a(o,i,l[i]));lt._data(o,"parsedAttrs",!0)}return l}return"object"==typeof e?this.each(function(){lt.data(this,e)}):lt.access(this,function(n){return n===t?o?a(o,e,lt.data(o,e)):null:(this.each(function(){lt.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){lt.removeData(this,e)})}}),lt.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=lt._data(e,n),r&&(!i||lt.isArray(r)?i=lt._data(e,n,lt.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=lt.queue(e,t),r=n.length,i=n.shift(),o=lt._queueHooks(e,t),a=function(){lt.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return lt._data(e,n)||lt._data(e,n,{empty:lt.Callbacks("once memory").add(function(){lt._removeData(e,t+"queue"),lt._removeData(e,n)})})}}),lt.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?lt.queue(this[0],e):n===t?this:this.each(function(){var t=lt.queue(this,e,n);lt._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&lt.dequeue(this,e)})},dequeue:function(e){return this.each(function(){lt.dequeue(this,e)})},delay:function(e,t){return e=lt.fx?lt.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=lt.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=lt._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var Et,St,At=/[\t\r\n]/g,jt=/\r/g,Dt=/^(?:input|select|textarea|button|object)$/i,Lt=/^(?:a|area)$/i,_t=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,Ht=/^(?:checked|selected)$/i,$t=lt.support.getSetAttribute,Mt=lt.support.input;lt.fn.extend({attr:function(e,t){return lt.access(this,lt.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){lt.removeAttr(this,e)})},prop:function(e,t){return lt.access(this,lt.prop,e,t,arguments.length>1)},removeProp:function(e){return e=lt.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(lt.isFunction(e))return this.each(function(t){lt(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(ct)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(At," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=lt.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(lt.isFunction(e))return this.each(function(t){lt(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(ct)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(At," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?lt.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return lt.isFunction(e)?this.each(function(n){lt(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=lt(this),s=t,l=e.match(ct)||[];i=l[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else(n===V||"boolean"===n)&&(this.className&&lt._data(this,"__className__",this.className),this.className=this.className||e===!1?"":lt._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(At," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];return arguments.length?(i=lt.isFunction(e),this.each(function(n){var o,a=lt(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":lt.isArray(o)&&(o=lt.map(o,function(e){return null==e?"":e+""})),r=lt.valHooks[this.type]||lt.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))})):o?(r=lt.valHooks[o.type]||lt.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(jt,""):null==n?"":n)):void 0}}),lt.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(lt.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&lt.nodeName(n.parentNode,"optgroup"))){if(t=lt(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=lt.makeArray(t);return lt(e).find("option").each(function(){this.selected=lt.inArray(lt(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,a,s=e.nodeType;return e&&3!==s&&8!==s&&2!==s?typeof e.getAttribute===V?lt.prop(e,n,r):(o=1!==s||!lt.isXMLDoc(e),o&&(n=n.toLowerCase(),i=lt.attrHooks[n]||(_t.test(n)?St:Et)),r===t?i&&o&&"get"in i&&null!==(a=i.get(e,n))?a:(typeof e.getAttribute!==V&&(a=e.getAttribute(n)),null==a?t:a):null!==r?i&&o&&"set"in i&&(a=i.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(lt.removeAttr(e,n),t)):void 0},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(ct);if(o&&1===e.nodeType)for(;n=o[i++];)r=lt.propFix[n]||n,_t.test(n)?!$t&&Ht.test(n)?e[lt.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:lt.attr(e,n,""),e.removeAttribute($t?n:r)},attrHooks:{type:{set:function(e,t){if(!lt.support.radioValue&&"radio"===t&&lt.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;return e&&3!==s&&8!==s&&2!==s?(a=1!==s||!lt.isXMLDoc(e),a&&(n=lt.propFix[n]||n,o=lt.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]):void 0},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):Dt.test(e.nodeName)||Lt.test(e.nodeName)&&e.href?0:t}}}}),St={get:function(e,n){var r=lt.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?Mt&&$t?null!=i:Ht.test(n)?e[lt.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t
},set:function(e,t,n){return t===!1?lt.removeAttr(e,n):Mt&&$t||!Ht.test(n)?e.setAttribute(!$t&&lt.propFix[n]||n,n):e[lt.camelCase("default-"+n)]=e[n]=!0,n}},Mt&&$t||(lt.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return lt.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return lt.nodeName(e,"input")?(e.defaultValue=n,t):Et&&Et.set(e,n,r)}}),$t||(Et=lt.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},lt.attrHooks.contenteditable={get:Et.get,set:function(e,t,n){Et.set(e,""===t?!1:t,n)}},lt.each(["width","height"],function(e,n){lt.attrHooks[n]=lt.extend(lt.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),lt.support.hrefNormalized||(lt.each(["href","src","width","height"],function(e,n){lt.attrHooks[n]=lt.extend(lt.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),lt.each(["href","src"],function(e,t){lt.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),lt.support.style||(lt.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),lt.support.optSelected||(lt.propHooks.selected=lt.extend(lt.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),lt.support.enctype||(lt.propFix.enctype="encoding"),lt.support.checkOn||lt.each(["radio","checkbox"],function(){lt.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),lt.each(["radio","checkbox"],function(){lt.valHooks[this]=lt.extend(lt.valHooks[this],{set:function(e,n){return lt.isArray(n)?e.checked=lt.inArray(lt(e).val(),n)>=0:t}})});var qt=/^(?:input|select|textarea)$/i,Ft=/^key/,Ot=/^(?:mouse|contextmenu)|click/,Bt=/^(?:focusinfocus|focusoutblur)$/,It=/^([^.]*)(?:\.(.+)|)$/;lt.event={global:{},add:function(e,n,r,i,o){var a,s,l,u,c,p,f,d,h,m,g,y=lt._data(e);if(y){for(r.handler&&(u=r,r=u.handler,o=u.selector),r.guid||(r.guid=lt.guid++),(s=y.events)||(s=y.events={}),(p=y.handle)||(p=y.handle=function(e){return typeof lt===V||e&&lt.event.triggered===e.type?t:lt.event.dispatch.apply(p.elem,arguments)},p.elem=e),n=(n||"").match(ct)||[""],l=n.length;l--;)a=It.exec(n[l])||[],h=g=a[1],m=(a[2]||"").split(".").sort(),c=lt.event.special[h]||{},h=(o?c.delegateType:c.bindType)||h,c=lt.event.special[h]||{},f=lt.extend({type:h,origType:g,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&lt.expr.match.needsContext.test(o),namespace:m.join(".")},u),(d=s[h])||(d=s[h]=[],d.delegateCount=0,c.setup&&c.setup.call(e,i,m,p)!==!1||(e.addEventListener?e.addEventListener(h,p,!1):e.attachEvent&&e.attachEvent("on"+h,p))),c.add&&(c.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),lt.event.global[h]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,m,g=lt.hasData(e)&&lt._data(e);if(g&&(c=g.events)){for(t=(t||"").match(ct)||[""],u=t.length;u--;)if(s=It.exec(t[u])||[],d=m=s[1],h=(s[2]||"").split(".").sort(),d){for(p=lt.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;o--;)a=f[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,g.handle)!==!1||lt.removeEvent(e,d,g.handle),delete c[d])}else for(d in c)lt.event.remove(e,d+t[u],n,r,!0);lt.isEmptyObject(c)&&(delete g.handle,lt._removeData(e,"events"))}},trigger:function(n,r,i,o){var a,s,l,u,c,p,f,d=[i||Y],h=at.call(n,"type")?n.type:n,m=at.call(n,"namespace")?n.namespace.split("."):[];if(l=p=i=i||Y,3!==i.nodeType&&8!==i.nodeType&&!Bt.test(h+lt.event.triggered)&&(h.indexOf(".")>=0&&(m=h.split("."),h=m.shift(),m.sort()),s=0>h.indexOf(":")&&"on"+h,n=n[lt.expando]?n:new lt.Event(h,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:lt.makeArray(r,[n]),c=lt.event.special[h]||{},o||!c.trigger||c.trigger.apply(i,r)!==!1)){if(!o&&!c.noBubble&&!lt.isWindow(i)){for(u=c.delegateType||h,Bt.test(u+h)||(l=l.parentNode);l;l=l.parentNode)d.push(l),p=l;p===(i.ownerDocument||Y)&&d.push(p.defaultView||p.parentWindow||e)}for(f=0;(l=d[f++])&&!n.isPropagationStopped();)n.type=f>1?u:c.bindType||h,a=(lt._data(l,"events")||{})[n.type]&&lt._data(l,"handle"),a&&a.apply(l,r),a=s&&l[s],a&&lt.acceptData(l)&&a.apply&&a.apply(l,r)===!1&&n.preventDefault();if(n.type=h,!(o||n.isDefaultPrevented()||c._default&&c._default.apply(i.ownerDocument,r)!==!1||"click"===h&&lt.nodeName(i,"a")||!lt.acceptData(i)||!s||!i[h]||lt.isWindow(i))){p=i[s],p&&(i[s]=null),lt.event.triggered=h;try{i[h]()}catch(g){}lt.event.triggered=t,p&&(i[s]=p)}return n.result}},dispatch:function(e){e=lt.event.fix(e);var n,r,i,o,a,s=[],l=rt.call(arguments),u=(lt._data(this,"events")||{})[e.type]||[],c=lt.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=lt.event.handlers.call(this,e,u),n=0;(o=s[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,a=0;(i=o.handlers[a++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((lt.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?lt(r,this).index(u)>=0:lt.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[lt.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Ot.test(i)?this.mouseHooks:Ft.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new lt.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||Y),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||Y,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return lt.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==Y.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===Y.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=lt.extend(new lt.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?lt.event.trigger(i,null,t):lt.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},lt.removeEvent=Y.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===V&&(e[r]=null),e.detachEvent(r,n))},lt.Event=function(e,n){return this instanceof lt.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?l:u):this.type=e,n&&lt.extend(this,n),this.timeStamp=e&&e.timeStamp||lt.now(),this[lt.expando]=!0,t):new lt.Event(e,n)},lt.Event.prototype={isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=l,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=l,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=l,this.stopPropagation()}},lt.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){lt.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!lt.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),lt.support.submitBubbles||(lt.event.special.submit={setup:function(){return lt.nodeName(this,"form")?!1:(lt.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=lt.nodeName(n,"input")||lt.nodeName(n,"button")?n.form:t;r&&!lt._data(r,"submitBubbles")&&(lt.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),lt._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&lt.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return lt.nodeName(this,"form")?!1:(lt.event.remove(this,"._submit"),t)}}),lt.support.changeBubbles||(lt.event.special.change={setup:function(){return qt.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(lt.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),lt.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),lt.event.simulate("change",this,e,!0)})),!1):(lt.event.add(this,"beforeactivate._change",function(e){var t=e.target;qt.test(t.nodeName)&&!lt._data(t,"changeBubbles")&&(lt.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||lt.event.simulate("change",this.parentNode,e,!0)}),lt._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return lt.event.remove(this,"._change"),!qt.test(this.nodeName)}}),lt.support.focusinBubbles||lt.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){lt.event.simulate(t,e.target,lt.event.fix(e),!0)};lt.event.special[t]={setup:function(){0===n++&&Y.addEventListener(e,r,!0)},teardown:function(){0===--n&&Y.removeEventListener(e,r,!0)}}}),lt.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=u;else if(!i)return this;return 1===o&&(s=i,i=function(e){return lt().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=lt.guid++)),this.each(function(){lt.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,lt(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=u),this.each(function(){lt.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){lt.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?lt.event.trigger(e,n,r,!0):t}}),function(e,t){function n(e){return ht.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>C.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[B]=!0,e}function o(e){var t=L.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function a(e,t,n,r){var i,o,a,s,l,u,c,d,h,m;if((t?t.ownerDocument||t:I)!==L&&D(t),t=t||L,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!H&&!r){if(i=mt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&F(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return K.apply(n,Q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&W.getByClassName&&t.getElementsByClassName)return K.apply(n,Q.call(t.getElementsByClassName(a),0)),n}if(W.qsa&&!$.test(e)){if(c=!0,d=B,h=t,m=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(u=p(e),(c=t.getAttribute("id"))?d=c.replace(vt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",l=u.length;l--;)u[l]=d+f(u[l]);h=dt.test(e)&&t.parentNode||t,m=u.join(",")}if(m)try{return K.apply(n,Q.call(h.querySelectorAll(m),0)),n}catch(g){}finally{c||t.removeAttribute("id")}}}return x(e.replace(at,"$1"),t,n,r)}function s(e,t){var n=t&&e,r=n&&(~t.sourceIndex||Y)-(~e.sourceIndex||Y);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function l(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function p(e,t){var n,r,i,o,s,l,u,c=X[e+" "];if(c)return t?0:c.slice(0);for(s=e,l=[],u=C.preFilter;s;){(!n||(r=st.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=ut.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(at," ")}),s=s.slice(n.length));for(o in C.filter)!(r=ft[o].exec(s))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?a.error(e):X(e,l).slice(0)}function f(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=R++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,u,c=P+" "+o;if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(u=t[B]||(t[B]={}),(l=u[r])&&l[0]===c){if((s=l[1])===!0||s===N)return s===!0}else if(l=u[r]=[c],l[1]=e(t,n,a)||N,l[1]===!0)return!0}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function g(e,t,n,r,o,a){return r&&!r[B]&&(r=g(r)),o&&!o[B]&&(o=g(o,a)),i(function(i,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=i||b(t||"*",s.nodeType?[s]:s,[]),y=!e||!i&&t?g:m(g,f,e,s,l),v=n?o||(i?e:h||r)?[]:a:y;if(n&&n(y,v,s,l),r)for(u=m(v,d),r(u,[],s,l),c=u.length;c--;)(p=u[c])&&(v[d[c]]=!(y[d[c]]=p));if(i){if(o||e){if(o){for(u=[],c=v.length;c--;)(p=v[c])&&u.push(y[c]=p);o(null,v=[],u,l)}for(c=v.length;c--;)(p=v[c])&&(u=o?Z.call(i,p):f[c])>-1&&(i[u]=!(a[u]=p))}}else v=m(v===a?v.splice(h,v.length):v),o?o(null,a,v,l):K.apply(a,v)})}function y(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,l=d(function(e){return e===t},a,!0),u=d(function(e){return Z.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==j)||((t=n).nodeType?l(e,n,r):u(e,n,r))}];i>s;s++)if(n=C.relative[e[s].type])c=[d(h(c),n)];else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[B]){for(r=++s;i>r&&!C.relative[e[r].type];r++);return g(s>1&&h(c),s>1&&f(e.slice(0,s-1)).replace(at,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&f(e))}c.push(n)}return h(c)}function v(e,t){var n=0,r=t.length>0,o=e.length>0,s=function(i,s,l,u,c){var p,f,d,h=[],g=0,y="0",v=i&&[],b=null!=c,x=j,T=i||o&&C.find.TAG("*",c&&s.parentNode||s),w=P+=null==x?1:Math.random()||.1;for(b&&(j=s!==L&&s,N=n);null!=(p=T[y]);y++){if(o&&p){for(f=0;d=e[f++];)if(d(p,s,l)){u.push(p);break}b&&(P=w,N=++n)}r&&((p=!d&&p)&&g--,i&&v.push(p))}if(g+=y,r&&y!==g){for(f=0;d=t[f++];)d(v,h,s,l);if(i){if(g>0)for(;y--;)v[y]||h[y]||(h[y]=G.call(u));h=m(h)}K.apply(u,h),b&&!i&&h.length>0&&g+t.length>1&&a.uniqueSort(u)}return b&&(P=w,j=x),v};return r?i(s):s}function b(e,t,n){for(var r=0,i=t.length;i>r;r++)a(e,t[r],n);return n}function x(e,t,n,r){var i,o,a,s,l,u=p(e);if(!r&&1===u.length){if(o=u[0]=u[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&!H&&C.relative[o[1].type]){if(t=C.find.ID(a.matches[0].replace(xt,Tt),t)[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=ft.needsContext.test(e)?0:o.length;i--&&(a=o[i],!C.relative[s=a.type]);)if((l=C.find[s])&&(r=l(a.matches[0].replace(xt,Tt),dt.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&f(o),!e)return K.apply(n,Q.call(r,0)),n;break}}return S(e,u)(r,t,H,n,dt.test(e)),n}function T(){}var w,N,C,k,E,S,A,j,D,L,_,H,$,M,q,F,O,B="sizzle"+-new Date,I=e.document,W={},P=0,R=0,z=r(),X=r(),U=r(),V=typeof t,Y=1<<31,J=[],G=J.pop,K=J.push,Q=J.slice,Z=J.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},et="[\\x20\\t\\r\\n\\f]",tt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",nt=tt.replace("w","w#"),rt="([*^$|!~]?=)",it="\\["+et+"*("+tt+")"+et+"*(?:"+rt+et+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+nt+")|)|)"+et+"*\\]",ot=":("+tt+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+it.replace(3,8)+")*)|.*)\\)|)",at=RegExp("^"+et+"+|((?:^|[^\\\\])(?:\\\\.)*)"+et+"+$","g"),st=RegExp("^"+et+"*,"+et+"*"),ut=RegExp("^"+et+"*([\\x20\\t\\r\\n\\f>+~])"+et+"*"),ct=RegExp(ot),pt=RegExp("^"+nt+"$"),ft={ID:RegExp("^#("+tt+")"),CLASS:RegExp("^\\.("+tt+")"),NAME:RegExp("^\\[name=['\"]?("+tt+")['\"]?\\]"),TAG:RegExp("^("+tt.replace("w","w*")+")"),ATTR:RegExp("^"+it),PSEUDO:RegExp("^"+ot),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+et+"*(even|odd|(([+-]|)(\\d*)n|)"+et+"*(?:([+-]|)"+et+"*(\\d+)|))"+et+"*\\)|)","i"),needsContext:RegExp("^"+et+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+et+"*((?:-\\d)?\\d*)"+et+"*\\)|)(?=[^-]|$)","i")},dt=/[\x20\t\r\n\f]*[+~]/,ht=/^[^{]+\{\s*\[native code/,mt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,gt=/^(?:input|select|textarea|button)$/i,yt=/^h\d$/i,vt=/'|\\/g,bt=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,xt=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,Tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{Q.call(I.documentElement.childNodes,0)[0].nodeType}catch(wt){Q=function(e){for(var t,n=[];t=this[e++];)n.push(t);return n}}E=a.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},D=a.setDocument=function(e){var r=e?e.ownerDocument||e:I;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,_=r.documentElement,H=E(r),W.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),W.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),W.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),W.getByName=o(function(e){e.id=B+0,e.innerHTML="<a name='"+B+"'></a><div name='"+B+"'></div>",_.insertBefore(e,_.firstChild);var t=r.getElementsByName&&r.getElementsByName(B).length===2+r.getElementsByName(B+0).length;return W.getIdNotName=!r.getElementById(B),_.removeChild(e),t}),C.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==V&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},W.getIdNotName?(C.find.ID=function(e,t){if(typeof t.getElementById!==V&&!H){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){return e.getAttribute("id")===t}}):(C.find.ID=function(e,n){if(typeof n.getElementById!==V&&!H){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==V&&r.getAttributeNode("id").value===e?[r]:t:[]}},C.filter.ID=function(e){var t=e.replace(xt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),C.find.TAG=W.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==V?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},C.find.NAME=W.getByName&&function(e,n){return typeof n.getElementsByName!==V?n.getElementsByName(name):t},C.find.CLASS=W.getByClassName&&function(e,n){return typeof n.getElementsByClassName===V||H?t:n.getElementsByClassName(e)},M=[],$=[":focus"],(W.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||$.push("\\["+et+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||$.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&$.push("[*^$]="+et+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||$.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),$.push(",.*:")})),(W.matchesSelector=n(q=_.matchesSelector||_.mozMatchesSelector||_.webkitMatchesSelector||_.oMatchesSelector||_.msMatchesSelector))&&o(function(e){W.disconnectedMatch=q.call(e,"div"),q.call(e,"[s!='']:x"),M.push("!=",ot)}),$=RegExp($.join("|")),M=RegExp(M.join("|")),F=n(_.contains)||_.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},O=_.compareDocumentPosition?function(e,t){var n;return e===t?(A=!0,0):(n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&n||e.parentNode&&11===e.parentNode.nodeType?e===r||F(I,e)?-1:t===r||F(I,t)?1:0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,i=0,o=e.parentNode,a=t.parentNode,l=[e],u=[t];if(e===t)return A=!0,0;if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)l.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;l[i]===u[i];)i++;return i?s(l[i],u[i]):l[i]===I?-1:u[i]===I?1:0},A=!1,[0,0].sort(O),W.detectDuplicates=A,L):L},a.matches=function(e,t){return a(e,null,null,t)},a.matchesSelector=function(e,t){if((e.ownerDocument||e)!==L&&D(e),t=t.replace(bt,"='$1']"),!(!W.matchesSelector||H||M&&M.test(t)||$.test(t)))try{var n=q.call(e,t);if(n||W.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return a(t,L,null,[e]).length>0},a.contains=function(e,t){return(e.ownerDocument||e)!==L&&D(e),F(e,t)},a.attr=function(e,t){var n;return(e.ownerDocument||e)!==L&&D(e),H||(t=t.toLowerCase()),(n=C.attrHandle[t])?n(e):H||W.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},a.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},a.uniqueSort=function(e){var t,n=[],r=1,i=0;if(A=!W.detectDuplicates,e.sort(O),A){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return e},k=a.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=k(t);return n},C=a.selectors={cacheLength:50,createPseudo:i,match:ft,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,Tt),e[3]=(e[4]||e[5]||"").replace(xt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||a.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&a.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return ft.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&ct.test(n)&&(t=p(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(xt,Tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=z[e+" "];return t||(t=RegExp("(^|"+et+")"+e+"("+et+"|$)"))&&z(e,function(e){return t.test(e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=a.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(g){if(o){for(;m;){for(p=t;p=p[m];)if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&v){for(c=g[B]||(g[B]={}),u=c[e]||[],d=u[0]===P&&u[1],f=u[0]===P&&u[2],p=d&&g.childNodes[d];p=++d&&p&&p[m]||(f=d=0)||h.pop();)if(1===p.nodeType&&++f&&p===t){c[e]=[P,d,f];break}}else if(v&&(u=(t[B]||(t[B]={}))[e])&&u[0]===P)f=u[1];else for(;(p=++d&&p&&p[m]||(f=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==y:1!==p.nodeType)||!++f||(v&&((p[B]||(p[B]={}))[e]=[P,f]),p!==t)););return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=C.pseudos[e]||C.setFilters[e.toLowerCase()]||a.error("unsupported pseudo: "+e);return r[B]?r(t):r.length>1?(n=[e,e,"",t],C.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),a=o.length;a--;)i=Z.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=S(e.replace(at,"$1"));return r[B]?i(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return a(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:i(function(e){return pt.test(e||"")||a.error("unsupported lang: "+e),e=e.replace(xt,Tt).toLowerCase(),function(t){var n;do if(n=H?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===_},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return yt.test(e.nodeName)},input:function(e){return gt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=l(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=u(w);S=a.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=p(e)),n=t.length;n--;)o=y(t[n]),o[B]?r.push(o):i.push(o);o=U(e,v(i,r))}return o},C.pseudos.nth=C.pseudos.eq,C.filters=T.prototype=C.pseudos,C.setFilters=new T,D(),a.attr=lt.attr,lt.find=a,lt.expr=a.selectors,lt.expr[":"]=lt.expr.pseudos,lt.unique=a.uniqueSort,lt.text=a.getText,lt.isXMLDoc=a.isXML,lt.contains=a.contains}(e);var Wt=/Until$/,Pt=/^(?:parents|prev(?:Until|All))/,Rt=/^.[^:#\[\.,]*$/,zt=lt.expr.match.needsContext,Xt={children:!0,contents:!0,next:!0,prev:!0};lt.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(lt(e).filter(function(){for(t=0;i>t;t++)if(lt.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)lt.find(e,this[t],n);return n=this.pushStack(i>1?lt.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=lt(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(lt.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(p(this,e,!1))},filter:function(e){return this.pushStack(p(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?zt.test(e)?lt(e,this.context).index(this[0])>=0:lt.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=zt.test(e)||"string"!=typeof e?lt(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:lt.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return this.pushStack(o.length>1?lt.unique(o):o)},index:function(e){return e?"string"==typeof e?lt.inArray(this[0],lt(e)):lt.inArray(e.ttsui?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?lt(e,t):lt.makeArray(e&&e.nodeType?[e]:e),r=lt.merge(this.get(),n);return this.pushStack(lt.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),lt.fn.andSelf=lt.fn.addBack,lt.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return lt.dir(e,"parentNode")},parentsUntil:function(e,t,n){return lt.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")},nextAll:function(e){return lt.dir(e,"nextSibling")},prevAll:function(e){return lt.dir(e,"previousSibling")
},nextUntil:function(e,t,n){return lt.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return lt.dir(e,"previousSibling",n)},siblings:function(e){return lt.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return lt.sibling(e.firstChild)},contents:function(e){return lt.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:lt.merge([],e.childNodes)}},function(e,t){lt.fn[e]=function(n,r){var i=lt.map(this,t,n);return Wt.test(e)||(r=n),r&&"string"==typeof r&&(i=lt.filter(r,i)),i=this.length>1&&!Xt[e]?lt.unique(i):i,this.length>1&&Pt.test(e)&&(i=i.reverse()),this.pushStack(i)}}),lt.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?lt.find.matchesSelector(t[0],e)?[t[0]]:[]:lt.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!lt(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var Ut="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Vt=/ TTSUI\d+="(?:null|\d+)"/g,Yt=RegExp("<(?:"+Ut+")[\\s/>]","i"),Jt=/^\s+/,Gt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Kt=/<([\w:]+)/,Qt=/<tbody/i,Zt=/<|&#?\w+;/,en=/<(?:script|style|link)/i,tn=/^(?:checkbox|radio)$/i,nn=/checked\s*(?:[^=]|=\s*.checked.)/i,rn=/^$|\/(?:java|ecma)script/i,on=/^true\/(.*)/,an=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sn={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:lt.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},ln=f(Y),un=ln.appendChild(Y.createElement("div"));sn.optgroup=sn.option,sn.tbody=sn.tfoot=sn.colgroup=sn.caption=sn.thead,sn.th=sn.td,lt.fn.extend({text:function(e){return lt.access(this,function(e){return e===t?lt.text(this):this.empty().append((this[0]&&this[0].ownerDocument||Y).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(lt.isFunction(e))return this.each(function(t){lt(this).wrapAll(e.call(this,t))});if(this[0]){var t=lt(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return lt.isFunction(e)?this.each(function(t){lt(this).wrapInner(e.call(this,t))}):this.each(function(){var t=lt(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=lt.isFunction(e);return this.each(function(n){lt(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){lt.nodeName(this,"body")||lt(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||lt.filter(e,[n]).length>0)&&(t||1!==n.nodeType||lt.cleanData(b(n)),n.parentNode&&(t&&lt.contains(n.ownerDocument,n)&&g(b(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&lt.cleanData(b(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&lt.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return lt.clone(this,e,t)})},html:function(e){return lt.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Vt,""):t;if(!("string"!=typeof e||en.test(e)||!lt.support.htmlSerialize&&Yt.test(e)||!lt.support.leadingWhitespace&&Jt.test(e)||sn[(Kt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Gt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(lt.cleanData(b(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=lt.isFunction(e);return t||"string"==typeof e||(e=lt(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(lt(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=tt.apply([],e);var i,o,a,s,l,u,c=0,p=this.length,f=this,g=p-1,y=e[0],v=lt.isFunction(y);if(v||!(1>=p||"string"!=typeof y||lt.support.checkClone)&&nn.test(y))return this.each(function(i){var o=f.eq(i);v&&(e[0]=y.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(u=lt.buildFragment(e,this[0].ownerDocument,!1,this),i=u.firstChild,1===u.childNodes.length&&(u=i),i)){for(n=n&&lt.nodeName(i,"tr"),s=lt.map(b(u,"script"),h),a=s.length;p>c;c++)o=u,c!==g&&(o=lt.clone(o,!0,!0),a&&lt.merge(s,b(o,"script"))),r.call(n&&lt.nodeName(this[c],"table")?d(this[c],"tbody"):this[c],o,c);if(a)for(l=s[s.length-1].ownerDocument,lt.map(s,m),c=0;a>c;c++)o=s[c],rn.test(o.type||"")&&!lt._data(o,"globalEval")&&lt.contains(l,o)&&(o.src?lt.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):lt.globalEval((o.text||o.textContent||o.innerHTML||"").replace(an,"")));u=i=null}return this}}),lt.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){lt.fn[e]=function(e){for(var n,r=0,i=[],o=lt(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),lt(o[r])[t](n),nt.apply(i,n.get());return this.pushStack(i)}}),lt.extend({clone:function(e,t,n){var r,i,o,a,s,l=lt.contains(e.ownerDocument,e);if(lt.support.html5Clone||lt.isXMLDoc(e)||!Yt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(un.innerHTML=e.outerHTML,un.removeChild(o=un.firstChild)),!(lt.support.noCloneEvent&&lt.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||lt.isXMLDoc(e)))for(r=b(o),s=b(e),a=0;null!=(i=s[a]);++a)r[a]&&v(i,r[a]);if(t)if(n)for(s=s||b(e),r=r||b(o),a=0;null!=(i=s[a]);a++)y(i,r[a]);else y(e,o);return r=b(o,"script"),r.length>0&&g(r,!l&&b(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,l,u,c,p=e.length,d=f(t),h=[],m=0;p>m;m++)if(o=e[m],o||0===o)if("object"===lt.type(o))lt.merge(h,o.nodeType?[o]:o);else if(Zt.test(o)){for(s=s||d.appendChild(t.createElement("div")),l=(Kt.exec(o)||["",""])[1].toLowerCase(),c=sn[l]||sn._default,s.innerHTML=c[1]+o.replace(Gt,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!lt.support.leadingWhitespace&&Jt.test(o)&&h.push(t.createTextNode(Jt.exec(o)[0])),!lt.support.tbody)for(o="table"!==l||Qt.test(o)?"<table>"!==c[1]||Qt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)lt.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);for(lt.merge(h,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=d.lastChild}else h.push(t.createTextNode(o));for(s&&d.removeChild(s),lt.support.appendChecked||lt.grep(b(h,"input"),x),m=0;o=h[m++];)if((!r||-1===lt.inArray(o,r))&&(a=lt.contains(o.ownerDocument,o),s=b(d.appendChild(o),"script"),a&&g(s),n))for(i=0;o=s[i++];)rn.test(o.type||"")&&n.push(o);return s=null,d},cleanData:function(e,t){for(var n,r,i,o,a=0,s=lt.expando,l=lt.cache,u=lt.support.deleteExpando,c=lt.event.special;null!=(n=e[a]);a++)if((t||lt.acceptData(n))&&(i=n[s],o=i&&l[i])){if(o.events)for(r in o.events)c[r]?lt.event.remove(n,r):lt.removeEvent(n,r,o.handle);l[i]&&(delete l[i],u?delete n[s]:typeof n.removeAttribute!==V?n.removeAttribute(s):n[s]=null,Z.push(i))}}});var cn,pn,fn,dn=/alpha\([^)]*\)/i,hn=/opacity\s*=\s*([^)]*)/,mn=/^(top|right|bottom|left)$/,gn=/^(none|table(?!-c[ea]).+)/,yn=/^margin/,vn=RegExp("^("+ut+")(.*)$","i"),bn=RegExp("^("+ut+")(?!px)[a-z%]+$","i"),xn=RegExp("^([+-])=("+ut+")","i"),Tn={BODY:"block"},wn={position:"absolute",visibility:"hidden",display:"block"},Nn={letterSpacing:0,fontWeight:400},Cn=["Top","Right","Bottom","Left"],kn=["Webkit","O","Moz","ms"];lt.fn.extend({css:function(e,n){return lt.access(this,function(e,n,r){var i,o,a={},s=0;if(lt.isArray(n)){for(o=pn(e),i=n.length;i>s;s++)a[n[s]]=lt.css(e,n[s],!1,o);return a}return r!==t?lt.style(e,n,r):lt.css(e,n)},e,n,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:w(this))?lt(this).show():lt(this).hide()})}}),lt.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=fn(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":lt.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=lt.camelCase(n),u=e.style;if(n=lt.cssProps[l]||(lt.cssProps[l]=T(u,l)),s=lt.cssHooks[n]||lt.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=xn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(lt.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||lt.cssNumber[l]||(r+="px"),lt.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=lt.camelCase(n);return n=lt.cssProps[l]||(lt.cssProps[l]=T(e.style,l)),s=lt.cssHooks[n]||lt.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=fn(e,n,i)),"normal"===a&&n in Nn&&(a=Nn[n]),""===r||r?(o=parseFloat(a),r===!0||lt.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(pn=function(t){return e.getComputedStyle(t,null)},fn=function(e,n,r){var i,o,a,s=r||pn(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||lt.contains(e.ownerDocument,e)||(l=lt.style(e,n)),bn.test(l)&&yn.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):Y.documentElement.currentStyle&&(pn=function(e){return e.currentStyle},fn=function(e,n,r){var i,o,a,s=r||pn(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),bn.test(l)&&!mn.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l}),lt.each(["height","width"],function(e,n){lt.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&gn.test(lt.css(e,"display"))?lt.swap(e,wn,function(){return E(e,n,i)}):E(e,n,i):t},set:function(e,t,r){var i=r&&pn(e);return C(e,t,r?k(e,n,r,lt.support.boxSizing&&"border-box"===lt.css(e,"boxSizing",!1,i),i):0)}}}),lt.support.opacity||(lt.cssHooks.opacity={get:function(e,t){return hn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=lt.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===lt.trim(o.replace(dn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=dn.test(o)?o.replace(dn,i):o+" "+i)}}),lt(function(){lt.support.reliableMarginRight||(lt.cssHooks.marginRight={get:function(e,n){return n?lt.swap(e,{display:"inline-block"},fn,[e,"marginRight"]):t}}),!lt.support.pixelPosition&&lt.fn.position&&lt.each(["top","left"],function(e,n){lt.cssHooks[n]={get:function(e,r){return r?(r=fn(e,n),bn.test(r)?lt(e).position()[n]+"px":r):t}}})}),lt.expr&&lt.expr.filters&&(lt.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!lt.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||lt.css(e,"display"))},lt.expr.filters.visible=function(e){return!lt.expr.filters.hidden(e)}),lt.each({margin:"",padding:"",border:"Width"},function(e,t){lt.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Cn[r]+t]=o[r]||o[r-2]||o[0];return i}},yn.test(e)||(lt.cssHooks[e+t].set=C)});var En=/%20/g,Sn=/\[\]$/,An=/\r?\n/g,jn=/^(?:submit|button|image|reset|file)$/i,Dn=/^(?:input|select|textarea|keygen)/i;lt.fn.extend({serialize:function(){return lt.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=lt.prop(this,"elements");return e?lt.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!lt(this).is(":disabled")&&Dn.test(this.nodeName)&&!jn.test(e)&&(this.checked||!tn.test(e))}).map(function(e,t){var n=lt(this).val();return null==n?null:lt.isArray(n)?lt.map(n,function(e){return{name:t.name,value:e.replace(An,"\r\n")}}):{name:t.name,value:n.replace(An,"\r\n")}}).get()}}),lt.param=function(e,n){var r,i=[],o=function(e,t){t=lt.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=lt.ajaxSettings&&lt.ajaxSettings.traditional),lt.isArray(e)||e.ttsui&&!lt.isPlainObject(e))lt.each(e,function(){o(this.name,this.value)});else for(r in e)j(r,e[r],n,o);return i.join("&").replace(En,"+")},lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){lt.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),lt.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var Ln,_n,Hn=lt.now(),$n=/\?/,Mn=/#.*$/,qn=/([?&])_=[^&]*/,Fn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,On=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Bn=/^(?:GET|HEAD)$/,In=/^\/\//,Wn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Pn=lt.fn.load,Rn={},zn={},Xn="*/".concat("*");try{_n=J.href}catch(Un){_n=Y.createElement("a"),_n.href="",_n=_n.href}Ln=Wn.exec(_n.toLowerCase())||[],lt.fn.load=function(e,n,r){if("string"!=typeof e&&Pn)return Pn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),lt.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&lt.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?lt("<div>").append(lt.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},lt.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){lt.fn[t]=function(e){return this.on(t,e)}}),lt.each(["get","post"],function(e,n){lt[n]=function(e,r,i,o){return lt.isFunction(r)&&(o=o||i,i=r,r=t),lt.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),lt.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_n,type:"GET",isLocal:On.test(Ln[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Xn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":lt.parseJSON,"text xml":lt.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_(_(e,lt.ajaxSettings),t):_(lt.ajaxSettings,e)},ajaxPrefilter:D(Rn),ajaxTransport:D(zn),ajax:function(e,n){function r(e,n,r,i){var o,p,v,b,T,N=n;2!==x&&(x=2,l&&clearTimeout(l),c=t,s=i||"",w.readyState=e>0?4:0,r&&(b=H(f,w,r)),e>=200&&300>e||304===e?(f.ifModified&&(T=w.getResponseHeader("Last-Modified"),T&&(lt.lastModified[a]=T),T=w.getResponseHeader("etag"),T&&(lt.etag[a]=T)),204===e?(o=!0,N="nocontent"):304===e?(o=!0,N="notmodified"):(o=$(f,b),N=o.state,p=o.data,v=o.error,o=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),w.status=e,w.statusText=(n||N)+"",o?m.resolveWith(d,[p,N,w]):m.rejectWith(d,[w,N,v]),w.statusCode(y),y=t,u&&h.trigger(o?"ajaxSuccess":"ajaxError",[w,f,o?p:v]),g.fireWith(d,[w,N]),u&&(h.trigger("ajaxComplete",[w,f]),--lt.active||lt.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,l,u,c,p,f=lt.ajaxSetup({},n),d=f.context||f,h=f.context&&(d.nodeType||d.ttsui)?lt(d):lt.event,m=lt.Deferred(),g=lt.Callbacks("once memory"),y=f.statusCode||{},v={},b={},x=0,T="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!p)for(p={};t=Fn.exec(s);)p[t[1].toLowerCase()]=t[2];t=p[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=b[n]=b[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)y[t]=[y[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||T;return c&&c.abort(t),r(0,t),this}};if(m.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,f.url=((e||f.url||_n)+"").replace(Mn,"").replace(In,Ln[1]+"//"),f.type=n.method||n.type||f.method||f.type,f.dataTypes=lt.trim(f.dataType||"*").toLowerCase().match(ct)||[""],null==f.crossDomain&&(i=Wn.exec(f.url.toLowerCase()),f.crossDomain=!(!i||i[1]===Ln[1]&&i[2]===Ln[2]&&(i[3]||("http:"===i[1]?80:443))==(Ln[3]||("http:"===Ln[1]?80:443)))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=lt.param(f.data,f.traditional)),L(Rn,f,n,w),2===x)return w;u=f.global,u&&0===lt.active++&&lt.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Bn.test(f.type),a=f.url,f.hasContent||(f.data&&(a=f.url+=($n.test(a)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=qn.test(a)?a.replace(qn,"$1_="+Hn++):a+($n.test(a)?"&":"?")+"_="+Hn++)),f.ifModified&&(lt.lastModified[a]&&w.setRequestHeader("If-Modified-Since",lt.lastModified[a]),lt.etag[a]&&w.setRequestHeader("If-None-Match",lt.etag[a])),(f.data&&f.hasContent&&f.contentType!==!1||n.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Xn+"; q=0.01":""):f.accepts["*"]);for(o in f.headers)w.setRequestHeader(o,f.headers[o]);if(f.beforeSend&&(f.beforeSend.call(d,w,f)===!1||2===x))return w.abort();T="abort";for(o in{success:1,error:1,complete:1})w[o](f[o]);if(c=L(zn,f,n,w)){w.readyState=1,u&&h.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(l=setTimeout(function(){w.abort("timeout")},f.timeout));try{x=1,c.send(v,r)}catch(N){if(!(2>x))throw N;r(-1,N)}}else r(-1,"No Transport");return w},getScript:function(e,n){return lt.get(e,t,n,"script")},getJSON:function(e,t,n){return lt.get(e,t,n,"json")}}),lt.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return lt.globalEval(e),e}}}),lt.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),lt.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=Y.head||lt("head")[0]||Y.documentElement;return{send:function(t,i){n=Y.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Vn=[],Yn=/(=)\?(?=&|$)|\?\?/;lt.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Vn.pop()||lt.expando+"_"+Hn++;return this[e]=!0,e}}),lt.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Yn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=lt.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Yn,"$1"+o):n.jsonp!==!1&&(n.url+=($n.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||lt.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Vn.push(o)),s&&lt.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Jn,Gn,Kn=0,Qn=e.ActiveXObject&&function(){var e;for(e in Jn)Jn[e](t,!0)};lt.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&M()||q()}:M,Gn=lt.ajaxSettings.xhr(),lt.support.cors=!!Gn&&"withCredentials"in Gn,Gn=lt.support.ajax=!!Gn,Gn&&lt.ajaxTransport(function(n){if(!n.crossDomain||lt.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=lt.noop,Qn&&delete Jn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Kn,Qn&&(Jn||(Jn={},lt(e).unload(Qn)),Jn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Zn,er,tr=/^(?:toggle|show|hide)$/,nr=RegExp("^(?:([+-])=|)("+ut+")([a-z%]*)$","i"),rr=/queueHooks$/,ir=[W],or={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=nr.exec(t),a=i.cur(),s=+a||0,l=1,u=20;if(o){if(n=+o[2],r=o[3]||(lt.cssNumber[e]?"":"px"),"px"!==r&&s){s=lt.css(i.elem,e,!0)||n||1;do l=l||".5",s/=l,lt.style(i.elem,e,s+r);while(l!==(l=i.cur()/a)&&1!==l&&--u)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};lt.Animation=lt.extend(B,{tweener:function(e,t){lt.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],or[n]=or[n]||[],or[n].unshift(t)},prefilter:function(e,t){t?ir.unshift(e):ir.push(e)}}),lt.Tween=P,P.prototype={constructor:P,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(lt.cssNumber[n]?"":"px")},cur:function(){var e=P.propHooks[this.prop];return e&&e.get?e.get(this):P.propHooks._default.get(this)},run:function(e){var t,n=P.propHooks[this.prop];return this.pos=t=this.options.duration?lt.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):P.propHooks._default.set(this),this}},P.prototype.init.prototype=P.prototype,P.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=lt.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){lt.fx.step[e.prop]?lt.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[lt.cssProps[e.prop]]||lt.cssHooks[e.prop])?lt.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},P.propHooks.scrollTop=P.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},lt.each(["toggle","show","hide"],function(e,t){var n=lt.fn[t];lt.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(R(t,!0),e,r,i)}}),lt.fn.extend({fadeTo:function(e,t,n,r){return this.filter(w).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=lt.isEmptyObject(e),o=lt.speed(t,n,r),a=function(){var t=B(this,lt.extend({},e),o);a.finish=function(){t.stop(!0)},(i||lt._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=lt.timers,a=lt._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&rr.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&lt.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=lt._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=lt.timers,a=r?r.length:0;for(n.finish=!0,lt.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),lt.each({slideDown:R("show"),slideUp:R("hide"),slideToggle:R("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){lt.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),lt.speed=function(e,t,n){var r=e&&"object"==typeof e?lt.extend({},e):{complete:n||!n&&t||lt.isFunction(e)&&e,duration:e,easing:n&&t||t&&!lt.isFunction(t)&&t};return r.duration=lt.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in lt.fx.speeds?lt.fx.speeds[r.duration]:lt.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){lt.isFunction(r.old)&&r.old.call(this),r.queue&&lt.dequeue(this,r.queue)},r},lt.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},lt.timers=[],lt.fx=P.prototype.init,lt.fx.tick=function(){var e,n=lt.timers,r=0;for(Zn=lt.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||lt.fx.stop(),Zn=t},lt.fx.timer=function(e){e()&&lt.timers.push(e)&&lt.fx.start()},lt.fx.interval=13,lt.fx.start=function(){er||(er=setInterval(lt.fx.tick,lt.fx.interval))},lt.fx.stop=function(){clearInterval(er),er=null},lt.fx.speeds={slow:600,fast:200,_default:400},lt.fx.step={},lt.expr&&lt.expr.filters&&(lt.expr.filters.animated=function(e){return lt.grep(lt.timers,function(t){return e===t.elem}).length}),lt.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){lt.offset.setOffset(this,e,t)});var n,r,i={top:0,left:0},o=this[0],a=o&&o.ownerDocument;return a?(n=a.documentElement,lt.contains(n,o)?(typeof o.getBoundingClientRect!==V&&(i=o.getBoundingClientRect()),r=z(a),{top:i.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:i.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):i):void 0},lt.offset={setOffset:function(e,t,n){var r=lt.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=lt(e),s=a.offset(),l=lt.css(e,"top"),u=lt.css(e,"left"),c=("absolute"===r||"fixed"===r)&&lt.inArray("auto",[l,u])>-1,p={},f={};c?(f=a.position(),i=f.top,o=f.left):(i=parseFloat(l)||0,o=parseFloat(u)||0),lt.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+i),null!=t.left&&(p.left=t.left-s.left+o),"using"in t?t.using.call(e,p):a.css(p)}},lt.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===lt.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),lt.nodeName(e[0],"html")||(n=e.offset()),n.top+=lt.css(e[0],"borderTopWidth",!0),n.left+=lt.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-lt.css(r,"marginTop",!0),left:t.left-n.left-lt.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Y.documentElement;e&&!lt.nodeName(e,"html")&&"static"===lt.css(e,"position");)e=e.offsetParent;return e||Y.documentElement})}}),lt.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);lt.fn[e]=function(i){return lt.access(this,function(e,i,o){var a=z(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?lt(a).scrollLeft():o,r?o:lt(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}}),lt.each({Height:"height",Width:"width"},function(e,n){lt.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){lt.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return lt.access(this,function(n,r,i){var o;return lt.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?lt.css(n,r,s):lt.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.TTSUI=e.$=lt,"function"==typeof define&&define.amd&&define.amd.TTSUI&&define("ttsui",[],function(){return lt})})(window),function(e){function t(t,n,r,i){var o={data:i||(n?n.data:{}),_wrap:n?n._wrap:null,tmpl:null,parent:n||null,nodes:[],calls:u,nest:c,wrap:p,html:f,update:d};return t&&e.extend(o,t,{nodes:[],parent:n}),r&&(o.tmpl=r,o._ctnt=o._ctnt||o.tmpl(e,o),o.key=++T,(N.length?b:v)[T]=o),o}function n(t,i,o){var a,s=o?e.map(o,function(e){return"string"==typeof e?t.key?e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+g+'="'+t.key+'" $2'):e:n(e,t,e._ctnt)}):t;return i?s:(s=s.join(""),s.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(t,n,i,o){a=e(i).get(),l(a),n&&(a=r(n).concat(a)),o&&(a=a.concat(r(o)))}),a?a:r(s))}function r(t){var n=document.createElement("div");return n.innerHTML=t,e.makeArray(n.childNodes)}function i(t){return Function("TTSUI","$item","var $=TTSUI,call,_=[],$data=$item.data;with($data){_.push('"+e.trim(t).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(t,n,r,i,o,s,l){var u,c,p,f=e.tmpl.tag[r];if(!f)throw"Template command not found: "+r;return u=f._default||[],s&&!/\w$/.test(o)&&(o+=s,s=""),o?(o=a(o),l=l?","+a(l)+")":s?")":"",c=s?o.indexOf(".")>-1?o+s:"("+o+").call($item"+l:o,p=s?c:"(typeof("+o+")==='function'?("+o+").call($item):("+o+"))"):p=c=u.$1||"null",i=a(i),"');"+f[n?"close":"open"].split("$notnull_1").join(o?"typeof("+o+")!=='undefined' && ("+o+")!=null":"true").split("$1a").join(p).split("$1").join(c).split("$2").join(i?i.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g,function(e,t,n,r){return r=r?","+r+")":n?")":"",r?"("+t+").call($item"+r:e}):u.$2||"")+"_.push('"})+"');}return _;")}function o(t,r){t._wrap=n(t,!0,e.isArray(r)?r:[y.test(r)?r:e(r).html()]).join("")}function a(e){return e?e.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function s(e){var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function l(n){function r(n){function r(e){e+=u,a=c[e]=c[e]||t(a,v[a.parent.key+u]||a.parent,null,!0)}var i,o,a,s,l=n;if(s=n.getAttribute(g)){for(;l.parentNode&&1===(l=l.parentNode).nodeType&&!(i=l.getAttribute(g)););i!==s&&(l=l.parentNode?11===l.nodeType?0:l.getAttribute(g)||0:0,(a=v[s])||(a=b[s],a=t(a,v[l]||b[l],null,!0),a.key=++T,v[T]=a),w&&r(s)),n.removeAttribute(g)}else w&&(a=e.data(n,"tmplItem"))&&(r(a.key),v[a.key]=a,l=e.data(n.parentNode,"tmplItem"),l=l?l.key:0);if(a){for(o=a;o&&o.key!=l;)o.nodes.push(n),o=o.parent;delete a._ctnt,delete a._wrap,e.data(n,"tmplItem",a)}}var i,o,a,s,l,u="_"+w,c={};for(a=0,s=n.length;s>a;a++)if(1===(i=n[a]).nodeType){for(o=i.getElementsByTagName("*"),l=o.length-1;l>=0;l--)r(o[l]);r(i)}}function u(e,t,n,r){return e?(N.push({_:e,tmpl:t,item:this,data:n,options:r}),void 0):N.pop()}function c(t,n,r){return e.tmpl(e.template(t),n,r,this)}function p(t,n){var r=t.options||{};return r.wrapped=n,e.tmpl(e.template(t.tmpl),t.data,r,t.item)}function f(t,n){var r=this._wrap;
return e.map(e(e.isArray(r)?r.join(""):r).filter(t||"*"),function(e){return n?e.innerText||e.textContent:e.outerHTML||s(e)})}function d(){var t=this.nodes;e.tmpl(null,null,null,this).insertBefore(t[0]),e(t).remove()}var h,m=e.fn.domManip,g="_tmplitem",y=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,v={},b={},x={key:0,data:{}},T=0,w=0,N=[];e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){e.fn[t]=function(r){var i,o,a,s,l=[],u=e(r),c=1===this.length&&this[0].parentNode;if(h=v||{},c&&11===c.nodeType&&1===c.childNodes.length&&1===u.length)u[n](this[0]),l=this;else{for(o=0,a=u.length;a>o;o++)w=o,i=(o>0?this.clone(!0):this).get(),e.fn[n].apply(e(u[o]),i),l=l.concat(i);w=0,l=this.pushStack(l,t,u.selector)}return s=h,h=null,e.tmpl.complete(s),l}}),e.fn.extend({tmpl:function(t,n,r){return e.tmpl(this[0],t,n,r)},tmplItem:function(){return e.tmplItem(this[0])},template:function(t){return e.template(t,this[0])},domManip:function(t,n,r){if(t[0]&&t[0].nodeType){for(var i,o=e.makeArray(arguments),a=t.length,s=0;a>s&&!(i=e.data(t[s++],"tmplItem")););a>1&&(o[0]=[e.makeArray(t)]),i&&w&&(o[2]=function(t){e.tmpl.afterManip(this,t,r)}),m.apply(this,o)}else m.apply(this,arguments);return w=0,!h&&e.tmpl.complete(v),this}}),e.extend({tmpl:function(r,i,a,s){var l,u=!s;if(u)s=x,r=e.template[r]||e.template(null,r),b={};else if(!r)return r=s.tmpl,v[s.key]=s,s.nodes=[],s.wrapped&&o(s,s.wrapped),e(n(s,null,s.tmpl(e,s)));return r?("function"==typeof i&&(i=i.call(s||{})),a&&a.wrapped&&o(a,a.wrapped),l=e.isArray(i)?e.map(i,function(e){return e?t(a,s,r,e):null}):[t(a,s,r,i)],u?e(n(s,null,l)):l):[]},tmplItem:function(t){var n;for(t instanceof e&&(t=t[0]);t&&1===t.nodeType&&!(n=e.data(t,"tmplItem"))&&(t=t.parentNode););return n||x},template:function(t,n){return n?("string"==typeof n?n=i(n):n instanceof e&&(n=n[0]||{}),n.nodeType&&(n=e.data(n,"tmpl")||e.data(n,"tmpl",i(n.innerHTML))),"string"==typeof t?e.template[t]=n:n):t?"string"!=typeof t?e.template(null,t):e.template[t]||e.template(null,y.test(t)?t:e(t)):null},encode:function(e){return(""+e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),e.extend(e.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){_=_.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(_,$1,$2);_=[];",close:"call=$item.calls();_=call._.concat($item.wrap(call,_));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){_.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){_.push($.encode($1a));}"},"!":{open:""}},complete:function(){v={}},afterManip:function(t,n,r){var i=11===n.nodeType?e.makeArray(n.childNodes):1===n.nodeType?[n]:[];r.call(t,n),l(i),w++}})}(TTSUI),window.TTSUI=TTSUI.noConflict();
(function (TTSUI) {
    if (typeof TTSMedia !== "undefined") {
        return false;
    }
    TTSMedia = true;
    var document = window.document,
        navigator = window.navigator,
        global = "__TTS",
        ttsunionId,
        MEDIA_config;
    var url = window.location.href,
        host = window.location.host,
        flag = true,
        firstLoad = true,
        hashChange = true;
    var _imgUrl = '',
        mediaSize = "_120x120.jpg";
    var mediaBox;
    var hasSim = false,
        hasBrand = false,
        hasCommon = false,
        hasMedia = false;
    var api = {
        upai:'http://ttsmedia.b0.upaiyun.com/',
        kc:'http://show.kc.taotaosou.com/adShow163.do?',
        kctu:'http://show.kc.taotaosou.com/tumeiti.do?',
        re:'re.taotaosou.com', //打点接口,
        log:'http://dc.log.taotaosou.com/statistics.do?systemName=tts_media',
        test:'http://www.ttsunion.com/'
    };

    //取联盟ID
    ttsunionId = (function () {
        var script = document.getElementsByTagName("script"),
            item,
            _id;
        for (var i = 0, len = script.length; i < len; i++) {
            item = script[i];
            if (item.src && item.src.match(/tts_union_center/)) {
                //_id = script[i].src.match(new RegExp("[\?\&]suid=([^\&]*)(\&?)", "i"));
                _id = script[i].src.match(/[\?\&]suid=([^\&]*)(\&?)/i);
                return _id ? _id[1] : false;
            }
        }
    })();
    //过滤站点
    var skiphrefs = /taobao.com|tmall.com|etao.com|alipay|zhifubao|alimama|alibaba/;

    if (url.match(skiphrefs)) {
        return false;
    }

    /**
     * 判断浏览器是否是ie
     * @return {Boolean}
     */
    function isIE() {
        //return /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent);
        return new RegExp("msie", "i").test(navigator.userAgent) && !new RegExp("opera", "i").test(navigator.userAgent);
    }

    /**
     * 对象在浏览器里的相对位置
     * @param elm 图片对象
     * @return {Object} 放回top/left偏移量
     */
    function getOffset(elm) {
        var left = 0;
        var top = 0;
        while (elm) {
            left += elm.offsetLeft;
            top += elm.offsetTop;
            elm = elm.offsetParent;
        }
        return{left:left, top:top};
    }

    /**
     * 改变埋点URl路径
     * @param {String} url 第一个url
     */
    function changeUrl(url) {
        //TODO: substring 是否可以封装成一个方法
        if (url.match(/.gtimg.com/)) {
            url = "http://img1" + url.substring(url.indexOf(".gtimg.com"));
        } else if (url.match(/.rayliimg.cn/)) {
            url = "http://image1" + url.substring(url.indexOf(".rayliimg.cn"));
        } else if (url.match(/biz.itc.cn/)) {
            url = "http://m1" + url.substring(url.indexOf(".biz.itc.cn"));
        } else if (url.match(/&f=/)) {
            url = "http://thumb1.yokacdn.com/p_420_625/" + url.substring(url.indexOf("&f=") + 3).replace(":", "") + ".jpg";
        } else if (url.match(/.cache./)) {
            url = 'http://img1' + url.substring(url.indexOf(".cache."));
        } else if (url.match(/\?/)) {
            url = url.split('?')[0];
        }
        return url;
    }

    /**
     * 删除DOM
     */
    function delMedia() {
        if (TTSUI('.tts_media')[0]) {
            TTSUI('.tts_media').each(function (i, item) {
                item.parentNode.removeChild(item);
            });
        }
        flag = true;
    }

    /**
     * 埋点
     * @param imgId
     * @param pObj
     * @param objSub
     * @param eObj
     * @param eSub
     */
        //TODO: 缺少参数说明，5个参数是否过多，可以省略一些参数吗？
    function statistics(imgId, pObj, objSub, eObj, eSub) {
        load(api.log + '&pv=' + MEDIA_config.id + ',' + imgId + ',' + pObj + ',' + objSub + ',' + eObj + ',' + eSub);
    }

    /**
     * 过滤展示图片 如：display='none';
     * @param img
     * @return {Boolean}
     */
        //TODO: 本方法只在 getCurrentPageImages() 使用，是否可以放进 getCurrentPageImages() 里面
    function isValidImage(img) {
        //["JPG", "PNG","JPEG"]
        var imgType = ["JPG", "PNG", "JPEG"];
        //下面的条件也会匹配到这样的图片 <img src="data:">
        //建议改成 img.src.match(/data:/)
        if (img.src && img.src.match(/data:/)) {
            return false;
        }
        if (skipImg(img)) {
            for (var i = 0; i < imgType.length; i++) {
                var srcType = imgType[i];
                var fixSrc = img.src.split('?')[0].slice(-4).toUpperCase();
                if (fixSrc.match(srcType)) {
                    var newImg = new Image();
                    newImg.src = img.src;
                    if (newImg.width >= MEDIA_config.minWidth && newImg.height >= MEDIA_config.minHeight) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    /**
     * 特殊图片过滤图片
     * @param img 图片对象
     * @return {Boolean}
     */
    function skipImg(img) {
        if (img.style.display === "none" || img.id === "preloadBig") {
            return false;
        }
        if (img.parentNode) {
            if (img.parentNode.style.display === "none" || img.parentNode.id === "accessPlay") {
                return false;
            } else if (img.parentNode.parentNode) {
                if (img.parentNode.parentNode.id === "nphLayoutGG" || img.parentNode.parentNode.id === "zuihoudiv" ||
                    img.parentNode.parentNode.id === "htpGG") {
                    return false;
                }
            }
        }
        return true;
    }

    /**
     * 过滤spider采集图片
     * @param img 图片对象
     * @return {Boolean}
     */
    function isValidSpiderImage(img) {
        var imgType = MEDIA_config.confSpider.imgType;
        if (img.src && img.src.indexOf("data:") === 0) {
            return false;
        }
        if (skipImg(img)) {
            for (var i = 0; i < imgType.length; i++) {
                var srcType = imgType[i].toUpperCase();
                var fixSrc = img.src.split('?')[0].slice(-4).toUpperCase();
                if (fixSrc.match(srcType)) {
                    var newImg = new Image();
                    newImg.src = img.src;
                    if (newImg.width >= MEDIA_config.minWidth && newImg.height >= MEDIA_config.minHeight) {
                        return true;
                    }
                    /*if (img.width >= MEDIA_config.confSpider.macthHeight && img.height >= MEDIA_config.confSpider.macthWidth) {
                     return true
                     }*/
                }
            }
        }
        return false;
    }

    /**
     * 匹配spider采集图片
     * @param d document对象
     * @param eImages 目标图片数组
     * @param opts 图片信息
     * @return {*} 返回目标图片数组
     */
    function matchSpiderImage(d, eImages, opts) {
        var _document = document || d;
        eImages = eImages || [];
        opts = opts || {};
        for (var i = 0; i < _document.images.length; i++) {
            var img = _document.images[i];
            if (isValidSpiderImage(img)) {
                if (opts) {
                    img._parentNode = opts.parentNode || null;
                }
                eImages.push(img);
            }
        }
        return eImages;
    }

    /**
     * 加载js
     * @param url 链接地址
     * @param callback 回调
     */
    function load(url, callback) {
        var script = document.createElement("script");

        script.type = 'text/javascript';
        script.charset = 'utf-8';
        script.src = url;

        script.onload = script.onreadystatechange = function () {
            if (!script.isLoad && (!script.readyState || script.readyState === "loaded" || script.readyState === "complete")) {
                script.isLoad = true;
                if (typeof callback === 'function') {
                    callback(script);
                }
                script.onload = script.onreadystatechange = null;
                script.parentNode.removeChild(script);
            }
        };

        document.body.appendChild(script);
    }

    /**
     * 加载CSS
     * @param url 地址
     */
    function loadCSS(url) {
        var head = document.head || document.getElementsByTagName('head')[0],
            link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        head.appendChild(link);
    }

    /**
     * 取图片
     * @param d document对象
     * @param eImages 目标图片数组
     * @param opts 图片信息
     * @return {*} 返回目标图片数组
     */
    function getCurrentPageImages(d, eImages, opts) {
        var _document = document || d;
        eImages = eImages || [];
        opts = opts || {};
        for (i = 0; i < _document.images.length; i++) {
            var img = _document.images[i];
            if (isValidImage(img)) {
                img = encapsulateImage(img);
                if (opts) {
                    img._parentNode = opts.parentNode || null;
                }
                eImages.push(img);
            }
        }
        return eImages;
    }

    /**
     * 分装图片
     * @param img 图片对象
     * @return {Object} 返回分装后的图片对象信息
     */
    function encapsulateImage(img) {
        var obj = {
            x:img.getBoundingClientRect().left,
            y:img.getBoundingClientRect().top,
            src:changeUrl(img.src),
            img:img
        };
        return obj;
    }

    /**
     * 过滤图片 如：图片在同一位置
     * @param arr 图片数组
     * @return {Array} 返回过滤后的图片数组
     */
    function uniqImgObj(arr) {
        var object = {};

        function have(obj) {
            var temp = [];
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].y === obj.y) {
                    temp.push(i);
                }
            }
            return temp;
        }

        for (var i = 0; i < arr.length; i++) {
            object[i] = arr[i];
            var num = have(arr[i]);
            if (num.length > 1) {
                for (var j = 0; j < num.length; j++) {
                    delete object[num[j]];
                }
            }
        }
        arr = [];
        for (var name in object) {
            arr.push(object[name]);
        }
        return arr;
    }

    /**
     * 获取媒体站配置信息
     */
    function getConfig() {
        /*var config = {
         "id":3000100041,
         "keyType":162103,
         "minWidth":300,
         "minHeight":300,
         "maxSize":2,
         "priority":['2', '3'],
         "confSim":{"adStyle":1, "tabSize":3, "popDirect":1, "popTime":3, "markerStyle":1, "markerShow":1, "hover":1},
         //"confBrand":{"adStyle":2, "popTime":3, "popNum":1, "hover":2},
         "confBrand":{"adStyle":2, "popTime":3, "popNum":0, "hover":1, "popDirect":1, "closed":1},
         "confCommon":{"adStyle":1, "tabSize":3, "popDirect":2, "popTime":3, "hover":1,
         "keyWordList":[
         ['\u624b\u5957', '\u624b\u5957', '\u5de5\u88c5\u88e4'],
         ['\u793c\u670d\u88d9', '\u624b\u5957', '\u955c\u6846'],
         ['\u624b\u5957', '\u624b\u5957', '\u5de5\u88c5\u88e4'],
         ['\u793c\u670d\u88d9', '\u624b\u5957', '\u955c\u6846'],
         ['\u624b\u5957', '\u624b\u5957', '\u5de5\u88c5\u88e4'],
         ['\u793c\u670d\u88d9', '\u624b\u5957', '\u955c\u6846']
         ]},
         "confSpider":{"macthNum":3, "macthWidth":350, "macthHeight":300, "imgType":['JPG', 'JPEG', 'PNG']}
         };
         MEDIA_config = config;
         init();
         hasMedia = false;*/
        hasMedia = false;
        TTSUI.getJSON(api.test + "getConfig.do?name=jsonp&unionid=" + ttsunionId +
            "&jsonp=?" +
            "&url=" + encodeURIComponent(url), function (data) {
            if (!data) {
                return false;
            } else {
                MEDIA_config = data;
                init();
                statistics('0', 'PAG', '0', 'PV', 'ALL');
            }
        });
    }

    /**
     * 初始化
     * @return {Boolean}
     */
    function init() {
        if (!MEDIA_config) {
            return false;
        }
        var oldNum;
        //页面图片 改变
        var domChangeFn = function () {
            var imgNum = TTSUI("img").not(".tts_media img").size();
            var domChangeImg = [];
            var intervalKey = setInterval(function () {
                if (TTSUI("img").not(".tts_media img").size() !== imgNum) {
                    domChangeImg = getCurrentPageImages();
                    if (oldNum.length !== domChangeImg.length) {
                        setTimeout(function () {
                            getCurrentImg();
                        }, 500);
                    }
                    clearInterval(intervalKey);
                    domChangeFn();
                }
            }, 100);
        };
        //筛选图片
        function getCurrentImg() {
            var currentPageEImages = getCurrentPageImages();
            var uniqPageEImages = uniqImgObj(currentPageEImages);
            for (var j = 0, ulen = uniqPageEImages.length; j < ulen; j++) {
                _imgUrl += ',' + encodeURIComponent(uniqPageEImages[j].src);
            }
            //load('http://mlog.ttsunion.com/statistics.do?type=ZZpv_&fr_url=&banner_url=&bak=' + '&img_url=' + _imgUrl.substring(1));
            load('http://log.taotaosou.com/statistics.do?type=ZZpv_&fr_url=&banner_url=&bak=' + '&img_url=' + _imgUrl.substring(1));
            if (MEDIA_config.confSpider) {
                var spiderImgs = matchSpiderImage();
                if (spiderImgs.length > 0) {
                    if (spiderImgs.length > MEDIA_config.confSpider.macthNum) {
                        spiderImgs.length = MEDIA_config.confSpider.macthNum;
                    }
                    var str = '';
                    for (var i = 0; i < spiderImgs.length; i++) {
                        str += ',' + encodeURIComponent(spiderImgs[i].src);
                    }
                    //spider 采集
                    load(api.test + 'cltProxy.do?urls=' + str.substring(1) +
                        '&pageUrl=' + encodeURIComponent(url));
                }
            }
            oldNum = currentPageEImages;
            if (uniqPageEImages.length > 0) {
                if (uniqPageEImages.length > MEDIA_config.maxSize) {
                    var unPinImg = uniqPageEImages.slice(MEDIA_config.maxSize);
                    for (var k = 0, len = unPinImg.length; k < len; k++) {
                        statistics(unPinImg[k].src, 'IMG', '0', 'PV', 'ALL');
                        statistics(unPinImg[k].src, 'IMG', '0', 'PV', 'ADN');
                    }
                    uniqPageEImages.length = MEDIA_config.maxSize;
                }
                delMedia(uniqPageEImages);
                regMedia(uniqPageEImages);
            } else {
                statistics('0', 'PAG', '0', 'PV', 'ADN');
                delMedia();
            }
        }

        setTimeout(function () {
            getCurrentImg();
            domChangeFn();
            // 改变img src 的时候才触发
            TTSUI("img").not(".tts_media img").load(function () {
                if (hashChange && firstLoad) {
                    firstLoad = false;
                    setTimeout(function () {
                        getCurrentImg();
                    }, 500);
                }
            });
        }, 800);
    }

    /**
     * 初始化图媒体
     */
    function init_media() {
        TTSUI(document).ready(function () {
            var hashTimer = null;
            loadCSS(api.upai + 'union/css/p4p-2.0.css?v=1369363741639');
            getConfig();
            //TODO: 给 IE6/7 模拟 haschange 事件，封装到 $(window).bind('hashchange')
            //改变hash值 重新去图片
            //参考 KISSY: http://docs.kissyui.com/docs/html/api/core/event/hashchange.html
            if (isIE()) {
                var hash = document.location.hash;
                TTSUI("body").bind('click', function () {
                    hashTimer = setTimeout(function () {
                        if (document.location.hash !== hash) {
                            delMedia();
                            clearTimeout(hashTimer);
                            hashChange = false;
                            hash = document.location.hash;
                            hasSim = false;
                            hasBrand = false;
                            hasCommon = false;
                            getConfig();
                        }
                    }, 500);
                });
            } else {
                TTSUI(window).bind('hashchange', function () {
                    hashChange = false;
                    delMedia();
                    clearTimeout(hashTimer);
                    hashTimer = setTimeout(function () {
                        hasSim = false;
                        hasBrand = false;
                        hasCommon = false;
                        getConfig();
                    }, 500);
                });
            }
        });
    }

    /**
     * 注册图媒体
     * 首先请求后台管理系统
     * @param eImages 图片数组
     */
        //TODO: 缺少参数说明
    function regMedia(eImages) {
        //图媒体容器
        if (!document.getElementById(global + '_media')) {
            mediaBox = document.createElement('div');
            mediaBox.className = 'tts_media';
            document.body.appendChild(mediaBox);
        }
        var str = '';
        for (var i = 0, len = eImages.length; i < len; i++) {
            str += ',' + encodeURIComponent(eImages[i].src);
        }
        TTSUI.getJSON(api.test + "data/getImageOffer.do?imgUrls=" + str.substring(1) +
            "&clientid=1&name=json&jsonp=?", function (data) {
            TTSUI(eImages).each(function (i, eImage) {
                /**
                 * 首先:请求内部后台打点信息接口, 判断图片当前状态 （可展示于否）
                 * 然后:一次请求广告系统，返回所有广告信息
                 */
                getStaus(eImage, data);
            });
        });
    }

    /**
     * 判断图片状态 根据状态走相应流程
     * @param eImage 图片对象
     * @param data 打点信息
     */
    function getStaus(eImage, data) {
        /**
         * 优先级判断放广告系统；前端只负责数据展示
         */
        var tagList = data.tagList;
        TTSUI(tagList).each(function (i, item) {
            var status = item.lhandleStatus;
            if (item.imageUrl === eImage.src) {
                switch (status) {
                    case 4: //啥都不出
                        statistics(eImage.src, 'IMG', '0', 'PV', 'ADN');
                        statistics(eImage.src, 'IMG', '0', 'PV', 'ALL');
                        return false;
                    case 1: //出广告 有同款出同款
                        regImg(eImage, item, i);
                        break;
                    case 2: //只不出相似广告
                        regImg(eImage, 2, i);
                        break;
                    default :
                        statistics(eImage.src, 'IMG', '0', 'PV', 'ADN');
                        statistics(eImage.src, 'IMG', '0', 'PV', 'ALL');
                        break;
                }
            }
        });
    }

    /**
     * 对每张图片注册图媒体
     * @param eImage 图片对象
     * @param data 打点信息
     * @param num 第几张图片
     */
    function regImg(eImage, data, num) {
        if (MEDIA_config.priority[0] === '1') {
            if (data === 2) {
                if (MEDIA_config.priority[1] === '2') {
                    new OwnMedia(eImage, MEDIA_config.confBrand).getBrand();
                } else if (MEDIA_config.priority[1] === '3') {
                    new OwnMedia(eImage, MEDIA_config.confCommon).getCommon(num);
                } else {
                    statistics('0', 'PAG', '0', 'PV', 'ADN');
                    statistics(eImage.src, 'IMG', '0', 'PV', 'ADN');
                    statistics(eImage.src, 'IMG', '0', 'PV', 'ALL');
                }
            } else if (data.id !== 0) {
                new OwnMedia(eImage, MEDIA_config.confSim).getSim(data);
            } else {
                if (MEDIA_config.priority[1] === '2') {
                    new OwnMedia(eImage, MEDIA_config.confBrand).getBrand();
                } else if (MEDIA_config.priority[1] === '3') {
                    new OwnMedia(eImage, MEDIA_config.confCommon).getCommon(num);
                } else {
                    statistics('0', 'PAG', '0', 'PV', 'ADN');
                    statistics(eImage.src, 'IMG', '0', 'PV', 'ADN');
                    statistics(eImage.src, 'IMG', '0', 'PV', 'ALL');
                }
            }
        } else {
            if (MEDIA_config.priority[0] === '2') {
                new OwnMedia(eImage, MEDIA_config.confBrand).getBrand();
            } else if (MEDIA_config.priority[0] === '3') {
                new OwnMedia(eImage, MEDIA_config.confCommon).getCommon(num);
            } else {
                statistics('0', 'PAG', '0', 'PV', 'ADN');
                statistics(eImage.src, 'IMG', '0', 'PV', 'ADN');
            }
        }
    }

    /**
     * 图媒体构造函数
     * @param eImage 图片对象
     * @param config 配置信息
     * @constructor
     */
        //TODO: 缺少参数说明
    function OwnMedia(eImage, config) {
        this.config = config;
        this.imgObj = eImage;
        this.elm = this.imgObj.img;
        //this.elmOffset = TTSUI(this.elm).offset();
        this.elmOffset = getOffset(this.elm);
        if (!hasMedia) {
            statistics('0', 'PAG', '0', 'PV', 'ADY');
            hasMedia = true;
        }
    }

    /**
     * 构造函数
     * @type {Object}
     */
    OwnMedia.prototype = {
        /**
         * 请求通用广告
         * @param num index值
         */
        getCommon:function (num) {
            var _this = this;
            //品牌广告容器
            statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'GP1');
            statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'ALL');
            var commonWrap = document.createElement("div");
            commonWrap.className = "J_common_box common_box";
            var sidebarY = _this.elmOffset.top + 20,
                sidebarX = TTSUI(_this.elm).width() + _this.elmOffset.left;
            _this.siderTab = TTSUI('<ul class="J_sidertab tts_sidertab"></ul>').css({"left":sidebarX, "top":sidebarY});
            TTSUI(commonWrap).append(_this.siderTab).appendTo(mediaBox);
            _this.getCommonTmpl(_this.config.adStyle);
            var keyWordData = _this.config.keyWordList[num];
            TTSUI(keyWordData).each(function (i, item) {
                statistics(_this.imgObj.src, 'ADT', 'TAGP1', 'PV', 'TA' + (i + 1));
                //添加主站链接
                var keyWord = {
                    tabName:item,
                    href:"http://www.taotaosou.com/getProducts?keyword=" + encodeURIComponent(item) +
                        "&utm_source=ttsMedia" + MEDIA_config.id +
                        "&utm_medium=ttk" +
                        "&utm_campaign=itemlike" +
                        "&utm_nooverride=0" +
                        "&from=ttsMedia" + MEDIA_config.id +
                        "&outer_code=" + MEDIA_config.id
                };
                _this.commonTab = TTSUI.tmpl(_this.commonTabTmp, keyWord).appendTo(_this.siderTab);
                //第一个标签默认展示
                //if (i === 0 && _this.config.popTime > 0) {
                if (!hasCommon && _this.config.popTime > 0) {
                    var tipTab = _this.siderTab.find('.tabli').eq(0),
                        tipWrap = tipTab.find('.J_tip_wrap');
                    tipTab.addClass("active");
                    if (!tipTab.attr("data-show")) {
                        TTSUI.getJSON(api.kctu + 'adType=0,1,0&keyword=0,' + encodeURIComponent(item) +
                            ',0&adSize=0,120,0&itemSize=0,4,0' +
                            '&tbId=&pid=' + MEDIA_config.id + '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                            '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                            '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                            if (data.tongyong[0]) {
                                var tongyong = {
                                    proList:data.tongyong
                                };
                                var pdUl = TTSUI.tmpl(_this.commonItemTmp, tongyong).appendTo(tipTab.find('.J_item_box'));
                                pdUl.click(function (e) {
                                    var index = TTSUI(this).parents(".J_item_box").find(this).index();
                                    //商品点击埋点
                                    if (!TTSUI(e.target).parents().is('.price')) {
                                        statistics(_this.imgObj.src, 'ADF', 'FGP1', 'CK', 'TA1PR' + (index + 1));
                                    }
                                });
                            }
                        });
                        statistics(_this.imgObj.src, 'ADF', 'FGP1', 'PV', 'DEF');
                        tipTab.attr("data-show", "isData");
                    }
                    if (_this.config.popDirect === 1) {
                        tipWrap.css("left", "-273px").show();
                    } else if (_this.config.popDirect === 2) {
                        if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                            tipWrap.css("left", "-273px").show();
                        } else {
                            tipWrap.css("left", "24px").show();
                        }
                    }
                    setTimeout(function () {
                        tipWrap.hide();
                        _this.siderTab.find('.tabli').eq(0).removeClass("active");
                    }, _this.config.popTime * 1000);
                    hasCommon = true;
                }
                _this.eventCommon(_this.commonTab, item, i);
            });
            if (_this.config.hover === 1) {
                TTSUI(_this.elm).hover(function () {
                    var tabLi = _this.siderTab.find('.tabli').eq(0);
                    if (!tabLi.attr("data-show")) {
                        TTSUI.getJSON(api.kctu + 'adType=0,1,0&keyword=0,' + encodeURIComponent(keyWordData[0]) +
                            ',0&adSize=0,120,0&itemSize=0,4,0' +
                            '&tbId=&pid=' + MEDIA_config.id + '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                            '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                            '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                            if (data.tongyong[0]) {
                                var tongyong = {
                                    proList:data.tongyong
                                };
                                var pdUl = TTSUI.tmpl(_this.commonItemTmp, tongyong).appendTo(tabLi.find('.J_item_box'));
                                pdUl.click(function (e) {
                                    var index = TTSUI(this).parents(".J_item_box").find(this).index();
                                    //商品点击埋点
                                    if (!TTSUI(e.target).parents().is('.price')) {
                                        statistics(_this.imgObj.src, 'ADF', 'FGP1', 'CK', 'TA1PR' + (index + 1));
                                    }
                                });
                            }
                        });
                        statistics(_this.imgObj.src, 'ADF', 'FGP1', 'PV', 'TA1');
                        tabLi.attr("data-show", "isData");
                    }
                    statistics(_this.imgObj.src, 'ADT', 'TAGP1', 'TH', 'TA1');
                    tabLi.addClass('active');
                    if (_this.config.popDirect === 1) {
                        tabLi.find('.J_tip_wrap').css("left", "-273px").show();
                    } else if (_this.config.popDirect === 2) {
                        if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                            tabLi.find('.J_tip_wrap').css("left", "-273px").show();
                        } else {
                            tabLi.find('.J_tip_wrap').css("left", "24px").show();
                        }
                    }
                }, function () {
                    var tabLi = _this.siderTab.find('.tabli').eq(0);
                    tabLi.find('.J_tip_wrap').hide();
                    tabLi.removeClass('active');
                });
            }
            _this.iniResizeCom(_this.siderTab);
        },
        /**
         * 浏览器改变大小
         */
        iniResizeCom:function (siderTab) {
            var _this = this;
            //TODO: 同样的代码为何有两份？
            TTSUI(window).resize(function () {
                //var offset = TTSUI(_this.elm).offset();
                var offset = getOffset(_this.elm);
                var sidebarY = offset.top + 20,
                    sidebarX = TTSUI(_this.elm).width() + offset.left;
                siderTab.css({
                    "left":sidebarX,
                    "top":sidebarY
                });
            });
            TTSUI(window).scroll(function () {
                //var offset = TTSUI(_this.elm).offset();
                var offset = getOffset(_this.elm);
                var sidebarY = offset.top + 20,
                    sidebarX = TTSUI(_this.elm).width() + offset.left;
                siderTab.css({
                    "left":sidebarX,
                    "top":sidebarY
                });
            });
        },
        /**
         * 添加通用广告事件
         * 策略：用户在鼠标移至标签时请求广告系统
         * @param commonTab 对应标签对象
         * @param tabKey 请求广告系统的关键字
         * @param num 图片对应的index
         */
        eventCommon:function (commonTab, tabKey, num) {
            var _this = this;
            commonTab.hover(function () {
                var thisTab = TTSUI(this);
                if (!commonTab.attr("data-show")) {
                    TTSUI.getJSON(api.kctu + 'adType=0,1,0&keyword=0,' + encodeURIComponent(tabKey) +
                        ',0&adSize=0,120,0&itemSize=0,4,0' +
                        '&tbId=&pid=' + MEDIA_config.id + '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                        '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                        '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                        if (data.tongyong[0]) {
                            var tongyong = {
                                proList:data.tongyong
                            };
                            var pdUl = TTSUI.tmpl(_this.commonItemTmp, tongyong).appendTo(commonTab.find('.J_item_box'));
                            pdUl.click(function (e) {
                                var index = TTSUI(this).parents(".J_item_box").find(this).index();
                                //商品点击埋点
                                if (!TTSUI(e.target).parents().is('.price')) {
                                    statistics(_this.imgObj.src, 'ADF', 'FGP1', 'CK', 'TA' + (num + 1) + 'PR' + (index + 1));
                                }
                            });
                        }
                    });
                    //标签触发埋点
                    statistics(_this.imgObj.src, 'ADF', 'FGP1', 'PV', 'TA' + (num + 1));
                    commonTab.attr("data-show", "isData");
                }
                statistics(_this.imgObj.src, 'ADT', 'TAGP1', 'TH', 'TA' + (num + 1));
                if (_this.config.popDirect === 1) {
                    thisTab.find('.J_tip_wrap').css("left", "-273px").show();
                } else if (_this.config.popDirect === 2) {
                    if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                        thisTab.find('.J_tip_wrap').css("left", "-273px").show();
                    } else {
                        thisTab.find('.J_tip_wrap').css("left", "24px").show();
                    }
                }
                thisTab.addClass('active');
            }, function () {
                var thisTab = TTSUI(this);
                thisTab.find('.J_tip_wrap').hide();
                thisTab.removeClass('active');
            });
            commonTab.click(function (e) {
                if (TTSUI(e.target).hasClass("alink")) {
                    statistics(_this.imgObj.src, 'ADT', 'TAGP1', 'CK', 'TA' + (num + 1));
                }
                if (TTSUI(e.target).hasClass('close')) {
                    TTSUI(this).find('.J_tip_wrap').hide();
                }
            });
        },
        /**
         * 获取通用广告模板
         * @param tmpType 模板类型
         */
        getCommonTmpl:function (tmpType) {
            var _this = this;
            //TODO: 只有一个条件，switch 改 if
            switch (tmpType) {
                case 1:
                    _this.commonTabTmp = '<li class="tabli"><span class="t_bg"></span>' +
                        '<a title="热卖${tabName}" target="_blank" class="alink" href="${href}" hidefocus="true">热卖${tabName}</a>' +
                        '<span class="b_bg"></span><div class="J_tip_wrap tts_tip_wrap"><div class="tip_up "></div>' +
                        '<a class="close" href="javascript:;" title="关闭"></a><h3 class="h3">热卖${tabName}</h3>' +
                        '<div class="tts_load_wrap"><ul class="J_item_box pd"></ul></div></div></li>';
                    _this.commonItemTmp = '{{each proList}}<li><div class="img"><a href="${href}" title="${title}" target="_blank">' +
                        '<img height="120" alt="${title}" title="${title}" src="${media}"></a></div>' +
                        '<div class="price"><span>${price}</span></div></li>{{/each}}';
                    break;
            }
        },
        /**
         * 请求相似广告
         */
        getSim:function (data) {
            var _this = this;
            if (_this.config.adStyle === 1) {
                statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'SP1');
                statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'ALL');
            } else if (_this.config.adStyle === 2) {
                statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'SP2');
                statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'ALL');
            }
            var simWrap = document.createElement("div");
            simWrap.className = "J_sim_box sim_box";
            //先预留位置，再填充数据
            var sidebarY = _this.elmOffset.top + 20,
                sidebarX = TTSUI(_this.elm).width() + _this.elmOffset.left;
            _this.getSimTmpl(_this.config.adStyle);
            _this.siderTab = TTSUI('<ul class="J_sidertab tts_sidertab"></ul>');
            TTSUI(simWrap).append(_this.siderTab).appendTo(mediaBox);
            _this.siderTab.css({
                "left":sidebarX, "top":sidebarY
            });
            //请求接口信息
            /**
             * http://show.kc.taotaosou.com/tumeiti.do?adType=1,0,0&keyword=%E8%BF%9E%E8%A1%A3%E8%A3%99,%E8%BF%9E%E8%A1%A3%E8%A3%99,0&adSize=120*120,120*120,0&itemSize=3,3,0&tbId=19137903717&pid=12&siteCid=50&domain=taobao&isCps=true&cpsTbName=&tb_cps_outcode=&expId=ttktopbanner&cookieId=&jsonp=?
             * &tbId=19137903717&pid=12&siteCid=50&domain=taobao&isCps=true&cpsTbName=&tb_cps_outcode=&expId=ttktopbanner&cookieId=&jsonp=?
             */
            var scale = 1;
            TTSUI(data.lstImageOffer).each(function (i, item) {
                //框图宽高
                var markerWidth = parseInt(item.coordinateInfo.split(',')[2], 10),
                    markerHeight = parseInt(item.coordinateInfo.split(',')[3], 10),
                //框图x坐标
                    markerX = parseInt(item.coordinateInfo.split(',')[0], 10) + _this.elmOffset.left + parseInt(markerWidth / 2 - 17, 10),
                //框图y坐标
                    markerY = parseInt(item.coordinateInfo.split(',')[1], 10) + _this.elmOffset.top + parseInt(markerHeight / 2 - 17, 10);
                //var wrapX = (_this.elmOffset.left + TTSUI(_this.elm).width()) < (markerX + markerWidth + 235) ? '-272' : '32';
                var wrapX;
                if (_this.config.popDirect === 1) {
                    wrapX = '-272';
                } else if (_this.config.popDirect === 2) {
                    if (TTSUI(document).width() - markerX < 300) {
                        wrapX = '-272';
                    } else {
                        wrapX = '32';
                    }
                }

                if (data.imgWidth) {
                    if (TTSUI(_this.elm).width() < data.imgWidth) {
                        scale = TTSUI(_this.elm).width() / data.imgWidth;
                        markerX = parseInt(item.coordinateInfo.split(',')[0] * scale, 10) + _this.elmOffset.left + parseInt(markerWidth * scale / 2 - 17, 10);
                        markerY = parseInt(item.coordinateInfo.split(',')[1] * scale, 10) + _this.elmOffset.top + parseInt(markerHeight * scale / 2 - 17, 10);
                    }
                }
                var tabData = {
                    markerX:markerX,
                    markerY:markerY,
                    wrapX:wrapX,
                    p4pKey:item.p4pKey,
                    categroryId:item.id,
                    url:"http://www.taotaosou.com/itemlike.html?tbId=" + item.productItemId +
                        "&utm_source=ttsMedia" + MEDIA_config.id +
                        "&utm_medium=ttk" +
                        "&utm_campaign=itemlike" +
                        "&utm_nooverride=0" +
                        "&title=" + encodeURIComponent(item.productTitle) +
                        "&imgUrl=" + item.productPicUrl +
                        "&price=" + item.productPrice +
                        "&from=ttsMedia" + MEDIA_config.id +
                        "&outer_code=" + MEDIA_config.id,
                    name:item.tabName + item.categroryName,
                    proPicUrl:item.productPicUrl + mediaSize,
                    proTitle:item.productTitle
                };
                _this.simTab = TTSUI.tmpl(_this.simTabTmp, tabData).appendTo(_this.siderTab).data("simInfo", {id:item.productItemId, keys:item.p4pKey});
                if (_this.config.adStyle === 1) {
                    statistics(_this.imgObj.src, 'ADT', 'TASP1', 'PV', 'TA' + (i + 1));
                    statistics(_this.imgObj.src, 'ADP', 'POSP1', 'PV', 'PO' + (i + 1));
                    //点信息容器
                    _this.markerBox = TTSUI('<div class="J_marker_box tts_marker_box" categroryId="' + item.id + '"></div>').data("simInfo", {id:item.productItemId, keys:item.p4pKey});
                    _this.markerTip = TTSUI.tmpl(_this.simMarkerTmp, tabData).appendTo(_this.markerBox);
                    _this.markerBox.css({
                        "left":markerX,
                        "top":markerY
                    }).appendTo(simWrap);
                } else if (_this.config.adStyle === 2) {
                    statistics(_this.imgObj.src, 'ADT', 'TASP2', 'PV', 'TA' + (i + 1));
                    _this.simWrapTip = TTSUI.tmpl(_this.simWrapTmp, tabData).appendTo(_this.simTab);
                }
                _this.eventSim(i, item);
            });

            if (_this.config.adStyle === 2) {
                if (_this.config.hover === 1) {
                    var itemListOffer = data.lstImageOffer;
                    var ddItemList = {
                        proList:[
                            {
                                price:itemListOffer[0].productPrice,
                                media:itemListOffer[0].productPicUrl + mediaSize,
                                title:itemListOffer[0].productTitle,
                                //TODO: 各参数加上空值
                                href:"http://www.taotaosou.com/itemlike.html?tbId=" + itemListOffer[0].productItemId +
                                    "&utm_source=ttsMedia" + MEDIA_config.id +
                                    "&utm_medium=ttk" +
                                    "&utm_campaign=itemlike" +
                                    "&utm_nooverride=0" +
                                    "&title=" + encodeURIComponent(itemListOffer[0].productTitle) +
                                    "&imgUrl=" + itemListOffer[0].productPicUrl +
                                    "&price=" + itemListOffer[0].productPrice +
                                    "&from=ttsMedia" + MEDIA_config.id +
                                    "&outer_code=" + MEDIA_config.id
                            }
                        ]
                    };
                    TTSUI(_this.elm).hover(function () {
                        var hoverTab = _this.siderTab.find('.tabli').eq(0);
                        if (!hoverTab.attr("data-show")) {
                            TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(hoverTab.data("simInfo").keys) +
                                ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                                '&tbId=' + hoverTab.data("simInfo").id + '&pid=' + MEDIA_config.id +
                                '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                                '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                                '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                                if (_this.config.adStyle === 2) {
                                    //插入打点的商品信息 1
                                    if (data.dadian[0]) {
                                        ddItemList.proList[0].href = data.dadian[0].href;
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(hoverTab.find('.J_item_box'));
                                    } else {
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(hoverTab.find('.J_item_box'));
                                    }
                                    //广告相似商品信息 3
                                    if (data.xiangsi[0]) {
                                        var xsItemList = {
                                            proList:data.xiangsi
                                        };
                                        TTSUI.tmpl(_this.simItemTmp, xsItemList).appendTo(hoverTab.find('.J_item_box'));
                                    }
                                }
                                return false;
                            });
                            statistics(_this.imgObj.src, 'ADF', 'FSP2', 'PV', 'TA1');
                            hoverTab.attr("data-show", "isData");
                        }
                        statistics(_this.imgObj.src, 'ADT', 'TASP2', 'TH', 'TA1');
                        if (_this.config.popDirect === 1) {
                            hoverTab.find('.J_tip_wrap').css("left", "-273px").show();
                            hoverTab.addClass('active');
                        } else if (_this.config.popDirect === 2) {
                            if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                                hoverTab.find('.J_tip_wrap').css("left", "-273px").show();
                            } else {
                                hoverTab.find('.J_tip_wrap').css("left", "24px").show();
                            }
                            hoverTab.addClass('active');
                        }
                    }, function () {
                        var hoverTab = _this.siderTab.find('.tabli').eq(0);
                        hoverTab.find('.J_tip_wrap').hide();
                        hoverTab.removeClass('active');
                    });
                }
            }
            _this.iniResizeSim(data);
        },
        /**
         * 显示广告
         * @param data
         */
        //TODO: 缺少参数说明
        iniResizeSim:function (data) {
            var _this = this,
                scale;
            TTSUI(window).resize(function () {
                //var offset = TTSUI(_this.elm).offset(),
                var offset = getOffset(_this.elm),
                    elmWidth = TTSUI(_this.elm).width();
                var sidebarY = offset.top + 20,
                    sidebarX = elmWidth + offset.left;
                _this.siderTab.css({
                    "left":sidebarX, "top":sidebarY
                });
                var reMarker = _this.siderTab.parents('.J_sim_box');
                TTSUI(data.lstImageOffer).each(function (i, item) {
                    var markerWidth = parseInt(item.coordinateInfo.split(',')[2], 10),
                        markerHeight = parseInt(item.coordinateInfo.split(',')[3], 10),
                    //框图x坐标
                        markerX = parseInt(item.coordinateInfo.split(',')[0], 10) + offset.left + parseInt(markerWidth / 2 - 17, 10),
                    //框图y坐标
                        markerY = parseInt(item.coordinateInfo.split(',')[1], 10) + offset.top + parseInt(markerHeight / 2 - 17, 10),
                        categroryId = item.id;
                    if (data.imgWidth) {
                        if (elmWidth < data.imgWidth) {
                            scale = elmWidth / data.imgWidth;
                            markerX = parseInt(item.coordinateInfo.split(',')[0] * scale, 10) + offset.left + parseInt(markerWidth * scale / 2 - 17, 10);
                            markerY = parseInt(item.coordinateInfo.split(',')[1] * scale, 10) + offset.top + parseInt(markerHeight * scale / 2 - 17, 10);
                        }
                    }
                    reMarker.find("[categroryId=" + categroryId + "]").css({
                        "left":markerX,
                        "top":markerY
                    });
                });
            });
            TTSUI(window).scroll(function () {
                //var offset = TTSUI(_this.elm).offset(),
                var offset = getOffset(_this.elm),
                    elmWidth = TTSUI(_this.elm).width();
                var sidebarY = offset.top + 20,
                    sidebarX = elmWidth + offset.left;
                _this.siderTab.css({
                    "left":sidebarX, "top":sidebarY
                });
                var reMarker = _this.siderTab.parents('.J_sim_box');
                TTSUI(data.lstImageOffer).each(function (i, item) {
                    var markerWidth = parseInt(item.coordinateInfo.split(',')[2], 10),
                        markerHeight = parseInt(item.coordinateInfo.split(',')[3], 10),
                    //框图x坐标
                        markerX = parseInt(item.coordinateInfo.split(',')[0], 10) + offset.left + parseInt(markerWidth / 2 - 17, 10),
                    //框图y坐标
                        markerY = parseInt(item.coordinateInfo.split(',')[1], 10) + offset.top + parseInt(markerHeight / 2 - 17, 10),
                        categroryId = item.id;
                    if (data.imgWidth) {
                        if (elmWidth < data.imgWidth) {
                            scale = elmWidth / data.imgWidth;
                            markerX = parseInt(item.coordinateInfo.split(',')[0] * scale, 10) + offset.left + parseInt(markerWidth * scale / 2 - 17, 10);
                            markerY = parseInt(item.coordinateInfo.split(',')[1] * scale, 10) + offset.top + parseInt(markerHeight * scale / 2 - 17, 10);
                        }
                    }
                    reMarker.find("[categroryId=" + categroryId + "]").css({
                        "left":markerX,
                        "top":markerY
                    });
                });
            });
        },
        /**
         * 相似广告点添加事件
         * @param num 图片对应的index值
         * @param item 打点信息
         */
        eventSim:function (num, item) {
            var _this = this;
            var ddItemList = {
                proList:[
                    {
                        price:item.productPrice,
                        media:item.productPicUrl + mediaSize,
                        title:item.productTitle,
                        href:"http://www.taotaosou.com/itemlike.html?tbId=" + item.productItemId +
                            "&utm_source=ttsMedia" + MEDIA_config.id +
                            "&utm_medium=ttk" +
                            "&utm_campaign=itemlike" +
                            "&utm_nooverride=0" +
                            "&title=" + encodeURIComponent(item.productTitle) +
                            "&imgUrl=" + item.productPicUrl +
                            "&price=" + item.productPrice +
                            "&from=ttsMedia" + MEDIA_config.id +
                            "&outer_code=" + MEDIA_config.id
                    }
                ]
            };
            if (_this.config.adStyle === 1) {
                _this.simTab.hover(function () {
                    var tabLi = TTSUI(this),
                        categroryId = tabLi.attr("categroryId"),
                        index = tabLi.parents('.J_sidertab').find('.tabli').index(this);
                    if (!tabLi.attr("data-show")) {
                        if (!TTSUI("[categroryId=" + categroryId + "]").attr("data-show")) {
                            TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(tabLi.data("simInfo").keys) +
                                ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                                '&tbId=' + tabLi.data("simInfo").id + '&pid=' + MEDIA_config.id +
                                '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                                '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                                '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                                if (_this.config.adStyle === 1) {
                                    //插入打点的商品信息 1
                                    if (data.dadian[0]) {
                                        ddItemList.proList[0].href = data.dadian[0].href;
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    } else {
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    }
                                    //广告相似商品信息 3
                                    if (data.xiangsi[0]) {
                                        var xSItemList = {
                                            proList:data.xiangsi
                                        };
                                        TTSUI.tmpl(_this.simItemTmp, xSItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    }
                                }
                                return false;
                            });
                        }
                        //浮层展示pv
                        statistics(_this.imgObj.src, 'ADF', 'FSP1', 'PV', 'TA' + (index + 1));
                        tabLi.attr("data-show", "isData");
                    }
                    //浮层触发th
                    statistics(_this.imgObj.src, 'ADT', 'TASP1', 'TH', 'TA' + (index + 1));
                    TTSUI(".J_marker_box").hide();
                    TTSUI("[categroryId=" + categroryId + "]").show().children(".J_tip_wrap").show();
                    TTSUI("[categroryId=" + categroryId + "]").find('.J_tip_d').addClass('active');
                }, function () {
                    var categroryId = TTSUI(this).attr("categroryId");
                    if (_this.config.markerShow === 2) {
                        TTSUI(".J_marker_box").hide();
                    } else {
                        TTSUI(".J_marker_box").show();
                    }
                    TTSUI("[categroryId=" + categroryId + "]").find('.J_tip_d').removeClass('active');
                    TTSUI(".J_tip_wrap").hide();
                });
                _this.markerBox.hover(function () {
                    var markerBox = TTSUI(this),
                        categroryId = markerBox.attr("categroryId"),
                        index = TTSUI(this).parents('.J_sim_box').find('.J_marker_box').index(this);
                    if (!markerBox.attr("data-show")) {
                        if (!TTSUI("[categroryId=" + categroryId + "]").attr("data-show")) {
                            TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(markerBox.data("simInfo").keys) +
                                ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                                '&tbId=' + markerBox.data("simInfo").id + '&pid=' + MEDIA_config.id +
                                '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                                '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                                '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                                if (_this.config.adStyle === 1) {
                                    //插入打点的商品信息 1
                                    if (data.dadian[0]) {
                                        ddItemList.proList[0].href = data.dadian[0].href;
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    } else {
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    }
                                    //广告相似商品信息 3
                                    if (data.xiangsi[0]) {
                                        var xSItemList = {
                                            proList:data.xiangsi
                                        };
                                        TTSUI.tmpl(_this.simItemTmp, xSItemList).appendTo(TTSUI("[categroryId=" + categroryId + "]").find('.J_item_box'));
                                    }
                                }
                                return false;
                            });
                        }
                        //商品点展示pv
                        statistics(_this.imgObj.src, 'ADF', 'FSP1', 'PV', 'PO' + (index + 1));
                        TTSUI("[categroryId=" + categroryId + "]").attr("data-show", "isData");
                    }
                    //商品点触发th
                    statistics(_this.imgObj.src, 'ADP', 'POSP1', 'TH', 'PO' + (index + 1));
                    TTSUI("[categroryId=" + categroryId + "]").addClass('active');
                    markerBox.find('.J_tip_d').addClass('active');
                    TTSUI(".J_marker_box").hide();
                    markerBox.show().children(".J_tip_wrap").show();
                }, function () {
                    var markerBox = TTSUI(this),
                        categroryId = TTSUI(this).attr("categroryId");
                    TTSUI("[categroryId=" + categroryId + "]").removeClass('active');
                    markerBox.find('.J_tip_d').removeClass('active');
                    TTSUI(".J_marker_box").show();
                    markerBox.children(".J_tip_wrap").hide();
                });
                _this.simTab.click(function (e) {
                    var thisTab = TTSUI(this),
                        index = thisTab.parents('.J_sidertab').find('.tabli').index(this);
                    if (TTSUI(e.target).hasClass("alink")) {
                        statistics(_this.imgObj.src, 'ADT', 'TASP1', 'CK', 'TA' + (index + 1));
                    }
                });
                _this.markerBox.click(function (e) {
                    var index = TTSUI(this).parents('.J_sim_box').find('.J_marker_box').index(this);
                    if (TTSUI(e.target).parents().is('.J_tip_d')) {
                        statistics(_this.imgObj.src, 'ADP', 'POSP1', 'CK', 'PO' + (index + 1));
                    }
                    if (TTSUI(e.target).parents().is('.J_item_box')) {
                        if (!TTSUI(e.target).parents().is('.price')) {
                            var indexPo = TTSUI(e.target).parents('.pd').find('li').index(TTSUI(e.target).parents('li'));
                            statistics(_this.imgObj.src, 'ADF', 'FSP1', 'CK', 'TA' + (index + 1) + 'PR' + (indexPo + 1));
                        }
                    }
                    if (TTSUI(e.target).hasClass('close')) {
                        TTSUI(this).find('.J_tip_wrap').hide();
                    }
                });
                //第一个点默认展示
                if (_this.config.popTime > 0 && !hasSim) {
                    var categroryid = _this.simTab.attr("categroryId");
                    TTSUI('.J_marker_box').hide();
                    if (!TTSUI("[categroryId=" + categroryid + "]").attr("data-show")) {
                        TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(item.p4pKey) +
                            ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                            '&tbId=' + item.productItemId + '&pid=' + MEDIA_config.id +
                            '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                            '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                            '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                            if (_this.config.adStyle === 1) {
                                //插入打点的商品信息 1
                                if (data.dadian[0]) {
                                    ddItemList.proList[0].href = data.dadian[0].href;
                                    TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryid + "]").find('.J_item_box'));
                                } else {
                                    TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(TTSUI("[categroryId=" + categroryid + "]").find('.J_item_box'));
                                }
                                //广告相似商品信息 3
                                if (data.xiangsi[0]) {
                                    var xSItemList = {
                                        proList:data.xiangsi
                                    };
                                    TTSUI.tmpl(_this.simItemTmp, xSItemList).appendTo(TTSUI("[categroryId=" + categroryid + "]").find('.J_item_box'));
                                }
                            }
                            return false;
                        });
                        TTSUI("[categroryId=" + categroryid + "]").attr("data-show", "isData");
                    }
                    _this.markerBox.css("zIndex", "405548810").show().children(".J_tip_wrap").show();
                    _this.markerBox.find('.J_tip_d').addClass('active');
                    _this.simTab.addClass('active');
                    setTimeout(function () {
                        TTSUI('.J_tip_wrap').hide();
                        TTSUI("[categroryId=" + categroryid + "]").removeClass('active');
                        TTSUI("[categroryId=" + categroryid + "]").find('.J_tip_d').removeClass('active');
                        statistics(_this.imgObj.src, 'ADF', 'FSP1', 'PV', 'DEF');
                        statistics(_this.imgObj.src, 'ADP', 'POSP1', 'PV', 'DEF');

                    }, _this.config.popTime * 1000);
                    hasSim = true;
                }
                if (_this.config.popTime > 0 && _this.config.markerShow === 2) {
                    //var popTime = _this.config.popTime;
                    //商品点闪现
                    setTimeout(function () {
                        TTSUI('.J_marker_box').hide();
                    }, _this.config.popTime * 1000);
                }
                //图片触发商品点
                if (_this.config.markerShow === 2) {
                    TTSUI(_this.elm).hover(function () {
                        TTSUI('.J_marker_box').show();
                        TTSUI('.J_tip_wrap').hide();
                    }, function () {
                        TTSUI('.J_marker_box').hide();
                        TTSUI('.J_tip_wrap').hide();
                    });
                }
            } else if (_this.config.adStyle === 2) {
                _this.simTab.hover(function () {
                    var thisTab = TTSUI(this),
                        index = thisTab.parents('.J_sidertab').find('.tabli').index(this);
                    if (_this.config.popDirect === 1) {
                        thisTab.find('.J_tip_wrap').css("left", "-273px").show();
                    } else if (_this.config.popDirect === 2) {
                        if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                            thisTab.find('.J_tip_wrap').css("left", "-273px").show();
                        } else {
                            thisTab.find('.J_tip_wrap').css("left", "24px").show();
                        }
                    }
                    thisTab.addClass('active');
                    if (!thisTab.attr("data-show")) {
                        //浮层展示pv
                        TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(thisTab.data("simInfo").keys) +
                            ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                            '&tbId=' + thisTab.data("simInfo").id + '&pid=' + MEDIA_config.id +
                            '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                            '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                            '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                            if (_this.config.adStyle === 2) {
                                //插入打点的商品信息 1
                                if (data.dadian[0]) {
                                    ddItemList.proList[0].href = data.dadian[0].href;
                                    TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(thisTab.find('.J_item_box'));
                                } else {
                                    TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(thisTab.find('.J_item_box'));
                                }
                                //广告相似商品信息 3
                                if (data.xiangsi[0]) {
                                    var xsItemList = {
                                        proList:data.xiangsi
                                    };
                                    TTSUI.tmpl(_this.simItemTmp, xsItemList).appendTo(thisTab.find('.J_item_box'));
                                }
                            }
                            return false;
                        });
                        statistics(_this.imgObj.src, 'ADF', 'FSP2', 'PV', 'TA' + (index + 1));
                        thisTab.attr("data-show", "isData");
                    }
                    //浮层触发th
                    statistics(_this.imgObj.src, 'ADT', 'TASP2', 'TH', 'TA' + (index + 1));
                }, function () {
                    var thisTab = TTSUI(this);
                    thisTab.find('.J_tip_wrap').hide();
                    thisTab.removeClass('active');
                });
                _this.simTab.click(function (e) {
                    var thisTab = TTSUI(this),
                        index = thisTab.parents('.J_sidertab').find('.tabli').index(this);
                    if (TTSUI(e.target).hasClass("alink")) {
                        statistics(_this.imgObj.src, 'ADT', 'TASP2', 'CK', 'TA' + (index + 1));
                    }
                    if (TTSUI(e.target).parents().is('.img')) {
                        var indexPro = TTSUI(e.target).parents('.J_item_box').find('li').index(TTSUI(e.target).parents('li'));
                        statistics(_this.imgObj.src, 'ADF', 'FSP1', 'CK', 'TA' + (index + 1) + 'PR' + (indexPro + 1));
                    }
                    if (TTSUI(e.target).hasClass('close')) {
                        TTSUI(this).find('.J_tip_wrap').hide();
                    }
                });
                if (_this.config.popTime > 0) {
                    var hoverTab = _this.siderTab.find('.tabli').eq(0);
                    if (!hasSim) {
                        if (!hoverTab.attr("data-show")) {
                            TTSUI.getJSON(api.kctu + 'adType=1,0,0&keyword=' + encodeURIComponent(hoverTab.data("simInfo").keys) +
                                ',0,0&adSize=120,0,0&itemSize=3,0,0' +
                                '&tbId=' + hoverTab.data("simInfo").id + '&pid=' + MEDIA_config.id +
                                '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                                '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                                '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                                if (_this.config.adStyle === 2) {
                                    //插入打点的商品信息 1
                                    if (data.dadian[0]) {
                                        ddItemList.proList[0].href = data.dadian[0].href;
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(hoverTab.find('.J_item_box'));
                                    } else {
                                        TTSUI.tmpl(_this.simItemTmp, ddItemList).appendTo(hoverTab.find('.J_item_box'));
                                    }
                                    //广告相似商品信息 3
                                    if (data.xiangsi[0]) {
                                        var xsItemList = {
                                            proList:data.xiangsi
                                        };
                                        TTSUI.tmpl(_this.simItemTmp, xsItemList).appendTo(hoverTab.find('.J_item_box'));
                                    }
                                }
                                return false;
                            });
                            hoverTab.attr("data-show", "isData");
                        }
                        if (_this.config.popDirect === 1) {
                            hoverTab.find('.J_tip_wrap').css("left", "-273px").show();
                        } else if (_this.config.popDirect === 2) {
                            if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 300) {
                                hoverTab.find('.J_tip_wrap').css("left", "-273px").show();
                            } else {
                                hoverTab.find('.J_tip_wrap').css("left", "24px").show();
                            }
                        }
                        hoverTab.addClass('active');
                        setTimeout(function () {
                            hoverTab.find('.J_tip_wrap').hide();
                            hoverTab.removeClass('active');
                            statistics(_this.imgObj.src, 'ADF', 'FSP2', 'PV', 'DEF');
                            statistics(_this.imgObj.src, 'ADP', 'POSP2', 'PV', 'DEF');
                        }, _this.config.popTime * 1000);
                        hasSim = true;
                    }
                }
            }
        },
        getSimTmpl:function (tmpType) {
            var _this = this;
            //TODO: 只有一个条件，switch 改 if
            switch (tmpType) {
                case 1:
                    _this.simTmp = '<ul class="J_sidertab tts_sidertab"></ul>';
                    break;
            }
            _this.simTabTmp = '<li class="tabli" data-key="${p4pKey}" categroryId="${categroryId}"><span class="t_bg"></span>' +
                '<a target="_blank" title="${name}" class="alink J_sidertab_link" href="${url}" hidefocus="true">${name}</a>' +
                '<span class="b_bg"></span></li>';
            _this.simMarkerTmp = '<div class="J_tip_d tts_marker"><a target="_blank" href="${url}"></a></div>' +
                '<div class="J_tip_wrap tts_tip_wrap" style="left:${wrapX}px;"><div class="tip_up"></div>' +
                '<a class="close" href="javascript:;" title="关闭"></a><h3 class="h3">${name}</h3>' +
                '<div class="tts_load_wrap"><ul class="J_item_box pd"></ul></div></div>';
            _this.simItemTmp = '{{each proList}}<li><div class="img"><a href="${href}" title="${title}" target="_blank">' +
                '<img height="120" alt="${title}" title="${title}" src="${media}"></a></div>' +
                '<div class="price"><span>${price}</span></div></li>{{/each}}';
            _this.simWrapTmp = '<div class="J_tip_wrap tts_tip_wrap"><div class="tip_up"></div>' +
                '<a class="close" href="javascript:;" title="关闭"></a><h3 class="h3">${name}</h3>' +
                '<div class="tts_load_wrap"><ul class="J_item_box pd"></ul></div></div>';
        },
        /**
         * 请求品牌广告
         */
        getBrand:function () {
            var _this = this;
            //品牌广告容器
            var brandWrap = document.createElement("div");
            brandWrap.className = "J_brand_box brand_box";
            _this.brandObj = TTSUI(brandWrap);
            //请求接口信息
            TTSUI.getJSON(api.kctu + 'adType=0,0,1,1&keyword=0,0,0,0&adSize=0,0,300*60,300*220&itemSize=0,0,1,1' +
                '&tbId=&pid=' + MEDIA_config.id + '&siteCid=' + MEDIA_config.keyType + '&domain=' + host +
                '&isCps=true&cpsTbName=ttsunion&tb_cps_outcode=' + MEDIA_config.id +
                '&expId=ttsMedia' + MEDIA_config.id + '&jsonp=?', function (data) {
                if (_this.config.adStyle === 1) {
                    if (data.pinpai[0]) {
                        //console.log('展示 brand  广告');
                        //console.log('展示 brand 广告 all');
                        statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'BR1');
                        statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'ALL');
                        _this.showBrand(data.pinpai[0]);
                    }
                } else if (_this.config.adStyle === 2) {
                    if (data.jiaohu[0]) {
                        statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'IMGBART300220');
                        statistics(_this.imgObj.src, 'IMG', '0', 'PV', 'ALL');
                        statistics(_this.elm.src, 'IMGBART300220', 'TA', 'PV', '0');
                        _this.showJhbrand(data.jiaohu[0]);
                    }
                }
                return false;
            });
        },
        /**
         * 展示品牌广告
         * @param data 广告系统的返回数据
         */
        showBrand:function (data) {
            var _this = this;
            var offset = getOffset(_this.elm);
            //品牌广告模板1
            _this.getBrandTmpl(_this.config.adStyle);
            TTSUI.tmpl(_this.brandTmp, data).appendTo(_this.brandObj);
            var bannerY = offset.top + TTSUI(_this.elm).height() - _this.config.bannerHeight,
                bannerX = TTSUI(_this.elm).width() / 2 - _this.config.bannerWidth / 2 + offset.left;
            _this.brandObj.css({
                "left":bannerX,
                "top":bannerY
            }).appendTo(mediaBox);
            _this.eventBrand();
        },
        /**
         * 添加广告事件，图框交互
         * @param brandObj 广告节点对象
         */
        //TODO: 这里有参数传进来吗？？
        eventBrand:function () {
            //是否隐藏
            var _this = this,
                elm = this.elm;
            if (_this.config.hover === 1) {
                if (_this.config.popTime > 0 && !hasBrand) {
                    //var popTime = _this.config.popTime;
                    if (!_this.brandObj.attr("data-show")) {
                        //第一张默认展示埋点
                        //console.log('//第一张默认展示埋点');
                        statistics(_this.elm.src, 'ADF', 'FBR1', 'PV', 'DEF');
                    }
                    _this.brandObj.show().attr("data-show", "isData");
                    setTimeout(function () {
                        TTSUI('.J_brand_box').eq(0).hide();
                    }, _this.config.popTime * 1000);
                    hasBrand = true;
                }
                //图片触发广告
                TTSUI(elm).hover(function () {
                    if (!_this.brandObj.attr("data-show")) {
                        //console.log('图片触发埋点brand');
                        statistics(_this.imgObj.src, 'ADF', 'FBR1', 'PV', 'IMG');
                    }
                    _this.brandObj.show().attr("data-show", "isData");
                }, function () {
                    _this.brandObj.hide();
                });
                //广告鼠标事件
                _this.brandObj.hover(function () {
                    TTSUI(this).show();
                }, function () {
                    TTSUI(this).hide();
                });
            } else if (_this.config.hover === 2) {  //广告一直展示
                _this.brandObj.show();
                //console.log('brand 全部默认展示');
                _this.brandObj.attr("data-show", "isData");
                statistics(_this.imgObj.src, 'ADF', 'FBR1', 'PV', 'DEF');
            }
            //T 图媒体显示
            TTSUI('.pin_media_t').mouseenter(function () {
                TTSUI('.pin_media').show();
                TTSUI('.pin_media_t').hide();
            });
            TTSUI('.pin_media').mouseleave(function () {
                TTSUI('.pin_media').hide();
                TTSUI('.pin_media_t').show();
            });
            _this.brandObj.click(function () {
                //console.log('brand 点击埋点');
                statistics(_this.imgObj, 'ADF', 'FBR1', 'CK', 'BA1');
            });
            TTSUI('.pin_brand_close').click(function () {
                TTSUI(this).parents('.J_brand_box').remove();
                //关闭 埋点
                //console.log('brand 关闭=========');
                statistics(_this.imgObj.src, 'ADF', 'FBR1', 'CK', 'CLO');
            });
            _this.iniResize();
        },
        /**
         * 浏览器改变大小
         */
        iniResize:function () {
            var _this = this;
            //TODO: 同样的代码为何有两份？
            TTSUI(window).resize(function () {
                //var offset = TTSUI(_this.elm).offset();
                var offset = getOffset(_this.elm);
                var bannerY = offset.top + TTSUI(_this.elm).height() - _this.config.bannerHeight,
                    bannerX = TTSUI(_this.elm).width() / 2 - _this.config.bannerWidth / 2 + offset.left;
                _this.brandObj.css({
                    "left":bannerX,
                    "top":bannerY
                });
            });
            TTSUI(window).scroll(function () {
                //var offset = TTSUI(_this.elm).offset();
                var offset = getOffset(_this.elm);
                var bannerY = offset.top + TTSUI(_this.elm).height() - _this.config.bannerHeight,
                    bannerX = TTSUI(_this.elm).width() / 2 - _this.config.bannerWidth / 2 + offset.left;
                _this.brandObj.css({
                    "left":bannerX,
                    "top":bannerY
                });
            });
        },
        /**
         * 根据配置信息取广告模板
         */
        getBrandTmpl:function (tmpType) {
            var _this = this;
            switch (tmpType) {
                case 1:
                    _this.brandTmp = '<div class="pin_brand"><div class="pin_brand_bg"></div><div class="pin_brand_con"><div class="pin_brand_img">' +
                        '<a href="${href}" target="_blank" title="${title}"><img src="${media}" height="60" width="300" alt=""></a></div>' +
                        '<a class="pin_brand_close" href="javascript:;" title="关闭"></a><a href="#" class="pin_media">图媒体</a>' +
                        '<a href="#" class="pin_media_t"></a></div></div>';
                    _this.config.bannerHeight = 66;
                    _this.config.bannerWidth = 306;
                    break;
                case 2:
                    _this.brandTAtmpl = '<div class="brand_alink"><img src="${image}" height="195" width="25" alt="">' +
                        '<a href="${href}" class="TA_alink" target="_blank" title="${title}"></a></div>';
                    _this.brandTAswftmpl = '<div class="brand_alink"><object width="25" height="195" align="middle">' +
                        '<param name="allowScriptAccess" value="never"><param name="quality" value="high">' +
                        '<param name="wmode" value="transparent">' +
                        '<param name="movie" value="${image}">' +
                        '<embed wmode="transparent" src="${image}"' +
                        'quality="high" width="25" height="195" align="middle" allowscriptaccess="never" type="application/x-shockwave-flash"></object>' +
                        '<a href="${href}" class="TA_alink" target="_blank" title="${title}"></a></div>';
                    _this.brandADtmpl = '<div class="J_tip_wrap brand_tip_wrap">' +
                        '<img src="${media}" height="220" width="300" alt="">' +
                        '<a href="${href}" class="AD_alink" target="_blank" title="${title}"></a></div>';
                    _this.brandADswftmpl = '<div class="J_tip_wrap brand_tip_wrap"><object width="300" height="220" align="middle">' +
                        '<param name="allowScriptAccess" value="never"><param name="quality" value="high">' +
                        '<param name="wmode" value="transparent">' +
                        '<param name="movie" value="${media}">' +
                        '<embed wmode="transparent" src="${media}"' +
                        'quality="high" width="300" height="220" align="middle" allowscriptaccess="never" type="application/x-shockwave-flash"></object>' +
                        '<a href="${href}" class="AD_alink" target="_blank" title="${title}"></a>' +
                        '</div>';
                    _this.brandTmp = '<div class="brand_alink"><img src="${image}" height="195" width="25" alt="">' +
                        '<a href="${href}" class="TA_alink" target="_blank" title="${title}"></a></div>' +
                        '<div class="J_tip_wrap brand_tip_wrap">' +
                        '<img src="${media}" height="220" width="300" alt="">' +
                        '<a href="${href}" class="AD_alink" target="_blank" title="${title}"></a></div>';
                    _this.brandSwfTmp = '<div class="brand_alink"><object width="25" height="195" align="middle">' +
                        '<param name="allowScriptAccess" value="never"><param name="quality" value="high">' +
                        '<param name="wmode" value="transparent">' +
                        '<param name="movie" value="${image}">' +
                        '<embed wmode="transparent" src="${image}" ' +
                        'quality="high" width="25" height="195" align="middle" allowscriptaccess="never" type="application/x-shockwave-flash"></object>' +
                        '<a href="${href}" class="TA_alink" target="_blank" title="${title}"></a></div>' +
                        '<div class="J_tip_wrap brand_tip_wrap"><object width="300" height="220" align="middle">' +
                        '<param name="allowScriptAccess" value="never"><param name="quality" value="high">' +
                        '<param name="wmode" value="transparent">' +
                        '<param name="movie" value="${media}">' +
                        '<embed wmode="transparent" src="${media}"' +
                        'quality="high" width="300" height="220" align="middle" allowscriptaccess="never" type="application/x-shockwave-flash"></object>' +
                        '<a href="${href}" class="AD_alink" target="_blank" title="${title}"></a>' +
                        '</div>';
                    break;
                default :
                    break;
            }
        },
        showJhbrand:function (data) {
            var _this = this;
            var sidebarY = _this.elmOffset.top + 20,
                sidebarX = TTSUI(_this.elm).width() + _this.elmOffset.left;
            //品牌广告模板2
            _this.getBrandTmpl(_this.config.adStyle);
            _this.brandTab = TTSUI('<div class="J_tabli"></div>');
            //区分 图片还是flash
            if (data.image.match(/^.+\.swf$/i)) {
                TTSUI.tmpl(_this.brandTAswftmpl, data).appendTo(_this.brandTab);
            } else {
                TTSUI.tmpl(_this.brandTAtmpl, data).appendTo(_this.brandTab);
            }
            if (data.media.match(/^.+\.swf$/i)) {
                TTSUI.tmpl(_this.brandADswftmpl, data).appendTo(_this.brandTab);
            } else {
                TTSUI.tmpl(_this.brandADtmpl, data).appendTo(_this.brandTab);
            }
            _this.brandTab.appendTo(_this.brandObj);
            _this.brandObj.css({
                "left":sidebarX,
                "top":sidebarY
            }).appendTo(mediaBox);
            if (_this.config.closed === 2) {
                _this.brandClose = TTSUI('<a href="javascript:;" title="关闭" class="brand_close J_close"></a>').appendTo(_this.brandObj);
                statistics(_this.elm.src, 'IMGBART300220', 'CLO', 'PV', '0');
                _this.brandClose.click(function () {
                    TTSUI(this).parent().remove();
                    statistics(_this.elm.src, 'IMGBART300220', 'CLO', 'CK', '0');
                });
            }
            _this.eventJhbrand();
        },
        eventJhbrand:function () {
            var _this = this;
            var showBrand = function () {
                if (_this.config.popDirect === 1) {
                    _this.brandTab.find('.J_tip_wrap').css("left", "-300px").show();
                } else if (_this.config.popDirect === 2) {
                    if (TTSUI(document).width() - TTSUI(_this.elm).width() - _this.elmOffset.left < 335) {
                        _this.brandTab.find('.J_tip_wrap').css("left", "-300px").show();
                    } else {
                        _this.brandTab.find('.J_tip_wrap').css("left", "25px").show();
                    }
                }
            };
            _this.brandTab.hover(function () {
                showBrand();
                if (!_this.brandTab.attr("data-show")) {
                    //console.log('图片触发埋点brand');
                    statistics(_this.imgObj.src, 'IMGBART300220', 'AD', 'PV', '0');
                }
                statistics(_this.imgObj.src, 'IMGBART300220', 'TA', 'TH', '0');
                _this.brandTab.show().attr("data-show", "isData");
            }, function () {
                _this.brandTab.find('.J_tip_wrap').hide();
            });
            _this.brandTab.click(function (e) {
                if (TTSUI(e.target).hasClass("TA_alink")) {
                    statistics(_this.imgObj.src, 'IMGBART300220', 'TA', 'CK', '0');
                }
                if (TTSUI(e.target).hasClass('AD_alink')) {
                    statistics(_this.imgObj.src, 'IMGBART300220', 'AD', 'CK', '0');
                }
            });
            if (_this.config.hover === 1) {
                if (_this.config.popTime > 0 && !hasBrand) {
                    //var popTime = _this.config.popTime;
                    if (!_this.brandTab.attr("data-show")) {
                        //第一张默认展示埋点
                        //console.log('//第一张默认展示埋点');
                        statistics(_this.elm.src, 'IMGBART300220', 'AD', 'PV', '0');
                    }
                    showBrand();
                    _this.brandTab.attr("data-show", "isData");
                    setTimeout(function () {
                        TTSUI('.J_tip_wrap').eq(0).hide();
                    }, _this.config.popTime * 1000);
                    hasBrand = true;
                }
                //图片触发广告
                TTSUI(_this.elm).hover(function () {
                    if (!_this.brandTab.attr("data-show")) {
                        //console.log('图片触发埋点brand');
                        statistics(_this.imgObj.src, 'IMGBART300220', 'AD', 'PV', '0');
                    }
                    showBrand();
                    _this.brandTab.attr("data-show", "isData");
                }, function () {
                    _this.brandTab.find('.J_tip_wrap').hide();
                });
            }
            _this.iniResizeCom(_this.brandObj);
        }
    };

    init_media();
})(window.TTSUI);
