import React from 'react'
import { SingleFolder } from './SingleFolder';
import { Folders } from '../context/TaskBarContext';

export const Desktop = () => {

    const [singleClick, setSingleClick] = React.useState(Folders.map(() => false));
    const [doubleClick, setDoubleClick] = React.useState(Folders.map(() => false));

    const handleOnBlur = () => {
        setDoubleClick(old => old.map(item => false));
        setSingleClick(old => old.map(item => false));
    }

    return (
        <>
            <div className="w-[100%] h-[95%] overflow-hidden flex justify-between items-start Desktop">
                <div className="homeScreen flex flex-col flex-wrap gap-[20px] max-w-[90%] w-max h-[90%] px-3 text-[rgba(256,256,256,0.8)] items-start justify-start">
                    {Folders.map((item, idx) => {
                        return item.onDesktop ? (
                            item.link != "/" ?
                                <a href={item.link} key={idx} >
                                    <div className='desktopFolders'>
                                        <SingleFolder {...item} singleClick={singleClick[idx]} doubleClick={doubleClick[idx]} idx={idx} setSingleClick={setSingleClick} setDoubleClick={setDoubleClick} windowsElement={item.windowsElement} />
                                    </div>
                                </a> :
                                <div key={idx} className='desktopFolders'>
                                    <SingleFolder {...item} singleClick={singleClick[idx]} doubleClick={doubleClick[idx]} idx={idx} setSingleClick={setSingleClick} setDoubleClick={setDoubleClick} windowsElement={item.windowsElement} />
                                </div>
                        ) : null
                    })}
                </div>
                <div className="w-[80%] h-[100%]" onClick={() => { handleOnBlur() }}></div>
            </div>
        </>
    )
}
