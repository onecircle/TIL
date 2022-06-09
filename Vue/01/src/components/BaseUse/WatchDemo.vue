<template>
  <div>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'sy',
      info: {
        city: 'bj'
      }
    }
  },
  watch: {
    name(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    // 深度监听
    info: {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
      deep: true
    }
  },
  mounted() {
    this.name = 'ls'
    this.info = {
      newcity: 'kk'
    }
  }
}
</script>
