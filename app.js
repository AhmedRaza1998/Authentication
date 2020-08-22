var login = document.getElementById('login');
var div = document.getElementById('form');
var userData = document.getElementById('userData');
var arr = JSON.parse(localStorage.getItem("userData"));

var first = document.getElementById('firstName');
var last = document.getElementById('lastName');
var phone = document.getElementById('ph');
var em = document.getElementById('email');

var users = [];

function signUp() {

    var firstName = document.getElementById("first-name");
    var lastName = document.getElementById("last-name");
    var phoneNumber = document.getElementById("Phone");
    var password = document.getElementById("pass");
    var email = document.getElementById("em");

    var first = document.getElementById('firstName');
    var last = document.getElementById('lastName');
    var phone = document.getElementById('ph');
    var em = document.getElementById('email');

    if (firstName.value.value !== "" && lastName.value !== "" && phoneNumber.value !== "" && password.value !== "" && email.value !== "") {
        if (password.value.length < 6) {
            alert("Password is too short")
        }

        else if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
            alert("Email is badly formatted!")
        }

        else {
            div.style.display = "none";
            userData.style.display = "block";

            first.innerHTML = "First Name: " + firstName.value;
            last.innerHTML = "Last Name: " + lastName.value;
            phone.innerHTML = "Phone Number: " + phoneNumber.value;
            em.innerHTML = "Email: " + email.value;

            var userDataObj = {};
            userDataObj.password = password.value;
            userDataObj.email = email.value;
            userDataObj.first = firstName.value;
            userDataObj.last = lastName.value;
            userDataObj.phone = phoneNumber.value;
            users = arr;

            users.push(userDataObj);
            localStorage.setItem("userData", JSON.stringify(users));
            users.push(userDataObj);
            localStorage.setItem("userData", JSON.stringify(users));
            for (var i = 0; i < arr.length; i++) {

            }

        }
    }
    else {
        alert("All fields arr required!!");

    }
}
                function back() {

                    div.style.display = "block";
                    userData.style.display = "none";
                    login.style.display = "none";

                }


                function logInPage() {
                    login.style.display = "block";
                    div.style.display = "none";
                }

                function logIn() {
                    var p = document.getElementById("login-pass");
                    var e = document.getElementById("login-email");
                    for (var i = 0; i < arr.length; i++) {
                        if (p.value === arr[i].password && e.value === arr[i].email) {
                            userData.style.display = "block";
                            login.style.display = "none";

                            first.innerHTML = "First Name: " + arr[i].first;
                            last.innerHTML = "Last Name: " + arr[i].last;
                            phone.innerHTML = "Phone/No: " + arr[i].phone;
                            em.innerHTML = "Email: " + arr[i].email;
                            break;
                        }

                        //else {
                        //    alert( "doesn't match email or password ");
                        //    break;
                        //}
                    }
                }

