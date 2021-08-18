<template>
  <body>
  <div class="about">
    <p>showMsg()：{{ showMsg() }}</p>
    <p>msg：{{ msg }}</p>
  </div>
  </body>  
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World !!"
    }
  },
  methods: {
    showMsg() {
      return this.msg
    }
  }
}
</script>

<style>
</style>