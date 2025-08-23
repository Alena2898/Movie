const movies = [
    {
        id: 1,
        title: "РРЅС‚РµСЂСЃС‚РµР»Р»Р°СЂ",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        description: "Р¤Р°РЅС‚Р°СЃС‚РёС‡РµСЃРєРёР№ СЌРїРѕСЃ Рѕ РїСѓС‚РµС€РµСЃС‚РІРёРё С‡РµСЂРµР· С‡РµСЂРІРѕС‚РѕС‡РёРЅСѓ РІ РїРѕРёСЃРєР°С… РЅРѕРІРѕРіРѕ РґРѕРјР° РґР»СЏ С‡РµР»РѕРІРµС‡РµСЃС‚РІР°.",
        year: 2014,
        director: "РљСЂРёСЃС‚РѕС„РµСЂ РќРѕР»Р°РЅ",
        actors: ["РњСЌС‚С‚СЊСЋ РњР°РєРєРѕРЅР°С…Рё", "Р­РЅРЅ РҐСЌС‚СЌСѓСЌР№", "Р”Р¶РµСЃСЃРёРєР° Р§РµСЃС‚РµР№РЅ", "РњР°Р№РєР» РљРµР№РЅ"],
        genre: ["Р¤Р°РЅС‚Р°СЃС‚РёРєР°", "Р”СЂР°РјР°", "РџСЂРёРєР»СЋС‡РµРЅРёСЏ"],
        rating: 8.6,
        votes: 1890000
    },
    {
        id: 2,
        title: "РљСЂС‘СЃС‚РЅС‹Р№ РѕС‚РµС†",
        poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        description: "РљР»Р°СЃСЃРёРєР° РіР°РЅРіСЃС‚РµСЂСЃРєРѕРіРѕ РєРёРЅРѕ Рѕ СЃРµРјСЊРµ РљРѕСЂР»РµРѕРЅРµ Рё РёС… РєСЂРёРјРёРЅР°Р»СЊРЅРѕР№ РёРјРїРµСЂРёРё.",
        year: 1972,
        director: "Р¤СЂСЌРЅСЃРёСЃ Р¤РѕСЂРґ РљРѕРїРїРѕР»Р°",
        actors: ["РњР°СЂР»РѕРЅ Р‘СЂР°РЅРґРѕ", "РђР»СЊ РџР°С‡РёРЅРѕ", "Р”Р¶РµР№РјСЃ РљР°Р°РЅ", "Р РѕР±РµСЂС‚ Р”СЋРІР°Р»СЊ"],
        genre: ["РљСЂРёРјРёРЅР°Р»", "Р”СЂР°РјР°"],
        rating: 9.2,
        votes:  1920000
    },
    {
        id: 3,
        title: "РўС‘РјРЅС‹Р№ СЂС‹С†Р°СЂСЊ",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        description: "Р‘СЌС‚РјРµРЅ СЃСЂР°Р¶Р°РµС‚СЃСЏ СЃ С…Р°РѕСЃРѕРј, РєРѕС‚РѕСЂС‹Р№ СЃРµС‘С‚ Р”Р¶РѕРєРµСЂ РІ Р“РѕС‚СЌРјРµ.",
        year: 2008,
        director: "РљСЂРёСЃС‚РѕС„РµСЂ РќРѕР»Р°РЅ",
        actors: ["РљСЂРёСЃС‚РёР°РЅ Р‘СЌР№Р»", "РҐРёС‚ Р›РµРґР¶РµСЂ", "РђР°СЂРѕРЅ Р­РєС…Р°СЂС‚", "РњСЌРіРіРё Р”Р¶РёР»Р»РµРЅС…РѕР»"],
        genre: ["Р‘РѕРµРІРёРє", "РљСЂРёРјРёРЅР°Р»", "Р”СЂР°РјР°"],
        rating: 9.0,
        votes: 2700000
    },
    {
        id: 4,
        title: "Р¤РѕСЂСЂРµСЃС‚ Р“Р°РјРї",
        poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        description: "РСЃС‚РѕСЂРёСЏ РїСЂРѕСЃС‚РѕРіРѕ С‡РµР»РѕРІРµРєР°, РєРѕС‚РѕСЂС‹Р№ РЅРµРІРѕР»СЊРЅРѕ РјРµРЅСЏРµС‚ С…РѕРґ РёСЃС‚РѕСЂРёРё РЎРЁРђ.",
        year: 1994,
        director: "Р РѕР±РµСЂС‚ Р—РµРјРµРєРёСЃ",
        actors: ["РўРѕРј РҐСЌРЅРєСЃ", "Р РѕР±РёРЅ Р Р°Р№С‚", "Р“СЌСЂРё РЎРёРЅРёР·", "РЎР°Р»Р»Рё Р¤РёР»Рґ"],
        genre: ["Р”СЂР°РјР°", "Р РѕРјР°РЅС‚РёРєР°"],
        rating: 8.8,
        votes: 2100000
    },
    {
        id: 5,
        title: "РџРѕР±РµРі РёР· РЁРѕСѓС€РµРЅРєР°",
        poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        description: "Р”СЂР°РјР° Рѕ РЅР°РґРµР¶РґРµ Рё РґСЂСѓР¶Р±Рµ РІ С‚СЋСЂРµРјРЅС‹С… СЃС‚РµРЅР°С….",
        year: 1994,
        director: "Р¤СЂСЌРЅРє Р”Р°СЂР°Р±РѕРЅС‚",
        actors: ["РўРёРј Р РѕР±Р±РёРЅСЃ", "РњРѕСЂРіР°РЅ Р¤СЂРёРјР°РЅ", "Р‘РѕР± Р“Р°РЅС‚РѕРЅ", "РЈРёР»СЊСЏРј РЎСЌРґР»РµСЂ"],
        genre: ["Р”СЂР°РјР°"],
        rating: 9.3,
        votes: 2800000
    },
    {
        id: 6,
        title: "РќР°С‡Р°Р»Рѕ",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        description: "Р“СЂСѓРїРїР° СЃРїРµС†РёР°Р»РёСЃС‚РѕРІ РїРѕ РІРЅРµРґСЂРµРЅРёСЋ РІ СЃРЅС‹ РІС‹РїРѕР»РЅСЏРµС‚ СЃР»РѕР¶РЅРµР№С€СѓСЋ РјРёСЃСЃРёСЋ.",
        year: 2010,
        director: "РљСЂРёСЃС‚РѕС„РµСЂ РќРѕР»Р°РЅ",
        actors: ["Р›РµРѕРЅР°СЂРґРѕ Р”РёРљР°РїСЂРёРѕ", "Р”Р¶РѕР·РµС„ Р“РѕСЂРґРѕРЅ-Р›РµРІРёС‚С‚", "Р­Р»Р»РµРЅ РџРµР№РґР¶", "РўРѕРј РҐР°СЂРґРё"],
        genre: ["Р¤Р°РЅС‚Р°СЃС‚РёРєР°", "Р‘РѕРµРІРёРє", "РўСЂРёР»Р»РµСЂ"],
        rating: 8.8,
        votes: 2400000
    },
    {
        id: 7,
        title: "РњР°С‚СЂРёС†Р°",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        description: "РҐР°РєРµСЂ РќРµРѕ СѓР·РЅР°С‘С‚, С‡С‚Рѕ СЂРµР°Р»СЊРЅРѕСЃС‚СЊ вЂ” СЌС‚Рѕ РёР»Р»СЋР·РёСЏ, СЃРѕР·РґР°РЅРЅР°СЏ РјР°С€РёРЅР°РјРё.",
        year: 1999,
        director: "Р›Р°РЅР° Рё Р›РёР»Р»Рё Р’Р°С‡РѕРІСЃРєРё",
        actors: ["РљРёР°РЅСѓ Р РёРІР·", "Р›РѕСЂРµРЅСЃ Р¤РёС€Р±РµСЂРЅ", "РљСЌСЂСЂРё-Р­РЅРЅ РњРѕСЃСЃ", "РҐСЊСЋРіРѕ РЈРёРІРёРЅРі"],
        genre: ["Р¤Р°РЅС‚Р°СЃС‚РёРєР°", "Р‘РѕРµРІРёРє"],
        rating: 8.7,
        votes: 1980000
    },
    {
        id: 8,
        title: "РўРёС‚Р°РЅРёРє",
        poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        description: "Р›СЋР±РѕРІРЅР°СЏ РёСЃС‚РѕСЂРёСЏ РЅР° С„РѕРЅРµ РєСЂСѓС€РµРЅРёСЏ Р»РµРіРµРЅРґР°СЂРЅРѕРіРѕ Р»Р°Р№РЅРµСЂР°.",
        year: 1997,
        director: "Р”Р¶РµР№РјСЃ РљСЌРјРµСЂРѕРЅ",
        actors: ["Р›РµРѕРЅР°СЂРґРѕ Р”РёРљР°РїСЂРёРѕ", "РљРµР№С‚ РЈРёРЅСЃР»РµС‚", "Р‘РёР»Р»Рё Р—РµР№РЅ", "РљСЌС‚Рё Р‘РµР№С‚СЃ"],
        genre: ["Р”СЂР°РјР°", "Р РѕРјР°РЅС‚РёРєР°"],
        rating: 7.9,
        votes: 1250000
    },
    {
        id: 9,
        title: "Р’Р»Р°СЃС‚РµР»РёРЅ РєРѕР»РµС†: Р‘СЂР°С‚СЃС‚РІРѕ РљРѕР»СЊС†Р°",
        poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg",
        description: "Р¤СЂРѕРґРѕ РѕС‚РїСЂР°РІР»СЏРµС‚СЃСЏ РІ РѕРїР°СЃРЅРѕРµ РїСѓС‚РµС€РµСЃС‚РІРёРµ, С‡С‚РѕР±С‹ СѓРЅРёС‡С‚РѕР¶РёС‚СЊ РљРѕР»СЊС†Рѕ Р’СЃРµРІР»Р°СЃС‚СЊСЏ.",
        year: 2001,
        director: "РџРёС‚РµСЂ Р”Р¶РµРєСЃРѕРЅ",
        actors: ["Р­Р»Р°Р№РґР¶Р° Р’СѓРґ", "РСЌРЅ РњР°РєРєРµР»Р»РµРЅ", "Р’РёРіРіРѕ РњРѕСЂС‚РµРЅСЃРµРЅ", "РЁРѕРЅ Р­СЃС‚РёРЅ"],
        genre: ["Р¤СЌРЅС‚РµР·Рё", "РџСЂРёРєР»СЋС‡РµРЅРёСЏ"],
        rating: 8.8,
        votes: 1900000
    },
    {
        id: 10,
        title: "РљСЂРёРјРёРЅР°Р»СЊРЅРѕРµ С‡С‚РёРІРѕ",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        description: "РќРµСЃРєРѕР»СЊРєРѕ РїРµСЂРµРїР»РµС‚Р°СЋС‰РёС…СЃСЏ РёСЃС‚РѕСЂРёР№ Рѕ Р±Р°РЅРґРёС‚Р°С…, Р±РѕРєСЃС‘СЂРµ Рё СЃРїР°СЃРµРЅРёРё РјР°С„РёРѕР·РЅРѕРіРѕ Р±РѕСЃСЃР°.",
        year: 1994,
        director: "РљРІРµРЅС‚РёРЅ РўР°СЂР°РЅС‚РёРЅРѕ",
        actors: ["Р”Р¶РѕРЅ РўСЂР°РІРѕР»С‚Р°", "РЎСЌРјСЋСЌР» Р›. Р”Р¶РµРєСЃРѕРЅ", "РЈРјР° РўСѓСЂРјР°РЅ", "Р‘СЂСЋСЃ РЈРёР»Р»РёСЃ"],
        genre: ["РљСЂРёРјРёРЅР°Р»", "Р”СЂР°РјР°"],
        rating: 8.9,
        votes: 2100000
    },
    {
        id: 11,
        title: "Р—РµР»С‘РЅР°СЏ РєРЅРёРіР°",
        poster: "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_FMjpg_UX1000_.jpg",
        description: "РСЃС‚РѕСЂРёСЏ РґСЂСѓР¶Р±С‹ Р°С„СЂРѕР°РјРµСЂРёРєР°РЅСЃРєРѕРіРѕ РїРёР°РЅРёСЃС‚Р° Рё РµРіРѕ РёС‚Р°Р»СЊСЏРЅСЃРєРѕРіРѕ РІРѕРґРёС‚РµР»СЏ РІРѕ РІСЂРµРјРµРЅР° СЃРµРіСЂРµРіР°С†РёРё.",
        year: 2018,
        director: "РџРёС‚РµСЂ Р¤Р°СЂСЂРµР»Р»Рё",
        actors: ["Р’РёРіРіРѕ РњРѕСЂС‚РµРЅСЃРµРЅ", "РњР°С…РµСЂС€Р°Р»Р° РђР»Рё", "Р›РёРЅРґР° РљР°СЂРґРµР»Р»РёРЅРё", "Р”РѕРЅ РЎС‚Р°СЂРє"],
        genre: ["Р”СЂР°РјР°", "РљРѕРјРµРґРёСЏ", "Р‘РёРѕРіСЂР°С„РёСЏ"],
        rating: 8.2,
        votes: 520000
    },
    {
        id: 12,
    title: "РљР°Рє РїСЂРёСЂСѓС‡РёС‚СЊ РґСЂР°РєРѕРЅР°",
    poster: "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_FMjpg_UX1000_.jpg",
    description: "РСЃС‚РѕСЂРёСЏ РґСЂСѓР¶Р±С‹ РјР°Р»СЊС‡РёРєР° РРєРєРёРЅРіР° Рё РґСЂР°РєРѕРЅР° Р‘РµР·Р·СѓР±РёРєР°, РєРѕС‚РѕСЂР°СЏ РјРµРЅСЏРµС‚ Р¶РёР·РЅСЊ РІСЃРµР№ РґРµСЂРµРІРЅРё РІРёРєРёРЅРіРѕРІ.",
    year: 2010,
    director: "Р”РёРЅ Р”РµР‘Р»СѓР°, РљСЂРёСЃ РЎР°РЅРґРµСЂСЃ",
    actors: ["Р”Р¶РµР№ Р‘Р°СЂСѓС€РµР»СЊ", "Р”Р¶РµСЂР°СЂРґ Р‘Р°С‚Р»РµСЂ", "РљСЂСЌР№Рі Р¤РµСЂРіСЋСЃРѕРЅ", "РђРјРµСЂРёРєР° Р¤РµСЂСЂРµСЂР°"],
    genre: ["РњСѓР»СЊС‚С„РёР»СЊРј", "РџСЂРёРєР»СЋС‡РµРЅРёСЏ", "РЎРµРјРµР№РЅС‹Р№"],
    rating: 8.1,
        votes: 760000
    },
    {
        id: 13,
        title: "РџР°СЂР°Р·РёС‚С‹",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
        description: "Р‘РµРґРЅР°СЏ СЃРµРјСЊСЏ РІРЅРµРґСЂСЏРµС‚СЃСЏ РІ Р¶РёР·РЅСЊ Р±РѕРіР°С‚С‹С…, С‡С‚Рѕ РїСЂРёРІРѕРґРёС‚ Рє РЅРµРѕР¶РёРґР°РЅРЅС‹Рј РїРѕСЃР»РµРґСЃС‚РІРёСЏРј.",
        year: 2019,
        director: "РџРѕРЅ Р”Р¶СѓРЅ-С…Рѕ",
        actors: ["РЎРѕРЅ РљР°РЅ-С…Рѕ", "Р›Рё РЎРѕРЅ-РіСЋРЅ", "Р§Рѕ РЃ-РґР¶РѕРЅ", "Р§С…РІРµ РЈ-С‰РёРє"],
        genre: ["РўСЂРёР»Р»РµСЂ", "Р”СЂР°РјР°", "РљРѕРјРµРґРёСЏ"],
        rating: 8.6,
        votes: 850000
    },
    {
        id: 14,
        title: "Р”Р¶РѕРєРµСЂ",
        poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
        description: "РСЃС‚РѕСЂРёСЏ РїСЂРµРІСЂР°С‰РµРЅРёСЏ РЅРµСѓРґР°С‡Р»РёРІРѕРіРѕ РєРѕРјРёРєР° РІ РїСЂРµСЃС‚СѓРїРЅРѕРіРѕ РіРµРЅРёСЏ.",
        year: 2019,
        director: "РўРѕРґРґ Р¤РёР»Р»РёРїСЃ",
        actors: ["РҐРѕР°РєРёРЅ Р¤РµРЅРёРєСЃ", "Р РѕР±РµСЂС‚ Р”Рµ РќРёСЂРѕ", "Р—СЌР·Рё Р‘РёС‚С†", "Р¤СЂСЌРЅСЃРёСЃ РљРѕРЅСЂРѕР№"],
        genre: ["РўСЂРёР»Р»РµСЂ", "Р”СЂР°РјР°", "РљСЂРёРјРёРЅР°Р»"],
        rating: 8.4,
        votes: 1400000
    },
    {
        id: 15,
        title: "РђРІР°С‚Р°СЂ",
        poster: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
        description: "Р‘С‹РІС€РёР№ РјРѕСЂРїРµС… СЃС‚Р°РЅРѕРІРёС‚СЃСЏ С‡Р°СЃС‚СЊСЋ РїСЂРѕРіСЂР°РјРјС‹ РїРѕ РѕСЃРІРѕРµРЅРёСЋ РїР»Р°РЅРµС‚С‹ РџР°РЅРґРѕСЂР°.",
        year: 2009,
        director: "Р”Р¶РµР№РјСЃ РљСЌРјРµСЂРѕРЅ",
        actors: ["РЎСЌРј РЈРѕСЂС‚РёРЅРіС‚РѕРЅ", "Р—РѕРё РЎР°Р»РґР°РЅР°", "РЎРёРіСѓСЂРЅРё РЈРёРІРµСЂ", "РЎС‚РёРІРµРЅ Р›СЌРЅРі"],
        genre: ["Р¤Р°РЅС‚Р°СЃС‚РёРєР°", "РџСЂРёРєР»СЋС‡РµРЅРёСЏ", "Р‘РѕРµРІРёРє"],
        rating: 7.8,
        votes: 1350000
    },
    {
        id: 16,
        title: "Р“Р»Р°РґРёР°С‚РѕСЂ",
        poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
        description: "РџСЂРµРґР°РЅРЅС‹Р№ РіРµРЅРµСЂР°Р» СЃС‚Р°РЅРѕРІРёС‚СЃСЏ РіР»Р°РґРёР°С‚РѕСЂРѕРј, С‡С‚РѕР±С‹ РѕС‚РѕРјСЃС‚РёС‚СЊ Р·Р° СѓР±РёР№СЃС‚РІРѕ СЃРµРјСЊРё.",
        year: 2000,
        director: "Р РёРґР»Рё РЎРєРѕС‚С‚",
        actors: ["Р Р°СЃСЃРµР» РљСЂРѕСѓ", "РҐРѕР°РєРёРЅ Р¤РµРЅРёРєСЃ", "РљРѕРЅРЅРё РќРёР»СЊСЃРµРЅ", "РћР»РёРІРµСЂ Р РёРґ"],
        genre: ["Р‘РѕРµРІРёРє", "Р”СЂР°РјР°", "РСЃС‚РѕСЂРёС‡РµСЃРєРёР№"],
        rating: 8.5,
        votes: 1580000
    },
    {
        id: 17,
        title: "Р‘РѕР№С†РѕРІСЃРєРёР№ РєР»СѓР±",
        poster: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
        description: "РЎС‚СЂР°РґР°СЋС‰РёР№ Р±РµСЃСЃРѕРЅРЅРёС†РµР№ РѕС„РёСЃРЅС‹Р№ СЂР°Р±РѕС‚РЅРёРє СЃРѕР·РґР°С‘С‚ РїРѕРґРїРѕР»СЊРЅС‹Р№ Р±РѕР№С†РѕРІСЃРєРёР№ РєР»СѓР±.",
        year: 1999,
        director: "Р”СЌРІРёРґ Р¤РёРЅС‡РµСЂ",
        actors: ["Р‘СЂСЌРґ РџРёС‚С‚", "Р­РґРІР°СЂРґ РќРѕСЂС‚РѕРЅ", "РҐРµР»РµРЅР° Р‘РѕРЅРµРј РљР°СЂС‚РµСЂ", "РњРёС‚ Р›РѕР°С„"],
        genre: ["Р”СЂР°РјР°", "РўСЂРёР»Р»РµСЂ"],
        rating: 8.8,
        votes: 2200000
    },
    {
        id: 18,
        title: "1+1",
        poster: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_FMjpg_UX1000_.jpg",
        description: "Р‘РѕРіР°С‚С‹Р№ РїР°СЂР°Р»РёР·РѕРІР°РЅРЅС‹Р№ Р°СЂРёСЃС‚РѕРєСЂР°С‚ РЅР°РЅРёРјР°РµС‚ РІ РїРѕРјРѕС‰РЅРёРєРё Р±С‹РІС€РµРіРѕ Р·Р°РєР»СЋС‡С‘РЅРЅРѕРіРѕ.",
        year: 2011,
        director: "РћР»РёРІСЊРµ РќР°РєР°С€",
        actors: ["Р¤СЂР°РЅСЃСѓР° РљР»СЋР·Рµ", "РћРјР°СЂ РЎРё", "РђРЅРЅ Р›Рµ РќРё", "РћРґСЂРё Р¤Р»С‘СЂРѕ"],
        genre: ["Р”СЂР°РјР°", "РљРѕРјРµРґРёСЏ", "Р‘РёРѕРіСЂР°С„РёСЏ"],
        rating: 8.5,
        votes: 890000
    },
    {
        id: 19,
        title: "РљРѕСЂРѕР»СЊ Р›РµРІ",
        poster: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_FMjpg_UX1000_.jpg",
        description: "РњРѕР»РѕРґРѕР№ Р»СЊРІС‘РЅРѕРє РЎРёРјР±Р° РїРѕР·РЅР°С‘С‚ РёСЃС‚РёРЅРЅС‹Р№ СЃРјС‹СЃР» РѕС‚РІРµС‚СЃС‚РІРµРЅРЅРѕСЃС‚Рё Рё С‡РµСЃС‚Рё.",
        year: 1994,
        director: "Р РѕРґР¶РµСЂ РђР»Р»РµСЂСЃ",
        actors: ["РњСЌС‚С‚СЊСЋ Р‘СЂРѕРґРµСЂРёРє", "Р”Р¶РµСЂРµРјРё РђР№СЂРѕРЅСЃ", "Р”Р¶РµР№РјСЃ Р­СЂР» Р”Р¶РѕРЅСЃ", "Р’СѓРїРё Р“РѕР»РґР±РµСЂРі"],
        genre: ["РњСѓР»СЊС‚С„РёР»СЊРј", "РњСЋР·РёРєР»", "Р”СЂР°РјР°"],
        rating: 8.5,
        votes: 1100000
    },
    {
        id: 20,
        title: "РћСЃС‚СЂРѕРІ РїСЂРѕРєР»СЏС‚С‹С…",
        poster: "https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
        description: "Р”РµС‚РµРєС‚РёРІ СЂР°СЃСЃР»РµРґСѓРµС‚ РёСЃС‡РµР·РЅРѕРІРµРЅРёРµ РїР°С†РёРµРЅС‚РєРё РїСЃРёС…РёР°С‚СЂРёС‡РµСЃРєРѕР№ РєР»РёРЅРёРєРё РЅР° РѕС‚РґР°Р»С‘РЅРЅРѕРј РѕСЃС‚СЂРѕРІРµ.",
        year: 2010,
        director: "РњР°СЂС‚РёРЅ РЎРєРѕСЂСЃРµР·Рµ",
        actors: ["Р›РµРѕРЅР°СЂРґРѕ Р”РёРљР°РїСЂРёРѕ", "РњР°СЂРє Р СѓС„С„Р°Р»Рѕ", "Р‘РµРЅ РљРёРЅРіСЃР»Рё", "РњРёС€РµР»СЊ РЈРёР»СЊСЏРјСЃ"],
        genre: ["РўСЂРёР»Р»РµСЂ", "Р”РµС‚РµРєС‚РёРІ", "Р”СЂР°РјР°"],
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
            cartItems.innerHTML = '<p>РљРѕСЂР·РёРЅР° РїСѓСЃС‚Р°</p>';
        } else {
            cartItems.innerHTML = items.map(movieId => {
                const movie = movies.find(m => m.id === movieId);
                return movie ? `
                    <div class="cart-item">
                        <span>${movie.title}</span>
                        <button class="remove-from-cart" data-id="${movie.id}">РЈРґР°Р»РёС‚СЊ</button>
                    </div>
                ` : '';
            }).join('');
            
            document.querySelectorAll('.remove-from-cart').forEach(btn => {
                btn.addEventListener('click', () => {
                    cart.removeFromCart(parseInt(btn.dataset.id));
                    showCartModal();
                });
            });
        }
    }
    
    modal.style.display = 'block';
}

