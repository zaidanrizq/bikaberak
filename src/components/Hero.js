import React from 'react';

const Hero = () => {
    return (
        <>
            <section className='bg-red-100 flex-grow min-h-screen'>
                <div className='container mx-auto flex flex-col lg:flex-row justify-around min-h-screen '>
                    <div className='flex flex-col justify-center text-center lg:text-left'>
                        <div className='font-semibold flex items-center uppercase justify-center lg:justify-start mb-2'>
                            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>to my sweet girlfriend,
                        </div>
                        <h1 className='text-4xl lg:text-[70px] leading-tight lg:leading-[1.1] font-light mb-4'>
                            HAPPY BIRTHDAY<br />
                            <span className='font-semibold'>
                                MY LOVE BIKA
                            </span>
                        </h1>
                    </div>
                    <div className='flex justify-center lg:items-end'>
                        <img src="https://storage.googleapis.com/lbp-bucket/images/hero/woman_hero-topaz.png" alt='' className='' />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
