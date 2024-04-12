let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 

tg.expand();

let btn = document.querySelector('.sendData')

function sendData(){
    console.log('sending!!!')
    tg.sendData("some string that we need to send"); 
}
    
    //при клике на основную кнопку отправляем данные в строковом виде


const valueKill = Number(document.getElementById('numKill').innerHTML)
const valueDeth = Number(document.getElementById('numDeth').innerHTML)
const valueSci = Number(document.getElementById('numSci').innerHTML)
const valueHelp = Number(document.getElementById('numHelp').innerHTML)

function sliderKill(val) {
document.getElementById('numKill').innerHTML = val;
    
    if(Number(val) <= 10){
        document.querySelector('.kill').style.boxShadow = '0px 0px 10px 10px red'
        document.getElementById('numKill').style.border = '5px solid red'

    }        
    if(Number(val) > 10){
        document.querySelector('.kill').style.boxShadow = '0px 0px 10px 10px blue'
        document.getElementById('numKill').style.border = '5px solid blue'
    }        
    if(Number(val) > 32){
        document.querySelector('.kill').style.boxShadow = '0px 0px 10px 10px green'
        document.getElementById('numKill').style.border = '5px solid green'
    }
}

function sliderDeth(val) {
    document.getElementById('numDeth').innerHTML = val;
    if(Number(val) <= 5){
        document.querySelector('.deth').style.boxShadow = '0px 0px 10px 10px green'
    }        
    if(Number(val) > 5){
        document.querySelector('.deth').style.boxShadow = '0px 0px 10px 10px blue'
    }        
    if(Number(val) > 20){
        document.querySelector('.deth').style.boxShadow = '0px 0px 10px 10px red'
    }
}

function sliderSci(val) {
    document.getElementById('numSci').innerHTML = val;

    if(Number(val) <= 3){
        document.querySelector('.sci').style.boxShadow = '0px 0px 10px 10px red'
    }        
    if(Number(val) > 3){
        document.querySelector('.sci').style.boxShadow = '0px 0px 10px 10px blue'
    }        
    if(Number(val) > 6){
        document.querySelector('.sci').style.boxShadow = '0px 0px 10px 10px green'
    }
}

function sliderHelp(val) {
    document.getElementById('numHelp').innerHTML = val;

    if(Number(val) <= 3){
        document.querySelector('.help').style.boxShadow = '0px 0px 10px 10px red'
    }        
    if(Number(val) > 3){
        document.querySelector('.help').style.boxShadow = '0px 0px 10px 10px blue'
    }        
    if(Number(val) >= 9){
        document.querySelector('.help').style.boxShadow = '0px 0px 10px 10px green'
    }
}





