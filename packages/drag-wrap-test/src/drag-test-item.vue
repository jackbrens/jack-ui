<template>
<div class="jc-drag-test-item">
  <span><slot></slot></span>
  <p>view on Behance</p>
</div>
</template>

<script>
export default {
  name: "jcDragTestItem",
};
</script>

<style lang="scss" scoped>
.jc-drag-test-item{
  padding: 10px;
  color: #606266;
  border-bottom: 1px solid #ebeef5;
  transition: background-color .3s ease;
  position: relative;
  display: flex;
  align-items: center;
  &::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: -1;
    transition: all .5s ease;
  }
  &:hover::after{
    background-color: #FBFAFB;
    box-shadow:inset 2px 2px 2px 0 rgba(255,255,255,.5),
    7px 7px 20px 0 rgba(0,0,0,.1),
    4px 4px 5px 0 rgba(0,0,0,.1);
  }
  &:hover{
    background-color: #F5F7FA;
  }
  &:hover p{
    top: -30px;
    opacity: 1;
  }
  span{
    font-size: 24px;
    font-weight: 600;
    margin-left: 80px;
  }
  &>p{
    height: 20px;
    position: absolute;
    right: 0;
    top: -40px;
    opacity: 0;
    transition: all .3s ease-out;
    color: #9498A3;
    font-size: 14px;
    user-select: none;
    -webkit-user-select: none;
  }
}

</style>
