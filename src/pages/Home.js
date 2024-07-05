import React from 'react';
import Hero from '../components/Hero';
import Greeting from '../components/Greeting';
import Journey from '../components/Journey';
import Hightlight from '../components/Highlight';
import BackgroundMusic from '../components/BackgroundMusic';

const Home = () => {
    return (
        <>
            <BackgroundMusic />
            <Hero />
            <Greeting />
            <Journey />
            <Hightlight />
        </>
    );
};

export default Home;