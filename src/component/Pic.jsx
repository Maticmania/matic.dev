import React, { useState } from 'react';
import '../css/style.css'; // Create a CSS file for styling
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const OffCanvasButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLinkClick = () => {
        closeMenu(); // Close the menu when a link is clicked
    };

    return (
        <div className="offcanvas-container">
            <h3 onClick={toggleMenu}><GiHamburgerMenu /></h3>
            {isMenuOpen && <div className="backdrop" onClick={closeMenu}></div>}
            <div className={`offcanvas-menu ${isMenuOpen ? 'open' : ''}`}>
                <h3 className="close-button" onClick={closeMenu}><AiOutlineClose /></h3>
                {/* Your off-canvas menu content goes here */}
                <div className="accord-offcanvas">
                    <ol> {/* Wrap the links inside a list */}
                        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li><a href="#project" onClick={handleLinkClick}>Projects</a></li>
                        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    </ol>
                </div>    
            </div>
        </div>
    );
};

export default OffCanvasButton;
