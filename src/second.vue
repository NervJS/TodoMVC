<template>
  <view class="root">
    <view class="list" :style="{ color }" @tap="changeColor">
      {{ color | colorName }}
    </view>
  </view>
</template>

<script>

export default {
  data() {
    return {
      color: ''
    }
  },
  methods: {
    exampleParentOnTap (e) {
      console.log('parent is fired', e)
    },
    exampleOnTap (e) {
      console.log('example is fired', e)
    },
    changeColor() {
      this.color = this.color ? '' : 'red'
    }
  },
  created () {
    console.log('created')
  },
  filters: {
    colorName (color) {
      return color ? 'blue' : 'yellow'
    }
  }
}
</script>
