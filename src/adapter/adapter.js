const adaptDataToFilms = (data) => {
  if (Array.isArray(data)) {
    return data.map((film) => adaptFilm(film));
  } else {
    return adaptFilm(data);
  }
};

const adaptFilm = (film) => {
  const adaptedFilm = {
    ...film,
    backgroundImage: film.background_image,
    previewImage: film.preview_image,
    posterImage: film.poster_image,
    backgroundColor: film.background_color,
    isFavorite: film.is_favorite,
    previewVideoLink: film.preview_video_link,
    runTime: film.run_time,
    scoresCount: film.scores_count,
    videoLink: film.video_link,
  };

  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.background_image;
  delete adaptedFilm.poster_image;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.is_favorite;
  delete adaptedFilm.run_time;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.video_link;

  return adaptedFilm;
};

export {adaptDataToFilms};
