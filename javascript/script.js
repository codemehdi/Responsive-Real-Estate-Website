function scrollToTarget_browse(){
    var targetElement = document.getElementById("Browse-scrollhere");
    targetElement.scrollIntoView({behavior: 'smooth'});
}

function scrollToTarget_about(){
    var targetElement = document.getElementById("About-scrollhere");
    targetElement.scrollIntoView({behavior: 'smooth'});
}

function scrollToTarget_contact(){
    var targetElement = document.getElementById("Contact-scrollhere");
    targetElement.scrollIntoView({behavior: 'smooth'});
}



function Login_Alert(event){
    var showItem = document.getElementById("login_alert");
    var targetElement = document.getElementById("sign_up_form");
    targetElement.style.display = "none";
    showItem.style.display = "block";
    event.preventDefault();
}

function Close_Alert(){
    var targetElement = document.getElementById("login_alert");
    targetElement.style.display = "none";
    backdrop.classList.remove("show");
    backdrop.style.display = "none";
    document.body.style.overflow = "";
}



function scrollToTarget_signUp(){
    var yOffSet = 0;
    var form = document.getElementById("sign_up_form");
    var backdrop = document.getElementById("backdrop");

    backdrop.classList.add("show");
    document.body.style.overflow = "hidden";
    form.style.display = "block";
    backdrop.style.display = "block";
    window.scrollTo({ top: yOffSet, behavior:"smooth"});
}

function close_sign_up_form(){
    var backdrop = document.getElementById("backdrop");
    backdrop.classList.remove("show");
    backdrop.style.display = "none";
    var form = document.getElementById("sign_up_form");
    form.style.display = "none";
    document.body.style.overflow = "";
}


function register_show(){
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    var btn = document.getElementById("btn_form");

    login.style.left = "-115%";
    register.style.left = "15%";
    btn.style.left = "110px";
}

function login_show(){
    var login = document.getElementById("login");
    var register = document.getElementById("register");
    var btn = document.getElementById("btn_form");

    login.style.left = "15%";
    register.style.left = "115%";
    btn.style.left = "0px";
}



function HoverEffect(element){
    element.style.transform = 'scale(1.1)';
    element.style.boxshadow = '0 5px 10px rgba(0,0,0,0.5);'
    document.querySelectorAll('.browsing-container').forEach(item =>{
        if(item !== element){
            item.style.transform = 'scale(0.9)';
            item.style.filter = 'grayscale(100%)';
        }
    })
}

function ResetEffect(element){
    element.style.transform = 'scale(1.0)';
    document.querySelectorAll('.browsing-container').forEach(item =>{
        if(item !== element){
            item.style.transform = 'scale(1.0)';
            item.style.filter = 'grayscale(0%)';
        }
    })
}


function LearnMore1(){
    var Info = document.getElementById("info1");
    var targetElement = document.getElementById("info1");
    Info.style.display = "block";
    targetElement.scrollIntoView({behavior: 'smooth'});
    backdrop.classList.add("show");
    backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
}

function close_learnmore1(){
    backdrop.classList.remove("show");
    backdrop.style.display = "none";
    document.body.style.overflow = "";
    var Info = document.getElementById("info1");
    Info.style.display = "none";
}


function LearnMore2(){
    var Info = document.getElementById("info2");
    Info.style.display = "block";
    Info.scrollIntoView({behavior: 'smooth'});
    backdrop.classList.add("show");
    backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
}

function close_learnmore2(){
    backdrop.classList.remove("show");
    backdrop.style.display = "none";
    document.body.style.overflow = "";
    var Info = document.getElementById("info2");
    Info.style.display = "none";
}


function LearnMore3(){
    var Info = document.getElementById("info3");
    Info.style.display = "block";
    Info.scrollIntoView({behavior: 'smooth'});
    backdrop.classList.add("show");
    backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
}

function close_learnmore3(){
    backdrop.classList.remove("show");
    backdrop.style.display = "none";
    document.body.style.overflow = "";
    var Info = document.getElementById("info3");
    Info.style.display = "none";
}


function LearnMore4(){
    var Info = document.getElementById("info4");
    Info.style.display = "block";
    Info.scrollIntoView({behavior: 'smooth'});
    backdrop.classList.add("show");
    backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
}

function close_learnmore4(){
    backdrop.classList.remove("show");
    backdrop.style.display = "none";
    document.body.style.overflow = "";
    var Info = document.getElementById("info4");
    Info.style.display = "none";
}



function Buy(){
    var Item = document.getElementById("buy_container");
    Item.style.display = "block";
    var targetElement = document.getElementById("item1");
    targetElement.scrollIntoView({behavior: 'smooth'});
    backdrop.classList.add("show");
    backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
}

function Buy_from_LearnMore1(){
    var Item = document.getElementById("buy_container");
    Item.style.display = "block";


    var Info = document.getElementById("info1");
    Info.style.display = "none";
}


function Buy_from_LearnMore2(){
    var Item = document.getElementById("buy_container");
    Item.style.display = "block";


    var Info = document.getElementById("info2");
    Info.style.display = "none";
}


function Buy_from_LearnMore3(){
    var Item = document.getElementById("buy_container");
    Item.style.display = "block";


    var Info = document.getElementById("info3");
    Info.style.display = "none";
}


function Buy_from_LearnMore4(){
    var Item = document.getElementById("buy_container");
    Item.style.display = "block";


    var Info = document.getElementById("info4");
    Info.style.display = "none";
}



function Close_Buy(){
    var Item = document.getElementById("buy_container");
    Item.style.display = "none";
    backdrop.classList.remove("show");
    backdrop.style.display = "none";
    document.body.style.overflow = "";
}

function show_overlay(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    overlay.style.top = '105vh';
    var yOffSet = 1300;
    var Ycoords = document.getElementById("scrollhere_I");
    overlay.style.transition = 'all 0.5s ease';

    Ycoords.scrollIntoView({behavior: 'smooth'});

    var backdrop = document.getElementById("backdrop");
    overlay.classList.add("show");
    backdrop.classList.add("show");
    backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
}

function close_overlay(){
    var overlay = document.getElementById("overlay");
    overlay.style.display = 'none';
    backdrop.style.display = "none";
    document.body.style.overflow = "";
    overlay.classList.remove("show");
    backdrop.classList.remove("show");
}



document.getElementById("toggle-contact").addEventListener("change", function(){
    var inputField = document.getElementById("user-input");
    if(this.checked){
        inputField.placeholder = "Please Enter Your Phone Number ..."
    }
    else{
        inputField.placeholder = "you@example.com"
    }
});

function Contact_Alert(){
    var targetElement = document.getElementById("Contact_Alert");
    targetElement.style.display = "block";
    backdrop.classList.add("show");
    backdrop.style.display = "block";
    document.body.style.overflow = "hidden";
    targetElement.scrollIntoView({behavior: 'smooth'});
}

function Close_Contact_Alert(){
    var targetElement = document.getElementById("Contact_Alert");
    targetElement.style.display = "none";
    backdrop.classList.remove("show");
    backdrop.style.display = "none";
    document.body.style.overflow = "";
}

