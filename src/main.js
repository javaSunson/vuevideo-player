import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import App from './App.vue'
import 'videojs-contrib-hls'
Vue.use(ElementUI)
Vue.use(VideoPlayer)
new Vue({
  el: '#app',
  render: h => h(App)
})
