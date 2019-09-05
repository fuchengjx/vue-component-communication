<template>
  <div>
    <Achild/>
    <Bchild/>
    <!-- <router-link to="A">to A</router-link>
    <router-link to="B">to B</router-link> -->
  </div>
</template>

<script>
import Achild from './Achild';
import Bchild from './Bchild';
export default {
  name: 'Home',
  components: {
    Achild,
    Bchild
  },
  data () {
    return {
      
    }
  },
  beforeCreate () {
    console.group('%c%s', 'color:black', 'beforeCreate 创建前状态===============组件father》')
  },
  created () {
    console.group('%c%s', 'color:black', 'created 创建完毕状态===============组件father》')
  },
  beforeMount () {
    console.group('%c%s', 'color:black', 'beforeMount 挂载前状态===============组件father》')
  },
  mounted () {
    console.group('%c%s', 'color:black', 'mounted 挂载状态===============组件father》')
  },
  beforeUpdate () {
    console.group('%c%s', 'color:black', 'beforeUpdate 更新前状态===============组件father》')
  },
  updated () {
    console.group('%c%s', 'color:black', 'updated 更新状态===============组件father》')
  },
  beforeDestroy () {
    console.group('%c%s', 'color:black', 'beforeDestroy 破前状态===============组件father》')
  },
  destroyed () {
    console.group('%c%s', 'color:black', 'destroyed 破坏状态===============组件father》')
  }
}
</script>

<style scoped>

</style>
