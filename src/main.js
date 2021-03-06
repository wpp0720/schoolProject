// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import '../static/css/base.less'
import '../static/css/viewportBase.less'

import 'vant/lib/vant-css/index.css';

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Vant from 'vant';

Vue.component('icon',Icon)
import VueVideoPlayer from 'vue-video-player'
import { baseLiveAjaxUrl,baseImgUrl,appId,baseAjaxUrl,baseThirdServiceUrl,baseWsUrl } from "../static/js/config/base-config.js";
Vue.use(Vant);
Vue.use(VueAwesomeSwiper);
Vue.use(VueVideoPlayer);
Vue.use(require('vue-wechat-title'));
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App,Icon}
})
