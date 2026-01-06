<script setup>
import BaseButton from '../components/BaseButton.vue'
import { useFetch } from '../composables/useFetch'

const { data, fetchData } = useFetch('https://api.example.com/data')
</script>

<template>
  <div class="home-page">
    <h1>Trang Chủ</h1>
    <BaseButton label="Tải dữ liệu" @click="fetchData" />
    
    <div v-if="data">
      {{ data }}
    </div>
  </div>
</template>
 