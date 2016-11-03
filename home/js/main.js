/*

*/

// COLUMN AND LINE CHART SCRIPT
$(function() {
   $('#MSChartContainer').highcharts({
      chart: {
         backgroundColor: 'rgb(17,24,43)',
         style: {
            fontFamily: 'Calibri',
            fontColor: 'rgb(32,205,205)'
         }
      },
	  credits:{enable:false},
      title: {
         text: 'Monthly Statistics on Total Retail Sales of Consumer Goods in Zhejiang Province',
         useHTML: true
      },

      subtitle: {
         text: 'Source: Unknown',
      },

      xAxis: {
         categories: ['2015 Jan-Feb', '2015 Mar', '2015 Apr', '2015 May', '2015 Jun', '2015 Jul', '2015 Aug', '2015 Sep', '2015 Oct', '2015 Nov', '2015 Dec', '2016 Mar', '2016 Apr', '2016 May'],
         useHTML: true
      },

      yAxis: {
         title: {
            text: 'Chinese RMB'
         }
      },

      plotOptions: {
         series: {
            borderColor: 'rgb(254,181,66)'
         }
      },

      tooltip: {
         backgroundColor: 'rgb(52,59,78)',
         formatter: function() {
            return '<span style="color: rgb(255,255,255); font-weight: bold;">' + 
               this.x + 
               '</span><br>' + 
               '<span style="color: rgb(255,255,255)">Total Retail Sales: </span>' + 
               '<span style="color: rgb(255,255,255); font-weight: bold;">' + this.y + 
               '</span>'
         }
      },

      series: [{
         name: '<span style="color: rgb(255,255,255)">Total Retail Sales</span>',
         type: 'column',
         color: 'rgb(254,181,66)',
         data: [5356, 6678, 6920, 7345, 9299, 7021, 4321, 9143, 8267, 2598, 5120, 6490, 5265]
      }, {
         name: '<span style="color: rgb(255,255,255)">Month Special</span>',
         type: 'line',
         color: 'rgb(255,0,33)',
         data: [5301, 6602, 6820, 7340, 6799, 7002, 7143, 7298, 7499, 6278, 5009, 6071, 8428],
      }]
   });
});


// DONUT CHART SCRIPT
$(function() {
   $('#SLChartContainer').highcharts({
      chart: {
         type: 'pie',
         backgroundColor: 'rgb(17,24,43)',
         style: {
            fontFamily: 'Calibri',
            // fontColor: 'rgb(0,0,0)'
         }
      },

      tooltip: {
         backgroundColor: 'rgb(52,59,78)',
         formatter: function() {
            return '<span style="color: rgb(255,255,255)">Total Retail Sales: </span>' + 
               '<span style="color: rgb(255,255,255); font-weight: bold;">' + this.y + 
               '</span>'
         }
      },

      title: {
         text: 'Retail Sales of Consumer Goods in Zhejiang Province'
      },

      subtitle: {
         text: 'Source: Unknown'
      },

      plotOptions: {
         pie: {
            borderColor: 'rgb(56,63,82)'
         }
      },

      series: [{
         name: 'Total Retail Sales',
         innerSize: '50%',
         dataLabels: {
            enabled: true,
            distance: -30
         },
         data: [
            {
               name: 'Total: City',
               y: 49889,
               borderColor: 'rgb(247,148,29)',
               color: 'rgb(247,148,29)'
            },
            {
               name: 'Total: Town',
               y: 8236,
               borderColor: 'rgb(29,117,189)',
               color: 'rgb(29,117,189)'
            },
            {
               name: 'Total: Rural Area',
               y: 5595,
               borderColor: 'rgb(191,30,46)',
               color: 'rgb(191,30,46)'
            }
         ]
      }]
   });
});


// SPIDER CHART SCRIPT
$(function() {
   $('#CKChartContainer').highcharts({
      chart: {
         polar: true,
         backgroundColor: 'rgb(17,24,43)',
      },

      title: {
         text: ''
      },

      xAxis: {
         title: {
            text: 'Cities'
         },
         categories: [
            'Huzhou', 'Jiaxing', 'Hangzhou', 
            'Shaoxing', 'Taizhou', 'Ningbo', 
            'Jinhua', 'Quzhou', 'Lishui', 
            'Wenzhou', 'Zhoushan', 'Yiwu'
         ],
         lineWidth: 0,
         tickmarkPlacement: 'on'
      },

      yAxis: {
         gridLineInterpolation: 'polygon',
         min: 0
      },

      plotOptions: {
         series: {
            lineColor: 'rgb(255,255,255)',
            lineWidth: 1
         }
      },

      tooltip: {
         backgroundColor: 'rgb(52,59,78)',
         formatter: function() {
            return '<span style="color: rgb(255,255,255); letter-spacing: 0.5px;">' + this.x +'</span><br>' + 
               '<span style="color: rgb(255,255,255);">Amount of Money: </span>' +
               '<span style="color: rgb(255,255,255); font-weight: bold;">' + this.y + 
               '</span>'
         }
      },

      series: [{
         name: '<span style="color: rgb(255,255,255);">Amount of Money</span>',
         type: 'area',
         color: 'rgb(145,56,74)',
         data: [
            35461, 38500, 65033, 
            45980, 55400, 62900, 
            47223, 41500, 32391,
            49103, 22100, 31276
         ]
      }]
   });
});


