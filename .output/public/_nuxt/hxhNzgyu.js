import{k as n,g as o,l as c,o as h,O as a,s as l,a7 as p,X as u,U as d,a8 as f}from"./C1fZjgUh.js";import{_ as m}from"./BuKaQ98f.js";const S=n({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(r){const t=r,i=o(()=>{var e;if((e=t.src)!=null&&e.startsWith("/")&&!t.src.startsWith("//")){const s=p(u(d().app.baseURL));if(s!=="/"&&!t.src.startsWith(s))return f(s,t.src)}return t.src});return(e,s)=>(h(),c(l(a(m)),{src:a(i),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{S as default};
