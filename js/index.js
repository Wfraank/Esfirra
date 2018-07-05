$(function(){
	$(".cards2").hide();
	$(".h_token_2").hide();
	var flag = 0;
	$(window).scroll(function(){
		var topo = $(window).scrollTop();
		$(".traço").css("margin-top", topo);
		if(topo > 0){
			$(".cards1").hide();
			$(".cards2").fadeIn("1000");
			$(".seta img").attr("src","img/seta2.png");
			flag = 1;
		}else{
			$(".cards2").hide();
			$(".cards1").fadeIn("1000");
			$(".seta img").attr("src","img/seta.png");
			flag = 0;
		}
	});
	$(".seta img").click(function(){
		if(flag == 0){
			$(".cards1").hide();
			$(".cards2").fadeIn("1000");
			$(".seta img").attr("src","img/seta2.png");
			flag = 1;
		}
		else{
			if(flag == 1){
				$(".cards2").hide();
				$(".cards1").fadeIn("1000");
				$(".seta img").attr("src","img/seta.png");
				flag = 0;
			}
		}
	});
	$(".h_token_1 img").click(function(){
		$(".h_token_1").hide();
		$(".h_token_2").fadeIn("1000");
	});
});


window.onload = function () {

var totalVisitors = 1000;
var visitorsData = {
	"New vs Returning Visitors": [{
		click: visitorsChartDrilldownHandler,
		cursor: "pointer",
		explodeOnClick: false,
		innerRadius: "75%",
		legendMarkerType: "square",
		name: "New vs Returning Visitors",
		radius: "100%",
		showInLegend: true,
		startAngle: 90,
		type: "doughnut",
		dataPoints: [
			{ y: 921, name: "Sua Pontuação", color: "#E7823A" },
			{ y: 79, name: "Pontos a conquistar", color: "#546BC1" }
		]
	}],
	"Sua Pontuação": [{
		color: "#E7823A",
		name: "Sua Pontuação",
		type: "column",
		xValueFormatString: "MMM YYYY",
		dataPoints: [
			{ x: new Date("1 Jan 2015"), y: 1000 },
			{ x: new Date("1 Feb 2015"), y: 1000 },
			{ x: new Date("1 Mar 2015"), y: 1000 },
			{ x: new Date("1 Apr 2015"), y: 956 },
			{ x: new Date("1 May 2015"), y: 956 },
			{ x: new Date("1 Jun 2015"), y: 956 },
			{ x: new Date("1 Jul 2015"), y: 898 },
			{ x: new Date("1 Aug 2015"), y: 898 },
			{ x: new Date("1 Sep 2015"), y: 898 },
			{ x: new Date("1 Oct 2015"), y: 921 },
			{ x: new Date("1 Nov 2015"), y: 921 },
			{ x: new Date("1 Dec 2015"), y: 921 }
		]
	}],
	"Pontos a conquistar": [{
		color: "#546BC1",
		name: "Pontos a conquistar",
		type: "column",
		xValueFormatString: "MMM YYYY",
		dataPoints: [
			{ x: new Date("1 Jan 2015"), y: 0 },
			{ x: new Date("1 Feb 2015"), y: 0 },
			{ x: new Date("1 Mar 2015"), y: 0 },
			{ x: new Date("1 Apr 2015"), y: 44 },
			{ x: new Date("1 May 2015"), y: 44 },
			{ x: new Date("1 Jun 2015"), y: 44 },
			{ x: new Date("1 Jul 2015"), y: 102 },
			{ x: new Date("1 Aug 2015"), y: 102 },
			{ x: new Date("1 Sep 2015"), y: 102 },
			{ x: new Date("1 Oct 2015"), y: 79 },
			{ x: new Date("1 Nov 2015"), y: 79 },
			{ x: new Date("1 Dec 2015"), y: 79 }
		]
	}]
};

var newVSReturningVisitorsOptions = {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Sua Pontuação"
	},
	subtitles: [{
		text: "Clique aqui para ver seu histórico",
		backgroundColor: "#2eacd1",
		fontSize: 16,
		fontColor: "white",
		padding: 5
	}],
	legend: {
		fontFamily: "calibri",
		fontSize: 14,
		itemTextFormatter: function (e) {
			return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
		}
	},
	data: []
};

var visitorsDrilldownedChartOptions = {
	animationEnabled: true,
	theme: "light2",
	axisX: {
		labelFontColor: "#717171",
		lineColor: "#a2a2a2",
		tickColor: "#a2a2a2"
	},
	axisY: {
		gridThickness: 0,
		includeZero: false,
		labelFontColor: "#717171",
		lineColor: "#a2a2a2",
		tickColor: "#a2a2a2",
		lineThickness: 1
	},
	data: []
};

newVSReturningVisitorsOptions.data = visitorsData["New vs Returning Visitors"];
$("#chartContainer").CanvasJSChart(newVSReturningVisitorsOptions);

function visitorsChartDrilldownHandler(e) {
	e.chart.options = visitorsDrilldownedChartOptions;
	e.chart.options.data = visitorsData[e.dataPoint.name];
	e.chart.options.title = { text: e.dataPoint.name }
	e.chart.render();
	$("#backButton").toggleClass("invisible");
}

$("#backButton").click(function() { 
	$(this).toggleClass("invisible");
	newVSReturningVisitorsOptions.data = visitorsData["New vs Returning Visitors"];
	$("#chartContainer").CanvasJSChart(newVSReturningVisitorsOptions);
});

$(".canvasjs-chart-container a").hide();
}
