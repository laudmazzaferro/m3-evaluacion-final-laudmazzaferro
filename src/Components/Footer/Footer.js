import React from "react";
import logoAdalab from "./../../images/logo-adalab-80px.png";
import './_footer.scss';


class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer className="page__footer">
          {" "}
          <span className="footer__copyright">
            Rick and Monty by @laudmazzaferro
				</span>
          <a
            className="footer__link"
            href="https://adalab.es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="footer__logo"
              src={logoAdalab}
              alt="Logotipo de Adalab"
            />
          </a>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer; 