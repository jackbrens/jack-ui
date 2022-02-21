// 导入icon图标样式
import '@fortawesome/fontawesome-free/css/all.css';
import Button from './button';
import ButtonGroup from './button-group';
import Dialog from './dialog';
import Input from './input';
import Switch from './switch';
import Radio from './radio';
import RadioGroup from './radio-group';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Form from './from';
import FormItem from './form-item';
import Row from './row';

const components = [
  Button,
  ButtonGroup,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Row
]

// 注册全局组件
const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name, item);
  })
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
