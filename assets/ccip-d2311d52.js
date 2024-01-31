import{B as l,f as w,s as y,i as p,I as h,h as g,j as k,k as O,m as L,H as m,o as E}from"./index-6f8f1cf9.js";class x extends l{constructor({callbackSelector:e,cause:a,data:n,extraData:c,sender:d,urls:r}){var i;super(a.shortMessage||"An error occurred while fetching for an offchain result.",{cause:a,metaMessages:[...a.metaMessages||[],(i=a.metaMessages)!=null&&i.length?"":[],"Offchain Gateway Call:",r&&["  Gateway URL(s):",...r.map(u=>`    ${w(u)}`)],`  Sender: ${d}`,`  Data: ${n}`,`  Callback selector: ${e}`,`  Extra data: ${c}`].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class M extends l{constructor({result:e,url:a}){super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:[`Gateway URL: ${w(a)}`,`Response: ${y(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class R extends l{constructor({sender:e,to:a}){super("Reverted sender address does not match target contract address (`to`).",{metaMessages:[`Contract address: ${a}`,`OffchainLookup sender address: ${e}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}function $(o,e){if(!p(o))throw new h({address:o});if(!p(e))throw new h({address:e});return o.toLowerCase()===e.toLowerCase()}const v="0x556f1830",S={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function C(o,{blockNumber:e,blockTag:a,data:n,to:c}){const{args:d}=g({data:n,abi:[S]}),[r,i,u,t,s]=d;try{if(!$(c,r))throw new R({sender:r,to:c});const f=await A({data:u,sender:r,urls:i}),{data:b}=await k(o,{blockNumber:e,blockTag:a,data:O([t,L([{type:"bytes"},{type:"bytes"}],[f,s])]),to:c});return b}catch(f){throw new x({callbackSelector:t,cause:f,data:n,extraData:s,sender:r,urls:i})}}async function A({data:o,sender:e,urls:a}){var c;let n=new Error("An unknown error occurred.");for(let d=0;d<a.length;d++){const r=a[d],i=r.includes("{data}")?"GET":"POST",u=i==="POST"?{data:o,sender:e}:void 0;try{const t=await fetch(r.replace("{sender}",e).replace("{data}",o),{body:JSON.stringify(u),method:i});let s;if((c=t.headers.get("Content-Type"))!=null&&c.startsWith("application/json")?s=(await t.json()).data:s=await t.text(),!t.ok){n=new m({body:u,details:s!=null&&s.error?y(s.error):t.statusText,headers:t.headers,status:t.status,url:r});continue}if(!E(s)){n=new M({result:s,url:r});continue}return s}catch(t){n=new m({body:u,details:t.message,url:r})}}throw n}export{A as ccipFetch,C as offchainLookup,S as offchainLookupAbiItem,v as offchainLookupSignature};
