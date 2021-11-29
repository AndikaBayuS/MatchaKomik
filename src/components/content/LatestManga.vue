<template>
  <div class="container is-max-desktop">
    <section class="mt-5">
      <h4 class="title is-4">Latest Update</h4>
      <div class="columns is-multiline">
        <div
          class="column is-one-quarter"
          v-for="(manga, index) in mangas.manga_list"
          :key="index"
        >
          <router-link
            :to="{ name: 'manga.detail', params: { endpoint: manga.endpoint } }"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="manga.thumb" />
                  <span class="tag">All</span>
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <div class="ellipsis is-ellipsis-1">
                    <p class="has-text-weight-semibold">{{ manga.title }}</p>
                  </div>
                  <div class="tags mt-2">
                    <span class="tag is-info is-light">{{ manga.type }}</span>
                    <span class="tag is-primary is-light">{{
                      manga.chapter
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import axios from "axios";

export default {
  name: "LatestManga",
  setup() {
    let mangas = ref([]);

    onMounted(() => {
      axios
        .get("http://127.0.0.1:3000/api/manga/page/1")
        .then((result) => {
          mangas.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    return {
      mangas,
    };
  },
};
</script>
