import{a as Ar,s as qr,n as Ur,c as ne,I as $r,E as Ut,f as ut,J as _t,H as Pr}from"./http-f223b343.js";import{p as $e,aM as Dr,aN as jr,aO as Hr,aP as Wr,aQ as Fr,aR as Br,aS as zr,aT as Qr,aU as Vr,aV as Jr,aW as Gr,aX as Yr,aY as Kr,aZ as Zr,a_ as Xr,a$ as eo,b0 as to,b1 as no,t as $t,b2 as ro}from"./index-64129661.js";var re,y,Pt,H,dt,Dt,Re,jt,X={},Ht=[],oo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,pe=Array.isArray;function A(t,e){for(var n in e)t[n]=e[n];return t}function Wt(t){var e=t.parentNode;e&&e.removeChild(t)}function M(t,e,n){var r,o,i,c={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:c[i]=e[i];if(arguments.length>2&&(c.children=arguments.length>3?re.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)c[i]===void 0&&(c[i]=t.defaultProps[i]);return K(t,c,r,o,null)}function K(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Pt,__i:-1,__u:0};return o==null&&y.vnode!=null&&y.vnode(i),i}function Ft(){return{current:null}}function L(t){return t.children}function N(t,e){this.props=t,this.context=e}function z(t,e){if(e==null)return t.__?z(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?z(t):null}function Bt(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Bt(t)}}function Te(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!de.__r++||dt!==y.debounceRendering)&&((dt=y.debounceRendering)||Dt)(de)}function de(){var t,e,n,r,o,i,c,l,d;for(H.sort(Re);t=H.shift();)t.__d&&(e=H.length,r=void 0,i=(o=(n=t).__v).__e,l=[],d=[],(c=n.__P)&&((r=A({},o)).__v=o.__v+1,y.vnode&&y.vnode(r),Pe(c,r,o,n.__n,c.ownerSVGElement!==void 0,32&o.__u?[i]:null,l,i??z(o),!!(32&o.__u),d),r.__.__k[r.__i]=r,Vt(l,r,d),r.__e!=i&&Bt(r)),H.length>e&&H.sort(Re));de.__r=0}function zt(t,e,n,r,o,i,c,l,d,_,m){var s,b,v,k,I,S=r&&r.__k||Ht,a=e.length;for(n.__d=d,io(n,e,S),d=n.__d,s=0;s<a;s++)(v=n.__k[s])!=null&&typeof v!="boolean"&&typeof v!="function"&&(b=v.__i===-1?X:S[v.__i]||X,v.__i=s,Pe(t,v,b,o,i,c,l,d,_,m),k=v.__e,v.ref&&b.ref!=v.ref&&(b.ref&&De(b.ref,null,v),m.push(v.ref,v.__c||k,v)),I==null&&k!=null&&(I=k),65536&v.__u||b.__k===v.__k?d=Qt(v,d,t):typeof v.type=="function"&&v.__d!==void 0?d=v.__d:k&&(d=k.nextSibling),v.__d=void 0,v.__u&=-196609);n.__d=d,n.__e=I}function io(t,e,n){var r,o,i,c,l,d=e.length,_=n.length,m=_,s=0;for(t.__k=[],r=0;r<d;r++)(o=t.__k[r]=(o=e[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?K(null,o,null,null,o):pe(o)?K(L,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?K(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=so(o,n,c=r+s,m),o.__i=l,i=null,l!==-1&&(m--,(i=n[l])&&(i.__u|=131072)),i==null||i.__v===null?(l==-1&&s--,typeof o.type!="function"&&(o.__u|=65536)):l!==c&&(l===c+1?s++:l>c?m>d-c?s+=l-c:s--:s=l<c&&l==c-1?l-c:0,l!==r+s&&(o.__u|=65536))):(i=n[r])&&i.key==null&&i.__e&&(i.__e==t.__d&&(t.__d=z(i)),Oe(i,i,!1),n[r]=null,m--);if(m)for(r=0;r<_;r++)(i=n[r])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=z(i)),Oe(i,i))}function Qt(t,e,n){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=Qt(r[o],e,n));return e}return t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e),e&&e.nextSibling}function q(t,e){return e=e||[],t==null||typeof t=="boolean"||(pe(t)?t.some(function(n){q(n,e)}):e.push(t)),e}function so(t,e,n,r){var o=t.key,i=t.type,c=n-1,l=n+1,d=e[n];if(d===null||d&&o==d.key&&i===d.type)return n;if(r>(d!=null&&!(131072&d.__u)?1:0))for(;c>=0||l<e.length;){if(c>=0){if((d=e[c])&&!(131072&d.__u)&&o==d.key&&i===d.type)return c;c--}if(l<e.length){if((d=e[l])&&!(131072&d.__u)&&o==d.key&&i===d.type)return l;l++}}return-1}function ft(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||oo.test(e)?n:n+"px"}function ce(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ft(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ft(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=Date.now(),t.addEventListener(e,i?pt:ht,i)):t.removeEventListener(e,i?pt:ht,i);else{if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function ht(t){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(y.event?y.event(t):t)}function pt(t){return this.l[t.type+!0](y.event?y.event(t):t)}function Pe(t,e,n,r,o,i,c,l,d,_){var m,s,b,v,k,I,S,a,u,h,f,g,E,w,R,x=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),i=[l=e.__e=n.__e]),(m=y.__b)&&m(e);e:if(typeof x=="function")try{if(a=e.props,u=(m=x.contextType)&&r[m.__c],h=m?u?u.props.value:m.__:r,n.__c?S=(s=e.__c=n.__c).__=s.__E:("prototype"in x&&x.prototype.render?e.__c=s=new x(a,h):(e.__c=s=new N(a,h),s.constructor=x,s.render=co),u&&u.sub(s),s.props=a,s.state||(s.state={}),s.context=h,s.__n=r,b=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),x.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=A({},s.__s)),A(s.__s,x.getDerivedStateFromProps(a,s.__s))),v=s.props,k=s.state,s.__v=e,b)x.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(x.getDerivedStateFromProps==null&&a!==v&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(a,h),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(a,s.__s,h)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(s.props=a,s.state=s.__s,s.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(O){O&&(O.__=e)}),f=0;f<s._sb.length;f++)s.__h.push(s._sb[f]);s._sb=[],s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(a,s.__s,h),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(v,k,I)})}if(s.context=h,s.props=a,s.__P=t,s.__e=!1,g=y.__r,E=0,"prototype"in x&&x.prototype.render){for(s.state=s.__s,s.__d=!1,g&&g(e),m=s.render(s.props,s.state,s.context),w=0;w<s._sb.length;w++)s.__h.push(s._sb[w]);s._sb=[]}else do s.__d=!1,g&&g(e),m=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++E<25);s.state=s.__s,s.getChildContext!=null&&(r=A(A({},r),s.getChildContext())),b||s.getSnapshotBeforeUpdate==null||(I=s.getSnapshotBeforeUpdate(v,k)),zt(t,pe(R=m!=null&&m.type===L&&m.key==null?m.props.children:m)?R:[R],e,n,r,o,i,c,l,d,_),s.base=e.__e,e.__u&=-161,s.__h.length&&c.push(s),S&&(s.__E=s.__=null)}catch(O){e.__v=null,d||i!=null?(e.__e=l,e.__u|=d?160:32,i[i.indexOf(l)]=null):(e.__e=n.__e,e.__k=n.__k),y.__e(O,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=ao(n.__e,e,n,r,o,i,c,d,_);(m=y.diffed)&&m(e)}function Vt(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)De(n[r],n[++r],n[++r]);y.__c&&y.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){y.__e(i,o.__v)}})}function ao(t,e,n,r,o,i,c,l,d){var _,m,s,b,v,k,I,S=n.props,a=e.props,u=e.type;if(u==="svg"&&(o=!0),i!=null){for(_=0;_<i.length;_++)if((v=i[_])&&"setAttribute"in v==!!u&&(u?v.localName===u:v.nodeType===3)){t=v,i[_]=null;break}}if(t==null){if(u===null)return document.createTextNode(a);t=o?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,a.is&&a),i=null,l=!1}if(u===null)S===a||l&&t.data===a||(t.data=a);else{if(i=i&&re.call(t.childNodes),S=n.props||X,!l&&i!=null)for(S={},_=0;_<t.attributes.length;_++)S[(v=t.attributes[_]).name]=v.value;for(_ in S)v=S[_],_=="children"||(_=="dangerouslySetInnerHTML"?s=v:_==="key"||_ in a||ce(t,_,null,v,o));for(_ in a)v=a[_],_=="children"?b=v:_=="dangerouslySetInnerHTML"?m=v:_=="value"?k=v:_=="checked"?I=v:_==="key"||l&&typeof v!="function"||S[_]===v||ce(t,_,v,S[_],o);if(m)l||s&&(m.__html===s.__html||m.__html===t.innerHTML)||(t.innerHTML=m.__html),e.__k=[];else if(s&&(t.innerHTML=""),zt(t,pe(b)?b:[b],e,n,r,o&&u!=="foreignObject",i,c,i?i[0]:n.__k&&z(n,0),l,d),i!=null)for(_=i.length;_--;)i[_]!=null&&Wt(i[_]);l||(_="value",k!==void 0&&(k!==t[_]||u==="progress"&&!k||u==="option"&&k!==S[_])&&ce(t,_,k,S[_],!1),_="checked",I!==void 0&&I!==t[_]&&ce(t,_,I,S[_],!1))}return t}function De(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){y.__e(r,n)}}function Oe(t,e,n){var r,o;if(y.unmount&&y.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||De(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){y.__e(i,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Oe(r[o],e,n||typeof t.type!="function");n||t.__e==null||Wt(t.__e),t.__=t.__e=t.__d=void 0}function co(t,e,n){return this.constructor(t,n)}function ee(t,e,n){var r,o,i,c;y.__&&y.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],c=[],Pe(e,t=(!r&&n||e).__k=M(L,null,[t]),o||X,X,e.ownerSVGElement!==void 0,!r&&n?[n]:o?null:e.firstChild?re.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r,c),Vt(i,t,c)}function Jt(t,e){ee(t,e,Jt)}function lo(t,e,n){var r,o,i,c,l=A({},t.props);for(i in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)i=="key"?r=e[i]:i=="ref"?o=e[i]:l[i]=e[i]===void 0&&c!==void 0?c[i]:e[i];return arguments.length>2&&(l.children=arguments.length>3?re.call(arguments,2):n),K(t.type,l,r||t.key,o||t.ref,null)}function Gt(t,e){var n={__c:e="__cC"+jt++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(l){l.__e=!0,Te(l)})},this.sub=function(c){o.push(c);var l=c.componentWillUnmount;c.componentWillUnmount=function(){o.splice(o.indexOf(c),1),l&&l.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}re=Ht.slice,y={__e:function(t,e,n,r){for(var o,i,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),c=o.__d),c)return o.__E=o}catch(l){t=l}throw t}},Pt=0,N.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=A({},this.state),typeof t=="function"&&(t=t(A({},n),this.props)),t&&A(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Te(this))},N.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Te(this))},N.prototype.render=L,H=[],Dt=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Re=function(t,e){return t.__v.__b-e.__v.__b},de.__r=0,jt=0;var U,C,Ce,mt,Q=0,Yt=[],le=[],gt=y.__b,vt=y.__r,yt=y.diffed,wt=y.__c,bt=y.unmount;function W(t,e){y.__h&&y.__h(C,t,Q||e),Q=0;var n=C.__H||(C.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:le}),n.__[t]}function me(t){return Q=1,je(rn,t)}function je(t,e,n){var r=W(U++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):rn(void 0,e),function(l){var d=r.__N?r.__N[0]:r.__[0],_=r.t(d,l);d!==_&&(r.__N=[_,r.__[1]],r.__c.setState({}))}],r.__c=C,!C.u)){var o=function(l,d,_){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(b){return b.__c});if(m.every(function(b){return!b.__N}))return!i||i.call(this,l,d,_);var s=!1;return m.forEach(function(b){if(b.__N){var v=b.__[0];b.__=b.__N,b.__N=void 0,v!==b.__[0]&&(s=!0)}}),!(!s&&r.__c.props===l)&&(!i||i.call(this,l,d,_))};C.u=!0;var i=C.shouldComponentUpdate,c=C.componentWillUpdate;C.componentWillUpdate=function(l,d,_){if(this.__e){var m=i;i=void 0,o(l,d,_),i=m}c&&c.call(this,l,d,_)},C.shouldComponentUpdate=o}return r.__N||r.__}function He(t,e){var n=W(U++,3);!y.__s&&We(n.__H,e)&&(n.__=t,n.i=e,C.__H.__h.push(n))}function oe(t,e){var n=W(U++,4);!y.__s&&We(n.__H,e)&&(n.__=t,n.i=e,C.__h.push(n))}function Kt(t){return Q=5,ge(function(){return{current:t}},[])}function Zt(t,e,n){Q=6,oe(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function ge(t,e){var n=W(U++,7);return We(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function Xt(t,e){return Q=8,ge(function(){return t},e)}function en(t){var e=C.context[t.__c],n=W(U++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(C)),e.props.value):t.__}function tn(t,e){y.useDebugValue&&y.useDebugValue(e?e(t):t)}function uo(t){var e=W(U++,10),n=me();return e.__=t,C.componentDidCatch||(C.componentDidCatch=function(r,o){e.__&&e.__(r,o),n[1](r)}),[n[0],function(){n[1](void 0)}]}function nn(){var t=W(U++,11);if(!t.__){for(var e=C.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function _o(){for(var t;t=Yt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(ue),t.__H.__h.forEach(Ne),t.__H.__h=[]}catch(e){t.__H.__h=[],y.__e(e,t.__v)}}y.__b=function(t){C=null,gt&&gt(t)},y.__r=function(t){vt&&vt(t),U=0;var e=(C=t.__c).__H;e&&(Ce===C?(e.__h=[],C.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=le,n.__N=n.i=void 0})):(e.__h.forEach(ue),e.__h.forEach(Ne),e.__h=[],U=0)),Ce=C},y.diffed=function(t){yt&&yt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Yt.push(e)!==1&&mt===y.requestAnimationFrame||((mt=y.requestAnimationFrame)||fo)(_o)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==le&&(n.__=n.__V),n.i=void 0,n.__V=le})),Ce=C=null},y.__c=function(t,e){e.some(function(n){try{n.__h.forEach(ue),n.__h=n.__h.filter(function(r){return!r.__||Ne(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],y.__e(r,n.__v)}}),wt&&wt(t,e)},y.unmount=function(t){bt&&bt(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{ue(r)}catch(o){e=o}}),n.__H=void 0,e&&y.__e(e,n.__v))};var Et=typeof requestAnimationFrame=="function";function fo(t){var e,n=function(){clearTimeout(r),Et&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Et&&(e=requestAnimationFrame(n))}function ue(t){var e=C,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),C=e}function Ne(t){var e=C;t.__c=t.__(),C=e}function We(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function rn(t,e){return typeof e=="function"?e(t):e}const Se="Session currently connected",j="Session currently disconnected",ho="Session Rejected",po="Missing JSON RPC response",mo='JSON-RPC success response must include "result" field',go='JSON-RPC error response must include "error" field',vo='JSON RPC request must have valid "method" value',yo='JSON RPC request must have valid "id" value',wo="Missing one of the required parameters: bridge / uri / session",kt="JSON RPC response format is invalid",bo="URI format is invalid",Eo="QRCode Modal not provided",Ct="User close QRCode Modal",ko=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],Co=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],Fe=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...Co],Me="WALLETCONNECT_DEEPLINK_CHOICE",So={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var on=Be;Be.strict=sn;Be.loose=an;var xo=Object.prototype.toString,Io={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function Be(t){return sn(t)||an(t)}function sn(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function an(t){return Io[xo.call(t)]}const Ro=$e(on);var To=on.strict,Oo=function(e){if(To(e)){var n=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Buffer.from(e)};const No=$e(Oo),ze="hex",Qe="utf8",Mo="binary",Lo="buffer",Ao="array",qo="typed-array",Uo="array-buffer",ve="0";function V(t){return new Uint8Array(t)}function Ve(t,e=!1){const n=t.toString(ze);return e?ie(n):n}function Je(t){return t.toString(Qe)}function cn(t){return t.readUIntBE(0,t.length)}function G(t){return No(t)}function $(t,e=!1){return Ve(G(t),e)}function ln(t){return Je(G(t))}function un(t){return cn(G(t))}function Ge(t){return Buffer.from(J(t),ze)}function P(t){return V(Ge(t))}function $o(t){return Je(Ge(t))}function Po(t){return un(P(t))}function Ye(t){return Buffer.from(t,Qe)}function _n(t){return V(Ye(t))}function Do(t,e=!1){return Ve(Ye(t),e)}function jo(t){const e=parseInt(t,10);return oi(ri(e),"Number can only safely store up to 53 bits"),e}function Ho(t){return zo(Ke(t))}function Wo(t){return Ze(Ke(t))}function Fo(t,e){return Qo(Ke(t),e)}function Bo(t){return`${t}`}function Ke(t){const e=(t>>>0).toString(2);return et(e)}function zo(t){return G(Ze(t))}function Ze(t){return new Uint8Array(Zo(t).map(e=>parseInt(e,2)))}function Qo(t,e){return $(Ze(t),e)}function Vo(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function dn(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function ye(t){return Buffer.isBuffer(t)}function Xe(t){return Ro.strict(t)&&!ye(t)}function fn(t){return!Xe(t)&&!ye(t)&&typeof t.byteLength<"u"}function Jo(t){return ye(t)?Lo:Xe(t)?qo:fn(t)?Uo:Array.isArray(t)?Ao:typeof t}function Go(t){return Vo(t)?Mo:dn(t)?ze:Qe}function Yo(...t){return Buffer.concat(t)}function hn(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function Ko(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function Zo(t,e=8){const n=et(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function et(t,e=8,n=ve){return Xo(t,Ko(t.length,e),n)}function Xo(t,e,n=ve){return ii(t,e,!0,n)}function J(t){return t.replace(/^0x/,"")}function ie(t){return t.startsWith("0x")?t:`0x${t}`}function ei(t){return t=J(t),t=et(t,2),t&&(t=ie(t)),t}function ti(t){const e=t.startsWith("0x");return t=J(t),t=t.startsWith(ve)?t.substring(1):t,e?ie(t):t}function ni(t){return typeof t>"u"}function ri(t){return!ni(t)}function oi(t,e){if(!t)throw new Error(e)}function ii(t,e,n,r=ve){const o=e-t.length;let i=t;if(o>0){const c=r.repeat(o);i=n?c+t:t+c}return i}function fe(t){return G(new Uint8Array(t))}function si(t){return ln(new Uint8Array(t))}function pn(t,e){return $(new Uint8Array(t),!e)}function ai(t){return un(new Uint8Array(t))}function ci(...t){return P(t.map(e=>$(new Uint8Array(e))).join("")).buffer}function mn(t){return V(t).buffer}function li(t){return Je(t)}function ui(t,e){return Ve(t,!e)}function _i(t){return cn(t)}function di(...t){return Yo(...t)}function fi(t){return _n(t).buffer}function hi(t){return Ye(t)}function pi(t,e){return Do(t,!e)}function mi(t){return jo(t)}function gi(t){return Ge(t)}function gn(t){return P(t).buffer}function vi(t){return $o(t)}function yi(t){return Po(t)}function wi(t){return Ho(t)}function bi(t){return Wo(t).buffer}function Ei(t){return Bo(t)}function vn(t,e){return Fo(Number(t),!e)}const ki=Wr,Ci=Fr,Si=Br,xi=zr,Ii=Qr,yn=Hr,Ri=Vr,wn=Dr,Ti=Jr,Oi=Gr,Ni=Yr,we=jr;function be(t){return Kr(t)}function Ee(){const t=be();return t&&t.os?t.os:void 0}function bn(){const t=Ee();return t?t.toLowerCase().includes("android"):!1}function En(){const t=Ee();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function kn(){return Ee()?bn()||En():!1}function Cn(){const t=be();return t&&t.name?t.name.toLowerCase()==="node":!1}function Sn(){return!Cn()&&!!yn()}const xn=Ar,In=qr;function tt(t,e){const n=In(e),r=we();r&&r.setItem(t,n)}function nt(t){let e=null,n=null;const r=we();return r&&(n=r.getItem(t)),e=n&&xn(n),e}function rt(t){const e=we();e&&e.removeItem(t)}function Le(){return Zr()}function Mi(t){return ei(t)}function Li(t){return ie(t)}function Ai(t){return J(t)}function qi(t){return ti(ie(t))}const Rn=Ur;function _e(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function Ui(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function Tn(t,e){let n;const r=So[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function On(t,e){let n;const r=Tn(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function $i(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function Pi(t){const e=t.href.split("?")[0];tt(Me,Object.assign(Object.assign({},t),{href:e}))}function Nn(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function Di(t,e){let n=t;return e&&(n=e.map(r=>Nn(t,r)).filter(Boolean)),n}function ji(t,e){return async(...r)=>new Promise((o,i)=>{const c=(l,d)=>{(l===null||typeof l>"u")&&i(l),o(d)};t.apply(e,[...r,c])})}function Mn(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const Ln="https://registry.walletconnect.com";function Hi(){return Ln+"/api/v2/wallets"}function Wi(){return Ln+"/api/v2/dapps"}function An(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function Fi(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>An(n,e))}var ot={};(function(t){const e=to,n=no,r=Xr,o=eo,i=a=>a==null;function c(a){switch(a.arrayFormat){case"index":return u=>(h,f)=>{const g=h.length;return f===void 0||a.skipNull&&f===null||a.skipEmptyString&&f===""?h:f===null?[...h,[_(u,a),"[",g,"]"].join("")]:[...h,[_(u,a),"[",_(g,a),"]=",_(f,a)].join("")]};case"bracket":return u=>(h,f)=>f===void 0||a.skipNull&&f===null||a.skipEmptyString&&f===""?h:f===null?[...h,[_(u,a),"[]"].join("")]:[...h,[_(u,a),"[]=",_(f,a)].join("")];case"comma":case"separator":return u=>(h,f)=>f==null||f.length===0?h:h.length===0?[[_(u,a),"=",_(f,a)].join("")]:[[h,_(f,a)].join(a.arrayFormatSeparator)];default:return u=>(h,f)=>f===void 0||a.skipNull&&f===null||a.skipEmptyString&&f===""?h:f===null?[...h,_(u,a)]:[...h,[_(u,a),"=",_(f,a)].join("")]}}function l(a){let u;switch(a.arrayFormat){case"index":return(h,f,g)=>{if(u=/\[(\d*)\]$/.exec(h),h=h.replace(/\[\d*\]$/,""),!u){g[h]=f;return}g[h]===void 0&&(g[h]={}),g[h][u[1]]=f};case"bracket":return(h,f,g)=>{if(u=/(\[\])$/.exec(h),h=h.replace(/\[\]$/,""),!u){g[h]=f;return}if(g[h]===void 0){g[h]=[f];return}g[h]=[].concat(g[h],f)};case"comma":case"separator":return(h,f,g)=>{const E=typeof f=="string"&&f.includes(a.arrayFormatSeparator),w=typeof f=="string"&&!E&&m(f,a).includes(a.arrayFormatSeparator);f=w?m(f,a):f;const R=E||w?f.split(a.arrayFormatSeparator).map(x=>m(x,a)):f===null?f:m(f,a);g[h]=R};default:return(h,f,g)=>{if(g[h]===void 0){g[h]=f;return}g[h]=[].concat(g[h],f)}}}function d(a){if(typeof a!="string"||a.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function _(a,u){return u.encode?u.strict?e(a):encodeURIComponent(a):a}function m(a,u){return u.decode?n(a):a}function s(a){return Array.isArray(a)?a.sort():typeof a=="object"?s(Object.keys(a)).sort((u,h)=>Number(u)-Number(h)).map(u=>a[u]):a}function b(a){const u=a.indexOf("#");return u!==-1&&(a=a.slice(0,u)),a}function v(a){let u="";const h=a.indexOf("#");return h!==-1&&(u=a.slice(h)),u}function k(a){a=b(a);const u=a.indexOf("?");return u===-1?"":a.slice(u+1)}function I(a,u){return u.parseNumbers&&!Number.isNaN(Number(a))&&typeof a=="string"&&a.trim()!==""?a=Number(a):u.parseBooleans&&a!==null&&(a.toLowerCase()==="true"||a.toLowerCase()==="false")&&(a=a.toLowerCase()==="true"),a}function S(a,u){u=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},u),d(u.arrayFormatSeparator);const h=l(u),f=Object.create(null);if(typeof a!="string"||(a=a.trim().replace(/^[?#&]/,""),!a))return f;for(const g of a.split("&")){if(g==="")continue;let[E,w]=r(u.decode?g.replace(/\+/g," "):g,"=");w=w===void 0?null:["comma","separator"].includes(u.arrayFormat)?w:m(w,u),h(m(E,u),w,f)}for(const g of Object.keys(f)){const E=f[g];if(typeof E=="object"&&E!==null)for(const w of Object.keys(E))E[w]=I(E[w],u);else f[g]=I(E,u)}return u.sort===!1?f:(u.sort===!0?Object.keys(f).sort():Object.keys(f).sort(u.sort)).reduce((g,E)=>{const w=f[E];return w&&typeof w=="object"&&!Array.isArray(w)?g[E]=s(w):g[E]=w,g},Object.create(null))}t.extract=k,t.parse=S,t.stringify=(a,u)=>{if(!a)return"";u=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},u),d(u.arrayFormatSeparator);const h=w=>u.skipNull&&i(a[w])||u.skipEmptyString&&a[w]==="",f=c(u),g={};for(const w of Object.keys(a))h(w)||(g[w]=a[w]);const E=Object.keys(g);return u.sort!==!1&&E.sort(u.sort),E.map(w=>{const R=a[w];return R===void 0?"":R===null?_(w,u):Array.isArray(R)?R.reduce(f(w),[]).join("&"):_(w,u)+"="+_(R,u)}).filter(w=>w.length>0).join("&")},t.parseUrl=(a,u)=>{u=Object.assign({decode:!0},u);const[h,f]=r(a,"#");return Object.assign({url:h.split("?")[0]||"",query:S(k(a),u)},u&&u.parseFragmentIdentifier&&f?{fragmentIdentifier:m(f,u)}:{})},t.stringifyUrl=(a,u)=>{u=Object.assign({encode:!0,strict:!0},u);const h=b(a.url).split("?")[0]||"",f=t.extract(a.url),g=t.parse(f,{sort:!1}),E=Object.assign(g,a.query);let w=t.stringify(E,u);w&&(w=`?${w}`);let R=v(a.url);return a.fragmentIdentifier&&(R=`#${_(a.fragmentIdentifier,u)}`),`${h}${w}${R}`},t.pick=(a,u,h)=>{h=Object.assign({parseFragmentIdentifier:!0},h);const{url:f,query:g,fragmentIdentifier:E}=t.parseUrl(a,h);return t.stringifyUrl({url:f,query:o(g,u),fragmentIdentifier:E},h)},t.exclude=(a,u,h)=>{const f=Array.isArray(u)?g=>!u.includes(g):(g,E)=>!u(g,E);return t.pick(a,f,h)}})(ot);function qn(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function Un(t,e){let n=it(t);return n=Object.assign(Object.assign({},n),e),t=$n(n),t}function it(t){return ot.parse(t)}function $n(t){return ot.stringify(t)}function Pn(t){return typeof t.bridge<"u"}function Dn(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(s){const b="@",v=s.split(b);return{handshakeTopic:v[0],version:parseInt(v[1],10)}}const c=i(o),l=typeof n<"u"?t.substr(n):"";function d(s){const b=it(s);return{key:b.key||"",bridge:b.bridge||""}}const _=d(l);return Object.assign(Object.assign({protocol:r},c),_)}function Bi(t){return t===""||typeof t=="string"&&t.trim()===""}function zi(t){return!(t&&t.length)}function Qi(t){return ye(t)}function Vi(t){return Xe(t)}function Ji(t){return fn(t)}function Gi(t){return Jo(t)}function Yi(t){return Go(t)}function Ki(t,e){return dn(t,e)}function Zi(t){return typeof t.params=="object"}function jn(t){return typeof t.method<"u"}function F(t){return typeof t.result<"u"}function te(t){return typeof t.error<"u"}function Ae(t){return typeof t.event<"u"}function Hn(t){return ko.includes(t)||t.startsWith("wc_")}function Wn(t){return t.method.startsWith("wc_")?!0:!Fe.includes(t.method)}const Xi=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:Li,appendToQueryString:Un,concatArrayBuffers:ci,concatBuffers:di,convertArrayBufferToBuffer:fe,convertArrayBufferToHex:pn,convertArrayBufferToNumber:ai,convertArrayBufferToUtf8:si,convertBufferToArrayBuffer:mn,convertBufferToHex:ui,convertBufferToNumber:_i,convertBufferToUtf8:li,convertHexToArrayBuffer:gn,convertHexToBuffer:gi,convertHexToNumber:yi,convertHexToUtf8:vi,convertNumberToArrayBuffer:bi,convertNumberToBuffer:wi,convertNumberToHex:vn,convertNumberToUtf8:Ei,convertUtf8ToArrayBuffer:fi,convertUtf8ToBuffer:hi,convertUtf8ToHex:pi,convertUtf8ToNumber:mi,detectEnv:be,detectOS:Ee,formatIOSMobile:$i,formatMobileRegistry:Fi,formatMobileRegistryEntry:An,formatQueryString:$n,formatRpcError:Mn,getClientMeta:Le,getCrypto:Oi,getCryptoOrThrow:Ti,getDappRegistryUrl:Wi,getDocument:xi,getDocumentOrThrow:Si,getEncoding:Yi,getFromWindow:ki,getFromWindowOrThrow:Ci,getInfuraRpcUrl:Tn,getLocal:nt,getLocalStorage:we,getLocalStorageOrThrow:Ni,getLocation:wn,getLocationOrThrow:Ri,getMobileLinkRegistry:Di,getMobileRegistryEntry:Nn,getNavigator:yn,getNavigatorOrThrow:Ii,getQueryString:qn,getRpcUrl:On,getType:Gi,getWalletRegistryUrl:Hi,isAndroid:bn,isArrayBuffer:Ji,isBrowser:Sn,isBuffer:Qi,isEmptyArray:zi,isEmptyString:Bi,isHexString:Ki,isIOS:En,isInternalEvent:Ae,isJsonRpcRequest:jn,isJsonRpcResponseError:te,isJsonRpcResponseSuccess:F,isJsonRpcSubscription:Zi,isMobile:kn,isNode:Cn,isReservedEvent:Hn,isSilentPayload:Wn,isTypedArray:Vi,isWalletConnectSession:Pn,logDeprecationWarning:Ui,parseQueryString:it,parseWalletConnectUri:Dn,payloadId:Rn,promisify:ji,removeHexLeadingZeros:qi,removeHexPrefix:Ai,removeLocal:rt,safeJsonParse:xn,safeJsonStringify:In,sanitizeHex:Mi,saveMobileLinkInfo:Pi,setLocal:tt,uuid:_e},Symbol.toStringTag,{value:"Module"}));class es{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const ts=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class ns{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new es,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=rs(this._url,this._protocol,this._version);if(this._nextSocket=new ts(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function rs(t,e,n){var r,o;const c=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),l=Sn()?{protocol:e,version:n,env:"browser",host:((r=wn())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=be())===null||o===void 0?void 0:o.name)||""},d=Un(qn(c[1]||""),l);return c[0]+"?"+d}class os{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;jn(e)?r=e.method:F(e)||te(e)?r=`response:${e.id}`:Ae(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!Hn(r)&&!Ae(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(te(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class is{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=nt(this.storageId);return n&&Pn(n)&&(e=n),e}setSession(e){return tt(this.storageId,e),e}removeSession(){rt(this.storageId)}}const ss="walletconnect.org",as="abcdefghijklmnopqrstuvwxyz0123456789",Fn=as.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function cs(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function ls(t){return cs(t).split(".").slice(-2).join(".")}function us(){return Math.floor(Math.random()*Fn.length)}function _s(){return Fn[us()]}function ds(t){return ls(t)===ss}function fs(t){return ds(t)?_s():t}class hs{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new os,this._clientMeta=Le()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new is(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...Fe,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(wo);e.connectorOpts.bridge&&(this.bridge=fs(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new ns({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=gn(e);this._key=n}get key(){return this._key?pn(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=_e()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=Le()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=_e(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(Ct)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(Eo);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(Ct))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(Se);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=_e(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(Se);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(Se);const n=e&&e.message?e.message:ho,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(j);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(j);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(j);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(j);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(j);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(j);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,c)=>{if(i){o(i);return}if(!c)throw new Error(po);r(c)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(j);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return vn(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(F(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(mo)}rejectRequest(e){if(te(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(go)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,c=JSON.stringify(o),l=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:Wn(r);this._transport.send(c,i,l)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n),i=!0;this._transport.send(o,r,i)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(vo);return{id:typeof e.id>"u"?Rn():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(yo);const n={id:e.id,jsonrpc:"2.0"};if(te(e)){const r=Mn(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(F(e))return Object.assign(Object.assign({},n),e);throw new Error(kt)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),rt(Me)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}F(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}F(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error(kt))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(kn()&&this._signingMethods.includes(r.method)){const o=nt(Me);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=Dn(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(bo)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function ps(t){return ne.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const Bn=256,zn=Bn,ms=Bn,D="AES-CBC",gs=`SHA-${zn}`,qe="HMAC",vs="encrypt",ys="decrypt",ws="sign",bs="verify";function Es(t){return t===D?{length:zn,name:D}:{hash:{name:gs},name:qe}}function ks(t){return t===D?[vs,ys]:[ws,bs]}async function st(t,e=D){return ne.getSubtleCrypto().importKey("raw",t,Es(e),!0,ks(e))}async function Cs(t,e,n){const r=ne.getSubtleCrypto(),o=await st(e,D),i=await r.encrypt({iv:t,name:D},o,n);return new Uint8Array(i)}async function Ss(t,e,n){const r=ne.getSubtleCrypto(),o=await st(e,D),i=await r.decrypt({iv:t,name:D},o,n);return new Uint8Array(i)}async function xs(t,e){const n=ne.getSubtleCrypto(),r=await st(t,qe),o=await n.sign({length:ms,name:qe},r,e);return new Uint8Array(o)}function Is(t,e,n){return Cs(t,e,n)}function Rs(t,e,n){return Ss(t,e,n)}async function Qn(t,e){return await xs(t,e)}async function Vn(t){const e=(t||256)/8,n=ps(e);return mn(G(n))}async function Jn(t,e){const n=P(t.data),r=P(t.iv),o=P(t.hmac),i=$(o,!1),c=hn(n,r),l=await Qn(e,c),d=$(l,!1);return J(i)===J(d)}async function Ts(t,e,n){const r=V(fe(e)),o=n||await Vn(128),i=V(fe(o)),c=$(i,!1),l=JSON.stringify(t),d=_n(l),_=await Is(i,r,d),m=$(_,!1),s=hn(_,i),b=await Qn(r,s),v=$(b,!1);return{data:m,hmac:v,iv:c}}async function Os(t,e){const n=V(fe(e));if(!n)throw new Error("Missing key: required for decryption");if(!await Jn(t,n))return null;const o=P(t.data),i=P(t.iv),c=await Rs(i,n,o),l=ln(c);let d;try{d=JSON.parse(l)}catch{return null}return d}const Ns=Object.freeze(Object.defineProperty({__proto__:null,decrypt:Os,encrypt:Ts,generateKey:Vn,verifyHmac:Jn},Symbol.toStringTag,{value:"Module"}));class Ms extends hs{constructor(e,n){super({cryptoLib:Ns,connectorOpts:e,pushServerOpts:n})}}const Ls=$t(Xi);var As=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(o){t.addRange(o)}),e&&e.focus()}},qs=As,St={"text/plain":"Text","text/html":"Url",default:"Text"},Us="Copy to clipboard: #{key}, Enter";function $s(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Ps(t,e){var n,r,o,i,c,l,d=!1;e||(e={}),n=e.debug||!1;try{o=qs(),i=document.createRange(),c=document.getSelection(),l=document.createElement("span"),l.textContent=t,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(m){if(m.stopPropagation(),e.format)if(m.preventDefault(),typeof m.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=St[e.format]||St.default;window.clipboardData.setData(s,t)}else m.clipboardData.clearData(),m.clipboardData.setData(e.format,t);e.onCopy&&(m.preventDefault(),e.onCopy(m.clipboardData))}),document.body.appendChild(l),i.selectNodeContents(l),c.addRange(i);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");d=!0}catch(m){n&&console.error("unable to copy using execCommand: ",m),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),d=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),r=$s("message"in e?e.message:Us),window.prompt(r,t)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(i):c.removeAllRanges()),l&&document.body.removeChild(l),o()}return d}var Ds=Ps;function Gn(t,e){for(var n in e)t[n]=e[n];return t}function Ue(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function he(t){this.props=t}function Yn(t,e){function n(o){var i=this.props.ref,c=i==o.ref;return!c&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!c:Ue(this.props,o)}function r(o){return this.shouldComponentUpdate=n,M(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(he.prototype=new N).isPureReactComponent=!0,he.prototype.shouldComponentUpdate=function(t,e){return Ue(this.props,t)||Ue(this.state,e)};var xt=y.__b;y.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),xt&&xt(t)};var js=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Kn(t){function e(n){var r=Gn({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=js,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var It=function(t,e){return t==null?null:q(q(t).map(e))},Zn={map:It,forEach:It,count:function(t){return t?q(t).length:0},only:function(t){var e=q(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:q},Hs=y.__e;y.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}Hs(t,e,n,r)};var Rt=y.unmount;function Xn(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Gn({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return Xn(r,e,n)})),t}function er(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return er(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}function Z(){this.__u=0,this.t=null,this.__b=null}function tr(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function nr(t){var e,n,r;function o(i){if(e||(e=t()).then(function(c){n=c.default||c},function(c){r=c}),r)throw r;if(!n)throw e;return M(n,i)}return o.displayName="Lazy",o.__f=!0,o}function B(){this.u=null,this.o=null}y.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Rt&&Rt(t)},(Z.prototype=new N).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=tr(r.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=c;var l=function(){if(!--r.__u){if(r.state.__a){var d=r.state.__a;r.__v.__k[0]=er(d,d.__c.__P,d.__c.__O)}var _;for(r.setState({__a:r.__b=null});_=r.t.pop();)_.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(c,c)},Z.prototype.componentWillUnmount=function(){this.t=[]},Z.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Xn(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&M(L,null,t.fallback);return o&&(o.__u&=-33),[M(L,null,e.__a?null:t.children),o]};var Tt=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function Ws(t){return this.getChildContext=function(){return t.context},t.children}function Fs(t){var e=this,n=t.i;e.componentWillUnmount=function(){ee(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),ee(M(Ws,{context:e.context},t.__v),e.l)}function rr(t,e){var n=M(Fs,{__v:t,i:e});return n.containerInfo=e,n}(B.prototype=new N).__a=function(t){var e=this,n=tr(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),Tt(e,t,r)):o()};n?n(i):i()}},B.prototype.render=function(t){this.u=null,this.o=new Map;var e=q(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},B.prototype.componentDidUpdate=B.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Tt(t,n,e)})};var or=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Bs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,zs=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Qs=/[A-Z0-9]/g,Vs=typeof document<"u",Js=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function ir(t,e,n){return e.__k==null&&(e.textContent=""),ee(t,e),typeof n=="function"&&n(),t?t.__c:null}function sr(t,e,n){return Jt(t,e),typeof n=="function"&&n(),t?t.__c:null}N.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(N.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Ot=y.event;function Gs(){}function Ys(){return this.cancelBubble}function Ks(){return this.defaultPrevented}y.event=function(t){return Ot&&(t=Ot(t)),t.persist=Gs,t.isPropagationStopped=Ys,t.isDefaultPrevented=Ks,t.nativeEvent=t};var at,Zs={enumerable:!1,configurable:!0,get:function(){return this.class}},Nt=y.vnode;y.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={};for(var i in n){var c=n[i];if(!(i==="value"&&"defaultValue"in n&&c==null||Vs&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var l=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&c===!0?c="":l==="ondoubleclick"?i="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||Js(n.type)?l==="onfocus"?i="onfocusin":l==="onblur"?i="onfocusout":zs.test(i)?i=l:r.indexOf("-")===-1&&Bs.test(i)?i=i.replace(Qs,"-$&").toLowerCase():c===null&&(c=void 0):l=i="oninput",l==="oninput"&&o[i=l]&&(i="oninputCapture"),o[i]=c}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=q(n.children).forEach(function(d){d.props.selected=o.value.indexOf(d.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=q(n.children).forEach(function(d){d.props.selected=o.multiple?o.defaultValue.indexOf(d.props.value)!=-1:o.defaultValue==d.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Zs)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=or,Nt&&Nt(t)};var Mt=y.__r;y.__r=function(t){Mt&&Mt(t),at=t.__c};var Lt=y.diffed;y.diffed=function(t){Lt&&Lt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),at=null};var ar={ReactCurrentDispatcher:{current:{readContext:function(t){return at.__n[t.__c].props.value}}}},Xs="17.0.2";function cr(t){return M.bind(null,t)}function se(t){return!!t&&t.$$typeof===or}function lr(t){return se(t)&&t.type===L}function ur(t){return se(t)?lo.apply(null,arguments):t}function _r(t){return!!t.__k&&(ee(null,t),!0)}function dr(t){return t&&(t.base||t.nodeType===1&&t)||null}var fr=function(t,e){return t(e)},hr=function(t,e){return t(e)},pr=L;function ct(t){t()}function mr(t){return t}function gr(){return[!1,ct]}var vr=oe,yr=se;function wr(t,e){var n=e(),r=me({h:{__:n,v:e}}),o=r[0].h,i=r[1];return oe(function(){o.__=n,o.v=e,xe(o)&&i({h:o})},[t,n,e]),He(function(){return xe(o)&&i({h:o}),t(function(){xe(o)&&i({h:o})})},[t]),n}function xe(t){var e,n,r=t.v,o=t.__;try{var i=r();return!((e=o)===(n=i)&&(e!==0||1/e==1/n)||e!=e&&n!=n)}catch{return!0}}var ea={useState:me,useId:nn,useReducer:je,useEffect:He,useLayoutEffect:oe,useInsertionEffect:vr,useTransition:gr,useDeferredValue:mr,useSyncExternalStore:wr,startTransition:ct,useRef:Kt,useImperativeHandle:Zt,useMemo:ge,useCallback:Xt,useContext:en,useDebugValue:tn,version:"17.0.2",Children:Zn,render:ir,hydrate:sr,unmountComponentAtNode:_r,createPortal:rr,createElement:M,createContext:Gt,createFactory:cr,cloneElement:ur,createRef:Ft,Fragment:L,isValidElement:se,isElement:yr,isFragment:lr,findDOMNode:dr,Component:N,PureComponent:he,memo:Yn,forwardRef:Kn,flushSync:hr,unstable_batchedUpdates:fr,StrictMode:pr,Suspense:Z,SuspenseList:B,lazy:nr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ar};const ta=Object.freeze(Object.defineProperty({__proto__:null,Children:Zn,Component:N,Fragment:L,PureComponent:he,StrictMode:pr,Suspense:Z,SuspenseList:B,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ar,cloneElement:ur,createContext:Gt,createElement:M,createFactory:cr,createPortal:rr,createRef:Ft,default:ea,findDOMNode:dr,flushSync:hr,forwardRef:Kn,hydrate:sr,isElement:yr,isFragment:lr,isValidElement:se,lazy:nr,memo:Yn,render:ir,startTransition:ct,unmountComponentAtNode:_r,unstable_batchedUpdates:fr,useCallback:Xt,useContext:en,useDebugValue:tn,useDeferredValue:mr,useEffect:He,useErrorBoundary:uo,useId:nn,useImperativeHandle:Zt,useInsertionEffect:vr,useLayoutEffect:oe,useMemo:ge,useReducer:je,useRef:Kt,useState:me,useSyncExternalStore:wr,useTransition:gr,version:Xs},Symbol.toStringTag,{value:"Module"})),na=$t(ta);function br(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var T=Ls,Er=br(ro),ra=br(Ds),p=na;function oa(t){Er.toString(t,{type:"terminal"}).then(console.log)}var ia=`:root {
  --animation-duration: 300ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.animated {
  animation-duration: var(--animation-duration);
  animation-fill-mode: both;
}

.fadeIn {
  animation-name: fadeIn;
}

.fadeOut {
  animation-name: fadeOut;
}

#walletconnect-wrapper {
  -webkit-user-select: none;
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  user-select: none;
  width: 100%;
  z-index: 99999999999999;
}

.walletconnect-modal__headerLogo {
  height: 21px;
}

.walletconnect-modal__header p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  align-items: flex-start;
  display: flex;
  flex: 1;
  margin-left: 5px;
}

.walletconnect-modal__close__wrapper {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background: white;
  border-radius: 26px;
  padding: 6px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.walletconnect-modal__close__icon {
  position: relative;
  top: 7px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.walletconnect-modal__close__line1 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
}

.walletconnect-modal__close__line2 {
  position: absolute;
  width: 100%;
  border: 1px solid rgb(48, 52, 59);
  transform: rotate(90deg);
}

.walletconnect-qrcode__base {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background: rgba(37, 41, 46, 0.95);
  height: 100%;
  left: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  width: 100%;
  will-change: opacity;
  padding: 40px;
  box-sizing: border-box;
}

.walletconnect-qrcode__text {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 10px 0 20px 0;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .walletconnect-qrcode__text {
    font-size: 4vw;
  }
}

@media only screen and (max-width: 320px) {
  .walletconnect-qrcode__text {
    font-size: 14px;
  }
}

.walletconnect-qrcode__image {
  width: calc(100% - 30px);
  box-sizing: border-box;
  cursor: none;
  margin: 0 auto;
}

.walletconnect-qrcode__notification {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 16px;
  padding: 16px 20px;
  border-radius: 16px;
  text-align: center;
  transition: all 0.1s ease-in-out;
  background: white;
  color: black;
  margin-bottom: -60px;
  opacity: 0;
}

.walletconnect-qrcode__notification.notification__show {
  opacity: 1;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__header {
    height: 130px;
  }
  .walletconnect-modal__base {
    overflow: auto;
  }
}

@media only screen and (min-device-width: 415px) and (max-width: 768px) {
  #content {
    max-width: 768px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 375px) and (max-width: 415px) {
  #content {
    max-width: 414px;
    box-sizing: border-box;
  }
}

@media only screen and (min-width: 320px) and (max-width: 375px) {
  #content {
    max-width: 375px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: 320px) {
  #content {
    max-width: 320px;
    box-sizing: border-box;
  }
}

.walletconnect-modal__base {
  -webkit-font-smoothing: antialiased;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);
  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,
    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 41px;
  padding: 24px 24px 22px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  will-change: transform;
  overflow: visible;
  transform: translateY(-50%);
  top: 50%;
  max-width: 500px;
  margin: auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__base {
    padding: 24px 12px;
  }
}

.walletconnect-modal__base .hidden {
  transform: translateY(150%);
  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);
}

.walletconnect-modal__header {
  align-items: center;
  display: flex;
  height: 26px;
  left: 0;
  justify-content: space-between;
  position: absolute;
  top: -42px;
  width: 100%;
}

.walletconnect-modal__base .wc-logo {
  align-items: center;
  display: flex;
  height: 26px;
  margin-top: 15px;
  padding-bottom: 15px;
  pointer-events: auto;
}

.walletconnect-modal__base .wc-logo div {
  background-color: #3399ff;
  height: 21px;
  margin-right: 5px;
  mask-image: url("images/wc-logo.svg") center no-repeat;
  width: 32px;
}

.walletconnect-modal__base .wc-logo p {
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.walletconnect-modal__base h2 {
  color: rgba(60, 66, 82, 0.6);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1875em;
  margin: 0 0 19px 0;
  text-align: center;
  width: 100%;
}

.walletconnect-modal__base__row {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 15px;
  position: relative;
  margin: 0px 0px 8px;
  text-align: left;
  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  text-decoration: none;
}

.walletconnect-modal__base__row:hover {
  background: rgba(60, 66, 82, 0.06);
}

.walletconnect-modal__base__row:active {
  background: rgba(60, 66, 82, 0.06);
  transform: scale(0.975);
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.walletconnect-modal__base__row__h3 {
  color: #25292e;
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 3px;
}

.walletconnect-modal__base__row__right {
  align-items: center;
  display: flex;
  justify-content: center;
}

.walletconnect-modal__base__row__right__app-icon {
  border-radius: 8px;
  height: 34px;
  margin: 0 11px 2px 0;
  width: 34px;
  background-size: 100%;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-modal__base__row__right__caret {
  height: 18px;
  opacity: 0.3;
  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 8px;
  will-change: opacity;
}

.walletconnect-modal__base__row:hover .caret,
.walletconnect-modal__base__row:active .caret {
  opacity: 0.6;
}

.walletconnect-modal__mobile__toggle {
  width: 80%;
  display: flex;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 18px;
  background: #d4d5d9;
}

.walletconnect-modal__single_wallet {
  display: flex;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 18px;
}

.walletconnect-modal__single_wallet a {
  cursor: pointer;
  color: rgb(64, 153, 255);
  font-size: 21px;
  font-weight: 800;
  text-decoration: none !important;
  margin: 0 auto;
}

.walletconnect-modal__mobile__toggle_selector {
  width: calc(50% - 8px);
  background: white;
  position: absolute;
  border-radius: 5px;
  height: calc(100% - 8px);
  top: 4px;
  transition: all 0.2s ease-in-out;
  transform: translate3d(4px, 0, 0);
}

.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {
  transform: translate3d(calc(100% + 12px), 0, 0);
}

.walletconnect-modal__mobile__toggle a {
  font-size: 12px;
  width: 50%;
  text-align: center;
  padding: 8px;
  margin: 0;
  font-weight: 600;
  z-index: 1;
}

.walletconnect-modal__footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media only screen and (max-width: 768px) {
  .walletconnect-modal__footer {
    margin-top: 5vw;
  }
}

.walletconnect-modal__footer a {
  cursor: pointer;
  color: #898d97;
  font-size: 15px;
  margin: 0 auto;
}

@media only screen and (max-width: 320px) {
  .walletconnect-modal__footer a {
    font-size: 14px;
  }
}

.walletconnect-connect__buttons__wrapper {
  max-height: 44vh;
}

.walletconnect-connect__buttons__wrapper__android {
  margin: 50% 0;
}

.walletconnect-connect__buttons__wrapper__wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 10px 0;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__buttons__wrapper__wrap {
    margin-top: 40px;
  }
}

.walletconnect-connect__button {
  background-color: rgb(64, 153, 255);
  padding: 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.walletconnect-connect__button__icon_anchor {
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  width: 42px;
  justify-self: center;
  flex-direction: column;
  text-decoration: none !important;
}

@media only screen and (max-width: 320px) {
  .walletconnect-connect__button__icon_anchor {
    margin: 4px;
  }
}

.walletconnect-connect__button__icon {
  border-radius: 10px;
  height: 42px;
  margin: 0;
  width: 42px;
  background-size: cover !important;
  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);
}

.walletconnect-connect__button__text {
  color: #424952;
  font-size: 2.7vw;
  text-decoration: none !important;
  padding: 0;
  margin-top: 1.8vw;
  font-weight: 600;
}

@media only screen and (min-width: 768px) {
  .walletconnect-connect__button__text {
    font-size: 16px;
    margin-top: 12px;
  }
}

.walletconnect-search__input {
  border: none;
  background: #d4d5d9;
  border-style: none;
  padding: 8px 16px;
  outline: none;
  font-style: normal;
  font-stretch: normal;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  border-radius: 8px;
  width: calc(100% - 16px);
  margin: 0;
  margin-bottom: 8px;
}
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function sa(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var aa="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",ca="WalletConnect",la=300,ua="rgb(64, 153, 255)",kr="walletconnect-wrapper",At="walletconnect-style-sheet",Cr="walletconnect-qrcode-modal",_a="walletconnect-qrcode-close",Sr="walletconnect-qrcode-text",da="walletconnect-connect-button";function fa(t){return p.createElement("div",{className:"walletconnect-modal__header"},p.createElement("img",{src:aa,className:"walletconnect-modal__headerLogo"}),p.createElement("p",null,ca),p.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},p.createElement("div",{id:_a,className:"walletconnect-modal__close__icon"},p.createElement("div",{className:"walletconnect-modal__close__line1"}),p.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function ha(t){return p.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:da+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var pa="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function ma(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return p.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},p.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),p.createElement("div",{className:"walletconnect-modal__base__row__right"},p.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),p.createElement("img",{src:pa,className:"walletconnect-modal__base__row__right__caret"})))}function ga(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,c=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return p.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},p.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),p.createElement("div",{style:{fontSize:c},className:"walletconnect-connect__button__text"},r))}var va=5,Ie=12;function ya(t){var e=T.isAndroid(),n=p.useState(""),r=n[0],o=n[1],i=p.useState(""),c=i[0],l=i[1],d=p.useState(1),_=d[0],m=d[1],s=c?t.links.filter(function(f){return f.name.toLowerCase().includes(c.toLowerCase())}):t.links,b=t.errorMessage,v=c||s.length>va,k=Math.ceil(s.length/Ie),I=[(_-1)*Ie+1,_*Ie],S=s.length?s.filter(function(f,g){return g+1>=I[0]&&g+1<=I[1]}):[],a=!e&&k>1,u=void 0;function h(f){o(f.target.value),clearTimeout(u),f.target.value?u=setTimeout(function(){l(f.target.value),m(1)},1e3):(o(""),l(""),m(1))}return p.createElement("div",null,p.createElement("p",{id:Sr,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&p.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:h}),p.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":v&&s.length?"__wrap":"")},e?p.createElement(ha,{name:t.text.connect,color:ua,href:t.uri,onClick:p.useCallback(function(){T.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):S.length?S.map(function(f){var g=f.color,E=f.name,w=f.shortName,R=f.logo,x=T.formatIOSMobile(t.uri,f),O=p.useCallback(function(){T.saveMobileLinkInfo({name:E,href:x})},[S]);return v?p.createElement(ga,{color:g,href:x,name:w||E,logo:R,onClick:O}):p.createElement(ma,{color:g,href:x,name:E,logo:R,onClick:O})}):p.createElement(p.Fragment,null,p.createElement("p",null,b.length?t.errorMessage:t.links.length&&!s.length?t.text.no_wallets_found:t.text.loading))),a&&p.createElement("div",{className:"walletconnect-modal__footer"},Array(k).fill(0).map(function(f,g){var E=g+1,w=_===E;return p.createElement("a",{style:{margin:"auto 10px",fontWeight:w?"bold":"normal"},onClick:function(){return m(E)}},E)})))}function wa(t){var e=!!t.message.trim();return p.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var ba=function(t){try{var e="";return Promise.resolve(Er.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function Ea(t){var e=p.useState(""),n=e[0],r=e[1],o=p.useState(""),i=o[0],c=o[1];p.useEffect(function(){try{return Promise.resolve(ba(t.uri)).then(function(d){c(d)})}catch(d){Promise.reject(d)}},[]);var l=function(){var d=ra(t.uri);d?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return p.createElement("div",null,p.createElement("p",{id:Sr,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),p.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),p.createElement("div",{className:"walletconnect-modal__footer"},p.createElement("a",{onClick:l},t.text.copy_to_clipboard)),p.createElement(wa,{message:n}))}function ka(t){var e=T.isAndroid(),n=T.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=p.useState(!1),i=o[0],c=o[1],l=p.useState(!1),d=l[0],_=l[1],m=p.useState(!n),s=m[0],b=m[1],v={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},k=p.useState(""),I=k[0],S=k[1],a=p.useState(!1),u=a[0],h=a[1],f=p.useState([]),g=f[0],E=f[1],w=p.useState(""),R=w[0],x=w[1],O=function(){d||i||r&&!r.length||g.length>0||p.useEffect(function(){var Tr=function(){try{if(e)return Promise.resolve();c(!0);var ke=sa(function(){var Y=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:T.getWalletRegistryUrl();return Promise.resolve(fetch(Y)).then(function(Or){return Promise.resolve(Or.json()).then(function(Nr){var Mr=Nr.listings,Lr=n?"mobile":"desktop",ae=T.getMobileLinkRegistry(T.formatMobileRegistry(Mr,Lr),r);c(!1),_(!0),x(ae.length?"":t.text.no_supported_wallets),E(ae);var lt=ae.length===1;lt&&(S(T.formatIOSMobile(t.uri,ae[0])),b(!0)),h(lt)})})},function(Y){c(!1),_(!0),x(t.text.something_went_wrong),console.error(Y)});return Promise.resolve(ke&&ke.then?ke.then(function(){}):void 0)}catch(Y){return Promise.reject(Y)}};Tr()})};O();var Rr=n?s:!s;return p.createElement("div",{id:Cr,className:"walletconnect-qrcode__base animated fadeIn"},p.createElement("div",{className:"walletconnect-modal__base"},p.createElement(fa,{onClose:t.onClose}),u&&s?p.createElement("div",{className:"walletconnect-modal__single_wallet"},p.createElement("a",{onClick:function(){return T.saveMobileLinkInfo({name:g[0].name,href:I})},href:I,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(u?g[0].name:"")+" ›")):e||i||!i&&g.length?p.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(Rr?" right__selected":"")},p.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?p.createElement(p.Fragment,null,p.createElement("a",{onClick:function(){return b(!1),O()}},t.text.mobile),p.createElement("a",{onClick:function(){return b(!0)}},t.text.qrcode)):p.createElement(p.Fragment,null,p.createElement("a",{onClick:function(){return b(!0)}},t.text.qrcode),p.createElement("a",{onClick:function(){return b(!1),O()}},t.text.desktop))):null,p.createElement("div",null,s||!e&&!i&&!g.length?p.createElement(Ea,Object.assign({},v)):p.createElement(ya,Object.assign({},v,{links:g,errorMessage:R})))))}var Ca={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},Sa={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},xa={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},Ia={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},Ra={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},Ta={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},Oa={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},Na={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},qt={de:Ca,en:Sa,es:xa,fr:Ia,ko:Ra,pt:Ta,zh:Oa,fa:Na};function Ma(){var t=T.getDocumentOrThrow(),e=t.getElementById(At);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",At),n.innerText=ia,t.head.appendChild(n)}function La(){var t=T.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",kr),t.body.appendChild(e),e}function xr(){var t=T.getDocumentOrThrow(),e=t.getElementById(Cr);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(kr);n&&t.body.removeChild(n)},la))}function Aa(t){return function(){xr(),t&&t()}}function qa(){var t=T.getNavigatorOrThrow().language.split("-")[0]||"en";return qt[t]||qt.en}function Ua(t,e,n){Ma();var r=La();p.render(p.createElement(ka,{text:qa(),uri:t,onClose:Aa(e),qrcodeModalOptions:n}),r)}function $a(){xr()}var Ir=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function Pa(t,e,n){console.log(t),Ir()?oa(t):Ua(t,e,n)}function Da(){Ir()||$a()}var ja={open:Pa,close:Da},Ha=ja;const Wa=$e(Ha);class Fa extends $r{constructor(e){super(),this.events=new Ut,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",ut(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?Wa:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new Ms(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?ut(e.id,e.error.message,e.error.data):e}}class Qa{constructor(e){this.events=new Ut,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new _t(new Fa(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(Fe.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=On(e,this.rpc);return typeof n>"u"?void 0:new _t(new Pr(n))}}export{Qa as default};
