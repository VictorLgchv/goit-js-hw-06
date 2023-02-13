
const loginFormEl= document.querySelector(".login-form");




function onBtnSubmit(event){
  event.preventDefault();
   const {
    elements: {email, password} 
  } = event.currentTarget;

if(email.value === "" || password.value === ""){
  return alert("Всі поля мають бути заповненими!");
}
const object = {
  email: email.value,
  password: password.value,
}
console.log(object);
  event.currentTarget.reset();

 
}
loginFormEl.addEventListener("submit", onBtnSubmit);
