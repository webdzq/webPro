#!/usr/bin/env node
console.log('hello my first node-cli');

const program = require('commander');
program
    .version('0.0.1') // cmd下 -V 查询版本
    .description('这里是一个说明：hello version')
    .option('-a, --aArgv', '新增a参数') // cmd下 -a 设定 program.aArgv 为 true
    .option('-b, --bArgv', '新增b参数') // cmd下 -b 设定 program.bArgv 为 true
    .option('-c, --cArgv [type]', '新增c参数內容', 'demo258') // cmd下 -c 帶內容 设定 program.bArgv 预设值为 demo258
//定义 deploy 命令，並传入name参数
program
    .command('deploy <name>')
    .description('定义一个命令')
    .action(function(name) {
        console.log('Deploying "%s"', name)
    })
program.parse(process.argv)
//打印出各个传入参数
console.log('  - %s aArgv', program.aArgv)
console.log('  - %s bArgv', program.bArgv)
console.log('  - %s cArgv', program.cArgv)


 