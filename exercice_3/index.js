var btn = document.querySelectorAll(".color")
btn[0].addEventListener("click", function(){
    document.getElementById("texte").style.color="green"
});
btn[1].addEventListener("click", function(){
    document.getElementById("texte").style.color="red"
});
btn[2].addEventListener("click", function(){
    document.getElementById("texte").style.color="blue"
});