const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i=0; i<2; i++) {
    const a = prompt('Ответьте на 2 вопроса. Один из последних просмотренных фильмов?',''),
          b = prompt('На сколько оцените его?','');

    if (a != null && a.length < 50 && a != '') {
        personalMovieDB.movies[a] = b;        
    }else{
        console.log('err');
        i--;
    }

    
  
}

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?',''),  
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?','')  



console.log(personalMovieDB);