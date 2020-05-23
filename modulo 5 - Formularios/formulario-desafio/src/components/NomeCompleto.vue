<template>
    <div>

        <rotulo nome="Nome">
            <input type="text" :value="value.nome" @input="alterarNome">
        </rotulo>
        
        <rotulo nome="Sobre Nome">
            <input type="text" :value="value.sobreNome" @input="alterarSobreNome">
        </rotulo>

    </div>
</template>

<script>

import Rotulo from './Rotulo.vue'

export default {
    props:{
        value:{ type: Object, required: true}
    },
    components:{
        Rotulo
    },
    methods:{
        alterarNome(event){
            this.$emit('input', { nome: event.target.value, sobreNome: this.value.sobreNome })
        },
        alterarSobreNome(event){
            this.$emit('input', { nome: this.value.nome, sobreNome: event.target.value })
        }
    }
    
}
</script>