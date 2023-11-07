import{r as I,o as n,c as d,F as V,h as L,t as $,b as e,a as r,g as k,i as Z,K as j,T as B,u as t,w as C,Z as G,d as F,n as Q,e as N,f as W,O as X,j as T,k as O}from"./app-4f689ef2.js";import{_ as M,a as E,b as D}from"./TextInput-d1647289.js";import{P as Y}from"./PrimaryButton-073b5a17.js";import{_ as ee}from"./TextArea-a5875440.js";import{D as H}from"./vue3-draggable.umd.min-0d43cedc.js";import{_ as te}from"./AdminLayout-701ca4ee.js";import{_ as oe,a as se,b as le}from"./radio-25029685.js";import{_ as ie}from"./content-775a72cc.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TextArea.vue_vue_type_style_index_0_lang-eab9844b.js";const ae=["value"],ne=e("option",{value:"null",selected:""},"Не указан",-1),re=["value"],de={__name:"Select",props:{modelValue:{type:String,required:!0},parents:{type:Object,required:!0}},emits:["update:modelValue"],setup(c,{expose:f}){const h=I(null);return f({focus:()=>h.value.focus()}),(x,u)=>(n(),d("select",{class:"border-gray-300 rounded-md shadow-sm",value:c.modelValue,onInput:u[0]||(u[0]=g=>x.$emit("update:modelValue",g.target.value)),ref_key:"input",ref:h},[ne,(n(!0),d(V,null,L(c.parents,g=>(n(),d("option",{value:g.id},$(g.title),9,re))),256))],40,ae))}},ue={class:""},ce=e("div",{class:"text-xs text-gray-400"},"Файл в формате MP4",-1),me={key:0,class:"relative w-auto w-[300px] group"},pe={class:"absolute bottom-0 right-0 m-2 cursor-pointer"},fe=Z('<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M20.5 6H3.49988" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M9.5 11L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M14.5 11L14 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>',1),ge=[fe],_e={class:"flex flex-row items-center gap-2"},he={key:1,class:""},ve=e("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),ke=[ve],xe={__name:"video",props:{modelValue:{type:String},title:{type:String},item_id:{type:Number},field_id:{type:String},field_value:{type:String}},emits:["files-dropped"],setup(c,{expose:f,emit:h}){const x=I(null),u=I(!1);f({focus:()=>x.value.focus()});function g(_){h("update:modelValue",_)}function S(_,p,v){this.loading=!0;let w=_.target.files||_.dataTransfer.files;console.log(w[0]);let y=new FormData;y.append("file",w[0]),axios.post("/fileUpload",y,{headers:{"Content-Type":"multipart/form-data"}}).then(l=>{console.log(l.data,p,v),h("files-dropped",[l.data,p,v]),this.loading=!1}).catch(l=>{console.log(l),this.loading=!1})}return(_,p)=>(n(),d("div",ue,[r(M,{for:"title",value:c.title},null,8,["value"]),ce,c.field_value&&c.field_value!==""?(n(),d("div",me,[e("div",pe,[e("div",{class:"bg-gray-200 p-2 rounded-full w-full text-red-500 hover:bg-white hover:border-gray-600",onClick:p[0]||(p[0]=v=>{c.field_value=null,g(c.field_value)})},ge)])])):k("",!0),e("div",_e,[c.field_value===null||c.field_value===""||!u.value?(n(),d("input",{key:0,class:"m-0 text-xs",type:"file",onChange:p[1]||(p[1]=v=>S(v,c.item_id,c.field_id))},null,32)):k("",!0),u.value?(n(),d("div",he,ke)):k("",!0)])]))}},ye={class:"bg-white md:flex md:flex-row"},be={class:"p-4 mt-6 space-y-6 md:basis-3/4"},we=e("h2",{class:"text-lg font-medium text-black-50"},"Редактирвоание страницы",-1),Ce={class:"hidden"},Ve={class:"flex flex-row gap-10"},$e={class:"w-1/2"},Me=e("div",{class:"font-bold"},"Блоки на странице",-1),je={class:"space-y-6"},Le={key:1,class:"p-3 border-2 bg-lime-200 rounded-md mb-2 relative flex flex-row items-center justify-between group"},Ie=["onClick"],Se=e("svg",{class:"text-gray-500",width:"20px",height:"20px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M4 5L15 5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M4 8H15",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M4 11H11",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M18.4563 13.5423L13.9268 18.0719C13.6476 18.3511 13.292 18.5414 12.9048 18.6188L10.8153 19.0367L11.2332 16.9472C11.3106 16.5601 11.5009 16.2045 11.7801 15.9253L16.3096 11.3957M18.4563 13.5423L19.585 12.4135C19.9755 12.023 19.9755 11.3898 19.585 10.9993L18.8526 10.2669C18.4621 9.8764 17.8289 9.8764 17.4384 10.2669L16.3096 11.3957M18.4563 13.5423L16.3096 11.3957",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1),Ue=[Se],Be={class:"w-1/2"},De=e("div",{class:"font-bold"},"Список блоков",-1),Fe={class:"w-full"},Ne={class:"w-auto p-1 border-2 bg-gray-50 rounded-md mb-2 text-xs"},Te={class:"p-4 md:mt-6 space-y-6 md:basis-1/4"},Oe=e("h2",{class:"text-lg font-medium text-black-50"},"Свойства",-1),Ee={class:"flex items-center gap-4"},He={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},Pe={key:0,id:"edit-modal",tabindex:"-1","aria-hidden":"true",class:"backdrop-blur-md fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full max-h-full"},ze={class:"relative w-full max-w-2xl max-h-full mx-auto"},qe={class:"relative bg-white rounded-lg shadow-2xl"},Ae={class:"flex items-start justify-between pl-4 pr-4 pt-4 rounded-t dark:border-gray-600"},Je={class:"text-xl font-semibold"},Ke=e("svg",{class:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})],-1),Re=e("span",{class:"sr-only"},"Close modal",-1),Ze=[Ke,Re],Ge={key:0,class:"p-6 space-y-6"},Qe={key:1,class:"p-6 space-y-6"},We=["id"],Xe={class:"flex flex-row items-center justify-end"},Ye=["onClick"],et={class:"flex items-center justify-end p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600"},tt=e("button",{"data-modal-hide":"default-modal",type:"submit",class:"inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase"},"Сохранить",-1),mt={__name:"EditPage",props:{status:{type:String}},setup(c){const f=I(!1),h={Image:oe,Video:xe,Text:se,Radio:le,Content:ie},x=i=>h[i],u=j().props.page,g=j().props.pages,S=j().props.infoblocks,_=j().props.all_infoblocks;let p=[],v=[],w="",y=!1;const l=B({title:u.title,content:u.content,parent_id:u.parent_id,blocks:S,infoblocks:_,slug:u.slug}),a=B({items:[],properties:[],infoblock:0,page:0});B({id:u.id});function P(){console.log(a.items),a.items[Object.keys(a.items).length]=p,console.log(a.items)}function z(i){confirm("Вы действительно хотите удалить элеиент?")&&(a.items[i].remove=!0,document.getElementById("item_"+i).remove())}function q(i){console.log(i[0][0],i[1],i[2]);let o=i[1],s=i[2];console.log(l.items),a.items[o].fields[s].file=i[0]}function A(i){console.log(i[0][0]);let o=i[2];a.properties[o].file=i[0]}function J(){console.log(u),confirm("Вы действительно хотите удалить страницу?")&&X.delete(route("pages.destroy",u.id))}function K(i){a.infoblock=i,a.page=u.id,y=_.find(o=>o.id===i).array,w=y?"Элементы":"Настройки",axios.get("/InfoBlocks/getItems?id="+i+"&page="+u.id).then(o=>{a.items=o.data.items,p=o.data.fields,a.properties=o.data.properties,console.log(a.items),console.log(p),console.log(v)}).catch(o=>{console.log(o)})}return(i,o)=>(n(),d(V,null,[r(t(G),{title:"Редактирование страницы - "+t(u).title},null,8,["title"]),r(te,null,{default:C(()=>[e("section",null,[e("form",{onSubmit:o[6]||(o[6]=F(s=>t(l).patch(i.route("pages.update",t(u))),["prevent"]))},[e("div",ye,[e("div",be,[we,e("div",null,[r(M,{for:"title",value:"Заголовок страницы"}),r(E,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:t(l).title,"onUpdate:modelValue":o[0]||(o[0]=s=>t(l).title=s),autofocus:"",autocomplete:"title"},null,8,["modelValue"]),r(D,{class:"mt-2",message:t(l).errors.title},null,8,["message"])]),e("div",Ce,[r(M,{for:"content",value:"Содержимое страницы",class:"mb-1"}),r(ee,{modelValue:t(l).content,"onUpdate:modelValue":o[1]||(o[1]=s=>t(l).content=s),class:"mt-1 block w-full"},null,8,["modelValue"]),r(D,{class:"mt-2",message:t(l).errors.title},null,8,["message"])]),e("div",Ve,[e("div",$e,[Me,e("div",je,[r(t(H),{modelValue:t(l).blocks,"onUpdate:modelValue":o[2]||(o[2]=s=>t(l).blocks=s)},{item:C(({item:s})=>[s.id===-1?(n(),d("div",{key:0,class:Q([{hidden:t(l).blocks.length>1},"w-full h-32 bg-gray-50 rounded-lg flex flex-col text-xs text-gray-500 items-center justify-center"])}," Перетащите сюда нужный блок "+$(t(l).blocks.length),3)):(n(),d("div",Le,[N($(s.title)+" ",1),e("a",{class:"group-hover:block hidden cursor-pointer",onClick:m=>{f.value=!0,K(s.id)}},Ue,8,Ie)]))]),_:1},8,["modelValue"])])]),e("div",Be,[De,e("div",Fe,[r(t(H),{modelValue:t(l).infoblocks,"onUpdate:modelValue":o[3]||(o[3]=s=>t(l).infoblocks=s)},{item:C(({item:s})=>[e("span",Ne,$(s.title),1)]),_:1},8,["modelValue"])])])])]),e("div",Te,[Oe,e("div",null,[r(M,{for:"slug",value:"Адрес"}),r(E,{modelValue:t(l).slug,"onUpdate:modelValue":o[4]||(o[4]=s=>t(l).slug=s),class:"mt-1 block w-full"},null,8,["modelValue"]),r(D,{class:"mt-2",message:t(l).errors.slug},null,8,["message"])]),e("div",null,[r(M,{for:"parent",value:"Родительский элемент"}),r(de,{parents:t(g),modelValue:t(l).parent_id,"onUpdate:modelValue":o[5]||(o[5]=s=>t(l).parent_id=s),class:"mt-1 block w-full"},null,8,["parents","modelValue"])]),e("div",Ee,[r(Y,{disabled:t(l).processing},{default:C(()=>[N("Сохранить")]),_:1},8,["disabled"]),e("button",{onClick:J},"Удалить")]),r(W,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:C(()=>[t(l).recentlySuccessful?(n(),d("div",He,"Сохранено")):k("",!0)]),_:1})])])],32)]),f.value?(n(),d("div",Pe,[e("div",ze,[e("div",qe,[e("form",{id:"fItems",onSubmit:o[9]||(o[9]=F(s=>{t(a).post("/InfoBlocks/addItems"),f.value=!1},["prevent"]))},[e("div",Ae,[e("h3",Je,$(t(w)),1),e("button",{onClick:o[7]||(o[7]=s=>{f.value=!1}),type:"button",class:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-hide":"default-modal"},Ze)]),Object.keys(t(a).properties).length>0?(n(),d("div",Ge,[(n(!0),d(V,null,L(t(a).properties,(s,m)=>(n(),T(O(x(s.type)),{title:s.title,list:JSON.parse(s.list),item_id:parseInt(m),field_id:m,field_value:s.value,modelValue:t(a).properties[m].value,"onUpdate:modelValue":b=>t(a).properties[m].value=b,onFilesDropped:A},null,40,["title","list","item_id","field_id","field_value","modelValue","onUpdate:modelValue"]))),256))])):k("",!0),t(y)?(n(),d("div",Qe,[(n(!0),d(V,null,L(t(a).items,(s,m)=>(n(),d("div",{key:m,class:"p-4 bg-gray-50 rounded-lg space-y-2",id:"item_"+m},[(n(!0),d(V,null,L(s.fields,(b,U)=>(n(),T(O(x(b.field.type)),{title:b.field.title,list:null,item_id:parseInt(m),field_id:U,field_value:b.value,modelValue:t(a).items[m].fields[U].value,"onUpdate:modelValue":R=>t(a).items[m].fields[U].value=R,onFilesDropped:q},null,40,["title","item_id","field_id","field_value","modelValue","onUpdate:modelValue"]))),256)),e("div",Xe,[e("span",{class:"cursor-pointer bg-red-500 p-2 rounded-lg text-xs text-white",onClick:b=>z(m)},"Удалить",8,Ye)])],8,We))),128)),e("div",{class:"h-50 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg"},[e("span",{class:"cursor-pointer p-2 bg-indigo-500 rounded-lg text-xs text-white",onClick:P},"Добавить")])])):k("",!0),e("div",et,[tt,e("a",{onClick:o[8]||(o[8]=s=>f.value=!1)},"Отмена")])],32)])])])):k("",!0)]),_:1})],64))}};export{mt as default};
