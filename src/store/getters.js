const getters = {
    // userMessage : state=>state.user.userMessage, // 该书写方式可以在vue页中使用
    userMessage: state => {
        // 该书写方式在 .js文件中使用
        return state.user.userMessage
    },
    userRoles: state => state.user.userRoles,
    permission_routes: state => state.permission.routes,
    isCollapse: state => state.application.isCollapse
}
export default getters