(this.webpackJsonpreact_application=this.webpackJsonpreact_application||[]).push([[0],{59:function(e,t,a){e.exports=a(71)},64:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=(a(64),a(36)),o=a.n(l),m=a(43),s=a(31),u=a(20),d=a(44),p=a(45),h=a(52),E=(a(66),a(105)),f=a(109),w=a(110),g=a(111),v=a(121),b=a(123),y=a(113),k=a(115),j=a(116),O=a(117),x=a(122),U=a(114),D=a(118),I=a(119),N=a(120),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={data:{},item:{weather:"",temperature:"",icon:"",pressure:"",speed:""},placeName:""},a.apiToken="586fff59618d6d3e1be423e10c6f0ae6",a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getData",value:function(){var e=Object(m.a)(o.a.mark((function e(t){var a,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(e,t){return window.fetch(e,t).then((function(e){return e.json()})).then((function(e){return{weather:e.weather[0].description,icon:e.weather[0].icon,temperature:e.main.temp,pressure:e.main.pressure,speed:e.wind.speed}}))},n={method:"get"},"https://api.openweathermap.org/data/2.5/weather?lang=ja&units=metric",r="&appid=".concat(this.apiToken,"&id=").concat(t),e.next=6,a("https://api.openweathermap.org/data/2.5/weather?lang=ja&units=metric"+r,n);case 6:i=e.sent,this.setState({item:i});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleUpdate",value:function(e){var t=e.target.dataset.optionIndex,a=this.state.data[t];this.getData(a.id),this.setState({placeName:a.name})}},{key:"componentDidMount",value:function(){this.setState({data:[{name:"\u5ca1\u5c71\u770c \u5ca1\u5c71\u5e02",id:1858311},{name:"\u9ce5\u53d6\u770c \u9ce5\u53d6\u5e02",id:1849892},{name:"\u5e83\u5cf6\u770c \u5e83\u5cf6\u5e02",id:1862413},{name:"\u5cf6\u6839\u770c \u677e\u6c5f\u5e02",id:1861084},{name:"\u5c71\u53e3\u770c \u5c71\u53e3\u5e02",id:1863418},{name:"\u5fb3\u5cf6\u770c \u5fb3\u5cf6\u5e02",id:1858902},{name:"\u9999\u5ddd\u770c \u9ad8\u677e\u5e02",id:1857665},{name:"\u611b\u5a9b\u770c \u677e\u5c71\u5e02",id:1926099},{name:"\u9ad8\u77e5\u770c \u9ad8\u77e5\u5e02",id:1859146},{name:"\u798f\u5ca1\u770c \u798f\u5ca1\u5e02",id:1859307},{name:"\u5927\u5206\u770c \u5927\u5206\u5e02",id:1864750},{name:"\u5bae\u5d0e\u770c \u5bae\u57ce\u5e02",id:1856710},{name:"\u4f50\u8cc0\u770c \u4f50\u8cc0\u5e02",id:1853303},{name:"\u718a\u672c\u770c \u718a\u672c\u5e02",id:1858419},{name:"\u9577\u5d0e\u770c \u9577\u5d0e\u5e02",id:1856156},{name:"\u9e7f\u5150\u5cf6\u770c \u9e7f\u5150\u5cf6\u5e02",id:1860825},{name:"\u6c96\u7e04\u770c \u90a3\u8987\u5e02",id:1894616}]})}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,r.a.createElement("div",{class:"midashi"},r.a.createElement(f.a,{title:"\u4e2d\u56fd\u30fb\u56db\u56fd\u30fb\u4e5d\u5dde\u5730\u65b9\u306e\u5929\u6c17\u60c5\u5831"})),r.a.createElement(w.a,null,r.a.createElement(W,{data:this.state.data,handleUpdate:this.handleUpdate.bind(this)})),r.a.createElement(g.a,null,r.a.createElement(B,{item:this.state.item}))))}}]),t}(r.a.Component),W=function(e){return r.a.createElement(x.a,{options:e.data,getOptionLabel:function(e){return e.name},renderInput:function(e){return r.a.createElement(v.a,Object.assign({},e,{label:"\u5730\u57df\u3092\u9078\u3076",variant:"outlined",style:{width:500},fullWidth:!0}))},onChange:e.handleUpdate})},B=function(e){var t=e.item,a=t.weather,n=t.icon,i=t.temperature,c=t.pressure,l=t.speed,o=i?"\u6c17\u6e29 ".concat(i,"\u2103"):"",m=c?"\u6c17\u5727 ".concat(c,"Pa"):"",s=l?"\u98a8\u901f ".concat(l,"m/s"):"",u="http://openweathermap.org/img/wn/".concat(n,".png"),d=n?r.a.createElement(b.a,{src:u,alt:a}):r.a.createElement(U.a,null);return console.log("props",e),r.a.createElement(y.a,null,r.a.createElement(k.a,null,r.a.createElement(j.a,null,d),r.a.createElement(O.a,{primary:a})),r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement(D.a,null)),r.a.createElement(O.a,{primary:o})),r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement(I.a,null)),r.a.createElement(O.a,{primary:m})),r.a.createElement(k.a,null,r.a.createElement(j.a,null,r.a.createElement(N.a,null)),r.a.createElement(O.a,{primary:s})))},C=S;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.fbc5e8ae.chunk.js.map