<template>
  <div id="app">
    <Header />
    <div id="body">
      <router-view />
    </div>
    <About />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  head: {
    meta: [
      { name: 'robots', content: 'noindex'}
    ]
  },
  components: {
    Header,
    About,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500&family=Noto+Sans+JP:wght@400;500&family=Potta+One&family=Roboto+Condensed&display=swap');
@import "stylesheets/variables";
#body{
  margin: 2em 0;
}
</style>
