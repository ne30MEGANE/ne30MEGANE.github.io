<template>
  <div class="container">
    <router-link to="/">◀︎TOPへ戻る</router-link>
    <div class="title">
      <img src="../assets/enstsc_title.png">
      <h2>ENST!! Song Catalog</h2>
    </div>
    <h3>概要・コンセプト</h3>
    <div class="content">
      <p>
        3年次に履修した「オブジェクト指向技術」の最終課題として制作したWebサイトです。<br>
        課題の要件は、「jsonファイルで用意したデータをJSON serverから取得し、ソートやフィルター・新規追加などができること」です。<br>
        よくある攻略Wikiサイトの情報量が多くてごちゃごちゃしている様子をアンチテーゼとし、シンプルに楽曲一覧だけが確認できるサイトがあったらいいなというアイディアで、
        題材をスマートフォン向けリズムゲーム「あんさんぶるスターズ!!Music」に絞って制作しました。<br>
        <br>
        最終課題として提出したバージョンの機能は以下の通りです。
        <ul>
          <li>楽曲一覧の確認機能</li>
          <li>楽曲名・歌手名・楽曲レベルでのソート機能</li>
          <li>楽曲属性・楽曲名or歌手名・楽曲レベルでのフィルター機能</li>
          <li>上記のソートとフィルターを同時に使う機能</li>
          <li>ランダムに1曲選曲する機能</li>
          <li>新規の楽曲データを追加する機能</li>
          <li>既存の楽曲データを更新する機能</li>
        </ul>
        <br>
        なお、このWebサイトはHappyElementsコンテンツ利用ガイドライン② インターネット上での利用についてを把握した上、こちらのガイドラインの規約を満たしているものと判断して公開・公開準備を行っています。
      </p>
    </div>
    
    <h3>制作に用いた技術</h3>
    <div class="content">
      <div class="ribon"><h4>言語について</h4></div>
      <p>
        HTML/CSS/JavaScriptと、Vue.jsフレームワークを使用しています。<br>
        課題の段階ではVue.jsをCDNで導入していますが、現在vue-cliを使ってプロジェクトごと作り直すバージョンアップを制作中です。
      </p>
      <div class="ribon"><h4>実装について</h4></div>
      <p>
        主な実装は、JSON serverからデータを取得することと、取得したデータをVueのメソッドでよしなにして表示することです。<br>
        フィルターとソートは1つのメソッドでまとめて実装しており、フォームから取得したソート・フィルター用のデータをそれぞれJSONデータ取得用のURLにパラメータとして埋め込む方法を取っています。<br>
        ランダム選曲はもっとシンプルで、0~楽曲数までのランダムな整数をgetRandomInt()によって取得し、そのまま楽曲データのインデックスとして用いることで実装しています。<br>
        <br>
        楽曲一覧の表示は、楽曲それぞれのデータに含まれている属性の値によってclassを振り分ける(v-bind:classに楽曲属性を指定する)ことで色分けを行っています。<br>
        <img src="../assets/enstsc_1.png">
      </p>
      <div class="ribon"><h4>その他のこだわりについて</h4></div>
      <p>
        あんさんぶるスターズ!!のファンサイトでもあるため、デザインはなるべく本家アプリゲーム内のものを再現しています。<br>
        各楽曲の表示方法やモーダルのデザインなどが再現されています。<br>
        <img src="../assets/enstsc_2.png">
      </p>
    </div>
    
    <h3>反省・今後の展望</h3>
    <div class="content">
      <p>
        この課題では、課題の要件を満たしながら個人的なアイディアも実現することができて良かったと考えています。<br>
        また、課題の要件の機能をスムーズに使えるようなわかりやすいUI(モーダルを開いたら周りがグレーアウトする・モーダル範囲外クリックでモーダルを閉じることができるなど)も実装することができたという手応えも感じています。<br>
        <br>
        当時は実装方法が思い付かずに断念した、楽曲属性「All」の楽曲の左上の三角形を虹色にする実装は、現在開発中のvue-cli使用バージョンでは以下のようにしっかりと実装ができています。<br>
        <img src="../assets/enstsc_3.png"><br>
        vue-cli使用バージョンでは、最終課題として提出したバージョンで実装していた楽曲情報追加・更新機能を削除し、楽曲データは外部APIとして管理することで、一般公開を目指しています。<br>
        それに伴い、axiosによる通信やAPIのURLとKEYを環境変数に持たせること、子コンポーネントにpropsでデータを渡すことなどの実装に初挑戦しています。<br>
      </p>
    </div>
        
    <h3>関連リンク</h3>
    <div class="content">
      <p>
        現在開発中のvue-cli使用バージョンのリポジトリと、HappyElementsコンテンツ利用ガイドラインへのリンクはこちらです。
        <ul>
          <li><a href="https://github.com/ne30MEGANE/ENST-SC" target="_blank" rel="noopener noreferrer">vue-cliバージョンGitHubリポジトリ<img src="../assets/GitHub-Mark-64px.png" class="git"></a></li>
          <li><a href="https://www.happyelements.co.jp/contents-guideline/" target="_blank" rel="noopener noreferrer">HappyElementsコンテンツ利用ガイドライン</a></li>
        </ul>
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
