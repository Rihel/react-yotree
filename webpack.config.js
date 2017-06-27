const path = require('path');
const webpack = require('webpack');
const Browser = require('open-browser-webpack-plugin'),
    fs = require('fs');
const ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH, './src'),
    BUILD_PATH = path.resolve(ROOT_PATH, './build'),
    PAGE_PATH = path.resolve(APP_PATH, './pages');
htmlWebpack = require('html-webpack-plugin'),
    Ex = require('extract-text-webpack-plugin');



// readdir(path.resolve(PAGE_PATH))
function getEnter(root) {
    let pages = fs.readdirSync(root);
    let enter = {};
    let html = []
    pages.forEach(function (file) {
        enter[file] = path.resolve(root, `./${file}/index.jsx`);
        html.push(new htmlWebpack({
            alwaysWriteToDisk: true,
            template: path.resolve(ROOT_PATH, `./index.html`),
            chunks: ['common', file],
            filename: path.resolve(BUILD_PATH, `./${file}.html`),
        }))
    });
    return {
        enter,
        html
    }
}

let config = {
    devtool:'source-map',
    resolve: {
        extensions: ['.js', '.scss'],
    },
    entry: Object.assign({

        common: ['react', 'react-dom'],
    }, getEnter(PAGE_PATH).enter),
    output: {
        path: path.resolve(BUILD_PATH),
        filename: 'js/[name].js'
    },

    resolve: {
        extensions: ['.js', '.scss','.jsx'],
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                loader: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(css|sass|scss)$/,
                include: APP_PATH,
                use: Ex.extract({
                    fallback: "style-loader",
                    use: [{
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                // modules: true,
                                // localIdentName: '[name]-[local]-[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')]
                            }
                        },
                        {
                            loader: 'sass-loader'
                        },

                    ]
                })
            },
            {
                // 处理图片文件
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?name=img/[name].[ext]&limit=8192',

            },
            {
                // 处理字体文件
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 7186, // inline base64 if <= 7K
                    name: 'css/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: getEnter(PAGE_PATH).html.concat([

        new Ex('style.css'),
        new Browser(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/[name].js',
            minChunks: 2
        }),
    ])
}
console.log(config)
module.exports = config;