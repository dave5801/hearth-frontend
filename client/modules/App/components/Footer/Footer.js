import React from 'react';
import config from "../../../../../config"

export function Footer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <p className="text-center">&copy; 2017 &middot; {config.app.title}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
