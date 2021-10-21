// Vue.js

// Home Page
var  service = new Vue({
   el: '#service',
   data: {
      text : "Service starts at 6PM every Saturday"
   }
});

// Mobile script
if (window.matchMedia('(max-width: 600px)').matches)
{
	$("#moreMedia").html("All Media");
	$("#moreMedia").click(function(){
		$(".hide").each(function(){
			$(".hide").show(250);
		});
	});
	$("#lessMedia").click(function(){
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
		$(".hide").each(function(){
			$(".hide").show(250);
		});
	});
	$("#lessMedia").click(function(){
		$(".hide").each(function(){
			$(".hide").hide(250);
		});
	});
}