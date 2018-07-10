$(function(){
	var flag = 0;
	$(".cad2").hide();
	$(".cad3").hide();
	$(".seta1 img").hide();
	$(".seta2 img").click(function(){
		if(flag == 0){
			$(".cad1").hide();
			$(".seta1 img").fadeIn("1000");
			$(".cad2").fadeIn("1000");
			flag = 1;
		}
		else{
			if(flag == 1){
				$(".cad2").hide();
				$(".seta2 img").hide();
				$(".cad3").fadeIn("1000");
				flag = 2;
			}
		}
	});
	$(".seta1 img").click(function(){
		if(flag == 1){
			$(".cad2").hide();
			$(".seta1 img").hide();
			$(".cad1").fadeIn("1000");
			flag = 0;
		}
		else{
			if(flag == 2){
				$(".cad3").hide();
				$(".seta2 img").fadeIn("1000");
				$(".cad2").fadeIn("1000");
				flag = 1;
			}
		}
	});
});
