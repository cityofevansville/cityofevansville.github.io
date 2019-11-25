var ctx = document.getElementById('myChart').getContext('2d');
    var data = {
  "labels": [
    "Noblesville",
    "Evansville (Present)",
    "Terre Haute",
    "Newburgh",
    "Fort Wayne",
    "Evansville (2020)",
    "West Lafayette",
    "Gary",
    "Bloomington",
    "Griffith",
    "Indianapolis*"
  ],
  "datasets": [
    {
      "label": "Monthly Fee ($)",
      "backgroundColor": [
        "#2D77C2", 
        "#FFFB00", 
        "#2D77C2", 
        "#2D77C2", 
        "#2D77C2", 
        "#FFFB00", 
        "#2D77C2", 
        "#2D77C2", 
        "#2D77C2", 
        "#2D77C2", 
        "#2D77C2", 
        ],
      "fill": true,
      "data": [
        "10.57",
        "10.65",
        "11.00",
        "11.90",
        "12",
        "12.80",
        "16.00",
        "16.30",
        "16.60",
        "18.25",
        "21.06"
      ]
    }
  ]
};
    var options = {
  responsive: true,
  maintainAspectRatio: false,
        "title": {
    "display": true,
    "text": "Comparison of Residential Trash Fees for Local Indiana Communities"
  },
  "legend": {
    "display": false
  },
  "scales": {
    "yAxes": [
      {
        "ticks": {
          "beginAtZero": true,
          callback: function(value, index, values) {
            return value.toLocaleString("en-US",{style:"currency", currency:"USD"})
          }
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