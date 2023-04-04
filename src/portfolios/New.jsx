import React from "react"
import Head from "next/head";
import { TaskBarContextProvider } from "../context/TaskBarContext";
import { UpperTaskBar } from "../NewComponents/UpperTaskBar";
import { Desktop } from "../NewComponents/Desktop";
import { TaskBar } from "../NewComponents/TaskBar";
import { Login } from "../NewComponents/Login";

export default function New() {
    const [loggedInNew, setLoggedInNew] = React.useState(false);
    const [onceClicked, setClicked] = React.useState(true);
    return (
        <>
            <Head>
                <title>Divyakr Baid - Developer</title>
                <meta name="description" content="Personal portfolio of Divyakr Baid, a developer specializing in web and mobile technologies." />
                <meta name="keywords" content="developer, portfolio, web development, mobile development, programming" />
                <meta name="author" content="Divyakr Baid" />
                <link rel="canonical" href="https://divyakrbaid.tech" />
                <meta property="og:title" content="Divyakr Baid - Developer" />
                <meta property="og:description" content="Personal portfolio of Divyakr Baid, a developer specializing in web and mobile technologies." />
                <meta property="og:image" content="https://i.postimg.cc/ZqcP1LJQ/divyakrbaid.png" />
                <meta property="og:url" content="https://divyakrbaid.tech" />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Divyakr Baid - Developer" />
                <meta name="twitter:description" content="Personal portfolio of Divyakr Baid, a developer specializing in web and mobile technologies." />
                <meta name="twitter:image" content="https://i.postimg.cc/ZqcP1LJQ/divyakrbaid.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/assets/Logo.png" />
            </Head>
            <div className="App2 min-w-[100vw] min-h-[100vh] bg-black">
                <TaskBarContextProvider>
                    {loggedInNew ?
                        <div className="desktop font-['DM_Sans']">
                            <UpperTaskBar setLoggedIn={setLoggedInNew} />
                            <Desktop />
                            <TaskBar />
                        </div> :
                        <Login setLoggedIn={setLoggedInNew} onceClicked={onceClicked} setClicked={setClicked} />}
                </TaskBarContextProvider>
            </div>
        </>
    )
}
