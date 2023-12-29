
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import Hero from '../Hero/Hero';
import JobCategoryList from '../JobCategoryList/JobCategoryList';


const Main = () => {
    return (
        <main>
            <Hero></Hero>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
        </main>
    );
};

export default Main;