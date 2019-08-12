    var ctx = document.getElementById('myChart').getContext('2d');
    var data = {
  "labels": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018"
  ],
  "datasets": [
    {
      "label": "Dollars",
      "backgroundColor": "#58a7d1",
      "fill": true,
      "data": [
        "15141303",
        "17221016",
        "20096435",
        "18905609",
        "22465584",
        "23340205",
        "29543927",
        "24876271",
        "22228337"
      ]
    }
  ]
};
    var options = {
  "title": {
    "display": true,
    "text": "Health Insurance Costs"
  },
  "legend": {
    "display": true
  },
  "scales": {
    "yAxes": [
      {
        "ticks": {
          "beginAtZero": true
        }
      }
    ]
  }
};

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
