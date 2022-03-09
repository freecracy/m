(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{455:function(t,s,a){t.exports=a.p+"assets/img/shejimoshi-chuangzaoxing.24b87c10.png"},456:function(t,s,a){t.exports=a.p+"assets/img/shejimoshi-jiegouxing.1687c26f.png"},457:function(t,s,a){t.exports=a.p+"assets/img/shejimoshi-xingweixing.41090263.png"},552:function(t,s,a){"use strict";a.r(s);var n=a(20),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"设计模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),n("h2",{attrs:{id:"六原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六原则"}},[t._v("#")]),t._v(" 六原则")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("原则")]),t._v(" "),n("th",[t._v("用途")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("开闭原则")]),t._v(" "),n("td",[t._v("对修改关闭,堆扩展开放")])]),t._v(" "),n("tr",[n("td",[t._v("单一职责")]),t._v(" "),n("td",[t._v("一个类只做一件事,一个类应该只有一个引起它修改的原因")])]),t._v(" "),n("tr",[n("td",[t._v("里氏替换")]),t._v(" "),n("td",[t._v("子类应该可以完全替换父类,使用继承时只扩展新功能,而不破坏父类原有功能")])]),t._v(" "),n("tr",[n("td",[t._v("依赖倒置")]),t._v(" "),n("td",[t._v("细节应该依赖抽象,抽象不应该依赖细节,抽象放在高处保持稳定,细节由底层实现层来完成")])]),t._v(" "),n("tr",[n("td",[t._v("迪米特法则")]),t._v(" "),n("td",[t._v("又称最少知道原则,一个类不应该知道自己操作类的细节,只和朋友谈话,不和朋友的朋友谈话")])]),t._v(" "),n("tr",[n("td",[t._v("接口隔离")]),t._v(" "),n("td",[t._v("客户端不应该依赖它不需要的接口,实现类只需只需依赖自己需要的接口方法")])])])]),t._v(" "),n("h2",{attrs:{id:"构建型-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#构建型-5"}},[t._v("#")]),t._v(" 构建型(5)")]),t._v(" "),n("p",[t._v("创建型用于创建对象.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(455),alt:"shejimoshi-chuangzaoxing"}})]),t._v(" "),n("h3",{attrs:{id:"工厂模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[t._v("#")]),t._v(" 工厂模式")]),t._v(" "),n("p",[t._v("产品只需要跟工厂打交道,不需要知道具体产品的构造细节.")]),t._v(" "),n("h4",{attrs:{id:"简单工厂模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单工厂模式"}},[t._v("#")]),t._v(" 简单工厂模式")]),t._v(" "),n("p",[t._v("根据 className 实例化对象,通过工厂类创建对象,并且根据传入的参数决定具体子类对象的做法.")]),t._v(" "),n("h4",{attrs:{id:"工厂方法模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#工厂方法模式"}},[t._v("#")]),t._v(" 工厂方法模式")]),t._v(" "),n("p",[t._v("每个产品有单独的工厂方法,每个子类对应一个工厂子类,利用多态创建对象.")]),t._v(" "),n("h4",{attrs:{id:"抽象工厂模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#抽象工厂模式"}},[t._v("#")]),t._v(" 抽象工厂模式")]),t._v(" "),n("p",[t._v("提取出工厂接口")]),t._v(" "),n("h3",{attrs:{id:"单例模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[t._v("#")]),t._v(" 单例模式")]),t._v(" "),n("p",[t._v("保证一个类只有一个实例,并提供一个访问它的全局访问点.")]),t._v(" "),n("p",[t._v("饿汉声明时直接初始化变量.")]),t._v(" "),n("p",[t._v("懒汉模式防止内存浪费,使用时在初始化")]),t._v(" "),n("p",[t._v("双重锁检查和静态内部类都是为了保证线程安全.静态内部类是增加内部 static 类.双重锁,检查是否是 nil 加锁, new 实例化时加锁")]),t._v(" "),n("p",[t._v("枚举实现")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Singleton "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单例结构体")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" singleton "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Singleton "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单例实体")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" once sync"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Once "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行一次")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回单例")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetInstance")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("Singleton "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tonce"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Do")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tsingleton "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("Singleton"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" singleton\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("h3",{attrs:{id:"建造型模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建造型模式"}},[t._v("#")]),t._v(" 建造型模式")]),t._v(" "),n("p",[t._v("用具创建过程稳定但配置多变的对象.将一个复杂的构建与其表示分离,使得同样的构建过程可以创建不同的表示.现在构建着模式通过链式调用生成不同的配置(相对于经典的建造者指挥者模式), 通过 set 来修改配置.")]),t._v(" "),n("h3",{attrs:{id:"原型模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原型模式"}},[t._v("#")]),t._v(" 原型模式")]),t._v(" "),n("p",[t._v("在构建型模式基础上增加 clone 方法.")]),t._v(" "),n("h2",{attrs:{id:"结构型模式-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#结构型模式-7"}},[t._v("#")]),t._v(" 结构型模式(7)")]),t._v(" "),n("p",[t._v("结构型目的是优化不同类、对象、接口之间的结构关系.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(456),alt:"shejimoshi-jiegouxing"}})]),t._v(" "),n("h3",{attrs:{id:"外观模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#外观模式"}},[t._v("#")]),t._v(" 外观模式")]),t._v(" "),n("p",[t._v("为了使复杂的子系统更容易被使用,应当为子系统的众多接口提供一个简洁的高层接口.")]),t._v(" "),n("h2",{attrs:{id:"行为行模式-11"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#行为行模式-11"}},[t._v("#")]),t._v(" 行为行模式(11)")]),t._v(" "),n("p",[t._v("行为型的目的是更好的实现类与类之间交互以及算法的执行.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(457),alt:"shejimoshi-xingweixing"}})]),t._v(" "),n("h3",{attrs:{id:"契约模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#契约模式"}},[t._v("#")]),t._v(" 契约模式")]),t._v(" "),n("p",[t._v("具有相同操作的类定义一些共同的方法,但是具体逻辑由具体类实现")]),t._v(" "),n("h3",{attrs:{id:"观察者模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#观察者模式"}},[t._v("#")]),t._v(" 观察者模式")]),t._v(" "),n("p",[t._v("基于事件和响应.观察者模式中抽象出一个观察者接口,所有接受事件并做出响应的类都要实现该接口,事件发起者拥有一个观察者列表,可以注册新的观察者或删除观察者.")]),t._v(" "),n("div",{staticClass:"language-go line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" subject "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tobsevers "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("observer\n\tcontext  "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newSubject")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("subject "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("subject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tobsevers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("observer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("subject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("attach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o observer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obsevers "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obsevers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("subject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" o "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("range")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obsevers "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\to"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Update")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("subject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" context\n\ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" observer "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Update")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("subject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" reader "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tname "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("r "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("reader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("subject"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfmt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Printf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s , %s \\n"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("newReder")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("reader "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("reader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br")])]),n("h3",{attrs:{id:"适配器模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#适配器模式"}},[t._v("#")]),t._v(" 适配器模式")]),t._v(" "),n("p",[t._v("衔接两个不相关接口")]),t._v(" "),n("h3",{attrs:{id:"策略模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#策略模式"}},[t._v("#")]),t._v(" 策略模式")]),t._v(" "),n("p",[t._v("不同的方式做同一件事")]),t._v(" "),n("h3",{attrs:{id:"建造者模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#建造者模式"}},[t._v("#")]),t._v(" 建造者模式")]),t._v(" "),n("p",[t._v("根据构建过程中不同配置构建不同对象")]),t._v(" "),n("h3",{attrs:{id:"解释器模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解释器模式"}},[t._v("#")]),t._v(" 解释器模式")]),t._v(" "),n("h3",{attrs:{id:"迭代器模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#迭代器模式"}},[t._v("#")]),t._v(" 迭代器模式")]),t._v(" "),n("h3",{attrs:{id:"中介者模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#中介者模式"}},[t._v("#")]),t._v(" 中介者模式")]),t._v(" "),n("h3",{attrs:{id:"备忘录模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#备忘录模式"}},[t._v("#")]),t._v(" 备忘录模式")]),t._v(" "),n("h3",{attrs:{id:"责任链模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#责任链模式"}},[t._v("#")]),t._v(" 责任链模式")]),t._v(" "),n("p",[t._v("像链表一样一个一个进行处理,相对于策略模式,责任链模式可以实现部分处理(如过滤器)")])])}),[],!1,null,null,null);s.default=r.exports}}]);