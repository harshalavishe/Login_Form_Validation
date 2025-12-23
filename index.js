let heading = document.createElement("h1");
heading.innerText = "Login Form";

let user = document.createElement("h3");
user.innerText = "Username:";

let user1 = document.createElement("p");
user1.innerHTML = "<input type = 'username' placeholder= 'Enter Username'>";

let Email = document.createElement("h3");
Email.innerText = "Email Id:";

let Email1 = document.createElement("p");
Email1.innerHTML = "<input type = 'email' placeholder= 'Enter Your Email'>";

let pass = document.createElement("h3");
pass.innerText = "Password:";

let pass1 = document.createElement("p");
pass1.innerHTML = "<input type = 'password' placeholder= 'Enter Password'>";

let newBtn = document.createElement("button");
newBtn.innerText = "Login";
newBtn.style.backgroundColor ="#00008B";
newBtn.style.color ="#FFFFFF";

// error message
let errorMsg = document.createElement("p");
errorMsg.style.color = "red";

newBtn.addEventListener("click", () => {

    let usernameField = user1.querySelector("input");
    let emailField = Email1.querySelector("input");
    let passwordField = pass1.querySelector("input");

    // Username
    if (usernameField.value.length < 6) {
        errorMsg.innerText = "❌ Username must be at least 6 characters";
        usernameField.style.border = "2px solid red";
        return;
    }
    usernameField.style.border = "2px solid green";

    // Email
    if (emailField.value !== "harshalav6@gmail.com") {
        errorMsg.innerText = "❌ Enter correct email";
        emailField.style.border = "2px solid red";
        return;
    }
    emailField.style.border = "2px solid green";

    // Password
    if (passwordField.value.length < 8) {
        errorMsg.innerText = "❌ Password must be at least 8 characters";
        passwordField.style.border = "2px solid red";
        return;
    }
    passwordField.style.border = "2px solid green";

    errorMsg.innerText = "";
    alert("Your form submitted successfully ✅");
});

let body = document.querySelector("body");
body.style.backgroundColor = "#ffffff";

let divs = document.querySelector("div");
document.body.style.display = "flex";
document.body.style.justifyContent = "center";

divs.style.height = "350px";
divs.style.width = "300px";
divs.style.marginTop = "8rem";
divs.style.textAlign = "center";
divs.style.backgroundColor = "#ffc9b9";

divs.prepend(heading);
divs.append(user,user1,Email,Email1,pass,pass1,newBtn,errorMsg);









