(function(t){function e(e){for(var n,l,i=e[0],c=e[1],s=e[2],u=0,p=[];u<i.length;u++)l=i[u],r[l]&&p.push(r[l][0]),r[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},o=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("1356"),r=a.n(n);r.a},"0401":function(t,e,a){"use strict";var n=a("c096"),r=a.n(n);r.a},1356:function(t,e,a){},1670:function(t,e,a){"use strict";var n=a("78e2"),r=a.n(n);r.a},2831:function(t,e,a){"use strict";var n=a("ae1e"),r=a.n(n);r.a},"4e84":function(t,e,a){"use strict";var n=a("7e1b"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("router-view")],1)},l=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-component",attrs:{id:"toolbar"}},[a("v-toolbar",{attrs:{color:"indigo",dark:""}},[a("v-toolbar-side-icon"),a("v-toolbar-title",{staticClass:"home",on:{click:function(e){return e.stopPropagation(),t.toDashBoard()}}},[t._v("Sheriff of Nottingham Score Calculator")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-dialog",{attrs:{persistent:"","max-width":"350"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({attrs:{flat:""},on:{click:function(e){t.dialog=!0}}},n),[t._v("New Game")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline",style:{color:t.currentColor}},[a("strong",[t._v("New Game")])]),a("v-card-text",{style:{color:t.currentColor}},[t._v("Are you sure you want to start a new game? All players info will be lost")]),a("v-card-actions",[a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:function(e){return t.startNewGame()}}},[t._v("Yes")]),a("v-spacer"),a("v-btn",{attrs:{color:"error",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("No")])],1)],1)],1),a("v-btn",{attrs:{flat:""},on:{click:function(e){return e.stopPropagation(),t.toRanking()}}},[t._v("Ranking")])],1)],1)],1)},c=[],s=(a("a481"),a("cebc")),d=a("2f62"),u={name:"Toolbar",data:function(){return{dialog:!1}},computed:Object(s["a"])({},Object(d["c"])(["currentColor"])),methods:Object(s["a"])({},Object(d["d"])(["newGame"]),{startNewGame:function(){this.dialog=!1,this.newGame()},toDashBoard:function(){this.$router.replace("/dashboard")},toRanking:function(){this.$router.replace("/ranking")}})},p=u,f=(a("898e"),a("2877")),v=a("6544"),b=a.n(v),m=a("8336"),h=a("b0af"),y=a("99d9"),g=a("12b2"),x=a("169a"),_=a("9910"),C=a("71d9"),k=a("2a7f"),V=a("706c"),S=Object(f["a"])(p,i,c,!1,null,"9ca37188",null),w=S.exports;b()(S,{VBtn:m["a"],VCard:h["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:g["a"],VDialog:x["a"],VSpacer:_["a"],VToolbar:C["a"],VToolbarItems:k["a"],VToolbarSideIcon:V["a"],VToolbarTitle:k["b"]});var P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-component"},[a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"btn-add",attrs:{fab:"",dark:"",color:"indigo"},on:{click:function(e){return t.openPlayerDialog()}}},n),[a("v-icon",{attrs:{dark:""}},[t._v("add")])],1)]}}])},[a("span",[t._v("Add new player")])])],1)},j=[],O={methods:Object(s["a"])({},Object(d["d"])(["openPlayerDialog"]))},D=O,T=a("132d"),N=a("3a2f"),q=Object(f["a"])(D,P,j,!1,null,"17fec472",null),A=q.exports;b()(q,{VBtn:m["a"],VIcon:T["a"],VTooltip:N["a"]});var B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-xs-center"},[a("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"app-component",staticStyle:{"font-size":"1.25em"}},[a("v-card-title",{staticClass:"headline success white--text"},[t._v("Calculate Score")]),a("v-card-text",[a("p",{staticStyle:{"font-size":"1.25em"}},[a("strong",[t._v("Do you really want to calculate the game score?")])])]),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{color:"success",flat:""},on:{click:function(e){return t.calculateGameScore()}}},[t._v("Confirm")]),a("v-spacer"),a("v-btn",{attrs:{color:"error",flat:""},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v("Close")])],1)],1)],1)],1),a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticStyle:{"background-color":"forestgreen"},attrs:{fab:"",dark:""},on:{click:function(e){t.dialog=!0}}},n),[a("v-icon",[t._v("mdi-calculator")]),a("span",{staticClass:"mdi mdi-calculator"})],1)]}}])},[a("span",[t._v("Calculate score")])])],1)},E=[],I={name:"ScoreButton",data:function(){return{dialog:!1}},computed:Object(s["a"])({},Object(d["e"])(["players"])),methods:Object(s["a"])({},Object(d["b"])(["calculateScore"]),{calculateGameScore:function(){this.dialog=!1,this.calculateScore()}})},R=I,$=(a("0401"),a("ce7e")),F=Object(f["a"])(R,B,E,!1,null,"ea944da8",null),L=F.exports;b()(F,{VBtn:m["a"],VCard:h["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:g["a"],VDialog:x["a"],VDivider:$["a"],VIcon:T["a"],VSpacer:_["a"],VTooltip:N["a"]});var G={name:"App",components:{Toolbar:w,AddButton:A,ScoreButton:L},data:function(){return{}}},M=G,z=(a("034f"),a("7496")),J=Object(f["a"])(M,o,l,!1,null,null,null),Q=J.exports;b()(J,{VApp:z["a"]});var Y=a("8c4f"),H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("Toolbar"),a("v-container",{attrs:{"grid-list-md":"","text-ms-center":"",fluid:""}},[t.players.length?t._e():a("div",{staticClass:"headline-container"},[a("div",{staticClass:"title-container"},[a("h1",[t._v("Welcome to"),a("br"),t._v(" Sheriff of Nottingham "),a("br"),t._v(" Score Calculator")])]),a("br"),a("br"),a("h2",{staticStyle:{color:"darkgoldenrod"}},[t._v("Please insert new players to calculate a game score")])]),a("PlayerForm"),a("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},t._l(t.players,function(e,n){return a("v-flex",{key:e.id,attrs:{shrink:""}},[a("Player",{attrs:{color:t.colorMap[n],player:e}})],1)}),1)],1),a("div",{staticClass:"btn-fixed-container"},[a("div",[a("AddButton")],1),a("div",[a("ScoreButton")],1)])],1)},U=[],W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player app-component"},[a("v-card",{attrs:{hover:""}},[a("v-card-title",{staticClass:"title",style:{backgroundColor:t.color},attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.player.name))]),a("div",[t._v(t._s(t.subtitle))])])]),a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:""}},[a("p",[t._v("Apple: "+t._s(t.playerInfo.apple))])]),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:""}},[a("p",[t._v("Cheese: "+t._s(t.playerInfo.cheese))])]),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:""}},[a("p",[t._v("Bread: "+t._s(t.playerInfo.bread))])]),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:""}},[a("p",[t._v("Chicken: "+t._s(t.playerInfo.chicken))])]),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:""}},[a("p",[t._v("Contraband: "+t._s(t.playerInfo.contrabandScore))])]),a("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:""}},[a("p",[t._v("Coins: "+t._s(t.playerInfo.coin))])])],1)],1),t.player.kings||t.player.queens?a("div",{staticClass:"footer"},[a("v-divider"),t._l(t.player.kings,function(e,n){return a("v-card-text",{key:n},[a("p",{staticStyle:{color:"orange"}},[a("strong",[t._v("\n            "+t._s(e)+" king!\n            "),a("span",{staticStyle:{float:"right"}},[t._v("+ "+t._s(t.kingEnum[e]))])])])])}),t._l(t.player.queens,function(e,n){return a("v-card-text",{key:n},[a("p",{staticStyle:{color:"silver"}},[a("strong",[t._v("\n            "+t._s(e)+" queen!\n            "),a("span",{staticStyle:{float:"right"}},[t._v("+ "+t._s(t.queenEnum[e]))])])])])})],2):t._e(),a("v-dialog",{attrs:{"max-width":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"error"},on:{click:function(e){t.dialog=!0}}},[t._v("Delete")]),a("v-spacer"),t.player.score>=0?a("div",{staticClass:"player-score"},[t._v("Score: "+t._s(t.playerInfo.score))]):t._e()],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"app-component",staticStyle:{"font-size":"1.25em"}},[a("v-card-title",{staticClass:"headline",style:{color:t.color}},[a("strong",[t._v("Delete player")])]),a("v-card-text",{style:{color:t.color}},[t._v("Are you sure you want to delete this player? This action can't be undone.")]),a("v-card-actions",[a("v-btn",{attrs:{color:"green darken-1",flat:""},on:{click:function(e){return t.deleteNewPlayer(t.player.id)}}},[t._v("Yes")]),a("v-spacer"),a("v-btn",{attrs:{color:"error",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("No")])],1)],1)],1)],1)],1)},K=[],X={data:function(){return{dialog:!1,subtitle:"",kingEnum:{apple:20,bread:15,cheese:15,chicken:10},queenEnum:{apple:10,bread:10,cheese:10,chicken:5}}},computed:{playerInfo:function(){return this.player},playerScore:function(){return this.player.score}},props:["color","player"],methods:Object(s["a"])({},Object(d["b"])(["deletePlayer"]),{deleteNewPlayer:function(t){this.deletePlayer(t),this.dialog=!1}})},Z=X,tt=(a("4e84"),a("0e8f")),et=a("a722"),at=Object(f["a"])(Z,W,K,!1,null,"ffee5206",null),nt=at.exports;b()(at,{VBtn:m["a"],VCard:h["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:g["a"],VDialog:x["a"],VDivider:$["a"],VFlex:tt["a"],VLayout:et["a"],VSpacer:_["a"]});var rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.playerDialog,callback:function(e){t.playerDialog=e},expression:"playerDialog"}},[a("v-card",{staticClass:"app-component"},[a("v-card-title",[t.editing?a("v-flex",{attrs:{xs10:"",sm6:"",md4:""}},[a("v-text-field",{staticClass:"headline",attrs:{color:t.currentColor},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1):a("span",{staticClass:"headline",style:{color:t.currentColor}},[t._v(t._s(t.name))]),a("v-btn",{attrs:{icon:""}},[a("v-icon",{on:{click:function(e){return t.toggleEdit()}}},[t._v(t._s(t.editing?"check":"edit"))])],1)],1),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Apples*",color:t.currentColor,type:"number",min:"0",max:"99",required:""},model:{value:t.apple,callback:function(e){t.apple=e},expression:"apple"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Breads*",type:"number",color:t.currentColor,min:"0",max:"99",required:""},model:{value:t.bread,callback:function(e){t.bread=e},expression:"bread"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Cheeses*",color:t.currentColor,type:"number",min:"0",max:"99",required:""},model:{value:t.cheese,callback:function(e){t.cheese=e},expression:"cheese"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Chickens*",color:t.currentColor,type:"number",min:"0",max:"99",required:""},model:{value:t.chicken,callback:function(e){t.chicken=e},expression:"chicken"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Contrabands*",color:t.currentColor,type:"number",min:"0",max:"99",hint:"if a contraband is not in the list, add the score here",required:""},model:{value:t.contrabandScore,callback:function(e){t.contrabandScore=e},expression:"contrabandScore"}})],1),a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-text-field",{attrs:{label:"Coins*",color:t.currentColor,type:"number",min:"0",max:"99",hint:"example of helper text only on focus",required:""},model:{value:t.coin,callback:function(e){t.coin=e},expression:"coin"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-combobox",{attrs:{color:t.currentColor,items:t.contrabandList,"item-text":"name","item-value":"name","return-object":"",tags:"",chips:"",multiple:"","deletable-chips":"",hint:"Press the selected contraband number to increment quantity","persistent-hint":"",label:"Contrabands"},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("v-chip",{key:JSON.stringify(e.item),staticClass:"v-chip--select-multi",attrs:{close:"",selected:e.selected,disabled:e.disabled},on:{click:function(t){t.stopPropagation(),e.parent.selectedIndex=e.index},input:function(a){return t.removeContraband(e.item)}}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.hover;return a("v-avatar",{staticClass:"badge white--text",style:{backgroundColor:t.currentColor},on:{click:function(a){return a.stopPropagation(),t.addContraband(e.item)}}},r?[a("span",[t._v("+")])]:[a("span",[t._v(t._s(e.item.quantity))])])}}],null,!0)}),t._v("\n\n                    "+t._s(e.item.name)+"\n                    ")],1)]}}]),model:{value:t.selectedContrabands,callback:function(e){t.selectedContrabands=e},expression:"selectedContrabands"}})],1)],1)],1),a("span",[t._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{style:{color:t.currentColor},attrs:{flat:""},on:{click:function(e){return t.closeDialog()}}},[t._v("Close")]),a("v-btn",{style:{color:t.currentColor},attrs:{flat:""},on:{click:function(e){return t.addNewPlayer()}}},[t._v("Save")])],1)],1)],1)],1)},ot=[],lt=(a("c5f6"),a("7f7f"),a("ac6a"),{name:"PlayerForm",mounted:function(){this.contrabandList.length||this.getContrabands()},data:function(){return{name:"New player",editing:!1,apple:0,bread:0,cheese:0,chicken:0,contrabandScore:0,coin:0,selectedContrabands:[],contrabands:[{name:"Pepper",quantity:0},{name:"Silk",quantity:1}]}},computed:Object(s["a"])({},Object(d["e"])(["players","playerDialog","colorMap","contrabandList"]),Object(d["c"])(["currentColor"])),methods:Object(s["a"])({},Object(d["d"])(["openPlayerDialog","closePlayerDialog"]),Object(d["b"])(["getContrabands"]),{closeDialog:function(){this.editing=!1,this.closePlayerDialog()},toggleEdit:function(){this.editing=!this.editing},addContraband:function(t){this.selectedContrabands.forEach(function(e){e.name===t.name&&e.quantity++})},removeContraband:function(t){for(var e=0;e<this.selectedContrabands.length;e++){var a=this.selectedContrabands[e];if(a.name===t.name)return a.quantity=0,this.selectedContrabands.splice(e,1)}},resetForm:function(){this.apple=0,this.bread=0,this.cheese=0,this.chicken=0,this.coin=0,this.contrabandScore=0,this.name="New player",this.editing=!1},addNewPlayer:function(){var t={name:this.name,apple:Number(this.apple),bread:Number(this.bread),cheese:Number(this.cheese),chicken:Number(this.chicken),contrabandScore:Number(this.contrabandScore),contrabands:this.selectedContrabands,coin:Number(this.coin)};this.$store.dispatch("addNewPlayer",t),this.resetForm(),this.closeDialog()}})}),it=lt,ct=(a("2831"),a("8212")),st=a("cc20"),dt=a("2b5d"),ut=a("a523"),pt=a("ce87"),ft=a("2677"),vt=Object(f["a"])(it,rt,ot,!1,null,"3edee8de",null),bt=vt.exports;b()(vt,{VAvatar:ct["a"],VBtn:m["a"],VCard:h["a"],VCardActions:y["a"],VCardText:y["b"],VCardTitle:g["a"],VChip:st["a"],VCombobox:dt["a"],VContainer:ut["a"],VDialog:x["a"],VFlex:tt["a"],VHover:pt["a"],VIcon:T["a"],VLayout:et["a"],VSpacer:_["a"],VTextField:ft["a"]});var mt={name:"Dashboard",components:{Player:nt,PlayerForm:bt,Toolbar:w,AddButton:A,ScoreButton:L},data:function(){return{}},computed:Object(s["a"])({},Object(d["e"])(["colorMap","players"]))},ht=mt,yt=(a("1670"),Object(f["a"])(ht,H,U,!1,null,"2ed212ea",null)),gt=yt.exports;b()(yt,{VContainer:ut["a"],VFlex:tt["a"],VLayout:et["a"]});var xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-component",attrs:{id:"ranking"}},[a("Toolbar"),a("v-container",{attrs:{"grid-list-md":"","text-ms-center":"",fluid:""}},[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"",wrap:""}},[a("v-flex",{staticStyle:{"text-align":"center"},attrs:{xs12:""}},[a("h1",{staticClass:"ranking-headline"},[t._v("Player Ranking - Top 100")])]),a("v-flex",{attrs:{xs12:""}})],1),a("v-data-table",{staticClass:"elevation-1 table",attrs:{headers:t.headers,items:t.playerRanking,pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"no-data",fn:function(){return[a("v-alert",{attrs:{value:!0,color:"error",icon:"warning"}},[t._v("Sorry, no players have been loaded :(")])]},proxy:!0},{key:"items",fn:function(e){return[a("td",{staticClass:"table-data"},[t._v(t._s(e.index+1))]),a("td",{staticClass:"table-data"},[t._v(t._s(e.item.name))]),a("td",{staticClass:"table-data"},[t._v(t._s(e.item.score))])]}}])})],1)],1)},_t=[],Ct={name:"Ranking",components:{Toolbar:w},data:function(){return{headers:[{text:"Position",align:"left",sortable:!1,value:"index",class:"table-header"},{text:"Name",value:"name"},{text:"Score",value:"score"}],pagination:{rowsPerPage:10}}},computed:Object(s["a"])({},Object(d["e"])(["playerRanking"])),methods:Object(s["a"])({},Object(d["b"])(["getPlayerRanking"])),mounted:function(){this.getPlayerRanking()}},kt=Ct,Vt=(a("8c0a"),a("0798")),St=a("8fea"),wt=Object(f["a"])(kt,xt,_t,!1,null,null,null),Pt=wt.exports;b()(wt,{VAlert:Vt["a"],VContainer:ut["a"],VDataTable:St["a"],VFlex:tt["a"],VLayout:et["a"]}),n["a"].use(Y["a"]);var jt=new Y["a"]({mode:"history",base:"/",routes:[{path:"/dashboard",name:"dashboard",component:gt},{path:"*",redirect:"/dashboard"},{path:"/ranking",name:"ranking",component:Pt}]}),Ot=(a("7514"),a("bc3a")),Dt=a.n(Ot);Dt.a.defaults.baseURL="https://sheriffcalculator-api.herokuapp.com",Dt.a.defaults.headers.post["Content-Type"]="application/json",n["a"].use(d["a"]);var Tt=new d["a"].Store({state:{players:[],colorMap:{0:"#3e51b5",1:"rgb(0,128,0)",2:"rgb(128,0,128)",3:"rgb(218,165,32)",4:"rgb(178,34,34)"},playerDialog:!1,playerRanking:[],contrabandList:[]},getters:{currentColor:function(t){return t.colorMap[t.players.length]}},mutations:{setContrabands:function(t,e){this.state.contrabandList=e},newGame:function(){this.state.players=[],this.state.playerDialog=!1},updatePlayer:function(t,e){var a=e.id,r=this.state.players.find(function(t){return t.id===a});n["a"].set(r,e.property,e.value)},openPlayerDialog:function(){this.state.players.length<5?this.state.playerDialog=!0:alert("Invalid number of players")},closePlayerDialog:function(){this.state.playerDialog=!1},addPlayer:function(t,e){e&&this.state.players.push(e)},deletePlayer:function(t,e){for(var a=0;a<this.state.players.length;a++){var n=this.state.players[a];n.id===e&&this.state.players.splice(a,1)}},setPlayerRanking:function(t,e){t.playerRanking=e}},actions:{getContrabands:function(t){var e=t.commit;Dt.a.get("/contraband").then(function(t){return e("setContrabands",t.data)})},addNewPlayer:function(t,e){var a=t.commit;Dt.a.post("/player",e).then(function(t){t.data.id?(e.id=t.data.id,a("addPlayer",e)):console.log("error registering: player has no id")}).catch(function(t){return console.log(t)})},deletePlayer:function(t,e){var a=t.commit;Dt.a.delete("/player",{data:{id:e}}).then(function(t){return a("deletePlayer",e)}).catch(function(t){return console.log(t)})},calculateScore:function(t){var e=this,a=t.commit;if(this.state.players.length){var n=this.state.players.map(function(t){return t.id});Dt.a.post("/score",{players_id:n}).then(function(t){var n=t.data;e.state.players.map(function(t){a("updatePlayer",{id:t.id,property:"score",value:n[t.id].score});var e=[],r=[];n[t.id].kingOrQueen&&(e=n[t.id].kingOrQueen.kings,r=n[t.id].kingOrQueen.queens),a("updatePlayer",{id:t.id,property:"kings",value:e}),a("updatePlayer",{id:t.id,property:"queens",value:r})})}).catch(function(t){return console.log(t)})}},getPlayerRanking:function(t){var e=t.commit;Dt.a.get("/ranking").then(function(t){return e("setPlayerRanking",t.data)}).catch(function(t){return console.log(t)})}}});n["a"].config.productionTip=!1,new n["a"]({router:jt,store:Tt,render:function(t){return t(Q)}}).$mount("#app")},6014:function(t,e,a){},"78e2":function(t,e,a){},"7e1b":function(t,e,a){},"898e":function(t,e,a){"use strict";var n=a("eaf8"),r=a.n(n);r.a},"8c0a":function(t,e,a){"use strict";var n=a("6014"),r=a.n(n);r.a},ae1e:function(t,e,a){},c096:function(t,e,a){},eaf8:function(t,e,a){}});
//# sourceMappingURL=app.86818bad.js.map