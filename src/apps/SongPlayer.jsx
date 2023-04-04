import React from 'react'
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { ImNext, ImPrevious } from 'react-icons/im';

export const SongPlayer = () => {
    const data = [
        {
            name: "LiSA Demon Slayer: Kimetsu no Yaiba",
            thumbnail: "music.png",
            song: "song.mp3",
        },
        {
            name: "Blue Bird from Naruto Shippuden",
            thumbnail: "naruto.png",
            song: "naruto.mp3",
        },
    ]
    const [isPlaying, setPlaying] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    const toggleChange = (skip) => {
        document.getElementById('myAudio').pause();
        setPlaying(false);
        skip === -1 ? setIndex(idx => idx === 0 ? data.length - 1 : idx - 1) : setIndex(idx => idx === data.length - 1 ? 0 : idx + 1);
        document.getElementById('myAudio').play();
        setPlaying(true);
    }

    const togglePlay = () => {
        !isPlaying ? document.getElementById('myAudio').play() : document.getElementById('myAudio').pause();
    }

    return (
        <div className="w-[100%] h-[100%] overflow-auto p-6 flex justify-center items-center">
            <audio controls src={`/assets/songs/${data[index].song}`} id="myAudio" style={{ display: "none" }} />
            <div className="music-card">
                <div className="music-card-img"
                    style={{
                        background: `url(/assets/songsThumbnail/${data[index].thumbnail})`,
                    }}
                >
                </div>
                <div className='max-w-[100%] mt-2'>
                    <marquee behavior="" direction="">{data[index].name}</marquee>
                </div>
                <div className="controls-container">
                    <ImPrevious
                        className="back-btn"
                        onClick={() => toggleChange(-1)}
                    />
                    {!isPlaying ?
                        <BsPlayCircle
                            className='play-btn'
                            onClick={() => {
                                setPlaying(old => !old)
                                togglePlay();
                            }}
                        /> :
                        <BsPauseCircle
                            className='pause-btn'
                            onClick={() => {
                                setPlaying(old => !old);
                                togglePlay();
                            }}
                        />}
                    <ImNext className="forward-btn" onClick={() => toggleChange(1)} />
                </div>
            </div>
        </div>
    )
}
