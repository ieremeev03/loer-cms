import{_ as i}from"./InputLabel-f634b8ea.js";import{i as d,p as c,o as a,c as o,a as m,b as n,F as f,r as v,t as _}from"./app-4010bb2a.js";const g=["value"],$={__name:"text",props:{modelValue:{type:String},title:{type:String}},emits:["update:modelValue"],setup(t,{expose:r}){const e=d(null);return c(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),r({focus:()=>e.value.focus()}),(s,u)=>(a(),o("div",null,[m(i,{for:"title",value:t.title},null,8,["value"]),n("input",{class:"border-gray-300 rounded-md shadow-sm w-full",value:t.modelValue,onInput:u[0]||(u[0]=l=>s.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:e},null,40,g)]))}},y=["value"],V=n("option",{value:""},"Не указан",-1),b=["value"],k={__name:"radio",props:{modelValue:{type:String,required:!0},list:{type:Object,required:!0},title:{type:String,required:!0}},emits:["update:modelValue"],setup(t,{expose:r}){const e=d(null);return r({focus:()=>e.value.focus()}),(s,u)=>(a(),o("div",null,[m(i,{for:"title",value:t.title},null,8,["value"]),n("select",{class:"border-gray-300 rounded-md shadow-sm w-full",value:t.modelValue,onInput:u[0]||(u[0]=l=>s.$emit("update:modelValue",l.target.value)),ref_key:"input",ref:e},[V,(a(!0),o(f,null,v(t.list,(l,p)=>(a(),o("option",{value:p},_(l),9,b))),256))],40,y)]))}};export{$ as _,k as a};