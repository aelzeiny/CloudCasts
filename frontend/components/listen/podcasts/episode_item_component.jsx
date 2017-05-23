import React from 'react';

const monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
];

function formatJavscriptDate(date) {
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export default function(props) {
  const ep = props.episode;
  const date = formatJavscriptDate(new Date(ep.published));
  const idx = props.idx;
  let reactElement = props.parse(ep.summary);
  // console.log(ep);
  return(
    <div className="card">
      <div className="card-header" role="tab" id={"heading"+idx}>
        <div className="row">
          <div className="col-md-10">
            <div data-toggle="collapse" data-parent="#accordion" href={"#collapse"+idx} aria-expanded="false" aria-controls={"collapse"+idx}>
              <div className="row">
                <div className="col-md-2">
                  {date}
                </div>
                <div className="col-md-7">
                  {ep.title}
                </div>
                <div className="col-md-1">
                  {ep.audio_length}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button className="btn btn-link" onClick={() => props.onPlay(ep)}>
              <i className="fa fa-2 fa-play-circle-o"></i>
            </button>
            <a href={ep.audio} download target="_blank">
              <i className="fa fa-2 fa-arrow-circle-o-down"></i>
            </a>
          </div>
        </div>
      </div>
      <div id={"collapse"+idx} className="collapse" role="tabpanel" aria-labelledby={"heading"+idx}>
        <div className="card-block">
          {reactElement}
        </div>
      </div>
    </div>
  );
}
