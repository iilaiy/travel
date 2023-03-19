/**
 * 改变vuex中的属性
 */
const mutations = {
    changeCity(state, city) {
        state.city = city
        try {
            localStorage.city = city
        } catch (e) {}
    }
}
export { mutations }