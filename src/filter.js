function getUniqueGenreList(objects, property) {
  const values = objects.slice().map((obj) => obj[property]);
  return values.filter((value, index) => values.indexOf(value) === index);
}

function filterFilms(films, currentGenre) {
  if (currentGenre === `All genres`) {
    return films.slice();
  }
  return films.slice().filter((film) => film.genre === currentGenre);
}
function getActiveGenre(evt) {
  const genres = document.querySelectorAll(`.catalog__genres-item`);
  evt.preventDefault();
  const filterValue = evt.currentTarget.dataset.filter;
  genres.forEach((genre) => {
    if (genre.dataset.filter === filterValue) {
      genre.classList.add(`catalog__genres-item--active`);
    } else {
      genre.classList.remove(`catalog__genres-item--active`);
    }
  });
  return filterValue;
}
export {getUniqueGenreList, getActiveGenre, filterFilms};

