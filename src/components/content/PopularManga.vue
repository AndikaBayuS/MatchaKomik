<template>
  <div class="container xl:px-56">
    <section class="my-5 px-3 md:p-0">
      <h4 class="text-lg font-semibold mb-5 text-white">TOP COMICS</h4>
      <Carousel :itemsToShow="2" :breakpoints="breakpoints" :transition="100">
        <Slide v-for="(recommended, index) in recommendeds.manga_list" :key="index">
          <div class="rounded overflow-hidden shadow-md w-42 md:w-48 h-auto bg-gray-700 text-left mx-2">
            <img class="w-full h-52" :src="recommended.thumb" alt="Thumbnail">
              <router-link :to="{ name: 'manga.detail', params: { endpoint: recommended.endpoint }}">
                <div class="px-4 pt-4">
                  <div class="font-bold text-xs mb-2 truncate overflow-ellipsis text-white">{{recommended.title}}</div>
                </div>
              </router-link>
            <div class="px-4 pb-2 inline-block">
              <span class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2">{{recommended.chapter}}</span>
              <span class="inline-block bg-red-500 rounded-full px-2 py-1 text-xs font-semibold text-white mb-2">UP!</span>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    breakpoints: {
      700: {
        itemsToShow: 3.5
      },
      1024: {
        itemsToShow: 4
      },
      1536: {
        itemsToShow: 4.5
      },
      1600: {
        itemsToShow: 5.5
      }
    }
  }),
  setup() {
    let recommendeds = ref([]);

    onMounted(() => {
      axios
        .get("http://manga-api.teamatcha.my.id/api/manga/popular")
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
});
</script>
<style>
.carousel__pagination-button {
  background-color: gray;
}

.carousel__pagination-button--active {
  background-color: white;
}

.carousel__slide--visible {
  transform: rotateY(0);
}
</style>
