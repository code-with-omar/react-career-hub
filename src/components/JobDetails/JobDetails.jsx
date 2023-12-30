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
                        <p>Job Description: {job_description}</p>
                        <p>Job Responsibility: {job_responsibility}</p>
                        <p>Educational Requirements:</p>
                        <p>{educational_requirements}</p>
                        <p>Experiences:</p>
                        <p>{experiences}</p>
                    </div>
                    <div className='job-details-right'>
                        <h4>Job Details</h4>
                        <div>
                            <div>
                                <img src={moneyIcon} alt="" />
                                <h5>Salary: {salary}</h5>
                            </div>
                            <div>
                                <img src={jobIcon} alt="" />
                                <h5>Job Title: {job_title}</h5>
                            </div>
                        </div>
                        <h4>Contact Information</h4>
                        <div>
                            <div>
                                <img src={moneyIcon} alt="" />
                                <h5>Phone: {contact_information.phone}</h5>
                            </div>
                            <div>
                                <img src={moneyIcon} alt="" />
                                <h5>email: {contact_information.email}</h5>
                            </div>
                            <div>
                                <img src={moneyIcon} alt="" />
                                <h5>Address: {contact_information.address}</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;
