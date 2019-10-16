<template>
  <view class="root">
    <view class="list" :style="{ color }" @tap="changeColor">
      {{ color | colorName }}
    </view>
  </view>
</template>

<script>
import { connectVuePage } from '@tarojs/runtime'
export const TARO_PAGE_ID = 'taro_page_id_1'

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
