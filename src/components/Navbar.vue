<template>
  <Disclosure as="nav" class="bg-gray-900" v-slot="{ open }">
    <div class="px-2 container mx-auto sm:px-6 xl:px-56">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
            <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link v-for="item in navigation" :key="item.name" :to="{name: item.href, params: {page: item.page}}" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{ item.name }}</router-link>
            </div>
          </div>
        </div>
        <!-- Search -->
        <div class="hidden absolute inset-y-0 right-0 flex items-center pr-2 sm:block sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="flex bg-gray-800 p-2 w-72 space-x-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input class="bg-gray-800 text-gray-100 outline-none" v-model="search" type="text" placeholder="Cari Komik" @keyup.enter="this.$router.push({name: 'manga.search', params:{ key: this.search}})" />
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link v-for="item in navigation" :key="item.name" :to="{name: item.href, params: {page: item.page}}" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { SearchIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Home', href: 'manga.home' },
  { name: 'Manhua', href: 'manhua.page', page: 1 },
  { name: 'Manhwa', href: 'manhwa.page', page: 1 },
]


export default {
    components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    SearchIcon,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      isActive: false,
      showNavbar: true,
      search: ""
    };
  },
  setup() {
    let genres = ref([]);
    onMounted(() => {
      axios
        .get("http://manga-api.teamatcha.my.id/api/genres")
        .then((result) => {
          genres.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });
    return {
      genres,
      navigation
    };
  },
};
</script>
