import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faDiscord,
  faWhatsapp,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <a
            href="https://www.facebook.com/"
            className="nav-link px-2 text-body-secondary"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-body-secondary">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
      </ul>
      <p className="text-center text-body-secondary">
        © 2024, Campina Grande | Mestre Digital | Todos direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
