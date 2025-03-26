const apiKey = "c2211ffc"; // OMDb API key
const randomMovieButton = document.getElementById("randomMovieButton");
const movieContainer = document.getElementById("movieContainer");

// List of 100+ random movie titles (diverse genres)
const movieList = [
    "Inception", "The Dark Knight", "Interstellar", "Pulp Fiction", "The Matrix",
    "Fight Club", "Forrest Gump", "The Shawshank Redemption", "The Godfather",
    "Titanic", "The Lord of the Rings: The Return of the King", "The Silence of the Lambs",
    "Schindler's List", "Avengers: Endgame", "Gladiator", "Jurassic Park",
    "The Green Mile", "The Departed", "The Prestige", "The Lion King",
    "Star Wars: A New Hope", "Back to the Future", "Django Unchained",
    "The Wolf of Wall Street", "Parasite", "The Social Network", "The Grand Budapest Hotel",
    "A Beautiful Mind", "Whiplash", "The Truman Show", "Good Will Hunting",
    "The Pursuit of Happyness", "The Revenant", "Shutter Island", "The Sixth Sense",
    "The Usual Suspects", "Saving Private Ryan", "The Hateful Eight", "No Country for Old Men",
    "There Will Be Blood", "La La Land", "Mad Max: Fury Road", "Blade Runner 2049",
    "Logan", "Joker", "The Irishman", "Once Upon a Time in Hollywood", "Birdman",
    "12 Years a Slave", "The Big Short", "The Martian", "Interstellar", "Gravity",
    "The Shape of Water", "Moonlight", "Her", "Life of Pi", "The Curious Case of Benjamin Button",
    "The Imitation Game", "The Theory of Everything", "A Star Is Born", "Black Swan",
    "Requiem for a Dream", "Eternal Sunshine of the Spotless Mind", "American Beauty",
    "The Pianist", "Slumdog Millionaire", "The King's Speech", "The Fighter",
    "Argo", "Spotlight", "Manchester by the Sea", "Marriage Story",
    "Knives Out", "Jojo Rabbit", "The Conjuring", "It", "A Quiet Place",
    "Get Out", "Us", "Halloween", "The Exorcist", "The Shining",
    "Psycho", "Saw", "Scream", "The Ring", "The Babadook",
    "Midsommar", "Hereditary", "Sinister", "Annabelle", "Insidious",
    "Train to Busan", "World War Z", "I Am Legend", "Zombieland", "Shaun of the Dead"
];

randomMovieButton.addEventListener("click", async () => {
    const randomIndex = Math.floor(Math.random() * movieList.length);
    const movieTitle = movieList[randomIndex];

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieTitle)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            movieContainer.innerHTML = `
                <h2>${data.Title} (${data.Year})</h2>
                <img src="${data.Poster}" alt="${data.Title}">
                <p>⭐ Rating: ${data.imdbRating}</p>
                <p>${data.Plot}</p>
            `;
        } else {
            movieContainer.innerHTML = `<p>Movie not found. Try again!</p>`;
        }
    } catch (error) {
        movieContainer.innerHTML = `<p>Something went wrong. Try again!</p>`;
        console.error(error);
    }
});
