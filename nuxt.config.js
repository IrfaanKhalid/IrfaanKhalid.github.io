module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'Irfaan Khalid',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'My personal website built in Vue using Nuxt.js.' }
        ],
        link: [
            { rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' }
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: 'blue' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, ctx) {
            if (ctx.dev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}