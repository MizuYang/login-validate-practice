<template>
  <div class="container">
    <nav>
      <router-link to="/login">登入頁面</router-link> |
      <router-link to="/checkLogin">檢查登入狀態</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
