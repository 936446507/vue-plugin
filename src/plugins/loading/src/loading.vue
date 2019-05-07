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
