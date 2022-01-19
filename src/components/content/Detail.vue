<template>
  <div class="container">
    <div class="max-w-md bg-gray-700 rounded shadow-md overflow-hidden md:max-w-full mt-5">
      <div class="md:flex">
        <div class="p-12 md:p-2 md:flex-shrink-0">
            <img class="w-full object-cover md:w-48 rounded" :src="mangaDetail.thumb" alt="Thumbnail">
        </div>
        <div class="p-8">
            <p class="uppercase tracking-wide leading-relaxed text-xl text-white font-bold">{{mangaDetail.title}}</p>
            <p class="block mt-2 text-lg leading-tight font-medium text-white">{{mangaDetail.author}}</p>
            <p class="block mt-2 text-lg leading-tight font-medium text-white">{{mangaDetail.type}} / {{mangaDetail.status}}</p>
            <div v-for="genre in mangaDetail.genre_list" :key="genre" class="inline-block mt-2">
            <span class="text-white px-2 font-medium bg-gray-500 rounded py-0.5 mr-2">{{genre.genre_name}}</span>
            </div>
            <div class="mt-3">
            <Disclosure v-slot="{ open }">
                <DisclosureButton
                class="flex justify-between max-w-full px-4 py-2 text-md font-medium text-left bg-gray-600 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                >
                <p class="text-white">Sinopsis</p>
                <ChevronDownIcon
                    :class="open ? 'transform rotate-180' : ''"
                    class=" ml-5 w-5 h-5 text-white"
                />
                </DisclosureButton>
                <DisclosurePanel>
                <p class="text-white leading-relaxed text-justify mt-5">{{ mangaDetail.synopsis }}</p>
                </DisclosurePanel>
            </Disclosure>
            </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-700 rounded shadow-md overflow-hidden md:max-w-full mt-5">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3 p-5">
          <div v-for="(chapter, index) in mangaDetail.chapter" :key="index">
            <div class="p-4 bg-gray-600 rounded">
              <router-link :to="{name: 'manga.chapter', params: { endpoint: chapter.chapter_endpoint }}">
                <p class="text-white font-semibold ml-5">
                  {{ chapter.chapter_title }}
                </p>
              </router-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { ChevronDownIcon } from '@heroicons/vue/solid'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue'

export default {
  components: {
    Disclosure, 
    DisclosureButton, 
    DisclosurePanel,
    ChevronDownIcon
  },
  async setup() {
    let mangaDetail = ref([]);
    const route = useRoute();

    await axios
    .get(
      `http://127.0.0.1:3000/api/manga/detail/${route.params.endpoint}`
    )
    .then((result) => {
      mangaDetail.value = result.data;
    })
    .catch((err) => {
      console.log(err.result);
    });
    
    return {
      mangaDetail,
      route,
    };
  },
};
</script>
