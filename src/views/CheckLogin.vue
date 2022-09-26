<template>
  <div class="center-center">
    <!-- 登入成功(需驗證通過才顯示) -->
    <template v-if="loginSuccess">
      <h2 class="text-success">恭喜你!!登入成功!!!</h2>
      <ul>
        <li class="fs-3">
          <router-link to="/checkLogin/loginPage1">頁面 A</router-link>
        </li>
        <li class="fs-3">
          <router-link to="/checkLogin/loginPage2">頁面 B</router-link>
        </li>
        <li class="fs-3">
          <button type="button" @click="deleteCookie">刪除 cookie</button>
        </li>
      </ul>
      <router-view></router-view>
    </template>

    <!-- 登入失敗 -->
    <div v-else class="text-danger">
      <h3>登入失敗</h3>
      <router-link to="/login">點擊此處重新登入</router-link>
    </div>
  </div>

  <IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
  },

  data () {
    return {
      loginSuccess: false
    }
  },

  computed: {
    ...mapState(['isLoading'])
  },

  methods: {
    //* 檢查登入狀態
    checkLogin () {
      //* 取出 token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )

      if (token) {
        this.$store.commit('OPEN_LOADING')

        //* axios 預設帶入 token 就不用每次都要帶 headers: { Authorization: token } 了
        this.$http.defaults.headers.common.Authorization = token
        const api = `${process.env.VUE_APP_LOGIN_API}/api/user/check`
        this.$http
          .post(api)
          .then((res) => {
            console.log(res)
            this.loginSuccess = true
            this.$store.commit('CLOSE_LOADING')
          })
          .catch((err) => {
            console.log(err)
            this.$store.commit('CLOSE_LOADING')
          })
      }
    },
    //* 刪除 cookie
    deleteCookie () {
      function setCookie (cname, cvalue, exdays) {
        const d = new Date()
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
        const expires = 'expires=' + d.toUTCString()
        document.cookie = cname + '=' + cvalue + '; ' + expires
      }

      setCookie('loginToken', '', -1)
    }
  },

  mounted () {
    this.checkLogin()
  }

}
</script>

<style lang='scss' scope>
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
