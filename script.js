
var dollarToILS = 3.4;
var EuroToIls = 3.9;

function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num == Infinity){
		alert('error , you cannot divide by zero')
		// document.getElementById("output-value").innerText= 'error' ;

	}
	else if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));

	// return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}


function sTd(){
	var y = ((document.getElementById("output-value").innerText));
	var number = Number(y.replace(/[^0-9.-]+/g,""));
	var x  = (number/ dollarToILS);
	// alert(x)
	document.getElementById("output-value").innerHTML =x.toFixed(3);

	getOutput();
}

function dTs(){
	var y = ((document.getElementById("output-value").innerText));
	var number = Number(y.replace(/[^0-9.-]+/g,""));
	var x  = (number * dollarToILS);
	// alert(x)
	document.getElementById("output-value").innerHTML =x.toFixed(3);



	getOutput();
}
function sTe(){
	var y = ((document.getElementById("output-value").innerText));
	var number = Number(y.replace(/[^0-9.-]+/g,""));
	var x  = (number/ EuroToIls);
	// alert(x)
	document.getElementById("output-value").innerHTML =x.toFixed(3);


	getOutput();
}
function eTs(){
	var y = ((document.getElementById("output-value").innerText));
	var number = Number(y.replace(/[^0-9.-]+/g,""));
	var x  = (number *  EuroToIls);
	// alert(x)
	document.getElementById("output-value").innerHTML =x.toFixed(3);

	getOutput();

}

