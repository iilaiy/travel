/**
 * 存放的数据
 */

/**
 * 解决某浏览器对于local的本地存储会报错的问题
 */
let defaultCity = '深圳'

try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}



const state = {
    city: defaultCity,
}
export { state }