import{_ as h}from"./AdminLayout-2843fbf0.js";import{o,c as a,b as t,F as i,r as d,h as m,n as p,u as y,bG as f,g as c,w as r,t as s,a as u}from"./app-99d1eadb.js";/* empty css            */const g={key:0},b={class:"flex flex-wrap -mb-1"},w=["innerHTML"],v={__name:"Pagination",props:{links:Array},setup(l){return(x,_)=>l.links.length>3?(o(),a("div",g,[t("div",b,[(o(!0),a(i,null,d(l.links,(e,n)=>(o(),a(i,{key:n},[e.url===null?(o(),a("div",{key:0,class:"mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded",innerHTML:e.label},null,8,w)):(o(),m(y(f),{key:1,class:p(["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-600 focus:text-indigo-600",{"bg-indigo-600 text-white hover:text-black":e.active}]),href:e.url,innerHTML:e.label},null,8,["class","href","innerHTML"]))],64))),128))])])):c("",!0)}},L=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Ски-пассы ",-1),$={class:"py-12"},B={class:"max-w-7xl mx-auto"},H={class:""},M={class:"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"},T={class:"min-w-full divide-y divide-gray-300"},k=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900"}," # "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900"}," Дата покупки "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900"}," Операция "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900"}," Ски-пасс "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900"},"Дата катания "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900"},"Тариф "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900"}," Контакты "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900"},"Сумма "),t("th",{scope:"col",class:"py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900"}," Оплата ")])],-1),C={class:"divide-y divide-gray-200 bg-white"},N={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},V={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},F={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},S={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},j={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},z={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},A={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},D={key:0},E={key:1},G={key:2},I={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},O={class:"whitespace-nowrap p-4 text-sm font-medium text-gray-900"},K={__name:"Index",props:{skipasses:Object},setup(l){return(x,_)=>(o(),m(h,{title:"Ски-пассы"},{header:r(()=>[L]),default:r(()=>[t("div",$,[t("div",B,[t("div",H,[t("div",M,[t("table",T,[k,t("tbody",C,[(o(!0),a(i,null,d(l.skipasses.data,e=>{var n;return o(),a("tr",{class:p({"bg-gray-100":!e.payed,"bg-green-100":e.payed})},[t("td",N," S-"+s(e.id),1),t("td",V,s(e.created_at),1),t("td",F,s(e.operation===1?"Покупка":"Пополнение"),1),t("td",S,s(e.skipass),1),t("td",j,s(e.date_visit),1),t("td",z,s((n=e.tariff)==null?void 0:n.title),1),t("td",A,[e.name?(o(),a("div",D,s(e.name),1)):c("",!0),e.phone?(o(),a("div",E,s(e.phone),1)):c("",!0),e.email?(o(),a("div",G,s(e.email),1)):c("",!0)]),t("td",I,s(e.sum),1),t("td",O,s(e.payed?"+":"-"),1)],2)}),256))])]),u(v,{class:"mt-6",links:l.skipasses.links},null,8,["links"])])])])])]),_:1}))}};export{K as default};