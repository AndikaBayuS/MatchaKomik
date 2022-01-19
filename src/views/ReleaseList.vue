<template>
  <Navbar />
  <div class="container xl:px-56 mx-auto">
    <section class="my-5 px-3 md:p-0">
      <h4 class="text-lg font-semibold mb-5 text-white">KOMIK TERUPDATE</h4>
      <Suspense>
        <template #default>
          <ReleaseManga />
        </template>
        <template #fallback>
          <Loading />
        </template>
      </Suspense>
    </section>
  </div>
  <Footer />
</template>
<script>
export default {
  name: "ReleaseList",
};
</script>
