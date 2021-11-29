<template>
  <div class="container is-max-desktop">
    <Navbar />
    <div v-for="(chapter, index) in mangaChapter.chapter_image" :key="index">
      <div class="level">
        <div class="level-item has-text-centered">
          <img :src="chapter.chapter_image_link" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  setup() {
    let mangaChapter = ref([]);
    const route = useRoute();
    onMounted(() => {
      axios
        .get(`http://127.0.0.1:3000/api/chapter/${route.params.endpoint}`)
        .then((result) => {
          mangaChapter.value = result.data;
        })
        .catch((err) => {
          console.log(err.result);
        });
    });
    return {
      mangaChapter,
      route,
    };
  },
};
</script>
