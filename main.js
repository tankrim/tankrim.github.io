(()=>{"use strict";var e={460:()=>{var e=document.getElementById("rbw"),t=(document.getElementsByTagName("html")[0],"ontouchstart"in window?"touchend":"click"),n=["remove","add"],o=["Add more contrast","Remove additional contrast","Inverted mode","Normal mode"];function r(e,o,r){var d=document.getElementsByTagName("html")[0],a=document.getElementById(e),c=a.firstChild,i=!1;a.addEventListener(t,(function(){var e=Number(i=!i);c.data=o[e],d.classList[n[e]](r)}),!1)}!function(){var e=document.createElement("button");e.id="contrast",e.classList.add("cont-inv"),e.innerText=o[0],e.tabIndex=1;var t=document.createElement("button");t.id="invmode",t.classList.add("cont-inv"),t.innerText=o[2],t.tabIndex=2,document.body.appendChild(e),document.body.appendChild(t)}(),function t(){var n="hsl("+currentHue+", 80%, 60%)",o=currentHue+hueAddition;currentHue=o>360?0:o,e.style.color=n,setTimeout(t,40)}(),r("contrast",[o[0],o[1]],"contrast"),r("invmode",[o[2],o[3]],"inverted")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,n),d.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n(460)})();