webpackJsonp([3],{Jmjk:function(t,e){},"Sgn/":function(t,e,n){"use strict";e.a=function(){var t=a()({},o.b,{hostUin:0,platform:"yqq",needNewCode:0,data:s()({comm:{ct:24,cv:1e4},singerList:{module:"Music.SingerListServer",method:"get_singer_list",param:{area:-100,sex:-100,genre:-100,index:-100,sin:0,cur_page:1}}})});return Object(c.a)("https://u.y.qq.com/cgi-bin/musicu.fcg",t,{param:"callback",timeout:5e3})},e.b=function(t){var e=a()({},o.b,{loginUin:0,hostUin:0,format:c.a,notice:0,platform:"yqq",singermid:t,order:"listen",begin:0,num:80,songstatus:1});return Object(c.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,o.c)};var i=n("3cXf"),s=n.n(i),r=n("aA9S"),a=n.n(r),c=n("Gak4"),o=n("T452")},lEJ1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("4YfN"),s=n.n(i),r=n("fUgm"),a=n("Sgn/"),c=n("PvFA"),o=n("T452"),u={components:{MusicList:n("kvay").a},computed:s()({},Object(r.c)(["singer"]),{title:function(){return this.singer.name},bgImage:function(){return this.singer.avatar}}),data:function(){return{songs:[]}},created:function(){this._getSingerDetail()},methods:{_getSingerDetail:function(){var t=this;this.singer.id?Object(a.b)(this.singer.id).then(function(e){e.code===o.a&&e.data.list.forEach(function(e){var n=e.musicData;n.songid&&n.albummid&&t.songs.push(Object(c.b)(n))})}):this.$router.back()}}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{songs:this.songs,title:this.title,"bg-image":this.bgImage}})],1)},staticRenderFns:[]};var m=n("C7Lr")(u,g,!1,function(t){n("Jmjk")},null,null);e.default=m.exports}});
//# sourceMappingURL=3.1560b2f5b8e9df1aaf9d.js.map