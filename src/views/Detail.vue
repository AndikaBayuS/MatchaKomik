<template>
  <Navbar />
  <div class="container lg:px-56">
    <div class="columns">
      <div class="column is-one-quarter">
        <div class="image is-2by3">
          <img :src="mangaDetail.thumb" />
        </div>
      </div>
      <div class="column">
        <p>
          <strong>{{ mangaDetail.title }}</strong>
          <br />
          {{ mangaDetail.synopsis }}
        </p>
        <div class="level is-mobile">
          <div class="level-left">
            <div v-for="genre in mangaDetail.genre_list" :key="genre">
              <span class="level-item tag is-dark mr-2">{{
                genre.genre_name
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline mt-5 is-mobile is-fluid">
      <div
        class="column is-one-fifth-desktop is-one-third-mobile"
        v-for="(chapter, index) in mangaDetail.chapter"
        :key="index"
      >
        <div class="card">
          <router-link
            class="card-content"
            :to="{
              name: 'manga.chapter',
              params: { endpoint: chapter.chapter_endpoint },
            }"
          >
            <p class="title is-6 ml-5">
              {{ chapter.chapter_title }}
            </p>
          </router-link>
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
    let mangaDetail = ref([]);
    const route = useRoute();
    onMounted(() => {
      axios
        .get(
          `http://manga-api.teamatcha.my.id/api/manga/detail/${route.params.endpoint}`
        )
        .then((result) => {
          mangaDetail.value = result.data;
        })
        .catch((err) => {
          console.log(err.result);
        });
    });
    return {
      mangaDetail,
      route,
    };
  },
};
</script>
