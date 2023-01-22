const userInput=document.getElementById("userinput");
var expression='';
function press(num){
   expression+=num;
   userInput.value=expression;
}
function equal(){
    userInput.value=eval(expression);
    expression='';
}
function erase(){
    expression='';
    userInput.value=expression;
}
function cross(){
    expression=expression.substring(0,expression.length-1)
    userInput.value=expression;
}
