import{T as n,o as d,h as l,w as t,a,u as o,Z as c,b as e,e as p,n as u,d as f}from"./app-4010bb2a.js";import{_}from"./GuestLayout-a9dc207d.js";import{_ as w}from"./InputError-3f98e675.js";import{_ as b}from"./InputLabel-f634b8ea.js";import{P as h}from"./PrimaryButton-1aa1b64d.js";import{_ as x}from"./TextInput-b150d723.js";import"./ApplicationLogo-9a5bf99c.js";/* empty css            */const g=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],P={class:"flex justify-end mt-4"},q={__name:"ConfirmPassword",setup(V){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(v,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),g,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(x,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",P,[a(h,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{q as default};