<template>
  <div>
    <lottie :options="defaultOptions" :height="300" :width="400" v-on:animCreated="handleAnimation"/>
    <div>
        <p>Speed: x{{animationSpeed}}</p>
        <input type="range" value="1" min="0" max="3" step="0.5" v-on:change="onSpeedChange" v-model="animationSpeed">
    </div>
    <button v-on:click="stop">stop</button>
    <button v-on:click="pause">pause</button>
    <button v-on:click="play">play</button>
  </div>
</template>
<script>
import Lottie from './lottie.vue';
import * as animationData from "@/assets/loading.json";
export default {
  name: 'lottieDemo',
  components: {
    'lottie': Lottie
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      animationSpeed: 1
    }
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
      console.log(anim); //这里可以看到 lottie 对象的全部属性
    },
    stop: function () {
      this.anim.stop();
    },
    play: function () {
      this.anim.play();
    },
    pause: function () {
      this.anim.pause();
    },
    onSpeedChange: function () {
      this.anim.setSpeed(this.animationSpeed);
    }
  }
}
</script>
