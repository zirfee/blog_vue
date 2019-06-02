
module.exports = {

    devServer: {
        port: "8081",
        open: false,
        proxy:{
            "/api":{
                target:"http://localhost:8080",
                changeOrigin: true,
               // ws:true,
                pathRewrite: {
                    "^/api": ''
                }
            }
        }
    },
    chainWebpack: config => {
            config.module.rule('md')
                .test(/\.md/)
                .use('vue-loader')
                .loader('vue-loader')
                .end()
                .use('vue-markdown-loader')
                .loader('vue-markdown-loader/lib/markdown-compiler')
                .options({
                    raw: true
                })
        }

}