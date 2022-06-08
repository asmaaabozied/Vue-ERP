<template>
  <router-link
    :to="{
      name: editUrlName,
      params: { id: id },
    }"
    title="Edit details"
    class="btn btn-sm btn-clean btn-icon btn-icon-md mr-3"
  >
    <li class="la la-edit la-lg"></li>
  </router-link>
</template>
<script>
export default {
  name: "edit-action",
  props: {
    id: {
      type: Number,
      default: 0,
    },

    editUrlName: {
      type: String,
      default: "/",
    },
  },
};
</script>