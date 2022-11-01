import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state"

const formEl = document.querySelector("feedback-form");


formEl.addEventListener("submit", onFormSubmit);
formEl.addEventListener("input", throttle(onTextInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarrget.reset();
    localStorage.removeItem(STORAGE_KEY); 
}

function onTextInput(evt) {
    const message = evt.currentTarrget.value;
    console.log(message);
    localStorage.setItem(STORAGE_KEY, message)
}

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
        message.textarea.value = savedMessage
    }
}

