<template>
  <div class="container">
    <div class="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-4">
      <div v-for="(manhwa, index) in manhwas.manga_list" :key="index">
        <router-link :to="{ name: 'manga.detail', params: { endpoint: manhwa.endpoint }}">
          <div class="rounded overflow-hidden shadow-md w-42 md:w-52 h-auto bg-gray-700">
            <img class="w-full h-52" :src="manhwa.thumb_potrait" alt="Thumbnail">
            <div class="px-4 pt-4">
              <div class="font-bold text-xs mb-2 truncate overflow-ellipsis text-white">{{manhwa.title}}</div>
            </div>
            <div class="px-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{{manhwa.chapter}}</span>
              <span class="inline-block bg-red-500 rounded-full px-2 py-1 text-xs font-semibold text-white mr-2 mb-2">UP!</span>
              <br>
              <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{{manhwa.type}}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <PaginationManhwa />
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "Manhwa",
  
  async setup() {
    let manhwas = ref([]);
    const route = useRoute();

    await axios
    .get(`http://127.0.0.1:3000/api/manhwa/${route.params.page}`)
    .then((result) => {
      manhwas.value = result.data;
    })
    .catch((err) => {
      console.log(err.response);
    });

    return {
      manhwas,
    };
  },
};
</script>
