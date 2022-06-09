<template>
  <div>
    <p>插值 {{ message }}</p>
    <p>表达式 {{ flag ? 'true' : 'false' }}</p>
    <p :id="dynamicId">动态属性</p>
    <p v-html="rawHtml">
      <!-- <span>v-html 会覆盖子元素</span>
      <span>v-html 有xss风险</span> -->
    </p>
  </div>
</template>

<script>
export default {
  name: 'TplDemo',
  data() {
    return {
      message: 'hello vue',
      flag: true,
      rawHtml: '<i>斜体</i>',
      dynamicId: `id-${Date.now()}`
    }
  }
}
</script>
