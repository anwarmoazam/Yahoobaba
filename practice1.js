// document.write("<table border='1'>");
// for(let row=1; row<=100; row=row+10){
// 	document.write(`<tr>`);
// 	for(let column=row; column < row+10; column++){
// 		document.write(`<td>${column}</td>`);
// 	}
// 	document.write("</tr>")
// }
// document.write("</table>")
// document.write("<br>")

// for(let i=1; i<=5; i++){
// 	for(let j=1; j<=i; j++){
// 		document.write(j+" ");
// 	}
// 	document.write("<br>");
// }

// document.write("<br>");

// for(let i=1; i<=5; i++){
// 	for(let j=1; j<=i; j++){
// 		document.write(i+" ");
// 	}
// 	document.write("<br>");
// }

// document.write("<br>");

// for(let i=5; i>=1; i--){
// 	for(let j=1; j<=i; j++){
// 		document.write(i+" ");
// 	}
// 	document.write("<br>");
// }

// document.write("<br>");

// for(let i=5; i>=1; i--){
// 	for(let j=i; j>=1; j--){
// 		document.write(j+" ");
// 	}
// 	document.write("<br>");
// }

// let array = new Array("Anwar","Hafiz","Gajendra Sharma","Ibrahim Ji","Anwar","Tarannum");

// document.write("<br>");

// document.write('Array : ' + array);

// let outputIndexOf = array.indexOf("Anwar");

// let outputLastIndexOf = array.lastIndexOf("Anwar");

// let outputIncludes = array.includes("Anwar");

// // let outputSome = array.some(function(x){ return x.length>5});
// let outputSome = array.some(lengthGreaterThanFive);

// let outputEvery = array.every(lengthGreaterThanFive);

// let outputFind = array.find(lengthGreaterThanFive)

// function lengthGreaterThanFive(x){
// 	return x.length>5;
// }

// document.write("<br>");

// document.write('Output of Index Of Method : ',outputIndexOf);

// document.write("<br>");

// document.write('Output of Last Index Of Method : ',outputLastIndexOf);

// document.write("<br>");

// document.write('Output of Includes Method : ',outputIncludes);

// document.write("<br>");

// document.write('Output of Some Method : ',outputSome);

// document.write("<br>");

// document.write('Output of Every Method : ',outputEvery);

// document.write("<br>");

// document.write('Output of Find Method : ',outputFind);

// document.write("<br>");

// var ary=[10,20,30,40,50];

// document.write("<ul>");
// for(let i=0; i<ary.length; i++){
// 	document.write("<li>"+ ary[i] +"</li>");
// }
// document.write("</ul>");

// let btnDOM = "<button>Enter Values in Array</button>"
// document.write(btnDOM);
// btnDOM.addEventListener('click',inputValue);

document.write("<button id='inputValue'>Enter Values in Array</button>");
var inputValues = document.getElementById("inputValue").addEventListener('click',inputValue);
var myWindow;


function inputValue(value){
	let array1 = new Array();
	
	myWindow = window.open("","","width=500px, height=500px, left=600px, top=100px");
	myWindow.focus();
    value = myWindow.prompt("How many value you want to add in an array");
	myWindow.document.write("<button id='closeBtn'>Close</button>");
	var closeWindow = myWindow.document.getElementById("closeBtn");
	for(let i=0; i<value; i++){
		array1[i] = myWindow.prompt(`Enter ${i+1} Value in array`);
	}
	myWindow.document.write("<ul>");
	for(let i=0; i<array1.length; i++){
		myWindow.document.write("<li>"+ array1[i] +"</li>");
	}
	myWindow.document.write("</ul>");

	console.log(closeWindow);
	closeWindow.addEventListener('click',closeWindowFn);
	// myWindow.addEventListener('click', e => {
	// 	if (e.target.id == closeWindow.id) {
	// 		myWindow.close();
	// 	}
	// });
	function closeWindowFn(){
		myWindow.close();
	}
}




