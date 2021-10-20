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

// Mobile script
if (window.matchMedia('(max-width: 600px)').matches)
{
    // do functionality on screens smaller than 768px
	$(".mobileHide").each(function(){
        $(".mobileHide").hide(250);
    });
	$(".mobileShow").show(250);
}