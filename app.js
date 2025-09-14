const API_KEY = '9ec22f9'; 
const BASE_URL = 'http://www.omdbapi.com/';

const movies = [
  {
        id: 1,
        title: "Интерстеллар",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        description: "Фантастический эпос о путешествии через червоточину в поисках нового дома для человечества.",
        year: 2014,
        director: "Кристофер Нолан",
        actors: ["Мэттью Макконахи", "Энн Хэтэуэй", "Джессика Честейн", "Майкл Кейн"],
        genre: ["Фантастика", "Драма", "Приключения"],
        rating: 8.6,
        votes: 1890000
    },
    {
        id: 2,
        title: "Крёстный отец",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        description: "Классика гангстерского кино о семье Корлеоне и их криминальной империи.",
        year: 1972,
        director: "Фрэнсис Форд Коппола",
        actors: ["Марлон Брандо", "Аль Пачино", "Джеймс Каан", "Роберт Дюваль"],
        genre: ["Криминал", "Драма"],
        rating: 9.2,
        votes: 1920000
    },
    {
        id: 3,
        title: "Тёмный рыцарь",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        description: "Бэтмен сражается с хаосом, который сеёт Джокер в Готэме.",
        year: 2008,
        director: "Кристофер Нолан",
        actors: ["Кристиан Бэйл", "Хит Леджер", "Аарон Экхарт", "Мэгги Джилленхол"],
        genre: ["Боевик", "Криминал", "Драма"],
        rating: 9.0,
        votes: 2700000
    },
    {
        id: 4,
        title: "Форрест Гамп",
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        description: "История простого человека, который невольно меняет ход истории США.",
        year: 1994,
        director: "Роберт Земекис",
        actors: ["Том Хэнks", "Робин Райт", "Гэри Синиз", "Салли Филд"],
        genre: ["Драма", "Романтика"],
        rating: 8.8,
        votes: 2100000
    },
    {
        id: 5,
        title: "Побег из Шоушенка",
        poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        description: "Драма о надежде и дружбе в тюремных стенах.",
        year: 1994,
        director: "Фрэнк Дарабонт",
        actors: ["Тим Роббинс", "Морган Фриман", "Боб Гантон", "Уильям Сэдлер"],
        genre: ["Драма"],
        rating: 9.3,
        votes: 2800000
    },
    {
        id: 6,
        title: "Начало",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        description: "Группа специалистов по внедрению в сны выполняет сложнейшую миссию.",
        year: 2010,
        director: "Кристофер Нолан",
        actors: ["Леонардо ДиКаприо", "Джозеф Гордон-Левитт", "Эллен Пейдж", "Том Харди"],
        genre: ["Фантастика", "Боевик", "Триллер"],
        rating: 8.8,
        votes: 2400000
    },
    {
        id: 7,
        title: "Матрица",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        description: "Хакер Нео узнаёт, что реальность — это иллюзия, созданная машинами.",
        year: 1999,
        director: "Лана и Лилли Вачовски",
        actors: ["Киану Ривз", "Лоренс Фишберн", "Кэрри-Энн Мосс", "Хьюго Уивинг"],
        genre: ["Фантастика", "Боевик"],
        rating: 8.7,
        votes: 1980000
    },
    {
        id: 8,
        title: "Титаник",
        poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        description: "Любовная история на фоне крушения легендарного лайнера.",
        year: 1997,
        director: "Джеймс Кэмерон",
        actors: ["Леонардо ДиКаприo", "Кейт Уинслет", "Билли Зейн", "Кэти Бейтс"],
        genre: ["Драма", "Романтика"],
        rating: 7.9,
        votes: 1250000
    },
    {
        id: 9,
        title: "Властелин колец: Братство Кольца",
        poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg",
        description: "Фродо отправляется в опасное путешествие, чтобы уничтожить Кольцо Всевластья.",
        year: 2001,
        director: "Питер Джексон",
        actors: ["Элайджа Вуд", "Иэн Маккеллен", "Вигго Мортенсен", "Шон Эстин"],
        genre: ["Фэнтези", "Приключения"],
        rating: 8.8,
        votes: 1900000
    },
    {
        id: 10,
        title: "Криминальное чтиво",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        description: "Несколько переплетающихся историй о бандитах, боксёре и спасении мафиозного босса.",
        year: 1994,
        director: "Квентин Тарантино",
        actors: ["Джон Траволта", "Сэмюэл Л. Джексон", "Ума Турман", "Брюс Уиллис"],
        genre: ["Криминал", "Драма"],
        rating: 8.9,
        votes: 2100000
    },
    {
        id: 11,
        title: "Зелёная книга",
        poster: "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_FMjpg_UX1000_.jpg",
        description: "История дружбы афроамериканского пианиста и его итальянского водителя во времена сегрегации.",
        year: 2018,
        director: "Питер Фаррелли",
        actors: ["Вигго Мортенсен", "Махершала Али", "Линда Карделлини", "Дон Старк"],
        genre: ["Драма", "Комедия", "Биография"],
        rating: 8.2,
        votes: 520000
    },
    {
        id: 12,
        title: "Как приручить дракона",
        poster: "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
        description: "История дружбы мальчика Иккинга и дракона Беззубика, которая меняет жизнь всей деревни викингов.",
        year: 2010,
        director: "Дин ДеБлуа, Крис Сандерс",
        actors: ["Джей Барушель", "Джерард Батлер", "Крэйг Фергюсон", "Америка Феррера"],
        genre: ["Мультфильм", "Приключения", "Семейный"],
        rating: 8.1,
        votes: 760000
    },
    {
        id: 13,
        title: "Паразиты",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        description: "Бедная семья внедряется в жизнь богатых, что приводит к неожиданным последствиям.",
        year: 2019,
        director: "Пон Джун-хо",
        actors: ["Сон Кан-хо", "Ли Сон-гюн", "Чо Ё-джон", "Чхве У-щик"],
        genre: ["Триллер", "Драма", "Комедия"],
        rating: 8.6,
        votes: 850000
    },
    {
        id: 14,
        title: "Джокер",
        poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        description: "История превращения неудачливого комика в преступного гения.",
        year: 2019,
        director: "Тодд Филлипс",
        actors: ["Хоакин Феникс", "Роберт Де Ниро", "Зэзи Битц", "Фрэнсис Конрой"],
        genre: ["Триллер", "Драма", "Криминал"],
        rating: 8.4,
        votes: 1400000
    },
    {
        id: 15,
        title: "Аватар",
        poster: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
        description: "Бывший морпех становится частью программы по освоению планеты Пандора.",
        year: 2009,
        director: "Джеймс Кэмерон",
        actors: ["Сэм Уортингтон", "Зои Салдана", "Сигурни Уивер", "Стивен Лэнг"],
        genre: ["Фантастика", "Приключения", "Боевик"],
        rating: 7.8,
        votes: 1350000
    },
    {
        id: 16,
        title: "Гладиатор",
        poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        description: "Преданный генерал становится гладиатором, чтобы отомстить за убийство семьи.",
        year: 2000,
        director: "Ридли Скотт",
        actors: ["Рассел Кроу", "Хоакин Феникс", "Конни Нильсен", "Оливер Рид"],
        genre: ["Боевик", "Драма", "Исторический"],
        rating: 8.5,
        votes: 1580000
    },
    {
        id: 17,
        title: "Бойцовский клуб",
        poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        description: "Страдающий бессонницей офисный работник создаёт подпольный бойцовский клуб.",
        year: 1999,
        director: "Дэвид Финчер",
        actors: ["Брэд Питт", "Эдвард Нортон", "Хелена Бонем Картер", "Мит Лоаф"],
        genre: ["Драма", "Триллер"],
        rating: 8.8,
        votes: 2200000
    },
    {
        id: 18,
        title: "1+1",
        poster: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_FMjpg_UX1000_.jpg",
        description: "Богатый парализованный аристократ нанимает в помощники бывшего заключённого.",
        year: 2011,
        director: "Оливье Накаш",
        actors: ["Франсуа Клюзе", "Омар Си", "Анн Ле Ни", "Одри Флёро"],
        genre: ["Драма", "Комедия", "Биография"],
        rating: 8.5,
        votes: 890000
    },
    {
        id: 19,
        title: "Король Лев",
        poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_FMjpg_UX1000_.jpg",
        description: "Молодой львёнок Симба познаёт истинный смысл ответственности и чести.",
        year: 1994,
        director: "Роджер Аллерс",
        actors: ["Мэттью Бродерик", "Джереми Айронс", "Джеймс Эрл Джон스", "Вупи Голдберг"],
        genre: ["Мультфильм", "Мюзикл", "Драма"],
        rating: 8.5,
        votes: 1100000
    },
    {
        id: 20,
        title: "Остров проклятых",
        poster: "https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
        description: "Детектив расследует исчезновение пациентки психиатрической клиники на отдалённом острове.",
        year: 2010,
        director: "Мартин Скорсезе",
        actors: ["Леонардо ДиКаприо", "Марк Руффало", "Бен Кингсли", "Мишель Уильямс"],
        genre: ["Триллер", "Детектив", "Драма"],
        rating: 8.2,
        votes: 1450000
    }
];

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
            return [];
        }
    } catch (error) {
        console.error('Ошибка поиска фильмов:', error);
        throw new Error('Сервер недоступен. Попробуйте позже.');
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
                title: data.Title,
                poster: data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/300x450/2c3e50/ffffff?text=No+Image',
                description: data.Plot,
                year: parseInt(data.Year) || new Date().getFullYear(),
                director: data.Director,
                actors: data.Actors ? data.Actors.split(', ') : [],
                genre: data.Genre ? data.Genre.split(', ') : [],
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
        
        const popularQueries = ['avengers', 'batman', 'star wars', 'harry potter', 'lord of the rings'];
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
            cartItems.innerHTML = items.map(movieId => {
                const movie = movies.find(m => m.id === movieId);
                return movie ? `
                    <div class="cart-item">
                        <span>${movie.title}</span>
                        <button class="remove-from-cart" data-id="${movie.id}">Удалить</button>
                    </div>
                ` : '';
            }).join('');
            
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
                <span class="genre">${movie.genre.join(', ')}</span>
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

async function initMainPage() {
    const moviesContainer = document.getElementById('movies');
    const searchInput = document.getElementById('search');
    const genreButtons = document.querySelectorAll('.filter-btn');
    const sortSelect = document.getElementById('sortSelect');
    
    if (moviesContainer && searchInput) {
        let currentFilter = 'all';
        let currentSort = 'default';
        let searchTerm = '';
        let allMovies = [];
        
        
        moviesContainer.innerHTML = `
            <div class="loading-container">
                <div class="loading-spinner"></div>
                <p class="loading-text">Загрузка фильмов...</p>
            </div>
        `;
        
        try {
            
            allMovies = await getPopularMovies();
            
            
            if (allMovies.length === 0) {
                allMovies = movies;
            }
            
            filterAndSortMovies();
        } catch (error) {
            console.error('Ошибка загрузки фильмов:', error);
            
            allMovies = movies;
            filterAndSortMovies();
            
            
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.innerHTML = `
                <p>Упс! Сервер недоступен. Используем локальную базу фильмов.</p>
            `;
            moviesContainer.parentNode.insertBefore(errorMessage, moviesContainer);
        }
        
        function filterAndSortMovies() {
            let filtered = [...allMovies];
            
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
            
            if (searchTerm.length > 2) {
                moviesContainer.innerHTML = `
                    <div class="loading-container">
                        <div class="loading-spinner"></div>
                        <p class="loading-text">Поиск...</p>
                    </div>
                `;
                
                searchTimeout = setTimeout(async () => {
                    try {
                        const searchResults = await searchMovies(searchTerm);
                        allMovies = searchResults.length > 0 ? searchResults : movies;
                        filterAndSortMovies();
                    } catch (error) {
                        console.error('Ошибка поиска:', error);
                        allMovies = movies;
                        filterAndSortMovies();
                        
                        const errorMessage = document.createElement('div');
                        errorMessage.className = 'error-message';
                        errorMessage.innerHTML = `<p>Ошибка поиска: ${error.message}</p>`;
                        moviesContainer.parentNode.insertBefore(errorMessage, moviesContainer);
                    }
                }, 500);
            } else if (searchTerm.length === 0) {
                searchTimeout = setTimeout(async () => {
                    moviesContainer.innerHTML = `
                        <div class="loading-container">
                            <div class="loading-spinner"></div>
                            <p class="loading-text">Загрузка...</p>
                        </div>
                    `;
                    
                    try {
                        allMovies = await getPopularMovies();
                        if (allMovies.length === 0) allMovies = movies;
                        filterAndSortMovies();
                    } catch (error) {
                        allMovies = movies;
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
});