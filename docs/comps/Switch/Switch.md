# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基础用法

::: demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`in-active-color`属性来设置开关的背景色。

```html
<jc-switch
  v-model="value"
  active-color="#13ce66"
  in-active-color="#ff4949">
</jc-switch>

<script>
  export default {
    data() {
      return {
        value: true
      }
    }
  };
</script>
```

:::

### 文字描述

::: demo 使用`active-text`属性与`in-active-text`属性来设置开关的文字描述。

```html
<jc-switch
  v-model="value"
  in-active-color="#ff4949"
  active-color="#13ce66"
  in-active-text="关闭"
  active-text="打开">
</jc-switch>
  
<script>
  export default {
    data () {
      return {
        value: true
      };
    }
  }
</script>
```

:::

### 禁用状态

::: demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```html
<jc-switch
  v-model="value"
  in-active-color="#ff4949"
  active-color="#13ce66"
  in-active-text="关闭"
  active-text="打开"
  disabled>
</jc-switch>
  
<script>
  export default {
    data () {
      return {
        value: true
      };
    }
  }
</script>
```

:::



### Attributes

| 参数            | 说明                    | 类型    | 可选值 | 默认值  |
| --------------- | ----------------------- | ------- | ------ | ------- |
| v-model         | 绑定值                  | boolean | —      | —       |
| disabled        | 是否禁用                | boolean | —      | false   |
| active-text     | switch 打开时的文字描述 | string  | —      | —       |
| in-active-text  | switch 关闭时的文字描述 | string  | —      | —       |
| active-color    | switch 打开时的背景色   | string  | —      | #409EFF |
| in-active-color | switch 关闭时的背景色   | string  | —      | #C0CCDA |