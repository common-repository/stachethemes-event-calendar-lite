"use strict";(globalThis.webpackChunkstec=globalThis.webpackChunkstec||[]).push([[540],{52779:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var s=a(58168),l=a(8403);const n=e=>{const t=["stec-button"];return Array.isArray(e.className)?t.push(...e.className):e.className&&"string"==typeof e.className&&t.push(e.className),e.disabled&&t.push("stec-button-disabled"),e.href?React.createElement("a",(0,s.default)({},e.extra,{style:e.style,target:e.target?e.target:"_SELF",href:e.href,className:t.join(" "),onClick:e.onClick}),Array.isArray(e.label)?e.label.map(((e,t)=>React.createElement(l.StecSpan,{key:t},e))):e.label):React.createElement(l.StecDiv,(0,s.default)({},e.extra,{style:e.style,className:t.join(" "),onClick:e.onClick}),Array.isArray(e.label)?e.label.map(((e,t)=>React.createElement(l.StecSpan,{key:t},e))):e.label)}},41426:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(33500),l=a(8403),n=a(26878);const c=function(e){const t=(0,n.useRef)(),a=(0,n.useRef)(!0);return(0,n.useEffect)((()=>{const t=document.querySelectorAll(".stec-modal-overlay");return e.isOpen?document.body.classList.add("stec-modal-is-open"):t.length<=0&&document.body.classList.remove("stec-modal-is-open"),()=>{document.querySelectorAll(".stec-modal-overlay").length<=0&&document.body.classList.remove("stec-modal-is-open")}}),[e.isOpen]),(0,n.useEffect)((()=>{const t=t=>{27===t.keyCode&&e.onClose()};return document.addEventListener("keydown",t,!1),()=>{document.removeEventListener("keydown",t,!1)}}),[e]),!0!==e.isOpen?null:React.createElement(s.default,null,React.createElement(l.StecDiv,{ref:t,className:"stec-modal-overlay",style:e.overlayColor?{backgroundColor:e.overlayColor}:{},onMouseDown:e=>{"stec-modal-overlay"===e.target.className?a.current=!0:a.current=!1},onMouseUp:t=>{"stec-modal-overlay"===t.target.className&&a.current&&(t.stopPropagation(),e.onClose())}},React.createElement(l.StecDiv,{className:"stec-modal-close",onClick:t=>{t.stopPropagation(),e.onClose()}},React.createElement("i",{className:"fa-solid fa-times"})),e.plain&&e.children,!e.plain&&React.createElement(l.StecDiv,{className:"stec-modal",style:e.maxWidth?{maxWidth:e.maxWidth}:{}},React.createElement(l.StecDiv,{className:"stec-modal-content"},e.children),React.createElement(l.StecDiv,{className:"stec-modal-after-content",onClick:t=>{t.stopPropagation(),e.onClose()}}))))}},2113:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var s=a(58168),l=a(52779),n=a(41426),c=a(8403),i=a(73772),r=a(26878);const __=i.__,o=()=>{const e=[{id:"woocommerce",title:__("Tickets & Products","stachethemes_event_calendar_lite"),desc:__("Integrate WooCommerce with the ability to sell event tickets and products directly from your calendar, add simple or variable tickets, generate Order and Ticket QR codes, set ticket quantity per event occurrence, and scan tickets using a QR code scanner.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"buddypress",title:__("BuddyPress","stachethemes_event_calendar_lite"),desc:__("Integrate with BuddyPress to display events on user profiles, group pages, and the activity page, allowing the creation and display of group events.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"rsvp",title:__("RSVP","stachethemes_event_calendar_lite"),desc:__("Enable users to RSVP to events, set RSVP limits, specify limits per RSVP, define RSVP deadlines, implement a waiting list, and display the RSVP list.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"reminders",title:__("Reminders","stachethemes_event_calendar_lite"),desc:__("Enable users to set up a reminder for events, send reminders via email","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"event-submission-form",title:__("Event Submission Form","stachethemes_event_calendar_lite"),desc:__("Allow users or visitors to submit events from the frontend.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"comments",title:__("Comments","stachethemes_event_calendar_lite"),desc:__("Enable users to comment on events and provide the option to choose between Facebook or an internal comments form.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"forecast",title:__("Weather Forecast","stachethemes_event_calendar_lite"),desc:__("Display weather forecast for your events.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"ai",title:__("A.I.","stachethemes_event_calendar_lite"),desc:__("A.I. Content Enhancer.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"import-export",title:__("Import & Export","stachethemes_event_calendar_lite"),desc:__("Import events from sources such as Facebook or Google Calendar, import events from CSV files, and export events to both CSV and ICS files.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"cron",title:__("Cron jobs","stachethemes_event_calendar_lite"),desc:__("Schedule cron jobs to automate event imports.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"builder",title:__("Builder","stachethemes_event_calendar_lite"),desc:__("Utilize a built-in drag & drop builder to create event layouts and event submission form layouts effortlessly.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"single-page",title:__("Event Single Page","stachethemes_event_calendar_lite"),desc:__("Display events on a single page.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"organizers-page",title:__("Organizers Page","stachethemes_event_calendar_lite"),desc:__("Display organizers on a single page.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"guests-page",title:__("Guests Page","stachethemes_event_calendar_lite"),desc:__("Display organizers on a single page.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"locations-page",title:__("Locations Page","stachethemes_event_calendar_lite"),desc:__("Display locations on a single page.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"translatable",title:__("Translatable","stachethemes_event_calendar_lite"),desc:__("Translate the plugin to any language.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"multilingual",title:__("Multilingual Support","stachethemes_event_calendar_lite"),desc:__("Support for multilingual websites using WPML, Polylang and similar plugins.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"multi-site",title:__("Multi-site Ready","stachethemes_event_calendar_lite"),desc:__("Use the plugin on a WordPress multi-site network.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"gutenberg",title:__("Gutenberg Blocks","stachethemes_event_calendar_lite"),desc:__("Display the calendar and its widgets with Gutenberg blocks.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"elementor",title:__("Elementor Widgets","stachethemes_event_calendar_lite"),desc:__("Display the calendar and its widgets with Elementor widgets.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"color",title:__("Color Customizable","stachethemes_event_calendar_lite"),desc:__("Customize the calendar colors to match your website.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"share",title:__("Social Integration","stachethemes_event_calendar_lite"),desc:__("Share events on social networks.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"subscriptions",title:__("Subscribe to Events","stachethemes_event_calendar_lite"),desc:__("Allows users to subscribe to events or calendars, supporting Google Calendar, iCalendar, Outlook 365, Outlook Live, and other calendar apps.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"embed",title:__("Embed","stachethemes_event_calendar_lite"),desc:__("Embed events on other websites.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"repeatability",title:__("Repeatability","stachethemes_event_calendar_lite"),desc:__("Create repeating events with options to add repeat exceptions, set daily, weekly, monthly, and yearly repeating events, repeat events on specific days or dates, and insert custom RRULE repeat schemes.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"agenda",title:__("Agenda Layout","stachethemes_event_calendar_lite"),desc:__("Display events in a list.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"agenda-unbound",title:__("Agenda Layout (Unbound)","stachethemes_event_calendar_lite"),desc:[__("Display events in a list.","stachethemes_event_calendar_lite"),__("Unbound mode will continue to display events that fall outside the current month.","stachethemes_event_calendar_lite")],lite:!1,pro:!0},{id:"month",title:__("Month & Week Layout","stachethemes_event_calendar_lite"),desc:__("Display events in a calendar month or week layout.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"month-print",title:__("Month & Week Layout Print","stachethemes_event_calendar_lite"),desc:__("Print option for month & week layouts","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"month-images",title:__("Month & Week Layout Images","stachethemes_event_calendar_lite"),desc:__("Display images in month & week layouts cells.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"grid",title:__("Grid Layout","stachethemes_event_calendar_lite"),desc:__("Display events in a grid layout.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"grid-unbound",title:__("Grid Layout (Unbound)","stachethemes_event_calendar_lite"),desc:[__("Display events in a grid layout.","stachethemes_event_calendar_lite"),__("Unbound mode will continue to display events that fall outside the current month","stachethemes_event_calendar_lite")],lite:!1,pro:!0},{id:"boxgrid",title:__("Box Grid Layout","stachethemes_event_calendar_lite"),desc:__("Display events in a box grid (tile) layout.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"boxgrid-unbound",title:__("Box Grid Layout (Unbound)","stachethemes_event_calendar_lite"),desc:[__("Display events in a box grid (tile) layout.","stachethemes_event_calendar_lite"),__("Unbound mode will continue to display events that fall outside the current month","stachethemes_event_calendar_lite")],lite:!1,pro:!0},{id:"day",title:__("Day Layout","stachethemes_event_calendar_lite"),desc:__("Display events in a day layout.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"day-hourly",title:__("Hourly Layout","stachethemes_event_calendar_lite"),desc:__("Displays events for the day in an hourly layout.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"day-hourly-print",title:__("Hourly Layout Print","stachethemes_event_calendar_lite"),desc:__("Print option for hourly layout.","stachethemes_event_calendar_lite"),lite:!1,pro:!0},{id:"map",title:__("Map Layout ","stachethemes_event_calendar_lite"),desc:[__("Display events on a map using OpenStreetMap or Google Maps.","stachethemes_event_calendar_lite"),__("Display events near you or near a specific location using the proximity filter.","stachethemes_event_calendar_lite")],lite:!1,pro:!0},{id:"event-slider",title:__("Events Slider","stachethemes_event_calendar_lite"),desc:__("Display events in a standalone slider.","stachethemes_event_calendar_lite"),lite:!0,pro:!0},{id:"event-list",title:__("Events List","stachethemes_event_calendar_lite"),desc:__("Display events in a standalone list.","stachethemes_event_calendar_lite"),lite:!0,pro:!0}],t=e=>{const{id:t,title:a,desc:s,lite:l,pro:n}=e;return React.createElement(c.StecDiv,{className:"stec-comparison-table-body-item"},React.createElement(c.StecDiv,{className:"stec-comparison-table-body-item-wrap"},React.createElement(c.StecDiv,{className:"stec-comparison-table-body-item-title"},a),React.createElement(c.StecDiv,{className:"stec-comparison-table-body-item-desc"},Array.isArray(s)?s.map(((e,t)=>React.createElement("p",{key:t},e))):React.createElement("p",null,s))),React.createElement(c.StecDiv,{className:"stec-comparison-table-body-item-value"},l?React.createElement("i",{className:"fa-solid fa-check"}):React.createElement("i",{className:"fa-solid fa-times"})),React.createElement(c.StecDiv,{className:"stec-comparison-table-body-item-value"},n?React.createElement("i",{className:"fa-solid fa-check"}):React.createElement("i",{className:"fa-solid fa-times"})))};return React.createElement(c.StecDiv,{className:"stec-comparison-table"},React.createElement(c.StecDiv,{className:"stec-comparison-table-header"},React.createElement(c.StecDiv,{className:"stec-comparison-table-header-title"},__("Comparison Table","stachethemes_event_calendar_lite")),React.createElement(c.StecDiv,{className:"stec-comparison-table-header-item"},React.createElement(c.StecSpan,null,__("STEC","stachethemes_event_calendar_lite")),React.createElement(c.StecSpan,null,__("Lite","stachethemes_event_calendar_lite"))),React.createElement(c.StecDiv,{className:"stec-comparison-table-header-item"},__("STEC","stachethemes_event_calendar_lite"))),React.createElement(c.StecDiv,{className:"stec-comparison-table-body"},e.map((e=>React.createElement(t,(0,s.default)({key:e.id},e))))),React.createElement(c.StecDiv,{className:"stec-comparison-table-footer"},React.createElement(c.StecDiv,{className:"stec-comparison-table-footer-item"}),React.createElement(c.StecDiv,{className:"stec-comparison-table-footer-item"},React.createElement(l.default,{label:__("Already Installed","stachethemes_event_calendar_lite"),disabled:!0})),React.createElement(c.StecDiv,{className:"stec-comparison-table-footer-item"},React.createElement(l.default,{href:"https://codecanyon.net/item/stachethemes-event-calendar-wordpress-events-calendar-plugin/16168229?ref=Stachethemes",label:[React.createElement("i",{className:"fa-regular fa-circle-up",key:"icon"}),__("Upgrade Now","stachethemes_event_calendar_lite")],className:"green"}))))},d=e=>{const[t,a]=(0,r.useState)(!1);return React.createElement(React.Fragment,null,React.createElement(n.default,{maxWidth:"900px",isOpen:t,onClose:()=>{a(!1)}},React.createElement(o,null)),React.createElement(l.default,(0,s.default)({},e,{onClick:()=>{a(!0)}})))}},90587:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(52779),l=a(91927),n=a(8403),c=a(26960),i=a(64856),r=a(92946),o=a(2113);const d=({item:e,itemsCount:t=!1})=>{const{setActiveMenu:a}=(0,l.useDashboardMenu)(),c=!1!==t;return React.createElement(n.StecDiv,{className:"stec-dashboard-home-item"},React.createElement(n.StecSpan,{className:"stec-dashboard-home-item-icon"},React.createElement("i",{className:e.icon,style:{color:e.color}})),React.createElement(n.StecSpan,{className:"stec-dashboard-home-item-title"},e.label),c&&React.createElement(n.StecSpan,{className:"stec-dashboard-home-item-count"},React.createElement(i.default,{end:t,duration:.2})),React.createElement(n.StecDiv,{className:"stec-dashboard-home-item-buttons"},e.buttons.map(((e,t)=>"upgrade-compare"===e.id?React.createElement(o.default,{key:e.id,label:[React.createElement("i",{key:"icon",className:e.icon}),e.label],className:e.className,style:t>0?{marginLeft:6}:{},target:"_blank",href:e.href}):e.href?React.createElement(s.default,{key:e.id,label:[React.createElement("i",{key:"icon",className:e.icon}),e.label],className:e.className,style:t>0?{marginLeft:6}:{},target:"_blank",href:e.href}):React.createElement(s.default,{key:e.id,label:[React.createElement("i",{key:"icon",className:e.icon}),e.label],className:e.className,style:t>0?{marginLeft:6}:{},onClick:()=>{a({page:e.id,params:{}})}})))))},m=({countersDataReady:e,countersData:t})=>React.createElement(React.Fragment,null,r.default.map((a=>{let s=!1;return e&&(0,c.isNumber)(t[a.id])&&(s=parseInt(t[a.id],10)),React.createElement(d,{key:a.id,item:a,itemsCount:s})}))),_=()=>{const{ready:e,data:t}=(0,l.useDashboardCounters)();return React.createElement(m,{countersDataReady:e,countersData:t})};const h=function(){const e=!1===window.STEC_DISABLE_DASHBOARD_COUNTERS;return React.createElement(n.StecDiv,{className:"stec-dashboard-home"},e&&React.createElement(m,{countersDataReady:!0,countersData:{}}),!e&&React.createElement(_,null))}},92946:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var s=a(73772);const __=s.__,l=[{id:"settings",label:__("Settings","stachethemes_event_calendar_lite"),icon:"fa-solid fa-cog",buttons:[{id:"settings",className:"blue",icon:"fa-solid fa-wrench",label:__("Manage","stachethemes_event_calendar_lite")}]},{id:"calendars",label:__("Calendars","stachethemes_event_calendar_lite"),icon:"fa-solid fa-calendar-alt",buttons:[{id:"calendars-upsert",icon:"fa-solid fa-plus",className:"green",label:__("Add new","stachethemes_event_calendar_lite")},{id:"calendars-list",className:"blue",icon:"fa-solid fa-list",label:__("Manage","stachethemes_event_calendar_lite")}]},{id:"events",label:__("Events","stachethemes_event_calendar_lite"),icon:"fa-solid fa-calendar-day",buttons:[{id:"events-upsert",icon:"fa-solid fa-plus",className:"green",label:__("Add new","stachethemes_event_calendar_lite")},{id:"events-list",className:"blue",icon:"fa-solid fa-list",label:__("Manage","stachethemes_event_calendar_lite")}]},{id:"categories",label:__("Categories","stachethemes_event_calendar_lite"),icon:"fa-solid fa-folder",buttons:[{id:"categories-upsert",icon:"fa-solid fa-plus",className:"green",label:__("Add new","stachethemes_event_calendar_lite")},{id:"categories-list",className:"blue",icon:"fa-solid fa-list",label:__("Manage","stachethemes_event_calendar_lite")}]},{id:"organizers",label:__("Organizers","stachethemes_event_calendar_lite"),icon:"fa-solid fa-user-edit",buttons:[{id:"organizers-upsert",icon:"fa-solid fa-plus",className:"green",label:__("Add new","stachethemes_event_calendar_lite")},{id:"organizers-list",className:"blue",icon:"fa-solid fa-list",label:__("Manage","stachethemes_event_calendar_lite")}]},{id:"guests",label:__("Guests","stachethemes_event_calendar_lite"),icon:"fa-solid fa-star",buttons:[{id:"guests-upsert",icon:"fa-solid fa-plus",className:"green",label:__("Add new","stachethemes_event_calendar_lite")},{id:"guests-list",className:"blue",icon:"fa-solid fa-list",label:__("Manage","stachethemes_event_calendar_lite")}]},{id:"locations",label:__("Locations","stachethemes_event_calendar_lite"),icon:"fa-solid fa-map-marker-alt",buttons:[{id:"locations-upsert",icon:"fa-solid fa-plus",className:"green",label:__("Add new","stachethemes_event_calendar_lite")},{id:"locations-list",className:"blue",icon:"fa-solid fa-list",label:__("Manage","stachethemes_event_calendar_lite")}]},{id:"upgrade",label:__("Upgrade","stachethemes_event_calendar_lite"),icon:"fa-regular fa-circle-up",buttons:[{id:"upgrade-get",icon:"fa-solid fa-shopping-cart",className:"green",label:__("Get full version","stachethemes_event_calendar_lite"),href:"https://codecanyon.net/item/stachethemes-event-calendar-wordpress-events-calendar-plugin/16168229?ref=Stachethemes"},{id:"upgrade-compare",icon:"fa-solid fa-scale-unbalanced-flip",className:"blue",label:__("Compare","stachethemes_event_calendar_lite")}]}].filter((e=>{switch(e.id){case"upgrade":case"settings":return!!STEC_VARIABLES?.current_user?.capability?.manage_settings;case"categories":case"guests":case"organizers":case"locations":case"calendars":return!!STEC_VARIABLES?.current_user?.capability?.[`manage_${e.id}`];case"events":return!!STEC_VARIABLES?.current_user?.capability?.manage_events}return!0}))}}]);