import{_ as b}from"./AdminLayout-c437972a.js";import{K as w,r as i,q as V,o as s,i as k,w as D,a as y,u as C,Z as B,b as e,c as o,h as _,F as h,t as n,n as N,e as F,g as M}from"./app-975a7e7d.js";/* empty css            */const S={class:"py-12"},P={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},T={class:""},q={class:"inline-block min-w-full align-middle border-2"},z={class:"min-w-full divide-y divide-gray-300"},E={class:"divide-x divide-gray-200"},H=e("th",null,null,-1),I={scope:"col",class:"py-3.5 px-4 text-center text-sm font-semibold text-gray-900"},K={class:"divide-y divide-gray-200 bg-white"},L={class:"divide-x divide-gray-200"},U={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},Y=["href"],Z={key:0},$=e("hr",null,null,-1),O={__name:"Shedule",setup(j){w().props.pages;const p=i(new Date);let m=i(null);const c=i([]),u=i([]),v=t=>{if(!t)return;let r=t.getDate(),d=t.getMonth()+1;m=t.getFullYear()+"-"+(d<=9?"0"+d:d)+"-"+(r<=9?"0"+r:r),g()},g=()=>{axios.post(route("get-table"),{selected_date:m}).then(t=>{u.value=t.data.instructors,c.value=t.data.header}).catch(t=>{console.log(t)})};v(new Date),window.setInterval(()=>{g()},6e4);const f=()=>{u.value=null,c.value=null};return(t,r)=>{const d=V("VueDatePicker");return s(),k(b,null,{default:D(()=>[y(C(B),{title:"Административная панель"}),e("div",S,[e("div",P,[e("div",T,[y(d,{class:"mb-4",format:"dd/MM/yyyy",modelValue:p.value,"onUpdate:modelValue":[r[0]||(r[0]=l=>p.value=l),v],"enable-time-picker":!1,position:"left",placeholder:"Дата",onCleared:f,locale:"ru","select-text":"Подтвердить","cancel-text":"Закрыть"},null,8,["modelValue"]),e("div",q,[e("table",z,[e("thead",null,[e("tr",E,[H,(s(!0),o(h,null,_(c.value,l=>(s(),o("th",I,n(l),1))),256))])]),e("tbody",K,[(s(!0),o(h,null,_(u.value,l=>(s(),o("tr",L,[e("td",U,[e("a",{href:"/admin/instructors/edit/"+l.id},n(l.name),9,Y)]),(s(!0),o(h,null,_(l.times,a=>{var x;return s(),o("td",{class:N([{"bg-gray-500":a.active===!1,"bg-green-500":a.active===!0,"bg-red-500":a.selected===!0},"relative py-4 text-center text-sm font-medium text-white"])},[F(n(a.discipline)+" ",1),(x=a.order)!=null&&x.payed?(s(),o("div",Z,[$,e("div",null,"Человек: "+n(a.order.count),1),e("div",null,n(a.order.email)+" "+n(a.order.phone)+" "+n(a.order.name),1)])):M("",!0)],2)}),256))]))),256))])])])])])])]),_:1})}}};export{O as default};
