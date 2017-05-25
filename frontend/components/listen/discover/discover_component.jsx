import React from 'react';
import SearchFilterContainer from './search_filter_container';
import PodcastGridContainer from '../podcasts/podcast_grid_container';

const DiscoverComponent = (props) => {
    return (
      <article className="discover container">
        <SearchFilterContainer />
        <PodcastGridContainer />
      </article>
    );
};

export default DiscoverComponent;
