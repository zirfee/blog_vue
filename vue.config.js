
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
    }
}