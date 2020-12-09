var score=0, ans1=0, ans2=0, ans3=0 , ans4=0, ans5=0, ans6=0 , ans7=0, ans8=0, ans9=0 , ans10=0, ans11=0, ans12=0 , ans13=0, ans14=0, ans15=0;
function checkAnswerA(){
	ans=f.answer.value
	if(ans=="c" && ans1==0){
		score=score+1;
		alert("Correct!, Your Score Is: "+score); 
		ans1=ans1+1;
	}
	else if(ans!="c" && ans1==0){	alert("Wrong!, Your Score Is: "+score);	ans1=ans1+1;}
}
function checkAnswerB(){
	ans=f.answer.value
	if(ans=="c" && ans2==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans2=ans2+1;}
	else if(ans!="c" && ans2==0){	alert("Wrong!, Your Score Is: "+score);	ans2=ans2+1;}
}
function checkAnswerC(){
	ans=f.answer.value
	if(ans=="c" && ans3==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans3=ans3+1;}
	else if(ans!="c" && ans3==0){	alert("Wrong!, Your Score Is: "+score);	ans3=ans3+1;}
}
function checkAnswerD(){
	ans=f.answer.value
	if(ans=="c" && ans4==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans4=ans4+1;}
	else if(ans!="c" && ans4==0){	alert("Wrong!, Your Score Is: "+score);	ans4=ans4+1;}
}
function checkAnswerE(){
	ans=f.answer.value
	if(ans=="c" && ans5==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans5=ans5+1;}
	else if(ans!="c" && ans5==0){	alert("Wrong!, Your Score Is: "+score);	ans5=ans5+1;}
}
function checkAnswerF(){
	ans=f.answer.value
	if(ans=="c" && ans6==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans6=ans6+1;}
	else if(ans!="c" && ans6==0){	alert("Wrong!, Your Score Is: "+score);	ans6=ans6+1;}
}
function checkAnswerG(){
	ans=f.answer.value
	if(ans=="c" && ans7==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans7=ans7+1;}
	else if(ans!="c" && ans7==0){	alert("Wrong!, Your Score Is: "+score);	ans7=ans7+1;}
}
function checkAnswerH(){
	ans=f.answer.value
	if(ans=="c" && ans8==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans8=ans8+1;}
	else if(ans!="c" && ans8==0){	alert("Wrong!, Your Score Is: "+score);	ans8=ans8+1;}
}
function checkAnswerI(){
	ans=f.answer.value
	if(ans=="c" && ans9==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans9=ans9+1;}
	else if(ans!="c" && ans9==0){	alert("Wrong!, Your Score Is: "+score);	ans9=ans9+1;}	
}
function checkAnswerJ(){
	ans=f.answer.value
	if(ans=="c" && ans10==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans10=ans10+1;}
	else if(ans!="c" && ans10==0){	alert("Wrong!, Your Score Is: "+score);	ans10=ans10+1;}
}
function checkAnswerK(){
	ans=f.answer.value
	if(ans=="c" && ans11==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans11=ans11+1;}
	else if(ans!="c" && ans11==0){	alert("Wrong!, Your Score Is: "+score);	ans11=ans11+1;}
}
function checkAnswerL(){
	ans=f.answer.value
	if(ans=="c" && ans12==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans12=ans12+1;}
	else if(ans!="c" && ans12==0){	alert("Wrong!, Your Score Is: "+score);	ans12=ans12+1;}
}
function checkAnswerM(){
	ans=f.answer.value
	if(ans=="c" && ans13==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans13=ans13+1;}
	else if(ans!="c" && ans13==0){	alert("Wrong!, Your Score Is: "+score);	ans13=ans13+1;}
}
function checkAnswerN(){
	ans=f.answer.value
	if(ans=="c" && ans14==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans14=ans14+1;}
	else if(ans!="c" && ans14==0){	alert("Wrong!, Your Score Is: "+score);	ans14=ans14+1;}
}
function checkAnswerO(){
	ans=f.answer.value
	if(ans=="c" && ans15==0){	score=score+1;	alert("Correct!, Your Score Is: "+score); ans15=ans15+1;}
	else if(ans!="c" && ans15==0){	alert("Wrong!, Your Score Is: "+score);	ans15=ans15+1;}
}
function showResult(){
	if(score == 0){
		alert("First select an option to Proceed");
	}
	else{
		alert("You Final Score Is : "+score+"\nPlease, Press OK To Go Back");
		window.location= 'quizpage.html';
	}
}
function back(){
	window.location= 'index.html';
}
function back2(){
	window.location= 'gamespage.html';
}