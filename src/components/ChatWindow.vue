<script setup>
import ChatHistory from "./ChatHistory.vue";
import ChatControls from "./ChatControls.vue";
import { ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import { nanoid } from 'nanoid';
import { addDoc, collection } from "@firebase/firestore";


const emit = defineEmits(['close']);
const db = inject('db');

let id = 0;
const nodes = [
    { id: id++, label: 'Beep-boop, olen UKV-botti 🤖. Kuinka voin auttaa?', },
    { id: id++, label: 'Miten menee?', },
    { id: id++, label: 'Miten arvostelisit Krapin pippalot?', },
    { id: id++, label: 'Mitä haluat tehdä huomenna?', },
    { id: id++, label: 'Kiitos vastauksista! Palaan keskustelun alkuun, jos haluat muuttaa vastauksiasi', },
];

id = 0;
const edges = [
    { id: id++, from: 0, to: 1, label: 'Haluan vastata Krapin kyselyyn', },
    { id: id++, from: 1, to: 2, label: 'Mainiosti!', },
    { id: id++, from: 1, to: 2, label: 'Hyvin', },
    { id: id++, from: 1, to: 2, label: 'Menettelee', },
    { id: id++, from: 1, to: 2, label: 'Hengissä vielä', },
    { id: id++, from: 2, to: 3, label: '5', },
    { id: id++, from: 2, to: 3, label: '4', },
    { id: id++, from: 2, to: 3, label: '3', },
    { id: id++, from: 2, to: 3, label: '2', },
    { id: id++, from: 2, to: 3, label: '1', },
    { id: id++, from: 3, to: 4, label: 'Työskennellä', },
    { id: id++, from: 3, to: 4, label: 'Jutella porukan kanssa', },
    { id: id++, from: 3, to: 4, label: 'Rentoutua', },
    { id: id++, from: 3, to: 4, label: 'Ryypätä', },
    { id: id++, from: 4, to: 0, label: 'Palaa alkuun', },
];

const curNode = ref(0);
const replies = ref(edges.filter((e) => e.from === curNode.value));
const history = ref([{
        id: nodes[curNode.value].id,
        message: nodes[curNode.value].label,
        own: false,
}]);

// Gets and generates a random anonymous user id for the user
function getUid() {
    let uid = localStorage.getItem('uid');
    if (!uid) {
        uid = nanoid();
        localStorage.setItem('uid', uid);
    }

    return uid;
}

function saveToDb(from, to, label) {
    const uid = getUid();
    try {
        const coll = collection(db, `conversations/by-users/${uid}`);
        const docRef = addDoc(coll, {
            parent: from,
            next: to,
            message: label,
        });
    } catch(e) {
        console.error('Could not write to the database', e);
    }
}

function reply(id) {
    const { to, label } = edges.find((e) => e.id === id);
    const node = nodes.find((n) => n.id === to);

    saveToDb(curNode.value, to, label);

    history.value.push({
        id: `e-${id}`,
        message: label,
        own: true,
    });

    setTimeout(() => {
        replies.value = edges.filter((e) => e.from === node.id);
        curNode.value = node.id;
        history.value.push({
            id: `n-${node.id}`,
            message: node.label,
            own: false,
        });
    }, (Math.random() + 0.5) * 800);
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


<!--



//function createTree(id, message, replies=[]) {
//    return {
//        id,
//        message,
//        replies,
//    };
//}
//
//function createReply(id, reply, subtree={}) {
//    return {
//        id,
//        reply,
//        subtree,
//    };
//}
//
//let i = 0;
//let j = 0;
//
//const conversationTree = createTree(i++, 'Hei, kuinka voin auttaa', [
//    createReply(j++, 'Tarvitsen apua verkkokaupan luomisessa',
//        createTree(i++, 'Onko teidän yrityksellä jo verkkosivut?', [
//            createReply(j++, 'On', createTree(i++, 'Hyvä!')),
//            createReply(j++, 'Ei', createTree(i++, 'Kannattaa tehdä')),
//            createReply(j++, 'On tekeillä', createTree(i++, 'Kysykää teidän ohjelmoijilta')),
//        ]),
//    ),
//    createReply(j++, 'Miten saan nostettua työntekijöideni osaamistasoa?',
//        createTree(i++, 'Voitte kartoittaa ja nostaa teidän työntekijöiden osaamistasoa suorittamalla osaamiskartoituksen')),
//    createReply(j++, 'Miten saan päivitettyä HR-järjestelmäni ajantasalle?',
//        createTree(i++, 'Ottakaa yhteyttä konsultoijaan maija.meikäläinen@example.com')),
//]);
//
//const tree = ref(conversationTree);
//const replies = ref(conversationTree.replies);
//const history = ref([{
//        id: conversationTree.id,
//        message: conversationTree.message,
//        own: false,
//}]);

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



//function reply(id) {
//    const reply = tree.value.replies.find((t) => t.id === id);
//    tree.value = reply.subtree;
//    history.value.push({
//        id,
//        message: reply.reply,
//        own: true,
//    });
//
//    setTimeout(() => {
//        history.value.push({
//            id: reply.subtree.id,
//            message: reply.subtree.message,
//            own: false,
//        });
//
//        replies.value = reply.subtree.replies;
//
//        if (reply.subtree.replies.length === 0) {
//            tree.value = conversationTree;
//            replies.value = conversationTree.replies;
//        }
//    }, 1000);
//
//}
-->