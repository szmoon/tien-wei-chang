<template>
  <div>
    <Hero heading="A collection of paintings by Tien-Wei Chang" />
    <!-- <div class="container has-text-left mb-5">
      <div class="container">
        <h1 class="title is-3">Gallery</h1>
        <p class="subtitle is-5">
          all paintings
        </p>
      </div>
    </div> -->
    <!-- gallery -->
    <div class="columns is-multiline">
      <div
        v-for="art in allArtwork"
        :key="art.id"
        class="column is-one-quarter-desktop is-half-tablet"
      >
        <router-link :to="{ name: 'painting', params: { id: art.id } }">
          <div class="card">
            <div class="card-image">
              <figure class="image">
                <img :src="art.thumbnail" alt="" />
              </figure>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Hero from '../components/Hero';
import { infoJsonLinks } from '../../iiif-images';

export default {
  name: 'About',
  data() {
    return { allArtwork: [] };
  },
  components: { Hero },
  mounted() {
    infoJsonLinks.forEach(infoJson => {
      $.getJSON(infoJson, data => {
        const artworkData = {
          id: this.getShortId(data),
          thumbnail: this.getThumbnail(data)
        };
        this.allArtwork.push(artworkData);
      });
    });
  },
  methods: {
    getShortId(infoJsonData) {
      const fullId = infoJsonData['@id'];
      const idParts = fullId.split('/');
      return idParts[idParts.length - 1];
    },
    getThumbnail(infoJsonData) {
      const width = infoJsonData.sizes[2].width;
      const fullId = infoJsonData['@id'];

      const thumbnailUrl = fullId + '/full/' + width + ',/0/default.jpg';

      return thumbnailUrl;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
</style>
