import React from 'react'
import { useTask } from '../context/TaskBarContext';

export const TaskBar = () => {

    const taskValues = useTask();

    return (
        <div className="w-[100%] top-[86vh] fixed z-[15] flex justify-center lowerTaskBar">
            <div className="taskBar backdrop-blur-[8px] p-4 pb-3 bg-[rgba(90,90,90,0.2)] rounded-md flex shadow-lg gap-[35px] ">
                {taskValues.tasks.map((item, idx) => {
                    return (
                        <div
                            className='flex flex-col items-center gap-2 taskbarItems'
                            onClick={() => {
                                taskValues.setFolderOpenZindex(old => old.map((old, i) => i === item.idx ? old = 180 : 150))
                                taskValues.setFolderOpen(old => old.map((ele, i) => i === item.idx ? !ele : ele))
                            }}
                            key={idx}
                        >
                            <img src={`/assets/${item.icon}`} alt="" className="drop-shadow-md" style={{ height: "35px" }} />
                            <div className={`w-[50%] h-[2px] ${item.opened ? "bg-[rgba(150,150,150,0.8)]" : "bg-transparent"}`} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
