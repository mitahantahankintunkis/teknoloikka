import{o as e,c as a,F as i,p as t,a as o,b as l,r as n,d as s,t as r,e as u,u as c,n as d,f as m,g as p,i as v,h as f,j as b,k,l as h,m as y,q as g,O as w,s as q,v as I,w as _,x as j,y as L,z as S,A as x,B as A}from"./vendor.53aa10af.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver((e=>{for(const i of e)if("childList"===i.type)for(const e of i.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&a(e)})).observe(document,{childList:!0,subtree:!0})}function a(e){if(e.ep)return;e.ep=!0;const a=function(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?a.credentials="include":"anonymous"===e.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(e);fetch(e.href,a)}}();var C=(e,a)=>{for(const[i,t]of a)e[i]=t;return e};const K={},V=e=>(t("data-v-5fbf4e54"),e=e(),o(),e),B=V((()=>l("h1",null,"Teknoloikan PoC",-1))),M=V((()=>l("p",null," Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti perspiciatis quasi, exercitationem quod ad sint ea, alias odit neque quo fuga dolore deserunt explicabo? Aspernatur perspiciatis veniam nesciunt suscipit delectus! ",-1))),T=V((()=>l("h1",null,"Sit amet consectatur",-1))),N=V((()=>l("ul",null,[l("li",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptates?"),l("li",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit."),l("li",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non in suscipit harum sapiente. Velit, voluptates.")],-1))),D=V((()=>l("h1",null,"Lorem ipsum dolor sit amet consectetur",-1))),E=V((()=>l("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloremque pariatur, libero eum voluptas nobis facilis earum sunt ex exercitationem perferendis maxime laboriosam fugiat quia iusto nostrum provident aperiam facere ea tempore itaque ut! Dolorum laborum numquam eum consequatur hic sit natus animi quasi explicabo, blanditiis commodi ex obcaecati voluptas.",-1)));var H=C(K,[["render",function(t,o){return e(),a(i,null,[B,M,T,N,D,E],64)}],["__scopeId","data-v-5fbf4e54"]]);const J={},O=[(e=>(t("data-v-edb71898"),e=e(),o(),e))((()=>l("img",{class:"logo",src:"/teknoloikka/assets/ukv.6997dd2d.png",alt:"logo"},null,-1)))];var P=C(J,[["render",function(i,t){return e(),a("header",null,O)}],["__scopeId","data-v-edb71898"]]);var $=C({emits:["click"],setup:(i,{emit:t})=>(i,o)=>{const l=n("font-awesome-icon");return e(),a("div",{onClick:o[0]||(o[0]=e=>t("click")),class:"circle-button"},[s(l,{color:"white",icon:"comment-alt"})])}},[["__scopeId","data-v-60670c58"]]);var z=C({props:{message:String,own:Boolean},setup(i){const t=i,{message:o,own:n}=r(t);return(i,t)=>(e(),a("div",{class:d(["message",{"own-msg":c(n),"bot-msg":!c(n)}])},[l("p",null,u(c(o)),1)],2))}},[["__scopeId","data-v-10aae2b5"]]);const U={class:"cont"},Y={updated(){this.$nextTick((function(){const e=document.querySelectorAll(".bubble");e[e.length-1].scrollIntoView({behavior:"smooth"})}))}};var F=C(Object.assign(Y,{props:{history:Array},setup:function(t){const o=t,{history:l}=r(o);return(t,o)=>(e(),a("div",U,[(e(!0),a(i,null,m(c(l),(a=>(e(),p(z,{class:"bubble",key:a.id,own:a.own,message:a.message},null,8,["own","message"])))),128))]))}}),[["__scopeId","data-v-0cf7d00e"]]);const G={class:"replies"},W=["onClick"];var Z=C({props:{replies:Array},emits:["click"],setup(t,{emit:o}){const l=t,{replies:n}=r(l);return(t,l)=>(e(),a("div",G,[(e(!0),a(i,null,m(c(n),(i=>(e(),a("div",{key:i.id,onClick:e=>o("click",i.id),class:"reply"},u(i.label),9,W)))),128))]))}},[["__scopeId","data-v-273d0d7c"]]);const Q={class:"chat-window"},R={class:"chat-header"},X={class:"chat-header-left"},ee=(e=>(t("data-v-055fc873"),e=e(),o(),e))((()=>l("p",null,"UKV-botti",-1))),ae={class:"chat-header-right"},ie={class:"chat-content"},te={class:"chat-messages"},oe={class:"chat-controls"};var le=C({emits:["close"],setup(i,{emit:t}){const o=v("db");let r=0;const u=[{id:r++,label:"Beep-boop, olen UKV-botti 🤖. Minulla olisi muutama kysymys Krapin bootcapmista"},{id:r++,label:"Voit keskustella minun kanssani painamalla alla olevia vaihtoehtoja. Kaikki vastaukset ovat täysin anonyymejä, jotenka voit vastata niihin huoletta"},{id:r++,label:"Työstimme eilen oppiraportteja. Missä vaiheessa arvioisit teidän raporttinne olevan?"},{id:r++,label:"Miten arvioisitte eilisen illallisen?"},{id:r++,label:"Monta tuntia sait nukuttua viime yönä?"},{id:r++,label:"Hienoa!"},{id:r++,label:"Muutaman päivän selviää hieman alhaisemmalla unimäärällä, mutta pidemmän päälle kannattaa nukkua yli kahdeksan tuntia päivässä. Jos päivän aikana alkaa väsyttämään, niin kannattaa harkita lyhyitä 10 minuutin päiväunia"},{id:r++,label:"Yöunien suositeltu mitta on vähintään kahdeksan tuntia. Jo yhden tunnin ylimääräinen yöuni saa ihmeitä aikaan, olet virkeämpi, innovatiivisempi ja muisti lakkaa pätkimästä."},{id:r++,label:"Jos olet autolla matkassa, niin kannattaa ottaa päiväunet ennen lähtöä. Vähäisten yöunien vaikutus ajamiseen on verrattavissa humalatilaan"},{id:r++,label:"Asteikolla 1-5, miten yleisesti arvioisit minun kanssani keskustelemista?"},{id:r++,label:"Kiitos vastauksistasi, ja mukavaa päivänjatkoa!"}];r=0;const c=[{id:r++,from:0,to:1,label:null},{id:r++,from:1,to:2,label:"Haluan vastata Krapin kyselyyn"},{id:r++,from:2,to:3,label:"Sen on valmis"},{id:r++,from:2,to:3,label:"Viimeistelyä vaille valmis"},{id:r++,from:2,to:3,label:"Se on noin puolivälissä"},{id:r++,from:2,to:3,label:"Vasta alkuvaiheissa"},{id:r++,from:3,to:4,label:"⭐⭐⭐⭐⭐"},{id:r++,from:3,to:4,label:"⭐⭐⭐⭐"},{id:r++,from:3,to:4,label:"⭐⭐⭐"},{id:r++,from:3,to:4,label:"⭐⭐"},{id:r++,from:3,to:4,label:"⭐"},{id:r++,from:4,to:5,label:"Yli 8 tuntia"},{id:r++,from:4,to:6,label:"6-8 tuntia"},{id:r++,from:4,to:7,label:"4-6 tuntia"},{id:r++,from:4,to:8,label:"Alle 4 tuntia"},{id:r++,from:5,to:9,label:null},{id:r++,from:6,to:9,label:null},{id:r++,from:7,to:9,label:null},{id:r++,from:8,to:9,label:null},{id:r++,from:9,to:10,label:"5"},{id:r++,from:9,to:10,label:"4"},{id:r++,from:9,to:10,label:"3"},{id:r++,from:9,to:10,label:"2"},{id:r++,from:9,to:10,label:"1"}],d=f(0),m=f([]),p=f([]),g=f(!0);function w(e,a,i,t){const l=function(){let e=localStorage.getItem("uid");return e||(e=y(),localStorage.setItem("uid",e)),e}();try{const n=b(o,"conversations");k(n,{uid:l,edge_id:t,parent:e,next:a,message:i,timestamp:h()})}catch(n){console.error("Could not write to the database",n)}}function q(e,a=!1,i=0){g.value=!1;const t=u.find((a=>a.id===e)),o=a?100:800*(Math.random()/2+.5);i>20?console.error("Too many chained replies."):setTimeout((()=>{const e=c.filter((e=>e.from===t.id));e.length>0&&!e[0].label?q(e[0].to,a,i+1):(m.value=c.filter((e=>e.from===t.id)),g.value=!0),d.value=t.id,p.value.push({id:`n-${t.id}`,message:t.label,own:!1})}),o)}function I(e){if(!g.value)return;g.value=!1;const{id:a,to:i,label:t}=c.find((a=>a.id===e));w(d.value,i,t,a),p.value.push({id:`e-${e}`,message:t,own:!0}),q(i)}function _(){q(0)}return q(0),(i,o)=>{const r=n("font-awesome-icon");return e(),a("div",Q,[l("div",R,[l("div",X,[s(r,{color:"#eeeeee",icon:"user-circle"}),ee]),l("div",ae,[s(r,{onClick:_,color:"#eeeeee",icon:"redo"}),s(r,{onClick:o[0]||(o[0]=e=>t("close")),color:"#eeeeee",icon:"chevron-down"})])]),l("div",ie,[l("div",te,[s(F,{history:p.value},null,8,["history"])]),l("div",oe,[s(Z,{onClick:I,replies:m.value},null,8,["replies"])])])])}}},[["__scopeId","data-v-055fc873"]]);const ne={setup(t){let o=f(!0);function n(){o.value=!o.value}return(t,r)=>(e(),a(i,null,[s(P),l("main",null,[s(H)]),c(o)?(e(),p(le,{key:0,onClose:n})):(e(),p($,{key:1,onClick:n}))],64))}};g({apiKey:"AIzaSyB5P1AT6LfuHDpvq3BwcZ6e0Ep2oqSBfqs",authDomain:"teknoloikka.firebaseapp.com",projectId:"teknoloikka",storageBucket:"teknoloikka.appspot.com",messagingSenderId:"629736918817",appId:"1:629736918817:web:b3fb7b923e48b3173db860",measurementId:"G-WLT1N81235"});const se=w();q.add(I),q.add(_),q.add(j),q.add(L),q.add(S),x(ne).component("font-awesome-icon",A).provide("db",se).mount("#app");