import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-277213.firebaseio.com/',
            headers:{
                "Authorization": "Token"
            }
        })

        Vue.prototype.$http.interceptors.request.use(config =>{
            console.log(config.method)

            return config
        }, error => Promise.reject(error))

        // Vue.prototype.$http.interceptors.response.use(res=>{

        // })

    }
})