class BodyWrapAbout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="body_wrap_about">

          <h2 class="text_title" id="1">About me</h2>
          <div class="row">
            <div class="text-center  col-md-4">
              <div class="center-block">

                <p class="icon_p"><img src="./src/img/profile/profileImg.png" alt="profileImg" />
                </p>
              </div>
            </div>

            <div class="text-left col-md-8">
              <p class="text_about">
                <ul type="disc">
                  <h3>【経歴】</h3>
                  <li>賢いロボットを生み出すため、学生時代よりものづくりの世界に入門</li>
                  <li>研究者としての才能はなかったため、技術者として大手メーカに就職</li>
                  <li>官公庁向け事業にて、次期分析システムの基盤開発及び調査研究活動に従事</li>
                  <li>現在は基幹システム用技術の調査研究活動及びPJ支援業務に従事</li>
                </ul>
                <br />
                <ul type="disc">
                  <h3>【特徴】</h3>
                  <li>RPAなど、業務効率向上につながる技術を”個人的に”調査研究中</li>
                  <li>アプリ開発を好み、”思い立ったらプロトタイプ開発”をモットーに行動</li>
                  <li>使える技術はなんでも使う。欠点はデザインセンス</li>
                  <li>
                    <font color="purple">
                    "あらゆる情報格差"
                    </font>
                    を失くすことが、技術者としての
                    <font color="purple">
                    ”夢”
                    </font>
                    であり行動原理
                  </li>
                </ul>
                <br />
                

              </p>
            </div>

          </div>
        </div>
      </React.Fragment>
    );

  }
}

class BodyWrapService extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="body_wrap_skill">
          <h2 class="text_title" id="2">Skill</h2>
          <section>
            <div class="container">
              <div class="row grid-auto-fit">

                <div class="text-center col-md-4">
                  <table class="contents_l2">
                    <tr>
                      <img src="./src/img/service/consulting.png" class="icon" alt="" />
                    </tr>
                    <tr>
                      <p class="text00">技術調査</p>
                    </tr>
                    <tr>
                      <p class="text01">
                        システム開発や技術調査活動のノウハウを活かし、クライアント様が理想とするサービスの実現をサポート
                      </p>
                    </tr>
                  </table>
                </div>

                <div class="text-center col-md-4">
                  <table class="contents_l2">
                    <tr>
                      <img src="./src/img/service/system.png" class="icon" alt="" />
                    </tr>
                    <tr>
                      <p class="text00">Webシステム開発</p>
                    </tr>
                    <tr>
                      <p class="text01">
                        お客様の必要とする機能を開発、提供致します。詳細なスキルは<a href="#skillSet"><font color="blue">“スキルセット”</font></a>よりご確認ください。
                      </p>
                    </tr>
                  </table>
                </div>

                <div class="text-center col-md-4">
                  <table class="contents_l2">
                    <tr>
                      <img src="./src/img/service/research.png" class="icon" alt="" />
                    </tr>
                    <tr>
                      <p class="text00">情報収集支援</p>
                    </tr>
                    <tr>
                      <p class="text01">
                        競合となる他社情報や、市場調査、商品仕入れなど、多岐にわたる情報収集をサポート致します。
                      </p>
                    </tr>
                  </table>
                </div>

              </div>
            </div>
          </section>
          <section>
            <h3 id = "skillSet">スキルセット</h3>
            <table class="text-left" border="1" cellpadding="10" align="center">
              <tr>
                <td width="150">各種言語：</td>
                <td width="700">
                  HTML5、CSS、JavaScript(jQuery、Nodejs、Electron、GAS含)、C言語、C++、C#、MATLAB、Java、Python、PHP、MySQL、OracleDB、その他組込
              </td>
              </tr>
              <tr>
                <td width="150">フレームワーク：</td>
                <td width="700">Django、Laravel、Express</td>
              </tr>
              <tr>
                <td width="150">ツール：</td>
                <td width="700">MAMP、Git、</td>
              </tr>
              <tr>
                <td width="150">OS：</td>
                <td width="700">Windows、Linux、CentOS、RedHat、Mac、WindowsSV</td>
              </tr>
            </table>
          </section>
          <br />
          <br />
          <br />

          <div class="container">
            <div class="row grid-auto-fit">
              <div class="text-center col-md-6">
                <h3>レベル説明</h3>
                <table class="text-left" border="1" cellpadding="10" align="center">
                  <tr>
                    <th>レベル</th>
                    <th>説明</th>
                  </tr>
                  <tr>
                    <td width="100">５</td>
                    <td width="300">
                      思想を理解した上で開発可能
                </td>
                  </tr>
                  <tr>
                    <td width="100">４</td>
                    <td width="300">
                      フルスタックOK
                </td>
                  </tr>
                  <tr>
                    <td width="100">３</td>
                    <td width="300">
                      問題なく開発可能
                </td>
                  </tr>
                  <tr>
                    <td width="100">２</td>
                    <td width="300">
                      時間をかければ開発可能
                </td>
                  </tr>
                  <tr>
                    <td width="100">１</td>
                    <td width="300">
                      独学・簡単なプログラミング可能
                </td>
                  </tr>
                </table>
              </div>


              <div class="text-center col-md-6">
                <canvas id="chart_cv"></canvas>
                <canvas id="chart_cv2"></canvas>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>
    );

  }
}

