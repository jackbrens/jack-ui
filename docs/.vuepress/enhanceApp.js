import JackUI from '../../packages';
import '@fortawesome/fontawesome-free/css/all.css';
import '../style/index.scss';

export default async ({ Vue }) => {
  if (typeof process === 'undefined') {
    Vue.use(JackUI)
  }
}
