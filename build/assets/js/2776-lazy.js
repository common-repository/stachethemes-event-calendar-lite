(globalThis.webpackChunkstec=globalThis.webpackChunkstec||[]).push([[2776],{52779:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(58168),c=a(8403);const l=e=>{const t=["stec-button"];return Array.isArray(e.className)?t.push(...e.className):e.className&&"string"==typeof e.className&&t.push(e.className),e.disabled&&t.push("stec-button-disabled"),e.href?React.createElement("a",(0,n.default)({},e.extra,{style:e.style,target:e.target?e.target:"_SELF",href:e.href,className:t.join(" "),onClick:e.onClick}),Array.isArray(e.label)?e.label.map(((e,t)=>React.createElement(c.StecSpan,{key:t},e))):e.label):React.createElement(c.StecDiv,(0,n.default)({},e.extra,{style:e.style,className:t.join(" "),onClick:e.onClick}),Array.isArray(e.label)?e.label.map(((e,t)=>React.createElement(c.StecSpan,{key:t},e))):e.label)}},75761:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(8403);const c=({text:e,style:t,allowHtml:a=!1})=>e?!0===a?React.createElement(n.StecSpan,{className:"stec-field-description",style:t,dangerouslySetInnerHTML:{__html:e}}):React.createElement(n.StecSpan,{className:"stec-field-description",style:t},e):""},78565:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(8403);const c=function({text:e,style:t}){return e?React.createElement(n.StecSpan,{className:"stec-field-title",style:t},e):""}},13839:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(8403);const c=function(e){return React.createElement(n.StecDiv,{className:`stec-flexbox ${e.className?e.className:""}`,style:e.style},e.children)}},32488:(e,t,a)=>{"use strict";a.r(t),a.d(t,{InputText:()=>d,UncontrolledDelayedInputText:()=>i,UncontrolledInputText:()=>u,default:()=>m});var n=a(8403),c=a(26878),l=a(75761),r=a(78565),s=a(13839),o=a(10382);const i=React.forwardRef(((e,t)=>{const[a,s]=(0,c.useState)(e.defaultValue||""),[i,u]=(0,c.useState)(!1),[d,m]=(0,c.useState)(!1),p=e.onChange,f=void 0!==e.minLength?e.minLength:2;(0,c.useEffect)((()=>{let t;if(t=setTimeout((()=>{p&&e.defaultValue!==a&&(0===a.length||a.length>f)&&p(a)}),e.delay||750),(i||e.wasSubmitted)&&e.regex){const t=new RegExp(e.regex).test(a);m(!1===t)}return()=>{clearTimeout(t)}}),[a,e.delay,p,e.regex,e.wasSubmitted,i,e.defaultValue,f]);const h=["stec-input-text-wrapper"];return e.className&&h.push(e.className),React.createElement(n.StecDiv,{className:h.join(" ")},React.createElement("label",null,React.createElement(r.default,{text:e.title}),React.createElement("input",{ref:t,readOnly:e.readOnly,name:e.name,type:e.type||"text",required:e.required,value:a,placeholder:e.placeholder,onBlur:()=>u(!0),onChange:e=>{const t=e.target.value;s(t)},onKeyDown:t=>{e.onKeyPress&&e.onKeyPress(t)}}),React.createElement(o.default,{floating:!0,text:e.errorMessage,display:d}),React.createElement(l.default,{text:e.description})))}));i.displayName="UncontrolledDelayedInputText";const u=React.forwardRef(((e,t)=>{const[a,i]=(0,c.useState)(e.defaultValue||""),[u,d]=(0,c.useState)(!1),[m,p]=(0,c.useState)(!1);(0,c.useEffect)((()=>{if((u||e.wasSubmitted)&&e.regex){const t=new RegExp(e.regex).test(a);p(!1===t)}}),[a,e.regex,e.wasSubmitted,u]);const f=["stec-input-text-wrapper"];return e.className&&f.push(e.className),React.createElement(n.StecDiv,{className:f.join(" ")},React.createElement("label",null,React.createElement(s.default,{style:{justifyContent:"space-between"}},React.createElement(r.default,{text:e.title})),React.createElement("input",{ref:t,readOnly:e.readOnly,name:e.name,type:e.type||"text",required:e.required,value:a,placeholder:e.placeholder,onBlur:()=>d(!0),onKeyDown:t=>{e.onKeyPress&&e.onKeyPress(t)},onChange:t=>{i(t.target.value),e.onChange&&e.onChange(t.target.value)}}),React.createElement(o.default,{floating:!0,text:e.errorMessage,display:m}),React.createElement(l.default,{text:e.description})))}));u.displayName="UncontrolledInputText";const d=React.forwardRef(((e,t)=>{const[a,i]=(0,c.useState)(!1),[u,d]=(0,c.useState)(!1);(0,c.useEffect)((()=>{if((a||e.wasSubmitted)&&e.regex){const t=new RegExp(e.regex).test(e.value);d(!1===t)}}),[e.regex,e.value,e.wasSubmitted,a]);const m=["stec-input-text-wrapper"];return e.className&&m.push(e.className),React.createElement(n.StecDiv,{className:m.join(" ")},React.createElement("label",null,React.createElement(s.default,{style:{justifyContent:"space-between"}},React.createElement(r.default,{text:e.title})),React.createElement("input",{ref:t,readOnly:e.readOnly,name:e.name,type:e.type||"text",required:e.required,value:e.value,placeholder:e.placeholder,onBlur:()=>i(!0),onChange:t=>{e.onChange(t.target.value)},onKeyDown:t=>{e.onKeyPress&&e.onKeyPress(t)}}),React.createElement(o.default,{floating:!0,text:e.errorMessage,display:u}),React.createElement(l.default,{text:e.description})))}));d.displayName="InputText";const m=d},10382:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(8403);const c=function({text:e,floating:t=!1,display:a=!1}){if(!1===a||!e)return"";const c=["stec-invalid-field"];return!0===t&&c.push("stec-invalid-field-floating"),React.createElement(n.StecSpan,{className:c.join(" ")},e)}},57798:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(8403),c=a(26878),l=a(33500);const r=e=>{if((0,c.useEffect)((()=>{const t=document.querySelectorAll(".stec-light-modal-overlay");return e.isOpen?document.body.classList.add("stec-light-modal-is-open"):t.length<=0&&document.body.classList.remove("stec-light-modal-is-open"),()=>{document.body.classList.remove("stec-light-modal-is-open")}}),[e.isOpen]),!0!==e.isOpen)return null;const t=!0!==e.noHeader&&React.createElement(n.StecDiv,{className:"stec-light-modal-header",style:e.headerStyle||{}},e.headerTags&&React.createElement(n.StecDiv,{className:"stec-light-modal-header-tags"},e.headerTags),React.createElement(n.StecSpan,null,React.createElement("i",{className:e.headerIcon}))),a=["stec-light-modal-overlay"];return e.className&&a.push(e.className),React.createElement(l.default,null,React.createElement(n.StecDiv,{className:a.join(" "),onClick:e.onClose},React.createElement(n.StecDiv,{className:"stec-light-modal",onClick:e=>{e.stopPropagation()}},t,React.createElement(n.StecDiv,{className:"stec-light-modal-title"},e.title),React.createElement(n.StecDiv,{className:"stec-light-modal-content"},e.children,React.createElement(n.StecDiv,{className:"stec-light-modal-content-buttons"},e.buttons)))))};const s=function(e){return"function"==typeof window.stecOverrideLightModalComponent?window.stecOverrideLightModalComponent({componentProps:e,StecDiv:n.StecDiv,StecSpan:n.StecSpan,Portal:l.default}):React.createElement(r,e)}},24292:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var n=a(58168),c=a(52759),l=a(47080),r=a(22008),s=a(36263),o=a(8403),i=a(73772),u=a(26878);const __=i.__;const d=function(e){const t=(0,u.useRef)(e);return e.ready&&(t.current=e),React.createElement(o.StecDiv,{className:"stec-list-manager"},!1===e.ready&&React.createElement(o.StecDiv,{className:"stec-list-manager-loader"},React.createElement(r.default,{type:"calendar-sprite",title:__("Refreshing list","stachethemes_event_calendar_lite")})),e.ready&&t.current.items.length<=0&&React.createElement(o.StecDiv,{className:"stec-list-manager-is-empty"},__("No entries found","stachethemes_event_calendar_lite")),t.current.items.length>0&&React.createElement(React.Fragment,null,t.current.controls&&React.createElement(l.default,{controls:t.current.controls}),t.current.items.map((e=>React.createElement(c.default,(0,n.default)({key:e.key},e)))),React.createElement(s.default,{pages:t.current.totalPages,currentPage:t.current.currentPage,onClick:e=>{t.current.onPageChange(e)}})))}},52759:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(8403),c=a(73772),l=a(26878),r=a(52779),s=a(57798),o=a(66831),i=a(32891);const __=c.__,u=e=>React.createElement(n.StecInputCheckBox,{key:"item-checkbox",hint:e.checkHint,checked:e.checked,onChange:()=>{e.onClick(e.itemId)}}),d=e=>{const[t,a]=(0,l.useState)(!1),c=(0,l.useRef)(!1);return React.createElement(React.Fragment,null,React.createElement(s.default,{isOpen:t,onClose:e=>{e.stopPropagation(),a(!1)},headerIcon:"fa-solid fa-triangle-exclamation",title:c.current.message||__("Are you sure you want to delete this item?","stachethemes_event_calendar_lite"),buttons:[React.createElement(r.default,{key:"delete",className:"red",label:__("Delete","stachethemes_event_calendar_lite"),onClick:()=>{c.current&&(c.current.onClick(c.current.id),a(!1))}}),React.createElement(r.default,{key:"cancel",className:"yellow",label:__("Cancel","stachethemes_event_calendar_lite"),onClick:()=>{c.current=!1,a(!1)}})]}),React.createElement(n.StecDiv,{className:"stec-list-manager-item-controls"},e.controls.map((t=>["select-item","title"].includes(t.id)?"":React.createElement(r.default,{key:t.id,className:t.color,label:[t.icon,t.label],onClick:()=>{["delete","empty-calendar"].includes(t.id)?(c.current={onClick:t.onClick,id:e.id,message:"empty-calendar"===t.id&&__("Are you use you want to delete all events from this calendar","stachethemes_event_calendar_lite")},a(!0)):t.onClick(e.id)}})))))},m=e=>React.createElement(n.StecDiv,{className:"stec-list-manager-item"},React.createElement(n.StecDiv,null,e.controls.map((t=>{if("select-item"===t.id)return React.createElement(u,{key:t.id,itemId:e.id,onClick:t.onClick,checked:e.checked,checkHint:e.checkHint})})),React.createElement(i.default,e.thumbnail),React.createElement(n.StecDiv,null,e.tags&&e.tags.map((e=>React.createElement(o.default,{key:e.id,title:e.title,label:e.label,backgroundColor:e.color}))),React.createElement(n.StecSpan,{className:"stec-list-manager-item-title",onClick:()=>{const t=e.controls.filter((e=>"title"===e.id));if(!(t.length>0))return!1;t[0].onClick(e.id)}},e.title),e.itemProps&&React.createElement(React.Fragment,null,React.createElement("br",null),e.itemProps.map((e=>React.createElement(n.StecDiv,{key:e.id,className:"stec-list-manager-item-prop"},e.icon&&React.createElement("i",{className:e.icon}),e.text)))),e.description&&React.createElement(React.Fragment,null,React.createElement("br",null),React.createElement(n.StecSpan,{className:"stec-list-manager-item-description"},e.description)))),React.createElement(d,e))},47080:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var n=a(58168),c=a(8403),l=a(73772),r=a(26878),s=a(52779),o=a(57798);const __=l.__,i=e=>React.createElement(c.StecDiv,{className:"stec-list-manager-top-control-checkbox",onClick:e.onClick,style:e.style},React.createElement(c.StecInputCheckBox,{checked:e.checked,onClick:e.onClick}),e.label);const u=function(e){const[t,a]=(0,r.useState)(!1),l=(0,r.useRef)(!1);return React.createElement(React.Fragment,null,React.createElement(o.default,{isOpen:t,onClose:e=>{e.stopPropagation(),a(!1)},headerIcon:"fa-solid fa-triangle-exclamation",title:__("Are you sure you want to delete the selected items?","stachethemes_event_calendar_lite"),buttons:[React.createElement(s.default,{key:"delete",className:"red",label:__("Delete","stachethemes_event_calendar_lite"),onClick:()=>{l.current&&(l.current.onClick(),a(!1))}}),React.createElement(s.default,{key:"cancel",className:"yellow",label:__("Cancel","stachethemes_event_calendar_lite"),onClick:()=>{l.current=!1,a(!1)}})]}),React.createElement(c.StecDiv,{className:"stec-list-manager-top-control"},e.controls.map((t=>"checkbox"===t.type?React.createElement(i,(0,n.default)({key:t.id},t)):React.createElement(c.StecDiv,{key:t.id,className:`stec-list-manager-top-control-button ${t.color}`,onClick:()=>{"delete"===t.id?"delete"===t.id?(l.current={onClick:t.onClick},a(!0)):t.onClick(e.id):t.onClick()}},t.label)))))}},22008:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(8403);const c=({title:e,type:t,color:a,style:c,className:l})=>{const r=["stec-loader"];return"small"===t?r.push("stec-loader-small"):"small-wide"===t&&r.push("stec-loader-small-wide"),l&&r.push(l),React.createElement(n.StecDiv,{className:r.join(" "),style:c},"calendar-sprite"!==t&&React.createElement("i",{className:"fa-solid fa-cog",style:{color:a}}),"calendar-sprite"===t&&React.createElement(n.StecSpan,{className:"stec-loader-calendar-sprite"}),e&&React.createElement(n.StecSpan,{style:{color:a}},e))}},36263:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(8403),c=a(73772);const __=c.__;const l=function({pages:e,currentPage:t,onClick:a,prevLabel:c=__("Previous","stachethemes_event_calendar_lite"),nextLabel:l=__("Next","steec")}){return e<=1?"":React.createElement(n.StecDiv,{className:"stec-pagination"},t>1&&React.createElement(n.StecSpan,{onClick:()=>{const e=Math.max(1,t-1);e!==t&&a(e)}},c),[...Array(e).keys()].map((e=>{const c=e+1;return React.createElement(n.StecSpan,{className:""+(t===c?"active":""),key:`page-${e}`,onClick:()=>{t!==c&&a(c)}},c)})),t!==e&&React.createElement(n.StecSpan,{onClick:()=>{const n=Math.min(e,t+1);n!==t&&a(n)}},l))}},48596:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var n=a(8403),c=a(22819);const l=e=>{const t=["stec-section"];return e.className&&t.push(e.className),React.createElement(n.StecDiv,{className:t.join(" "),style:e.style},e.title&&React.createElement(n.StecSpan,{key:"title",className:"stec-section-title"},e.title),e.subtitle&&React.createElement(n.StecSpan,{key:"subittle",className:"stec-section-subtitle"},e.subtitle),(e.title||e.subtitle)&&React.createElement(c.default,null),e.children)}},22819:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(8403);const c=()=>React.createElement(n.StecDiv,{className:"stec-spacer"})},66831:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var n=a(8403);const c=function(e){return React.createElement(n.StecDiv,{onClick:e.onClick,title:e.title,className:"stec-tag",style:{color:e.color,backgroundColor:e.backgroundColor,...e.style}},e.label)}},2694:(e,t,a)=>{"use strict";var n=a(6925);function c(){}function l(){}l.resetWarningCache=c,e.exports=function(){function e(e,t,a,c,l,r){if(r!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:c};return a.PropTypes=a,a}},5556:(e,t,a)=>{e.exports=a(2694)()},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},9545:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var n=a(26878),c=a.n(n),l=a(73260),r=a.n(l),s=a(5556),o=a.n(s),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){this.renderPortal()}},{key:"componentDidUpdate",value:function(e){this.renderPortal()}},{key:"componentWillUnmount",value:function(){r().unmountComponentAtNode(this.defaultNode||this.props.node),this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null,this.portal=null}},{key:"renderPortal",value:function(e){this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode));var t=this.props.children;"function"==typeof this.props.children.type&&(t=c().cloneElement(this.props.children)),this.portal=r().unstable_renderSubtreeIntoContainer(this,t,this.props.node||this.defaultNode)}},{key:"render",value:function(){return null}}]),t}(c().Component);const d=u;u.propTypes={children:o().node.isRequired,node:o().any}},61246:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var n=a(26878),c=a.n(n),l=a(5556),r=a.n(l),s=a(73260),o=a.n(s),i=a(48743),u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"componentWillUnmount",value:function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null}},{key:"render",value:function(){return i.canUseDOM?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),o().createPortal(this.props.children,this.props.node||this.defaultNode)):null}}]),t}(c().Component);d.propTypes={children:r().node.isRequired,node:r().any};const m=d},33500:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var n=a(73260),c=a.n(n),l=a(61246),r=a(9545);const s=c().createPortal?l.default:r.default},48743:(e,t,a)=>{"use strict";a.r(t),a.d(t,{canUseDOM:()=>n});var n=!("undefined"==typeof window||!window.document||!window.document.createElement)}}]);