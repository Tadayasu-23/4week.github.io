(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{130:function(t,e,r){},143:function(t,e,r){"use strict";r(130)},153:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sites__prev reviews__prev"},[r("div",{staticClass:"prev__imgbox prev__imgbox--comments"},[r("div",{staticClass:"prev__imgwrap prev__imgwrap--comments"},[r("img",{staticClass:"prev__img",attrs:{src:t.cover}})]),r("div",{staticClass:"prev__titlewrap"},[r("div",{staticClass:"prev__title prev__title--comments"},[t._v(t._s(t.copyRev.author))]),r("div",{staticClass:"prev__position prev__position--comments"},[t._v(t._s(t.copyRev.occ))])])]),r("div",{staticClass:"prev__desc prev__desc--comments"},[r("p",{staticClass:"prev__text"},[t._v(t._s(t.copyRev.text))])]),r("div",{staticClass:"prev__btns prev__btns--comments"},[r("button",{staticClass:"prev__editbtn prevbtn",attrs:{type:"button"},on:{click:t.editBtn}},[t._v("Править")]),r("button",{staticClass:"prev__deletebtn prevbtn",attrs:{type:"button"},on:{click:t.deleteCard}},[t._v("Удалить")])])])};s._withStripped=!0;var i=r(10),c=r.n(i),n=r(6);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){c()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var a={data:function(){return{copyRev:p({},this.reviews)}},methods:{deleteCard:function(){var t=this;n.a.delete("/reviews/".concat(this.reviews.id)).then((function(){t.$emit("delete-card")}))},editBtn:function(){this.$emit("edit-card",this.copyRev)}},computed:{cover:function(){return"https://webdev-api.loftschool.com/".concat(this.copyRev.photo)}},props:{reviews:Object}},v=(r(143),r(1)),_=Object(v.a)(a,s,[],!1,null,"c755a1e8",null);_.options.__file="src/admin/components/reviews/reviewCard.vue";e.default=_.exports}}]);