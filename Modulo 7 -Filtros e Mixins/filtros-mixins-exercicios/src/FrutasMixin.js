export default {
    data(){
        return{
            frutas:['banana', 'maça', 'laranja'],
            fruta:''
        }
    },
    methods:{
        Add(){
            this.frutas.push(this.fruta);
            this.fruta = ''
        }
    }
}
