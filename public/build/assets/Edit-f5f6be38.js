import{K as _,T as x,o as a,c as r,a as c,u as s,w as h,F as u,Z as T,b as l,d as E,r as y,h as k,j as V,g as f,e as C,t as g,f as P,O as z}from"./app-a78ace53.js";import{_ as b}from"./InputError-351a3e5c.js";import{_ as $}from"./InputLabel-59c3b7fc.js";import{P as X}from"./PrimaryButton-ef5c708b.js";import{_ as J}from"./TextInput-860456c6.js";import{_ as K}from"./TextArea-5d73bcc5.js";import{_ as R}from"./AdminLayout-b3d0f4a3.js";import{_ as Z}from"./image-709829f4.js";import{_ as q,a as A}from"./content-e8a4f23d.js";import{_ as G,a as H}from"./radio-857256c4.js";import"./TextArea.vue_vue_type_style_index_0_lang-3aa3d433.js";/* empty css            */const Q={class:"bg-white md:flex md:flex-row"},W={class:"p-4 mt-6 space-y-6 w-full"},Y=l("h2",{class:"text-lg font-medium text-black-50"},"Редактирование инфоблока",-1),ee={class:"space-y-2"},te={key:0,class:"space-y-6"},se=l("h2",{class:"text-lg font-medium text-black-50 mb-2"},"Свойства",-1),le={key:1,class:"space-y-6"},oe=l("h2",{class:"text-lg font-medium text-black-50 mb-2"},"Элементы",-1),ie=["id"],ne={class:"flex flex-row items-center justify-end gap-2"},ae=["onClick"],re=["onClick"],ce=l("svg",{fill:"currentColor",height:"10px",width:"10px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 330 330","xml:space":"preserve"},[l("path",{id:"XMLID_224_",d:`M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
                                                l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
                                                C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z`})],-1),me=[ce],de=["onClick"],pe=l("svg",{fill:"currentColor",height:"10px",width:"10px",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 330 330","xml:space":"preserve"},[l("path",{id:"XMLID_225_",d:`M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
                                            c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
                                            s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z`})],-1),ue=[pe],fe={class:"flex items-center gap-4"},_e={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},Be={__name:"Edit",props:{status:{type:String}},setup(ge){const D={Image:Z,Text:G,Radio:H,Video:q,Content:A},w=t=>D[t],d=_().props.block,v=_().props.props;let U=_().props.items;const B=_().props.fields,e=x({title:d.title,content:d.content,items:U,properties:v});console.log(v),x({id:d.id});function I(t){let i=e.items.splice(t,1);e.items.splice(t-1,0,i[0])}function j(t){let i=e.items.splice(t,1);e.items.splice(t+1,0,i[0])}function L(){console.log(e.items),e.items[Object.keys(e.items).length]=B,console.log(e.items)}function O(t){confirm("Вы действительно хотите удалить элеиент?")&&(e.items[t].remove=!0,document.getElementById("item_"+t).remove())}function M(t){console.log(t[0][0],t[1],t[2]);let i=t[1],n=t[2];console.log(e.items),e.items[i].fields[n].file=t[0]}function N(t){console.log(t[0][0]);let i=t[2];e.properties[i].file=t[0]}function S(){console.log(d),confirm("Вы действительно хотите удалить страницу?")&&z.delete(route("menus.destroy",d.id))}return(t,i)=>(a(),r(u,null,[c(s(T),{title:"Редактирование меню - "+s(d).title},null,8,["title"]),c(R,null,{default:h(()=>[l("section",null,[l("form",{onSubmit:i[2]||(i[2]=E(n=>s(e).patch(t.route("infoblocks.update",s(d))),["prevent"]))},[l("div",Q,[l("div",W,[Y,l("div",null,[c($,{for:"title",value:"Название блока"}),c(J,{id:"title",type:"text",class:"mt-1 block w-full",modelValue:s(e).title,"onUpdate:modelValue":i[0]||(i[0]=n=>s(e).title=n),autofocus:"",autocomplete:"title"},null,8,["modelValue"]),c(b,{class:"mt-2",message:s(e).errors.title},null,8,["message"])]),l("div",null,[c($,{for:"content",value:"Текст блока",class:"mb-1"}),c(K,{modelValue:s(e).content,"onUpdate:modelValue":i[1]||(i[1]=n=>s(e).content=n),class:"mt-1 block w-full"},null,8,["modelValue"]),c(b,{class:"mt-2",message:s(e).errors.title},null,8,["message"])]),l("div",ee,[Object.keys(s(v)).length>0?(a(),r("div",te,[se,(a(!0),r(u,null,y(s(e).properties,(n,o)=>(a(),k(V(w(n.type)),{title:n.title,list:JSON.parse(n.list),item_id:parseInt(o),field_id:o,field_value:n.value,modelValue:s(e).properties[o].value,"onUpdate:modelValue":m=>s(e).properties[o].value=m,onFilesDropped:N},null,40,["title","list","item_id","field_id","field_value","modelValue","onUpdate:modelValue"]))),256))])):f("",!0),s(d).array?(a(),r("div",le,[oe,(a(!0),r(u,null,y(s(e).items,(n,o)=>(a(),r("div",{key:o,class:"p-4 bg-gray-50 rounded-lg",id:"item_"+o},[(a(!0),r(u,null,y(n.fields,(m,p)=>(a(),r(u,null,[(a(),k(V(w(m.field.type)),{title:m.field.title,list:null,item_id:parseInt(o),field_id:p,field_value:m.value,modelValue:s(e).items[o].fields[p].value,"onUpdate:modelValue":F=>s(e).items[o].fields[p].value=F,onFilesDropped:M},null,40,["title","item_id","field_id","field_value","modelValue","onUpdate:modelValue"])),C(" form.items["+g(o)+"].fields["+g(p)+"].value - "+g(s(e).items[o].fields[p].value)+" - "+g(m.value),1)],64))),256)),l("div",ne,[l("span",{class:"cursor-pointer bg-red-500 p-2 rounded-lg text-xs text-white",onClick:m=>O(o)},"Удалить",8,ae),o>0?(a(),r("span",{key:0,class:"cursor-pointer p-2 bg-indigo-500 rounded-lg text-xs text-white",onClick:m=>I(o)},me,8,re)):f("",!0),o<Object.keys(s(e).items).length-1?(a(),r("span",{key:1,class:"cursor-pointer p-2 bg-indigo-500 rounded-lg text-xs text-white",onClick:m=>j(o)},ue,8,de)):f("",!0)])],8,ie))),128)),l("div",{class:"h-50 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg"},[l("span",{class:"cursor-pointer p-2 bg-indigo-500 rounded-lg text-xs text-white",onClick:L},"Добавить")])])):f("",!0),l("div",fe,[c(X,{disabled:s(e).processing},{default:h(()=>[C("Сохранить")]),_:1},8,["disabled"]),l("button",{onClick:S},"Удалить")]),c(P,{"enter-active-class":"transition ease-in-out","enter-from-class":"opacity-0","leave-active-class":"transition ease-in-out","leave-to-class":"opacity-0"},{default:h(()=>[s(e).recentlySuccessful?(a(),r("div",_e,"Сохранено")):f("",!0)]),_:1})])])])],32)])]),_:1})],64))}};export{Be as default};
