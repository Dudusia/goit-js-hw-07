const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const formElements = event.target.elements;
    const elements = Array.from(formElements).filter(element => element.tagName === "INPUT");

    if (elements.some(element => element.value === "")) {
        return alert("Please fill in all the fields!");
    }

    const loginDetails = elements.reduce((obj, element) => {
        obj[element.name] = element.value;
        return obj;
    }, {});
    
    console.log(loginDetails)
    form.reset();
});
