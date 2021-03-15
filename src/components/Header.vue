<template>
  <div>
    <div class="header">
      <router-link to="/">
        <h1>Megane Case</h1><br>
        <p>作品集2018~2021</p>
      </router-link>
    </div>
    <a href="https://github.com/ne30MEGANE" target="_blank" rel="noopener noreferrer">
      <div id="github_link">
        <img src="../assets/GitHub-Mark-Light-64px.png">
      </div>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
@import "../stylesheets/variables";
a{
  text-decoration: none;
}
.header{
  padding-top: 2em;
  padding-left: 1em;
  padding-bottom: 0.5em;
  h1{
    display: inline-block;
    font-family: 'Audiowide', cursive;
    font-size: 3.5em;
    margin: 0 auto;
    color: $text_main;
  }
  p{
    display: inline-block;
    font-family: 'Potta One', cursive;
    font-size: 2em;
    margin: 0 auto;
    color: $text_main;
  }
}
#github_link{
  position: absolute;
  top: 1.5em;
  right: 0;
  width: 120px;
  height: 80px;
  background-color: $second_color;
  border-top-left-radius: 10%;
  border-bottom-left-radius: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -5px 5px 10px -5px $border_color;
}
</style>
