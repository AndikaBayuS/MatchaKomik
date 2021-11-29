<template>
  <div class="container is-max-desktop">
    <Navbar />
    <RecManga />
    <LatestManga />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/Carousel.vue";
import RecManga from "../components/content/PopularManga.vue";
import LatestManga from "../components/content/LatestManga.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Carousel,
    RecManga,
    LatestManga,
  },
};
</script>