class BodyWrapParts_ClickForDetails extends React.Component{
  render() {
    return (
      <React.Fragment>    
        <div className="clickfordetails">
        <p class="text01">
        <a href={this.props.link_work}>
          <font color="blue">
            詳細はこちらをクリック
          </font>
        </a>
      </p>
        </div>                        

      </React.Fragment>
    );
  }
}
class BodyWrapWorks extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="body_wrap_works">

          <h2 class="text_title" id="4">Works</h2>
          <section>
            <div class="container">
              <div class="row grid-auto-fit">
                <div class="text-center col-md-4">
                  <table class="contents_l2">
                    <tr>
                      <img src="./src/img/works/portforio.png" class="icon works" alt="" />
                    </tr>
                    <tr>
                      <h3 class="text00">ポートフォリオ</h3>

                    </tr>
                    <tr>
                      <a href="https://github.com/Subland-github/subland_portfolio">
                        <font color="blue">Githubにてソース公開中</font>
                      </a>
                      <p class="text01">
                        本サイトです。基本的にはHTML5、CSS(アニメーション、bootstrap含)、JavaScript (jQuery、chart、React含)といった、フロントエンドに関する技術のみを使用しています。ページは動的処理で作成しています。
                      </p>
                      <BodyWrapParts_ClickForDetails link_work="./page_template.html#0" />
       
                    </tr>
                  </table>
                </div>
                <div class="text-center col-md-4">
                  <table class="contents_l2">
                    <tr>
                      <img src="./src/img/works/M-PUAS.png" class="icon works" alt="" />
                    </tr>
                    <tr>
                      <h3 class="text00">M-PUAS</h3>

                    </tr>
                    <tr>
                      <font color="red">ソース非公開</font>
                      <p class="text01">
                        個人的に運営している物販事業のために設計したシステムの一部を、クライアント様向けにサブスクリプションで提供しているサービスです。（現在は運営停止中）
                       </p>
                    </tr>
                  </table>

                </div>
                <div class="text-center col-md-4">
                  <table class="contents_l2">
                    <tr>
                      <img src="./src/img/works/WebHam.png" class="icon works" alt="" />
                    </tr>
                    <tr>
                      <h3 class="text00">WebHam</h3>

                    </tr>
                    <tr>
                      <font color="purple">ソース一部公開</font>
                      <p class="text01">
                        現在開発中のOSINTサービスです。ユーザが知りたい情報を、クローラが検索エンジン上よりまとめて取得してきます。
                      </p>
                    </tr>
                  </table>


                </div>
                <div class="text-center col-md-4">
                  <table class="contents_l2">
                    <tr>
                      <img src="./src/img/works/WebCanary.png" class="icon works" alt="" />
                    </tr>
                    <tr>
                      <a href="https://liff.line.me/1645278921-kWRPP32q?accountId=845kakvm&openerPlatform=native&openerKey=talkroom%3Aheader" target="blank">
                        <h3 class="text00">WebCanary</h3>
                      </a>
                    </tr>
                    <tr>
                      <a href="https://github.com/Subland-github/WebCanary">
                        <font color="blue">Githubにてソース公開中</font>
                      </a>
                      <p class="text01">
                        現在開発中のLineAPIを利用したchatbotサービスです。アクセスしたいURLをメッセージとして送信することで、アクセスしても安全なのか、どこから接続されているのか、リダイレクトされるのかを調査してくれます。（※由来は”炭鉱のカナリア”）
                      </p>
                    </tr>
                  </table>


                </div>    
                <div class="text-center col-md-4">
                  <table class="contents_l2">
                    <tr>
                      <img src="./src/img/works/time_schedule.png" class="icon works" alt="" />
                    </tr>
                    <tr>
                      <a href="https://portfolio-schedule.vercel.app/" target="blank">
                        <h3 class="text00">時間配分可視化くん</h3>
                      </a>
                    </tr>
                    <tr>
                      <a href="https://github.com/Subland-github/react_time_graph">
                        <font color="blue">Githubにてソース公開中</font>
                      </a>
                      <p class="text01">
                        Reactとchart.jsを使用した動的なサイトです。最小限必要な要件定義から作ったので非常にシンプルなものとなります。特別な機能を持っているサイトではありません。シンプルに、自分の時間配分を都度都度見直すのにもってこいなサイトです。
                      </p>
                    </tr>
                  </table>


                </div>    
             
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );

  }
}

class BodyWrapContact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="body_wrap_service">
          <div class="container">
            <div class="row grid-auto-fit">
              <div class="text-center col-md-4"></div>
              <div class="text-center col-md-4">
                <h2 class="text_title" id="24">Contact</h2>
                <table class="contents_l2">
                  <tr>
                    <img src="./src/icon/contact/contact.png" class="icon" alt="" />
                  </tr>
                  <tr>
                    <a href="https://forms.gle/BTMFHXfJCmkyW1Bg7" class="text00">問合せフォームへ移動する</a>
                  </tr>
                  <tr>
                    <p class="text01">
                      制作の依頼・ご相談などお気軽にお問い合わせくださいませ。
                     
              </p>

                  </tr>
                </table>
              </div>
              <div class="text-center col-md-4"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

  }
}



ReactDOM.render(
  <React.Fragment>
    <BodyWrapAbout />
    <BodyWrapService />
    <BodyWrapWorks />
    <BodyWrapContact />
  </React.Fragment>
  ,
  document.getElementById('body_wrap')
);


