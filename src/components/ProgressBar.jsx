import React from "react";
import { Link } from 'react-router-dom';

const ProgressBar = ({ progress, life }) => {
  return (
    <div className="row">
      <div className="col text-center">
        <Link to="/home">
          <i className="fas fa-times"></i>
        </Link>
      </div>
      <div className="col-8 pt-1 px-0 mx-auto">
        <div className="progress">
          <div
            className="progress-bar"
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
