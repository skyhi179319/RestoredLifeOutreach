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
// Sermon Page
var sermons = new Vue({
  el: '#sermon',
  components:{
      'sermon-audio': {
        props: ['link','speaker'],
        template: `
        <div>
          <iframe class="sermonLink" v-bind:src="link" height="200" width="500"></iframe>
          <p class="speaker">{{speaker}}</p>
        </div>`
      }
  }
})

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
	$(".sermonLink").each(function(){
			$(".sermonLink").css("width",300);
	});
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
