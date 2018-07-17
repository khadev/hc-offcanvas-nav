/*!
 * jQuery HC-MobileNav
 * ===================
 * Version: 2.0.4
 * Author: Some Web Media
 * Author URL: http://somewebmedia.com
 * Plugin URL: https://github.com/somewebmedia/hc-mobile-nav
 * Description: jQuery plugin for converting menus to mobile navigations
 * License: MIT
 */
!function(y,n){"use strict";var a,l,w=n.document,x=function(e){return e.stopPropagation()},T=function(n,a,l){return function(e){n&&e.preventDefault(),a&&e.stopPropagation(),"function"==typeof l&&l()}},B=(a=y("head"),l="hc-mobile-nav-style",function(e){var n=a.find("style#"+l);n.length?n.html(e):y('<style id="'+l+'">'+e+"</style>").appendTo(a)}),E=0;y.fn.extend({hcMobileNav:function(e){if(!this.length)return this;var l,m=y.extend({},{maxWidth:1024,offCanvas:!0,directionFrom:"left",levelEffect:"transform",levelSpacing:40,disableBody:!0,closeOnNavClick:!0,customToggle:null,navClass:"",insertClose:!0,insertBack:!0,labelClose:"Close",labelBack:"Back"},e),b=y(w.getElementsByTagName("html")[0]),k=(y(w),y(w.body)),g="ontouchstart"in n?"touchstart":"click",C=(l=function(e){var n=["Webkit","Moz","Ms","O"],a=(w.body||w.documentElement).style,l=e.charAt(0).toUpperCase()+e.slice(1);if(void 0!==a[e])return e;for(var o=0;o<n.length;o++)if(void 0!==a[n[o]+l])return n[o]+l;return!1}("transform"),function(e,n){if(l){var a="left"===m.directionFrom?n:-n;e.css(l,"translate3d("+a+"px,0,0)")}else e.css(m.directionFrom,n)});return this.each(function(){var e=y(this),n=void 0,a=!1,l=0;if(e.is("ul"))n=e.clone().wrap("<nav>").parent();else if(e.is("nav"))n=e.clone();else if(!(n=e.find("nav, ul").first().clone()).length)return void console.log("%c! HC MobileNav:%c There is no <nav> or <ul> elements in your menu.","color: red","color: black");var o=n.find("ul");if(o.length){var i={},s="hc-nav-"+ ++E,c=n.children("ul").wrapAll('<div class="nav-wrapper">').parent().on("click",x).wrap('<div class="nav-container">').parent(),r="\n          .hc-nav-trigger."+s+",\n          .hc-mobile-nav."+s+" {\n            display: block;\n          }\n          .hc-nav."+s+" {\n            display: none;\n          }";m.maxWidth&&(r="@media screen and (max-width: "+(m.maxWidth-1)+"px) {\n            "+r+"\n          }"),B(r,"hc-mobile-nav-style"),n.on(g,x).removeAttr("id").removeClass().addClass("hc-mobile-nav "+s+" "+(m.navClass||"")+" nav-levels-"+m.levelEffect+" direction-from-"+m.directionFrom+" "+(m.offCanvas?"off-canvas":"")+" "+(m.disableBody?"disable-body":"")).find("[id]").removeAttr("id"),m.disableBody&&n.on(g,f),m.closeOnNavClick&&o.find("li").children("a").on("click",f),!1!==m.insertClose&&y('<li class="nav-close"><a href="#">'+(m.labelClose||"")+"<span></span></a></li>").prependTo(o.first()).children("a").on("click",T(!0,!0,f)),o.each(function(){var e=y(this),n=e.parents("li").length;if(0!==n){var a=e.parent().addClass("nav-parent"),l=a.children("a");i[n]||(i[n]=[]),i[n].push({nav:e});var o=i[n].length-1;if(i[n][o].wrapper=e.closest(".nav-wrapper"),e.wrap('<div class="nav-wrapper">').parent().on("click",x),"none"===m.levelEffect)return;var r=y('<span class="nav-next">').appendTo(l),t=y('<label for="'+s+"-"+n+"-"+o+'">').on("click",x),c=y('<input type="checkbox" id="'+s+"-"+n+"-"+o+'">').attr("data-level",n).attr("data-index",o).on("change",p);i[n][o].checkbox=c,a.prepend(c),l.attr("href")&&"#"!==l.attr("href")?r.append(t):l.on("click",T(!0,!0)).prepend(t),!1!==m.insertBack&&"transform"===m.levelEffect&&y('<li class="nav-back"><a href="#">'+(m.labelBack||"")+"<span></span></a></li>").prependTo(e).children("a").on("click",T(!0,!0,function(){return u(n,o)}))}});var t=function(e,n){if(i[e]&&i[e][n]){var a=i[e][n].checkbox,l=a.parent("li"),o=i[e][n].wrapper;a.prop("checked",!1),o.removeClass("sub-level-open"),l.removeClass("level-open")}};if(k.prepend(n),m.customToggle)y(m.customToggle).addClass(s).on("click",h);else{var d=y('<a class="hc-nav-trigger '+s+'"><span></span></a>').on("click",h);e.addClass("hc-nav "+s).after(d)}}else console.log("%c! HC MobileNav:%c Menu must contain <ul> element.","color: red","color: black");function p(){var e,n,a,l,o=y(this),r=Number(o.attr("data-level")),t=Number(o.attr("data-index"));o.prop("checked")?(n=t,a=i[e=r][n].checkbox.parent("li"),(l=i[e][n].wrapper).addClass("sub-level-open"),a.addClass("level-open"),"transform"===m.levelEffect&&(l.on("click",function(){return u(e,n)}),C(c,e*m.levelSpacing))):u(r,t)}function v(){a=!0,n.addClass("nav-open"),m.disableBody&&(l=b.scrollTop()||k.scrollTop(),k.addClass("hc-nav-open"),l&&k.css("top",-l),w.body.scrollHeight>w.body.offsetHeight&&b.addClass("hc-yscroll"))}function f(){a=!1,n.removeClass("nav-open"),c.removeAttr("style"),u(0),m.disableBody&&(k.removeClass("hc-nav-open"),b.removeClass("hc-yscroll"),l&&(k.css("top","").scrollTop(l),b.scrollTop(l),l=0))}function h(e){e.preventDefault(),e.stopPropagation(),a?f():v()}function u(e,n){for(var a=e;a<=Object.keys(i).length;a++){if(0!==a)if(a==e&&void 0!==n){if(t(a,n),"transform"===m.levelEffect)(1===e?c:i[a][n].wrapper).off("click").on("click",x),C(c,(a-1)*m.levelSpacing)}else for(var l in i[a]){if(t(a,l),"transform"===m.levelEffect)(1===e?c:i[a][l].wrapper).off("click").on("click",x),a==e&&C(c,(a-1)*m.levelSpacing)}}}})}})}(jQuery,"undefined"!=typeof window?window:this);