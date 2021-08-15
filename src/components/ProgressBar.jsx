import React from "react";

const ProgressBar = ({ progress, life }) => {
  return (
    <div className="row">
      <div className="col text-center">
        <a href="./home">
          <i className="fas fa-times"></i>
        </a>
      </div>
      <div className="col-8 pt-1 px-0 mx-auto">
        <div id="progreso" className="progress">
          <div
            className="progress-bar"
            // role="progress"
            style={{width: progress+'%'}}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div className="col d-flex justify-content-around align-items-center">
        <span>{ life }</span>
        <i className="fas fa-heart text-danger"></i>
      </div>
    </div>
  );
};

export default ProgressBar;
