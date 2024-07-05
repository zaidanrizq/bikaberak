import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import Logo from '../assets/images/logo.svg';

const Header = () => {
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isIdle, setIsIdle] = useState(false);
    const idleTimer = useRef(null);

    const handleScroll = useCallback(() => {
        if (idleTimer.current) {
            clearTimeout(idleTimer.current);
        }
        setIsIdle(false);

        const currentScrollY = window.scrollY;
        if (currentScrollY < lastScrollY) {
            setIsScrollingUp(true);
        } else {
            setIsScrollingUp(false);
        }
        setLastScrollY(currentScrollY);

        idleTimer.current = setTimeout(() => {
            setIsIdle(true);
        }, 2000);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (idleTimer.current) {
                clearTimeout(idleTimer.current);
            }
        };
    }, [handleScroll]);

    return (
        <header className={`bg-red-100 h-20 fixed w-full transition-transform duration-300 ${isScrollingUp && !isIdle ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto flex items-center justify-between h-full px-6">
                <Link to={'/'}>
                    <div>
                        <img className='w-[40px]' src={Logo} alt="Logo" />
                    </div>
                </Link>
                <div>
                    <CiLogout className='text-2xl' />
                    <div></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
