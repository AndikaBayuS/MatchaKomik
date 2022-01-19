<template>
  <Navbar />
  <div class="container mx-auto xl:px-56">
    <div v-for="(chapter, index) in mangaChapter.chapter_image" :key="index">
      <div class="flex justify-center">
          <img :src="chapter.chapter_image_link" />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    let mangaChapter = ref([]);
    const route = useRoute();
    onMounted(() => {
      axios
        .get(
          `http://127.0.0.1:3000/api/chapter/${route.params.endpoint}`
        )
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
