import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>Newsletter</h3>
        <p>Registrate y recibí nuestras ofertas.</p>
        <form>
          <input type="email" placeholder="Email" />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="contact-info">
        <div className="social-media">
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
        </div>
        <p>+54 9 297 2184-0676</p>
        <p>hola@tierra-consciente.com</p>
        <p>Santa Cruz, Argentina</p>
      </div>
    </footer>
  );
};

export default Footer;
