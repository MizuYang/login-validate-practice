<template>
  <!-- 登入欄位 -->
  <form class="center-center" @submit.prevent="sendLoginForm">
    <section class="border w-50 p-5 pb-0">
      <h2>登入</h2>
      <label for="account">帳號</label>
      <input type="text" id="account" class="form-control" v-model="userLoginForm.username">
      <i ref="username" class="text-danger"></i>
      <br />

      <label for="password">密碼</label>
      <input type="password" id="password" class="form-control" v-model="userLoginForm.password">
      <i ref="password" class="text-danger"></i>
      <br />

      <div class="mt-3 mb-5">
        <button class="btn btn-primary w-100 mb-2" type="submit">登入</button>
        <button class="btn btn-secondary w-100">取消</button>
      </div>
    </section>

  </form>

  <IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      userLoginForm: {
        username: '',
        password: ''
      },
      i18n: {
        account: '帳號',
        password: '密碼'
      }
    }
  },

  computed: {
    ...mapState(['isLoading'])
  },

  methods: {
    //* 按下登入按紐
    async sendLoginForm () {
      //* 驗證欄位是否有填寫
      if (this.validate()) {
        await this.login()
      }
    },
    //* 驗證欄位
    validate () {
      let result = ''
      const objVal = Object.values(this.userLoginForm)
      //* 如果只填寫一個欄位則中斷
      if (objVal.length < 2) {
        this.unfilledFeedback()
        result = false
      } else {
        this.clearUnfilledFeedback()
        result = true
        //* 如果帳密填寫完又刪掉，一樣回饋錯誤
        objVal.forEach(item => {
          if (item === '') {
            this.unfilledFeedback()
            result = false
          }
        })
      }
      return result
    },
    //* 未填寫回饋
    unfilledFeedback () {
      Object.keys(this.userLoginForm).forEach(item => {
        if (!this.userLoginForm[item]) {
          this.$refs[item].textContent = `${this.i18n[item]} 欄位尚未填寫`
        }
      })
    },
    //* 清除未填寫回饋
    clearUnfilledFeedback () {
      Object.keys(this.userLoginForm).forEach(item => {
        if (this.userLoginForm[item]) {
          this.$refs[item].textContent = ''
        }
      })
    },
    login () {
      return new Promise((resolve, reject) => {
        this.$store.commit('OPEN_LOADING')

        const api = `${process.env.VUE_APP_LOGIN_API}/admin/signin`
        console.log(api)
        this.$http.post(api, this.userLoginForm)
          .then(res => {
            this.$store.commit('CLOSE_LOADING')
            console.log(res)
          })
          .catch(err => {
            this.$store.commit('CLOSE_LOADING')
            console.log(err)
            this.loginFailFeedback()
          })
        resolve()
      })
    },
    // //* 登入帳密錯誤回饋
    // loginSuccessFeedback () {

    // },
    //* 登入失敗回饋
    loginFailFeedback () {

    }
  },

  mounted () {
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
