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


const backdrop = document.createElement('div')
backdrop.className = 'backdrop';
document.body.appendChild(backdrop);
const show = document.getElementById("add");
const div = document.getElementById("aggiungi");
const cancel = document.getElementById("bt-ca");

show.addEventListener("click", () => {
    div.classList.add('mostra-modulo'); // Mostra il form
    backdrop.classList.add('backdrop-visible');  // Mostra lo sfondo scuro
});

cancel.addEventListener("click", () => {
    div.classList.remove('mostra-modulo');
    backdrop.classList.remove('backdrop-visible');
});



backdrop.addEventListener("click", () => {
    div.classList.remove('mostra-modulo');
    backdrop.classList.remove('backdrop-visible');
});



const done = document.getElementById('bt-done'); 
// 2. Seleziona dove vuoi che appaiano i film (es. il body o un div specifico)
const containerMovie = document.querySelector('.containerMovie');

done.addEventListener("click", () => {
    // Recuperiamo i valori inseriti dall'utente
    const titolo = input1.value;
    const url = input2.value;
    const rating = input3.value;

    // Validazione semplice
    if (titolo === "" || url === "" || rating === "") {
        alert("Inserisci tutti i dati!");
        return;
    }

    // Creiamo il nuovo elemento HTML
    const nuovoFilm = document.createElement('div');
    nuovoFilm.className = 'container-poster'; 
    
    
    nuovoFilm.innerHTML = `
        <img src="${url}" alt="${titolo}" style="width: 200px;">
        <div class="spacing">
            <h2>${titolo}</h2>
            
                <div class="raiting">
                    <h4>Raiting: ${rating}/5</h4>
                </div>
        </div>
    `;

    // Lo aggiungiamo alla pagina
    containerMovie.appendChild(nuovoFilm);

    // Chiudiamo il modulo e resettiamo
    div.classList.remove('mostra-modulo');
    backdrop.classList.remove('backdrop-visible');
    input1.value = ''; input2.value = ''; input3.value = '';
});