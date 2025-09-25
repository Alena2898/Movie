const API_KEY = '9ec22f9'; 
const BASE_URL = 'https://www.omdbapi.com/'; 

let movies = []; 
let currentFilter = 'all';
let currentSort = 'default';
let searchTerm = '';
let currentPage = 1;
let totalResults = 0;
let isLoading = false;

class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartCount();
    }

    loadCart() {
        const saved = localStorage.getItem('movieCart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('movieCart', JSON.stringify(this.items));
    }

    addToCart(movieId) {
        if (!this.items.includes(movieId)) {
            this.items.push(movieId);
            this.saveCart();
            this.updateCartCount();
            return true;
        }
        return false;
    }

    removeFromCart(movieId) {
        this.items = this.items.filter(id => id !== movieId);
        this.saveCart();
        this.updateCartCount();
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartCount();
    }

    getCount() {
        return this.items.length;
    }

    getItems() {
        return this.items;
    }

    updateCartCount() {
        const countElements = document.querySelectorAll('#cartCount');
        countElements.forEach(el => {
            el.textContent = this.getCount();
        });
    }

    isInCart(movieId) {
        return this.items.includes(movieId);
    }
}

class RatingSystem {
    constructor() {
        this.ratings = this.loadRatings();
    }

    loadRatings() {
        const saved = localStorage.getItem('movieRatings');
        return saved ? JSON.parse(saved) : {};
    }

    saveRatings() {
        localStorage.setItem('movieRatings', JSON.stringify(this.ratings));
    }

    hasRated(movieId) {
        return this.ratings[movieId] !== undefined;
    }

    getRating(movieId) {
        return this.ratings[movieId];
    }

    setRating(movieId, rating) {
        this.ratings[movieId] = rating;
        this.saveRatings();
    }
}

class Favorites {
    constructor() {
        this.items = this.loadFavorites();
    }

    loadFavorites() {
        const saved = localStorage.getItem('movieFavorites');
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites() {
        localStorage.setItem('movieFavorites', JSON.stringify(this.items));
    }

    addToFavorites(movieId) {
        if (!this.items.includes(movieId)) {
            this.items.push(movieId);
            this.saveFavorites();
            this.updateFavoriteButtons(movieId, true);
            return true;
        }
        return false;
    }

    removeFromFavorites(movieId) {
        this.items = this.items.filter(id => id !== movieId);
        this.saveFavorites();
        this.updateFavoriteButtons(movieId, false);
    }

    toggleFavorite(movieId) {
        if (this.isFavorite(movieId)) {
            this.removeFromFavorites(movieId);
            return false;
        } else {
            this.addToFavorites(movieId);
            return true;
        }
    }

    getFavorites() {
        return this.items;
    }

    isFavorite(movieId) {
        return this.items.includes(movieId);
    }

    updateFavoriteButtons(movieId, isFavorite) {
        const buttons = document.querySelectorAll(`.favorite-btn[data-id="${movieId}"]`);
        buttons.forEach(btn => {
            if (isFavorite) {
                btn.innerHTML = '❤️';
                btn.classList.add('favorited');
                btn.title = 'Удалить из избранного';
            } else {
                btn.innerHTML = '🤍';
                btn.classList.remove('favorited');
                btn.title = 'Добавить в избранное';
            }
        });
    }

    getFavoriteMovies() {
        return this.items.map(movieId => 
            movies.find(m => m.id === movieId)
        ).filter(movie => movie !== undefined);
    }
}

const cart = new Cart();
const ratingSystem = new RatingSystem();
const favorites = new Favorites();

async function searchMovies(query, page = 1) {
    try {
        if (!query || query.trim().length < 2) {
            throw new Error('Введите хотя бы 2 символа для поиска');
        }

        const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie&page=${page}`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Ошибка сети: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.Response === 'True') {
            totalResults = parseInt(data.totalResults);
            
            const moviePromises = data.Search.slice(0, 8).map(async (movie) => {
                return await getMovieDetails(movie.imdbID);
            });
            
            const detailedMovies = await Promise.all(moviePromises);
            return {
                movies: detailedMovies.filter(movie => movie !== null),
                totalResults: totalResults,
                hasMore: (page * 10) < totalResults
            };
        } else {
            throw new Error(data.Error || 'Фильмы не найдены');
        }
    } catch (error) {
        console.error('Ошибка поиска фильмов:', error);
        throw error;
    }
}

async function getMovieDetails(imdbID) {
    try {
        const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=short`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Ошибка загрузки: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.Response === 'True') {
            return {
                id: data.imdbID,
                title: data.Title || 'Без названия',
                poster: data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/300x450/2c3e50/ffffff?text=No+Image',
                description: data.Plot || 'Описание отсутствует',
                year: parseInt(data.Year) || new Date().getFullYear(),
                director: data.Director || 'Не указан',
                actors: data.Actors ? data.Actors.split(', ') : [],
                genre: data.Genre ? data.Genre.split(', ') : ['Не указан'],
                rating: parseFloat(data.imdbRating) || 0,
                votes: parseInt(data.imdbVotes?.replace(/,/g, '')) || 0
            };
        }
        return null;
    } catch (error) {
        console.error('Ошибка загрузки деталей фильма:', error);
        return null;
    }
}

