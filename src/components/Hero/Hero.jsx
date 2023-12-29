import { Link } from "react-router-dom";
import userImage from "../../assets/images/user.png"
import "./Hero.css"
const Hero = () => {
    return (
        <section className="bg-linear-white ">
            <div className="container">
                <div className="hero-wrap">
                    <div className="hero-left">
                        <h2 className="hero-title fw-800">One Step <br />Closer To Your <br /><span>Dream Job</span></h2>
                        <p className="hero-description fw-500 font-dark-03 fs-18">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='primary-btn hero-btn'><Link>Get Started</Link></button>
                    </div>
                    <div className="hero-right">
                        <img src={userImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;