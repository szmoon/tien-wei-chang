<template>
  <div>
    <section :class="heroClass">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <!-- <div class="container"> -->
          <div class="navbar-brand">
            <a class="navbar-item">
              <p class="title">張天威 | Tien-Wei Chang</p>
            </a>
            <span class="navbar-burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <router-link
                :to="{ name: 'home' }"
                :class="getNavbarItemClass('home')"
              >
                Main
              </router-link>
              <router-link
                :to="{ name: 'gallery' }"
                :class="getNavbarItemClass('gallery')"
              >
                Collection
              </router-link>
              <router-link
                :to="{ name: 'about' }"
                :class="getNavbarItemClass('about')"
              >
                About
              </router-link>
              <router-link
                :to="{ name: 'life' }"
                :class="getNavbarItemClass('life')"
              >
                Life
              </router-link>
            </div>
          </div>
          <!-- </div> -->
        </nav>
      </div>

      <!-- Hero content: will be in the middle -->
      <div class="hero-body"></div>

      <!-- Hero footer: will stick at the bottom -->
      <div :class="heroFootClass">
        <div class="heading-container">
          <p class="title is-4">
            {{ heading }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  components: {},
  props: {
    heading: {
      type: String,
      required: true
    }
  },
  computed: {
    isHomepage() {
      return this.$route.name === 'home';
    },
    heroClass() {
      if (this.isHomepage) {
        return ['hero', 'hero-bg-image', 'is-primary', 'is-medium'];
      }
      return ['hero', 'is-primary', 'is-small'];
    },
    heroFootClass() {
      if (this.isHomepage) {
        return ['hero-foot', 'hero-foot-centered'];
      }
      return 'hero-foot';
    }
  },
  methods: {
    getNavbarItemClass(routeName) {
      if (this.$route.name === routeName) {
        return ['navbar-item', 'is-active'];
      }
      return 'navbar-item';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';
.hero {
  background-color: #fefefe;
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-bg-image {
  background-image: linear-gradient(
      4deg,
      rgba(255, 255, 255, 0.2861519607843137) 0%,
      rgba(2, 0, 36, 0.36458333333333337) 100%
    ),
    url('https://szmoon.github.io/tien-wei-chang-images/images/B09-N01/full/2842,/0/default.jpg');
}

.navbar {
  padding: 0 18px;
}

.hero-foot {
  display: flex;
  justify-content: flex-start;
}

.hero-foot-centered {
  @include until($desktop) {
    justify-content: center;
  }
}

.heading-container {
  padding: 15px 30px;
  background-color: rgba(134, 32, 66, 0.6);
  width: max-content;

  @include from($desktop) {
    text-align: left;
  }
}
</style>
