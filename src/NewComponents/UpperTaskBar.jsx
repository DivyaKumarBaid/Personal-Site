import React from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai';
import { BsBatteryHalf, BsFillVolumeMuteFill } from 'react-icons/bs';
import { IoIosWifi } from 'react-icons/io';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const UpperTaskBar = (props) => {
    const today = new Date();
    return (
        <div className="w-[100%] p-2 tracking-widest h-min flex flex-row-reverse text-xs text-[rgba(256,256,256,0.7)] gap-[39vw] cursor-default upperTaskBar">
            <div className="status flex gap-[16px] items-center">
                <IoIosWifi style={{ fontSize: "16px" }} />
                <BsFillVolumeMuteFill style={{ fontSize: "18px" }} />
                <BsBatteryHalf style={{ fontSize: "18px" }} />
                <AiOutlinePoweroff className='cursor-pointer' onClick={() => props.setLoggedIn(false)} style={{ fontSize: "16px" }} />
            </div>

            <div className="time">
                <span>{today.getDate()}</span>
                &nbsp;
                <span>{monthNames[today.getMonth()]}</span>
                &nbsp;&nbsp;
            </div>
        </div>
    )
}
