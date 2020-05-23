import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('destaque',{
	bind(el){
		el.style.backgroundColor= 'lightgreen'
	}
})

Vue.directive('destaque-binding',{
	bind(el, binding){
		el.style.backgroundColor = binding.value
	}
})

Vue.directive('destaque-argumentos',{
	bind(el, binding){

		if (binding.arg === 'fundo') {
			el.style.backgroundColor = binding.value
		}
		else{
			el.style.color = binding.value
		}
	}
})

Vue.directive('destaque-argumentos-modificadores',{
	bind(el, binding){

		let atraso = 0;
		if (binding.modifiers['atrasar']) atraso = 3000;

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			}else{
				el.color = binding.value;
			}
		}, atraso);
	}
})


new Vue({
	render: h => h(App),
}).$mount('#app')
