<template>
<div class="jc-form-item" :class="{ 'is-error': isError }">
  <label class="jc-form-item__label" :style="{ width: this.Form.labelWidth }">{{ label }}</label>
  <div class="jc-form-item__content">
    <slot></slot>
    <span class="jc-form-item__error" v-if="isError">
      请填写{{ this.label }}
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: "jcFormItem",
  props: {
    label: String,
    prop: String
  },
  inject: ['Form'],
  data () {
    return {
      model: {}
    }
  },
  watch: {
    'Form.model': {
      handler (val) {
        this.model = val;
      },
      deep: true
    }
  },
  computed: {
    isError () {
      let value =  this.model[this.prop];
      if (Array.isArray(value)) {
        return Object.prototype.hasOwnProperty.call(this.Form.model, this.prop)
               && value.length === 0;
      }
      return Object.prototype.hasOwnProperty.call(this.Form.model, this.prop)
             && value === '';
    }
  },
  methods: {
    resetFields () {
      this.isError = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.jc-form-item{
  margin-bottom: 20px;
  .jc-form-item__label{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .jc-form-item__content{
    line-height: 40px;
    position: relative;
    font-size: 14px;
    margin-left: 80px;

    .jc-form-item__error{
      color: #f56c6c;
      font-size: 12px;
      line-height: 1;
      padding-top: 4px;
      position: absolute;
      top: 100%;
      left: 0;
    }
  }

  // 校验样式
  &.is-error{
    ::v-deep .jc-input__inner,
    ::v-deep .jc-input__inner:focus,
    ::v-deep .jc-textarea__inner,
    ::v-deep .jc-textarea__inner:focus{
      border-color: #f56c6c;
    }
  }
}

</style>
