import{q as T,r as C,o as L,k as H,j,h as M,t as V,g as B,A as Q,m as I,v as _}from"./main-BQT6CTlq.js";var R={},K=c=>encodeURIComponent(c).replace(/[!'()*]/g,i=>`%${i.charCodeAt(0).toString(16).toUpperCase()}`),D="%[a-f0-9]{2}",U=new RegExp("("+D+")|([^%]+?)","gi"),p=new RegExp("("+D+")+","gi");function w(c,i){try{return[decodeURIComponent(c.join(""))]}catch{}if(c.length===1)return c;i=i||1;var f=c.slice(0,i),l=c.slice(i);return Array.prototype.concat.call([],w(f),w(l))}function z(c){try{return decodeURIComponent(c)}catch{for(var i=c.match(U)||[],f=1;f<i.length;f++)c=w(i,f).join(""),i=c.match(U)||[];return c}}function G(c){for(var i={"%FE%FF":"��","%FF%FE":"��"},f=p.exec(c);f;){try{i[f[0]]=decodeURIComponent(f[0])}catch{var l=z(f[0]);l!==f[0]&&(i[f[0]]=l)}f=p.exec(c)}i["%C2"]="�";for(var y=Object.keys(i),F=0;F<y.length;F++){var h=y[F];c=c.replace(new RegExp(h,"g"),i[h])}return c}var P=function(c){if(typeof c!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof c+"`");try{return c=c.replace(/\+/g," "),decodeURIComponent(c)}catch{return G(c)}},k=(c,i)=>{if(!(typeof c=="string"&&typeof i=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(i==="")return[c];const f=c.indexOf(i);return f===-1?[c]:[c.slice(0,f),c.slice(f+i.length)]},J=function(c,i){for(var f={},l=Object.keys(c),y=Array.isArray(i),F=0;F<l.length;F++){var h=l[F],S=c[h];(y?i.indexOf(h)!==-1:i(h,S,c))&&(f[h]=S)}return f};(function(c){const i=K,f=P,l=k,y=J,F=r=>r==null,h=Symbol("encodeFragmentIdentifier");function S(r){switch(r.arrayFormat){case"index":return e=>(n,t)=>{const a=n.length;return t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[...n,[o(e,r),"[",a,"]"].join("")]:[...n,[o(e,r),"[",o(a,r),"]=",o(t,r)].join("")]};case"bracket":return e=>(n,t)=>t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[...n,[o(e,r),"[]"].join("")]:[...n,[o(e,r),"[]=",o(t,r)].join("")];case"colon-list-separator":return e=>(n,t)=>t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[...n,[o(e,r),":list="].join("")]:[...n,[o(e,r),":list=",o(t,r)].join("")];case"comma":case"separator":case"bracket-separator":{const e=r.arrayFormat==="bracket-separator"?"[]=":"=";return n=>(t,a)=>a===void 0||r.skipNull&&a===null||r.skipEmptyString&&a===""?t:(a=a===null?"":a,t.length===0?[[o(n,r),e,o(a,r)].join("")]:[[t,o(a,r)].join(r.arrayFormatSeparator)])}default:return e=>(n,t)=>t===void 0||r.skipNull&&t===null||r.skipEmptyString&&t===""?n:t===null?[...n,o(e,r)]:[...n,[o(e,r),"=",o(t,r)].join("")]}}function A(r){let e;switch(r.arrayFormat){case"index":return(n,t,a)=>{if(e=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),!e){a[n]=t;return}a[n]===void 0&&(a[n]={}),a[n][e[1]]=t};case"bracket":return(n,t,a)=>{if(e=/(\[\])$/.exec(n),n=n.replace(/\[\]$/,""),!e){a[n]=t;return}if(a[n]===void 0){a[n]=[t];return}a[n]=[].concat(a[n],t)};case"colon-list-separator":return(n,t,a)=>{if(e=/(:list)$/.exec(n),n=n.replace(/:list$/,""),!e){a[n]=t;return}if(a[n]===void 0){a[n]=[t];return}a[n]=[].concat(a[n],t)};case"comma":case"separator":return(n,t,a)=>{const d=typeof t=="string"&&t.includes(r.arrayFormatSeparator),s=typeof t=="string"&&!d&&g(t,r).includes(r.arrayFormatSeparator);t=s?g(t,r):t;const m=d||s?t.split(r.arrayFormatSeparator).map(q=>g(q,r)):t===null?t:g(t,r);a[n]=m};case"bracket-separator":return(n,t,a)=>{const d=/(\[\])$/.test(n);if(n=n.replace(/\[\]$/,""),!d){a[n]=t&&g(t,r);return}const s=t===null?[]:t.split(r.arrayFormatSeparator).map(m=>g(m,r));if(a[n]===void 0){a[n]=s;return}a[n]=[].concat(a[n],s)};default:return(n,t,a)=>{if(a[n]===void 0){a[n]=t;return}a[n]=[].concat(a[n],t)}}}function O(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function o(r,e){return e.encode?e.strict?i(r):encodeURIComponent(r):r}function g(r,e){return e.decode?f(r):r}function x(r){return Array.isArray(r)?r.sort():typeof r=="object"?x(Object.keys(r)).sort((e,n)=>Number(e)-Number(n)).map(e=>r[e]):r}function u(r){const e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function b(r){let e="";const n=r.indexOf("#");return n!==-1&&(e=r.slice(n)),e}function E(r){r=u(r);const e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function N(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function $(r,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),O(e.arrayFormatSeparator);const n=A(e),t=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return t;for(const a of r.split("&")){if(a==="")continue;let[d,s]=l(e.decode?a.replace(/\+/g," "):a,"=");s=s===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?s:g(s,e),n(g(d,e),s,t)}for(const a of Object.keys(t)){const d=t[a];if(typeof d=="object"&&d!==null)for(const s of Object.keys(d))d[s]=N(d[s],e);else t[a]=N(d,e)}return e.sort===!1?t:(e.sort===!0?Object.keys(t).sort():Object.keys(t).sort(e.sort)).reduce((a,d)=>{const s=t[d];return s&&typeof s=="object"&&!Array.isArray(s)?a[d]=x(s):a[d]=s,a},Object.create(null))}c.extract=E,c.parse=$,c.stringify=(r,e)=>{if(!r)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),O(e.arrayFormatSeparator);const n=s=>e.skipNull&&F(r[s])||e.skipEmptyString&&r[s]==="",t=S(e),a={};for(const s of Object.keys(r))n(s)||(a[s]=r[s]);const d=Object.keys(a);return e.sort!==!1&&d.sort(e.sort),d.map(s=>{const m=r[s];return m===void 0?"":m===null?o(s,e):Array.isArray(m)?m.length===0&&e.arrayFormat==="bracket-separator"?o(s,e)+"[]":m.reduce(t(s),[]).join("&"):o(s,e)+"="+o(m,e)}).filter(s=>s.length>0).join("&")},c.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);const[n,t]=l(r,"#");return Object.assign({url:n.split("?")[0]||"",query:$(E(r),e)},e&&e.parseFragmentIdentifier&&t?{fragmentIdentifier:g(t,e)}:{})},c.stringifyUrl=(r,e)=>{e=Object.assign({encode:!0,strict:!0,[h]:!0},e);const n=u(r.url).split("?")[0]||"",t=c.extract(r.url),a=c.parse(t,{sort:!1}),d=Object.assign(a,r.query);let s=c.stringify(d,e);s&&(s=`?${s}`);let m=b(r.url);return r.fragmentIdentifier&&(m=`#${e[h]?o(r.fragmentIdentifier,e):r.fragmentIdentifier}`),`${n}${s}${m}`},c.pick=(r,e,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[h]:!1},n);const{url:t,query:a,fragmentIdentifier:d}=c.parseUrl(r,n);return c.stringifyUrl({url:t,query:y(a,e),fragmentIdentifier:d},n)},c.exclude=(r,e,n)=>{const t=Array.isArray(e)?a=>!e.includes(a):(a,d)=>!e(a,d);return c.pick(r,t,n)}})(R);const Y=T(R),W=(c,i)=>{const[f,l]=C.useState("");return C.useEffect(()=>{const y=setTimeout(()=>l(c),i);return()=>clearTimeout(y)},[i,c]),f},Z=()=>{const[c,i]=C.useState(""),f=W(c,500),{data:l,isLoading:y,error:F}=L(f),h=H(),S=()=>{const u=c.trim();if(u!==""){if(B()===Q.AUTH){const E=[...I()?I():[],u];_(E)}h(`/Check-it/search/search?q=${encodeURIComponent(u)}`)}},A=u=>{i(u.target.value)},O=u=>{u.key==="Enter"&&S()},[o,g]=C.useState(!1),x=()=>{g(!0)};return j.jsxs("div",{className:"user-block",children:[j.jsx("input",{type:"text",value:c,onChange:A,onKeyDown:O,onFocus:x,placeholder:"Search..."}),j.jsx("button",{onClick:S,children:"Search"}),j.jsx("div",{className:"search-movie-card-list  ",children:l?l.films.map(u=>{const b=u.filmId||u.kinopoiskId;return j.jsx(M,{className:`search-movie-card ${o?"":"hidden"}`,to:`${V.ROOT}films/${b}`,children:j.jsxs("div",{className:"search-movie-card__image",children:[j.jsx("img",{src:u.posterUrlPreview,alt:u.nameRu||u.nameEn||"Без названия"}),j.jsx("span",{children:u.nameRu||u.nameEn||"Без названия"})]})},b)}):""})]})};export{Z as S,Y as q};
