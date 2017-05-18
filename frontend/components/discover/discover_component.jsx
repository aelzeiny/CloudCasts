import React from 'react';
import HeroComponent from './hero_component';
import SearchFilterContainer from './search_filter_container';
import PodcastGridContainer from '../podcasts/podcast_grid_container';


const DiscoverContainer = (props) => {
    return (
      <section className="discover">
        <HeroComponent />
        <div className="container">
          <SearchFilterContainer />
          <PodcastGridContainer />
        </div>
      </section>
    );
}

export default DiscoverContainer;
