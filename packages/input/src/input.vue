<template>
  <div class="jc-input" :class="{ 'jc-input_suffix': showSuffix }">
    <template v-if="type !== 'textarea'">
      <input
        :disabled="disabled"
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
        :name="name"
        :readonly="readonly"
        :placeholder="placeholder"
        :value="value"
        class="jc-input__inner"
        :class="{ 'is-disabled': disabled }"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus">
      <span class="jc-input__suffix" v-if="showSuffix">
        <i class="far fa-window-close" v-if="clearable && value" @click="clearInput"></i>
        <i class="far fa-eye" v-if="showPassword" @click="handlePasswordVisible"></i>
      </span>
    </template>
    <textarea
      v-else
      class="jc-textarea__inner"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"></textarea>
  </div>
</template>

<script>
export default {
  name: "jcInput",
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number],
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  computed:{
    showSuffix () {
      return this.clearable || this.showPassword;
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input',event.target.value);
    },
    handleBlur (event) {
      this.$emit('blur', event);
    },
    handleFocus (event) {
      this.$emit('focus', event);
    },
    clearInput () {
      this.$emit('input', '');
    },
    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible;
    }
  }
}
</script>

<style lang="scss" scoped>
.jc-input{
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .jc-input__inner{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s;
    width: 100%;
    &:focus{
      outline: none;
      border-color: #409eff;
    }

    // input禁用样式
    &.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor:not-allowed;
    }
  }
  .jc-textarea__inner{
    display: block;
    outline: none;
    resize: vertical;
    padding: 5px 15px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    min-height: 33px;
    font-size: inherit;
    color: #606266;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    &:focus{
      outline: none;
      border-color: #409eff;
    }
  }
  // 后面加suffix的意思是后面如果有后缀的话，触发该样式
  .jc-input_suffix{
    .jc-input__suffix{
      user-select: none;
      -webkit-user-select: none;
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i{
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
  }
}



</style>
