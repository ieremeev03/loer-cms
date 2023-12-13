import{_ as k}from"./InputLabel-488bafb5.js";import{f as v,o as r,d,a as x,b as t,i as f,q as C}from"./app-5f1e8232.js";const y={class:""},_=t("div",{class:"text-xs text-gray-400"},"Файл в формате JPG, PNG, WEBP",-1),b={key:0,class:"relative w-[300px] group"},V=["src"],M={class:"absolute bottom-0 right-0 m-2 cursor-pointer"},B=C('<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M20.5 6H3.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M9.5 11L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M14.5 11L14 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',1),N=[B],S={class:"flex flex-row items-center gap-2"},L={key:1,class:""},F=t("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),H=[F],D={__name:"image",props:{modelValue:{type:String},title:{type:String},item_id:{type:Number},field_id:{type:String},field_value:{type:String},folder:{type:String}},emits:["files-dropped"],setup(e,{expose:p,emit:n}){const c=e,g=v(null),s=v(!1);p({focus:()=>g.value.focus()}),console.log(c.field_value);function m(o){n("update:modelValue",o)}function w(o,l,a){s.value=!0;let h=o.target.files||o.dataTransfer.files;console.log(h[0]);let u=new FormData;u.append("file",h[0]),c.folder!==void 0&&u.append("folder",c.folder),axios.post("/fileUpload",u,{headers:{"Content-Type":"multipart/form-data"}}).then(i=>{console.log(i.data,l,a),n("files-dropped",[i.data,l,a]),n("update:modelValue",i.data),s.value=!1}).catch(i=>{console.log(i),s.value=!1})}return(o,l)=>(r(),d("div",y,[x(k,{for:"title",value:e.title},null,8,["value"]),_,e.field_value&&e.field_value!==""&&e.field_value!==" "?(r(),d("div",b,[t("img",{class:"mb-3",src:e.field_value,width:"300"},null,8,V),t("div",M,[t("div",{class:"bg-gray-200 p-2 rounded-full w-full text-red-500 hover:bg-white hover:border-gray-600",onClick:l[0]||(l[0]=a=>{e.field_value=null,m(e.field_value)})},N)])])):f("",!0),t("div",S,[e.field_value===null||e.field_value===""||e.field_value===" "||e.field_value===void 0?(r(),d("input",{key:0,class:"m-0 text-xs",type:"file",onChange:l[1]||(l[1]=a=>w(a,e.item_id,e.field_id))},null,32)):f("",!0),s.value?(r(),d("div",L,H)):f("",!0)])]))}};export{D as _};
