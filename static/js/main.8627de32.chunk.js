(this.webpackJsonpsamesies=this.webpackJsonpsamesies||[]).push([[0],{14:function(e,a,t){e.exports=t(30)},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a),t.d(a,"store",(function(){return w}));var n=t(0),r=t.n(n),c=t(5),s=t.n(c),o=t(4),l=t(3),i=t(12),d=t(1),u=t(2);function g(e){return{type:"SHUFFLE_CARDS",payload:{cards:e}}}function m(e){return{type:"FLIP_CARD",payload:{index:e}}}function p(e){return{type:"UNFLIP",payload:{index:e}}}var b=t(9),f=t.n(b),h=t(13),v=t.n(h);var F=function(){var e=f()({count:8,luminosity:"bright"}),a=f()({luminosity:"dark",hue:"blue",format:"rgb"}),t=["beardo.png","beau.png","bunnie.png","celeste.png","cesar.png","chester.png","coco.png","croque.png","daisy_mae.png","derwin.png","doc.png","dotty.png","flora.png","gaston.png","hans.png","ketchup.png","kk_slider.png","kyle.png","leif.png","lolly.png","lopez.png","mira.png","pascal.png","punchy.png","roald.png","truffles.png"],n=function(){for(var e=new Set;e.size<8;){var a=Math.floor(Math.random()*t.length);e.add(t[a])}return Object(u.a)(e)}(),r=e.map((function(e,t){return{color:e,image:n[t],isFront:!1,backColor:a,matched:!1}})),c=JSON.parse(JSON.stringify(r)),s=[].concat(Object(u.a)(r),Object(u.a)(c));return v()(s)},O={cards:F(),selectedCard:null,selectedFirst:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SHUFFLE_CARDS":var t=Object(u.a)(e.cards);return t=F(),Object(d.a)(Object(d.a)({},e),{},{cards:t,selectedCard:null,selectedFirst:null});case"UNFLIP":var n=Object(u.a)(e.cards);return n[a.payload.index].isFront=!1,Object(d.a)(Object(d.a)({},e),{},{cards:n,selectedFirst:null,selectedCard:null});case"FLIP_CARD":var r=a.payload.index,c=Object(u.a)(e.cards);return c[r].isFront=!c[r].isFront,null==e.selectedFirst?Object(d.a)(Object(d.a)({},e),{},{cards:c,selectedFirst:r}):e.selectedFirst===r?e:e.cards[r].image===e.cards[e.selectedFirst].image?Object(d.a)(Object(d.a)({},e),{},{selectedFirst:null,cards:e.cards.map((function(a){return a.image===e.cards[e.selectedFirst].image?Object(d.a)(Object(d.a)({},a),{},{matched:!0,isFront:!0}):a}))}):(setTimeout((function(){w.dispatch(p(r)),w.dispatch(p(e.selectedFirst))}),400),Object(d.a)(Object(d.a)({},e),{},{cards:c,selectedFirst:null,selectedCard:null}));default:return e}},y=Object(l.c)({game:j});t(26);var k=Object(o.b)((function(e){return{cards:e.game.cards}}),{flipCard:m})((function(e){var a=e.i,t=e.flipCard,n=e.cards[a],c=n.color,s=n.image,o=n.isFront,l=n.backColor,i=n.matched,d={backgroundColor:"".concat(c),backgroundImage:"url(".concat("/matchie_samesies","/ac/").concat(s,")")},u={backgroundColor:"".concat(l),backgroundImage:"url(".concat("/matchie_samesies","/ac/leaf_aa.png)"),backgroundSize:"cover",backgroundPosition:"50%"};return r.a.createElement("div",{id:a,onClick:i?null:function(){return t(a)},className:"card",style:o?d:u})}));t(27);var C=Object(o.b)((function(e){return{cards:e.game.cards,selectedCard:e.game.selectedCard}}),{shuffleCards:g})((function(e){var a=e.cards,t=e.shuffleCards,n=a[0].backColor,c=a.map((function(e,a){return r.a.createElement(k,{i:a,key:e.image+a})}));return r.a.createElement("div",null,r.a.createElement("input",{type:"button",className:"restart",style:{backgroundColor:"".concat(n)},onClick:function(){return t(a)},value:"reset"}),r.a.createElement("div",{className:"board"},c))}));t(28);var E=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Main"},r.a.createElement("h1",{className:"margin"},"Matchie Samesie"),r.a.createElement(C,null)))};t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=Object(l.d)(y,Object(l.a)(i.a));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:w},r.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.8627de32.chunk.js.map