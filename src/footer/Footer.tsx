import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => (
  <div className="footer">
    <Link className="footer__link" to="/" >
      Scan
    </Link>
    <Link className="footer__link" to="/history">
      History
    </Link>
  </div>
);

export default Footer;
