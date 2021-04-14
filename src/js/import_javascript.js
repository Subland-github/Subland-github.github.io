function importJS() {
  if (!new Array().push) { return false; }

  var scripts = new Array(
    './src/js/jquery-3.4.1.min.js',
    './src/js/page_func.js',
    './src/js/Chart.js',
    './src/js/chart_port.js',
    './src/bootstrap/js/bootstrap.min.js'
  );

  for (var i = 0; i < scripts.length; i++) {
    document.write('<script type="text/javascript" src="' + scripts[i] + '"></script>');
  }
}

function importJSX() {
  if (!new Array().push) { return false; }

  var scripts = new Array(
    "./src/jsx/body_wrap.jsx",
    "./src/jsx/head_wrap.jsx",
    "./src/jsx/foot_wrap.jsx"
  );

  for (var i = 0; i < scripts.length; i++) {
    document.write('<script type="text/babel" src="' + scripts[i] + '"></script>');
  }
}

importJS();
importJSX();
