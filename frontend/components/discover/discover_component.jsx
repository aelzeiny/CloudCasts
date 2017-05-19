import React from 'react';
import SearchFilterContainer from './search_filter_container';
import PodcastGridContainer from '../podcasts/podcast_grid_container';


const DiscoverContainer = (props) => {
    return (
      <section className="discover">
        <SearchFilterContainer />
        <PodcastGridContainer />
      </section>
    );
}

export default DiscoverContainer;
