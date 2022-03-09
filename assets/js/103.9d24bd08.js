(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{632:function(t,s,a){"use strict";a.r(s);var n=a(20),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调试"}},[t._v("#")]),t._v(" 调试")]),t._v(" "),a("h2",{attrs:{id:"gotraceback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gotraceback"}},[t._v("#")]),t._v(" GOTRACEBACK")]),t._v(" "),a("p",[t._v("GOTRACEBACK 通过 sigabrt 信号触发.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("none")]),t._v(" "),a("td",[t._v("不显示任何 goroutine 的堆栈信息")])]),t._v(" "),a("tr",[a("td",[t._v("single")]),t._v(" "),a("td",[t._v("默认选项,显示当前 goroutine 的堆栈信息")])]),t._v(" "),a("tr",[a("td",[t._v("all")]),t._v(" "),a("td",[t._v("显示所有用户创建的 goroutine 的堆栈信息")])]),t._v(" "),a("tr",[a("td",[t._v("system")]),t._v(" "),a("td",[t._v("显示所有 goroutine 的堆栈信息,即使是来自运行时的 goroutine")])]),t._v(" "),a("tr",[a("td",[t._v("crash")]),t._v(" "),a("td",[t._v("与 system 类似,但是会生成 core dump(意外终止时的内存快照)")])])])]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOTRACEBACK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("crash go run main.go "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印所有堆栈信息")]),t._v("\ndlv core "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 调试 core dump")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"dlv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dlv"}},[t._v("#")]),t._v(" dlv")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("dlv core cord.pid\nbt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印堆栈信息,并显示程序生成的 panic 信息,")]),t._v("\nframe n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问 n 号帧信息")]),t._v("\nlocals "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印本地变量")]),t._v("\nvars main "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 但因变量信息,如果没有本地变量使用编辑标识 —N 和 -l 来构建二进制程序 go build -gcflags=all="-N -l", unlimit -c unlimited -c 定义了core dump 的最大尺寸')]),t._v("\ndlv debug\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"gcore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gcore"}},[t._v("#")]),t._v(" gcore")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("gcore pid\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"string-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-方法"}},[t._v("#")]),t._v(" String 方法")]),t._v(" "),a("p",[t._v("针对定义了 String 方法的类型,默认输出时会调用该方法.")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" m a\n\tfmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hello")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"uintptr-unsafe-pointer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uintptr-unsafe-pointer"}},[t._v("#")]),t._v(" uintptr & unsafe.Pointer")]),t._v(" "),a("p",[t._v("uintptr : 是整数,不是引用,可以进行算术运算,将指 pointer 转换为 uintptr 会创建一个没有指针语义的整数值,即时持有某个对象的地址,如果对象移动,垃圾收集器并不会更新 uintptr 的值,uintptr 无法阻止该对象被回收.")]),t._v(" "),a("p",[t._v("unsafe.Pointer : 真正意义上的指针,垃圾收集器可以并且将使用他们防止活动对象被回收,")])])}),[],!1,null,null,null);s.default=e.exports}}]);