<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>


<script>
import event from './event'

export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    addBro(val) {
      console.log(val);
    }
  },
  mounted() {
    // 绑定自定义事件
    event.$on('addBro', this.addBro)
  },
  // beforeDestroy 中可以干嘛 也是一个考点
  beforeDestroy() {
    // 及时解绑自定义事件
    event.$off('addBro', this.addBro)
  }
}
</script>