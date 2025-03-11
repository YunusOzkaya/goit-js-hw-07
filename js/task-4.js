formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const formValues = {};

    for (let [name, value] of formData.entries()) {
        if (value.trim() === "") {
            alert("All form fields must be filled in");
            return;
        }
        formValues[name] = value.trim();
    }

    console.log(formValues);
    formEl.reset();
});
