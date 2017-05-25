import React from 'react';
import SearchFilterContainer from './search_filter_container';
import PodcastGridContainer from '../podcasts/podcast_grid_container';
import NavbarContainer from '../../navbar/navbar_container';

const DiscoverContainer = (props) => {
    return (
      <aside className="discover container">
        <SearchFilterContainer />`
        <PodcastGridContainer />
      </aside>
    );
}

export default DiscoverContainer;
