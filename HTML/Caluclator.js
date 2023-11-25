
function turnOff(){
    var inputvalues =document.getElementById("inputvalues")
    inputvalues.style.visibility="hidden"
}
function turnOn(){
    var inputvalues =document.getElementById("inputvalues")
    inputvalues.style.visibility="visible"
}
function getValues(num){
    var inputvalues=document.getElementById("inputvalues")
    inputvalues.value+=num
}

function clearOnechar(){
    inputvalues.value=  inputvalues.value.slice(0,-1)
}
function clearAll(){
    inputvalues.value=""
}
function calculate(){
    inputvalues.value=eval(inputvalues.value)
}
//error message
function calculate(){
    try{
        inputvalues.value=eval(inputvalues.value)
    }
    catch(error){
        inputvalues.value=inputvalues.value.innerHTML="INVALIDE EXPRESSION"
    }
}
