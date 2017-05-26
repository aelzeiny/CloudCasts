import React from 'react';
import {connect} from 'react-redux';

import ModalForm from './modal_form';
var HtmlToReactParser = require('html-to-react').Parser;

const parser = new HtmlToReactParser();
export const DESCRIPTION_MODAL_ID = "descriptionModalId";

class DescriptionModal extends ModalForm {
  constructor(props) {
    super(props, DESCRIPTION_MODAL_ID);
  }

  renderHeader() {
    return (
      <h3>{this.props.episode.title}</h3>
    );
  }

  renderBody() {
    return (
      <p>{this.props.episode.summary}</p>
    );
  }

  renderFooter() {
    return (
      <button>OK!</button>
    );
  }
}

function mapStateToProps(state) {
  return {
    episode: state.episodeDescription
  };
}
export default connect(mapStateToProps)(DescriptionModal);
