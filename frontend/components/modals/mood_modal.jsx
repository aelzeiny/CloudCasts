import React from 'react';

import ModalForm from './modal_form';
import {topGenres} from '../../util/search_api_utils';

const MOOD_MODAL_ID = "moodModalId";

export const MOOD_ASSETS = {
  "Arts": 'art.jpg',
  "Business": 'business.jpg',
  "Comedy": 'comedy (2).jpg',
  "Education": 'education.jpg',
  "Games & Hobbies": 'games.jpg',
  "Government & Organizations": 'government.jpg',
  "Health": 'health.jpg',
  "Kids & Family": 'family.jpg',
  "Music": 'music.jpg',
  "News & Politics": 'news.jpg',
  "Religion & Spirituality": 'religion.jpg',
  "Science & Medicine": 'science.jpg',
  "Society & Culture": 'culture.png',
  "Sports & Recreation": 'sports.jpg',
  "Technology": 'technology.jpg',
  "Film": 'film.jpg'
};

export const MOOD_ICONS = {
  "Arts": 'fa-paint-brush',
  "Business": 'fa-briefcase',
  "Comedy": 'fa-microphone',
  "Education": 'fa-book',
  "Games & Hobbies": 'fa-gamepad',
  "Government & Organizations": 'fa-gavel',
  "Health": 'fa-user-md',
  "Kids & Family": 'fa-child',
  "Music": 'fa-music',
  "News & Politics": 'fa-newspaper-o',
  "Religion & Spirituality": 'fa-sun-o',
  "Science & Medicine": 'fa-flask',
  "Society & Culture": 'fa-globe',
  "Sports & Recreation": 'fa-futbol-o',
  "Technology": 'fa-television',
  "Film": 'fa-film'
};

class MoodModal extends ModalForm {
  constructor(props) {
    super(props, MOOD_MODAL_ID);
  }

  renderHeader() {
    return null;
  }

  handleClick(name) {
    this.props.onGenreSelect(topGenres[name]);
    this.closeModal();
  }

  _renderBox(genreNames, genreIds) {
    let id;
    return (genreNames.map((name, i) => {
      id = genreIds[i];
      const asset = MOOD_ICONS[name];
      if(asset.startsWith('fa-')) {
        return (
          <div className="mood-grid-box" key={i} data-val={id} onClick={() => this.handleClick.call(this, name)}>
            <i className={`fa ${asset}`}></i><br/>
            <b>{name}</b>
          </div>
        );
      }
      return (
        <div className="mood-grid-box" key={i} data-val={id} onClick={() => this.handleClick.call(this, name)}>
          <img src={MOOD_ICONS[name]}></img>
        </div>
      );
    }));
  }

  _renderRow(i) {
    const keys = Object.keys(topGenres);
    const vals = keys.map(key => topGenres[key]);
    return(
      <div className="mood-grid-row">
        {this._renderBox(keys.slice(i*4, (i+1)*4), vals.slice(i*4, (i+1)*4))}
      </div>
    );
  }

  renderBody() {
    return(
      <div className="mood-body">
        {this._renderRow(0)}
        {this._renderRow(1)}
        {this._renderRow(2)}
        {this._renderRow(3)}
      </div>
    );
  }

  renderFooter() {
    return null;
  }
}

export default MoodModal;
