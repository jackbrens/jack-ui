<template>
  <label class="jc-radio" :class="{ 'is-checked': label === model }">
    <span class="jc-radio__input">
      <span class="jc-radio__inner"></span>
      <input
        type="radio"
        class="jc-radio__original"
        :value="label"
        :name="name"
        v-model="model"
      >
    </span>
    <span class="jc-radio__label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
      </span>
  </label>
</template>

<script>
import { eventBus } from '../../utils/index';

export default {
  name: "jcRadio",
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.RadioGroup ? this.RadioGroup.value : this.value;
      },
      set (value) {
        this.RadioGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value);
      }
    },
    isGroup () {
      // 双感叹号会变成布尔值
      return !!this.RadioGroup;
    },
  },
  mounted () {
    eventBus.$on('clear',() => {
      this.RadioGroup ? this.RadioGroup.$emit('input', '') : this.$emit('input', '');
    })
  },
  methods: {
    clearInput () {
      this.RadioGroup ? this.RadioGroup.$emit('input', '') : this.$emit('input', '');
    }
  }
};
</script>

<style lang="scss" scoped>
.jc-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .jc-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .jc-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .jc-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .jc-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.jc-radio.is-checked {
  .jc-radio__input {
    .jc-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .jc-radio__label {
    color: #409eff;
  }
}
</style>
