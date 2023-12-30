import{X as y,h as x,m as b,o as d,d as _,T as w,c as u,w as m,a,u as s,Z as v,t as V,i as c,b as r,bG as B,k as f,p as C,g as $}from"./app-19083d26.js";import{_ as q}from"./GuestLayout-9f831da3.js";import{_ as p}from"./InputError-577f4d90.js";import{_ as g}from"./InputLabel-f210127d.js";import{P as N}from"./PrimaryButton-3339f7d4.js";import{_ as k}from"./TextInput-1a8a9c78.js";import"./ApplicationLogo-0239b1a5.js";/* empty css            */const P=["value"],S={__name:"Checkbox",props:{checked:{type:[Array,Boolean],required:!0},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const n=l,i=y({get(){return n.checked},set(t){e("update:checked",t)}});return(t,o)=>x((d(),_("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=h=>i.value=h),class:"rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"},null,8,P)),[[b,i.value]])}},U={key:0,class:"mb-4 font-medium text-sm text-green-600"},D=["onSubmit"],L={class:"mt-4"},M={class:"block mt-4"},R={class:"flex items-center"},T=r("span",{class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},"Запомнить меня",-1),j={class:"flex items-center justify-end mt-4"},I={__name:"Login",props:{canResetPassword:{type:Boolean},status:{type:String}},setup(l){const e=w({email:"",password:"",remember:!1}),n=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(i,t)=>(d(),u(q,null,{default:m(()=>[a(s(v),{title:"Log in"}),l.status?(d(),_("div",U,V(l.status),1)):c("",!0),r("form",{onSubmit:$(n,["prevent"])},[r("div",null,[a(g,{for:"email",value:"Логин",class:"text-white"}),a(k,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",L,[a(g,{for:"password",value:"Пароль",class:"text-white"}),a(k,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(p,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",M,[r("label",R,[a(S,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),T])]),r("div",j,[l.canResetPassword?(d(),u(s(B),{key:0,href:i.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:m(()=>[f(" Забыли пароль? ")]),_:1},8,["href"])):c("",!0),a(N,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:m(()=>[f(" Войти ")]),_:1},8,["class","disabled"])])],40,D)]),_:1}))}};export{I as default};