import{a as $r,s as Pr,n as Dr,c as re,I as jr,E as Pt,f as _t,J as dt,H as Hr}from"./http-B5EhuXSR.js";import{h as Pe,an as Wr,ao as Fr,ap as Br,aq as zr,ar as Qr,as as Vr,at as Jr,au as Gr,av as Yr,aw as Kr,ax as Zr,ay as Xr,az as eo,aA as to,aB as no,aC as ro,aD as oo,aE as io,g as Dt}from"./index-5aFEQTrx.js";import{b as so}from"./browser-Ey8n752X.js";var oe,b,jt,W,ft,Ht,Te,Wt,ee={},Ft=[],ao=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,me=Array.isArray;function q(t,e){for(var n in e)t[n]=e[n];return t}function Bt(t){var e=t.parentNode;e&&e.removeChild(t)}function L(t,e,n){var r,o,i,c={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:c[i]=e[i];if(arguments.length>2&&(c.children=arguments.length>3?oe.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)c[i]===void 0&&(c[i]=t.defaultProps[i]);return Z(t,c,r,o,null)}function Z(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++jt,__i:-1,__u:0};return o==null&&b.vnode!=null&&b.vnode(i),i}function zt(){return{current:null}}function A(t){return t.children}function M(t,e){this.props=t,this.context=e}function F(t,e){if(e==null)return t.__?F(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?F(t):null}function Qt(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Qt(t)}}function Oe(t){(!t.__d&&(t.__d=!0)&&W.push(t)&&!fe.__r++||ft!==b.debounceRendering)&&((ft=b.debounceRendering)||Ht)(fe)}function fe(){var t,e,n,r,o,i,c,l,_;for(W.sort(Te);t=W.shift();)t.__d&&(e=W.length,r=void 0,i=(o=(n=t).__v).__e,l=[],_=[],(c=n.__P)&&((r=q({},o)).__v=o.__v+1,b.vnode&&b.vnode(r),De(c,r,o,n.__n,c.ownerSVGElement!==void 0,32&o.__u?[i]:null,l,i??F(o),!!(32&o.__u),_),r.__v=o.__v,r.__.__k[r.__i]=r,Gt(l,r,_),r.__e!=i&&Qt(r)),W.length>e&&W.sort(Te));fe.__r=0}function Vt(t,e,n,r,o,i,c,l,_,d,m){var s,w,v,E,R,S=r&&r.__k||Ft,a=e.length;for(n.__d=_,co(n,e,S),_=n.__d,s=0;s<a;s++)(v=n.__k[s])!=null&&typeof v!="boolean"&&typeof v!="function"&&(w=v.__i===-1?ee:S[v.__i]||ee,v.__i=s,De(t,v,w,o,i,c,l,_,d,m),E=v.__e,v.ref&&w.ref!=v.ref&&(w.ref&&je(w.ref,null,v),m.push(v.ref,v.__c||E,v)),R==null&&E!=null&&(R=E),65536&v.__u||w.__k===v.__k?(E||w.__e!=_||(_=F(w)),_=Jt(v,_,t)):typeof v.type=="function"&&v.__d!==void 0?_=v.__d:E&&(_=E.nextSibling),v.__d=void 0,v.__u&=-196609);n.__d=_,n.__e=R}function co(t,e,n){var r,o,i,c,l,_=e.length,d=n.length,m=d,s=0;for(t.__k=[],r=0;r<_;r++)c=r+s,(o=t.__k[r]=(o=e[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?Z(null,o,null,null,null):me(o)?Z(A,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?Z(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=t,o.__b=t.__b+1,l=lo(o,n,c,m),o.__i=l,i=null,l!==-1&&(m--,(i=n[l])&&(i.__u|=131072)),i==null||i.__v===null?(l==-1&&s--,typeof o.type!="function"&&(o.__u|=65536)):l!==c&&(l===c+1?s++:l>c?m>_-c?s+=l-c:s--:l<c?l==c-1&&(s=l-c):s=0,l!==r+s&&(o.__u|=65536))):(i=n[c])&&i.key==null&&i.__e&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=F(i)),Ne(i,i,!1),n[c]=null,m--);if(m)for(r=0;r<d;r++)(i=n[r])!=null&&!(131072&i.__u)&&(i.__e==t.__d&&(t.__d=F(i)),Ne(i,i))}function Jt(t,e,n){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=Jt(r[o],e,n));return e}t.__e!=e&&(n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType===8);return e}function U(t,e){return e=e||[],t==null||typeof t=="boolean"||(me(t)?t.some(function(n){U(n,e)}):e.push(t)),e}function lo(t,e,n,r){var o=t.key,i=t.type,c=n-1,l=n+1,_=e[n];if(_===null||_&&o==_.key&&i===_.type&&!(131072&_.__u))return n;if(r>(_!=null&&!(131072&_.__u)?1:0))for(;c>=0||l<e.length;){if(c>=0){if((_=e[c])&&!(131072&_.__u)&&o==_.key&&i===_.type)return c;c--}if(l<e.length){if((_=e[l])&&!(131072&_.__u)&&o==_.key&&i===_.type)return l;l++}}return-1}function ht(t,e,n){e[0]==="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||ao.test(e)?n:n+"px"}function le(t,e,n,r,o){var i;e:if(e==="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||ht(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||ht(t.style,e,n[e])}else if(e[0]==="o"&&e[1]==="n")i=e!==(e=e.replace(/(PointerCapture)$|Capture$/i,"$1")),e=e.toLowerCase()in t||e==="onFocusOut"||e==="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=Date.now(),t.addEventListener(e,i?mt:pt,i)):t.removeEventListener(e,i?mt:pt,i);else{if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!=="-"?t.removeAttribute(e):t.setAttribute(e,n))}}function pt(t){if(this.l){var e=this.l[t.type+!1];if(t.t){if(t.t<=e.u)return}else t.t=Date.now();return e(b.event?b.event(t):t)}}function mt(t){if(this.l)return this.l[t.type+!0](b.event?b.event(t):t)}function De(t,e,n,r,o,i,c,l,_,d){var m,s,w,v,E,R,S,a,u,h,f,g,k,y,T,I=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(_=!!(32&n.__u),i=[l=e.__e=n.__e]),(m=b.__b)&&m(e);e:if(typeof I=="function")try{if(a=e.props,u=(m=I.contextType)&&r[m.__c],h=m?u?u.props.value:m.__:r,n.__c?S=(s=e.__c=n.__c).__=s.__E:("prototype"in I&&I.prototype.render?e.__c=s=new I(a,h):(e.__c=s=new M(a,h),s.constructor=I,s.render=_o),u&&u.sub(s),s.props=a,s.state||(s.state={}),s.context=h,s.__n=r,w=s.__d=!0,s.__h=[],s._sb=[]),s.__s==null&&(s.__s=s.state),I.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=q({},s.__s)),q(s.__s,I.getDerivedStateFromProps(a,s.__s))),v=s.props,E=s.state,s.__v=e,w)I.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(I.getDerivedStateFromProps==null&&a!==v&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(a,h),!s.__e&&(s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(a,s.__s,h)===!1||e.__v===n.__v)){for(e.__v!==n.__v&&(s.props=a,s.state=s.__s,s.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.forEach(function(N){N&&(N.__=e)}),f=0;f<s._sb.length;f++)s.__h.push(s._sb[f]);s._sb=[],s.__h.length&&c.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(a,s.__s,h),s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(v,E,R)})}if(s.context=h,s.props=a,s.__P=t,s.__e=!1,g=b.__r,k=0,"prototype"in I&&I.prototype.render){for(s.state=s.__s,s.__d=!1,g&&g(e),m=s.render(s.props,s.state,s.context),y=0;y<s._sb.length;y++)s.__h.push(s._sb[y]);s._sb=[]}else do s.__d=!1,g&&g(e),m=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++k<25);s.state=s.__s,s.getChildContext!=null&&(r=q(q({},r),s.getChildContext())),w||s.getSnapshotBeforeUpdate==null||(R=s.getSnapshotBeforeUpdate(v,E)),Vt(t,me(T=m!=null&&m.type===A&&m.key==null?m.props.children:m)?T:[T],e,n,r,o,i,c,l,_,d),s.base=e.__e,e.__u&=-161,s.__h.length&&c.push(s),S&&(s.__E=s.__=null)}catch(N){e.__v=null,_||i!=null?(e.__e=l,e.__u|=_?160:32,i[i.indexOf(l)]=null):(e.__e=n.__e,e.__k=n.__k),b.__e(N,e,n)}else i==null&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=uo(n.__e,e,n,r,o,i,c,_,d);(m=b.diffed)&&m(e)}function Gt(t,e,n){e.__d=void 0;for(var r=0;r<n.length;r++)je(n[r],n[++r],n[++r]);b.__c&&b.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){b.__e(i,o.__v)}})}function uo(t,e,n,r,o,i,c,l,_){var d,m,s,w,v,E,R,S=n.props,a=e.props,u=e.type;if(u==="svg"&&(o=!0),i!=null){for(d=0;d<i.length;d++)if((v=i[d])&&"setAttribute"in v==!!u&&(u?v.localName===u:v.nodeType===3)){t=v,i[d]=null;break}}if(t==null){if(u===null)return document.createTextNode(a);t=o?document.createElementNS("http://www.w3.org/2000/svg",u):document.createElement(u,a.is&&a),i=null,l=!1}if(u===null)S===a||l&&t.data===a||(t.data=a);else{if(i=i&&oe.call(t.childNodes),S=n.props||ee,!l&&i!=null)for(S={},d=0;d<t.attributes.length;d++)S[(v=t.attributes[d]).name]=v.value;for(d in S)v=S[d],d=="children"||(d=="dangerouslySetInnerHTML"?s=v:d==="key"||d in a||le(t,d,null,v,o));for(d in a)v=a[d],d=="children"?w=v:d=="dangerouslySetInnerHTML"?m=v:d=="value"?E=v:d=="checked"?R=v:d==="key"||l&&typeof v!="function"||S[d]===v||le(t,d,v,S[d],o);if(m)l||s&&(m.__html===s.__html||m.__html===t.innerHTML)||(t.innerHTML=m.__html),e.__k=[];else if(s&&(t.innerHTML=""),Vt(t,me(w)?w:[w],e,n,r,o&&u!=="foreignObject",i,c,i?i[0]:n.__k&&F(n,0),l,_),i!=null)for(d=i.length;d--;)i[d]!=null&&Bt(i[d]);l||(d="value",E!==void 0&&(E!==t[d]||u==="progress"&&!E||u==="option"&&E!==S[d])&&le(t,d,E,S[d],!1),d="checked",R!==void 0&&R!==t[d]&&le(t,d,R,S[d],!1))}return t}function je(t,e,n){try{typeof t=="function"?t(e):t.current=e}catch(r){b.__e(r,n)}}function Ne(t,e,n){var r,o;if(b.unmount&&b.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||je(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){b.__e(i,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Ne(r[o],e,n||typeof t.type!="function");n||t.__e==null||Bt(t.__e),t.__=t.__e=t.__d=void 0}function _o(t,e,n){return this.constructor(t,n)}function te(t,e,n){var r,o,i,c;b.__&&b.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],c=[],De(e,t=(!r&&n||e).__k=L(A,null,[t]),o||ee,ee,e.ownerSVGElement!==void 0,!r&&n?[n]:o?null:e.firstChild?oe.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r,c),Gt(i,t,c)}function Yt(t,e){te(t,e,Yt)}function fo(t,e,n){var r,o,i,c,l=q({},t.props);for(i in t.type&&t.type.defaultProps&&(c=t.type.defaultProps),e)i=="key"?r=e[i]:i=="ref"?o=e[i]:l[i]=e[i]===void 0&&c!==void 0?c[i]:e[i];return arguments.length>2&&(l.children=arguments.length>3?oe.call(arguments,2):n),Z(t.type,l,r||t.key,o||t.ref,null)}function Kt(t,e){var n={__c:e="__cC"+Wt++,__:t,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[e]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&o.some(function(l){l.__e=!0,Oe(l)})},this.sub=function(c){o.push(c);var l=c.componentWillUnmount;c.componentWillUnmount=function(){o.splice(o.indexOf(c),1),l&&l.call(c)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}oe=Ft.slice,b={__e:function(t,e,n,r){for(var o,i,c;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),c=o.__d),c)return o.__E=o}catch(l){t=l}throw t}},jt=0,M.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=q({},this.state),typeof t=="function"&&(t=t(q({},n),this.props)),t&&q(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Oe(this))},M.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Oe(this))},M.prototype.render=A,W=[],Ht=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Te=function(t,e){return t.__v.__b-e.__v.__b},fe.__r=0,Wt=0;var $,C,Se,gt,V=0,Zt=[],ue=[],x=b,vt=x.__b,yt=x.__r,wt=x.diffed,bt=x.__c,kt=x.unmount,Et=x.__;function B(t,e){x.__h&&x.__h(C,t,V||e),V=0;var n=C.__H||(C.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:ue}),n.__[t]}function ge(t){return V=1,He(sn,t)}function He(t,e,n){var r=B($++,2);if(r.t=t,!r.__c&&(r.__=[n?n(e):sn(void 0,e),function(l){var _=r.__N?r.__N[0]:r.__[0],d=r.t(_,l);_!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=C,!C.u)){var o=function(l,_,d){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(w){return!!w.__c});if(m.every(function(w){return!w.__N}))return!i||i.call(this,l,_,d);var s=!1;return m.forEach(function(w){if(w.__N){var v=w.__[0];w.__=w.__N,w.__N=void 0,v!==w.__[0]&&(s=!0)}}),!(!s&&r.__c.props===l)&&(!i||i.call(this,l,_,d))};C.u=!0;var i=C.shouldComponentUpdate,c=C.componentWillUpdate;C.componentWillUpdate=function(l,_,d){if(this.__e){var m=i;i=void 0,o(l,_,d),i=m}c&&c.call(this,l,_,d)},C.shouldComponentUpdate=o}return r.__N||r.__}function We(t,e){var n=B($++,3);!x.__s&&Fe(n.__H,e)&&(n.__=t,n.i=e,C.__H.__h.push(n))}function ie(t,e){var n=B($++,4);!x.__s&&Fe(n.__H,e)&&(n.__=t,n.i=e,C.__h.push(n))}function Xt(t){return V=5,ve(function(){return{current:t}},[])}function en(t,e,n){V=6,ie(function(){return typeof t=="function"?(t(e()),function(){return t(null)}):t?(t.current=e(),function(){return t.current=null}):void 0},n==null?n:n.concat(t))}function ve(t,e){var n=B($++,7);return Fe(n.__H,e)?(n.__V=t(),n.i=e,n.__h=t,n.__V):n.__}function tn(t,e){return V=8,ve(function(){return t},e)}function nn(t){var e=C.context[t.__c],n=B($++,9);return n.c=t,e?(n.__==null&&(n.__=!0,e.sub(C)),e.props.value):t.__}function rn(t,e){x.useDebugValue&&x.useDebugValue(e?e(t):t)}function ho(t){var e=B($++,10),n=ge();return e.__=t,C.componentDidCatch||(C.componentDidCatch=function(r,o){e.__&&e.__(r,o),n[1](r)}),[n[0],function(){n[1](void 0)}]}function on(){var t=B($++,11);if(!t.__){for(var e=C.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var n=e.__m||(e.__m=[0,0]);t.__="P"+n[0]+"-"+n[1]++}return t.__}function po(){for(var t;t=Zt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(_e),t.__H.__h.forEach(Me),t.__H.__h=[]}catch(e){t.__H.__h=[],x.__e(e,t.__v)}}x.__b=function(t){C=null,vt&&vt(t)},x.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Et&&Et(t,e)},x.__r=function(t){yt&&yt(t),$=0;var e=(C=t.__c).__H;e&&(Se===C?(e.__h=[],C.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=ue,n.__N=n.i=void 0})):(e.__h.forEach(_e),e.__h.forEach(Me),e.__h=[],$=0)),Se=C},x.diffed=function(t){wt&&wt(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Zt.push(e)!==1&&gt===x.requestAnimationFrame||((gt=x.requestAnimationFrame)||mo)(po)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==ue&&(n.__=n.__V),n.i=void 0,n.__V=ue})),Se=C=null},x.__c=function(t,e){e.some(function(n){try{n.__h.forEach(_e),n.__h=n.__h.filter(function(r){return!r.__||Me(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],x.__e(r,n.__v)}}),bt&&bt(t,e)},x.unmount=function(t){kt&&kt(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{_e(r)}catch(o){e=o}}),n.__H=void 0,e&&x.__e(e,n.__v))};var Ct=typeof requestAnimationFrame=="function";function mo(t){var e,n=function(){clearTimeout(r),Ct&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Ct&&(e=requestAnimationFrame(n))}function _e(t){var e=C,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),C=e}function Me(t){var e=C;t.__c=t.__(),C=e}function Fe(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}function sn(t,e){return typeof e=="function"?e(t):e}const xe="Session currently connected",H="Session currently disconnected",go="Session Rejected",vo="Missing JSON RPC response",yo='JSON-RPC success response must include "result" field',wo='JSON-RPC error response must include "error" field',bo='JSON RPC request must have valid "method" value',ko='JSON RPC request must have valid "id" value',Eo="Missing one of the required parameters: bridge / uri / session",St="JSON RPC response format is invalid",Co="URI format is invalid",So="QRCode Modal not provided",xt="User close QRCode Modal",xo=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],Io=["wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"],Be=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign",...Io],Le="WALLETCONNECT_DEEPLINK_CHOICE",Ro={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan"};var an=ze;ze.strict=cn;ze.loose=ln;var To=Object.prototype.toString,Oo={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function ze(t){return cn(t)||ln(t)}function cn(t){return t instanceof Int8Array||t instanceof Int16Array||t instanceof Int32Array||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Uint16Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array}function ln(t){return Oo[To.call(t)]}const No=Pe(an);var Mo=an.strict,Lo=function(e){if(Mo(e)){var n=Buffer.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(n=n.slice(e.byteOffset,e.byteOffset+e.byteLength)),n}else return Buffer.from(e)};const Ao=Pe(Lo),Qe="hex",Ve="utf8",qo="binary",Uo="buffer",$o="array",Po="typed-array",Do="array-buffer",ye="0";function J(t){return new Uint8Array(t)}function Je(t,e=!1){const n=t.toString(Qe);return e?se(n):n}function Ge(t){return t.toString(Ve)}function un(t){return t.readUIntBE(0,t.length)}function Y(t){return Ao(t)}function P(t,e=!1){return Je(Y(t),e)}function _n(t){return Ge(Y(t))}function dn(t){return un(Y(t))}function Ye(t){return Buffer.from(G(t),Qe)}function D(t){return J(Ye(t))}function jo(t){return Ge(Ye(t))}function Ho(t){return dn(D(t))}function Ke(t){return Buffer.from(t,Ve)}function fn(t){return J(Ke(t))}function Wo(t,e=!1){return Je(Ke(t),e)}function Fo(t){const e=parseInt(t,10);return ai(si(e),"Number can only safely store up to 53 bits"),e}function Bo(t){return Jo(Ze(t))}function zo(t){return Xe(Ze(t))}function Qo(t,e){return Go(Ze(t),e)}function Vo(t){return`${t}`}function Ze(t){const e=(t>>>0).toString(2);return tt(e)}function Jo(t){return Y(Xe(t))}function Xe(t){return new Uint8Array(ti(t).map(e=>parseInt(e,2)))}function Go(t,e){return P(Xe(t),e)}function Yo(t){return!(typeof t!="string"||!new RegExp(/^[01]+$/).test(t)||t.length%8!==0)}function hn(t,e){return!(typeof t!="string"||!t.match(/^0x[0-9A-Fa-f]*$/)||e&&t.length!==2+2*e)}function we(t){return Buffer.isBuffer(t)}function et(t){return No.strict(t)&&!we(t)}function pn(t){return!et(t)&&!we(t)&&typeof t.byteLength<"u"}function Ko(t){return we(t)?Uo:et(t)?Po:pn(t)?Do:Array.isArray(t)?$o:typeof t}function Zo(t){return Yo(t)?qo:hn(t)?Qe:Ve}function Xo(...t){return Buffer.concat(t)}function mn(...t){let e=[];return t.forEach(n=>e=e.concat(Array.from(n))),new Uint8Array([...e])}function ei(t,e=8){const n=t%e;return n?(t-n)/e*e+e:t}function ti(t,e=8){const n=tt(t).match(new RegExp(`.{${e}}`,"gi"));return Array.from(n||[])}function tt(t,e=8,n=ye){return ni(t,ei(t.length,e),n)}function ni(t,e,n=ye){return ci(t,e,!0,n)}function G(t){return t.replace(/^0x/,"")}function se(t){return t.startsWith("0x")?t:`0x${t}`}function ri(t){return t=G(t),t=tt(t,2),t&&(t=se(t)),t}function oi(t){const e=t.startsWith("0x");return t=G(t),t=t.startsWith(ye)?t.substring(1):t,e?se(t):t}function ii(t){return typeof t>"u"}function si(t){return!ii(t)}function ai(t,e){if(!t)throw new Error(e)}function ci(t,e,n,r=ye){const o=e-t.length;let i=t;if(o>0){const c=r.repeat(o);i=n?c+t:t+c}return i}function he(t){return Y(new Uint8Array(t))}function li(t){return _n(new Uint8Array(t))}function gn(t,e){return P(new Uint8Array(t),!e)}function ui(t){return dn(new Uint8Array(t))}function _i(...t){return D(t.map(e=>P(new Uint8Array(e))).join("")).buffer}function vn(t){return J(t).buffer}function di(t){return Ge(t)}function fi(t,e){return Je(t,!e)}function hi(t){return un(t)}function pi(...t){return Xo(...t)}function mi(t){return fn(t).buffer}function gi(t){return Ke(t)}function vi(t,e){return Wo(t,!e)}function yi(t){return Fo(t)}function wi(t){return Ye(t)}function yn(t){return D(t).buffer}function bi(t){return jo(t)}function ki(t){return Ho(t)}function Ei(t){return Bo(t)}function Ci(t){return zo(t).buffer}function Si(t){return Vo(t)}function wn(t,e){return Qo(Number(t),!e)}const xi=zr,Ii=Qr,Ri=Vr,Ti=Jr,Oi=Gr,bn=Br,Ni=Yr,kn=Wr,Mi=Kr,Li=Zr,Ai=Xr,be=Fr;function ke(t){return eo(t)}function Ee(){const t=ke();return t&&t.os?t.os:void 0}function En(){const t=Ee();return t?t.toLowerCase().includes("android"):!1}function Cn(){const t=Ee();return t?t.toLowerCase().includes("ios")||t.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1:!1}function Sn(){return Ee()?En()||Cn():!1}function xn(){const t=ke();return t&&t.name?t.name.toLowerCase()==="node":!1}function In(){return!xn()&&!!bn()}const Rn=$r,Tn=Pr;function nt(t,e){const n=Tn(e),r=be();r&&r.setItem(t,n)}function rt(t){let e=null,n=null;const r=be();return r&&(n=r.getItem(t)),e=n&&Rn(n),e}function ot(t){const e=be();e&&e.removeItem(t)}function Ae(){return to()}function qi(t){return ri(t)}function Ui(t){return se(t)}function $i(t){return G(t)}function Pi(t){return oi(se(t))}const On=Dr;function de(){return((e,n)=>{for(n=e="";e++<36;n+=e*51&52?(e^15?8^Math.random()*(e^20?16:4):4).toString(16):"-");return n})()}function Di(){console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")}function Nn(t,e){let n;const r=Ro[t];return r&&(n=`https://${r}.infura.io/v3/${e}`),n}function Mn(t,e){let n;const r=Nn(t,e.infuraId);return e.custom&&e.custom[t]?n=e.custom[t]:r&&(n=r),n}function ji(t,e){const n=encodeURIComponent(t);return e.universalLink?`${e.universalLink}/wc?uri=${n}`:e.deepLink?`${e.deepLink}${e.deepLink.endsWith(":")?"//":"/"}wc?uri=${n}`:""}function Hi(t){const e=t.href.split("?")[0];nt(Le,Object.assign(Object.assign({},t),{href:e}))}function Ln(t,e){return t.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()))[0]}function Wi(t,e){let n=t;return e&&(n=e.map(r=>Ln(t,r)).filter(Boolean)),n}function Fi(t,e){return async(...r)=>new Promise((o,i)=>{const c=(l,_)=>{(l===null||typeof l>"u")&&i(l),o(_)};t.apply(e,[...r,c])})}function An(t){const e=t.message||"Failed or Rejected Request";let n=-32e3;if(t&&!t.code)switch(e){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3;break}const r={code:n,message:e};return t.data&&(r.data=t.data),r}const qn="https://registry.walletconnect.com";function Bi(){return qn+"/api/v2/wallets"}function zi(){return qn+"/api/v2/dapps"}function Un(t,e="mobile"){var n;return{name:t.name||"",shortName:t.metadata.shortName||"",color:t.metadata.colors.primary||"",logo:(n=t.image_url.sm)!==null&&n!==void 0?n:"",universalLink:t[e].universal||"",deepLink:t[e].native||""}}function Qi(t,e="mobile"){return Object.values(t).filter(n=>!!n[e].universal||!!n[e].native).map(n=>Un(n,e))}var it={};(function(t){const e=oo,n=io,r=no,o=ro,i=a=>a==null;function c(a){switch(a.arrayFormat){case"index":return u=>(h,f)=>{const g=h.length;return f===void 0||a.skipNull&&f===null||a.skipEmptyString&&f===""?h:f===null?[...h,[d(u,a),"[",g,"]"].join("")]:[...h,[d(u,a),"[",d(g,a),"]=",d(f,a)].join("")]};case"bracket":return u=>(h,f)=>f===void 0||a.skipNull&&f===null||a.skipEmptyString&&f===""?h:f===null?[...h,[d(u,a),"[]"].join("")]:[...h,[d(u,a),"[]=",d(f,a)].join("")];case"comma":case"separator":return u=>(h,f)=>f==null||f.length===0?h:h.length===0?[[d(u,a),"=",d(f,a)].join("")]:[[h,d(f,a)].join(a.arrayFormatSeparator)];default:return u=>(h,f)=>f===void 0||a.skipNull&&f===null||a.skipEmptyString&&f===""?h:f===null?[...h,d(u,a)]:[...h,[d(u,a),"=",d(f,a)].join("")]}}function l(a){let u;switch(a.arrayFormat){case"index":return(h,f,g)=>{if(u=/\[(\d*)\]$/.exec(h),h=h.replace(/\[\d*\]$/,""),!u){g[h]=f;return}g[h]===void 0&&(g[h]={}),g[h][u[1]]=f};case"bracket":return(h,f,g)=>{if(u=/(\[\])$/.exec(h),h=h.replace(/\[\]$/,""),!u){g[h]=f;return}if(g[h]===void 0){g[h]=[f];return}g[h]=[].concat(g[h],f)};case"comma":case"separator":return(h,f,g)=>{const k=typeof f=="string"&&f.includes(a.arrayFormatSeparator),y=typeof f=="string"&&!k&&m(f,a).includes(a.arrayFormatSeparator);f=y?m(f,a):f;const T=k||y?f.split(a.arrayFormatSeparator).map(I=>m(I,a)):f===null?f:m(f,a);g[h]=T};default:return(h,f,g)=>{if(g[h]===void 0){g[h]=f;return}g[h]=[].concat(g[h],f)}}}function _(a){if(typeof a!="string"||a.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function d(a,u){return u.encode?u.strict?e(a):encodeURIComponent(a):a}function m(a,u){return u.decode?n(a):a}function s(a){return Array.isArray(a)?a.sort():typeof a=="object"?s(Object.keys(a)).sort((u,h)=>Number(u)-Number(h)).map(u=>a[u]):a}function w(a){const u=a.indexOf("#");return u!==-1&&(a=a.slice(0,u)),a}function v(a){let u="";const h=a.indexOf("#");return h!==-1&&(u=a.slice(h)),u}function E(a){a=w(a);const u=a.indexOf("?");return u===-1?"":a.slice(u+1)}function R(a,u){return u.parseNumbers&&!Number.isNaN(Number(a))&&typeof a=="string"&&a.trim()!==""?a=Number(a):u.parseBooleans&&a!==null&&(a.toLowerCase()==="true"||a.toLowerCase()==="false")&&(a=a.toLowerCase()==="true"),a}function S(a,u){u=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},u),_(u.arrayFormatSeparator);const h=l(u),f=Object.create(null);if(typeof a!="string"||(a=a.trim().replace(/^[?#&]/,""),!a))return f;for(const g of a.split("&")){if(g==="")continue;let[k,y]=r(u.decode?g.replace(/\+/g," "):g,"=");y=y===void 0?null:["comma","separator"].includes(u.arrayFormat)?y:m(y,u),h(m(k,u),y,f)}for(const g of Object.keys(f)){const k=f[g];if(typeof k=="object"&&k!==null)for(const y of Object.keys(k))k[y]=R(k[y],u);else f[g]=R(k,u)}return u.sort===!1?f:(u.sort===!0?Object.keys(f).sort():Object.keys(f).sort(u.sort)).reduce((g,k)=>{const y=f[k];return y&&typeof y=="object"&&!Array.isArray(y)?g[k]=s(y):g[k]=y,g},Object.create(null))}t.extract=E,t.parse=S,t.stringify=(a,u)=>{if(!a)return"";u=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},u),_(u.arrayFormatSeparator);const h=y=>u.skipNull&&i(a[y])||u.skipEmptyString&&a[y]==="",f=c(u),g={};for(const y of Object.keys(a))h(y)||(g[y]=a[y]);const k=Object.keys(g);return u.sort!==!1&&k.sort(u.sort),k.map(y=>{const T=a[y];return T===void 0?"":T===null?d(y,u):Array.isArray(T)?T.reduce(f(y),[]).join("&"):d(y,u)+"="+d(T,u)}).filter(y=>y.length>0).join("&")},t.parseUrl=(a,u)=>{u=Object.assign({decode:!0},u);const[h,f]=r(a,"#");return Object.assign({url:h.split("?")[0]||"",query:S(E(a),u)},u&&u.parseFragmentIdentifier&&f?{fragmentIdentifier:m(f,u)}:{})},t.stringifyUrl=(a,u)=>{u=Object.assign({encode:!0,strict:!0},u);const h=w(a.url).split("?")[0]||"",f=t.extract(a.url),g=t.parse(f,{sort:!1}),k=Object.assign(g,a.query);let y=t.stringify(k,u);y&&(y=`?${y}`);let T=v(a.url);return a.fragmentIdentifier&&(T=`#${d(a.fragmentIdentifier,u)}`),`${h}${y}${T}`},t.pick=(a,u,h)=>{h=Object.assign({parseFragmentIdentifier:!0},h);const{url:f,query:g,fragmentIdentifier:k}=t.parseUrl(a,h);return t.stringifyUrl({url:f,query:o(g,u),fragmentIdentifier:k},h)},t.exclude=(a,u,h)=>{const f=Array.isArray(u)?g=>!u.includes(g):(g,k)=>!u(g,k);return t.pick(a,f,h)}})(it);function $n(t){const e=t.indexOf("?")!==-1?t.indexOf("?"):void 0;return typeof e<"u"?t.substr(e):""}function Pn(t,e){let n=st(t);return n=Object.assign(Object.assign({},n),e),t=Dn(n),t}function st(t){return it.parse(t)}function Dn(t){return it.stringify(t)}function jn(t){return typeof t.bridge<"u"}function Hn(t){const e=t.indexOf(":"),n=t.indexOf("?")!==-1?t.indexOf("?"):void 0,r=t.substring(0,e),o=t.substring(e+1,n);function i(s){const v=s.split("@");return{handshakeTopic:v[0],version:parseInt(v[1],10)}}const c=i(o),l=typeof n<"u"?t.substr(n):"";function _(s){const w=st(s);return{key:w.key||"",bridge:w.bridge||""}}const d=_(l);return Object.assign(Object.assign({protocol:r},c),d)}function Vi(t){return t===""||typeof t=="string"&&t.trim()===""}function Ji(t){return!(t&&t.length)}function Gi(t){return we(t)}function Yi(t){return et(t)}function Ki(t){return pn(t)}function Zi(t){return Ko(t)}function Xi(t){return Zo(t)}function es(t,e){return hn(t,e)}function ts(t){return typeof t.params=="object"}function Wn(t){return typeof t.method<"u"}function z(t){return typeof t.result<"u"}function ne(t){return typeof t.error<"u"}function qe(t){return typeof t.event<"u"}function Fn(t){return xo.includes(t)||t.startsWith("wc_")}function Bn(t){return t.method.startsWith("wc_")?!0:!Be.includes(t.method)}const ns=Object.freeze(Object.defineProperty({__proto__:null,addHexPrefix:Ui,appendToQueryString:Pn,concatArrayBuffers:_i,concatBuffers:pi,convertArrayBufferToBuffer:he,convertArrayBufferToHex:gn,convertArrayBufferToNumber:ui,convertArrayBufferToUtf8:li,convertBufferToArrayBuffer:vn,convertBufferToHex:fi,convertBufferToNumber:hi,convertBufferToUtf8:di,convertHexToArrayBuffer:yn,convertHexToBuffer:wi,convertHexToNumber:ki,convertHexToUtf8:bi,convertNumberToArrayBuffer:Ci,convertNumberToBuffer:Ei,convertNumberToHex:wn,convertNumberToUtf8:Si,convertUtf8ToArrayBuffer:mi,convertUtf8ToBuffer:gi,convertUtf8ToHex:vi,convertUtf8ToNumber:yi,detectEnv:ke,detectOS:Ee,formatIOSMobile:ji,formatMobileRegistry:Qi,formatMobileRegistryEntry:Un,formatQueryString:Dn,formatRpcError:An,getClientMeta:Ae,getCrypto:Li,getCryptoOrThrow:Mi,getDappRegistryUrl:zi,getDocument:Ti,getDocumentOrThrow:Ri,getEncoding:Xi,getFromWindow:xi,getFromWindowOrThrow:Ii,getInfuraRpcUrl:Nn,getLocal:rt,getLocalStorage:be,getLocalStorageOrThrow:Ai,getLocation:kn,getLocationOrThrow:Ni,getMobileLinkRegistry:Wi,getMobileRegistryEntry:Ln,getNavigator:bn,getNavigatorOrThrow:Oi,getQueryString:$n,getRpcUrl:Mn,getType:Zi,getWalletRegistryUrl:Bi,isAndroid:En,isArrayBuffer:Ki,isBrowser:In,isBuffer:Gi,isEmptyArray:Ji,isEmptyString:Vi,isHexString:es,isIOS:Cn,isInternalEvent:qe,isJsonRpcRequest:Wn,isJsonRpcResponseError:ne,isJsonRpcResponseSuccess:z,isJsonRpcSubscription:ts,isMobile:Sn,isNode:xn,isReservedEvent:Fn,isSilentPayload:Bn,isTypedArray:Yi,isWalletConnectSession:jn,logDeprecationWarning:Di,parseQueryString:st,parseWalletConnectUri:Hn,payloadId:On,promisify:Fi,removeHexLeadingZeros:Pi,removeHexPrefix:$i,removeLocal:ot,safeJsonParse:Rn,safeJsonStringify:Tn,sanitizeHex:qi,saveMobileLinkInfo:Hi,setLocal:nt,uuid:de},Symbol.toStringTag,{value:"Module"}));class rs{constructor(){this._eventEmitters=[],typeof window<"u"&&typeof window.addEventListener<"u"&&(window.addEventListener("online",()=>this.trigger("online")),window.addEventListener("offline",()=>this.trigger("offline")))}on(e,n){this._eventEmitters.push({event:e,callback:n})}trigger(e){let n=[];e&&(n=this._eventEmitters.filter(r=>r.event===e)),n.forEach(r=>{r.callback()})}}const os=typeof global.WebSocket<"u"?global.WebSocket:require("ws");class is{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new rs,!e.url||typeof e.url!="string")throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",()=>this._socketCreate())}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return this.readyState===0}set connected(e){}get connected(){return this.readyState===1}set closing(e){}get closing(){return this.readyState===2}set closed(e){}get closed(){return this.readyState===3}open(){this._socketCreate()}close(){this._socketClose()}send(e,n,r){if(!n||typeof n!="string")throw new Error("Missing or invalid topic field");this._socketSend({topic:n,type:"pub",payload:e,silent:!!r})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,n){this._events.push({event:e,callback:n})}_socketCreate(){if(this._nextSocket)return;const e=ss(this._url,this._protocol,this._version);if(this._nextSocket=new os(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=n=>this._socketReceive(n),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=n=>this._socketError(n),this._nextSocket.onclose=()=>{setTimeout(()=>{this._nextSocket=null,this._socketCreate()},1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const n=JSON.stringify(e);this._socket&&this._socket.readyState===1?this._socket.send(n):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let n;try{n=JSON.parse(e.data)}catch{return}if(this._socketSend({topic:n.topic,type:"ack",payload:"",silent:!0}),this._socket&&this._socket.readyState===1){const r=this._events.filter(o=>o.event==="message");r&&r.length&&r.forEach(o=>o.callback(n))}}_socketError(e){const n=this._events.filter(r=>r.event==="error");n&&n.length&&n.forEach(r=>r.callback(e))}_queueSubscriptions(){this._subscriptions.forEach(n=>this._queue.push({topic:n,type:"sub",payload:"",silent:!0})),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach(n=>this._socketSend(n)),this._queue=[]}}function ss(t,e,n){var r,o;const c=(t.startsWith("https")?t.replace("https","wss"):t.startsWith("http")?t.replace("http","ws"):t).split("?"),l=In()?{protocol:e,version:n,env:"browser",host:((r=kn())===null||r===void 0?void 0:r.host)||""}:{protocol:e,version:n,env:((o=ke())===null||o===void 0?void 0:o.name)||""},_=Pn($n(c[1]||""),l);return c[0]+"?"+_}class as{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter(n=>n.event!==e)}trigger(e){let n=[],r;Wn(e)?r=e.method:z(e)||ne(e)?r=`response:${e.id}`:qe(e)?r=e.event:r="",r&&(n=this._eventEmitters.filter(o=>o.event===r)),(!n||!n.length)&&!Fn(r)&&!qe(r)&&(n=this._eventEmitters.filter(o=>o.event==="call_request")),n.forEach(o=>{if(ne(e)){const i=new Error(e.error.message);o.callback(i,null)}else o.callback(null,e)})}}class cs{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const n=rt(this.storageId);return n&&jn(n)&&(e=n),e}setSession(e){return nt(this.storageId,e),e}removeSession(){ot(this.storageId)}}const ls="walletconnect.org",us="abcdefghijklmnopqrstuvwxyz0123456789",zn=us.split("").map(t=>`https://${t}.bridge.walletconnect.org`);function _s(t){let e=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0];return e=e.split(":")[0],e=e.split("?")[0],e}function ds(t){return _s(t).split(".").slice(-2).join(".")}function fs(){return Math.floor(Math.random()*zn.length)}function hs(){return zn[fs()]}function ps(t){return ds(t)===ls}function ms(t){return ps(t)?hs():t}class gs{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new as,this._clientMeta=Ae()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new cs(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...Be,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error(Eo);e.connectorOpts.bridge&&(this.bridge=ms(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const n=e.connectorOpts.session||this._getStorageSession();n&&(this.session=n),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new is({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const n=yn(e);this._key=n}get key(){return this._key?gn(this._key,!0):""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=de()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=Ae()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:n,bridge:r,key:o}=this._parseUri(e);this.handshakeTopic=n,this.bridge=r,this.key=o}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,n){const r={event:e,callback:n};this._eventManager.subscribe(r)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const n=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=n.id,this.handshakeTopic=de(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",()=>{throw new Error(xt)});const r=()=>{this.killSession()};try{const o=await this._sendCallRequest(n);return o&&r(),o}catch(o){throw r(),o}}async connect(e){if(!this._qrcodeModal)throw new Error(So);return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise(async(n,r)=>{this.on("modal_closed",()=>r(new Error(xt))),this.on("connect",(o,i)=>{if(o)return r(o);n(i.params[0])})}))}async createSession(e){if(this._connected)throw new Error(xe);if(this.pending)return;this._key=await this._generateKey();const n=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=n.id,this.handshakeTopic=de(),this._sendSessionRequest(n,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(xe);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},r={id:this.handshakeId,jsonrpc:"2.0",result:n};this._sendResponse(r),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(xe);const n=e&&e.message?e.message:go,r=this._formatResponse({id:this.handshakeId,error:{message:n}});this._sendResponse(r),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(H);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const n={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},r=this._formatRequest({method:"wc_sessionUpdate",params:[n]});this._sendSessionRequest(r,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const n=e?e.message:"Session Disconnected",r={approved:!1,chainId:null,networkId:null,accounts:null},o=this._formatRequest({method:"wc_sessionUpdate",params:[r]});await this._sendRequest(o),this._handleSessionDisconnect(n)}async sendTransaction(e){if(!this._connected)throw new Error(H);const n=e,r=this._formatRequest({method:"eth_sendTransaction",params:[n]});return await this._sendCallRequest(r)}async signTransaction(e){if(!this._connected)throw new Error(H);const n=e,r=this._formatRequest({method:"eth_signTransaction",params:[n]});return await this._sendCallRequest(r)}async signMessage(e){if(!this._connected)throw new Error(H);const n=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(n)}async signPersonalMessage(e){if(!this._connected)throw new Error(H);const n=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(n)}async signTypedData(e){if(!this._connected)throw new Error(H);const n=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(n)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const n=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(n)}unsafeSend(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),new Promise((r,o)=>{this._subscribeToResponse(e.id,(i,c)=>{if(i){o(i);return}if(!c)throw new Error(vo);r(c)})})}async sendCustomRequest(e,n){if(!this._connected)throw new Error(H);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return wn(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params;break;case"personal_sign":e.params;break}const r=this._formatRequest(e);return await this._sendCallRequest(r,n)}approveRequest(e){if(z(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(yo)}rejectRequest(e){if(ne(e)){const n=this._formatResponse(e);this._sendResponse(n)}else throw new Error(wo)}transportClose(){this._transport.close()}async _sendRequest(e,n){const r=this._formatRequest(e),o=await this._encrypt(r),i=typeof(n==null?void 0:n.topic)<"u"?n.topic:this.peerId,c=JSON.stringify(o),l=typeof(n==null?void 0:n.forcePushNotification)<"u"?!n.forcePushNotification:Bn(r);this._transport.send(c,i,l)}async _sendResponse(e){const n=await this._encrypt(e),r=this.peerId,o=JSON.stringify(n);this._transport.send(o,r,!0)}async _sendSessionRequest(e,n,r){this._sendRequest(e,r),this._subscribeToSessionResponse(e.id,n)}_sendCallRequest(e,n){return this._sendRequest(e,n),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:n}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(typeof e.method>"u")throw new Error(bo);return{id:typeof e.id>"u"?On():e.id,jsonrpc:"2.0",method:e.method,params:typeof e.params>"u"?[]:e.params}}_formatResponse(e){if(typeof e.id>"u")throw new Error(ko);const n={id:e.id,jsonrpc:"2.0"};if(ne(e)){const r=An(e.error);return Object.assign(Object.assign(Object.assign({},n),e),{error:r})}else if(z(e))return Object.assign(Object.assign({},n),e);throw new Error(St)}_handleSessionDisconnect(e){const n=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),ot(Le)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:n}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,n){n?n.approved?(this._connected?(n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,n.chainId&&(this.chainId=n.chainId),n.accounts&&(this.accounts=n.accounts),n.peerId&&!this.peerId&&(this.peerId=n.peerId),n.peerMeta&&!this.peerMeta&&(this.peerMeta=n.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let r;try{r=JSON.parse(e.payload)}catch{return}const o=await this._decrypt(r);o&&this._eventManager.trigger(o)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,n){this.on(`response:${e}`,n)}_subscribeToSessionResponse(e,n){this._subscribeToResponse(e,(r,o)=>{if(r){this._handleSessionResponse(r.message);return}z(o)?this._handleSessionResponse(n,o.result):o.error&&o.error.message?this._handleSessionResponse(o.error.message):this._handleSessionResponse(n)})}_subscribeToCallResponse(e){return new Promise((n,r)=>{this._subscribeToResponse(e,(o,i)=>{if(o){r(o);return}z(i)?n(i.result):i.error&&i.error.message?r(i.error):r(new Error(St))})})}_subscribeToInternalEvents(){this.on("display_uri",()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,()=>{this._eventManager.trigger({event:"modal_closed",params:[]})},this._qrcodeModalOptions)}),this.on("connect",()=>{this._qrcodeModal&&this._qrcodeModal.close()}),this.on("call_request_sent",(e,n)=>{const{request:r}=n.params[0];if(Sn()&&this._signingMethods.includes(r.method)){const o=rt(Le);o&&(window.location.href=o.href)}}),this.on("wc_sessionRequest",(e,n)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=n.id,this.peerId=n.params[0].peerId,this.peerMeta=n.params[0].peerMeta;const r=Object.assign(Object.assign({},n),{method:"session_request"});this._eventManager.trigger(r)}),this.on("wc_sessionUpdate",(e,n)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",n.params[0])})}_initTransport(){this._transport.on("message",e=>this._handleIncomingMessages(e)),this._transport.on("open",()=>this._eventManager.trigger({event:"transport_open",params:[]})),this._transport.on("close",()=>this._eventManager.trigger({event:"transport_close",params:[]})),this._transport.on("error",()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]})),this._transport.open()}_formatUri(){const e=this.protocol,n=this.handshakeTopic,r=this.version,o=encodeURIComponent(this.bridge),i=this.key;return`${e}:${n}@${r}?bridge=${o}&key=${i}`}_parseUri(e){const n=Hn(e);if(n.protocol===this.protocol){if(!n.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const r=n.handshakeTopic;if(!n.bridge)throw Error("Invalid or missing bridge url parameter value");const o=decodeURIComponent(n.bridge);if(!n.key)throw Error("Invalid or missing key parameter value");const i=n.key;return{handshakeTopic:r,bridge:o,key:i}}else throw new Error(Co)}async _generateKey(){return this._cryptoLib?await this._cryptoLib.generateKey():null}async _encrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.encrypt(e,n):null}async _decrypt(e){const n=this._key;return this._cryptoLib&&n?await this._cryptoLib.decrypt(e,n):null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||typeof e.url!="string")throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||typeof e.type!="string")throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||typeof e.token!="string")throw Error("Invalid or missing pushServerOpts.token parameter value");const n={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",async(r,o)=>{if(r)throw r;if(e.peerMeta){const i=o.params[0].peerMeta.name;n.peerName=i}try{if(!(await(await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)})).json()).success)throw Error("Failed to register in Push Server")}catch{throw Error("Failed to register in Push Server")}})}}function vs(t){return re.getBrowerCrypto().getRandomValues(new Uint8Array(t))}const Qn=256,Vn=Qn,ys=Qn,j="AES-CBC",ws=`SHA-${Vn}`,Ue="HMAC",bs="encrypt",ks="decrypt",Es="sign",Cs="verify";function Ss(t){return t===j?{length:Vn,name:j}:{hash:{name:ws},name:Ue}}function xs(t){return t===j?[bs,ks]:[Es,Cs]}async function at(t,e=j){return re.getSubtleCrypto().importKey("raw",t,Ss(e),!0,xs(e))}async function Is(t,e,n){const r=re.getSubtleCrypto(),o=await at(e,j),i=await r.encrypt({iv:t,name:j},o,n);return new Uint8Array(i)}async function Rs(t,e,n){const r=re.getSubtleCrypto(),o=await at(e,j),i=await r.decrypt({iv:t,name:j},o,n);return new Uint8Array(i)}async function Ts(t,e){const n=re.getSubtleCrypto(),r=await at(t,Ue),o=await n.sign({length:ys,name:Ue},r,e);return new Uint8Array(o)}function Os(t,e,n){return Is(t,e,n)}function Ns(t,e,n){return Rs(t,e,n)}async function Jn(t,e){return await Ts(t,e)}async function Gn(t){const e=(t||256)/8,n=vs(e);return vn(Y(n))}async function Yn(t,e){const n=D(t.data),r=D(t.iv),o=D(t.hmac),i=P(o,!1),c=mn(n,r),l=await Jn(e,c),_=P(l,!1);return G(i)===G(_)}async function Ms(t,e,n){const r=J(he(e)),o=n||await Gn(128),i=J(he(o)),c=P(i,!1),l=JSON.stringify(t),_=fn(l),d=await Os(i,r,_),m=P(d,!1),s=mn(d,i),w=await Jn(r,s),v=P(w,!1);return{data:m,hmac:v,iv:c}}async function Ls(t,e){const n=J(he(e));if(!n)throw new Error("Missing key: required for decryption");if(!await Yn(t,n))return null;const o=D(t.data),i=D(t.iv),c=await Ns(i,n,o),l=_n(c);let _;try{_=JSON.parse(l)}catch{return null}return _}const As=Object.freeze(Object.defineProperty({__proto__:null,decrypt:Ls,encrypt:Ms,generateKey:Gn,verifyHmac:Yn},Symbol.toStringTag,{value:"Module"}));class qs extends gs{constructor(e,n){super({cryptoLib:As,connectorOpts:e,pushServerOpts:n})}}const Us=Dt(ns);var $s=function(){var t=document.getSelection();if(!t.rangeCount)return function(){};for(var e=document.activeElement,n=[],r=0;r<t.rangeCount;r++)n.push(t.getRangeAt(r));switch(e.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":e.blur();break;default:e=null;break}return t.removeAllRanges(),function(){t.type==="Caret"&&t.removeAllRanges(),t.rangeCount||n.forEach(function(o){t.addRange(o)}),e&&e.focus()}},Ps=$s,It={"text/plain":"Text","text/html":"Url",default:"Text"},Ds="Copy to clipboard: #{key}, Enter";function js(t){var e=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return t.replace(/#{\s*key\s*}/g,e)}function Hs(t,e){var n,r,o,i,c,l,_=!1;e||(e={}),n=e.debug||!1;try{o=Ps(),i=document.createRange(),c=document.getSelection(),l=document.createElement("span"),l.textContent=t,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",function(m){if(m.stopPropagation(),e.format)if(m.preventDefault(),typeof m.clipboardData>"u"){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=It[e.format]||It.default;window.clipboardData.setData(s,t)}else m.clipboardData.clearData(),m.clipboardData.setData(e.format,t);e.onCopy&&(m.preventDefault(),e.onCopy(m.clipboardData))}),document.body.appendChild(l),i.selectNodeContents(l),c.addRange(i);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");_=!0}catch(m){n&&console.error("unable to copy using execCommand: ",m),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(e.format||"text",t),e.onCopy&&e.onCopy(window.clipboardData),_=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),r=js("message"in e?e.message:Ds),window.prompt(r,t)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(i):c.removeAllRanges()),l&&document.body.removeChild(l),o()}return _}var Ws=Hs;function Kn(t,e){for(var n in e)t[n]=e[n];return t}function $e(t,e){for(var n in t)if(n!=="__source"&&!(n in e))return!0;for(var r in e)if(r!=="__source"&&t[r]!==e[r])return!0;return!1}function pe(t,e){this.props=t,this.context=e}function Zn(t,e){function n(o){var i=this.props.ref,c=i==o.ref;return!c&&i&&(i.call?i(null):i.current=null),e?!e(this.props,o)||!c:$e(this.props,o)}function r(o){return this.shouldComponentUpdate=n,L(t,o)}return r.displayName="Memo("+(t.displayName||t.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(pe.prototype=new M).isPureReactComponent=!0,pe.prototype.shouldComponentUpdate=function(t,e){return $e(this.props,t)||$e(this.state,e)};var Rt=b.__b;b.__b=function(t){t.type&&t.type.__f&&t.ref&&(t.props.ref=t.ref,t.ref=null),Rt&&Rt(t)};var Fs=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Xn(t){function e(n){var r=Kn({},n);return delete r.ref,t(r,n.ref||null)}return e.$$typeof=Fs,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(t.displayName||t.name)+")",e}var Tt=function(t,e){return t==null?null:U(U(t).map(e))},er={map:Tt,forEach:Tt,count:function(t){return t?U(t).length:0},only:function(t){var e=U(t);if(e.length!==1)throw"Children.only";return e[0]},toArray:U},Bs=b.__e;b.__e=function(t,e,n,r){if(t.then){for(var o,i=e;i=i.__;)if((o=i.__c)&&o.__c)return e.__e==null&&(e.__e=n.__e,e.__k=n.__k),o.__c(t,e)}Bs(t,e,n,r)};var Ot=b.unmount;function tr(t,e,n){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),t.__c.__H=null),(t=Kn({},t)).__c!=null&&(t.__c.__P===n&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(r){return tr(r,e,n)})),t}function nr(t,e,n){return t&&n&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(r){return nr(r,e,n)}),t.__c&&t.__c.__P===e&&(t.__e&&n.appendChild(t.__e),t.__c.__e=!0,t.__c.__P=n)),t}function X(){this.__u=0,this.t=null,this.__b=null}function rr(t){var e=t.__.__c;return e&&e.__a&&e.__a(t)}function or(t){var e,n,r;function o(i){if(e||(e=t()).then(function(c){n=c.default||c},function(c){r=c}),r)throw r;if(!n)throw e;return L(n,i)}return o.displayName="Lazy",o.__f=!0,o}function Q(){this.u=null,this.o=null}b.unmount=function(t){var e=t.__c;e&&e.__R&&e.__R(),e&&32&t.__u&&(t.type=null),Ot&&Ot(t)},(X.prototype=new M).__c=function(t,e){var n=e.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=rr(r.__v),i=!1,c=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=c;var l=function(){if(!--r.__u){if(r.state.__a){var _=r.state.__a;r.__v.__k[0]=nr(_,_.__c.__P,_.__c.__O)}var d;for(r.setState({__a:r.__b=null});d=r.t.pop();)d.forceUpdate()}};r.__u++||32&e.__u||r.setState({__a:r.__b=r.__v.__k[0]}),t.then(c,c)},X.prototype.componentWillUnmount=function(){this.t=[]},X.prototype.render=function(t,e){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=tr(this.__b,n,r.__O=r.__P)}this.__b=null}var o=e.__a&&L(A,null,t.fallback);return o&&(o.__u&=-33),[L(A,null,e.__a?null:t.children),o]};var Nt=function(t,e,n){if(++n[1]===n[0]&&t.o.delete(e),t.props.revealOrder&&(t.props.revealOrder[0]!=="t"||!t.o.size))for(n=t.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.u=n=n[2]}};function zs(t){return this.getChildContext=function(){return t.context},t.children}function Qs(t){var e=this,n=t.i;e.componentWillUnmount=function(){te(null,e.l),e.l=null,e.i=null},e.i&&e.i!==n&&e.componentWillUnmount(),e.l||(e.i=n,e.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),e.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),e.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),e.i.removeChild(r)}}),te(L(zs,{context:e.context},t.__v),e.l)}function ir(t,e){var n=L(Qs,{__v:t,i:e});return n.containerInfo=e,n}(Q.prototype=new M).__a=function(t){var e=this,n=rr(e.__v),r=e.o.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),Nt(e,t,r)):o()};n?n(i):i()}},Q.prototype.render=function(t){this.u=null,this.o=new Map;var e=U(t.children);t.revealOrder&&t.revealOrder[0]==="b"&&e.reverse();for(var n=e.length;n--;)this.o.set(e[n],this.u=[1,0,this.u]);return t.children},Q.prototype.componentDidUpdate=Q.prototype.componentDidMount=function(){var t=this;this.o.forEach(function(e,n){Nt(t,n,e)})};var sr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Vs=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Js=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Gs=/[A-Z0-9]/g,Ys=typeof document<"u",Ks=function(t){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(t)};function ar(t,e,n){return e.__k==null&&(e.textContent=""),te(t,e),typeof n=="function"&&n(),t?t.__c:null}function cr(t,e,n){return Yt(t,e),typeof n=="function"&&n(),t?t.__c:null}M.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(M.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(e){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:e})}})});var Mt=b.event;function Zs(){}function Xs(){return this.cancelBubble}function ea(){return this.defaultPrevented}b.event=function(t){return Mt&&(t=Mt(t)),t.persist=Zs,t.isPropagationStopped=Xs,t.isDefaultPrevented=ea,t.nativeEvent=t};var ct,ta={enumerable:!1,configurable:!0,get:function(){return this.class}},Lt=b.vnode;b.vnode=function(t){typeof t.type=="string"&&function(e){var n=e.props,r=e.type,o={};for(var i in n){var c=n[i];if(!(i==="value"&&"defaultValue"in n&&c==null||Ys&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var l=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&c===!0?c="":l==="translate"&&c==="no"?c=!1:l==="ondoubleclick"?i="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||Ks(n.type)?l==="onfocus"?i="onfocusin":l==="onblur"?i="onfocusout":Js.test(i)?i=l:r.indexOf("-")===-1&&Vs.test(i)?i=i.replace(Gs,"-$&").toLowerCase():c===null&&(c=void 0):l=i="oninput",l==="oninput"&&o[i=l]&&(i="oninputCapture"),o[i]=c}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=U(n.children).forEach(function(_){_.props.selected=o.value.indexOf(_.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=U(n.children).forEach(function(_){_.props.selected=o.multiple?o.defaultValue.indexOf(_.props.value)!=-1:o.defaultValue==_.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",ta)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),e.props=o}(t),t.$$typeof=sr,Lt&&Lt(t)};var At=b.__r;b.__r=function(t){At&&At(t),ct=t.__c};var qt=b.diffed;b.diffed=function(t){qt&&qt(t);var e=t.props,n=t.__e;n!=null&&t.type==="textarea"&&"value"in e&&e.value!==n.value&&(n.value=e.value==null?"":e.value),ct=null};var lr={ReactCurrentDispatcher:{current:{readContext:function(t){return ct.__n[t.__c].props.value}}}},na="17.0.2";function ur(t){return L.bind(null,t)}function ae(t){return!!t&&t.$$typeof===sr}function _r(t){return ae(t)&&t.type===A}function dr(t){return!!t&&!!t.displayName&&(typeof t.displayName=="string"||t.displayName instanceof String)&&t.displayName.startsWith("Memo(")}function fr(t){return ae(t)?fo.apply(null,arguments):t}function hr(t){return!!t.__k&&(te(null,t),!0)}function pr(t){return t&&(t.base||t.nodeType===1&&t)||null}var mr=function(t,e){return t(e)},gr=function(t,e){return t(e)},vr=A;function lt(t){t()}function yr(t){return t}function wr(){return[!1,lt]}var br=ie,kr=ae;function Er(t,e){var n=e(),r=ge({h:{__:n,v:e}}),o=r[0].h,i=r[1];return ie(function(){o.__=n,o.v=e,Ie(o)&&i({h:o})},[t,n,e]),We(function(){return Ie(o)&&i({h:o}),t(function(){Ie(o)&&i({h:o})})},[t]),n}function Ie(t){var e,n,r=t.v,o=t.__;try{var i=r();return!((e=o)===(n=i)&&(e!==0||1/e==1/n)||e!=e&&n!=n)}catch{return!0}}var ra={useState:ge,useId:on,useReducer:He,useEffect:We,useLayoutEffect:ie,useInsertionEffect:br,useTransition:wr,useDeferredValue:yr,useSyncExternalStore:Er,startTransition:lt,useRef:Xt,useImperativeHandle:en,useMemo:ve,useCallback:tn,useContext:nn,useDebugValue:rn,version:"17.0.2",Children:er,render:ar,hydrate:cr,unmountComponentAtNode:hr,createPortal:ir,createElement:L,createContext:Kt,createFactory:ur,cloneElement:fr,createRef:zt,Fragment:A,isValidElement:ae,isElement:kr,isFragment:_r,isMemo:dr,findDOMNode:pr,Component:M,PureComponent:pe,memo:Zn,forwardRef:Xn,flushSync:gr,unstable_batchedUpdates:mr,StrictMode:vr,Suspense:X,SuspenseList:Q,lazy:or,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:lr};const oa=Object.freeze(Object.defineProperty({__proto__:null,Children:er,Component:M,Fragment:A,PureComponent:pe,StrictMode:vr,Suspense:X,SuspenseList:Q,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:lr,cloneElement:fr,createContext:Kt,createElement:L,createFactory:ur,createPortal:ir,createRef:zt,default:ra,findDOMNode:pr,flushSync:gr,forwardRef:Xn,hydrate:cr,isElement:kr,isFragment:_r,isMemo:dr,isValidElement:ae,lazy:or,memo:Zn,render:ar,startTransition:lt,unmountComponentAtNode:hr,unstable_batchedUpdates:mr,useCallback:tn,useContext:nn,useDebugValue:rn,useDeferredValue:yr,useEffect:We,useErrorBoundary:ho,useId:on,useImperativeHandle:en,useInsertionEffect:br,useLayoutEffect:ie,useMemo:ve,useReducer:He,useRef:Xt,useState:ge,useSyncExternalStore:Er,useTransition:wr,version:na},Symbol.toStringTag,{value:"Module"})),ia=Dt(oa);function Cr(t){return t&&typeof t=="object"&&"default"in t?t.default:t}var O=Us,Sr=Cr(so),sa=Cr(Ws),p=ia;function aa(t){Sr.toString(t,{type:"terminal"}).then(console.log)}var ca=`:root {
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
`;typeof Symbol<"u"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator")));typeof Symbol<"u"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function la(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}var ua="data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",_a="WalletConnect",da=300,fa="rgb(64, 153, 255)",xr="walletconnect-wrapper",Ut="walletconnect-style-sheet",Ir="walletconnect-qrcode-modal",ha="walletconnect-qrcode-close",Rr="walletconnect-qrcode-text",pa="walletconnect-connect-button";function ma(t){return p.createElement("div",{className:"walletconnect-modal__header"},p.createElement("img",{src:ua,className:"walletconnect-modal__headerLogo"}),p.createElement("p",null,_a),p.createElement("div",{className:"walletconnect-modal__close__wrapper",onClick:t.onClose},p.createElement("div",{id:ha,className:"walletconnect-modal__close__icon"},p.createElement("div",{className:"walletconnect-modal__close__line1"}),p.createElement("div",{className:"walletconnect-modal__close__line2"}))))}function ga(t){return p.createElement("a",{className:"walletconnect-connect__button",href:t.href,id:pa+"-"+t.name,onClick:t.onClick,rel:"noopener noreferrer",style:{backgroundColor:t.color},target:"_blank"},t.name)}var va="data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E";function ya(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick;return p.createElement("a",{className:"walletconnect-modal__base__row",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},p.createElement("h3",{className:"walletconnect-modal__base__row__h3"},r),p.createElement("div",{className:"walletconnect-modal__base__row__right"},p.createElement("div",{className:"walletconnect-modal__base__row__right__app-icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),p.createElement("img",{src:va,className:"walletconnect-modal__base__row__right__caret"})))}function wa(t){var e=t.color,n=t.href,r=t.name,o=t.logo,i=t.onClick,c=window.innerWidth<768?(r.length>8?2.5:2.7)+"vw":"inherit";return p.createElement("a",{className:"walletconnect-connect__button__icon_anchor",href:n,onClick:i,rel:"noopener noreferrer",target:"_blank"},p.createElement("div",{className:"walletconnect-connect__button__icon",style:{background:"url('"+o+"') "+e,backgroundSize:"100%"}}),p.createElement("div",{style:{fontSize:c},className:"walletconnect-connect__button__text"},r))}var ba=5,Re=12;function ka(t){var e=O.isAndroid(),n=p.useState(""),r=n[0],o=n[1],i=p.useState(""),c=i[0],l=i[1],_=p.useState(1),d=_[0],m=_[1],s=c?t.links.filter(function(f){return f.name.toLowerCase().includes(c.toLowerCase())}):t.links,w=t.errorMessage,v=c||s.length>ba,E=Math.ceil(s.length/Re),R=[(d-1)*Re+1,d*Re],S=s.length?s.filter(function(f,g){return g+1>=R[0]&&g+1<=R[1]}):[],a=!e&&E>1,u=void 0;function h(f){o(f.target.value),clearTimeout(u),f.target.value?u=setTimeout(function(){l(f.target.value),m(1)},1e3):(o(""),l(""),m(1))}return p.createElement("div",null,p.createElement("p",{id:Rr,className:"walletconnect-qrcode__text"},e?t.text.connect_mobile_wallet:t.text.choose_preferred_wallet),!e&&p.createElement("input",{className:"walletconnect-search__input",placeholder:"Search",value:r,onChange:h}),p.createElement("div",{className:"walletconnect-connect__buttons__wrapper"+(e?"__android":v&&s.length?"__wrap":"")},e?p.createElement(ga,{name:t.text.connect,color:fa,href:t.uri,onClick:p.useCallback(function(){O.saveMobileLinkInfo({name:"Unknown",href:t.uri})},[])}):S.length?S.map(function(f){var g=f.color,k=f.name,y=f.shortName,T=f.logo,I=O.formatIOSMobile(t.uri,f),N=p.useCallback(function(){O.saveMobileLinkInfo({name:k,href:I})},[S]);return v?p.createElement(wa,{color:g,href:I,name:y||k,logo:T,onClick:N}):p.createElement(ya,{color:g,href:I,name:k,logo:T,onClick:N})}):p.createElement(p.Fragment,null,p.createElement("p",null,w.length?t.errorMessage:t.links.length&&!s.length?t.text.no_wallets_found:t.text.loading))),a&&p.createElement("div",{className:"walletconnect-modal__footer"},Array(E).fill(0).map(function(f,g){var k=g+1,y=d===k;return p.createElement("a",{style:{margin:"auto 10px",fontWeight:y?"bold":"normal"},onClick:function(){return m(k)}},k)})))}function Ea(t){var e=!!t.message.trim();return p.createElement("div",{className:"walletconnect-qrcode__notification"+(e?" notification__show":"")},t.message)}var Ca=function(t){try{var e="";return Promise.resolve(Sr.toString(t,{margin:0,type:"svg"})).then(function(n){return typeof n=="string"&&(e=n.replace("<svg",'<svg class="walletconnect-qrcode__image"')),e})}catch(n){return Promise.reject(n)}};function Sa(t){var e=p.useState(""),n=e[0],r=e[1],o=p.useState(""),i=o[0],c=o[1];p.useEffect(function(){try{return Promise.resolve(Ca(t.uri)).then(function(_){c(_)})}catch(_){Promise.reject(_)}},[]);var l=function(){var _=sa(t.uri);_?(r(t.text.copied_to_clipboard),setInterval(function(){return r("")},1200)):(r("Error"),setInterval(function(){return r("")},1200))};return p.createElement("div",null,p.createElement("p",{id:Rr,className:"walletconnect-qrcode__text"},t.text.scan_qrcode_with_wallet),p.createElement("div",{dangerouslySetInnerHTML:{__html:i}}),p.createElement("div",{className:"walletconnect-modal__footer"},p.createElement("a",{onClick:l},t.text.copy_to_clipboard)),p.createElement(Ea,{message:n}))}function xa(t){var e=O.isAndroid(),n=O.isMobile(),r=n?t.qrcodeModalOptions&&t.qrcodeModalOptions.mobileLinks?t.qrcodeModalOptions.mobileLinks:void 0:t.qrcodeModalOptions&&t.qrcodeModalOptions.desktopLinks?t.qrcodeModalOptions.desktopLinks:void 0,o=p.useState(!1),i=o[0],c=o[1],l=p.useState(!1),_=l[0],d=l[1],m=p.useState(!n),s=m[0],w=m[1],v={mobile:n,text:t.text,uri:t.uri,qrcodeModalOptions:t.qrcodeModalOptions},E=p.useState(""),R=E[0],S=E[1],a=p.useState(!1),u=a[0],h=a[1],f=p.useState([]),g=f[0],k=f[1],y=p.useState(""),T=y[0],I=y[1],N=function(){_||i||r&&!r.length||g.length>0||p.useEffect(function(){var Mr=function(){try{if(e)return Promise.resolve();c(!0);var Ce=la(function(){var K=t.qrcodeModalOptions&&t.qrcodeModalOptions.registryUrl?t.qrcodeModalOptions.registryUrl:O.getWalletRegistryUrl();return Promise.resolve(fetch(K)).then(function(Lr){return Promise.resolve(Lr.json()).then(function(Ar){var qr=Ar.listings,Ur=n?"mobile":"desktop",ce=O.getMobileLinkRegistry(O.formatMobileRegistry(qr,Ur),r);c(!1),d(!0),I(ce.length?"":t.text.no_supported_wallets),k(ce);var ut=ce.length===1;ut&&(S(O.formatIOSMobile(t.uri,ce[0])),w(!0)),h(ut)})})},function(K){c(!1),d(!0),I(t.text.something_went_wrong),console.error(K)});return Promise.resolve(Ce&&Ce.then?Ce.then(function(){}):void 0)}catch(K){return Promise.reject(K)}};Mr()})};N();var Nr=n?s:!s;return p.createElement("div",{id:Ir,className:"walletconnect-qrcode__base animated fadeIn"},p.createElement("div",{className:"walletconnect-modal__base"},p.createElement(ma,{onClose:t.onClose}),u&&s?p.createElement("div",{className:"walletconnect-modal__single_wallet"},p.createElement("a",{onClick:function(){return O.saveMobileLinkInfo({name:g[0].name,href:R})},href:R,rel:"noopener noreferrer",target:"_blank"},t.text.connect_with+" "+(u?g[0].name:"")+" ›")):e||i||!i&&g.length?p.createElement("div",{className:"walletconnect-modal__mobile__toggle"+(Nr?" right__selected":"")},p.createElement("div",{className:"walletconnect-modal__mobile__toggle_selector"}),n?p.createElement(p.Fragment,null,p.createElement("a",{onClick:function(){return w(!1),N()}},t.text.mobile),p.createElement("a",{onClick:function(){return w(!0)}},t.text.qrcode)):p.createElement(p.Fragment,null,p.createElement("a",{onClick:function(){return w(!0)}},t.text.qrcode),p.createElement("a",{onClick:function(){return w(!1),N()}},t.text.desktop))):null,p.createElement("div",null,s||!e&&!i&&!g.length?p.createElement(Sa,Object.assign({},v)):p.createElement(ka,Object.assign({},v,{links:g,errorMessage:T})))))}var Ia={choose_preferred_wallet:"Wähle bevorzugte Wallet",connect_mobile_wallet:"Verbinde mit Mobile Wallet",scan_qrcode_with_wallet:"Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",connect:"Verbinden",qrcode:"QR-Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"In die Zwischenablage kopieren",copied_to_clipboard:"In die Zwischenablage kopiert!",connect_with:"Verbinden mit Hilfe von",loading:"Laden...",something_went_wrong:"Etwas ist schief gelaufen",no_supported_wallets:"Es gibt noch keine unterstützten Wallet",no_wallets_found:"keine Wallet gefunden"},Ra={choose_preferred_wallet:"Choose your preferred wallet",connect_mobile_wallet:"Connect to Mobile Wallet",scan_qrcode_with_wallet:"Scan QR code with a WalletConnect-compatible wallet",connect:"Connect",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copy to clipboard",copied_to_clipboard:"Copied to clipboard!",connect_with:"Connect with",loading:"Loading...",something_went_wrong:"Something went wrong",no_supported_wallets:"There are no supported wallets yet",no_wallets_found:"No wallets found"},Ta={choose_preferred_wallet:"Elige tu billetera preferida",connect_mobile_wallet:"Conectar a billetera móvil",scan_qrcode_with_wallet:"Escanea el código QR con una billetera compatible con WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvil",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Conectar mediante",loading:"Cargando...",something_went_wrong:"Algo salió mal",no_supported_wallets:"Todavía no hay billeteras compatibles",no_wallets_found:"No se encontraron billeteras"},Oa={choose_preferred_wallet:"Choisissez votre portefeuille préféré",connect_mobile_wallet:"Se connecter au portefeuille mobile",scan_qrcode_with_wallet:"Scannez le QR code avec un portefeuille compatible WalletConnect",connect:"Se connecter",qrcode:"QR Code",mobile:"Mobile",desktop:"Desktop",copy_to_clipboard:"Copier",copied_to_clipboard:"Copié!",connect_with:"Connectez-vous à l'aide de",loading:"Chargement...",something_went_wrong:"Quelque chose a mal tourné",no_supported_wallets:"Il n'y a pas encore de portefeuilles pris en charge",no_wallets_found:"Aucun portefeuille trouvé"},Na={choose_preferred_wallet:"원하는 지갑을 선택하세요",connect_mobile_wallet:"모바일 지갑과 연결",scan_qrcode_with_wallet:"WalletConnect 지원 지갑에서 QR코드를 스캔하세요",connect:"연결",qrcode:"QR 코드",mobile:"모바일",desktop:"데스크탑",copy_to_clipboard:"클립보드에 복사",copied_to_clipboard:"클립보드에 복사되었습니다!",connect_with:"와 연결하다",loading:"로드 중...",something_went_wrong:"문제가 발생했습니다.",no_supported_wallets:"아직 지원되는 지갑이 없습니다",no_wallets_found:"지갑을 찾을 수 없습니다"},Ma={choose_preferred_wallet:"Escolha sua carteira preferida",connect_mobile_wallet:"Conectar-se à carteira móvel",scan_qrcode_with_wallet:"Ler o código QR com uma carteira compatível com WalletConnect",connect:"Conectar",qrcode:"Código QR",mobile:"Móvel",desktop:"Desktop",copy_to_clipboard:"Copiar",copied_to_clipboard:"Copiado!",connect_with:"Ligar por meio de",loading:"Carregamento...",something_went_wrong:"Algo correu mal",no_supported_wallets:"Ainda não há carteiras suportadas",no_wallets_found:"Nenhuma carteira encontrada"},La={choose_preferred_wallet:"选择你的钱包",connect_mobile_wallet:"连接至移动端钱包",scan_qrcode_with_wallet:"使用兼容 WalletConnect 的钱包扫描二维码",connect:"连接",qrcode:"二维码",mobile:"移动",desktop:"桌面",copy_to_clipboard:"复制到剪贴板",copied_to_clipboard:"复制到剪贴板成功！",connect_with:"通过以下方式连接",loading:"正在加载...",something_went_wrong:"出了问题",no_supported_wallets:"目前还没有支持的钱包",no_wallets_found:"没有找到钱包"},Aa={choose_preferred_wallet:"کیف پول مورد نظر خود را انتخاب کنید",connect_mobile_wallet:"به کیف پول موبایل وصل شوید",scan_qrcode_with_wallet:"کد QR را با یک کیف پول سازگار با WalletConnect اسکن کنید",connect:"اتصال",qrcode:"کد QR",mobile:"سیار",desktop:"دسکتاپ",copy_to_clipboard:"کپی به کلیپ بورد",copied_to_clipboard:"در کلیپ بورد کپی شد!",connect_with:"ارتباط با",loading:"...بارگذاری",something_went_wrong:"مشکلی پیش آمد",no_supported_wallets:"هنوز هیچ کیف پول پشتیبانی شده ای وجود ندارد",no_wallets_found:"هیچ کیف پولی پیدا نشد"},$t={de:Ia,en:Ra,es:Ta,fr:Oa,ko:Na,pt:Ma,zh:La,fa:Aa};function qa(){var t=O.getDocumentOrThrow(),e=t.getElementById(Ut);e&&t.head.removeChild(e);var n=t.createElement("style");n.setAttribute("id",Ut),n.innerText=ca,t.head.appendChild(n)}function Ua(){var t=O.getDocumentOrThrow(),e=t.createElement("div");return e.setAttribute("id",xr),t.body.appendChild(e),e}function Tr(){var t=O.getDocumentOrThrow(),e=t.getElementById(Ir);e&&(e.className=e.className.replace("fadeIn","fadeOut"),setTimeout(function(){var n=t.getElementById(xr);n&&t.body.removeChild(n)},da))}function $a(t){return function(){Tr(),t&&t()}}function Pa(){var t=O.getNavigatorOrThrow().language.split("-")[0]||"en";return $t[t]||$t.en}function Da(t,e,n){qa();var r=Ua();p.render(p.createElement(xa,{text:Pa(),uri:t,onClose:$a(e),qrcodeModalOptions:n}),r)}function ja(){Tr()}var Or=function(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"};function Ha(t,e,n){console.log(t),Or()?aa(t):Da(t,e,n)}function Wa(){Or()||ja()}var Fa={open:Ha,close:Wa},Ba=Fa;const za=Pe(Ba);class Qa extends jr{constructor(e){super(),this.events=new Pt,this.accounts=[],this.chainId=1,this.pending=!1,this.bridge="https://bridge.walletconnect.org",this.qrcode=!0,this.qrcodeModalOptions=void 0,this.opts=e,this.chainId=(e==null?void 0:e.chainId)||this.chainId,this.wc=this.register(e)}get connected(){return typeof this.wc<"u"&&this.wc.connected}get connecting(){return this.pending}get connector(){return this.wc=this.register(this.opts),this.wc}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}off(e,n){this.events.off(e,n)}removeListener(e,n){this.events.removeListener(e,n)}async open(e){if(this.connected){this.onOpen();return}return new Promise((n,r)=>{this.on("error",o=>{r(o)}),this.on("open",()=>{n()}),this.create(e)})}async close(){typeof this.wc>"u"||(this.wc.connected&&this.wc.killSession(),this.onClose())}async send(e){this.wc=this.register(this.opts),this.connected||await this.open(),this.sendPayload(e).then(n=>this.events.emit("payload",n)).catch(n=>this.events.emit("payload",_t(e.id,n.message)))}register(e){if(this.wc)return this.wc;this.opts=e||this.opts,this.bridge=e!=null&&e.connector?e.connector.bridge:(e==null?void 0:e.bridge)||"https://bridge.walletconnect.org",this.qrcode=typeof(e==null?void 0:e.qrcode)>"u"||e.qrcode!==!1,this.chainId=typeof(e==null?void 0:e.chainId)<"u"?e.chainId:this.chainId,this.qrcodeModalOptions=e==null?void 0:e.qrcodeModalOptions;const n={bridge:this.bridge,qrcodeModal:this.qrcode?za:void 0,qrcodeModalOptions:this.qrcodeModalOptions,storageId:e==null?void 0:e.storageId,signingMethods:e==null?void 0:e.signingMethods,clientMeta:e==null?void 0:e.clientMeta};if(this.wc=typeof(e==null?void 0:e.connector)<"u"?e.connector:new qs(n),typeof this.wc>"u")throw new Error("Failed to register WalletConnect connector");return this.wc.accounts.length&&(this.accounts=this.wc.accounts),this.wc.chainId&&(this.chainId=this.wc.chainId),this.registerConnectorEvents(),this.wc}onOpen(e){this.pending=!1,e&&(this.wc=e),this.events.emit("open")}onClose(){this.pending=!1,this.wc&&(this.wc=void 0),this.events.emit("close")}onError(e,n="Failed or Rejected Request",r=-32e3){const o={id:e.id,jsonrpc:e.jsonrpc,error:{code:r,message:n}};return this.events.emit("payload",o),o}create(e){this.wc=this.register(this.opts),this.chainId=e||this.chainId,!(this.connected||this.pending)&&(this.pending=!0,this.registerConnectorEvents(),this.wc.createSession({chainId:this.chainId}).then(()=>this.events.emit("created")).catch(n=>this.events.emit("error",n)))}registerConnectorEvents(){this.wc=this.register(this.opts),this.wc.on("connect",e=>{var n,r;if(e){this.events.emit("error",e);return}this.accounts=((n=this.wc)===null||n===void 0?void 0:n.accounts)||[],this.chainId=((r=this.wc)===null||r===void 0?void 0:r.chainId)||this.chainId,this.onOpen()}),this.wc.on("disconnect",e=>{if(e){this.events.emit("error",e);return}this.onClose()}),this.wc.on("modal_closed",()=>{this.events.emit("error",new Error("User closed modal"))}),this.wc.on("session_update",(e,n)=>{const{accounts:r,chainId:o}=n.params[0];(!this.accounts||r&&this.accounts!==r)&&(this.accounts=r,this.events.emit("accountsChanged",r)),(!this.chainId||o&&this.chainId!==o)&&(this.chainId=o,this.events.emit("chainChanged",o))})}async sendPayload(e){this.wc=this.register(this.opts);try{const n=await this.wc.unsafeSend(e);return this.sanitizeResponse(n)}catch(n){return this.onError(e,n.message)}}sanitizeResponse(e){return typeof e.error<"u"&&typeof e.error.code>"u"?_t(e.id,e.error.message,e.error.data):e}}class Ya{constructor(e){this.events=new Pt,this.rpc={infuraId:e==null?void 0:e.infuraId,custom:e==null?void 0:e.rpc},this.signer=new dt(new Qa(e));const n=this.signer.connection.chainId||(e==null?void 0:e.chainId)||1;this.http=this.setHttpProvider(n),this.registerEventListeners()}get connected(){return this.signer.connection.connected}get connector(){return this.signer.connection.connector}get accounts(){return this.signer.connection.accounts}get chainId(){return this.signer.connection.chainId}get rpcUrl(){var e;return((e=this.http)===null||e===void 0?void 0:e.connection).url||""}async request(e){switch(e.method){case"eth_requestAccounts":return await this.connect(),this.signer.connection.accounts;case"eth_accounts":return this.signer.connection.accounts;case"eth_chainId":return this.signer.connection.chainId}if(Be.includes(e.method))return this.signer.request(e);if(typeof this.http>"u")throw new Error(`Cannot request JSON-RPC method (${e.method}) without provided rpc url`);return this.http.request(e)}sendAsync(e,n){this.request(e).then(r=>n(null,r)).catch(r=>n(r,void 0))}async enable(){return await this.request({method:"eth_requestAccounts"})}async connect(){this.signer.connection.connected||await this.signer.connect()}async disconnect(){this.signer.connection.connected&&await this.signer.disconnect()}on(e,n){this.events.on(e,n)}once(e,n){this.events.once(e,n)}removeListener(e,n){this.events.removeListener(e,n)}off(e,n){this.events.off(e,n)}get isWalletConnect(){return!0}registerEventListeners(){this.signer.connection.on("accountsChanged",e=>{this.events.emit("accountsChanged",e)}),this.signer.connection.on("chainChanged",e=>{this.http=this.setHttpProvider(e),this.events.emit("chainChanged",e)}),this.signer.on("disconnect",()=>{this.events.emit("disconnect")})}setHttpProvider(e){const n=Mn(e,this.rpc);return typeof n>"u"?void 0:new dt(new Hr(n))}}export{Ya as default};
