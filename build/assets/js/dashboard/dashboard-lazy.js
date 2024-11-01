"use strict";(globalThis.webpackChunkstec=globalThis.webpackChunkstec||[]).push([[4896],{43303:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var s=a(91927),r=a(13328),n=a(8403),l=a(26878),c=a.n(l),i=a(78137);const o=c().lazy((()=>Promise.all([a.e(9603),a.e(540)]).then(a.bind(a,90587)))),u=c().lazy((()=>Promise.all([a.e(2776),a.e(4555)]).then(a.bind(a,92138)))),d=c().lazy((()=>Promise.all([a.e(7818),a.e(3627),a.e(487),a.e(4887),a.e(9006)]).then(a.bind(a,26653)))),p=c().lazy((()=>Promise.all([a.e(2776),a.e(8298)]).then(a.bind(a,76993)))),m=c().lazy((()=>Promise.all([a.e(7818),a.e(3627),a.e(487),a.e(4887),a.e(5199)]).then(a.bind(a,13734)))),h=c().lazy((()=>Promise.all([a.e(2776),a.e(5288)]).then(a.bind(a,37511)))),b=c().lazy((()=>Promise.all([a.e(7818),a.e(3627),a.e(487),a.e(4887),a.e(8168),a.e(7585)]).then(a.bind(a,68168)))),g=c().lazy((()=>Promise.all([a.e(2776),a.e(6503)]).then(a.bind(a,7966)))),y=c().lazy((()=>Promise.all([a.e(7818),a.e(3627),a.e(487),a.e(4887),a.e(6818)]).then(a.bind(a,80745)))),f=c().lazy((()=>Promise.all([a.e(2776),a.e(1348)]).then(a.bind(a,38915)))),v=c().lazy((()=>Promise.all([a.e(7818),a.e(487),a.e(1067),a.e(4940),a.e(7861)]).then(a.bind(a,54940)))),S=c().lazy((()=>Promise.all([a.e(2776),a.e(3824),a.e(2667)]).then(a.bind(a,21322)))),k=c().lazy((()=>Promise.all([a.e(7818),a.e(3627),a.e(1781),a.e(487),a.e(4887),a.e(1067),a.e(9006),a.e(4940),a.e(8168),a.e(9998)]).then(a.bind(a,56675)))),E=c().lazy((()=>Promise.all([a.e(2776),a.e(3824),a.e(7527)]).then(a.bind(a,7930)))),w=c().lazy((()=>Promise.all([a.e(7818),a.e(487),a.e(355)]).then(a.bind(a,96899))));const z=function(){const e=(0,l.useRef)(),{activeMenuPage:t,setActiveMenu:a}=(0,s.useDashboardMenu)();let z="";switch(t){case"settings":z=w;break;case"calendars-list":z=u;break;case"calendars-upsert":z=d;break;case"categories-list":z=p;break;case"categories-upsert":z=m;break;case"organizers-list":z=h;break;case"organizers-upsert":z=b;break;case"guests-list":z=g;break;case"guests-upsert":z=y;break;case"locations-list":z=f;break;case"locations-upsert":z=v;break;case"events-list":z=S;break;case"events-upsert":z=k;break;case"events-archive":z=E;break;default:z=o}return(0,r.useResponsiveClass)(e),(0,l.useEffect)((()=>{const e=document.getElementById("toplevel_page_stec_lite");if(!e)return;const s=e.querySelector(".wp-submenu"),r=s.querySelectorAll("li"),n=e=>{if("stec-upgrade-menu-item"!==e.target.id){e.preventDefault();try{const t=e.target.href.split("#")[1];a({page:t,params:{}})}catch(e){a({page:"home",params:{}})}}};s.addEventListener("click",n),r.forEach((e=>{e.classList.remove("current")}));let l="";switch(t){case"settings":l="settings";break;case"calendars-list":case"calendars-upsert":l="calendars-list";break;case"categories-list":case"categories-upsert":l="categories-list";break;case"organizers-list":case"organizers-upsert":l="organizers-list";break;case"guests-list":case"guests-upsert":l="guests-list";break;case"locations-list":case"locations-upsert":l="locations-list";break;case"events-list":case"events-upsert":case"events-archive":l="events-list";break;default:l=""}if(l){const e=[...r].find((e=>{const t=e.querySelector("a");return!!t&&-1!==t.href.indexOf("#"+l)}));e&&e.classList.add("current")}else s.querySelector(".wp-first-item").classList.add("current");return()=>{s.removeEventListener("click",n)}}),[t,a]),(0,l.useEffect)((()=>{if(!document.getElementById("stec-admin-dashboard"))return;const e=e=>{e.state&&e.state.page&&a({page:e.state.page,params:JSON.parse(e.state.params),pushState:!1})};return window.addEventListener("popstate",e),()=>{window.removeEventListener("popstate",e)}}),[a]),c().createElement(n.StecDiv,{className:"stec-dashboard",ref:e},c().createElement(l.Suspense,{fallback:c().createElement(i.default,null)},c().createElement(z,null)))}},78137:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var s=a(8403),r=a(73772);const __=r.__;const n=function(){return React.createElement(s.StecDiv,{className:"stec-dashboard-preloader"},React.createElement(s.StecDiv,{className:"stec-dashboard-preloader-sprite"}),React.createElement(s.StecSpan,{className:"stec-dashboard-preloader-txt"},__("Just a moment, we're getting things ready","stachethemes_event_calendar_lite")))}},54949:(e,t,a)=>{a.r(t),a.d(t,{dashboardMenu:()=>s});const s=(0,a(47444).atom)({key:"dashboardMenu",default:{page:"",params:{}}})},91927:(e,t,a)=>{a.r(t),a.d(t,{useDashboardCounters:()=>c,useDashboardMenu:()=>i,useSearchEvents:()=>o,useSettings:()=>u,useUserData:()=>d});var s=a(98196),r=a(26878),n=a(47444),l=a(54949);const c=()=>{const{data:e,error:t,isLoading:a,ready:r}=(0,s.useApiGet)({route:"DASHBOARD/COUNTERS",args:"",cacheKey:null});return{data:e,error:t,isLoading:a,ready:r}},i=()=>{const[e,t]=(0,n.useRecoilState)(l.dashboardMenu);let a=e.page,s=e.params;if(""===e.page){const e=new URL(window.location.href).hash.replace("#","");e&&(a=e,s={})}return{activeMenuPage:a,activeMenuParams:s,setActiveMenu:({page:e="",params:a={},pushState:s=!0})=>{if(document.getElementById("stec-admin-dashboard")&&s){const t=new URL(window.location.href);t.hash=e,window.history.pushState({page:e,params:JSON.stringify(a)},t,t)}t({page:e,params:a})}}},o=({input:e="",args:t=""})=>{const[a,n]=(0,r.useState)({items:[],error:!1,status:"idle"});let l=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const a=new AbortController,r=a.signal;return e.length>2?l.current=setTimeout((()=>{(async()=>{try{n({items:[],error:!1,status:"loading"});const r=await(0,s.newApiGet)({route:"EVENTS",args:`?search=${e}&${t}`,abortController:a});n({items:r,error:!1,status:"ready"})}catch(e){!1===r.aborted&&n({items:[],error:!0,status:"ready"})}})()}),500):n({items:[],error:!1,status:"idle"}),()=>{a.abort(),clearTimeout(l.current)}}),[e,t]),a},u=()=>{const{data:e,ready:t,error:a}=(0,s.useApiGet)({route:"SETTINGS",args:""});return{settings:e,ready:t,error:a}},d=e=>{const{data:t,ready:a,error:r}=(0,s.useApiGet)({route:"STEC-USERS",args:`?s=${e.s||""}`,errorMessage:"auto",cacheKey:`STEC-USERS-s-${e.s}`});return{data:t,ready:a,error:r}}},58168:(e,t,a)=>{function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)({}).hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},s.apply(null,arguments)}a.r(t),a.d(t,{default:()=>s})}}]);