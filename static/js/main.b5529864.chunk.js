(this["webpackJsonpreact-webapp"]=this["webpackJsonpreact-webapp"]||[]).push([[0],{77:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),r=n.n(i),o=n(13),s=n.n(o),c=(n(77),n(44)),l=n(31),d=n(65),j=n(64),b=n(42),u=n(14),m=n.p+"static/media/uva-logo.687e30c7.png";function p(){return Object(a.jsx)("nav",{className:"flex-center",children:Object(a.jsx)("img",{src:m,alt:"Uva"})})}function h(){return Object(a.jsx)("footer",{className:"flex-center",children:"Vragen? Mail naar dinkvdplas@gmail.com"})}function g(e){return Object(a.jsx)("div",{style:{padding:e.padding}})}function v(e){return void 0===e.active||e.active?Object(a.jsx)(b.b,{className:"button main-button",to:e.to,onClick:e.onClick,children:e.children}):Object(a.jsx)(a.Fragment,{})}function O(e){var t=e.available?{}:{backgroundColor:"#eeeeee",color:"gray"};return Object(a.jsx)("div",{className:"button next-round-button",onClick:e.action,style:t,children:"Volgende Ronde"})}function x(e){return Object(a.jsx)("div",{className:"".concat(e.selected?"selected":""," game-action-button"),onClick:e.action,children:e.children})}var f=function(){return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{className:"content-element",children:"Welkom bij onze enqu\xeate + spel"}),Object(a.jsx)("p",{className:"content-element",children:"Eerst ga je een aantal vragen beantwoorden en vervolgens ga je een spel spelen. Doe je best, er staat een prijs op het spel!"}),Object(a.jsx)(v,{to:"/form",children:"Volgende"})]})},k=n(126),N=function(e){return Object(a.jsxs)("div",{className:"question-box",children:[Object(a.jsx)("p",{children:e.statement}),Object(a.jsx)(k.a,{defaultValue:e.val,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,onChange:e.onChange,marks:!0,min:1,max:7})]})},w=sessionStorage.getItem("responseId"),S=sessionStorage.getItem("gameHistory"),z=sessionStorage.getItem("slideStatements"),y=sessionStorage.getItem("personalQuestions"),I=w||Math.random().toString(36).substr(2,9),C=S?JSON.parse(S):{},q={};sessionStorage.setItem("responseId",I);var J=z?JSON.parse(z):[{id:"interest",statement:"Ik ben zeer ge\xefnteresseerd in politiek.",value:4},{id:"ident_eu",statement:"Ik identificeer mezelf meer als Nederlander dan Europeaan.",value:4},{id:"ident_wereld",statement:"Ik identificeer mezelf meer als Nederlander dan Wereldburger.",value:4,next_bar:!0},{id:"staten_bepalen",statement:"Staten bepalen wat er gebeurt in de internationale politiek. Overkoepelende organisaties kunnen geen effectieve invloed uitvoeren op staten als staten dat niet toelaten.",value:4},{id:"mening_vertegenwoordig",statement:"Internationaal gezien vertegenwoordigt de Nederlandse overheid de mening van de gemiddelde Nederlandse burger.",value:4},{id:"staat_rationeel",statement:"De staat handelt rationeel en gaat zo effectief mogelijk te werk.",value:4},{id:"veiligheid1",statement:"(inter)-Nationale veiligheid is de grootste en belangrijkste drijfveer voor de politiek van een staat.",value:4},{id:"veiligheid2",statement:"Internationale politiek kan uiteindelijk allemaal teruggeleid worden naar kwesties van nationale veiligheid.",value:4,next_bar:!0},{id:"bedrijven",statement:"Niet alleen staten maar ook internationale organisaties of bedrijven hebben veel invloed op de wereldpolitiek.",value:4},{id:"vrede",statement:"Relaties en gezamenlijke belangen tussen landen en organisaties bevorderen vrede.",value:4},{id:"themas",statement:"Er zijn allerlei thema\u2019s die van belang zijn in de politiek, naast veiligheid spelen bijvoorbeeld ook klimaat, mensenrechten en economische belangen een rol. ",value:4},{id:"binnen_buiten",statement:"Nationaal beleid wordt sterker be\xefnvloed door politiek binnen een land dan factoren van buitenaf.",value:4},{id:"china",statement:"Nederland moet nu meer handelen met China, omdat dat economische, politieke en religieuze vrijheden in China zal bevorderen.",value:4}];var D=y?JSON.parse(y):{age:{id:"leeftijd",question:"Hoe oud ben je?",value:""},sex:{id:"geslacht",question:"Van welk geslacht ben je?",value:""},email:{id:"email",question:"Wat is je email? (optioneel, voor de prijs)",value:""},knewPd:{id:"pdBekend",question:"Kende je het Prisoners Dillemma spel al?",value:""},remarks:{id:"opmerkingen",question:"Heb je nog opmerkingen? Bijv. snapte je iets niet?",value:""}};function _(e,t){D[e].value=t}var A=n(57);n(88);A.a.initializeApp({apiKey:"AIzaSyBCt8CN7oQukbW20IDD3ZUciX__WiPzauI",authDomain:"thema3-1608728919442.firebaseapp.com",databaseURL:"https://thema3-1608728919442-default-rtdb.europe-west1.firebasedatabase.app",projectId:"thema3-1608728919442",storageBucket:"thema3-1608728919442.appspot.com",messagingSenderId:"443770907024",appId:"1:443770907024:web:b07a8a7314b8d91e4c2b15"});var B=A.a.firestore();function E(e){B.collection("responses").doc(I).set(e,{merge:!0})}var F=function(){var e=J.map((function(e,t){var n=function(e,n){!function(e,t){J[t].value=e,sessionStorage.setItem("slideStatements",JSON.stringify(J))}(n,t)};return e.next_bar?Object(a.jsxs)("div",{children:[Object(a.jsx)(N,{statement:e.statement,val:e.value,onChange:n}),Object(a.jsx)(R,{})]},e.id):Object(a.jsx)(N,{statement:e.statement,val:e.value,onChange:n},e.id)}));return Object(i.useEffect)((function(e){window.scrollTo(0,0)}),[]),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{className:"content-element",children:"Laat ons weten of je het er mee eens bent!"}),Object(a.jsx)("p",{className:"content-element",children:"Laat ons weten in hoeverre je het met de volgende uitspraken eens bent. Kies je '1', dan ben je het er helemaal niet mee eens. Kies je '7', dan ben je het er volledig mee eens."}),e,Object(a.jsx)(v,{onClick:function(){E({form:J.map((function(e){return{qId:e.id,value:e.value}}))})},to:"/game-intro",children:"Send"}),Object(a.jsx)(g,{padding:"5rem 0"})]})};function R(){return Object(a.jsx)("div",{className:"content_element",style:{height:"0.2rem",backgroundColor:"black",width:"100%",marginBottom:"5rem",marginTop:"2rem",borderRadius:"0.5rem"}})}var P=n(11),W=n.p+"static/media/pd.335011d1.jpg",K=function(){return Object(a.jsx)("img",{src:W,alt:"The prisoners dilemma",style:{height:"12rem",border:"1px solid black",borderRadius:"0.5rem",marginBottom:"3rem",boxShadow:"1rem 1rem grey"}})},H=function(){var e=Object(i.useState)(0),t=Object(P.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)(""),s=Object(P.a)(o,2),c=s[0],l=s[1];function d(){r(n+1)}function j(e){q.action=e,l(e)}return Object(i.useEffect)((function(){r(0)}),[]),0==n?Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{className:"content-element",children:"Nu begint het spel."}),Object(a.jsx)("p",{className:"content-element",children:'Stel je voor je bent een crimineel en jij en je partner in crime zijn gearresteerd. Je kan ervoor kiezen de ander te verraden, waardoor je minder lang in de gevangenis hoeft te zitten, maar de ander langer. In het spel dat je zo gaat spelen zit je een soortgelijke situatie, en heet daarom van origine: "the prisoners dillemma".'}),Object(a.jsx)("p",{className:"content-element",children:"In onze vorm van het spel heb je elke ronde twee keuzes: je kan voor cooperate of voor defect kiezen. Als jij en je tegenstander voor cooperate kiezen, krijgen jullie allebei 3 punten. Als jullie beiden voor defect kiezen, krijgen jullie allebei 1 punt. Als de \xe9\xe9n voor cooperate kiest en de ander voor defect, krijgt degene die voor cooperate koos 0 punten en degene die voor defect koos 5 punten."}),Object(a.jsx)(K,{}),Object(a.jsx)("p",{className:"content-element",children:"Je gaat straks 5 rondes van dit spel spelen tegen drie verschillende tegenstanders. Deze tegenstanders spelen niet live tegen jou, maar hebben een paar weken eerder laten weten wat ze in elke mogelijke situatie zouden doen. Wat die spelers kiezen hangt dus af van wat jij in de rondes daarvoor speelt."}),Object(a.jsx)("p",{className:"content-element",children:"Elke ronde worden je punten bij je totale score opgeteld. Hoe meer punten je hebt, hoe meer kans je maakt op de prijs van 20 euro, dus zorg dat je het goed doet! Je tegenstanders (die al eerder hebben gespeeld) spelen echter om een andere prijs, dus hoeveel punten zij hebben beinvloedt niet jouw kans op de prijs. We beginnen met een test-ronde."}),Object(a.jsx)("div",{onClick:d,className:"button main-button",children:"Start Test Ronde"}),Object(a.jsx)(g,{padding:"5rem"})]}):1==n?Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{className:"content-element",children:"Wat kies je?"}),Object(a.jsx)(x,{selected:"cooperate"==c,action:function(){return j("cooperate")},children:"Cooperate"}),Object(a.jsx)(x,{selected:"defect"==c,action:function(){return j("defect")},children:"Defect"}),Object(a.jsx)(g,{padding:"1rem"}),""!=c&&Object(a.jsx)("div",{onClick:function(){d(),E({testRound:c})},className:"button main-button",children:"Kies"}),Object(a.jsx)(g,{padding:"1rem"}),Object(a.jsx)(K,{})]}):2==n?Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{className:"content-element",children:"Nu begin je voor het echie!"}),Object(a.jsx)(v,{to:"/game1",children:"Begin"})]}):void 0};function L(e){var t=e.opponent,n=e.gameId;C[n]||(C[n]=[]);var r=Object(u.e)(),o=Object(i.useState)(1),s=Object(P.a)(o,2),c=s[0],l=s[1],d=Object(i.useState)(0),j=Object(P.a)(d,2),b=j[0],m=j[1],p=Object(i.useState)(""),h=Object(P.a)(p,2),f=h[0],k=h[1],N=Object(i.useState)(""),w=Object(P.a)(N,2),S=w[0],z=w[1],y=Object(i.useState)(0),I=Object(P.a)(y,2),q=I[0],J=I[1],D=Object(i.useState)(""),_=Object(P.a)(D,2),A=_[0],B=_[1];function F(){if(""!=S){B(S);var e=t();k(e);var a=function(e){return"defect"==e&&"defect"==S?1:"defect"==e&&"cooperate"==S?0:"cooperate"==e&&"defect"==S?5:"cooperate"==e&&"cooperate"==S?3:null}(e);m(b+a),J(a),l(c+1),function(e,t,n,a,i,r){C[e].push({opponentAction:a,roundNumber:t,playerAction:n,roundScore:i,totalScore:r}),sessionStorage.setItem("gameHistory",JSON.stringify(C))}(n,c,S,e,a,b+a),z(""),E({games:C})}}function R(e){z(S==e?"":e)}return Object(i.useEffect)((function(e){if(C[n].length>=5)r.push("/retry");else if(0!=C[n].length){var t=C[n][C[n].length-1];l(t.roundNumber+1),k(t.opponentAction),z(t.playerAction),B(t.playerAction),m(t.totScore),J(t.roundScore)}}),[]),Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{className:"content-element",children:1==c?Object(a.jsx)(a.Fragment,{children:"Eerste ronde: wat kies je?"}):5==c?Object(a.jsx)(a.Fragment,{children:"Laatste ronde: wat kies je?"}):c>5?Object(a.jsx)(a.Fragment,{children:e.endGreeting}):Object(a.jsxs)(a.Fragment,{children:["Ronde ",c,": wat kies je?"]})}),1!=c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h2",{style:{marginBottom:"1rem",color:"#c21807",fontSize:"1.2rem"},children:[q," punten! Je score is nu ",b," (in dit spel)."]}),Object(a.jsxs)("p",{className:"content-element",style:{color:"#aaaaaa"},children:["Je tegenstander koos ",f," en jij koos"," ",A,", dus je krijgt ",q," punten."]})]}),c<=5&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x,{selected:"cooperate"==S,action:function(){return R("cooperate")},children:"Cooperate"}),Object(a.jsx)(x,{selected:"defect"==S,action:function(){return R("defect")},children:"Defect"})]}),c<=5?Object(a.jsx)(O,{action:F,available:""!=S}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{padding:"1.5rem"}),Object(a.jsx)(v,{to:e.to,onClick:F,children:"Klaar"})]}),Object(a.jsx)(g,{padding:"1rem"}),c<=5&&Object(a.jsx)(K,{}),Object(a.jsx)(g,{padding:"2rem"})]})}var V=n(123),G=n(127),T=n(125),M=n(128),Q=n(124);function U(e){var t={backgroundColor:e.color?e.color:"white",color:e.textcolor?e.textcolor:"black",display:"flex",flexDirection:"column",alignItems:"center",padding:"2rem 3rem",borderRadius:"1rem",border:"2px solid black"};return Object(a.jsxs)("div",{className:"content-element",style:t,children:[Object(a.jsx)("p",{style:{marginBottom:"2rem"},children:e.question}),e.children]})}var X=function(){var e=Object(i.useState)(D.age.value),t=Object(P.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)(D.email.value),s=Object(P.a)(o,2),c=s[0],l=s[1],d=Object(i.useState)(D.sex.value),j=Object(P.a)(d,2),b=j[0],u=j[1],m=Object(i.useState)(D.remarks.value),p=Object(P.a)(m,2),h=p[0],O=p[1],x=Object(i.useState)(D.knewPd.value),f=Object(P.a)(x,2),k=f[0],N=f[1];function w(){_("age",n),_("email",c),_("sex",b),_("remarks",h),_("knewPd",k),sessionStorage.setItem("personalQuestions",JSON.stringify(D));var e=[];Object.keys(D).forEach((function(t){var n=D[t];e.push({id:n.id,value:n.value})})),E({personalQuestions:e})}return Object(a.jsxs)("div",{className:"content",children:[Object(a.jsx)("h2",{className:"content-element",children:"Ten slotte hebben we een paar vragen over jou."}),Object(a.jsx)(U,{question:D.age.question,children:Object(a.jsx)(V.a,{id:"outlined-basic",label:"leeftijd",variant:"outlined",value:n,onChange:function(e){r(e.target.value),w()}})}),Object(a.jsx)(U,{question:D.sex.question,children:Object(a.jsx)(G.a,{component:"fieldset",children:Object(a.jsxs)(T.a,{"aria-label":D.sex.id,name:D.sex.id,value:b,onChange:function(e){u(e.target.value),w()},children:[Object(a.jsx)(M.a,{value:"man",control:Object(a.jsx)(Q.a,{}),label:"man"}),Object(a.jsx)(M.a,{value:"vrouw",control:Object(a.jsx)(Q.a,{}),label:"vrouw"}),Object(a.jsx)(M.a,{value:"anders",control:Object(a.jsx)(Q.a,{}),label:"anders"})]})})}),Object(a.jsx)(U,{question:D.knewPd.question,children:Object(a.jsx)(G.a,{component:"fieldset",children:Object(a.jsxs)(T.a,{"aria-label":D.knewPd.id,name:D.knewPd.id,value:k,onChange:function(e){N(e.target.value),w()},children:[Object(a.jsx)(M.a,{value:"ja",control:Object(a.jsx)(Q.a,{}),label:"ja"}),Object(a.jsx)(M.a,{value:"nee",control:Object(a.jsx)(Q.a,{}),label:"nee"})]})})}),Object(a.jsx)(U,{question:D.email.question,children:Object(a.jsx)(V.a,{id:"outlined-basic",label:D.email.id,variant:"outlined",value:c,onChange:function(e){l(e.target.value),w()}})}),Object(a.jsx)(U,{question:D.remarks.question,children:Object(a.jsx)(V.a,{id:"outlined-basic",label:D.remarks.id,variant:"outlined",value:h,onChange:function(e){O(e.target.value),w()}})}),Object(a.jsx)(v,{to:"/bye",onClick:w,children:"Volgende"}),Object(a.jsx)(g,{padding:"3rem"})]})};function Z(){return Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("h2",{children:"Dat was het. Hartstikke bedankt en een fijne dag verder!"})})}var Y=[{id:"75coopgame",opponent:function(e){return $(.75)}},{id:"25coopgame",opponent:function(e){return $(.25)}},{id:"50coopgame",opponent:function(e){return $(.5)}}];function $(e){return Math.random()<e?"cooperate":"defect"}var ee=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(p,{}),Object(a.jsxs)(b.a,{children:[Object(a.jsx)(u.a,{exact:!0,path:"/",children:Object(a.jsx)(f,{})}),Object(a.jsx)(u.a,{path:"/personal-form",children:Object(a.jsx)(X,{})}),Object(a.jsx)(u.a,{path:"/form",children:Object(a.jsx)(F,{})}),Object(a.jsx)(u.a,{path:"/game-intro",children:Object(a.jsx)(H,{})}),Object(a.jsx)(u.a,{path:"/game1",children:Object(a.jsx)(L,{gameId:Y[0].id,opponent:Y[0].opponent,to:"/game2",endGreeting:"Goed zeg, klaar voor het tweede spel?!"})}),Object(a.jsx)(u.a,{path:"/game2",children:Object(a.jsx)(L,{gameId:Y[1].id,opponent:Y[1].opponent,to:"/game3",endGreeting:"Klaar voor de derde?"})}),Object(a.jsx)(u.a,{path:"/game3",children:Object(a.jsx)(L,{gameId:Y[2].id,opponent:Y[2].opponent,to:"/personal-form",endGreeting:"Lekker gedaan hoor, je hoeft hierna niet meer te spelen."})}),Object(a.jsx)(u.a,{path:"/bye",children:Object(a.jsx)(Z,{})}),Object(a.jsx)(u.a,{path:"/retry",children:Object(a.jsx)("div",{className:"content",children:Object(a.jsx)("h2",{children:"Je kan het maar \xe9\xe9n keer proberen helaas :)"})})})]}),Object(a.jsx)(h,{})]})}}]),n}(r.a.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(ee,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.b5529864.chunk.js.map