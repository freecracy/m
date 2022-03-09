(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{594:function(t,e,r){"use strict";r.r(e);var s=r(20),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"runtime"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#runtime"}},[t._v("#")]),t._v(" runtime")]),t._v(" "),r("h2",{attrs:{id:"runtime-gopark"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#runtime-gopark"}},[t._v("#")]),t._v(" runtime.gopark")]),t._v(" "),r("p",[t._v("出现在 goroutine 泄漏时,将当前 g 放入等待状态.")]),t._v(" "),r("ol",[r("li",[t._v("获取当前 goroutine 所绑定的 m, 调用 releasem 函数将当前 goroutine 和 m 绑定关系解除")]),t._v(" "),r("li",[t._v("将 goroutine 状态从 "),r("code",[t._v("_Grunning")]),t._v(" 切换成 "),r("code",[t._v("_Gwaiting")]),t._v(" 即等待状态")]),t._v(" "),r("li",[t._v("删除 m 和当前 goroutine "),r("code",[t._v("(m->curg)")]),t._v("之间的关联")]),t._v(" "),r("li",[t._v("切换当前线程的堆栈从 g 的堆栈切换到 g0 的堆栈,并调用 fn(g) 函数")]),t._v(" "),r("li",[t._v("将 g 的当前 "),r("code",[t._v("PC/SP")]),t._v(" 保存在 "),r("code",[t._v("g->sched")]),t._v(" 中,以便后续调用 "),r("code",[t._v("goready")]),t._v(" 函数时可以恢复现场")])]),t._v(" "),r("h2",{attrs:{id:"runtime-goready"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#runtime-goready"}},[t._v("#")]),t._v(" runtime.goready")]),t._v(" "),r("p",[t._v("将已就绪的 g 切换状态加入运行队列,等待调度器新一轮调度.")]),t._v(" "),r("h2",{attrs:{id:"runtime-preemttone"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#runtime-preemttone"}},[t._v("#")]),t._v(" runtime.preemttone")]),t._v(" "),r("ul",[r("li",[t._v("后台线程 sysmon 监控执行时间长的 goroutine 发出抢占")]),t._v(" "),r("li",[t._v("GC 执行 stw 会让所有 goroutine 停止,即抢占")])]),t._v(" "),r("div",{staticClass:"language-go line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-go"}},[r("code",[t._v("preemptone"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("preemptM"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("signalM"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("tgkill "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向正在运行的 goroutine 所绑定的 M,发送 sigurg 信号")]),t._v("\ninitsig"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("setsig"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("sighandle "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 每个 M 在初始化的时候都会设置信号处理函数")]),t._v("\nisAsyncSafePoint "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数返回当前 goroutine 是否能被抢占,以及从哪条指令开始抢占,返回的 newpc 表示安全的抢占地址")]),t._v("\npushCall "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调整 SP 设置寄存器的值就返回.")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])]),r("h3",{attrs:{id:"信号执行过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#信号执行过程"}},[t._v("#")]),t._v(" 信号执行过程")]),t._v(" "),r("ul",[r("li",[t._v("m 执行指令,当执行下一条指令时收到信号")]),t._v(" "),r("li",[t._v("接着内核接管执行流,去执行预先设置的信号处理程序,即 sighandler 函数")]),t._v(" "),r("li",[t._v("最后执行流交到 m 上,继续执行下一条指令")])]),t._v(" "),r("blockquote",[r("p",[t._v("这里涉及到现场保护和恢复,属于内核执行.")])]),t._v(" "),r("h3",{attrs:{id:"函数调用和返回"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#函数调用和返回"}},[t._v("#")]),t._v(" 函数调用和返回")]),t._v(" "),r("ul",[r("li",[t._v("call : push ip + jup, ip 就是返回地址,调用完子函数接下来执行的指令地址,push ip 就是在 call 一个子函数前将返回地址压入栈,然后 jmp 到子函数地址执行")]),t._v(" "),r("li",[t._v("ret : 和 call 相反,将返回地址从栈上 pop 到 ip 寄存器,使 cpu 从该地址继续执行")])]),t._v(" "),r("h3",{attrs:{id:"抢占过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#抢占过程"}},[t._v("#")]),t._v(" 抢占过程")]),t._v(" "),r("ol",[r("li",[t._v("m 注册 sigurg 信号处理函数 sighandler")]),t._v(" "),r("li",[t._v("sysmon 检测到执行过长的 goroutine 会向 m 发送 sigurg 信号")]),t._v(" "),r("li",[t._v("收到信号后,内核执行 sighandler 函数,通过 pushCall 函数插入 asyncPreempt 函数调用")]),t._v(" "),r("li",[t._v("回到当前 goroutine 执行 asyncPreempt 函数,通过 mcall 切换到 g0 执行 gopreempt_m")]),t._v(" "),r("li",[t._v("将 goroutine 插入全局可运行队列, m 继续寻找其它 g 来执行")]),t._v(" "),r("li",[t._v("被抢占的 g 再次调度时继续执行运来执行流")])])])}),[],!1,null,null,null);e.default=a.exports}}]);