new Vue({
    el:'#app',
    data:{
        playerLife: 15,
        monsterLife: 0,
        running: false
    },
    computed:{
        hasResult(){
            return this.playerLife == 0 || this.monsterLife  == 0
        }
    },
    methods:{
        starGame(){
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        scape(){
            this.running = false;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        attack(especial){
            this.hurt('monsterLife', 5, 10, especial);
            this.hurt('playerLife', 7, 12, false);
        },
        hurt(prop, min, max, especial){
            const plus = especial ? 5: 0;
            const hurl = this.getRandom(min + plus, max + plus);
            this[prop] = Math.max(this[prop] - hurl, 0);
        },
        getRandom(min, max){
            const value = Math.random() * (max - min) + min
            return Math.round(value);
        }
    },
    watch:{
        hasResult(value){
            if (value) {
                this.running = false;
            }
            
        }
    }
})