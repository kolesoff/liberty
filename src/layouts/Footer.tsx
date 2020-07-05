import React from 'react';

const year = new Date().getFullYear();
const info = `\u00A9 ${year} It's make-believe.`;

/**
 * Компонент футера сайта.
 */
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                {info}
            </div>
        </footer>
    );
};

export default Footer;
