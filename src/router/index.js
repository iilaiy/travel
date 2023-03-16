import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/Home'),
        meta: {
            keepAlive: true //需要被缓存
        },
        children: [
            {
                path: '/home',
                component: () => import('@/views/Home/HomeSelect'),
                meta: {
                    keepAlive: true
                },
            },
            {
                path: 'attachment',
                component: () => import('@/views/Home/HomeAttachment'),
                meta: {
                    keepAlive: true
                },
            },
        ]
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Search')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login')
    }
]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

/*router.beforeEach((to, from, next) => {

    if (/Android |webos| iPhone |iPod| BlackBerry | iPad/i.test(navigator.userAgent)) {
        next()
    } else {
        // TODO: 当用户不是在手机端访问时跳转到错误页面
        document.body.innerHTML = "<div style='font-size: .5rem;display: flex;justify-content: center;align-items: center;height: 100vh'>ERROR： Please visit the mobile terminal!</div>"
    }
});*/

export default router
