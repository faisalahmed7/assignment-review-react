import React from 'react';


const ReviewDetails = ({review}) => {
    console.log(review)
    const{name,description,img,ratings}=review
    return (
        <div className='bg-blue-300 rounded-lg p-4  text-justify'>
            <div className='flex justify-center'>
            <img className='rounded-full w-10 h-10' src={img} alt=''></img>
            </div>
            <div>
            <h5 className='text-xl  text-center mt-5 mb-3'> {name}</h5>
            <p className='text-center font-serif text-xl'>{description}</p>
            <p className='text-center text-xl '><span className='text-black text-normal'>Ratings</span> {ratings} </p>
            </div>
            
        </div>
    );
};

export default ReviewDetails;