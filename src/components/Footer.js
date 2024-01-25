import React from "react";
import logo from '../images/Logo .svg'

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt='' />
                    <p>Indulge in the soulful essence of the Mediterranean with Little Lemon Restaurant, where tradition meets innovation in every delectable bite.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Visit Us</h3>
                    <ul>
                        <li>Address: <br/>42 Wallaby Way, Sydney.</li>
                        <li>Phone: <br/>123-456-7890</li>
                        <li>Email: <br/>Little@lemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Visit Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>X</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;