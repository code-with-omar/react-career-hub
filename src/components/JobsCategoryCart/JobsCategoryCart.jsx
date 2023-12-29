import './JobsCategoryCart.css'

const JobsCategoryCart = (props) => {
    const {jab_name,total_job,image}=props.data;
  
    return (
        <div className='job-category-cart bg-linear-white'>
            <div className='job-category-cart-img'>
                <img src={image} alt="" />
            </div>
            <h4>{jab_name}</h4>
            <p>{total_job}</p>
        </div>
    );
};

export default JobsCategoryCart;