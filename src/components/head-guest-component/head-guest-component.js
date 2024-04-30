import React from "react";
import {Link} from "react-router-dom";
const HeadGuestComponent = ()=>{
  return (<React.Fragment>
    <div className="user-block">
      <Link to={`/login`} className="user-block__link">Sign in</Link>
    </div>
  </React.Fragment>);
};

export default HeadGuestComponent;
