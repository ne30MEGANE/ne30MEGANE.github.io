<template>
  <div class="container">
    <router-link to="/">◀︎TOPへ戻る</router-link>
    <div class="title">
      <img src="../assets/hobbyshop_title.png">
      <h2>ホビーショップNS</h2>
    </div>
    <h3>概要・コンセプト</h3>
    <div class="content">
      <p>
        2年次の「ネットワークシステム応用演習」の最終課題として制作した模擬ECサイトです。<br>
        設計と大まかな仕様は4人のグループで制作し、実装自体はそれぞれが個人で制作したものです。<br>
        主な機能は以下のようになっています。
        <ul>
          <li>利用者
            <ul>
              <li>会員登録・登録情報変更・退会機能</li>
              <li>商品検索機能</li>
              <li>購入したい商品をカートに保持する機能</li>
              <li>商品注文機能</li>
              <li>レビュー投稿機能</li>
            </ul>
          </li>
          <li>管理者
            <ul>
              <li>注文一覧確認機能</li>
              <li>発送状況管理機能</li>
              <li>商品追加・在庫管理機能</li>
              <li>商品カテゴリ管理機能</li>
              <li>レビュー管理機能</li>
            </ul>
          </li>
        </ul>
      </p>
    </div>
    
    <h3>制作に用いた技術</h3>
    <div class="content">
      <div class="ribon"><h4>言語について</h4></div>
      <p>
        Ruby言語で、フレームワークはRuby on Railsを使用しています。
      </p>
      <div class="ribon"><h4>実装について</h4></div>
      <p>
        基本的にRailsの仕様に則って実装しています。<br>
        ショッピングカート機能はsessionに配列で持たせることで、ログイン前からログイン後にカートの情報を引き継げるようにしました。<br>
        ページネーションはkaminari、メールアドレスのバリデーションはemail_validatorのgemを使用しています。<br>
        <br>
        データベースの構造もそれほど複雑でなく、基本的にはどのテーブルもシンプルな1対多の関係になっています。会員(users)テーブルと注文(orders)テーブルだけは多対多の関係になるため、カート(carts)テーブルを中間テーブルとしています。<br>
        中間テーブルの名前に「カート」を使っていますが、実際のショッピングカート機能で参照しているのはsessionのデータであり、中間テーブルああくまで中間テーブルの機能だけを果たしています。
      </p>
    </div>
    
    <h3>反省・今後の展望</h3>
    <div class="content">
      <p>
        グループで決めた仕様は全て守ることはもちろん、セレクトボックスで選択する部分も全てバリデーションをかけたり、カートの内容をログイン状態問わず保持できるようにしたりなど細かなところまで
        しっかり考えて開発できたと思います。<br>
        バリデーションについて、この模擬ECサイトを制作し相互テストを行う中で、ブラウザの機能を使ってフォームの形態に関わらず任意の値を送信する(フォームのvalueの値を直接変更する)という攻撃の仕方があることを認識し、
        データベースに保存する値はサーバー側のプログラムでしっかり整合性をチェックするようにしないとバグの原因になるということを学びました。<br>
        <br>
        また、このサイトは機能の実装がメインであったため、CSSの作り込みが足りなくなってしまったことを少し悔しく感じています。<br>
      </p>
    </div>
        
    <h3>関連リンク</h3>
    <div class="content">
      <p>
        関連リンクは以下の通りです。<br>
        heroku上に公開しているアプリケーションは実際に会員登録などの機能を誰でも使うことができますが、実在の住所などの個人情報などを登録しないでください。
        <ul>
          <li><a href="https://github.com/ne30MEGANE/hobbyshop" target="_blank" rel="noopener noreferrer">GitHubリポジトリ<img src="../assets/GitHub-Mark-64px.png" class="git"></a></li>
          <li><a href="https://ne300229-ns2019-hobbyshop.herokuapp.com/" target="_blank" rel="noopener noreferrer">ホビーショップNS</a></li>
          <li><a href="https://github.com/ne30MEGANE/telbook" target="_blank" rel="noopener noreferrer">関連アプリ「telbook」<img src="../assets/GitHub-Mark-64px.png" class="git"></a></li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HobbyShop',
  head: {
    title: {
      inner: 'ホビーショップNS',
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
