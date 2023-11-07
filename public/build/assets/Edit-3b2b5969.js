import{K as u,T as V,o as n,c as m,a as r,u as t,w as g,F as p,Z as S,b as l,d as T,h as v,g as y,e as E,f as P,O as J,j as b,k}from"./app-583dc490.js";import{_ as x,a as K,b as w}from"./TextInput-e91112cb.js";import{P as L}from"./PrimaryButton-b25eb4bc.js";import{_ as M}from"./TextArea-65c9f0f6.js";import{_ as R}from"./AdminLayout-09298a5a.js";import{_ as $,a as Z,b as q}from"./radio-24642e33.js";import{_ as z}from"./content-31f705b4.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./TextArea.vue_vue_type_style_index_0_lang-48018343.js";const A={class:"bg-white md:flex md:flex-row"},G={class:"p-4 mt-6 space-y-6 w-full"},H=l("h2",{class:"text-lg font-medium text-black-50"},"Редактирование инфоблока",-1),Q={class:"space-y-2"},W={key:0,class:"space-y-6"},X=l("h2",{class:"text-lg font-medium text-black-50 mb-2"},"Свойства",-1),Y={key:1,class:"space-y-6"},ee=l("h2",{class:"text-lg font-medium text-black-50 mb-2"},"Элементы",-1),te=["id"],se={class:"flex flex-row items-center justify-end"},le=["onClick"],oe={class:"flex items-center gap-4"},ie={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},ge={__name:"Edit",props:{status:{type:String}},setup(ae){const C={Image:$,Text:Z,Radio:q,Video:$,Content:z},h=s=>C[s],d=u().props.block,f=u().props.props;let U=u().props.items;const B=u().props.fields,e=V({title:d.title,content:d.content,items:U,properties:f});console.log(f),V({id:d.id});function I(){console.log(e.items),e.items[Object.keys(e.items).length]=B,console.log(e.items)}function j(s){confirm("Вы действительно хотите удалить элеиент?")&&(e.items[s].remove=!0,document.getElementById("item_"+s).remove())}function D(s){console.log(s[0][0],s[1],s[2]);let a=s[1],o=s[2];console.log(e.items),e.items[a].fields[o].file=s[0]}function N(s){console.log(s[0][0]);let a=s[2];e.properties[a].file=s[0]}function O(){console.log(d),confirm("Вы действительно хотите удалить страницу?")&&J.delete(route("menus.destroy",d.id))}return(s,a)=>(n(),m(p,null,[r(t(S),{title:"Редактирование меню - "+t(d).title},null,8,["title"]),r(R,null,{default:g(()=>[l("section",null,[l("form",{onSubmit:a[2]||(a[2]=T(o=>t(e).patch(s.route("infoblocks.update",t(d))),["prevent"]))},[l("div",A,[l("div",G,[H,l("div",null,[r(x,{for:"title",value:"Название блока"}),r(K,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:t(e).title,"onUpdate:modelValue":a[0]||(a[0]=o=>t(e).title=o),autofocus:"",autocomplete:"title"},null,8,["modelValue"]),r(w,{class:"mt-2",message:t(e).errors.title},null,8,["message"])]),l("div",null,[r(x,{for:"content",value:"Текст блока",class:"mb-1"}),r(M,{modelValue:t(e).content,"onUpdate:modelValue":a[1]||(a[1]=o=>t(e).content=o),class:"mt-1 block w-full"},null,8,["modelValue"]),r(w,{class:"mt-2",message:t(e).errors.title},null,8,["message"])]),l("div",Q,[Object.keys(t(f)).length>0?(n(),m("div",W,[X,(n(!0),m(p,null,v(t(e).properties,(o,i)=>(n(),b(k(h(o.type)),{title:o.title,list:JSON.parse(o.list),item_id:parseInt(i),field_id:i,field_value:o.value,modelValue:t(e).properties[i].value,"onUpdate:modelValue":c=>t(e).properties[i].value=c,onFilesDropped:N},null,40,["title","list","item_id","field_id","field_value","modelValue","onUpdate:modelValue"]))),256))])):y("",!0),t(d).array?(n(),m("div",Y,[ee,(n(!0),m(p,null,v(t(e).items,(o,i)=>(n(),m("div",{key:i,class:"p-4 bg-gray-50 rounded-lg",id:"item_"+i},[(n(!0),m(p,null,v(o.fields,(c,_)=>(n(),b(k(h(c.field.type)),{title:c.field.title,list:null,item_id:parseInt(i),field_id:_,field_value:c.value,modelValue:t(e).items[i].fields[_].value,"onUpdate:modelValue":F=>t(e).items[i].fields[_].value=F,onFilesDropped:D},null,40,["title","item_id","field_id","field_value","modelValue","onUpdate:modelValue"]))),256)),l("div",se,[l("span",{class:"cursor-pointer bg-red-500 p-2 rounded-lg text-xs text-white",onClick:c=>j(i)},"Удалить",8,le)])],8,te))),128)),l("div",{class:"h-50 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg"},[l("span",{class:"cursor-pointer p-2 bg-indigo-500 rounded-lg text-xs text-white",onClick:I},"Добавить")])])):y("",!0),l("div",oe,[r(L,{disabled:t(e).processing},{default:g(()=>[E("Сохранить")]),_:1},8,["disabled"]),l("button",{onClick:O},"Удалить")]),r(P,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:g(()=>[t(e).recentlySuccessful?(n(),m("div",ie,"Сохранено")):y("",!0)]),_:1})])])])],32)])]),_:1})],64))}};export{ge as default};
