# Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。

### 基础用法

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

::: demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。

```html
<jc-form :model="form">
  <jc-form-item label="用户名">
    <jc-input placeholder="请输入用户名" v-model="form.name"></jc-input>
  </jc-form-item>
  <jc-form-item label="选项">
     <jc-radio v-model="form.region" label="1">男</jc-radio>
     <jc-radio v-model="form.region" label="0">女</jc-radio>
   </jc-form-item>
   <jc-form-item label="是否符合">
     <jc-switch v-model="form.value"></jc-switch>
   </jc-form-item>
   <jc-form-item label="活动性质">
      <jc-checkbox-group v-model="form.checked2">
        <jc-checkbox label="地推活动"></jc-checkbox>
        <jc-checkbox label="线下主题活动"></jc-checkbox>
        <jc-checkbox label="单纯品牌曝光"></jc-checkbox>
      </jc-checkbox-group>
  </jc-form-item>
  <jc-form-item>
     <jc-button type="primary">立即创建</jc-button>
     <jc-button>取消</jc-button>
  </jc-form-item>
</jc-form>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: 12,
          checked2: ['迪迦', '盖亚'],
          value: false
      	}
      }
    }
  };
</script>
```

:::

