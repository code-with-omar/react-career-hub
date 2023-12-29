import './FeaturedJobsCard.css'
import locationIcon from '../../assets/icons/Location.png';
import moneyIcon from '../../assets/icons/money.png';
import { Link } from 'react-router-dom';
const FeaturedJobsCard = ({ job }) => {
    console.log(job);
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className='featured-job-card'>
            <img src={logo} alt="" />
            <h3>{job_title}</h3>
            <p>{company_name}</p>
            <div className='featured-job-btn'>
                <button>{remote_or_onsite}</button>
                <button>{job_type}</button>
            </div>
            <div>
                <p>
                    <img src={locationIcon} alt="" /> {location}
                </p>
                <p>
                    <img src={moneyIcon} alt="" /> {salary}
                </p>
            </div>
            <button className='primary-btn'><Link>Star Applying</Link></button>
        </div>
    );
};

export default FeaturedJobsCard;