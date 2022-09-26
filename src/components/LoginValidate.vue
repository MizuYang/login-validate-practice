<template>
  <!-- 登入欄位 -->
  <form class="center-center">
    <section class="border w-50 p-5 pb-0">
      <h2>登入</h2>
      <label for="account">帳號</label>
      <input type="text" id="account" class="form-control mb-2">

      <label for="password">密碼</label>
      <input type="text" id="password" class="form-control">

      <div class="mt-3 mb-5">
        <button class="btn btn-primary w-100 mb-2">登入</button>
        <button class="btn btn-secondary w-100">取消</button>
      </div>
    </section>

  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
$w: 50%;
$h: 50%;
.center-center {
  width: $w;
  height: $h;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25%,-50%);
}
</style>
