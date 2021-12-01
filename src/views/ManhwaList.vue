<template>
  <Navbar />
  <div class="container mx-auto">
    <Manhwa />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Manhwa from "../components/content/Manhwa.vue";

export default {
  name: "ManhwaList",
  components: {
    Navbar,
    Manhwa,
  },
};
</script>
