// Vue.js

// Home Page
var  service = new Vue({
   el: '#service',
   data: {
      text : "Service starts at 6pm every Saturday"
   }
});

// Contact Page
var  phone = new Vue({
   el: '#phoneEle',
   data: {
	  phoneText: "605-545-0606",
	  phoneLink: "tel:+1605-545-0606",
   }
});
var  email = new Vue({
   el: '#emailEle',
   data: {
	  emailText: "restoredlifeoutreach@gmail.com",
	  emailLink: "mailto: restoredlifeoutreach@gmail.com"
   }
});
var  facebook = new Vue({
   el: '#facebookEle',
   data: {
	  link: "https://www.facebook.com/RestoredLifeOutreach/",
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