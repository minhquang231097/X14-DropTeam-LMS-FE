import{h as r}from"./http-f102274f.js";const o=(s,t,e)=>r.get("/user",{params:{role:s,page:t,limit:e}}),c=async(s,t,e)=>r.get("/user",{params:{search:s||t||e}});export{o as g,c as s};
