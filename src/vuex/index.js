import { createStore } from 'vuex'

export default createStore({
  strict: false, // 嚴謹模式
  state: {
    isLoading: false
    // loginSuccess: false
  },
  actions: {
    // 負責觸發 mutations
    // 可處理非同步程式（e.g: 打 API）
  },
  mutations: {
    //* 開啟 loading
    OPEN_LOADING (store) {
      store.isLoading = true
    },
    //* 關閉 loading
    CLOSE_LOADING (store) {
      store.isLoading = false
    }
  },
  getters: {
    // 像 computed 一樣，運算處理 state 資料
  },
  modules: {
    // 按需求分拆 module
    // 每個 module 都有自己的state, actions, mutations, getters, modules
  }
})
