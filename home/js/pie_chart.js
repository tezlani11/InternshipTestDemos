$(function () {

    var data = [],series = 3; var ccc=["#85180E","gray","blue"]; var shade="";
    for (var i = 0; i < series; i++) {
        data[i] = {
            label: "",
            data: Math.floor(Math.random() * 100) + 1,
			color:''+ccc[i]
        }
    }

    var placeholder = $("#placeholder");

    $("#example-1").click(function () {

        placeholder.unbind();

        $("#title").text("Pie chart");
        $("#description").text("Semi-transparent, black-colored label background placed at pie edge.");

        $.plot(placeholder, data, {
            series: {
                pie: {
                    show: true,
                    radius: 3 / 4,
                    label: {
                        show: true,
                        radius: 3 / 4,
                        formatter: labelFormatter,
                        background: {
                            opacity: 0.9,
                            color: "#11182B"
                        }
                    }
                }
            },
			grid: {
                hoverable: true,
                clickable: true
            },
            legend: {
                show: false
            }
        });

        setCode([
            "$.plot('#placeholder', data, {",
            "    series: {",
            "        pie: {",
            "            show: true,",
            "            radius: 3/4,",
            "            label: {",
            "                show: true,",
            "                radius: 3/4,",
            "                formatter: labelFormatter,",
            "                background: {",
            "                    opacity: 0.5,",
            "                    color: '#11182B'",
            "                }",
            "            }",
            "        }",
            "    },",
			"    grid: {",
            "        hoverable: true,",
            "        clickable: true",
            "    }",
            "    legend: {",
            "        show: false",
            "    }",
            "});"
        ]);
    });

   

    $("#example-12").click(function () {

        placeholder.unbind();

        $("#title").text("Interactivity");
        $("#description").text("The pie can be made interactive with hover and click events.");

        $.plot(placeholder, data, {
            series: {
                pie: {
                    show: true
                }
            },
            grid: {
                hoverable: true,
                clickable: true
            }
        });

        setCode([
            "$.plot('#placeholder', data, {",
            "    series: {",
            "        pie: {",
            "            show: true",
            "        }",
            "    },",
            "    grid: {",
            "        hoverable: true,",
            "        clickable: true",
            "    }",
            "});"
        ]);

        placeholder.bind("plothover", function (event, pos, obj) {

            if (!obj) {
                return;
            }

            var percent = parseFloat(obj.series.percent).toFixed(2);
            $("#hover").html("<span style='font-weight:bold; color:" + obj.series.color + "'>" + obj.series.label + " (" + percent + "%)</span>");
        });

        placeholder.bind("plotclick", function (event, pos, obj) {

            if (!obj) {
                return;
            }

            percent = parseFloat(obj.series.percent).toFixed(2);
            alert("" + obj.series.label + ": " + percent + "%");
        });
    });

    // Show the initial default chart

    $("#example-1").click();

    // Add the Flot version string to the footer

});

// A custom label formatter used by several of the plots

function labelFormatter(label, series) {
    return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
}

//

function setCode(lines) {
    $("#code").text(lines.join("\n"));
}
