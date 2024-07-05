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
        <div className="bg-red-100 justify-center items-center pt-10">
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
        </div>
    );
};

export default Hightlight;