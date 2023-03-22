/**
 *  读取state属性
 */

const getters = {
    doubleCity (state) {
        return state.city
    },
    getScenicSpotList(state) {
        return state.scenicSpotList
    }
}

export { getters }