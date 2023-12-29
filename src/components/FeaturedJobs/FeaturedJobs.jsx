import { useState } from 'react';
import './FeaturedJobs.css';
import { useEffect } from 'react';
import FeaturedJobsCard from '../FeaturedJobsCard/FeaturedJobsCard';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <section className='featured-jobs-wrap container'>
            <h2 className='fs-48 fw-800 text-center font-dark-01'>Featured Jobs</h2>
            <p className='text-center font-dark-03 fs-16 fw-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='featured-jobs-cards'>
                {jobs.map(job => <FeaturedJobsCard key={job.id} job={job}></FeaturedJobsCard>)}
            </div>
        </section>
    );
};

export default FeaturedJobs;