import React from 'react'
import './footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer" style={{ backgroundImage: `url("image/footer-background.png")` }}>
             <div className="container">
             <div className="row">
                <div className="col-md-5 col-sm-6">
                    <img src="image/footer-logo.png" className="img-fluid padding15" alt="organic" />
                    <p className="footer-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt dicta eveniet illum ratione eum.</p>
                    <hr />

                    <strong> © Copyright 2020 Nature</strong>
                </div>

                <div className="col-md-4 col-sm-6">
                    <h4>Information</h4>
                    <hr />
                    <ul>
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Contact Us</li>
                        <li>Terms of Service</li>
                        <li>About Us</li>
                        <li>Products</li>
                    </ul>
                </div>

                
                <div className="col-md-3 col-sm-6">
                    <h4>Follow Us</h4>
                    <hr />
                    <div className="social-container footer-social mt-4">
                        <div className="social-flex">
                            <div className="social-icon-container">
                                <InstagramIcon className="social-icon"/>
                            </div>
                            <div className="social-icon-container">
                                <FacebookIcon className="social-icon"/>
                            </div>
                            <div className="social-icon-container">
                                <TwitterIcon className="social-icon"/>
                            </div>
                            <div className="social-icon-container">
                                <LinkedInIcon className="social-icon"/>
                            </div>
                        </div>
                    </div>
                </div>

                </div>

             </div>
        </div>
    )
}

export default Footer
