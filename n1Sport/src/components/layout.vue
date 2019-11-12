<template>
  <div class="layout_wrap">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .layout_wrap{
    width: 100%;
    
  }
</style>
