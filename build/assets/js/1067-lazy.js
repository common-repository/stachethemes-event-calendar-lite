"use strict";(globalThis.webpackChunkstec=globalThis.webpackChunkstec||[]).push([[1067],{21953:(e,t,a)=>{a.r(t),a.d(t,{agendaSliderKey:()=>p,calendarDate:()=>i,calendarEvents:()=>d,calendarLayout:()=>r,calendarMoment:()=>l,calendarScreenType:()=>m,calendarTopFilters:()=>c,dashboardChangesNotice:()=>u,eventStructure:()=>_,settingsAtts:()=>o,settingsAttsList:()=>s});var n=a(47444);const s=(0,n.atom)({key:"settingsAttsList",default:{filter__organizer:"",filter__location:"",filter__guest:"",filter__category:"",filter__calendar:"",filter__min_date:"",filter__max_date:"",filter__minmax_intersect:"",filter__start_date:"",filter__featured:"",filter__events:"",filter__read_permission:"",filter__author:"",calendar__dow:0,calendar__date_format:"stec_dmy",calendar__time_format:"stec_24",calendar__show_tz_offset:!1,calendar__top_enabled:!0,calendar__top_today_button:!0,calendar__top_nav_buttons:!0,calendar__top_datepicker_menu:!0,calendar__top_search_menu:!0,calendar__top_filters_menu:1,calendar__top_layouts_menu:!0,calendar__top_inline_categories:!1,calendar__top_categories_start_inactive:!1,calendar__layouts:"agenda,month,week,day,grid,boxgrid,map",calendar__layout:"agenda",calendar__open_events_in:"calendar",calendar__links_target:"_self",layouts__agenda_list_reverse_order:!1,layouts__agenda_list:!0,layouts__agenda_list_limit:4,layouts__agenda_list_more_button:!0,layouts__agenda_list_next_button:!0,layouts__agenda_slider:!0,layouts__grid_image_auto_height:!1,layouts__grid_gutter:10,layouts__grid_columns:4,layouts__grid_limit:4,layouts__grid_more_button:!0,layouts__grid_next_button:!0,layouts__grid_reverse_order:!1,layouts__grid_counter:!0,layouts__boxgrid_gutter:0,layouts__boxgrid_columns:4,layouts__boxgrid_limit:4,layouts__boxgrid_more_button:!0,layouts__boxgrid_next_button:!0,layouts__boxgrid_reverse_order:!1,layouts__month_week_image_auto_height:!1,layouts__month_week_force_title:!1,layouts__month_week_style:"fixed",layouts__month_week_quick_open:!0,layouts__month_week_tooltip:!0,layouts__month_week_counter:!0,layouts__month_week_short_desc:!0,layouts__map_zoom:10,map__type:"osm",map__gmap_api_key:"",comments__type:"internal",dashboard__in_calendar:!0,misc__address_order:"country,state,city,address,postal_code",misc__min_allowed_year:2020,misc__max_allowed_year:2035,misc__tiny_mce_enabled:!0,misc__tiny_mce_api_key:"",misc__events_per_request:100}}),o=(0,n.selector)({key:"settingsAtts",get:({get:e})=>e(s),set:({set:e,get:t},a)=>{const n=t(s);e(s,{...n,...a})}}),r=(0,n.atom)({key:"calendarLayout",default:"month"}),i=(0,n.atom)({key:"calendarDate",default:{year:moment().year(),month:moment().month(),date:moment().date()}}),l=(0,n.selector)({key:"calendarMoment",get:({get:e})=>{const t=e(i);return moment().set({year:t.year,month:t.month,date:t.date})},set:({get:e,set:t},a)=>{const n=e(s),o=n.misc__min_allowed_year,r=n.misc__max_allowed_year,l=moment().set({year:o,month:0,date:1,hours:0,minutes:0,seconds:0}),d=moment().set({year:r,month:11,date:31,hours:23,minutes:59,seconds:59});a.isAfter(d,"day")?a=moment(l):a.isBefore(l,"day")&&(a=moment(d));const c={year:a.year(),month:a.month(),date:a.date()};t(i,c)}}),d=(0,n.atom)({key:"calendarEvents",default:{items:[],ready:!1,error:!1}}),c=(0,n.atom)({key:"calendarTopFilters",default:{items:[],ready:!1,error:!1}}),m=(0,n.atom)({key:"calendarScreenType",default:"pending"}),p=(0,n.atom)({key:"agendaSliderKey",default:0}),_=(0,n.atom)({key:"eventStructure",default:{}}),u=(0,n.atom)({key:"dashboardChangesNotice",default:!0})},21067:(e,t,a)=>{a.r(t),a.d(t,{useAgendaSliderKey:()=>z,useAvailableLayouts:()=>b,useCalendarEvents:()=>T,useCalendarMoment:()=>y,useCalendarScreenType:()=>_,useCalendarScreenTypeValue:()=>u,useCurrentLayout:()=>h,useCustomLayoutEvents:()=>M,useCustomLayoutEventsCache:()=>x,useEventStructure:()=>I,useEventsInRange:()=>S,useFetchCalendarEvents:()=>E,useImagesLoaded:()=>A,useIsDragging:()=>k,useLayoutEvents:()=>w,useLayoutEventsCache:()=>O,useMinMaxCalendarMoments:()=>N,usePrepareTopFilters:()=>R,useRequestGoogleMapsLib:()=>L,useRequestOpenStreetMapLib:()=>D,useSearchEventsByText:()=>v,useSettingsAtt:()=>f,useSettingsAtts:()=>g,useShouldReverseOrder:()=>C,useTopFilters:()=>Y});var n=a(21953),s=a(33569),o=a(6405),r=a(13328),i=a(51527),l=a(54869),d=a(73772),c=a(26960),m=a(26878),p=a(47444);const __=d.__,_=e=>{const[t,a]=(0,p.useRecoilState)(n.calendarScreenType);return(0,m.useEffect)((()=>{const t=e.current;let n;const s=new ResizeObserver((e=>{if(e[0]&&e[0].contentRect){(e=>{clearTimeout(n),n=setTimeout((()=>{const{mobile:t,tablet:n}=(0,o.getMediaSizes)();let s="";e<t?s="mobile":e<n&&(s="tablet"),a(s)}),100)})(e[0].contentRect.width)}}));return t&&s.observe(t),()=>{clearTimeout(n),t&&s.unobserve(t)}}),[e,a]),t},u=()=>(0,p.useRecoilValue)(n.calendarScreenType),g=()=>{const[e,t]=(0,p.useRecoilState)(n.settingsAtts);return{value:e,setValue:t}},f=e=>(0,p.useRecoilValue)(n.settingsAtts)[e],y=()=>{const[e,t]=(0,p.useRecoilState)(n.calendarMoment);return{value:e,safeValue:moment(e),setValue:t}},h=()=>{const[e,t]=(0,p.useRecoilState)(n.calendarLayout);return{value:e,setValue:t}},b=()=>{const e=f("calendar__layouts").split(",");return[{id:"agenda",label:__("Agenda","stachethemes_event_calendar_lite")},{id:"month",label:__("Month","stachethemes_event_calendar_lite")},{id:"week",label:__("Week","stachethemes_event_calendar_lite")},{id:"day",label:__("Day","stachethemes_event_calendar_lite")},{id:"grid",label:__("Grid","stachethemes_event_calendar_lite")},{id:"boxgrid",label:__("Box grid","stachethemes_event_calendar_lite")}].filter((t=>e.includes(t.id)))},v=e=>{const[t,a]=(0,m.useState)({ready:!1,items:[],error:!1}),{searchText:n,events:s,startRange:o,endRange:r,threadIndex:l}=e;return(0,m.useEffect)((()=>{n.length>3&&(a({ready:!1,items:[],error:!1}),(async()=>{const e=await(0,i.getWorkerEventsSearchByText)({searchText:n,events:s,startRange:o,endRange:r,threadIndex:l});a({ready:!0,items:e,error:!1})})())}),[n,s,l,o,r]),{items:t.items,ready:t.ready,error:t.error}},T=()=>{const[e,t]=(0,p.useRecoilState)(n.calendarEvents);return{value:e.items||[],setValue:e=>{t({error:!1,ready:!0,items:e})}}},E=(e={})=>{const[t,a]=(0,p.useRecoilState)(n.calendarEvents);let s=f("misc__events_per_request");(!1===(0,c.isNumber)(s)||parseInt(s,10)<=0)&&(s=100);const o=(0,r.usePostItemsAll)({post_type:"stec_event",perPage:s,context:"event",...e});return(0,m.useEffect)((()=>{!0===o.ready&&!1===o.error&&!1===t.ready&&a(o)})),t},C=()=>{const{value:e}=g();switch((0,p.useRecoilValue)(n.calendarLayout)){case"agenda":return e.layouts__agenda_list_reverse_order||!1;case"grid":return e.layouts__grid_reverse_order||!1;case"boxgrid":return e.layouts__boxgrid_reverse_order||!1;default:return!1}},w=(e={})=>{const t=f("filter__minmax_intersect"),a=f("calendar__use_user_timezone"),s=f("calendar__dow"),{value:r}=g(),{items:i}=(0,p.useRecoilValue)(n.calendarEvents),l=(0,p.useRecoilValue)(n.calendarLayout),{safeValue:d}=y(),c=r.filter__min_date||!1,m=r.filter__max_date||!1,{value:{items:_}}=Y(),u=C(),h="YYYY-MM-DD HH:mm:ss";let b,v;switch(e.showInUserTimezone=a,l){case"day":b=moment(d).startOf("day").utc().format(h),v=moment(d).endOf("day").utc().format(h);break;case"week":{const t=(0,o.getFirstDayOfWeekInView)(d,s);a?(b=moment(t).startOf("day").utc().format(h),v=moment(t).endOf("day").utc().add(6,"day").format(h)):(b=moment.utc(t.format("YYYY-MM-DDT00:00:00")).format(h),v=moment.utc(t.format("YYYY-MM-DDT23:59:59")).add(6,"day").format(h)),e.sortEventsInYMDkeys=!0;break}case"month":{const t=(0,o.getFirstDayOfMonthInView)(d,s);a?(b=moment(t).startOf("day").utc().format(h),v=moment(t).endOf("day").utc().add(41,"day").format(h)):(b=moment.utc(t.format("YYYY-MM-DDT00:00:00")).format(h),v=moment.utc(t.format("YYYY-MM-DDT23:59:59")).add(41,"day").format(h)),e.sortEventsInYMDkeys=!0;break}case"agenda":a?u?(b=moment(d).startOf("month").utc().format(h),v=moment(d).endOf("day").utc().format(h)):(b=moment(d).startOf("day").utc().format(h),v=moment(d).endOf("month").utc().format(h)):u?(b=moment.utc(d.format("YYYY-MM-DDT00:00:00")).startOf("month").format(h),v=moment.utc(d.format("YYYY-MM-DDT23:59:59")).endOf("day").format(h)):(b=moment.utc(d.format("YYYY-MM-DDT00:00:00")).startOf("day").format(h),v=moment.utc(d.format("YYYY-MM-DDT23:59:59")).endOf("month").format(h));break;case"grid":case"boxgrid":case"map":a?(b=moment(d).startOf("month").utc().format(h),v=moment(d).endOf("month").utc().format(h)):(b=moment.utc(d.format("YYYY-MM-DDT00:00:00")).startOf("month").format(h),v=moment.utc(d.format("YYYY-MM-DDT23:59:59")).endOf("month").format(h))}let T=i;const[E,w]=S({startRange:b,endRange:v,minDate:c,maxDate:m,minMaxIntersect:t,events:T,filters:_,order:u?"desc":"asc",threadIndex:`BASE_${r.id}`,...e});let M=E;return["agenda","grid","boxgrid"].includes(l)&&(M=(0,o.sortEventsByFeatured)(E)),[M,w]},M=(e,t,a)=>{const s=f("filter__minmax_intersect"),{value:o}=g(),{value:{items:r}}=Y(),i=o.filter__min_date||!1,l=o.filter__max_date||!1;let d,c,m;d=!!e.start&&moment.utc(e.start),c=!!d&&moment.utc(d).format("YYYY-MM-DD HH:mm:ss"),m=!!e.end&&moment.utc(e.end).format("YYYY-MM-DD HH:mm:ss");const{items:_}=(0,p.useRecoilValue)(n.calendarEvents);return S({startRange:c,endRange:m,minDate:i,maxDate:l,minMaxIntersect:s,events:_,filters:r,threadIndex:a,...t})},x=(e={resetKey:0})=>{const[t,a]=(0,m.useState)(!1),[n,s]=M({start:e.start,end:e.end},{order:e.order||"asc",sortEventsInYMDkeys:e.sortEventsInYMDkeys||!1},e.threadIndex),o=(0,m.useRef)([]);n&&(o.current=n);const r=o.current;return(0,m.useEffect)((()=>{a(!1)}),[e.resetKey]),(0,m.useEffect)((()=>{!1===t&&!0===s&&a(!0)}),[t,s]),{events:r,ready:t}},S=e=>{const t=f("calendar__dow"),[a,n]=(0,m.useState)({events:!1,params:!1,ready:!1}),s=JSON.stringify(e);return(0,m.useEffect)((()=>{let o=!1;return e.startRange&&e.endRange&&e.events.length>0?(async()=>{n({...a,ready:!1});const r=await(0,i.getWorkerEventsBetween)({...e,dow:t});!1===o&&n({events:r,params:s,ready:!0})})():n({events:[],params:s,ready:!0}),()=>{o=!0}}),[s]),a.params!==s?[!1,!1]:[a.events,a.ready]},R=({events:e,eventsReady:t})=>{const[a,s]=(0,p.useRecoilState)(n.calendarTopFilters),o=f("calendar__top_categories_start_inactive"),r=f("id");return(0,m.useEffect)((()=>{!0===t&&(async()=>{const t=await(0,i.getWorkerEventsFilters)({events:e,threadIndex:`usePrepareTopFilters_${r}`,filters:[{id:"calendars",icon:"fa-solid fa-calendar",label:__("Calendars","stachethemes_event_calendar_lite"),items:[]},{id:"categories",icon:"fa-solid fa-folder",label:__("Categories","stachethemes_event_calendar_lite"),defaultActiveValue:!o,items:[{id:0,label:__("Uncategorized","stachethemes_event_calendar_lite"),active:!o}]},{id:"locations",icon:"fa-solid fa-map-marker-alt",label:__("Locations","stachethemes_event_calendar_lite"),items:[{id:0,label:__("No location","stachethemes_event_calendar_lite"),active:!0}]},{id:"organizers",icon:"fa-solid fa-users",label:__("Organizers","stachethemes_event_calendar_lite"),items:[{id:0,label:__("No organizer","stachethemes_event_calendar_lite"),active:!0}]},{id:"guests",icon:"fa-solid fa-star",label:__("Guests","stachethemes_event_calendar_lite"),items:[{id:0,label:__("No guests","stachethemes_event_calendar_lite"),active:!0}]}]});s({items:t,ready:!0,error:!1})})()}),[o,e,t,r,s]),a},Y=()=>{const[e,t]=(0,p.useRecoilState)(n.calendarTopFilters);return{value:e,setValue:t}},k=()=>{const e=(0,m.useRef)(!1);return(0,m.useEffect)((()=>{let t,a,n=!1;function s(a){e.current=!1,n=!0,t=a.clientX}function o(s){n&&(a=s.clientX,n=!1,e.current=Math.abs(t-a)>10)}return document.addEventListener("mousedown",s),document.addEventListener("mouseup",o),()=>{e.current=!1,document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",o)}}),[]),e},z=()=>{const[e,t]=(0,p.useRecoilState)(n.agendaSliderKey);return{value:e,setValue:t}},L=()=>{const e=void 0!==window.google,t=f("map__gmap_api_key"),[a,n]=(0,m.useState)(e);return(0,m.useEffect)((()=>{let e=!0;const a=()=>{e&&n(!0)};if(window.google?.maps?.MapTypeControlStyle)a();else if(!0!==window.STEC_FORCE_DISABLE?.google_maps){new l.Loader({apiKey:t,version:"weekly"}).importLibrary("maps").then((async()=>{a()}))}return()=>{e=!1}}),[t]),a},D=()=>{const e=void 0!==window.L&&void 0!==window.L.map,[t,a]=(0,m.useState)(e),[n,s]=(0,m.useState)(e);return(0,m.useEffect)((()=>{let t=!0,n=!1,r=!1;if(!1===e&&!0!==window.STEC_FORCE_DISABLE?.open_street_map){const e=(0,o.getPluginUrl)("assets/js/libs/leaflet/leaflet.js"),i=(0,o.getPluginUrl)("assets/js/libs/leaflet/leaflet.css");n=document.createElement("script"),n.src=e,n.async=!0,document.body.appendChild(n),n.onload=()=>{t&&a(!0)},r=document.createElement("link"),r.href=i,r.type="text/css",r.rel="stylesheet",document.getElementsByTagName("head")[0].append(r),r.onload=()=>{s(!0)}}return()=>{t=!1,n&&document.body.removeChild(n)}}),[e]),t&&n},O=e=>{const[t,a]=(0,m.useState)(!1),[n,s]=w(),o=(0,m.useRef)([]);n&&(o.current=n);const r=o.current;return(0,m.useEffect)((()=>{a(!1)}),[e]),(0,m.useEffect)((()=>{!1===t&&!0===s&&a(!0)}),[t,s]),{events:r,ready:t}},A=e=>{const[t,a]=(0,m.useState)(!1);return(0,m.useEffect)((()=>{(async e=>{new Promise((t=>{let n=e.length;const s=async()=>{if(n--,n<=0)return a(!0),t(e)};if(!(e.length>0))return a(!0),t(e);for(let t=0;t<e.length;t++){const a=e[t],n=new Image;n.src=a,n.complete?s():n.onload=()=>{s()}}}))})(e)}),[JSON.stringify(e)]),{ready:t,imagesArray:e}},N=()=>{const e=f("misc__min_allowed_year"),t=f("misc__max_allowed_year");return{minAllowedMoment:moment().utc().set({year:e,month:0,date:1,hours:0,minutes:0,seconds:0}),maxAllowedMoment:moment().utc().set({year:t,month:11,date:31,hours:23,minutes:59,seconds:59})}},I=(e={})=>({value:JSON.parse(JSON.stringify(s.eventLayoutTemplate)),ready:!0,isError:!1})},33569:(e,t,a)=>{a.r(t),a.d(t,{eventLayoutTemplate:()=>s});var n=a(73772);const _x=n._x,s=[{id:"element-1662912268522",type:"ContentTabs",children:[{id:"element-1662912270707",type:"ContentTab",children:[{id:"element-1662912426494",type:"Row",children:[{id:"element-1662912428038",type:"Column",children:[{id:"element-1662912437348",type:"EventCounter",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding"],style:{},icon:"fa-solid fa-hourglass"},label:"Event Counter"},{id:"element-1662912442391",type:"EventCarousel",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding"],style:{marginTop:20},icon:"fa-solid fa-images"},label:"Media Carousel"},{id:"element-1662912448269",type:"EventTags",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding"],style:{marginTop:20},icon:"fa-solid fa-tags"},label:"Event Tags"},{id:"element-1662912454360",type:"EventTitle",children:[],properties:{dropzone:!1,accepts:[],settings:["textAlign","margin","padding"],style:{marginTop:20},icon:"fa-solid fa-heading"},label:"Event Title"},{id:"element-1662912461686",type:"HealthMeasures",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding"],style:{marginTop:20},icon:"fa-solid fa-shield-virus"},label:"Health Measures"},{id:"element-4329169999998808c3f044c1227788",type:"EventDescription",children:[],properties:{dropzone:!1,accepts:[],settings:["textAlign","margin","padding"],style:{marginTop:20},icon:"fa-solid fa-align-left"},label:"Description"},{id:"element-1662912486152",type:"EventExternalLink",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding"],style:{width:"100%",marginTop:20},icon:"fa-solid fa-arrow-up-right-from-square"},label:"External Link"},{id:"element-1662912473139",type:"EventOrganizers",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding"],style:{marginTop:20},icon:"fa-solid fa-user"},label:"Organizers"},{id:"element-1662912478794",type:"EventAttachments",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding"],style:{marginTop:30},icon:"fa-solid fa-file-download"},label:"Attachments"},{id:"element-1662912510696",type:"ShareAndExport",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding","shareSettings"],style:{marginTop:30},items:[{id:"facebook",label:"Facebook",enabled:!0},{id:"x",label:"X (formerly Twitter)",enabled:!0},{id:"whatsapp",label:"WhatsApp",enabled:!0},{id:"messenger",label:"Messenger",enabled:!0},{id:"viber",label:"Viber",enabled:!0},{id:"telegram",label:"Telegram",enabled:!0},{id:"copylink",label:"Copy Link",enabled:!0},{id:"googlecal",label:"Export to Google Calendar",enabled:!0}],icon:"fa-solid fa-share-nodes"},label:"Share & Export"}],properties:{dropzone:!0,accepts:"COMMON_ELEMENTS",settings:["padding","margin","conditions"],style:{},icon:"fa-solid fa-table-columns"},label:"Column"}],properties:{dropzone:!0,accepts:["Column"],settings:["gridTemplateColumns","gap","margin","padding","conditions"],style:{gap:10,gridTemplateColumns:"repeat( auto-fit, minmax(250px, 1fr) )",marginBottom:0,paddingTop:20,paddingLeft:20,paddingBottom:20,paddingRight:20},icon:"fa-regular fa-square-full"},label:"Row section"}],properties:{dropzone:!0,accepts:[],settings:["contentTab","padding","margin"],style:{}},label:_x("Introduction","Tab label","stachethemes_event_calendar_lite"),icon:"fas fa-info"},{id:"element-1662912301632",type:"ContentTab",children:[{id:"element-1662912589583",type:"Row",children:[{id:"element-1662912590111",type:"Column",children:[{id:"element-1662912616063",type:"EventLocationAddress",children:[],properties:{dropzone:!1,conditions:["physical_location"],accepts:[],settings:["margin","padding"],style:{},icon:"fa-solid fa-align-justify"},label:"Address"},{id:"element-1662912619877",type:"EventLocationDirections",children:[],properties:{dropzone:!1,conditions:["physical_location"],accepts:[],settings:["margin","padding"],style:{marginTop:20},icon:"fa-solid fa-route"},label:"Directions"},{id:"element-1662912624768",type:"EventLocationAbout",children:[],properties:{dropzone:!1,conditions:["physical_location"],accepts:[],settings:["textAlign","margin","padding"],style:{textAlign:"left",marginTop:40},icon:"fa-solid fa-info"},label:"About"}],properties:{dropzone:!0,accepts:"COMMON_ELEMENTS",settings:["padding","margin","conditions"],style:{},icon:"fa-solid fa-table-columns"},label:"Column"},{id:"element-1662912590713",type:"Column",children:[{id:"element-1662912611057",type:"EventLocationMap",children:[],properties:{dropzone:!1,conditions:["physical_location"],accepts:[],settings:["margin","padding"],style:{},icon:"fa-solid fa-map"},label:"Map"}],properties:{dropzone:!0,accepts:"COMMON_ELEMENTS",settings:["padding","margin","conditions"],style:{},icon:"fa-solid fa-table-columns"},label:"Column"}],properties:{dropzone:!0,accepts:["Column"],settings:["gridTemplateColumns","gap","margin","padding","conditions"],style:{gap:20,gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",marginBottom:20,paddingTop:20,paddingLeft:20,paddingBottom:20,paddingRight:20},icon:"fa-regular fa-square-full",conditions:["physical_location"]},label:"Row section"},{id:"element-1662912662086",type:"Row",children:[{id:"element-1662912664020",type:"Column",children:[{id:"element-1662912671375",type:"EventVirtualLocation",children:[],properties:{dropzone:!1,conditions:["virtual_location"],accepts:[],settings:["margin","padding"],style:{},icon:"fa-solid fa-wifi"},label:"Virtual location"}],properties:{dropzone:!0,accepts:"COMMON_ELEMENTS",settings:["padding","margin","conditions"],style:{},icon:"fa-solid fa-table-columns"},label:"Column"}],properties:{dropzone:!0,accepts:["Column"],settings:["gridTemplateColumns","gap","margin","padding","conditions"],style:{gap:10,gridTemplateColumns:"repeat( auto-fit, minmax(250px, 1fr) )",marginBottom:20,paddingTop:20,paddingLeft:20,paddingBottom:20,paddingRight:20},icon:"fa-regular fa-square-full",conditions:["virtual_location"]},label:"Row section"}],properties:{dropzone:!0,accepts:[],settings:["contentTab","padding","margin"],style:{}},label:_x("Location","Tab label","stachethemes_event_calendar_lite"),icon:"fas fa-map-marker"},{id:"element-1662912314635",type:"ContentTab",children:[{id:"element-1662912717025",type:"Row",children:[{id:"element-1662912720404",type:"Column",children:[{id:"element-1662912724180",type:"EventSchedule",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding"],style:{},icon:"fa-solid fa-list"},label:"Schedule"}],properties:{dropzone:!0,accepts:"COMMON_ELEMENTS",settings:["padding","margin","conditions"],style:{},icon:"fa-solid fa-table-columns"},label:"Column"}],properties:{dropzone:!0,accepts:["Column"],settings:["gridTemplateColumns","gap","margin","padding","conditions"],style:{gap:10,gridTemplateColumns:"repeat( auto-fit, minmax(250px, 1fr) )",marginBottom:20,paddingTop:20,paddingLeft:20,paddingBottom:20,paddingRight:20},icon:"fa-regular fa-square-full",conditions:["schedule"]},label:"Row section"}],properties:{dropzone:!0,accepts:[],settings:["contentTab","padding","margin"],style:{}},label:_x("Schedule","Tab label","stachethemes_event_calendar_lite"),icon:"fas fa-list"},{id:"element-lfjpwwaf9ng1xtb9",type:"ContentTab",children:[{id:"element-lfjpxao7owmmw37v",type:"Row",children:[{id:"element-lfjpxxnz1011tgqd",type:"Column",children:[{id:"element-lfjpxobbg45rcb3w",type:"EventGuests",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding"],style:{},icon:"fa-solid fa-star"},label:"Guests"}],properties:{dropzone:!0,accepts:"COMMON_ELEMENTS",settings:["padding","margin","conditions"],style:{},icon:"fa-solid fa-table-columns"},label:"Column"}],properties:{dropzone:!0,accepts:["Column"],settings:["gridTemplateColumns","gap","margin","padding","conditions"],style:{gap:10,gridTemplateColumns:"repeat( auto-fit, minmax(250px, 1fr) )",marginBottom:20,paddingTop:20,paddingLeft:20,paddingBottom:20,paddingRight:20},icon:"fa-regular fa-square-full",conditions:["guests"]},label:"Row section"}],properties:{dropzone:!0,accepts:[],settings:["contentTab","padding","margin"],style:{}},label:_x("Guests","Tab label","stachethemes_event_calendar_lite"),icon:"fas fa-star"},{id:"element-1662912371517",type:"ContentTab",children:[{id:"element-1662912845322",type:"Row",children:[{id:"element-1662912845780",type:"Column",children:[{id:"element-1662912848975",type:"Comments",children:[],properties:{dropzone:!1,accepts:[],settings:["margin","padding"],style:{},icon:"fa-solid fa-comments"},label:"Comments"}],properties:{dropzone:!0,accepts:"COMMON_ELEMENTS",settings:["padding","margin","conditions"],style:{},icon:"fa-solid fa-table-columns"},label:"Column"}],properties:{dropzone:!0,accepts:["Column"],settings:["gridTemplateColumns","gap","margin","padding","conditions"],style:{gap:10,gridTemplateColumns:"repeat( auto-fit, minmax(250px, 1fr) )",marginBottom:20,paddingTop:20,paddingLeft:20,paddingBottom:20,paddingRight:20},icon:"fa-regular fa-square-full",conditions:["comments"]},label:"Row section"}],properties:{dropzone:!0,accepts:[],settings:["contentTab","padding","margin"],style:{}},label:_x("Comments","Tab label","stachethemes_event_calendar_lite"),icon:"fas fa-comments"}],properties:{dropzone:!1,accepts:[],settings:["contentTabs","padding","margin"],style:{},icon:"fa-solid fa-lines-leaning"},label:"Content Tabs"}]}}]);