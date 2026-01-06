<script setup>
import { ref } from "vue";

const count = ref(0);


const greet = (event) => {
  alert(`Xin chào mọi người  ${event.type}`);
};

const sayHi = (name) => {
  alert(`Xin chào ${name}`);
};
const attributeName ='href'
const url = 'https://www.facebook.com/?locale=vi_VN'

</script>

<template>
  <div>
    <h1>Event handling</h1>

    <button @click="count++">click de tang</button>
    <p>Count: {{ count }}</p>

    <button @click="greet">chào</button>

    <button @click="sayHi('Nam')">chào Nam</button>
    <button @click="sayHi('Anh')">chào Anh</button>
    <a v-bind:[attributeName]="url">Click here</a>
  </div>
</template>
