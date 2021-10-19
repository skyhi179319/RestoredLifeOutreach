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