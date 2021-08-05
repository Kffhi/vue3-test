<template>
    <div class="test-container page-container">
        <div class="page-title">项目信息</div>
        <p>count is: {{ count }}</p>
        <el-button type="primary" @click="increment">increment</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'ProjectInfo',
    setup() {
        const count = ref<number>(0)
        const increment = () => {
            count.value += 1
        }
        return { count, increment }
    }
})
</script>
