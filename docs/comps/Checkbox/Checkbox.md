# Checkbox 多选框

一组备选项中进行多选。

### 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

::: demo 在`jc-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

```html
<jc-checkbox v-model="checked">备选项1</jc-checkbox>

<script>
  export default {
    data() {
      return {
        checked: true
      }
    }
  };
</script>
```

:::

### 禁用状态

多选框不可用状态。

::: demo 设置`disabled`属性即可。

```html
<jc-checkbox v-model="checked1" disabled>备选项1</jc-checkbox>
<jc-checkbox v-model="checked2" disabled>备选项1</jc-checkbox>
  
<script>
  export default {
    data () {
      return {
        checked1: false,
        checked2: true
      };
    }
  }
</script>
```

:::

### 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

::: demo `checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用`v-model`绑定`Array`类型的变量即可。`jc-checkbox` 的 `label`属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。`label`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```html
<jc-checkbox-group v-model="checked2">
  <jc-checkbox label="复选框1"></jc-checkbox>
  <jc-checkbox label="复选框2"></jc-checkbox>
  <jc-checkbox label="复选框3"></jc-checkbox>
</jc-checkbox-group>
  
<script>
  export default {
    data () {
      return {
        checked2: ['迪迦', '盖亚', '复选框1']
      };
    }
  }
</script>
```

:::

### Attributes

| 参数     | 说明                                                         | 类型                      | 可选值 | 默认值 |
| -------- | ------------------------------------------------------------ | ------------------------- | ------ | ------ |
| v-model  | 绑定值                                                       | boolean                   | —      | —      |
| label    | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | string / number / boolean | —      | —      |
| disabled | 是否禁用                                                     | boolean                   | —      | false  |
| name     | 原生 name 属性                                               | string                    | —      | —      |
| checked  | 当前是否勾选                                                 | boolean                   | —      | false  |