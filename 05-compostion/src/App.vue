<script setup>
import { computed, ref } from 'vue';

const count = ref(0)
const increase = () => count.value++
const decrease = () => {
  if (count.value > 0) count.value--
}

const status = computed(() => {
  return count.value % 2 === 0 ? "số chẵn" : "số lẻ"
})
const link ='href'
const url = 'https://vuejs-course.vercel.app/'
 
</script>

<template>
  <div>
    <h1 class="hi">Composition Demo</h1>
    <p>Count: {{ count }}</p>
    <p>{{ status }}</p>
    <button @click="increase" class="button">Tăng lên</button>
    <button @click="decrease" class="button">Giảm xuống</button>
    <a v-bind:[link]="url">click here</a>
  </div>
</template>

<style>
.button {
  background-color: #42b883; /* Màu xanh Vue */
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 4px;
  font-weight: bold;
}

.button:hover {
  background-color: aqua /* Hiệu ứng khi di chuột vào */
}

.hi {
  color: #42b883;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 16px;
}
</style>
