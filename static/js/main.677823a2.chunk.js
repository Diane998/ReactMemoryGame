(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);var i=a(7),r=a(0),s=a(28),c=a.n(s),n=a(79),l=a(66),o=a(75),p=a(76),h=a(81),d=a(80),b=a(118),m=a(123),u=a(44),j=a.n(u),S=a(121),g=a(120),O=a(119),f=function(e){var t=e.ship,a=e.onShipSelect;return Object(i.jsxs)(g.a,{color:"grey",raised:!0,onClick:function(){return a(t)},fluid:!0,children:[Object(i.jsx)(O.a,{src:t.imgUrl}),Object(i.jsx)(g.a.Content,{children:Object(i.jsx)(g.a.Header,{children:t.title})})]})},x=function(e){var t=e.ships,a=e.onShipSelect,r=j.a.shuffle(t).map((function(e,t){return Object(i.jsx)(S.a.Column,{children:Object(i.jsx)(f,{onShipSelect:a,ship:e})},t)}));return Object(i.jsx)(S.a,{style:{marginTop:"20px"},doubling:!0,stackable:!0,columns:4,children:r})},w=a(122),y=a(117),U=function(e){var t=e.ships,a=t.score,r=t.highScore;return Object(i.jsx)(w.a.Group,{compact:!0,raised:!0,children:Object(i.jsxs)(w.a,{inverted:!0,children:[Object(i.jsxs)(m.a,{as:"h3",children:["Score: ",a]}),Object(i.jsx)(y.a,{}),Object(i.jsxs)(m.a,{as:"h3",children:["High Score: ",r]})]})})},v=a.p+"static/media/Lambda-class Imperial Shuttle.0a54104a.jpg",I=a.p+"static/media/\u200bRadiant VII.3a7772b9.png",C=a.p+"static/media/\u200bNaboo Royal Cruiser.ab56cd74.webp",R=a.p+"static/media/Vulture Droid.95d8ba68.webp",F=a.p+"static/media/Razor Crest.103cfee7.webp",M=a.p+"static/media/Tantive IV.f43aac76.webp",T=a.p+"static/media/MG-100 StarFortress bomber.b18f1a54.webp",V=a.p+"static/media/Naboo Royal Starship.6afa7058.webp",k=a.p+"static/media/Fulminatrix.7b822ecd.webp",G=a.p+"static/media/TIE fighter.d9d7922a.webp",L=a.p+"static/media/Separatist dreadnought.42662a64.webp",N=a.p+"static/media/Lando Calrissian's Millennium Falcon.5189fb68.webp",z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ships:[{title:"Lambda-class Imperial Shuttle",imgUrl:v},{title:"Radiant VII",imgUrl:I},{title:"Naboo Royal Cruiser",imgUrl:C},{title:"Vulture Droid",imgUrl:R},{title:"Razor Crest",imgUrl:F},{title:"Tantive IV",imgUrl:M},{title:"MG-100 StarFortress bomber",imgUrl:T},{title:"Naboo Royal Starship",imgUrl:V},{title:"Fulminatrix",imgUrl:k},{title:"Imperial-era TIE fighter",imgUrl:G},{title:"Separatist dreadnought",imgUrl:L},{title:"Lando Calrissian's Millennium Falcon",imgUrl:N}],selectedShips:[],score:0,highScore:0},e.onShipSelect=function(t){j.a.some(e.state.selectedShips,t)?e.setState((function(t){return Object(l.a)(Object(l.a)({},t),{},{selectedShips:[],highScore:Math.max(t.score,e.state.highScore),score:0})})):e.setState({selectedShips:[].concat(Object(n.a)(e.state.selectedShips),[t]),score:j.a.add(e.state.score,1)})},e}return Object(p.a)(a,[{key:"render",value:function(){return Object(i.jsxs)(b.a,{textAlign:"center",style:{width:"95%"},children:[Object(i.jsx)(m.a,{as:"h1",style:{marginTop:"20px",color:"white"},children:"Memory Game"}),Object(i.jsx)(U,{ships:this.state}),Object(i.jsx)(x,{ships:this.state.ships,onShipSelect:this.onShipSelect})]})}}]),a}(r.Component);a(102),a(103);c.a.render(Object(i.jsx)(z,{}),document.querySelector("#root"))}},[[104,1,2]]]);
//# sourceMappingURL=main.677823a2.chunk.js.map