import{k as h,u,f as v,g,r,m as f,j as e,P as x}from"./main-C5yPUGWL.js";import{a as j,F as _}from"./selectors-gyAreB6C.js";import{L as C,F}from"./logo-component-BTLj4UDe.js";const N=({films:t})=>{const l=h(),c=u(j)||[],n=v();let i=g(),a=t.slice().filter(s=>i.includes(s.filmId));const[y,d]=r.useState(a);r.useEffect(()=>{a=t.slice().filter(s=>i.includes(s.filmId)),d(a)},[c]);const o=f(),m=s=>{l(`/Check-it/search/search?q=${encodeURIComponent(s)}`)};return e.jsxs("div",{className:"user-page",children:[e.jsxs("header",{className:"page-header user-page__head",children:[e.jsx(C,{}),e.jsx("h1",{className:"page-title user-page__title",children:"История поиска"}),e.jsx("div",{className:"user-block",children:n.login})]}),e.jsxs("section",{className:"catalog",children:[e.jsx("h2",{className:"catalog__title visually-hidden",children:"Catalog"}),e.jsx("div",{className:"catalog__movies-list",children:e.jsx("div",{children:o?o.map((s,p)=>e.jsx("div",{className:"catalog__movies-search-word",onClick:()=>m(s),children:s},p)):e.jsx("p",{children:"Ваша история пуста"})})})]}),e.jsx(F,{})]})};N.propTypes={films:x.arrayOf(_)};export{N as default};