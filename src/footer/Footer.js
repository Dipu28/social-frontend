import React from "react";
import "../footer/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p>Copyright © 2021 SocialShare</p>
        <p className="footer__text-and-author">
          <a className="footer__author" target="_blank" href=""></a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
