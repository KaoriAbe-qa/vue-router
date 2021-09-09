<template>
  <body>
  <div class="about">
    <p>これはAboutのページです</p>
    <p>showMsg()メソッドの表示確認：{{ showMsg() }}</p>
    <p>msgの表示確認：{{ msg }}</p>
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