function renderMovies(moviesToRender) {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';
    
    moviesToRender.forEach(movie => {
        const isInCart = cart.isInCart(movie.id);
        const movieEl = document.createElement('div');
        movieEl.className = 'movie';
        movieEl.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.description}</p>
            <div class="rating">
                <span class="rating-value">в… ${movie.rating}</span>
                <span> (${movie.votes.toLocaleString()} РѕС†РµРЅРѕРє)</span>
            </div>
            <button class="details-btn" data-id="${movie.id}">РџРѕРґСЂРѕР±РЅРµРµ</button>
            <button class="add-to-cart-btn ${isInCart ? 'added' : ''}" data-id="${movie.id}">
                ${isInCart ? 'вњ“ Р’ РєРѕСЂР·РёРЅРµ' : 'вћ• Р’ РєРѕСЂР·РёРЅСѓ'}
            </button>
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
            const movieId = parseInt(btn.dataset.id);
            if (cart.addToCart(movieId)) {
                btn.textContent = 'вњ“ Р’ РєРѕСЂР·РёРЅРµ';
                btn.classList.add('added');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const moviesContainer = document.getElementById('movies');
    const searchInput = document.getElementById('search');
    
    if (moviesContainer && searchInput) {
        function handleSearch() {
            const term = searchInput.value.toLowerCase();
            const filtered = movies.filter(movie => 
                movie.title.toLowerCase().includes(term)
            );
            renderMovies(filtered);
        }

        searchInput.addEventListener('input', handleSearch);
        renderMovies(movies);
    }
    
    setupModal();
});