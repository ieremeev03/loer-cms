import{_ as x}from"./InputLabel-9d8db183.js";import{r as d,o as r,c as n,a as f,e as _,t as C,b as o,g,l as y,m as V,u as w}from"./app-ec781d0a.js";import{C as b,c as S}from"./TextArea.vue_vue_type_style_index_0_lang-081681cc.js";const M={class:""},L=o("div",{class:"text-xs text-gray-400"},null,-1),N={key:0,class:"relative w-auto w-[300px] group"},B={class:"absolute bottom-0 right-0 m-2 cursor-pointer"},H=y('<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M20.5 6H3.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M9.5 11L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M14.5 11L14 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',1),D=[H],E={class:"flex flex-row items-center gap-2"},F={key:1,class:""},T=o("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[o("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),o("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),z=[T],P={__name:"video",props:{modelValue:{type:String},title:{type:String},item_id:{type:Number},field_id:{type:String},field_value:{type:String}},emits:["files-dropped"],setup(e,{expose:p,emit:h}){const a=d(null),i=d(!1);p({focus:()=>a.value.focus()});function m(t){h("update:modelValue",t)}function u(t,l,s){i.value=!0;let v=t.target.files||t.dataTransfer.files;console.log(v[0]);let k=new FormData;k.append("file",v[0]),axios.post("/fileUpload",k,{headers:{"Content-Type":"multipart/form-data"}}).then(c=>{console.log(c.data,l,s),h("files-dropped",[c.data,l,s]),i.value=!1}).catch(c=>{console.log(c),i.value=!1})}return(t,l)=>(r(),n("div",M,[f(x,{for:"title",value:e.title},null,8,["value"]),L,_(" "+C(e.field_value)+" ",1),e.field_value&&e.field_value!==""?(r(),n("div",N,[o("div",B,[o("div",{class:"bg-gray-200 p-2 rounded-full w-full text-red-500 hover:bg-white hover:border-gray-600",onClick:l[0]||(l[0]=s=>{e.field_value=null,m(e.field_value)})},D)])])):g("",!0),o("div",E,[e.field_value===null||e.field_value===""?(r(),n("input",{key:0,class:"m-0 text-xs",type:"file",onChange:l[1]||(l[1]=s=>u(s,e.item_id,e.field_id))},null,32)):g("",!0),i.value?(r(),n("div",F,z)):g("",!0)])]))}},Q={__name:"content",props:{modelValue:{type:String},title:{type:String}},emits:["update:modelValue"],setup(e,{emit:p}){const a=d(e.modelValue||""),i=d({height:"300px",toolbar:["heading","|","bold","italic","link","bulletedList","numberedList","blockQuote"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"}]}});return V(a,()=>{p("update:modelValue",a.value)}),d(),(m,u)=>(r(),n("div",null,[f(x,{for:"title",value:e.title},null,8,["value"]),f(w(S.component),{editor:w(b),modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=t=>a.value=t),config:i.value,class:"rounded"},null,8,["editor","modelValue","config"])]))}};export{P as _,Q as a};
