<template>
    <div class="container xl:px-56 flex justify-center">
        <div class="bg-gray-700 p-2 m-2 rounded">
            <VPagination
                v-model="page"
                :pages="99"
                :range-size="1"
                active-color="#FFF"
                @update:modelValue="updateHandler; this.$router.replace({name: 'manhua.page', params:{ page: this.page}})"
            />
        </div>
    </div>
</template>

<script>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
    data() {
        return {
            page: parseInt(this.$route.params.page)
        }
    },
    components: {
        VPagination
    },
    methods: {
        updateHandler(value) {
            this.page = value
        }
    }
}
</script>
