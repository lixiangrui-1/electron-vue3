<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello electron + Vue 3 + TypeScript + Vite + jsx" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style lang="stylus">
#app
  text-align center
  color #2c3e50
  margin-top 60px
</style>