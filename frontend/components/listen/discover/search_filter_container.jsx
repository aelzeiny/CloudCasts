import React from 'react';
import { connect } from 'react-redux';
import { topGenres } from '../../../util/search_api_utils';
import { searchPodcasts, requestTopPodcasts  } from '../../../actions/search_actions';
import MoodModal from '../../modals/mood_modal';

const ALL_KEY = "all";
class SearchFilterContainer extends React.Component{
  constructor(props) {
    super(props);
    this.genre = undefined;
    this.term = "";
  }

  handleChange(e) {
    // Get values of form inputs
    const $select = $(e.currentTarget);
    const attr = $select.attr("name");
    const val = $select.val();
    if(attr === "genre")
      this.genre = val === ALL_KEY ? undefined : val;
    else if(attr === "term")
      this.term = val;
    // dispatch appropriate action
    if(this.term)
      this.props.search(this.term, this.genre);
    else
      this.props.filter(this.genre);
  }

  render() {
    return(
    <div className="searchDiv">
      <i className="fa fa-search fa-6"></i>
      <div className="container">
        <div className="group">
          <input type="text" placeholder="Search for whatever you like" name="term" onChange={this.handleChange.bind(this)} />
          <span className="bar"></span>
        </div>
      </div>
      <button className="btn btn-outline-info btn-lg" data-toggle="modal" data-target='#moodModalId'>
        Mood
      </button>
      <MoodModal />
    </div>);
  }

  _renderMood() {
    return <select className="form-control" name="genre" onChange={this.handleChange.bind(this)}>
      <option value={ALL_KEY} key="all">All</option>
      {Object.keys(topGenres).map((key) => (
        <option value={topGenres[key]} key={key}>{key}</option>
      ))}
    </select>;
  }
}


function mapDispatchToProps(dispatch) {
  return {
    search: (term, genreId) => dispatch(searchPodcasts(term, genreId)),
    filter: (genreId) => dispatch(requestTopPodcasts(genreId))
  };
}

export default connect(null, mapDispatchToProps)(SearchFilterContainer);
