<script setup>
import { ref } from "vue";

const count = ref(0);


const greet = (event) => {
  alert(`Xin chào mọi người - event: ${event.type}`);
};

const sayHi = (name) => {
  alert(`Xin chào ${name}`);
};
</script>

<template>
  <div>
    <h1>Event handling</h1>

    <button @click="count++">click de tang</button>
    <p>Count: {{ count }}</p>

    <button @click="greet">chào</button>

    <button @click="sayHi('Nam')">chào Nam</button>
    <button @click="sayHi('Anh')">chào Anh</button>
  </div>
</template>
