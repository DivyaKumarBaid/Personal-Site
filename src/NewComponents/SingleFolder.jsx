import React from 'react'
import { useTask } from '../context/TaskBarContext';
import { FolderModal } from './FolderModal'

export const SingleFolder = (props) => {
    const containerRef = React.useRef(null);
    const taskValues = useTask();
    const handleOpenFolder = () => {
        if (taskValues.tasks.filter(e => e.containerRef === containerRef).length === 0) {
            taskValues.setTasks(old => [...old, {
                name: props.name,
                icon: props.icon,
                opened: true,
                containerRef,
                idx: props.idx
            }])
        }
        taskValues.setFolderOpen(old => old.map((items, i) => i === props.idx ? true : items))
    }
    const handleClick = (e, i) => {
        switch (e.detail) {
            case 1: {
                props.setDoubleClick(old => old.map(item => false));
                props.setSingleClick(old => old.map((item, idx) => idx === i ? true : false));
                break;
            }
            case 2: {
                props.setSingleClick(old => old.map(item => false));
                props.setDoubleClick(old => old.map((item, idx) => idx === i ? true : false));
                taskValues.setFolderOpenZindex(old => old.map((old, i) => i === props.idx ? old = 180 : 150))
                handleOpenFolder();
                break;
            }
            default: {
                props.setDoubleClick(old => old.map(item => true));
                break;
            }
        }
    }

    return (
        <>
            <div
                className="cursor-pointer flex flex-col items-center justify-center w-max text-xs gap-1 py-2 px-4 rounded hoveringFolder"
                style={{
                    background: props.singleClick ? "rgba(90,90,90,0.5)" : props.doubleClick ? "rgba(90,90,90,0.9)" : "transparent"
                }}
                ref={containerRef}
                onClick={(e) => handleClick(e, props.idx)}
            >
                <img src={`/assets/${props.icon}`} className="folders" alt="" />
                <span className='folderText'>{props.name}</span>
            </div>
            <FolderModal {...{ containerRef, name: props.name, icon: props.icon, idx: props.idx, windowsElement: props.windowsElement }} />
        </>
    )
}
