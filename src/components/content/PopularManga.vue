<template>
  <div class="container is-max-desktop">
    <section class="mt-5">
      <h4 class="title is-4">Recommended Manga</h4>
      <div class="columns is-multiline">
        <div
          class="column is-half"
          v-for="(recommended, index) in recommendeds.manga_list"
          :key="index"
        >
          <router-link
            :to="{
              name: 'manga.detail',
              params: { endpoint: recommended.endpoint },
            }"
          >
            <div class="card is-horizontal">
              <div class="card-image">
                <figure class="image is-3y4">
                  <img :src="recommended.thumb" />
                </figure>
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <div class="content">
                    <div class="ellipsis is-ellipsis-1">
                      <p class="has-text-weight-semibold">
                        {{ recommended.title }}
                      </p>
                    </div>
                    <div class="tags mt-2">
                      <span class="tag is-info is-light">Manga / Manhwa</span>
                      <span class="tag is-primary is-light">{{
                        recommended.chapter
                      }}</span>
                    </div>
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
  name: "RecommendedManga",
  setup() {
    let recommendeds = ref([]);

    onMounted(() => {
      axios
        .get("http://127.0.0.1:3000/api/manga/popular")
        .then((result) => {
          recommendeds.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    return {
      recommendeds,
    };
  },
};
</script>
