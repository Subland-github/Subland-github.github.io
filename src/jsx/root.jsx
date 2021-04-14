

class App extends React.Component {
  render() {
    return <h1>aaaaaaaaa</h1>
  }
}

const Hello = (props) => {
  return <h1>Hello {props.name}!</h1>
}

let dom = document.getElementById('body_wrap_about');
ReactDOM.render(
  <React.Fragment>
    <h2 class="text00" id="1">About me</h2>
    <div class="row">
      <div class="text-center  col-sm-4">
        <div class="center-block">

          <p class="icon_p"><img src="./src/img/logo-trim2_300x300.png" alt="" />
          </p>
        </div>
      </div>

      <div class="text-left col-sm-8">
        <p class="text_about">
          <ul type="disc">
            <label>経歴：</label>
            <li>賢いロボットを生み出すため、学生時代よりものづくりの世界に入門</li>
            <li>研究者としての才能はなかったため、大手メーカに就職</li>
            <li>官公庁系エンジニアとして、分析システムの基盤開発及び調査研究に従事</li>
            <li>現在は基幹システム用技術の調査活動及びプロトタイプ開発に従事</li>
          </ul>
          <br />
          <ul type="disc">
            <label>特徴：</label>
            <li>RPAなど、業務効率向上につなが技術を”個人的に”調査研究中</li>
            <li>アプリ開発を好み、”思い立ったらプロトタイプ開発”をモットーに行動</li>
            <li>使える技術はなんでも使う。欠点はデザインセンス</li>
          </ul><br />

        </p>
      </div>

    </div>
  </React.Fragment>
  ,
  dom);



