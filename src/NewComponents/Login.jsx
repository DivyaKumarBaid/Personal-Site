import { CircularProgress } from '@mui/material';
import anime from 'animejs';
import React from 'react'

export const Login = (props) => {
    React.useEffect(() => {
        props.onceClicked && loginHandle();
    })

    const loginHandle = () => {
        props.setClicked(true);
        anime({
            loop: true,
            targets: ".p1,.p2,.p3",
            strokeDashoffset: [0, anime.setDashoffset],
            easing: 'easeInOutQuad',
            duration: 2000,
            direction: 'alternate',
            loop: true
        })
        setTimeout(() => {
            props.setLoggedIn(true)
            props.setClicked(false);
        }, 2000);
    }


    return (
        <div className="w-[100%] h-[100%] fixed z-[99] bg-black text-white flex flex-col justify-center items-center gap-12 font-['Montserrat'] font-[800] text-3xl loadingScreen">
            <div>
                <svg width={110}>
                    <path stroke='var(--pinkred)' className='p1' strokeWidth={2} fill="none" d="M85.39,68h0a22.45,22.45,0,0,0-4.32-1.47A37.68,37.68,0,0,0,71,65.12H68.62L36.27,83.79h0l-.82.47H71a18.62,18.62,0,1,1,0,37.24H35.45l33.17,19.14H71A37.76,37.76,0,0,0,85.39,68Z" />
                    <path stroke='var(--pinkred)' className='p2' strokeWidth={2} fill="none" class="p3" d="M34.78,19.15A18.62,18.62,0,0,1,51.64,45.67h0L32.89,80l32-19.46h0a37.24,37.24,0,0,0,3-4.69c1.45-2.45,2.89-5.31,3-7.07h0A37.77,37.77,0,0,0,35.45,0H0Q.12,60.75.25,121.49L17.13,137v.22L21,140.64Q20.77,80,20.48,19.24Z" />

                    <path stroke='var(--pinkred)' className='p2' strokeWidth={2} fill="none" d="M51.3,113.77,40.39,102.88,51.3,92H38.46l-4.41,4.61-6-6v24.2L34,109.09l4.46,4.69Z" />
                </svg>
            </div>
            <div className='flex flex-col items-center gap-4 tracking-widest'>
                {/* <h1>Welcome</h1> */}
                <div className={`border bg-transparent p-2 flex justify-center items-center px-6 w-[10vw] text-center h-[6vh] rounded-md hover:bg-white cursor-pointer transition-all hover:text-black ${props.onceClicked && "border-none"} `} onClick={() => {
                    loginHandle()
                }}>
                    {props.onceClicked ? <CircularProgress color="inherit" style={{ width: "25px", height: "25px" }} /> : <div className='text-sm font-["DM_Sans"]' >Login</div>}
                </div>
            </div>
        </div>
    )
}
