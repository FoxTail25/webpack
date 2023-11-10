import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

let test = path.resolve('dist', 'assets')
console.log('а вот это тест!', test)

export default {
    // context: path.resolve('src'), // контекст для точек входа (этот путь будет подставляться перед каждым файлом)
    // mode: "production",
    entry: './src/index.js',
    plugins: [new MiniCssExtractPlugin({
        // filename: 'bundle.[contenthash].css'
        filename: 'bundle.css'
    }), new HtmlWebpackPlugin(),],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },

    // output: {

    //     filename: 'bundle.js',
    //     // filename: 'bundle.[contenthash].js',
    //     // filename: '[name].[contenthash].js',


    //     // filename: '[name].js',
    //     // path: path.resolve('dist'),
    //     path: path.resolve('docs'), // путь для выгрузки файлов (в переменной path хранится путь от корня)
    // }
}