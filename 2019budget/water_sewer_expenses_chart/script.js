var ctx = document.getElementById('myChart').getContext('2d');
    var data = {
  "labels": [
    "2009",
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
      "label": "Capital Expenses ($ millions)",
      "backgroundColor": "#60f992",
      "fill": true,
      "data": [
        "24",
        "14",
        "5",
        "25",
        "23",
        "48",
        "54",
        "34",
        "40",
        "59"
      ]
    }
  ]
};
    var options = {
  responsive: true,
        "title": {
    "display": true,
    "text": "Water & Sewer Utility (consolidated)"
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
