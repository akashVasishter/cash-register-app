const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const nextButton = document.querySelector("#next");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const numofNotes = document.querySelectorAll(".num-of-notes"); //we are taking this a class because id will not work
const availableNotes = ["2000","500","100","20","10","5","1"];

cashGiven.style.display = "none";
checkButton.style.display = "none";



nextButton.addEventListener("click",function enable(){

    cashGiven.style.display="block";
    checkButton.style.display="block";
    

});


checkButton.addEventListener("click",function checkBillamountandCashgiven() {
    
    hideMessage();
    
                            

    
    if (billAmount.value > 0 && billAmount.value!="") 

    
    {
        
        if(cashGiven.value >= billAmount.value) 
        {
            const amountTobeReturned = cashGiven.value - billAmount.value;

            changeTobeGiven(amountTobeReturned);            

        } 
        else{

            showmessage("Cash given must be equal to the bill amount!");
        }


    } else {

        showmessage("Invalid bill amount!");
       

    }
});

    function changeTobeGiven(amountTobeReturned)
    {
        for( i = 0; i<=availableNotes.length; i++)
        {
              var numberofNotes =  Math.trunc(amountTobeReturned / availableNotes[i]) 
              //to check number of notes :1950 / 2000 = 0 , 1950/500 = 3 , 1950/100 = 4 , 1950/20 = 2 , 1950/10 = 1
               
              amountTobeReturned = amountTobeReturned % availableNotes[i]; 
               //to return the balance amount 1950 % 2000 = 1950 , 1950%500 = 450 , 1950%100 = 50 , 1950%20 =10 , 1950%10 = 0
              
               numofNotes[i].innerText = numberofNotes;
               //updates the number of notes in the denominations


        }
    }

    function hideMessage()
    {
        message.style.display="none";
    }



    function showmessage(msg)
    {
        message.style.display="block";
        message.innerText = msg;
    }




