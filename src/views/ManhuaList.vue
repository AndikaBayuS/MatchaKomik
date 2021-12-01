<template>
  <Navbar />
  <div class="container mx-auto">
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
