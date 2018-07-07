$(function(){
	$(".cards2").hide();
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
});