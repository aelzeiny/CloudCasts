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
          <div className="card-header row" role="tab" id={"heading"+idx}>
            <div className="col-xs-12">
              {ep.title}
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
