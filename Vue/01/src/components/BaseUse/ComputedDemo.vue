<template>
  <div>
    <p>num {{ num }}</p>
    <p>double1 {{ double1 }}</p>
    <p>double2 {{ double2 }}</p>
    <!-- 有点懵逼 -->
    <input type="text" v-model="double2">
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 20
    }
  },
  // 计算属性有缓存 num不变 double1不会重新计算
  computed: {
    double1() {
      return this.num * 2
    },
    double2: {
      get() {
        return this.num * 2
      },
      set(val) {
        console.log(val);
        this.num = val / 2
      }
    }
  }
}
</script>
