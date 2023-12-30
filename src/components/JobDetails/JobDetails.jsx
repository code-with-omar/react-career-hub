import { useLoaderData, useParams } from 'react-router-dom';
import phoneIcon from '../../assets/icons/phone.png';
import emailIcon from '../../assets/icons/email.png';
import moneyIcon from '../../assets/icons/money.png';
import locationIcon from '../../assets/icons/location2.png'
import jobIcon from '../../assets/icons/calendar.png';
import './JobDetails.css'
const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;
    console.log(contact_information.email)
    return (
        <section className='job-details-wrap'>
            <div className='bg-linear-white job-details-title'>
                <h2 className='font-dark-01 fs-32 fw-800 text-center'>Job Details</h2>
            </div>
            <div className='container'>
                <div className='job-details'>
                    <div className='job-details-left'>
                        <p><span className='fs-16 fw-800 font-dark-01'>Job Description:</span> {job_description}</p>
                        <p><span className='fs-16 fw-800 font-dark-01'>Job Responsibility:</span> {job_responsibility}</p>
                        <p><span className='fs-16 fw-800 font-dark-01'>Educational Requirements:</span></p>
                        <p>{educational_requirements}</p>
                        <p className='fs-16 fw-800 font-dark-01'>Experiences:</p>
                        <p>{experiences}</p>
                    </div>
                    <div className='job-details-right '>
                        <h4 className='fs-20 font-dark-01 fw-800 '>Job Details</h4>
                        <hr className='hr' />
                        <div>
                            <div className='job-details-right-section-01'>
                                <img src={moneyIcon} alt="" />
                                <h5 className='fs-18 font-dark-01 fw-700'>Salary: <span className='font-dark-03 fw-600'>{salary}</span></h5>
                            </div>
                            <div className='job-details-right-section-01'>
                                <img src={jobIcon} alt="" />
                                <h5 className='fs-18 font-dark-01 fw-807'>Job Title: <span className='font-dark-03 fw-600'>{job_title}</span> </h5>
                            </div>
                        </div>
                        <h4 className='fs-20 font-dark-01 fw-800 '>Contact Information</h4>
                        <hr className='hr' />
                        <div>
                            <div className='job-details-right-section-01'>
                                <img src={phoneIcon} alt="" />
                                <h5 className='fs-18 font-dark-01 fw-700'>Phone:<span className='font-dark-03 fw-600'>{contact_information.phone}</span> </h5>
                            </div>
                            <div className='job-details-right-section-01'>
                                <img src={emailIcon} alt="" />
                                <h5 className='fs-18 font-dark-01 fw-700'>email: <span className='font-dark-03 fw-600'>{contact_information.email}</span> </h5>
                            </div>
                            <div className='job-details-right-section-01'>
                                <img src={locationIcon} alt="" />
                                <h5 className='fs-18 font-dark-01 7w-800'>Address: <span className='font-dark-03 fw-600'> {contact_information.address}</span></h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;
