let nameError = document.getElementById("name_Error");
let emailError = document.getElementById("email_Error");
let subjectError = document.getElementById("subject_Error");
let messageError = document.getElementById("message_Error");
let submitError = document.getElementById("submit_Error");


function validateName() {

    let name = document.getElementById("name").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z ]+$/)) {
        nameError.innerHTML = "Only letters allowed";
        return false;
    }

    nameError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}


function validateEmail() {

    let email = document.getElementById("email").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}


function validateSubject() {

    let subject = document.getElementById("subject").value;

    if (subject.length == 0) {
        subjectError.innerHTML = "Subject required";
        return false;
    }

    subjectError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}


function validateMessage() {

    let message = document.getElementById("message").value;

    if (message.length < 10) {
        messageError.innerHTML = "Minimum 10 characters required";
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    return true;
}


function validateForm() {

    if (!validateName() || !validateEmail() || 
        !validateSubject() || !validateMessage()) {

        submitError.style.color = "red";
        submitError.innerHTML = "Please fill all fields correctly";
        return false;
    }

    submitError.style.color = "green";
    submitError.innerHTML = "Form Submitted Successfully";

    return true;
}