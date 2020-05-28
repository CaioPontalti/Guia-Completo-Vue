import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue' 
import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'  

Vue.use(Router)

const router = new Router({
    mode:'history',
    routes:[
        { 
            path:'/', 
            component: Inicio
        },
        { 
            path: '/usuario', 
            component: Usuario, 
            props:true, 
            children:[
                { path: '', component:UsuarioLista },
                { path: ':id', component: UsuarioDetalhe, props: true,
                    beforeEnter:(to, from, next) =>{
                        // antes da rota detalhe => usuário detalhe
                        next()
                    } 
                },
                { path: ':id/editar', component:UsuarioEditar, props:true, name:'editarUsuario' }
            ]
        },
        {
            path:'/redirecionar',
            redirect:'/usuario'
        },
        {
            path:'*',
            redirect:'/'
        }
    ]
})


router.beforeEach((to, from, next)=>{


    next()
})


export default router