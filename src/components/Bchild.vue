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
  mounted() {
    let _this = this
    console.log('Bchild this', this)
    this.bus.$on('increment', function(data) {
      console.log('这是Bchild收到的值: ', data)
      console.log('Bchild in _this: ', _this)
      _this.info = data
    })
  },
}
</script>

<style>

</style>