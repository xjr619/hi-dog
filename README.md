1.命令行创建npm配置文件npm init
2.添加一个gulp的依赖（安装gulp的包）
npm install gulp --save-dev
3.在项目根目录下添加一个gulpfile.js文件，这是gulp的主文件文件名固定。文件首行要写一行'use strict';
4.在gulpfile中抽象我们需要做的任务。
5.[globs匹配语法]
5.1 src/\*
5.2 src/\*/\*
5.3 src/\*\*/\*
5.4 src/\*.jpg
5.5多个globs ['src/\*.{jpg,png}','a/a.html']
5.6排除某些文件 !xxx
5.7默认任务
gulp中任务名有个特殊值default
5.8文件自动监视执行任务