import Vue from 'vue';
import { debounce } from './index'


/**
 * v-debounce:keyup="[getList, 500]"
 * v-debounce:事件名="[触发的函数, 延迟毫秒(可不写)]"
 */
Vue.directive('debounce', {
  bind (el, binding) {
    if (!binding.arg) {
      console.error('请输入事件名...');
      return;
    }
    if (binding.value instanceof Array && binding.value.length > 0) {
      let [fn, delay] = binding.value;
      el.addEventListener(binding.arg, () => {
        debounce(fn, delay)
      })
    } else {
      console.error('参数应该为一个数组，或参数为空数组...');
    }
  }
})
