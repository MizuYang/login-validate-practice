<template>
  <div class="center-center">
    <!-- 登入成功(需驗證通過才顯示) -->
    <div v-if="loginSuccess">
      <StudentInfo></StudentInfo>
    </div>
    <div v-else class="text-danger">
      <h3>登入失敗</h3>
      <router-link to="/login">點擊此處重新登入</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StudentInfo from '../components/StudentInfo.vue'
export default {
  components: {
    StudentInfo
  },

  data () {
    return {
      // validate: false
    }
  },

  computed: {
    ...mapState(['loginSuccess'])
  },

  methods: {
  },

  mounted () {
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
