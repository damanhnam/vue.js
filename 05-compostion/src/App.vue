<script setup>
  import { computed, ref } from 'vue';
  const count = ref(0)
  const increase =()=> count.value++
  const decrease = () => {
  if (count.value > 0) count.value--
}

 


const status = computed(() => {
  return count.value % 2 === 0 ? "số chẵn" : "số lẻ"
})
</script>

<template>
 <div>
  <h2>Compostion demo</h2>
  <p>Count: {{ count }}</p>
  <p>{{ status }}</p>
  <button @click="increase">Tăng lên</button>
  <button @click="decrease">Giảm xuống</button>

 </div>
</template>

<style scoped>


</style>
