import{u,f as F,g as y,r as t,n as L,o as M,j as e,d as N,P as q}from"./main-BJBasvi-.js";import{q as m,S as E}from"./search-component-DXBKCZaM.js";import{g as P,a as A,F as C}from"./selectors-AU0lcB5K.js";import{L as I,F as T}from"./logo-component-Czmn0RlV.js";import{F as _}from"./films-list-component-BY2ZTIAI.js";const Q=({films:c})=>{const d=u(P)||[],h=u(A)||[],f=F();let l=y(),a=c.slice().filter(o=>l.includes(o.filmId));const[b,p]=t.useState(a),r=L();let i=m.parse(r.search),s=i.q||"";const[g,v]=t.useState(s);t.useEffect(()=>{a=c.slice().filter(o=>l.includes(o.filmId)),p(a)},[h]),t.useEffect(()=>{i=m.parse(r.search),s=i.q||"",v(s)},[r.search]);const{data:x,isLoading:j,error:n}=M(s);if(j)return e.jsx("div",{children:"Loading..."});if(n)return e.jsxs("div",{children:["Error: ",n.message]});const S=N();return e.jsxs("div",{className:"user-page",children:[e.jsxs("header",{className:"page-header user-page__head",children:[e.jsx(I,{}),e.jsx(E,{isAuthenticated:d}),e.jsx("div",{className:"user-block",children:f.login})]}),e.jsxs("section",{className:"catalog",children:[e.jsxs("h1",{className:"page-title ",children:["Результаты поиска по запросу ",g]}),e.jsx("div",{className:"catalog__movies-list",children:e.jsx(_,{films:x.films,isAuthenticated:S})})]}),e.jsx(T,{})]})};Q.propTypes={films:q.arrayOf(C)};export{Q as default};
