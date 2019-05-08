<template>
  <div
    :class="['loading-mask', {'is-fullscreen': fullscreen}]"
    :style="{ 'background-color': background }"
    v-show="visible"
  >
    <div class="loading-mask__main">
      <svg class="circular" viewBox="25 25 50 50">
        <circle class="path" cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
      <p class="loading-mask__text" v-if="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      text: null,
      fullscreen: false,
      visible: false
    };
  },
  methods: {
    setText(text) {
      this.text = text;
    }
  }
};
</script>

<style lang="scss">
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
.loading-parent--relative {
  position: relative !important;
}
.loading-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  background-color: hsla(0, 0%, 100%, 0.9);
  transition: opacity 0.3s;
  &__main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__text {
    text-align: center;
  }
  .circular {
    height: 42px;
    width: 42px;
    animation: loading-rotate 2s linear infinite;
  }

  .path {
    animation: loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray: 90, 150;
    stroke-dashoffset: 0;
    stroke-width: 2;
    stroke: #409eff;
    stroke-linecap: round;
  }
}
</style>
