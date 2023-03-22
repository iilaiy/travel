/**
 * 改变vuex中的属性
 */
const mutations = {
    changeCity(state, city) {
        state.city = {...city}
        try {
            localStorage.city = JSON.stringify({
                ...city
            })
        } catch (e) {}
    },
    changePositionCity(state, city) {
        state.positionCity = city
    },
    changeScenicSpotList(state, scenic) {
        state.scenicSpotList = scenic
    }
}
export { mutations }