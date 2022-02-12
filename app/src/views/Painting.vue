<template>
  <div>
    <div class="container has-text-left mb-5">
      <h1 class="title is-3">{{ $route.params.id }}</h1>
      <!-- Todo: Add back to colleciton button -->
    </div>
    <!-- image viewer -->
    <LeafletIiifViewer :infoJson="infoJsonLink" />
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
  },
  created() {
    const artworkId = this.$route.params.id;
    console.log('id', artworkId);
  },
  computed: {
    infoJsonLink() {
      const artworkId = this.$route.params.id;
      return (
        'https://szmoon.github.io/tien-wei-chang-images/images/' +
        artworkId +
        '/info.json'
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
</style>
