(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{575:function(t,a,r){"use strict";r.r(a);var e=r(13),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"🐕‍🦺性能优化技术"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#🐕‍🦺性能优化技术"}},[t._v("#")]),t._v(" 🐕‍🦺性能优化技术")]),t._v(" "),r("h2",{attrs:{id:"性能优化知识体系"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能优化知识体系"}},[t._v("#")]),t._v(" 性能优化知识体系")]),t._v(" "),r("blockquote",[r("p",[t._v("暂时接触不到这部分的内容（毕竟咱暂时就是个实习生 做到代码规范&减少冗余代码、冗余变量&使用合适的编码手段实现需求就很ok了）-2022/3/6")])]),t._v(" "),r("ul",[r("li",[t._v("大数据渲染问题")]),t._v(" "),r("li",[t._v("CDN")]),t._v(" "),r("li",[t._v("回流（重排）& 重绘")]),t._v(" "),r("li",[t._v("节流 & 防抖\n"),r("ul",[r("li",[t._v("这部分要求熟练掌握，尤其是简单实现手写这二者的操作")])])])]),t._v(" "),r("h2",{attrs:{id:""}},[r("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),r("h2",{attrs:{id:"大量数据渲染问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#大量数据渲染问题"}},[t._v("#")]),t._v(" 大量数据渲染问题")]),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844904190418878478#heading-20",target:"_blank",rel:"noopener noreferrer"}},[t._v("第九期|前端自研文档显示有多难"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"假设一个列表有十万条数据-应该如何渲染"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#假设一个列表有十万条数据-应该如何渲染"}},[t._v("#")]),t._v(" 假设一个列表有十万条数据 应该如何渲染")]),t._v(" "),r("ul",[r("li",[t._v("数据分页")]),t._v(" "),r("li",[t._v("懒加载")]),t._v(" "),r("li",[t._v("数组分块\n"),r("ul",[r("li",[t._v("为要处理的项目创建一个队列 使用定时器每过一段时间取出一部分内容 然后再设置一个定时器（有点像节流的实现细节 但是目的不同~")])])])]),t._v(" "),r("h3",{attrs:{id:"虚拟滚动"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#虚拟滚动"}},[t._v("#")]),t._v(" 虚拟滚动")]),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://juejin.cn/post/6844903982742110216#heading-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("「前端进阶」高性能渲染十万条数据(虚拟列表) - 掘金 (juejin.cn)"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("code",[t._v("虚拟列表")]),t._v("其实是按需显示的一种实现，即只对"),r("code",[t._v("可见区域")]),t._v("进行渲染，对"),r("code",[t._v("非可见区域")]),t._v("中的数据不渲染或部分渲染的技术，从而达到极高的渲染性能。")]),t._v(" "),r("p",[t._v("假设有1万条记录需要同时渲染，我们屏幕的"),r("code",[t._v("可见区域")]),t._v("的高度为"),r("code",[t._v("500px")]),t._v(",而列表项的高度为"),r("code",[t._v("50px")]),t._v("，则此时我们在屏幕中最多只能看到10个列表项，那么在首次渲染的时候，我们只需加载10条即可。"),r("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/29/16e15195cf16a558~tplv-t2oaga2asx-watermark.awebp",alt:"img"}})])]),t._v(" "),r("blockquote",[r("p",[t._v("使用"),r("code",[t._v("javascript")]),t._v("来控制元素、维护滚动偏移量。目前"),r("code",[t._v("github")]),t._v("也有很多的开源框架，是选择自己自研还是现有方案，需要团队做技术调研。")])]),t._v(" "),r("p",[t._v("滑到一个区域之后再去将对应去与内容进行渲染")]),t._v(" "),r("h3",{attrs:{id:"使用worker来计算"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用worker来计算"}},[t._v("#")]),t._v(" 使用Worker来计算")]),t._v(" "),r("blockquote",[r("p",[t._v("众所周知，"),r("code",[t._v("javascript")]),t._v("是单线程的，如果将所有的计算code写在UI层，就会造成页面的卡死。使用Worker可以将其独立出来，但是里面有大量的坑需要踩踩。")])]),t._v(" "),r("h3",{attrs:{id:"数据切片"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据切片"}},[t._v("#")]),t._v(" 数据切片")]),t._v(" "),r("blockquote",[r("p",[t._v("请求数据的时候不是请求所有的数据，而是只请求在一个range内的数据，避免与Worker传输大量数据，造成性能问题。")])]),t._v(" "),r("h3",{attrs:{id:"提升用户体验的手段"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提升用户体验的手段"}},[t._v("#")]),t._v(" 提升用户体验的手段")]),t._v(" "),r("blockquote",[r("ol",[r("li",[t._v("从选中到编辑，以及敏感的键盘响应")]),t._v(" "),r("li",[t._v("对于中文输入法在表格中的使用体验")]),t._v(" "),r("li",[t._v("移动设备键盘弹起之后对页面的影响")])]),t._v(" "),r("p",[t._v("要是想让用户体验提升，就要让用户的体验尽可能的贴近桌面端的使用，例如基础的，对上下左右箭头的响应，对于tab，enter按键的监听；进阶的对于一些冷门API的使用；对于不同的浏览器平台和使用设备，都需要做不同的适配。")])]),t._v(" "),r("h3",{attrs:{id:"懒加载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#懒加载"}},[t._v("#")]),t._v(" 懒加载")]),t._v(" "),r("blockquote",[r("h4",{attrs:{id:"浏览器灵魂之问-第11篇-实现图片懒加载"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器灵魂之问-第11篇-实现图片懒加载"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://juejin.cn/post/6844904021308735502#heading-98",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器灵魂之问 第11篇: 实现图片懒加载"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"cdn的原理、应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cdn的原理、应用"}},[t._v("#")]),t._v(" CDN的原理、应用")]),t._v(" "),r("h2",{attrs:{id:"回流与重绘"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#回流与重绘"}},[t._v("#")]),t._v(" 回流与重绘")]),t._v(" "),r("h2",{attrs:{id:"节流与防抖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#节流与防抖"}},[t._v("#")]),t._v(" 节流与防抖")]),t._v(" "),r("blockquote",[r("h4",{attrs:{id:"浏览器灵魂之问-第10篇-实现事件的防抖和节流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#浏览器灵魂之问-第10篇-实现事件的防抖和节流"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://juejin.cn/post/6844904021308735502#heading-94",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器灵魂之问 第10篇: 实现事件的防抖和节流"),r("OutboundLink")],1)]),t._v(" "),r("h4",{attrs:{id:"用吃巧克力来理解-防抖和节流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#用吃巧克力来理解-防抖和节流"}},[t._v("#")]),t._v(" "),r("a",{attrs:{href:"https://juejin.cn/post/6999944584813871141",target:"_blank",rel:"noopener noreferrer"}},[t._v("用吃巧克力来理解 防抖和节流！"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"防抖与节流的应用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#防抖与节流的应用场景"}},[t._v("#")]),t._v(" 防抖与节流的应用场景")]),t._v(" "),r("p",[t._v("可以尝试手写")]),t._v(" "),r("blockquote",[r("p",[t._v("函数防抖是指在"),r("strong",[t._v("事件被触发 n 秒后再执行回调")]),t._v("，如果"),r("strong",[t._v("在这 n 秒内事件又被触发，则重新计时")]),t._v("。")])]),t._v(" "),r("ul",[r("li",[t._v("防抖 debounce\n"),r("ul",[r("li",[t._v("当用户在短时间内，"),r("strong",[t._v("多次点击")]),t._v("登陆，"),r("strong",[t._v("发送")]),t._v("短信等"),r("strong",[t._v("请求")]),t._v("数据的操作时")]),t._v(" "),r("li",[t._v("文本编辑器一段时间不操作，进行自动保存")]),t._v(" "),r("li",[t._v("搜索框的联想——"),r("strong",[t._v("实时发送请求")]),t._v(" "),r("ul",[r("li",[t._v("用户输入文字，只在停顿1s时才进行联想")])])])])])]),t._v(" "),r("blockquote",[r("p",[t._v("固定的时间内只执行一次")])]),t._v(" "),r("ul",[r("li",[t._v("节流 throttle\n"),r("ul",[r("li",[t._v("鼠标mouseover事件，只执行一次时")]),t._v(" "),r("li",[r("strong",[t._v("页面滚动")]),t._v("，每隔1s（固定的时间）才计算一次位置信息，避免边滚动边计算")])])])]),t._v(" "),r("h2",{attrs:{id:"图片优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图片优化"}},[t._v("#")]),t._v(" 图片优化")]),t._v(" "),r("h2",{attrs:{id:"webpack优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack优化"}},[t._v("#")]),t._v(" Webpack优化")])])}),[],!1,null,null,null);a.default=_.exports}}]);