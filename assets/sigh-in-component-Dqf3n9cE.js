import{a as c,k as u,r,j as s,s as m,t as p}from"./main-C5yPUGWL.js";import{L as g,F as h}from"./logo-component-BTLj4UDe.js";const _=()=>({loginUser:e=>{const a=(JSON.parse(localStorage.getItem("users"))||[]).find(i=>i.login===e.login&&i.password===e.password);return a&&(localStorage.setItem("currentUser",JSON.stringify(e)),localStorage.setItem("authStatus","AUTH")),!!a}}),N=()=>{const t=c(),e=u(),n=r.useRef(),a=r.useRef(),{loginUser:i}=_(),l=o=>{o.preventDefault();const d={login:n.current.value,password:a.current.value};i(d)?(t(m("AUTH")),e(p.ROOT)):alert("Неверный логин или пароль")};return s.jsxs("div",{className:"user-page",children:[s.jsxs("header",{className:"page-header user-page__head",children:[s.jsx("h1",{children:"Вход"}),s.jsx(g,{})]}),s.jsx("div",{className:"sign-in user-page__content",children:s.jsxs("form",{action:"",method:"post",className:"sign-in__form",onSubmit:l,children:[s.jsxs("div",{className:"sign-in__fields",children:[s.jsxs("div",{className:"sign-in__field",children:[s.jsx("input",{className:"sign-in__input",type:"email",placeholder:"Email address",name:"user-email",id:"user-email",ref:n,"data-testid":"email"}),s.jsx("label",{className:"sign-in__label visually-hidden",htmlFor:"user-email",children:"Email address"})]}),s.jsxs("div",{className:"sign-in__field",children:[s.jsx("input",{className:"sign-in__input",type:"password",placeholder:"Password",name:"user-password",id:"user-password",ref:a,"data-testid":"password"}),s.jsx("label",{className:"sign-in__label visually-hidden",htmlFor:"user-password",children:"Password"})]})]}),s.jsx("div",{className:"sign-in__submit",children:s.jsx("button",{className:"sign-in__btn",type:"submit",children:"Вход"})})]})}),s.jsx(h,{})]})};export{N as default};