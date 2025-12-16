<script setup>
import { ref, computed, watch } from 'vue'

/* biến đếm */
const count = ref(0)

/* bấm nút thì tăng */
function tang() {
  count.value++
  
}
function giam(){
  if (count.value>0){
  count.value--
}}

/* số gấp đôi */
const gapDoi = computed(() => {
  return count.value * 2
})

/* theo dõi count */
watch(count, (val) => {
  if (val == 7) {
    alert('Đã bấm 7 lần')
  }
})
</script>

<template>
  <div>
    <h2>Demo Reactivity</h2>

    <p>Count: {{ count }}</p>
    <p>Gấp đôi: {{ gapDoi }}</p>

    <button @click="tang">Tăng</button>
    <button @click="giam">Giảm</button>
  </div>
</template>
<style>

</style>
