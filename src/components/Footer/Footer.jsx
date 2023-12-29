import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer-wrap bg-dark-01'>
            <div className='container footer'>
                <div className='footer-company-details'>
                    <h3 className='font-white fs-32 fw-800 footer-brand-name'>CareerHub</h3>
                    <p className='font-footer-dark-02 fs-16'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                </div>
                <div className="footer-all-link">
                    <div className='footer-company-link'>
                        <h4 className='fs-20 font-white fw-600'>Company</h4>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>About Us</Link>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Work</Link>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Latest News</Link>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Careers</Link>
                    </div>
                    <div className='footer-company-link'>
                        <h4 className='fs-20 font-white fw-600'>Product</h4>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Prototype</Link>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Plans & Pricing</Link>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Customers</Link>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Integrations</Link>
                    </div>
                    <div className='footer-company-link'>
                        <h4 className='fs-20 font-white fw-600'>Support</h4>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Help Desk</Link>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Sales</Link>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Become a Partner</Link>
                        <Link to='#' className='fs-16 fw-400 font-footer-dark-02'>Developers</Link>
                    </div>
                    <div className='footer-company-link'>
                        <h4 className='fs-20 font-white fw-600'>Contact</h4>
                        <p className='fs-16 fw-400 font-footer-dark-02'>524 Broadway , NYC</p>
                        <p className='fs-16 fw-400 font-footer-dark-02'>+1 777 - 978 - 5570</p>
                    </div>
                </div>
            </div>
            <div className='container footer-copy-write'>
                <h4 className='fs-14 fw-400 font-footer-dark-01'>@2023 CareerHub. All Rights Reserved</h4>
                <h4 className='fs-14 fw-400 font-footer-dark-01'>Powered by CareerHub</h4>
            </div>
        </footer>
    );
};

export default Footer;