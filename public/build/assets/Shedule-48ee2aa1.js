import{_ as w}from"./AdminLayout-c0ed84a9.js";import{K as V,r as i,q as k,o as a,i as D,w as C,a as f,u as B,Z as N,b as e,c as n,h,F as p,t as o,n as F,e as c,g as M}from"./app-8bc95adf.js";/* empty css            */const S={class:"py-12"},P={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},T={class:""},q={class:"inline-block min-w-full align-middle border-2"},z={class:"min-w-full divide-y divide-gray-300"},E={class:"divide-x divide-gray-200"},H=e("th",null,null,-1),I={scope:"col",class:"py-3.5 px-4 text-center text-sm font-semibold text-gray-900"},K={class:"divide-y divide-gray-200 bg-white"},L={class:"divide-x divide-gray-200"},U={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},Y=["href"],Z={key:0},$=e("hr",null,null,-1),j=e("br",null,null,-1),A=e("br",null,null,-1),R={__name:"Shedule",setup(G){V().props.pages;const m=i(new Date);let v=i(null);const u=i([]),_=i([]),g=t=>{if(!t)return;let r=t.getDate(),d=t.getMonth()+1;v=t.getFullYear()+"-"+(d<=9?"0"+d:d)+"-"+(r<=9?"0"+r:r),x()},x=()=>{axios.post(route("get-table"),{selected_date:v}).then(t=>{_.value=t.data.instructors,u.value=t.data.header}).catch(t=>{console.log(t)})};g(new Date),window.setInterval(()=>{x()},6e4);const b=()=>{_.value=null,u.value=null};return(t,r)=>{const d=k("VueDatePicker");return a(),D(w,null,{default:C(()=>[f(B(N),{title:"Административная панель"}),e("div",S,[e("div",P,[e("div",T,[f(d,{class:"mb-4",format:"dd/MM/yyyy",modelValue:m.value,"onUpdate:modelValue":[r[0]||(r[0]=s=>m.value=s),g],"enable-time-picker":!1,position:"left",placeholder:"Дата",onCleared:b,locale:"ru","select-text":"Подтвердить","cancel-text":"Закрыть"},null,8,["modelValue"]),e("div",q,[e("table",z,[e("thead",null,[e("tr",E,[H,(a(!0),n(p,null,h(u.value,s=>(a(),n("th",I,o(s),1))),256))])]),e("tbody",K,[(a(!0),n(p,null,h(_.value,s=>(a(),n("tr",L,[e("td",U,[e("a",{href:"/admin/instructors/edit/"+s.id},o(s.name),9,Y)]),(a(!0),n(p,null,h(s.times,l=>{var y;return a(),n("td",{class:F([{"bg-gray-500":l.active===!1,"bg-green-500":l.active===!0,"bg-red-500":l.selected===!0},"relative py-4 text-center text-sm font-medium text-white"])},[c(o(l.discipline)+" ",1),(y=l.order)!=null&&y.payed?(a(),n("div",Z,[$,e("div",null,"Кол-во чел.: "+o(l.order.count),1),e("div",null,[c(o(l.order.email)+" ",1),j,c(o(l.order.phone)+" ",1),A,c(o(l.order.name),1)])])):M("",!0)],2)}),256))]))),256))])])])])])])]),_:1})}}};export{R as default};