async function getPopularMovies(page = 1) {
    try {
        const popularQueries = ['avengers', 'batman', 'marvel', 'disney', 'action'];
        const randomQuery = popularQueries[Math.floor(Math.random() * popularQueries.length)];
        return await searchMovies(randomQuery, page);
    } catch (error) {
        console.error('Ошибка загрузки популярных фильмов:', error);
        throw error;
    }
}

async function loadNextPage() {
    if (isLoading) return;
    
    isLoading = true;
    const moviesContainer = document.getElementById('movies');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    
    if (loadMoreBtn) {
        loadMoreBtn.innerHTML = '<div class="loading-spinner small"></div> Загрузка...';
        loadMoreBtn.disabled = true;
    }
    
    try {
        currentPage++;
        let result;
        
        if (searchTerm) {
            result = await searchMovies(searchTerm, currentPage);
        } else {
            result = await getPopularMovies(currentPage);
        }
        
        if (result.movies && result.movies.length > 0) {
            movies = [...movies, ...result.movies];
            filterAndSortMovies();
            updateLoadMoreButton(result.hasMore);
        }
    } catch (error) {
        console.error('Ошибка загрузки следующей страницы:', error);
        showError(`Ошибка загрузки: ${error.message}`);
        currentPage--;
    } finally {
        isLoading = false;
    }
}

function updateLoadMoreButton(hasMore) {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    
    if (!loadMoreContainer) return;
    
    if (hasMore) {
        if (!loadMoreBtn) {
            loadMoreContainer.innerHTML = `
                <button id="loadMoreBtn" class="load-more-btn">
                    📺 Загрузить еще фильмы
                </button>
            `;
            
            document.getElementById('loadMoreBtn').addEventListener('click', loadNextPage);
        } else {
            loadMoreBtn.innerHTML = '📺 Загрузить еще фильмы';
            loadMoreBtn.disabled = false;
        }
    } else {
        loadMoreContainer.innerHTML = `
            <div class="no-more-results">
                <p>🎬 Все фильмы загружены!</p>
                <small>Найдено всего: ${totalResults} фильмов</small>
            </div>
        `;
    }
}

function setupModal() {
    const modal = document.getElementById('cartModal');
    const cartBtn = document.getElementById('cartBtn');
    const closeBtn = document.querySelector('.close');
    const clearBtn = document.getElementById('clearCart');

    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            showCartModal();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            cart.clearCart();
            showCartModal();
        });
    }

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

function showCartModal() {
    const modal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    
    if (cartItems) {
        const items = cart.getItems();
        if (items.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Корзина пуста</p>';
        } else {
            const cartMovies = items.map(movieId => 
                movies.find(m => m.id === movieId)
            ).filter(movie => movie !== undefined);
            
            cartItems.innerHTML = cartMovies.map(movie => `
                <div class="cart-item" data-id="${movie.id}">
                    <span class="cart-item-title">${movie.title}</span>
                    <div class="cart-item-actions">
                        <button class="view-movie-btn" data-id="${movie.id}">👁️</button>
                        <button class="remove-from-cart" data-id="${movie.id}">Удалить</button>
                    </div>
                </div>
            `).join('');
            
            document.querySelectorAll('.view-movie-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const movieId = btn.dataset.id;
                    viewMovieFromCart(movieId);
                });
            });
            
            document.querySelectorAll('.remove-from-cart').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const movieId = btn.dataset.id;
                    cart.removeFromCart(movieId);
                    showCartModal();
                    updateCartButtons(movieId, false);
                });
            });
            
            document.querySelectorAll('.cart-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    if (!e.target.closest('.cart-item-actions')) {
                        const movieId = item.dataset.id;
                        viewMovieFromCart(movieId);
                    }
                });
            });
        }
    }
    
    modal.style.display = 'block';
}

function viewMovieFromCart(movieId) {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'none';
    
    if (window.location.pathname.includes('movie.html')) {
        loadMovieDetails(movieId);
    } else {
        window.location.href = `movie.html?id=${movieId}`;
    }
}

