import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <div>
            <div id="imagefooter" style={{ backgroundImage: `url(/assests/image/footer.png)` }}>

            </div>
            <footer className="footer" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                           
                            <div className="join-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Subscribe to our newsletter and get our latest news and offers.</p>
                                <form >
                                    <input type="email" className='emailbox' placeholder="Enter your email" />
                                    <button type="submit" className='subButton'>Subscribe</button>
                                </form>
                                </div>
                               
                                <div className="social-media mt-3">
                                    
                                    <div className="social-icons ">
                                        <a href="https://www.facebook.com/inofinityrnd"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/"><i className="fab fa-twitter"></i></a>
                                        
                                        <a href="https://www.linkedin.com/company/inofinity-rnd-pvt-ltd/"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                           
                            <div className="explore-us">
                                <h4>Explore Us</h4>
                                <ul>
                                    <li><a href="https://inofinityrnd.com/">About Us</a></li>
                                    <li><a href="https://inofinityrnd.com/">Our Services</a></li>
                                    <li><a href="https://inofinityrnd.com/">Our Team</a></li>
                                    <li><a href="https://inofinityrnd.com/">Contact Us</a></li>
                                    <li><a href="https://inofinityrnd.com/">FAQ</a></li>
                                    </ul>
                                    </div>
                            </div>
                        <div className="col-lg-5 col-md-6 col-sm-12">
                            </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
