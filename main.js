
//definierar variabler
let btnList = document.getElementById("list1");
let knappen = document.getElementById("btn1");
let clearAll = document.getElementById("clear-all")






// vad ska hända när man trycker på btn1 
let pushBtn = knappen.addEventListener("click", function() {
    
    for (let i = 1; i < 5; i++) {
       
        var newButtons = document.createElement("button");
        btnList.appendChild(newButtons);                //Var ska knapparna lägga sig

        newButtons.setAttribute("class","newButtons");  //ge de nya knapparna en klass
        newButtons.setAttribute("id","button"+i);       //ge de nya knapparna ett unikt id
        newButtons.innerHTML =+ i;                      //vad ska stå i knappen

        
        var count = btnList.childElementCount;          //räkna hur många knappar som skapats
        console.log(count);
        
        
        }
        //om det är fler än 8 knappar, skicka ut ett meddelande
        if (count > 8 && count < 15) {                    
            console.log("Nu äre många knappar")
            alert("Nu får du sluta leka")
            
          
        //rensa även de existerande knapparna
        function clearAllButtons(){
            while (btnList.lastElementChild) {                  //kör loopen så länge det finns ett sista element i listan(?). Alltså tills det är tomt
                btnList.removeChild(btnList.lastElementChild);  //ta bort det sista elementet
            }     
         }
         clearAllButtons();
        }
        
       
       
            
});


//definierar ClearAll-knappen
var ClearAll = document.getElementById("clear-all");

//en clear-all knapp som med hjälp av en while-loop tar bort alla children i "btnList"
function clearAllButtons(){
    while (btnList.lastElementChild) {
        btnList.removeChild(btnList.lastElementChild);
        
    }    
    

     //try catch - försöker hämta information från variabeln "btn5" - som inte finns.
    try {

        console.log(btn5);
        
    } catch (error) {
        console.log("Some error has occurd: " + error);
        console.log(error.stack);
    }
    finally {
    console.log("But no problems, everything still works as it should.")
    }
 }


//utför ClearAll-funktionen
clearAll.addEventListener("click",clearAllButtons);



    


