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
  // console.log(ep);
  const date = formatJavscriptDate(new Date(ep.published));
  return (
    yee(ep, props.idx, date)
  );
}


function yee(ep, idx, date) {
  return(
    <div className="card">
      <a data-toggle="collapse" data-parent="#accordion" href={"#collapse"+idx} aria-expanded={idx === 0 ? "true" : "false"} aria-controls={"collapse"+idx}>
        <div className="card-header" role="tab" id={"heading"+idx}>
          {ep.title}
        </div>
      </a>

      <div id={"collapse"+idx} className={"collapse" + (idx === 0 ? " show" : "")} role="tabpanel" aria-labelledby={"heading"+idx}>
        <div className="card-block">
          {ep.summary}
        </div>
      </div>
    </div>
  );
}
