var thebutton = document.querySelector("button");
thebutton.addEventListener('click', function () {
    if (thebutton.classList.contains("selected")) {
        thebutton.classList.remove("selected");
    } else { 
        thebutton.classList.add("selected");
    }
});