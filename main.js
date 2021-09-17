
//definierar variabler
let list1 = document.getElementById("list1");
let knappen = document.getElementById("btn1");
let clearAll = document.getElementById("clear-all")



// vad ska hända när jag trycker på Btn1
let pushBtn = knappen.addEventListener("click", function() {
    
    for (let i = 1; i < 5; i++) {
        
      
        list1.innerHTML += "<button>"+i+"</button>"
     }
});


//definierar ClearAll-knappen
let ClearAll = document.getElementById("clear-all");


//definera funktionen refreshPage - ladda om sidan + scrolla till toppen
function refreshPage(){
    window.location.reload();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 
} 

//utför ClearAll-funktionen
clearAll.addEventListener("click",refreshPage);




