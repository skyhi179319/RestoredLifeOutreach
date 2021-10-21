// Mobile script
if (window.matchMedia('(max-width: 600px)').matches)
{
	$("#moreMedia").html("All Media");
	$("#moreMedia").click(function(){
		console.log("Button Working");
		$(".hide").each(function(){
			$(".hide").show(250);
		});
	});
	$("#lessMedia").click(function(){
		console.log("Button Working");
		$(".hide").each(function(){
			$(".hide").hide(250);
		});
	});

	$(".mobileHide").each(function(){
        $(".mobileHide").hide(250);
    });
	$(".mobileShow").show(250);
}
else{
	$("#moreMedia").click(function(){
		console.log("Button Working");
		$(".hide").each(function(){
			$(".hide").show(250);
		});
	});
	$("#lessMedia").click(function(){
		console.log("Button Working");
		$(".hide").each(function(){
			$(".hide").hide(250);
		});
	});
}