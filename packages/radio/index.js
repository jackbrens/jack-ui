import JCRadio from './src/radio';

JCRadio.install = function (Vue) {
  Vue.component(JCRadio.name, JCRadio);
}

export default JCRadio;
