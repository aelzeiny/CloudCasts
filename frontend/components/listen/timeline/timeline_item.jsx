import React from 'react';
import EpisodeItemComponent from '../podcasts/episode_item_component';
var HtmlToReactParser = require('html-to-react').Parser;

const parser = new HtmlToReactParser();

function TimelineItemComponent(props) {
  return (
    <div className="timeline-item">
      <img src={props.episode.podcast.image_url}></img>
      <EpisodeItemComponent parse={parser.parse} episode={props.episode} idx={props.idx} onPlay={props.onPlay}/>
    </div>
  );
}

export default TimelineItemComponent;
