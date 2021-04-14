class FooterWrap extends React.Component {
  render() {
    return (
      <div id="foot-wraper">
        <div class="container">
          <div class="row grid-auto-fit">
            <div class="col-md-7">
              <div class='title_foot'>
                <a class="text-white" href='./index.html'>subland_portfolio</a><br />
              </div>
            </div>
            <div class="col-md-5">
              <table class="sns_pos">
                <tr>
                  <td>
                    <a href="#" target="_blank">
                      <img
                        src="./src/icon/sns/Instagram.png" class="sns_img" alt="Instagram" />
                    </a>
                  </td>
                  <td>
                    <a href="#" target="_blank">
                      <img src="./src/icon/sns/Twitter.png" class="sns_img" alt="Twitter" />
                    </a>
                  </td>
                  <td>
                    <a href="#"
                      target="_blank">
                      <img src="./src/icon/sns/facebook.png" class="sns_img" alt="facebook" />
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="text-center text-white">
            © 2021- サブランド
          </div>
        </div>
      </div>);
  }
}

ReactDOM.render(
  <React.Fragment>
    <FooterWrap />
  </React.Fragment >
  ,
  document.getElementById('foot_wrap')
);
