<!--HelloWorld.vue-->
<template>
  <button type="button" @click="onClick">count is: {{ count }}</button>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex'
  import { onMounted,computed } from 'vue'
  import { login } from '../api/user';
  
onMounted(() => {
  login({ account: 'admin', password: '123456' }).then(res => {
    console.log(res)
  })
})


  const store = useStore()
  const count = computed(() => {
    return store.state.count
  })
  const onClick = () => {
    store.commit('increment')
  }
</script>
<style scoped>
</style>
