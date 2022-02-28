import JCDialog from './src/dialog';

JCDialog.install = function (Vue) {
  Vue.component(JCDialog.name, JCDialog);
}

export default JCDialog;
