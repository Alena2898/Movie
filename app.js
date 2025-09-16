const API_KEY = '9ec22f9'; 
const BASE_URL = 'https://www.omdbapi.com/'; 

let movies = []; 
let currentFilter = 'all';
let currentSort = 'default';
let searchTerm = '';

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

const cart = new Cart();
const ratingSystem = new RatingSystem();

async function loadLocalMovies() {
    return [
        {
            id: "tt0111161",
            title: "Побег из Шоушенка",
            poster: "https://via.placeholder.com/300x450/2c3e50/ffffff?text=Побег+из+Шоушенка",
            description: "Два заключенных многие годы ищут способ обрести свободу.",
            year: 1994,
            director: "Фрэнк Дарабонт",
            actors: ["Тим Роббинс", "Морган Фриман"],
            genre: ["Драма", "Криминал"],
            rating: 9.3,
            votes: 2500000
        },
        {
            id: "tt0068646",
            title: "Крестный отец",
            poster: "https://via.placeholder.com/300x450/2c3e50/ffffff?text=Крестный+отец",
            description: "История семьи мафиози Корлеоне.",
            year: 1972,
            director: "Фрэнсис Форд Коппола",
            actors: ["Марлон Брандо", "Аль Пачино"],
            genre: ["Криминал", "Драма"],
            rating: 9.2,
            votes: 1700000
        },
        {
            id: "tt0468569",
            title: "Темный рыцарь",
            poster: "https://via.placeholder.com/300x450/2c3e50/ffffff?text=Темный+рыцарь",
            description: "Бэтмен сражается с Джокером.",
            year: 2008,
            director: "Кристофер Нолан",
            actors: ["Кристиан Бейл", "Хит Леджер"],
            genre: ["Боевик", "Криминал", "Драма"],
            rating: 9.0,
            votes: 2400000
        },
        {
            id: "tt0109830",
            title: "Форрест Гамп",
            poster: "https://via.placeholder.com/300x450/2c3e50/ffffff?text=Форрест+Гамп",
            description: "История человека с низким IQ, который стал свидетелем ключевых событий истории Америки.",
            year: 1994,
            director: "Роберт Земекис",
            actors: ["Том Хэнкс", "Робин Райт"],
            genre: ["Драма", "Романтика"],
            rating: 8.8,
            votes: 1900000
        },
        {
            id: "tt0167260",
            title: "Властелин колец: Возвращение короля",
            poster: "https://via.placeholder.com/300x450/2c3e50/ffffff?text=Властелин+колец",
            description: "Фродо и Сэм продолжают свой путь к Роковой Горе, чтобы уничтожить Кольцо Всевластия.",
            year: 2003,
            director: "Питер Джексон",
            actors: ["Элайджа Вуд", "Вигго Мортенсен"],
            genre: ["Фэнтези", "Приключения", "Драма"],
            rating: 8.9,
            votes: 1700000
        },
        {
            id: "tttt0001",
            title: "Брат",
            poster: "https://via.placeholder.com/300x450/2c3e50/ffffff?text=Брат",
            description: "Демобилизованный Данила Багров пытается найти свое место в жизни в Санкт-Петербурге.",
            year: 1997,
            director: "Алексей Балабанов",
            actors: ["Сергей Бодров", "Виктор Сухоруков"],
            genre: ["Криминал", "Драма"],
            rating: 8.3,
            votes: 150000
        },
        {
            id: "tttt0002",
            title: "Ирония судьбы, или С легким паром!",
            poster: "https://via.placeholder.com/300x450/2c3e50/ffffff?text=Ирония+судьбы",
            description: "Новогодняя история о том, как мужчина по ошибке попал в чужую квартиру.",
            year: 1975,
            director: "Эльдар Рязанов",
            actors: ["Андрей Мягков", "Барбара Брыльска"],
            genre: ["Комедия", "Мелодрама"],
            rating: 8.5,
            votes: 120000
        },
        {
            id: "tttt0003",
            title: "Легенда №17",
            poster: "https://via.placeholder.com/300x450/2c3e50/ffffff?text=Легенда+№17",
            description: "Биографический фильм о хоккеисте Валерии Харламове.",
            year: 2012,
            director: "Николай Лебедев",
            actors: ["Данила Козловский", "Светлана Иванова"],
            genre: ["Биография", "Спорт", "Драма"],
            rating: 7.9,
            votes: 80000
        }
    ];
}

