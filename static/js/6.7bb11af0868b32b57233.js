webpackJsonp([6],{"6UQn":function(t,i){},BRgg:function(t,i,e){"use strict";i.a=function(){var t=s()({},a.b,{uin:0,platform:"h5",needNewCode:1,_:1531048621885});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,a.c)},i.b=function(t){var i=s()({},a.b,{uin:0,platform:"h5",needNewCode:1,tpl:3,page:"detail",type:"top",topid:t,_:1531053580661});return Object(o.a)("https://szc.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",i,a.c)};var n=e("aA9S"),s=e.n(n),o=e("Gak4"),a=e("T452")},Wdqz:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("4YfN"),s=e.n(n),o=e("fUgm"),a=e("PvFA"),c=e("T452"),r=e("kvay"),u=e("BRgg"),l={components:{MusicList:r.a},computed:s()({},Object(o.c)(["topListDetail"]),{title:function(){return this.topListDetail.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}}),data:function(){return{songs:[],rank:!0}},created:function(){this._getTopListDetail()},methods:{_getTopListDetail:function(){var t=this;if(void 0!==this.topListDetail.id){var i=this.topListDetail.id;Object(u.b)(i).then(function(i){i.code===c.a&&(t.songs=t._normalizeMusicList(i.songlist))})}else this.$router.back()},_normalizeMusicList:function(t){var i=[];return t.forEach(function(t){var e=t.data;e.songid&&e.albummid&&i.push(Object(a.b)(e))}),i}}},f={render:function(){var t=this.$createElement,i=this._self._c||t;return i("transition",{attrs:{name:"slide"}},[i("music-list",{attrs:{songs:this.songs,title:this.title,"bg-image":this.bgImage,rank:this.rank}})],1)},staticRenderFns:[]};var g=e("C7Lr")(l,f,!1,function(t){e("6UQn")},null,null);i.default=g.exports}});
//# sourceMappingURL=6.7bb11af0868b32b57233.js.map