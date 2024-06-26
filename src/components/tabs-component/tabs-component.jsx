import React, {useState} from 'react';

import OverviewComponent from '../overview-component/overview-component.jsx';
import DetailsComponent from '../details-component/details-component.jsx';
import FilmProp from '../../props/film.prop';
const TabsComponent = (props) => {
  const {film} = props;
  const [activeTab, setActiveTab] = useState(`overview`);

  const onTabClick = (evt, tab) => {
    evt.preventDefault();
    setActiveTab(tab);
  };

  return (
    <React.Fragment>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          <li
            className={`movie-nav__item ${
              activeTab === `overview` ? `movie-nav__item--active` : ``
            }`}
          >
            <a href="#" className="movie-nav__link" onClick={(evt) => onTabClick(evt, `overview`)}>
              Overview
            </a>
          </li>
          <li
            className={`movie-nav__item ${
              activeTab === `details` ? `movie-nav__item--active` : ``
            }`}
          >
            <a href="#" className="movie-nav__link" onClick={(evt) => onTabClick(evt, `details`)}>
              Details
            </a>
          </li>
        </ul>
      </nav>
      {activeTab === `overview` && <OverviewComponent film={film} />}
      {activeTab === `details` && <DetailsComponent film={film} />}
    </React.Fragment>
  );
};

TabsComponent.propTypes = {
  film: FilmProp,
};

export default TabsComponent;
