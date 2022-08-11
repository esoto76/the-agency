import { defineStore } from "pinia";

export const useMainStore = defineStore({
  id: "main",
  state: () => ({
    title: "real estate and property management",
  }),
});
