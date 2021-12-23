import {createStore} from "vuex";
import userConfig from './modules/userConfig'

export default createStore({
    modules: {
        userConfig
    }
})