function updateCartButtons(movieId, isInCart) {
    const buttons = document.querySelectorAll(`.add-to-cart-btn[data-id="${movieId}"]`);
    buttons.forEach(btn => {
        if (isInCart) {
            btn.textContent = '✓ В корзине';
            btn.classList.add('added');
        } else {
            btn.textContent = '➕ В корзину';
            btn.classList.remove('added');
        }
    });
}

function renderMovies(moviesToRender) {
    const moviesContainer = document.getElementById('movies');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    
    if (!moviesContainer) return;
    
    moviesContainer.innerHTML = '';
    
    if (moviesToRender.length === 0) {
        moviesContainer.innerHTML = `
            <div class="no-results">
                <h3>Фильмы не найдены</h3>
                <p>Попробуйте изменить поисковый запрос или фильтры</p>
            </div>
        `;
        if (loadMoreContainer) {
            loadMoreContainer.innerHTML = '';
        }
        return;
    }
    
    moviesToRender.forEach(movie => {
        const isInCart = cart.isInCart(movie.id);
        const isFavorite = favorites.isFavorite(movie.id);
        const movieEl = document.createElement('div');
        movieEl.className = 'movie';
        movieEl.innerHTML = `
            <div class="movie-header">
                <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-id="${movie.id}" title="${isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}">
                    ${isFavorite ? '❤️' : '🤍'}
                </button>
            </div>
            <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/280x400/2c3e50/ffffff?text=No+Image'">
            <h2>${movie.title}</h2>
            <div class="movie-meta">
                <span class="year">${movie.year}</span>
                <span class="genre">${movie.genre ? movie.genre.join(', ') : 'Не указан'}</span>
            </div>
            <p>${movie.description ? movie.description.substring(0, 100) + '...' : 'Описание отсутствует'}</p>
            <div class="rating">
                <span class="rating-value">★ ${movie.rating || 'N/A'}</span>
                <span> (${movie.votes ? movie.votes.toLocaleString() : 0} оценок)</span>
            </div>
            <div class="movie-actions">
                <button class="details-btn" data-id="${movie.id}">Подробнее</button>
                <button class="add-to-cart-btn ${isInCart ? 'added' : ''}" data-id="${movie.id}">
                    ${isInCart ? '✓ В корзине' : '➕ В корзину'}
                </button>
            </div>
        `;
        moviesContainer.appendChild(movieEl);
    });

    document.querySelectorAll('.details-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            window.location.href = `movie.html?id=${btn.dataset.id}`;
        });
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const movieId = btn.dataset.id;
            if (cart.isInCart(movieId)) {
                cart.removeFromCart(movieId);
                updateCartButtons(movieId, false);
            } else {
                cart.addToCart(movieId);
                updateCartButtons(movieId, true);
            }
        });
    });

    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const movieId = btn.dataset.id;
            favorites.toggleFavorite(movieId);
        });
    });
}

