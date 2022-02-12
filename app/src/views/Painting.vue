<template>
  <div>
    <!-- Todo: use fontawesome here? https://bulma.io/documentation/elements/button/ -->
    <div class="container has-text-left mb-5">
      <button class="button is-primary is-outlined is-small">
        <!-- change this to last page in history, once pagination is added? -->
        <router-link :to="{ name: 'gallery' }">
          <span>&lt; Back to Collection</span>
        </router-link>
      </button>
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
