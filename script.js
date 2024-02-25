const apiUrl = `https://www.freetogame.com/api/games`;

// Funzione per ottenere i giochi dall'API
async function getGames() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Errore durante il recupero dei giochi:', error);
    }
}

// Funzione per visualizzare i giochi sulla pagina HTML
async function displayGames() {
    const games = await getGames();

    // Ottenere il contenitore dove vuoi visualizzare i giochi
    const gamesContainer = document.getElementById('games-container');

    // Creare l'HTML per ogni gioco
    const gamesHTML = games.map(game => `
        <div class="game-card">
            <img src="${game.background_image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <p>${game.description}</p>
        </div>
    `).join('');

    // Inserire l'HTML nel contenitore
    gamesContainer.innerHTML = gamesHTML;
}

// Chiamare la funzione per visualizzare i giochi al caricamento della pagina
window.onload = displayGames;