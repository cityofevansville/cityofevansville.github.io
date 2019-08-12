    var ctx = document.getElementById('myChart').getContext('2d');
    var data = {
  "labels": [
    "Personnel",
    "Insurance",
    "Services",
    "Utilities",
    "Water Operating",
    "Sewer Operating"
  ],
  "datasets": [
    {
      "label": "",
      "backgroundColor": "#6237b0",
      "fill": true,
      "data": [
        "94129157",
        "33073979",
        "27395179",
        "5706434",
        "61061105",
        "85502650"
      ]
    }
  ]
};
    var options = {
    responsive: true,
  "title": {
    "display": true,
    "text": "2020 Estimated Expense — $432,891,426"
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
  },
  "tooltips": {
    "enabled": true
  }
};

    var myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
