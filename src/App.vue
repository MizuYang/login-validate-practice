<template>
  <div class="container">
    <nav>
      <router-link to="/login">登入頁面</router-link> |
      <router-link to="/student">學生頁面(需登入)</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/stylesheets/all.scss";
</style>