document.addEventListener("click", function(e) {
  if (e.target.className=="minusKill") {
        var kill = document.getElementById('numKill').innerHTML
        if (Number(kill) <= 0){
            null
        }else{
            document.getElementById("numKill").innerHTML = kill - 1;
            document.getElementById('skill').value =   kill - 1; 
        }
        if(Number(kill) <= 10){
            document.querySelector('.kill').style.boxShadow = '0px 0px 10px 10px red'
            document.getElementById('numKill').style.border = '5px solid red'
        }        
        if(Number(kill) > 10){
            document.querySelector('.kill').style.boxShadow = '0px 0px 10px 10px blue'
            document.getElementById('numKill').style.border = '5px solid blue'
        }        
        if(Number(kill) > 32){
            document.querySelector('.kill').style.boxShadow = '0px 0px 10px 10px green'
            document.getElementById('numKill').style.border = '5px solid green'
        }
    }  

    if (e.target.className=="plusKill") {
        var kill = document.getElementById('numKill').innerHTML
        document.getElementById("numKill").innerHTML =  1 + Number(kill);
        document.getElementById('skill').value =   1 + Number(kill)  ;  

        if(Number(kill) <= 10){
            document.querySelector('.kill').style.boxShadow = '0px 0px 10px 10px red'
            document.getElementById('numKill').style.border = '5px solid red'
        }        
        if(Number(kill) > 10){
            document.querySelector('.kill').style.boxShadow = '0px 0px 10px 10px blue'
            document.getElementById('numKill').style.border = '5px solid blue'
        }        
        if(Number(kill) > 32){
            document.querySelector('.kill').style.boxShadow = '0px 0px 10px 10px green'
            document.getElementById('numKill').style.border = '5px solid green'
        }
    }





    if (e.target.className=="minusDeth") {
        var kill = document.getElementById('numDeth').innerHTML
        if (Number(kill) <= 0){
            null
        }else{
            document.getElementById("numDeth").innerHTML = kill - 1;
            document.getElementById('sdeth').value =   kill - 1; 
        }
        if(Number(kill) <= 5){
            document.querySelector('.deth').style.boxShadow = '0px 0px 10px 10px green'
        }        
        if(Number(kill) > 5){
            document.querySelector('.deth').style.boxShadow = '0px 0px 10px 10px blue'
        }        
        if(Number(kill) > 20){
            document.querySelector('.deth').style.boxShadow = '0px 0px 10px 10px red'
        }
    }  

    if (e.target.className=="plusDeth") {
        var kill = document.getElementById('numDeth').innerHTML
        document.getElementById("numDeth").innerHTML =  1 + Number(kill);
        document.getElementById('sdeth').value =   1 + Number(kill)  ;  

        if(Number(kill) <= 5){
            document.querySelector('.deth').style.boxShadow = '0px 0px 10px 10px green'
        }        
        if(Number(kill) > 5){
            document.querySelector('.deth').style.boxShadow = '0px 0px 10px 10px blue'
        }        
        if(Number(kill) > 20){
            document.querySelector('.deth').style.boxShadow = '0px 0px 10px 10px red'
        }
    }






    if (e.target.className=="minusSci") {
        var kill = document.getElementById('numSci').innerHTML
        if (Number(kill) <= 0){
            null
        }else{
            document.getElementById("numSci").innerHTML = kill - 1;
            document.getElementById('ssci').value =   kill - 1; 
        }
        if(Number(kill) <= 3){
            document.querySelector('.sci').style.boxShadow = '0px 0px 10px 10px red'
        }        
        if(Number(kill) > 3){
            document.querySelector('.sci').style.boxShadow = '0px 0px 10px 10px blue'
        }        
        if(Number(kill) > 6){
            document.querySelector('.sci').style.boxShadow = '0px 0px 10px 10px green'
        }
    }  

    if (e.target.className=="plusSci") {
        var kill = document.getElementById('numSci').innerHTML
        if (Number(kill) > 10){
            null
        }else{
            document.getElementById("numSci").innerHTML =  1 + Number(kill);
            document.getElementById('ssci').value = 1 + Number(kill)  ;  
        }

        if(Number(kill) <= 3){
            document.querySelector('.sci').style.boxShadow = '0px 0px 10px 10px red'
        }        
        if(Number(kill) > 3){
            document.querySelector('.sci').style.boxShadow = '0px 0px 10px 10px blue'
        }        
        if(Number(kill) > 6){
            document.querySelector('.sci').style.boxShadow = '0px 0px 10px 10px green'
        }
    }



    if (e.target.className=="minusHelp") {
        var kill = document.getElementById('numHelp').innerHTML
        if (Number(kill) <= 0){
            null
        }else{
            document.getElementById("numHelp").innerHTML = kill - 1;
            document.getElementById('shelp').value =   kill - 1; 
        }
        if(Number(kill) <= 3){
            document.querySelector('.help').style.boxShadow = '0px 0px 10px 10px red'
        }        
        if(Number(kill) > 3){
            document.querySelector('.help').style.boxShadow = '0px 0px 10px 10px blue'
        }        
        if(Number(kill) > 6){
            document.querySelector('.help').style.boxShadow = '0px 0px 10px 10px green'
        }
    }  

    if (e.target.className=="plusHelp") {
        var kill = document.getElementById('numHelp').innerHTML
        if (Number(kill) > 10){
            null
        }else{
            document.getElementById("numHelp").innerHTML =  1 + Number(kill);
            document.getElementById('shelp').value = 1 + Number(kill)  ;  
        }

        if(Number(kill) <= 3){
            document.querySelector('.help').style.boxShadow = '0px 0px 10px 10px red'
        }        
        if(Number(kill) > 3){
            document.querySelector('.help').style.boxShadow = '0px 0px 10px 10px blue'
        }        
        if(Number(kill) > 6){
            document.querySelector('.help').style.boxShadow = '0px 0px 10px 10px green'
        }
    }
    


});
