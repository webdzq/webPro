# 用nodejs实现自定义cli
<pre>
（mac系统）
1，cmd创建node_cli :   
-> mkdir node_cli
2, 切换到node_cli目录下并初始化
-> cd node_cli
-> npm init
点击yes完成创建package.json文件。
3，新建main.js，并指定为node脚本（#!/usr/bin/env node）
-> touch main.js
4,在package.json中添加如下代码，这个设定告知系统执行 my-cli后，同等执行 node main.js。
   "bin": {
    "my-cli": "./main.js"
  }
5，如果你安装其他插件，均可以先使用全局安装（-g）,最后利用npm link 把你的命令增加到系统参数里，以后就可以直接在cmd中使用了。如下：

->npm i -g
->npm link
-> my-cli
//------=>：hello my first node-cli------
总结:以上实现了简单的自定义cli。下面使用插件『精装修』一下界面
4，使用 commander 为你的命令工具增加功能性介面
->(sudo) npm i commander
注：commander参考npm官网：https://www.npmjs.com/package/commander
5,完善main.js。
6，cmd运行相关命令
-> my-cli -V
    hello my first node-cli
    0.0.1
-> my-cli -h
  hello my first node-cli

  Usage: my-cli [options] [command]


  Commands:

    deploy <name>  定义一个命令

  这里是一个说明：hello version

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -a, --aArgv         新增a参数
    -b, --bArgv         新增b参数
    -c, --cArgv [type]  新增c参数內容

-> my-cli deploy myname
    hello my first node-cli
    Deploying "myname"
    - undefined aArgv
    - undefined bArgv
    - demo258 cArgv
7,分享你的 cli 工具。如果你希望把开发后的命令分享给别人，可以把方案publish到npm。

[1]首先把你的方案发布至 github (package.json 中記得加上git位置 “repository”: “https://github.com/xxxx/xxxxx.git“)
[2]注册一个npm账户
[3]方案中执行
    npm login  //登入
    npm publish //分享至npm
[4]以后只要全域安装你的命令，就可以直接执行
    npm i -g your-cli
</pre>
