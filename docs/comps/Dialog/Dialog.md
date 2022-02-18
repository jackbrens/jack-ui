# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

::: demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。

```html
<jc-button @click="visible = true">点击打开dialog</jc-button>
<jc-dialog width="60%" top="200px" :visible.sync="visible" title="请打开麦克风交流">
  这是一段信息。
  <template v-slot:footer>
  	<jc-button type="primary" @click="visible = false">确定</jc-button>
  	<jc-button @click="visible = false">取消</jc-button>
  </template>
</jc-dialog>

<script>
  export default {
    data() {
      return {
        visible: false
      }
    }
  };
</script>
```

:::

### 居中布局

标题和底部可水平居中。

::: demo 将`center`设置为`true`即可使标题和底部居中。`center`仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。

```html
<jc-button @click="visible = true">点击打开dialog</jc-button>
<jc-dialog top="200px" :visible.sync="visible" center>
  这是一段信息。
  <template v-slot:footer>
    <jc-button @click="visible = false">取消</jc-button>
  	<jc-button type="primary" @click="visible = false">确定</jc-button>
  </template>
</jc-dialog>

<script>
  export default {
    data() {
      return {
        visible: false
      }
    }
  };
</script>
```

:::

### Attributes

| 参数            | 说明                                            | 类型    | 可选值 | 默认值  |
| --------------- | ----------------------------------------------- | ------- | ------ | ------- |
| visible         | 是否显示 Dialog，支持 .sync 修饰符              | boolean | —      | false   |
| title           | Dialog 的标题，也可通过具名 slot （见下表）传入 | string  | —      | —       |
| width           | Dialog 的宽度                                   | string  | —      | 30%     |
| top             | Dialog CSS 中的 margin-top 值                   | string  | —      | 15vh    |
| center          | 是否对头部和底部采用居中布局                    | boolean | —      | false   |
| in-active-color | switch 关闭时的背景色                           | string  | —      | #C0CCDA |

### Slot

| name   | 说明                    |
| ------ | ----------------------- |
| —      | Dialog 的内容           |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |