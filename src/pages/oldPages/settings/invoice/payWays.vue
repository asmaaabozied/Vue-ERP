<template>
  <div>
    <div class="align-items-center row">
      <div class="col-3 mb-2">
        <div class="checkbox-inline">
          <label class="checkbox checkbox-outline checkbox-outline-2x ">
            <input type="checkbox" name="invoice Acc" />
            <span></span>
            invoice Acc.
          </label>
        </div>
      </div>
      <div class="col-9 mb-2">
        <div class="form-control p-0 has-float-label">
          <select name="" class="form-control " required>
            <option selected>invoice Acc. </option>
          </select>
        </div>
      </div>
    </div>
    <div class="mt-3 position-relative border p-3">
      <div class=" row align-items-end ">
        <h5 class="title-box0 text-capitalize">
          opposite account
        </h5>
        <div class="col-3 mb-2">
          <div class="checkbox-inline">
            <label class="checkbox checkbox-outline checkbox-outline-2x ">
              <input type="checkbox" name="invoice Acc" />
              <span></span>
              account
            </label>
          </div>
        </div>
        <div class="col-9 mb-2">
          <div class="form-control p-0 has-float-label">
            <select name="" class="form-control " required>
              <option selected>
                account
              </option>
            </select>
          </div>
        </div>
        <div class="col-3 mb-2">
          <div class="checkbox-inline">
            <label class="checkbox checkbox-outline checkbox-outline-2x ">
              <input type="checkbox" name="invoice Acc" />
              <span></span>
              caption
            </label>
          </div>
        </div>
        <div class="col-9 mb-2">
          <div class="form-control p-0 has-float-label">
            <select name="" class="form-control " required>
              <option selected>
                caption
              </option>
            </select>
          </div>
        </div>
        <div class="col-3 mb-2">
          <div class="checkbox-inline">
            <label class="checkbox checkbox-outline checkbox-outline-2x ">
              <input type="checkbox" name="invoice Acc" />
              <span></span>
              latin caption
            </label>
          </div>
        </div>
        <div class="col-9 mb-2">
          <div class="form-control p-0 has-float-label">
            <select name="" class="form-control " required>
              <option selected>
                latin caption
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayWays",
};
</script>
