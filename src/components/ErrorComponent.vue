<template>
  <!-- Error Output Section -->
  <Transition name="card-fade" appear mode="out-in">
    <div class="text-danger" v-if="this.isError && this.tabNav === 2">
      <Transition name="fade" appear mode="out-in">
        <p v-if="!this.data.includes('403')">
          {{ this.data }} Try reloading again...
        </p>
        <div v-else class="row">
          <div class="col-12">
            <h2 class="text-danger mb-3">{{ this.data.replace(",", "!") }}</h2>
            <img class="err" src="err.png" />
            <figcaption class="mb-3">
              Figure 1 - Click <span>Enable Access</span> button below to open
              this page
            </figcaption>
            <ol type="1" class="text-start text-light">
              <li>
                Click <strong class="text-success">Enable Access</strong> button
                below
              </li>
              <li>
                When new window pops up, click
                <strong class="text-success"
                  >Request temporary access to the demo server</strong
                >
                button as per figure above.
              </li>
              <li>
                Close that window and back to
                <span class="text-light"><strong>RSS Feed</strong></span> page
                and start browsing for articles
              </li>
            </ol>
          </div>
          <div class="col-12">
            <a
              @click="$emit('backwardNav')"
              :href="this.cors_link"
              class="btn btn-success w-100"
              target="_blank"
            >
              <i class="bi bi-hdd-rack"></i>
              Enable Access
            </a>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
<script>
export default {
  data() {
    return {
      cors_link:
        process.env.VUE_APP_CORS_LINK +
        "accessRequest=01a082fe9409ff8c6c2e76a853281642569c12198c0358fadbbe4a03321d2fd7",
    };
  },
  props: ["data", "tabNav", "isError"],
};
</script>
<style scoped>
.err {
  width: 100%;
  border: 1px solid #f7485a;
}
</style>
