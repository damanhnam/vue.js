<script setup>
import { ref } from 'vue'
import UserCard from './components/UserCard.vue'

/* ===== DỮ LIỆU CỦA CHA ===== */
const userName = ref('Nguyễn Văn A')
const userAge = ref(20)

/* ===== HÀM NHẬN EVENT TỪ CON ===== */
const handleUpdateAge = (amount) => {
  userAge.value += amount
  alert(`Cha đã nhận được yêu cầu tăng ${amount} tuổi!`)
}
</script>

<template>
  <div class="container">
    <h1>Component & Communicating Event</h1>
    <p>Dữ liệu ở Cha: {{ userName }} - {{ userAge }} tuổi</p>

    <!-- Truyền Props xuống con và Lắng nghe Event từ con -->
    <UserCard 
      :name="userName"
      :age="userAge"
      @update-age="handleUpdateAge"
    />
  </div>
</template>

<style>
.container {
  font-family: sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
