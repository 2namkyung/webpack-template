const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./js/main.js',

    output:{
        path: path.resolve(__dirname, 'dist'), // 절대 경로 필요, Default
        filename:'main.js', // Default , entry 파일명과 같다
        clean: true
    },

    // 번들링 이후 결과물 처리 방식 등에 대한 플러그인 설정
    plugins:[
        new HtmlPlugin({
            template: './index.html'
        })
    ]
}