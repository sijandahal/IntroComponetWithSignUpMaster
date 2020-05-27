const form = document.getElementById('form');
const FirstName = document.getElementById('FirstName');
const LastName = document.getElementById('LastName');
const email = document.getElementById('email');
const password = document.getElementById('password');

const iconerror1 = document.getElementById("iconerror1");
const iconerrors = document.getElementById("iconerrors");
const small = document.querySelector("small");


//Error

function showerror(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";

    }

//Sucess 

function showsucess (input) {
  const formControl = input.parentElement;
  formControl.className = "form-control sucess";
  
}

//Event Listners
form.addEventListener('submit',function(e){
  e.preventDefault()

 
  if(FirstName.value === ''){
    showerror(FirstName);
   
  }
  else {
   showsucess (FirstName);
  }
     
  //LAstNAme

   if(LastName.value === ''){
    showerror(LastName);
    
  }
 else {
   showsucess (LastName);
 }

//email
 
if(email.value === ''){
  showerror(email);
}
else {
 showsucess (email);
}

if(password.value === ''){
  showerror(password);
    iconerrors.style.display = "block";  

}
else {
 showsucess (password);
}

})