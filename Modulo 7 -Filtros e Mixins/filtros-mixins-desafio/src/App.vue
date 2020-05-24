<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{ frase | espacoPorVirgula }}</p>

		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p>{{ frase | contarPalavras }}</p>


		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p>{{ fraseMixin | espacoPorVirgula }}</p>


	</div>
</template>

<script>

import FraseMixin from './Frasemixin'

export default {
	mixins:[FraseMixin],
	data(){
		return{
			frase: 'Essa frase será usada no desafio.'
		}
	},
	filters:{
		espacoPorVirgula(valor){
			return valor.replace(/ /g, ',');
		}
	}
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
