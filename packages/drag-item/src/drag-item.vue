<template>
  <div
    @dragstart.stop="onDragstart"
    @dragenter.stop="onDragenter"
    @dragend.stop="onDragend"
    :draggable="!$slots.drag || isDrag"
    :style="{cursor: !$slots.drag ? 'move': ''}"
    class="jc-drag__item"
  >
    <slot name="drag" />
    <slot />
  </div>
</template>

<script>
import Emitter from "../../utils/emitter";

export default {
  name: "jcDragItem",
  mixins: [Emitter],
  data() {
    return {
      isDrag: false
    };
  },
  mounted() {
    if (this.$slots.drag) {
      this.setSlotAttr();
    }
    this.dispatch("jcDragWrap", "putChild", this.$el);
  },
  methods: {
    onDragstart() {
      this.$el.style.opacity = "0.3";
      this.dispatch("jcDragWrap", "dragstart", this.$el);
    },
    onDragenter() {
      this.dispatch("jcDragWrap", "dragenter", this.$el);
    },
    onDragend() {
      this.$el.style.opacity = "1";
      this.dispatch("jcDragWrap", "dragend");
    },
    setSlotAttr() {
      const slotVNode = this.$slots.default.find(
        vnode => !vnode.data && vnode.text !== " "
      );
      const dragDom = slotVNode.elm.previousSibling;
      if (dragDom.previousSibling !== null) {
        throw "具名插槽内只能有一个根节点~";
      }
      dragDom.addEventListener("mouseenter", () => {
        this.isDrag = true;
      });
      dragDom.addEventListener("mouseleave", () => {
        this.isDrag = false;
      });
      dragDom.style.cursor = "move";
    }
  }
};
</script>

<style scoped>
/*.jc-drag__item {*/
/*  animation: shake 0.3s;*/
/*}*/
/*@keyframes shake {*/
/*  0% {*/
/*    transform: translate3d(-10%, 0, 0);*/
/*  }*/
/*  50% {*/
/*    transform: translate3d(10%, 0, 0);*/
/*  }*/
/*  100% {*/
/*    transform: translate3d(0, 0, 0);*/
/*  }*/
/*}*/
</style>
