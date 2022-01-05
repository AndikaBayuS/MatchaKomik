<template>
  <Navbar />
  <div class="container mx-auto">
    <Search />
    <Manhwa />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Search from "../components/Search.vue";
import Manhwa from "../components/content/Manhwa.vue";

export default {
  name: "ManhwaList",
  components: {
    Navbar,
    Search,
    Manhwa,
  },
};
</script>
