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
    "2018",
    "2019",
    "2020"
  ],
  "datasets": [
    {
      "label": "Property Tax Caps (Dollars)",
      "backgroundColor": "#df7440",
      "fill": true,
      "data": [
        "2827718",
        "3671860",
        "4588588",
        "9480657",
        "8320908",
        "9659167",
        "10336842",
        "10967158",
        "13024809",
        "14798924",
        "17262777"
      ],
      "pointBackgroundColor": "#ef613d",
      "pointHoverBorderColor": "#e41818",
      "lineTension": 0,
      "borderWidth": "1",
      "pointBorderWidth": 0,
      "pointRadius": 4
    }
  ]
};
    var options = {
  "title": {
    "display": true,
    "text": "Property Tax Cap Growth"
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
        type: 'line',
        data: data,
        options: options
    });
