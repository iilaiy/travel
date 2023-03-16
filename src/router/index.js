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
            keepAlive: true, //需要被缓存
            requireAuth: false,  // 需要验证登录
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
        component: () => import('@/views/Search/Search')
    },
    {
        path: '/message',
        name: 'Message',
        component: () => import('@/views/Message/Message'),
        meta: {
            keepAlive: true, //需要被缓存
            requireAuth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/Login')
    }
]

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


/**
 * 路由守卫
 */
router.beforeEach((to, from, next) => {
    /**
     * 设备验证
     */
    if (!/Android |webos| iPhone |iPod| BlackBerry | iPad/i.test(navigator.userAgent)) {
        // TODO: 当用户不是在手机端访问时跳转到错误页面
        document.body.innerHTML = "<div style='font-size: .5rem;display: flex;justify-content: center;align-items: center;height: 100vh'>ERROR： Please visit the mobile terminal!</div>"
        return
    }
    /**
     * 验证登录状态
     */
    if (to.matched.length !== 0) {
        if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
            if (Boolean(localStorage.getItem("token"))) { // 通过浏览器本地缓存判断当前的token是否存在
                next();
            } else {
                // TODO: 先弹出一个提示框，待用户选择是否需要跳转登录页进行登录，否则返回原本的页面
                next({
                    path: '/login',
                    query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                })
            }
        } else {
            next();
        }
    } else {
        next({
            path: '/login',
            query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
    }
})

export default router
