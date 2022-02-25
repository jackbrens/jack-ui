<template>
<div class="jc-form" ref="jcForm">
  <slot></slot>
</div>
</template>

<script>
import deepClone from "../../utils/deepClone";

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
  data () {
    return {
      copyModel: {}
    }
  },
  provide () {
    return {
      Form: this
    }
  },
  mounted () {
    let cloneTarget = deepClone(this.model);
    this.copyModel = cloneTarget;
    console.log(cloneTarget);
  },
  methods: {
    resetFields () {
      console.log(this.$el.children);

      const dom = [...this.$el.children].filter(child => {
        return child.classList.contains('jc-form-item');
      })
      dom.forEach(item => {
        item.classList.remove('is-error');
      })
      console.log(dom);
      return this.copyModel;
    }
  }
};
</script>

<style scoped>

</style>
