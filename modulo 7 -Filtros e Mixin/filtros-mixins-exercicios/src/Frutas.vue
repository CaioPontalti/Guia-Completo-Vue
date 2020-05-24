<template>
    <div>
        <ul>
            <li v-for="fru in frutas" :key="fru"> {{ fru }} </li>
        </ul>

        <input type="text" v-model="fruta" @keydown.enter="Add">
    </div>
</template>

<script>

import FrutasMixin from './FrutasMixin'

export default {
    mixins:[FrutasMixin]
}
    
</script>