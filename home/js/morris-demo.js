$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            era: '2012',
            val1: 266,
            val2: 22,
            val3: 264,
			val4: 545,
			val5: 657
        }, {
            era: '2013',
            val1: 277,
            val2: 229,
            val3: 244,
			val4: 625,
			val5: 457
        }, {
            era: '2014',
            val1: 491,
            val2: 196,
            val3: 250,
			val4: 265,
			val5: 368
        }, {
            era: '2015',
            val1: 376,
            val2: 359,
            val3: 568,
			val4: 845,
			val5: 277
        }, {
            era: '2016',
            val1: 681,
            val2: 191,
            val3: 229,
			val4: 154,
			val5: 155
        }],
        xkey: 'era',
        ykeys: ['val1', 'val2', 'val3', 'val4', 'val5'],
        labels: ['v1', 'v2', 'v3','v4', 'v5'],
		lineColors:['#85180E','lightgray','#3770BE','darkgray','blue'],
        pointSize: 1,
        hideHover: 'auto',
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
		barColors:['#85180E','lightgray','#3770BE','darkgray','blue'],
        data: [{
            y: '',
            a: 20,
            b: 90,
			c: 30,
			d: 80,
			e: 25
        }, 
        ],
        xkey: 'y',
        ykeys: ['a', 'b','c','d','e'],
        labels: ['a', 'b','c','d','e'],
        hideHover: 'auto',
        resize: true
    });

});