function filterAndSortMovies() {
    let filtered = [...movies];
    
    if (currentFilter === 'favorites') {
        filtered = favorites.getFavoriteMovies();
    } else if (currentFilter !== 'all') {
        filtered = filtered.filter(movie => {
            if (!movie.genre || !Array.isArray(movie.genre)) return false;
            return movie.genre.some(genre => 
                genre.toLowerCase().includes(currentFilter.toLowerCase())
            );
        });
    }
    
    if (searchTerm) {
        filtered = filtered.filter(movie => 
            movie.title && movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }
    
    switch(currentSort) {
        case 'rating-desc':
            filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            break;
        case 'rating-asc':
            filtered.sort((a, b) => (a.rating || 0) - (b.rating || 0));
            break;
        case 'title':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'year-desc':
            filtered.sort((a, b) => (b.year || 0) - (a.year || 0));
            break;
        case 'year-asc':
            filtered.sort((a, b) => (a.year || 0) - (b.year || 0));
            break;
    }
    
    renderMovies(filtered);
    
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (loadMoreContainer) {
        if (currentFilter === 'favorites') {
            loadMoreContainer.innerHTML = `
                <div class="favorites-info">
                    <p>❤️ В избранном: ${filtered.length} фильмов</p>
                </div>
            `;
        } else {
            updateLoadMoreButton((currentPage * 10) < totalResults);
        }
    }
}

function showError(message) {
    const moviesContainer = document.getElementById('movies');
    if (moviesContainer) {
        moviesContainer.innerHTML = `
            <div class="error-message">
                <h3>Ошибка</h3>
                <p>${message}</p>
                <button onclick="loadDefaultMovies()" class="retry-btn">Попробовать снова</button>
            </div>
        `;
    }
}

async function loadDefaultMovies() {
    const moviesContainer = document.getElementById('movies');
    if (!moviesContainer) return;
    
    currentPage = 1;
    totalResults = 0;
    
    moviesContainer.innerHTML = `
        <div class="loading-container">
            <div class="loading-spinner"></div>
            <p class="loading-text">Загрузка популярных фильмов...</p>
        </div>
    `;
    
    try {
        const result = await getPopularMovies(currentPage);
        movies = result.movies;
        totalResults = result.totalResults;
        
        filterAndSortMovies();
        updateLoadMoreButton(result.hasMore);
    } catch (error) {
        showError(`Не удалось загрузить фильмы: ${error.message}`);
    }
}

async function initMainPage() {
    const searchInput = document.getElementById('search');
    const genreButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    
    if (!searchInput) return;
    
    const moviesContainer = document.getElementById('movies');
    if (moviesContainer) {
        const loadMoreContainer = document.createElement('div');
        loadMoreContainer.id = 'loadMoreContainer';
        loadMoreContainer.className = 'load-more-container';
        moviesContainer.parentNode.appendChild(loadMoreContainer);
    }
    
    await loadDefaultMovies();
    
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTerm = e.target.value.trim();
        
        if (searchTerm.length > 1) {
            const moviesContainer = document.getElementById('movies');
            moviesContainer.innerHTML = `
                <div class="loading-container">
                    <div class="loading-spinner"></div>
                    <p class="loading-text">Поиск фильмов...</p>
                </div>
            `;
            
            searchTimeout = setTimeout(async () => {
                try {
                    currentPage = 1;
                    const result = await searchMovies(searchTerm, currentPage);
                    movies = result.movies;
                    totalResults = result.totalResults;
                    
                    filterAndSortMovies();
                    if (currentFilter !== 'favorites') {
                        updateLoadMoreButton(result.hasMore);
                    }
                } catch (error) {
                    showError(error.message);
                }
            }, 500);
        } else if (searchTerm.length === 0) {
            searchTimeout = setTimeout(() => {
                loadDefaultMovies();
            }, 300);
        }
    });
    
    genreButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            genreButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            
            if (currentFilter === 'favorites') {
                filterAndSortMovies();
            } else {
                filterAndSortMovies();
            }
        });
    });
    
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterAndSortMovies();
    });
}

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
            throw new Error('Фильм не найден в базе данных');
        }
    } catch (error) {
        console.error('Ошибка загрузки деталей фильма:', error);
        movieDetails.innerHTML = `
            <div class="error-message">
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
    const isFavorite = favorites.isFavorite(movie.id);

    movieDetails.innerHTML = `
        <div class="movie-detail-card">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450/2c3e50/ffffff?text=No+Image'">
                ${isInCart ? '<div class="in-cart-badge">В корзине</div>' : ''}
                ${isFavorite ? '<div class="favorite-badge">❤️ Избранное</div>' : ''}
            </div>
            <div class="movie-info">
                <div class="movie-header-detail">
                    <h2>${movie.title} (${movie.year})</h2>
                    <button class="favorite-btn-detail ${isFavorite ? 'favorited' : ''}" data-id="${movie.id}" title="${isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}">
                        ${isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>
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
                    
                    <button class="back-to-cart-btn" onclick="showCartModal()">
                        🛒 Вернуться к корзине
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

    const favoriteBtn = document.querySelector('.favorite-btn-detail');
    if (favoriteBtn) {
        favoriteBtn.addEventListener('click', () => {
            const movieId = favoriteBtn.dataset.id;
            const isNowFavorite = favorites.toggleFavorite(movieId);
            
            const favoriteBadge = document.querySelector('.favorite-badge');
            if (isNowFavorite && !favoriteBadge) {
                document.querySelector('.movie-poster').innerHTML += '<div class="favorite-badge">❤️ Избранное</div>';
            } else if (!isNowFavorite && favoriteBadge) {
                favoriteBadge.remove();
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

window.loadDefaultMovies = loadDefaultMovies;

document.addEventListener('DOMContentLoaded', () => {
    setupModal();
    
    if (document.getElementById('movies')) {
        initMainPage();
    }
    
    if (document.getElementById('movieDetails')) {
        const urlParams = new URLSearchParams(window.location.search);
        const movieId = urlParams.get('id');
        
        if (!movieId) {
            document.getElementById('movieDetails').innerHTML = `
                <div class="error-message">
                    <h2>Фильм не найден</h2>
                    <p>ID фильма не указан в URL</p>
                    <a href="index.html" class="back-btn">Вернуться на главную</a>
                </div>
            `;
            return;
        }
        
        loadMovieDetails(movieId);
    }
});