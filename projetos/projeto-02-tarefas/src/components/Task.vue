<template>
    <div @click="$emit('changeState', task)" 
          class="task"
         :class="stateClass"
    >
        <span class="close" @click.stop="$emit('taskDelete', task)">x</span>
        <p>{{ task.name }}</p>

    </div>
</template>

<script>
export default {
    name:'Task',
    props:{
        task:{ type:Object, required: true }
    },
    computed:{
        stateClass(){
            return{
                pending: this.task.pending,
                done: !this.task.pending            }
        }
    }
    
}
</script>

<style scoped>

    .task{
        position: relative;
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 10px;
    }

    .pending{
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .done{
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }

    .close{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        display: flex;
        justify-content: center;
        height: 20px;
        width: 20px;
        border-radius: 10px;

    }

    .pending .close{
        background-color: #B73229;
    }

    .done .close{
        background-color: #0A8F08;
    }

</style>