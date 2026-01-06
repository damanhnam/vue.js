<script setup>
defineProps({
  label: String
})
</script>

<template>
  <button class="base-btn">
    {{ label }}
  </button>
</template>

<style scoped>
.base-btn {
  padding: 10px 20px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
