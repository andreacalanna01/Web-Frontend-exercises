async function quotes() {
    const url = "https://dummyjson.com/quotes/random";

    try {
        const response = await fetch(url);

       
        if (!response.ok) {
            throw new Error(`Errore nella connesione API: ${response.status}`);

        }

        // PARSING 

        const data = await response.json();



        document.getElementById("quote").innerHTML = `"${data.quote}"`;
        document.getElementById("author").innerHTML = `- ${data.author}`;


        
    } catch (error) {

        console.error("Error:", error.message);
        document.getElementById('quote').innerText = "Impossibile caricare la citazione.";
    }
}


const dark=document.getElementById("dark")

dark.addEventListener("change", () =>{
document.body.classList.toggle("D-mode")
})

