import{bG as F,bH as H,b3 as _,r as n,bI as D,C as L,b5 as h}from"./index-7d110911.js";let o=null,l=t=>t(),f=[],u={};function Q(){const{prefixCls:t,getContainer:e,rtl:i,maxCount:s,top:a,bottom:b}=u,C=t??h().getPrefixCls("notification"),g=(e==null?void 0:e())||document.body;return{prefixCls:C,container:g,rtl:i,maxCount:s,top:a,bottom:b}}const U=n.forwardRef((t,e)=>{const[i,s]=n.useState(),[a,b]=n.useState(),[C,g]=n.useState(),[v,G]=n.useState(),[O,j]=n.useState(),[E,S]=n.useState(),[d,I]=D({prefixCls:i,getContainer:()=>a,maxCount:C,rtl:v,top:O,bottom:E}),x=h(),N=x.getRootPrefixCls(),T=x.getIconPrefixCls(),w=x.getTheme(),m=()=>{const{prefixCls:r,container:c,maxCount:M,rtl:R,top:k,bottom:B}=Q();s(r),b(c),g(M),G(R),j(k),S(B)};return n.useEffect(m,[]),n.useImperativeHandle(e,()=>{const r=Object.assign({},d);return Object.keys(r).forEach(c=>{r[c]=function(){return m(),d[c].apply(d,arguments)}}),{instance:r,sync:m}}),n.createElement(L,{prefixCls:N,iconPrefixCls:T,theme:w},I)});function p(){if(!o){const t=document.createDocumentFragment(),e={fragment:t};o=e,l(()=>{_(n.createElement(U,{ref:i=>{const{instance:s,sync:a}=i||{};Promise.resolve().then(()=>{!e.instance&&s&&(e.instance=s,e.sync=a,p())})}}),t)});return}o.instance&&(f.forEach(t=>{switch(t.type){case"open":{l(()=>{o.instance.open(Object.assign(Object.assign({},u),t.config))});break}case"destroy":l(()=>{o==null||o.instance.destroy(t.key)});break}}),f=[])}function W(t){u=Object.assign(Object.assign({},u),t),l(()=>{var e;(e=o==null?void 0:o.sync)===null||e===void 0||e.call(o)})}function P(t){f.push({type:"open",config:t}),p()}function Y(t){f.push({type:"destroy",key:t}),p()}const $=["success","info","warning","error"],q={open:P,destroy:Y,config:W,useNotification:F,_InternalPanelDoNotUseOrYouWillBeFired:H},y=q;$.forEach(t=>{y[t]=e=>P(Object.assign(Object.assign({},e),{type:t}))});const A=y;export{A as n};
