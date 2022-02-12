<template>
  <div>
    <!-- <h1 class="title is-3">The Artwork of Tien-Wei Chang</h1> -->
    <div class="columns">
      <div class="column">
        <div class="box has-text-left">
          <p class="title is-5">Flexible column</p>
          <p class="subtitle">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p class="subtitle">
            Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </div>

      <div class="column is-one-half">
        <img src="../assets/images/chang-tien-wei-1.jpeg" />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from '../components/Hero';

export default {
  name: 'Home',
  components: { Hero }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
.hero {
  background-color: #fefefe;

  background-image: linear-gradient(
      4deg,
      rgba(255, 255, 255, 0.2861519607843137) 0%,
      rgba(2, 0, 36, 0.36458333333333337) 100%
    ),
    url('https://szmoon.github.io/tien-wei-chang-images/images/B09-N01/full/2842,/0/default.jpg');
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.hero-foot {
  display: flex;
  justify-content: center;

  @include from($desktop) {
    justify-content: flex-start;
  }
}

.heading-container {
  padding: 15px 25px;
  background-color: rgba(134, 32, 66, 0.6);
  width: max-content;

  @include from($desktop) {
    text-align: left;
  }
}

.box {
  background-color: #fefefe;
}
</style>
