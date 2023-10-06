import{j as e,a as T,b as k,r as n,L as p,B as h}from"./index-7d110911.js";import{a as N,c as E}from"./customParseFormat-8df6ed46.js";import{A as M,T as A}from"./index-fb2f4293.js";import{h as D}from"./http-f102274f.js";import{s as O,g as Y}from"./searchWorkplaceForAdmin-178e7373.js";import{g as L}from"./coursesList.api-347599cc.js";import{g as W}from"./course.api-4e1b7d81.js";import{w as R}from"./day-4b2aa78a.js";import{F as t}from"./index-aff46a20.js";import{u as U}from"./useMutation-3aed9725.js";import{u as i}from"./useQuery-82c71c59.js";import{B as K}from"./Breadcrumb-cc32fac8.js";import{C as V}from"./index-44b39aec.js";import{R as z,C as x}from"./row-829469e7.js";import{S as l}from"./index-15436649.js";import{D as y}from"./index-a6934c85.js";import{I as j}from"./index-b5359285.js";import{S as B}from"./index.esm-72942c3c.js";import{n as g}from"./index-3f48a51f.js";import"./logo-with-shadow-7c6876ad.js";import"./TextArea-c3291115.js";import"./utils-fa248f50.js";import"./DownOutlined-64c7721a.js";import"./index-8418211f.js";import"./PlusOutlined-47ab0ced.js";import"./SearchOutlined-ad45125c.js";const G=async a=>D.post("/class",a);N.extend(E);const H=()=>{const[a]=t.useForm(),u=T(),[d]=k(),m=d.get("page")??1,c=d.get("limit")??50,[o,f]=n.useState(void 0),[C,b]=n.useState(void 0),[S,v]=n.useState([]),q=s=>{v(s)},{mutate:w,isLoading:F}=U(G,{onSuccess:()=>{g.success({message:"Update successful",description:"The class has been updated successfully"}),a.resetFields(),u("/admin/classes/all")},onError:s=>{g.error({message:"Update failed",description:s.message})}}),{data:_}=i({queryKey:["courses",m,c],queryFn:async()=>(await L()).data.data}),{data:r}=i({queryKey:["courseById",o],queryFn:async()=>(await W(o)).data.data,enabled:!!o}),{data:I}=i({queryKey:["workplaces"],queryFn:async()=>(await O("ON")).data.data}),{data:P}=i({queryKey:["MENTOR",m,c],queryFn:async()=>(await Y("MENTOR",m,c)).data.data});return n.useEffect(()=>{a==null||a.setFieldValue("total_session",r==null?void 0:r.session_per_course)},[r,a]),e.jsxs(e.Fragment,{children:[e.jsx(K,{items:[{title:e.jsx(p,{to:"/admin",children:"Home"})},{title:e.jsx(p,{to:"/admin/classes/all",children:"Classes"})},{title:"Create"}],style:{padding:"4px",fontSize:"16px"}}),e.jsx(V,{children:e.jsxs(t,{form:a,onFinish:w,layout:"vertical",initialValues:{total_session:r==null?void 0:r.session_per_course},children:[e.jsx(A.Title,{level:3,className:"mt-0 mx-1",children:"Create A New Class"}),e.jsxs(z,{gutter:[24,16],children:[e.jsxs(x,{xs:24,lg:12,children:[e.jsx(t.Item,{label:"Course",name:"course_id",rules:[{required:!0,message:"Please enter the course name"}],children:e.jsx(l,{options:(_||[]).map(s=>({value:s._id,label:s.title})),value:o,onChange:s=>f(s),placeholder:"Select",showSearch:!0})}),e.jsx(t.Item,{label:"Mentor",name:"mentor_id",rules:[{required:!0,message:"Please enter the mentor"}],children:e.jsx(l,{options:(P||[]).map(s=>({value:s._id,label:s.fullname})),placeholder:"Select",showSearch:!0})}),e.jsx(t.Item,{label:"Start Date",name:"start_at",rules:[{required:!0,message:"Please enter the start date"}],children:e.jsx(y,{style:{width:"100%"},format:"DD/MM/YYYY"})}),e.jsx(t.Item,{label:"Total Sessions",name:"total_session",rules:[{required:!0,message:"Please enter the total sessions"}],children:e.jsx(j,{style:{width:"100%"},placeholder:"Type..."})}),e.jsx(t.Item,{label:"Class Status",name:"status",rules:[{required:!0,message:"Please select the status"}],children:e.jsx(l,{options:[{label:"INACTIVE",value:"OFF"},{label:"ACTIVE",value:"ON"},{label:"UPCOMING",value:"UPCOMING"}],placeholder:"Select"})})]}),e.jsxs(x,{xs:24,lg:12,children:[e.jsx(t.Item,{label:"Facility",name:"workplace_id",rules:[{required:!0,message:"Please enter the facility"}],children:e.jsx(l,{options:(I||[]).map(s=>({value:s._id,label:s.name})),value:C,onChange:s=>b(s),showSearch:!0})}),e.jsx(t.Item,{label:"Schedule",name:"schedule",rules:[{required:!0,message:"Please enter the schedule"}],children:e.jsx(l,{mode:"multiple",placeholder:"Select weekdays",value:S,onChange:q,maxTagCount:"responsive",children:R.map(s=>e.jsx(l.Option,{value:s.value,children:s.label},s.value))})}),e.jsx(t.Item,{label:"Expected End Date",name:"end_at",rules:[{required:!0,message:"Please enter the expected end date"}],children:e.jsx(y,{style:{width:"100%"},format:"DD/MM/YYYY"})}),e.jsx(t.Item,{label:"Number of Students",name:"class_size",rules:[{required:!0,message:"Please enter the number of students"}],children:e.jsx(j,{style:{width:"100%"},placeholder:"Type..."})})]})]}),e.jsx(t.Item,{children:e.jsxs(B,{size:"middle",style:{display:"flex",justifyContent:"flex-end"},children:[e.jsx(h,{type:"default",onClick:()=>u("/admin/classes/all"),children:"Cancel"}),e.jsx(h,{type:"primary",htmlType:"submit",loading:F,children:"Create"})]})})]})})]})},be=()=>e.jsx(M,{content:e.jsx(H,{})});export{be as default};
