"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{5806:function(a,b,c){c.d(b,{OK:function(){return E},td:function(){return F},nP:function(){return H},mQ:function(){return D}});var d=c(7294),e=c(187),f=c(5235),g=c(4520),h=c(2446);function i(a){let b=a.target,{tagName:c,isContentEditable:d}=b;return"INPUT"!==c&&"TEXTAREA"!==c&& !0!==d}function j(a){return a.sort((a,b)=>{let c=a.compareDocumentPosition(b);if(c&Node.DOCUMENT_POSITION_FOLLOWING||c&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(c&Node.DOCUMENT_POSITION_PRECEDING||c&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(c&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(c&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var k=a=>"object"==typeof a&&"nodeType"in a&&a.nodeType===Node.ELEMENT_NODE;function l(a,b,c){let d=a+1;return c&&d>=b&&(d=0),d}function m(a,b,c){let d=a-1;return c&&d<0&&(d=b),d}var n="undefined"!=typeof window?d.useLayoutEffect:d.useEffect,o=a=>a,p=class{descendants=new Map;register=a=>{if(null!=a)return k(a)?this.registerNode(a):b=>{this.registerNode(b,a)}};unregister=a=>{this.descendants.delete(a);let b=j(Array.from(this.descendants.keys()));this.assignIndex(b)};destroy=()=>{this.descendants.clear()};assignIndex=a=>{this.descendants.forEach(b=>{let c=a.indexOf(b.node);b.index=c,b.node.dataset.index=b.index.toString()})};count=()=>this.descendants.size;enabledCount=()=>this.enabledValues().length;values=()=>{let a=Array.from(this.descendants.values());return a.sort((a,b)=>a.index-b.index)};enabledValues=()=>this.values().filter(a=>!a.disabled);item=a=>{if(0!==this.count())return this.values()[a]};enabledItem=a=>{if(0!==this.enabledCount())return this.enabledValues()[a]};first=()=>this.item(0);firstEnabled=()=>this.enabledItem(0);last=()=>this.item(this.descendants.size-1);lastEnabled=()=>{let a=this.enabledValues().length-1;return this.enabledItem(a)};indexOf=a=>{var b;return a?(null==(b=this.descendants.get(a))?void 0:b.index)?? -1:-1};enabledIndexOf=a=>null==a?-1:this.enabledValues().findIndex(b=>b.node.isSameNode(a));next=(a,b=!0)=>{let c=l(a,this.count(),b);return this.item(c)};nextEnabled=(a,b=!0)=>{let c=this.item(a);if(!c)return;let d=this.enabledIndexOf(c.node),e=l(d,this.enabledCount(),b);return this.enabledItem(e)};prev=(a,b=!0)=>{let c=m(a,this.count()-1,b);return this.item(c)};prevEnabled=(a,b=!0)=>{let c=this.item(a);if(!c)return;let d=this.enabledIndexOf(c.node),e=m(d,this.enabledCount()-1,b);return this.enabledItem(e)};registerNode=(a,b)=>{if(!a||this.descendants.has(a))return;let c=Array.from(this.descendants.keys()).concat(a),d=j(c);(null==b?void 0:b.disabled)&&(b.disabled=!!b.disabled);let e={node:a,index:-1,...b};this.descendants.set(a,e),this.assignIndex(d)}},[q,r]=(0,e.kr)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),s=c(9653),[t,u,v,w]=function(){let a=o(q),b=()=>o(r()),c=a=>(function(a){let b=r(),[c,f]=(0,d.useState)(-1),g=(0,d.useRef)(null);n(()=>()=>{g.current&&b.unregister(g.current)},[]),n(()=>{if(!g.current)return;let a=Number(g.current.dataset.index);c==a||Number.isNaN(a)||f(a)});let h=a?o(b.register(a)):o(b.register);return{descendants:b,index:c,enabledIndex:b.enabledIndexOf(g.current),register:(0,e.lq)(h,g)}})(a),f=()=>(function(){let a=(0,d.useRef)(new p);return n(()=>()=>a.current.destroy()),a.current})();return[a,b,f,c]}(),[x,y]=(0,e.kr)({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function z(a,b){return`${a}--tab-${b}`}function A(a,b){return`${a}--tabpanel-${b}`}var[B,C]=(0,e.kr)({name:"TabsStylesContext",errorMessage:"useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tabs />\" "}),D=(0,f.Gp)(function(a,b){let c=(0,f.jC)("Tabs",a),{children:e,className:i,...j}=(0,g.Lr)(a),{htmlProps:k,descendants:l,...m}=function(a){let{defaultIndex:b,onChange:c,index:e,isManual:f,isLazy:g,lazyBehavior:h="unmount",orientation:i="horizontal",direction:j="ltr",...k}=a,[l,m]=(0,d.useState)(b??0),[n,o]=(0,s.Tx)({defaultValue:b??0,value:e,onChange:c});(0,d.useEffect)(()=>{null!=e&&m(e)},[e]);let p=v(),q=(0,s.Me)(a.id,"tabs");return{id:q,selectedIndex:n,focusedIndex:l,setSelectedIndex:o,setFocusedIndex:m,isManual:f,isLazy:g,lazyBehavior:h,orientation:i,descendants:p,direction:j,htmlProps:k}}(j),n=(0,d.useMemo)(()=>m,[m]),o=(0,h.CE)(k,["isFitted"]);return d.createElement(t,{value:l},d.createElement(x,{value:n},d.createElement(B,{value:c},d.createElement(f.m$.div,{className:(0,h.cx)("chakra-tabs",i),ref:b,...o,__css:c.root},e))))});h.Ts&&(D.displayName="Tabs");var E=(0,f.Gp)(function(a,b){let c=C(),g=function(a){let{isDisabled:b,isFocusable:c,...f}=a,{setSelectedIndex:g,isManual:j,id:k,setFocusedIndex:l,selectedIndex:m}=y(),{index:n,register:o}=w({disabled:b&&!c}),p=n===m,q=()=>{g(n)},r=()=>{l(n),j||b&&c||g(n)},s=function(a={}){let{ref:b,isDisabled:c,isFocusable:f,clickOnEnter:g=!0,clickOnSpace:j=!0,onMouseDown:k,onMouseUp:l,onClick:m,onKeyDown:n,onKeyUp:o,tabIndex:p,onMouseOver:q,onMouseLeave:r,...s}=a,[t,u]=(0,d.useState)(!0),[v,w]=(0,d.useState)(!1),x=function(){let a=(0,d.useRef)(new Map),b=a.current,c=(0,d.useCallback)((b,c,d,e)=>{a.current.set(d,{type:c,el:b,options:e}),b.addEventListener(c,d,e)},[]),e=(0,d.useCallback)((b,c,d,e)=>{b.removeEventListener(c,d,e),a.current.delete(d)},[]);return(0,d.useEffect)(()=>()=>{b.forEach((a,b)=>{e(a.el,a.type,b,a.options)})},[e,b]),{add:c,remove:e}}(),y=a=>{a&&"BUTTON"!==a.tagName&&u(!1)},z=c&&!f,A=(0,d.useCallback)(a=>{if(c){a.stopPropagation(),a.preventDefault();return}let b=a.currentTarget;b.focus(),null==m||m(a)},[c,m]),B=(0,d.useCallback)(a=>{v&&i(a)&&(a.preventDefault(),a.stopPropagation(),w(!1),x.remove(document,"keyup",B,!1))},[v,x]),C=(0,d.useCallback)(a=>{if(null==n||n(a),c||a.defaultPrevented||a.metaKey||!i(a.nativeEvent)||t)return;let b=g&&"Enter"===a.key,d=j&&" "===a.key;if(d&&(a.preventDefault(),w(!0)),b){a.preventDefault();let e=a.currentTarget;e.click()}x.add(document,"keyup",B,!1)},[c,t,n,g,j,x,B]),D=(0,d.useCallback)(a=>{if(null==o||o(a),c||a.defaultPrevented||a.metaKey||!i(a.nativeEvent)||t)return;let b=j&&" "===a.key;if(b){a.preventDefault(),w(!1);let d=a.currentTarget;d.click()}},[j,t,c,o]),E=(0,d.useCallback)(a=>{0===a.button&&(w(!1),x.remove(document,"mouseup",E,!1))},[x]),F=(0,d.useCallback)(a=>{if((0,h.n_)(a))return;if(c){a.stopPropagation(),a.preventDefault();return}t||w(!0);let b=a.currentTarget;b.focus({preventScroll:!0}),x.add(document,"mouseup",E,!1),null==k||k(a)},[c,t,k,x,E]),G=(0,d.useCallback)(a=>{(0,h.n_)(a)||(t||w(!1),null==l||l(a))},[l,t]),H=(0,d.useCallback)(a=>{if(c){a.preventDefault();return}null==q||q(a)},[c,q]),I=(0,d.useCallback)(a=>{v&&(a.preventDefault(),w(!1)),null==r||r(a)},[v,r]),J=(0,e.lq)(b,y);return t?{...s,ref:J,type:"button","aria-disabled":z?void 0:c,disabled:z,onClick:A,onMouseDown:k,onMouseUp:l,onKeyUp:o,onKeyDown:n,onMouseOver:q,onMouseLeave:r}:{...s,ref:J,role:"button","data-active":(0,h.PB)(v),"aria-disabled":c?"true":void 0,tabIndex:z?void 0:t?p:p||0,onClick:A,onMouseDown:F,onMouseUp:G,onKeyUp:D,onKeyDown:C,onMouseOver:H,onMouseLeave:I}}({...f,ref:(0,e.lq)(o,a.ref),isDisabled:b,isFocusable:c,onClick:(0,h.v0)(a.onClick,q)});return{...s,id:z(k,n),role:"tab",tabIndex:p?0:-1,type:"button","aria-selected":p,"aria-controls":A(k,n),onFocus:b?void 0:(0,h.v0)(a.onFocus,r)}}({...a,ref:b}),j={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...c.tab};return d.createElement(f.m$.button,{...g,className:(0,h.cx)("chakra-tabs__tab",a.className),__css:j})});h.Ts&&(E.displayName="Tab");var F=(0,f.Gp)(function(a,b){let c=function(a){let{focusedIndex:b,orientation:c,direction:e}=y(),f=u(),g=(0,d.useCallback)(a=>{let d=()=>{let a=f.nextEnabled(b);a&&(0,h.T_)(a.node)},g=()=>{let a=f.prevEnabled(b);a&&(0,h.T_)(a.node)},i=()=>{let a=f.firstEnabled();a&&(0,h.T_)(a.node)},j=()=>{let a=f.lastEnabled();a&&(0,h.T_)(a.node)},k="horizontal"===c,l="vertical"===c,m=(0,h.uh)(a),n={["ltr"===e?"ArrowLeft":"ArrowRight"]:()=>k&&g(),["ltr"===e?"ArrowRight":"ArrowLeft"]:()=>k&&d(),ArrowDown:()=>l&&d(),ArrowUp:()=>l&&g(),Home:i,End:j}[m];n&&(a.preventDefault(),n(a))},[f,b,c,e]);return{...a,role:"tablist","aria-orientation":c,onKeyDown:(0,h.v0)(a.onKeyDown,g)}}({...a,ref:b}),e=C(),g={display:"flex",...e.tablist};return d.createElement(f.m$.div,{...c,className:(0,h.cx)("chakra-tabs__tablist",a.className),__css:g})});h.Ts&&(F.displayName="TabList");var G=(0,f.Gp)(function(a,b){let c=function(a){let{isSelected:b,id:c,children:e,...f}=a,{isLazy:g,lazyBehavior:i}=y(),j=(0,d.useRef)(!1);b&&(j.current=!0);let k=(0,h.VI)({hasBeenSelected:j.current,isSelected:b,isLazy:g,lazyBehavior:i});return{tabIndex:0,...f,children:k?e:null,role:"tabpanel",hidden:!b,id:c}}({...a,ref:b}),e=C();return d.createElement(f.m$.div,{outline:"0",...c,className:(0,h.cx)("chakra-tabs__tab-panel",a.className),__css:e.tabpanel})});h.Ts&&(G.displayName="TabPanel");var H=(0,f.Gp)(function(a,b){let c=function(a){let b=y(),{id:c,selectedIndex:f}=b,g=(0,e.WR)(a.children),h=g.map((a,b)=>(0,d.cloneElement)(a,{isSelected:b===f,id:A(c,b),"aria-labelledby":z(c,b)}));return{...a,children:h}}(a),g=C();return d.createElement(f.m$.div,{...c,width:"100%",ref:b,className:(0,h.cx)("chakra-tabs__tab-panels",a.className),__css:g.tabpanels})});h.Ts&&(H.displayName="TabPanels");var I=(0,f.Gp)(function(a,b){let c=function(){let a=y(),b=u(),{selectedIndex:c,orientation:e}=a,f="horizontal"===e,g="vertical"===e,[i,j]=(0,d.useState)(()=>f?{left:0,width:0}:g?{top:0,height:0}:void 0),[k,l]=(0,d.useState)(!1);return(0,s.Gw)(()=>{if((0,h.o8)(c))return;let a=b.item(c);if((0,h.o8)(a))return;f&&j({left:a.node.offsetLeft,width:a.node.offsetWidth}),g&&j({top:a.node.offsetTop,height:a.node.offsetHeight});let d=requestAnimationFrame(()=>{l(!0)});return()=>{d&&cancelAnimationFrame(d)}},[c,f,g,b]),{position:"absolute",transitionProperty:"left, right, top, bottom, height, width",transitionDuration:k?"200ms":"0ms",transitionTimingFunction:"cubic-bezier(0, 0, 0.2, 1)",...i}}(),e={...a.style,...c},g=C();return d.createElement(f.m$.div,{ref:b,...a,className:(0,h.cx)("chakra-tabs__tab-indicator",a.className),style:e,__css:g.indicator})});h.Ts&&(I.displayName="TabIndicator")},9857:function(a,b,c){c.d(b,{"_k":function(){return r}});var d=c(7187),e=c(3653),f=function(a){function b(b){var c,d=(void 0===b?{}:b).supportedChainIds;return(c=a.call(this)||this).supportedChainIds=d,c}c=b,d=a,c.prototype=Object.create(d.prototype),c.prototype.constructor=c,c.__proto__=d;var c,d,f=b.prototype;return f.emitUpdate=function(a){this.emit(e._.Update,a)},f.emitError=function(a){this.emit(e._.Error,a)},f.emitDeactivate=function(){this.emit(e._.Deactivate)},b}(d.EventEmitter);function g(){return(g=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function h(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,a.__proto__=b}function i(a){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function j(a,b){return(j=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}function k(a,b,c){return(k=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(a){return!1}}()?function(a,b,c){var d=[null];d.push.apply(d,b);var e=new(Function.bind.apply(a,d));return c&&j(e,c.prototype),e}:Reflect.construct).apply(null,arguments)}function l(a){var b="function"==typeof Map?new Map:void 0;return(l=function(a){var c;if(null===a||(c=a,-1===Function.toString.call(c).indexOf("[native code]")))return a;if("function"!=typeof a)throw TypeError("Super expression must either be null or a function");if(void 0!==b){if(b.has(a))return b.get(a);b.set(a,d)}function d(){return k(a,arguments,i(this).constructor)}return d.prototype=Object.create(a.prototype,{constructor:{value:d,enumerable:!1,writable:!0,configurable:!0}}),j(d,a)})(a)}function m(a){if(void 0===a)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function n(a,b){try{var c=a()}catch(d){return b(d)}return c&&c.then?c.then(void 0,b):c}function o(a){return a.hasOwnProperty("result")?a.result:a}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var p=function(a){function b(){var b;return(b=a.call(this)||this).name=b.constructor.name,b.message="No Ethereum provider was found on window.ethereum.",b}return h(b,a),b}(l(Error)),q=function(a){function b(){var b;return(b=a.call(this)||this).name=b.constructor.name,b.message="The user rejected the request.",b}return h(b,a),b}(l(Error)),r=function(a){function b(b){var c;return(c=a.call(this,b)||this).handleNetworkChanged=c.handleNetworkChanged.bind(m(c)),c.handleChainChanged=c.handleChainChanged.bind(m(c)),c.handleAccountsChanged=c.handleAccountsChanged.bind(m(c)),c.handleClose=c.handleClose.bind(m(c)),c}h(b,a);var c=b.prototype;return c.handleChainChanged=function(a){this.emitUpdate({chainId:a,provider:window.ethereum})},c.handleAccountsChanged=function(a){0===a.length?this.emitDeactivate():this.emitUpdate({account:a[0]})},c.handleClose=function(a,b){this.emitDeactivate()},c.handleNetworkChanged=function(a){this.emitUpdate({chainId:a,provider:window.ethereum})},c.activate=function(){try{var a,b=function(b){if(c)return b;function d(){return g({provider:window.ethereum},a?{account:a}:{})}var e=function(){if(!a)return Promise.resolve(window.ethereum.enable().then(function(a){return a&&o(a)[0]})).then(function(b){a=b})}();return e&&e.then?e.then(d):d(e)},c=!1,d=this;if(!window.ethereum)throw new p;window.ethereum.on&&(window.ethereum.on("chainChanged",d.handleChainChanged),window.ethereum.on("accountsChanged",d.handleAccountsChanged),window.ethereum.on("close",d.handleClose),window.ethereum.on("networkChanged",d.handleNetworkChanged)),window.ethereum.isMetaMask&&(window.ethereum.autoRefreshOnNetworkChange=!1);var e=n(function(){return Promise.resolve(window.ethereum.send("eth_requestAccounts").then(function(a){return o(a)[0]})).then(function(b){a=b})},function(a){if(4001===a.code)throw new q});return Promise.resolve(e&&e.then?e.then(b):b(e))}catch(f){return Promise.reject(f)}},c.getProvider=function(){try{return Promise.resolve(window.ethereum)}catch(a){return Promise.reject(a)}},c.getChainId=function(){try{var a,b=function(){function b(){if(!a)try{a=o(window.ethereum.send({method:"net_version"}))}catch(b){}return a||(a=window.ethereum.isDapper?o(window.ethereum.cachedResults.net_version):window.ethereum.chainId||window.ethereum.netVersion||window.ethereum.networkVersion||window.ethereum._chainId),a}var c=function(){if(!a){var b=n(function(){return Promise.resolve(window.ethereum.send("net_version").then(o)).then(function(b){a=b})},function(){});if(b&&b.then)return b.then(function(){})}}();return c&&c.then?c.then(b):b(c)};if(!window.ethereum)throw new p;var c=n(function(){return Promise.resolve(window.ethereum.send("eth_chainId").then(o)).then(function(b){a=b})},function(){});return Promise.resolve(c&&c.then?c.then(b):b(c))}catch(d){return Promise.reject(d)}},c.getAccount=function(){try{var a,b=function(){function b(){return a||(a=o(window.ethereum.send({method:"eth_accounts"}))[0]),a}var c=function(){if(!a){var b=n(function(){return Promise.resolve(window.ethereum.enable().then(function(a){return o(a)[0]})).then(function(b){a=b})},function(){});if(b&&b.then)return b.then(function(){})}}();return c&&c.then?c.then(b):b(c)};if(!window.ethereum)throw new p;var c=n(function(){return Promise.resolve(window.ethereum.send("eth_accounts").then(function(a){return o(a)[0]})).then(function(b){a=b})},function(){});return Promise.resolve(c&&c.then?c.then(b):b(c))}catch(d){return Promise.reject(d)}},c.deactivate=function(){window.ethereum&&window.ethereum.removeListener&&(window.ethereum.removeListener("chainChanged",this.handleChainChanged),window.ethereum.removeListener("accountsChanged",this.handleAccountsChanged),window.ethereum.removeListener("close",this.handleClose),window.ethereum.removeListener("networkChanged",this.handleNetworkChanged))},c.isAuthorized=function(){try{if(!window.ethereum)return Promise.resolve(!1);return Promise.resolve(n(function(){return Promise.resolve(window.ethereum.send("eth_accounts").then(function(a){return o(a).length>0}))},function(){return!1}))}catch(a){return Promise.reject(a)}},b}(f)},7187:function(a){var b,c="object"==typeof Reflect?Reflect:null,d=c&&"function"==typeof c.apply?c.apply:function(a,b,c){return Function.prototype.apply.call(a,b,c)};b=c&&"function"==typeof c.ownKeys?c.ownKeys:Object.getOwnPropertySymbols?function(a){return Object.getOwnPropertyNames(a).concat(Object.getOwnPropertySymbols(a))}:function(a){return Object.getOwnPropertyNames(a)};var e=Number.isNaN||function(a){return a!=a};function f(){f.init.call(this)}a.exports=f,a.exports.once=function(a,b){return new Promise(function(c,d){function e(c){a.removeListener(b,f),d(c)}function f(){"function"==typeof a.removeListener&&a.removeListener("error",e),c([].slice.call(arguments))}r(a,b,f,{once:!0}),"error"!==b&&q(a,e,{once:!0})})},f.EventEmitter=f,f.prototype._events=void 0,f.prototype._eventsCount=0,f.prototype._maxListeners=void 0;var g=10;function h(a){if("function"!=typeof a)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof a)}function i(a){return void 0===a._maxListeners?f.defaultMaxListeners:a._maxListeners}function j(a,b,c,d){if(h(c),void 0===(f=a._events)?(f=a._events=Object.create(null),a._eventsCount=0):(void 0!==f.newListener&&(a.emit("newListener",b,c.listener?c.listener:c),f=a._events),g=f[b]),void 0===g)g=f[b]=c,++a._eventsCount;else if("function"==typeof g?g=f[b]=d?[c,g]:[g,c]:d?g.unshift(c):g.push(c),(e=i(a))>0&&g.length>e&&!g.warned){g.warned=!0;var e,f,g,j,k=Error("Possible EventEmitter memory leak detected. "+g.length+" "+String(b)+" listeners added. Use emitter.setMaxListeners() to increase limit");k.name="MaxListenersExceededWarning",k.emitter=a,k.type=b,k.count=g.length,j=k,console&&console.warn&&console.warn(j)}return a}function k(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(a,b,c){var d={fired:!1,wrapFn:void 0,target:a,type:b,listener:c},e=k.bind(d);return e.listener=c,d.wrapFn=e,e}function m(a,b,c){var d=a._events;if(void 0===d)return[];var e=d[b];return void 0===e?[]:"function"==typeof e?c?[e.listener||e]:[e]:c?p(e):o(e,e.length)}function n(a){var b=this._events;if(void 0!==b){var c=b[a];if("function"==typeof c)return 1;if(void 0!==c)return c.length}return 0}function o(a,b){for(var c=Array(b),d=0;d<b;++d)c[d]=a[d];return c}function p(a){for(var b=Array(a.length),c=0;c<b.length;++c)b[c]=a[c].listener||a[c];return b}function q(a,b,c){"function"==typeof a.on&&r(a,"error",b,c)}function r(a,b,c,d){if("function"==typeof a.on)d.once?a.once(b,c):a.on(b,c);else if("function"==typeof a.addEventListener)a.addEventListener(b,function e(f){d.once&&a.removeEventListener(b,e),c(f)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof a)}Object.defineProperty(f,"defaultMaxListeners",{enumerable:!0,get:function(){return g},set:function(a){if("number"!=typeof a||a<0||e(a))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+a+".");g=a}}),f.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},f.prototype.setMaxListeners=function(a){if("number"!=typeof a||a<0||e(a))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+a+".");return this._maxListeners=a,this},f.prototype.getMaxListeners=function(){return i(this)},f.prototype.emit=function(a){for(var b=[],c=1;c<arguments.length;c++)b.push(arguments[c]);var e="error"===a,f=this._events;if(void 0!==f)e=e&& void 0===f.error;else if(!e)return!1;if(e){if(b.length>0&&(g=b[0]),g instanceof Error)throw g;var g,h=Error("Unhandled error."+(g?" ("+g.message+")":""));throw h.context=g,h}var i=f[a];if(void 0===i)return!1;if("function"==typeof i)d(i,this,b);else for(var j=i.length,k=o(i,j),c=0;c<j;++c)d(k[c],this,b);return!0},f.prototype.addListener=function(a,b){return j(this,a,b,!1)},f.prototype.on=f.prototype.addListener,f.prototype.prependListener=function(a,b){return j(this,a,b,!0)},f.prototype.once=function(a,b){return h(b),this.on(a,l(this,a,b)),this},f.prototype.prependOnceListener=function(a,b){return h(b),this.prependListener(a,l(this,a,b)),this},f.prototype.removeListener=function(a,b){var c,d,e,f,g;if(h(b),void 0===(d=this._events)|| void 0===(c=d[a]))return this;if(c===b||c.listener===b)0== --this._eventsCount?this._events=Object.create(null):(delete d[a],d.removeListener&&this.emit("removeListener",a,c.listener||b));else if("function"!=typeof c){for(e=-1,f=c.length-1;f>=0;f--)if(c[f]===b||c[f].listener===b){g=c[f].listener,e=f;break}if(e<0)return this;0===e?c.shift():function a(b,c){for(;c+1<b.length;c++)b[c]=b[c+1];b.pop()}(c,e),1===c.length&&(d[a]=c[0]),void 0!==d.removeListener&&this.emit("removeListener",a,g||b)}return this},f.prototype.off=f.prototype.removeListener,f.prototype.removeAllListeners=function(a){var b,c,d;if(void 0===(c=this._events))return this;if(void 0===c.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==c[a]&&(0== --this._eventsCount?this._events=Object.create(null):delete c[a]),this;if(0===arguments.length){var e,f=Object.keys(c);for(d=0;d<f.length;++d)"removeListener"!==(e=f[d])&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(b=c[a]))this.removeListener(a,b);else if(void 0!==b)for(d=b.length-1;d>=0;d--)this.removeListener(a,b[d]);return this},f.prototype.listeners=function(a){return m(this,a,!0)},f.prototype.rawListeners=function(a){return m(this,a,!1)},f.listenerCount=function(a,b){return"function"==typeof a.listenerCount?a.listenerCount(b):n.call(a,b)},f.prototype.listenerCount=n,f.prototype.eventNames=function(){return this._eventsCount>0?b(this._events):[]}}}])