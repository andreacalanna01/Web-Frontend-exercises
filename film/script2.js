const input1 = document.getElementById("in-titolo")
const input2 = document.getElementById("in-url")
const input3 = document.getElementById("in-rating")

input1.addEventListener ("click", ()=>{
input1.classList.toggle("cambiaColore")
})

input2.addEventListener ("click", ()=>{
input2.classList.toggle("cambiaColore")
})
input3.addEventListener ("click", ()=>{
input3.classList.toggle("cambiaColore")
})


const show = document.getElementById ("add")
const div = document.getElementById ("nascosto")
show.addEventListener ("click",()=>{
div.classList.toggle('mostra-modulo');
})