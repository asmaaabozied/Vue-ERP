export default {
  state: () => ({
    employees: {},
  }),
  mutations: {
    setEmployees(state, employees) {
      state.employees = employees;
    },
  },
  actions: {
    async fetchEmployees(vuexContext, paramObject) {
      try {
        const employees = await $axios.get(paramObject.URL,{
          params: {
            all: paramObject.all ?? null,
          },
        });
        await vuexContext.commit("setEmployees", employees.data);
      } catch (error) {}
    },

    async storeEmployee(vuexContext, { URL, data }) {
      try {
        document.getElementById("employee-add").disabled = true;

        await $axios.post(URL, data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Employee details have been added",
            "success"
          );
        });
      } catch (error) {
        document.getElementById("employee-add").disabled = false;

        throw error.response.data.errors;
      }
    },
    async getEmployee(vuexContext, paramObject) {
      const employee = await $axios.get(paramObject.URL);
      return employee;
    },
    async updateEmployee(vuexContext, paramObject) {
      try {
        console.log(paramObject);
        await $axios.post(paramObject.URL, paramObject.data).then(() => {
          Swal.fire(
            "Changes Saved",
            "The Employee details have been updated",
            "success"
          );
        });
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteEmployee(vuexContext, URL) {
      try {
        await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return true;
      } catch (error) {
        Swal.fire({
          title: "Warrning",
          text: error.response.data.message,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Now You Know",
        });
        throw error;
      }
    },
  },
  getters: {
    getEmployees(state) {
      return state.employees;
    },
  },
};
