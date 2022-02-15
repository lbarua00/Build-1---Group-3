"use strict";

/*upon start, these variables will initialize to their respective input boxes so that 
they can easily be called and the data can be taken from them*/
var fnamebox;
var lnamebox;
var emailbox;
var passwordbox;

var fname;      //first name input will be stored here
var lname;      //last name input will be stored here
var email;      //email input will be stored here
var password;   //password input will be stored here

function initialize() {
    //initializing variables to input boxes
    fnamebox    = document.getElementById('firstName');
    lnamebox    = document.getElementById('lastName');
    emailbox    = document.getElementById('email');
    passwordbox = document.getElementById('password');
}

function createButton() {
    // When the create account button is clicked, this method is invoked and it reads the input box
    // values and sets our variables to those values
    fname       = fnamebox.value;
    lname       = lnamebox.value;
    email       = emailbox.value;
    password    = passwordbox.value;  

    console.log(
        `First Name :   ${fname}
         Last Name  :   ${lname}
         Email      :   ${email}
         Password   :   ${password}`);

    showInputs(fname, lname, email, password);
}

function showInputs(fname, lname, email, password) {
    let fnameout    = fname;
    let lnameout    = lname;
    let emailout    = email;
    let passwordout = password;
    let output = document.getElementById('output');

    console.log("Show inputs was called!");
    console.log(
        `The values to be written to the HTML output box:
         First Name :   ${fnameout}
         Last Name  :   ${lnameout}
         Email      :   ${emailout}
         Password   :   ${passwordout}`);

    output.innerHTML = (`First Name :   ${fnameout}<br>
                         Last Name  :   ${lnameout}<br>
                         Email      :   ${emailout}<br>
                         Password   :   ${passwordout}`);

}

function saveInputs(fname, lname, email, password) {
    //here, we can eventually write code that will save the input variables to a json file
    //or skip that step and just have it write to our database through a sql command
    //whatever tickles our fancy
    //or not
}

