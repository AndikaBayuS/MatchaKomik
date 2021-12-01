<template>
  <div class="container xl:px-56">
    <section class="my-5 px-3 md:p-0">
      <h4 class="text-lg font-semibold mb-5 text-white">MANHWA LIST</h4>
      <div class="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-3">
        <div v-for="(manhwa, index) in manhwas.manga_list" :key="index">
          <router-link :to="{ name: 'manga.detail', params: { endpoint: manhwa.endpoint }}">
            <div class="rounded overflow-hidden shadow-md w-42 md:w-52 h-auto bg-gray-700">
              <img class="w-full h-52" :src="manhwa.thumb" alt="Thumbnail">
              <div class="px-4 pt-4">
                <div class="font-bold text-base mb-2 truncate overflow-ellipsis text-white">{{manhwa.title}}</div>
              </div>
              <div class="px-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{{manhwa.chapter}}</span>
                <span class="inline-block bg-red-500 rounded-full px-2 py-1 text-xs font-semibold text-white mr-2 mb-2">NEW!</span>
                <br>
                <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{{manhwa.type}}</span>
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
  name: "Manhwa",
  setup() {
    let manhwas = ref([]);

    onMounted(() => {
      axios
        .get("http://manga-api.teamatcha.my.id/api/manhwa/1")
        .then((result) => {
          manhwas.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    return {
      manhwas,
    };
  },
};
</script>
