<template>
  <!-- 登入元件 -->
  <LoginValidate></LoginValidate>

  <IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
import LoginValidate from '../components/LoginValidate.vue'
export default {
  components: {
    LoginValidate
  },

  data () {
    return {
      isLoading: false
    }
  },

  mounted () {
    // this.isLoading = true
    // this.$http.get('https://randomuser.me/api/')
    //   .then(res => {
    //     console.log(res)
    //     this.isLoading = false
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }
}
</script>
