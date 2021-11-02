<script setup>
import MainPage from "./components/MainPage.vue";
import Header from "./components/Header.vue";
import FloatingButton from "./components/FloatingButton.vue";
import ChatWindow from "./components/ChatWindow.vue";
import { ref } from "@vue/reactivity";

let chatOpen = ref(true);

function toggleChat() {
    chatOpen.value = !chatOpen.value;
}
</script>


<template>
<Header></Header>
<main>
    <MainPage></MainPage>
</main>
<ChatWindow @close="toggleChat" v-if="chatOpen"></ChatWindow>
<FloatingButton @click="toggleChat" v-else></FloatingButton>
</template>


<style>
#app {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

main {
    width: 80vw;
    max-width: 50rem;
    margin: 15rem auto 0 auto;
}
</style>
