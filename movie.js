document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieDetails = document.getElementById('movieDetails');
});

async function loadMovieDetails(movieId) {
    const movieDetails = document.getElementById('movieDetails');
    
    try {
        
        movieDetails.innerHTML = `
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <p class="loading-text">Загрузка информации о фильме...</p>
            </div>
        `;
        
        const movie = await getMovieDetails(movieId);
        
        if (movie) {
            renderMovieDetails(movie);
        } else {
            throw new Error('Фильм не найден');
        }
    } catch (error) {
        console.error('Ошибка загрузки деталей фильма:', error);
        movieDetails.innerHTML = `
            <div class="movie-detail-card">
                <h2>Ошибка загрузки</h2>
                <p>${error.message}</p>
                <a href="index.html" class="back-btn">Вернуться на главную</a>
            </div>
        `;
    }
}

function renderMovieDetails(movie) {
    const movieDetails = document.getElementById('movieDetails');
    const hasRated = ratingSystem.hasRated(movie.id);
    const userRating = ratingSystem.getRating(movie.id);
    const isInCart = cart.isInCart(movie.id);

    movieDetails.innerHTML = `
        <div class="movie-detail-card">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450/2c3e50/ffffff?text=No+Image'">
            </div>
            <div class="movie-info">
                <h2>${movie.title} (${movie.year})</h2>
                <p><strong>Режиссер:</strong> ${movie.director || 'Не указан'}</p>
                <p><strong>Актеры:</strong> ${movie.actors ? movie.actors.join(', ') : 'Не указаны'}</p>
                <p><strong>Жанр:</strong> ${movie.genre ? movie.genre.join(', ') : 'Не указан'}</p>
                
                <div class="rating">
                    <p><strong>Рейтинг:</strong> 
                        <span class="rating-value">★ ${movie.rating || 'N/A'}</span>
                        <span> (${movie.votes ? movie.votes.toLocaleString() : 0} оценок)</span>
                    </p>
                </div>
                
                <p><strong>Описание:</strong> ${movie.description || 'Описание отсутствует'}</p>
                
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
                                ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(star => `
                                    <span class="star" data-rating="${star}">★</span>
                                `).join('')}
                            </div>
                            <small>Оцените от 1 до 10 звезд</small>
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
            const movieId = addToCartBtn.dataset.id;
            if (cart.isInCart(movieId)) {
                cart.removeFromCart(movieId);
                addToCartBtn.textContent = '➕ Добавить в корзину';
                addToCartBtn.classList.remove('added');
            } else {
                cart.addToCart(movieId);
                addToCartBtn.textContent = '✓ В корзине';
                addToCartBtn.classList.add('added');
            }
        });
    }

    
    if (!hasRated) {
        const stars = document.querySelectorAll('.star');
        let selectedRating = 0;

        stars.forEach(star => {
            star.addEventListener('mouseover', () => {
                const rating = parseInt(star.dataset.rating);
                highlightStars(rating);
            });

            star.addEventListener('mouseout', () => {
                highlightStars(selectedRating);
            });

            star.addEventListener('click', () => {
                selectedRating = parseInt(star.dataset.rating);
                ratingSystem.setRating(movie.id, selectedRating);
                
                document.querySelector('.user-rating').innerHTML = `
                    <p><strong>Ваша оценка:</strong> 
                        <span class="rating-value">★ ${selectedRating}</span>
                    </p>
                    <p><small>Спасибо за оценку!</small></p>
                `;
            });
        });

        function highlightStars(rating) {
            stars.forEach(star => {
                const starRating = parseInt(star.dataset.rating);
                if (starRating <= rating) {
                    star.style.color = '#ffc107';
                } else {
                    star.style.color = '#ccc';
                }
            });
        }
    }
}