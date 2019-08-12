    var ctx = document.getElementById('myChart').getContext('2d');
    var data = {
  "labels": [
    "Property Tax",
    "Local Income Tax",
    "MVH & Wheel Tax",
    "Riverboat Funding",
    "TIF Revenues",
    "Park & Recreation",
    "Water Operating",
    "Sewer Operating"
  ],
  "datasets": [
    {
      "label": "",
      "backgroundColor": "#493cca",
      "fill": true,
      "data": [
        "60416788",
        "18067268",
        "7360000",
        "13633467",
        "17077228",
        "3790505",
        "61495602",
        "85778726"
      ]
    }
  ]
};
    var options = {
       responsive: true,
  "title": {
    "display": true,
    "text": "2020 Estimated Budget Revenue — $439,441,105"
  },
  "legend": {
    "display": false
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
        type: 'pie',
        data: data,
        options: options
    });
