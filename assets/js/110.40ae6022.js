(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{539:function(s,t,a){"use strict";a.r(t);var e=a(20),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"命令合集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令合集"}},[s._v("#")]),s._v(" 命令合集")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("EVAL script numkeys key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" arg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端会缓存编译结果,但是每次还是需要发送脚本,然后计算 sha1 值,加快执行速度")]),s._v("\nevalsha sha1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只需要传输签名值,减少传输字节")]),s._v("\nscript flush "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除 lua 脚本缓存")]),s._v("\nconfig get aof-use-rdb-preamble "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询是否开启混合持久化")]),s._v("\nslot "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CRC16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/16383\n\ndbsize     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 当前数据库key数量")]),s._v("\ninfo       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回当前服务器状态和一些统计信息")]),s._v("\nmonitor    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 实时监听并返回redis服务器接收到的所有请求信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把数据同步保存到磁盘,并关闭")]),s._v("\nconfig get param       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取配置参数")]),s._v("\nconfig "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" param value "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置参数")]),s._v("\nconfig resetstat       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重置info命令统计信息")]),s._v("\nkeyspace               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 错误数,处理迷宫内老鼠,接收连接数,过期key数")]),s._v("\ndebug object key       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取一个key的调试信息")]),s._v("\ndebug segfault         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 制造一次服务器宕机")]),s._v("\nflushdb                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除当前数据库所有key,此方法不会失败")]),s._v("\nflushall               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除全部数据库所有key,此方法不会失败")]),s._v("\nexists key name        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# key是否存在")]),s._v("\nscan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("scan,sscan,hscan,zscan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\ninfo Replication       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查主从配置是否生效")]),s._v("\ninfo Sentinel          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查哨兵是否工作")]),s._v("\ncluster info           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看集群信息")]),s._v("\ncluster nodes          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看节点列表")]),s._v("\nmonitor                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 观察在执行哪些命令,不建议长时间使用,会导致数据积压在输出缓存区,导致输出缓存区占用内存越来越大")]),s._v("\nbgsave "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 子进程在完成文件创建时会向父进程发送信号,父进程在接收客户端请求过程中会轮询接收子进程的信号")]),s._v("\nlastsave "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看 bgsave 是否执行成功,返回最后一次执行成功的时间.")]),s._v("\nsmembers "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 遍历 set 元素时顺序是不确定的,是通过 hash 运算后的结果.")]),s._v("\nunlink "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会将键从元数据中删除,真正删除操作会在后台异步执行")]),s._v("\nbf.add "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加元素")]),s._v("\nbf.exists "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断某个元素是否存在")]),s._v("\nbf.madd "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加多个元素")]),s._v("\nbf.mexists "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断多个元素是否存在")]),s._v("\nbf.reserve "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置布隆过滤器的准确率")]),s._v("\nconfig "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" slowlog-log-slower-than "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令执行超过 5 毫秒记录日志")]),s._v("\nconfig "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" slowlog-max-len "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只保留最近的 1000 条日志")]),s._v("\nslowlog get "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最近 5 条慢日志")]),s._v("\nredis-cli -h "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" -p port --bigkey -i "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取 key 大小分布情况, -i 扫描时间间隔,降低大 key 扫描带来的 qps 增加,其实就是 scan 命令遍历所有 key, 针对不同类型的 key 执行 strlen、llen、hlen、scard、zscard 获取长度及容器类型的元素个数")]),s._v("\npulish channel message "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 向频道发送消息,返回订阅者个数")]),s._v("\nsubscribe channel "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("channel "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 订阅一个或多个频道,订阅后只能接收 subscribe、psubscribe、unsubscribe、punsubscribe 四个命令,新订阅的频道不会收到之前的消息")]),s._v("\npsubscribe channel* "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模式匹配订阅")]),s._v("\npunsubscribe channel* "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 模式匹配订阅取消")]),s._v("\nttl "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看过期时间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# set 命令如果不设置过期时间会自动清除已经设置的过期时间")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])]),a("h2",{attrs:{id:"info-命令详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#info-命令详解"}},[s._v("#")]),s._v(" info 命令详解")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("SCAN cursor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("MATCH pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("COUNT count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TYPE type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cursor 游标")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("结果")]),s._v(" "),a("th",[s._v("用途")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("server")]),s._v(" "),a("td",[s._v("服务器的一般信息")])]),s._v(" "),a("tr",[a("td",[s._v("clients")]),s._v(" "),a("td",[s._v("客户端连接部分")])]),s._v(" "),a("tr",[a("td",[s._v("memory")]),s._v(" "),a("td",[s._v("内存销毁")])]),s._v(" "),a("tr",[a("td",[s._v("persistence")]),s._v(" "),a("td",[s._v("持久化")])]),s._v(" "),a("tr",[a("td",[s._v("stats")]),s._v(" "),a("td",[s._v("一般统计")])]),s._v(" "),a("tr",[a("td",[s._v("replication")]),s._v(" "),a("td",[s._v("主从复制")])]),s._v(" "),a("tr",[a("td",[s._v("cpu")]),s._v(" "),a("td",[s._v("cpu相关")])]),s._v(" "),a("tr",[a("td",[s._v("keyspace")]),s._v(" "),a("td",[s._v("数据库相关")])])])]),s._v(" "),a("h2",{attrs:{id:"redis-trib"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-trib"}},[s._v("#")]),s._v(" redis_trib")]),s._v(" "),a("p",[s._v("集群管理工具,redis集群扩容时间长")]),s._v(" "),a("h2",{attrs:{id:"cluster-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-proxy"}},[s._v("#")]),s._v(" cluster-proxy")]),s._v(" "),a("p",[s._v("6.0版本推出的支持redis cluster协议的proxy.")]),s._v(" "),a("h2",{attrs:{id:"性能分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能分析"}},[s._v("#")]),s._v(" 性能分析")]),s._v(" "),a("p",[s._v("redis-faina")]),s._v(" "),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("配置")]),s._v(" "),a("th",[s._v("作用")]),s._v(" "),a("th",[s._v("默认")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("maxmemory-samples")]),s._v(" "),a("td",[s._v("默认 LRU 算法采样率")]),s._v(" "),a("td",[s._v("5")])]),s._v(" "),a("tr",[a("td",[s._v("io-threads-do-reads yes")]),s._v(" "),a("td",[s._v("开启多线程,还需要设置线程数才能生效")]),s._v(" "),a("td",[s._v("no")])]),s._v(" "),a("tr",[a("td",[s._v("io-threads n")]),s._v(" "),a("td",[s._v("线程数一定要小于机器核数,建议不超过 8 个")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("notify-keyspace-events Ex")]),s._v(" "),a("td",[s._v("开启 key 过期回调")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("cluster-require-full-coverage")]),s._v(" "),a("td",[s._v("no 负责 slot 主库下线没有从库恢复集群仍可用,当前 slot 命令不可用"),a("br"),s._v("yes 负责 slot 主库下线没有从库恢复,集群不可用")]),s._v(" "),a("td",[s._v("yes")])]),s._v(" "),a("tr",[a("td",[s._v("hash-max-ziplist-entries 512")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("hash-max-ziplist-value 64")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("list-max-ziplist-entries 512")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("list-max-ziplist-value 64")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("zset-max-ziplist-entries 128")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("zset-max-ziplist-value 64")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("set-max-iniset-entries 512")]),s._v(" "),a("td"),s._v(" "),a("td")])])]),s._v(" "),a("h2",{attrs:{id:"客户端缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端缓存"}},[s._v("#")]),s._v(" 客户端缓存")]),s._v(" "),a("p",[s._v("当 tracking 开启时,服务端会记住每个客户端请求的 key , 当 key 值发现变化时会通过 RESP3 协议发送一次(仅一次)失效消息给客户端")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("CLIENT TRACKING ON"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("OFF "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("REDIRECT client-id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PREFIX prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("BCAST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OPTOUT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("NOLOOP"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("作用")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("redirect")]),s._v(" "),a("td",[s._v("将失效消息转发到另一个客户端,一般使用老的 RESP2")])]),s._v(" "),a("tr",[a("td",[s._v("bcast")]),s._v(" "),a("td",[s._v("使用广播模式,一般需要设置 key 前缀")])]),s._v(" "),a("tr",[a("td",[s._v("prefix")]),s._v(" "),a("td",[s._v("模式匹配 key 前缀")])]),s._v(" "),a("tr",[a("td",[s._v("optin")]),s._v(" "),a("td",[s._v("当广播模式没有激活时,正常不会 track 只读的 key,除非在 client caching yes 之后被调用")])]),s._v(" "),a("tr",[a("td",[s._v("optout")]),s._v(" "),a("td",[s._v("当广播模式没有激活时,正常会 track 只读key, 除非在 client caching off 之后被调用")])]),s._v(" "),a("tr",[a("td",[s._v("noloop")]),s._v(" "),a("td",[s._v("不发送更新这个 key 的客户端")])])])]),s._v(" "),a("h2",{attrs:{id:"发布订阅"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅"}},[s._v("#")]),s._v(" 发布订阅")]),s._v(" "),a("ol",[a("li",[s._v("发布者 : 消息发布是无状态的,无法保证可达,对于发布者来说,即发即失")]),s._v(" "),a("li",[s._v("消费者 : 如果某个消费者在生产者发布消息时下线重新上线是无法接收消息的")])]),s._v(" "),a("h2",{attrs:{id:"bitmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap"}},[s._v("#")]),s._v(" bitmap")]),s._v(" "),a("p",[s._v("底层采用字符串存储.")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("setbit\ngetbit\nbitcount\nbittop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[s._v("#")]),s._v(" 使用场景")]),s._v(" "),a("ol",[a("li",[s._v("签到 : 日期做为 key,用户ID作为bit位")]),s._v(" "),a("li",[s._v("日活、月活")]),s._v(" "),a("li",[s._v("在线人数统计")]),s._v(" "),a("li",[s._v("app 内全局消息提示小红点")])]),s._v(" "),a("h2",{attrs:{id:"变慢了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变慢了"}},[s._v("#")]),s._v(" 变慢了")]),s._v(" "),a("ol",[a("li",[s._v("慢日志 : 如命令 sort、sunion、zunionstore")]),s._v(" "),a("li",[s._v("存储大 key : 如果一个 key 吸入数据非常大,分配内存时也会耗时,删除时也会耗时")]),s._v(" "),a("li",[s._v("是否有 key 集中过期 : 过期删除策略不会记录在慢日志中,只能从业务中查找")]),s._v(" "),a("li",[s._v("内存上限 : 是否在执行内存淘汰策略")]),s._v(" "),a("li",[s._v("是否在执行备份或主从同步,生成 rdb 文件等 : 持久化要执行 fork 操作, fork 执行过程中,父进程需要拷贝内存页给子进程,如果内存占用大拷贝内存页会非常耗时会消耗大量 cpu, fork 完成前实例会阻塞不处理请求. info 命令可以查看最后一次 fork 耗时 lastest_fork_usec 单位毫秒")]),s._v(" "),a("li",[s._v("aof 策略")]),s._v(" "),a("li",[s._v("是否使用 swap 分区 : 需要对内存和 swap 使用情况监控,对内存不足和使用 swap 时及时报警.")]),s._v(" "),a("li",[s._v("网卡负载过高 : 对机器各项指标增加监控,包括网络流量")])]),s._v(" "),a("h2",{attrs:{id:"多线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程"}},[s._v("#")]),s._v(" 多线程")]),s._v(" "),a("p",[s._v("我们说的单线程是指 redis 接收连接、接收数据并解析协议发送结果等命令的执行都是在主线程中执行的.")]),s._v(" "),a("ul",[a("li",[s._v("redis 瓶颈不在 cpu,而在内存和网络 io")]),s._v(" "),a("li",[s._v("使用单线程可以简化数据库结构设计")]),s._v(" "),a("li",[s._v("可以减少多线程锁带来的性能损耗")])]),s._v(" "),a("p",[s._v("当 socket 中有数据时,redis 会通过系统调用将数据从内核态拷贝到用户态,供 redis 解析用,这个拷贝过程是阻塞的,即同步阻塞 io,数据量大时拷贝延迟越高,解析协议时间消耗越大,这些操作都是在主线程中处理的,特别是连接数过多时情况更加明显,所以提出了多线程,即将接收与发送数据使用多线程并行处理,降低主线程的等待时间.")]),s._v(" "),a("h3",{attrs:{id:"设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计思路"}},[s._v("#")]),s._v(" 设计思路")]),s._v(" "),a("ol",[a("li",[s._v("创建一组大小为 io 线程个数的等待队列,用来存储客户端网络套接字")]),s._v(" "),a("li",[s._v("平均分配客户端网络套接字到等待队列")]),s._v(" "),a("li",[s._v("等待线程组接收协议完毕或发送数据完毕")]),s._v(" "),a("li",[s._v("执行后序操作,然后跳到 2 继续执行")])]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// src/network.c")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-2"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("io-thread "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 reids io 线程个数,默认 4 最多不超过 128,且默认不开启")]),s._v("\nio-thread-do-reads "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# io 线程负责 read,默认 no,默认 io 线程只负责发送数,即 write 数据返回给客户端")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("ol",[a("li",[s._v("个数设置为 1,实际上还是只使用主线程")]),s._v(" "),a("li",[s._v("默认只负责 write,即发送数据给客户端")]),s._v(" "),a("li",[s._v("个数一旦设置,不能通过 config 动态设置")]),s._v(" "),a("li",[s._v("设置了 ssl 后, io-threads 将不工作")]),s._v(" "),a("li",[s._v("io 线程只能读或者写,不存在读写并行的情况")])]),s._v(" "),a("h2",{attrs:{id:"性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能"}},[s._v("#")]),s._v(" 性能")]),s._v(" "),a("h3",{attrs:{id:"info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[s._v("#")]),s._v(" info")]),s._v(" "),a("h3",{attrs:{id:"memory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#memory"}},[s._v("#")]),s._v(" memory")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("info memory\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",[a("li",[s._v("used_memory : 内存分配器分配的内存总量,以字节为单位,包含实际缓存占用内存和自身运行所占的内存(元数据、lua),是内存分配器分配的内存,这个数据并没有把内存碎片浪费的内存统计进去.")]),s._v(" "),a("li",[s._v("used_memory_human : 同 used_memory,单位时 M")]),s._v(" "),a("li",[s._v("used_memory_rss : 从操作系统上显示已分配的内存总量,单位字节")]),s._v(" "),a("li",[s._v("mem_fragmentation_ratio : 内存碎片率")]),s._v(" "),a("li",[s._v("used_memory_lua : lua 脚本引擎所使用的内存大小")]),s._v(" "),a("li",[s._v("mem_allocator : 在编译时指定的内存分配器,可以是 libc、jemalloc、tcmalloc")])]),s._v(" "),a("h4",{attrs:{id:"因内存交换引起的性能问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#因内存交换引起的性能问题"}},[s._v("#")]),s._v(" 因内存交换引起的性能问题")]),s._v(" "),a("p",[s._v("当 used_memory 大于可用最大内存操作系统开始进行内存与 swap 空间交换,把内存中旧的或不再使用的内容写入硬盘.")]),s._v(" "),a("h4",{attrs:{id:"跟踪内存使用率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跟踪内存使用率"}},[s._v("#")]),s._v(" 跟踪内存使用率")]),s._v(" "),a("p",[s._v("当内存使用率超过可用内存 95% 部分数据开始在内存与 swap 分区交换,就有可能丢失数据的风险.")]),s._v(" "),a("h3",{attrs:{id:"stats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stats"}},[s._v("#")]),s._v(" stats")]),s._v(" "),a("h2",{attrs:{id:"配置-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-3"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("save m n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 最近 m 时间内至少产生 n 次写入")]),s._v("\nappendonly "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启 aof")]),s._v("\nappendfilename "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件名")]),s._v("\nappendfsync everysec "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刷盘方式 always、everysec、no")]),s._v("\nauto-aof-rewrite-percentage "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 距离上次文件增长超过多少百分比触发重写")]),s._v("\nauto-aof-rewrite-min-size 64mb "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件体积达到后触发重写")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"incr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incr"}},[s._v("#")]),s._v(" incr")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("incr key\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",[a("li",[s._v("值不是整数,返回错误")]),s._v(" "),a("li",[s._v("值是整数,返回自增后的结果")]),s._v(" "),a("li",[s._v("key 不存在,默认键为 0,返回 1")])]),s._v(" "),a("h2",{attrs:{id:"slave-删除过期key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slave-删除过期key"}},[s._v("#")]),s._v(" slave 删除过期key")]),s._v(" "),a("p",[s._v("当一个 key 要过期时,master 会先清除它,之后 master 会向 slave 发送一个 del 命令,slave 删除这个 key 达到主从一致.在 slave 上执行 randomkey 未避免长时间找不到符合条件的key, slave 最多在 hash 表中寻找 100 次无论能否找到都会退出循环.")])])}),[],!1,null,null,null);t.default=n.exports}}]);