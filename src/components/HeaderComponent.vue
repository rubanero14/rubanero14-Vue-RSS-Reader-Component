<template>
  <div>
    <!-- Header Section -->
    <h1 class="text-light mb-1">
      <strong>RSSFeeder<sup>++</sup></strong>
    </h1>
    <label class="text-light mb-4">
      <strong>
        Powered by
        <i class="fa-brands fa-vuejs"></i>&nbsp;
        <i class="fa-solid fa-rss"></i>&nbsp;
        <i class="fa-brands fa-node-js"></i>
      </strong>
    </label>
    <div class="alert alert-dark" role="alert">
      Add new feed? Submit a
      <a
        target="_blank"
        class="issue btn-sm btn-secondary"
        :href="this.source_code + '/issues'"
        >ticket</a
      >
    </div>
    <a
      v-if="this.tabNav === 0 && this.showSourceCode"
      :href="this.source_code_2"
      class="btn btn-outline-light mb-lg-3 w-100"
      target="_blank"
      ><i class="bi bi-code-slash"></i> Source Code</a
    >
    <button
      data-cy="actions-back-button"
      v-if="this.tabNav > 0"
      @click="$emit('backwardNav', this.isError)"
      class="btn btn-light w-100"
      :disabled="this.isloading"
    >
      <i class="bi bi-arrow-left"></i> Back
    </button>
    <hr class="my-3" size="5" noshade />
  </div>
</template>
<script>
export default {
  data() {
    return {
      source_code: process.env.VUE_APP_SOURCE_CODE,
      source_code_2: process.env.VUE_APP_SOURCE_CODE_2,
    };
  },
  props: [
    "tabNav",
    "isloading",
    "isError",
    "showSourceCode",
    "devActivationCount",
  ],
};
</script>
<style scoped>
.issue {
  text-decoration: none;
}
</style>
