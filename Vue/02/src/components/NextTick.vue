<template>
  <div>
    <ul ref="ul">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <button @click="add">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3]
    }
  },
  methods: {
    add() {
      this.list.push(`${Math.random()}`)
      this.list.push(`${Math.random()}`)
      this.list.push(`${Math.random()}`)

      // dom节点的数量是滞后的
      // console.log(this.$refs.ul.childNodes.length);
      // 数据是同步的
      // console.log(this.list.length);

      // vue 异步渲染
      // data改变之后 dom不会立即渲染
      // $nextTick 在dom渲染之后被触发 获取最新节点
      this.$nextTick(() => {
        console.log(this.$refs.ul.childNodes.length);
      })
    }
  }
}
</script>
