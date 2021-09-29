<script setup>
import ChatHistory from "./ChatHistory.vue";
import ChatControls from "./ChatControls.vue";
import { ref } from "@vue/reactivity";


const emit = defineEmits(['close']);

function createTree(id, message, replies=[]) {
    return {
        id,
        message,
        replies,
    };
}

function createReply(id, reply, subtree={}) {
    return {
        id,
        reply,
        subtree,
    };
}

const conversationTree = createTree(0, 'Hei, kuinka voin auttaa', [
    createReply(0, 'Tarvitsen apua verkkokaupan luomisessa',
        createTree(1, 'Onko teidän yrityksellä jo verkkosivut?', [
            createReply(1, 'On', createTree(2, 'Hyvä!')),
            createReply(2, 'Ei', createTree(3, 'Kannattaisiko tehdä?')),
            createReply(3, 'On tekeillä', createTree(4, 'Kysykää teidän ohjelmoijilta')),
        ]),
    ),
    createReply(5, 'Miten saan nostettua työntekijöideni osaamistasoa?',
        createTree(5, 'Ottakaa yhteyttä konsultoijaan matti.meikäläinen@example.com')),
    createReply(6, 'Miten saan päivitettyä HR-järjestelmäni ajantasalle?',
        createTree(6, 'Ottakaa yhteyttä konsultoijaan maija.meikäläinen@example.com')),
]);

const tree = ref(conversationTree);
const replies = ref(conversationTree.replies);
const history = ref([{
        id: conversationTree.id,
        message: conversationTree.message,
        own: false,
}]);

//const replies = ref([
//    { id: 0, message: 'Miksi et?' },
//    { id: 1, message: 'Kitti tästä' },
//    { id: 2, message: 'Haista home' },
//]);
//const history = ref([
//    { id: 0, message: 'Hei, kuinka voin auttaa?', own: false },
//    { id: 1, message: 'Tartten apua', own: true },
//    { id: 2, message: 'En halua auttaa', own: false },
//]);


function reply(id) {
    const reply = tree.value.replies.find((t) => t.id === id);
    tree.value = reply.subtree;
    history.value.push({
        id,
        message: reply.reply,
        own: true,
    });

    setTimeout(() => {
        history.value.push({
            id: reply.subtree.id,
            message: reply.subtree.message,
            own: false,
        });

        replies.value = reply.subtree.replies;

        if (reply.subtree.replies.length === 0) {
            tree.value = conversationTree;
            replies.value = conversationTree.replies;
        }
    }, 1000);

}
</script>


<template>
<div class="chat-window">
    <div class="chat-header">
        <p>Heippulishei</p>
        <font-awesome-icon @click="emit('close')" color="#eeeeee" icon="chevron-down" />
    </div>
    <div class="chat-messages">
        <ChatHistory :history="history"></ChatHistory>
    </div>
    <div class="chat-controls">
        <ChatControls @click="reply" :replies="replies"></ChatControls>
    </div>
</div>
</template>


<style scoped>
.chat-window {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 30rem;
    height: calc(100vh - 2rem);
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    background-color: white;
    box-shadow: #dddddd 0px 0px 4px;
    transition: height 100ms;
}

.chat-header {
    height: 3.6rem;
    background-color: #16a8cd;
    border-radius: 1rem 1rem 0 0;
    display: flex;
    justify-content: space-between;
}

.chat-header > svg {
    width: 2rem;
    height: 2rem;
    margin: 0.9rem 0.9rem 0 0;
    cursor: pointer;
}

.chat-header > p {
    color: #eee;
    font-weight: 500;
    margin-left: 1rem;
    line-height: 1.9rem;
}

.chat-messages {
    height: calc(100vh - 19rem);
    overflow-y: auto;
}

.chat-controls {
    height: 15rem;
    border-top: 1px solid #dddddd;
    border-radius: 0 0 1rem 1rem;
    overflow-y: auto;
}
</style>