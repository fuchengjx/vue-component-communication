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
      this.bus.$emit('increment', '我是increment')
    }
  },
}
</script>

<style>

</style>