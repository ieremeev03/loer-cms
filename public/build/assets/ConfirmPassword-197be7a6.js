import{T as m,o as d,j as l,w as t,a,u as o,Z as c,b as e,e as p,n as u,d as f}from"./app-fb763ef9.js";import{_}from"./GuestLayout-2d1f571a.js";import{_ as w,a as b,b as x}from"./TextInput-6e8c95fa.js";import{P as g}from"./PrimaryButton-cedc78c2.js";import"./ApplicationLogo-2b61c941.js";import"./_plugin-vue_export-helper-c27b6911.js";const h=e("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y=["onSubmit"],P={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup(V){const s=m({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(v,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),h,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[a(w,{for:"password",value:"Password"}),a(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>o(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(x,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",P,[a(g,{class:u(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,y)]),_:1}))}};export{j as default};
