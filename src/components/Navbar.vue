<template>
  <nav
    class="navbar mb-5 py-3"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isActive }"
        @click="isActive = !isActive"
        aria-label="menu"
        :aria-expanded="isActive"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': isActive }"
    >
      <div class="navbar-start">
        <router-link :to="{ name: 'manga.home' }" class="navbar-item has-text-weight-semibold">
          Home
        </router-link>
        <router-link :to="{ name: 'manhwa.home' }" class="navbar-item has-text-weight-semibold">
          Manhwa
        </router-link>
        <router-link :to="{ name: 'manhua.home' }" class="navbar-item has-text-weight-semibold">
          Manhua
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-dark">
              <strong>Log In</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  data() {
    return {
      isActive: false,
      showNavbar: true,
    };
  },
  setup() {
    let genres = ref([]);
    onMounted(() => {
      axios
        .get("http://127.0.0.1:3000/api/genres")
        .then((result) => {
          genres.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });
    return {
      genres,
    };
  },
};
</script>
