const userConfig = {

    namespace: true,

    state: {
        stateCode: -1,
        user: '',
        role: '',
        email: '',
        token: ''
    },

    action: {
        setUser(state, user) {
            state.user = user
        },

        setRole(state, role) {
            state.role = role
        },

        setEmail(state, email) {
            state.email = email
        },

        setToken(state, token) {
            state.token = token
        }
    }
}

export default userConfig;