import { defineStore } from "pinia";
export const useAppStore = defineStore({

  // 开启数据持久化
  persist: false,
  id: "user",
  state: () => ({
    name: "",
    id: -1
  }),
  
  getters: {
    getUserName() {
      return this.name;
    },
    getId() {
      return this.id;
    }
  },
  actions: {

  }
});