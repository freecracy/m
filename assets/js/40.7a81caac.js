(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{408:function(t,a,e){t.exports=e.p+"assets/img/redis-watch.e902611b.png"},775:function(t,a,e){"use strict";e.r(a);var s=e(20),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),s("h2",{attrs:{id:"锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锁"}},[t._v("#")]),t._v(" 锁")]),t._v(" "),s("p",[t._v("锁 setnx 和 expire 放入事务中,事务不保证原子性,可以用 lua 来执行事务.")]),t._v(" "),s("h2",{attrs:{id:"watch实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#watch实现"}},[t._v("#")]),t._v(" watch实现")]),t._v(" "),s("p",[s("img",{attrs:{src:e(408),alt:"redis-watch"}})]),t._v(" "),s("ol",[s("li",[t._v("每一次 awtch、multi、exec 时都会去查询这个 watched_keys 结构进行判断,每次遇到被 watch 的 key 时会标记为 CLIENT_DIRTY_CAS")]),t._v(" "),s("li",[t._v("因为 redis 中事务都是串行,如果 A 和 B 都 watch 同一个 key")]),t._v(" "),s("li",[t._v("如果 A 先执行就把这个 key 删除并把所有客户端都设置成 CLIENT_DIRTY_CAS, 后面客户端开始执行时判断自己状态是 CLIENT_DIRTY_CAS 时,终止事务.")])]),t._v(" "),s("h2",{attrs:{id:"单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[t._v("#")]),t._v(" 单线程")]),t._v(" "),s("ol",[s("li",[t._v("可维护性")]),t._v(" "),s("li",[t._v("io 多路复用,高并发")]),t._v(" "),s("li",[t._v("内存才是性能瓶颈,网络 io 才是性能瓶颈")])])])}),[],!1,null,null,null);a.default=r.exports}}]);