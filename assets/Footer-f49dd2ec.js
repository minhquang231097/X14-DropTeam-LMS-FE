import{a as n,r as C,j as e,L as x}from"./index-7d110911.js";import{L as j}from"./logo-with-shadow-7c6876ad.js";import{G as l,b as k,c as N,D as i,d as M,A as g,a as L,e as w}from"./index.esm-72942c3c.js";import{h as y}from"./http-f102274f.js";import{l as S}from"./lodash-f8344649.js";import{u as Z}from"./useQuery-82c71c59.js";import{T as V}from"./Table-26b9572d.js";function ee(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"}}]})(t)}function te(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"}},{tag:"path",attr:{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"}}]})(t)}function H(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}},{tag:"path",attr:{d:"M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"}}]})(t)}function b(t){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z"}},{tag:"path",attr:{d:"M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z"}}]})(t)}function B(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(t)}const R=async t=>y.get("/course",{params:{search:t}}),A=()=>{const t=n(),[a,r]=C.useState(""),[o,d]=C.useState({}),m=[{title:"image",dataIndex:"image",width:"100px",render:s=>e.jsx("img",{src:s,alt:"",className:"w-20 h-12 rounded-md"})},{title:"title",dataIndex:"title",render:s=>e.jsx("p",{className:"text-[14px] font-bold",children:s})}];Z({queryKey:["search",a],queryFn:async()=>{const s=await R(String(a).toUpperCase());d(s.data)}}).data;const c=s=>{r(s)},v=S.debounce(s=>{c(s.target.value)},1e3);return e.jsxs("div",{className:"relative flex items-center ml-10 max-2xl:hidden",children:[e.jsx(B,{className:"absolute left-3 text-gray-400"}),e.jsx("input",{type:"text",placeholder:"Search Course ...",className:"dark:bg-[#0B1324] rounded-md outline-none h-8 pl-10 border-[1px] border-solid border-gray-400 dark:border-[#0B1324] dark:focus:border-sky-500 dark:focus:border-solid dark:focus:border-[1px] focus:outline-none focus:border-sky-500 focus:border-[1px] dark:text-gray-100",onChange:v}),a?e.jsx("div",{className:"bg-white absolute top-11 z-10 w-[160%] rounded-md border-[1px] border-solid border-gray-400 py-4 px-2",style:{boxShadow:"0 0 10px rgba(0,0,0,.18)",cursor:"pointer",border:"1px solid rgba(0,0,0,.14)"},children:e.jsx(V,{columns:m,dataSource:o&&o.data,pagination:!1,showHeader:!1,scroll:{y:240},size:"small",rowKey:({_id:s})=>s,onRow:({_id:s})=>({onClick:()=>{t(`/course-detail?id=${s}`),t(0)}})})}):""]})},F=()=>{const t=document.querySelector(".sun"),a=document.querySelector(".moon"),r=localStorage.getItem("theme"),o=window.matchMedia("(prefers-color-scheme: dark)").matches,d=()=>{a==null||a.classList.toggle("hidden"),t==null||t.classList.toggle("hidden")},m=()=>{if(r==="dark"||!r&&o){document.documentElement.classList.add("dark"),t==null||t.classList.remove("hidden"),a==null||a.classList.add("hidden");return}t==null||t.classList.add("hidden")},c=()=>{if(document.documentElement.classList.contains("dark")){document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light"),d();return}document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"),d()};return m(),e.jsxs("div",{className:"w-[32px] h-[32px] cursor-pointer bg-gray-200 hover:bg-gray-300 mr-10 p-0 rounded-full flex items-center justify-center  border-none focus:outline-none dark:focus:ring-gray-700",children:[e.jsx(k,{onClick:()=>c(),className:"moon text-2xl hover:text-gray-600 text-gray-400 dark:text-white max-md:text-gray-600"}),e.jsx(N,{onClick:()=>c(),className:"sun hidden text-2xl hover:text-gray-600 text-gray-400 dark:text-gray-600"})]})};function D(t){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48c-42.9 0-84.2 13-119.2 37.5-34.2 24-60.2 57.2-75.1 96.1L58 192h45.7l1.9-5c8.2-17.8 19.4-33.9 33.5-48 31.2-31.2 72.7-48.4 116.9-48.4s85.7 17.2 116.9 48.4c31.2 31.2 48.4 72.7 48.4 116.9 0 44.1-17.2 85.7-48.4 116.9-31.2 31.2-72.7 48.4-116.9 48.4-44.1 0-85.6-17.2-116.9-48.4-14-14-25.3-30.1-33.5-47.9l-1.9-5H58l3.6 10.4c14.9 38.9 40.9 72.1 75.1 96.1C171.8 451.1 213 464 256 464c114.7 0 208-93.3 208-208S370.7 48 256 48z"}},{tag:"path",attr:{d:"M48 277.4h189.7l-43.6 44.7L224 352l96-96-96-96-31 29.9 44.7 44.7H48v42.8z"}}]})(t)}function h(t){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M192 277.4h189.7l-43.6 44.7L368 352l96-96-96-96-31 29.9 44.7 44.7H192v42.8z"}},{tag:"path",attr:{d:"M255.7 421.3c-44.1 0-85.5-17.2-116.7-48.4-31.2-31.2-48.3-72.7-48.3-116.9 0-44.1 17.2-85.7 48.3-116.9 31.2-31.2 72.6-48.4 116.7-48.4 44 0 85.3 17.1 116.5 48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7 61 298.6 48 255.7 48 141.2 48 48 141.3 48 256s93.2 208 207.7 208c42.9 0 84-13 119-37.5 10-7 19.2-14.7 27.7-23.2l-30.2-30.2c-31.1 31.1-72.5 48.2-116.5 48.2zM448.004 256.847l-.849-.848.849-.849.848.849z"}}]})(t)}const E=[{key:"1",label:e.jsxs(x,{to:"/login",className:"flex items-center text-gray-600 font-bold",children:[e.jsx(D,{className:"text-2xl mr-2 p-2 pl-0"}),"Login"]})},{key:"2",label:e.jsxs(x,{to:"/register",className:"flex items-center text-gray-600 font-bold",children:[e.jsx(H,{className:"text-2xl mr-2 p-2 pl-0"}),"Register"]})}],z=()=>e.jsx(i,{menu:{items:E},placement:"bottomRight",arrow:!0,children:e.jsx("a",{target:"_blank",className:"flex items-center no-underline text-gray-600 dark:text-gray-100",children:e.jsx(M,{className:"text-3xl cursor-pointer"})})});function P(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001L1 11.0001L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001L20 11.0001V20.0001C20 20.5524 19.5523 21.0001 19 21.0001ZM6 19.0001H18V9.15757L12 3.70302L6 9.15757V19.0001Z"}}]})(t)}function I(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z"}}]})(t)}function u(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598L12 1ZM12 3.04879L5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879ZM12 7C13.1046 7 14 7.89543 14 9C14 9.73984 13.5983 10.3858 13.0011 10.7318L13 15H11L10.9999 10.7324C10.4022 10.3866 10 9.74025 10 9C10 7.89543 10.8954 7 12 7Z"}}]})(t)}function T(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM21 17H22V22H14V17H15V16C15 14.3431 16.3431 13 18 13C19.6569 13 21 14.3431 21 16V17ZM19 17V16C19 15.4477 18.5523 15 18 15C17.4477 15 17 15.4477 17 16V17H19Z"}}]})(t)}function p(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 14V16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM14.5946 18.8115C14.5327 18.5511 14.5 18.2794 14.5 18C14.5 17.7207 14.5327 17.449 14.5945 17.1886L13.6029 16.6161L14.6029 14.884L15.5952 15.4569C15.9883 15.0851 16.4676 14.8034 17 14.6449V13.5H19V14.6449C19.5324 14.8034 20.0116 15.0851 20.4047 15.4569L21.3971 14.8839L22.3972 16.616L21.4055 17.1885C21.4673 17.449 21.5 17.7207 21.5 18C21.5 18.2793 21.4673 18.551 21.4055 18.8114L22.3972 19.3839L21.3972 21.116L20.4048 20.543C20.0117 20.9149 19.5325 21.1966 19.0001 21.355V22.5H17.0001V21.3551C16.4677 21.1967 15.9884 20.915 15.5953 20.5431L14.603 21.1161L13.6029 19.384L14.5946 18.8115ZM18 19.5C18.8284 19.5 19.5 18.8284 19.5 18C19.5 17.1716 18.8284 16.5 18 16.5C17.1716 16.5 16.5 17.1716 16.5 18C16.5 18.8284 17.1716 19.5 18 19.5Z"}}]})(t)}const f=async t=>{const{userId:a}=JSON.parse(localStorage.getItem("login"));await y.post("/auth/sign-out",{id:a}).then(r=>{r.data.statusCode===200&&(localStorage.removeItem("user"),t("/login",{replace:!0}))}).catch(r=>{console.log(r)})},_=t=>{const a=n(),r=[{key:"1",label:e.jsx("div",{className:"flex items-center justify-center text-lg text-[#F56A00] font-bold",children:t.username}),disabled:!0},{type:"divider"},{key:"2",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>a("/edit-profile"),children:[e.jsx(p,{className:"text-2xl mr-2 p-2 pl-0"}),"Edit Profile"]})},{key:"3",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>a("/change-password"),children:[e.jsx(u,{className:"text-2xl mr-2 p-2 pl-0"}),"Change Password"]})},{key:"4",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>f(a),children:[e.jsx(h,{className:"text-2xl mr-2 p-2 pl-0"}),"Logout"]})}];return e.jsx(i,{menu:{items:r},placement:"bottomRight",arrow:!0,children:e.jsx("a",{target:"_blank",children:e.jsx(g,{style:{color:"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",borderWidth:"1px",borderColor:"#ccc",backgroundColor:"#F1F5F9"},src:t.avatar?t.avatar:`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${Math.floor(Math.random()*10)}`})})})},U=t=>{const a=n(),r=JSON.parse(localStorage.getItem("login")),o=[{key:"1",label:e.jsx("div",{className:"flex items-center justify-center text-lg text-[#F56A00] font-bold",children:t.username}),disabled:!0},{type:"divider"},{key:"2",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>{r.role==="ADMIN"&&a("/admin")},children:[e.jsx(T,{className:"text-2xl mr-2 p-2 pl-0"}),"Admin Dashboard"]})},{key:"3",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>{r.role==="ADMIN"&&a("/teacher/classes-list?page=1&limit=10")},children:[e.jsx(b,{className:"text-2xl mr-2 p-2 pl-0"}),"Mentor Page"]})},{type:"divider"},{key:"4",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>a(`/edit-profile?id=${r.id}`),children:[e.jsx(p,{className:"text-2xl mr-2 p-2 pl-0"}),"Edit Profile"]})},{key:"5",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>a("/change-password"),children:[e.jsx(u,{className:"text-2xl mr-2 p-2 pl-0"}),"Change Password"]})},{type:"divider"},{key:"6",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>f(a),children:[e.jsx(h,{className:"text-2xl mr-2 p-2 pl-0"}),"Logout"]})}];return e.jsx(i,{menu:{items:o},placement:"bottomRight",arrow:!0,children:e.jsx("a",{target:"_blank",children:e.jsx(g,{src:t.avatar?t.avatar:`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${Math.floor(Math.random()*10)}`,style:{color:"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",borderWidth:"1px",borderColor:"#ccc",backgroundColor:"#F1F5F9"}})})})},O=t=>{const a=n(),r=JSON.parse(localStorage.getItem("login")),o=[{key:"1",label:e.jsx("div",{className:"flex text-lg text-[#F56A00] items-center justify-center font-bold",children:t.username}),disabled:!0},{type:"divider"},{key:"2",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>{r.role,a("/teacher/classes-list")},children:[e.jsx(b,{className:"text-2xl mr-2 p-2 pl-0"}),"Mentor Page"]})},{type:"divider"},{key:"3",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>a(`/edit-profile?id=${r.id}`),children:[e.jsx(p,{className:"text-2xl mr-2 p-2 pl-0"}),"Edit Profile"]})},{key:"4",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>a("/change-password"),children:[e.jsx(u,{className:"text-2xl mr-2 p-2 pl-0"}),"Change Password"]})},{type:"divider"},{key:"5",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>f(a),children:[e.jsx(h,{className:"text-2xl mr-2 p-2 pl-0"}),"Logout"]})}];return e.jsx(i,{menu:{items:o},placement:"bottomRight",arrow:!0,children:e.jsx("a",{target:"_blank",children:e.jsx(g,{style:{color:"#fff",fontSize:"20px",fontWeight:"bold",cursor:"pointer",borderWidth:"1px",borderColor:"#ccc",backgroundColor:"#F1F5F9"},src:t.avatar?t.avatar:`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${Math.floor(Math.random()*10)}`})})})};function W(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none"},child:[{tag:"path",attr:{d:"M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z",fill:"currentColor"}},{tag:"path",attr:{d:"M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z",fill:"currentColor"}},{tag:"path",attr:{d:"M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z",fill:"currentColor"}},{tag:"path",attr:{d:"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",fill:"currentColor"}},{tag:"path",attr:{d:"M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z",fill:"currentColor"}},{tag:"path",attr:{d:"M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z",fill:"currentColor"}},{tag:"path",attr:{d:"M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z",fill:"currentColor"}},{tag:"path",attr:{d:"M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z",fill:"currentColor"}}]})(t)}const $=()=>{const t=n(),a=[{key:"1",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>t("/"),children:[e.jsx(P,{className:"text-2xl mr-2 p-2 pl-0"}),"Home Page"]})},{key:"2",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>t("/courses-list?page=1&limit=10"),children:[e.jsx(L,{className:"text-2xl mr-2 p-2 pl-0"}),"Courses Page"]})},{key:"3",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>t("#"),children:[e.jsx(I,{className:"text-2xl mr-2 p-2 pl-0"}),"About Page"]})},{key:"4",label:e.jsxs("div",{className:"flex items-center text-gray-600 font-bold",onClick:()=>t("#"),children:[e.jsx(w,{className:"text-2xl mr-2 p-2 pl-0"}),"Contact Page"]})}];return e.jsx(i,{menu:{items:a},placement:"bottomRight",arrow:!0,children:e.jsx("div",{className:"hidden max-md:flex mr-10 w-[32px] h-[32px] cursor-pointer bg-gray-200 hover:bg-gray-300 p-0 rounded-full items-center justify-center  border-none focus:outline-none dark:focus:ring-gray-700",children:e.jsx(W,{className:"text-2xl text-gray-600"})})})},ae=()=>{const t=JSON.parse(localStorage.getItem("user"));return e.jsx("header",{className:"h-[56px] bg-white dark:bg-[#1E293B] flex items-center justify-between border-0 border-b-[1px] border-gray-300 border-solid dark:border-none",children:e.jsxs("nav",{className:"max-w-[1280px] mx-auto w-full flex items-center justify-between px-8",children:[e.jsx("div",{className:"flex flex-1",children:e.jsxs("a",{href:"/",className:"-m-1.5 p-1.5 flex items-center no-underline",children:[e.jsx("img",{className:"h-12 w-auto",src:j,alt:""}),e.jsx("span",{className:"text-2xl font-bold text-gray-600 dark:text-gray-100 max-lg:text-[20px] max-sm:hidden",children:"Vite Education"})]})}),e.jsxs("div",{className:"flex flex-1 justify-between max-md:hidden",children:[e.jsx(x,{to:"/",className:"text-lg max-lg:text-[14px] font-bold no-underline text-gray-600 dark:text-gray-100",children:"Home"}),e.jsx("a",{target:"_blank",className:"text-lg max-lg:text-[14px] font-bold no-underline text-gray-600 dark:text-gray-100",children:"About"}),e.jsx("a",{target:"_blank",className:"text-lg max-lg:text-[14px] font-bold no-underline text-gray-600 dark:text-gray-100",children:"Pages"}),e.jsx(x,{to:"/courses-list?page=1&limit=6",className:"text-lg max-lg:text-[14px] font-bold no-underline text-gray-600 dark:text-gray-100",children:"Courses"})]}),e.jsx(A,{}),e.jsxs("div",{className:"flex items-center flex-1 justify-end",children:[e.jsx(F,{}),e.jsx($,{}),e.jsx("a",{target:"_blank",className:"flex items-center no-underline text-gray-600 dark:text-gray-100",children:t?t&&t.role==="ADMIN"?e.jsx(U,{username:t.username,avatar:t.avatar}):t&&t.role==="MENTOR"?e.jsx(O,{username:t.username,avatar:t.avatar}):e.jsx(_,{username:t.username,avatar:t.avatar}):e.jsx(z,{})})]})]})})},re=()=>e.jsxs("div",{className:"max-w-[1280px] mx-auto mt-0 max-xl:px-8 flex items-center justify-between border-0 border-t-[1px] border-gray-300 dark:border-[#334155] border-solid py-4",children:[e.jsx("div",{className:"text-sm dark:text-gray-300 max-sm:text-xs",children:"© 2023 Drop Team. All Rights Reserved."}),e.jsxs("div",{children:[e.jsx("a",{className:"no-underline text-sm mr-8 text-gray-600 dark:text-gray-400 max-sm:text-xs",target:"_blank",children:"Privacy"}),e.jsx("a",{className:"no-underline text-sm mr-8 text-gray-600 dark:text-gray-400 max-sm:text-xs",target:"_blank",children:"Terms"}),e.jsx("a",{className:"no-underline text-sm mr-8 text-gray-600 dark:text-gray-400 max-sm:text-xs",target:"_blank",children:"Feedback"}),e.jsx("a",{className:"no-underline text-sm text-gray-600 dark:text-gray-400 max-sm:text-xs",target:"_blank",children:"Support"})]})]});export{ee as B,re as F,ae as H,te as a,R as g};
