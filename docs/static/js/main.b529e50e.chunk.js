(window["webpackJsonpm3-evaluacion-final-laudmazzaferro"]=window["webpackJsonpm3-evaluacion-final-laudmazzaferro"]||[]).push([[0],{23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(20),l=t.n(c),s=(t(28),t(8)),i=t(5),m=t(6),u=t(9),o=t(7),p=t(14),d=t(10),h=(t(29),function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.charapter;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__img-container"},r.a.createElement("img",{src:e.image,alt:"Imagen de".concat(e.name),className:"card__img"})),r.a.createElement("div",{className:"card__name-specie"},r.a.createElement("h2",{className:"card__name"},e.name),r.a.createElement("p",{className:"card__specie"},e.species)))}}]),a}(r.a.Component)),E=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.charapters,t=e.userInput;return r.a.createElement("ol",{className:"charapterList"},a.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())})).map((function(e){return r.a.createElement("li",{className:"charapter",key:e.id},r.a.createElement(s.b,{to:"/charapter-detail/".concat(e.id),className:"charapter-link"},r.a.createElement(h,{charapter:e})))})))}}]),a}(r.a.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(u.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props,a=e.userInput,t=e.getUserInput;return r.a.createElement("div",{className:"App-input-container"},r.a.createElement("input",{className:"App-input",type:"text",value:a,onChange:t,placeholder:"Buscar por nombre"}))}}]),a}(r.a.Component),b=t(11),v=function(e){var a=e.routerProps,t=e.charapters,n=parseInt(a.match.params.chapId),c=t.filter((function(e){return e.id===n}));if(c[0]){var l=c[0],i=l.name,m=l.image,u=l.status,o=l.species,p=l.origin,d=l.episode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"detail-container"},r.a.createElement("div",{className:"detail-img-container"},r.a.createElement("img",{className:"detail-img",src:m,alt:i})),r.a.createElement("div",{lassName:"detail-charapter-container"},r.a.createElement("h3",{className:"detail-title"},"".concat(i)),r.a.createElement("ul",null,r.a.createElement("li",{className:"detail-li ".concat("Alive"===u?"":"hidden")},"Status: ",r.a.createElement("i",{class:"fas fa-heart"})," "),r.a.createElement("li",{className:"detail-li ".concat("Dead"===u?"":"hidden")},"Status: ",r.a.createElement("i",{class:"fas fa-skull-crossbones"})),r.a.createElement("li",{className:"detail-li ".concat("unknown"===u?"":"hidden")},"Status: ",r.a.createElement("i",{class:"fas fa-question-circle"})),r.a.createElement("li",{className:"detail-li"},"Species: ".concat(o)),r.a.createElement("li",{className:"detail-li"},"Origin: ".concat(p.name)),r.a.createElement("li",{className:"detail-li"},"Episodes: ".concat(d.length)))),r.a.createElement(s.b,{to:"/",className:"app__back"},"<  Volver")))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Personaje no existente"),r.a.createElement(s.b,{to:"/",className:"app__back"},"Volver al listado"))},N=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(u.a)(this,Object(o.a)(a).call(this,e))).state={charapters:[],userInput:""},t.getUserInput=t.getUserInput.bind(Object(p.a)(t)),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.getCharapters()}},{key:"getCharapters",value:function(){var e=this;fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(a){e.setState({charapters:a.results})}))}},{key:"getUserInput",value:function(e){var a=e.currentTarget.value;this.setState({userInput:a})}},{key:"render",value:function(){var e=this,a=this.state,t=a.charapters,n=a.userInput;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"L ")),r.a.createElement("main",{className:"App-main"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,r.a.createElement(f,{userInput:n,getUserInput:e.getUserInput}),r.a.createElement(E,{charapters:t,userInput:n}))}}),r.a.createElement(b.a,{path:"/charapter-detail/:chapId",render:function(e){return r.a.createElement(v,{routerProps:e,charapters:t})}}))))}}]),a}(r.a.Component);l.a.render(r.a.createElement(s.a,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b529e50e.chunk.js.map