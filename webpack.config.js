const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlBeautifyPlugin = require('html-beautify-webpack-plugin')
const path = require("path")

module.exports = {
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                resolve: {
                    extensions: ['.ts', '.js']
                },
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', "@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            },
            {
                test: /\.(sass|scss)$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "!!pug-loader!./src/template/index.pug",
            title: 'Home',
            filename: "./index.html"
        }),
        new HtmlWebPackPlugin({
            template: "!!pug-loader!./src/template/pages/login.pug",
            title: 'Login',
            filename: "./pages/login.html"
        }),
        new HtmlWebPackPlugin({
            template: "!!pug-loader!./src/template/pages/register.pug",
            title: 'Register',
            filename: "./pages/register.html"
        }),
        new HtmlWebPackPlugin({
            template: "!!pug-loader!./src/template/pages/reset.pug",
            title: 'Reset',
            filename: "./pages/reset.html"
        }),
        new HtmlWebPackPlugin({
            template: "!!pug-loader!./src/template/pages/afterreset.pug",
            title: 'Reset',
            filename: "./pages/afterreset.html"
        }),
        new HtmlWebPackPlugin({
            template: "!!pug-loader!./src/template/pages/sendreset.pug",
            title: 'Reset',
            filename: "./pages/sendreset.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin([{
                from: './src/assets/images',
                to: './assets/images'
            },
            {
                from: './src/assets/fonts',
                to: './assets/fonts'
            },
        ]),
        new HtmlBeautifyPlugin({
            config: {
                html: {
                    end_with_newline: true,
                    indent_size: 2,
                    indent_with_tabs: true,
                    indent_inner_html: true,
                    preserve_newlines: true,
                    unformatted: ['p', 'i', 'b', 'span']
                }
            },
            replace: [' type="text/javascript"']
        })
    ]

}