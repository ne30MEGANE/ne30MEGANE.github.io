<template>
  <div class="container">
    <router-link to="/">◀︎TOPへ戻る</router-link>
    <div class="title">
      <img src="../assets/edpsweb_title.jpg">
      <h2>EDPS公式サイト</h2>
    </div>
    <h3>概要・コンセプト</h3>
    <div class="content">
      <p>
        専修大学電子計算機研究会(通称:EDPS)の、部員向け交流&情報発信用ウェブサイトです。<br>
        2019年度から開発が始まり、2020年度から制作チームに参加しています。<br>
        <br>
        主な機能は以下の通りです。
        <ul>
          <li>部員によるブログ投稿・公開機能</li>
          <li>サークル活動の1つである「ミニプロ」の活動報告の作成・公開機能</li>
          <li>サークル内イベントの告知・参加者募集機能</li>
        </ul>
        これらの機能を通じて、EDPSの活動の様子を学外向けに発信することを目的としています。
      </p>
    </div>
    
    <h3>担当した箇所</h3>
    <div class="content">
      <div class="ribon"><h4>ブログの部員限定公開機能</h4></div>
      <p>
        EDPS公式サイトでは、学外に向けた情報発信が主な目的であるため、当初は全体公開のブログのみが作成可能なしようとなっていました。<br>
        とはいえ、部員同士の交流の場であることも間違いではないため、部員のみに向けたブログを公開できる機能を実装することになりました。<br>
        その限定公開機能の実装を担当しました。<br>
        機能の具体的な内容等については実際にブログ機能を用いて<a href="https://senshu-edps.net/articles/175"  target="_blank" rel="noopener noreferrer">紹介記事</a>を作成していますので、こちらをご覧ください。
      </p>
    <div class="ribon"><h4>その他</h4></div>
      <p>
        まだリリースはされていないものの、管理者による承認待ち状態の記事をプレビュー表示できる機能の開発を担当し、ほぼ完成しています。<br>
        また、その他細かいリファクタリングやコードレビューも行っています。
      </p>
    </div>
    
    <h3>工夫した点/苦労した点・その他コメント</h3>
    <div class="content">
      <p>
        EDPS公式サイトの開発は、私にとって初めての「自分以外の利用者のためにする開発」でした。<br>
        チームに参加する前にネットワークシステム応用演習という授業でRuby on RailsによるWebアプリケーション制作を一通り勉強し、
        自力でサイトの制作ができるところまで力はつけていたものの、リリースして実際に誰かに使ってもらう機会は初めてでした。<br>
        ブログの部員限定公開機能をリリースし、実際に部員がその機能を活用してくれているのを見たときはとても嬉しく、誇らしい気持ちになったのをよく覚えています。<br>
        また、Githubを用いたチーム開発やgitのブランチ機能の活用方法など、チーム開発に必要な様々な知識をこの開発を通して学びました。<br>
        <br>
        一方で、実際にいろいろな人に利用してもらうウェブサービスの開発は、機能を実装するかどうか・実装するとしてどのような仕様にするか・バグや意図しない実装がないかなどを相談し
        確認しながら慎重に開発を進める必要があり、特にデバッグには苦労しました。<br>
        開発チームのメンバーみんなで数回に渡ってチェックを行ってもつぶしきれなかったバグも実際にあり、ウェブサービスを開発することの難しさを実感しました。
      </p>
    </div>
        
    <h3>関連リンク</h3>
    <div class="content">
      <p>
        EDPS公式サイトは<a href="https://senshu-edps.net/" target="_blank" rel="noopener noreferrer">こちらのリンク</a>からアクセスすることができます。<br>
        *会員登録はサークル部員のみが可能となっており、サークル部員以外の方は閲覧のみが可能です。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EDPSweb',
  head: {
    title: {
      inner: 'EDPS公式サイト',
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
