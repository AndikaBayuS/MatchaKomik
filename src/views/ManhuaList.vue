<template>
  <div class="container is-max-desktop">
    <Navbar />
    <Manhua />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Manhua from "../components/content/Manhua.vue";

export default {
  name: "ManhwaList",
  components: {
    Navbar,
    Manhua,
  },
};
</script>