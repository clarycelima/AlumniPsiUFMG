(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["redes"],{"01a7":function(e,t,a){},3024:function(e,t,a){},"52ff":function(e,t,a){"use strict";var r=a("01a7"),n=a.n(r);n.a},"81b5":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("cabecalho",{attrs:{titulo:"Redes de colaboração"}}),a("div",{staticClass:"container-fluid mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[a("div",{staticClass:"nav flex-column nav-pills",attrs:{"aria-orientation":"vertical"}},[a("a",{class:"nav-link "+(0==e.tab?"active":""),attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),function(){return e.tab=0}()}}},[e._v("Redes")]),a("a",{class:"nav-link "+(1==e.tab?"active":""),attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),function(){return e.tab=1}()}}},[e._v("Completa")]),a("a",{class:"nav-link "+(2==e.tab?"active":""),attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),function(){return e.tab=2}()}}},[e._v("Somente Artigos")]),a("a",{class:"nav-link "+(3==e.tab?"active":""),attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),function(){return e.tab=3}()}}},[e._v("Somente Orientações")])])]),a("div",{staticClass:"col-9"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[0==e.tab?a("div",[a("h1",{staticClass:"mb-4"},[e._v("Sobre as redes produzidas")]),a("p",[e._v("Falar sobre as redes...")]),a("p",[e._v("Falar sobre as redes...")]),a("p",[e._v("Falar sobre as redes...")]),a("p",[e._v("Falar sobre as redes...")]),a("p",[e._v("Falar sobre as redes...")]),a("p",[e._v("Falar sobre as redes...")]),a("p",[e._v("Falar sobre as redes...")]),a("p",[e._v("Falar sobre as redes...")])]):e._e(),1==e.tab?a("div",[e.completo?a("grafo",{attrs:{data:e.completo,labels:["Egresso","Orientador","Externo"],titulo:"Rede Completa"}}):e._e()],1):e._e(),2==e.tab?a("div"):e._e(),3==e.tab?a("div",[e.orientacoes?a("arvore",{attrs:{data:e.orientacoes,titulo:"Árvore Genealógica"}}):e._e()],1):e._e()])])])])])],1)},n=[],i=(a("ac6a"),a("96cf"),a("3b8d")),o=a("bc3a"),l=a.n(o),s=a("f46a"),u=a("88f7"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-chart",{attrs:{options:e.graph,autoresize:""}})},d=[],f={name:"Grafo",props:{data:{type:Object,default:void 0},labels:{type:Array,default:function(){return[]}},categoryField:{type:String,default:"autortipo"},titulo:{type:String,default:""}},data:function(){return{graph:void 0}},mounted:function(){if(void 0!=this.data){var e=this.categoryField;this.data.nodes.forEach(function(t){t.itemStyle=null,t.value=t.symbolSize,t.symbolSize/=1.5,t.label={normal:{show:t.symbolSize>20}},t.category=t.attributes[e],delete t["attributes"]});var t={title:{text:this.titulo,subtext:"Default layout",top:"bottom",left:"right"},tooltip:{},legend:[{data:this.labels}],animationDuration:1500,animationEasingUpdate:"quinticInOut",series:[{name:"Indivíduo",type:"graph",layout:"none",data:this.data.nodes,links:this.data.links,categories:this.labels.map(function(e){return{name:e}}),roam:!0,focusNodeAdjacency:!0,itemStyle:{normal:{borderColor:"#fff",borderWidth:1,shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.3)"}},label:{position:"right",formatter:"{b}"},lineStyle:{color:"source",curveness:.3},emphasis:{lineStyle:{width:4}}}]};this.graph=t}}},v=f,p=(a("b8a3"),a("2877")),m=Object(p["a"])(v,c,d,!1,null,null,null),b=m.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-chart",{attrs:{options:e.tree,autoresize:""}})},g=[],y={name:"Arvore",props:{data:{type:Object,default:void 0},titulo:{type:String,default:""}},data:function(){return{tree:void 0,data2:{name:"flare",children:[{name:"flex",children:[{name:"FlareVis",value:4116}]},{name:"scale",children:[{name:"IScaleMap",value:2105},{name:"LinearScale",value:1316},{name:"LogScale",value:3151},{name:"OrdinalScale",value:3770},{name:"QuantileScale",value:2435},{name:"QuantitativeScale",value:4839},{name:"RootScale",value:1756},{name:"Scale",value:4268},{name:"ScaleType",value:1821},{name:"TimeScale",value:5833}]},{name:"display",children:[{name:"DirtySprite",value:8833}]}]}}},mounted:function(){if(void 0!=this.data){var e={tooltip:{trigger:"item",triggerOn:"mousemove"},title:{text:this.titulo,subtext:"Default layout",top:"bottom",left:"right"},legend:{top:"5%",left:"5%",orient:"vertical",data:[{name:"tree1",icon:"rectangle"},{name:"tree2",icon:"rectangle"}],borderColor:"#c23531"},series:[{type:"tree",data:[this.data],top:"5%",bottom:"55%",layout:"radial",symbol:"emptyCircle",symbolSize:7,initialTreeDepth:3,animationDurationUpdate:750},{type:"tree",data:[this.data2],top:"55%",bottom:"5%",layout:"radial",symbol:"emptyCircle",symbolSize:7,initialTreeDepth:3,animationDurationUpdate:750}]};this.tree=e}}},S=y,_=(a("9d0e"),Object(p["a"])(S,h,g,!1,null,null,null)),w=_.exports,C={name:"Redes",components:{Cabecalho:u["a"],Grafo:b,Arvore:w},data:function(){return{completo:void 0,orientacoes:void 0,tab:0}},computed:{},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("data/teste.gexf").then(function(e){t.completo=Object(s["parse"])(e.data),t.completo.nodes.forEach(function(e){e.attributes.autortipo--})});case 2:return e.next=4,l.a.get("data/flare.json").then(function(e){t.orientacoes=e.data});case 4:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},x=C,k=(a("52ff"),Object(p["a"])(x,r,n,!1,null,null,null));t["default"]=k.exports},"9d0e":function(e,t,a){"use strict";var r=a("3024"),n=a.n(r);n.a},b8a3:function(e,t,a){"use strict";var r=a("c2a0"),n=a.n(r);n.a},c2a0:function(e,t,a){},f46a:function(e,t,a){var r=a("6d8b");function n(e){var t;if("string"===typeof e){var a=new DOMParser;t=a.parseFromString(e,"text/xml")}else t=e;if(!t||t.getElementsByTagName("parsererror").length)return null;var r=u(t,"gexf");if(!r)return null;for(var n=u(r,"graph"),s=i(u(n,"attributes")),c={},d=0;d<s.length;d++)c[s[d].id]=s[d];return{nodes:o(u(n,"nodes"),c),links:l(u(n,"edges"))}}function i(e){return e?r.map(c(e,"attribute"),function(e){return{id:s(e,"id"),title:s(e,"title"),type:s(e,"type")}}):[]}function o(e,t){return e?r.map(c(e,"node"),function(e){var a=s(e,"id"),r=s(e,"label"),n={id:a,name:r,itemStyle:{normal:{}}},i=u(e,"viz:size"),o=u(e,"viz:position"),l=u(e,"viz:color"),d=u(e,"attvalues");if(i&&(n.symbolSize=parseFloat(s(i,"value"))),o&&(n.x=parseFloat(s(o,"x")),n.y=parseFloat(s(o,"y"))),l&&(n.itemStyle.normal.color="rgb("+[0|s(l,"r"),0|s(l,"g"),0|s(l,"b")].join(",")+")"),d){var f=c(d,"attvalue");n.attributes={};for(var v=0;v<f.length;v++){var p=f[v],m=s(p,"for"),b=s(p,"value"),h=t[m];if(h){switch(h.type){case"integer":case"long":b=parseInt(b,10);break;case"float":case"double":b=parseFloat(b);break;case"boolean":b="true"==b.toLowerCase();break;default:}n.attributes[m]=b}}}return n}):[]}function l(e){return e?r.map(c(e,"edge"),function(e){var t=s(e,"id"),a=s(e,"label"),r=s(e,"source"),n=s(e,"target"),i={id:t,name:a,source:r,target:n,lineStyle:{normal:{}}},o=i.lineStyle.normal,l=u(e,"viz:thickness"),c=u(e,"viz:color");return l&&(o.width=parseFloat(l.getAttribute("value"))),c&&(o.color="rgb("+[0|s(c,"r"),0|s(c,"g"),0|s(c,"b")].join(",")+")"),i}):[]}function s(e,t){return e.getAttribute(t)}function u(e,t){var a=e.firstChild;while(a){if(1==a.nodeType&&a.nodeName.toLowerCase()==t.toLowerCase())return a;a=a.nextSibling}return null}function c(e,t){var a=e.firstChild,r=[];while(a)a.nodeName.toLowerCase()==t.toLowerCase()&&r.push(a),a=a.nextSibling;return r}t.parse=n}}]);
//# sourceMappingURL=redes.fee50c21.js.map