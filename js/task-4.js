
const formEl = document.querySelector(".login-form")
formEl.addEventListener("submit", ()=>{ event.preventDefault()

const formData = new FormData(formEl)

for(let [name,value] of formData.entries()){
    if(value.trim()===""){
        alert("All form fields must be filled in")
    }
}

const formValues ={}

formData.forEach((value,key)=>{formValues[key]=value.trim()})

console.log(formValues)
formEl.reset()})