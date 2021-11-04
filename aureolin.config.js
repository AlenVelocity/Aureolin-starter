const path = require('path')

/** @type {import('aureolin').Config} */
module.exports = {
    root: path.join(__dirname, process.env.NODE_ENV === 'production' ? 'src' : 'dist'),
    port: process.env.PORT || 3000
}