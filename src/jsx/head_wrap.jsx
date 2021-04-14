class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div class='box'>
          <div class='box title'>
            <a href='#'>SUBLAND-PORTFOLIO</a><br />
          </div>

          <div class='content_box header'>
            <div class="container">
              <div class="row grid-auto-fit">
                <div class="text-center col-sm-3">
                  <a href="#1">About me</a>
                </div>
                <div class="text-center col-sm-3">
                  <a href="#2">Service</a>
                </div>
                <div class="text-center col-sm-3">
                  <a href="#4">Works</a>
                </div>
                <div class="text-center col-sm-3">
                  <a href="#24">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div class='wave -one'></div>
            <div class='wave -two'></div>
            <div class='wave -three'></div>
          </section>
        </div>
      </React.Fragment >
    );
  }
}

ReactDOM.render(
  <React.Fragment>
    <Header />
  </React.Fragment >
  ,
  document.getElementById('head_wrap')
);
