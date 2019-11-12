<template>
  <view class="root">
    <view @tap="exampleParentOnTap" class="parent">
      <view class="title" @tap.stop="exampleOnTap">Example</view>
    </view>
    <view class="list" :style="{ color }" @tap="changeColor">
      {{ color | colorName }}
    </view>
    <button @tap="goto">goto todo</button>
    <!-- <input @input="onInput" placeholder="fuckyou" :value="msg" /> -->
    <input placeholder="fuckyou" v-model="msg" />
    <view>{{ msg }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      color: '',
      msg: ''
    }
  },
  methods: {
    onInput (e) {
      this.msg = e.detail.value
    },
    exampleParentOnTap (e) {
      console.log('parent is fired', e)
    },
    exampleOnTap (e) {
      console.log('example is fired', e)
    },
    changeColor() {
      this.color = this.color ? '' : 'red'
    },
    goto () {
      wx.navigateTo({ url: '/pages/logs/logs' })
    }
  },
  fuck: 'you',
  created () {
    // debugger
    console.log('created')
  },
  onShow () {
    console.log('onshow')
  },
  onHide () {
    console.log('onHide')
  },
  filters: {
    colorName (color) {
      return color ? 'red' : 'black'
    }
  }
}
</script>
