var image=document.getElementById("image1")
image.addEventListener("mouseover", function(){
    image.style.border = "solid 3px red";
})

image.addEventListener("mouseout", function(){
    image.style.border = "none";
})