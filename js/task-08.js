
const loginFormEl= document.querySelector(".login-form");




function onBtnSubmit(event){
  event.preventDefault();
   const {
    elements: {email, password} 
  } = event.currentTarget;

if(email.value === "" || password.value === ""){
  alert("Всі поля мають бути заповненими!");
}
console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();

 
}
loginFormEl.addEventListener("submit", onBtnSubmit);
