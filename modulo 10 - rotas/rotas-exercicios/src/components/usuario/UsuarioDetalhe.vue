<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <router-link tag="button" primario :to="`/usuario/${id}/editar`">
            Editar
        </router-link>
        <router-link tag="button" primario 
            :to="{name: 'editarUsuario', params:{id} , query:{completo:true, lingua: 'pt'}}">
            Editar 2
        </router-link>

    </div>
</template>

<script>
export default {
    props:['id'],
    beforeRouteEnter (to, from, next) {
        // ...
        const autenticado = true;
        autenticado ? next() : next(false)
        
    }
    
}
</script>