import React from 'react';
import { connect } from 'react-redux';
import { topGenres } from '../../util/search_api_utils';
import { searchPodcasts, requestTopPodcasts  } from '../../actions/search_actions';

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
    const attr = $select.attr("name")
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
    return(<div>
      <input type="text" name="term" onChange={this.handleChange.bind(this)}/>
      <select className="form-control" name="genre" onChange={this.handleChange.bind(this)}>
        <option value={ALL_KEY} key="all">All</option>
        {Object.keys(topGenres).map((key) => (
          <option value={topGenres[key]} key={key}>{key}</option>
        ))}
      </select>
    </div>);
  }
}


function mapDispatchToProps(dispatch) {
  return {
    search: (term, genreId) => dispatch(searchPodcasts(term, genreId)),
    filter: (genreId) => dispatch(requestTopPodcasts(genreId))
  };
}

export default connect(null, mapDispatchToProps)(SearchFilterContainer);
