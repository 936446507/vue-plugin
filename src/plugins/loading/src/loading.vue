<template>
  <div :class="['loading-mask', {'is-fullscreen': fullscreen}]" v-show="visible">
    <div class="loading-mask__main">
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
  &__text {
    text-align: center;
  }
}
</style>
