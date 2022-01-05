<template>
    <div class="container mx-auto">
        <div class="sm:hidden relative my-5 mx-3 inset-y-0 right-0 flex items-center pr-2 sm:block sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div class="flex bg-gray-900 p-2 w-full space-x-4 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 opacity-30 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input class="bg-gray-900 text-gray-100 outline-none" v-model="search" type="text" placeholder="Cari Komik" @keyup.enter="this.$router.replace({name: 'manga.search', params:{ key: this.search}}); $forceUpdate" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Search",
  data() {
      return {
          search: ""
      }
  }
};
</script>                                                         v 