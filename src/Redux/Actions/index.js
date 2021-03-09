const projectActions = {
    getProjects: "GET_PROJECTS",
    updateProject: "UPDATE_PROJECT",
    deleteProject: "DELETE_PROJECT",
}
const authActions ={
    loginUser: "LOGIN_USER",
    logoutUser: "LOGOUT_USER",
    authUser: "AUTH_USER",
}
const appActions = {
    websiteStyle:"UPDATE_STYLE"
}

const actions = {
    ...projectActions,
    ...authActions,
    ...appActions
}
export default actions;