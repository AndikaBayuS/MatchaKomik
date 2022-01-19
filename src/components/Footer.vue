<template>
<footer>
    <div class="justify-center p-4 flex text-white bg-gray-900">
        Made with <span><HeartIcon class="h-5 w-5 mx-2" /></span> using Vue3 & Tailwind
  </div>
</footer>
</template>

<script>
import { HeartIcon } from "@heroicons/vue/solid"
export default {
    components: {
        HeartIcon
    }
}
</script>

<style>

</style>