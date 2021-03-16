<template>
  <div class="about">
    <h3>About Me</h3>
    <div class="contents">
      <div class="text">
        <p>
          専修大学ネットワーク情報学部<br>
          ネットワークシステムプログラム専攻<br>
          沼研究室/藤原研究室 所属<br>
        </p>
        <p>
          プログラムを書いて何かを作るのが好きです。<br>
          在学中にRailsでサーバーサイドを書いたりJavaScriptでミニゲームのシステムを書いたりした経験が楽しかったです。<br>
          最近はVue.jsでウェブサイトを作るのにハマっています。<br>
          趣味：音楽ゲーム（プレイ・譜面創作）、イラスト制作など
        </p>
      </div>
      <div class="pict">
        <!-- アイコン画像的なものをいれる -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables";
.about{
  margin: 1em 5%;
  color: $text_main;
  font-family: 'M PLUS Rounded 1c', sans-serif;

  h3{  
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before{ // 左側ボーダー
      content: "";
      height: 1px;
      border-top: 8px dotted $third_color;
      flex-grow: 1;
      margin-right: 1em;
    }
    &::after{ // 右側ボーダー
      content: "";
      height: 1px;
      border-top: 8px dotted $third_color;
      flex-grow: 1;
      margin-left: 1em;
    }
  }

  .contents{
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    .text{
      flex-basis: 50%;
    }
    .pict{
      flex-basis: 50%;
    }
  }
}
</style>
