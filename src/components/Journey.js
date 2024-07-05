import React from "react";
import Polaroid from "./Polaroid";

const Journey = () => {
    return (
        <section className="min-h-screen bg-red-100 flex flex-col items-center">
            <div className="mb-16">
                <h1 className="text-4xl lg:text-[70px] text-center leading-tight lg:leading-[1.1] font-light">
                    Level 0 Cute Innocent
                </h1>
                <h1 className="text-4xl lg:text-[70px] text-center leading-tight lg:leading-[1.1] font-light">
                    TO
                </h1>
                <h1 className="text-4xl lg:text-[70px] text-center leading-tight lg:leading-[1.1] font-light">
                    Level 10 Racist Fascism 💀
                </h1>
            </div>
            <div className="flex flex-row ml-14 mr-14 mb-14 items-center">
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-1.jpg"
                    alt="Journey 1"
                    caption="1 Year Old - 2004"
                    rotation={-5}
                />
                <Polaroid
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-2.jpg"
                    alt="Journey 2"
                    caption="4 Years Old - 2007"
                    rotation={15}
                />
                <Polaroid
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-3.jpg"
                    alt="Journey 3"
                    caption="7 Years Old - 2010"
                    rotation={-12}
                />
                <Polaroid
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-4.jpg"
                    alt="Journey 4"
                    caption="9 Years Old - 2012"
                    rotation={7}
                />
            </div>
            <div className="flex flex-row m14 items-center">
                <Polaroid
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-5.jpg"
                    alt="Journey 5"
                    caption="9 Years Old - 2012"
                    rotation={7}
                />
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-6.jpg"
                    alt="Journey 6"
                    caption="10 Years Old - 2013"
                    rotation={0}
                />
                <Polaroid
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-7.jpg"
                    alt="Journey 7"
                    caption="12 Years Old - 2015"
                    rotation={-7}
                />
                <Polaroid
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-8.jpg"
                    alt="Journey 8"
                    caption="14 Years Old - 2017"
                    rotation={15}
                />
                <Polaroid
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-9.jpg"
                    alt="Journey 9"
                    caption="14 Years Old - 2017"
                    rotation={-15}
                />
            </div>
            <div className="flex flex-row m14 items-center">
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-10.jpg"
                    alt="Journey 10"
                    caption="15 Years Old - 2018"
                    rotation={-5}
                />
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-11.jpg"
                    alt="Journey 11"
                    caption="16 Years Old - 2019"
                    rotation={5}
                />
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-12.jpg"
                    alt="Journey 12"
                    caption="17 Years Old - 2020"
                    rotation={-10}
                />
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-13.jpg"
                    alt="Journey 13"
                    caption="18 Years Old - 2021"
                    rotation={10}
                />
            </div>
            <div className="flex flex-row m14 items-center">
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-14.jpg"
                    alt="Journey 14"
                    caption="19 Years Old - 2022"
                    rotation={-5}
                />
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-15.jpg"
                    alt="Journey 15"
                    caption="19 Years Old - 2022"
                    rotation={5}
                />
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-16.jpg"
                    alt="Journey 16"
                    caption="20 Years Old - 2023"
                    rotation={-10}
                />
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-17.jpg"
                    alt="Journey 17"
                    caption="20 Years Old - 2024"
                    rotation={5}
                />
                <Polaroid 
                    src="https://storage.googleapis.com/lbp-bucket/images/journey/journey-18.jpg"
                    alt="Journey 18"
                    caption="20 Years Old - 2024"
                    rotation={-10}
                />
            </div>
        </section>
    );
};

export default Journey;