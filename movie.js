document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    const movieDetails = document.getElementById('movieDetails');
    
    // Находим фильм
    const movie = movies.find(m => m.id === movieId);

    if (movie) {
        movieDetails.innerHTML = `
            <div class="movie-detail-card">
                <div class="movie-poster">
                    <img src="${movie.poster}" alt="${movie.title}">
                </div>
                <div class="movie-info">
                    <h2>${movie.title} (${movie.year})</h2>
                    <p><strong>Режиссер:</strong> ${movie.director}</p>
                    <p><strong>Актеры:</strong> ${movie.actors.join(', ')}</p>
                    <p><strong>Жанр:</strong> ${movie.genre.join(', ')}</p>
                    <p><strong>Описание:</strong> ${movie.description}</p>
                    <a href="index.html" class="back-btn">← Назад к списку</a>
                </div>
            </div>
        `;
    } else {
        movieDetails.innerHTML = `
            <div class="movie-detail-card">
                <h2>Фильм не найден</h2>
                <a href="index.html" class="back-btn">Вернуться на главную</a>
            </div>
        `;
    }
});