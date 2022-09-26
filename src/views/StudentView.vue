<template>
  <!-- 登入成功(需驗證通過才顯示) -->
  <div v-if="validate">
    <StudentInfo></StudentInfo>
  </div>

  <div v-else class="text-danger">
    <h3>登入失敗</h3>
    <router-link to="/login">點擊此處重新登入</router-link>
  </div>
</template>

<script>
import StudentInfo from '../components/StudentInfo.vue'
export default {
  components: {
    StudentInfo
  },

  data () {
    return {
      validate: false
    }
  },

  watch: {
  },

  methods: {
  },

  mounted () {
  }

}
</script>

<style lang='scss' scope></style>
