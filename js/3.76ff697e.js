(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2d4b":function(e,t,a){"use strict";a("43e5")},"43e5":function(e,t,a){},a751:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("q-page",{staticClass:"bg-grey-3 column"},[t("div",{staticClass:"row q-pa-sm bg-primary"},[t("q-input",{staticClass:"col",attrs:{square:"",filled:"","bg-color":"white",placeholder:"Adicione a tarefa",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTask.apply(null,arguments)}},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"add"},on:{click:e.addTask}})]},proxy:!0}]),model:{value:e.newTask,callback:function(t){e.newTask=t},expression:"newTask"}})],1),t("q-list",{staticClass:"bg-white",attrs:{separator:"",bordered:""}},e._l(e.tasks,(function(a,n){return t("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a.title,class:{"done bg-blue-1":a.done},attrs:{clickable:""},on:{click:function(e){a.done=!a.done}}},[t("q-item-section",{attrs:{avatar:""}},[t("q-checkbox",{staticClass:"no-pointer-events",attrs:{color:"primary"},model:{value:a.done,callback:function(t){e.$set(a,"done",t)},expression:"task.done"}})],1),t("q-item-section",[t("q-item-label",[e._v(e._s(a.title))])],1),a.done?t("q-item-section",{attrs:{side:""}},[t("q-btn",{attrs:{flat:"",round:"",dense:"",color:"primary",icon:"delete"},on:{click:function(t){return t.stopPropagation(),e.deleteTask(n)}}})],1):e._e()],1)})),1),e.tasks.length?e._e():t("div",{staticClass:"no-tasks absolute-center"},[t("q-icon",{attrs:{name:"check",size:"100px",color:"primary"}}),t("div",{staticClass:"text-h5 text-primary text-center"},[e._v("\n        Não há tarefas.\n      ")])],1)],1)},s=[],i=(a("14d9"),{data(){return{newTask:"",tasks:[]}},methods:{deleteTask(e){this.$q.dialog({dark:!0,title:"Confirmação",message:"Pretende realmente eliminar?",cancel:!0,persistent:!0}).onOk((()=>{this.tasks.splice(e,1),this.$q.notify("A tarefa foi eliminada.")}))},addTask(){this.tasks.push({title:this.newTask,done:!1}),this.newTask=""}}}),o=i,r=(a("2d4b"),a("2877")),l=a("9989"),c=a("27f9"),d=a("9c40"),p=a("1c1c"),u=a("66e5"),k=a("4074"),f=a("8f8e"),m=a("0170"),b=a("0016"),h=a("714f"),q=a("eebe"),w=a.n(q),y=Object(r["a"])(o,n,s,!1,null,null,null);t["default"]=y.exports;w()(y,"components",{QPage:l["a"],QInput:c["a"],QBtn:d["a"],QList:p["a"],QItem:u["a"],QItemSection:k["a"],QCheckbox:f["a"],QItemLabel:m["a"],QIcon:b["a"]}),w()(y,"directives",{Ripple:h["a"]})}}]);