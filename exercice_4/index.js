var password=document.getElementById("motdepasse")
var confirm=document.getElementById("confirmation")
document.getElementsByTagName("button")[0].addEventListener("click", function(){
    if (password.value==confirm.value)
    {
        password.style.border="solid 1px green"
        confirm.style.border="solid 1px green"
    }
    else{
        password.style.border="solid 1px red"
        confirm.style.border="solid 1px red"
    }
})
