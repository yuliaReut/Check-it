import React from 'react';
import MainComponent from '../main-component/main-component';
import SignInComponent from '../sigh-in-component/sigh-in-component';
import MyListComponent from '../my-list-component/my-list-component';
import FilmComponent from '../film-component/film-component';
import AddReviewComponent from '../add-review-component/add-review-component';
import PlayerComponent from '../player-component/player-component';
import NonexistentPageComponent from '../nonexistent-page-component/nonexistent-page-component';
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route-component/private-route-component';
import browserHistory from '../../browser-history';
import {useSelector} from 'react-redux';
const AppComponent = () => {
  const {films, favouriteFilms} = useSelector((state) => state.FILMS);
  console.log(films);
  return (
    <Switch>
      <Route path={AppRoute.ROOT} exact>
        <MainComponent />
      </Route>
      <Route path='/login' exact>
        <SignInComponent history={history} />
      </Route>
      <PrivateRoute path='/mylist' exact render={()=> <MyListComponent films={favouriteFilms}/>}>
      </PrivateRoute>
      <Route path='/films/:id?' exact>
        <FilmComponent films={films}/>
      </Route>
      <PrivateRoute path='/films/:id?/review' exact render={()=><AddReviewComponent films={films}/>}>
      </PrivateRoute>
      <Route path='/player/:id?' exact>
        <PlayerComponent films={films} />
      </Route>
      <Route render={() => <NonexistentPageComponent />} />
    </Switch>
  );
};

export default AppComponent;
