<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Trang chủ</RouterLink>
      <RouterLink to="/about">Giới thiệu</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
