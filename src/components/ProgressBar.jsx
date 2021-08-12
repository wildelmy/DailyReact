import React from "react";

const ProgressBar = (props) => {
  return (
    <div className="row">
      <div className="col-8 pt-1 px-0 mx-auto">
        <div id="progreso" className="progress">
          <div
            className="progress-bar"
            role="progress"
            style={{width: props.progress+'%'}}
            aria-valuenow={props.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
