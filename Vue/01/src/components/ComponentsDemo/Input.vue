<template>
  <div>
    <input type="text" v-model="inputVal">
    <button @click="add">add</button>
  </div>
</template>


<script>
import event from './event'

export default {
  data() {
    return {
      inputVal: ""
    }
  },
  methods: {
    add() {
      // 注意参数1是字符串
      this.$emit('add', this.inputVal)

      // 使用兄弟组件方法
      event.$emit('addBro', this.inputVal)
    }
  }
}
</script>
