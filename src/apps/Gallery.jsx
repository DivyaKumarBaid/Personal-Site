import React from 'react'

export const Gallery = (props) => {
    return (
        <div className='w-[100%] h-[100%] flex items-center justify-center'>
            <div className='w-[80%] h-[80%] flex item-center justify-center gallery' style={{ background: `url('/assets/tech/${props.icon}')` }} />
        </div>
    )
}
