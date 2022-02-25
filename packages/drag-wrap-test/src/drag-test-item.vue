<template>
<div class="jc-drag-test-item">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "jcDragTestItem",
};
</script>

<style scoped>
.jc-drag-test-item{
  padding: 10px;
  color: #606266;
  border-bottom: 1px solid #ebeef5;
  transition: background-color .3s ease;
}
.jc-drag-test-item:hover{
  background-color: #F5F7FA;
}
</style>
