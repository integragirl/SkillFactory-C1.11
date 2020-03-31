const timer = document.querySelector('.countdown');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const message = document.querySelector('.message');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

minutes.onkeydown = function (e) {
	answ = !(/^[А-Яа-яA-Za-z -]$/.test(e.key));
	return answ
}

seconds.onkeydown = function (e) {
	answ = !(/^[А-Яа-яA-Za-z -]$/.test(e.key));
	return answ
}

minutes.onkeyup = function (e) {
	if (minutes.value > 59) {minutes.value = 59}
	if (minutes.value < 0) {minutes.value = 0}
  countMin = minutes.value
}

seconds.onkeyup = function (e) {
	if (seconds.value > 59) {seconds.value = 59}
	if (seconds.value < 0) {seconds.value = 0}
  countSec = seconds.value
}

let countSec = 0;
let countMin = 0;
let timeinterval = 0;

const updateText = () =>{	
  minutes.value = (0 + String(countMin)).slice(-2);
  seconds.value = (0 + String(countSec)).slice(-2);
}
updateText();

const countDown = () => {	
	let total = countSec + countMin * 60;
  timeinterval = setTimeout(countDown, 1000);
  if (total <= 0) {
    clearInterval(timeinterval);
    timer.style.display = 'none';
    message.innerHTML = '<p>I am done...</p>'
  }
  if(countSec > 0) countSec--;
  else{
  	countSec = 59;
    countMin--;
  } 
  updateText();
}

plus.onclick = () =>{
  if(countSec < 59) ++countSec;
  else{
  	countSec = 0;
  	++countMin;
  }
  updateText()
}

minus.onclick = () =>{
	if(countMin <= 0 && countSec===0){
  	countSec = 0;
    countMin = 0;
    return;
  }
  if(countSec > 0) --countSec;
  else{
  	countSec = 59;
  	--countMin;
  }
  updateText();
}

start.onclick = () => {
	  countDown();  
}

stop.onclick = () => {
	clearTimeout(timeinterval) 
}