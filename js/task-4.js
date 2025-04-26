const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const email = formEl.elements.email.value.trim();
    const password = formEl.elements.password.value.trim();
    

    if (email === "") {
        alert("Email field must be filled in");
        return;
    }
    
    if (password === "") {
        alert("Password field must be filled in");
        return;
    }
    
  
    const formValues = {
        email: email,
        password: password
    };
    
    console.log(formValues);
    formEl.reset();
});
