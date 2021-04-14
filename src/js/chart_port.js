$(function () {
  // データ --- (*1)
  const data = {
    labels: ['HTML5', 'CSS', 'Javascript'],
    datasets: [
      {
        label: '',
        data: [5, 5, 5],
        backgroundColor: "rgba(220, 220, 220, 0)",//背景。ここでは透明にしています。
        borderColor: "rgba(255,99,132,0)",//データ１の線の色
        pointBackgroundColor: "rgba(179,181,198,1)",//データ１のポインターの背景色
        pointBorderColor: "#fff", //データ１のポインターの線の色
        pointHoverBackgroundColor: "#fff",//データ１のポインターhover時の背景色
        pointHoverBorderColor: "rgba(179,181,198,1)",//データ１のポインターhover時の線の色
      },
      {
        label: 'フロントエンドレベル',
        data: [4, 3, 4],
        backgroundColor: "rgba(220, 220, 220, 0)",
        borderColor: "rgba(255,167,38 ,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
      },
    ]
  }
  // グラフを描画 --- (*2)
  const ctx = document.getElementById('chart_cv')
  const chart_cv = new Chart(ctx, {
    type: 'radar', // グラフの種類
    data: data, // データ
    options: {　// チャート、グラフ種類ごとに用意されているoptionsを任意で指定。
      scale: {
        ticks: {
          beginAtZero: true　// 「０」がスタート（中心）だよっていう指定。
        }
      }
    }
  }); // オプション
  //---------------------------------
  //---------------------------------
  //---------------------------------
  const data2 = {
    labels: ['Python', 'Ruby', 'PHP', 'C++', 'C#', 'Java', 'MySql', 'GAS',],
    datasets: [
      {
        label: '',
        data: [5, 5, 5, 5, 5, 5, 5, 5],
        backgroundColor: "rgba(220, 220, 220, 0)",//背景。ここでは透明にしています。
        borderColor: "rgba(255,99,132,0)",//データ１の線の色
        pointBackgroundColor: "rgba(179,181,198,0)",//データ１のポインターの背景色
        pointBorderColor: "#fff", //データ１のポインターの線の色
        pointHoverBackgroundColor: "#fff",//データ１のポインターhover時の背景色
        pointHoverBorderColor: "rgba(179,181,198,0)",//データ１のポインターhover時の線の色
      },
      {
        label: 'バックエンドレベル',
        data: [3.5, 1, 3.5, 3.5, 2.5, 3, 3.5, 3.5],
        backgroundColor: "rgba(220, 220, 220, 0)",
        borderColor: "rgba(255,167,38 ,1)",
        pointBackgroundColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255,99,132,1)",
      },
    ]
  }
  // グラフを描画 --- (*2)
  const ctx2 = document.getElementById('chart_cv2')
  const chart_cv2 = new Chart(ctx2, {
    type: 'radar', // グラフの種類
    data: data2, // データ
    options: {　// チャート、グラフ種類ごとに用意されているoptionsを任意で指定。
      scale: {
        ticks: {
          beginAtZero: true　// 「０」がスタート（中心）だよっていう指定。
        }
      }
    }
  }); // オプション
  //---------------------------------
});
