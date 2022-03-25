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
var slides = document.getElementsByClassName("mySlides");
if(slides.length === 1){
    $(".prev").css("display","none");
    $(".next").css("display","none");
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}