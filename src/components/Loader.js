import React from 'react';
import anime from 'animejs';

const Loader = () => {


    return (
        <div className='Loader'>
            <svg id="loaderSvg" width={110}>
                <path stroke='var(--pinkred)' className='p1' strokeWidth={1.8} fill="none" d="M85.39,68h0a22.45,22.45,0,0,0-4.32-1.47A37.68,37.68,0,0,0,71,65.12H68.62L36.27,83.79h0l-.82.47H71a18.62,18.62,0,1,1,0,37.24H35.45l33.17,19.14H71A37.76,37.76,0,0,0,85.39,68Z"/>  
                <path stroke='var(--pinkred)' className='p2' strokeWidth={1.8} fill="none"  class="p3" d="M34.78,19.15A18.62,18.62,0,0,1,51.64,45.67h0L32.89,80l32-19.46h0a37.24,37.24,0,0,0,3-4.69c1.45-2.45,2.89-5.31,3-7.07h0A37.77,37.77,0,0,0,35.45,0H0Q.12,60.75.25,121.49L17.13,137v.22L21,140.64Q20.77,80,20.48,19.24Z"/>
        
                <path stroke='var(--pinkred)' className='p2' strokeWidth={1.8} fill="none" d="M51.3,113.77,40.39,102.88,51.3,92H38.46l-4.41,4.61-6-6v24.2L34,109.09l4.46,4.69Z"/>
            </svg>
        </div>
    );
}

export default Loader;
