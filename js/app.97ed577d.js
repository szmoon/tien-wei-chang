(function(e){function t(t){for(var i,o,u=t[0],c=t[1],r=t[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&b.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(b.length)b.shift()();return s.push.apply(s,r||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],i=!0,u=1;u<a.length;u++){var c=a[u];0!==n[c]&&(i=!1)}i&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var i={},n={app:0},s=[];function o(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=i,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/tien-wei-chang/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var r=0;r<u.length;r++)t(u[r]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0992":function(e,t,a){},"12bb":function(e,t,a){},"173d":function(e,t,a){},"23f4":function(e,t,a){},"44a3":function(e,t,a){e.exports=a.p+"img/chang-tien-wei-4.679d52f6.jpg"},"45c5":function(e,t,a){e.exports=a.p+"img/chang-tien-wei-1.ed3296c9.jpeg"},"53bb":function(e,t,a){"use strict";a("23f4")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("7a23"),n=a("67b0"),s={id:"app"},o={class:"page-content"},u={class:"container is-max-widescreen"};function c(e,t,a,n,c,r){var l=Object(i["y"])("Hero"),d=Object(i["y"])("router-view"),b=Object(i["y"])("Footer");return Object(i["r"])(),Object(i["d"])("div",s,[Object(i["h"])(l,{"with-background-image":!0,heading:"The artwork of renowned artist, Tien-Wei Chang"}),Object(i["e"])("div",o,[Object(i["e"])("div",u,[Object(i["h"])(d)])]),Object(i["h"])(b)])}var r=function(e){return Object(i["u"])("data-v-fa1a34e2"),e=e(),Object(i["s"])(),e},l={class:"hero-head"},d={class:"navbar"},b=r((function(){return Object(i["e"])("div",{class:"navbar-brand"},[Object(i["e"])("a",{class:"navbar-item"},[Object(i["e"])("p",{class:"title site-title"},"張天威 | Tien-Wei Chang")]),Object(i["e"])("span",{class:"navbar-burger","data-target":"navbarMenuHeroA"},[Object(i["e"])("span"),Object(i["e"])("span"),Object(i["e"])("span")])],-1)})),m={id:"navbarMenuHeroA",class:"navbar-menu"},p={class:"navbar-end"},v=Object(i["g"])(" Main "),f=Object(i["g"])(" Collection "),h=Object(i["g"])(" About "),g=Object(i["g"])(" Life "),j=r((function(){return Object(i["e"])("div",{class:"hero-body"},null,-1)})),O={class:"heading-container"},q={class:"title is-4"};function x(e,t,a,n,s,o){var u=Object(i["y"])("router-link");return Object(i["r"])(),Object(i["d"])("div",null,[Object(i["e"])("section",{class:Object(i["n"])(o.heroClass)},[Object(i["e"])("div",l,[Object(i["e"])("nav",d,[b,Object(i["e"])("div",m,[Object(i["e"])("div",p,[Object(i["h"])(u,{to:{name:"home"},class:Object(i["n"])(o.getNavbarItemClass("home"))},{default:Object(i["D"])((function(){return[v]})),_:1},8,["class"]),Object(i["h"])(u,{to:{name:"gallery"},class:Object(i["n"])(o.getNavbarItemClass("gallery"))},{default:Object(i["D"])((function(){return[f]})),_:1},8,["class"]),Object(i["h"])(u,{to:{name:"about"},class:Object(i["n"])(o.getNavbarItemClass("about"))},{default:Object(i["D"])((function(){return[h]})),_:1},8,["class"]),Object(i["h"])(u,{to:{name:"life"},class:Object(i["n"])(o.getNavbarItemClass("life"))},{default:Object(i["D"])((function(){return[g]})),_:1},8,["class"])])])])]),j,Object(i["e"])("div",{class:Object(i["n"])(o.heroFootClass)},[Object(i["e"])("div",O,[Object(i["e"])("h1",q,Object(i["A"])(o.subHeadingText),1)])],2)],2)])}a("4de4"),a("d3b7"),a("b0c0");var w=a("7dc5"),y={name:"Hero",components:{},props:{},data:function(){return{config:w}},computed:{subHeadingText:function(){var e=this,t=w.pages,a=t.filter((function(t){return t.routeName===e.routeName}));return a.length?a[0].heroSubheading:""},isHomepage:function(){return"home"===this.routeName},routeName:function(){return this.$route.name},heroClass:function(){return this.isHomepage?["hero","hero-bg-image","is-primary","is-medium"]:["hero","is-primary","is-small"]},heroFootClass:function(){return this.isHomepage?["hero-foot","hero-foot-centered"]:"hero-foot"}},methods:{getNavbarItemClass:function(e){return this.$route.name===e?["navbar-item","is-active"]:"navbar-item"}}},N=(a("977b"),a("d959")),_=a.n(N);const S=_()(y,[["render",x],["__scopeId","data-v-fa1a34e2"]]);var T=S,A=function(e){return Object(i["u"])("data-v-53918158"),e=e(),Object(i["s"])(),e},k={class:"footer is-fixed-bottom"},I=A((function(){return Object(i["e"])("div",{class:"content has-text-centered"},[Object(i["e"])("p",null,[Object(i["e"])("strong",null,"Bulma"),Object(i["g"])(" by "),Object(i["e"])("a",{href:"https://jgthms.com"},"Jeremy Thomas"),Object(i["g"])(". The source code is licensed "),Object(i["e"])("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),Object(i["g"])(". The website content is licensed "),Object(i["e"])("a",{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),Object(i["g"])(". ")])],-1)})),C=[I];function L(e,t,a,n,s,o){return Object(i["r"])(),Object(i["d"])("footer",k,C)}var z={name:"Footer"};a("a8a7");const H=_()(z,[["render",L],["__scopeId","data-v-53918158"]]);var J=H,M={name:"App",components:{Hero:T,Footer:J}};a("9f27");const B=_()(M,[["render",c]]);var F=B,P=(a("b383"),a("6c02")),D=a("45c5"),E=a.n(D),V=function(e){return Object(i["u"])("data-v-6535b380"),e=e(),Object(i["s"])(),e},W=Object(i["f"])('<div class="columns is-vcentered mt-5" data-v-6535b380><div class="column is-one-half" data-v-6535b380><img src="'+E.a+'" data-v-6535b380></div><div class="column" data-v-6535b380><div class="is-primary-light has-text-left" data-v-6535b380><p class="title is-5" data-v-6535b380>Flexible column</p><p class="subtitle" data-v-6535b380> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p></div></div></div><div class="mt-6" data-v-6535b380><div class="box has-text-left" data-v-6535b380><p class="subtitle" data-v-6535b380> Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p class="subtitle" data-v-6535b380> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p></div></div>',2),$={class:"mt-6"},G=V((function(){return Object(i["e"])("button",{class:"button is-primary is-large"},"View the Collection",-1)}));function R(e,t,a,n,s,o){var u=Object(i["y"])("router-link");return Object(i["r"])(),Object(i["d"])("div",null,[W,Object(i["e"])("div",$,[Object(i["h"])(u,{to:{name:"gallery"}},{default:Object(i["D"])((function(){return[G]})),_:1})])])}var U={name:"Home",components:{Hero:T}};a("c6b9");const Y=_()(U,[["render",R],["__scopeId","data-v-6535b380"]]);var K=Y,Q=function(e){return Object(i["u"])("data-v-5c5a5760"),e=e(),Object(i["s"])(),e},X={class:"mt-5"},Z=Q((function(){return Object(i["e"])("div",{class:"has-text-left"},[Object(i["e"])("h2",{class:"title is-3"},"Some heading text here"),Object(i["e"])("p",null," This collection contains finished paintings, as well as paintings that Tien-Wei Chang created as demonstrations to students. "),Object(i["e"])("p",null," Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "),Object(i["e"])("p",null," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. "),Object(i["e"])("p",null," Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. ")],-1)})),ee=[Z];function te(e,t,a,n,s,o){return Object(i["r"])(),Object(i["d"])("div",X,ee)}var ae={name:"About",components:{}};a("9e7c");const ie=_()(ae,[["render",te],["__scopeId","data-v-5c5a5760"]]);var ne=ie,se={class:"columns is-multiline mt-5"},oe={class:"card"},ue={class:"card-image"},ce={class:"image"},re=["src"];function le(e,t,a,n,s,o){var u=Object(i["y"])("router-link");return Object(i["r"])(),Object(i["d"])("div",null,[Object(i["e"])("div",se,[(Object(i["r"])(!0),Object(i["d"])(i["a"],null,Object(i["x"])(s.allArtwork,(function(e){return Object(i["r"])(),Object(i["d"])("div",{key:e.id,class:"column is-one-quarter-desktop is-half-tablet"},[Object(i["h"])(u,{to:{name:"painting",params:{id:e.id}}},{default:Object(i["D"])((function(){return[Object(i["e"])("div",oe,[Object(i["e"])("div",ue,[Object(i["e"])("figure",ce,[Object(i["e"])("img",{src:e.thumbnail,alt:""},null,8,re)])])])]})),_:2},1032,["to"])])})),128))])])}a("159b"),a("ac1f"),a("1276");var de=a("1157"),be=a.n(de),me=["https://szmoon.github.io/tien-wei-chang-images/images/A01-N01/info.json","https://szmoon.github.io/tien-wei-chang-images/images/A02-N01/info.json","https://szmoon.github.io/tien-wei-chang-images/images/A03-N01/info.json","https://szmoon.github.io/tien-wei-chang-images/images/A04-N01/info.json","https://szmoon.github.io/tien-wei-chang-images/images/A05-N01/info.json","https://szmoon.github.io/tien-wei-chang-images/images/A06-N01/info.json","https://szmoon.github.io/tien-wei-chang-images/images/A07-N01/info.json","https://szmoon.github.io/tien-wei-chang-images/images/B01-N01/info.json","https://szmoon.github.io/tien-wei-chang-images/images/B07-N01/info.json","https://szmoon.github.io/tien-wei-chang-images/images/B09-N01/info.json","https://szmoon.github.io/tien-wei-chang-images/images/B11-N01/info.json"],pe={name:"About",data:function(){return{allArtwork:[]}},components:{},mounted:function(){var e=this;me.forEach((function(t){be.a.getJSON(t,(function(t){var a={id:e.getShortId(t),thumbnail:e.getThumbnail(t)};e.allArtwork.push(a)}))}))},methods:{getShortId:function(e){var t=e["@id"],a=t.split("/");return a[a.length-1]},getThumbnail:function(e){var t=e.sizes[2].width,a=e["@id"],i=a+"/full/"+t+",/0/default.jpg";return i}}};a("fe42");const ve=_()(pe,[["render",le],["__scopeId","data-v-f83c0ed0"]]);var fe=ve,he=a("8927"),ge=a.n(he),je=a("cf14"),Oe=a.n(je),qe=a("8249"),xe=a.n(qe),we=a("f94e"),ye=a.n(we),Ne=a("c7cc"),_e=a.n(Ne),Se=a("44a3"),Te=a.n(Se),Ae=Object(i["f"])('<div class="mt-5" data-v-42b6b42c><div class="has-text-left" data-v-42b6b42c><h2 class="title is-3" data-v-42b6b42c>Some heading text here</h2></div><div class="columns mt-5" data-v-42b6b42c><div class="column is-one-third" data-v-42b6b42c><img src="'+ge.a+'" data-v-42b6b42c></div><div class="column" data-v-42b6b42c><div class="is-primary-light has-text-left" data-v-42b6b42c><p class="title is-5" data-v-42b6b42c>Flexible column</p><p data-v-42b6b42c> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p data-v-42b6b42c> Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p></div></div></div><div class="has-text-left" data-v-42b6b42c><p data-v-42b6b42c> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p data-v-42b6b42c> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p></div><div class="columns mt-5 is-vcentered" data-v-42b6b42c><div class="column is-one-half" data-v-42b6b42c><img src="'+Oe.a+'" data-v-42b6b42c></div><div class="column is-one-half" data-v-42b6b42c><img src="'+xe.a+'" data-v-42b6b42c></div></div><div class="has-text-left" data-v-42b6b42c><p data-v-42b6b42c> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p><p data-v-42b6b42c> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. </p></div><div class="columns mt-5" data-v-42b6b42c><div class="column" data-v-42b6b42c><div class="is-primary-light has-text-left" data-v-42b6b42c><p class="title is-5" data-v-42b6b42c>Flexible column</p><p data-v-42b6b42c> Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. </p></div></div><div class="column is-half" data-v-42b6b42c><img src="'+ye.a+'" data-v-42b6b42c></div></div><div class="columns mt-5 is-vcentered" data-v-42b6b42c><div class="column is-one-half" data-v-42b6b42c><img src="'+_e.a+'" data-v-42b6b42c></div><div class="column is-one-half" data-v-42b6b42c><img src="'+Te.a+'" data-v-42b6b42c></div></div></div>',1),ke=[Ae];function Ie(e,t,a,n,s,o){return Object(i["r"])(),Object(i["d"])("div",null,ke)}var Ce={name:"Life",components:{}};a("53bb");const Le=_()(Ce,[["render",Ie],["__scopeId","data-v-42b6b42c"]]);var ze=Le,He=function(e){return Object(i["u"])("data-v-69d79034"),e=e(),Object(i["s"])(),e},Je={class:"container has-text-left mb-5"},Me={class:"button is-primary is-outlined is-small"},Be=He((function(){return Object(i["e"])("span",null,"< Back to Collection",-1)})),Fe=He((function(){return Object(i["e"])("div",{class:"container has-text-left mt-5"},[Object(i["e"])("h2",{class:"title is-5"},"About"),Object(i["e"])("p",null," Text here ")],-1)}));function Pe(e,t,a,n,s,o){var u=Object(i["y"])("router-link"),c=Object(i["y"])("LeafletIiifViewer");return Object(i["r"])(),Object(i["d"])("div",null,[Object(i["e"])("div",Je,[Object(i["e"])("button",Me,[Object(i["h"])(u,{to:{name:"gallery"}},{default:Object(i["D"])((function(){return[Be]})),_:1})])]),Object(i["h"])(c,{infoJson:o.infoJsonLink},null,8,["infoJson"]),Fe])}var De={id:"map"};function Ee(e,t,a,n,s,o){return Object(i["r"])(),Object(i["d"])("div",De)}a("d81d"),a("6cc5"),a("e11e"),a("a7c5");var Ve=window.L,We={name:"LeafletIiifViewer",props:{manifestUrl:{type:String},infoJson:{type:String}},mounted:function(){this.initViewer()},methods:{initViewer:function(){var e=Ve.map("map",{center:[0,0],crs:Ve.CRS.Simple,zoom:0});this.infoJson&&Ve.tileLayer.iiif(this.infoJson,{fitBounds:!0}).addTo(e)}}};a("ba93");const $e=_()(We,[["render",Ee],["__scopeId","data-v-73537987"]]);var Ge=$e,Re={name:"Painting",components:{LeafletIiifViewer:Ge},created:function(){var e=this.$route.params.id;console.log("id",e)},computed:{infoJsonLink:function(){var e=this.$route.params.id;return"https://szmoon.github.io/tien-wei-chang-images/images/"+e+"/info.json"}}};a("a755");const Ue=_()(Re,[["render",Pe],["__scopeId","data-v-69d79034"]]);var Ye=Ue,Ke="production",Qe="production"===Ke?"/tien-wei-chang/":"/",Xe=[{name:"home",path:Qe,component:K},{name:"about",path:Qe+"about",component:ne},{name:"gallery",path:Qe+"gallery",component:fe},{name:"life",path:Qe+"life",component:ze},{name:"painting",path:Qe+"painting/:id",component:Ye}],Ze=Object(P["a"])({history:Object(P["b"])(),routes:Xe}),et=Ze,tt=Object(i["c"])(F);tt.use(et),tt.use(n["a"]),tt.mount("#app")},"57e0":function(e,t,a){},"7dc5":function(e){e.exports=JSON.parse('{"pages":[{"routeName":"home","path":"","heroLinkText":"Main","heroSubheading":"The artwork of renowned artist, Tien-Wei Chang"},{"routeName":"gallery","path":"gallery","heroLinkText":"Gallery","heroSubheading":"A collection of paintings by Tien-Wei Chang"},{"routeName":"about","path":"about","heroLinkText":"About","heroSubheading":"About this collection"},{"routeName":"life","path":"life","heroLinkText":"Life","heroSubheading":"Life & History"}]}')},8249:function(e,t,a){e.exports=a.p+"img/chang-tien-wei-9.68497529.jpg"},8927:function(e,t,a){e.exports=a.p+"img/chang-tien-wei-5.9a3ab8b3.jpg"},"977b":function(e,t,a){"use strict";a("fb1a")},"9e7c":function(e,t,a){"use strict";a("e1d3")},"9f27":function(e,t,a){"use strict";a("e7e3")},a755:function(e,t,a){"use strict";a("173d")},a8a7:function(e,t,a){"use strict";a("12bb")},b383:function(e,t,a){},b7ab:function(e,t,a){},ba93:function(e,t,a){"use strict";a("b7ab")},c6b9:function(e,t,a){"use strict";a("0992")},c7cc:function(e,t,a){e.exports=a.p+"img/chang-tien-wei-7.78de9f89.jpg"},cf14:function(e,t,a){e.exports=a.p+"img/chang-tien-wei-10.732de301.jpg"},e1d3:function(e,t,a){},e7e3:function(e,t,a){},f94e:function(e,t,a){e.exports=a.p+"img/chang-tien-wei-8.239217ea.jpg"},fb1a:function(e,t,a){},fe42:function(e,t,a){"use strict";a("57e0")}});
//# sourceMappingURL=app.97ed577d.js.map