<template>
  <text
    class='text'
    @tap="dbClick"
  >
    {{todo.title}}
  </text>
</template>

<script>
export default {
  data() {
    return {
      lastClickTime: 0
    }
  },
  props: {
    edit: Function,
    todo: Object
  },
  methods: {
    dbClick (e) {
      const currentTime = e.timeStamp
      const gap = currentTime - this.lastClickTime
      if (gap > 0 && gap < 300) { // double click
        this.edit(this.todo)
      }
      this.lastClickTime = currentTime
    }
  }
}
</script>