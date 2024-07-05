import { motion } from "framer-motion";
import { useRef, useEffect, useState} from "react";
import images from "../assets/images/hightlight-images";
import "../assets/styles/Hightlight.css";

const Hightlight = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className="min-h-screen bg-red-100 justify-center items-center">
            <div className="mx-40">
                <div className="pt-16 mb-4">
                    <h1 className="text-4xl lg:text-[70px] text-center leading-tight lg:leading-[1.1] font-light">
                        Some of My Favorite Bika
                    </h1>
                </div>
                <div className="Hightlight">
                    <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
                            {images.map(image => {
                                return(
                                    <motion.div className="item" key={image}>
                                        <img src={image} alt="" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
                <div className="mt-4 pb-8">
                    <h1 className="text-4xl lg:text-[70px] text-center leading-tight lg:leading-[1.1] font-light">
                        Love from your future husband 😘
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hightlight;