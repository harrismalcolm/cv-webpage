var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var time = new Date().getHours();
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");
var updateClock = function(){
	var message = document.getElementById("timeEvent")
	var lolCat = document.getElementById("lolcat")
	var messageText;
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
	if (time == partyTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
	} else if (time == napTime) {
	image = "http://weknowmemes.com/generator/uploads/generated/g1376701386196819016.jpg";
    messageText = "IZ NAP TIME...";
	} else if (time == lunchTime) {
	image = "https://imgflip.com/s/meme/Heavy-Breathing-Cat.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
	} else if (time == wakeupTime) {
	image = "https://happy-wishes.net/wp-content/uploads/2017/11/confused-cat-in-Good-Morning-sunshine-meme.jpg";
    messageText = "IZ TIME TO GETTUP.";
	} else if (time < noon) {
	image = "https://pbs.twimg.com/media/CR7XSsgWwAAst2I.jpg";
    messageText = "Good morning!";
	} else if (time > evening) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"
    messageText = "Good Evening!";
	} else {
	image = "https://memegenerator.net/img/instances/65550946.jpg"
    messageText = "Good afternoon!";
}

	message.innerText = messageText;
	lolcat.src = image;

	showCurrentTime();
};
var showCurrentTime = function(){

	var clock = document.getElementById("clock");
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var meridian = "AM"

	if (hours >= noon)
	{
		meridian = "PM";
	}
	if (hours > noon)
	{
		hours = hours - 12;
	}
	if (minutes < 10)
	{
		minutes = "0" + minutes;
	}
	if (seconds < 10)
	{
		seconds = "0" + seconds;
	}

	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

	clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.style.background = "#0A8DAB";
	  partyTimeButton.innerText = "Party Over";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyTimeButton.style.background = "#222";
	  partyTimeButton.innerText = "PARTY TIME!"
   }
};

var wakeUpEvent = function (){
	wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function (){
	lunchTime = lunchTimeSelector.value;
};

var napTimeEvent = function (){
	napTime = napTimeSelector.value;
};
partyTimeButton.addEventListener("click", partyEvent);

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

lunchTimeSelector.addEventListener("change", lunchEvent);

napTimeSelector.addEventListener("change", napTimeEvent);
