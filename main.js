// Vue.js

// Home Page
var service = new Vue({
  el: '#app',
  data: {
  	text: "Join us for worship and God's word every Saturday at 6pm",
    info: "Pastor Don Brendtro is speaking today, February 5th"
  }
});

// Donation button
var  paypal = new Vue({
   el: '#DonationEle',
   components:{
      'donation-button': {
         template : ''
      }
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
   components:{
      'facebook-icon': {
         template : '<a href="https://www.facebook.com/RestoredLifeOutreach/" class="fa fa-facebook"></a>'
      }
   }
});
var googleEle = new Vue({
   el: '#google_map',
   components:{
      'google-map': {
         template : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.602015939865!2d-103.19442468466086!3d44.07092613333649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x877d4356f0bd2447%3A0x3452ddd0519928a6!2sRestored%20Life%20Outreach%20Fellowship!5e0!3m2!1sen!2sus!4v1634611452324!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
      }
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
// Sermon Page
var sermonDots = new Vue({
  el: '#dots',
  components:{
      'sermon-dots': {
        template: `
          <div class="dot-container">
            <span class="dot" onclick="currentSlide(1)"></span>
          </div>
          `
      }
  }
})
var carousel = new Vue({
  el: '#carousel',
  components:{
      'sermon-carousel': {
        template: `
          <div class="slideshow-container" id="sermon">

            <div class="mySlides">
              <sermon-audio link="https://www.youtube.com/embed/F6z082bsqDk" speaker="Don Brendtro" title="" date="2/5/22"></sermon-audio>
            </div>
			
            <a class="prev" onclick="plusSlides(-1)"><i class="fa-solid fa-arrow-left"></i></a>
            <a class="next" onclick="plusSlides(1)"><i class="fa-solid fa-arrow-right"></i></a>
			

          </div>
          `
      }
  }
})
var sermons = new Vue({
  el: '#sermon',
  components:{
      'sermon-audio': {
        props: ['link','speaker','title','date'],
        template: `
         <div>
          <iframe v-if="link !== ''" class="sermonLink" v-bind:src="link" height="300" width="500"></iframe>
         <div style="border-style: inset;height: 300px;" v-if="link === ''">
            <div v-if="speaker && date !== ''">
              <p style="margin-top: 130px;">
                Come join us on {{date}} as {{speaker}} will be speaking.
              </p>
              <p style="font-style: italic;">Service will be posted by 11:59pm on {{date}}</p>
            </div>
			<div v-if="speaker === ''">
              <p style="font-style: italic;margin-top: 130px">Service will be posted by 11:59pm on {{date}}</p>
            </div>
          </div>
	  <div v-if="date === ''">
            <p class="speaker"> <i class="fa-solid fa-user"></i> {{speaker}}</p>
            <p class="speaker" style="margin-left: 10px;" v-if="title !== ''"><i class="fa-solid fa-book-bible"></i> {{title}}</p> 
          </div>
          <div v-else-if="speaker === ''" >
            <p class="speaker"style="margin-left: 10px;" v-if="title !== ''"><i class="fa-solid fa-book-bible"></i> {{title}}</p> 
            <p class="speaker" ><i class="fa-solid fa-calendar"></i> {{date}}</p>
          </div>
          <div style="display: flex;width: fit-content;margin-left: auto;margin-right: auto;" v-else>
            <p class="speaker"><i class="fa-solid fa-user"></i> {{speaker}}</p>
            <p class="speaker" style="margin-left: 10px;" v-if="title !== ''"><i class="fa-solid fa-book-bible"></i> {{title}}</p>  
            <p class="speaker" style="margin-left: 10px;"><i class="fa-solid fa-calendar"></i> {{date}}</p>
          </div>
        </div>`
      }
  }
})
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
