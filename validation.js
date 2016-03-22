function validateForm() {
    
    var x = document.forms["Contact"]["name"].value;
    if (x == null || x == "") {
        alert("Please enter Name");
        return false;
    }  
     var y = document.forms["Contact"]["email"].value;
     var z = document.forms["Contact"]["phone"].value;
     
    if ((z == null || z == "" ) && (y == null || y == "" )){
        alert("Phone number or E-mail required");
        return false;
    }else if(!(z == null || z == "" )){
 
    if(phoneNumberValidation(z)){
    alert("We received your information.We will get back to yo soon");
    }else{
    return false;
    }      
  }else if(!(y == null || y == "" )){
    if(emailIdValidation(y)){
    alert("We received your information.We will get back to you soon");
    }else{
    return false;
    }    
    
  return true;
  }
}
function phoneNumberValidation(z){

var phno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
     if(z.match(phno)) { 
     return true;
       }else {
    alert("please enter your phone number in a valid format: xxx-xxx-xxxx");
    return false;
    }
}

function emailIdValidation(y){
 var emailId = /\S+@\S+\.\S+/;;
     if(y.match(emailId )) { 
      return true;
       }else {
    alert("please enter valid Email-Id: example@example.com");
    return false;
   }    
}