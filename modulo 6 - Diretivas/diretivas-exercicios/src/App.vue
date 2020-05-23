<template>
	<div id="app">
		<h1>Diretivas</h1>

		<p v-destaque>Usando a diretiva destaque</p>

		<p v-destaque-binding="'red'">Usando a diretiva com binding</p>

		<p v-destaque-argumentos:fundo="'lightblue'">Usando diretivas com argumentos</p>

		<p v-destaque-argumentos-modificadores:fundo.atrasar="'lightgreen'">
			Usando diretivas com argumentos e modificadores
		</p>

		<p v-destaque-local="'blue'">Usando a diretiva local </p>

	</div>
</template>

<script>
export default {
	directives:{
		'destaque-local':{
			bind(el, binding){
				el.style.color = binding.value;
			}
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
