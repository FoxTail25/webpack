import path from 'path';

let test = path.resolve('dist', 'assets')
console.log('а вот это тест!', test)

export default {
    mode: "production",
    entry: {
        test1: './src/index.js',
        test2: './src/index2.js',
        test3: './src/index3.js',
},
    output: {

        // filename: 'bundle.js',
        // filename: 'bundle.[contenthash].js',
        // filename: '[name].[contenthash].js',

        
        filename: '[name].js',
    }
}