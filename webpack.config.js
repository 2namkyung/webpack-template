const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry:'./js/main.js',

    output:{
        path: path.resolve(__dirname, 'dist'), // 절대 경로 필요, Default
        filename:'main.js', // Default , entry 파일명과 같다
        clean: true
    },

    module:{
        rules:[
            {
                test: /\.s?css$/,
                use: [
                    'style-loader', // 해석된 내용 html에 삽입
                    'css-loader', // js에서 css파일 해석
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    // 번들링 이후 결과물 처리 방식 등에 대한 플러그인 설정
    plugins:[
        new HtmlPlugin({
            template: './index.html'
        }),

        new CopyPlugin({
            patterns:[
                { from: 'static' }
            ]
        })
    ],

    devServer: {
        host:'localhost'
    }
}