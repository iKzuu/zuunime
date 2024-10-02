"use client"

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: '300',
        height: '250'
    };

    const [isOpen, setIsOpen] = useState(true);

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState);
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoPlayer}
                    className="text-color-blueform text-xl float-right hover:scale-150 transition-all"
                >
                    ❎
                </button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                />
            </div>
        );
    }

    const BtnOpenTrailer = () => {
        return (
            <button
                onClick={handleVideoPlayer}
                className="p-4 fixed bottom-5 right-5 w-32 bg-color-blueform text-color-primary hover:bg-transparent hover:backdrop-blur-sm hover:border hover:border-color-blueform hover:text-color-blueform rounded-xl transition-all"
            >
                trailer
            </button>
        );
    }

    return isOpen ? <Player /> : <BtnOpenTrailer />

}

export default VideoPlayer;