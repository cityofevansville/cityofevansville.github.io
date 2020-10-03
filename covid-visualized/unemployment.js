var unemploymentCanvas = document.getElementById("unemployment");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "2020 Unemployment Rate",
    data: [3.4, 3.1, 3.1, 14.8, 10.7, 9.2, 6.8, 5.9],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
  };

var speedData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
  datasets: [dataFirst]
};

var chartOptions = {
  title: {
      display: false,
      text: '2020 Evansville Unemployment Rate'
  },
  responsive: true,
  legend: {
    display: false,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(unemploymentCanvas, {
  type: 'curve_chart',
  data: speedData,
  options: chartOptions
});