// Функция для поиска в локальной базе
function searchLocalMovies(query) {
    const searchTerm = query.toLowerCase().trim();
    return movies.filter(movie => 
        movie.title && movie.title.toLowerCase().includes(searchTerm) ||
        movie.description && movie.description.toLowerCase().includes(searchTerm) ||
        movie.director && movie.director.toLowerCase().includes(searchTerm) ||
        movie.actors && movie.actors.some(actor => actor.toLowerCase().includes(searchTerm)) ||
        movie.genre && movie.genre.some(genre => genre.toLowerCase().includes(searchTerm))
    );
}

async function searchMovies(query) {
    try {
        const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}&type=movie`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.Response === 'True') {
            const detailedMovies = await Promise.all(
                data.Search.slice(0, 10).map(async (movie) => {
                    return await getMovieDetails(movie.imdbID);
                })
            );
            return detailedMovies.filter(movie => movie !== null);
        } else {
            return searchLocalMovies(query);
        }
    } catch (error) {
        console.error('Ошибка поиска фильмов:', error);
        return searchLocalMovies(query);
    }
}

async function getMovieDetails(imdbID) {
    try {
        const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
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

async function getPopularMovies() {
    try {
        const popularQueries = [
            'avengers', 'batman', 'star wars', 'harry potter', 'lord of the rings',
            'марвел', 'бэтмен', 'звездные войны', 'гарри поттер', 'властелин колец'
        ];
        const randomQuery = popularQueries[Math.floor(Math.random() * popularQueries.length)];
        return await searchMovies(randomQuery);
    } catch (error) {
        console.error('Ошибка загрузки популярных фильмов:', error);
        return [];
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
            cartItems.innerHTML = '<p>Корзина пуста</p>';
        } else {
            const cartMovies = items.map(movieId => 
                movies.find(m => m.id === movieId)
            ).filter(movie => movie !== undefined);
            
            cartItems.innerHTML = cartMovies.map(movie => `
                <div class="cart-item">
                    <span>${movie.title}</span>
                    <button class="remove-from-cart" data-id="${movie.id}">Удалить</button>
                </div>
            `).join('');
            document.querySelectorAll('.remove-from-cart').forEach(btn => {
                btn.addEventListener('click', () => {
                    const movieId = btn.dataset.id;
                    cart.removeFromCart(movieId);
                    showCartModal();
                    updateCartButtons(movieId, false);
                });
            });
        }
    }
    
    modal.style.display = 'block';
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
    if (!moviesContainer) return;
    
    moviesContainer.innerHTML = '';
    
    if (moviesToRender.length === 0) {
        moviesContainer.innerHTML = '<div class="no-results">Фильмы не найдены</div>';
        return;
    }
    
    moviesToRender.forEach(movie => {
        const isInCart = cart.isInCart(movie.id);
        const movieEl = document.createElement('div');
        movieEl.className = 'movie';
        movieEl.innerHTML = `
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
                btn.textContent = '➕ В корзину';
                btn.classList.remove('added');
            } else {
                cart.addToCart(movieId);
                btn.textContent = '✓ В корзине';
                btn.classList.add('added');
            }
        });
    });
}

