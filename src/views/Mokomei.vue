<template>
  <div class="container">
    <router-link to="/">◀︎TOPへ戻る</router-link>
    <div class="title">
      <img src="../assets/mokomei_title.png">
      <h2>もこ&めい</h2>
    </div>
    <h3>準備中</h3>
    <div class="content">
      <p>
        こちらのページは鋭意制作中です。<br>
        もこ/めいのキャラクター立ち絵とデザインコンセプトについては
        <a href="https://ne30megane.github.io/minipro_web/pict.html" target="_blank" rel="noopener noreferrer">こちら</a>で確認することができます。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mokkomei',
  head: {
    title: {
      inner: 'もこ/めい',
      complement: 'Megane Case'
    },
    meta: [
      { name: 'robots', content: 'noindex'}
    ]
  }
}
</script>

<style lang="scss" scoped>
@import "../stylesheets/body";

</style>
