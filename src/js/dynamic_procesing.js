$(function () {

  var worksArea = $('#body_wrap_works_setumei'); //DOMを指定
  var works_html = worksArea.html(); //初期HTMLを変数で保管
  var works_cnt = 0; //成果物の番号指定

  var urlParam = location.search.substring(1);
  // URLのアンカー（#以降の部分）を取得
  var urlHash = location.hash;

  //成果物の配列を設定
  //今後ポートフォリオを中心に何か作るかも
  var product_setumei = [];//作成目的　使用技術　担当領域等の実績載せる
  product_setumei.push(
    {//ポートフォリオ
      mokuteki_kotei: '目的：',
      gijutu_kotei: '技術：',
      jisseki_kotei: '実装：',
      mokuteki_hendo: '個人の私、エンジニアの私、それぞれについて知ってもらう',
      gijutu_hendo: 'HTML5、CSS(アニメーション、bootstrap含)、JavaScript (jQuery、chart、React含)といった、フロントエンドに関する技術のみを使用しています。',
      jisseki_hendo: 'ページヘッダーはCSSアニメーションを使用し、RGB色のオブジェクトを回転させて、波を表現しています。元々はHTML、CSSのみで構成していましたが、メンテナンス性のわるさを解消するために、ブートストラップとReact.jsによるグリッドとコンポーネントによる管理を適用しました。Worksの各種詳細ページはテンプレートとなるHTMLファイルを使い動的生成を実施しています。この時に画像の変化はJQueryを使って実現しています。',
    }
    , {
      mokuteki_kotei: '目的：',
      gijutu_kotei: '技術：',
      jisseki_kotei: '実績：',
      mokuteki_hendo: 'さまざまな仕入れ販売をする物販事業者への支援をするために、開発しました。',
      gijutu_hendo: 'PHP、Pythonを使ってます。ライブラリの観点から、リサーチ自動化に必要な機能が多く含まれており、さらに高度な学習機能を持っていることからこの二つに選定しました。',
      jisseki_hendo: '元々は個人的に運営している物販事業で独自の仕入れシステムとして運用していましたが、知り合いをはじめ多くの方に利用してみたいとの要望があったため、全体システムの一部を一般向けに開放、移植しました。基本的なシステム設計から開発まで全て担当しました。',
    }
    , {
      mokuteki_kotei: '目的：',
      gijutu_kotei: '技術：',
      jisseki_kotei: '実績：',
      mokuteki_hendo: 'テスト１',
      gijutu_hendo: 'テスト２',
      jisseki_hendo: 'テスト３',
    }
    , {
      mokuteki_kotei: '目的：',
      gijutu_kotei: '技術：',
      jisseki_kotei: '実績：',
      mokuteki_hendo: 'テスト１',
      gijutu_hendo: 'テスト２',
      jisseki_hendo: 'テスト３',
    }
    , {
      mokuteki_kotei: '目的：',
      gijutu_kotei: '技術：',
      jisseki_kotei: '実績：',
      mokuteki_hendo: 'テスト１',
      gijutu_hendo: 'テスト２',
      jisseki_hendo: 'テスト３',
    }
    , {
      mokuteki_kotei: '目的：',
      gijutu_kotei: '技術：',
      jisseki_kotei: '実績：',
      mokuteki_hendo: 'テスト１',
      gijutu_hendo: 'テスト２',
      jisseki_hendo: 'テスト３',
    }
    , {
      mokuteki_kotei: '目的：',
      gijutu_kotei: '技術：',
      jisseki_kotei: '実績：',
      mokuteki_hendo: 'テスト１',
      gijutu_hendo: 'テスト２',
      jisseki_hendo: 'テスト３',
    }
      ,
  );

  works_cnt = (urlHash.replace('#', ''));
  //      worksArea.html(works_html); //表示を元に戻す
  quizShow(works_cnt);

  function quizShow(works_cnt) {
    //成果物表示ページの固定設定
    //   worksArea.find('.mokuteki_kotei').text(urlHash);
    worksArea.find('.mokuteki_kotei').text(product_setumei[works_cnt]['mokuteki_kotei']);
    worksArea.find('.gijutu_kotei').text(product_setumei[works_cnt]['gijutu_kotei']);
    worksArea.find('.jisseki_kotei').text(product_setumei[works_cnt]['jisseki_kotei']);

    //成果物表示ページの動的設定
    worksArea.find('.mokuteki_hendo').text(product_setumei[works_cnt]['mokuteki_hendo']);
    worksArea.find('.gijutu_hendo').text(product_setumei[works_cnt]['gijutu_hendo']);
    worksArea.find('.jisseki_hendo').text(product_setumei[works_cnt]['jisseki_hendo']);
  }


  //-------------------------------------------------------
  //-------------------------------------------------------
  //-------------------------------------------------------
  //-------------------------------------------------------
  //
  //-------------------------------------------------------
  //-------------------------------------------------------
  //-------------------------------------------------------

});
