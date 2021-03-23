<template>
  <div class="container">
    <router-link to="/">◀︎TOPへ戻る</router-link>
    <div class="title">
      <img src="../assets/typing_title.png">
      <h2>ガバタイピングゲーム</h2>
    </div>
    <h3>概要・コンセプト</h3>
    <div class="content">
      <p>
        1年次に履修した「インターネット情報システム」という授業において、HTMLドキュメントをJavaScriptで操作することに関連したレポートの課題が出た際に、
        せっかくならゲームを制作しながらその制作のために用いた実装について解説したレポートを書こう！という思いつきから制作したミニゲームです。<br>
        ランダムなアルファベットが10個出題され、それを左から順番にいかに早く正確に打てるかを競うタイピングゲームで、難易度によって10個のアルファベットの出題回数が３･5･10と変わります。<br>
        <br>
        「ガバタイピングゲーム」という名前は、「まだJavaScriptを学び途中で綺麗なコードではない」という自虐が元ネタですが、語幹が良いのでそのまま改名することなく公開しています。
      </p>
    </div>
    
    <h3>制作について</h3>
    <div class="content">
      <div class="ribon"><h4>言語について</h4></div>
      <p>
        HTML/CSS/JavaScriptで制作しています。JavaScriptのコードにはjQueryなどを用いておらず、シンプルな素のJavaScriptのみでコーディングしています。
      </p>
      <div class="ribon"><h4>実装について</h4></div>
      <p>
        このゲームの仕組みはシンプルで、キーボードが押下されるたびにどのキーが押されたかを取得し、ターゲット(問題の一番左にあるアルファベット)のキーと同じかどうかを判断するというような仕組みです。
        同じだった場合は正解なのでターゲットを次に進めます（一番左のアルファベットを消去し二番目のアルファベットが一番左にずれます）。違っていた場合は不正解なので、ミスカウントを+1して次の入力を待ちます。<br>
        「現在のターゲットが何問目の何文字目なのか」は複数の変数を使って判断しています。<br>
        ミスカウントと全問正解するまでにかかった時間は、クリア時に確定され、その情報をTwitterのリンクに埋め込んで渡すことでツイートボタンを実装しています。<br>
        <br>
        また、後から追加実装したスコア制度は、正解で+2点、ミスタイプで-5点となっている他、全問正解時にクリアタイムによってボーナス点が与えられます。<br>
        ボーナス点は、選択した難易度ごとに設けられているクリア基準タイムよりどれだけ速いかによって決まります。<br>
        クリア基準タイムはタイピング速度の平均から算出して決定しました。
      </p>
    </div>
    
    <h3>反省・今後の展望</h3>
    <div class="content">
      <p>
        このタイピングゲームはゲームシステムが非常にシンプルで且つクリア時にツイートボタンが表示されることもあって、大学の仲間からたくさんの遊んだ報告をもらったゲームです。<br>
        元の目的であるJavaScriptに関してのレポートもしっかり書けましたし、自分の中でJavaScriptでプログラムを書いてウェブ上で動かすということの楽しさに気づいたきっかけにもなり、
        非常に良い経験でした。<br>
        <br>
        今後のアップデートとしては、出題されるアルファベットを難易度ごとにだし分ける機能の実装を考えています。例えばEASYではキーボードの中央近くに集まっている
        普段使用することの多いキーの出題率を高めにし、HARDではキーボードの端の方のあまり使わないキーも多く出題するといった具合です。<br>
        また、2021年3月現在バグをいくつか把握していますので、これについても解決してアップデートしたいと考えています。（詳細はGitHubのissue参照）
      </p>
    </div>
        
    <h3>関連リンク</h3>
    <div class="content">
      <p>
        ガバタイピングゲームに関する関連リンクはこちらです。
        <ul>
          <li><a href="https://github.com/ne30MEGANE/SimpleTypingGame" target="_blank" rel="noopener noreferrer">GitHubリポジトリ<img src="../assets/GitHub-Mark-64px.png" class="git"></a></li>
          <li><a href="https://ne30megane.github.io/SimpleTypingGame/" target="_blank" rel="noopener noreferrer">ガバタイピングゲームをプレイ</a></li>
          <li><a href="https://github.com/ne30MEGANE/OtoriGame" target="_blank" rel="noopener noreferrer">関連ゲーム「ガバカードマッチング」<img src="../assets/GitHub-Mark-64px.png" class="git"></a></li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleTyping',
  head: {
    title: {
      inner: 'ガバタイピングゲーム',
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
