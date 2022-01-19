<template>
  <Navbar />
  <div class="container mx-auto xl:px-56">
    <Suspense>
      <template #default>
        <Detail />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
  <Footer />
</template>

<script>
export default {}
</script>

<style>

</style>