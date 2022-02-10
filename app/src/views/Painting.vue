<template>
  <div>
    <div class="container has-text-left mb-5">
      <h1 class="title is-3">Single Painting View</h1>
      <p class="subtitle is-5">
        Uses pre-generated tiles and static web hosting
      </p>
    </div>
    <!-- image viewer -->
    <LeafletIiifViewer
      infoJson="https://szmoon.github.io/iiif-exploration/static-tiles/B01-N01/info.json"
    />
    <!-- demo info -->
    <div class="container has-text-left mt-5">
      <h2 class="title is-5">About</h2>
      <p>
        Text here
      </p>
    </div>
  </div>
</template>

<script>
import LeafletIiifViewer from '../components/LeafletIiifViewer';
export default {
  name: 'Painting',
  components: {
    LeafletIiifViewer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
</style>
