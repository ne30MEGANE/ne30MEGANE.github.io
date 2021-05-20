<template>
  <div class="container">
    <router-link to="/">◀︎TOPへ戻る</router-link>
    <div class="title">
      <!-- <img src="../assets/xxx.png"> -->
      <h2>タイトル</h2>
    </div>
    <h3>概要・コンセプト</h3>
    <div class="content">
      <p>
        
      </p>
    </div>
    
    <h3>制作に用いた技術</h3>
    <div class="content">
      <div class="ribon"><h4>小見出し</h4></div>
      <p>

      </p>
      <div class="ribon"><h4>小見出し</h4></div>
      <p>
        
      </p>
    </div>
    
    <h3>反省・今後の展望</h3>
    <div class="content">
      <p>

      </p>
    </div>
        
    <h3>関連リンク</h3>
    <div class="content">
      <p>
        
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'title',
  head: {
    title: {
      inner: 'title',
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
