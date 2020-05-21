<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ nome }}</strong></p>
        <p>Idade do Usuário: {{ idade }}</p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
    </div>
</template>

<script>

// import barramento from '@/barramento'

export default {
    props:{
        nome:{ 
            type: String, 
            //required:true,
            default: function(){
                return 'teste';
            }
        },
        idade: {type: Number}
    },
    methods:{
        reiniciarNome(){
            this.nome = 'Reiniciou nome no filho';
            this.$emit('mudouNomeFilho', this.nome)
        }
    },
    // created(){
    //     barramento.$on('alterarIdade', idade =>{
    //         this.idade = idade
    //     })
    // }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
