!function(r){function t(n){if(e[n])return e[n].exports;var c=e[n]={i:n,l:!1,exports:{}};return r[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var e={};return t.m=r,t.c=e,t.i=function(r){return r},t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{configurable:!1,enumerable:!0,get:n})},t.n=function(r){var e=r&&r.__esModule?function(){return r["default"]}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},t.p="",t(t.s=47)}({22:function(r,t,e){"use strict";$("[data-circle-graph]").each(function(){var r=$(this),t=parseInt(r.data("percent"),10),e=360*t/100;t>50&&r.addClass("gt-50"),r.find(".circle-graph-progress-fill").css("transform","rotate("+e+"deg)"),r.find(".circle-graph-percents-number").html(t+"%")})},47:function(r,t,e){r.exports=e(22)}});