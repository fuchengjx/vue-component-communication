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
      this.$router.push('/B')
    }
  },
   beforeCreate () {
    console.group('%c%s', 'color:red', 'beforeCreate 创建前状态===============组件A》')
  },
  created () {
    console.group('%c%s', 'color:red', 'created 创建完毕状态===============组件A》')
  },
  beforeMount () {
    console.group('%c%s', 'color:red', 'beforeMount 挂载前状态===============组件A》')
  },
  mounted () {
    console.group('%c%s', 'color:red', 'mounted 挂载状态===============组件A》')
  },
  beforeUpdate () {
    console.group('%c%s', 'color:red', 'beforeUpdate 更新前状态===============组件A》')
  },
  updated () {
    console.group('%c%s', 'color:red', 'updated 更新状态===============组件A》')
  },
  beforeDestroy () {
    console.group('%c%s', 'color:red', 'beforeDestroy 破前状态===============组件A》')
  },
  destroyed () {
    console.group('%c%s', 'color:red', 'destroyed 破坏状态===============组件A》')
  }
 }
</script>

<style>

</style>