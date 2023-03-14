/**
 * 改变vuex中的属性
 */
const mutations = {
    addCount(state, payload) {
        state.count += payload
    },
}
export { mutations }