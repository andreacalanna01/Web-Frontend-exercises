function toggleColor1(){

const selector = document.querySelector(".boxBlue")

selector.classList.toggle("cambio1")
}




function toggleColor3(){
const classe = document.getElementsByClassName("boxBlue") 

classe[1].classList.toggle("cambio3")
}


const button = document.querySelector(".bt")
button.addEventListener("click", function() {
button.classList.toggle("cambio3")
})
