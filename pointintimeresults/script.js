var homelessCanvas = document.getElementById("homelesschart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Overall Homeless",
    data: [462, 495, 428, 427, 477],
    lineTension: 0,
    fill: false,
    borderColor: 'blue'
  };

var dataSecond = {
    label: "Chronically Homeless",
    data: [105, 77, 56, 56, 35],
    lineTension: 0,
    fill: false,
  borderColor: 'red'
  };

var speedData = {
  labels: ['2015', '2016', '2017', '2018', '2019'],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(homelessCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});