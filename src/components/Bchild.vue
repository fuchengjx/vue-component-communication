<template>
  <div>
    I am BChild
    <p>{{info}}</p>
  </div>
</template>

<script>
export default {
  name: 'Bchild',
  data() {
    return {
      info: 'default info'
    }
  },
  // mounted() {
  //   let _this = this
  //   console.log('Bchild this', this)
  //   this.bus.$on('increment', function(data) {
  //     console.log('这是Bchild收到的值: ', data)
  //     console.log('Bchild in _this: ', _this)
  //     _this.info = data
  //   })
  // },
   beforeCreate () {
    console.group('%c%s', 'color:blue', 'beforeCreate 创建前状态===============组件B》')
  },
  created () {
    console.group('%c%s', 'color:blue', 'created 创建完毕状态===============组件B》')
  },
  beforeMount () {
    console.group('%c%s', 'color:blue', 'beforeMount 挂载前状态===============组件B》')
  },
  mounted () {
    console.group('%c%s', 'color:blue', 'mounted 挂载状态===============组件B》')
  },
  beforeUpdate () {
    console.group('%c%s', 'color:blue', 'beforeUpdate 更新前状态===============组件B》')
  },
  updated () {
    console.group('%c%s', 'color:blue', 'updated 更新状态===============组件B》')
  },
  beforeDestroy () {
    console.group('%c%s', 'color:blue', 'beforeDestroy 破前状态===============组件B》')
  },
  destroyed () {
    console.group('%c%s', 'color:blue', 'destroyed 破坏状态===============组件B》')
  }
}
</script>

<style>

</style>