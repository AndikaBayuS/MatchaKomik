<template>
  <Navbar />
  <div class="container mx-auto">
    <Search />
    <PopularManga />
    <LatestManga />
    <Pagination />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Search from "../components/Search.vue";
import Pagination from "../components/pagination/Pagination.vue";
import PopularManga from "../components/content/PopularManga.vue";
import LatestManga from "../components/content/LatestManga.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Search,
    PopularManga,
    LatestManga,
    Pagination
  },
};
</script>
