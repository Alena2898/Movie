document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = parseInt(urlParams.get('id'));
    const movieDetails = document.getElementById('movieDetails');
    
    const movie = movies.find(m => m.id === movieId);
    const hasRated = ratingSystem.hasRated(movieId);
    const userRating = ratingSystem.getRating(movieId);
    const isInCart = cart.isInCart(movieId);

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
                    
                    <div class="rating">
                        <p><strong>Рейтинг:</strong> 
                            <span class="rating-value">★ ${movie.rating}</span>
                            <span> (${movie.votes.toLocaleString()} оценок)</span>
                        </p>
                    </div>
                    
                    <p><strong>Описание:</strong> ${movie.description}</p>
                    
                    <div class="movie-actions">
                        <button class="add-to-cart-btn ${isInCart ? 'added' : ''}" data-id="${movie.id}">
                            ${isInCart ? '✓ В корзине' : '➕ Добавить в корзину'}
                        </button>
                        
                        <div class="user-rating">
                            <p><strong>Ваша оценка:</strong> 
                                ${hasRated ? `<span class="rating-value">★ ${userRating}</span>` : 'Ещё не оценено'}
                            </p>
                            ${!hasRated ? `
                                <div class="stars">
                                    ${[1, 2, 3, 4, 5].map(star => `
                                        <span class="star" data-rating="${star}">★</span>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    <a href="index.html" class="back-btn">← Назад к списку</a>
                </div>
            </div>
        `;

        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', () => {
                if (cart.addToCart(movieId)) {
                    addToCartBtn.textContent = '✓ В корзине';
                    addToCartBtn.classList.add('added');
                }
            });
        }

        if (!hasRated) {
            const stars = document.querySelectorAll('.star');
            stars.forEach(star => {
                star.addEventListener('click', () => {
                    const rating = parseInt(star.dataset.rating);
                    ratingSystem.setRating(movieId, rating);
                    
                    document.querySelector('.user-rating').innerHTML = `
                        <p><strong>Ваша оценка:</strong> 
                            <span class="rating-value">★ ${rating}</span>
                        </p>
                    `;
                });
            });
        }
    } else {
        movieDetails.innerHTML = `
            <div class="movie-detail-card">
                <h2>Фильм не найден</h2>
                <a href="index.html" class="back-btn">Вернуться на главную</a>
            </div>
        `;
    }

    setupModal();
});