import{T as n,o as d,h as l,w as t,a,u as o,Z as c,b as e,e as p,n as u,d as f}from"./app-3eccd1bf.js";import{_}from"./GuestLayout-c3db5e2f.js";import{_ as w}from"./InputError-b9118450.js";import{_ as b}from"./InputLabel-0699bd70.js";import{P as h}from"./PrimaryButton-4e83a0bc.js";import{_ as x}from"./TextInput-227bba1e.js";import"./ApplicationLogo-3cf5277e.js";/* empty css            */const g=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],P={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup(V){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(v,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),g,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",P,[a(h,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{q as default};
