// Vue.js
Vue.config.devtools = true;

// Home Page
var service = new Vue({
    el: '#app',
    data: {
        text: "Join us for worship and God's word every Saturday at 6pm",
        info: ""
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
            template : '<a href="https://www.facebook.com/RestoredLifeOutreach/" class="fa fa-facebook" target="_blank"></a>'
        }
    }
});
var  youtube = new Vue({
    el: '#youtubeEle',
    components:{
        'youtube-icon': {
            template : '<a href="https://www.youtube.com/channel/UCGzpBSJ7XOZ_QaxYlDv2P0g" class="fa fa-youtube" target="_blank"></a>'
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
// Media Page
var mobileSet = new Vue({
    el: '#mobile-set',
    components:{
        'mobile-set': {
            template: `
            <div>
                 <div class="column mobileShow mobileColumn" style = "display: none;">
					<img src="/files/theme/images/1.png">
					<img src="/files/theme/images/8.jpeg">
					<img src="/files/theme/images/12.jpeg">
					<img src="/files/theme/images/7.jpeg">
					<img src="/files/theme/images/6.jpeg">
					<img src="/files/theme/images/9.jpeg">
					<img class="hide one" src="/files/theme/images/13.jpg">
					<img class="hide" src="/files/theme/images/5.png">
					<img class="hide" src="/files/theme/images/4.jpg">
					<img class="hide" src="/files/theme/images/3.png">
					<img class="hide" src="/files/theme/images/2.jpeg">
					<img class="hide" src="/files/theme/images/10.jpeg">
					<img class="hide" src="/files/theme/images/11.jpeg">
					<img class="hide" src="/files/theme/images/14.png">
					<img class="hide" src="/files/theme/images/15.png">
					<video class="hide one" width="320" height="240" controls>
					<source src="/files/theme/videos/video-1634529419.mp4" type="video/mp4">
					</video>
					<video class="hide one" width="320" height="240" controls>
					<source src="/files/theme/videos/2.mp4" type="video/mp4">
					</video>
					<video class="hide" width="320" height="240" controls>
					<source src="/files/theme/videos/3.mp4" type="video/mp4">
					</video>
				  </div>
            </div>
          `
        }
    }
})

var photoset1 = new Vue({
    el: '#photo-set-one',
    components:{
        'photo-one': {
            template: `
            <div>
                <img src="/files/theme/images/5.png">
                <img src="/files/theme/images/4.jpg">
                <img src="/files/theme/images/3.png">
                <img src="/files/theme/images/2.jpeg">
                <img src="/files/theme/images/10.jpeg">
                <img src="/files/theme/images/11.jpeg">
                <img src="/files/theme/images/14.png">
                <img class="hide" src="/files/theme/images/15.png">
            </div>
          `
        }
    }
})
var photoset2 = new Vue({
    el: '#photo-set-two',
    components:{
        'photo-two': {
            template: `
            <div>
                <img src="/files/theme/images/1.png">
                <img src="/files/theme/images/8.jpeg">
                <img src="/files/theme/images/12.jpeg">
                <img src="/files/theme/images/7.jpeg">
                <img src="/files/theme/images/6.jpeg">
                <img src="/files/theme/images/9.jpeg">
                <img src="/files/theme/images/13.jpg">
            </div>
          `
        }
    }
})
var videoset1 = new Vue({
    el: '#video-set-one',
    components:{
        'video-one': {
            template: `
            <div>
                <video class="hide" width="320" height="240" controls>
                <source src="/files/theme/videos/3.mp4" type="video/mp4">
                </video>
            </div>
          `
        }
    }
})
var videoset2 = new Vue({
    el: '#video-set-two',
    components:{
        'video-two': {
            template: `
            <div>
                <video class="hide" width="320" height="240" controls>
                <source src="/files/theme/videos/video-1634529419.mp4" type="video/mp4">
                </video>
                <video class="hide" width="320" height="240" controls>
                <source src="/files/theme/videos/2.mp4" type="video/mp4">
                </video>
            </div>
          `
        }
    }
})
// Event Page
var churchEvents = new Vue({
    el: '#churchEvents',
    components:{
        'church-events': {
            template: `
			<div id="churchEvent">
				
            </div>`
        }
    }
})
var churchEvent = new Vue({
    el: '#churchEvent',
    components:{
        'church-event': {
            props: ['img','name','date','outreach'],
            template: `
            <div>
                <div class="wallColumn">
                    <div class="wallCard">
                      <img v-if="img !== ''" class="" v-bind:src="img" height="200" width="200">
                      <div class="wallContainer">
                        <p><i class="fa-solid fa-pen"></i> {{name}}</p>
						<div class="break"></div>
                        <p class="wallTitle" style="margin-top: 5px;" v-if="date !== ''"><i class="fa-solid fa-calendar"></i> {{date}}</p>
						<div class="break"></div>
                        <p class="wallTitle" style="margin-top: 5px;"><i class="fa-solid fa-hand-holding-hand"></i> {{outreach}}</p>
                      </div>
                    </div>
                </div>        
            </div>`
        }
    }
})

// Sermon Page
var sermonDots = new Vue({
    el: '#dots',
    components:{
        'sermon-dots': {
            template: `
          <div class="dot-container">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
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
              <sermon-audio link="" speaker="Lorene Ness" title="" date="3/26/22"></sermon-audio> 
			</div>
			<div class="mySlides">
              <sermon-audio link="https://www.youtube.com/embed/E-4C-igzHdo" speaker="Kelly Patterson" title="That One Thing" date="3/19/22"></sermon-audio> 
			</div>
		    <div class="mySlides">
              <sermon-audio link="https://www.youtube.com/embed/lKCL8tVreFM" speaker="Aleah" title="" date="3/12/22"></sermon-audio> 
            </div>
		        <div class="mySlides">
              <sermon-audio link="https://www.youtube.com/embed/tWzchnT3uvs" speaker="David Patterson" title="Who Says You Can't" date="2/26/22"></sermon-audio> 
            </div>
			      <div class="mySlides">
              <sermon-audio link="https://www.youtube.com/embed/jc1jNdequkI" speaker="Kelly Patterson" title="Let Your Yes Be Yes" date="2/19/22"></sermon-audio> 
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
          <div class="sermonFill" style="border-style: inset;height: 300px;margin-left: auto;margin-right: auto;" v-if="link === ''">
            <div v-if="speaker && date !== ''">
              <p class="serviceFillFont" style="margin-top: 130px;">
                Come join us on {{date}} as {{speaker}} will be speaking.
              </p>
              <p class="servicePostFont" style="font-style: italic;">Service will be posted by 11:59 on {{date}}</p>
            </div>
			<div v-if="speaker === ''">
              <p class="servicePostFont" style="font-style: italic;margin-top: 130px">Service will be posted by 11:59pm on {{date}}</p>
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
          <div class="sermonInfo" style="display: flex;" v-else>
            <p class="speaker"><i class="fa-solid fa-user"></i> {{speaker}}</p>
            <p class="speaker" style="margin-left: 10px;" v-if="title !== ''"><i class="fa-solid fa-book-bible"></i> {{title}}</p>  
            <p class="speaker" style="margin-left: 10px;"><i class="fa-solid fa-calendar"></i> {{date}}</p>
          </div>
        </div>`
        }
    }
})
var wall = new Vue({
    el: '#pastSermonWall',
    components:{
        'past-sermons': {
            template: `
			<div id="pastSermons">
              <past-audio link="https://www.youtube.com/embed/F6z082bsqDk" speaker="Don Brendtro" title="" date="2/5/22"></past-audio>
			  <past-audio link="https://www.youtube.com/embed/cjUCtGVo1Q0" speaker="David Patterson" title="7 Ways to Prepare for Jesus' Return" date="2/12/22"></past-audio>
            </div>`
        }
    }
})
var past_sermons = new Vue({
    el: '#pastSermons',
    components:{
        'past-audio': {
            props: ['link','speaker','title','date'],
            template: `
            <div>
                <div class="wallColumn">
                    <div class="wallCard">
                      <iframe v-if="link !== ''" class="sermonLink" v-bind:src="link" height="200" width="200"></iframe>
                      <div class="wallContainer">
                        <p><i class="fa-solid fa-user"></i> {{speaker}}</p>
                        <p class="wallTitle" v-if="title === ''"><i class="fa-solid fa-book-bible"></i> No Title Available</p>
                        <p class="wallTitle" v-if="title !== ''"><i class="fa-solid fa-book-bible"></i> {{title}}</p>
                        <p class="wallTitle"><i class="fa-solid fa-calendar"></i> {{date}}</p>
                      </div>
                    </div>
                </div>
            </div>`
        }
    }
})