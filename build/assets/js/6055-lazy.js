(globalThis.webpackChunkstec=globalThis.webpackChunkstec||[]).push([[6055],{17790:(e,t,r)=>{var n=r(19852);function i(e){this.mode=n.MODE_8BIT_BYTE,this.data=e}i.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}},e.exports=i},10046:e=>{function t(){this.buffer=new Array,this.length=0}t.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var r=0;r<t;r++)this.putBit(1==(e>>>t-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},41537:e=>{e.exports={L:1,M:0,Q:3,H:2}},30501:(e,t,r)=>{var n=r(39341);function i(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var r=0;r<e.length&&0==e[r];)r++;this.num=new Array(e.length-r+t);for(var n=0;n<e.length-r;n++)this.num[n]=e[n+r]}i.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),r=0;r<this.getLength();r++)for(var o=0;o<e.getLength();o++)t[r+o]^=n.gexp(n.glog(this.get(r))+n.glog(e.get(o)));return new i(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=n.glog(this.get(0))-n.glog(e.get(0)),r=new Array(this.getLength()),o=0;o<this.getLength();o++)r[o]=this.get(o);for(o=0;o<e.getLength();o++)r[o]^=n.gexp(n.glog(e.get(o))+t);return new i(r,0).mod(e)}},e.exports=i},46641:(e,t,r)=>{var n=r(17790),i=r(12835),o=r(10046),a=r(38759),s=r(30501);function u(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var l=u.prototype;l.addData=function(e){var t=new n(e);this.dataList.push(t),this.dataCache=null},l.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},l.getModuleCount=function(){return this.moduleCount},l.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=i.getRSBlocks(e,this.errorCorrectLevel),r=new o,n=0,s=0;s<t.length;s++)n+=t[s].dataCount;for(s=0;s<this.dataList.length;s++){var u=this.dataList[s];r.put(u.mode,4),r.put(u.getLength(),a.getLengthInBits(u.mode,e)),u.write(r)}if(r.getLengthInBits()<=8*n)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},l.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++)this.modules[r][n]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=u.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},l.setupPositionProbePattern=function(e,t){for(var r=-1;r<=7;r++)if(!(e+r<=-1||this.moduleCount<=e+r))for(var n=-1;n<=7;n++)t+n<=-1||this.moduleCount<=t+n||(this.modules[e+r][t+n]=0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4)},l.getBestMaskPattern=function(){for(var e=0,t=0,r=0;r<8;r++){this.makeImpl(!0,r);var n=a.getLostPoint(this);(0==r||e>n)&&(e=n,t=r)}return t},l.createMovieClip=function(e,t,r){var n=e.createEmptyMovieClip(t,r);this.make();for(var i=0;i<this.modules.length;i++)for(var o=1*i,a=0;a<this.modules[i].length;a++){var s=1*a;this.modules[i][a]&&(n.beginFill(0,100),n.moveTo(s,o),n.lineTo(s+1,o),n.lineTo(s+1,o+1),n.lineTo(s,o+1),n.endFill())}return n},l.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},l.setupPositionAdjustPattern=function(){for(var e=a.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var r=0;r<e.length;r++){var n=e[t],i=e[r];if(null==this.modules[n][i])for(var o=-2;o<=2;o++)for(var s=-2;s<=2;s++)this.modules[n+o][i+s]=-2==o||2==o||-2==s||2==s||0==o&&0==s}},l.setupTypeNumber=function(e){for(var t=a.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!e&&1==(t>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=n}for(r=0;r<18;r++){n=!e&&1==(t>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=n}},l.setupTypeInfo=function(e,t){for(var r=this.errorCorrectLevel<<3|t,n=a.getBCHTypeInfo(r),i=0;i<15;i++){var o=!e&&1==(n>>i&1);i<6?this.modules[i][8]=o:i<8?this.modules[i+1][8]=o:this.modules[this.moduleCount-15+i][8]=o}for(i=0;i<15;i++){o=!e&&1==(n>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=o:i<9?this.modules[8][15-i-1+1]=o:this.modules[8][15-i-1]=o}this.modules[this.moduleCount-8][8]=!e},l.mapData=function(e,t){for(var r=-1,n=this.moduleCount-1,i=7,o=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var u=0;u<2;u++)if(null==this.modules[n][s-u]){var l=!1;o<e.length&&(l=1==(e[o]>>>i&1)),a.getMask(t,n,s-u)&&(l=!l),this.modules[n][s-u]=l,-1==--i&&(o++,i=7)}if((n+=r)<0||this.moduleCount<=n){n-=r,r=-r;break}}},u.PAD0=236,u.PAD1=17,u.createData=function(e,t,r){for(var n=i.getRSBlocks(e,t),s=new o,l=0;l<r.length;l++){var c=r[l];s.put(c.mode,4),s.put(c.getLength(),a.getLengthInBits(c.mode,e)),c.write(s)}var d=0;for(l=0;l<n.length;l++)d+=n[l].dataCount;if(s.getLengthInBits()>8*d)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*d+")");for(s.getLengthInBits()+4<=8*d&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;!(s.getLengthInBits()>=8*d||(s.put(u.PAD0,8),s.getLengthInBits()>=8*d));)s.put(u.PAD1,8);return u.createBytes(s,n)},u.createBytes=function(e,t){for(var r=0,n=0,i=0,o=new Array(t.length),u=new Array(t.length),l=0;l<t.length;l++){var c=t[l].dataCount,d=t[l].totalCount-c;n=Math.max(n,c),i=Math.max(i,d),o[l]=new Array(c);for(var f=0;f<o[l].length;f++)o[l][f]=255&e.buffer[f+r];r+=c;var h=a.getErrorCorrectPolynomial(d),p=new s(o[l],h.getLength()-1).mod(h);u[l]=new Array(h.getLength()-1);for(f=0;f<u[l].length;f++){var g=f+p.getLength()-u[l].length;u[l][f]=g>=0?p.get(g):0}}var v=0;for(f=0;f<t.length;f++)v+=t[f].totalCount;var m=new Array(v),w=0;for(f=0;f<n;f++)for(l=0;l<t.length;l++)f<o[l].length&&(m[w++]=o[l][f]);for(f=0;f<i;f++)for(l=0;l<t.length;l++)f<u[l].length&&(m[w++]=u[l][f]);return m},e.exports=u},12835:(e,t,r)=>{var n=r(41537);function i(e,t){this.totalCount=e,this.dataCount=t}i.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],i.getRSBlocks=function(e,t){var r=i.getRsBlockTable(e,t);if(null==r)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var n=r.length/3,o=new Array,a=0;a<n;a++)for(var s=r[3*a+0],u=r[3*a+1],l=r[3*a+2],c=0;c<s;c++)o.push(new i(u,l));return o},i.getRsBlockTable=function(e,t){switch(t){case n.L:return i.RS_BLOCK_TABLE[4*(e-1)+0];case n.M:return i.RS_BLOCK_TABLE[4*(e-1)+1];case n.Q:return i.RS_BLOCK_TABLE[4*(e-1)+2];case n.H:return i.RS_BLOCK_TABLE[4*(e-1)+3];default:return}},e.exports=i},39341:e=>{for(var t={glog:function(e){if(e<1)throw new Error("glog("+e+")");return t.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return t.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},r=0;r<8;r++)t.EXP_TABLE[r]=1<<r;for(r=8;r<256;r++)t.EXP_TABLE[r]=t.EXP_TABLE[r-4]^t.EXP_TABLE[r-5]^t.EXP_TABLE[r-6]^t.EXP_TABLE[r-8];for(r=0;r<255;r++)t.LOG_TABLE[t.EXP_TABLE[r]]=r;e.exports=t},19852:e=>{e.exports={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8}},38759:(e,t,r)=>{var n=r(19852),i=r(30501),o=r(39341),a=0,s=1,u=2,l=3,c=4,d=5,f=6,h=7,p={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;p.getBCHDigit(t)-p.getBCHDigit(p.G15)>=0;)t^=p.G15<<p.getBCHDigit(t)-p.getBCHDigit(p.G15);return(e<<10|t)^p.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;p.getBCHDigit(t)-p.getBCHDigit(p.G18)>=0;)t^=p.G18<<p.getBCHDigit(t)-p.getBCHDigit(p.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return p.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,r){switch(e){case a:return(t+r)%2==0;case s:return t%2==0;case u:return r%3==0;case l:return(t+r)%3==0;case c:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case d:return t*r%2+t*r%3==0;case f:return(t*r%2+t*r%3)%2==0;case h:return(t*r%3+(t+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new i([1],0),r=0;r<e;r++)t=t.multiply(new i([1,o.gexp(r)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case n.MODE_NUMBER:return 10;case n.MODE_ALPHA_NUM:return 9;case n.MODE_8BIT_BYTE:case n.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case n.MODE_NUMBER:return 12;case n.MODE_ALPHA_NUM:return 11;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case n.MODE_NUMBER:return 14;case n.MODE_ALPHA_NUM:return 13;case n.MODE_8BIT_BYTE:return 16;case n.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),r=0,n=0;n<t;n++)for(var i=0;i<t;i++){for(var o=0,a=e.isDark(n,i),s=-1;s<=1;s++)if(!(n+s<0||t<=n+s))for(var u=-1;u<=1;u++)i+u<0||t<=i+u||0==s&&0==u||a==e.isDark(n+s,i+u)&&o++;o>5&&(r+=3+o-5)}for(n=0;n<t-1;n++)for(i=0;i<t-1;i++){var l=0;e.isDark(n,i)&&l++,e.isDark(n+1,i)&&l++,e.isDark(n,i+1)&&l++,e.isDark(n+1,i+1)&&l++,0!=l&&4!=l||(r+=3)}for(n=0;n<t;n++)for(i=0;i<t-6;i++)e.isDark(n,i)&&!e.isDark(n,i+1)&&e.isDark(n,i+2)&&e.isDark(n,i+3)&&e.isDark(n,i+4)&&!e.isDark(n,i+5)&&e.isDark(n,i+6)&&(r+=40);for(i=0;i<t;i++)for(n=0;n<t-6;n++)e.isDark(n,i)&&!e.isDark(n+1,i)&&e.isDark(n+2,i)&&e.isDark(n+3,i)&&e.isDark(n+4,i)&&!e.isDark(n+5,i)&&e.isDark(n+6,i)&&(r+=40);var c=0;for(i=0;i<t;i++)for(n=0;n<t;n++)e.isDark(n,i)&&c++;return r+=10*(Math.abs(100*c/t/t-50)/5)}};e.exports=p},90300:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ColorScheme:()=>J,Comments:()=>z,CommentsCount:()=>M,CommentsOrderBy:()=>ee,CustomChat:()=>F,EmbeddedPost:()=>R,EmbeddedVideo:()=>N,FacebookContext:()=>b,FacebookProvider:()=>E,Fields:()=>ie,Group:()=>x,Like:()=>A,LikeAction:()=>V,LikeLayout:()=>W,LikeSize:()=>X,LoginButton:()=>S,LoginStatus:()=>g,MessageUs:()=>j,MessengerCheckbox:()=>H,MessengerColor:()=>ne,MessengerSize:()=>re,Page:()=>O,Parser:()=>T,Save:()=>G,SendToMessenger:()=>q,Share:()=>U,ShareButton:()=>B,useFacebook:()=>C,useLogin:()=>P,useLoginStatus:()=>ae,useProfile:()=>se,useShare:()=>D,useSubscribe:()=>oe});var n,i,o=r(26878),a=r.n(o),s=function(e,t){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},s(e,t)},u=function(){return u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)};function l(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}function c(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))}function d(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=t.call(e,a)}catch(e){s=[6,e],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}function f(e,t,r){if(r||2===arguments.length)for(var n,i=0,o=t.length;i<o;i++)!n&&i in t||(n||(n=Array.prototype.slice.call(t,0,i)),n[i]=t[i]);return e.concat(n||Array.prototype.slice.call(t))}(i=n||(n={})).CONNECTED="connected",i.AUTHORIZATION_EXPIRED="authorization_expired",i.NOT_AUTHORIZED="not_authorized",i.UNKNOWN="unknown";var h,p,g=n,v=function(e){function t(t,r,n){var i=e.call(this,t)||this;return i.code=r,i.type=n,i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t}(Error);!function(e){e.GET="get",e.POST="post",e.DELETE="delete"}(h||(h={})),function(e){e.UI="ui",e.API="api",e.LOGIN="login",e.LOGOUT="logout",e.GET_LOGIN_STATUS="getLoginStatus",e.GET_AUTH_RESPONSE="getAuthResponse"}(p||(p={}));var m,w={domain:"connect.facebook.net",version:"v15.0",cookie:!1,status:!1,xfbml:!1,language:"en_US",frictionlessRequests:!1,debug:!1,chatSupport:!1,autoLogAppEvents:!0,lazy:!1},y=function(){function e(e){if(!e.appId)throw new Error("You need to set appId");this.options=u(u({},w),e),this.options.lazy||this.init()}return e.prototype.getAppId=function(){return this.options.appId},e.prototype.getFB=function(){return window.FB},e.prototype.init=function(){return c(this,void 0,void 0,(function(){var e=this;return d(this,(function(t){return this.loadingPromise||(this.loadingPromise=new Promise((function(t){var r=e.options,n=r.domain,i=r.language,o=r.debug,a=r.chatSupport,s=l(r,["domain","language","debug","chatSupport"]);if(window.fbAsyncInit=function(){window.FB.init({appId:s.appId,version:s.version,cookie:s.cookie,status:s.status,xfbml:s.xfbml,frictionlessRequests:s.frictionlessRequests}),t(e)},window.document.getElementById("facebook-jssdk"))return t(e);var u=window.document.createElement("script");u.id="facebook-jssdk",u.async=!0,u.defer=!0,u.crossOrigin="anonymous",u.src="https://".concat(n,"/").concat(i,"/sdk").concat(a?"/xfbml.customerchat":"").concat(o?"/debug":"",".js"),window.document.body.appendChild(u)}))),[2,this.loadingPromise]}))}))},e.prototype.process=function(e,t,r){return void 0===t&&(t=[]),void 0===r&&(r=[]),c(this,void 0,void 0,(function(){var n;return d(this,(function(i){switch(i.label){case 0:return[4,this.init()];case 1:return i.sent(),n=this.getFB(),[2,new Promise((function(i,o){n[e].apply(n,f(f(f([],t,!1),[function(t){if(t)if(t&&"error"in t){var r=t.error,n=r.code,a=r.type,s=r.message;o(new v(s,n,a))}else i(t);else{if(e===p.UI)return;o(new Error("Response is undefined"))}}],!1),r,!1))}))]}}))}))},e.prototype.ui=function(e){return c(this,void 0,void 0,(function(){return d(this,(function(t){return[2,this.process(p.UI,[e])]}))}))},e.prototype.api=function(e,t,r){return void 0===t&&(t=h.GET),void 0===r&&(r={}),c(this,void 0,void 0,(function(){return d(this,(function(n){return[2,this.process(p.API,[e,t,r])]}))}))},e.prototype.login=function(e){return c(this,void 0,void 0,(function(){var t,r,n,i,o,a,s;return d(this,(function(u){return t=e.scope,r=e.authType,n=void 0===r?[]:r,i=e.returnScopes,o=e.rerequest,a=e.reauthorize,s={scope:t},i&&(s.return_scopes=!0),o&&n.push("rerequest"),a&&n.push("reauthenticate"),n.length&&(s.auth_type=n.join(",")),[2,this.process(p.LOGIN,[],[s])]}))}))},e.prototype.logout=function(){return c(this,void 0,void 0,(function(){return d(this,(function(e){return[2,this.process(p.LOGOUT)]}))}))},e.prototype.getLoginStatus=function(){return c(this,void 0,void 0,(function(){return d(this,(function(e){return[2,this.process(p.GET_LOGIN_STATUS)]}))}))},e.prototype.getAuthResponse=function(){return c(this,void 0,void 0,(function(){return d(this,(function(e){return[2,this.process(p.GET_AUTH_RESPONSE)]}))}))},e.prototype.getTokenDetail=function(e){return c(this,void 0,void 0,(function(){var t;return d(this,(function(r){switch(r.label){case 0:return(null==e?void 0:e.status)===g.CONNECTED?[2,e.authResponse]:[4,this.getLoginStatus()];case 1:if((t=r.sent()).status===g.CONNECTED)return[2,t.authResponse];throw new Error("Token is undefined")}}))}))},e.prototype.getProfile=function(e){return c(this,void 0,void 0,(function(){return d(this,(function(t){return[2,this.api("/me",h.GET,e)]}))}))},e.prototype.getTokenDetailWithProfile=function(e,t){return c(this,void 0,void 0,(function(){var r;return d(this,(function(n){switch(n.label){case 0:return[4,this.getTokenDetail(t)];case 1:return r=n.sent(),[4,this.getProfile(e)];case 2:return[2,{profile:n.sent(),tokenDetail:r}]}}))}))},e.prototype.getToken=function(){return c(this,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return[4,this.getTokenDetail()];case 1:return[2,e.sent().accessToken]}}))}))},e.prototype.getUserId=function(){return c(this,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return[4,this.getTokenDetail()];case 1:return[2,e.sent().userID]}}))}))},e.prototype.sendInvite=function(e,t){return c(this,void 0,void 0,(function(){return d(this,(function(r){return[2,this.ui(u({to:e,method:"apprequests"},t))]}))}))},e.prototype.postAction=function(e,t,r,n,i){return void 0===i&&(i=!1),c(this,void 0,void 0,(function(){var o;return d(this,(function(a){return o="/me/".concat(e,":").concat(t,"?").concat(r,"=").concat(encodeURIComponent(n)),!0===i&&(o+="&no_feed_story=true"),[2,this.api(o,h.POST)]}))}))},e.prototype.getPermissions=function(){return c(this,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return[4,this.api("/me/permissions")];case 1:return[2,e.sent().data]}}))}))},e.prototype.hasPermissions=function(e){return c(this,void 0,void 0,(function(){var t;return d(this,(function(r){switch(r.label){case 0:return[4,this.getPermissions()];case 1:return t=r.sent(),[2,e.filter((function(e){return!!t.find((function(t){var r=t.permission;return"granted"===t.status&&r===e}))})).length===e.length]}}))}))},e.prototype.subscribe=function(e,t){return c(this,void 0,void 0,(function(){var r=this;return d(this,(function(n){switch(n.label){case 0:return[4,this.init()];case 1:return n.sent(),this.getFB().Event.subscribe(e,t),[2,function(){return r.unsubscribe(e,t)}]}}))}))},e.prototype.unsubscribe=function(e,t){return c(this,void 0,void 0,(function(){return d(this,(function(r){switch(r.label){case 0:return[4,this.init()];case 1:return r.sent(),this.getFB().Event.unsubscribe(e,t),[2]}}))}))},e.prototype.parse=function(e){return c(this,void 0,void 0,(function(){return d(this,(function(t){switch(t.label){case 0:return[4,this.init()];case 1:return t.sent(),void 0===e?this.getFB().XFBML.parse():this.getFB().XFBML.parse(e),[2]}}))}))},e.prototype.getRequests=function(){return c(this,void 0,void 0,(function(){return d(this,(function(e){return[2,this.api("/me/apprequests")]}))}))},e.prototype.removeRequest=function(e){return c(this,void 0,void 0,(function(){return d(this,(function(t){return[2,this.api(e,h.DELETE)]}))}))},e.prototype.setAutoGrow=function(){return c(this,void 0,void 0,(function(){return d(this,(function(e){switch(e.label){case 0:return[4,this.init()];case 1:return e.sent(),this.getFB().Canvas.setAutoGrow(),[2]}}))}))},e.prototype.paySimple=function(e,t){return void 0===t&&(t=1),c(this,void 0,void 0,(function(){return d(this,(function(r){return[2,this.ui({method:"pay",action:"purchaseitem",product:e,quantity:t})]}))}))},e.prototype.pay=function(e,t){return c(this,void 0,void 0,(function(){return d(this,(function(r){return[2,this.ui(u({method:"pay",action:"purchaseitem",product:e},t))]}))}))},e}(),b=(0,o.createContext)(void 0);function E(e){var t=e.children,r=l(e,["children"]),n=(0,o.useState)(!0),i=n[0],s=n[1],u=(0,o.useState)(!1),f=u[0],h=u[1],p=(0,o.useState)(),g=p[0],v=p[1];function w(){return c(this,void 0,void 0,(function(){var e;return d(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,3,4]),m?[2,m.init()]:(h(!1),s(!0),[4,(m=new y(r)).init()]);case 1:return t.sent(),h(!0),[3,4];case 2:return e=t.sent(),v(e),[3,4];case 3:return s(!1),[7];case 4:return[2,m]}}))}))}(0,o.useEffect)((function(){r.lazy||w()}),[]);var E={isLoading:i,error:g,init:w,api:f?m:void 0,parse:function(e){return c(this,void 0,void 0,(function(){var t;return d(this,(function(r){switch(r.label){case 0:return[4,w()];case 1:return(t=r.sent())?[4,t.parse(e)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}}))}))}};return a().createElement(b.Provider,{value:E},t)}function C(e){void 0===e&&(e={});var t=e.lazy,r=void 0!==t&&t,n=(0,o.useContext)(b);if(!n)throw new Error("useFacebook must be used within a FacebookProvider");return(0,o.useEffect)((function(){r||n.init()}),[r]),n}var _=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.inline,n=e.children,i=l(e,["inline","children"]),o=r?"span":"div";return a().createElement(o,u({},i,{ref:t}),n)}))),T=(0,o.memo)((function(e){var t=e.children,r=e.inline,n=l(e,["children","inline"]),i=C().parse,s=(0,o.useState)(null),c=s[0],d=s[1],f=(0,o.useCallback)((function(e){d(e)}),[]);return(0,o.useEffect)((function(){c&&i(c)}),[c]),a().createElement(_,u({inline:r},n,{ref:f}),t)})),L=!("undefined"==typeof window||!window.document||!window.document.createElement);function k(){return L?window.location.href:"https://www.facebook.com"}var A=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.href,n=void 0===r?k():r,i=e.layout,o=e.colorScheme,s=e.action,c=e.showFaces,d=e.share,f=e.children,h=e.width,p=e.size,g=e.kidDirectedSite,v=e.referral,m=e.lazy,w=l(e,["href","layout","colorScheme","action","showFaces","share","children","width","size","kidDirectedSite","referral","lazy"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-like","data-ref":v,"data-href":n,"data-layout":i,"data-colorscheme":o,"data-action":s,"data-show-faces":c,"data-share":d,"data-width":h,"data-size":p,"data-lazy":m,"data-kid-directed-site":g},w,{ref:t}),f))})));function D(){var e=C().init,t=(0,o.useState)(!1),r=t[0],n=t[1],i=(0,o.useState)(void 0),a=i[0],s=i[1];return{isLoading:r,error:a,share:function(t){return c(this,void 0,void 0,(function(){var r,i,o,a,c,f,h;return d(this,(function(d){switch(d.label){case 0:return d.trys.push([0,2,3,4]),r=t.href,i=t.display,o=t.hashtag,a=t.redirectUri,c=l(t,["href","display","hashtag","redirectUri"]),s(void 0),n(!0),[4,e()];case 1:if(!(f=d.sent()))throw new Error("Facebook API is not initialized");return[2,f.ui((p=u({method:"share",href:r,display:i,app_id:f.getAppId(),hashtag:o,redirect_uri:a},c),Object.fromEntries(Object.entries(p).filter((function(e){return void 0!==e[1]})))))];case 2:return h=d.sent(),s(h),[3,4];case 3:return n(!1),[7];case 4:return[2]}var p}))}))}}}function B(e){var t=e.children,r=e.asChild,n=void 0===r?"button":r;e.disabled;var i=e.href,o=e.display,s=e.hashtag,c=e.redirectUri,d=l(e,["children","asChild","disabled","href","display","hashtag","redirectUri"]),f=D(),h=f.isLoading,p=f.share;return a().createElement(n,u({onClick:function(){h||p({href:i,display:o,hashtag:s,redirectUri:c})},disabled:h},d),t)}var O=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.style,n=e.href,i=void 0===n?k():n,o=e.tabs,s=e.hideCover,c=e.width,d=e.height,f=e.showFacepile,h=e.hideCTA,p=e.smallHeader,g=e.adaptContainerWidth,v=e.children,m=e.lazy,w=l(e,["style","href","tabs","hideCover","width","height","showFacepile","hideCTA","smallHeader","adaptContainerWidth","children","lazy"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-page",style:r,"data-tabs":o,"data-hide-cover":s,"data-show-facepile":f,"data-hide-cta":h,"data-href":i,"data-small-header":p,"data-adapt-container-width":g,"data-height":d,"data-width":c,"data-lazy":m},w,{ref:t}),v))})));function P(){var e=C(),t=e.api,r=e.isLoading,n=(0,o.useState)(void 0),i=n[0],a=n[1],s=(0,o.useState)(!1),u=s[0],l=s[1],f=(0,o.useState)(),h=f[0],p=f[1];return{login:function(e,r){return c(this,void 0,void 0,(function(){var n,i;return d(this,(function(o){switch(o.label){case 0:if(o.trys.push([0,2,3,4]),!t)throw new Error("Facebook API is not initialized");return l(!0),[4,t.login(e)];case 1:if((n=o.sent()).status!==g.CONNECTED)throw new Error("Unauthorized user");return p(n),null==r||r(n),[2,n];case 2:throw i=o.sent(),a(i),i;case 3:return l(!1),[7];case 4:return[2]}}))}))},error:i,isLoading:r||u,status:null==h?void 0:h.status}}function S(e){var t=e.children,r=e.asChild,n=void 0===r?"button":r;e.disabled;var i=e.scope,o=e.returnScopes,s=e.authType,f=e.rerequest,h=e.reauthorize,p=e.onError,g=e.onSuccess,v=l(e,["children","asChild","disabled","scope","returnScopes","authType","rerequest","reauthorize","onError","onSuccess"]),m=P(),w=m.isLoading,y=m.login;return a().createElement(n,u({onClick:function(){return c(this,void 0,void 0,(function(){var e,t;return d(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),w?[2]:[4,y({scope:i,returnScopes:o,authType:s,rerequest:f,reauthorize:h})];case 1:return e=r.sent(),null==g||g(e),[3,3];case 2:return t=r.sent(),null==p||p(t),[3,3];case 3:return[2]}}))}))},disabled:w},v),t)}var I,R=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.href,n=e.width,i=e.showText,o=e.lazy,s=e.children,c=l(e,["href","width","showText","lazy","children"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-post","data-href":r,"data-width":n,"data-lazy":o,"data-show-text":i},c,{ref:t}),s))}))),N=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.href,n=e.width,i=e.showText,o=e.allowFullScreen,s=e.autoPlay,c=e.lazy,d=e.showCaptions,f=e.children,h=l(e,["href","width","showText","allowFullScreen","autoPlay","lazy","showCaptions","children"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-video","data-href":r,"data-width":n,"data-show-text":i,"data-show-captions":d,"data-autoplay":s,"data-lazy":c,"data-allowfullscreen":o},h,{ref:t}),f))}))),z=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.colorScheme,n=e.href,i=void 0===n?k():n,o=e.numPosts,s=e.orderBy,c=e.width,d=e.children,f=e.mobile,h=e.lazy,p=l(e,["colorScheme","href","numPosts","orderBy","width","children","mobile","lazy"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-comments","data-colorscheme":r,"data-numposts":o,"data-href":i,"data-order-by":s,"data-width":c,"data-skin":r,"data-mobile":f,"data-lazy":h},p,{ref:t}),d))}))),M=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.href,n=void 0===r?k():r,i=e.children,o=l(e,["href","children"]);return a().createElement(T,{inline:!0},a().createElement("span",u({className:"fb-comments-count","data-href":n},o,{ref:t}),i))}))),x=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.style,n=e.href,i=void 0===n?k():n,o=e.width,s=e.lazy,c=e.showSocialContext,d=e.showMetaData,f=e.children,h=e.skin,p=l(e,["style","href","width","lazy","showSocialContext","showMetaData","children","skin"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-group",style:r,"data-href":i,"data-width":o,"data-show-social-context":c,"data-show-metadata":d,"data-skin":h,"data-lazy":s},p,{ref:t}),f))}))),G=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.style,n=e.uri,i=void 0===n?k():n,o=e.lazy,s=e.children,c=l(e,["style","uri","lazy","children"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-save",style:r,"data-uri":i,"data-lazy":o},c,{ref:t}),s))}))),U=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.style,n=e.href,i=void 0===n?k():n,o=e.lazy,s=e.layout,c=e.size,d=e.children,f=l(e,["style","href","lazy","layout","size","children"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-share-button",style:r,"data-href":i,"data-lazy":o,"data-size":c,"data-layout":s},f,{ref:t}),d))}))),F=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.children,n=e.pageId,i=e.themeColor,o=e.loggedInGreeting,s=e.loggedOutGreeting,c=e.dataRef,d=e.greetingDialogDisplay,f=e.greetingDialogDelay,h=e.minimized,p=l(e,["children","pageId","themeColor","loggedInGreeting","loggedOutGreeting","dataRef","greetingDialogDisplay","greetingDialogDelay","minimized"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-customerchat",page_id:n,theme_color:i,logged_in_greeting:o,logged_out_greeting:s,greeting_dialog_display:d,greeting_dialog_delay:f,"data-ref":c,minimized:h},p,{ref:t}),r))}))),j=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.color,n=e.messengerAppId,i=e.pageId,o=e.children,s=e.size,c=e.dataRef,d=l(e,["color","messengerAppId","pageId","children","size","dataRef"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-messengermessageus",messenger_app_id:n,page_id:i,"data-color":r,"data-size":s,"data-ref":c},d,{ref:t}),o))}))),H=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.origin,n=e.prechecked,i=e.allowLogin,o=e.userRef,s=e.messengerAppId,c=e.pageId,d=e.children,f=e.size,h=e.centerAlign,p=e.skin,g=l(e,["origin","prechecked","allowLogin","userRef","messengerAppId","pageId","children","size","centerAlign","skin"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-messenger-checkbox",messenger_app_id:s,page_id:c,size:f,origin:r,user_ref:o,prechecked:n,allow_login:i,skin:p,center_align:h},g,{ref:t}),d))}))),q=(0,o.memo)((0,o.forwardRef)((function(e,t){var r=e.color,n=e.messengerAppId,i=e.pageId,o=e.children,s=e.dataRef,c=e.size,d=e.enforceLogin,f=e.ctaText,h=l(e,["color","messengerAppId","pageId","children","dataRef","size","enforceLogin","ctaText"]);return a().createElement(T,null,a().createElement("div",u({className:"fb-send-to-messenger",messenger_app_id:n,page_id:i,"data-color":r,"data-size":c,"data-ref":s,enforce_login:d,cta_text:f},h,{ref:t}),o))})));!function(e){e.SMALL="small",e.LARGE="large"}(I||(I={}));var K,X=I;!function(e){e.STANDARD="standard",e.BUTTON_COUNT="button_count",e.BUTTON="button",e.BOX_COUNT="box_count"}(K||(K={}));var Q,W=K;!function(e){e.LIGHT="light",e.DARK="dark"}(Q||(Q={}));var Y,J=Q;!function(e){e.LIKE="like",e.RECOMMEND="recommend"}(Y||(Y={}));var Z,V=Y;!function(e){e.SOCIAL="social",e.REVERSE_TIME="reverse_time",e.TIME="time"}(Z||(Z={}));var $,ee=Z;!function(e){e.SMALL="small",e.MEDIUM="medium",e.STANDARD="standard",e.LARGE="large",e.XLARGE="xlarge"}($||($={}));var te,re=$;!function(e){e.BLUE="blue",e.WHITE="white"}(te||(te={}));var ne=te,ie=["id","first_name","last_name","middle_name","name","name_format","picture","short_name","email"];function oe(e,t){var r=this,n=(0,o.useState)(void 0),i=n[0],a=n[1],s=C().init,u=(0,o.useCallback)((function(e){a(e),null==t||t(i)}),[t]),l=(0,o.useCallback)((function(){return c(r,void 0,void 0,(function(){var t;return d(this,(function(r){switch(r.label){case 0:return[4,s()];case 1:return(t=r.sent())?[4,t.subscribe(e,u)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}}))}))}),[e,u]),f=(0,o.useCallback)((function(){return c(r,void 0,void 0,(function(){var t;return d(this,(function(r){switch(r.label){case 0:return[4,s()];case 1:return(t=r.sent())?[4,t.unsubscribe(e,u)]:[3,3];case 2:r.sent(),r.label=3;case 3:return[2]}}))}))}),[e,u]);return(0,o.useEffect)((function(){return l(),function(){f()}}),[l]),i}function ae(){var e=C().init,t=(0,o.useState)(!0),r=t[0],n=t[1],i=(0,o.useState)(void 0),a=i[0],s=i[1],u=(0,o.useState)(g.UNKNOWN),l=u[0],f=u[1];return oe("auth.statusChange",(0,o.useCallback)((function(e){f(e.status)}),[])),(0,o.useEffect)((function(){!function(){c(this,void 0,void 0,(function(){var t,r,i;return d(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,4,5]),n(!0),[4,e()];case 1:if(!(t=o.sent()))throw new Error("Facebook API is not initialized");return[4,t.getLoginStatus()];case 2:return r=o.sent().status,f(r),[3,5];case 3:return i=o.sent(),s(i),[3,5];case 4:return n(!1),[7];case 5:return[2]}}))}))}()}),[]),{isLoading:r,error:a,status:l}}function se(e){var t=C().init,r=ae().status,n=(0,o.useState)(!0),i=n[0],a=n[1],s=(0,o.useState)(void 0),u=s[0],l=s[1],f=(0,o.useState)(void 0),h=f[0],p=f[1];return(0,o.useEffect)((function(){!function(){c(this,void 0,void 0,(function(){var n,i,o;return d(this,(function(s){switch(s.label){case 0:return s.trys.push([0,4,5,6]),p(void 0),a(!0),[4,t()];case 1:if(!(n=s.sent()))throw new Error("Facebook API is not initialized");return r!==g.CONNECTED?[3,3]:[4,n.getProfile({fields:e})];case 2:i=s.sent(),l(i),s.label=3;case 3:return[3,6];case 4:return o=s.sent(),p(o),[3,6];case 5:return a(!1),[7];case 6:return[2]}}))}))}()}),[r,e]),{isLoading:i,error:h,profile:u}}},41853:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=s(r(5556)),o=r(26878),a=s(o);function s(e){return e&&e.__esModule?e:{default:e}}var u={bgColor:i.default.oneOfType([i.default.object,i.default.string]).isRequired,bgD:i.default.string.isRequired,fgColor:i.default.oneOfType([i.default.object,i.default.string]).isRequired,fgD:i.default.string.isRequired,size:i.default.number.isRequired,title:i.default.string,viewBoxSize:i.default.number.isRequired,xmlns:i.default.string},l=(0,o.forwardRef)((function(e,t){var r=e.bgColor,i=e.bgD,o=e.fgD,s=e.fgColor,u=e.size,l=e.title,c=e.viewBoxSize,d=e.xmlns,f=void 0===d?"http://www.w3.org/2000/svg":d,h=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["bgColor","bgD","fgD","fgColor","size","title","viewBoxSize","xmlns"]);return a.default.createElement("svg",n({},h,{height:u,ref:t,viewBox:"0 0 "+c+" "+c,width:u,xmlns:f}),l?a.default.createElement("title",null,l):null,a.default.createElement("path",{d:i,fill:r}),a.default.createElement("path",{d:o,fill:s}))}));l.displayName="QRCodeSvg",l.propTypes=u,t.default=l},194:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.QRCode=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=c(r(5556)),o=c(r(41537)),a=c(r(46641)),s=r(26878),u=c(s),l=c(r(41853));function c(e){return e&&e.__esModule?e:{default:e}}var d={bgColor:i.default.oneOfType([i.default.object,i.default.string]),fgColor:i.default.oneOfType([i.default.object,i.default.string]),level:i.default.string,size:i.default.number,value:i.default.string.isRequired},f=(0,s.forwardRef)((function(e,t){var r=e.bgColor,i=void 0===r?"#FFFFFF":r,s=e.fgColor,c=void 0===s?"#000000":s,d=e.level,f=void 0===d?"L":d,h=e.size,p=void 0===h?256:h,g=e.value,v=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["bgColor","fgColor","level","size","value"]),m=new a.default(-1,o.default[f]);m.addData(g),m.make();var w=m.modules;return u.default.createElement(l.default,n({},v,{bgColor:i,bgD:w.map((function(e,t){return e.map((function(e,r){return e?"":"M "+r+" "+t+" l 1 0 0 1 -1 0 Z"})).join(" ")})).join(" "),fgColor:c,fgD:w.map((function(e,t){return e.map((function(e,r){return e?"M "+r+" "+t+" l 1 0 0 1 -1 0 Z":""})).join(" ")})).join(" "),ref:t,size:p,viewBoxSize:w.length}))}));t.QRCode=f,f.displayName="QRCode",f.propTypes=d,t.default=f}}]);