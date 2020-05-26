<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="msg in mensagens" 
			:key="msg.texto" :variant="msg.tipo"> 
			{{ msg.texto }}
		</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg" 
					v-model="usuario.nome" 
					placeholder="Informe o Nome">
				</b-form-input> 
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="text" size="lg" 
					v-model="usuario.email" 
					placeholder="Informe o E-mail"
					@keydown.native.enter="salvar">
				</b-form-input> 
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary" class="mr-1">Salvar</b-button>
			<b-button @click="ObterUsuarios" size="lg" variant="success">Obter Usuários</b-button>
		</b-card>
		<hr>

		<b-list-group>
			<b-list-group-item v-for="(usu, id) in usuarios" :key="id" class="mb-1">
				<strong>Id: </strong> {{ id }} <br>
				<strong>Nome: </strong> {{ usu.nome }} <br>
				<strong>E-mail: </strong> {{ usu.email }} <br>
				<b-button variant="warning" size="lg" 
					@click="carregar(id)"
				> Carregar
				</b-button>
				<b-button variant="danger" size="lg" class="ml-2"
					@click="excluir(id)"
				> Excluir
				</b-button>
			</b-list-group-item>
		</b-list-group>

	</div>
</template>

<script>
export default {
	data(){
		return{
			mensagens:[],
			usuarios:[],
			id:null,
			usuario:{
				nome:'',
				email:''
			}
		}
	},
	methods:{
		limpar(){
			this.usuario.nome = '',
			this.usuario.email = '',
			this.id = null
		},
		carregar(id){
			this.id = id,
			this.usuario = {...this.usuarios[id] }
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
			.then(() => this.limpar())
			.catch(err =>{
				this.mensagens.push({
					texto: 'Erro ao deletar. Erro: ' + err,
					tipo: 'danger'
				})
			})
		},
		
		salvar(){
			if (!this.id) {
				this.$http.post('usuarios.json', this.usuario)
				.then( () => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizada com sucesso!',
						tipo: 'success'
					})

					this.ObterUsuarios()
				})
			}
			else{
				this.$http.patch(`usuarios/${this.id}.json`, this.usuario)
				.then( () => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizada com sucesso!',
						tipo: 'success'
					})

					this.ObterUsuarios()
				})
			}

		},
		ObterUsuarios(){
			this.$http.get('usuarios.json').then(res =>{
				this.usuarios = res.data
			})
		}
	}

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}

li{
	list-style: none;
}

</style>
