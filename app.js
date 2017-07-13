document.addEventListener("DOMContentLoaded", function() {

  //Your Code Here
  document
  	.getElementById("payment-form")
  	.addEventListener("submit", function(event) {
  		event.preventDefault();

  	var fName = document 
  		.getElementById("firstname")
  		.value;

  	var lName = document 
  		.getElementById("lastname")
  		.value;

  	if (fName === "" || lName === "") {
  		alert("Please enter first and last name");
  		return;
  	}

//   	if( document.Form_validate.Name.value == "" )

// {

// alert( "Please provide your name!" );

// document.Form_validate.Name.focus() ;

// return false;

// }

  	var creditCard = document 
  		.getElementById("credit-card")
  		.value;

  	if ( creditCard === ""){
  		alert("Please enter a credit card number");
  		return;
  	}
  	if (creditCard.length !== 16) {
  		alert("Please enter a 16 dight credit card number");
  		return;
  	}

  	var ccNum = parseInt(creditCard);

  	if (isNaN(ccNum)) {
  		alert("Please enter only numbers for credit card");
  		return;
  	}
  
  	var exDate = document
  	.getElementById("expiration")
  	.value;

  	if (exDate === ""){
        alert("Please enter a expreration date");
        return;
    }

    if (exDate.length !== 00/00) {
    	alert("Enter the correct format MM/DD")
    	return;
    }
    
    
    // if(!exDate.match(/(0[1-12]|1[0-2]))){
    //     alert = "The expire date formate is not correct!\n";
    //     return;
    // }


// varcvcnum = parseint (cc)













  });


});