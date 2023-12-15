import{_ as w}from"./InputLabel-8c6c4f14.js";import{f as n,o as s,d as r,a as f,k as _,t as C,b as a,i as h,q as y,s as V,u as k}from"./app-3ff17684.js";import{C as b,c as S}from"./TextArea.vue_vue_type_style_index_0_lang-5766ccad.js";const M={class:""},L=a("div",{class:"text-xs text-gray-400"},null,-1),N={key:0,class:"relative w-auto w-[300px] group"},B={class:"absolute bottom-0 right-0 m-2 cursor-pointer"},D=y('<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M20.5 6H3.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M9.5 11L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M14.5 11L14 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',1),H=[D],E={class:"flex flex-row items-center gap-2"},F={key:1,class:""},T=a("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[a("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),a("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),z=[T],A={__name:"video",props:{modelValue:{type:String},title:{type:String},item_id:{type:Number},field_id:{type:String},field_value:{type:String}},emits:["files-dropped"],setup(e,{expose:c,emit:p}){const l=n(null),o=n(!1);c({focus:()=>l.value.focus()});function m(t){p("update:modelValue",t)}function d(t,i,u){o.value=!0;let x=t.target.files||t.dataTransfer.files,g=new FormData;g.append("file",x[0]),axios.post("/fileUpload",g,{headers:{"Content-Type":"multipart/form-data"}}).then(v=>{p("files-dropped",[v.data,i,u]),o.value=!1}).catch(v=>{o.value=!1})}return(t,i)=>(s(),r("div",M,[f(w,{for:"title",value:e.title},null,8,["value"]),L,_(" "+C(e.field_value)+" ",1),e.field_value&&e.field_value!==""?(s(),r("div",N,[a("div",B,[a("div",{class:"bg-gray-200 p-2 rounded-full w-full text-red-500 hover:bg-white hover:border-gray-600",onClick:i[0]||(i[0]=u=>{e.field_value=null,m(e.field_value)})},H)])])):h("",!0),a("div",E,[e.field_value===null||e.field_value===""?(s(),r("input",{key:0,class:"m-0 text-xs",type:"file",onChange:i[1]||(i[1]=u=>d(u,e.item_id,e.field_id))},null,32)):h("",!0),o.value?(s(),r("div",F,z)):h("",!0)])]))}},P={__name:"content",props:{modelValue:{type:String},title:{type:String}},emits:["update:modelValue","update:editorData"],setup(e,{emit:c}){const l=n(e.modelValue||""),o=n({height:"300px",toolbar:["heading","|","bold","italic","link","bulletedList","numberedList","blockQuote"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"}]}});return V(l,()=>{c("update:modelValue",l.value)}),n(),(m,d)=>(s(),r("div",null,[f(w,{for:"title",value:e.title},null,8,["value"]),f(k(S.component),{editor:k(b),modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=t=>l.value=t),config:o.value,class:"rounded"},null,8,["editor","modelValue","config"])]))}};export{A as _,P as a};
