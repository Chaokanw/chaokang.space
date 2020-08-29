/* config-overrides.js */
module.exports = function override(config, env) {
    //do stuff with the webpack config...

    // config.output = {
    //     publicPath:'/'
    // }

    config.devServer = {
        historyApiFallback:{
            index:'build/index.html'
        }
    }

    return config;
  }