<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <p><strong>Código: </strong>{{ $route.params.id }}</p>
        <p><strong>Completo: </strong>{{ $route.query.completo }}</p>
        <p><strong>Língua: </strong>{{ $route.query.lingua }}</p>
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>
    </div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            confirmou: false
        }
    },
    beforeRouteLeave (to, from, next) {
        // ...
        if (this.confirmou) 
        {
          next()  
        } 
        else{
            if (confirm('tem certeza')) 
            {
                next()    
            }
            else
            {
                next(false)
            }
        }
    }
}
</script>