function filterAndSortMovies() {
    let filtered = [...movies]; 
    
    if (filtered.length === 0) {
        renderMovies([]);
        return;
    }
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(movie => {
            if (!movie.genre || !Array.isArray(movie.genre)) return false;
            
            const movieGenres = movie.genre.map(g => g.toLowerCase().trim());
            
            const genreMap = {
                'фантастика': ['фантастика', 'fantasy', 'sci-fi', 'science fiction'],
                'боевик': ['боевик', 'action', 'экшн'],
                'драма': ['драма', 'drama'],
                'комедия': ['комедия', 'comedy'],
                'триллер': ['триллер', 'thriller'],
                'криминал': ['криминал', 'crime', 'криминальный'],
                'приключения': ['приключения', 'adventure'],
                'мультфильм': ['мультфильм', 'animation', 'animated', 'cartoon'],
                'биография': ['биография', 'biography', 'biographical'],
                'исторический': ['исторический', 'history', 'historical']
            };
            
            const targetGenres = genreMap[currentFilter] || [currentFilter];
            
            return movieGenres.some(movieGenre => 
                targetGenres.some(targetGenre => movieGenre.includes(targetGenre))
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
}

async function initMainPage() {
    const moviesContainer = document.getElementById('movies');
    const searchInput = document.getElementById('search');
    const genreButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    
    if (moviesContainer && searchInput) {
        let currentFilter = 'all';
        let currentSort = 'default';
        let searchTerm = '';
       
        moviesContainer.innerHTML = `
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <p class="loading-text">Загрузка фильмов...</p>
            </div>
        `;
        
        try {
            movies = await getPopularMovies();
            
            if (movies.length === 0) {
                movies = await loadLocalMovies();
            }
            
            filterAndSortMovies();
        } catch (error) {
            console.error('Ошибка загрузки фильмов:', error);
            movies = await loadLocalMovies();
            filterAndSortMovies();
            
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.innerHTML = `<p>Упс! Сервер недоступен. Используем локальную базу фильмов.</p>`;
            moviesContainer.parentNode.insertBefore(errorMessage, moviesContainer);
        }
        
        function filterAndSortMovies() {
            let filtered = [...movies]; 
            
            if (currentFilter !== 'all') {
                filtered = filtered.filter(movie => 
                    movie.genre && movie.genre.some(g => 
                        g.toLowerCase().includes(currentFilter.toLowerCase())
                    )
                );
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
        }
        
        let searchTimeout;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTerm = e.target.value.trim();
            
            if (searchTerm.length > 1) {
                moviesContainer.innerHTML = `
                    <div class="loading-container">
                        <div class="loading-spinner"></div>
                        <p class="loading-text">Поиск...</p>
                    </div>
                `;
                
                searchTimeout = setTimeout(async () => {
                    try {
                        let searchResults = await searchMovies(searchTerm);
                        
                        if (searchResults.length === 0) {
                            searchResults = searchLocalMovies(searchTerm);
                        }
                        
                        movies = searchResults.length > 0 ? searchResults : await loadLocalMovies();
                        filterAndSortMovies();
                    } 
                    catch (error) {
                        console.error('Ошибка поиска:', error);
                        movies = searchLocalMovies(searchTerm);
                        if (movies.length === 0) {
                            movies = await loadLocalMovies();
                        }
                        filterAndSortMovies();
                        
                        const errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.innerHTML = `<p>Ошибка поиска: ${error.message}</p>`;
                        moviesContainer.parentNode.insertBefore(errorMessage, moviesContainer);
                    }
                }, 400);
            } else if (searchTerm.length === 0) {
                searchTimeout = setTimeout(async () => {
                    moviesContainer.innerHTML = `
                        <div class="loading-container">
                            <div class="loading-spinner"></div>
                            <p class="loading-text">Загрузка...</p>
                        </div>
                    `;
                    
                    try {
                        movies = await getPopularMovies();
                        if (movies.length === 0) movies = await loadLocalMovies();
                        filterAndSortMovies();
                    } catch (error) {
                        movies = await loadLocalMovies();
                        filterAndSortMovies();
                    }
                }, 300);
            }
        });
        
        genreButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                genreButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.filter;
                filterAndSortMovies();
            });
        });
        
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            filterAndSortMovies();
        });
    }
}

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
                <div class="movie-detail-card">
                    <h2>Фильм не найден</h2>
                    <p>Извините, ID фильма не указан.</p>
                    <a href="index.html" class="back-btn">Вернуться на главную</a>
                </div>
            `;
            return;
        }
        
        loadMovieDetails(movieId);
    }
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