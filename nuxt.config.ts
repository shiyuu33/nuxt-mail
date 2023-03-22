// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            NODE_ENV: process.env.NODE_ENV,
            IMG_PATH: process.env.IMG_PATH
        }
    },
    app: {
        rootId: 'app',
        rootTag: 'div'
    },
    nitro: {
        prerender: {
            ignore: ["/200.html", "/404.html"]
        }
    },
    hooks: {
        "prerender:routes"({ routes }) {
            routes.delete("/")
        }
    },
    vue: {
        compilerOptions: {
            comments: true
        },
    }
})
