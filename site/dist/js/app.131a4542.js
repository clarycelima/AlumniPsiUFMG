(function(e){function t(t){for(var r,n,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)n=o[u],i[n]&&d.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var o=a[n];0!==i[o]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},i={app:0},s=[];function o(e){return c.p+"js/"+({"publicacoes~redes":"publicacoes~redes",publicacoes:"publicacoes",redes:"redes",sobre:"sobre"}[e]||e)+"."+{"publicacoes~redes":"4852a436",publicacoes:"d2ed0d90",redes:"fee50c21",sobre:"8c3e67eb"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={redes:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise(function(t,a){for(var r="css/"+({"publicacoes~redes":"publicacoes~redes",publicacoes:"publicacoes",redes:"redes",sobre:"sobre"}[e]||e)+"."+{"publicacoes~redes":"31d6cfe0",publicacoes:"31d6cfe0",redes:"e143647a",sobre:"31d6cfe0"}[e]+".css",i=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.request=r,delete n[e],p.parentNode.removeChild(p),a(s)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){n[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(function(t,a){r=i[e]=[t,a]});t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e),l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=i[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+n+")");s.type=r,s.request=n,a[1](s)}i[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/AlumniPsiUFMG/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1f94":function(e,t,a){},"23eb":function(e,t,a){"use strict";var r=a("388c"),n=a.n(r);n.a},"2f37":function(e,t,a){e.exports=a.p+"img/ufmg-logo.10238f14.jpg"},"303b":function(e,t,a){},"388c":function(e,t,a){},4114:function(e,t,a){e.exports=a.p+"img/depsi-rodape.79ffa83d.jpg"},5545:function(e,t,a){"use strict";var r=a("303b"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),a("main",[a("router-view")],1),a("rodape")],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Alumni Psi UFMG")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"menu"}},[a("ul",{staticClass:"navbar-nav ml-auto mt-2 mt-lg-0"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Página Inicial")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/publicacoes"}},[e._v("Publicações")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/orientacoes"}},[e._v("Orientações")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/dados"}},[e._v("Dados")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/redes"}},[e._v("Redes")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/conheca"}},[e._v("Conheça o Projeto")])],1),a("li",{staticClass:"nav-item ml-4"},[a("a",{staticClass:"github",attrs:{title:"Ir para o repositório",target:"_blank",href:"https://github.com/clarycelima/AlumniPsiUFMG"}},[a("svg",{staticClass:"octicon octicon-mark-github",attrs:{height:"36",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])]),a("a",{staticClass:"nav-link float-left",attrs:{target:"_blank",href:"https://github.com/clarycelima/AlumniPsiUFMG"}},[e._v("Visualizar repositório")])])])])],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#menu","aria-controls":"menu","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c={name:"Navbar"},l=c,u=(a("a972"),a("2877")),d=Object(u["a"])(l,s,o,!1,null,"e9b67110",null),p=d.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"rodape"},[r("h4",[e._v("Alumni Psi UFMG")]),r("p",{staticClass:"info"},[e._v("+ informações....")]),r("p",{staticClass:"contato"},[e._v("Contato: "),r("a",{attrs:{href:"@mailto:admin@site.com.br"}},[e._v("admin@site.com.br")])]),r("div",{staticClass:"row justify-content-md-center"},[r("div",{staticClass:"content col-md-auto"},[r("div",[r("img",{attrs:{src:a("4114"),height:"80",alt:""}}),r("img",{attrs:{src:a("ae5d"),height:"80",alt:""}}),r("img",{attrs:{src:a("2f37"),height:"80",alt:""}})]),r("div",[r("img",{attrs:{src:a("bf7b"),width:"150",alt:""}})])])])])}],b=(a("fc3d"),{}),v=Object(u["a"])(b,f,m,!1,null,"6486b9d5",null),h=v.exports,g={name:"App",components:{Navbar:p,Rodape:h}},_=g,C=(a("6ebb"),Object(u["a"])(_,n,i,!1,null,"499957dc",null)),y=C.exports,k=a("8c4f"),P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("cabecalho",{attrs:{titulo:"Alumni Psi UFMG","descricao-primaria":"Descrição...","descricao-secundaria":"Mais info...",conheca:!0}}),a("div",{staticClass:"home container"},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)],1)},j=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[e._v("\n  ....\n")])},w=[],O={name:"HelloWorld",props:{msg:String}},E=O,S=(a("23eb"),Object(u["a"])(E,x,w,!1,null,"4b2a497d",null)),A=S.exports,M=a("88f7"),T={name:"home",components:{HelloWorld:A,Cabecalho:M["a"]}},$=T,F=Object(u["a"])($,P,j,!1,null,null,null),G=F.exports;r["a"].use(k["a"]);var N=new k["a"]({routes:[{path:"/",name:"home",component:G},{path:"/conheca",name:"conheca",component:function(){return a.e("sobre").then(a.bind(null,"d09e"))}},{path:"/redes",name:"redes",component:function(){return Promise.all([a.e("publicacoes~redes"),a.e("redes")]).then(a.bind(null,"81b5"))}},{path:"/publicacoes",name:"publicacoes",component:function(){return Promise.all([a.e("publicacoes~redes"),a.e("publicacoes")]).then(a.bind(null,"57a9"))}},{path:"/orientacoes",name:"orientacoes",component:function(){return Promise.all([a.e("publicacoes~redes"),a.e("publicacoes")]).then(a.bind(null,"57a9"))}}]}),U=a("9ca8");a("94b1"),a("007d"),a("2f73"),a("ef97"),a("d28f"),a("627c"),a("23ee"),a("ef97a"),a("1f94"),a("4989");r["a"].config.productionTip=!1,r["a"].component("v-chart",U["a"]),new r["a"]({router:N,render:function(e){return e(y)}}).$mount("#app")},"6ebb":function(e,t,a){"use strict";var r=a("8263"),n=a.n(r);n.a},"7a7b":function(e,t,a){},8263:function(e,t,a){},"88f7":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"jumbotron text-center"},[a("h1",{staticClass:"display-4"},[e._v(e._s(e.titulo))]),e.descricaoPrimaria?a("p",{staticClass:"lead"},[e._v(e._s(e.descricaoPrimaria))]):e._e(),e.descricaoPrimaria&&e.descricaoSecundaria?a("hr",{staticClass:"my-4"}):e._e(),e.descricaoSecundaria?a("p",[e._v(e._s(e.descricaoSecundaria))]):e._e(),e.conheca?a("p",{staticClass:"lead"},[a("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/conheca",role:"button"}},[e._v("Conheça o Projeto")])],1):e._e()])},n=[],i={name:"Cabecalho",props:{titulo:{type:String,required:!0},descricaoPrimaria:{type:String},descricaoSecundaria:{type:String},conheca:{type:Boolean,default:!1}}},s=i,o=(a("5545"),a("2877")),c=Object(o["a"])(s,r,n,!1,null,"b028cbd8",null);t["a"]=c.exports},a972:function(e,t,a){"use strict";var r=a("7a7b"),n=a.n(r);n.a},ac93:function(e,t,a){},ae5d:function(e,t,a){e.exports=a.p+"img/fafich-logo.6c7a576c.jpg"},bf7b:function(e,t,a){e.exports=a.p+"img/by-nc-sa.e1746d3e.jpg"},fc3d:function(e,t,a){"use strict";var r=a("ac93"),n=a.n(r);n.a}});
//# sourceMappingURL=app.131a4542.js.map