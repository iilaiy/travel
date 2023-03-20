import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        /* 首页 */
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/Home'),
        meta: {
            keepAlive: true, //需要被缓存
        }
    },
    {
        /* 选择城市 */
        path: '/city',
        name: 'City',
        component: () => import('@/views/City/City')
    },
    {
        /* 搜素页 */
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Search/Search')
    },
    {
        /* 消息 */
        path: '/message',
        name: 'Message',
        component: () => import('@/views/Message/Message'),
        meta: {
            keepAlive: true, //需要被缓存
            requireAuth: true,
        },
    },
    {
        /* 登录 */
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/Login')
    },
    {
        /* 攻略 */
        path: '/guideline',
        name: 'Guideline',
        component: () => import('@/views/Guideline/Guideline')
    },
    {
        /* 发布 */
        path: '/release',
        name: 'Release',
        component: () => import('@/views/Release/Release')
    },
    {
        /* 订单 */
        path: '/order',
        name: 'Order',
        component: () => import('@/views/Order/Order')
    },
    {
        /* 我的 */
        path: '/mine',
        name: 'Mine',
        component: () => import('@/views/Mine/Mine')
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
                console.log(to.fullPath)
                // TODO: 先弹出一个提示框，待用户选择是否需要跳转登录页进行登录，否则返回原本的页面
                next({
                    path: '/login',
                    query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                })
            }
        } else {
            if (Boolean(localStorage.getItem("token"))) { // 判断是否登录
                if (to.path != "/login") { //判断是否要跳到登录界面
                    next();
                } else {
                    /**
                     * 防刷新，如果登录，修改路由跳转到登录页面，修改路由为登录后的首页
                     */
                    next({
                        path: '/home'
                    })
                }
            } else {
                next();
            }
        }
    } else {
        next({
            path: '/login',
            query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
    }
    /* 每次跳转页面返回到顶部 */
    window.scrollTo(0, 0)
})

export default router
