(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{127:function(t,e,r){},140:function(t,e,r){"use strict";r(127)},151:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sites__prev item"},[r("div",{staticClass:"prev__imgbox"},[r("img",{staticClass:"prev__img",attrs:{src:"https://webdev-api.loftschool.com/"+t.copyWork.photo}}),r("tagList",{attrs:{techs:t.copyWork.techs}})],1),r("div",{staticClass:"prev__desc prev__desc--works"},[r("div",{staticClass:"prev__title"},[t._v(t._s(t.copyWork.title))]),r("p",{staticClass:"prev__text"},[t._v(t._s(t.copyWork.description))]),r("a",{staticClass:"prev__link",attrs:{href:""+t.copyWork.link}},[t._v(t._s(t.copyWork.link))])]),r("div",{staticClass:"prev__btns"},[r("button",{staticClass:"prev__editbtn prevbtn",attrs:{type:"button"},on:{click:t.editBtn}},[t._v("Править")]),r("button",{staticClass:"prev__deletebtn prevbtn",attrs:{type:"button"},on:{click:t.deleteCard}},[t._v("Удалить   ")])])])};s._withStripped=!0;var n=r(10),o=r.n(n),i=r(6);function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={components:{tagList:function(){return r.e(14).then(r.bind(null,155))}},data:function(){return{copyWork:a({},this.work)}},methods:{deleteCard:function(){var t=this;i.a.delete("/works/".concat(this.work.id)).then((function(){t.$emit("delete-card")}))},editBtn:function(){this.$emit("edit-card",this.copyWork)}},props:{work:Object}},l=(r(140),r(1)),d=Object(l.a)(p,s,[],!1,null,"29d918f4",null);d.options.__file="src/admin/components/works/siteCard.vue";e.default=d.exports}}]);