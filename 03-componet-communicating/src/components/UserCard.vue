<script setup>
defineProps({
  name: String,
  age: Number
})

const emit = defineEmits(['update-age'])

function tangTuoi() {
  emit('update-age', 1) // Gửi lên cha số 1 để cộng thêm
}
</script>

<template>
  <div class="user-card">
    <h3>Thông tin User</h3>
    <p>Tên: <strong>{{ name }}</strong></p>
    <p>Tuổi: <strong>{{ age }}</strong></p>
    
    <button @click="tangTuoi">Tăng tuổi (Gửi Event)</button>
  </div>
</template>

<style scoped>
.user-card {
  border: 2px solid #42b883;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  background-color: #f9f9f9;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style>
