import{_ as f}from"./AdminLayout-96ee7dbc.js";import{x as v,o as s,j as y,w as p,a as r,u as g,Z as b,b as e,c as l,t as m,g as c,h as u,F as i,e as w}from"./app-a16ee73e.js";import{P as k}from"./PrimaryButton-eb047dc7.js";import{_ as V}from"./TextInput-ddb2050b.js";import"./_plugin-vue_export-helper-c27b6911.js";const B={class:"py-12"},C={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},L=e("h2",{class:"text-lg font-medium text-black-50"},"Цены",-1),z={class:""},N={class:"inline-block min-w-full py-2 align-middle"},M={key:0,class:"rounded-md bg-red-50 p-4 mb-2"},P={class:"flex"},F=e("div",{class:"flex-shrink-0"},[e("svg",{class:"h-5 w-5 text-red-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z","clip-rule":"evenodd"})])],-1),U={class:"ml-3"},$={class:"text-sm font-medium text-red-800"},j={key:1,class:"rounded-md bg-green-50 p-4 mb-3"},q=e("div",{class:"flex"},[e("div",{class:"flex-shrink-0"},[e("svg",{class:"h-5 w-5 text-green-400",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z","clip-rule":"evenodd"})])]),e("div",{class:"ml-3"},[e("h3",{class:"text-sm font-medium text-green-800"},"Сохранено")])],-1),A=[q],D={class:"min-w-full divide-y divide-gray-300"},E=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"},"Инструктор"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"},"Индивидуальное занятие (1 чел, 1 час)"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"},"Групповое занятие (2 чел, 1 час)"),e("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-0"},"Групповое занятие (3 чел, 1 час)")])],-1),S={class:"divide-y divide-gray-200 bg-white"},T={class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"},Z={key:0,class:"whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0"},Q={__name:"Price",props:{price:Array},setup(d){const _=d,t=v({success:null,error:null}),h=()=>{t.success=null,t.error=null,axios.post(route("price.save"),{price:_.price}).then(o=>{t.success=!0}).catch(o=>{t.error=o.response.data.message})};return(o,G)=>(s(),y(f,null,{default:p(()=>[r(g(b),{title:"Административная панель"}),e("div",B,[e("div",C,[L,e("div",z,[e("div",N,[t.error?(s(),l("div",M,[e("div",P,[F,e("div",U,[e("h3",$,m(t.error),1)])])])):c("",!0),t.success?(s(),l("div",j,A)):c("",!0),e("table",D,[E,e("tbody",S,[(s(),l(i,null,u([0,1],n=>e("tr",null,[e("td",T,m(n?"Выходные":"Будни"),1),(s(!0),l(i,null,u(d.price,a=>(s(),l(i,null,[a.is_weekend===n?(s(),l("td",Z,[r(V,{type:"number",class:"mt-1 block w-full",modelValue:a.price,"onUpdate:modelValue":x=>a.price=x,autofocus:"",required:""},null,8,["modelValue","onUpdate:modelValue"])])):c("",!0)],64))),256))])),64))])]),r(k,{onClick:h},{default:p(()=>[w("Сохранить")]),_:1})])])])])]),_:1}))}};export{Q as default};