// COLUMN STACKING SCRIPT
$(function() {
   $('#SBCChartContainer').highcharts({
      chart: {
         type: 'column',
         backgroundColor: 'rgb(17,24,43)',
      },

      title: {
         text: 'Zhejiang Province Wholesale-Retail by Cities'
      },

      xAxis: {
         title: {
            text: 'Cities'
         },
         categories: [
            'Huzhou', 'Jiaxing', 'Hangzhou', 
            'Shaoxing', 'Taizhou', 'Ningbo', 
            'Jinhua', 'Quzhou', 'Lishui', 
            'Wenzhou', 'Zhoushan', 'Yiwu'
         ]
      },

      yAxis: {
         title: {
            text: ''
         }
      },

      plotOptions: {
         column: {
            stacking: 'percent',
            borderColor: ''
         }
      },

      tooltip: {
         backgroundColor: 'rgb(52,59,78)',
         formatter: function() {
            return '<span style="color: rgb(255,255,255); letter-spacing: 0.15em;">' + this.x +'</span><br>' + 
               '<span style="color: rgb(255,255,255); letter-spacing: 0.15em;>' + this.series.name + '</span>'+ 
               '<span style="color: rgb(255,255,255); font-weight: bold;">' + ': ' + this.y + '</span>'
         }
      },

      series: [{
         name: '<span style="color: rgb(255,255,255)">Wholesale</span>',
         color: 'rgb(172,37,44)',
         data: [
            5461, 28500, 55033, 
            35980, 45400, 52900, 
            27223, 61500, 2391,
            19103, 32100, 51276
         ]
      }, {
         name: '<span style="color: rgb(255,255,255)">Retail</span>',
         color: 'rgb(222,157,57)',
         data: [
            15461, 8500, 25033, 
            25980, 15400, 62900, 
            27223, 21500, 12391,
            29103, 2100, 11276
         ]
      }]
   });
});


// SPLINE AREA SCRIPT
$(function() {
   $('#PMChartContainer').highcharts({
      chart: {
         backgroundColor: 'rgb(17,24,43)'
      },

      title: {
         text: 'Important Production Materials in Zhejiang Province'
      },

      xAxis: {
         tickmarkPlacement: 'on',
         categories: ['Coal', 'Refined Oil', 'Steel', 'Rubber', 'Fertilizer', 'Non-Ferrous Metals', 'Cement']
      },

      yAxis: {
         title: {
            text: ''
         }
      },

      tooltip: {
         backgroundColor: 'rgb(52,59,78)',
         formatter: function() {
            return '<span style="color: rgb(255,255,255);">' + this.x +'</span><br>' + 
               '<span style="color: rgb(255,255,255);>' + this.series.name + '</span>'+ 
               '<span style="color: rgb(255,255,255); font-weight: bold;">' + ': ' + this.y + '</span>'
         }
      },

      series: [{
         name: '<span style="color: rgb(255,255,255)">Jan-Apr Cumulative Sales Volume</span>',
         type: 'areaspline',
         color: 'rgb(252,176,64)',
         data: [1341, 3455, 5488, 2133, 5109, 3290, 1123]
      }, {
         name: '<span style="color: rgb(255,255,255)">Cumulative consumption year by year</span>',
         type: 'areaspline',
         color: 'rgb(33,139,187)',
         data: [5341, 4455, 2488, 4133, 1109, 5290, 6123]
      }, {
         name: '<span style="color: rgb(255,255,255)">Jan-Apr Average Price</span>',
         type: 'spline',
         color: 'rgb(215,29,46)',
         data: [2056, 4944, 3846, 2323, 3585, 7524, 3144]
      }]
   });
});


// BAR CHART SCRIPT
$(function() {
   $('#EBChartContainer').highcharts({
      chart: {
         type: 'bar',
         backgroundColor: 'rgb(17,24,43)'
      },

      title: {
         text: 'New Independent Retail Enterprises in Zhejiang Province'
      },

      xAxis: {
         categories: ['Hypermarket', 'Supermarket', 'Convinient Store', 'Warehouse', 'DP Store', 'Special Store', 'Exclusive Shop']
      },

      yAxis: {
         min: -85,
         max: 85,
         title: {
            text: ''
         }
      },

      plotOptions: {
         series: {
            stacking: 'normal'
         },
         bar: {
            borderColor: ''
         }
      },

      tooltip: {
         formatter: function() {
            return '<span style="color: rgb(255,255,255);">' + this.point.category + '</span><br>' + 
               '<span style="color: rgb(255,255,255);">Year - ' + this.series.name + ': </span>' + 
               '<span style="color: rgb(247,148,29); font-weight: bold;">' + Highcharts.numberFormat(Math.abs(this.point.y), 0) + '</span>';
         },
         backgroundColor: 'rgb(52,59,78)'
      },

      series: [{
         name: '<span style="color: rgb(255,255,255);">2016</span>',
         color: 'rgb(0,173,239)',
         data: [-35, -46, -16, -4, -68, -80, -4]
      }, {
         name: '<span style="color: rgb(255,255,255);">2015</span>',
         color: 'rgb(247,148,29)',
         data: [31, 41, 25, 6, 45, 71, 23]
      }]
   });
});


// PYRAMID SCRIPT
$(function() {
   $('#DNChartContainer').highcharts({
      chart: {
         type: 'pyramid',
         backgroundColor: 'rgb(17,24,43)'
         // marginLeft: -10
      },

      title: {
         text: 'Sales of Major Daily Necessities in Zhejiang Province'
      },

      plotOptions: {
         pyramid: {
            borderColor: ''
         }
      },

      series: [{
         name: 'Budget',
         dataLabels: {
            distance: 10
         },
         data: [
            ['Foodstuff', 4198],
            ['Aquatic', 2190],
            ['Fruit', 1900],
            ['Vegetables', 1500],
            ['Egg', 1021]
         ]
      }]
   });
});
