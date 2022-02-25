<template>
<div class="jc-checkbox-group">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "jcCheckboxGroup",
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
};
</script>

<style scoped>
.jc-checkbox-group{
  width: 320px;
  margin: 0;
  padding: 0;
  list-style: none;
}

</style>
