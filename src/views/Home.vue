<template>
  <Navbar />
  <div class="container mx-auto">
    <PopularManga />
    <LatestManga />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import PopularManga from "../components/content/PopularManga.vue";
import LatestManga from "../components/content/LatestManga.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    PopularManga,
    LatestManga,
  },
};
</script>
