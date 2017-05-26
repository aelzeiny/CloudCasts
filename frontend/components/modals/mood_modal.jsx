import React from 'react';

import ModalForm from './modal_form';
import {topGenres} from '../../util/search_api_utils';

const MOOD_MODAL_ID = "moodModalId";

class MoodModal extends ModalForm {
  constructor(props) {
    super(props, MOOD_MODAL_ID);
  }

  renderHeader() {
    return null;
  }

  _renderBox(genreNames, genreIds) {
    let id;
    return (genreNames.map((name, i) => {
      id = genreIds[i];
      return (
        <div className="mood-grid-box" key={i} data-val={id}>
          <img src="http://lorempixel.com/400/400"></img>
          // {name}
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
