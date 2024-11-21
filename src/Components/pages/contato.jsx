import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import "./contato.css";

const Contato = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-subtitle">Desenvolvedores do</h1>
      <h1 className="contact-title">CoderStore</h1>

      <div className="contact-grid">
        <div className="contact-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGLdbL7f9vGTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724866788273?e=1736985600&v=beta&t=v1JwYogcuFjxtgpi7PSDnUKVEBqb43oyTduE-BO-RYw"
            alt="Minha Foto"
            className="contact-photo"
          />
          <h2 className="contact-name">Gustavo Mamede</h2>
          <a className="contact-email" href="mailto:gustavomamede99@gmail.com">
            gustavomamede99@gmail.com
          </a>
          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/gustavomamede99/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/mvmede" className="contact-icon">
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/mvmede"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Pessoa 2 */}
        <div className="contact-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQGGsCEzfttTQA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716337593271?e=1736985600&v=beta&t=pdRSAWbGsb_9vOHwWY6btqG0m5iQRtcKoPPge35FYhQ"
            alt="Foto"
            className="contact-photo"
          />
          <h2 className="contact-name">Lucas Marinho</h2>
          <a className="contact-email" href="mailto:lucasmarinhodev@gmail.com">
            lucasmarinhodev@gmail.com
          </a>
          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/lucas-marinho-8b6726247/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/lucasmarinhodev"
              className="contact-icon"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Pessoa 3 */}
        <div className="contact-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQFbXA6eBL5txg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719962126554?e=1736985600&v=beta&t=8prSe560jSIBNyoWKlx0-_w1yqKolgmWTcDMFN0bwQk"
            alt="Foto"
            className="contact-photo"
          />
          <h2 className="contact-name">Lucas Coelho</h2>
          <a
            className="contact-email"
            href="mailto:lucascoelholima@hotmail.com"
          >
            lucascoelholima@hotmail.com
          </a>
          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/lucas-coelho-20882079/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Lucascdl" className="contact-icon">
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/luucascoelhoo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Pessoa 4 */}
        <div className="contact-card">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQEnENI6Z3clAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1715624006909?e=1736985600&v=beta&t=_1hlNmUUvbdruINmIkChzIvFP0jfsOisdri3lRtQYEg"
            alt="Foto"
            className="contact-photo"
          />
          <h2 className="contact-name">Weder França</h2>
          <a className="contact-email" href="mailto:wederfr@hotmail.com">
            wederfr@hotmail.com
          </a>

          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/weder-frança-46483959/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaLinkedin />
            </a>
            <a href="https://github.com/Wederfr" className="contact-icon">
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/wederfr"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
