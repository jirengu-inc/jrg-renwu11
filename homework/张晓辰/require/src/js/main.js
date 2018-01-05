/**
 * Created by 金龙 on 2017/8/24.
 */
requirejs.config({
    baseUrl: './js',
    paths: {
        jquery: 'lib/jquery',
    }
});

//加载入口模块
requirejs(['app/index']);