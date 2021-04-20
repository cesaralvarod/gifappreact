import React, { useState } from "react";
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

// Styles

import "./Loading.css";

function Loading(props) {
  return (
    <div className="spinner">
      <br />
      <Spinner />
    </div>
  );
}

export default Loading;
