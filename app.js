const movies = [
    {
        id: 1,
        title: "Интерстеллар",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        description: "Фантастический эпос о путешествии через червоточину в поисках нового дома для человечества.",
        year: 2014,
        director: "Кристофер Нолан",
        actors: ["Мэттью Макконахи", "Энн Хэтэуэй", "Джессика Честейн", "Майкл Кейн"],
        genre: ["Фантастика", "Драма", "Приключения"]
    },
    {
        id: 2,
        title: "Крёстный отец",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        description: "Классика гангстерского кино о семье Корлеоне и их криминальной империи.",
        year: 1972,
        director: "Фрэнсис Форд Коппола",
        actors: ["Марлон Брандо", "Аль Пачино", "Джеймс Каан", "Роберт Дюваль"],
        genre: ["Криминал", "Драма"]
    },
    {
        id: 3,
        title: "Тёмный рыцарь",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        description: "Бэтмен сражается с хаосом, который сеёт Джокер в Готэме.",
        year: 2008,
        director: "Кристофер Нолан",
        actors: ["Кристиан Бэйл", "Хит Леджер", "Аарон Экхарт", "Мэгги Джилленхол"],
        genre: ["Боевик", "Криминал", "Драма"]
    },
    {
        id: 4,
        title: "Форрест Гамп",
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        description: "История простого человека, который невольно меняет ход истории США.",
        year: 1994,
        director: "Роберт Земекис",
        actors: ["Том Хэнкс", "Робин Райт", "Гэри Синиз", "Салли Филд"],
        genre: ["Драма", "Романтика"]
    },
    {
        id: 5,
        title: "Побег из Шоушенка",
        poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        description: "Драма о надежде и дружбе в тюремных стенах.",
        year: 1994,
        director: "Фрэнк Дарабонт",
        actors: ["Тим Роббинс", "Морган Фриман", "Боб Гантон", "Уильям Сэдлер"],
        genre: ["Драма"]
    },
    {
        id: 6,
        title: "Начало",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        description: "Группа специалистов по внедрению в сны выполняет сложнейшую миссию.",
        year: 2010,
        director: "Кристофер Нолан",
        actors: ["Леонардо ДиКаприо", "Джозеф Гордон-Левитт", "Эллен Пейдж", "Том Харди"],
        genre: ["Фантастика", "Боевик", "Триллер"]
    },
    {
        id: 7,
        title: "Матрица",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        description: "Хакер Нео узнаёт, что реальность — это иллюзия, созданная машинами.",
        year: 1999,
        director: "Лана и Лилли Вачовски",
        actors: ["Киану Ривз", "Лоренс Фишберн", "Кэрри-Энн Мосс", "Хьюго Уивинг"],
        genre: ["Фантастика", "Боевик"]
    },
    {
        id: 8,
        title: "Титаник",
        poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        description: "Любовная история на фоне крушения легендарного лайнера.",
        year: 1997,
        director: "Джеймс Кэмерон",
        actors: ["Леонардо ДиКаприо", "Кейт Уинслет", "Билли Зейн", "Кэти Бейтс"],
        genre: ["Драма", "Романтика"]
    },
    {
        id: 9,
        title: "Властелин колец: Братство Кольца",
        poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg",
        description: "Фродо отправляется в опасное путешествие, чтобы уничтожить Кольцо Всевластья.",
        year: 2001,
        director: "Питер Джексон",
        actors: ["Элайджа Вуд", "Иэн Маккеллен", "Вигго Мортенсен", "Шон Эстин"],
        genre: ["Фэнтези", "Приключения"]
    },
    {
        id: 10,
        title: "Криминальное чтиво",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        description: "Несколько переплетающихся историй о бандитах, боксёре и спасении мафиозного босса.",
        year: 1994,
        director: "Квентин Тарантино",
        actors: ["Джон Траволта", "Сэмюэл Л. Джексон", "Ума Турман", "Брюс Уиллис"],
        genre: ["Криминал", "Драма"]
    },
    {
        id: 11,
        title: "Зелёная книга",
        poster: "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_FMjpg_UX1000_.jpg",
        description: "История дружбы афроамериканского пианиста и его итальянского водителя во времена сегрегации.",
        year: 2018,
        director: "Питер Фаррелли",
        actors: ["Вигго Мортенсен", "Махершала Али", "Линда Карделлини", "Дон Старк"],
        genre: ["Драма", "Комедия", "Биография"]
    },
    {
        id: 12,
    title: "Как приручить дракона",
    poster: "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    description: "История дружбы мальчика Иккинга и дракона Беззубика, которая меняет жизнь всей деревни викингов.",
    year: 2010,
    director: "Дин ДеБлуа, Крис Сандерс",
    actors: ["Джей Барушель", "Джерард Батлер", "Крэйг Фергюсон", "Америка Феррера"],
    genre: ["Мультфильм", "Приключения", "Семейный"]
    },
    {
        id: 13,
        title: "Паразиты",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        description: "Бедная семья внедряется в жизнь богатых, что приводит к неожиданным последствиям.",
        year: 2019,
        director: "Пон Джун-хо",
        actors: ["Сон Кан-хо", "Ли Сон-гюн", "Чо Ё-джон", "Чхве У-щик"],
        genre: ["Триллер", "Драма", "Комедия"]
    },
    {
        id: 14,
        title: "Джокер",
        poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        description: "История превращения неудачливого комика в преступного гения.",
        year: 2019,
        director: "Тодд Филлипс",
        actors: ["Хоакин Феникс", "Роберт Де Ниро", "Зэзи Битц", "Фрэнсис Конрой"],
        genre: ["Триллер", "Драма", "Криминал"]
    },
    {
        id: 15,
        title: "Аватар",
        poster: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
        description: "Бывший морпех становится частью программы по освоению планеты Пандора.",
        year: 2009,
        director: "Джеймс Кэмерон",
        actors: ["Сэм Уортингтон", "Зои Салдана", "Сигурни Уивер", "Стивен Лэнг"],
        genre: ["Фантастика", "Приключения", "Боевик"]
    },
    {
        id: 16,
        title: "Гладиатор",
        poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        description: "Преданный генерал становится гладиатором, чтобы отомстить за убийство семьи.",
        year: 2000,
        director: "Ридли Скотт",
        actors: ["Рассел Кроу", "Хоакин Феникс", "Конни Нильсен", "Оливер Рид"],
        genre: ["Боевик", "Драма", "Исторический"]
    },
    {
        id: 17,
        title: "Бойцовский клуб",
        poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        description: "Страдающий бессонницей офисный работник создаёт подпольный бойцовский клуб.",
        year: 1999,
        director: "Дэвид Финчер",
        actors: ["Брэд Питт", "Эдвард Нортон", "Хелена Бонем Картер", "Мит Лоаф"],
        genre: ["Драма", "Триллер"]
    },
    {
        id: 18,
        title: "1+1",
        poster: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_FMjpg_UX1000_.jpg",
        description: "Богатый парализованный аристократ нанимает в помощники бывшего заключённого.",
        year: 2011,
        director: "Оливье Накаш",
        actors: ["Франсуа Клюзе", "Омар Си", "Анн Ле Ни", "Одри Флёро"],
        genre: ["Драма", "Комедия", "Биография"]
    },
    {
        id: 19,
        title: "Король Лев",
        poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_FMjpg_UX1000_.jpg",
        description: "Молодой львёнок Симба познаёт истинный смысл ответственности и чести.",
        year: 1994,
        director: "Роджер Аллерс",
        actors: ["Мэттью Бродерик", "Джереми Айронс", "Джеймс Эрл Джонс", "Вупи Голдберг"],
        genre: ["Мультфильм", "Мюзикл", "Драма"]
    },
    {
        id: 20,
        title: "Остров проклятых",
        poster: "https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
        description: "Детектив расследует исчезновение пациентки психиатрической клиники на отдалённом острове.",
        year: 2010,
        director: "Мартин Скорсезе",
        actors: ["Леонардо ДиКаприо", "Марк Руффало", "Бен Кингсли", "Мишель Уильямс"],
        genre: ["Триллер", "Детектив", "Драма"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies');
    const searchInput = document.getElementById('search');
    
    
    function renderMovies(moviesToRender) {
        moviesContainer.innerHTML = '';
        
        moviesToRender.forEach(movie => {
            const movieEl = document.createElement('div');
            movieEl.className = 'movie';
            movieEl.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}">
                <h2>${movie.title}</h2>
                <p>${movie.description}</p>
                <button class="details-btn" data-id="${movie.id}">Подробнее</button>
            `;
            moviesContainer.appendChild(movieEl);
        });

        
        document.querySelectorAll('.details-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                window.location.href = `movie.html?id=${btn.dataset.id}`;
            });
        });
    }

    
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = movies.filter(movie => 
            movie.title.toLowerCase().includes(term)
        );
        renderMovies(filtered);
    });

    
    renderMovies(movies);
});