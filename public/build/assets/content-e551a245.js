import{C as s,c}from"./TextArea.vue_vue_type_style_index_0_lang-3168cdec.js";import{_ as u}from"./TextInput-1653aec0.js";import{r as a,m,o as p,c as g,a as l,u as i}from"./app-11d8ba73.js";const V={__name:"content",props:{modelValue:{type:String},title:{type:String}},emits:["update:modelValue"],setup(t,{emit:n}){const e=a(t.modelValue||""),d=a({height:"300px",toolbar:["heading","|","bold","italic","link","bulletedList","numberedList","blockQuote"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"}]}});return m(e,()=>{n("update:modelValue",e.value)}),a(),(f,o)=>(p(),g("div",null,[l(u,{for:"title",value:t.title},null,8,["value"]),l(i(c.component),{editor:i(s),modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=r=>e.value=r),config:d.value,class:"rounded"},null,8,["editor","modelValue","config"])]))}};export{V as _};
