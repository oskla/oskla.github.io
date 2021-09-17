

//definierar variabler
let list1 = document.getElementById("list1");
let knappen = document.getElementById("btn1");
let clearAll = document.getElementById("clear-all")


///bildBoxParent.innerHTML =+ "<div id="+"bild"+i+">"+"hejhej"+"</div>"

//function loop() {
//    for (let i = 0; i < 5; i++) {
//    
    //    list1.innerHTML += "<li>hejhej"+i+"</li>"
  //      
   // }

//}



let pushBtn = knappen.addEventListener("click", function() {
    
    for (let i = 1; i < 5; i++) {
    
        list1.innerHTML += "<button>"+i+"</button>"
        
     }

}
);

let ClearAll = document.getElementById("clear-all");


function refreshPage(){
    window.location.reload();
} 

clearAll.addEventListener("click",refreshPage);




