function getDate(){
	var hours = {13:  1, 14:  2, 15: 3, 16: 4, 17: 5, 18: 6, 19: 7, 20: 8, 21: 9, 22: 10, 23: 11}
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var d = new Date();
	var day = days[d.getDay()];
	var hour = d.getHours().toString();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds()
	if (hour >= 12 && hour <= 23){
		hour = hours[hour] + " PM"
	}else{
		hour = hour + "AM"
	}

	console.log("Today is : " + day + "\n" + "Current time is : " + hour + " : " + minutes + " : " + seconds)
}

function reverser(num){
	var value = num.toString();
	var array = value.split("");
	array.reverse();
	return array.join("");
}

function factorial(num){
	var answer = 1;
	for(let i = num; i >= 1; i--){
		answer = answer * Number(i)
	}
	return answer
}

function largFinder(num1, num2){
	var larger = Math.max(num1, num2)
	return larger
}

function joiner(array){
	var answer = array.join(",")
	var answer = answer + "\n" + array.join("+")
	return answer
}

function month_name(date){
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return monthNames[date.getMonth()]
}


function upperTester(value){
	if (value[0] == value[0].toUpperCase()){
		return true
	} else{
		return false
	}
}


function drawSmile(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.beginPath();
	ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
	ctx.moveTo(110, 75);
	ctx.arc(75, 75, 35, 0, Math.PI, false);
	ctx.moveTo(65, 65);
	ctx.arc(60, 65, 5, 0, Math.PI * 2, true); 
	ctx.moveTo(95, 65);
	ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
	ctx.stroke();
}



function getPatter(){
	console.log(document.getElementById('string-3').textContent);
	console.log(document.getElementById('string-5').textContent);
	console.log(document.getElementById('string-2').textContent);
	console.log(document.getElementById('string-6').textContent);
	console.log(document.getElementById('string-4').textContent);
	console.log(document.getElementById('string-1').textContent);
}


function makeToDos(){
	var tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
	var ol = document.getElementById("todo-list");
	for (var i in tasks){
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(tasks[i]));
		ol.appendChild(li);
	}
}

function articleScraper(){
	var elementList = document.querySelector("article");
	var pElementList = elementList.querySelectorAll('p')
	pElementList.forEach(p => p.insertAdjacentHTML('afterend', '<hr/>'))
}

function itemChange(){
	var elementList = document.getElementById("cart-items");
	var divElements = elementList.querySelectorAll('div');
	var findToRemove = "Cola";
	var findToChange = "Chocolate"
	findToRemove.toUpperCase();
	findToChange.toUpperCase();

	var sp = document.createElement("span");
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "item");
	sp.setAttribute("class", "qty");
	newDiv.appendChild(document.createTextNode("Canned Fish"));
	sp.appendChild(document.createTextNode("x 3"));
	newDiv.appendChild(sp);



	for (var i  = 0; i < divElements.length; i++){
		var divElement = divElements[i];
		var txtValue = divElement.textContent || divElement.innerText;
		// var divChng = divElements[i].parentNode;

		if (txtValue.indexOf(findToRemove) !== -1){
			divElements[i].remove();
		}
		if (txtValue.indexOf(findToChange) !== -1){
			// divElements.replaceChild(newDiv, divElements[i]);
		}

	}
	elementList.appendChild(newDiv);
}




function tasksAppender(){

	while (true){
		var ul = document.getElementById("dynamic-todo-list");
		var value = prompt("Enter the task", '')

		if (value == null || value == ""){
			break;
		}
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(value));
		ul.appendChild(li);
	}
}

//answer for 1st task: it would write 10s because cicle write i in one memory

getDate(); //first task

//second tasks
reverser(123);
factorial(5);
largFinder(1, 5);
joiner([1,2,3]);
month_name(new Date("11/13/2014"));
upperTester("Asd");

//4th tasks
drawSmile();
getPatter();
makeToDos();
articleScraper();
itemChange();

//last one
tasksAppender();







