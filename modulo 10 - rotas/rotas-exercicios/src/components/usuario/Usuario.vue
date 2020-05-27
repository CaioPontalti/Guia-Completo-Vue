<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <hr>
        <router-view/>
        <button sucesso @click="irParainicio">Voltar</button>
    </div>
</template>
<script>
export default {
    methods:{
        irParainicio(){
            this.$router.push('/usuario')
        }
    }
}
</script>