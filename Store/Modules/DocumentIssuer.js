import router from "../../src/router";

const url = `document-issuer`;
export default {
    state: () => ({
        DocumentIssuer: {},
    }),

    mutations: {
        setDocumentIssuer(state, DocumentIssuer) {
            state.DocumentIssuer = DocumentIssuer;
        },
    },
    actions: {


        async fetchDocumentIssuer(vuexContext) {
            try {
                const DocumentIssuer = await $axios.get(`${url}`);
                await vuexContext.commit("setDocumentIssuer", DocumentIssuer.data);
            } catch (error) {
            }
        },

        async getDocumentIssuer(vuexContext, param) {
            return await $axios.get(`${url}/${param.Id}`);
        },
        async storeDocumentIssuer(vuexContext, {data}) {

            document.getElementById("DocumentIssuer-add").disabled = true;
            await $axios.post(`${url}`, data).then((res) => {
                if (res.data.status == 422) {
                    document.getElementById("DocumentIssuer-add").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({name: "DocumentIssuer"});
                    vuexContext.dispatch("swalAddSuccess", "saved");
                }
            });
        },

        async getDocumentIssuerCode(vuexContext) {
            return await $axios.get(`${url}/code`);
        },


        async deleteDocumentIssuer(vuexContext, id) {

            await $axios.delete(`${url}/${id}`).then((res) => {
                console.log(res.data);
                if (res.data.status == 500) {

                    Swal.fire({
                        title: "Warrning",
                        text: res.data.message,
                        confirmButtonColor: "#3085d6",
                        confirmButtonText: "ok",
                    });
                    throw res.data.errors;
                } else {
                    vuexContext.dispatch("swalAddSuccess", "Deleted");
                }
            });


        },
        async updateDocumentIssuer(vuexContext, param) {
            document.getElementById("DocumentIssuer-update").disabled = true;
            await $axios.patch(`${url}/${param.Id}`, param.data).then((res) => {
                if (res.data.status == 422) {
                    document.getElementById("DocumentIssuer-update").disabled = false;
                    throw res.data.errors;
                } else {
                    router.push({name: "DocumentIssuer"});
                    vuexContext.dispatch("swalAddSuccess", "saved");
                }
            });
        },


    },
    getters: {
        getDocumentIssuer(state) {
            return state.DocumentIssuer;
        },
    },
};