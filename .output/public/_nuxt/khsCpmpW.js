import{e as se,f as ne,g,h as R,m as E,i as ie,j as le,_ as U,k as P,l as w,o as a,w as q,c as o,n as p,p as h,r as $,q as z,s as Q,v as L,x as M,y as C,z as S,A as F,B as H,t as k,C as oe,D as de,E as W,F as ue,G as ce,H as ge,I as fe,a as y,P as pe,J as O,K as D,b as V,d as Z,L as ye,M as be,N as me,O as j}from"./C1fZjgUh.js";import ve from"./D2luESkz.js";import{_ as he}from"./CAuk7DIn.js";import{i as X,d as xe}from"./x1tBGboY.js";import{a as Y}from"./C-yzi7HA.js";import{u as ke}from"./CjNO3dgR.js";const ee={to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1}},we={as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},$e=e=>[...Object.keys(ee),...Object.keys(we),"ariaLabel","title"].reduce((s,i)=>(e[i]!==void 0&&(s[i]=e[i]),s),{}),T=(e,t,s,i,d=!1)=>{const r=se(),n=ne(),f=g(()=>{var b;const u=R(t),v=R(s),x=R(i);return E((u==null?void 0:u.strategy)||((b=n.ui)==null?void 0:b.strategy),x?{wrapper:x}:{},u||{},d?ie(n.ui,e,{}):{},v||{})}),m=g(()=>le(r,["class"]));return{ui:f,attrs:m}},ze={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},Ce={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},gap:{xs:"gap-0.5",sm:"gap-1",md:"gap-1",lg:"gap-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},icon:{base:"flex-shrink-0",size:{xs:"h-4 w-4",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-5 w-5"}},default:{size:"sm",variant:"solid",color:"primary"}},Se={option:{base:"cursor-default select-none relative flex items-center justify-between gap-1",rounded:"rounded-md",padding:"px-1.5 py-1.5",size:"text-sm",color:"text-gray-900 dark:text-white",container:"flex items-center gap-1.5 min-w-0",active:"bg-gray-100 dark:bg-gray-900",inactive:"",selected:"pe-7",disabled:"cursor-not-allowed opacity-50",empty:"text-sm text-gray-400 dark:text-gray-500 px-2 py-1.5",icon:{base:"flex-shrink-0 h-5 w-5",active:"text-gray-900 dark:text-white",inactive:"text-gray-400 dark:text-gray-500"},selectedIcon:{wrapper:"absolute inset-y-0 end-0 flex items-center",padding:"pe-2",base:"h-5 w-5 text-gray-900 dark:text-white flex-shrink-0"},avatar:{base:"flex-shrink-0",size:"2xs"},chip:{base:"flex-shrink-0 w-2 h-2 mx-1 rounded-full"}}};({...Se.option});const Ie={base:"",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},je={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs",type:"solid"}},_e={wrapper:"relative",base:"group relative flex items-center gap-1.5 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",ring:"focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",padding:"px-2.5 py-1.5",width:"w-full",rounded:"rounded-md",font:"font-medium",size:"text-sm",active:"text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",label:"truncate relative",icon:{base:"flex-shrink-0 w-5 h-5 relative",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200"},avatar:{base:"flex-shrink-0",size:"2xs"},badge:{base:"flex-shrink-0 ms-auto relative rounded",color:"gray",variant:"solid",size:"xs"},divider:{wrapper:{base:"p-2"}}},Oe=E(S.ui.strategy,S.ui.card,Ie),Be=P({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=T("card",L(e,"ui"),Oe),i=g(()=>M(C(t.value.base,t.value.rounded,t.value.divide,t.value.ring,t.value.shadow,t.value.background),e.class));return{ui:t,attrs:s,cardClass:i}}});function Ae(e,t,s,i,d,r){return a(),w(Q(e.$attrs.onSubmit?"form":e.as),z({class:e.cardClass},e.attrs),{default:q(()=>[e.$slots.header?(a(),o("div",{key:0,class:h([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[$(e.$slots,"header")],2)):p("",!0),e.$slots.default?(a(),o("div",{key:1,class:h([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[$(e.$slots,"default")],2)):p("",!0),e.$slots.footer?(a(),o("div",{key:2,class:h([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[$(e.$slots,"footer")],2)):p("",!0)]),_:3},16,["class"])}const qe=U(Be,[["render",Ae]]),Ue=P({props:{name:{type:String,required:!0},mode:{type:String,required:!1,default:null},size:{type:[Number,String],required:!1,default:null},customize:{type:Function,required:!1,default:null}}});function Pe(e,t,s,i,d,r){const n=ve;return a(),w(n,F(H(e.$props)),null,16)}const B=U(Ue,[["render",Pe]]),A=E(S.ui.strategy,S.ui.avatar,ze),Ne=P({components:{UIcon:B},inheritAttrs:!1,props:{as:{type:[String,Object],default:"img"},src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>A.default.icon},size:{type:String,default:()=>A.default.size,validator(e){return Object.keys(A.size).includes(e)}},chipColor:{type:String,default:()=>A.default.chipColor,validator(e){return["gray",...S.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>A.default.chipPosition,validator(e){return Object.keys(A.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=T("avatar",L(e,"ui"),A),i=g(()=>typeof e.src=="boolean"?null:e.src),d=g(()=>(e.alt||"").split(" ").map(x=>x.charAt(0)).join("").substring(0,2)),r=g(()=>M(C(t.value.wrapper,(u.value||!i.value)&&t.value.background,t.value.rounded,t.value.size[e.size]),e.class)),n=g(()=>M(C(t.value.rounded,t.value.size[e.size]),e.imgClass)),f=g(()=>C(t.value.icon.base,t.value.icon.size[e.size])),m=g(()=>C(t.value.chip.base,t.value.chip.size[e.size],t.value.chip.position[e.chipPosition],t.value.chip.background.replaceAll("{color}",e.chipColor))),u=oe(!1);de(()=>e.src,()=>{u.value&&(u.value=!1)});function v(){u.value=!0}return{ui:t,attrs:s,wrapperClass:r,imgClass:n,iconClass:f,chipClass:m,url:i,placeholder:d,error:u,onError:v}}});function Le(e,t,s,i,d,r){const n=B;return a(),o("span",{class:h(e.wrapperClass)},[e.url&&!e.error?(a(),w(Q(e.as),z({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:e.onError}),null,16,["class","alt","src","onError"])):e.text?(a(),o("span",{key:1,class:h(e.ui.text)},k(e.text),3)):e.icon?(a(),w(n,{key:2,name:e.icon,class:h(e.iconClass)},null,8,["name","class"])):e.placeholder?(a(),o("span",{key:3,class:h(e.ui.placeholder)},k(e.placeholder),3)):p("",!0),e.chipColor?(a(),o("span",{key:4,class:h(e.chipClass)},k(e.chipText),3)):p("",!0),$(e.$slots,"default")],2)}const K=U(Ne,[["render",Le]]);function Me({ui:e,props:t}){const s=ue();if(fe("ButtonGroupContextConsumer",!0),W("ButtonGroupContextConsumer",!1))return{size:g(()=>t.size),rounded:g(()=>e.value.rounded)};let d=s.parent,r;for(;d&&!r;){if(d.type.name==="ButtonGroup"){r=W(`group-${d.uid}`);break}d=d.parent}const n=g(()=>r==null?void 0:r.value.children.indexOf(s));return ce(()=>{r==null||r.value.register(s)}),ge(()=>{r==null||r.value.unregister(s)}),{size:g(()=>r!=null&&r.value?(r==null?void 0:r.value.size)??e.value.default.size:t.size),rounded:g(()=>!r||n.value===-1?e.value.rounded:r.value.children.length===1?r.value.ui.rounded:n.value===0?r.value.rounded.start:n.value===r.value.children.length-1?r.value.rounded.end:"rounded-none")}}const _=E(S.ui.strategy,S.ui.badge,Ce),Ee=P({components:{UIcon:B},inheritAttrs:!1,props:{size:{type:String,default:()=>_.default.size,validator(e){return Object.keys(_.size).includes(e)}},color:{type:String,default:()=>_.default.color,validator(e){return[...S.ui.colors,...Object.keys(_.color)].includes(e)}},variant:{type:String,default:()=>_.default.variant,validator(e){return[...Object.keys(_.variant),...Object.values(_.color).flatMap(t=>Object.keys(t))].includes(e)}},label:{type:[String,Number],default:null},icon:{type:String,default:null},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=T("badge",L(e,"ui"),_),{size:i,rounded:d}=Me({ui:t,props:e}),r=g(()=>e.icon&&e.leading||e.icon&&!e.trailing||!e.trailing||e.leadingIcon),n=g(()=>e.icon&&e.trailing||e.trailing||e.trailingIcon),f=g(()=>{var l,I;const b=((I=(l=t.value.color)==null?void 0:l[e.color])==null?void 0:I[e.variant])||t.value.variant[e.variant];return M(C(t.value.base,t.value.font,d.value,t.value.size[i.value],t.value.gap[i.value],b==null?void 0:b.replaceAll("{color}",e.color)),e.class)}),m=g(()=>e.leadingIcon||e.icon),u=g(()=>e.trailingIcon||e.icon),v=g(()=>C(t.value.icon.base,t.value.icon.size[i.value])),x=g(()=>C(t.value.icon.base,t.value.icon.size[i.value]));return{attrs:s,isLeading:r,isTrailing:n,badgeClass:f,leadingIconName:m,trailingIconName:u,leadingIconClass:v,trailingIconClass:x}}}),Ge={key:0};function De(e,t,s,i,d,r){const n=B;return a(),o("span",z({class:e.badgeClass},e.attrs),[$(e.$slots,"leading",{},()=>[e.isLeading&&e.leadingIconName?(a(),w(n,{key:0,name:e.leadingIconName,class:h(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):p("",!0)]),$(e.$slots,"default",{},()=>[e.label?(a(),o("span",Ge,k(e.label),1)):p("",!0)]),$(e.$slots,"trailing",{},()=>[e.isTrailing&&e.trailingIconName?(a(),w(n,{key:0,name:e.trailingIconName,class:h(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):p("",!0)])],16)}const te=U(Ee,[["render",De]]),Te=P({inheritAttrs:!1,props:{...ee,as:{type:String,default:"button"},type:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:void 0},exact:{type:Boolean,default:!1},exactQuery:{type:[Boolean,String],default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function t(i,d){const r=xe(i,d).reduce((n,f)=>(f.type==="added"&&n.push(f.key),n),[]);return X(i,d,{excludeKeys:n=>r.includes(n)})}function s(i,d,{isActive:r,isExactActive:n}){if(e.exactQuery==="partial"){if(!t(i.query,d.query))return e.inactiveClass}else if(e.exactQuery===!0&&!X(i.query,d.query))return e.inactiveClass;return e.exactHash&&i.hash!==d.hash?e.inactiveClass:e.exact&&n||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:s}}}),Ve=["href","aria-disabled","role","rel","target","tabindex","onClick"];function Ke(e,t,s,i,d,r){const n=he;return e.to?(a(),w(n,z({key:1},e.$props,{custom:""}),{default:q(({route:f,href:m,target:u,rel:v,navigate:x,isActive:b,isExactActive:l,isExternal:I})=>[y("a",z(e.$attrs,{href:e.disabled?void 0:m,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:v,target:u,class:e.active!==void 0?e.active?e.activeClass:e.inactiveClass:e.resolveLinkClass(f,e._.provides[pe]||e.$route,{isActive:b,isExactActive:l}),tabindex:e.disabled?-1:void 0,onClick:c=>!I&&!e.disabled&&x(c)}),[$(e.$slots,"default",F(H({isActive:e.active!==void 0?e.active:e.exact?l:b})))],16,Ve)]),_:3},16)):(a(),w(Q(e.as),z({key:0,type:e.type,disabled:e.disabled},e.$attrs,{class:e.active?e.activeClass:e.inactiveClass}),{default:q(()=>[$(e.$slots,"default",F(H({isActive:e.active})))]),_:3},16,["type","disabled","class"]))}const ae=U(Te,[["render",Ke]]),G=E(S.ui.strategy,S.ui.divider,je),Re=P({components:{UIcon:B,UAvatar:K},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>G.default.size,validator(e){return Object.keys(G.border.size.horizontal).includes(e)||Object.keys(G.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:()=>G.default.type,validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=T("divider",L(e,"ui"),G),i=g(()=>M(C(t.value.wrapper.base,t.value.wrapper[e.orientation]),e.class)),d=g(()=>C(t.value.container.base,t.value.container[e.orientation])),r=g(()=>C(t.value.border.base,t.value.border[e.orientation],t.value.border.size[e.orientation][e.size],t.value.border.type[e.type]));return{ui:t,attrs:s,wrapperClass:i,containerClass:d,borderClass:r}}});function Fe(e,t,s,i,d,r){const n=B,f=K;return a(),o("div",z({class:e.wrapperClass},e.attrs),[y("div",{class:h(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(a(),o(O,{key:0},[y("div",{class:h(e.containerClass)},[$(e.$slots,"default",{},()=>[e.label?(a(),o("span",{key:0,class:h(e.ui.label)},k(e.label),3)):e.icon?(a(),w(n,{key:1,name:e.icon,class:h(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(a(),w(f,z({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):p("",!0)])],2),y("div",{class:h(e.borderClass)},null,2)],64)):p("",!0)],16)}const re=U(Re,[["render",Fe]]),He=E(S.ui.strategy,S.ui.verticalNavigation,_e),Qe=P({components:{UIcon:B,UAvatar:K,UBadge:te,ULink:ae,UDivider:re},inheritAttrs:!1,props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:s}=T("verticalNavigation",L(e,"ui"),He,L(e,"class")),i=g(()=>Array.isArray(e.links[0])?e.links:[e.links]);return{ui:t,attrs:s,sections:i,getULinkProps:$e,twMerge:M,twJoin:C}}}),Je={key:0,class:"sr-only"};function We(e,t,s,i,d,r){const n=K,f=B,m=te,u=ae,v=re;return a(),o("nav",z({class:e.ui.wrapper},e.attrs),[(a(!0),o(O,null,D(e.sections,(x,b)=>(a(),o("ul",{key:`section${b}`},[(a(!0),o(O,null,D(x,(l,I)=>(a(),o("li",{key:`section${b}-${I}`},[V(u,z({ref_for:!0},e.getULinkProps(l),{class:[e.ui.base,e.ui.padding,e.ui.width,e.ui.ring,e.ui.rounded,e.ui.font,e.ui.size],"active-class":e.ui.active,"inactive-class":e.ui.inactive,onClick:l.click,onKeyup:t[0]||(t[0]=ye(c=>c.target.blur(),["enter"]))}),{default:q(({isActive:c})=>[$(e.$slots,"avatar",{link:l,isActive:c},()=>[l.avatar?(a(),w(n,z({key:0,ref_for:!0},{size:e.ui.avatar.size,...l.avatar},{class:[e.ui.avatar.base]}),null,16,["class"])):p("",!0)]),$(e.$slots,"icon",{link:l,isActive:c},()=>[l.icon?(a(),w(f,{key:0,name:l.icon,class:h(e.twMerge(e.twJoin(e.ui.icon.base,c?e.ui.icon.active:e.ui.icon.inactive),l.iconClass))},null,8,["name","class"])):p("",!0)]),$(e.$slots,"default",{link:l,isActive:c},()=>[l.label?(a(),o("span",{key:0,class:h(e.twMerge(e.ui.label,l.labelClass))},[c?(a(),o("span",Je," Current page: ")):p("",!0),Z(" "+k(l.label),1)],2)):p("",!0)]),$(e.$slots,"badge",{link:l,isActive:c},()=>[l.badge?(a(),w(m,z({key:0,ref_for:!0},{size:e.ui.badge.size,color:e.ui.badge.color,variant:e.ui.badge.variant,...typeof l.badge=="string"||typeof l.badge=="number"?{label:l.badge}:l.badge},{class:e.ui.badge.base}),null,16,["class"])):p("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"])]))),128)),b<e.sections.length-1?(a(),w(v,{key:0,ui:e.ui.divider},null,8,["ui"])):p("",!0)]))),128))],16)}const Xe=U(Qe,[["render",We]]),Ye={class:"px-1 mx-auto sm:px-6 lg:px-10 xl:max-w-7xl mt-6 sm:mt-10"},Ze={key:0,class:"flex flex-col lg:flex-row gap-8 lg:gap-20"},et={class:"flex-1"},tt=["src"],at={class:"text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6"},rt={class:"text-gray-500 text-sm sm:text-base"},st={class:"mb-6 sm:mb-10"},nt={class:"text-gray-700 leading-relaxed prose prose-sm sm:prose-xl whitespace-pre-line"},it={class:"text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4"},lt={class:"text-gray-700 leading-relaxed prose prose-sm sm:prose-xl whitespace-pre-line"},ot={key:1,class:"float-left mr-4 w-1/2 not-prose my-6"},dt=["src","alt"],ut={key:0,class:"text-sm text-gray-600 text-center mt-1 truncate w-32 sm:w-auto"},ct={key:0,class:"mt-4 p-4 bg-green-50 rounded-lg"},gt={class:"text-gray-700 leading-relaxed prose prose-sm sm:prose-xl"},ft={key:1,class:"mt-4 p-4 bg-gray-100 rounded-lg"},pt={class:"text-gray-700 leading-relaxed prose prose-sm sm:prose-xl"},yt={class:"w-full lg:w-80 flex-shrink-0"},bt={class:"sticky top-6 sm:top-20 space-y-4 sm:space-y-6"},mt={class:"fakeimg mb-3 sm:mb-4",style:{height:"80px","background-color":"#e2e8f0"}},zt={__name:"[slug]",setup(e){const t=be(),s=Y.find(n=>n.slug===t.params.slug),i=Y.find(n=>n.slug!==t.params.slug);if(!s)throw me({statusCode:404,statusMessage:"Article not found"});const d=n=>new Date(n).toLocaleDateString("fr",{year:"numeric",month:"long",day:"numeric"});ke({title:(s==null?void 0:s.title)??"",meta:[{hid:"description",name:"description",content:s==null?void 0:s.description}]});const r=(n,f)=>{var x;const m=[];let u=n,v=0;for(;u.includes("[IMAGE");){const b=`[IMAGE${v+1}]`,l=u.indexOf(b);l!==-1&&(m.push({type:"text",content:u.slice(0,l)}),m.push({type:"image",content:f[v].src,label:(x=f[v])==null?void 0:x.label}),u=u.slice(l+b.length),v++)}return u&&m.push({type:"text",content:u}),m};return(n,f)=>{var v,x,b,l,I;const m=qe,u=Xe;return a(),o("div",Ye,[j(s)?(a(),o("div",Ze,[y("div",et,[y("img",{class:"mx-auto w-full mb-10 rounded-md drop-shadow-sm h-64 object-cover",src:(v=j(s))==null?void 0:v.image,alt:"Image de l'article"},null,8,tt),y("h1",at,k((x=j(s))==null?void 0:x.title),1),y("p",rt," Publié le "+k(d((b=j(s))==null?void 0:b.date)),1),y("div",st,[y("p",nt,k((l=j(s))==null?void 0:l.intro),1)]),(a(!0),o(O,null,D((I=j(s))==null?void 0:I.sections,c=>(a(),w(m,{key:c.id,id:c.id,class:"mb-6 sm:mb-10"},{default:q(()=>[y("h2",it,k(c.title),1),y("div",lt,[(a(!0),o(O,null,D(r(c.text,c.images),(N,J)=>(a(),o(O,{key:J},[N.type==="text"?(a(),o(O,{key:0},[Z(k(N.content),1)],64)):N.type==="image"?(a(),o("div",ot,[y("img",{src:N.content,alt:`Image ${J+1} pour ${c.title}`,class:"w-full h-auto rounded-lg shadow-md"},null,8,dt),N.label?(a(),o("figcaption",ut,k(N.label),1)):p("",!0)])):p("",!0)],64))),128))]),c.solution?(a(),o("div",ct,[y("p",gt,k(c.solution),1)])):p("",!0),c.question?(a(),o("div",ft,[y("p",pt,k(c.question),1)])):p("",!0)]),_:2},1032,["id"]))),128))]),y("div",yt,[y("div",bt,[V(m,{ui:{body:{padding:"p-3 sm:p-4"}}},{default:q(()=>{var c;return[V(u,{links:(c=j(s))==null?void 0:c.summary,ui:{size:"text-base sm:text-lg"}},null,8,["links"])]}),_:1}),V(m,{class:"p-3 sm:p-4"},{default:q(()=>[f[0]||(f[0]=y("h3",{class:"text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4"}," Découvrez-aussi ",-1)),(a(!0),o(O,null,D(j(i),c=>(a(),o("div",mt,k(c),1))),256))]),_:1})])])])):p("",!0),f[1]||(f[1]=y("div",{class:"footer text-center mt-6 sm:mt-10 py-4 sm:py-6 border-t border-gray-200"},[y("h2",{class:"text-gray-700 text-sm sm:text-base"},"Footer")],-1))])}}};export{zt as default};
