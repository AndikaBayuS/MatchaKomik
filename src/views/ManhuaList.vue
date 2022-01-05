<template>
  <Navbar />
  <div class="container mx-auto">
    <Search />
    <Manhua />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Search from "../components/Search.vue";
import Manhua from "../components/content/Manhua.vue";

export default {
  name: "ManhwaList",
  components: {
    Navbar,
    Search,
    Manhua,
  },
};
</script>
