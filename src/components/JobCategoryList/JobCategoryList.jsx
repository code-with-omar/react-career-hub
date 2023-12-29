import './JobCategoryList.css';
import imgAccounts from '../../assets/icons/1.png';
import imgCreative from '../../assets/icons/2.png';
import imgMarketing from '../../assets/icons/3.png';
import imgEngineering from '../../assets/icons/4.png';
import JobsCategoryCart from '../JobsCategoryCart/JobsCategoryCart';

const JobCategoryList = () => {
    const jobs = [
        { id: '8372-KL', jab_name: 'Account & Finance', total_job: '300 Jobs Available', image: imgAccounts },
        { id: '5491-PQ', jab_name: 'Creative Design', total_job: '100+ Jobs Available', image: imgCreative },
        { id: '7263-RT', jab_name: 'Marketing & Sales', total_job: '150 Jobs Available', image: imgMarketing },
        { id: '1984-JM', jab_name: 'Engineering Job', total_job: '224 Jobs Available', image: imgEngineering }
    ];

    return (
        <section className='jab-category-list-wrap container'>

            <h2 className='fs-48 fw-800 text-center font-dark-01'>Job Category List</h2>
            <p className='text-center font-dark-03 fs-16 fw-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='job-category-cart-wrap'>
                {jobs.map(data => <JobsCategoryCart key={data.id} data={data} />)}
            </div>

        </section>
    );
};

export default JobCategoryList;
