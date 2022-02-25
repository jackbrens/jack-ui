<template>
<div class="jc-drag-wrap-test" ref="wrapTest">
  <slot></slot>
</div>
</template>

<script>
import { Sortable } from 'sortablejs';
export default {
  name: "jcDragWrapTest",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    stripe: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    let vm = this;
    this.list = this.data;
    Sortable.create(this.$refs.wrapTest,{
      animation: 150,
      ghostClass: 'sortable-ghost',
      chosenClass: "sortable-chosen",
      dragClass: 'sortable-drag',

      // 开始拖拽的时候
      onStart (event) {
        event.from.style.cursor = "move";
      },

      // 结束拖拽
      onEnd (event) {
        event.from.style.cursor = "";
        console.log(event);
        vm.list = vm.data;
        vm.list.splice(event.newIndex, 0, vm.list.splice(event.oldIndex, 1)[0]);
        let newArr = vm.list.splice(0);
        vm.list = [];
        vm.$nextTick(() => {
          vm.$emit('update:data', newArr);
          vm.$emit('watchData', newArr);
        })
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.sortable-ghost{
  background: #eee;
}
.sortable-chosen{
  cursor: move;
}
.sortable-drag{
  cursor: move;
}
</style>
