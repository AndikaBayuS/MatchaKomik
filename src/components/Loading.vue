<template>
  <div class="container vld-parent my-5">
    <div class=" flex justify-center">
      <loading
        :active="true"
        :can-cancel="false"
        :is-full-page="false"
        :color="loadingColor"
      ></loading>
    </div>
  </div>
</template>

<script>
import  Loading from 'vue3-loading-overlay';

export default {
  data() {
    return {
      loadingColor: "#FFF"
    }
  },
  components: {
      Loading,
  }
};
</script>

<style>
</style>