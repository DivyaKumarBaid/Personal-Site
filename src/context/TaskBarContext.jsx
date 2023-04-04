import React from 'react'
import { FolderStructure } from '../apps/FolderStructure';
import { MySelf } from '../apps/MySelf';
import { SongPlayer } from '../apps/SongPlayer';
import { Terminal } from '../apps/Terminal';
import { project } from '../NewComponents/Projects';
import { WorkCard } from '../NewComponents/WorkCard';
import { Gallery } from '../apps/Gallery';
import { Contact } from '../apps/Contact';

const taskContext = React.createContext();

export const useTask = () => React.useContext(taskContext);

const initialTasks = [
    {
        opened: false,
        containerRef: null,
        name: "VS Code",
        icon: "/desktopIcons/code.svg",
    },
    {
        opened: false,
        containerRef: null,
        name: "postman",
        icon: "/desktopIcons/postman.svg",
    },
    {
        opened: false,
        containerRef: null,
        name: "sublime",
        icon: "/desktopIcons/sublime.svg",
    }
]

const techSubFolders = [
    {
        name: `Next.jsx`,
        icon: "/tech/nextjs.png",
        windowsElement: <Gallery icon={"nextjs.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `React.js`,
        icon: "/tech/react.png",
        windowsElement: <Gallery icon={"react.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `Redux.js`,
        icon: "/tech/redux.svg",
        windowsElement: <Gallery icon={"redux.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `fastApi.py`,
        icon: "/tech/fastapi.svg",
        windowsElement: <Gallery icon={"fastapi.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `Node.js`,
        icon: "/tech/node.png",
        windowsElement: <Gallery icon={"node.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `MySQL.png`,
        icon: "/tech/mysql.svg",
        windowsElement: <Gallery icon={"mysql.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `main.py`,
        icon: "/tech/python.svg",
        windowsElement: <Gallery icon={"python.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `index.js`,
        icon: "/tech/js.png",
        windowsElement: <Gallery icon={"js.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `styles.css`,
        icon: "/tech/css.png",
        windowsElement: <Gallery icon={"css.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `Java.class`,
        icon: "/tech/java-4.svg",
        windowsElement: <Gallery icon={"java-4.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `main.cpp`,
        icon: "/tech/cpp.png",
        windowsElement: <Gallery icon={"cpp.png"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `.gitignore`,
        icon: "/tech/git.svg",
        windowsElement: <Gallery icon={"git.svg"} />,
        onDesktop: false,
        link: "/"
    },
    {
        name: `adobe.ai`,
        icon: "/tech/ai.svg",
        windowsElement: <Gallery icon={"ai.svg"} />,
        onDesktop: false,
        link: "/"
    },

]

const projectsSubFolders = project.map((item, idx) => {
    return ({
        name: `${item.name}.exe`,
        icon: "/desktopIcons/chrome.svg",
        windowsElement: <WorkCard {...item} key={"work" + idx} />,
        onDesktop: false,
        link: "/"
    })
});

// const projectsSubFolders = [
//     {
//         name: "Well-Being.exe",
//         icon: "chrome.svg",
//         windowsElement: <MySelf />,
//         onDesktop: false,
//         link: "/"
//     },
//     {
//         name: "Well-Being.exe",
//         icon: "chrome.svg",
//         windowsElement: <MySelf />,
//         onDesktop: false,
//         link: "/"
//     },
//     {
//         name: "Well-Being.exe",
//         icon: "chrome.svg",
//         windowsElement: <MySelf />,
//         onDesktop: false,
//         link: "/"
//     },
// ]

export const Folders = [
    {
        link: "/",
        onDesktop: true,
        windowsElement: <FolderStructure subFolders={projectsSubFolders} />,
        name: "Projects",
        icon: "/desktopIcons/folder.png"
    },
    {
        link: "/",
        onDesktop: true,
        windowsElement: <FolderStructure subFolders={techSubFolders} />,
        name: "TechStack",
        icon: "/desktopIcons/folder.png"
    },
    {
        link: "/",
        onDesktop: true,
        windowsElement: <SongPlayer />,
        name: "Spotify",
        icon: "/desktopIcons/spotify.png"
    },
    {
        link: "/",
        subFolder: [{}],
        onDesktop: true,
        windowsElement: <MySelf />,
        name: "MySelf.txt",
        icon: "/desktopIcons/notebook.png"
    },
    {
        link: "/resume.pdf",
        onDesktop: true,
        windowsElement: <MySelf />,
        name: "Resume",
        icon: "/desktopIcons/resume.png"
    },
    {
        link: "/",
        subFolder: [{}],
        onDesktop: true,
        windowsElement: <Terminal />,
        name: "Terminal",
        icon: "/desktopIcons/terminal.png",
    },
    {
        link: "https://www.linkedin.com/in/divyakumarbaid",
        onDesktop: true,
        windowsElement: <Terminal />,
        name: "LinkedIn",
        icon: "/desktopIcons/linkedin.svg"
    },
    {
        link: "/",
        subFolder: [{}],
        onDesktop: true,
        windowsElement: <Contact />,
        name: "Contact",
        icon: "/desktopIcons/gmail.svg"
    },
    {
        link: "https://github.com/DivyaKumarBaid",
        onDesktop: true,
        windowsElement: <Terminal />,
        name: "Github",
        icon: "/desktopIcons/github.svg"
    },
    ...projectsSubFolders,
    ...techSubFolders
]


export const TaskBarContextProvider = ({ children }) => {

    const [tasks, setTasks] = React.useState(initialTasks);
    const [folderOpen, setFolderOpen] = React.useState(Folders.map(item => false));
    const [folderOpenZindex, setFolderOpenZindex] = React.useState(Folders.map(item => 150));
    const [loggedIn, setLoggedIn] = React.useState(false);

    return (
        <taskContext.Provider value={{ loggedIn, setLoggedIn, tasks, setTasks, folderOpen, setFolderOpen, folderOpenZindex, setFolderOpenZindex }}>
            {children}
        </taskContext.Provider>
    )
}
