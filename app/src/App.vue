<template>
  <div id="app">
    <Hero
      :with-background-image="true"
      heading="The artwork of renowned artist, Tien-Wei Chang"
    />

    <div class="page-content ">
      <div class="container is-max-widescreen">
        <router-view />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Hero,
    Footer
  }
};
</script>

<style lang="scss">
@import '@/assets/main.scss';
body {
  min-height: 100%;
  min-width: 100vw;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  height: 100%;
  background-color: $bgcolor-white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.page-content {
  height: 100%;
  padding: 80px 0 150px 0;

  h2 {
    margin-top: 35px !important;
    margin-bottom: 15px !important;
  }
  p {
    margin-bottom: 15px;
    font-size: 20px;
  }

  ul {
    list-style-type: circle;
  }

  ol,
  ul {
    font-size: 20px;
    margin-bottom: 35px;
    margin-left: 35px;
    li {
      margin-top: 15px;
    }
  }
}
</style>
