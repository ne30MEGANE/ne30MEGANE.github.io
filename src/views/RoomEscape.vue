<template>
  <div class="container">
    <router-link to="/">◀︎TOPへ戻る</router-link>
    <div class="title">
      <img src="../assets/roomescape_title.png">
      <h2>RoomEscape</h2>
    </div>
    <h3>概要・コンセプト</h3>
    <div class="content">
      <p>
        1年次必修の「プログラミング演習1」の授業の最終課題として制作した脱出ゲームです。<br>
        課題の条件として、「脱出するまでにいくつかの過程を踏んでクリアする」というようなものがあり、本ゲーム内ではコインを得る/魔法の杖を得る→招き猫(?)と会話する→ディスクを使う→暗号を解く→鍵で脱出 という流れになっています。<br>
        また、ゲーム内で使用しているイラストと音声は全て自分で制作したものを使用しています。<br>
        <br>
        プレイ動画はこちら<br>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gBG9obFFaC4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </p>
    </div>
    
    <h3>制作について</h3>
    <div class="content">
      <div class="ribon"><h4>言語について</h4></div>
      <p>
        このゲームの開発にはJavaベースのProcessingを使用しています。
      </p>
      <div class="ribon"><h4>実装について</h4></div>
      <p>
        授業内で段階を踏んで少しずつ作っていったのですが、最も最初の段階である「画面遷移（左矢印をクリックで視点が左側に移るなど）」の処理が上手く実装できずに
        苦しい思いをしたのをよく覚えています。<br>
        また、ゲームの進行状況に関するフラグは全てそれぞれbool型の変数で定義して管理し、条件によって表示される文章が変わる部分で制御の基準としています。<br>
        <br>
        ゲームのクリアに直接関係ない部分についてもこだわって実装をしています。<br>
        例えば、ベッドやカーテン・机の引き出しなどにもクリックの判定をつけ、それぞれに対応した文章が表示されるようにしています。<br>
        この実装をすることによってよりFlashゲーム感が出たと考えており、今でも気に入っています。
      </p>
      <div class="ribon"><h4>その他</h4></div>
      <p>
        部屋のレイアウトは好きなゲームのキャラクターの自室がモデルで、謎の招き猫(?)は専修大学のマスコットキャラクター「センディ」がモデルです。
      </p>
    </div>
    
    <h3>反省・今後の展望</h3>
    <div class="content">
      <p>
        プログラミングを学びはじめの頃に制作したゲームなので、今改めてコードを見ればリファクタリングの余地がたくさんあります。<br>
        使用したアイテムがアイテム欄から消える実装をしたかったのですが、当時では力が足りず諦めてしまったのが心残りです。<br>
        とはいえ、初めて自分で0からゲームを作った経験でしたので、ゲーム自体はとても気に入っています。<br>
        <br>
        今後このゲームのコードを直接改造する予定はありませんが、脱出ゲームのギミックを考えるのはとても楽しかったので機会があればまた作ってみたいと考えています。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomEscape',
  head: {
    title: {
      inner: 'RoomEscape',
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
