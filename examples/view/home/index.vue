<template>
<div>
  <div class="row">
    <jc-button disabled>朴树</jc-button>
    <jc-button type="primary" disabled>主要按钮</jc-button>
    <jc-button type="success">成功按钮</jc-button>
    <jc-button type="info">信息按钮</jc-button>
    <jc-button type="warning">警告按钮</jc-button>
    <jc-button type="danger">危险按钮</jc-button>
  </div>
  <div class="row">
    <jc-button plain>朴树</jc-button>
    <jc-button plain type="primary">主要按钮</jc-button>
    <jc-button plain type="success">成功按钮</jc-button>
    <jc-button plain type="info">信息按钮</jc-button>
    <jc-button plain type="warning">警告按钮</jc-button>
    <jc-button plain type="danger">危险按钮</jc-button>
  </div>
  <div class="row">
    <jc-button round>朴树</jc-button>
    <jc-button round type="primary">主要按钮</jc-button>
    <jc-button round type="success">成功按钮</jc-button>
    <jc-button round type="info">信息按钮</jc-button>
    <jc-button round type="warning">警告按钮</jc-button>
    <jc-button round type="danger">危险按钮</jc-button>
  </div>
  <div class="row">
    <jc-button icon="fa-search" circle></jc-button>
    <jc-button icon="fa-edit" circle type="primary"></jc-button>
    <jc-button icon="fa-check" circle type="success"></jc-button>
    <jc-button icon="fa-message" circle type="info"></jc-button>
    <jc-button icon="fa-star-of-david" circle type="warning"></jc-button>
    <jc-button icon="fa-fingerprint" circle type="danger"></jc-button>
  </div>
  <div class="row">
    <jc-button @click="func" icon="fa-search">搜索</jc-button>
    <jc-button type="primary">编辑<i class="fas fa-edit jc-icon--right"></i></jc-button>
    <jc-button icon="fa-check" type="success">检查</jc-button>
    <jc-button icon="fa-message" type="info"></jc-button>
    <jc-button icon="fa-star-of-david" type="warning"></jc-button>
    <jc-button icon="fa-fingerprint" type="danger"></jc-button>
  </div>
  <div class="row-button">
    <jc-button-group>
      <jc-button type="primary" icon="fa-arrow-left">上一页</jc-button>
      <jc-button type="primary">中间</jc-button>
      <jc-button type="primary">下一页<i class="fas fa-arrow-right jc-icon--right"></i></jc-button>
    </jc-button-group>
    <jc-button-group>
      <jc-button type="primary" icon="fa-message"></jc-button>
      <jc-button type="primary" icon="fa-edit"></jc-button>
      <jc-button type="primary" icon="fa-fingerprint"></jc-button>
    </jc-button-group>
  </div>
  <div class="row">
    <jc-button @click="visible = true">点击打开dialog</jc-button>
    <jc-dialog width="60%" top="200px" :visible.sync="visible" title="请打开麦克风交流" >
      这是一段信息。
      <template v-slot:footer>
        <jc-button type="primary" @click="visible = false">确定</jc-button>
        <jc-button @click="visible = false">取消</jc-button>
      </template>
    </jc-dialog>
  </div>
  <div class="row">
    <div class="jc-input">
      <jc-input @blur="blur"></jc-input>
      <input type="text" @blur="blur">
    </div>
  </div>
  <div class="row">
    <jc-switch
      v-model="value"
      in-active-color="#ff4949"
      active-color="#13ce66"
      in-active-text="关闭"
      active-text="打开">
    </jc-switch>
  </div>
  <div class="row">
    <jc-radio v-model="radio" label="1">男</jc-radio>
    <jc-radio v-model="radio" label="0">女</jc-radio>
  </div>
  <div class="row">
    <jc-radio-group v-model="radio2">
      <jc-radio :label="3">备选项3</jc-radio>
      <jc-radio :label="6">备选项6</jc-radio>
      <jc-radio :label="9">备选项9</jc-radio>
    </jc-radio-group>
  </div>
  <div class="row">
    <jc-checkbox v-model="checked">备选项1</jc-checkbox>
  </div>
  <div class="row">
    <jc-checkbox-group v-model="checked2">
      <jc-checkbox checked label="备选项1"></jc-checkbox>
      <jc-checkbox label="备选项2"></jc-checkbox>
      <jc-checkbox label="备选项3"></jc-checkbox>
    </jc-checkbox-group>
  </div>
  <div class="row" style="width: 600px; border: 1px solid #ccc">
    <jc-form :model="form" ref="forms">
      <jc-form-item label="用户名" prop="name">
        <jc-input placeholder="请输入用户名" v-model="form.name"></jc-input>
      </jc-form-item>
      <jc-form-item label="选项" prop="resource">
        <jc-radio-group v-model="form.resource">
          <jc-radio label="男">男</jc-radio>
          <jc-radio label="女">女</jc-radio>
        </jc-radio-group>
      </jc-form-item>
      <jc-form-item label="是否符合">
        <jc-switch v-model="form.delivery"></jc-switch>
      </jc-form-item>
      <jc-form-item label="活动性质" prop="type">
        <jc-checkbox-group v-model="form.type">
          <jc-checkbox label="地推活动"></jc-checkbox>
          <jc-checkbox label="线下主题活动"></jc-checkbox>
          <jc-checkbox label="单纯品牌曝光"></jc-checkbox>
        </jc-checkbox-group>
      </jc-form-item>
      <jc-form-item label="活动说明" prop="desc">
        <jc-input type="textarea" v-model="form.desc"></jc-input>
      </jc-form-item>
      <jc-form-item>
        <jc-button type="primary">立即创建</jc-button>
        <jc-button @click="resetForm">重置</jc-button>
      </jc-form-item>
      <jc-row>
        我是迪迦
      </jc-row>
    </jc-form>
  </div>
  <jc-row>
    <jc-checkbox-group v-model="checked2">
      <jc-checkbox label="备选项1"></jc-checkbox>
      <jc-checkbox label="备选项2"></jc-checkbox>
      <jc-checkbox label="备选项3"></jc-checkbox>
    </jc-checkbox-group>
  </jc-row>
  <jc-row>
    <jc-checkbox-group v-model="checked2">
      <jc-checkbox label="备选项1"></jc-checkbox>
      <jc-checkbox label="备选项2"></jc-checkbox>
      <jc-checkbox label="备选项3"></jc-checkbox>
    </jc-checkbox-group>
  </jc-row>
  <jc-row>
    <jc-drag-wrap
      class="wrap"
      :data="list"
      @watchData="watchData"
    >
      <jc-drag-item
        class="item"
        v-for="(item, index) in list"
        :key="index"
      >
        <div>整个可以拖拽{{item}}</div>
      </jc-drag-item>
    </jc-drag-wrap>
  </jc-row>
  <jc-row style="width: 600px">
    <jc-drag-wrap-test :data.sync="tableData" stripe @watchData="watchData2">
      <jc-drag-test-item v-for="item in tableData" :key="item.address">
        {{ item.address }}
      </jc-drag-test-item>
    </jc-drag-wrap-test>
  </jc-row>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      visible: false,
      username: '',
      value: false,
      radio: '1',
      radio2: 3,
      radio3: 4,
      checked: false,
      checked2: ['迪迦', '盖亚'],
      form: {
        name: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      list: [111, 222, 333, 444, 555, 666, 777, 888, 999],
      tableData: [
        {
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          address: '上海市普陀区金沙江路 1519 弄'
        }
      ]
    }
  },
  methods: {
    func () {
      console.log('按钮点击触发');
    },
    watchData (newList) {
      console.log('newList', newList);
    },
    watchData2 (newArr) {
      console.log('new', newArr);
    },
    blur (event) {
      console.log(event);
    },
    resetForm () {
      console.log('重置', this.$refs.forms.resetFields());
      this.form = this.$refs.forms.resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.row{
  padding: 20px;
  .jc-button{
    margin-right: 20px;
  }
}
.row-button{
  padding: 20px;
}
.jc-input{
  width: 180px;
}

</style>
