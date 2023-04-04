import React from 'react'

const onDesktop = ["Projects", "spotify.exe", "MySelf.txt", "Resume.pdf", "Terminal", "LinkedIn.exe", "Github.exe", "Contact.exe"]
const helpCommands = ["ls - Shows folders on desktop", "ping - Returns pong", "clear / cls - clear the commands"]

export const Terminal = () => {

    const [commands, setCommands] = React.useState([
        {
            user: false,
            error: false,
            text: ["Welcome to Ubuntu 20.04 LTS (GNU/Linux 5.10.16.3-microsoft-standard-WSL2 x86_64)"]
        },
        {
            user: false,
            error: false,
            text: ["* Documentation:  To know commands,type help"]
        },
        {
            user: false,
            error: false,
            text: ["* Support:        https://divyakrbaid.tech"]
        },
        {
            user: false,
            error: false,
            text: [" "]
        },
    ]);
    const [input, setInput] = React.useState();
    const bottomRef = React.useRef(null);

    React.useEffect(() => {
        bottomRef.current.scrollIntoView({ behavior: "smooth" })
    }, [commands])

    const handleKeys = (e) => {
        if (e.key === "Enter") {
            setCommands(old => [...old, { user: true, error: false, text: [input] }]);
            switch (input) {
                case "help":
                    setCommands(old => [...old, {
                        user: false,
                        error: false,
                        text: helpCommands
                    }]);
                    break;
                case "clear":
                    setCommands([]);
                    break;
                case "cls":
                    setCommands([]);
                    break;
                case "ping":
                    setCommands(old => [...old, { user: false, error: false, text: ["pong"] }]);
                    break;
                case "ls":
                    setCommands(old => [...old, {
                        user: false,
                        error: false,
                        text: onDesktop
                    }]);
                    break;
                default:
                    setCommands(old => [...old, { user: false, error: true, text: ["Wrong Command, type help to know more"] }]);
            }
            setInput("");
        }
    }

    return (
        <div className='w-[100%] h-[100%] overflow-auto p-4 text-xs text-slate-100 tracking-widest font-["Source_Code_Pro"] leading-5' onClick={() => document.getElementById("terminalInput").focus()} >
            {/* <ByDefault /> */}
            <div className="typeTerminal flex flex-col max-h-[100%] justify-start items-start">
                {commands.map((item, idx) => {
                    return (
                        <div key={idx}>
                            {item.user && <span className='!text-[rgb(0,255,0)]'>dkb2001@DivyaKrBaid:~$&nbsp;</span>}
                            <span className={`${item.error && "!text-[rgb(255,61,61)] font-bold"}`}>{item.text.map((ele, i) => (<><span key={i}>
                                {ele}
                            </span><br /></>))}</span>
                        </div>
                    )
                })}
                <div className='flex items-center pb-[25%]'>
                    <span className='!text-[rgb(0,255,0)]'>dkb2001@DivyaKrBaid:~$</span>
                    <input
                        type="text"
                        id="terminalInput"
                        className='w-[100%] tracking-widest '
                        autoFocus={true}
                        value={input}
                        onKeyDown={handleKeys}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    )
}
