import{p as i,f as a,j as e,h as o,r as c,T as l,P as t,A as u}from"./main-BJBasvi-.js";import{L as h}from"./logo-component-Czmn0RlV.js";import{S as m}from"./search-component-DXBKCZaM.js";const n=({onExit:s})=>{let r=a();return e.jsxs("div",{className:"user-block",children:[e.jsx("div",{className:"user-block",children:r?r.login:""}),e.jsx(o,{to:"/Check-it/favorites",className:"user-block__link",children:"Избранное"}),e.jsx(o,{to:"/Check-it/history",className:"user-block__link",children:"История"}),e.jsx("button",{className:"user-block__button",type:"button",onClick:s,children:"Выход"})]})};n.propTypes={onExit:i.PropTypes.func.isRequired};const p=()=>e.jsxs("div",{className:"user-block",children:[e.jsx(o,{to:"/Check-it/signin",className:"user-block__link",children:"Вход"}),e.jsx(o,{to:"/Check-it/signup",className:"user-block__link",children:"Регистрация"})]}),x=()=>{const{isDarkTheme:s,toggleTheme:r}=c.useContext(l);return e.jsx("div",{className:"theme",children:e.jsx("button",{className:"user-block__button",onClick:r,children:e.jsx("svg",{className:"user-block__svg",viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",children:e.jsx("use",{xlinkHref:`#sun-${s?"dark":"light"}`})})})})},d=({isAuthenticated:s,onExit:r})=>e.jsxs("header",{className:"page-header user-page__head",children:[e.jsx(h,{}),e.jsx(x,{}),e.jsx(m,{isAuthenticated:s}),e.jsx("div",{className:"user-block",children:s===u.AUTH?e.jsx(n,{onExit:r}):e.jsx(p,{})})]});d.propTypes={isAuthenticated:t.string.isRequired,onExit:t.func.isRequired};export{d as H};
