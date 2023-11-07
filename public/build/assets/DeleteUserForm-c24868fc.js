import{o as u,c as g,aZ as w,m as $,p as C,aO as B,Q as D,j as S,a as o,w as l,l as m,bu as f,b as e,f as y,n as v,g as V,A as E,r as h,T as U,aB as A,e as p,u as c,bC as T}from"./app-11d8ba73.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as O,a as K,b as M}from"./TextInput-1653aec0.js";const P={},W={class:"inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150"};function j(t,r){return u(),g("button",W,[w(t.$slots,"default")])}const x=N(P,[["render",j]]),z={class:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50","scroll-region":""},F=e("div",{class:"absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"},null,-1),I=[F],L={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:r}){const a=t;$(()=>a.show,()=>{a.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const s=()=>{a.closeable&&r("close")},d=n=>{n.key==="Escape"&&a.show&&s()};C(()=>document.addEventListener("keydown",d)),B(()=>{document.removeEventListener("keydown",d),document.body.style.overflow=null});const i=D(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[a.maxWidth]);return(n,b)=>(u(),S(E,{to:"body"},[o(y,{"leave-active-class":"duration-200"},{default:l(()=>[m(e("div",z,[o(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:l(()=>[m(e("div",{class:"fixed inset-0 transform transition-all",onClick:s},I,512),[[f,t.show]])]),_:1}),o(y,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:l(()=>[m(e("div",{class:v(["mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",i.value])},[t.show?w(n.$slots,"default",{key:0}):V("",!0)],2),[[f,t.show]])]),_:3})],512),[[f,t.show]])]),_:3})]))}},Q=["type"],Z={__name:"SecondaryButton",props:{type:{type:String,default:"button"}},setup(t){return(r,a)=>(u(),g("button",{type:t.type,class:"inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150"},[w(r.$slots,"default")],8,Q))}},q={class:"space-y-6"},G=e("header",null,[e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Delete Account"),e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. ")],-1),H={class:"p-6"},J=e("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"}," Are you sure you want to delete your account? ",-1),R=e("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. ",-1),X={class:"mt-6"},Y={class:"mt-6 flex justify-end"},ae={__name:"DeleteUserForm",setup(t){const r=h(!1),a=h(null),s=U({password:""}),d=()=>{r.value=!0,A(()=>a.value.focus())},i=()=>{s.delete(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>n(),onError:()=>a.value.focus(),onFinish:()=>s.reset()})},n=()=>{r.value=!1,s.reset()};return(b,_)=>(u(),g("section",q,[G,o(x,{onClick:d},{default:l(()=>[p("Delete Account")]),_:1}),o(L,{show:r.value,onClose:n},{default:l(()=>[e("div",H,[J,R,e("div",X,[o(O,{for:"password",value:"Password",class:"sr-only"}),o(K,{id:"password",ref_key:"passwordInput",ref:a,modelValue:c(s).password,"onUpdate:modelValue":_[0]||(_[0]=k=>c(s).password=k),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:T(i,["enter"])},null,8,["modelValue","onKeyup"]),o(M,{message:c(s).errors.password,class:"mt-2"},null,8,["message"])]),e("div",Y,[o(Z,{onClick:n},{default:l(()=>[p(" Cancel ")]),_:1}),o(x,{class:v(["ml-3",{"opacity-25":c(s).processing}]),disabled:c(s).processing,onClick:i},{default:l(()=>[p(" Delete Account ")]),_:1},8,["class","disabled"])])])]),_:1},8,["show"])]))}};export{ae as default};
