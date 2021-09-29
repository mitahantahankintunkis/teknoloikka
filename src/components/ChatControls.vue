<script setup>
import { toRefs } from "@vue/reactivity";

const props = defineProps({
    replies: Array,
});

const { replies } = toRefs(props);

const emit = defineEmits([ 'click' ]);
</script>


<template>
<div class="replies">
    <div v-for="reply in replies" :key="reply.id" @click="emit('click', reply.id)" class="reply">
        {{ reply.reply }}
    </div>
</div>
</template>


<style scoped>
.replies {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    gap: 0.5rem;
    padding: 1rem;
}

.reply {
    padding: 0.5rem 1rem;
    background-color: #e6deeb;
    color: #003a49;
    border-radius: 0.5rem;
    text-align: center;
    cursor: pointer;
    transition: background-color 50ms;
}

.reply:hover {
    background-color: #f0ebf3;
}
</style>