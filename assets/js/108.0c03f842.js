(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{641:function(s,a,e){"use strict";e.r(a);var t=e(20),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis-变慢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-变慢"}},[s._v("#")]),s._v(" redis 变慢")]),s._v(" "),e("h2",{attrs:{id:"基准测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基准测试"}},[s._v("#")]),s._v(" 基准测试")]),s._v(" "),e("p",[s._v("确认网络原因还是 redis 真的变慢,在服务器 redis 服务器测试响应延迟.")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("redis-cli -h "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" --intrinsic-latency "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 60s 内最大响应延迟")]),s._v("\nredis-cli -h "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" --latency-history -i "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最大最小平均访问延迟,每 1s 菜样")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"慢日志-slowlog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#慢日志-slowlog"}},[s._v("#")]),s._v(" 慢日志(slowlog)")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("CONFIG SET slowlog-log-slower-than "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令执行超过 5 毫秒记录慢日志")]),s._v("\nCONFIG SET slowlog-max-len "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只保留 500 条慢日志")]),s._v("\nSLOWLOG get "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取最新 5 条慢日志")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 慢日志ID\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 执行时间戳\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 具体耗时"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("微秒"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ol",[e("li",[e("p",[s._v("命令时间复杂度高: 耗时")])]),s._v(" "),e("li",[e("p",[s._v("一次返回数据过多: 时间损耗在数据组装和网络传输")])]),s._v(" "),e("li",[e("p",[s._v("操作 bigkey: (分配内存,删除时释放内存)(避免写入、unlink 代替 del、lazy-free del 释放内存放到后台线程执行)")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("redis-cli -h "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" --bigkeys -i "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 扫描大 key,原理是内部 scan, i 参数控制扫描频率,避免影响线上服务")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("集中过期: 过期策略淘汰过期 key,一般不会出现慢日志中,查找 expireat、pexpireat,提供随机过期时间,lazy-free 避免阻塞主线程,监控 info 命令 expired_keys 结果")])]),s._v(" "),e("li",[e("p",[s._v("实例内存达到上限: 内存在淘汰数据.")])]),s._v(" "),e("li",[e("p",[s._v("fork 耗时: 定时 rdb 或 aof rewrite 都需要创建子进程持久化,拷贝内存页耗时,会阻塞主进程")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("info\nlatest_fork_usec "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 上一次 fork 耗时,主进程 fork 子进程,实例阻塞无法处理客户端请求.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解决")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(". 控制实例内存\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(". 合理持久化\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(". 虚拟机比物理机耗时,避免虚拟机\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(". repl-backlog-size 避免主从全量同步概率\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("开启内存大页")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/kernel/mm/transparent_hugepage/enabled "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# always 表示开启了内存大页")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" never "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/kernel/mm/transparent_hugepage/enabled "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭内存大页")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"redis-使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-使用场景"}},[s._v("#")]),s._v(" redis 使用场景")]),s._v(" "),e("ul",[e("li",[s._v("缓存")]),s._v(" "),e("li",[s._v("排行榜")]),s._v(" "),e("li",[s._v("计数器")]),s._v(" "),e("li",[s._v("共享 session")]),s._v(" "),e("li",[s._v("分布式锁(数据流不大可以使用数据库的悲观锁和乐观锁)")]),s._v(" "),e("li",[s._v("消息队列")]),s._v(" "),e("li",[s._v("位操作")])]),s._v(" "),e("h2",{attrs:{id:"使用复杂度高的命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用复杂度高的命令"}},[s._v("#")]),s._v(" 使用复杂度高的命令")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("config "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" slowlog-slower than "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启慢日志,单位 ms")]),s._v("\nconfig "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" slowlog-max-len "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只保留 1000 条日志")]),s._v("\nslowlog get "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看最近 5 条慢日志")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("不使用复杂度高到命令,并且一次不要获取太多数据.")]),s._v(" "),e("h2",{attrs:{id:"存储大-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储大-key"}},[s._v("#")]),s._v(" 存储大 key")]),s._v(" "),e("p",[s._v("如果慢日志中都是复杂度不高的命令可能是写入大 key.写入数据时需要分配内存,删除数据时需要释放内存空间.")]),s._v(" "),e("ul",[e("li",[s._v("业务 : 检查业务代码,评估数据量大小")]),s._v(" "),e("li",[s._v("技术 : "),e("code",[s._v("reids-cli -h host -p port bigkey -i 0.01")]),s._v(" : i 参数控制扫描间隔,单位秒,其实就是内部执行 scan 遍历所有 key,获取长度.只能扫描出元素最多大 key.元素多不一定占用内存多,4.0 版本后可以使用 lazy-free 异步释放大 key")])]),s._v(" "),e("h2",{attrs:{id:"集中过期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集中过期"}},[s._v("#")]),s._v(" 集中过期")]),s._v(" "),e("p",[s._v("平时没有延迟,但是某一时刻延迟较大,即在执行主动过期定时任务时需要大量删除过期 key.业务访问必须等待过期任务执行结束.这个并不会记录在慢日志中.")]),s._v(" "),e("ul",[e("li",[s._v("业务 : 代码中查找 expireat、pexpireat 等,然后增加随机过期时间")]),s._v(" "),e("li",[s._v("技术 : info 命令中 expired-keys 代表目前为止,累计删除的过期 key 数量,监控该指标,如果短时间内突增,与延迟时间是否一致")])]),s._v(" "),e("h2",{attrs:{id:"实例内存达到上限"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实例内存达到上限"}},[s._v("#")]),s._v(" 实例内存达到上限")]),s._v(" "),e("p",[s._v("当到达 maxmemory 时,写入数据需要先删除一部分数据,即 8 种内存淘汰策略.")]),s._v(" "),e("p",[s._v("lru : 从实例中取出一部分热 key,然后淘汰一个最少访问的,把剩下的存到一个池子中,继续取出一批 key,与之前池子中的 key 比较再淘汰一个最少访问的 key,以此循环,直到内存降到 maxmemory 之下.")]),s._v(" "),e("h2",{attrs:{id:"fork-耗时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fork-耗时"}},[s._v("#")]),s._v(" fork 耗时")]),s._v(" "),e("p",[s._v("fork 过程中需要拷贝内存页表给子进程,如果内存过大拷贝时间过长.")]),s._v(" "),e("p",[s._v("可以执行 info 查看最后一次 fork 执行耗时, latest_fork_usec 单位毫秒,备份,主从第一次同步都会 fork.")]),s._v(" "),e("h2",{attrs:{id:"绑定-cpu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绑定-cpu"}},[s._v("#")]),s._v(" 绑定 cpu")]),s._v(" "),e("p",[s._v("绑定 cpu 后进行持久化 fork 出的子进程会继承父进程 cpu 偏好,子进程与父进程发生 cpu 争抢.一般如果开启 rdb、aof 就不要 cpu 绑定.")]),s._v(" "),e("h2",{attrs:{id:"是否使用-swap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#是否使用-swap"}},[s._v("#")]),s._v(" 是否使用 swap")]),s._v(" "),e("p",[s._v("检查机器内存情况是否因内存不足使用到了 swap.释放 redis 的 swap 需要重启实例.一般先主从切换,释放旧节点的 swap,重启,待数据同步完成后切换回主节点.")]),s._v(" "),e("p",[s._v("需要对机器内存和 swap 使用情况监控,内存不足和使用 swap 时及时发觉.")]),s._v(" "),e("h2",{attrs:{id:"网卡负载过高"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网卡负载过高"}},[s._v("#")]),s._v(" 网卡负载过高")])])}),[],!1,null,null,null);a.default=r.exports}}]);