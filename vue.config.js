// const { turn } = require("core-js/fn/array");

module.exports = {
	publicPath: 'student/',
	// devServer: {
	// 	disableHostCheck:true,
	// 	https: true,
	// 	proxy: {
	// 		'/api':{
	// 			// 測試用
	// 			target: 'http://163.17.135.152:1314/',
	// 			// 上線用
	// 			// target: 'http://127.0.0.1/',
	// 			changeOrigin: true,
	// 			pathRewrite: {
	// 				'^/api': '' 
	// 			}
	// 		}
	// 	}
	// }
	devServer: {
		proxy: {
			'/api':{
				target: 'http://127.0.0.1/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '' 
				}
			}
		}
	}
}