import{_ as i,u as d,z as m,A as h,o as t,c as o,F as k,q as x,p as f}from"./Flz0fBzF.js";const v={class:"photos"},P=["src","onClick"],g={__name:"Photos",props:{count:Number},emits:["loaded","select"],setup(a,{emit:u}){const s=u,e=a,{$PhotosGet:_}=d(),n=_(),c=m(()=>e.count?n.slice(0,e.count):n),p=()=>{s("loaded",c.value)};return h(()=>{p()}),(y,A)=>(t(),o("div",v,[(t(!0),o(k,null,x(f(c),(r,l)=>(t(),o("img",{key:"photo"+l,src:r.src,onClick:B=>s("select",r.id)},null,8,P))),128))]))}},F=i(g,[["__scopeId","data-v-70a4727e"]]);export{F as _};