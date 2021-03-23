<template>
  <div class="home">
    <div class="index">
      <h2>- Contributions -</h2>
      <h3>開発/制作・運営に関わった作品</h3>
    </div>
    <div class="links">
      <router-link to="/otofuda">
        <div class="item">
          <b>音札</b><br>音楽ゲームの対戦の常識を覆す、新感覚対戦型音楽カードゲーム
        </div>
      </router-link>

      <router-link to="/mugimusya">
        <div class="item">
          <b>藤原プロジェクト2020</b><br>オリジナルVTuber天ノ葉つむぎ・武者丸による他メディア展開
        </div>
      </router-link>

      <router-link to="/edpsweb">
        <div class="item">
          <b>EDPS公式サイト</b><br>専修大学電子計算機研究会(EDPS)部員交流・情報発信サイト
        </div>
      </router-link>
    </div>

    <div class="index">
      <h2>- Works -</h2>
      <h3>個人で制作した作品</h3>
    </div>
    <div class="links">
      <router-link to="/roomescape">
        <div class="item">
          <b>RoomEscape</b><br>1年次「プログラミング演習1」最終課題<br>脱出ゲーム
        </div>
      </router-link>

      <router-link to="/simpletyping">
        <div class="item">
          <b>ガバタイピングゲーム</b><br>1年次「インターネット情報システム」授業内課題からの派生<br>タイピングゲーム
        </div>
      </router-link>

      <router-link to="/hobbyshop">
        <div class="item">
          <b>ホビーショップNS</b><br>2年次「ネットワークシステム応用演習」最終課題<br>模擬ECサイト
        </div>
      </router-link>
      
      <router-link to="/enstsc">
        <div class="item">
          <b>ENST!! Song Catalog</b><br>3年次「オブジェクト指向技術」最終課題<br>WEBサイト
        </div>
      </router-link>
      
      <!-- <router-link to="/edediter">
        <div class="item">
          <b>EDエディタ</b><br>3年次「テキスト処理」授業内課題<br>クラシカルなラインエディタ
        </div>
      </router-link>
      
      <router-link to="/sunflower">
        <div class="item">
          <b>Sunflower</b><br>3年次「テキスト処理」最終課題<br>プログラミング言語
        </div>
      </router-link>
      
      <router-link to="/glassesframe">
        <div class="item">
          <b>Glasses Frame</b><br>CSSフレームワーク
        </div>
      </router-link> -->
    </div>

    <div class="index">
      <h2>- Others -</h2>
      <h3>プログラム以外の作品</h3>
    </div>
    <div class="links">
      <router-link to="/mokomei">
        <div class="item">
          <b>もこ/めい</b><br>タイムラインから学んでツイートするTwitterボット<br>キャラクターデザイン
        </div>
      </router-link>
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
    margin-left: -6%;
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
    margin-bottom: 1em;
    padding: 4em 2em 2em;
    border-radius: 30px;
    border: 8px dotted $third_color;
    background-color: #ffffff80;

    a{ // router-link
      text-decoration: none;
      color: $text_main;
      font-family: 'M PLUS Rounded 1c', sans-serif;
      flex-basis: 30%;
      .item{
        padding: 1em 1em 2em;
        >b{
          font-size: larger;
          &::before{
            content: "";
            display: inline-block;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background-color: #A8D8EA;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
</style>
