import { Grow } from '@mui/material';
import React from 'react'
import Draggable from 'react-draggable'
import { MySelf } from '../apps/MySelf';
import { Terminal } from '../apps/Terminal';
import { useTask } from '../context/TaskBarContext';

export const FolderModal = ({ containerRef, name, icon, idx, windowsElement }) => {

    const taskValues = useTask();

    const handleCloseFolder = () => {
        idx === 1 && document.getElementById("myAudio").pause();
        taskValues.setTasks(old => old.filter(e => e.containerRef !== containerRef))
        taskValues.setFolderOpen(old => old.map((ele, i) => i === idx ? false : ele))
    }

    const handleMinimiseFolder = () => {
        taskValues.setFolderOpen(old => old.map((ele, i) => i === idx ? false : ele))
    }


    return (
        <Grow
            in={taskValues.folderOpen[idx]}
            {...(taskValues.folderOpen[idx] ? { timeout: 500 } : { timeout: 320 })}
        // container={containerRef.current}
        >
            <div
                className='fixed bg-white'
                style={{ zIndex: taskValues.folderOpenZindex[idx] }}
                onClick={() => {
                    taskValues.setFolderOpenZindex(old => old.map((old, i) => i === idx ? old = 180 : 150))
                }}
            >
                <Draggable
                    handle={`.handleDrag${idx}`}
                    defaultPosition={{ x: 200, y: -100 }}
                >
                    <div className="w-[60vw] h-[70vh] fixed shadow-[0px_0px_16px_rgba(0,0,0,0.5)]">
                        <div className={`handleDrag${idx} w-[100%] h-max bg-[rgba(90,90,90,0.2)] backdrop-blur-[8px] rounded-t flex flex-row-reverse justify-between items-center p-2 pr-4`}>
                            <div className="flex gap-4">
                                <div className="rounded-[50%] w-[15px] h-[15px] bg-[rgb(93,223,45)] cursor-pointer" onClick={() => handleMinimiseFolder()} />
                                <div className="rounded-[50%] w-[15px] h-[15px] bg-[rgb(223,45,45)] cursor-pointer" onClick={() => handleCloseFolder()} />
                            </div>
                            <div>{name}</div>
                            <img src={`/assets/${icon}`} alt="" style={{ maxHeight: "25px", objectFit: "contain" }} />
                        </div>
                        <div className="w-[100%] h-[100%] bg-[rgb(36,36,36,1)] rounded-b ">
                            {windowsElement}
                        </div>
                    </div>
                </Draggable>
            </div>
        </Grow >
    )
}
