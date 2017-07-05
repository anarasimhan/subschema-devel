var path         = require('path');
var webpackUtils = require('subschema-dev-support/webpack-utils');
var pkg          = require('./package.json');

module.exports = function (options, webpack) {
    webpack.module.rules.push({
        test: path.resolve(__dirname, 'src', 'DefaultLoader.js'),
        use : {
            loader : 'val-loader',
            options: {
                dependencies: webpackUtils.concatFilteredDependencies(pkg)
            }

        }
    });
    //make sure everyone uses the same lodash.
    webpack.resolve.alias.lodash =
        path.dirname(require.resolve('lodash'));

    webpack.plugins.unshift(new options.webpack.DefinePlugin({
        SUBSCHEMA_VERSION: JSON.stringify(pkg.version)
    }));
    return webpack;

};
