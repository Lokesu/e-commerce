import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footerItem">
        <div className="name">
          <span> ©2022 </span>
        </div>
        <div className="footer-logo">
          <a href="https://www.linkedin.com/in/lokesh-gowda-a3a871228/">
            <img
              className="logos"
              src="https://e7.pngegg.com/pngimages/342/689/png-clipart-linkedin-logo-icon-others-blue-text-thumbnail.png"
              alt="logo"
            />
          </a>
          <a href="https://github.com/lokesu">
            <img
              id="git-logo"
              className="logos"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Footer;
