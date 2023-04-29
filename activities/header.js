// theme switch function
function ThemeChange(){
    const bodyElement = document.body;
    bodyElement.classList.toggle("light-theme");

    var theme;
    if(bodyElement.classList.contains("light-theme")){
        console.log("light-theme");
        theme = "Light";
    }
    else{
        console.log("Dark-theme");
        theme = "Dark";
    }

    localStorage.setItem("currentTheme",JSON.stringify(theme));
}

let getTheme = JSON.parse(localStorage.getItem("currentTheme"));
console.log(getTheme);

if(getTheme == "Light"){
    document.body.classList = "light-theme";
}
//theme-end

//email-validation
document.querySelector(".sub-btn").disabled = true;
const email = document.querySelector(".init-content");
email.addEventListner("change",emailValidation);
function emailValidation(){
    if(email.value.length == 0){
        document.querySelector(".sub-btn").disabled = true;
    }
    else if(email.includes("@gmail.com") || email.includes("@citchennai.net")){
        document.querySelector(".sub-btn").disabled=true;
    }
    else{
        document.querySelector(".sub-btn").disabled=false;
    }
}

function button(e){
    e.preventDefault();
    document.querySelector(".sub-btn").innerHTML = "Subscribed";
    
}
//email-validation-end