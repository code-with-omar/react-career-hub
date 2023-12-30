import { useLoaderData } from 'react-router-dom';
import './AppliedJobs.css'
import { useEffect, useState } from 'react';
import { getStoredJobApplication } from '../../../utilities/localstorage';
import DisplayAppliedJobs from '../DisplayAppliedJobs/DisplayAppliedJobs';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    let message;

    useEffect(() => {
        const appliedJobs = getStoredJobApplication();
        console.log(appliedJobs);
        const jobsApplied = [];
        if (appliedJobs.length === 0) {
            message = 'No jobs apply'
        }
        else {

            for (const id of appliedJobs) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
        }
    }, [jobs])
    console.log(appliedJobs)
    return (
        <section className='applied-job-wrap'>
            {appliedJobs.map(job=><DisplayAppliedJobs key={job.id}job={job}></DisplayAppliedJobs>)}
        </section>
    );
};

export default AppliedJobs;