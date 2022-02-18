# Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

::: demo 适用广泛的基础单选
```html
<div class="row">
  <jc-button>朴树</jc-button>
  <jc-button type="primary">主要按钮</jc-button>
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
```
:::


### 禁用状态

按钮不可用状态。

::: demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
```html
<div class="row">
  <jc-button disabled>朴树</jc-button>
  <jc-button type="primary" disabled>主要按钮</jc-button>
  <jc-button type="success" disabled>成功按钮</jc-button>
  <jc-button type="info" disabled>信息按钮</jc-button>
  <jc-button type="warning" disabled>警告按钮</jc-button>
  <jc-button type="danger" disabled>危险按钮</jc-button>
</div>
<div class="row">
  <jc-button plain disabled>朴树</jc-button>
  <jc-button plain type="primary" disabled>主要按钮</jc-button>
  <jc-button plain type="success" disabled>成功按钮</jc-button>
  <jc-button plain type="info" disabled>信息按钮</jc-button>
  <jc-button plain type="warning" disabled>警告按钮</jc-button>
  <jc-button plain type="danger" disabled>危险按钮</jc-button>
</div>
<div class="row">
  <jc-button round disabled>朴树</jc-button>
  <jc-button round type="primary" disabled>主要按钮</jc-button>
  <jc-button round type="success" disabled>成功按钮</jc-button>
  <jc-button round type="info" disabled>信息按钮</jc-button>
  <jc-button round type="warning" disabled>警告按钮</jc-button>
  <jc-button round type="danger" disabled>危险按钮</jc-button>
</div>
<div class="row">
  <jc-button icon="fa-search" circle disabled></jc-button>
  <jc-button icon="fa-edit" circle type="primary" disabled></jc-button>
  <jc-button icon="fa-check" circle type="success" disabled></jc-button>
  <jc-button icon="fa-message" circle type="info" disabled></jc-button>
  <jc-button icon="fa-star-of-david" circle type="warning" disabled></jc-button>
  <jc-button icon="fa-fingerprint" circle type="danger" disabled></jc-button>
</div>
```
:::


### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

::: demo 设置`icon`属性即可，`icon` 的列表可以参考 fontawesome 的 icon，也可以设置在文字右边的 icon ，只要使用`i`标签即可。注：`i`标签放在右边时，要在`class`里加入`jc-icon--right`样式。
```html
<jc-button icon="fa-search">搜索</jc-button>
<jc-button type="primary">编辑<i class="fas fa-edit jc-icon--right"></i></jc-button>
<jc-button icon="fa-check" type="success">检查</jc-button>
<jc-button icon="fa-message" type="info"></jc-button>
<jc-button icon="fa-star-of-david" type="warning"></jc-button>
<jc-button icon="fa-fingerprint" type="danger"></jc-button>
```
:::



### 按钮组

以按钮组的方式出现，常用于多项类似操作。

::: demo 使用`<jc-button-group>`标签来嵌套你的按钮。

```html
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
```

:::



### Attributes

| 参数     | 说明         | 类型    | 可选值                                      | 默认值 |
| -------- | ------------ | ------- | ------------------------------------------- | ------ |
| type     | 类型         | string  | primary / success / warning / danger / info | —      |
| plain    | 是否朴素按钮 | boolean | —                                           | false  |
| round    | 是否圆角按钮 | boolean | —                                           | false  |
| circle   | 是否圆形按钮 | boolean | —                                           | false  |
| disabled | 是否禁用状态 | boolean | —                                           | false  |
| icon     | 图标类名     | string  | —                                           | —      |
