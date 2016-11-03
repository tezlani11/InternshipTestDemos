// BAR CHART SCRIPT
$(function () {
   $('#HZESChartContainer').highcharts({
      
      chart: {
         type: 'bar',
//         backgroundColor: 'rgb(12,23,43)'
      },
      
      title: {
         text: 'Hangzhou City Export Statistics'
      },
      
      xAxis: {
         categories: ['Xiaoshan d.', 'Binjiang d.', 'Yuhang d.', 'Xihu d.', 'Xiacheng d.', 'Jinjiang d.', 'Shangcheng d.', 'Gongshu d.'],
         title: {
            text: ''
         }
      },
      
      yAxis: {
         min: 0,
         max: 200,
         title: {
            text: ''
         }
      },
      
      plotOptions: {
         bar: {
            colors: [
               'rgb(228,71,90)', 
               'rgb(6,83,129)', 
               'rgb(254,154,43)', 
               'rgb(109,35,70)', 
               'rgb(48,179,221)', 
               'rgb(228,72,83)', 
               'rgb(138,15,59)', 
               'rgb(139,16,62)'
            ],
            colorByPoint: true
         }
      },
      
      series: [{
         name: 'Amount of Money (millions)',
         data: [153, 139, 129, 110, 101, 80, 71, 50]
      }]
   });
});


// DONUT CHART SCRIPT
$(function() {
   $('#MECChartContainer').highcharts({
      
      chart: {
         type: 'pie'
      },
      
      title: {
         text: 'Statistics on the Main Export Commodities of Hangzhou City'
      },
      
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage: .1f}%</b>' 
      },
      
      plotOptions: {
        pie: {
           borderColor: null,
           allowPointSelect: true,
           startAngle: 160,
           cursor: 'pointer',
           dataLabels: {
              enabled: true,
              format: '<b>{point.percentage: .1f}%.</b>'
           }
        } 
      },
      
      series: [{
         name: 'Export Commodities Percentage',
         colorByPoint: true,
         innerSize: '40%',
         dataLabels: {
            enabled: true,
            distance: -30
         },
         data: [
            {
               name: 'Agricultural Products', 
               y: 45921, 
               color: 'rgb(227,72,86)',
               sliced: true,
               selected: true
            }, {
               name: 'Cultural Products', 
               y: 9981, 
               color: 'rgb(255,154,40)'
            }, {
               name: 'Light Industry Products', 
               y: 9731, 
               color: 'rgb(138,17,62)'
            }, {
               name: 'High Technology Products', 
               y: 15093, 
               color: 'rgb(93,213,212)'
            }, {
               name: 'Electrical Products', 
               y: 32223, 
               color: 'rgb(6,83,129)',
               sliced: true,
               selected: true
            }
         ]
      }]
   });
});


// TRIPLE PIE CHART SCRIPT
$(function() {
   $('#PDChartContainer').highcharts({
      
      chart: {
         type: 'pie'
      },
      
      title: {
         text: 'Trade Operation by Percentage'
      },
      
      plotOptions: {
         pie: {
            startAngle: -90,
            endAngle: 90,
            dataLabels: {
               enabled: true,
               distance: -30,
               format: '<b>{point.percentage: .1f}%.</b>'
            }
         }
      },
      
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage: .1f}%</b>' 
      },
      
      series: [{
         name: 'Trade',
         innerSize: '50%',
         data: [
            {
               name: 'General Trade',
               y: 43,
               color: 'rgb(215,73,85)'
            }, {
               name: 'Improvement Trade',
               y: 32,
               color: 'rgb(250,152,43)'
            }, {
               name: 'Other Trade',
               y: 13,
               color: 'rgb(5,82,124)'
            }
         ]
      }]
   });
});


// COLUMN CHART SCRIPT
$(function() {
   $('#MIXChartContainer').highcharts({
      
      chart: {
         type: 'column'
      },
      
      title: {
         text: 'Monthly Import and Export Statistics, Hangzhou'
      },
      
      xAxis: {
         title: {
            text: 'Months'
         },
         categories: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']
      },
      
      yAxis: {
         title: {
            text: 'Percentage (%)'
         }
      },
      
      plotOptions: {
        column: {
           colors: [
              'rgb(6,83,129)', 
              'rgb(48,179,221)', 
              'rgb(93,213,212)', 
              'rgb(254,154,43)', 
              'rgb(227,72,86)', 
              'rgb(141,15,62)'
           ],
           colorByPoint: true
        } 
      },
      
      series: [{
         name: 'Import-Export',
         data: [15, 19, 25, 17, 23, 10]
      }]
   });
});


// BAR CHART SCRIPT
$(function() {
   $('#MICChartContainer').highcharts({
      
      chart: {
         type: 'bar'
      },
      
      title: {
         text: 'Main Import Commodities Statistics, Hangzhou'
      },
      
      xAxis: {
         categories: ['Elec. prod.', 'High-tech prod.', 'Textile & Garment prod', 'Light ind. prod.', 'Agrucultural prod.', 'Cultural prod.']
      },
      
      yAxis: {
         title: ''
      },
      
      plotOptions: {
         bar: {
            colors: [
               'rgb(5,82,138)',
               'rgb(58,179,232)',
               'rgb(100,208,218)',
               'rgb(254,159,33)',
               'rgb(227,72,86)',
               'rgb(139,16,62)'
            ],
            colorByPoint: true
         }
      },
      
      series: [{
         name: 'Import Percentage',
         data: [28, 22, 31, 24, 19, 21]
      }]
   });
});