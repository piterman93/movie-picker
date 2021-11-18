(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(6),r=n.n(c),o=(n(20),n(3)),s=n(29),u=n(30),m=a.a.createContext({loading:!0,initialFetch:!0,movies:[],error:!1,confirmItem:function(){},rejectItem:function(){}}),d=(n(21),n(1)),j=function(e){var t=e.imageURL,n=e.title,a=e.summary,c=e.rating,r=e.id,o=e.activeIndex,s=e.setActiveIndex,u=Object(i.useContext)(m);return Object(d.jsxs)("div",{className:"section__movieItem",children:[Object(d.jsx)("div",{className:"movieItem__image",children:Object(d.jsx)("img",{src:t,alt:n})}),Object(d.jsxs)("div",{className:"movieItem__description",children:[Object(d.jsxs)("h2",{children:[n," (",c,"/10)"]}),Object(d.jsx)("p",{children:a}),Object(d.jsxs)("div",{className:"actions",children:[Object(d.jsx)("button",{"data-testid":"accept-button",className:"button button__confirm",onClick:function(){return function(e){s(o+=1),u.confirmItem(e)}(r)},children:"Accept"}),Object(d.jsx)("button",{"data-testid":"reject-button",className:"button button__reject",onClick:function(){return function(e){s(o+=1),u.rejectItem(e)}(r)},children:"Reject"})]})]})]})};n(23);var l=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(0),r=Object(o.a)(c,2),l=r[0],f=r[1],h=Object(i.useState)(0),b=Object(o.a)(h,2),p=b[0],v=b[1],g=Object(i.useContext)(m),w=function(e){var t=e.changedTouches[0].clientX;f(t)},y=function(e){var t=e.changedTouches[0].clientX;v(t)},O=Object(i.useCallback)((function(){l-p<-150&&n<=g.movies.length-1&&(g.rejectItem(g.movies[n].id),a(n+1),f(0),v(0))}),[n,p,l,g]);Object(i.useEffect)((function(){return window.addEventListener("touchstart",w),window.addEventListener("touchmove",y),function(){window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",y),window.removeEventListener("touchend",O)}}),[O]),window.addEventListener("touchend",O);var z=g.movies.length===n?Object(d.jsx)("div",{className:"notification",children:"No more movies to rate!"}):Object(d.jsx)(s.a,{mode:"out-in",children:Object(d.jsx)(u.a,{addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"fade",children:Object(d.jsx)(j,{id:g.movies[n].id,imageURL:g.movies[n].imageURL,title:g.movies[n].title,summary:g.movies[n].summary,rating:g.movies[n].rating,activeIndex:n,setActiveIndex:a},g.movies[n].id)},n)}),k=g.loading&&g.initialFetch?Object(d.jsx)("div",{className:"notification",children:"Loading..."}):z;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Movie Tinder"})}),Object(d.jsx)("section",{children:k})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))},h=n(14),b=n(4),p=n.n(b),v=n(9),g=[{id:"1",imageURL:"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",title:"Inferno",summary:"Robert Langdon budzi si\u0119 we florenckim szpitalu i za spraw\u0105 tajemniczego przedmiotu zostaje celem ob\u0142awy. Ucieka z pomoc\u0105 doktor Sienny, pod\u0105\u017caj\u0105c \u015bladem wskaz\xf3wek zawartych w poemacie Dantego.",rating:7.3},{id:"2",imageURL:"https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg",title:"Star Wars: Episode VII - The Force Awakens",summary:"Rey odnajduje Luke'a Skywalkera, by nam\xf3wi\u0107 go na powr\xf3t i walk\u0119 z Najwy\u017cszym Porz\u0105dkiem. Tymczasem Rebelianci pr\xf3buj\u0105 uciec przed flot\u0105 wroga.",rating:8.2},{id:"3",imageURL:"https://fwcdn.pl/fpo/54/09/695409/7641076.3.jpg",title:"Gone Girl",summary:"Po przeprowadzce Amy i Nick prze\u017cywaj\u0105 kryzys. Gdy w dniu rocznicy \u015blubu kobieta znika bez \u015bladu, jej m\u0105\u017c staje si\u0119 g\u0142\xf3wnym podejrzanym.",rating:7.6},{id:"4",imageURL:"https://fwcdn.pl/fpo/09/98/998/7314731.3.jpg",title:"Forrest Gump",summary:"Historia \u017cycia Forresta, ch\u0142opca o niskim ilorazie inteligencji z niedow\u0142adem ko\u0144czyn, kt\xf3ry staje si\u0119 miliarderem i bohaterem wojny w Wietnamie.",rating:9.1},{id:"5",imageURL:"https://a.allegroimg.com/original/115ff0/f21862b74a818d099ddb61dce75f/INTERSTELLAR-DVD",title:"Interstellar",summary:"Byt ludzko\u015bci na Ziemi dobiega ko\u0144ca wskutek zmian klimatycznych. Grupa naukowc\xf3w odkrywa tunel czasoprzestrzenny, kt\xf3ry umo\u017cliwia poszukiwanie nowego domu.",rating:8.4}],w=function(){var e=Object(v.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("URL/recommendations/".concat(t,"/accept"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw e;return e.json()})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(v.a)(p.a.mark((function e(t,n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("URL/recommendations/".concat(t,"/reject"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw e;return e.json()})).catch((function(e){throw e})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),O=function(e){var t=e.children,n=Object(i.useState)([]),a=Object(o.a)(n,2),c=a[0],r=a[1],s=Object(i.useState)(!0),u=Object(o.a)(s,2),j=u[0],l=u[1],f=Object(i.useState)(!0),b=Object(o.a)(f,2),O=b[0],z=b[1],k=Object(i.useState)(!1),x=Object(o.a)(k,2),L=x[0],I=x[1],T=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g;case 2:t=e.sent,r(t||[]),l(!1),z(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){setTimeout((function(){T()}),1e3)}),[]);var N={loading:j,initialFetch:O,movies:c,error:L,confirmItem:function(e){l(!0);var t=Object(h.a)(c).find((function(t){return t.id===e}));w(e,t).then((function(e){})).catch((function(e){I(e)})).finally((function(){return l(!1)}))},rejectItem:function(e){l(!0);var t=Object(h.a)(c).find((function(t){return t.id===e}));y(e,t).then((function(e){})).catch((function(e){I(e)})).finally((function(){return l(!1)}))}};return Object(d.jsx)(m.Provider,{value:N,children:t})};r.a.render(Object(d.jsx)(O,{children:Object(d.jsx)(l,{})}),document.getElementById("root")),f()}},[[27,1,2]]]);
//# sourceMappingURL=main.f3aae8a8.chunk.js.map