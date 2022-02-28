<template>
  <div class="jc-switch"
     :class="{ 'is-checked': value, 'is-disabled': disabled }"
     @click="switchClick">
    <span class="jc-switch_label__left"
          :class="{ 'is-active': value === false }">
      {{ inActiveText }}
    </span>
    <span class="jc-switch_core" ref="core">
      <span class="jc-switch_button"></span>
    </span>
    <span class="jc-switch_label__right"
          :class="{ 'is-active': value === true }">
      {{ activeText }}
    </span>
    <input type="checkbox"
           class="jc-switch_input"
           :name="name"
           :disabled="disabled"
           ref="input">
  </div>
</template>

<script>
import { eventBus } from "../../utils";

export default {
  name: "jcSwitch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inActiveColor: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    inActiveText: {
      type: String,
      default: ''
    },
    activeText: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setColor();
    eventBus.$on('clear',() => {
      this.$emit('input', false);
    })
  },
  methods: {
    switchClick () {
      !this.disabled && this.handleClick();
    },
    handleClick () {
      this.$emit('input', !this.value);
      this.$nextTick(() =>{
        this.setColor()
      })
    },
    setColor () {
      if (this.inActiveColor || this.activeColor) {
        let color = this.value ? this.activeColor : this.inActiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.jc-switch{
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .jc-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .jc-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .jc-switch_label__left{
    margin-right: 10px;
    cursor: pointer;
  }
  .jc-switch_label__right{
    margin-left: 10px;
    cursor: pointer;
  }

  // 禁用样式
  &.is-disabled{
    opacity: .5;
    user-select: none;
    -webkit-user-select: none;
  }
}

// 选中样式
.is-checked{
  .jc-switch_core{
    border-color: #409eff;
    background-color: #409eff;
    .jc-switch_button {
      transform: translateX(20px);
    }
  }
}
.is-active{
  color: #409eff;
}

// 隐藏input标签
.jc-switch_input{
  position:absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
