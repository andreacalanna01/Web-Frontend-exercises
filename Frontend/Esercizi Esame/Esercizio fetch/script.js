
const fetchBtn = document.getElementById('fetchBtn');
const changeColorBtn = document.getElementById('changeColorBtn');
const container = document.getElementById('container');
fetchBtn.addEventListener('click', async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`);
        }

        const users = await response.json();
        
        container.innerHTML = ''; 
        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('user-card');
            card.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            `;
            container.appendChild(card);
        });

    } catch (error) {
        console.error('Errore durante il caricamento:', error);
        container.innerHTML = `<p style="color:red">Si è verificato un errore: ${error.message}</p>`;
    }
});

changeColorBtn.addEventListener('click', () => {
    const allCards = document.querySelectorAll('.user-card');
    allCards.forEach(card => card.classList.toggle('card-bg-active'));
});