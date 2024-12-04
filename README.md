npm init 构建package文件夹

然后下面的三个项目就会共同使用这个安装依赖。

### 项目介绍

公司框架react18 + vite6. 基于此，本想尝试基于vite主应用集成vite6+react18子应用+ vue3+vite4子应用。不故宫确实，如果想要完善微前端，确实应该考虑多种情况、vue2、vue3、react+webpack、react+vite等等，然后还要考虑部署后会不会出现问题等等。这次算是一个小小的尝试吧。


### 项目参考：
1. 主要参考（vite vue3子应用部分main.js中的unmounted的写法处不一样（按其写法，我本地环境报错了）。于是看了参考2，剔除了部分代码） https://blog.csdn.net/weixin_43503080/article/details/131814068?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-2-131814068-blog-130157701.235%5Ev43%5Epc_blog_bottom_relevance_base5&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-2-131814068-blog-130157701.235%5Ev43%5Epc_blog_bottom_relevance_base5&utm_relevant_index=3

2. https://blog.csdn.net/Kevin_Leung_/article/details/129301584?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7Ebaidujs_baidulandingword%7ECtr-2-129301584-blog-130110455.235%5Ev43%5Epc_blog_bottom_relevance_base5&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7Ebaidujs_baidulandingword%7ECtr-2-129301584-blog-130110455.235%5Ev43%5Epc_blog_bottom_relevance_base5&utm_relevant_index=5
3. 
4. 问题1: **Cannot use import statement outside a module**， 参考：https://juejin.cn/post/7353447472557637695d
4. 问题1: **子应用图片出不来**， 参考：https://blog.csdn.net/weixin_45325141/article/details/126622971

### 过程：
1. 先创建主应用（使用CRA命令）： https://cra.nodejs.cn/docs/getting-started/#npm， 我看项目没有引入vite，应该是webpack构建的。
2. 再创建子应用：核心就是改变react启动时渲染的部分。

### 效果图：

![效果图]([./img/1.png](https://ibb.co/sQ1qYg4))
