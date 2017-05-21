import React from 'react';

export default function(props) {
  ep = props.episode;
  return (
    <div className="episode-item">
      <b>{ep.date}</b>
      <b>{ep.name}</b>
      <b>{ep.length}</b>
      <i className="fa fa-play-circle-o"></i>
      <i className="fa fa-arrow-circle-o-down"></i>
    </div>

    <div class="card episode-item">
      <div class="card-header" role="tab" id={props.key+"-id"}>
        <a data-toggle="collapse" data-parent="#accordion" href={"#"+props.key+"-desc"} aria-expanded="true" aria-controls={props.key+"-desc"}>
            <b>{ep.date}</b>
            <b>{ep.name}</b>
            <b>{ep.length}</b>
        </a>
        <i className="fa fa-play-circle-o"></i>
        <i className="fa fa-arrow-circle-o-down"></i>
      </div>

      <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
        <div class="card-block">
          {ep.description}
        </div>
      </div>
    </div>
  );
}
