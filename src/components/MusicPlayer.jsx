import { useEffect, useRef, useState } from "react";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

const MusicPlayer = ({ enabled }) => {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        if (!enabled || !audioRef.current) {
            return;
        }

        audioRef.current
            .play()
            .then(() => {
                setPlaying(true);
            })
            .catch(() => {
                console.log("Browser blocked autoplay");
            });
    }, [enabled]);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        } else {
            audioRef.current
                .play()
                .then(() => {
                    setPlaying(true);
                })
                .catch(() => { });
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/music/wedding-10s.mp3" />

            <button
                onClick={toggleMusic}
                className="
          fixed
          top-5
          right-5
          z-50
          w-12
          h-12
          rounded-full
          bg-white/80
          backdrop-blur
          flex
          items-center
          justify-center
          shadow-lg
        "
            >
                {playing ? <FaVolumeHigh /> : <FaVolumeXmark />}
            </button>
        </>
    );
};

export default MusicPlayer;