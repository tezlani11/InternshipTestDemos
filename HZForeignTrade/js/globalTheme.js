Highcharts.theme = {
   chart: {
      backgroundColor: 'rgb(12,23,43)',
      style: {
         fontFamily: 'Calibri'
      }
   },
   
   title: {
      style: {
         color: 'rgb(114,221,227)',
         fontSize: '16px'
      }
   },
   
   xAxis: {
      gridLineColor: 'rgb(12,23,43)',
      labels: {
         style: {
            color: 'rgb(114,221,227)'
         }
      },
      lineColor: 'rgb(255,255,255)',
      minorGridLineColor: 'rgb(12,23,43)',
      tickColor: 'rgb(255,255,255)',
      title: {
         style: {
            color: 'rgb(114,221,227)'
         }
      }
   },
   
   yAxis: {
      gridLineColor: 'rgb(12,23,43)',
      labels: {
         style: {
            color: 'rgb(114,221,227)'
         }
      },
      lineColor: 'rgb(255,255,255)',
      minorGridLineColor: 'rgb(12,23,43)',
      tickColor: 'rgb(255,255,255)',
      title: {
         style: {
            color: 'rgb(114,221,227)'
         }
      }
   },
   
   plotOptions: {
      series: {
         dataLabels: {
            color: 'rgb(114,221,227)',
         }
      }
   },
   
   legend: {
      itemStyle: {
         font: '14px Calibri',
         color: 'rgb(114,221,227)'
      },
      
      itemHoverStyle: {
         color: 'rgb(114,221,227)'
      }
   },
   
   credits: {
      enabled: false
   },
   
   
};

Highcharts.setOptions(Highcharts.theme);