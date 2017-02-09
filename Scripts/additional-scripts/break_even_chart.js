	var fixedNum1 = localStorage.getItem('fixedNum1');
	var fixedNum2 = localStorage.getItem('fixedNum2');
	var variableNum1 = 0;
	var variableNum2 = localStorage.getItem('variableNum2');
	var totalNum1 = localStorage.getItem('totalNum1');
	var totalNum2 = localStorage.getItem('totalNum2');
	var salesNum1 = 0;
	var salesNum2 = localStorage.getItem('salesNum2');
	var data = {
		    labels: ["Output 0%", "Output 100%"],
		    datasets: [
		        {
		            label: "Fixed Cost",
		            fillColor: "rgba(220,220,220,0.2)",
		            strokeColor: "purple",
		            pointColor: "MediumVioletRed",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(220,220,220,1)",
		            data: [fixedNum1, fixedNum2]
		        },
		        {
		            label: "Variable Cost",
		            fillColor: "rgba(151,187,205,0.2)",
		            strokeColor: "deepskyblue",
		            pointColor: "blue",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(151,187,205,1)",
		            data: [variableNum1, variableNum2]
		        },
		        {
		            label: "Total Cost",
		            fillColor: "rgba(151,187,205,0.2)",
		            strokeColor: "green",
		            pointColor: "ForestGreen",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(151,187,205,1)",
		            data: [totalNum1, totalNum2]
		        },
		        {
		            label: "Sales Revenue",
		            fillColor: "rgba(220,220,220,0.2)",
		            strokeColor: "brown",
		            pointColor: "maroon",
		            pointStrokeColor: "#fff",
		            pointHighlightFill: "#fff",
		            pointHighlightStroke: "rgba(220,220,220,1)",
		            data: [salesNum1, salesNum2]
		        }
		    ]
		};
		var cv = document.getElementById("mycanvas").getContext("2d");
		var mychart = new Chart(cv).Line(data,{
			scaleShowGridLines: true,
			scaleGridLineColor: "lightgrey",
		});

//Button to exit the Chart
var canvasChart = document.getElementById('mycanvas');
var canvasBtn = document.getElementById('canvasBtn');
var canvasWhite = document.getElementById('whiteCanvas');

function exit() {
 	canvasChart.style.visibility = "hidden";
	canvasBtn.style.visibility = "hidden";
	canvasWhite.style.visibility = "hidden";
}