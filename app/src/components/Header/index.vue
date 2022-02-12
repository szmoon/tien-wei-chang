<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="basePath" class="navbar-item">
        <h1 class="title">Tien-Wei Chang</h1>
      </router-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link :to="{ name: 'home' }" class="navbar-item"
          >Main</router-link
        >
        <router-link :to="{ name: 'gallery' }" class="navbar-item">
          Collection
        </router-link>
        <router-link :to="{ name: 'about' }" class="navbar-item">
          About
        </router-link>
        <router-link :to="{ name: 'life' }" class="navbar-item">
          Life
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { basePath } from '../../router';
export default {
  name: 'Header',
  data() {
    return {
      basePath: basePath
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/assets/main.scss';

.title {
  // font-family: 'Noto Sans TC', sans-serif;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 1.8rem;
  color: $font-purple;
}
.navbar {
  background-color: $bgcolor-white;
  border-bottom: 1px solid $bgcolor-purple;
}

.navbar-item {
  display: flex;
}

.navbar-item,
.navbar-link {
  line-height: 2;
}

.navbar,
.navbar-menu,
.navbar-start,
.navbar-end {
  align-items: stretch;
  display: flex;
  padding: 0;
  box-shadow: none;
  background-color: transparent;
}

.navbar-menu {
  flex-grow: 1;
  flex-shrink: 0;
}
.navbar-start {
  justify-content: flex-start;
  margin-right: auto;
}
.navbar-end {
  justify-content: flex-end;
  margin-left: auto;
}
</style>
