import 'core-js';
import 'regenerator-runtime/runtime';
import 'classlist-polyfill';
import 'intersection-observer';
import './js/util.js';
import './js/data-mocks.js';
import './js/feedback-slider.js';
import './js/footer-arrow.js';
import './js/portfolio-list.js';
import './js/team-button.js';
import './js/signup-form.js';
import './js/skills-circle.js';
import './less/style.less';

function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('./img', true, /\.(png|jpe?g|svg|gif)$/i));
