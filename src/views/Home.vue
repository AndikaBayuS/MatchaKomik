<template>
  <Navbar />
  <div class="container xl:px-56 mx-auto">
    <section class="my-5 px-3 md:p-0">
      <Search />
      <h4 class="text-lg font-semibold mb-5 text-white">TOP COMICS</h4>
      <Suspense>
        <template #default>
          <PopularManga />
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>

      <h4 class="text-lg font-semibold mb-5 text-white">NEW RELEASE</h4>
      <Suspense>
        <template #default>
          <LatestManga />
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </section>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
