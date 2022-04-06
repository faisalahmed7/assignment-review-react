import React from 'react';
import useReviews from '../../customhook/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Review = () => {
    // using custom hook useReviews()
    const [reviews]=useReviews()
    return (
        <div>
            <h2 className='text-3xl text-center'>Reviews ({reviews.length})</h2>

            <div className='mt-16 p-3 mx-5 grid md:grid-cols-3 bg-white gap-6'>
                {
                    reviews.map(review=><ReviewDetails key={review.id} review={review}></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default Review;