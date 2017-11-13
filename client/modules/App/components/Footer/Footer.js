import React from 'react';
import config from '../../../../../config';

export function Footer() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <p className="text-center">Copyright © {config.app.title} 2017</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
