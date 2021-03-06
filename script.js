const form = document.querySelector('.login-form');
const usernameinput = document.querySelector('#username');
const emailinput = document.querySelector('#email');
const pwdinput = document.querySelector('#password');
const submitbtn = document.querySelector('.btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateform();
});

function validateform(){
    if(usernameinput.value.trim() == '' ){
        seterror(usernameinput , "NAME CANNOT BE EMPTY")
        // usernameinput.parentElement.querySelector('p').innerHTML = "NAME CANNOT BE EMPTY";
    }
    else{
        setsuccess(usernameinput);
    }

    if(emailinput.value.trim() == '' ){
        seterror(emailinput , "EMAIL CANNOT BE EMPTY")
        //emailinput.parentElement.querySelector('p').innerHTML = "EMAIL CANNOT BE EMPTY";
    }
    else if(!(emailinput.value.trim().includes(".com")) || !(emailinput.value.trim().includes(".co"))){
        seterror(emailinput , "Enter VALID EMAIL")
    }
    else{
        setsuccess(emailinput);
    }

    if(pwdinput.value.trim() == '' ){
        seterror(pwdinput , "PASSWORD CANNOT BE EMPTY")
        //emailinput.parentElement.querySelector('p').innerHTML = "EMAIL CANNOT BE EMPTY";
    }
    else{
        setsuccess(pwdinput);
    }

}

function seterror(element, message){
    element.parentElement.querySelector('p').innerHTML = message;
    element.parentElement.classList.add("error");
}

function setsuccess(element){
    if (element.parentElement.classList.contains("error"))
    {
        element.parentElement.classList.remove("error");
    }
    element.parentElement.classList.add("success");
}


 
