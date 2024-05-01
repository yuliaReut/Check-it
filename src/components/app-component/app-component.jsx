import React from 'react';
import {Routes, Route} from 'react-router-dom';
import MainComponent from '../main-component/main-component';
import SignInComponent from '../sigh-in-component/sigh-in-component';
import MyListComponent from '../my-list-component/my-list-component';
import FilmComponent from '../film-component/film-component';
import AddReviewComponent from '../add-review-component/add-review-component';
import PlayerComponent from '../player-component/player-component';
import NonexistentPageComponent from '../nonexistent-page-component/nonexistent-page-component';
import {AppRoute} from '../../const';
// import PrivateRoute from '../private-route-component/private-route-component';
import {useSelector} from 'react-redux';

const AppComponent = () => {
  const {films, favouriteFilms} = useSelector((state) => state.FILMS);

  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<MainComponent />} />
      <Route path="/login" element={<SignInComponent />} />
      {/* <PrivateRoute path='/mylist' element={<MyListComponent films={favouriteFilms} />} /> */}
      <Route path="/mylist" element={<MyListComponent films={favouriteFilms} />} />

      <Route path="/films/:id?" element={<FilmComponent films={films} />} />
      {/* <PrivateRoute path='/films/:id?/review' element={<AddReviewComponent films={films} />} /> */}
      <Route path="/films/:id?/review" element={<AddReviewComponent films={films} />} />

      <Route path="/player/:id?" element={<PlayerComponent films={films} />} />
      <Route path="*" element={<NonexistentPageComponent />} />
    </Routes>
  );
};

export default AppComponent;
