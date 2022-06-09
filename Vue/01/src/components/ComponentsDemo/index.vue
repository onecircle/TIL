<template>
  <div>
    <!-- react 不管是数据还是函数 都用自定义属性 没那么多包装 -->
    <Input @add="add" />
    <List :list="list" />
  </div>
</template>

<script>
import Input from './Input'
import List from './List'

export default {
  components: {
    Input,
    List,
  },
  data() {
    return {
      list: [{
        id: 1, name: '1'
      }, {
        id: 2, name: '2'
      }]
    }
  },
  methods: {
    add(val) {
      this.list.push({ id: Date.now(), name: val })
    }
  }
}
</script>
