# Radio 单选框

在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

::: demo 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

```html
<jc-radio v-model="radio" label="1">男</jc-radio>
<jc-radio v-model="radio" label="0">女</jc-radio>
  
<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```

:::

### 单选框组

适用于在多个互斥的选项中选择的场景。

::: demo 结合`jc-radio-group`元素和子元素`jc-radio`可以实现单选组，在`jc-radio-group`中绑定`v-model`，在`jc-radio`中设置好`label`即可，无需再给每一个`jc-radio`绑定变量。

```html
<jc-radio-group v-model="radio">
  <jc-radio :label="3">备选项3</jc-radio>
  <jc-radio :label="6">备选项6</jc-radio>
  <jc-radio :label="9">备选项9</jc-radio>
</jc-radio-group>
  
<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>
```

:::



### Attributes

| 参数            | 说明           | 类型                      | 可选值 | 默认值 |
| --------------- | -------------- | ------------------------- | ------ | ------ |
| value / v-model | 绑定值         | string / number / boolean | —      | —      |
| label           | Radio 的 value | string / number / boolean | —      | —      |