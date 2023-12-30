import './FeaturedJobsCard.css'
import locationIcon from '../../assets/icons/Location.png';
import moneyIcon from '../../assets/icons/money.png';
import { Link } from 'react-router-dom';
const FeaturedJobsCard = ({ job }) => {
    console.log(job);
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className='featured-job-card'>
            <div className='featured-job-card-logo'>
                <img src={logo} alt=""  />
            </div>
            <h3 className='font-dark-02 fw-800 fs-24'>{job_title}</h3>
            <p className='font-dark-03 fw-600 fs-20'>{company_name}</p>
            <div className='featured-job-btn'>
                <button>{remote_or_onsite}</button>
                <button>{job_type}</button>
            </div>
            <div className='location'>
                <p className='font-dark-03 fs-20 fw-600'>
                    <img src={locationIcon} alt="" /> {location}
                </p>
                <p className='font-dark-03 fs-20 fw-600'>
                    <img src={moneyIcon} alt="" /> {salary}
                </p>
            </div>
            <button className='primary-btn featured-btn'><Link>View Details</Link></button>
        </div>
    );
};

export default FeaturedJobsCard;