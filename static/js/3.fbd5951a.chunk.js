(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{40:function(e,t,a){"use strict";t.a=a.p+"static/media/popcorn1.8418ef00.png"},41:function(e,t,a){"use strict";t.a=a.p+"static/media/nexter1.c7ee8ef3.png"},42:function(e,t,a){"use strict";t.a=a.p+"static/media/coachfinder1.3850966b.png"},43:function(e,t,a){"use strict";t.a=a.p+"static/media/travelerList1.4b81a7a7.png"},44:function(e,t,a){"use strict";t.a=a.p+"static/media/visitrethymno1.d90c6d04.png"},45:function(e,t,a){"use strict";t.a=a.p+"static/media/forkify3.7afaac95.png"},46:function(e,t,a){"use strict";a.d(t,"a",(function(){return x})),a.d(t,"b",(function(){return g}));var r=a(8),i=a(1),s=a(40),c=a(41),n=a(44),o=a(42),l=a(43),d=a(45),m=[{id:1,title:"Nexter [Advanced-Sass]",category:"Udemy project",img:c.a},{id:2,title:"VisitRethymno [Vue.js]",category:"Self project",img:n.a},{id:3,title:"Coach-finder [Vue]",category:"Udemy project",img:o.a},{id:4,title:"Traveler-List [React.js]",category:"Udemy project",img:l.a},{id:5,title:"VisitRethymno [Html/Css/Javascript]",category:"Sae edu Athens",img:n.a},{id:6,title:"UsePopcorn [React.js]",category:"Udemy project",img:s.a},{id:7,title:"Forkify",category:"Udemy project",img:d.a}],j=a(2),x=Object(i.createContext)(),g=function(e){var t=Object(i.useState)(m),a=Object(r.a)(t,2),s=a[0],c=a[1],n=Object(i.useState)(""),o=Object(r.a)(n,2),l=o[0],d=o[1],g=Object(i.useState)(""),u=Object(r.a)(g,2),y=u[0],p=u[1],b=s.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())||""===l?e:""})),h=s.filter((function(e){return(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(y)}));return Object(j.jsx)(x.Provider,{value:{projects:s,setProjects:c,searchProject:l,setSearchProject:d,searchProjectsByTitle:b,selectProject:y,setSelectProject:p,selectProjectsByCategory:h},children:e.children})}},47:function(e,t,a){"use strict";var r=a(1),i=a(6),s=a(38),c=a(13),n=a(2),o=function(e){var t=e.title,a=e.category,r=e.image,i=e.id;return Object(n.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(n.jsx)(c.b,{to:"/projects/single-project/".concat(i),"aria-label":"Single Project",children:Object(n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(n.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})},l=a(46),d=["Self project","Udemy project","Sae edu Athens"],m=function(e){var t=e.setSelectProject;return Object(n.jsxs)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((function(e){return Object(n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))]})};t.a=function(e){var t=e.limit,a=Object(r.useContext)(l.a),s=a.projects,c=a.searchProject,d=a.setSearchProject,j=a.searchProjectsByTitle,x=a.selectProject,g=a.setSelectProject,u=a.selectProjectsByCategory,y=x?u:c?j:s,p=t?y.slice(0,t):y;return Object(n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(n.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3",children:"Search projects by title or filter by category"}),Object(n.jsxs)("div",{className:"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3",children:[Object(n.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(n.jsx)("span",{className:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer",children:Object(n.jsx)(i.m,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(n.jsx)("input",{onChange:function(e){d(e.target.value)},className:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(n.jsx)(m,{setSelectProject:g})]})]}),Object(n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:p.map((function(e){return Object(n.jsx)(o,{title:e.title,category:e.category,image:e.img,id:e.id},e.id)}))})]})}},55:function(e,t,a){"use strict";a.r(t);var r=a(13),i=a(6),s=a.p+"static/media/developer-dark.755de97c.jpeg",c=a(38),n=a(2),o=function(){return Object(n.jsxs)(c.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-4",children:[Object(n.jsxs)("div",{className:"w-full text-left",children:[Object(n.jsx)(c.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hey, I am NIKOS NIKIFOROS"}),Object(n.jsx)(c.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-3xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"I\u2019m a Front-End Developer and coding enthusiast, ready to build and learn as I go."}),Object(n.jsx)(c.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",npx:!0,children:Object(n.jsxs)("a",{download:"Nikiforos-Resume.pdf",href:"/files/Nikiforos-Resume.pdf",className:" flex font-general-medium justify-center items-center w-36 sm:w-48  mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(n.jsx)(i.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(n.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),Object(n.jsx)(c.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full text-right float-right mt-12  sm:mt-0",children:Object(n.jsx)("img",{src:s,alt:"Developer",className:"rounded-md transition-all duration-500 ",style:{clipPath:"polygon(0 0, 85% 0, 100% 100%, 15% 100%)"},onMouseEnter:function(e){e.currentTarget.style.clipPath="polygon(0 0, 100% 0, 100% 100%, 0 100%)"},onMouseLeave:function(e){e.currentTarget.style.clipPath="polygon(0 0, 85% 0, 100% 100%, 15% 100%)"}})})]})},l=a(47),d=a(46),m=a(21);t.default=function(){return Object(n.jsxs)("div",{className:"container mx-auto",children:[Object(n.jsx)(o,{}),Object(n.jsx)(d.b,{children:Object(n.jsx)(l.a,{limit:6})}),Object(n.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(n.jsx)(r.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(n.jsx)(m.a,{title:"More Projects"})})})]})}}}]);
//# sourceMappingURL=3.fbd5951a.chunk.js.map