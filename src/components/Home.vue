<template>
  <div class="hello">
    <Achild/>
    <Bchild/>
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
  }
}
</script>

<style scoped>

</style>
