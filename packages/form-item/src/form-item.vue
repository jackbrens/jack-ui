<template>
<div class="jc-form-item">
  <label class="jc-form-item__label" :style="{ width: this.Form.labelWidth }">{{ label }}</label>
  <div class="jc-form-item__content">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "jcFormItem",
  props: {
    label: String
  },
  inject: ['Form']
};
</script>

<style lang="scss" scoped>
.jc-form-item {
  margin-bottom: 20px;
  .jc-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .jc-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
    margin-left: 80px;
  }
}
</style>
