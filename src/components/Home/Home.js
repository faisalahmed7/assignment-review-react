import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../customhook/useReviews';
import apple from '../../image/apple.jpg'
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Home = () => {

    // use custom hook useReviews()

    const [reviews,setReviews] = useReviews()
    const newArrayReview = [...reviews]
    const review = newArrayReview.slice(0, 3)

    return (
        <div>
            <div className='flex justify-between mt-16 mb-20 ml-20'>
                <div className="product-details ml-20 w-1/2">
                    <h3 className='text-5xl color text-gray-500 font-bold'>Apple Monitor</h3>
                    <p className='text-xl py-8 text-justify'>The Apple Thunderbolt Display is a 27-inch flat panel computer monitor developed and sold by Apple Inc. 
                        from July 2011 to June 2016. Originally priced at $999, it replaced the 27-inch Apple LED Cinema Display. 
                        New to the Thunderbolt Display was the switch from Mini DisplayPort and USB to a single Thunderbolt connector for data and DisplayPort. 
                        The Thunderbolt Display also added a Gigabit Ethernet port and FireWire 800 port. Macs released before 2011 without Thunderbolt, 
                        the 2012 Mac Pro and the single USB-C Retina MacBook are incompatible with the Thunderbolt Display without use of additional adaptors.</p>
                    <div >
                        <button className='text-xl bg-orange-300 rounded-lg border-0 p-2 text-left'>Live Demo</button>
                    </div>
                </div>
                <div className="img-container w-1/2  mr-20">
                    <img className="w-4/6 2 ml-20 rounded-xl border-2" src={apple} alt=""></img>
                </div>
            </div>

{/* Reviews Section of Home Page */}

            <div className='mt-20'>
                <h2 className='text-5xl p-4 text-black font-serif text-center'>Reviews ({reviews.length})</h2>

                <div className='mt-10  p-3 mx-5 grid md:grid-cols-3 bg-white gap-6'>
                    {
                        review.map(review => <ReviewDetails key={review.id} review={review}></ReviewDetails>)
                    }
                </div>
                <div className='mt-10 mb-20 text-center'>
                    <Link to='/reviews' className='text-xl mt-5 border-0 rounded-lg bg-orange-300 p-3 mx-auto font-serif'>See Reviews All</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;