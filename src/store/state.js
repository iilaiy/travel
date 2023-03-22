/**
 * 存放的数据
 */

/**
 * 解决某浏览器对于local的本地存储会报错的问题
 */
let defaultCity = {
    id: '37',
    name: '深圳',
    spell: 'shenzhen',
}

try {
    if (localStorage.city) {
        defaultCity = JSON.parse(localStorage.city)
    }
} catch (e) {}


const state = {
    city: defaultCity,
    positionCity: '',
    scenicSpotList: []
}
export { state }