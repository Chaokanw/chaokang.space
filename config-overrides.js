/* config-overrides.js */
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    devServer: {
        historyApiFallback:{
            index:'build/index.html'
        }
    }

    return config;
  }