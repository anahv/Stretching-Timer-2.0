(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),s=a.n(r),l=a(1);var o=function(){const e=Object(n.useState)(32),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(a),o=Object(l.a)(s,2),i=o[0],m=o[1],u=new Audio("http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"),p=new Audio("http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"),d=({seconds:e})=>{const t=Object(n.useState)(e),r=Object(l.a)(t,2),s=r[0],o=r[1];return Object(n.useEffect)(()=>{if(!s)return;const e=setInterval((function(){o(s-1)}),1e3);return()=>clearInterval(e)},[s]),0===i?s?s<6&&p.play():u.play():i>0&&!s&&(m(i-1),o(10),u.play()),c.a.createElement("div",null,c.a.createElement("div",{className:"timer"},c.a.createElement("h1",null,s)),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{id:"start",className:"button",onClick:function(){o(10)}},"Start",c.a.createElement("i",{className:"fa fa-play"})),c.a.createElement("button",{id:"pause",onClick:function(){m(0),o(0)}},"Stop",c.a.createElement("i",{className:"fa fa-pause"})),c.a.createElement("button",{id:"restart",onClick:function(){m(a),o(10)}},"Restart",c.a.createElement("i",{className:"fa fa-repeat"}))))};return c.a.createElement("div",{className:"container"},c.a.createElement("header",null,c.a.createElement("h1",null,"Stretching Timer")),c.a.createElement("h2",{id:"intervalsLeft"},i,"/",a),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{id:"plus",onClick:e=>{r(a-1)}},c.a.createElement("i",{className:"fa fa-minus"})),c.a.createElement("button",{id:"plus",onClick:e=>{r(a+1)}},c.a.createElement("i",{className:"fa fa-plus"}))),c.a.createElement(d,{seconds:10}))};s.a.render(c.a.createElement(o,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)}},[[4,1,2]]]);
//# sourceMappingURL=main.3f844f23.chunk.js.map