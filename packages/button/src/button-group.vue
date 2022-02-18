<template>
<div class="jc-button-group">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "jcButtonGroup"
};
</script>

<style lang="scss" scoped>
.jc-button-group{
  .jc-button:not(:first-of-type,:last-of-type){
    border-radius: 0;
    border-left-color: hsla(0,0%,100%,.5);
  }
  .jc-button:first-of-type{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .jc-button:last-of-type{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left-color: hsla(0,0%,100%,.5);
  }
}

</style>
