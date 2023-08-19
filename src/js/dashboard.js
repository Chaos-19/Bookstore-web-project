var options = {
  chart: {
    type: 'bar',
    height: 250,
    width: '100%',
    foreColor: '#333',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: false, // Set to true for vertical bars
      columnWidth: '40%', // Adjust the width of the bars
      borderRadius:10,
      borderRadiusApplication:'end',// or 'rounded' for rounded bars
      
      
    }
  },
  colors: ['#FF5733', '#FFC300', '#36A2EB', '#4CAF50', '#E91E63', '#9C27B0', '#00BCD4', '#FF9800', '#8BC34A'],
  series: [{
    name: 'Sales',
    data: [44, 55, 57, 56, 61, 58, 63]
  }],
  xaxis: {
    categories: ['s', 'm', 't', 'w', 't', 'f', 's'],
    labels: {
      style: {
        fontSize: '12px',
        colors: '#777',
        borderTopRadius: '10px'
      }
    }
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '14px',
        colors: '#777'
      }
    }
  }
};

var chart = new ApexCharts(document.querySelector("#apex-chart"), options);
chart.render();
