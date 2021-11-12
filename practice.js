var myWindow;

function openWindow(){
    myWindow = window.open("","","width=500px, height=500px, left=600px, top=100px");
    myWindow.document.write("<p>This is myWindow</p>")
}

function closeWindow(){
    myWindow.close();
}

function moveWindow(){
    // myWindow.moveTo(200,200);
    myWindow.moveBy(200,200);
    myWindow.focus();
}

function resizeWindow(){
    myWindow.resizeBy(400,400);
    myWindow.focus();
}

function printArray(arr){
    setInterval((x) => {
        for(let i=0; i<arr.length; i++){
            console.log(arr[i]);
        }
    }, 1000);
}

// function print(arr){
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }

// var result = printArray([10,20,30,40,50,60,70,80,90,100]);

// console.log(result);



// function fn() {
//     msg.removeEventListener('click',fn);
//     setTimeout(printMsg,2000)
// }


var msg = document.getElementById("test")
.addEventListener('click',printMsg);


function printMsg(){
    setTimeout(()=>console.log("Hello"),2000);
    // console.log("Hello");
    // msg.addEventListener('click',fn)
}

