<template>
  <router-link
    :to="{
      name: showUrlName,
      params: { id: id },
    }"
    title="show details"
    class="btn btn-sm btn-clean btn-icon btn-icon-md mr-3"
  >
    <li class="la la-eye"></li>
  </router-link>
</template>
<script>
export default {
  name: "show-action",
  props: {
    id: {
      type: Number,
      default: 0,
    },

    showUrlName: {
      type: String,
      default: "/",
    },
  },
};
</script>