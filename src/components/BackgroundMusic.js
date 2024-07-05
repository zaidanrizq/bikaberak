import React, { useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(error => {
          console.log("Error playing audio: ", error);
        });
      }
    };

    // Add event listeners for click and scroll
    window.addEventListener('click', playAudio);
    window.addEventListener('scroll', playAudio);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('click', playAudio);
      window.removeEventListener('scroll', playAudio);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src="https://storage.googleapis.com/lbp-bucket/audios/bg-music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusic;
