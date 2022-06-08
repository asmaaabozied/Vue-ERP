<template>
  <div class="contaier">
    <div class="row">
      <div class="col-5 pt-40">
        <h1 class="font-weight-bold" style="font-size: 5rem">
          {{ $t("Oops") }},<br />
          <span class="text-primery" style="color: #f5ab1c">{{
            $t("nothing")
          }}</span>
          {{ $t("here...") }}
        </h1>
        <p class="sub-text">
          {{ $t("message_error404") }}
        </p>
        <a
          @click="$router.go(-1)"
          class="btn btn-primary font-size-h6 mt-10 text-capitalize w-50"
          >{{ $t("go_back") }}</a
        >
      </div>
      <div class="col-7">
        <img :src="url" width="80%" height="100%" class="d-block m-auto p-5" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "404Error",
  data() {
    return {
      url: "assets/404/404.png",
    };
  },
};
</script>
