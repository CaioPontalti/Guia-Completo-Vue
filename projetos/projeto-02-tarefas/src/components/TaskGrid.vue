<template>
    <div class="task-grid">
        <template v-if="tasks.length">

            <task v-for="(task, i) in tasks" :key="task.name"
                @taskDelete="$emit('taskDelete', i)"
                @changeState="$emit('changeState', i)"
                :task="task"
            />
        </template>
        <p v-else class="no-task"> Sua vida está em dia =)</p>
    </div>
</template>

<script>

import Task from './Task.vue'

export default {
    components:{
        Task
    },
    props: {
        tasks:{type: Array, required: true}
    }
}
</script>

<style scoped>
    .task-grid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .no-task{
        color: #AAA;
        font-size: 1.7rem;
    }

</style>