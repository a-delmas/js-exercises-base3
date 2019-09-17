var link = document.getElementsByTagName("a")
var text=document.getElementById("texte")
link[0].addEventListener("click", function(){
    text.style.display="block"
});
link[1].addEventListener("click", function(){
    text.style.display="none"
});
