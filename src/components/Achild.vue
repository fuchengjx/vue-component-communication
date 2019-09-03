<template>
  <div>
    I am AChild
    <button @click="increment">emit</button>
  </div>
</template>

<script>
export default {
  name: 'Achild',
  methods: {
    increment() {
      console.log('A触发了 $emit')
      this.bus.$emit('increment', '我是increment')
    }
  },
}
</script>

<style>

</style>