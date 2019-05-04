<template>
  <div class="message" v-show="visible">{{ message }}</div>
</template>

<script>
let timer = null
export default {
  name: 'message',
  data() {
    return {
      visible: false,
      message: '',
      duration: 2000
    }
  },
  methods: {
    startTimer() {
      timer = window.setTimeout(() => {
        this.setState(false)
      }, this.duration)
    },
    closeTimer() {
      window.clearTimeout(timer)
    },
    setState(state = false) {
      this.visible = state
    }
  },
  mounted() {
    this.duration > 0 && this.startTimer()
  },
  beforeDestroy() {
    this.closeTimer()
  }
}
</script>
