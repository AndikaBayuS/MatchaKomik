<template>
  <div class="container is-max-desktop">
    <section class="mt-5">
      <h4 class="title is-4">Manhua List</h4>
      <div class="columns is-multiline">
        <div
          class="column is-one-quarter"
          v-for="(manhua, index) in manhuas.manga_list"
          :key="index"
        >
          <router-link
            :to="{
              name: 'manga.detail',
              params: { endpoint: manhua.endpoint },
            }"
          >
            <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img :src="manhua.thumb" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  <div class="ellipsis is-ellipsis-1">
                    <p class="has-text-weight-semibold">{{ manhua.title }}</p>
                  </div>
                  <div class="tags mt-2">
                    <span class="tag is-info is-light">{{ manhua.type }}</span>
                    <span class="tag is-primary is-light">{{
                      manhua.chapter
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
  name: "Manhua",
  setup() {
    let manhuas = ref([]);

    onMounted(() => {
      axios
        .get("http://127.0.0.1:3000/api/manhua/1")
        .then((result) => {
          manhuas.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    return {
      manhuas,
    };
  },
};
</script>
