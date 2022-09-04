import { defineStore } from "pinia";
export const useUserStore = defineStore<any,any>({

  // // 开启数据持久化
  // persist: false,
  id: "user",
  state: () => ({
    name: "user",
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