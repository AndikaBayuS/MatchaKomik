<template>
  <Navbar />
  <div class="container xl:px-56 mx-auto">
    <Search />
    <section class="my-5 px-3 md:p-0">
      <h4 class="text-lg font-semibold mb-5 text-white">MANHUA</h4>
      <Suspense>
        <template #default>
          <Manhua />
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
  name: "ManhuaList",
};
</script>
