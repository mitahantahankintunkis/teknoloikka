<script setup>
import { toRefs } from "@vue/reactivity";

const props = defineProps({
    message: String,
    own: Boolean,
});

const { message, own } = toRefs(props);
</script>


<template>
<div class="message" :class="{ 'own-msg': own, 'bot-msg': !own }">
    <p>{{ message }}</p>
</div>
</template>


<style scoped>
.message {
    max-width: 70%;
    margin: 0.5rem;
    padding: 0 1rem;
    color: #003a49;
}

.own-msg {
    background-color: #e5e3ef;
    background-color: #e6deeb;
    border-radius: 0.5rem 0.5rem 0 0.5rem;
    max-width: 70%;
    text-align: end;
    align-self: flex-end;
}

.bot-msg {
    background-color: #8cc6d4;
    border-radius: 0.5rem 0.5rem 0.5rem 0;
    width: 70%;
}

</style>