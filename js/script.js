var score = 0;
var streak = 0;
var counter = 0;

document.addEventListener('keyup', function(event) {checkResult();});

function start () {
	document.getElementById("startbutton").disabled = true;
	document.getElementsByClassName("finish")[0].style.backgroundColor = '#FF0000';
	document.getElementById("finishbutton").disabled = false;
	task_generator();
	document.getElementsByClassName("start")[0].style.backgroundColor = '#90EE90';  	
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function task_generator() 
{
	var lvl = difficulty();
	var x = getRandomInt(11);
	var y = getRandomInt(11);
	sum = x + y;
	document.getElementById("start").innerHTML = x + " + " + y + " = " + " ? ";
	if (lvl > 1)
	{
		var x = getRandomInt(101);
	  var y = getRandomInt(101);
	  sum = x + y;
	  document.getElementById("start").innerHTML = x + " + " + y + " = " + " ? ";
	}
}

function checkResult()
{
  if (event.code == "Enter") 
  {
   	var input_from_user = document.getElementById("input").value;
    if (input_from_user != "") 
    {
	  	if(sum == input_from_user)
	    {
	    	streak++;
	    	console.log(streak); 
	    	score = score + 1 + howMuchTimesDivided(streak, 6);
				task_generator();
				/*console.log(score);*/
				document.getElementById("score").innerHTML = "Score: " + score;
				document.getElementById("streak").innerHTML = "Streak: " + streak;
				document.getElementById("input").value = "";
				/*console.log(sum);
				console.log(input_from_user);*/
			}
			else
			{ 
				streak = 0;
				score--;
				task_generator();
				/*console.log(score);*/
				document.getElementById("score").innerHTML = "Score: " + score;
				document.getElementById("streak").innerHTML = "Streak: " + streak;
				document.getElementById("input").value = "";
				/*console.log(sum);
				console.log(input_from_user);*/
			}
		}
	}
}

function finish () {
	var accept = confirm("Are you sure?");
	if (accept === true) {
		document.getElementById("start").innerHTML = "Let's start";
		document.getElementById("startbutton").disabled = false;
		document.getElementsByClassName("start")[0].style.backgroundColor = '#00ff00';
		document.getElementById("finishbutton").disabled = true;
		document.getElementsByClassName("finish")[0].style.backgroundColor = '#FF6565';
		score = 0;
		streak = 0;
		document.getElementById("streak").innerHTML = "Streak: " + score;
		document.getElementById("score").innerHTML = "Score: " + score;
	}
}

function difficulty ()
{
	let lvl = 1;
	if (score%10 == 0 && score != 0) 
	{
		lvl++;
	}
	return lvl;
}

function howMuchTimesDivided (x, y)
{
	if (x % y == 0)
	{
		counter++;
	}
	console.log(counter);
	return counter;
}