let cookieModal = document.getElementById("cookieConsent")
let cancelCookieBtn = document.getElementById("cookieCancel")
let acceptCookieBtn = document.getElementById("cookieAccept")

cancelCookieBtn.addEventListener("click", function (){
    cookieModal.style.display = "none"
})
acceptCookieBtn.addEventListener("click", function (){
    cookieModal.style.display = "none"
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    console.log("test")
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    console.log(cookieAccepted)
    if (cookieAccepted != "yes"){
        cookieModal.style.display = "block"
    }
}, 2000)
