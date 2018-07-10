$(function(){
	$(".c5").hide();
	$(".c6").hide();
	$(".c7").hide();
	$(".c8").hide();
	$(".apareceC11").hide();
	$(".apareceC12").hide();
	$(".apareceC21").hide();
	$(".apareceC22").hide();
	$(".apareceC31").hide();
	$(".apareceC32").hide();
	$(".apareceC41").hide();
	$(".apareceC42").hide();
	$(".apareceC51").hide();
	$(".apareceC52").hide();
	$(".apareceC61").hide();
	$(".apareceC62").hide();
	$(".apareceC71").hide();
	$(".apareceC72").hide();
	$(".apareceC81").hide();
	$(".apareceC82").hide();
	var flag = 0;
	$(".sete img").click(function(){
		if(flag == 1){
			$(".c5").hide();
			$(".c1").fadeIn("1000");
			flag = 0;
		}else{
			if(flag == 2){
				$(".c6").hide();
				$(".c2").fadeIn("1000");
				flag = 1;
			}else{
				if(flag == 3){
					$(".c7").hide();
					$(".c3").fadeIn("1000");
					flag = 2;
				}else{
					if(flag == 4){
						$(".c8").hide();
						$(".c4").fadeIn("1000");
						flag = 3;
					}
				}
			}
		}
	});

	$(".setd img").click(function(){
		if(flag == 0){
			$(".c1").hide();
			$(".c5").fadeIn("1000");
			flag = 1;
		}else{
			if(flag == 1){
				$(".c2").hide();
				$(".c6").fadeIn("1000");
				flag = 2;
			}else{
				if(flag == 2){
					$(".c3").hide();
					$(".c7").fadeIn("1000");
					flag = 3;
				}else{
					if(flag == 3){
						$(".c4").hide();
						$(".c8").fadeIn("1000");
						flag = 4;
					}
				}
			}
		}
	});

	$("img.validaC11").click(function(){
		$(".some1").hide();
		$(".apareceC11").fadeIn("3000");
		$(".c1").css("background","green");
	});
	$("img.validaC12").click(function(){
		$(".some1").hide();
		$(".apareceC12").fadeIn("3000");
		$(".c1").css("background","red");
	});
		$("img.validaC21").click(function(){
		$(".some2").hide();
		$(".apareceC21").fadeIn("3000");
		$(".c2").css("background","green");
	});
	$("img.validaC22").click(function(){
		$(".some2").hide();
		$(".apareceC22").fadeIn("3000");
		$(".c2").css("background","red");
	});
		$("img.validaC31").click(function(){
		$(".some3").hide();
		$(".apareceC31").fadeIn("3000");
		$(".c3").css("background","green");
	});
	$("img.validaC32").click(function(){
		$(".some3").hide();
		$(".apareceC32").fadeIn("3000");
		$(".c3").css("background","red");
	});
		$("img.validaC41").click(function(){
		$(".some4").hide();
		$(".apareceC41").fadeIn("3000");
		$(".c4").css("background","green");
	});
	$("img.validaC42").click(function(){
		$(".some4").hide();
		$(".apareceC42").fadeIn("3000");
		$(".c4").css("background","red");
	});
		$("img.validaC51").click(function(){
		$(".some5").hide();
		$(".apareceC51").fadeIn("3000");
		$(".c5").css("background","green");
	});
	$("img.validaC52").click(function(){
		$(".some5").hide();
		$(".apareceC52").fadeIn("3000");
		$(".c5").css("background","red");
	});
		$("img.validaC61").click(function(){
		$(".some6").hide();
		$(".apareceC61").fadeIn("3000");
		$(".c6").css("background","green");
	});
	$("img.validaC62").click(function(){
		$(".some6").hide();
		$(".apareceC62").fadeIn("3000");
		$(".c6").css("background","red");
	});
		$("img.validaC71").click(function(){
		$(".some7").hide();
		$(".apareceC71").fadeIn("3000");
		$(".c7").css("background","green");
	});
	$("img.validaC72").click(function(){
		$(".some7").hide();
		$(".apareceC72").fadeIn("3000");
		$(".c7").css("background","red");
	});
		$("img.validaC81").click(function(){
		$(".some8").hide();
		$(".apareceC81").fadeIn("3000");
		$(".c8").css("background","green");
	});
	$("img.validaC82").click(function(){
		$(".some8").hide();
		$(".apareceC82").fadeIn("3000");
		$(".c8").css("background","red");
	});
});