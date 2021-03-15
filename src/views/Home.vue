<template>
  <div class="home">
    <div class="index">
      <h2>- Contributions -</h2>
      <h3>開発/制作・運営に関わった作品</h3>
    </div>
    <div class="links">
      <router-link to="/otofuda">link1</router-link>
      <router-link to="/mugimusya">link2</router-link>
    </div>

    <div class="index">
      <h2>- Works -</h2>
      <h3>個人で制作した作品</h3>
    </div>
    <div class="links">
      <router-link to="/">link3</router-link>
      <router-link to="/">link4</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  head: {
    title: {
      inner: 'トップ',
      complement: 'Megane Case'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables";

.home{
  width: 100%;
  height: 100%;
  .index{
    position: relative;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    background-color: $fourth_color;
    color: $text_main;
    padding: 1em 0;
    width: 40%;
    z-index: 2; // 手前
    h2{
      padding-left: 1em;
      margin: 0;
    }
    h3{
      padding-left: 2em;
      margin: 0;
      color: $text_sub;
    }
    &::before{
      content: "";
      position: absolute;
      top: 0;
      right: -40px;
      border-style: solid;
      border-width: 48px 40px 0 0;
      border-color: $fourth_color transparent transparent transparent;
    }
    &::after{
      content: "";
      position: absolute;
      bottom: 0;
      right: -40px;
      border-style: solid;
      border-width: 48px 0 0 40px;
      border-color: transparent transparent transparent $fourth_color;
    }
  }
  .links{
    display: flex;
    flex-flow: row wrap;
    margin-top: -3em;
    margin-right: 5%;
    margin-left: 5%;
    margin-bottom: 1em;
    padding: 4em 2em 2em;
    border-radius: 30px;
    border: 8px dotted $third_color;
  }
}
</style>
