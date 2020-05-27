const {join} = require('path')

module.exports = ({cache, getCache, cacheDir}) =>
    getCache
        ? getCache(join('../../', cacheDir))
        // override the directory property in the prototype, which points to the .cache dir that gets blown away by Gatsby
        : Object.defineProperty(cache, 'directory', { value: cacheDir });
