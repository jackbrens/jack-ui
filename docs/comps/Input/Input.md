# Input 输入框

通过鼠标或键盘输入字符。

::: warning 提示

Input不设宽度，宽度随着父元素的宽度而定。

:::

### 基础用法

::: demo

```html
<jc-input v-model="input"></jc-input>
  
<script>
  export default {
    data () {
      return {
        input: ''
      };
    }
  }
</script>
```

:::

### 禁用状态

::: demo 通过 `disabled` 属性指定是否禁用 input 组件。

```html
<jc-input 
  v-model="input"
  placeholder="请输入信息"
  disabled>
</jc-input>
  
<script>
  export default {
    data () {
      return {
        input: ''
      };
    }
  }
</script>
```

:::

### 可清空

::: demo 使用`clearable`属性即可得到一个可清空的输入框。

```html
<div style="width: 180px">
  <jc-input 
    v-model="input"
    placeholder="请输入信息"
    clearable>
  </jc-input>  
</div>

<script>
  export default {
    data () {
      return {
        input: ''
      };
    }
  }
</script>
```

:::

### 密码框

::: demo 使用`show-password`属性即可得到一个可切换显示隐藏的密码框。

```html
<div style="width: 180px">
  <jc-input 
    v-model="input"
    placeholder="请输入密码"
    show-password>
  </jc-input>  
</div>

<script>
  export default {
    data () {
      return {
        input: ''
      };
    }
  }
</script>
```

:::

### Attributes

| 参数            | 说明                 | 类型            | 可选值                                                       | 默认值 |
| --------------- | -------------------- | --------------- | ------------------------------------------------------------ | ------ |
| type            | 类型                 | string          | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form__types) | text   |
| value / v-model | 绑定值               | string / number | —                                                            | —      |
| placeholder     | 输入框占位文本       | string          | —                                                            | —      |
| clearable       | 是否可清空           | boolean         | —                                                            | false  |
| show-password   | 是否显示切换密码图标 | boolean         | —                                                            | false  |
| disabled        | 禁用                 | boolean         | —                                                            | false  |
| name            | 原生属性             | string          | —                                                            | —      |