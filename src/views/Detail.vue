<template>
  <div class="container is-max-desktop">
    <Navbar />
    <article class="media">
      <figure class="media-left">
        <div class="image mr-3">
          <img :src="mangaDetail.thumb" />
        </div>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ mangaDetail.title }}</strong>
            <br />
            {{ mangaDetail.synopsis }}
          </p>
          <div class="level-left">
            <div v-for="genre in mangaDetail.genre_list" :key="genre">
              <span class="level-item tag is-dark mr-2">{{
                genre.genre_name
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
    <div class="columns is-multiline mt-5">
      <div
        class="column is-one-fifth"
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
        .get(`http://127.0.0.1:3000/api/manga/detail/${route.params.endpoint}`)
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
