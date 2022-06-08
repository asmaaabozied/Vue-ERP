import router from "@/router";
const url = `employees`;
export default {
  state: () => ({
    employees: [],
  }),

  mutations: {
    setTempEmployees(state, employees) {
      state.employees = employees;
    },
  },
  actions: {
    /**
     *
     * return all warehouse
     */
    async fetchEmployees(vuexContext) {
      try {
        const employees = await $axios.get(`${url}`);
        await vuexContext.commit("setTempEmployees", employees.data);
      } catch (error) {}
    },
  },
  getters: {
    getTempEmployees(state) {
      return state.employees;
    },
  },
};
