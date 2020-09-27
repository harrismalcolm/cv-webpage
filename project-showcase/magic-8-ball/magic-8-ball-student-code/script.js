$(document).ready(function(){
var magicEightBall ={};
magicEightBall.listOfAnswers = ["Ofcourse","Maybe", "Absoultely", "Questionable", "Encouraging", "Possibly", "Yes", "No", "Doubltful"];
$("#answer").hide();
magicEightBall.answer = function()
{	 
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberArray);
 
	var answer = this.listOfAnswers[randomIndex];
	$("#answer").text(answer);
  	console.log(answer);
	$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
};
	
		var onClick = function(){	
      $("#answer").hide();
      setTimeout(
        function(){
          var question = prompt("Ask a YES/NO question.");	
          $("#8ball").effect("shake");
          magicEightBall.answer(question);
          $("#answer").fadeIn(4000);		
			}, 500);
  $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
}
	$("#questionButton").click(onClick);
	
});



