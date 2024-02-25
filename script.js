const apiKey = '1c9257c933msh3f0882ff3b80fa7p102bc7jsn1c66b9029b12';
const apiHost = 'free-to-play-games-database.p.rapidapi.com';
const apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc';

async function fetchData() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': apiHost
            }
        });
        const data = await response.json();
        console.log(data);

        // Chiamata a displayGames e initCarousel dopo aver ottenuto i dati
        displayGames(data);
        initCarousel(data);
    } catch (error) {
        console.error('Errore durante la richiesta API:', error);
    }
}

function displayGames(data) {
    const gamesContainer = document.getElementById('games-container');
    const row = document.createElement('div');
    row.classList.add('row');

    data.forEach((game) => {
        // Creare una colonna Bootstrap per ogni gioco
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4'); // Imposta la larghezza della colonna e la margine inferiore

        // Creare una card Bootstrap per ogni gioco
        const card = document.createElement('div');
        card.classList.add('card', 'custom-card');

        // Aggiungi un'immagine alla card
        const image = document.createElement('img');
        image.src = game.thumbnail;
        image.classList.add('card-img-top');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = game.title;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = game.short_description;

        // Aggiungi un link al gioco
        const playLink = document.createElement('a');
        playLink.href = game.game_url;
        playLink.target = '_blank'; // Aprire il link in una nuova pagina
        playLink.classList.add('btn', 'btn-primary','d-flex', 'justify-content-center',"btn-game-container");
        playLink.textContent = 'Gioca ora';

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(playLink);
        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);
        row.appendChild(col);
    });

    gamesContainer.appendChild(row);
}

function initCarousel(data) {
    const carouselInner = document.getElementById('carousel-inner');

    data.forEach((game, index) => {
        // Creare un elemento di carosello per ogni gioco
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item','custom-card-carousel');
if (index === 0) {
    carouselItem.classList.add('active');
}

        // Creare una card Bootstrap per ogni gioco nel carosello
        const card = document.createElement('div');
        card.classList.add('card', );

        // Aggiungi un'immagine alla card
        const image = document.createElement('img');
        image.src = game.thumbnail;
        image.classList.add('card-img-top');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = game.title;

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = game.short_description;

        // Aggiungi un link al gioco
        const playLink = document.createElement('a');
        playLink.href = game.game_url;
        playLink.target = '_blank'; // Aprire il link in una nuova pagina
        playLink.classList.add('btn', 'btn-primary','d-flex', 'justify-content-center', 'align-items-center');
        playLink.textContent = 'Gioca ora';

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(playLink);
        card.appendChild(image);
        card.appendChild(cardBody);

        carouselItem.appendChild(card);
        carouselInner.appendChild(carouselItem);
    });

    // Inizializza il carosello dopo aver aggiunto gli elementi
    const carouselElement = document.getElementById('carouselExample');
    new bootstrap.Carousel(carouselElement, {
        interval: 2000, // Imposta l'intervallo desiderato in millisecondi
        // Altre opzioni del carosello se necessario
    });
}

// Chiamata a fetchData per ottenere i dati e successivamente chiamare displayGames e initCarousel
fetchData();