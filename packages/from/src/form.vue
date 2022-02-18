<template>
<div class="jc-form">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "jcForm",
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
};
</script>

<style scoped>

</style>
