<script setup>
import { ref } from 'vue'

/* ===== DỮ LIỆU CỦA CHA ===== */
const messageFromChild = ref('Chưa có gì từ con')

/* ===== HÀM NHẬN EVENT TỪ CON ===== */
const handleHello = (data) => {
  messageFromChild.value = data
}

/* ===== KHAI BÁO COMPONENT CON NGAY TRONG APP ===== */
const ChildComponent = {
  props: {
    name: String
  },
  emits: ['say-hello'],
  template: `
    <div style="border:1px solid #ccc; padding:10px; margin-top:10px">
      <p>Con: Xin chào {{ name }}</p>
      <button @click="sendHello">
        Gửi lời chào lên cha
      </button>
    </div>
  `,
  methods: {
    sendHello() {
      this.$emit('say-hello', 'Con đã gửi lời chào 👋')
    }
  }
}
</script>

<template>
  <div>
    <h1>Component & Communicating Event</h1>

    <p><b>Cha nhận được:</b> {{ messageFromChild }}</p>

    <!-- Component con -->
    <ChildComponent
      name="Nam"
      @say-hello="handleHello"
    />
  </div>
</template>
