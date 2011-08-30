
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
      arguments.callee = arguments.callee.caller;
      console.log( Array.prototype.slice.call(arguments) );
  }
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/** Name:    Highslide JS
 * Version: 4.1.9 (2010-07-05)
 * Author:  Torstein Hønsi
 * Support: www.highslide.com/support
 * License: www.highslide.com/#license
 */
if(!hs){var hs={lang:{cssDirection:"ltr",loadingText:"Loading...",loadingTitle:"Click to cancel",focusTitle:"Click to bring to front",fullExpandTitle:"Expand to actual size (f)",creditsText:"Powered by <i>Highslide JS</i>",creditsTitle:"Go to the Highslide JS homepage",restoreTitle:"Click to close image, click and drag to move. Use arrow keys for next and previous."},graphicsDir:"highslide/graphics/",expandCursor:"zoomin.cur",restoreCursor:"zoomout.cur",expandDuration:250,restoreDuration:250,marginLeft:15,marginRight:15,marginTop:15,marginBottom:15,zIndexCounter:1001,loadingOpacity:0.75,allowMultipleInstances:true,numberOfImagesToPreload:5,outlineWhileAnimating:2,outlineStartOffset:3,padToMinWidth:false,fullExpandPosition:"bottom right",fullExpandOpacity:1,showCredits:true,creditsHref:"http://highslide.com/",creditsTarget:"_self",enableKeyListener:true,openerTagNames:["a"],dragByHeading:true,minWidth:200,minHeight:200,allowSizeReduction:true,outlineType:"drop-shadow",preloadTheseImages:[],continuePreloading:true,expanders:[],overrides:["allowSizeReduction","useBox","outlineType","outlineWhileAnimating","captionId","captionText","captionEval","captionOverlay","headingId","headingText","headingEval","headingOverlay","creditsPosition","dragByHeading","width","height","wrapperClassName","minWidth","minHeight","maxWidth","maxHeight","pageOrigin","slideshowGroup","easing","easingClose","fadeInOut","src"],overlays:[],idCounter:0,oPos:{x:["leftpanel","left","center","right","rightpanel"],y:["above","top","middle","bottom","below"]},mouse:{},headingOverlay:{},captionOverlay:{},timers:[],pendingOutlines:{},clones:{},onReady:[],uaVersion:/Trident\/4\.0/.test(navigator.userAgent)?8:parseFloat((navigator.userAgent.toLowerCase().match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1]),ie:(document.all&&!window.opera),safari:/Safari/.test(navigator.userAgent),geckoMac:/Macintosh.+rv:1\.[0-8].+Gecko/.test(navigator.userAgent),$:function(a){if(a){return document.getElementById(a)}},push:function(a,b){a[a.length]=b},createElement:function(a,f,e,d,c){var b=document.createElement(a);if(f){hs.extend(b,f)}if(c){hs.setStyles(b,{padding:0,border:"none",margin:0})}if(e){hs.setStyles(b,e)}if(d){d.appendChild(b)}return b},extend:function(b,c){for(var a in c){b[a]=c[a]}return b},setStyles:function(b,c){for(var a in c){if(hs.ie&&a=="opacity"){if(c[a]>0.99){b.style.removeAttribute("filter")}else{b.style.filter="alpha(opacity="+(c[a]*100)+")"}}else{b.style[a]=c[a]}}},animate:function(f,a,d){var c,g,j;if(typeof d!="object"||d===null){var i=arguments;d={duration:i[2],easing:i[3],complete:i[4]}}if(typeof d.duration!="number"){d.duration=250}d.easing=Math[d.easing]||Math.easeInQuad;d.curAnim=hs.extend({},a);for(var b in a){var h=new hs.fx(f,d,b);c=parseFloat(hs.css(f,b))||0;g=parseFloat(a[b]);j=b!="opacity"?"px":"";h.custom(c,g,j)}},css:function(a,c){if(a.style[c]){return a.style[c]}else{if(document.defaultView){return document.defaultView.getComputedStyle(a,null).getPropertyValue(c)}else{if(c=="opacity"){c="filter"}var b=a.currentStyle[c.replace(/\-(\w)/g,function(e,d){return d.toUpperCase()})];if(c=="filter"){b=b.replace(/alpha\(opacity=([0-9]+)\)/,function(e,d){return d/100})}return b===""?1:b}}},getPageSize:function(){var f=document,b=window,e=f.compatMode&&f.compatMode!="BackCompat"?f.documentElement:f.body;var c=hs.ie?e.clientWidth:(f.documentElement.clientWidth||self.innerWidth),a=hs.ie?e.clientHeight:self.innerHeight;hs.page={width:c,height:a,scrollLeft:hs.ie?e.scrollLeft:pageXOffset,scrollTop:hs.ie?e.scrollTop:pageYOffset};return hs.page},getPosition:function(a){var b={x:a.offsetLeft,y:a.offsetTop};while(a.offsetParent){a=a.offsetParent;b.x+=a.offsetLeft;b.y+=a.offsetTop;if(a!=document.body&&a!=document.documentElement){b.x-=a.scrollLeft;b.y-=a.scrollTop}}return b},expand:function(b,g,d,c){if(!b){b=hs.createElement("a",null,{display:"none"},hs.container)}if(typeof b.getParams=="function"){return g}try{new hs.Expander(b,g,d);return false}catch(f){return true}},focusTopmost:function(){var c=0,b=-1,a=hs.expanders,e,f;for(var d=0;d<a.length;d++){e=a[d];if(e){f=e.wrapper.style.zIndex;if(f&&f>c){c=f;b=d}}}if(b==-1){hs.focusKey=-1}else{a[b].focus()}},getParam:function(b,d){b.getParams=b.onclick;var c=b.getParams?b.getParams():null;b.getParams=null;return(c&&typeof c[d]!="undefined")?c[d]:(typeof hs[d]!="undefined"?hs[d]:null)},getSrc:function(b){var c=hs.getParam(b,"src");if(c){return c}return b.href},getNode:function(e){var c=hs.$(e),d=hs.clones[e],b={};if(!c&&!d){return null}if(!d){d=c.cloneNode(true);d.id="";hs.clones[e]=d;return c}else{return d.cloneNode(true)}},discardElement:function(a){if(a){hs.garbageBin.appendChild(a)}hs.garbageBin.innerHTML=""},transit:function(a,d){var b=d||hs.getExpander();d=b;if(hs.upcoming){return false}else{hs.last=b}hs.removeEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler);try{hs.upcoming=a;a.onclick()}catch(c){hs.last=hs.upcoming=null}try{d.close()}catch(c){}return false},previousOrNext:function(a,c){var b=hs.getExpander(a);if(b){return hs.transit(b.getAdjacentAnchor(c),b)}else{return false}},previous:function(a){return hs.previousOrNext(a,-1)},next:function(a){return hs.previousOrNext(a,1)},keyHandler:function(a){if(!a){a=window.event}if(!a.target){a.target=a.srcElement}if(typeof a.target.form!="undefined"){return true}var b=hs.getExpander();var c=null;switch(a.keyCode){case 70:if(b){b.doFullExpand()}return true;case 32:case 34:case 39:case 40:c=1;break;case 8:case 33:case 37:case 38:c=-1;break;case 27:case 13:c=0}if(c!==null){hs.removeEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler);if(!hs.enableKeyListener){return true}if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}if(b){if(c==0){b.close()}else{hs.previousOrNext(b.key,c)}return false}}return true},registerOverlay:function(a){hs.push(hs.overlays,hs.extend(a,{hsId:"hsId"+hs.idCounter++}))},getWrapperKey:function(c,b){var e,d=/^highslide-wrapper-([0-9]+)$/;e=c;while(e.parentNode){if(e.id&&d.test(e.id)){return e.id.replace(d,"$1")}e=e.parentNode}if(!b){e=c;while(e.parentNode){if(e.tagName&&hs.isHsAnchor(e)){for(var a=0;a<hs.expanders.length;a++){var f=hs.expanders[a];if(f&&f.a==e){return a}}}e=e.parentNode}}return null},getExpander:function(b,a){if(typeof b=="undefined"){return hs.expanders[hs.focusKey]||null}if(typeof b=="number"){return hs.expanders[b]||null}if(typeof b=="string"){b=hs.$(b)}return hs.expanders[hs.getWrapperKey(b,a)]||null},isHsAnchor:function(b){return(b.onclick&&b.onclick.toString().replace(/\s/g," ").match(/hs.(htmlE|e)xpand/))},reOrder:function(){for(var a=0;a<hs.expanders.length;a++){if(hs.expanders[a]&&hs.expanders[a].isExpanded){hs.focusTopmost()}}},mouseClickHandler:function(d){if(!d){d=window.event}if(d.button>1){return true}if(!d.target){d.target=d.srcElement}var b=d.target;while(b.parentNode&&!(/highslide-(image|move|html|resize)/.test(b.className))){b=b.parentNode}var f=hs.getExpander(b);if(f&&(f.isClosing||!f.isExpanded)){return true}if(f&&d.type=="mousedown"){if(d.target.form){return true}var a=b.className.match(/highslide-(image|move|resize)/);if(a){hs.dragArgs={exp:f,type:a[1],left:f.x.pos,width:f.x.size,top:f.y.pos,height:f.y.size,clickX:d.clientX,clickY:d.clientY};hs.addEventListener(document,"mousemove",hs.dragHandler);if(d.preventDefault){d.preventDefault()}if(/highslide-(image|html)-blur/.test(f.content.className)){f.focus();hs.hasFocused=true}return false}}else{if(d.type=="mouseup"){hs.removeEventListener(document,"mousemove",hs.dragHandler);if(hs.dragArgs){if(hs.styleRestoreCursor&&hs.dragArgs.type=="image"){hs.dragArgs.exp.content.style.cursor=hs.styleRestoreCursor}var c=hs.dragArgs.hasDragged;if(!c&&!hs.hasFocused&&!/(move|resize)/.test(hs.dragArgs.type)){f.close()}else{if(c||(!c&&hs.hasHtmlExpanders)){hs.dragArgs.exp.doShowHide("hidden")}}hs.hasFocused=false;hs.dragArgs=null}else{if(/highslide-image-blur/.test(b.className)){b.style.cursor=hs.styleRestoreCursor}}}}return false},dragHandler:function(c){if(!hs.dragArgs){return true}if(!c){c=window.event}var b=hs.dragArgs,d=b.exp;b.dX=c.clientX-b.clickX;b.dY=c.clientY-b.clickY;var f=Math.sqrt(Math.pow(b.dX,2)+Math.pow(b.dY,2));if(!b.hasDragged){b.hasDragged=(b.type!="image"&&f>0)||(f>(hs.dragSensitivity||5))}if(b.hasDragged&&c.clientX>5&&c.clientY>5){if(b.type=="resize"){d.resize(b)}else{d.moveTo(b.left+b.dX,b.top+b.dY);if(b.type=="image"){d.content.style.cursor="move"}}}return false},wrapperMouseHandler:function(c){try{if(!c){c=window.event}var b=/mouseover/i.test(c.type);if(!c.target){c.target=c.srcElement}if(hs.ie){c.relatedTarget=b?c.fromElement:c.toElement}var d=hs.getExpander(c.target);if(!d.isExpanded){return}if(!d||!c.relatedTarget||hs.getExpander(c.relatedTarget,true)==d||hs.dragArgs){return}for(var a=0;a<d.overlays.length;a++){(function(){var e=hs.$("hsId"+d.overlays[a]);if(e&&e.hideOnMouseOut){if(b){hs.setStyles(e,{visibility:"visible",display:""})}hs.animate(e,{opacity:b?e.opacity:0},e.dur)}})()}}catch(c){}},addEventListener:function(a,c,b){if(a==document&&c=="ready"){hs.push(hs.onReady,b)}try{a.addEventListener(c,b,false)}catch(d){try{a.detachEvent("on"+c,b);a.attachEvent("on"+c,b)}catch(d){a["on"+c]=b}}},removeEventListener:function(a,c,b){try{a.removeEventListener(c,b,false)}catch(d){try{a.detachEvent("on"+c,b)}catch(d){a["on"+c]=null}}},preloadFullImage:function(b){if(hs.continuePreloading&&hs.preloadTheseImages[b]&&hs.preloadTheseImages[b]!="undefined"){var a=document.createElement("img");a.onload=function(){a=null;hs.preloadFullImage(b+1)};a.src=hs.preloadTheseImages[b]}},preloadImages:function(c){if(c&&typeof c!="object"){hs.numberOfImagesToPreload=c}var a=hs.getAnchors();for(var b=0;b<a.images.length&&b<hs.numberOfImagesToPreload;b++){hs.push(hs.preloadTheseImages,hs.getSrc(a.images[b]))}if(hs.outlineType){new hs.Outline(hs.outlineType,function(){hs.preloadFullImage(0)})}else{hs.preloadFullImage(0)}if(hs.restoreCursor){var d=hs.createElement("img",{src:hs.graphicsDir+hs.restoreCursor})}},init:function(){if(!hs.container){hs.getPageSize();hs.ieLt7=hs.ie&&hs.uaVersion<7;for(var a in hs.langDefaults){if(typeof hs[a]!="undefined"){hs.lang[a]=hs[a]}else{if(typeof hs.lang[a]=="undefined"&&typeof hs.langDefaults[a]!="undefined"){hs.lang[a]=hs.langDefaults[a]}}}hs.container=hs.createElement("div",{className:"highslide-container"},{position:"absolute",left:0,top:0,width:"100%",zIndex:hs.zIndexCounter,direction:"ltr"},document.body,true);hs.loading=hs.createElement("a",{className:"highslide-loading",title:hs.lang.loadingTitle,innerHTML:hs.lang.loadingText,href:"javascript:;"},{position:"absolute",top:"-9999px",opacity:hs.loadingOpacity,zIndex:1},hs.container);hs.garbageBin=hs.createElement("div",null,{display:"none"},hs.container);Math.linearTween=function(f,e,h,g){return h*f/g+e};Math.easeInQuad=function(f,e,h,g){return h*(f/=g)*f+e};hs.hideSelects=hs.ieLt7;hs.hideIframes=((window.opera&&hs.uaVersion<9)||navigator.vendor=="KDE"||(hs.ie&&hs.uaVersion<5.5))}},ready:function(){if(hs.isReady){return}hs.isReady=true;for(var a=0;a<hs.onReady.length;a++){hs.onReady[a]()}},updateAnchors:function(){var a,c,k=[],h=[],b={},l;for(var e=0;e<hs.openerTagNames.length;e++){c=document.getElementsByTagName(hs.openerTagNames[e]);for(var d=0;d<c.length;d++){a=c[d];l=hs.isHsAnchor(a);if(l){hs.push(k,a);if(l[0]=="hs.expand"){hs.push(h,a)}var f=hs.getParam(a,"slideshowGroup")||"none";if(!b[f]){b[f]=[]}hs.push(b[f],a)}}}hs.anchors={all:k,groups:b,images:h};return hs.anchors},getAnchors:function(){return hs.anchors||hs.updateAnchors()},close:function(a){var b=hs.getExpander(a);if(b){b.close()}return false}};hs.fx=function(b,a,c){this.options=a;this.elem=b;this.prop=c;if(!a.orig){a.orig={}}};hs.fx.prototype={update:function(){(hs.fx.step[this.prop]||hs.fx.step._default)(this);if(this.options.step){this.options.step.call(this.elem,this.now,this)}},custom:function(e,d,c){this.startTime=(new Date()).getTime();this.start=e;this.end=d;this.unit=c;this.now=this.start;this.pos=this.state=0;var a=this;function b(f){return a.step(f)}b.elem=this.elem;if(b()&&hs.timers.push(b)==1){hs.timerId=setInterval(function(){var g=hs.timers;for(var f=0;f<g.length;f++){if(!g[f]()){g.splice(f--,1)}}if(!g.length){clearInterval(hs.timerId)}},13)}},step:function(d){var c=(new Date()).getTime();if(d||c>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var a=true;for(var b in this.options.curAnim){if(this.options.curAnim[b]!==true){a=false}}if(a){if(this.options.complete){this.options.complete.call(this.elem)}}return false}else{var e=c-this.startTime;this.state=e/this.options.duration;this.pos=this.options.easing(e,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};hs.extend(hs.fx,{step:{opacity:function(a){hs.setStyles(a.elem,{opacity:a.now})},_default:function(a){try{if(a.elem.style&&a.elem.style[a.prop]!=null){a.elem.style[a.prop]=a.now+a.unit}else{a.elem[a.prop]=a.now}}catch(b){}}}});hs.Outline=function(g,e){this.onLoad=e;this.outlineType=g;var a=hs.uaVersion,f;this.hasAlphaImageLoader=hs.ie&&a>=5.5&&a<7;if(!g){if(e){e()}return}hs.init();this.table=hs.createElement("table",{cellSpacing:0},{visibility:"hidden",position:"absolute",borderCollapse:"collapse",width:0},hs.container,true);var b=hs.createElement("tbody",null,null,this.table,1);this.td=[];for(var c=0;c<=8;c++){if(c%3==0){f=hs.createElement("tr",null,{height:"auto"},b,true)}this.td[c]=hs.createElement("td",null,null,f,true);var d=c!=4?{lineHeight:0,fontSize:0}:{position:"relative"};hs.setStyles(this.td[c],d)}this.td[4].className=g+" highslide-outline";this.preloadGraphic()};hs.Outline.prototype={preloadGraphic:function(){var b=hs.graphicsDir+(hs.outlinesDir||"outlines/")+this.outlineType+".png";var a=hs.safari&&hs.uaVersion<525?hs.container:null;this.graphic=hs.createElement("img",null,{position:"absolute",top:"-9999px"},a,true);var c=this;this.graphic.onload=function(){c.onGraphicLoad()};this.graphic.src=b},onGraphicLoad:function(){var d=this.offset=this.graphic.width/4,f=[[0,0],[0,-4],[-2,0],[0,-8],0,[-2,-8],[0,-2],[0,-6],[-2,-2]],c={height:(2*d)+"px",width:(2*d)+"px"};for(var b=0;b<=8;b++){if(f[b]){if(this.hasAlphaImageLoader){var a=(b==1||b==7)?"100%":this.graphic.width+"px";var e=hs.createElement("div",null,{width:"100%",height:"100%",position:"relative",overflow:"hidden"},this.td[b],true);hs.createElement("div",null,{filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale, src='"+this.graphic.src+"')",position:"absolute",width:a,height:this.graphic.height+"px",left:(f[b][0]*d)+"px",top:(f[b][1]*d)+"px"},e,true)}else{hs.setStyles(this.td[b],{background:"url("+this.graphic.src+") "+(f[b][0]*d)+"px "+(f[b][1]*d)+"px"})}if(window.opera&&(b==3||b==5)){hs.createElement("div",null,c,this.td[b],true)}hs.setStyles(this.td[b],c)}}this.graphic=null;if(hs.pendingOutlines[this.outlineType]){hs.pendingOutlines[this.outlineType].destroy()}hs.pendingOutlines[this.outlineType]=this;if(this.onLoad){this.onLoad()}},setPosition:function(g,e,c,b,f){var d=this.exp,a=d.wrapper.style,e=e||0,g=g||{x:d.x.pos+e,y:d.y.pos+e,w:d.x.get("wsize")-2*e,h:d.y.get("wsize")-2*e};if(c){this.table.style.visibility=(g.h>=4*this.offset)?"visible":"hidden"}hs.setStyles(this.table,{left:(g.x-this.offset)+"px",top:(g.y-this.offset)+"px",width:(g.w+2*this.offset)+"px"});g.w-=2*this.offset;g.h-=2*this.offset;hs.setStyles(this.td[4],{width:g.w>=0?g.w+"px":0,height:g.h>=0?g.h+"px":0});if(this.hasAlphaImageLoader){this.td[3].style.height=this.td[5].style.height=this.td[4].style.height}},destroy:function(a){if(a){this.table.style.visibility="hidden"}else{hs.discardElement(this.table)}}};hs.Dimension=function(b,a){this.exp=b;this.dim=a;this.ucwh=a=="x"?"Width":"Height";this.wh=this.ucwh.toLowerCase();this.uclt=a=="x"?"Left":"Top";this.lt=this.uclt.toLowerCase();this.ucrb=a=="x"?"Right":"Bottom";this.rb=this.ucrb.toLowerCase();this.p1=this.p2=0};hs.Dimension.prototype={get:function(a){switch(a){case"loadingPos":return this.tpos+this.tb+(this.t-hs.loading["offset"+this.ucwh])/2;case"wsize":return this.size+2*this.cb+this.p1+this.p2;case"fitsize":return this.clientSize-this.marginMin-this.marginMax;case"maxsize":return this.get("fitsize")-2*this.cb-this.p1-this.p2;case"opos":return this.pos-(this.exp.outline?this.exp.outline.offset:0);case"osize":return this.get("wsize")+(this.exp.outline?2*this.exp.outline.offset:0);case"imgPad":return this.imgSize?Math.round((this.size-this.imgSize)/2):0}},calcBorders:function(){this.cb=(this.exp.content["offset"+this.ucwh]-this.t)/2;this.marginMax=hs["margin"+this.ucrb]},calcThumb:function(){this.t=this.exp.el[this.wh]?parseInt(this.exp.el[this.wh]):this.exp.el["offset"+this.ucwh];this.tpos=this.exp.tpos[this.dim];this.tb=(this.exp.el["offset"+this.ucwh]-this.t)/2;if(this.tpos==0||this.tpos==-1){this.tpos=(hs.page[this.wh]/2)+hs.page["scroll"+this.uclt]}},calcExpanded:function(){var a=this.exp;this.justify="auto";this.pos=this.tpos-this.cb+this.tb;if(this.maxHeight&&this.dim=="x"){a.maxWidth=Math.min(a.maxWidth||this.full,a.maxHeight*this.full/a.y.full)}this.size=Math.min(this.full,a["max"+this.ucwh]||this.full);this.minSize=a.allowSizeReduction?Math.min(a["min"+this.ucwh],this.full):this.full;if(a.isImage&&a.useBox){this.size=a[this.wh];this.imgSize=this.full}if(this.dim=="x"&&hs.padToMinWidth){this.minSize=a.minWidth}this.marginMin=hs["margin"+this.uclt];this.scroll=hs.page["scroll"+this.uclt];this.clientSize=hs.page[this.wh]},setSize:function(a){var b=this.exp;if(b.isImage&&(b.useBox||hs.padToMinWidth)){this.imgSize=a;this.size=Math.max(this.size,this.imgSize);b.content.style[this.lt]=this.get("imgPad")+"px"}else{this.size=a}b.content.style[this.wh]=a+"px";b.wrapper.style[this.wh]=this.get("wsize")+"px";if(b.outline){b.outline.setPosition()}if(this.dim=="x"&&b.overlayBox){b.sizeOverlayBox(true)}},setPos:function(a){this.pos=a;this.exp.wrapper.style[this.lt]=a+"px";if(this.exp.outline){this.exp.outline.setPosition()}}};hs.Expander=function(k,f,b,l){if(document.readyState&&hs.ie&&!hs.isReady){hs.addEventListener(document,"ready",function(){new hs.Expander(k,f,b,l)});return}this.a=k;this.custom=b;this.contentType=l||"image";this.isImage=!this.isHtml;hs.continuePreloading=false;this.overlays=[];hs.init();var m=this.key=hs.expanders.length;for(var g=0;g<hs.overrides.length;g++){var c=hs.overrides[g];this[c]=f&&typeof f[c]!="undefined"?f[c]:hs[c]}if(!this.src){this.src=k.href}var d=(f&&f.thumbnailId)?hs.$(f.thumbnailId):k;d=this.thumb=d.getElementsByTagName("img")[0]||d;this.thumbsUserSetId=d.id||k.id;for(var g=0;g<hs.expanders.length;g++){if(hs.expanders[g]&&hs.expanders[g].a==k){hs.expanders[g].focus();return false}}if(!hs.allowSimultaneousLoading){for(var g=0;g<hs.expanders.length;g++){if(hs.expanders[g]&&hs.expanders[g].thumb!=d&&!hs.expanders[g].onLoadStarted){hs.expanders[g].cancelLoading()}}}hs.expanders[m]=this;if(!hs.allowMultipleInstances&&!hs.upcoming){if(hs.expanders[m-1]){hs.expanders[m-1].close()}if(typeof hs.focusKey!="undefined"&&hs.expanders[hs.focusKey]){hs.expanders[hs.focusKey].close()}}this.el=d;this.tpos=this.pageOrigin||hs.getPosition(d);hs.getPageSize();var j=this.x=new hs.Dimension(this,"x");j.calcThumb();var h=this.y=new hs.Dimension(this,"y");h.calcThumb();this.wrapper=hs.createElement("div",{id:"highslide-wrapper-"+this.key,className:"highslide-wrapper "+this.wrapperClassName},{visibility:"hidden",position:"absolute",zIndex:hs.zIndexCounter+=2},null,true);this.wrapper.onmouseover=this.wrapper.onmouseout=hs.wrapperMouseHandler;if(this.contentType=="image"&&this.outlineWhileAnimating==2){this.outlineWhileAnimating=0}if(!this.outlineType){this[this.contentType+"Create"]()}else{if(hs.pendingOutlines[this.outlineType]){this.connectOutline();this[this.contentType+"Create"]()}else{this.showLoading();var e=this;new hs.Outline(this.outlineType,function(){e.connectOutline();e[e.contentType+"Create"]()})}}return true};hs.Expander.prototype={error:function(a){if(hs.debug){alert("Line "+a.lineNumber+": "+a.message)}else{window.location.href=this.src}},connectOutline:function(){var a=this.outline=hs.pendingOutlines[this.outlineType];a.exp=this;a.table.style.zIndex=this.wrapper.style.zIndex-1;hs.pendingOutlines[this.outlineType]=null},showLoading:function(){if(this.onLoadStarted||this.loading){return}this.loading=hs.loading;var c=this;this.loading.onclick=function(){c.cancelLoading()};var c=this,a=this.x.get("loadingPos")+"px",b=this.y.get("loadingPos")+"px";setTimeout(function(){if(c.loading){hs.setStyles(c.loading,{left:a,top:b,zIndex:hs.zIndexCounter++})}},100)},imageCreate:function(){var b=this;var a=document.createElement("img");this.content=a;a.onload=function(){if(hs.expanders[b.key]){b.contentLoaded()}};if(hs.blockRightClick){a.oncontextmenu=function(){return false}}a.className="highslide-image";hs.setStyles(a,{visibility:"hidden",display:"block",position:"absolute",maxWidth:"9999px",zIndex:3});a.title=hs.lang.restoreTitle;if(hs.safari&&hs.uaVersion<525){hs.container.appendChild(a)}if(hs.ie&&hs.flushImgSize){a.src=null}a.src=this.src;this.showLoading()},contentLoaded:function(){try{if(!this.content){return}this.content.onload=null;if(this.onLoadStarted){return}else{this.onLoadStarted=true}var a=this.x,d=this.y;if(this.loading){hs.setStyles(this.loading,{top:"-9999px"});this.loading=null}a.full=this.content.width;d.full=this.content.height;hs.setStyles(this.content,{width:a.t+"px",height:d.t+"px"});this.wrapper.appendChild(this.content);hs.container.appendChild(this.wrapper);a.calcBorders();d.calcBorders();hs.setStyles(this.wrapper,{left:(a.tpos+a.tb-a.cb)+"px",top:(d.tpos+a.tb-d.cb)+"px"});this.getOverlays();var b=a.full/d.full;a.calcExpanded();this.justify(a);d.calcExpanded();this.justify(d);if(this.overlayBox){this.sizeOverlayBox(0,1)}if(this.allowSizeReduction){this.correctRatio(b);if(this.isImage&&this.x.full>(this.x.imgSize||this.x.size)){this.createFullExpand();if(this.overlays.length==1){this.sizeOverlayBox()}}}this.show()}catch(c){this.error(c)}},justify:function(f,b){var g,h=f.target,e=f==this.x?"x":"y";var d=false;var a=f.exp.allowSizeReduction;f.pos=Math.round(f.pos-((f.get("wsize")-f.t)/2));if(f.pos<f.scroll+f.marginMin){f.pos=f.scroll+f.marginMin;d=true}if(!b&&f.size<f.minSize){f.size=f.minSize;a=false}if(f.pos+f.get("wsize")>f.scroll+f.clientSize-f.marginMax){if(!b&&d&&a){f.size=Math.min(f.size,f.get(e=="y"?"fitsize":"maxsize"))}else{if(f.get("wsize")<f.get("fitsize")){f.pos=f.scroll+f.clientSize-f.marginMax-f.get("wsize")}else{f.pos=f.scroll+f.marginMin;if(!b&&a){f.size=f.get(e=="y"?"fitsize":"maxsize")}}}}if(!b&&f.size<f.minSize){f.size=f.minSize;a=false}if(f.pos<f.marginMin){var c=f.pos;f.pos=f.marginMin;if(a&&!b){f.size=f.size-(f.pos-c)}}},correctRatio:function(c){var a=this.x,g=this.y,e=false,d=Math.min(a.full,a.size),b=Math.min(g.full,g.size),f=(this.useBox||hs.padToMinWidth);if(d/b>c){d=b*c;if(d<a.minSize){d=a.minSize;b=d/c}e=true}else{if(d/b<c){b=d/c;e=true}}if(hs.padToMinWidth&&a.full<a.minSize){a.imgSize=a.full;g.size=g.imgSize=g.full}else{if(this.useBox){a.imgSize=d;g.imgSize=b}else{a.size=d;g.size=b}}e=this.fitOverlayBox(this.useBox?null:c,e);if(f&&g.size<g.imgSize){g.imgSize=g.size;a.imgSize=g.size*c}if(e||f){a.pos=a.tpos-a.cb+a.tb;a.minSize=a.size;this.justify(a,true);g.pos=g.tpos-g.cb+g.tb;g.minSize=g.size;this.justify(g,true);if(this.overlayBox){this.sizeOverlayBox()}}},fitOverlayBox:function(b,c){var a=this.x,d=this.y;if(this.overlayBox){while(d.size>this.minHeight&&a.size>this.minWidth&&d.get("wsize")>d.get("fitsize")){d.size-=10;if(b){a.size=d.size*b}this.sizeOverlayBox(0,1);c=true}}return c},show:function(){var a=this.x,b=this.y;this.doShowHide("hidden");this.changeSize(1,{wrapper:{width:a.get("wsize"),height:b.get("wsize"),left:a.pos,top:b.pos},content:{left:a.p1+a.get("imgPad"),top:b.p1+b.get("imgPad"),width:a.imgSize||a.size,height:b.imgSize||b.size}},hs.expandDuration)},changeSize:function(b,h,c){if(this.outline&&!this.outlineWhileAnimating){if(b){this.outline.setPosition()}else{this.outline.destroy()}}if(!b){this.destroyOverlays()}var e=this,a=e.x,g=e.y,f=this.easing;if(!b){f=this.easingClose||f}var d=b?function(){if(e.outline){e.outline.table.style.visibility="visible"}setTimeout(function(){e.afterExpand()},50)}:function(){e.afterClose()};if(b){hs.setStyles(this.wrapper,{width:a.t+"px",height:g.t+"px"})}if(this.fadeInOut){hs.setStyles(this.wrapper,{opacity:b?0:1});hs.extend(h.wrapper,{opacity:b})}hs.animate(this.wrapper,h.wrapper,{duration:c,easing:f,step:function(k,i){if(e.outline&&e.outlineWhileAnimating&&i.prop=="top"){var j=b?i.pos:1-i.pos;var l={w:a.t+(a.get("wsize")-a.t)*j,h:g.t+(g.get("wsize")-g.t)*j,x:a.tpos+(a.pos-a.tpos)*j,y:g.tpos+(g.pos-g.tpos)*j};e.outline.setPosition(l,0,1)}}});hs.animate(this.content,h.content,c,f,d);if(b){this.wrapper.style.visibility="visible";this.content.style.visibility="visible";this.a.className+=" highslide-active-anchor"}},afterExpand:function(){this.isExpanded=true;this.focus();if(hs.upcoming&&hs.upcoming==this.a){hs.upcoming=null}this.prepareNextOutline();var c=hs.page,b=hs.mouse.x+c.scrollLeft,a=hs.mouse.y+c.scrollTop;this.mouseIsOver=this.x.pos<b&&b<this.x.pos+this.x.get("wsize")&&this.y.pos<a&&a<this.y.pos+this.y.get("wsize");if(this.overlayBox){this.showOverlays()}},prepareNextOutline:function(){var a=this.key;var b=this.outlineType;new hs.Outline(b,function(){try{hs.expanders[a].preloadNext()}catch(c){}})},preloadNext:function(){var b=this.getAdjacentAnchor(1);if(b&&b.onclick.toString().match(/hs\.expand/)){var a=hs.createElement("img",{src:hs.getSrc(b)})}},getAdjacentAnchor:function(c){var b=this.getAnchorIndex(),a=hs.anchors.groups[this.slideshowGroup||"none"];return(a&&a[b+c])||null},getAnchorIndex:function(){var a=hs.getAnchors().groups[this.slideshowGroup||"none"];if(a){for(var b=0;b<a.length;b++){if(a[b]==this.a){return b}}}return null},cancelLoading:function(){hs.discardElement(this.wrapper);hs.expanders[this.key]=null;if(this.loading){hs.loading.style.left="-9999px"}},writeCredits:function(){this.credits=hs.createElement("a",{href:hs.creditsHref,target:hs.creditsTarget,className:"highslide-credits",innerHTML:hs.lang.creditsText,title:hs.lang.creditsTitle});this.createOverlay({overlayId:this.credits,position:this.creditsPosition||"top left"})},getInline:function(types,addOverlay){for(var i=0;i<types.length;i++){var type=types[i],s=null;if(!this[type+"Id"]&&this.thumbsUserSetId){this[type+"Id"]=type+"-for-"+this.thumbsUserSetId}if(this[type+"Id"]){this[type]=hs.getNode(this[type+"Id"])}if(!this[type]&&!this[type+"Text"]&&this[type+"Eval"]){try{s=eval(this[type+"Eval"])}catch(e){}}if(!this[type]&&this[type+"Text"]){s=this[type+"Text"]}if(!this[type]&&!s){this[type]=hs.getNode(this.a["_"+type+"Id"]);if(!this[type]){var next=this.a.nextSibling;while(next&&!hs.isHsAnchor(next)){if((new RegExp("highslide-"+type)).test(next.className||null)){if(!next.id){this.a["_"+type+"Id"]=next.id="hsId"+hs.idCounter++}this[type]=hs.getNode(next.id);break}next=next.nextSibling}}}if(!this[type]&&s){this[type]=hs.createElement("div",{className:"highslide-"+type,innerHTML:s})}if(addOverlay&&this[type]){var o={position:(type=="heading")?"above":"below"};for(var x in this[type+"Overlay"]){o[x]=this[type+"Overlay"][x]}o.overlayId=this[type];this.createOverlay(o)}}},doShowHide:function(a){if(hs.hideSelects){this.showHideElements("SELECT",a)}if(hs.hideIframes){this.showHideElements("IFRAME",a)}if(hs.geckoMac){this.showHideElements("*",a)}},showHideElements:function(c,b){var e=document.getElementsByTagName(c);var a=c=="*"?"overflow":"visibility";for(var f=0;f<e.length;f++){if(a=="visibility"||(document.defaultView.getComputedStyle(e[f],"").getPropertyValue("overflow")=="auto"||e[f].getAttribute("hidden-by")!=null)){var h=e[f].getAttribute("hidden-by");if(b=="visible"&&h){h=h.replace("["+this.key+"]","");e[f].setAttribute("hidden-by",h);if(!h){e[f].style[a]=e[f].origProp}}else{if(b=="hidden"){var k=hs.getPosition(e[f]);k.w=e[f].offsetWidth;k.h=e[f].offsetHeight;var j=(k.x+k.w<this.x.get("opos")||k.x>this.x.get("opos")+this.x.get("osize"));var g=(k.y+k.h<this.y.get("opos")||k.y>this.y.get("opos")+this.y.get("osize"));var d=hs.getWrapperKey(e[f]);if(!j&&!g&&d!=this.key){if(!h){e[f].setAttribute("hidden-by","["+this.key+"]");e[f].origProp=e[f].style[a];e[f].style[a]="hidden"}else{if(h.indexOf("["+this.key+"]")==-1){e[f].setAttribute("hidden-by",h+"["+this.key+"]")}}}else{if((h=="["+this.key+"]"||hs.focusKey==d)&&d!=this.key){e[f].setAttribute("hidden-by","");e[f].style[a]=e[f].origProp||""}else{if(h&&h.indexOf("["+this.key+"]")>-1){e[f].setAttribute("hidden-by",h.replace("["+this.key+"]",""))}}}}}}}},focus:function(){this.wrapper.style.zIndex=hs.zIndexCounter+=2;for(var a=0;a<hs.expanders.length;a++){if(hs.expanders[a]&&a==hs.focusKey){var b=hs.expanders[a];b.content.className+=" highslide-"+b.contentType+"-blur";b.content.style.cursor=hs.ie?"hand":"pointer";b.content.title=hs.lang.focusTitle}}if(this.outline){this.outline.table.style.zIndex=this.wrapper.style.zIndex-1}this.content.className="highslide-"+this.contentType;this.content.title=hs.lang.restoreTitle;if(hs.restoreCursor){hs.styleRestoreCursor=window.opera?"pointer":"url("+hs.graphicsDir+hs.restoreCursor+"), pointer";if(hs.ie&&hs.uaVersion<6){hs.styleRestoreCursor="hand"}this.content.style.cursor=hs.styleRestoreCursor}hs.focusKey=this.key;hs.addEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler)},moveTo:function(a,b){this.x.setPos(a);this.y.setPos(b)},resize:function(d){var a,b,c=d.width/d.height;a=Math.max(d.width+d.dX,Math.min(this.minWidth,this.x.full));if(this.isImage&&Math.abs(a-this.x.full)<12){a=this.x.full}b=a/c;if(b<Math.min(this.minHeight,this.y.full)){b=Math.min(this.minHeight,this.y.full);if(this.isImage){a=b*c}}this.resizeTo(a,b)},resizeTo:function(a,b){this.y.setSize(b);this.x.setSize(a);this.wrapper.style.height=this.y.get("wsize")+"px"},close:function(){if(this.isClosing||!this.isExpanded){return}this.isClosing=true;hs.removeEventListener(document,window.opera?"keypress":"keydown",hs.keyHandler);try{this.content.style.cursor="default";this.changeSize(0,{wrapper:{width:this.x.t,height:this.y.t,left:this.x.tpos-this.x.cb+this.x.tb,top:this.y.tpos-this.y.cb+this.y.tb},content:{left:0,top:0,width:this.x.t,height:this.y.t}},hs.restoreDuration)}catch(a){this.afterClose()}},createOverlay:function(d){var c=d.overlayId;if(typeof c=="string"){c=hs.getNode(c)}if(d.html){c=hs.createElement("div",{innerHTML:d.html})}if(!c||typeof c=="string"){return}c.style.display="block";this.genOverlayBox();var b=d.width&&/^[0-9]+(px|%)$/.test(d.width)?d.width:"auto";if(/^(left|right)panel$/.test(d.position)&&!/^[0-9]+px$/.test(d.width)){b="200px"}var a=hs.createElement("div",{id:"hsId"+hs.idCounter++,hsId:d.hsId},{position:"absolute",visibility:"hidden",width:b,direction:hs.lang.cssDirection||"",opacity:0},this.overlayBox,true);a.appendChild(c);hs.extend(a,{opacity:1,offsetX:0,offsetY:0,dur:(d.fade===0||d.fade===false||(d.fade==2&&hs.ie))?0:250});hs.extend(a,d);if(this.gotOverlays){this.positionOverlay(a);if(!a.hideOnMouseOut||this.mouseIsOver){hs.animate(a,{opacity:a.opacity},a.dur)}}hs.push(this.overlays,hs.idCounter-1)},positionOverlay:function(c){var d=c.position||"middle center",b=c.offsetX,a=c.offsetY;if(c.parentNode!=this.overlayBox){this.overlayBox.appendChild(c)}if(/left$/.test(d)){c.style.left=b+"px"}if(/center$/.test(d)){hs.setStyles(c,{left:"50%",marginLeft:(b-Math.round(c.offsetWidth/2))+"px"})}if(/right$/.test(d)){c.style.right=-b+"px"}if(/^leftpanel$/.test(d)){hs.setStyles(c,{right:"100%",marginRight:this.x.cb+"px",top:-this.y.cb+"px",bottom:-this.y.cb+"px",overflow:"auto"});this.x.p1=c.offsetWidth}else{if(/^rightpanel$/.test(d)){hs.setStyles(c,{left:"100%",marginLeft:this.x.cb+"px",top:-this.y.cb+"px",bottom:-this.y.cb+"px",overflow:"auto"});this.x.p2=c.offsetWidth}}if(/^top/.test(d)){c.style.top=a+"px"}if(/^middle/.test(d)){hs.setStyles(c,{top:"50%",marginTop:(a-Math.round(c.offsetHeight/2))+"px"})}if(/^bottom/.test(d)){c.style.bottom=-a+"px"}if(/^above$/.test(d)){hs.setStyles(c,{left:(-this.x.p1-this.x.cb)+"px",right:(-this.x.p2-this.x.cb)+"px",bottom:"100%",marginBottom:this.y.cb+"px",width:"auto"});this.y.p1=c.offsetHeight}else{if(/^below$/.test(d)){hs.setStyles(c,{position:"relative",left:(-this.x.p1-this.x.cb)+"px",right:(-this.x.p2-this.x.cb)+"px",top:"100%",marginTop:this.y.cb+"px",width:"auto"});this.y.p2=c.offsetHeight;c.style.position="absolute"}}},getOverlays:function(){this.getInline(["heading","caption"],true);if(this.heading&&this.dragByHeading){this.heading.className+=" highslide-move"}if(hs.showCredits){this.writeCredits()}for(var a=0;a<hs.overlays.length;a++){var d=hs.overlays[a],e=d.thumbnailId,b=d.slideshowGroup;if((!e&&!b)||(e&&e==this.thumbsUserSetId)||(b&&b===this.slideshowGroup)){this.createOverlay(d)}}var c=[];for(var a=0;a<this.overlays.length;a++){var d=hs.$("hsId"+this.overlays[a]);if(/panel$/.test(d.position)){this.positionOverlay(d)}else{hs.push(c,d)}}for(var a=0;a<c.length;a++){this.positionOverlay(c[a])}this.gotOverlays=true},genOverlayBox:function(){if(!this.overlayBox){this.overlayBox=hs.createElement("div",{className:this.wrapperClassName},{position:"absolute",width:(this.x.size||(this.useBox?this.width:null)||this.x.full)+"px",height:(this.y.size||this.y.full)+"px",visibility:"hidden",overflow:"hidden",zIndex:hs.ie?4:"auto"},hs.container,true)}},sizeOverlayBox:function(f,d){var c=this.overlayBox,a=this.x,h=this.y;hs.setStyles(c,{width:a.size+"px",height:h.size+"px"});if(f||d){for(var e=0;e<this.overlays.length;e++){var g=hs.$("hsId"+this.overlays[e]);var b=(hs.ieLt7||document.compatMode=="BackCompat");if(g&&/^(above|below)$/.test(g.position)){if(b){g.style.width=(c.offsetWidth+2*a.cb+a.p1+a.p2)+"px"}h[g.position=="above"?"p1":"p2"]=g.offsetHeight}if(g&&b&&/^(left|right)panel$/.test(g.position)){g.style.height=(c.offsetHeight+2*h.cb)+"px"}}}if(f){hs.setStyles(this.content,{top:h.p1+"px"});hs.setStyles(c,{top:(h.p1+h.cb)+"px"})}},showOverlays:function(){var a=this.overlayBox;a.className="";hs.setStyles(a,{top:(this.y.p1+this.y.cb)+"px",left:(this.x.p1+this.x.cb)+"px",overflow:"visible"});if(hs.safari){a.style.visibility="visible"}this.wrapper.appendChild(a);for(var c=0;c<this.overlays.length;c++){var d=hs.$("hsId"+this.overlays[c]);d.style.zIndex=d.zIndex||4;if(!d.hideOnMouseOut||this.mouseIsOver){d.style.visibility="visible";hs.setStyles(d,{visibility:"visible",display:""});hs.animate(d,{opacity:d.opacity},d.dur)}}},destroyOverlays:function(){if(!this.overlays.length){return}hs.discardElement(this.overlayBox)},createFullExpand:function(){this.fullExpandLabel=hs.createElement("a",{href:"javascript:hs.expanders["+this.key+"].doFullExpand();",title:hs.lang.fullExpandTitle,className:"highslide-full-expand"});this.createOverlay({overlayId:this.fullExpandLabel,position:hs.fullExpandPosition,hideOnMouseOut:true,opacity:hs.fullExpandOpacity})},doFullExpand:function(){try{if(this.fullExpandLabel){hs.discardElement(this.fullExpandLabel)}this.focus();var b=this.x.size;this.resizeTo(this.x.full,this.y.full);var a=this.x.pos-(this.x.size-b)/2;if(a<hs.marginLeft){a=hs.marginLeft}this.moveTo(a,this.y.pos);this.doShowHide("hidden")}catch(c){this.error(c)}},afterClose:function(){this.a.className=this.a.className.replace("highslide-active-anchor","");this.doShowHide("visible");if(this.outline&&this.outlineWhileAnimating){this.outline.destroy()}hs.discardElement(this.wrapper);hs.expanders[this.key]=null;hs.reOrder()}};hs.langDefaults=hs.lang;var HsExpander=hs.Expander;if(hs.ie&&window==window.top){(function(){try{document.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,50);return}hs.ready()})()}hs.addEventListener(document,"DOMContentLoaded",hs.ready);hs.addEventListener(window,"load",hs.ready);hs.addEventListener(document,"ready",function(){if(hs.expandCursor){var c=hs.createElement("style",{type:"text/css"},null,document.getElementsByTagName("HEAD")[0]);function b(e,f){if(!hs.ie){c.appendChild(document.createTextNode(e+" {"+f+"}"))}else{var d=document.styleSheets[document.styleSheets.length-1];if(typeof(d.addRule)=="object"){d.addRule(e,f)}}}function a(d){return"expression( ( ( ignoreMe = document.documentElement."+d+" ? document.documentElement."+d+" : document.body."+d+" ) ) + 'px' );"}if(hs.expandCursor){b(".highslide img","cursor: url("+hs.graphicsDir+hs.expandCursor+"), pointer !important;")}}});hs.addEventListener(window,"resize",function(){hs.getPageSize()});hs.addEventListener(document,"mousemove",function(a){hs.mouse={x:a.clientX,y:a.clientY}});hs.addEventListener(document,"mousedown",hs.mouseClickHandler);hs.addEventListener(document,"mouseup",hs.mouseClickHandler);hs.addEventListener(document,"ready",hs.getAnchors);hs.addEventListener(window,"load",hs.preloadImages)};



/*
 * Treeview 1.5pre - jQuery plugin to hide and show branches of a tree
 * 
 * http://bassistance.de/jquery-plugins/jquery-plugin-treeview/
 * http://docs.jquery.com/Plugins/Treeview
 *
 * Copyright (c) 2007 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.treeview.js 5759 2008-07-01 07:50:28Z joern.zaefferer $
 *
 */

;(function($) {

	// TODO rewrite as a widget, removing all the extra plugins
	$.extend($.fn, {
		swapClass: function(c1, c2) {
			var c1Elements = this.filter('.' + c1);
			this.filter('.' + c2).removeClass(c2).addClass(c1);
			c1Elements.removeClass(c1).addClass(c2);
			return this;
		},
		replaceClass: function(c1, c2) {
			return this.filter('.' + c1).removeClass(c1).addClass(c2).end();
		},
		hoverClass: function(className) {
			className = className || "hover";
			return this.hover(function() {
				$(this).addClass(className);
			}, function() {
				$(this).removeClass(className);
			});
		},
		heightToggle: function(animated, callback) {
			animated ?
				this.animate({ height: "toggle" }, animated, callback) :
				this.each(function(){
					jQuery(this)[ jQuery(this).is(":hidden") ? "show" : "hide" ]();
					if(callback)
						callback.apply(this, arguments);
				});
		},
		heightHide: function(animated, callback) {
			if (animated) {
				this.animate({ height: "hide" }, animated, callback);
			} else {
				this.hide();
				if (callback)
					this.each(callback);				
			}
		},
		prepareBranches: function(settings) {
			if (!settings.prerendered) {
				// mark last tree items
				this.filter(":last-child:not(ul)").addClass(CLASSES.last);
				// collapse whole tree, or only those marked as closed, anyway except those marked as open
				this.filter((settings.collapsed ? "" : "." + CLASSES.closed) + ":not(." + CLASSES.open + ")").find(">ul").hide();
				this.filter("." + CLASSES.open).parents().find(">ul").show();
			}
			// return all items with sublists
			return this.filter(":has(>ul)");
		},
		applyClasses: function(settings, toggler) {
			// TODO use event delegation
			this.filter(":has(>ul):not(:has(>a))").find(">span").unbind("click.treeview").bind("click.treeview", function(event) {
				// don't handle click events on children, eg. checkboxes
				if ( this == event.target )
					toggler.apply($(this).next());
			}).add( $("a", this) ).hoverClass();
			
			if (!settings.prerendered) {
				// handle closed ones first
				this.filter(":has(>ul:hidden)").not("." + CLASSES.open)
						.addClass(CLASSES.expandable)
						.replaceClass(CLASSES.last, CLASSES.lastExpandable);
						
				// handle open ones
				this.not(":has(>ul:hidden)")
						.addClass(CLASSES.collapsable)
						.replaceClass(CLASSES.last, CLASSES.lastCollapsable);
				
				// handle fully openned ones
				this.filter("." + CLASSES.open)
				    .addClass(CLASSES.collapsable)
				    .replaceClass(CLASSES.last, CLASSES.lastCollapsable);
						
	            // create hitarea if not present
				var hitarea = this.find("div." + CLASSES.hitarea);
				if (!hitarea.length)
					hitarea = this.prepend("<div class=\"" + CLASSES.hitarea + "\"/>").find("div." + CLASSES.hitarea);
				hitarea.removeClass().addClass(CLASSES.hitarea).each(function() {
					var classes = "";
					$.each($(this).parent().attr("class").split(" "), function() {
						classes += this + "-hitarea ";
					});
					$(this).addClass( classes );
				})
			}
			
			// apply event to hitarea
			this.find("div." + CLASSES.hitarea).click( toggler );
		},
		treeview: function(settings) {
			
			settings = $.extend({
				cookieId: "treeview"
			}, settings);
			
			if ( settings.toggle ) {
				var callback = settings.toggle;
				settings.toggle = function() {
					return callback.apply($(this).parent()[0], arguments);
				};
			}
		
			// factory for treecontroller
			function treeController(tree, control) {
				// factory for click handlers
				function handler(filter) {
					return function() {
						// reuse toggle event handler, applying the elements to toggle
						// start searching for all hitareas
						toggler.apply( $("div." + CLASSES.hitarea, tree).filter(function() {
							// for plain toggle, no filter is provided, otherwise we need to check the parent element
							return filter ? $(this).parent("." + filter).length : true;
						}) );
						return false;
					};
				}
				// click on first element to collapse tree
				$("a:eq(0)", control).click( handler(CLASSES.collapsable) );
				// click on second to expand tree
				$("a:eq(1)", control).click( handler(CLASSES.expandable) );
				// click on third to toggle tree
				$("a:eq(2)", control).click( handler() ); 
			}
		
			// handle toggle event
			function toggler() {
				$(this)
					.parent()
					// swap classes for hitarea
					.find(">.hitarea")
						.swapClass( CLASSES.collapsableHitarea, CLASSES.expandableHitarea )
						.swapClass( CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea )
					.end()
					// swap classes for parent li
					.swapClass( CLASSES.collapsable, CLASSES.expandable )
					.swapClass( CLASSES.lastCollapsable, CLASSES.lastExpandable )
					// find child lists
					.find( ">ul" )
					// toggle them
					.heightToggle( settings.animated, settings.toggle );
				if ( settings.unique ) {
					$(this).parent()
						.siblings()
						// swap classes for hitarea
						.find(">.hitarea")
							.replaceClass( CLASSES.collapsableHitarea, CLASSES.expandableHitarea )
							.replaceClass( CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea )
						.end()
						.replaceClass( CLASSES.collapsable, CLASSES.expandable )
						.replaceClass( CLASSES.lastCollapsable, CLASSES.lastExpandable )
						.find( ">ul" )
						.heightHide( settings.animated, settings.toggle );
				}
			}
			this.data("toggler", toggler);
			
			function serialize() {
				function binary(arg) {
					return arg ? 1 : 0;
				}
				var data = [];
				branches.each(function(i, e) {
					data[i] = $(e).is(":has(>ul:visible)") ? 1 : 0;
				});
				$.cookie(settings.cookieId, data.join(""), settings.cookieOptions );
			}
			
			function deserialize() {
				var stored = $.cookie(settings.cookieId);
				if ( stored ) {
					var data = stored.split("");
					branches.each(function(i, e) {
						$(e).find(">ul")[ parseInt(data[i]) ? "show" : "hide" ]();
					});
				}
			}
			
			// add treeview class to activate styles
			this.addClass("treeview");
			
			// prepare branches and find all tree items with child lists
			var branches = this.find("li").prepareBranches(settings);
			
			switch(settings.persist) {
			case "cookie":
				var toggleCallback = settings.toggle;
				settings.toggle = function() {
					serialize();
					if (toggleCallback) {
						toggleCallback.apply(this, arguments);
					}
				};
				deserialize();
				break;
			case "location":
				var current = this.find("a").filter(function() {
					return this.href.toLowerCase() == location.href.toLowerCase();
				});
				if ( current.length ) {
					// TODO update the open/closed classes
					var items = current.addClass("selected").parents("ul, li").add( current.next() ).show();
					if (settings.prerendered) {
						// if prerendered is on, replicate the basic class swapping
						items.filter("li")
							.swapClass( CLASSES.collapsable, CLASSES.expandable )
							.swapClass( CLASSES.lastCollapsable, CLASSES.lastExpandable )
							.find(">.hitarea")
								.swapClass( CLASSES.collapsableHitarea, CLASSES.expandableHitarea )
								.swapClass( CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea );
					}
				}
				break;
			}
			
			branches.applyClasses(settings, toggler);
				
			// if control option is set, create the treecontroller and show it
			if ( settings.control ) {
				treeController(this, settings.control);
				$(settings.control).show();
			}
			
			return this;
		}
	});
	
	// classes used by the plugin
	// need to be styled via external stylesheet, see first example
	$.treeview = {};
	var CLASSES = ($.treeview.classes = {
		open: "open",
		closed: "closed",
		expandable: "expandable",
		expandableHitarea: "expandable-hitarea",
		lastExpandableHitarea: "lastExpandable-hitarea",
		collapsable: "collapsable",
		collapsableHitarea: "collapsable-hitarea",
		lastCollapsableHitarea: "lastCollapsable-hitarea",
		lastCollapsable: "lastCollapsable",
		lastExpandable: "lastExpandable",
		last: "last",
		hitarea: "hitarea"
	});
	
})(jQuery);
