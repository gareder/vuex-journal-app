<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10 } })">
    <!-- Title -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">17</span>
      <span class="mx-1 fs-5">Enero</span>
      <span class="mx-2 fw-light">2021 Miércoles</span>
    </div>
    <div class="entry-description">
      Cillum non consequat aliqua laborum Lorem officia pariatur aute culpa dolore et veniam est. Aliqua exercitation aliquip id irure qui nostrud. Magna sit magna consectetur cillum
      dolore et id fugiat cillum Lorem magna nisi.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>