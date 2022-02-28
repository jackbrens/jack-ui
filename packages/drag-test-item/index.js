import JCDragTestItem from '../drag-wrap-test/src/drag-test-item';

JCDragTestItem.install = function (Vue) {
  Vue.component(JCDragTestItem.name, JCDragTestItem);
}

export default JCDragTestItem
