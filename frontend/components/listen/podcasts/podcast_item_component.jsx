import React from 'react';
import {Link} from 'react-router-dom';

class PodcastItemComponent extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const pod = this.props.pod;
    return(
      <div className="pod-box">
        <Link to={`/podcasts/${pod.itunes_id}`} >
          <img src={pod.md_image_url}></img>
        </Link>
      </div>
    );
  }
}

export default PodcastItemComponent;
