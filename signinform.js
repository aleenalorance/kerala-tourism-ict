let email=document.getElementById("exampleInputEmail1");

function validate()
 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return true;
  }
  else
  {

    alert("You have entered an invalid email address!");
    return false;
  }
}



function CheckPassword() 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(decimal)) 
{ 
    alert('Correct, try another...')
    return true;
}
else
{ 
    alert('Wrong...!')
    return false;
}
} 
