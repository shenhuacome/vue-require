({ 
 appDir: './', //项目根目录
 dir: './dist', //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）
 baseUrl:'./js',
 modules: [ //要优化的模块，相对baseUrl的路径，也是省略后缀“.js”
 { name:'main' } ,
 { name:'pagejs/index' } ,
 { name:'pagejs/list' } 
 ], 
 fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/, //过滤，匹配到的文件将不会被输出到输出目录去
 optimizeCss: 'standard', 
 removeCombined: false //如果为true，将从输出目录中删除已合并的文件
})