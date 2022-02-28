<template>
<div class="jc-form" ref="jcForm">
  <slot></slot>
</div>
</template>

<script>
import AsyncValidator from 'async-validator';
import { eventBus } from '../../utils/index';

export default {
  name: "jcForm",
  componentName: 'jcFormValidator',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    rules: Object
  },
  data () {
    return {
      isError: [],
      fields: [],
      formError: {} // 该变量暂时未用到
    }
  },
  provide () {
    return {
      Form: this
    }
  },
  created () {

    // field参数 { prop: xxx, dom元素 }
    this.$on('form.addField', (field) => {
      if (field) {
        // 因为form-item数量不定，所有只要接收到回调参数，就叠加到数组中
        this.fields = [...this.fields, field];
      }
    })
    this.$on('form.removeField', (field) => {
      if (field) {
        console.log(field);
        this.fields = this.fields.filter(({ prop }) => prop !== field.prop);
      }
    })
  },
  computed: {
    formRules () {
      const descriptor = {};
      this.fields.forEach(({ prop }) => {
        if (!Array.isArray(this.rules[prop])) {
          console.warn(`prop 为 ${prop} 的 FormItem 校验规则不存在或者其值不是数组`);
          return;
        }
        descriptor[prop] = this.rules[prop];
      })
      return descriptor;
    },

    // 获取form表单里的值，跟model的参数一样
    formValues () {
      return this.fields.reduce((data, { prop }) => {
        data[prop] = this.model[prop];
        return data;
      }, {})
    }
  },
  methods: {
    validate (callback) {
      const validator = new AsyncValidator(this.formRules);
      validator.validate(this.formValues, (errors) =>{
        let formError = {};
        let valid = '';
        if (errors && errors.length) {
          valid = false;
          this.isError = errors;
          errors.forEach(({ message, field }) =>{
            formError[field] = message;
          })
        } else {
          formError = {};
          valid = true;
        }
        this.formError = formError;
        callback(valid);
      })
    },
    resetFields () {
      eventBus.$emit('clear', `来自${this}页面的消息`);
    }
  }
};
</script>

<style scoped>

</style>
