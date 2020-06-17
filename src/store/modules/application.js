export default {
    namespaced: true,
    state: {
        isCollapse: false,   // sidebar 是否折叠 false不折叠，ture折叠
    },
    mutations: {
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
        },
    },
    actions: {
        toggleSideBar({commit}) {
            commit('SET_COLLAPSE')
        }
    },
}