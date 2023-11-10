import{_ as k}from"./InputLabel-a2ace85f.js";import{r as p,o as i,c as n,a as x,b as t,g as c,l as C}from"./app-e70d3e3e.js";const _={class:""},y=t("div",{class:"text-xs text-gray-400"},"Файл в формате JPG, PNG, WEBP",-1),b={key:0,class:"relative w-[300px] group"},M=["src"],V={class:"absolute bottom-0 right-0 m-2 cursor-pointer"},B=C('<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M20.5 6H3.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M9.5 11L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M14.5 11L14 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',1),N=[B],S={class:"flex flex-row items-center gap-2"},L={key:1,class:""},F=t("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[t("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),t("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),H=[F],D={__name:"image",props:{modelValue:{type:String},title:{type:String},item_id:{type:Number},field_id:{type:String},field_value:{type:String},folder:{type:String}},emits:["files-dropped"],setup(e,{expose:v,emit:u}){const f=e,g=p(null),s=p(!1);v({focus:()=>g.value.focus()}),console.log(f.field_value);function m(o){u("update:modelValue",o)}function w(o,l,a){s.value=!0;let h=o.target.files||o.dataTransfer.files;console.log(h[0]);let d=new FormData;d.append("file",h[0]),d.append("folder",f.folder),axios.post("/fileUpload",d,{headers:{"Content-Type":"multipart/form-data"}}).then(r=>{console.log(r.data,l,a),u("files-dropped",[r.data,l,a]),s.value=!1}).catch(r=>{console.log(r),s.value=!1})}return(o,l)=>(i(),n("div",_,[x(k,{for:"title",value:e.title},null,8,["value"]),y,e.field_value&&e.field_value!==""?(i(),n("div",b,[t("img",{class:"mb-3",src:e.field_value,width:"300"},null,8,M),t("div",V,[t("div",{class:"bg-gray-200 p-2 rounded-full w-full text-red-500 hover:bg-white hover:border-gray-600",onClick:l[0]||(l[0]=a=>{e.field_value=null,m(e.field_value)})},N)])])):c("",!0),t("div",S,[e.field_value===null||e.field_value===""||e.field_value===void 0?(i(),n("input",{key:0,class:"m-0 text-xs",type:"file",onChange:l[1]||(l[1]=a=>w(a,e.item_id,e.field_id))},null,32)):c("",!0),s.value?(i(),n("div",L,H)):c("",!0)])]))}};export{D as _};
