<template>
  <button
    class="jc-button"
    @click="handleClick"
    :disabled="buttonDisabled"
    :class="[
      `jc-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': buttonDisabled
      }
    ]">
    <i v-if="icon" class="fas" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'jcButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconRight: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonDisabled () {
      return this.disabled;
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e);
    }
  }
}
</script>

<style lang="scss" scoped>
.jc-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.jc-button--primary{
  color:#fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover{
    background: #66b1ff;
    color: #fff;
  }
}
.jc-button--success{
  color:#fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover{
    background: #85ce61;
    color: #fff;
  }
}
.jc-button--info{
  color:#fff;
  background-color: #909399;
  border-color: #909399;
  &:hover{
    background: #a6a9ad;
    color: #fff;
  }
}
.jc-button--warning{
  color:#fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover{
    background: #ebb563;
    color: #fff;
  }
}
.jc-button--danger{
  color:#fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover{
    background: #f78989;
    color: #fff;
  }
}

// 镂空按钮样式
.jc-button.is-plain{
  &:hover{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.jc-button--primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.jc-button--success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.jc-button--info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.jc-button--warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.jc-button--danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// round属性
.jc-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}

// 圆形按钮
.jc-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}

// disabled属性
.jc-button.is-disabled,.jc-button.is-disabled:hover{
  background-image: none;
  // 设置opacity透明度和禁用点击事件(自己的想法)
  opacity: .5;
  pointer-events: none;
}

.jc-icon--right{
  margin-left: 5px;
}
.jc-button [class*=fa-] + span{
  margin-left: 5px;
}
</style>
