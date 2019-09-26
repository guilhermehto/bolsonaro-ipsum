import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <hr />
            <hr />
            <div className="footer-info">
                <p>Desenvolvido por <a href="https://twitter.com/datOliveira">Guilherme Oliveira</a></p>
                <p>Disponível no <a href="https://github.com/guilhermehto/bolsonaro-ipsum">GitHub</a></p>
            </div>
            <hr />
            <hr />
        </div>
    );
}

export default Footer;
