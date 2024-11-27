import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>Copyright © 2024. Developed by Nishant Kumar, 245CS026</p>
        </footer>
    );
};

const footerStyle = {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '10px 0',
    fontSize: '14px',
};

export default Footer;