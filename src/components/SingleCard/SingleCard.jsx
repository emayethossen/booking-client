import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {

    const { college_name, college_image,admission_date } = card;

    return (
        <div>
            
<div className="max-w-sm bg-white border h-96 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img className="rounded-t-lg w-full h-40" src={college_image} alt="" />
    
    <div className="p-5">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{college_name}</h5>
        
        <p className="mb-3 text-lg text-gray-700 dark:text-gray-400">Admission Date: {admission_date}</p>
        <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Details
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>

        </div>
    );
};

export default SingleCard;