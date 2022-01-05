<template>
  <Navbar />
  <div class="container xl:px-56 mx-auto">
    <section class="my-5 px-3 md:p-0">
      <h4 class="text-lg font-semibold mb-5 text-white">SEARCH</h4>
      <div class="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4">
        <div v-for="(search, index) in searchs.manga_list" :key="index">
          <router-link :to="{ name: 'manga.detail', params: { endpoint: search.endpoint }}">
            <div class="rounded overflow-hidden shadow-md w-42 md:w-52 h-auto bg-gray-700">
              <img class="w-full h-52" :src="search.thumb" alt="Thumbnail">
              <div class="px-4 pt-4">
                <div class="font-bold text-xs mb-2 truncate overflow-ellipsis text-white">{{search.title}}</div>
              </div>
              <div class="px-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{{search.type}}</span>
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
import { useRoute } from "vue-router";
import axios from "axios";

import Navbar from '../components/Navbar.vue'

export default {
  name: "Search",
  components: {
    Navbar
  },
  data() {
      return {
        search: ""
      }
  },
  setup() {
    let searchs = ref([]);
    const route = useRoute();

    onMounted(() => {
      axios
        .get(`http://manga-api.teamatcha.my.id/api/search/${route.params.key}`)
        .then((result) => {
          searchs.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    return {
      searchs,
      route
    };
  },
};
</script>