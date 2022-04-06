import React from 'react';

const Blogs = () => {
    return (
        <div className='grid md:grid-cols-1 gap-8 mt-16 mb-10'>

            {/* Context API */}

            <div className='border rounded-lg bg-slate-200 px-3 py-6 mx-auto w-1/2 mb-6 text-justify '>
                <h3 className='text-center text-3xl font-bold mb-6'>What is Context API</h3>
                <p className=''>
                    The Context API is a react component which is provided by the React.
                    It helps us to share or pass our data  for all level components.
                    It is used instead of passing the value without the problem of props drilling in react.
                    It is the easiest way to pass a specific value or data a from any components to other components.
                    It was first introduced in react version 16.3. </p>
            </div>

            
            {/* Semantic Tags */}
            <div className='border rounded-lg bg-slate-200 px-3 py-6 mx-auto w-1/2  text-justify'>
                <h3 className='text-center text-3xl font-bold mb-6'>What is Semantic Tags</h3>
                <p className=''>Semantic HTML tags are the those tags, which gives a meaning to our markup for the search engine,browsers, screen readers etc.
                    Semantic Tags are first introduced in HTML5 version. Every semantic tag has a meaning of own. FOr this it makes good
                    understanding between the user and developers. The tag of article, nav, main, section  are the examples of the those semantic tags.
                    Semantic tags make HTML more feasible to use
                </p>
            </div>

        </div>
    );
};

export default Blogs;