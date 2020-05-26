<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <button sucesso @click="irParainicio">Voltar</button>
    </div>
</template>
<script>
export default {
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }, 
    // watch:{
    //     $route(novo, antigo){
    //         this.id = novo.params.id
    //     }
    // },
    props:['id'],
    methods:{
        irParainicio(){
            this.$router.push('/')
        }
    }
}
</script>