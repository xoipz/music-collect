import { defineStore } from "pinia";
export const useAppStore = defineStore({

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