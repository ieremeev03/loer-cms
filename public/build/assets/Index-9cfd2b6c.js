import{_ as x}from"./AdminLayout-ad12213f.js";import{o,d as a,b as e,F as r,e as i,c as p,p as u,u as _,bG as y,i as n,w as f,a as d,Z as w,t as s}from"./app-5f1e8232.js";/* empty css            */const g={key:0},b={class:"flex flex-wrap -mb-1"},v=["innerHTML"],k={__name:"Pagination",props:{links:Array},setup(l){return(h,m)=>l.links.length>3?(o(),a("div",g,[e("div",b,[(o(!0),a(r,null,i(l.links,(t,c)=>(o(),a(r,{key:c},[t.url===null?(o(),a("div",{key:0,class:"mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded",innerHTML:t.label},null,8,v)):(o(),p(_(y),{key:1,class:u(["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-600 focus:text-indigo-600",{"bg-indigo-600 text-white hover:text-black":t.active}]),href:t.url,innerHTML:t.label},null,8,["class","href","innerHTML"]))],64))),128))])])):n("",!0)}},L={class:"p-4 mt-6 space-y-6"},$=e("div",{class:"flex items-center justify-between flex-wrap"},[e("h1",{class:"text-lg font-medium text-black-50"}," Ски-пассы"),e("div",{class:"flex flex-row gap-6"})],-1),B={class:"relative overflow-x-auto rounded"},H={class:"w-full text-sm text-left text-gray-600"},M=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"},"ID"),e("th",{scope:"col",class:"px-6 py-3"},"Дата покупки"),e("th",{scope:"col",class:"px-6 py-3"},"Операция"),e("th",{scope:"col",class:"px-6 py-3"},"Ски-пасс"),e("th",{scope:"col",class:"px-6 py-3"},"Дата катания"),e("th",{scope:"col",class:"px-6 py-3"},"Тариф"),e("th",{scope:"col",class:"px-6 py-3"},"Контакты"),e("th",{scope:"col",class:"px-6 py-3"},"Сумма"),e("th",{scope:"col",class:"px-6 py-3"},"Оплата")])],-1),T={scope:"row",class:"w-3 px-6 py-4 font-medium whitespace-nowrap"},C={class:"px-6 py-4 font-medium whitespace-nowrap w-full"},N={class:"px-6 py-4 font-medium whitespace-nowrap w-full"},V={class:"px-6 py-4 font-medium whitespace-nowrap w-full"},j={class:"px-6 py-4 font-medium whitespace-nowrap w-full"},D={class:"px-6 py-4 font-medium whitespace-nowrap w-full"},F={class:"px-6 py-4 text-xs whitespace-nowrap w-full"},I={key:0},S={key:1},z={key:2},A={class:"px-6 py-4 font-medium whitespace-nowrap w-full"},E={class:"px-6 py-4 font-medium whitespace-nowrap w-full"},Z={__name:"Index",props:{skipasses:Object},setup(l){return(h,m)=>(o(),p(x,{title:"Ски-пассы"},{default:f(()=>[d(_(w),{title:"Административная панель Ски-пасс"}),e("section",null,[e("div",L,[$,e("div",B,[e("table",H,[M,e("tbody",null,[(o(!0),a(r,null,i(l.skipasses.data,t=>{var c;return o(),a("tr",{class:u(["border-b dark:border-gray-700",{"bg-gray-100":!t.payed,"bg-green-100":t.payed}])},[e("td",T," S-"+s(t.id),1),e("td",C,s(t.created_at),1),e("td",N,s(t.operation===1?"Покупка":"Пополнение"),1),e("td",V,s(t.skipass),1),e("td",j,s(t.date_visit),1),e("td",D,s((c=t.tariff)==null?void 0:c.title),1),e("td",F,[t.name?(o(),a("div",I,s(t.name),1)):n("",!0),t.phone?(o(),a("div",S,s(t.phone),1)):n("",!0),t.email?(o(),a("div",z,s(t.email),1)):n("",!0)]),e("td",A,s(t.sum),1),e("td",E,s(t.payed?"+":"-"),1)],2)}),256))])])]),d(k,{class:"mt-6",links:l.skipasses.links},null,8,["links"])])])]),_:1}))}};export{Z as default};
