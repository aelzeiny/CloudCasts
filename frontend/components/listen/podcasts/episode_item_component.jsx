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
    return(
      <div className="card">
        <a data-toggle="collapse" data-parent="#accordion" href={"#collapse"+idx} aria-expanded="false" aria-controls={"collapse"+idx}>
          <div className="card-header" role="tab" id={"heading"+idx}>
            <div className="row">
              <div className="col-sm-2">
                {date}
              </div>
              <div className="col-sm-7">
                {ep.title}
              </div>
              <div className="col-sm-1">
                {ep.audio_length}
              </div>
              <div className="col-sm-2">
                <i className="fa fa-2 fa-play-circle-o"></i>
                <i className="fa fa-2 fa-arrow-circle-o-down"></i>
              </div>
            </div>
          </div>
        </a>

        <div id={"collapse"+idx} className="collapse" role="tabpanel" aria-labelledby={"heading"+idx}>
          <div className="card-block">
            {reactElement}
          </div>
        </div>
      </div>
    );
}


function yee(ep, idx, date) {
}
